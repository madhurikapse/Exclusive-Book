import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';  // Include the .js extension

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGODB_URL;

// Middleware
app.use(cors());

// Connecting to MongoDB Database
mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('DB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Defining the API routes
app.get('/', (req, res) => {
  res.send('Hello Roxiler Systems!');
});

app.use('/',bookRoutes);

// Starting the server
app.listen(port, () => {
  console.log(`API Info: http://localhost:${port}/api/`);
});
