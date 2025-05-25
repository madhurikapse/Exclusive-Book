import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import subscribeRouter from './routes/subscribe.js';

dotenv.config();

const app = express();

// Middlewares — order matters!
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));

// Test route
app.get("/", (req, res) => {
  res.send("working.");
});

// Mount API routes
app.use('/api/v1', subscribeRouter);      // All subscribe routes here
app.use('/api/v1/auth', authRoutes);      // All auth routes here

// If you have a subscribe route inside subscribeRouter, remove the following:
// app.post('/api/v1/subscribe', (req, res) => {
//   res.json({ success: true, message: 'Subscribed successfully' });
// });

// Connect to DB
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."))
  .catch(err => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server running on port ${process.env.PORT_NUMBER}`);
});
