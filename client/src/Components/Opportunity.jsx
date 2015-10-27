var React = require('react');

var Opportunity = React.createClass({
  render: function render() {
    return (
      <div style={{'marginBottom': '1%'}}> 
        <div>Opportunity Name: {this.props.opportunityName} </div> 
        <div>Date: {this.props.date} </div>
        <div>Account Name: {this.props.accountName} </div>
      </div>
      )
  }
})

module.exports = Opportunity;
