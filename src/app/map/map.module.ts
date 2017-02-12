import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MapService } from './map.service';
import { routes } from './map.routes';
import { MapComponent } from './map.component';

@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        MapService
    ]
})
export class MapModule {
    public static routes = routes;
}
