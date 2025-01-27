import { Router } from "express";
import { LoginAdmin, RegisterAdmin, YourAddedProducts } from "../controllers/admin.controller";

const router = Router();

router.post("/login-admin", LoginAdmin);
router.post("/register-admin", RegisterAdmin);
router.post("/your-added-products",checkIsAdminValid,  YourAddedProducts);

export default router;