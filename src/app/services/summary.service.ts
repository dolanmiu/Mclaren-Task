import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Rx';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';

interface Aggregate {
    patient: Patient;
    summary: PatientActivitySummary[];
}

interface PatientWorkoutData {
    patient: Patient;
    score: number;
}

@Injectable()
export class SummaryService {
    private aggregation$: Observable<Aggregate>;
    private summary$: Observable<PatientWorkoutData[]>;

    constructor(private patientsService: PatientsService, private activitiesService: ActivitiesService) {
        // Aggregation combines the summary and the patient details together
        // Does some filtering too
        this.aggregation$ = this.patientsService.fetchPatients()
            .filter((patient) => patient.age >= 20 && patient.age <= 40)
            .flatMap((patient) => {
                return this.patientsService.fetchPatientSummary(patient.id)
                    .toArray()
                    .map((summary) => {
                        return { patient, summary };
                    });
            });

        this.summary$ = this.aggregation$.flatMap((aggregate) => {
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

    public get Summary$(): Observable<PatientWorkoutData[]> {
        return this.summary$;
    }

    private getScoreFromActivity(name: string, activities: Activity[]): number {
        const activity = activities.find((a) => {
            return a.activity === name;
        });

        return activity.score;
    }

}
