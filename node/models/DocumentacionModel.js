//Importar conexion a bd
import db from "../database/db.js";

//Importamos sequelize
import { DataTypes } from 'sequelize';

const DocumentacionModel = db.define('documentos', {
    Nombre: { type: DataTypes.STRING },
    ruta_archivo: { type: DataTypes.STRING },

}, {
    timestamps: false
})
export default DocumentacionModel