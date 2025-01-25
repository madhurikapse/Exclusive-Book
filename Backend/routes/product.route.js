import { Router } from "express";
import { search } from "../controllers/SearchController.js";

const router = Router();

router.post("/search", search);

export default router;