import {
    Component, Input
} from '@angular/core';

@Component({
    selector: 'single-dine',
    template: require('./single.dine.component.html')
})
export class SingleDineComponent {
    @Input() public dine: any;
}
