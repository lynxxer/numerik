import { environment } from '../../environments/environment';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 40.7209;
  lng =  -73.9978;

  constructor() { }

  ngOnInit() { 
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1IjoiZW1weXIiLCJhIjoiY2tjY2NsaTE1MDNnMzJ1bWNuYWlueWJ6ZiJ9.MW554QY84VHDqRVfBCJAAw');
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 7.8,
      center: [21, 42.450],
  });

        // disable map rotation using right click + drag
      this.map.dragRotate.disable();
      
      // disable map rotation using touch rotation gesture
      this.map.touchZoomRotate.disableRotation();

      // Add map controls
      this.map.addControl(new mapboxgl.NavigationControl());
      this.map.doubleClickZoom.disable();
      
      const marker = new mapboxgl.Marker()
        .setLngLat([21, 42.450])
        .setPopup(new mapboxgl.Popup({ offset: 50 }) // add popups
          .setHTML('<h6><a href="#"><center>' + 'Kliko ketu per te shikuar banesen!' + '</center></a></h6>'))
        .addTo(this.map);

        const marker2 = new mapboxgl.Marker()
        .setLngLat([21.220, 42.650])
        .addTo(this.map);

        const marker3 = new mapboxgl.Marker()
        .setLngLat([21.432, 42.380])
        .addTo(this.map);

        const marker4 = new mapboxgl.Marker()
        .setLngLat([21, 42.510])
        .addTo(this.map);
  }
}
