import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: { type: String, trim: true, require: true },
    price: { type: Number, trim: true, require: true },
    quantity: { type: Number, trim: true, require: true }
})

const productModel = mongoose.model("product", productSchema)

export { productModel }