import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(`mongodb://isira:secret@mongodb:27017/my-secrets?authSource=admin`);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error:`, error);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDB;