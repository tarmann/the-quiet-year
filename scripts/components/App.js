var _ = require('lodash');
var h = require('../helpers');

var React = require('react');
var Deck = require('./Deck');

var cards = require('../lang/cards.en');

var App = React.createClass({

  getInitialState : function() {
    return {
      deckName: 'this-is-a-deck',
      deckSize: 'LONG',
      deckCards : h.normalizeCards( cards )
    }
  },

  drawCard: function(){
    var cards = _(this.state.deckCards).cloneDeep();
    var card = cards.filter((obj) => !obj.drawn)[0];

    if(card){
      card.drawn = true;
    }

    this.setState({ deckCards: card ? cards : this.state.deckCards });
  },

  render: function(){
    return (
      <div className="app">
        <Deck cards={this.state.deckCards} drawCard={this.drawCard} />
      </div>
    )
  }

});

export default App;
