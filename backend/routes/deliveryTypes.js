const delivertyTypes = require("express").Router();

const DelivertyType = require("../models/DelivertyType");

delivertyTypes.get("/", (req, res) => {
  DelivertyType.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

delivertyTypes.post("/filter", (req, res) => {
  const queryData =
    Object.entries(req.body).length > 0
      ? Object.assign(
          ...Object.entries(req.body).map(([k, v]) => ({
            [k]: new RegExp(v, "i")
          }))
        )
      : req.body;
  DelivertyType.find(queryData, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

delivertyTypes.post("/", (req, res) => {
  DelivertyType.create(req.body, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

delivertyTypes.get("/:id", (req, res) => {
  DelivertyType.findById(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

delivertyTypes.put("/:id", (req, res) => {
  DelivertyType.findByIdAndUpdate(req.params.id, req.body, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

delivertyTypes.delete("/:id", (req, res) => {
  DelivertyType.findByIdAndDelete(req.params.id, (err, type) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: type });
  });
});

module.exports = delivertyTypes;
