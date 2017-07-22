import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';
import { SummaryService } from './summary.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        PatientsService,
        ActivitiesService,
        SummaryService
    ]
})
export class ServicesModule { }
