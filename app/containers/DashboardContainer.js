/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Dashboard = require('../components/Dashboard');

var DashboardContainer = React.createClass({
    render: function() {
        return <Dashboard
                header={this.props.route.header} />
    }
});

module.exports = DashboardContainer;