import mongoose from 'mongoose';

// Replace 'yourDatabaseName' with your actual DB name seen in MongoDB Atlas
const MONGO_URI = 'mongodb+srv://jilrupani04:jilrupani04@cluster0.7a7wjpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI); // No deprecated options needed in Mongoose 7+
    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Optional: exit the app if DB connection fails
  }
};
