import {
    Component,
    OnInit, ViewEncapsulation
} from '@angular/core';


let $ = require('jquery');
require('../../../assets/owl-carousel/owl.carousel.min.js');

@Component({
    selector: 'carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent {
    constructor() {
        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                items: 1,
                onInitialize: function (event) {
                    if ($('.owl-carousel .item').length <= 1) {
                        this.settings.loop = false;
                    }
                }
            })
        });

    }

}
