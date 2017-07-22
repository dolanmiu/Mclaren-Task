import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';

@Injectable()
export class SummaryService {

    constructor(private patientsService: PatientsService, private activitiesService: ActivitiesService) {
        // this.patientsService.fetchPatients()
        // .flatMap((patients) => {
        //     const patients$: Observable[] = [];
        //     patients.forEach((patient) => {

        //     });

        //     Observable.forkJoin(patients$)

        //     return
        // })
    }

}
