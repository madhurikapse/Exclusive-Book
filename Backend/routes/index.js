import { Router } from "express";
import AuthRoutes from "../routes/auth.routes.js"
import productRoutes from "../routes/product.route.js"
const router = Router();
router.use("/auth", AuthRoutes);
router.use("/product", productRoutes);
export default router;