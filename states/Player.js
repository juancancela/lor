"use strict";

class Player {
    constructor(name, score, cards, status){
        this._name = name;
        this._score = score;
        this._status = status;
        if(cards) this._cards = cards;
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