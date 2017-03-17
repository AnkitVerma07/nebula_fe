/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var $ = require('jquery');

var Label = require('grommet/components/Label');
var Sidebar = require('grommet/components/Sidebar');
var Menu = require('grommet/components/Menu');
var RadioButton = require('grommet/components/RadioButton');
var Button = require('grommet/components/Button');
var FormField = require('grommet/components/FormField');
//var Checkbox = require('grommet/components/Checkbox');

var InputField = require('../../components/supportComponents/Fields.js').InputField;
var SelectField = require('../../components/supportComponents/Fields.js').SelectField;
var PrivacyField = require('../../components/supportComponents/Fields.js').PrivacyField;

function unsetRBsSettings() {
	document.getElementById('personalRB').checked = false;
	document.getElementById('notificationsRB').checked = false;
	document.getElementById('privacyRB').checked = false;
	document.getElementById('passwordRB').checked = false;
	document.getElementById('deleteAccountRB').checked = false;

	var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
	for(var i = 0; i < rbLabels.length; i++) {
		rbLabels[i].style.display = "none";
	}
}

function personalScroll() {
    $('.personal')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSettings();
    document.getElementById('personalRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[0].style.display = "block";
}

function notificationsScroll() {
    $('.notifications')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSettings();
    document.getElementById('notificationsRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[1].style.display = "block";
}
function privacyScroll() {
    $('.privacy')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSettings();
    document.getElementById('privacyRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[2].style.display = "block";
}
function passwordScroll() {
    $('.password')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSettings();
    document.getElementById('passwordRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[3].style.display = "block";
}
function deleteAccountScroll() {
    $('.deleteAccount')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSettings();
    document.getElementById('deleteAccountRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[4].style.display = "block";
}

function settingsTabIsActive() {
	var tab0Classname = document.getElementById('tab-0').className;
	var tab0Selected = (tab0Classname.indexOf("active") !== -1);

	if(tab0Selected) {
		return 1;
	}
	else {
        return 0;
    }
}

var ApplicationSettings = React.createClass({
	getInitialState: function() {
		return {}
	},
    render: function() {
		var lastScrollTop = 0;
		$(window).scroll(function() {
            if(settingsTabIsActive()) {
                var currScrollTop = $(window).scrollTop();
                if(currScrollTop >= lastScrollTop) {
                    if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
                        personalScroll();
                    } 
                    if(($(window).scrollTop() >= 500) && ($(window).scrollTop() < 550)) {
                        notificationsScroll();
                    }
                    if(($(window).scrollTop() >= 900) && ($(window).scrollTop() < 950)) {
                        privacyScroll();
                    }
                    if(($(window).scrollTop() >= 1400) && ($(window).scrollTop() < 1450)) {
                        passwordScroll();
                    }
                    if(($(window).scrollTop() >= 1900) && ($(window).scrollTop() < 1950)) {
                        deleteAccountScroll();
                    }
                }
                else {
                    if(($(window).scrollTop() >= 1700) && ($(window).scrollTop() < 1750)) {
                        passwordScroll();
                    }
                    if(($(window).scrollTop() >= 1400) && ($(window).scrollTop() < 1450)) {
                        privacyScroll();
                    }
                    if(($(window).scrollTop() >= 1000) && ($(window).scrollTop() < 1050)) {
                        notificationsScroll();
                    }
                    if(($(window).scrollTop() >= 600) && ($(window).scrollTop() < 650)) {
                        personalScroll();
                    }
                }
                lastScrollTop = currScrollTop;
            }
        });
        return (
            <div id="settingsTab" className="main">
                <div className="title">
                    <Label uppercase={true}>
                        Settings
                    </Label>
                </div>
                <div className="sidebar">
                    <Sidebar>
                        <Menu>
                            <RadioButton defaultChecked={true} id="personalRB" label="Personal" onChange={personalScroll}/>
                            <RadioButton id="notificationsRB" label="Notifications" onChange={notificationsScroll} />
                            <RadioButton id="privacyRB" label="Privacy" onChange={privacyScroll} />
                            <RadioButton id="passwordRB" label="Password" onChange={passwordScroll} />
                            <RadioButton id="deleteAccountRB" label="Delete Account" onChange={deleteAccountScroll} />
                        </Menu>
                    </Sidebar>
                </div>
                <div className="content">
                    <div className="personal" ref="personal">
                        <InputField fieldName="First Name" fieldID="firstName" changeFunc={this.valueChange} />
                        <InputField fieldName="Last Name" fieldID="lastName" changeFunc={this.valueChange} />
                        <InputField fieldName="Email" fieldID="email" changeFunc={this.valueChange} />
                        <SelectField fieldName="Timezone" className="timezone" fieldID="timezone" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <Button id="personalButton" fill={true} plain={true} onClick={notificationsScroll}>NEXT</Button>
                    </div>
                    <div className="notifications" ref="notifications">
                        <FormField>
                            <Checkbox fieldName="News" label="News about public profile views" fieldID="news" changeFunc={this.valueChange} />
                            <Checkbox fieldName="System" label="System updates and announcements" fieldID="system" changeFunc={this.valueChange} />
                            <Checkbox fieldName="Recommendations" label="Recommendations based on my account" fieldID="recommendations" changeFunc={this.valueChange} />
                            <Checkbox fieldName="Never" label="Never" fieldID="never" changeFunc={this.valueChange} />
                        </FormField>
                        <Button id="notificationsButton" fill={true} plain={true} onClick={privacyScroll}>NEXT</Button>
                    </div>
                    <div className="privacy" ref="privacy">
                        <PrivacyField fieldName="Public Profile Visible" fieldID="publicProfileVisible" changeFunc={this.valueChange} />
                        <Button id="privacyButton" fill={true} plain={true} onClick={passwordScroll}>NEXT</Button>
                    </div>
                    <div className="password" ref="password">
                        <InputField fieldName="Current Password" fieldID="currentPassword" changeFunc={this.valueChange} />
                        <InputField fieldName="New Password" fieldID="newPassword" changeFunc={this.valueChange} />
                        <InputField fieldName="Retype New Password" fieldID="retypeNewPassword" changeFunc={this.valueChange} />
                        <Button id="passwordButton" fill={true} plain={true} onClick={deleteAccountScroll}>NEXT</Button>
                    </div>
                    <div className="deleteAccount" ref="deleteAccount" >
                        <InputField fieldName="Delete Account" fieldID="deleteAccount" help="This action is final and you will be unable to recover any data" changeFunc={this.valueChange} />
                        <Button id="deleteButton" fill={true} plain={true} onClick={deleteAccountScroll}>Are you sure?</Button>
                        <Button id="submit" fill={true} plain={true} onClick={deleteAccountScroll}>SUBMIT</Button>
                    </div>
                    <div className="filler">
                    </div>
                </div>
                <div className="filler">
                </div>
            </div>
        )
    }
});

module.exports = ApplicationSettings;