const mongoose = require("mongoose");

mongoose.Promise = Promise;

const mongoURI = "mongodb://localhost/trail-api";

mongoose
  .connect(mongoURI, { useNewUrlParser: true },{ useUnifiedTopology: true })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(err => console.log("Connection Failed.", error));

module.exports = mongoose;
