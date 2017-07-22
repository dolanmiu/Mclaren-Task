import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ActivitiesService } from './activities.service';

describe('ActivitiesService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ActivitiesService],
            imports: [
                HttpModule
            ]
        });
    });

    it('should be created', inject([ActivitiesService], (service: ActivitiesService) => {
        expect(service).toBeTruthy();
    }));

    it('should get all activities', inject([ActivitiesService], (service: ActivitiesService) => {
        service.fetchActivities().subscribe((activities) => {
            expect(activities).toBeDefined();
            expect(activities).toBeTruthy();
            expect(activities).toEqual(jasmine.any(Array));
            expect(activities.length).toBeGreaterThan(0);
        });
    }));
});
