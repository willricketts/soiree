/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {
  'get /' : 'PageController.index',
  'get /dashboard': 'PageController.dashboard',
  'get /proto' : 'ProtoController.index',

  'post /event/new' : 'EventController.create'
};
