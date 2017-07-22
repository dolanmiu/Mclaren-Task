import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { SummaryService } from './summary.service';

describe('SummaryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SummaryService],
            imports: [
                HttpModule
            ]
        });
    });

    it('should be created', inject([SummaryService], (service: SummaryService) => {
        expect(service).toBeTruthy();
    }));
});
