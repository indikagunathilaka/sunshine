const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for Role
const RoleSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true
  }
});

// Create model for Role
const Role = mongoose.model("Role", RoleSchema);

module.exports = Role;
