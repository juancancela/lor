"use strict";

const DEFAULT_CARDS_PATH = '../cards.json'; 

class CardFactory {
    constructor(cardsPath){
        this._cards = require(cardsPath || DEFAULT_CARDS_PATH)["cards"]
    }
    getCards(amount){
        var cards = [];
        var clonedCards = this._cards.slice(0);
        for(var i = 0; i < amount; i++) {
          var randomPosition = Math.floor(Math.random()*clonedCards.length);  
          var selectedCard = clonedCards[randomPosition];
          clonedCards.splice(randomPosition, 1);
          cards.push(selectedCard);
        }
        return cards;
    }
}

module.exports = {
    CardFactory : CardFactory
}