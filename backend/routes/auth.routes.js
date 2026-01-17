import { Router } from "express";
import { post_login, post_signup } from "../controllers/auth.controller.js";

const router = Router();

router.post('/signup' , post_signup);
router.post('/login' , post_login);

export default router;