// config/connectionDb.js
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDb;
