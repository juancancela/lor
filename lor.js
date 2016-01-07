var koa = require('koa');
var route = require('koa-route');
var app = koa();

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

app.use(route.get('/', index));
app.use(route.get('/rules', rules));
app.use(route.get('/game', game));

function *index(){
  this.body = {
    "description" : "Welcome to LoR game!",
    "_links":{
      "self": this.request.href,
      "rules": `${this.request.origin}/rules`,
      "game": `${this.request.origin}/game`,
    }
  };
}

function *rules(){
  this.body = "TBD";
}

function *game(){
  this.body = "TBI";
}

app.listen(3000);
