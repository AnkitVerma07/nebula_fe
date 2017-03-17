/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Resume = require('../components/Resume');

var ResumeContainer = React.createClass({
    render: function() {
        return <Resume header={this.props.route.header} />
    }
});

module.exports = ResumeContainer;