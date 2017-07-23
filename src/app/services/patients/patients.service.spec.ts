import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

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
        });
    }));

    it('should get a specific patient summary', inject([PatientsService], (service: PatientsService) => {
        service.fetchPatientSummary(1).subscribe((patient) => {
            expect(patient).toBeDefined();
            expect(patient).toBeTruthy();
            expect(patient).toEqual(jasmine.any(Array));
        });
    }));

    it('should throw an error if invalid id for specific patient summary', fakeAsync(() => {
        inject([PatientsService], (service: PatientsService) => {
            expect(() => {
                service.fetchPatientSummary(-1).subscribe((patients) => {
                });
            }).toThrow();
        });
    }));
});
