import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapService } from './map.service';
import { routes } from './map.routes';
import { MapComponent } from './map.component';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';

@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        AgmCoreModule.forRoot()
    ],
    providers: [
        MapService
    ]
})
export class MapModule {
    public static routes = routes;
}
