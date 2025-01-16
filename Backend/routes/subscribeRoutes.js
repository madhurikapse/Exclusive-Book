
import express from 'express';
import { subscribeUser } from '../controllers/subscribeController.js';
import { Login, Register } from '../controllers/AuthController.js';

const router = express.Router();

router.post('/subscribe', subscribeUser);

router.post("/register",Register);
router.post("/login",Login);

export default router;
