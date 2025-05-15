import{Schema, model} from "mongoose";

const providersSchema = new Schema ({
    name:{
type: String,
require: true
    },

    telephone: {
        type: String,
        require: true,
       
       
    },

    img: {
        type: String,
        require: true,
  
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Providers", providersSchema)