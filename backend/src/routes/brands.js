import express from "express";
import brandsController from "../controllers/brandscontroller.js";
import multer from "multer"


//coloca los metodos que tendra la la ruta
const router = express.Router();

// carpeta local que guarde las carpetas subidas
const upload = multer({dest: "public/"})

router.route("/")
.get(brandsController.getBrands) //mostrar
.post(upload.single("img"),brandsController.createBrands) //agregar



export default router;

