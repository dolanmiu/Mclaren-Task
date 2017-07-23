import { async, inject, TestBed } from '@angular/core/testing';
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

    it('should get all activities', async(inject([ActivitiesService], (service: ActivitiesService) => {
        service.Activities$.subscribe((activity) => {
            expect(activity).toBeDefined();
            expect(activity).toBeTruthy();
        });
    })));
});
