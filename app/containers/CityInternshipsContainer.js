/* React includes */
var React = require('react');
var PropTypes = React.PropTypes;

/* Component includes */
var CityInternships = require('../components/CityInternships');

var CityInternshipsContainer = React.createClass({
    render: function() {
        return <CityInternships
                header={this.props.route.header} />
    }
});

module.exports = CityInternshipsContainer;