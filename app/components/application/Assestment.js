/**
 * Created by Ankit Verma on 5/23/17.
 */
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
var CheckBox = require('grommet/components/CheckBox');
var Select = require('react-select');
require('react-select/dist/react-select.css');
//var Checkbox = require('grommet/components/Checkbox');


var validateName = require('../supportComponents/Validation.js').validateName;
var validateEmail = require('../supportComponents/Validation.js').validateEmail;
var validatePassword = require('../supportComponents/Validation.js').validatePassword;
var validatePhone = require('../supportComponents/Validation.js').validatePhone;
var validateAddress = require('../supportComponents/Validation.js').validateAddress;
var validateZipcode = require('../supportComponents/Validation.js').validateZipcode;
var validateURL = require('../supportComponents/Validation.js').validateURL;
var validateAboutMe = require('../supportComponents/Validation.js').validateAboutMe;
var validateGPA = require('../supportComponents/Validation.js').validateGPA;

var Question = require('../../components/application/Question.js');

var InputField = require('../supportComponents/Fields.js').InputField;
var SelectField = require('../supportComponents/Fields.js').SelectField;
var PrivacyField = require('../supportComponents/Fields.js').PrivacyField;

/* SASS includes */
require('../../styles/application.scss');


var Assestment = React.createClass({
    componentDidMount: function() {

        localStorage.setItem('assestment_id', 1)
        $.ajax({
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/assestmentInfo/getAssestment/' + localStorage.getItem('assestment_id'),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                console.log();
                this.setState({
                    survey: response,
                    questions: response.questionList
                });

            },
            error : (xhr, status) => {
                alert('Sorry, there was a problem!');
            },
        });


        var options = [
            { value: '1', label: 'Strong agreed' },
            { value: '2', label: 'agreed' },
            { value: '3', label: 'neither agree or disagree' },
            { value: '4', label: 'disagree' },
            { value: '5', label: 'Strong disagree' }
        ];

        this.setState({
            options: options
        });

    },
    getInitialState: function() {
        return {
            questions: [],
          test_taken_data: [],
            score: 0
        }
    },

    submitAssesment: function(e) {
      console.log('question', this.state);

        let updatedScore = this.state.score/this.state.questions.length;

        let userData = {
            score: updatedScore,
            answersList: this.state.test_taken_data
        };

        var D = JSON.stringify(userData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/assestmentInfo/'+ localStorage.getItem('user_id') + '/assestmentTaken/' + localStorage.getItem('assestment_id'),
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

  questionCallback: function(val, question) {

    let array = this.state.test_taken_data;

    let flag = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i].s == question) {
        array[i].i = parseInt(val);
        flag = false;
      }
    }

    if (flag) {
      array.push({
        s: question,
        i: parseInt(val)
      })
    }

     let totalScore = (this.state.score + val);
    this.setState({
      test_taken_data: array,
        score: totalScore
    });
  },

    notificationsScroll: function() {
        $('.notifications')[0].scrollIntoView({block: "start", behavior: "smooth"});
        unsetRBsSettings();
        document.getElementById('notificationsRB').checked = true;
        var rbLabels = $('.grommetux-radio-button__label');
        rbLabels[1].style.display = "block";
        console.log(this.state);
    },

    render: function() {
        return (
            <div id="settingsTab" className="main">
                <div className="title">

                </div>
                <div className="content">
                    <div className="personal" ref="personal">
                      {this.state.questions.map((question) => {

                        return (
                            <div className={question.id} ref={question.id}>
                            <Question ref={question.id} answerCallback={this.questionCallback} options={this.state.options}  question={question} key={question.id} />
                            </div>
                        )
                      })}

                    </div>

                    <div className="address" ref="address">
                        <FormField className='address1'>
                            <input type="text"  placeholder='Address 1' id='address1' ref='address1' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='address2'>
                            <input type="text"  placeholder='Address 2' id='address2' ref='address2' onMouseOut={this.valueChange} />
                        </FormField>
                        <FormField className='city'>
                            <input type="text"  placeholder='City' id='city' ref='city' onMouseOut={this.valueChange} />
                        </FormField>
                        <SelectField className="state" fieldName="State" fieldID="currentState" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <SelectField fieldName="Country" fieldID="currentCountry" changeFunc={this.valueChange} states={this.props.stateOptions} stateFunc={this.makeStateOption} />
                        <FormField className='zipcode'>
                            <input type="text"  placeholder='Zipcode' id='zipcode' ref='zipcode' onMouseOut={this.valueChange} />
                        </FormField>
                        <Button id="personalButton" fill={true} plain={true} onClick={this.submitAssesment}>SUBMIT</Button>
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

module.exports = Assestment;