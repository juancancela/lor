"use strict";

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

var gameParameters = [{"name":"players", "descr":"Number of Players (1 to 6)"}];

class Index {
    *render(ctx){
      yield this.render("Index",{
        controls : [
            lf.a("rules", "rules", this),
            lf.form(gameParameters, "test.js", "post" ),
            lf.a("self", null, this)
        ]
      });
    }
}

module.exports = {
  Index : Index  
};