import { Router } from "express";
import { 
    delete_product,
    get_active_products, 
    post_product, 
    update_products_quantity 
} from "../controllers/product.controller.js";
import multer from "multer";
import requireAuth from "../middlewares/requireAuth.js";

const router = Router();

const storage = multer.memoryStorage();
const upload = multer({storage})

router.get('/' , get_active_products);
router.put('/:id' , requireAuth , update_products_quantity);
router.post('/' , requireAuth , upload.single("image") , post_product);
router.delete('/:id' , requireAuth , delete_product);

export default router;