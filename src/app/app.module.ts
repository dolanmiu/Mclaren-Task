import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PatientsService } from './services/patients/patients.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        PatientsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
