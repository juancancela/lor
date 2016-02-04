"use strict";

var Game = require('../states/Game').Game;
var games = {};

var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

var Player = require('../states/Player').Player;

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
        var body = this.request.body;
        Object.keys(body).forEach(function(name){
          players.push(new Player(body[name], 0, null));
        }); 
        
        var game = new Game(players, controls);
        games[game.id] = game;
        this.redirect(`/game/${game.id}`);
        
    }
}

module.exports = {
    GameProxy : GameProxy
}