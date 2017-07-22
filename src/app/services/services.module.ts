import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { PatientsService } from './patients/patients.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        PatientsService
    ]
})
export class ServicesModule { }
