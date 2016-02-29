"use strict";

var Game = require('../states/Game').Game;
var games = {};
var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var linkFactory = new LinkFactory();
var CardFactory = require('../utils/CardFactory').CardFactory;
var cardFactory = new CardFactory();
var Player = require('../states/Player').Player;
const uuid = require('node-uuid');

const DEFAULT_AMOUNT_OF_CARDS = 10;

class GameProxy {

    *retrieve(){
       let gameId = this.originalUrl.split("/")[2];
       let game = games[gameId];
       yield this.render("game", {
                controls : game.controls,
                selectedCards : game.selectedCards,
                game: game
            });  
    }
    
    *create(){
        let requestBody = this.request.body;
        let gameId = uuid.v4();
        let controls = [linkFactory.a("self", `game/${gameId}`, this)];
        let players = [];
        let cards = cardFactory.getCards(DEFAULT_AMOUNT_OF_CARDS);
        
        Object.keys(requestBody).forEach(function(name){
          players.push(new Player(requestBody[name]));
        }); 
        
        let game = new Game(players, controls, cards, gameId);
        games[game.id] = game;
        this.redirect(`/game/${game.id}`);
    }
    
    *play(){
        let gameId = this.originalUrl.split("/")[2];
        let game = games[gameId];
        
        console.log("TODO!!");
        this.redirect(`/game/${game.id}`);
    }
}

module.exports = {
    GameProxy : GameProxy
}