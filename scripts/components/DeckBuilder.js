var React = require('react');

var ReactRouter = require('react-router');
var History = ReactRouter.History;

var DeckBuilder = React.createClass({

  mixins : [History],

  goToDeck : function(type) {
    var deckId = this.refs.deckId.value;
    this.history.pushState(null, `/decks/${deckId}-${type}`);
  },

  render: function(){
    return (
      <form className="deck-builder">
        <input type="text" ref="deckId" />
        <button onClick={this.goToDeck.bind(null, 'long')}>Long Game</button>
        <button onClick={this.goToDeck.bind(null, 'long')}>Short Game</button>
      </form>
    )
  }

});

export default DeckBuilder;
