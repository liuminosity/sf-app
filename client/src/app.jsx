var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;
var IndexRoute = ReactRouter.IndexRoute;
var ReactDOM = require('react-dom');

var LoginButton = require('./components/LoginButton');
var Dashboard = require('./components/Dashboard');
var salesforceAuth = require('../../salesforceAuth');

//temp data that will be replaced with salesforce data
var tempLeads = [
  {
    leadName: 'anthony lead',
    date: '10-21-2015',
    accountName: 'anthony account',
  },
  {
    leadName: 'bob lead',
    date: '10-22-2015',
    accountName: 'bob account',
  },
  {
    leadName: 'John lead',
    date: '10-23-2015',
    accountName: 'john account',
  }
];

//temp data that will be replaced with salesforce data
var tempOps = [
  {
    opportunityName: 'anthony opportunity',
    date: '10-21-2015',
    accountName: 'anthony account',
  },
  {
    opportunityName: 'bob opportunity',
    date: '10-22-2015',
    accountName: 'bob account',
  },
  {
    opportunityName: 'John opportunity',
    date: '10-23-2015',
    accountName: 'john account',
  }
];


var App = React.createClass({

  getInitialState: function getInitialState() {
    return {
      userIsAuthenticated: false,
      leadsArray: tempLeads,
      opportunitiesArray: tempOps

    }
  },
  // mixins: [ReactRouter.Navigation],

  //Function runs after view is rendered. Checks for access token and stores it in state
  componentWillMount: function componentWillMount() {
    var _this = this;
    console.log(this.props);
    if (this.props.params.token) {
      var params = _this.props.params.token.split('&')
      console.log(params);
      var access_token = params[0].slice(13);
      console.log('this is access token',access_token)
      this.setState({
        userIsAuthenticated: true,
        access_token: access_token
      })
    } else {
      console.log('log in');
    }
  },

  LoginButtonBlock: function LoginButtonBlock() {
    return this.state.userIsAuthenticated ? <div/> : <LoginButton />;
  },

  DashboardBlock: function DashboardBlock() {
    return this.state.userIsAuthenticated ? <Dashboard leadsArray={ this.state.leadsArray } opportunitiesArray={ this.state.opportunitiesArray }/> : <div/>;
  },

  render: function render() {
    return (
      <div> 
        <div>
          <header className='site-header promote-layer' style={this.styles.header}>
              <a style={this.styles.banner} className='dage-logo' href='/'> Salesforce Demo App </a>
          </header>
        </div>
        { this.LoginButtonBlock() }
        { this.DashboardBlock() }

      </div>
    );
  },

  styles:{
    banner:{
      'textAlign':'center',
      'color':'#75567b',
      'fontSize':'30px',
      'font':'Avenir sans-serif',
      'padding':'auto',
      'marginTop':'20px',
    },
    header:{
      'top':'0',
      'backgroundColor':'#fff',
    },
  },
})

//Handles routes
var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={App}/>
    <Route path=':token' component={App}/>
  </Route>

);

// React.createElement(Route, {name: 'app', path : '/:token', component: App}),
// React.createElement(Route, {name: 'app', path : '/asdf/:token', component: App})

ReactDOM.render(<Router>{routes}</Router>, document.querySelector('.container'))
