import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class CanActivateGuard implements CanActivate {
    private isUserloggedIn: boolean = true;
    constructor(private _router: Router) { }
    public canActivate() {
        // condition check for user logged in
        if (this.isUserloggedIn) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}
