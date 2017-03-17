/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var Admin = require('../components/Admin');

var AdminContainer = React.createClass({
    render: function() {
        return <Admin
                header={this.props.route.header} />
    }
});

module.exports = AdminContainer;