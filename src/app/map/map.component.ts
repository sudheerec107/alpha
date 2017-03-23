import {
    Component,
    OnInit, ViewEncapsulation
} from '@angular/core';



@Component({
    selector: 'map',
    styles: [require('./map.component.scss')],
    template: require('./map.component.html')

})
export class MapComponent {
    public lat: number = 12.96;
    public lng: number = 77.67;
    public zoom: number = 15;
    public styles = [
        { stylers: [{ visibility: 'simplified' }] },
        { elementType: 'labels', stylers: [{ visibility: 'off' }] }
    ]

    public clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }


}
