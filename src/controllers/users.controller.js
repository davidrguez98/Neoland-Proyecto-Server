import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

import { userModel } from '../models/user.model.js'

const JWT_SECRET = 'tu_clave_secreta'

async function getAllUsers(req, res) {
    try {
        const data = await userModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function getUser(req, res) {
    try {
        const data = await userModel.findById(req.params.id)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function newUser(req, res) {
    try {
        const { name, email, password } = req.body
        const saltRound = 10
        const encryptedPassword = await bcrypt.hash(password, saltRound)

        const newUser = new userModel({
            name: name,
            email: email,
            password: encryptedPassword
        })

        await newUser.save()
        res.send("Usuario creado correctamente")
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
    try {
        const { name, email, password } = req.body
        const userCheck = await userModel.findById(req.params.id)

        if (!userCheck) { res.status(404).send("Usuario no encontrado")}

        const data = await userModel.findByIdAndUpdate(req.params.id, {name, email, password})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteUser(req, res) {
    try {
        const userCheck = await userModel.findById(req.params.id)

        if (!userCheck) { res.status(404).send("Usuario no encontrado")}

        const data = await userModel.findByIdAndDelete(req.params.id)
        res.send(`El usuario ${data} ha sido eliminado`)
    } catch (error) {
        console.log(error)
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        const passwordCheck = await bcrypt.compare(password, user.password)

        if (!user || !passwordCheck) return res.status(401).send('Credenciales inválidas')
        
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' })
        res.cookie(process.env.CLAVE_SECRETA_COOKIE, token)
    } catch (error) {
        console.log(error)
    }
}

export { getAllUsers, getUser, newUser, updateUser, deleteUser, loginUser }