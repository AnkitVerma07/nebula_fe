/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var TermsOfUse = require('../components/TermsOfUse');

var TermsOfUseContainer = React.createClass({
    render: function() {
        return <TermsOfUse
                header={this.props.route.header} />
    }
});

module.exports = TermsOfUseContainer;