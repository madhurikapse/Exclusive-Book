import { Router } from "express";
import { getCurrentUser, Login, Register } from "../controllers/auth.controller.js";

const router = Router();

// router.use()
router.post("/register", Register);
router.post("/login",Login);
router.get('/get-current-user', getCurrentUser)

export default router;