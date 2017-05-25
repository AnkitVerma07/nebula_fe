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

        var id = 1;
        $.ajax({
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/assestmentInfo/getAssestment/' + id,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                this.setState({
                    survey: response,

                });

            },
            error : (xhr, status) => {
                alert('Sorry, there was a problem!');
            },
        });

    },
    getInitialState: function() {
        return {
            questions: [{
                id: 1,
                text: 'do you like me?',
                type: 'negative',
                choices: ['1', '2', '3', '4', '5']
            }, {
              id: 2,
              text: 'do you love me?',
              type: 'postive',
              choices: ['1', '2', '3', '4', '5']
            }],
          test_taken_data: [],
          questions_taken: {}
        }
    },

    submitAssesment: function(e) {
      console.log('question', this.state)

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

    this.setState({
      test_taken_data: array
    });

  },

    render: function() {
        return (
            <div id="settingsTab" className="main">
                <div className="title">

                </div>
                <div className="content">
                    <div className="personal" ref="personal">

                      {this.state.questions.map((question) => {
                        return <Question ref={question.id} answerCallback={this.questionCallback} question={question} key={question.id} />
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