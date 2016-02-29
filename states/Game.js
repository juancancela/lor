"use strict";

class Game {
    constructor(players, controls, cards, id){
        this._id = id;
        this._cards = cards;
        this._selectedCards = [this._cards.shift()];
        this._players = players;        
        this._controls = controls;
        this._currentPlayer = players[0];
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
    
    get selectedCards(){
        return this._selectedCards;
    }
    
    set selectedCards(value){
        this._selectedCards = value;
    }
    
    addSelectedCard(selectedCard){
        if(!this._selectedCards) this._selectedCards = [];
        this._selectedCards.push(selectedCard);
    }
    
    addControl(control) {
        this._controls.push(control);
    }
    
    removeControl(control) {
        this._controls.forEach(function(currentControl){
           if(currentControl.name == control.name) this._controls.pop(currentControl); 
        });
    }
}

module.exports = {
  Game : Game  
};