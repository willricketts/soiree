var geotools = require('geo-tools');

module.exports = {
  geocode: geocode,
  reverseGeocode: reverseGeocode
};

function geocode(address, callback) {
  geocode(address, function(coordinates) {
    callback(coordinates);
  });
}

function reverseGeocode(lat, lng, callback) {
  reverseGeocode({lat: lat, lng: lng}, function(address){
    callback(address);
  });
}
