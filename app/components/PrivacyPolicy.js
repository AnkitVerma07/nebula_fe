/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* Template include */
var Template = require('../components/supportComponents/Template');

var PrivacyPolicy = React.createClass({
    render: function() {
        return (
            <Template class="privacypolicy" id="template" header="Privacy Policy" />
        );
    }
});

module.exports = PrivacyPolicy;