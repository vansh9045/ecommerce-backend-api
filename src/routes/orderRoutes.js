const express = require("express");

const {
  createOrder,
  myOrders,
} = require("../controllers/orderController");

const {
  isAuthenticated,
} = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/new").post(
  isAuthenticated,
  createOrder
);

router.route("/me").get(
  isAuthenticated,
  myOrders
);

module.exports = router;