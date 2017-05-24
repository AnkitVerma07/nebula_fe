/**
 * Created by Ankit Verma on 5/23/17.
 */
/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Assestment = require('../components/application/Assestment');

var AssestmentContainer = React.createClass({
    render: function() {
        return <Assestment
            header={this.props.route.header} />
    }
});

module.exports = AssestmentContainer;