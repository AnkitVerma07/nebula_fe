/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Login = require('../components/Login');

var LoginContainer = React.createClass({
    render: function() {
        return <Login
                header={this.props.route.header} />
    }
});

module.exports = LoginContainer;