var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var _ = require('lodash');
var h = require('./helpers');

var App = require('./components/App');
var DeckBuilder = require('./components/DeckBuilder');

var site = document.querySelector('#main');

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={DeckBuilder} />
    <Route path="/decks/:deckId" component={App} />
  </Router>
), site);
