'use strict';

// notification-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  text: { 
  	type: String, 
  	required: true 
  },
  minute: {
    type: Number
  },
  image: {
    type: String
  },
  createdAt: { 
  	type: Date, 
  	'default': Date.now 
  },
  updatedAt: {
  	type: Date, 
  	'default': Date.now 
  }
});

const notificationModel = mongoose.model('notification', notificationSchema);

module.exports = notificationModel;