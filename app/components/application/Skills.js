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
var Calendar = require('grommet/components/Calendar');
var SearchInput = require('grommet/components/SearchInput');

var InputField = require('../../components/supportComponents/Fields.js').InputField;
var SelectField = require('../../components/supportComponents/Fields.js').SelectField;
var CalendarField = require('../../components/supportComponents/Fields.js').CalendarField;
var GenderField = require('../../components/supportComponents/Fields.js').GenderField;
var EducationField = require('../../components/supportComponents/Fields.js').EducationField;
var HighestEduField = require('../../components/supportComponents/Fields.js').HighestEduField;
var SearchInputField = require('../../components/supportComponents/Fields.js').SearchInputField;
var TextAreaField = require('../../components/supportComponents/Fields.js').TextAreaField;
var MonthField = require('../../components/supportComponents/Fields.js').MonthField;
var YearField = require('../../components/supportComponents/Fields.js').YearField;
var StarField = require('../../components/supportComponents/Fields.js').StarField;
var LeadershipField = require('../../components/supportComponents/Fields.js').LeadershipField;
var SkillsCategoryField = require('../../components/supportComponents/Fields.js').SkillsCategoryField;

function unsetRBsSkills() {
	document.getElementById('languageRB').checked = false;
	document.getElementById('softwareRB').checked = false;
	document.getElementById('leadershipRB').checked = false;
	document.getElementById('interestsRB').checked = false;

	var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
	for(var i = 0; i < rbLabels.length; i++) {
		rbLabels[i].style.display = "none";
	}
}

function languageScroll() {
    $('.language')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSkills();
    document.getElementById('languageRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[0].style.display = "block";
}

function softwareScroll() {
    $('.softwareDiv')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSkills();
    document.getElementById('softwareRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[1].style.display = "block";
}

function leadershipScroll() {
    $('.leadershipDiv')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSkills();
    document.getElementById('leadershipRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[2].style.display = "block";
}

function interestsScroll() {
    $('.interests')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsSkills();
    document.getElementById('interestsRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[3].style.display = "block";
}

function skillsTabIsActive() {
	var tab4Classname = document.getElementById('tab-4').className;
	var tab4Selected = (tab4Classname.indexOf("active") !== -1);

	if(tab4Selected) {
		return 1;
	}
	else {
        return 0;
    }
}


var ApplicationSkills = React.createClass({
	unsetRBsSkills: function() {
		document.getElementById('languageRB').checked = false;
		document.getElementById('softwareRB').checked = false;
		document.getElementById('leadershipRB').checked = false;
		document.getElementById('interestsRB').checked = false;

		var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
		for(var i = 0; i < rbLabels.length; i++) {
			rbLabels[i].style.display = "none";
		}
	},
    render: function() {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            if(skillsTabIsActive()) {
                var currScrollTop = $(window).scrollTop();
                if(currScrollTop >= lastScrollTop) { //scrolling down
                    if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
                        languageScroll();
                    }
                    if(($(window).scrollTop() >= 300) && ($(window).scrollTop() < 350)) {
                        softwareScroll();
                    }
                    if(($(window).scrollTop() >= 600) && ($(window).scrollTop() < 650)) {
                        leadershipScroll();
                    }
                    if(($(window).scrollTop() >= 1200) && ($(window).scrollTop() < 1250)) {
                        interestsScroll();
                    }
                }
                else {
                    if(($(window).scrollTop() >= 1200) && ($(window).scrollTop() < 1250)) {
                        leadershipScroll();
                    }
                    if(($(window).scrollTop() >= 800) && ($(window).scrollTop() < 850)) {
                        softwareScroll();
                    }
                    if(($(window).scrollTop() >= 500) && ($(window).scrollTop() < 550)) {
                        languageScroll();
                    }
                }
                lastScrollTop = currScrollTop;
            }
        });
        return (
            <div id="skillsTab" className="main">
                <div className="title">
                    <Label uppercase={true}>
                        Skills
                    </Label>
                </div>
                <div className="sidebar">
                    <Sidebar>
                        <Menu>
                            <RadioButton defaultChecked={true} id="languageRB" label="Language" onChange={languageScroll}/>
                            <RadioButton id="softwareRB" label="Software" onChange={softwareScroll}/>
                            <RadioButton id="leadershipRB" label="Leadership" onChange={leadershipScroll}/>
                            <RadioButton id="interestsRB" label="Interests & Activities" onChange={interestsScroll}/>
                        </Menu>
                    </Sidebar>
                </div>
                <div className="content">
                    <div className="language" ref="language">
                        <SearchInputField fieldName="Language" fieldID="language" changeFunc={this.valueChange} />
                        <SearchInputField fieldName="Proficiency" fieldID="proficiency" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={softwareScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={softwareScroll}>NEXT</Button>
                    </div>
                    <div className="softwareDiv" ref="softwareDiv">
                        <SearchInputField fieldName="Software" fieldID="software" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={leadershipScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={leadershipScroll}>NEXT</Button>
                    </div>
                    <div className="leadershipDiv" ref="leadershipDiv">
                        <LeadershipField fieldName="Select Type:" fieldID="leadershipType" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption}  />
                        <InputField fieldName="Name of Position | Achievement" fieldID="nameOfPosition" />
                        <SkillsCategoryField fieldName="Select Category:" fieldID="leadershipCategory" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <InputField fieldName="Organization Name" fieldID="organization" changeFunc={this.valueChange} />
                        <MonthField fieldName="Start Month" fieldID="startMonth" changeFunc={this.valueChange} />
                        <YearField fieldName="Start Year" fieldID="startYear" changeFunc={this.valueChange} />
                        <MonthField fieldName="End Month" fieldID="endMonth" changeFunc={this.valueChange} />
                        <YearField fieldName="End Year" fieldID="endYear" changeFunc={this.valueChange} />
                        <TextAreaField fieldName="Description" fieldID="description" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={interestsScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={interestsScroll}>NEXT</Button>
                    </div>
                    <div className="interests" ref="interests">
                        <TextAreaField fieldName="Interests & Activities" fieldID="activities" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={interestsScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={interestsScroll}>SUBMIT</Button>
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

module.exports = ApplicationSkills;