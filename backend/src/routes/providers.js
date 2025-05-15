import express from "express";
import providerController from "../controllers/providerscontroller.js";
import multer from "multer"

//coloca los metodos que tendra la la ruta
const router = express.Router();

// carpeta local que guarde las carpetas subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(providerController.getProviders) //mostrar
.post(upload.single("img"),providerController.createProviders) //agregar



export default router;

