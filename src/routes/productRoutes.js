const {
  isAuthenticated,
  authorizeRoles,
} = require("../middlewares/authMiddleware");
const express = require("express");
const upload = require("../middlewares/uploadMiddleware");


const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getProductReviews
} = require("../controllers/productController");

const router = express.Router();

router.route("/")
  .post(isAuthenticated, upload.single("image"), createProduct)
  .get(getProducts);
router.route("/review").put(
  isAuthenticated,
  createProductReview
);
router.route("/reviews").get(
  getProductReviews);

router.route("/:id")
  .get(getSingleProduct)
  .put(isAuthenticated, updateProduct)
  .delete(
    isAuthenticated,
    authorizeRoles("admin"),
    deleteProduct
  );

module.exports = router;
