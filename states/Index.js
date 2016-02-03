"use strict";

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();
var players = [{"name":"player1", "placeholder":"Player Name", "type":"text", "required":false},
{"name":"player2", "placeholder":"Player Name", "type":"text", "required":false},
{"name":"player3", "placeholder":"Player Name", "type":"text", "required":false},
{"name":"player4", "placeholder":"Player Name", "type":"text", "required":false}];

class Index {
    *render(ctx){
      yield this.render("index",{
        controls : [
            lf.a("rules", "rules", this),
            lf.form(players, "game", "post", "create game"),
            lf.a("self", null, this)
        ]
      });
    }
}

module.exports = {
  Index : Index  
};