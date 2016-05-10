var _ = require('lodash');

var Deck = require('./Deck');
var cards = require('./lang/cards.en');

var gameDeck = new Deck(cards);

window.deck = gameDeck;
