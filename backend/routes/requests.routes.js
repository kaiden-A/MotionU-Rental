import { Router } from "express";
import { 
    get_one_request,
    get_request, 
    post_request, 
    update_request 
} from "../controllers/requests.controller.js";

const router = Router();


router.get('/' , get_request);
router.post('/' , post_request);
router.get('/:id' , get_one_request);
router.put('/:id' , update_request);


export default router;