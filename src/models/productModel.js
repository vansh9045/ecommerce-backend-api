const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    image: {
      type: String,
       required: true,
    },

    stock: {
      type: Number,
      required: [true, "Stock is required"],
      default: 0,
    },
    ratings: {
  type: Number,
  default: 0,
},

numOfReviews: {
  type: Number,
  default: 0,
},

reviews: [
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    comment: {
      type: String,
      required: true,
    },
  },
],

    category: {
      type: String,
      required: [true, "Category is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);