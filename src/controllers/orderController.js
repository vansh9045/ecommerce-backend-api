const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

// Create Order
const createOrder = async (req, res, next) => {
  try {
    const order = await Order.create({
      ...req.body,
      user: req.user._id,
    });

    res.status(201).json({
      success: true,
      order,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

// Get Logged In User Orders
const myOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).populate("orderItems.product");

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    next(new ErrorHandler(error.message, 500));
  }
};

module.exports = {
  createOrder,
  myOrders,
};