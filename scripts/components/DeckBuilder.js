var React = require('react');

var DeckBuilder = React.createClass({

  render: function(){
    return (
      <div className="deck-builder">
        <input type="text" />
        <button>Long Game</button>
        <button>Short Game</button>
      </div>
    )
  }

});

export default DeckBuilder;
