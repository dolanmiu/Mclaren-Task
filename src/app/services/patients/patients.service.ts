import { Injectable } from '@angular/core';

import * as patients from 'assets/mock-api-data/patients.json';

@Injectable()
export class PatientsService {

    constructor() { }

    public fetchPatients(): void {
        console.log(patients);
    }

}
