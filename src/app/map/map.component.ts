import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'map',
    styles: [`
  `],
    template: require('./map.component.html')
})
export class MapComponent {
    public zoom: number = 8;
    public lat: number = 51.673858;
    public lng: number = 7.815982;
    public clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }

}
