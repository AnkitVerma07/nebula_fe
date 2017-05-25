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

// function highSchoolScroll() {
//     $('.highSchool')[0].scrollIntoView({block: "start", behavior: "smooth"});
//     unsetRBsAcademic();
//     document.getElementById('highSchoolRB').checked = true;
//     var rbLabels = $('.grommetux-radio-button__label');
//     rbLabels[0].style.display = "block";
// }
//
// function collegeScroll() {
//     $('.college')[0].scrollIntoView({block: "start", behavior: "smooth"});
//     unsetRBsAcademic();
//     document.getElementById('collegeRB').checked = true;
//     var rbLabels = $('.grommetux-radio-button__label');
//     rbLabels[1].style.display = "block";
// }

var ApplicationAcademic = React.createClass({

    addHS: function(e) {

        let hsData= {
        };
        if(this.refs.hs_name.value){
            hsData.highschool_name = this.refs.hs_name.value.trim();
        }
        if(this.refs.gpa.value){
            hsData.gpa = this.refs.gpa.value.trim();
        }
        if(this.refs.year_standing.value){
            hsData.year_standing = this.refs.year_standing.value.trim();
        }

        var D = JSON.stringify(hsData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/highschoolInfo/insertUserHighschool/' + localStorage.getItem('user_id'),
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

    addUni: function(e) {

        var D = JSON.stringify({
            qualification_earned: qualification_earned,
            year_standing: qual_year_standing,
            gpa: uni_gpa
        });
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/qualificationInfo/insertUserUniversity/' + localStorage.getItem('user_id'),
            data: D,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                console.log(response);
                this.setState({
                    qualId: response.id
                });
            },
            error : (xhr, status) => {
                alert('Sorry, there was a problem!');
            },
        });

        var U = JSON.stringify({
            uni_name: this.refs.uni_name.value
        });
        console.log(U);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/qualificationInfo/insertUniName/' + this.state.qualId,
            data: U,
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

        var C = JSON.stringify({
            college_name: college_name
        });
        console.log(C);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/qualificationInfo/insertCollegeName/' + this.state.qualId,
            data: C,
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

        var Ma = JSON.stringify({
            name: qual_major
        });
        console.log(Ma);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/qualificationInfo/insertMajor/' + this.state.qualId,
            data: Ma,
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

        var Mi = JSON.stringify({
            name: qual_minor
        });
        console.log(Mi);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/qualificationInfo/insertMinor/' + this.state.qualId,
            data: Mi,
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
//         var lastScrollTop = 0;
//         $(window).scroll(function() {
//             if(academicTabIsActive()) {
//                 var currScrollTop = $(window).scrollTop();
//                 if(currScrollTop >= lastScrollTop) { //scrolling down
//                     if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
//                         highSchoolScroll();
//                     }
//                     if(($(window).scrollTop() >= 250) && ($(window).scrollTop() < 300)) {
//                         collegeScroll();
//                     }
//                 }
//                 else {
//                     if(($(window).scrollTop() >= 400) && ($(window).scrollTop() < 450)) {
//                         highSchoolScroll();
//                     }
//                 }
//                 lastScrollTop = currScrollTop;
//             }
//         });


        {/*<div className="sidebar">*/}
            {/*<Sidebar>*/}
                {/*<Menu>*/}
                    {/*<RadioButton defaultChecked={true} id="highSchoolRB" label="High School" onChange={highSchoolScroll}/>*/}
                    {/*<RadioButton id="collegeRB" label="College" onChange={collegeScroll}/>*/}
                {/*</Menu>*/}
            {/*</Sidebar>*/}
        {/*</div>*/}
                                {/*<SelectField fieldName="High School Name" fieldID="highSchool" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />*/}
        {/*<MonthField className="graduationMonth" fieldName="Graduation Month" fieldID="graduationMonth" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />*/}
        {/*<YearField className="graduationYear" fieldName="Graduation Year" fieldID="graduationYear" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />*/}
        {/*<InputField fieldName="GPA" fieldID="gpa" changeFunc={this.valueChange} />*/}


        return (
            <div id="academicTab" className="main">
                <div className="title">
                    <Label uppercase={true}>
                        Academic Information
                    </Label>
                </div>
                <div className="content">
                    <div className="highSchool" ref="highSchool">
                        <h>HIGH SCHOOL</h>
                        <FormField className='hs_name'>
                            <input type="text"  placeholder='High School Name' id='hs_name' ref='hs_name' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='gpa'>
                            <input type="text"  placeholder='GPA' id='gpa' ref='gpa' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='year_standing'>
                            <input type="text"  placeholder='Year Standing' id='year_standing' ref='year_standing' onMouseOut={this.valueChange} />
                        </FormField>
                        <p>Date Started At:</p>
                        <Calendar fieldName="Started Date" fieldID="startedDate" onChange={this.valueChange} />
                        <p>Date Ended At (leave blank if current):</p>
                        <Calendar fieldName="Ended Date" fieldID="endedDate" onChange={this.valueChange} />
                        <StarField fieldName="Rate Your High School Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                    </div>
                    <div className="college" ref="college">
                        <h>QUALIFICATION</h>
                        <FormField className='uni_name'>
                            <input type="text"  placeholder='University Name' id='uni_name' ref='uni_name' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='college_name'>
                            <input type="text"  placeholder='College Name' id='college_name' ref='college_name' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='qual_major'>
                            <input type="text"  placeholder='Major' id='qual_major' ref='qual_major' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='qual_minor'>
                            <input type="text"  placeholder='Minor' id='qual_minor' ref='qual_minor' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='qualification_earned'>
                            <input type="text"  placeholder='Qualification Earned' id='qualification_earned' ref='qualification_earned' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='uni_gpa'>
                            <input type="text"  placeholder='GPA' id='uni_gpa' ref='uni_gpa' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='qual_year_standing'>
                            <input type="text"  placeholder='Year Standing' id='qual_year_standing' ref='qual_year_standing' onMouseOut={this.valueChange} />
                        </FormField>
                        <p>Date Started At:</p>
                        <Calendar fieldName="Started Date" fieldID="startedDate" onChange={this.valueChange} />
                        <p>Date Ended At (leave blank if current):</p>
                        <Calendar fieldName="Ended Date" fieldID="endedDate" onChange={this.valueChange} />
                        <StarField fieldName="Rate Your High School Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
                        <Button fill={true} plain={true} onClick={this.addUni}>SUBMIT</Button>
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