import { celebrate } from "celebrate";
import { Router } from "express";
import { loginUserSchema, registerUserSchema, requestResetEmailSchema, resetPasswordShcema } from "../validations/authValidation.js";
import { loginUser, logoutUser, refreshUserSession, registerUser } from "../controllers/authController.js";

const router = Router();

router.post('/auth/register', celebrate(registerUserSchema),registerUser);
router.post('/auth/login',celebrate(loginUserSchema),loginUser);
router.post('/auth/logout', logoutUser);
router.post('/auth/refresh', refreshUserSession);

router.post('/auth/request-reset-email', celebrate(requestResetEmailSchema), requestResetEmailSchema,);
router.post('/auth/reset-password',celebrate(resetPasswordShcema),resetPasswordShcema);
export default router;
