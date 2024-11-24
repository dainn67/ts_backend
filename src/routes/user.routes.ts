import { createUser, getUsers } from '../controller/user.controller'
import express from 'express'

const router = express.Router()

router.get('/users', getUsers)
router.post('/create-users', createUser)

export default router