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

var NebulaFooter = require('../../components/supportComponents/Footer.js');

/* Grommet includes */
require('grommet/grommet.min.css');
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Label = require('grommet/components/Label');
var Button = require('grommet/components/Button');
var LinkNext = require('grommet/components/icons/base/LinkNext');
var Form = require('grommet/components/Form');
var FormField = require('grommet/components/FormField');
var SearchInput = require('grommet/components/SearchInput');
var Tabs = require('grommet/components/Tabs');
var Tab = require('grommet/components/Tab');
var Sidebar = require('grommet/components/Sidebar');
var Anchor = require('grommet/components/Anchor');
var Menu = require('grommet/components/Menu');
var Calendar = require('grommet/components/Calendar');
var RadioButton = require('grommet/components/RadioButton');


/* SASS includes */
require('../../styles/survey.scss');


var Survey = React.createClass({
    componentDidMount: function() {
    document.body.style.overflow = "hidden";
        $.ajax({
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            url: 'http://104.197.97.67:8080/benapi/surveyInfo/getSurvey/' + this.props.params.surveyId,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                this.setState({
                    survey: response,
                    questions: response.questionList
                });

            },
            error : (xhr, status) => {
               // alert('Sorry, there was a problem!');
            },
        });

    },
    getInitialState: function() {
        return {
            questions: [],
          test_taken_data: [],
            score: 0,
            survey: {
                title: null,
                source: null
            }
        }
    },

    renderSubmitButton: function() {
        return (
                <Button id="personalButton" fill={true} plain={true} onClick={() => {
                    this.submitAssesment();
                    this.goToResultPage();
                }}>SUBMIT</Button>
        );
    },

    renderNextButton: function(index) {
        return (
            <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {
                const nextQuestionObject = this.state.questions[index + 1];
                if (nextQuestionObject) {
                    const nextQuestionRef = this.refs[nextQuestionObject.id];
                    if (nextQuestionRef){
                        nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                    }
                }
            }} label="NEXT" />
        );
    },

    submitAssesment: function() {
        let userData = {
            answersList: this.state.test_taken_data
        };

        var D = JSON.stringify(userData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "application/json",
            crossDomain: true,
            url: 'http://104.197.97.67:8080/benapi/surveyInfo/'+ 1 + '/surveyTaken/' + this.props.params.surveyId,
            data: D,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                console.log(response);
            },
            error : (xhr, status) => {
           //     alert('Sorry, there was a problem!');
            },
        });
    },

    goToResultPage: function() {
        ReactRouter.browserHistory.push("/#/results");
        window.location.reload();
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
            <div className="survey">
                <Grommet>
                    <header>
                        <a href="http://localhost:8080/#/login">
                            <img src="/app/styles/logos/nebulaLogoWhite.png" />
                        </a>
                    </header>
                    <div className="question-tabs">
            <div id="question-tag" className="main">
                <div className="title">
                    <header>
                        <Heading tag="h2" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                </div>
                <div className="content">

                    <div className="personal" ref="personal">
                        <div className='questions' ref='questions'>
                        <h>
                            {this.state.survey.title}
                        </h>
                        <p className="intro-para">
                            Our mission is to unite the most talented people with the most rewarding opportunities. Your experience is very important to us, and we would love to learn more about it as you work with us.
                        </p>
                        <p className="intro-para">
                            Please invest five minutes to share your impression of the company you may be interviewing with. The information will be used to guide our efforts in accomplishing our mission only and your individual responses will not be shared with the organization.
                        </p>
                        <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {
                            const nextQuestionObject = this.state.questions[0];
                            if (nextQuestionObject) {
                                const nextQuestionRef = this.refs[nextQuestionObject.id];
                                if (nextQuestionRef){
                                    nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                                }
                            }
                        }} label="NEXT" />
                        </div>
                    </div>


                    <div className="personal" ref="personal">
                      {this.state.questions.map((question, index) => {


                        return (
                            <div className='questions' ref='questions'>
                              <div className={question.id} ref={question.id}>
                                <Question ref={question.id} answerCallback={this.questionCallback} question={question} key={parseInt(question.id)} />
                              </div>
                                { (index == this.state.questions.length-1) ? this.renderSubmitButton() : this.renderNextButton(index) }
                            </div>
                        )
                      })}
                    </div>
                </div>
                <div className="filler">
                </div>
            </div>
                    <NebulaFooter />
                    </div>
        </Grommet>


        </div>
        )
    }
});

module.exports = Survey;