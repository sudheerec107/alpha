import {
    Component,
    OnInit, ViewEncapsulation
} from '@angular/core';




@Component({
    selector: 'flip',
    styleUrls: ['./flipcard.component.scss'],
    templateUrl: './flipcard.component.html',
    encapsulation: ViewEncapsulation.None,
    inputs: ['data']
})
export class FlipComponent {
    public data;
    constructor() {

    }

}
