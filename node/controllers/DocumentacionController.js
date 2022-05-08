//Importamos el modelo
import DocumentacionModel from '../models/DocumentacionModel.js';

//Metodos  del CRUD

//Mostrar todos los registros
export const getAllRegisters = async (req, res) => {
    try {
        const registers = await DocumentacionModel.findAll()
        res.json(registers)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Mostrar un registro
export const getRegister = async (req, res) => {
    try {
        const register = await DocumentacionModel.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(register[0])
    }
    catch (error) {
        res.json({ message: error.message })
    }
}
//Crear un registro
export const createRegister = async (req, res) => {
    try {
        await DocumentacionModel.create(req.body)
        res.json({
            "message": "Registro creado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar registro
export const updateRegister = async (req, res) => {
    try {
        DocumentacionModel.update(req.body, {
            where: { id: req.params.id }
        })

        res.json({
            "message": "Registro actualizado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Eliminar registro
export const deleteRegister = async (req, res) => {
    try {
        DocumentacionModel.destroy(req.body, {
            where: { id: req.params.id }
        })

        res.json({
            "message": "Registro eliminado correctamente"
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
