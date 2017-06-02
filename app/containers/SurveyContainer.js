/**
 * Created by Ankit Verma on 5/23/17.
 */
/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Survey = require('../components/application/Survey');

var SurveyContainer = React.createClass({
    render: function() {
        return <Survey
            header={this.props.route.header} />
    }
});

module.exports = SurveyContainer;