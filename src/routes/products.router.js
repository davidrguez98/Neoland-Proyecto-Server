import { Router } from 'express'
import { getAllproducts, getproduct, newproduct, updateproduct, deleteproduct } from '../controllers/products.controller.js'


const productsRouter = Router()

productsRouter.get('/', getAllproducts)
productsRouter.get('/:id', getproduct)
productsRouter.get('/', newproduct)
productsRouter.get('/:id', updateproduct)
productsRouter.get('/:id', deleteproduct)

export { productsRouter }