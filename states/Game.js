"use strict";

var uuid = require('node-uuid');
var CardFactory = require('../utils/CardFactory').CardFactory;
var cardFactory = new CardFactory();

const DEFAULT_AMOUNT_OF_CARDS = 5;

class Game {
    constructor(players, controls, amountOfCards){
        this._id = uuid.v4();
        this._cards = cardFactory.getCards(amountOfCards || DEFAULT_AMOUNT_OF_CARDS);
        this._players = players;
        this._controls = controls;
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