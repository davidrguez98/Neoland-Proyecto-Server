import { userModel } from '../models/user.model.js'

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
        const newUser = new userModel({
            name: name,
            email: email,
            password: password
        })

        await newUser
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

export { getAllUsers, getUser, newUser, updateUser, deleteUser }