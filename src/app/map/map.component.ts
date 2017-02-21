import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'about',
    styles: [`
  `],
    template: require('./map.component.html')
})
export class MapComponent {
    public zoom: number = 8;
    public lat: number = 51.673858;
    public lng: number = 7.815982;
    public markers: any[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            label: 'A',
            draggable: true
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            label: 'B',
            draggable: false
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            label: 'C',
            draggable: true
        }
    ];
    public clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }

}
