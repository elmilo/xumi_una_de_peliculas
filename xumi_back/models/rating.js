var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ratingModel = new Schema({
  username: { type: String, trim: true },
  movieID: { type: String },
  movieTitle: { type: String },
  createDate: { type: Date, default: Date.now },  
  posterURL: { type: String, trim:true  },
  rating: { type: Number, min: 0, max: 100, default: 0 },
  comment: { type: String }
});

var Rating = mongoose.model("Rating", ratingModel);

module.exports = Rating;
