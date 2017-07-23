import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PatientsService {

    constructor(private http: Http) { }

    public fetchPatients(): Observable<Patient> {
        // Caluclating age here as its easier for future calculations
        return this.http.get('assets/mock-api-data/patients.json')
            .flatMap((res) => res.json() as Patient[])
            .map((patient) => {
                patient.age = this.calculateAge(patient.birthDate);
                return patient;
            });
    }

    public fetchPatientSummary(id: number): Observable<PatientActivitySummary> {
        return this.http.get(`assets/mock-api-data/patients/${id}/summary.json`)
            .flatMap((res) => res.json() as PatientActivitySummary[]);
    }

    // Algorithm from: https://stackoverflow.com/questions/4060004/calculate-age-given-the-birth-date-in-the-format-yyyymmdd
    private calculateAge(birthdayString: string): number {
        const birthday = new Date(birthdayString);
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}
