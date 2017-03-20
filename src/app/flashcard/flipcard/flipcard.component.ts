import {
    Component,
    OnInit, ViewEncapsulation
} from '@angular/core';


let $ = require('jquery');
require('../../../assets/owl-carousel/owl.carousel.min.js');

@Component({
    selector: 'flip',
    styleUrls: ['./flipcard.component.scss'],
    templateUrl: './flipcard.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class FlipComponent {
    constructor() {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 5,
                        nav: true,
                        loop: false,
                        singleItem:true
                    }
                }
            });
        });

    }

}
