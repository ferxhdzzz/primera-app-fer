 // importo la libreria
import express from "express"
import productsRoutes from "./src/routes/products.js"

//creo una constatnte igual a la libreria que importe
const app = express();

//permitir los archivos json
app.use(express.json())

//definir las rutas de las funciones en la app
app.use("/api/products", productsRoutes)



// importo la constante para usar la libreria
export default app;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    