"use strict";

class Card {
    constructor(name, description, year){
        this._name = name;
        this._description = description;
        this._year = year;
    }
    
    get name() {
        return this._name;
    }
    
    set name(value) {
        this._name = value;
    }
    
    get description() {
        return this._description;
    }
    
    set description(value) {
        this._description = value;
    }
    
    get year() {
        return this._year;
    }
    
    set year(value) {
        this._year = value;
    }
}

module.exports = {
    Card : Card
}