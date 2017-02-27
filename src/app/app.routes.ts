import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';
import { VendorComponent } from './vendor';
import { CanActivateGuard } from './can.activate.guard';

export const ROUTES: Routes = [
    {
        path: 'app', component: LayoutComponent,
        children: [
            { path: 'map', loadChildren: './map#MapModule' },
            { path: 'dines', loadChildren: './dine#DineModule' },
            { path: 'vendor', component: VendorComponent },

            { path: '**', redirectTo: 'map', pathMatch: 'full' },
        ],
        canActivate: [CanActivateGuard]
    },
    {path: 'login', loadChildren: './login#LoginModule' },
    { path: '**', redirectTo: '/app/map', pathMatch: 'full' }
];
