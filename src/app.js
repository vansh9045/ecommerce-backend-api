const userRoutes = require("./routes/userRoutes");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const errorMiddleware = require("./middlewares/errorMiddleware");
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "E-Commerce API Running Successfully",
  });
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use(errorMiddleware);
app.use("/api/orders", orderRoutes);
module.exports = app;