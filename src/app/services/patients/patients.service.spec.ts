import { async, inject, TestBed } from '@angular/core/testing';
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

    it('should get all patients', async(inject([PatientsService], (service: PatientsService) => {
        service.fetchPatients().subscribe((patients) => {
            expect(patients).toBeDefined();
            expect(patients).toBeTruthy();
        });
    })));

    it('should get a specific patient summary', async(inject([PatientsService], (service: PatientsService) => {
        service.fetchPatientSummary(1).subscribe((patient) => {
            expect(patient).toBeDefined();
            expect(patient).toBeTruthy();
        });
    })));

    it('should throw an error if invalid id for specific patient summary', async(inject([PatientsService], (service: PatientsService) => {
        service.fetchPatientSummary(-1).subscribe((patients) => {
        }, (err) => {
            expect(err).toBeDefined();
            expect(err.status).toEqual(404);
        });
    })));
});
