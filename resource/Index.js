"use strict";

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

class Index {
    *render(ctx){
      yield this.render("Index",{
        controls : [
            lf.a("rules", "rules", this),
            lf.a("game", "game", this),
            lf.a("self", null, this)
        ]
      });
    }
}

module.exports = {
  Index : Index  
};