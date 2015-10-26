var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var DefaultRoute = ReactRouter.DefaultRoute;
var ReactDOM = require('react-dom');

var LoginButton = require('./components/LoginButton');
// var salesforceAuth = require('../salesforceAuth');

//todo: fix this
var salesforceAuth = {
  consumerKey : '3MVG9KI2HHAq33RxuFExlQOEYPr_oWfZmC9hdqLJpMSAX3PRIgS5qwpVa9Y0ef8KkL9Ij2kMNm_R55203v22G$1234',
  consumerSecret: '252665231122541623',
  callbackURL: 'https://127.0.0.1'
};

var App = React.createClass({

  getInitialState: function getInitialState() {
    return {
      //TODO: change this to false
      userIsAuthenticated: true,

    }
  },
  // mixins: [ReactRouter.Navigation],

  componentWillMount: function componentWillMount() {
    var _this = this;
    if (!_this.state.userIsAuthenticated) {
      var urlSegments = window.location.href.split('?')[1].split('&');
      if (urlSegments.length === 1) {
        console.log('please log in');
      } else {
        var code = urlSegments[0].slice(5);
        console.log('this is code', code);
        $.ajax({
          type: 'POST',
          url: 'https://login.salesforce.com/services/oauth2/token',
          contentType: 'application/json',
          data: {
            grant_type: 'authorization_code',
            client_id: salesforceAuth.consumerKey,
            client_secret: salesforceAuth.consumerSecret,
            redirect_uri: salesforceAuth.callbackURL,
            code: code
          },
          success: function (data) {
            window.localStorage.setItem('sfdemoapp-token', data.access_token);
            _this.setState({ access_token: data.access_token });
          }
        })
      } 
    }
  },

  LoginButtonBlock: function LoginButtonBlock() {
    return this.state.userIsAuthenticated ? <div/> : <LoginButton />;
  },

  render: function render() {
    return (
      <div> 
        <h1>Hello World </h1>
        { this.LoginButtonBlock() }

      </div>
    );
  },
})


var routes = (
  React.createElement(Route, {name: 'app', path : '/', component: App}
  )
);

ReactDOM.render(<Router>{routes}</Router>, document.querySelector('.container'))
