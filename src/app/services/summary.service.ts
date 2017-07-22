import { Injectable } from '@angular/core';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';

@Injectable()
export class SummaryService {

    constructor(private patientsService: PatientsService, private activitiesService: ActivitiesService) {

    }

}
