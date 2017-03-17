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
var CareerGoalsField = require('../../components/supportComponents/Fields.js').CareerGoalsField;
var PositionField = require('../../components/supportComponents/Fields.js').PositionField;

function unsetRBsExperience() {
	document.getElementById('careerGoalsRB').checked = false;
	document.getElementById('experienceRB').checked = false;

	var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
	for(var i = 0; i < rbLabels.length; i++) {
		rbLabels[i].style.display = "none";
	}
}

function careerGoalsScroll() {
    $('.careerGoals')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsExperience();
    document.getElementById('careerGoalsRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[0].style.display = "block";
}

function experienceScroll() {
    $('.experience')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsExperience();
    document.getElementById('experienceRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[1].style.display = "block";
}

function experienceTabIsActive() {
	var tab3Classname = document.getElementById('tab-3').className;
	var tab3Selected = (tab3Classname.indexOf("active") !== -1);

	if(tab3Selected) {
		return 1;
	}
	else {
        return 0;
    }
}

var ApplicationExperience = React.createClass({
	unsetRBsExperience: function() {
		document.getElementById('careerGoalsRB').checked = false;
		document.getElementById('experienceRB').checked = false;

		var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
		for(var i = 0; i < rbLabels.length; i++) {
			rbLabels[i].style.display = "none";
		}
	},
    render: function() {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            if(experienceTabIsActive()) {
                var currScrollTop = $(window).scrollTop();

                if(currScrollTop >= lastScrollTop) {
                    if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
                        careerGoalsScroll();
                    }
                    if(($(window).scrollTop() >= 250) && ($(window).scrollTop() < 300)) {
                        experienceScroll();
                    }
                }
                else {
                    if(($(window).scrollTop() >= 400) && ($(window).scrollTop() < 450)) {
                        careerGoalsScroll();
                    }
                }
                lastScrollTop = currScrollTop;
            }
        });
        return (
            <div id="experienceTab" className="main">
                <div className="title">
                    <Label uppercase={true}>
                        Experience Information
                    </Label>
                </div>

                <div className="sidebar">
                    <Sidebar>
                        <Menu>
                            <RadioButton defaultChecked={true} id="careerGoalsRB" label="Career Goals" onChange={careerGoalsScroll} />
                            <RadioButton id="experienceRB" label="Experience" onChange={experienceScroll} />
                        </Menu>
                    </Sidebar>
                </div>

                <div className="content">
                    <div className="careerGoals" ref="careerGoals">
                        <CareerGoalsField fieldName="Career Goals" fieldID="careerGoals" changeFunc={this.valueChange} />
                        <PositionField fieldName="Ideal Position"  fieldID="idealPosition" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={experienceScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={experienceScroll}>NEXT</Button>
                    </div>
                    <div className="experience" ref="experience">
                        <InputField fieldName="Company Name" fieldID="companyName" changeFunc={this.valueChange} />
                        <InputField fieldName="Title" fieldID="companyTitle" changeFunc={this.valueChange} />
                        <MonthField fieldName="Start Month" fieldID="startMonth" changeFunc={this.valueChange} />
                        <YearField fieldName="Start Year" fieldID="startYear" changeFunc={this.valueChange} />
                        <MonthField fieldName="End Month" fieldID="endMonth" changeFunc={this.valueChange} />
                        <YearField fieldName="End Year" fieldID="endYear" changeFunc={this.valueChange} />
                        <SearchInputField fieldName="Responsibilities" fieldID="responsibilities" changeFunc={this.valueChange} />
                        <StarField fieldName="Rate your Job Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={experienceScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={experienceScroll}>SUBMIT</Button>
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

module.exports = ApplicationExperience;