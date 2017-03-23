import { Injectable } from '@angular/core';
import { Marker } from './map/Marker';

@Injectable()
export class GlobalService {
    public markers: Marker[] = [
        {
            lat: 12.96,
            lng: 77.690,
            label: 'A',
            draggable: true
        },
        {
            lat: 12.965,
            lng: 77.685,
            label: 'B',
            draggable: false
        },
        {
            lat: 12.9657,
            lng: 77.68,
            label: 'C',
            draggable: true
        }
    ];
}


