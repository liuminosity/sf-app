var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var ReactDOM = require('react-dom');

var App = React.createClass({
  // mixins: [ReactRouter.Navigation],

  componentWillMount: function componentWillMount() {
    // var _this = this;
    console.log('sup');
    // $.ajax({
      
    // });
  },

  render: function render() {
    return (<div> Hello World </div>);
  },
})


var routes = (
  React.createElement(Route, {name: 'app', path : '/', component: App}
  )
);

ReactDOM.render(<Router>{routes}</Router>, document.querySelector('.container'))
