import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { NoContentComponent } from './no-content';
import { CanActivateGuard } from './can.activate.guard';

export const ROUTES: Routes = [
    {
        path: 'app', component: LayoutComponent,
        children: [
            { path: 'map', loadChildren: './map#MapModule' },
            { path: 'nocontent', component: NoContentComponent },

            { path: '**', redirectTo: 'map', pathMatch: 'full' },
        ],
        canActivate: [CanActivateGuard]
    },
    {path: 'login', loadChildren: './login#LoginModule' },
    { path: '**', redirectTo: '/app/map', pathMatch: 'full' }
];
