"use strict";

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();
var gameParameters = [{"name":"players", "placeholder":"Number of Players (1 to 6)", "type":"text", "required":true}];

class Index {
    *render(ctx){
      yield this.render("index",{
        controls : [
            lf.a("rules", "rules", this),
            lf.form(gameParameters, "test.js", "post", "create game"),
            lf.a("self", null, this)
        ]
      });
    }
}

module.exports = {
  Index : Index  
};