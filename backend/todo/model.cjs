const mongoose = require("mongoose");

var Schema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  status: String,
});

const userDB = mongoose.model("user", Schema);

module.exports = userDB;
