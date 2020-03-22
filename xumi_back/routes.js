//Import controllers
const userController = require("./controllers/user");
const ratingController = require("./controllers/rating");

const routes = [
  /************
    Users
  **********/
  {
    method: "GET",
    url: "/api/users",
    handler: userController.getUsers
  },
  {
    method: "POST",
    url: "/api/login",
    handler: userController.userLogin
  },  
  {
    method: "GET",
    url: "/api/userExists",
    handler: userController.userExists
  },
  {
    method: "GET",
    url: "/api/user/:id",
    handler: userController.getSingleUserByID
  },
  {
    method: "POST",
    url: "/api/user",
    handler: userController.addUser
  },
  {
    method: "DELETE",
    url: "/api/user/:id",
    handler: userController.deleteUser
  },
  /************
    Ratings
  **********/
  {
    method: "POST",
    url: "/api/ratings",
    handler: ratingController.queryRatings
  },
  {
    method: "POST",
    url: "/api/rating",
    handler: ratingController.addRating
  },
  {
    method: "DELETE",
    url: "/api/rating",
    handler: ratingController.deleteRating
  }
  
];
module.exports = routes;
