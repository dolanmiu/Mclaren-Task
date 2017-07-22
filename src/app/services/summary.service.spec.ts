import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ActivitiesService } from './activities/activities.service';
import { PatientsService } from './patients/patients.service';
import { SummaryService } from './summary.service';

describe('SummaryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SummaryService,
                PatientsService,
                ActivitiesService
            ],
            imports: [
                HttpModule
            ]
        });
    });

    it('should be created', inject([SummaryService], (service: SummaryService) => {
        expect(service).toBeTruthy();
    }));
});
