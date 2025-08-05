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
        const { productName, ip } = req.body
        const newPurchaseData = new purchaseDataModel({
            productName: productName,
            ip: ip
        })

        await newPurchaseData.save()
        res.send("Inofmración de compra obtenida correctamente")
    } catch (error) {
        res.status(500).send(`Error: ${error}`)
    }
}

export { getAllpurchaseDataModel, newPurchaseInfo }