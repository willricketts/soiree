/**
 * EventController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: index,
  show: show,
	create: create,
  update: update,
  deactivate: deactivate
};

function index(req, res) {

}

function show(req, res) {

}

function create(req, res) {
  var p = req.params.all();
  console.log(p);
  magellan.findAddress(p.addressLine1 + ' ' + p.city + ' ' + p.state, function(coords) {
    console.log(coords);
    p.latitude = coords.lat;
    p.longitude = coords.lng;

    Event.create(p, function(err, event) {
      if(err) {
        res.send(500, err);
      }
      res.send(event);
    });
  });
}

function update(req, res) {

}

function deactivate(req, res) {

}
