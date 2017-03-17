/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* Template include */
var Template = require('../components/supportComponents/Template');

var ContactUsEmployer = React.createClass({
    render: function() {
        return (
            <Template class="contactUsEmployer" id="template" header="Contact Us - Employer" />
        );
    }
});

module.exports = ContactUsEmployer;