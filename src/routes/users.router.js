import { Router } from 'express'
import { getAllUsers, getUser, newUser, updateUser, deleteUser, loginUser } from '../controllers/users.controller.js'


const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', newUser)
usersRouter.post('/login', loginUser)
usersRouter.put('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)

export { usersRouter }