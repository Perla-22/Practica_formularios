import express from "express";
import { mostrarFormulario, registrarUsuario } from "../controllers/errorController.js";
 
const router = express.Router();
 
// http://localhost:3000/registro
router.get("/", mostrarFormulario);
router.post("/registro", registrarUsuario);
 
export default router;
