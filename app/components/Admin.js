/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Paragraph = require('grommet/components/Paragraph');

/* Template include */
var Template = require('../components/supportComponents/Template');

var Admin = React.createClass({
    render: function() {
        return (
            <Template class="admin" id="template" header="Admin Page" />
        );
    }
});

module.exports = Admin;