var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var EmailCodeSchema = new Schema({
    email:  String,
    code: String,
  });
 module.exports = mongoose.model('emailcode',EmailCodeSchema);