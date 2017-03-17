/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* Template include */
var Template = require('../components/supportComponents/Template');

var AboutUs = React.createClass({
    render: function() {
        return (
            <Template class="aboutus" id="template" header="About Us" />
        );
    }
});

module.exports = AboutUs;