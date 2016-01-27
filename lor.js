var koa = require('koa');
var route = require('koa-route');
var app = koa();
var render = require('koa-ejs');
var path = require('path');
var serve = require('koa-static-folder');

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
app.use(route.get('/', index));
app.use(route.get('/rules', rules));
app.use(route.get('/game', game));

function *index(){
  var links = [
      {"rel":"rules","url":`${this.request.origin}/rules`},
      {"rel":"game","url":`${this.request.origin}/game`},
      {"rel":"self","url":this.request.href}
  ]
  yield this.render('index',{
      links : links
  });
}

function *rules(){
  this.body = "TBD";
}

function *game(){
  this.body = "TBI";
}

app.listen(3000);
