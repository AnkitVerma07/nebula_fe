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

function unsetRBsAcademic() {
	document.getElementById('highSchoolRB').checked = false;
	document.getElementById('collegeRB').checked = false;

	var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
	for(var i = 0; i < rbLabels.length; i++) {
		rbLabels[i].style.display = "none";
	}
}

function academicTabIsActive() {
	var tab2Classname = document.getElementById('tab-2').className;
	var tab2Selected = (tab2Classname.indexOf("active") !== -1);

	if(tab2Selected) {
		return 1;
	}
	else {
        return 0;
    }
}

function highSchoolScroll() {
    $('.highSchool')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsAcademic();
    document.getElementById('highSchoolRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[0].style.display = "block";
}

function collegeScroll() {
    $('.college')[0].scrollIntoView({block: "start", behavior: "smooth"});
    unsetRBsAcademic();
    document.getElementById('collegeRB').checked = true;
    var rbLabels = $('.grommetux-radio-button__label');
    rbLabels[1].style.display = "block";
}

var ApplicationAcademic = React.createClass({
    render: function() {
        var lastScrollTop = 0;
        $(window).scroll(function() {
            if(academicTabIsActive()) {
                var currScrollTop = $(window).scrollTop();
                if(currScrollTop >= lastScrollTop) { //scrolling down
                    if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
                        highSchoolScroll();
                    }
                    if(($(window).scrollTop() >= 250) && ($(window).scrollTop() < 300)) {
                        collegeScroll();
                    }
                }
                else {
                    if(($(window).scrollTop() >= 400) && ($(window).scrollTop() < 450)) {
                        highSchoolScroll();
                    }
                }
                lastScrollTop = currScrollTop;
            }
        });
        return (
            <div id="academicTab" className="main">
                <div className="title">
                    <Label uppercase={true}>
                        Academic Information
                    </Label>
                </div>
                <div className="sidebar">
                    <Sidebar>
                        <Menu>
                            <RadioButton defaultChecked={true} id="highSchoolRB" label="High School" onChange={highSchoolScroll}/>
                            <RadioButton id="collegeRB" label="College" onChange={collegeScroll}/>
                        </Menu>
                    </Sidebar>
                </div>
                <div className="content">
                    <div className="highSchool" ref="highSchool">
                        <SelectField fieldName="High School Name" fieldID="highSchool" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <MonthField className="graduationMonth" fieldName="Graduation Month" fieldID="graduationMonth" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <YearField className="graduationYear" fieldName="Graduation Year" fieldID="graduationYear" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <InputField fieldName="GPA" fieldID="gpa" changeFunc={this.valueChange} />
                        <StarField fieldName="Rate Your High School Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={collegeScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={collegeScroll}>NEXT</Button>
                    </div>
                    <div className="college" ref="college">
                        <SelectField fieldName="College Name" fieldID="college" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <SelectField fieldName="School Name" fieldID="schoolName" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <InputField fieldName="Major" fieldID="major" changeFunc={this.valueChange} />
                        <InputField fieldName="Minor" fieldID="minor" changeFunc={this.valueChange} />
                        <MonthField className="graduationMonth" fieldName="Graduation Month" fieldID="graduationMonth" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <YearField className="graduationYear" fieldName="Graduation Year" fieldID="graduationYear" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <InputField fieldName="GPA" fieldID="gpa" changeFunc={this.valueChange} />
                        <StarField fieldName="Rate Your College Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={collegeScroll}>ADD ANOTHER</Button>
                        <Button fill={true} plain={true} onClick={collegeScroll}>SUBMIT</Button>
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

module.exports = ApplicationAcademic;