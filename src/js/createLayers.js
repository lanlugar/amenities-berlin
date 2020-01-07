export const createGeojsonLayer = data => ({
  id: 'points',
  type: 'symbol',
  source: {
    type: 'geojson',
    data: data
  },
  layout: {
    // get the icon name from the source's "icon" property
    // concatenate the name to get an icon from the style's sprite sheet
    'icon-image': ['concat', ['get', 'icon'], '-15'],
    // get the title name from the source's "title" property
    'text-field': ['get', 'title'],
    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
    'text-offset': [0, 0.6],
    'text-anchor': 'top'
  }
});
