var Deck = function(cards, type){
  this.suits = [
    { code: 'H', symbol: '♥', season: 'spring' },
    { code: 'D', symbol: '♦', season: 'summer' },
    { code: 'C', symbol: '♣', season: 'autumn' },
    { code: 'S', symbol: '♠', season: 'winter' }
  ];

  this.type = type;
  this.cards = cards;

  // to remove from each season
  this.cardsToRemove = (type === 'short') ? 4 : 0;

  this.deck = this.build(this.cards, type);
};

/* actions */

Deck.prototype.build = function(){
  return _(this.suits)
        .map(this.buildSeason.bind(this))
        .flatten()
        .value();
};

Deck.prototype.buildSeason = function(season){
  return this.filterBySeason(season)
        .shuffle()
        .take(this.filterBySeason(season).size() - this.cardsToRemove)
        .map(this.setNotDrawn)
        .value();
};

Deck.prototype.draw = function(){
  if(gameDeck.remaining()){
    return _(this.deck)
          .filter({ drawn: false })
          .take(1)
          .map(this.setIsDrawn)
          .first();
  } else {
    return false;
  }
};

Deck.prototype.discard = function(total){
  if(gameDeck.remaining() >= total){
    return _.times(total, this.draw, this);
  } else {
    return false;
  }
};

/* computed */

Deck.prototype.filterBySeason = function(suit){
  return _(this.cards).filter({ suit: suit.code });
};

Deck.prototype.size = function(){
  return this.deck.length;
};

Deck.prototype.drawn = function(){
  return _(this.deck)
        .filter({ drawn: true })
        .size();
};

Deck.prototype.remaining = function(){
  return _(this.deck)
        .filter({ drawn: false })
        .size();
};

Deck.prototype.progress = function(){
  return ((this.drawn() / this.size()) * 100);
};

/* helpers */

Deck.prototype.setNotDrawn = function(item){
  item.drawn = false;
  return item;
};

Deck.prototype.setIsDrawn = function(item){
  item.drawn = true;
  return item;
};
