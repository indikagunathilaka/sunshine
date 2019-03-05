const apiRoutes = require("express").Router();

const users = require("./users");
const roles = require("./roles");
const customerTypes = require("./customerTypes");
const delivertyTypes = require("./deliveryTypes");
const paymenttypes = require("./paymentTypes");

apiRoutes.use("/users", users);
apiRoutes.use("/roles", roles);
apiRoutes.use("/customer-types", customerTypes);
apiRoutes.use("/delivery-types", delivertyTypes);
apiRoutes.use("/payment-types", paymenttypes);

apiRoutes.get("/", (req, res, next) => {
  res.status(200).send("THIS IS THE BASE URL OF API");
});

apiRoutes.get("*", (req, res, next) => {
  res.status(404).json({ error: `Path ${req.originalUrl} does not exists.` });
});

module.exports = apiRoutes;
