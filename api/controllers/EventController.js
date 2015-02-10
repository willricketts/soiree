/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: create
};

function create(req, res) {
  var p = req.params.all();
  console.log(p);
  magellan.findAddress(p.addressLine1 + ' ' + p.city + ' ' + p.state, function(coords) {
    console.log(coords);
    p.latitude = coords.lat;
    p.longitude = coords.lng;

    Event.create(p, function(err, event) {
      // handle error
      res.send(event);
    });
  });
}

