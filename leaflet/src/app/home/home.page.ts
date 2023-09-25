import { Component } from '@angular/core';
import * as L from 'leaflet'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  baseMaps: any;

  constructor() {}
  // ngOnInit(){
    
  // }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([35.76943, -580081],10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([-34.9221, 138.6227]).addTo(this.map)
    .bindPopup('This Is My Info Window.')
    .openPopup();

    // Tambahkan layer OpenStreetMap
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Tambahkan layer Esri World Imagery
    const esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 19,
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

    // Tambahkan layer Google Maps
    const googleMaps = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 19,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    });

    // Inisialisasi daftar layer base map
    this.baseMaps = {
      'OpenStreetMap': openStreetMap,
      'Esri World Imagery': esriWorldImagery,
      'Google Maps': googleMaps
    };

    // Tambahkan layer default ke peta
    openStreetMap.addTo(this.map);

    // Tambahkan Layer Control
    L.control.layers(this.baseMaps).addTo(this.map);
  }
    
  }
