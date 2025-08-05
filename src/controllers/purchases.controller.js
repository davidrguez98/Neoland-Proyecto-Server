import { purchaseDataModel } from '../models/purchase.model.js'

async function getAllpurchaseDataModel(req, res) {
    try {
        const data = await purchaseDataModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

async function newPurchaseInfo(req, res) {
    try {
        const { productName } = req.body
        const clientIp = req.ip

        const newPurchaseData = new purchaseDataModel({
        productName,
        ip: clientIp
        })

        await newPurchaseData.save()
        res.send("Información de compra obtenida correctamente")
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
}

export { getAllpurchaseDataModel, newPurchaseInfo }