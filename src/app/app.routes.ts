import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
    {
        path: 'app', component: LayoutComponent,
        children: [
            { path: 'map', loadChildren: './map#MapModule' },
            { path: 'nocontent', component: NoContentComponent },

            { path: '**', redirectTo: 'map', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: '/app', pathMatch: 'full' }
];
