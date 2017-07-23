import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SummaryService } from "./services/summary.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private summary$: Observable<any>;

    constructor(summaryService: SummaryService) {
        this.summary$ = summaryService.Summary$;
    }
}
