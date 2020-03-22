// External Dependancies
const boom = require('boom')


// Get Data Model
const User = require('../models/user')

// Get all users
exports.getUsers = async (req, reply) => {
  try {
    const users = await User.find()
    return users
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user by ID
exports.getSingleUserByID = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user //userExists
exports.userExists = async (req, reply) => {
  try {
    const username = req.query;
    const { ...query } = username; //query parameters
    const query_user = await User.find(query);
    return query_user.length > 0;
    
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new user
exports.addUser = async (req, reply) => {
  try {
    const user = new User(req.body)
    return user.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing user
exports.updateUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = req.body
    const { ...updateData } = user
    const update = await User.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a user
exports.deleteUser = async (req, reply) => {
  try {
    const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// User Login
exports.userLogin = async (req, reply) => {
  try {
    const userData = req.body;
    const { ...query } = userData; //query parameters
    const loggedUser = await User.find(query);
    /*if (loggedUser)
    const uniqueId = uuid();*/
    return loggedUser;
    
    /*const id = req.params.id
    const user = await User.findByIdAndRemove(id)
    return user*/
  } catch (err) {
    throw boom.boomify(err)
  }
};


// Get users by matching criteria
/*exports.userExists = async (req, reply) => {
  try {
    const user = req.body;
    const { ...query } = user; //query parameters
    //const query_user = await User.find(query);

    const number = await User.countDocuments(query, function(err, count){
      //console.log("Count de documents: ", count);
    });
    return number;
  } catch (err) {
    throw boom.boomify(err);
  }
};*/