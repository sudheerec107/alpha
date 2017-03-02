import { Directive } from '@angular/core';
import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';
import { Marker } from './Marker';
import { GlobalService } from '../global.service';
// import * as Marker1 from 'map-icons';
declare var google;

//require('assets/map-icons/js/map-icons.js');

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
                    path: 'M24-28.3c-.2-13.3-7.9-18.5-8.3-18.7l-1.2-.8-1.2.8c-2 1.4-4.1 2-6.1 2-3.4 0-5.8-1.9-5.9-1.9l-1.3-1.1-1.3 1.1c-.1.1-2.5 1.9-5.9 1.9-2.1 0-4.1-.7-6.1-2l-1.2-.8-1.2.8c-.8.6-8 5.9-8.2 18.7-.2 1.1 2.9 22.2 23.9 28.3 22.9-6.7 24.1-26.9 24-28.3z',
                    fillColor: '#00CCBB',
                    fillOpacity: 1,
                    strokeColor: '',
                    strokeWeight: 0
                },
               map_icon_label: '<span class="map-icon map-icon-grocery-or-supermarket"></span>'
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
