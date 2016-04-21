'use strict';
const notification = require('./notification');
const s3 = require('./s3');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(notification);
  app.configure(s3);
};
