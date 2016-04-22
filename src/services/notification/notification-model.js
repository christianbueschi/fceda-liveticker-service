'use strict';

// notification-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let getToday = function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd
  } 

  if(mm<10) {
    mm='0'+mm
  }  

  return dd+'-'+mm+'-'+yyyy;
}

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
  isTitle: {
    type: Boolean
  },
  dayOfCreation: {
     type: String,
     'default': getToday()
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