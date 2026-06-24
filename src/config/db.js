const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in the .env file");
  }

  const conn = await mongoose.connect(process.env.MONGO_URI, {
    family: 4, // Force IPv4
    serverSelectionTimeoutMS: 5000,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
