"use strict";

const PLAYER_INITIAL_SCORE = 0;

class Player {
    constructor(name){
        this._name = name;
        this._score = PLAYER_INITIAL_SCORE;
        this._status = status;
        this._cards = null;
    }
    
    get name(){
        return this._name;
    }
    
    set name(value){
        this._name = value;
    }
    
    get score() {
        return this._score;
    }
    
    set score(value) {
       this._score = value;
    }
    
    get cards() {
        return this._cards;
    }
    
    set cards(value) {
        this._cards = value;
    }
    
    get status() {
        return this._status;
    }
    
    set status(value) {
        this._status = value;
    }
    
    addCard(card) {
        if(!this._cards) this._cards = [];
        this._cards.push(card);
    }
}

module.exports = {
    Player : Player
}