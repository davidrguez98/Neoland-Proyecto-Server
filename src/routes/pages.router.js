import { Router } from 'express'
const pagesRouter = Router()

/* GET home page. */
pagesRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export { pagesRouter }
