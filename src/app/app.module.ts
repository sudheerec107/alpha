import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { NgModule, ApplicationRef } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { GlobalService } from './global.service';
import { LayoutComponent } from './layout';
import { AboutComponent } from './about';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
        MaterialModule.forRoot()
    ],
    providers: [
        ENV_PROVIDERS,
        GlobalService
    ]
})

export class AppModule {
}
