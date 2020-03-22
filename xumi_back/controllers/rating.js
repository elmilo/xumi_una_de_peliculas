// External Dependancies
const boom = require("boom");

// Get Data Model
const Rating = require("../models/rating");

// Get all ratings
exports.getRatings = async (req, reply) => {
  try {
    const ratings = await Rating.find();
    return ratings;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single rating by ID
exports.getSingleRating = async (req, reply) => {
  try {
    const id = req.params.id;
    const rating = await Rating.findById(id);
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get all rating by matching criteria
exports.queryRatings = async (req, reply) => {
  try {
    const rating = req.body;
    const { ...query } = rating; //query parameters
    const query_ratings = await Rating.find(query);
    return query_ratings;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new rating
exports.addRating = async (req, reply) => {
  try {
    const rating = new Rating(req.body);
    console.log("req ", req);
    return rating.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing rating
exports.updateRating = async (req, reply) => {
  try {
    const id = req.params.id;
    const rating = req.body;
    const { ...updateData } = rating;
    const update = await Rating.findByIdAndUpdate(id, updateData, {
      new: true
    });
    return update;
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a rating
exports.deleteRating = async (req, reply) => {
  try {
    const id = req.body._id;
    /*const rating = await Rating.findById(id);
    console.log("\r\n");
    console.log("\r\n: rating query:", rating);
    console.log("\r\n");*/
    const rating = await Rating.findByIdAndRemove(id);
    return rating;
  } catch (err) {
    throw boom.boomify(err);
  }
};
