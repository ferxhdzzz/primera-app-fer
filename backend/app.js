 // importo la libreria
import express from "express"
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import emloyeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"

//creo una constatnte igual a la libreria que importe
const app = express();

//permitir los archivos json
app.use(express.json())

//definir las rutas de las funciones en la app
app.use("/api/products", productsRoutes)
app.use("/api/customers",customersRoutes)
app.use("/api/employees",emloyeesRoutes)
app.use("/api/branches",branchesRoutes)



// importo la constante para usar la libreria
export default app;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    