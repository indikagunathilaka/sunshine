const customerTypes = require("express").Router();

const CustomerType = require("../models/CustomerType");

customerTypes.get("/", (req, res) => {
  CustomerType.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

customerTypes.post("/filter", (req, res) => {
  const queryData =
    Object.entries(req.body).length > 0
      ? Object.assign(
          ...Object.entries(req.body).map(([k, v]) => ({
            [k]: new RegExp(v, "i")
          }))
        )
      : req.body;
  CustomerType.find(queryData, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

customerTypes.post("/", (req, res) => {
  CustomerType.create(req.body, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

customerTypes.get("/:id", (req, res) => {
  CustomerType.findById(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

customerTypes.put("/:id", (req, res) => {
  CustomerType.findByIdAndUpdate(req.params.id, req.body, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

customerTypes.delete("/:id", (req, res) => {
  CustomerType.findByIdAndDelete(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

module.exports = customerTypes;
