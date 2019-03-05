const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a schema for User
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    index: true
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    index: true
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    index: true
  },
  password: { type: String, required: [true, "Password is required"] },
  roles: [{ type: Schema.Types.ObjectId, require: true, ref: "Role" }]
});

// Create model for User
const User = mongoose.model("User", UserSchema);

module.exports = User;
