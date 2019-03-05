const paymentTypes = require("express").Router();

const PaymentType = require("../models/PaymentType");

paymentTypes.get("/", (req, res) => {
  PaymentType.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

paymentTypes.post("/filter", (req, res) => {
  const queryData =
    Object.entries(req.body).length > 0
      ? Object.assign(
          ...Object.entries(req.body).map(([k, v]) => ({
            [k]: new RegExp(v, "i")
          }))
        )
      : req.body;
  PaymentType.find(queryData, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

paymentTypes.post("/", (req, res) => {
  PaymentType.create(req.body, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

paymentTypes.get("/:id", (req, res) => {
  PaymentType.findById(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

paymentTypes.put("/:id", (req, res) => {
  PaymentType.findByIdAndUpdate(req.params.id, req.body, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

paymentTypes.delete("/:id", (req, res) => {
  PaymentType.findByIdAndDelete(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

module.exports = paymentTypes;
