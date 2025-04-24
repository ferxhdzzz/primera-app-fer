 // importo la libreria
import express from "express"
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import emloyeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviweRoutes from "./src/routes/reviews.js"
import registerEmployeeRoutes from "./src/routes/registerEmployees.js"
import registerCustomerRoutes from "./src/routes/registerCustomers.js"
import login from "./src/routes/login.js"
import logout from "./src/routes/logout.js"
import recoveryPassword from "./src/routes/recoveryPassword.js"

import cookieParser from "cookie-parser"

//creo una constatnte igual a la libreria que importe
const app = express();

//permitir los archivos json
app.use(express.json())
app.use(cookieParser())

//definir las rutas de las funciones en la app
app.use("/api/products", productsRoutes)
app.use("/api/customers",customersRoutes)
app.use("/api/employees",emloyeesRoutes)
app.use("/api/branches",branchesRoutes)
app.use("/api/reviews",reviweRoutes)
app.use("/api/registerEmployees",registerEmployeeRoutes)
app.use("/api/login", login)
app.use("/api/logout", logout)
app.use("/api/registerCustomers", registerCustomerRoutes)
app.use("/api/recoveryPassword", recoveryPassword)





// importo la constante para usar la libreria
export default app;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    