var React = require('react');
var Card = require('./Card');

var Deck = React.createClass({

  renderCard: function(card, index){
    return (
      <Card key={index} index={index} details={card} />
    );
  },

  render: function(){
    return (
      <div className="deck">
        <div className="deck--stats">{this.props.cards.filter((card) => !card.drawn).length}</div>
        <div className="deck--cards">
          {this.props.cards.filter((card) => card.drawn).map(this.renderCard)}
        </div>
        <div className="deck--options">
          <button onClick={this.props.drawCard}>Draw Card</button>
        </div>
      </div>
    )
  }

});

export default Deck;
