/* React includes */
var React = require('react');

/* Component includes */
var Application = require('../components/application/Application');

/* Ajax includes */
window.jQuery = require('jquery');
window.$ = window.jQuery;

function getData(url) {
	$.get(url, function(data) {
		var retrievedData = [];
		for(var m = 0; m < data.length; m++) {
			retrievedData[m] = [];
		}
		for(var i = 0; i < data.length; i++) {
			var valueAbbrev = data[i].key || data.keywords[i].key;
			var valueName = data[i].name || data.keywords[i].name;
			retrievedData[i][0] = valueAbbrev;
			retrievedData[i][1] = valueName;
		}
		return retrievedData;
	}.bind(this));
}

function postData(url, data) {
	$.ajax({
		type: 'POST',
		url: url,
		data: data,
		crossDomain: true,
		dataType: 'application/json',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		success: function(data) {
			console.log('Total results found: ' + data.result.total);
			return data.result.total;
		}
	});
}

var ApplicationContainer = React.createClass({
	getInitialState: function() {
		return {
			stateOptions: [],
			skillsOptions: [],
			universityOptions: [],
			highSchoolOptions: []
		}
	},
	componentWillMount: function() {
		var highSchoolData = {
			resource_id: '102fd9bd-4737-401b-b88f-5c5b0fab94ec', //the resource id for high school data
			limit: 5,
			q: 'HIGH'
		};

		/* https://inventory.data.gov/api/action/datastore_search?resource_id=38625c3d-5388-4c16-a30f-d105432553a4 for college */

		var states = getData(this.props.route.statesUrl);
		var skills = getData(this.props.route.skillsUrl);
		var universities = getData(this.props.route.universityUrl);
		var highSchools = getData('https://inventory.data.gov/api/action/datastore_search?resource_id=102fd9bd-4737-401b-b88f-5c5b0fab94ec&q=HIGH');

		if(this.isMounted()) {
			this.setState({
				stateOptions: states,
				skillsOptions: skills,
				universityOptions: universities,
				highSchoolOptions: highSchools 
			});
		}
	},
	render: function() {
		return (
			<Application header={this.props.route.header} 
			stateOptions={this.state.stateOptions} 
			skillsOptions={this.state.skillsOptions} 
			universityOptions={this.state.universityOptions} 
			highSchoolOptions={this.state.highSchoolOptions} />
		)
	}
});

module.exports = ApplicationContainer;