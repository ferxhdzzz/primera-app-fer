import mongoose from "mongoose";

//configuro la URL+

const URI = "mongodb://localhost:27017/zonadigitalDB20220031" ;

//conecto la base
mongoose.connect(URI);

//comprobar todo
//creo una funcion


const connection = mongoose.connection;

connection.once("open", () => {
    console.log("connected");

});


connection.on("diconnected", () => {
    console.log("disconnected");


});

connection.on("error", (error) => {
    console.log("error"+error);


});




