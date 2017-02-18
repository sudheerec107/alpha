import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './login.router';
import { LoginComponent } from './login.component';
import { MaterialModule } from '@angular/material';

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule.forRoot(),
        RouterModule.forChild(routes),
    ]
})
export class LoginModule {
}
