/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Graph = require('../components/Graph');

var GraphContainer = React.createClass({
    render: function() {
        return <Graph
                header={this.props.route.header} />
    }
});

module.exports = GraphContainer;