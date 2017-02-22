import { Directive } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Marker } from './Marker';
import { GlobalService } from '../global.service';
declare var google;

@Directive({
    selector: 'gmap-directive'
})

export class GoogleMapDirective {
    public map: any;

    constructor(private _gmapsApi: GoogleMapsAPIWrapper, private _globalService: GlobalService) {
        this._gmapsApi.getNativeMap().then((map) => {
            this.map = map;
            this.initMarkers();
        });
    }

    public fromLatLngToPoint(latLng, map) {
        let topRight = map.getProjection().fromLatLngToPoint(map.getBounds().getNorthEast());
        let bottomLeft = map.getProjection().fromLatLngToPoint(map.getBounds().getSouthWest());
        let scale = Math.pow(2, map.getZoom());
        let worldPoint = map.getProjection().fromLatLngToPoint(latLng);
        return new google.maps.Point((worldPoint.x - bottomLeft.x) * scale,
            (worldPoint.y - topRight.y) * scale);
    }

    public initMarkers() {
        let result = [];
        let infowindow: any = new google.maps.InfoWindow();
        for (let item of this._globalService.markers) {
            let singleMarker = new google.maps.Marker({
                position: {
                    lat: item.lat,
                    lng: item.lng,
                },
                label: item.label
            });

            google.maps.event.addListener(singleMarker, 'click', () => {
                infowindow.setContent('Info window');
                infowindow.open(this.map, singleMarker);
            });
            singleMarker.setMap(this.map);
        }
    }
}
