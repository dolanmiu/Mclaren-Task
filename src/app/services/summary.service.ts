import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';

interface Aggregate {
    patient: Patient;
    summary: PatientActivitySummary[];
}

@Injectable()
export class SummaryService {
    private summary$: Observable<PatientWorkoutData[]>;

    constructor(private patientsService: PatientsService, private activitiesService: ActivitiesService) {
        const aggregation$ = this.createAggregation$();
        this.summary$ = this.createSummary$(aggregation$);
    }

    public get Summary$(): Observable<PatientWorkoutData[]> {
        return this.summary$;
    }

    private createSummary$(aggregation$: Observable<Aggregate>): Observable<PatientWorkoutData[]> {
        // This is where it calculates the score per user
        return aggregation$.flatMap((aggregate) => {
            return this.activitiesService.Activities$
                .toArray()
                .map((activities) => {
                    const scores = aggregate.summary.map((data) => {
                        return this.getScoreFromActivity(data.activity, activities) * data.minutes;
                    });

                    return {
                        patient: aggregate.patient,
                        score: _.sum(scores)
                    };
                });
        }).toArray();
    }

    private createAggregation$(): Observable<Aggregate> {
        // Aggregation combines the summary and the patient details together
        // Does some filtering too
        return this.patientsService.fetchPatients()
            .filter((patient) => patient.age >= 20 && patient.age <= 40)
            .flatMap((patient) => {
                return this.patientsService.fetchPatientSummary(patient.id)
                    .toArray()
                    .map((summary) => {
                        return { patient, summary };
                    });
            });
    }

    private getScoreFromActivity(name: string, activities: Activity[]): number {
        // I made a 'score' because it's an easier quantitative value for future usage and calculations.
        const activity = activities.find((a) => {
            return a.activity === name;
        });

        return activity.score;
    }
}
