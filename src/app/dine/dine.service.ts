import { Injectable } from '@angular/core';
// private service shored with only map module MapService
@Injectable()
export class DineService {
    public nearbyDines: any[] = [];
    constructor() {
        this.nearbyDines = [
            {
                title: 'Title',
                address: 'Sample address',
                itemName: 'Food Name'
            },
            {
                title: 'Title1',
                address: 'Sample address1',
                itemName: 'Food Name1'
            }
        ];
    }
}
