"use strict";

var CardFactory = require('../utils/CardFactory').CardFactory;
var cardFactory = new CardFactory();
var LinkFactory = require('../utils/LinkFactory').LinkFactory;
var lf = new LinkFactory();

const DEFAULT_AMOUNT_OF_CARDS = 5;

class Game {
    constructor(players, controls, amountOfCards, id){
        var self = this;
        this._id = id;
        this._cards = cardFactory.getCards(amountOfCards || DEFAULT_AMOUNT_OF_CARDS);
        this._players = players;        
        this._controls = controls;
        this._currentPlayer = players[0];
        
        players.forEach(function(player){
           player.addCard(self._cards.pop()); 
        });
    }
    
    get players(){
        return this._players;
    }
    
    set players(value){
        this._players = value;
    }   
    
    get cards(){
        return this._cards;
    } 
    
    set cards(value){
        this._cards = value;
    }
    
    get controls() {
        return this._controls;
    }
    
    set controls(value) {
        this.controls = value;
    }
    
    get currentPlayer() {
        return this._currentPlayer;
    }
    
    set currentPlayer(value) {
        this._currentPlayer = value;
    }
    
    get id(){
        return this._id;
    }
    
    set id(value){
        this._id = value;
    }
}

module.exports = {
  Game : Game  
};