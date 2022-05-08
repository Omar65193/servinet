import express from "express";
import cors from 'cors'
import db from "./database/db.js";

import pagRoutes from './routes/routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/cargardocumentacion', pagRoutes)

try {
    await db.authenticate()
    console.log('Conexion exitosa a DB')
} catch (error) {
    console.log('El error de conexion es: ${error}')
}

app.get('/', (req, res) => {
    res.send('Servinet')
})

app.listen(8000, () => {
    console.log('Server Up running in http://localhost:8000/')
})