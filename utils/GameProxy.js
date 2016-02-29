"use strict";

var Game = require('../states/Game').Game;
var games = {};
var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var linkFactory = new LinkFactory();
var Player = require('../states/Player').Player;
var uuid = require('node-uuid');

class GameProxy {

    *retrieve(){
       var gameId = this.originalUrl.split("/")[2];
       var game = games[gameId];
       yield this.render("game",{
                controls : game.controls,
                game: game
            });  
    }
    
    *create(){
        var gameId = uuid.v4();
        var controls = [linkFactory.a("self", `game/${gameId}`, this)];
        var players = [];
        var body = this.request.body;
        Object.keys(body).forEach(function(name){
          let playerName = body[name];
          players.push(new Player(playerName));
        }); 
        
        var game = new Game(players, controls, 10, gameId);
        games[game.id] = game;
        this.redirect(`/game/${game.id}`);
    }
}

module.exports = {
    GameProxy : GameProxy
}