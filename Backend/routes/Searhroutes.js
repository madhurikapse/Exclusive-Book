import express from 'express';
import { searchProducts } from '../controllers/SearchController.js';

const router = express.Router();

// Define the search route
router.get('/search', searchProducts);

export default router;
