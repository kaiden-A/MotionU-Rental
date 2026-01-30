import { Router } from "express";
import { get_dashboard } from "../controllers/admin.controller.js";
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();

router.get('/dashboard' , requireAuth, get_dashboard);

export default router;