import express from "express";
import recoveryPasswordController from "../controllers/recoveryPasswordcontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("recoveryPassword")
.post( recoveryPasswordController.requestCode) //agregar
//.post("/verifyCode") //agregar
//.post("/newPassword") //agregar
export default router;