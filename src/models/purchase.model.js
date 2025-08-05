import mongoose from 'mongoose'

const purchaseSchema = mongoose.Schema({
    productName: { type: String },
    ip: { type: String }
})

const purchaseDataModel = mongoose.model("purchase", purchaseSchema)

export { purchaseDataModel }