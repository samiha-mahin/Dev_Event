import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI || "" ;
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};