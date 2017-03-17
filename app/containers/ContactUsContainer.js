/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var ContactUs = require('../components/ContactUs');

var ContactUsContainer = React.createClass({
    render: function() {
        return <ContactUs
                header={this.props.route.header} />
    }
});

module.exports = ContactUsContainer;