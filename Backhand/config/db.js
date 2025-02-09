import mongoose from "mongoose";
import "dotenv/config"; // .env file ko load karne ke liye

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB connected");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Error hone par process exit kar de
    }
};
