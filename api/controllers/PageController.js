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
  res.view();
}
