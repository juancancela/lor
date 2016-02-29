/**
 * calculates service call response time
 * @param next next function in middleware
 */
function *responseTime(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  this.set('X-Response-Time', ms + 'ms');
}

/**
 * logs service call
 * @param next next function in middleware
 */
function *logger(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
}


module.exports = {
    responseTime : responseTime,
    logger       : logger
}