import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AllRoutes from "../Backend/routes/index.js"
import subscribeRoutes from "./routes/subscribeRoutes.js";
import searchRoutes from './routes/Searhroutes.js';
const app = express();
app.use(cookieParser());
app.use(morgan("combined"));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);


dotenv.config();
app.use(express.json());

app.get("/", function (req, res) {
  res.send("working.");
});

app.use("/api/v1", AllRoutes);
app.use('/api/v1', searchRoutes);
app.use("/api/v1", subscribeRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB connected."));

app.listen(process.env.PORT_NUMBER, () => {
  console.log(`Server is running on port ${process.env.PORT_NUMBER}.`);
});