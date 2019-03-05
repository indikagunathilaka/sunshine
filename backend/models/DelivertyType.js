const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for Delivery type
const DeliveryTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Delivery type is required"],
    index: true
  }
});

// create model for Delivery type
const DeliveryType = mongoose.model("DeliveryType", DeliveryTypeSchema);

module.exports = DeliveryType;
