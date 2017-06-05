/**
 * Created by Ankit Verma on 5/23/17.
 */
/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Result = require('../components/Result');

var ResultContainer = React.createClass({
    render: function() {
        return <Result
            header={this.props.route.header} />
    }
});

module.exports = ResultContainer;