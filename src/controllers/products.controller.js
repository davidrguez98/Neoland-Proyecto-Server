import { productModel } from '../models/product.model.js'

async function getAllProducts(req, res) {
    try {
        const data = await productModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function getProduct(req, res) {
    try {
        const data = await productModel.findById(req.params.id)
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function newProduct(req, res) {
    try {
        const { name, price, quantity } = req.body
        const newProduct = new productModel({
            name: name,
            price: price,
            quantity: quantity
        })

        await newProduct.save()
        res.send("Producto creado correctamente")
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
}

async function updateProduct(req, res) {
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

async function deleteProduct(req, res) {
    try {
        const productCheck = await productModel.findById(req.params.id)

        if (!productCheck) { res.status(404).send("Producto no encontrado")}

        const data = await productModel.findByIdAndDelete(req.params.id)
        res.send(`El producto ${data} ha sido eliminado`)
    } catch (error) {
        console.log(error)
    }
}

export { getAllProducts, getProduct, newProduct, updateProduct, deleteProduct }