import express from 'express'
const router = express.Router()
import { showUsers, addUsers, getUser, deleteUser, updateUser } from '../controllers/users.js'

router.get('/', showUsers)
router.post('/', addUsers)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

export default router