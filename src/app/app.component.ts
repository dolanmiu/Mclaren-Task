import { Component } from '@angular/core';

import { PatientsService } from './services/patients/patients.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(patientsService: PatientsService) {

    }
}
