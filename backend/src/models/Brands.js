import{Schema, model} from "mongoose";

const brandsSchema = new Schema ({
    name:{
type: String,
require: true
    },

    slogan:{
type: String,
require: true
    },

   year: {
        type: String,
        require: true,
        
    },
    img: {
        type: String,
        require: true,
       
    },  

    
}, {
    timestamps:true,
    strict: false
})

export default model ("Brands", brandsSchema)