var Deck = function(deck){
  // spring, summer, autumn, winter
  var seasonSuits = ['H', 'D', 'C', 'S'];

  this.deck = deck;
  this.cards = this.shuffle(this.deck);
};

Deck.prototype.shuffle = function(){
  return _(this.seasonSuits).map(function(suit){
    return this.seasonDeck({ suit: suit });
  }.bind(this)).flatten().value();
};

Deck.prototype.notDrawn = function(item){
  item.drawn = false;
};

Deck.prototype.isDrawn = function(item){
  item.drawn = true;
};

Deck.prototype.seasonDeck = function(filter){
  return _(this.deck)
        .where(filter)
        .forEach(this.notDrawn)
        .shuffle()
        .value();
};

Deck.prototype.size = function(){
  return this.cards.length;
};

Deck.prototype.count = function(filter){
  return _(this.cards).where({ drawn: false }).value().length;
};

Deck.prototype.draw = function(filter){
  return _(this.cards)
        .where({ drawn: false })
        .take(1)
        .forEach(this.isDrawn)
        .first();
};

Deck.prototype.discardTwo = function(){
  return _.times(2, this.draw, this);
};