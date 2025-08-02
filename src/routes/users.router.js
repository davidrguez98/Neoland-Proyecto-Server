import { Router } from 'express'
import { getAllUsers, getUser, newUser, updateUser, deleteUser, loginUser } from '../controllers/users.controller.js'


const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.post('/', newUser)
usersRouter.put('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.post('/login', loginUser)

export { usersRouter }