import express from 'express'
import { getAllRegisters, getRegister, createRegister, updateRegister, deleteRegister } from '../controllers/DocumentacionController.js';
const router = express.Router()

router.get('/', getAllRegisters)
router.get('/:id', getRegister)
router.post('/', createRegister)
router.put('/:id', updateRegister)
router.delete('/:id', deleteRegister)

export default router