"use strict";

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

class Rules {
    *render(ctx){
      yield this.render("rules",{
        controls : []
      });
    }
}

module.exports = {
  Rules : Rules  
};