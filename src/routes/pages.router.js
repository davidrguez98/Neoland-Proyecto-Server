import { Router } from 'express'
import { checkToken } from '../middlewares/checkToken.middleware.js'

const pagesRouter = Router()

/* GET home page. */
pagesRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})
pagesRouter.get('/dashboard', checkToken, (req, res, next) => {
  res.render('dashboard', { title: 'Express' })
})
pagesRouter.get('/login', (req, res, next) => {
  res.render('login', { title: 'Express' })
})
pagesRouter.get('/register', (req, res, next) => {
  res.render('register', { title: 'Express' })
})

export { pagesRouter }
