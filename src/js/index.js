import { fetchGeojson } from './fetchData';
import { createGeojsonLayer } from './createLayers';
import mapboxgl from 'mapbox-gl';

fetchGeojson('./data/export.geojson').then(data => {
  console.log(data);
  const layer = createGeojsonLayer(data);
  map.on('load', () => {
    map.addLayer(layer);
  });
});

mapboxgl.accessToken =
  'pk.eyJ1IjoibGFubHVnYXIiLCJhIjoiY2pyaGw5enhwMWZ5dTQ0cno0c3hzMThzYSJ9.XEWRXoTd9FY7ok7ClxtxMg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [13.421954, 52.509857],
  zoom: 3
});
