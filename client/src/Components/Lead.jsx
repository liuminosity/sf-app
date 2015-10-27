var React = require('react');

var Lead = React.createClass({
  render: function render() {
    console.log('this is props', this.props);
    return (
      <div style={{'marginBottom': '1%'}}> 
        <div>Lead Name: {this.props.leadName} </div> 
        <div>Date: {this.props.date} </div>
        <div>Account Name: {this.props.accountName} </div>
      </div>
      )
  }
})

module.exports = Lead;
