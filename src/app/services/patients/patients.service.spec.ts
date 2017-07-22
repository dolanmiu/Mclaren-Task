import { inject, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PatientsService } from './patients.service';

describe('PatientsService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PatientsService],
            imports: [HttpModule]
        });
    });

    it('should be created', inject([PatientsService], (service: PatientsService) => {
        expect(service).toBeTruthy();
    }));

    it('should get all patients', inject([PatientsService], (service: PatientsService) => {
        service.fetchPatients().subscribe((patients) => {
            expect(patients).toBeDefined();
            expect(patients).toBeTruthy();
            expect(patients).toEqual(jasmine.any(Array));
            expect(patients.length).toBeGreaterThan(0);
        });
    }));
});
