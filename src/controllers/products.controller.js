import { productModel } from '../models/product.model.js'

async function getAllproducts(req, res) {
    try {
        const data = await productModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function getproduct(req, res) {
    try {
        const data = await productModel.findById(req.params.id)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function newproduct(req, res) {
    try {
        const { name, price, quantity } = req.body
        const newproduct = new productModel({
            name: name,
            price: price,
            quantity: quantity
        })

        await newproduct
        res.send("Producto creado correctamente")
    } catch (error) {
        console.log(error)
    }
}

async function updateproduct(req, res) {
    try {
        const { name, price, quantity } = req.body
        const productCheck = await productModel.findById(req.params.id)

        if (!productCheck) { res.status(404).send("Producto no encontrado")}

        const data = await productModel.findByIdAndUpdate(req.params.id, {name, price, quantity})
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function deleteproduct(req, res) {
    try {
        const productCheck = await productModel.findById(req.params.id)

        if (!productCheck) { res.status(404).send("Producto no encontrado")}

        const data = await productModel.findByIdAndDelete(req.params.id)
        res.send(`El producto ${data} ha sido eliminado`)
    } catch (error) {
        console.log(error)
    }
}

export { getAllproducts, getproduct, newproduct, updateproduct, deleteproduct }