/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* Template include */
var Template = require('../components/supportComponents/Template');

var TermsOfUse = React.createClass({
    render: function() {
        return (
            <Template class="termsofuse" id="template" header="Terms of Use" />
        );
    }
});

module.exports = TermsOfUse;