/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  schema: true,
  attributes: {

    content: {
      type: 'text'
    },

    type: {
      type: 'string'
    }
  }
};

