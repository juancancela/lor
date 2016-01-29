var koa = require('koa');
var route = require('koa-route');
var app = koa();
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static-folder');
var Index = require('./states/Index').Index;
var index = new Index();

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
app.use(route.get('/rules', rules));
app.use(route.get('/game', game));

function *rules(){
  var self = this;  
  var _controls = function(){
      return [];
  }
  
  yield this.render('rules',{
      controls : _controls(self)
  });
}

function *game(){
  var self = this;
  var _controls = function(){
      return [];
  }
  
  yield this.render('game',{
      controls : _controls(self)
  });
}

app.listen(3000);
