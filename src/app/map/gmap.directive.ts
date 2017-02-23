import { Directive } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Marker } from './Marker';
import { GlobalService } from '../global.service';
// import * as Marker1 from 'map-icons';
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
                icon: {
                    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,' +
                          '-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                    fillColor: '#00CCBB',
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0
                },
                label: item.label,
                // labelOrigin: new google.maps.Point(0,-122)
            });

            google.maps.event.addListener(singleMarker, 'click', () => {
                infowindow.setContent('Info window');
                infowindow.open(this.map, singleMarker);
            });
            singleMarker.setMap(this.map);
        }
    }
}
