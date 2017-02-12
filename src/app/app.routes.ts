import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const ROUTES: Routes = [
        {path: 'app', component: LayoutComponent,
        children: [
        { path: 'map', loadChildren: './map#MapModule'},
            { path: '**', redirectTo: 'map', pathMatch: 'full' },
        ]
    },
    { path: '**', redirectTo: '/app', pathMatch: 'full' }
];
