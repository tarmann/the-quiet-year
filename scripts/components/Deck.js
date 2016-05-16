var React = require('react');
var CSSTransitionGroup = require('react-addons-css-transition-group');

var Card = require('./Card');

var Deck = React.createClass({

  renderCard: function(card, index){
    return (
      <Card key={card.id} index={index} details={card} />
    );
  },

  render: function(){
    return (
      <div className="deck">
        <div className="deck--stats">{this.props.cards.filter((card) => !card.drawn).length}</div>
        <CSSTransitionGroup
              className="deck--cards"
              component="div"
              transitionName="card"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>

          {this.props.cards.filter((card) => card.drawn).reverse().map(this.renderCard)[0]}
        </CSSTransitionGroup>
        <div className="deck--options">
          <button onClick={this.props.drawCard}>Draw Card</button>
        </div>
      </div>
    )
  }

});

export default Deck;
