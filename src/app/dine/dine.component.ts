import {
    Component
} from '@angular/core';
import { DineService } from './dine.service';

@Component({
    selector: 'dine',
    template: require('./dine.component.html')
})
export class DineComponent {
    constructor(private _dineService: DineService) {
    }
}
