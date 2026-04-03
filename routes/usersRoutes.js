
import express from "express";
import { showFormRegister,showWelcome, registerUser, loginUser } from "../controllers/usersController.js";

const router = express.Router();
/*router.get("/", showFormLogin);*/
router.get("/registro", showFormRegister);
router.post("/registro", registerUser);
router.post("/login",loginUser)
router.get("/login/:name", showWelcome);
export default router;