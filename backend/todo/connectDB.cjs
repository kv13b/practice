const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      "mongodb://127.0.0.1:27017/todoDB"
    );
    console.log(
      `MongoDB connected!!! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO connection error:", error);
    process.exit(1);
  }
};
module.exports = connectDB;
