import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ENVIRONMENT } from '../../../../environment/environment';

@Injectable({
    providedIn: 'root',
})
export class ProductionGuard {
    constructor(private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if ('PRODUCTION' === ENVIRONMENT.env) {
            return this.router.parseUrl('/');
        }

        return true;
    }
}
