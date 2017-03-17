/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* SASS includes */
require('../../styles/supportSASS/template.scss');

var Template = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} id={this.props.id} >
                <Grommet>
                    <header>
                        <Heading tag="h2" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                </Grommet>
            </div>
        )
    }
});

module.exports = Template;