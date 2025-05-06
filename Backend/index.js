import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.routes.js"; // Import the auth routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(cookieParser());
app.use(morgan("combined"));

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",  // Allow frontend to access backend
  credentials: true, // Allow cookies and credentials to be sent
}));
// Test route
app.get("/", (req, res) => {
  res.send("working.");
});

// API routes
app.use("/auth", authRoutes); // Mount the /auth routes

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."))
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

// Start server
app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});
