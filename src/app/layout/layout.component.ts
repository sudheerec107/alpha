import { Component, OnInit, ViewEncapsulation, Optional, ViewChild, AfterViewInit }
from '@angular/core';
import { AppState } from './app.service';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'layout',
    encapsulation: ViewEncapsulation.None,
    template: require('./layout.component.html')
})

export class LayoutComponent implements AfterViewInit {
    public isDarkTheme: boolean = false;
    public lastDialogResult: string;
    public progress: number = 0;
    @ViewChild('sidenav') public sidenav: any;

    constructor(private _router: Router, private _dialog: MdDialog, private _snackbar: MdSnackBar) {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    public ngAfterViewInit() {
        if (screen.width > 1000) {
            this.sidenav.toggle();
        }
    }

    public logout() {
        this._router.navigate(['/login']);
    }
}
