/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var AboutUs = require('../components/AboutUs');

var AboutUsContainer = React.createClass({
    render: function() {
        return <AboutUs
                header={this.props.route.header} />
    }
});

module.exports = AboutUsContainer;