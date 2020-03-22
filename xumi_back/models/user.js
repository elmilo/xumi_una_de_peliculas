var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, trim: true },
  email: { type: String, lowercase: true, trim: true },
  createDate: { type: Date, default: Date.now },
  password: { type: String }
});

var User = mongoose.model("User", userSchema);
//console.log("se creo modelo Users");
module.exports = User;
