/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  index: index,
  dashboard: dashboard
};

function index(req, res) {
  res.redirect('/dashboard');
}

function dashboard(req, res) {
  Event.find(function(err, events) {
    console.log(events);
    //TODO handle error
    res.view({ events: events });
  });
}
