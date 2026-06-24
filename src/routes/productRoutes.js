const {
  isAuthenticated,
  authorizeRoles,
} = require("../middlewares/authMiddleware");
const express = require("express");


const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.route("/")
  .post(isAuthenticated, createProduct)
  .get(getProducts);

router.route("/:id")
  .get(isAuthenticated, getSingleProduct)
  .put(isAuthenticated, updateProduct)
  .delete(isAuthenticated, authorizeRoles("admin"), deleteProduct);

module.exports = router;
