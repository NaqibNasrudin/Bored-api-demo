import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { finalize } from 'rxjs';
import { HomeService } from './service/home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    activity!: ActivityModel;
    isLoading = false;

    form = this.fb.group({
        activity: [''],
    });

    constructor(
        private homeService: HomeService,
        private fb: FormBuilder,
    ) {}

    callBoredApi(): void {
        this.isLoading = true;
        const key = this.form.controls.activity.value;
        const observable = key ? this.homeService.getActivityByKey(key) : this.homeService.getRandomActivity();

        observable.pipe(finalize(() => (this.isLoading = false))).subscribe({
            next: (response) => {
                this.activity = response;
            },
            error: (error) => {
                console.error('Error fetching activity:', error);
            },
        });
    }
}

export interface ActivityModel {
    activity: string;
    type: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;
}
