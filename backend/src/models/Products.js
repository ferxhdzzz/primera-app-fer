import{Schema, model} from "mongoose";

const productSchema = new Schema ({
    name:{
type: String,
require: true
    },

    descripction:{
type: String
    },

    price: {
        type: Number,
        require: true,
        min: 0
    },

    stock: {
        type: Number,
        require: true,
        min: 0
    }
}, {
    timestamps:true,
    strict: false
})

export default model ("Products", productSchema)