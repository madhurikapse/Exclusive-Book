import express from 'express';
import { search } from '../controllers/SearchController.js';

const router = express.Router();

router.post('/search1', search);
export default router;
