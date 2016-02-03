"use strict";

var Game = require('../states/Game').Game;
var games = {};

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

class GameProxy {

    *retrieve(){
       var gameId = this.originalUrl.split("/")[2]; //TODO find a way to use named params in Koa
       var game = games[gameId];
       yield this.render("game",{
                controls : game.controls,
                cards: game.cards,
                players : game.players
            });  
    }
    
    *create(){
        var controls = [
            lf.a("self", null, this)
        ];
        var players = [];
        Object.keys(this.request.body).forEach(function(playerName){
          players.push(playerName)
        }); 
        
        var game = new Game(players, controls);
        games[game.id] = game;
        this.redirect(`/game/${game.id}`);
        
    }
}

module.exports = {
    GameProxy : GameProxy
}