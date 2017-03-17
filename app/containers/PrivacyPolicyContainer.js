/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var PrivacyPolicy = require('../components/PrivacyPolicy');

var PrivacyPolicyContainer = React.createClass({
    render: function() {
        return <PrivacyPolicy
                header={this.props.route.header} />
    }
});

module.exports = PrivacyPolicyContainer;