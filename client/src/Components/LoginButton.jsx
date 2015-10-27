var React = require('react');
var salesforceAuth = require('../../../salesforceAuth.js');

var LoginButton = React.createClass({
  // mixins: [ReactRouter.Navigation],

  //Action that is triggered once user hits login. 
  submitLogin: function submitLogin() {

    var salesforceLoginUrl = 'https://login.salesforce.com/services/oauth2/authorize?response_type=token' +
      '&client_id=' + salesforceAuth.consumerKey +
      '&redirect_uri=' + salesforceAuth.callbackURL;
    window.location.assign(salesforceLoginUrl);


  },

  render: function render() {
    return (
      <div>
        <span onClick={ this.submitLogin } style={{cursor:'pointer'}}>Log into SalesForce</span>
      </div>
      );
  },
})

module.exports = LoginButton;
