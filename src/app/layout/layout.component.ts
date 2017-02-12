import { Component, OnInit, ViewEncapsulation, Optional } from '@angular/core';
import { AppState } from './app.service';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
    selector: 'layout',
    encapsulation: ViewEncapsulation.None,
    styles: [require('../../scss/material-theme.scss')],
    template: require('./layout.component.html')
})

export class LayoutComponent {
    public isDarkTheme: boolean = false;
    public lastDialogResult: string;
    public progress: number = 0;

    constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }

    // public openDialog() {
    //     let dialogRef = this._dialog.open(DialogContent);

    //     dialogRef.afterClosed().subscribe(result => {
    //         this.lastDialogResult = result;
    //     });
    // }

    public showSnackbar() {
        this._snackbar.open('YUM SNACKS', 'CHEW');
    }
}

// @Component({
//     template: `
//     <p>This is a dialog</p>
//     <p>
//       <label>
//         This is a text box inside of a dialog.
//         <input #dialogInput>
//       </label>
//     </p>
//     <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
//   `,
// })

// export class DialogContent {
//     constructor( @Optional() public dialogRef: MdDialogRef<DialogContent>) { }
// }
