var React = require('react');

var Card = React.createClass({

  createOptionHTML: function(index){
    return { __html: this.props.details.options[index] };
  },

  render: function(){
    var isDrawn = this.props.details.drawn ? 'true' : 'false';
    var classNames = 'card';

    return (
      <div className={classNames}>
        <div className="card--id">
          {this.props.details.suit}
          {this.props.details.number}
        </div>

        <div className="card--option" dangerouslySetInnerHTML={this.createOptionHTML(0)} />
        <div className="card--option" dangerouslySetInnerHTML={this.createOptionHTML(1)} />
      </div>
    )
  }

});

export default Card;
