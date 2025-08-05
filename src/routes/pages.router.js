import { Router } from 'express'
import { checkUserLogged } from '../middlewares/checkUserLogged.middleware.js'

const pagesRouter = Router()

/* GET home page. */
pagesRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
})
pagesRouter.get('/dashboard', checkUserLogged, (req, res, next) => {
  res.render('dashboard', { title: 'Express' })
})
pagesRouter.get('/login', (req, res, next) => {
  res.render('login', { title: 'Express' })
})
pagesRouter.get('/register', (req, res, next) => {
  res.render('register', { title: 'Express' })
})

export { pagesRouter }
