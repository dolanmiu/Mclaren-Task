import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { SummaryService } from './services/summary.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public searchSummary$: Observable<PatientWorkoutData[]>;
    public summary$: Observable<PatientWorkoutData[]>;
    public searchQuery: string;

    constructor(private summaryService: SummaryService) {
        this.summary$ = summaryService.Summary$;
    }

    public sortByScore(): void {
        this.summary$ = this.summaryService.Summary$.map((summaries) => {
            return summaries.sort((a, b) => {
                return a.score > b.score ? 1 : -1;
            });
        });
    }

    public sortById(): void {
        this.summary$ = this.summaryService.Summary$.map((summaries) => {
            return summaries.sort((a, b) => {
                return a.patient.id > b.patient.id ? 1 : -1;
            });
        });
    }

    public sortByAge(): void {
        this.summary$ = this.summaryService.Summary$.map((summaries) => {
            return summaries.sort((a, b) => {
                return a.patient.age > b.patient.age ? 1 : -1;
            });
        });
    }

    public sortByName(): void {
        this.summary$ = this.summaryService.Summary$.map((summaries) => {
            return summaries.sort((a, b) => {
                return a.patient.name > b.patient.name ? 1 : -1;
            });
        });
    }

    public searchChange(searchQuery: any): void {
        const lowercaseSearchQuery = searchQuery.toLowerCase();
        this.searchSummary$ = this.summaryService.Summary$.map((summaries) => {
            return summaries.filter((data) => {
                if (data.score.toString().includes(lowercaseSearchQuery)) {
                    return true;
                }

                if (data.patient.id.toString().includes(lowercaseSearchQuery)) {
                    return true;
                }

                if (data.patient.age.toString().includes(lowercaseSearchQuery)) {
                    return true;
                }

                if (data.patient.name.toString().toLowerCase().includes(lowercaseSearchQuery)) {
                    return true;
                }
            });
        });
    }
}
