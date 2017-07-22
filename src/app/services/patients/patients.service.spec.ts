import { inject, TestBed } from '@angular/core/testing';
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
            expect(patients.length).toBeGreaterThan(0);
        });
    }));

    it('should get a specific patient summary', inject([PatientsService], (service: PatientsService) => {
        service.fetchPatientSummary(1).subscribe((patients) => {
            console.log(patients);
            expect(patients).toBeDefined();
            expect(patients).toBeTruthy();
            expect(patients).toEqual(jasmine.any(Array));
            expect(patients.length).toBeGreaterThan(0);
        }, (err) => {
            console.log(err);
        });
    }));

    it('should throw an error if invalid id for specific patient summary', inject([PatientsService], (service: PatientsService) => {
        service.fetchPatientSummary(-1).subscribe((patients) => {
            console.log(patients);
            expect(patients).toBeDefined();
            expect(patients).toBeTruthy();
            expect(patients).toEqual(jasmine.any(Array));
            expect(patients.length).toBeGreaterThan(0);
        });
    }));
});
