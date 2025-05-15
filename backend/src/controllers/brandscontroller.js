//array de metodos
const brandsController = {};

import brandsModel from "../models/Brands.js";
import {v2 as cloudinary} from "cloudinary"
import {config} from "../config.js"

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinay_api_secret
})

//get - select

brandsController.getBrands = async (req, res) => {

    const brands = await brandsModel.find()
    res.json (brands)
}

//post - agregar

brandsController.createBrands = async (req, res) => {
    try {
        
  
    const {name, slogan,year} = req.body; //req.body = lo que le pedimos al frontend
    let imgURL = ""
if(req.file){
const result = await cloudinary.uploader.upload(
    req.file.path,
    {
        folder: "public",
        allowed_formats: ["png","jpg", "jpeg","svg"],
    }
)
imgURL = result.secure_url
console.log(result.secure_url)
}

    const  newbrands = new brandsModel({name, slogan,year, img:imgURL});
    await newbrands.save()
    res.json({message: "brands saved"})

} catch (error) {
        console.log("error"+error)
}}
 



export default brandsController;
