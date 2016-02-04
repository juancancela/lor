"use strict";

class Player {
    constructor(name, score, status){
        this._name = name;
        this._score = score;
        this._status = status;
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
    
    get status() {
        return this._status;
    }
    
    set status(value) {
        this._status = value;
    }
}

module.exports = {
    Player : Player
}