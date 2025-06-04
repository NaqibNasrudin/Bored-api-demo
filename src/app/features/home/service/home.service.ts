import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityModel } from '../home.component';

@Injectable({
    providedIn: 'root',
})
export class HomeService {
    private apiRoute = 'https://bored.api.lewagon.com/api/activity';

    constructor(private http: HttpClient) {}

    getRandomActivity(): Observable<ActivityModel> {
        return this.http.get<ActivityModel>(this.apiRoute);
    }

    getActivityByKey(body: string): Observable<ActivityModel> {
        const params = { key: body };
        return this.http.get<ActivityModel>(this.apiRoute, { params });
    }
}
