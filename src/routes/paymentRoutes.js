const express = require("express");
const router = express.Router();

const { processPayment } = require("../controllers/paymentController");
const { isAuthenticated } = require("../middlewares/authMiddleware");

router.route("/process").post(
  isAuthenticated,
  processPayment
);

module.exports = router;