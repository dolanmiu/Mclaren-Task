import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PatientsService {

    constructor(private http: Http) { }

    public fetchPatients(): Observable<any> {
        return this.http.get('assets/mock-api-data/patients.json');
    }

}
