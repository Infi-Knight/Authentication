var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Add the methods provided by passport-local-mongoose after you have declared your schema
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);