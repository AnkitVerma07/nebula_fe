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
//var CheckBox = require('grommet/components/CheckBox');

var Question = require('../../components/application/Question.js');

var SelectField = require('../supportComponents/Fields.js').SelectField;

/* SASS includes */
require('../../styles/application.scss');


var Survey = React.createClass({
    componentDidMount: function() {

        localStorage.setItem('survey_id', 1);
        $.ajax({
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/surveyInfo/getSurvey/' + localStorage.getItem('survey_id'),
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

    },
    getInitialState: function() {
        return {
            questions: [],
          test_taken_data: [],
            score: 0
        }
    },

    submitAssesment: function(e) {
      console.log('state', this.state);

        let userData = {
            answersList: this.state.test_taken_data
        };

        var D = JSON.stringify(userData);
        console.log(D);
        // $.ajax({
        //     type: 'POST',
        //     dataType: "application/json",
        //     crossDomain: true,
        //     url: 'http://localhost:9090/nebulaben/benapi/surveyInfo/'+ localStorage.getItem('user_id') + '/surveyTaken/' + localStorage.getItem('survey_id'),
        //     data: D,
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     success: (response) => {
        //         console.log(response);
        //     },
        //     error : (xhr, status) => {
        //         alert('Sorry, there was a problem!');
        //     },
        // });
    },

  questionCallback: function(value, question) {

    let array = this.state.test_taken_data;

    let flag = true;

    for (let i = 0; i < array.length; i++) {
      if (array[i].i == question.id) {
        array[i].s = value;
        flag = false;
      }
    }

    if (flag) {
      array.push({
        s: value,
        i: question.id
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
                      {this.state.questions.map((question, index) => {

                        return (
                            <div className='questions' ref='questions'>
                              <div className={question.id} ref={question.id}>
                                <Question ref={question.id} answerCallback={this.questionCallback} question={question} key={question.id} />
                              </div>
                              <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {
                                const nextQuestionObject = this.state.questions[index + 1]
                                if (nextQuestionObject) {

                                  const nextQuestionRef = this.refs[nextQuestionObject.id]
                                  if (nextQuestionRef){
                                    nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                                  }
                               // $(`${question.id}`)[0].scrollIntoView({block: "start", behavior: "smooth"});
                              }
                              }} label="NEXT" />
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

module.exports = Survey;