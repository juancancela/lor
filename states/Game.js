"use strict";

class Game {
    constructor(players, controls){
        this._id = "1234";
        this._cards = [{"name":"revolucion de mayo", "year":1810},{"name":"revolucion de mayo2", "year":1812}];
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