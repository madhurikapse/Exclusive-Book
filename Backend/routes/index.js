import { Router } from "express";
import AuthRoutes from "../routes/auth.routes.js"
import TaskRoutes from "../routes/task.routes.js"
const router = Router();
router.use("/auth", AuthRoutes);
router.use("/task", TaskRoutes);
export default router;