import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ItemData } from './item-data';
import { ItemService } from './item.service';

let $ = require('jquery');
require('assets/owl-carousel/owl.carousel.min.js');
require('assets/simple-cart/simpleCart.min.js');

@Component({
    selector: 'vendor',
    styleUrls: ['./vendor.css'],
    templateUrl: './carousel.html',
    encapsulation: ViewEncapsulation.None,
    providers: [ItemService]
})
export class VendorComponent implements OnInit {
    items: ItemData[];

    getItemList(): void {
        this.itemService.getItems().then(items => this.items = items);
    }
    ngOnInit(): void {
        this.getItemList();
    }
    name = 'Angular';
    constructor(private itemService: ItemService) {
        $(document).ready(function () {
            console.log($('.owl-carousel').owlCarousel({
                loop: true,
                margin: 5,
                nav: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 3
                    },
                    1000: {
                        items: 5
                    }
                }
            }));
        });

    }

}
