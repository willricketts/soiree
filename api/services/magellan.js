var geotools = require('geo-tools');

module.exports = {
  findAddress: findAddress,
  findCoords: findCoords
};

function findAddress(address, callback) {
  geocode(address, function(coordinates) {
    callback(coordinates);
  });
}

function findCoords(lat, lng, callback) {
  reverseGeocode({lat: lat, lng: lng}, function(address){
    callback(address);
  });
}
