//array de metodos
const providersController = {};

import providersModel from "../models/Providers.js";
import {v2 as cloudinary} from "cloudinary"
import {config} from "../config.js"

cloudinary.config({
    cloud_name: config.cloudinary.cloudinary_name,
    api_key: config.cloudinary.cloudinary_api_key,
    api_secret: config.cloudinary.cloudinay_api_secret
})

//get - select

providersController.getProviders = async (req, res) => {

    const providers = await providersModel.find()
    res.json (providers)
}

//post - agregar

providersController.createProviders = async (req, res) => {
    try {
        
  
    const {name, telephone} = req.body; //req.body = lo que le pedimos al frontend
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
}

    const  newprovider = new providersModel({name, telephone, img:imgURL});
    await newprovider.save()
    res.json({message: "provider saved"})

} catch (error) {
        console.log("error"+error)
}}
 



export default providersController;
