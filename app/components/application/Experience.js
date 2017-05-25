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
var FormField = require('grommet/components/FormField');

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

    addExp: (e) => {

        let compData= {
        };
        if(this.refs.company_name.value){
            compData.company_name = this.refs.company_name.value.trim();
        }
        if(this.refs.company_industry.value){
            compData.company_industry = this.refs.company_industry.value.trim();
        }

        if(this.refs.company_worth.value){
            compData.company_worth = this.refs.company_worth.value.trim();
        }

        var D = JSON.stringify(compData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/experienceInfo/insertUsrExpCompany/' + localStorage.getItem('user_id'),
            data: D,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                console.log(response);
            },
            error : (xhr, status) => {
                alert('Sorry, there was a problem!');
            },
        });



        let expData= {
        };
        if(this.refs.job_title.value){
            expData.job_title = this.refs.job_title.value.trim();
        }
        if(this.refs.job_responsibilities.value){
            expData.job_responsibilities = this.refs.job_responsibilities.value.trim();
        }
        if(this.refs.time_spent.value){
            expData.time_spent = this.refs.time_spent.value.trim();
        }
        if(this.refs.hourly_rate.value){
            expData.hourly_rate = this.refs.hourly_rate.value.trim();
        }

        var D = JSON.stringify(expData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/experienceInfo/insertUserExperience/' + localStorage.getItem('user_id'),
            data: D,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                console.log(response);
            },
            error : (xhr, status) => {
                alert('Sorry, there was a problem!');
            },
        });

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
                        <FormField className='company_name'>
                            <input type="text"  placeholder='Company Name' id='company_name' ref='company_name' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='company_industry'>
                            <input type="text"  placeholder='Company Industry' id='company_industry' ref='company_industry' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='company_worth'>
                            <input type="text"  placeholder='Company Worth' id='company_worth' ref='company_worth' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='job_title'>
                            <input type="text"  placeholder='Job Title' id='job_title' ref='job_title' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='job_responsibilities'>
                            <input type="text"  placeholder='Job Responsibilities' id='job_responsibilities' ref='job_responsibilities' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='time_spent'>
                            <input type="text"  placeholder='Time Spent' id='time_spent' ref='time_spent' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='hourly_rate'>
                            <input type="text"  placeholder='Hourly Rate' id='hourly_rate' ref='hourly_rate' onMouseOut={this.valueChange} />
                        </FormField>
                        <p>Date Started At:</p>
                        <Calendar fieldName="Started Date" fieldID="startedDate" onChange={this.valueChange} />
                        <p>Date Ended At (leave blank if current):</p>
                        <Calendar fieldName="Ended Date" fieldID="endedDate" onChange={this.valueChange} />

                        <StarField fieldName="Rate your Job Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={this.addExp}>SUBMIT</Button>
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