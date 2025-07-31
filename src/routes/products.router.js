import { Router } from 'express'
import { getAllproducts, getproduct, newproduct, updateproduct, deleteproduct } from '../controllers/products.controller.js'


const productsRouter = Router()

productsRouter.get('/', getAllproducts)
productsRouter.get('/:id', getproduct)
productsRouter.post('/', newproduct)
productsRouter.put('/:id', updateproduct)
productsRouter.delete('/:id', deleteproduct)

export { productsRouter }