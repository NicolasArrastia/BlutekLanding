import {Router} from "express";
import { sendEmail } from "../controller/resendController.js";
const router = Router()
router.post("/send-email", sendEmail)


export {router as resendRouter}; 