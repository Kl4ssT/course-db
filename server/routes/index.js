const Router = require('koa-router');
const send = require('koa-send');
const fs = require('fs');
const path = require('path');

const router = new Router();

router.get('/', async ctx => await send(path.join(__dirname, '..', '..', 'client', 'index.html')));

const apiRouter = new Router();

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file != path.basename(module.filename)))
    .forEach(file => apiRouter.use(`/${file}`, require(`./${file}`)));

router.use('/api', apiRouter.routes());

module.exports = router;