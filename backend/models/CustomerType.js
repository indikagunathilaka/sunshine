const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for Customer type
const CustomerTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Customer type is required"],
    index: true
  }
});

// create model for Customer type
const CustomerType = mongoose.model("CustomerType", CustomerTypeSchema);

module.exports = CustomerType;
