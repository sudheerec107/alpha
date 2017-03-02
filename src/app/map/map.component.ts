import {
    Component,
    OnInit
} from '@angular/core';



@Component({
    selector: 'map',
    styles: [`styles: [require('assets/map-icons/css/map-icons.css')`],
    template: require('./map.component.html')
})
export class MapComponent {
    public zoom: number = 16;
    public lat: number = 51.673858;
    public lng: number = 7.815982;
    public styles = [
			{stylers: [{ visibility: 'simplified' }]},
			{elementType: 'labels', stylers: [{ visibility: 'off' }]}
		]

    public clickedMarker(label: string, index: number) {
        console.log(`clicked the marker: ${label || index}`);
    }


}
