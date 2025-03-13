import{Schema, model} from "mongoose";

const employeeSchema = new Schema ({
    name:{
type: String,
require: true
    },

    lastName:{
type: String,
require: true
    },

    birthday: {
        type: Date,
        require: true,
        
    },

    email: {
        type: String,
        require: true,
       
    },

    address: {
        type: String,
        require: true,
       
    },

    hireDate: {
        type: Date,
        require: true,
        
    },

    password: {
        type: String,
        require: true,
        min:7
       
    },

    telephone: {
        type: String,
        require: true,
        min: 8
       
    },

    dui: {
        type: String,
        require: true,
        min: 9
       
    },
    isssNumber: {
        type: String,
        require: true,
        min: 9
       
    },
    isVerfied: {
        type: Boolean
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Employees", employeeSchema)