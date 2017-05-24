/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Paragraph = require('grommet/components/Paragraph');

/* SASS includes */
require('../styles/dashboard.scss');

var getProfile = require('../config/auth/AuthService.js').getProfile;
var logout = require('../config/auth/AuthService.js').logout;
var loggedIn = require('../config/auth/AuthService.js').loggedIn;
var getToken = require('../config/auth/AuthService.js').getToken;

var Dashboard = React.createClass({
    clickedResumeButton: function() {
        this.refs.resumeButton.click();
    },
    backButtonEvent: function(e) {
        e.preventDefault();
        ReactRouter.browserHistory.push("/#/login");
        window.location.reload();
    },
    componentDidMount: function() {
        window.onpopstate = this.backButtonEvent;
    },
    uploadResume: function(e) {
		e.preventDefault();
		alert('in uploadResume!');
		var formData = new FormData();
		formData.append('file', $(e.target.id)[0].files[0]);

		$.ajax({
			type: 'POST',
			url: 'http://ben.nebula.careers:8080/ben/benapi/userDocuments/saveResumeInfo/{userId}',
			data: formData,
			async: true,
			cache: false,
			contentType: false,
			enctype: 'multipart/form-data',
			processData: false,
			success: function(response) {
				alert('Submitted! Response from servers: ' + response);
			}
		});
		return false;
    },
    sendSignupToBen: function() {
		var dataObj = {
			"email": getProfile.email,
            "picture": getProfile.picture,
            "nickname": getProfile.nickname
		}
		var data = JSON.stringify(dataObj);
		$.ajax({
			type: 'POST',
			dataType: "application/json",
			crossDomain: true,
			url: 'http://ben.nebula.careers:8080/ben/benapi/userInfo/insertUser/',
			data: data,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		});
    },
    goToApplication: function(e) {
        e.preventDefault();
        ReactRouter.browserHistory.push("/#/application");
        window.location.reload();
    },

    goToAssestmentTest: function(e) {
        e.preventDefault();
        ReactRouter.browserHistory.push("/#/assestment");
        window.location.reload();
    },
    render: function() {
        var profile = getProfile;
        if(localStorage.getItem('signup') == "true") {
            this.sendSignupToBen();
        }
        return (
            <div className="dashboard">
                <Grommet>
                    <header>
                        <Heading tag="h2" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                    <div> 
                        <Paragraph size="large">
                            Hello there <b>{profile.nickname}</b>! Hope you're having a good day so far.
                        </Paragraph>
                        <div>
                            <div>
                                <input ref="resumeButton" type="file" value="Upload Resume" onChange={this.uploadResume}/>
                                <Button onClick={this.clickedResumeButton}>Upload Resume</Button>
                            </div>
                            <div>
                                <Button onClick={this.goToApplication}>Go to Application</Button>
                            </div>
                            <div>
                                <Button onClick={this.goToAssestmentTest}>Take an Assestment</Button>
                            </div>
                            <div>
                                <Button onClick={logout}>Log Out</Button>
                            </div>
                        </div>
                    </div>
                </Grommet>
            </div>
        );
    }
});

module.exports = Dashboard;