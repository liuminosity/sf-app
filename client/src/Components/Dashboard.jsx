var React = require('react');
var Lead = require('./Lead');
var Opportunity = require('./Opportunity');

var Dashboard = React.createClass({
  render: function render() {
    console.log('this is props', this.props);
    var leadsArray = [];
    var opportunitiesArray = [];
    //constructs leadsArray with data, currently filled with dummy data from app.jsx
    for (var i = 0; i < this.props.leadsArray.length; i++) {
      console.log(this.props.leadsArray[i]);
      leadsArray.push(
        <Lead
          leadName={this.props.leadsArray[i].leadName}
          date={this.props.leadsArray[i].date}
          accountName={this.props.leadsArray[i].accountName}/>
        )
    };
    //constructs opportunitiesArray with data, currently filled with dummy data from app.jsx
    for (var i = 0; i < this.props.opportunitiesArray.length; i++) {
      opportunitiesArray.push(
        <Opportunity
          opportunityName={this.props.opportunitiesArray[i].opportunityName}
          date={this.props.opportunitiesArray[i].date}
          accountName={this.props.opportunitiesArray[i].accountName}/>
        )
    }

    return (
      <div>
        Leads:
        {leadsArray}
        Opportunities:
        {opportunitiesArray}
      </div>

      )
  }  

});

module.exports = Dashboard;
