/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

require('../styles/results.scss');

var Result = React.createClass({
    render: function() {
        return (
            <div className="results" id="results" >
                <Grommet>
                    <header>
                        <Heading tag="h2" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                    <h>
                        THANK YOU
                    </h>
                </Grommet>
            </div>
        );
    }
});

module.exports = Result;