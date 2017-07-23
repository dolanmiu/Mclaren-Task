import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ActivitiesService {
    private activies$: Observable<Activity>;

    constructor(private http: Http) {
        // Moderate excersize is only half as effective as vigerous. Thats why the score is 0.5.
        // I made a 'score' because it's an easier quantitative value for future usage and calculations.
        this.activies$ = this.http.get('assets/mock-api-data/definitions/activities.json')
            .flatMap((res) => res.json() as Activity[])
            .map((activity) => {
                switch (activity.intensity) {
                    case 'moderate':
                        activity.score = 1;
                        break;
                    case 'vigorous':
                        activity.score = 0.5;
                        break;
                    default:
                        activity.score = 0;
                        break;
                }

                return activity;
            });
    }

    public get Activities$(): Observable<Activity> {
        // Made it into a property because activities won't change so we can cache.
        // Doing it like this means each request won't fire off a new HTTP request.
        return this.activies$;
    }

}
