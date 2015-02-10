/**
* Event.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  connection: 'mongo',
  schema: true,
  attributes: {
    title: {
      type: 'string',
      required: true
    },

    description: {
      type: 'text',
      required: true
    },

    latitude: {
      type: 'float',
      required: true
    },

    longitude: {
      type: 'float'
    },

    owner: {
      model: 'user'
    },

    startTime: {
      type: 'datetime',
      required: true
    },

    duration: {
      type: 'integer',
      required: true
    }
  }
};

