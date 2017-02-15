import { Component, ViewEncapsulation } from '@angular/core';
declare var $;

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    styles: [require('../scss/material-theme.scss')],
    template: require('./app.component.html')
})

export class AppComponent {
}
