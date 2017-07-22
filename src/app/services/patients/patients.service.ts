import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PatientsService {

    constructor(private http: Http) { }

    public fetchPatients(): Observable<Patient[]> {
        return this.http.get('assets/mock-api-data/patients.json')
            .map((res) => res.json() as Patient[]);
    }

    public fetchPatientSummary(id: number): Observable<PatientActivitySummary[]> {
        return this.http.get(`assets/mock-api-data/patients/${id}/summary.json`)
            .map((res) => res.json() as PatientActivitySummary[]);
    }

}
