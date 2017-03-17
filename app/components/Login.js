/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Label = require('grommet/components/Label');
var Tabs = require('grommet/components/Tabs');
var Tab = require('grommet/components/Tab');
var Form = require('grommet/components/Form');
var FormField = require('grommet/components/FormField');
var Mail = require('grommet/components/icons/base/Mail');
//var Checkbox = require('grommet/components/Checkbox');
var SocialFacebook = require('grommet/components/icons/base/SocialFacebook');
var SocialGoogle = require('grommet/components/icons/base/SocialGoogle');
var SocialWindows = require('grommet/components/icons/base/PlatformWindows');
var SocialTwitter = require('grommet/components/icons/base/SocialTwitter');
var Paragraph = require('grommet/components/Paragraph');
var Notification = require('grommet/components/Notification');

/* SASS includes */
require('../styles/login.scss');

/* Auth includes */
require('auth0-js');

var NebulaFooter = require('../components/supportComponents/Footer.js');

var validateName = require('../components/supportComponents/Validation.js').validateName;
var validateEmail = require('../components/supportComponents/Validation.js').validateEmail;
var validatePassword = require('../components/supportComponents/Validation.js').validatePassword;

var auth0 = require('../config/auth/AuthService.js').auth0;
var authCallbackUrl = 'http://localhost:8080/#/dashboard';
var reactRouterRedirect = '/#/dashboard';

var InputFieldLogin = require('../components/supportComponents/Fields.js').InputFieldLogin;
var WhatWeDoSection = require('../components/supportComponents/Fields.js').WhatWeDoSection;
var SocialMediaSet = require('../components/supportComponents/Fields.js').SocialMediaSet;

var auth0 = new Auth0({
    domain:       process.env.AUTH0_DOMAIN,
    clientID:     process.env.AUTH0_CLIENT_ID,
    callbackURL: authCallbackUrl,
    responseType: 'token',
    callbackOnLocationHash: true,
});

$(function() {
    var result = auth0.parseHash(window.location.hash);
    if (result && result.id_token) {
    auth0.getProfile(result.id_token, function (err, profile) {
        localStorage.setItem('id_token', result.id_token);
        localStorage.setItem('profile', JSON.stringify(profile));
        ReactRouter.browserHistory.push(reactRouterRedirect);
        window.location.reload();
    });
    } 
    else if (result && result.error) {
        console.log(result.error);
    }
});


var Login = React.createClass({
    getInitialState: function() {
        return {
            "agreedTerms": false,
            "firstName": "",
            "lastName": "",
            "email": "",
            "password": ""
        }
    },
    validate: function(key, value) {
        switch(key) {
            case "firstName":
            return validateName(key, value);

            case "lastName":
            return validateName(key, value);

            case "email":
            return validateEmail(key, value);

            case "password":
            return validatePassword(key, value);
        }
    },
	valueChange: function(e) {
		var key = e.target.id;
		var val = e.target.value;
		var obj = {};
		obj[key] = val;

        var validationResult = this.validate(key, val);
        if(validationResult) {
		    this.setState(obj);
        }
	},
    login: function(e) {
        var type;
        if(typeof e.target != "undefined") {
            type = e.target.id;
        }
        else {
            type = "regular";
        }
        var connectionType = "";

        if(type == "regular") {
            auth0.login({ 
                connection: 'Nebula-DB',
                username: this.state.email,
                password: this.state.password
            });
        }
        else {
            switch(type) {
                case "facebook":
                connectionType = "facebook";
                break;

                case "google":
                connectionType = "google-oauth2";
                break;

                case "twitter":
                connectionType = "twitter";
                break;
            }

            auth0.login({ 
                connection: connectionType,
            });
        }

        localStorage.setItem('signup', false);
        localStorage.setItem('login', true);
    },
    signup: function(e) {
        var type;
        if(typeof e.target != "undefined") {
            type = e.target.id;
        }
        else {
            type = "regular";
        }
        var connectionType = "";

        if(type == "regular") {
            auth0.signup({ 
                connection: 'Nebula-DB',
                username: this.state.email,
                password: this.state.password
            });
        }
        else {
            switch(type) {
                case "facebook":
                connectionType = "facebook";
                break;

                case "google":
                connectionType = "google-oauth2";
                break;

                case "twitter":
                connectionType = "twitter";
                break;
            }

            auth0.login({ 
                connection: connectionType,
            });
        }

        localStorage.setItem('signup', true);
        localStorage.setItem('login', false);
    },
    whichTabIsActive: function() {
        var tab0Classname = document.getElementById('tab-0').className;
        var tab0Selected = (tab0Classname.indexOf("active") !== -1);

        if(tab0Selected) {
            return 0;
        }
        else {
            return 1;
        }
    },
    handleKeyPress: function(e) {
        if(e.key === "Enter") {
            var tab0Active = this.whichTabIsActive();

            if(tab0Active) {
                this.signup("regular");
            }
            else {
                this.login("regular");
            }
        }
    },
    agreedTerms: function(e) {
        if(this.state.agreedTerms) {
            this.setState({
                "agreedTerms": false
            });
        }
        else {
            this.setState({
                "agreedTerms": true
            });
        }
    },
    render: function() {
        return (
            <div className="login" onKeyDown={this.handleKeyPress}>
                <Grommet>
                    <div className="container">
                        <div className="leftContainer">
                            <div className="altLogo">
                            </div>
                            <div className="welcome">
                                <Tabs>
                                    <Tab title="Sign Up" className="signUpTab">
                                        <Heading tag="h3" strong={true} margin="none">
                                            Welcome to Nebula.
                                        </Heading>
                                        <Label margin="small">
                                            Create your account by filling the form below.
                                        </Label>
                                        <div className="errorContainer">
                                            <div className="errorNotification" id="errorSignup">
                                                <Notification status="critical" message="Error message goes here" size="small"/>
                                            </div>
                                        </div>
                                        <Form>
                                            <InputFieldLogin fieldID="firstName" fieldName="First Name" changeFunc={this.valueChange} />
                                            <InputFieldLogin fieldID="lastName" fieldName="Last Name" changeFunc={this.valueChange} />
                                            <InputFieldLogin fieldID="email" fieldName="Email Address" changeFunc={this.valueChange} />
                                            <InputFieldLogin fieldID="password" fieldName="Password" changeFunc={this.valueChange} />
                                            <Checkbox onChange={this.agreedTerms} />
                                            <Paragraph id="agreement">
                                                I agree to the <a target="_blank" href="#/termsofuse">terms of use</a> and <a href="#/privacypolicy" target="_blank">privacy policy</a>
                                            </Paragraph>
                                            <SocialMediaSet authFunc={this.signup} />
                                            <Button className="loginButton" label="GET STARTED" fill={true} id="regular" onClick={this.signup}/>
                                        </Form>
                                    </Tab>
                                    <Tab title="Log In" className="loginTab">
                                        <Heading tag="h3" strong={true} margin="none">
                                            Welcome to Nebula.
                                        </Heading>
                                        <Label margin="small">
                                            Log in to get started.
                                        </Label>
                                        <div className="errorContainer">
                                            <div className="errorNotification" id="errorLogin">
                                                <Notification status="critical" message="Error shows up here" size="small"/>
                                            </div>
                                        </div>
                                        <Form>
                                            <InputFieldLogin fieldID="email" fieldName="Email Address" changeFunc={this.valueChange} />
                                            <InputFieldLogin fieldID="password" fieldName="Password" changeFunc={this.valueChange} />
                                            <SocialMediaSet authFunc={this.login} />
                                            <Button label="LOGIN" fill={true} id="regular" onClick={this.login} />
                                        </Form>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                        <div className="rightContainer">
                            <div className="logoDiv">
                                
                            </div>
                            <div className="whatWeDo">
                                <WhatWeDoSection tag="h4" headingText="What we do" class="" paraText="Seeking to resolve the paradoxical twin-crises of mass graduate under-employment and mass graduate employer un-fulfillment"/>
                                <div>        
                                    <WhatWeDoSection tag="h5" headingText="Academic" class="academic" paraText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"/>
                                    <WhatWeDoSection tag="h5" headingText="Experience" class="experience" paraText="Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in"/>
                                    <WhatWeDoSection tag="h5" headingText="Skills" class="skills" paraText="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa"/>
                                    <WhatWeDoSection tag="h5" headingText="Testing" class="testing" paraText="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"/>
                                </div>
                            </div>
                        </div>
                        <NebulaFooter />
                    </div>
                </Grommet>
            </div>
        );
    }
});

module.exports = Login;