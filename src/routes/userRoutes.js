import { updateUserAvatar } from "../controllers/userController.js";
import { authenticate } from "../middleware/authenticate.js";
import { Router } from "express";
import { upload } from "../middleware/multer.js";

const router = Router();

router.patch('/users/me/avatar',authenticate,upload.single('avatar'),updateUserAvatar,);

export default router;
