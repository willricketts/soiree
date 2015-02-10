/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      required: true
    },

    lastName: {
      type: 'string',
      required: true
    },

    emailAddress: {
      type: 'email',
      required: true,
      unique: true
    },

    active: {
      type: 'boolean',
      defaultsTo: true
    },

    admin: {
      type: 'boolean',
      defaultsTo: false
    },

    events: {
      collection: 'event',
      via: 'owner'
    }

  }
};

