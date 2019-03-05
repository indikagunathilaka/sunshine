const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema for payment type
const PaymentTypeSchema = new Schema({
  name: {
    type: String,
    required: [true, "Payment type is required"],
    index: true
  }
});

// create model for payment type
const PaymentType = mongoose.model("PaymentType", PaymentTypeSchema);

module.exports = PaymentType;
