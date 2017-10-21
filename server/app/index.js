const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const router = require('../routes');

const app = new Koa();
app.use(bodyParser());
app.use(logger());
app.use(router.routes()).use(router.allowedMethods())

module.exports = app;