const mongoose = require('mongoose');
const boom = require("boom");
// Declare a route
const fastify = require("fastify")({ logger: true });
const routes = require('./routes');




//https://mongoosejs.com/docs/api.html#model_Model.exists

//conectar BD
const uri = "mongodb+srv://localhost/xumi?retryWrites=true&w=majority";

//opciones conexion
var opts = { useNewUrlParser: true, connectTimeoutMS: 20000, useUnifiedTopology: true };

//Pruebo conexion
mongoose.connect(uri, opts).then(
  () => {
    console.log("Conectado!!");
  }, //se conecto
  err => {
    console.log("ERROR:" + err);
  } //manejo error
);




//Loop over each route
routes.forEach((route, index)=> {
    fastify.route(route);
})

fastify.register(require('fastify-cors'));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3001);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    throw boom.boomify(err);
    process.exit(1);
  }
};
start();
