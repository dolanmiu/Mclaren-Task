import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ActivitiesService {

    constructor(private http: Http) {
    }

    public fetchActivities(): Observable<Activity[]> {
        return this.http.get('assets/mock-api-data/definitions/activities.json')
            .map((res) => res.json() as Activity[]);
    }

}
