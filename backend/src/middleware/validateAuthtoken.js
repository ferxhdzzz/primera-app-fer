import jsonwebtoken from "jsonwebtoken";
import {config} from "../config.js"
export const validateAuthToker = (allowedUserTypes = [])=> {
    return(req, res,next)=> {
        try {
             
const {authToken} = req.cookies;

if (!authToken) {
    res.json({message: "inicia sesion"})
}

const decoded = jsonwebtoken.verify(authToken, config.jwt.secret)

if (!allowedUserTypes.includes(decoded.userType)) {
    return res.json({message: "acces declared"})
}



        } catch (error) {
            console.log ("error " + error)
        }
    }
}

