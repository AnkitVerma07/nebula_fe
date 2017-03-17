/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var ContactUsEmployer = require('../components/ContactUsEmployer');

var ContactUsEmployerContainer = React.createClass({
    render: function() {
        return <ContactUsEmployer 
                header={this.props.route.header} />
    }
});

module.exports = ContactUsEmployerContainer;