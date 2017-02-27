import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DineService } from './dine.service';
import { routes } from './dine.routes';
import { DineComponent } from './dine.component';
import { SingleDineComponent } from './single.dine.component';

@NgModule({
    declarations: [
        DineComponent, SingleDineComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        DineService
    ]
})
export class DineModule {
    public static routes = routes;
}
