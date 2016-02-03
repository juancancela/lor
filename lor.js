"use strict";

var koa = require('koa');
var route = require('koa-route');
var app = koa();
var bodyParser = require('koa-bodyparser');
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static-folder');

var Index = require('./states/Index').Index;
var index = new Index();

var GameProxy = require('./utils/GameProxy').GameProxy;
var gameProxy = new GameProxy();

var Rules = require('./states/Rules').Rules;
var rules = new Rules();

app.use(bodyParser());


// x-response-time
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// Template engine
render(app, {
  root: path.join(__dirname, 'view'),
  layout: 'template',
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(serve('./asset'));
app.use(route.get('/', index.render));
app.use(route.get('/rules', rules.render));
app.use(route.get('/game/:id', gameProxy.retrieve));
app.use(route.post('/game', gameProxy.create));

app.listen(3000);
