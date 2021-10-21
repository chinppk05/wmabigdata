var map = L.map('map', {
    'center': [14.724618, 100.584682],
    'zoom': 8,
    'layers': [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        'attribution': 'Map data &copy; OpenStreetMap contributors'
      })
    ]
  });
  
  var controlLayers = L.control.layers().addTo(map);
  
  
  var url = 'https://rawgit.com/johan/world.geo.json/master/countries.geo.json';
  var cpyriver = 'geo/cpy_river.geojson'
  var tcriver = 'geo/tachin_river.geojson';
  var cpybasin = 'geo/cpy_basin.geojson';
  var tcbasin = 'geo/tachin_basin.geojson';
  
  /*
  $.getJSON(url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 0,
          'fillColor': 'yellow',
          'fillOpacity': 1
        }
      }
    }).addTo(map);
    controlLayers.addOverlay(geojsonLayer, 'GeoJSON layer 1');
  });
  
  $.getJSON(url, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 1,
          'color': 'red',
          'fillOpacity': 0
        }
      }
    }).addTo(map);
    controlLayers.addOverlay(geojsonLayer, 'GeoJSON layer 2');
  });

  */
  
  $.getJSON(cpyriver, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 5,
          'color': 'blue',
          'fillOpacity': 0
        }
      }
    }).addTo(map).bindPopup('แม่น้ำเจ้าพระยา');
    controlLayers.addOverlay(geojsonLayer, 'แม่น้ำเจ้าพระยา');
  });
  
  $.getJSON(tcriver, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 5,
          'color': 'blue',
          'fillOpacity': 1
        }
      }
    }).addTo(map).bindPopup('แม่น้ำท่าจีน');
    controlLayers.addOverlay(geojsonLayer, 'แม้น้ำท่าจีน');
  });

  $.getJSON(cpybasin, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 1,
          'color': 'black',
          'fillColor': 'blue',
          'fillOpacity': 0.2
        }
      }
    }).addTo(map).bindPopup('พื้นที่ลุ่มแม่น้ำเจ้าพระยา');
    controlLayers.addOverlay(geojsonLayer, 'พื้นที่ลุ่มแม่น้ำเจ้าพระยา');
  });

  $.getJSON(tcbasin, function (geojson) {
    var geojsonLayer = L.geoJson(geojson, {
      style: function (feature) {
        return {
          'weight': 1,
          'color': 'black',
          'fillColor': 'yellow',
          'fillOpacity': 0.2
        }
      }
    }).addTo(map).bindPopup('พื้นที่ลุ่มแม่น้ำท่าจีน');
    controlLayers.addOverlay(geojsonLayer, 'พื้นที่ลุ่มแม่น้ำท่าจีน');
  });