import express from 'express';
import { search } from '../controllers/SearchController.js';

const router = express.Router();

// POST /search route
router.post('/search', search);

export default router;
