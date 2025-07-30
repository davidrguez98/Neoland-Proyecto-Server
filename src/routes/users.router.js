import { Router } from 'express'
import { getAllUsers, getUser, newUser, updateUser, deleteUser } from '../controllers/users.controller.js'


const usersRouter = Router()

usersRouter.get('/', getAllUsers)
usersRouter.get('/:id', getUser)
usersRouter.get('/', newUser)
usersRouter.get('/:id', updateUser)
usersRouter.get('/:id', deleteUser)

export { usersRouter }