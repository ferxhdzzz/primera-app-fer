import dotenv from "dotenv" // importar la libreria que acabamos de instalar

dotenv.config //ejecutamos la libreria, para acceder al punto env

export const config ={

    db:{
        URI: process.env.DB_URI || "mongodb://localhost:27017/zonadigitalDB20220031",
    },
    server:{
        port: process.env.PORT || 4000,
    },

}