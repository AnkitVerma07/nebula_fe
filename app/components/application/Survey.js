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


var ReactCSSTransitionGroup =  require('react-addons-css-transition-group');

var Question = require('../../components/application/Question.js');

var Select = require('react-select');
require('react-select/dist/react-select.css');

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
            url: 'http://35.184.252.96/benapi/surveys/' + this.props.params.surveyId,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
                this.setState({
                    survey: response.result,
                    questions: response.result.survey_questions
                });
            },
            error : (xhr, status) => {
               // alert('Sorry, there was a problem!');
            },
        });

    },
    getInitialState: function() {
        return {
          activeIndex: 0,
            questions: [],
          test_taken_data: [],
            score: 0,
            val: '',
            val2: '',
            options2: [],
            options: [{
                value: "EMEA (Europe, Middle East & Africa",
                label: "EMEA (Europe, Middle East & Africa"
            },{
                value: "APAC (Asia-Pacific)",
                label: "APAC (Asia-Pacific)"
            },{
                value: "Americas",
                label: "Americas"
            }],
            survey: {
                title: null,
                source: null
            }
        }
    },

    renderSubmitButton: function() {
        return (
                <Button id="personalButton" fill={true} plain={true} onClick={this.submitAssesment}>SUBMIT</Button>
        );
    },

    renderNextButton: function(index) {
        const nextQuestionObject = this.state.questions[index + 1];
        const thenextQuestionObject = this.state.questions[index + 2];
        const currentQuestion = this.state.questions[index];
        if(currentQuestion.type === 'text' || currentQuestion.type === 'dropdownWInput' || currentQuestion.type === 'N/A' || currentQuestion.type === 'checkBox')
        return (
            <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {

                if (nextQuestionObject) {
                    const nextQuestionRef = this.refs[nextQuestionObject.id];
                    if (nextQuestionRef){
                        nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                        //this.refs[thenextQuestionObject.id].style.opacity = '0.3';
                        //this.refs[nextQuestionObject.id].style.opacity = null;
                    }
                }
              this.incrementActiveIndex();
            }} label="NEXT" />
        );
    },

    onValueChangeNextQuestion: function(index) {
                const nextQuestionObject = this.state.questions[index + 1];
                const thenextQuestionObject = this.state.questions[index + 2];
                if(!thenextQuestionObject){
                    const nextQuestionRef = this.refs[nextQuestionObject.id];
                    if (nextQuestionRef){
                        nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                        //this.refs[nextQuestionObject.id].style.opacity = null;
                        //nextQuestionRef.style.opacity = null;
                    }
                }
                if (nextQuestionObject) {
                    const nextQuestionRef = this.refs[nextQuestionObject.id];
                    if (nextQuestionRef){
                        nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                        //this.refs[thenextQuestionObject.id].style.opacity = '0.3';
                        //this.refs[nextQuestionObject.id].style.opacity = null;
                        //nextQuestionRef.style.opacity = null;
                    }
                }
      this.incrementActiveIndex();
    },

    submitAssesment: function() {
        let userData = {
            answers: this.state.test_taken_data
        };

        var D = JSON.stringify(userData);
        console.log(D);
        $.ajax({
            type: 'POST',
            dataType: "json",
            crossDomain: true,
            url: 'http://35.184.252.96/benapi/surveys/'+ 1 + '/surveyTaken/' + this.props.params.surveyId,
            data: D,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            success: (response) => {
              this.goToResultPage();
            },
            error : (xhr, status) => {
               alert('Sorry, there was a problem!'+ JSON.stringify(xhr));
            },
        });


    },

    goToResultPage: function() {
        ReactRouter.browserHistory.push("/#/results");
        window.location.reload();
    },

    logChange: function(val) {

        this.setState({ val });
        let options2 = [];
        if(val.value === 'EMEA (Europe, Middle East & Africa'){
            let array = ["Africa","Algeria","Cameroon","Egypt","Ghana","Kenya","Morocco","Nigeria","South Africa","Cape Town Area, South Africa","Durban Area, South Africa","Johannesburg Area, South Africa","Tanzania","Tunisia","Uganda","Zimbabwe","Europe","Austria","Belgium","Antwerp Area, Belgium","Brussels Area, Belgium","Bulgaria","Croatia","Czech Republic","Denmark","Copenhagen Area, Denmark","Odense Area, Denmark","Ålborg Area, Denmark","Århus Area, Denmark","Finland","France","Lille Area, France","Lyon Area, France","Marseille Area, France","Nice Area, France","Paris Area, France","Toulouse Area, France","Germany","Cologne Area, Germany","Frankfurt Am Main Area, Germany","Munich Area, Germany","Greece","Hungary","Ireland","Italy","Bologna Area, Italy","Milan Area, Italy","Rome Area, Italy","Turin Area, Italy","Venice Area, Italy","Lithuania","Netherlands","Almere Stad Area, Netherlands","Amsterdam Area, Netherlands","Apeldoorn Area, Netherlands","Breda Area, Netherlands","Eindhoven Area, Netherlands","Enschede Area, Netherlands","Groningen Area, Netherlands","Nijmegen Area, Netherlands","Rotterdam Area, Netherlands","The Hague Area, Netherlands","Tilburg Area, Netherlands","Utrecht Area, Netherlands","Norway","Oslo Area, Norway","Poland","Portugal","Lisbon Area, Portugal","Porto Area, Portugal","Romania","Russian Federation","Serbia","Slovak Republic","Spain","Barcelona Area, Spain","Madrid Area, Spain","Sweden","Switzerland","Geneva Area, Switzerland","Zürich Area, Switzerland","Turkey","Istanbul, Turkey","Ukraine","United Kingdom","Birmingham, United Kingdom","Brighton, United Kingdom","Bristol, United Kingdom","Cambridge, United Kingdom","Chelmsford, United Kingdom","Coventry, United Kingdom","Edinburgh, United Kingdom","Glasgow, United Kingdom","Gloucester, United Kingdom","Guildford, United Kingdom","Harrow, United Kingdom","Hemel Hempstead, United Kingdom","Kingston upon Thames, United Kingdom","Leeds, United Kingdom","Leicester, United Kingdom","London, United Kingdom","Manchester, United Kingdom","Milton Keynes, United Kingdom","Newcastle upon Tyne, United Kingdom","Northampton, United Kingdom","Nottingham, United Kingdom","Oxford, United Kingdom","Portsmouth, United Kingdom","Reading, United Kingdom","Redhill, United Kingdom","Sheffield, United Kingdom","Slough, United Kingdom","Southampton, United Kingdom","Tonbridge, United Kingdom","Twickenham, United Kingdom","Middle East","Bahrain","Israel","Jordan","Kuwait","Pakistan","Qatar","Saudi Arabia","United Arab Emirates"];
            options2 = array.map((entry) => {
               return {
                    value: entry,
                    label: entry
                };
            });
            this.setState({ options2: options2 });
        }
        if(val.value === 'APAC (Asia-Pacific)'){
            let array = ["Asia","Bangladesh","China","Beijing City, China","Guangzhou, Guangdong, China","Shanghai City, China","Shenzhen, Guangdong, China","Hong Kong","India","Andaman & Nicobar Islands","Andhra Pradesh","Hyderabad Area, India","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chattisgarh","Dadra& Nagar Haveli","Daman & Diu","Delhi","Goa","Gujarat","Ahmedabad Area, India","Vadodara Area, India","Haryana","Gurgaon, India","New Delhi Area, India","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Bengaluru Area, India","Kerala","Cochin Area, India","Lakshadweep","Madhya Pradesh","Indore Area, India","Maharashtra","Mumbai Area, India","Nagpur Area, India","Pune Area, India","Manipur","Meghalaya","Mizoram","Nagaland","Orissa","Pondicherry","Punjab","Chandigarh Area, India","Rajasthan","Jaipur Area, India","Sikkim","Tamil Nadu","Chennai Area, India","Coimbatore Area, India","Tripura","Uttar Pradesh","Lucknow Area, India","Noida Area, India","Uttarakhand","West Bengal","Kolkata Area, India","Indonesia","Greater Jakarta Area, Indonesia","Japan","Korea","Gangnam-gu, Seoul, Korea","Malaysia","Kuala Lumpur, Malaysia","Selangor, Malaysia","Nepal","Philippines","Singapore","Sri Lanka","Taiwan","Thailand","Vietnam","Oceania","Australia","Adelaide Area, Australia","Brisbane Area, Australia","Canberra Area, Australia","Melbourne Area, Australia","Perth Area, Australia","Sydney Area, Australia","New Zealand"];
            options2 = array.map((entry) => {
                return {
                    value: entry,
                    label: entry
                };
            });
            this.setState({ options2: options2 });
        }
        if(val.value === 'Americas'){
            let array = ["Latin America","Argentina","Bolivia","Brazil","Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Belo Horizonte Area, Brazil","Paraná","Curitiba Area, Brazil","Paraíba","Pará","Pernambuco","Piauí","Rio Grande do Norte","Rio Grande do Sul","Porto Alegre Area, Brazil","Rio de Janeiro","Rio de Janeiro Area, Brazil","Rondônia","Roraima","Santa Catarina","Sergipe","São Paulo","Campinas Area, Brazil","São Paulo Area, Brazil","Tocantins","Chile","Colombia","Costa Rica","Dominican Republic","Ecuador","Guatemala","Mexico","Mexico City Area, Mexico","Naucalpan de Juárez Area, Mexico","Panama","Peru","Puerto Rico","Trinidad and Tobago","Uruguay","Venezuela","North America","Canada","Alberta","Calgary, Canada Area","Edmonton, Canada Area","British Columbia","British Columbia, Canada","Vancouver, Canada Area","Manitoba","New Brunswick","Newfoundland And Labrador","Northwest Territories","Nova Scotia","Halifax, Canada Area","Nunavut","Ontario","Kitchener, Canada Area","London, Canada Area","Ontario, Canada","Toronto, Canada Area","Prince Edward Island","Quebec","Montreal, Canada Area","Ottawa, Canada Area","Quebec, Canada","Winnipeg, Canada Area","Saskatchewan","Yukon","United States","Alabama","Birmingham, Alabama Area","Alaska","Anchorage, Alaska Area","Arizona","Phoenix, Arizona Area","Tucson, Arizona Area","Arkansas","Little Rock, Arkansas Area","California","Fresno, California Area","Greater Los Angeles Area","Greater San Diego Area","Orange County, California Area","Sacramento, California Area","Salinas, California Area","San Francisco Bay Area","Santa Barbara, California Area","Stockton, California Area","Colorado","Colorado Springs, Colorado Area","Fort Collins, Colorado Area","Greater Denver Area","Connecticut","Hartford, Connecticut Area","New London/Norwich, Connecticut Area","Delaware","District Of Columbia","Washington D.C. Metro Area","Florida","Daytona Beach, Florida Area","Fort Myers, Florida Area","Fort Pierce, Florida Area","Gainesville, Florida Area","Lakeland, Florida Area","Melbourne, Florida Area","Miami/Fort Lauderdale Area","Orlando, Florida Area","Sarasota, Florida Area","Tampa/St. Petersburg, Florida Area","West Palm Beach, Florida Area","Georgia","Greater Atlanta Area","Jacksonville, Florida Area","Tallahassee, Florida Area","Hawaii","Hawaiian Islands","Idaho","Boise, Idaho Area","Illinois","Greater Chicago Area","Peoria, Illinois Area","Urbana-Champaign, Illinois Area","Indiana","Evansville, Indiana Area","Indianapolis, Indiana Area","Iowa","Kansas","Wichita, Kansas Area","Kentucky","Lexington, Kentucky Area","Louisville, Kentucky Area","Louisiana","Maine","Portland, Maine Area","Maryland","Baltimore, Maryland Area","Massachusetts","Greater Boston Area","Michigan","Fort Wayne, Indiana Area","Greater Detroit Area","Greater Grand Rapids, Michigan Area","Kalamazoo, Michigan Area","Lansing, Michigan Area","Saginaw, Michigan Area","Minnesota","Greater Minneapolis-St. Paul Area","Mississippi","Baton Rouge, Louisiana Area","Greater New Orleans Area","Jackson, Mississippi Area","Mobile, Alabama Area","Missouri","Columbia, Missouri Area","Davenport, Iowa Area","Des Moines, Iowa Area","Fayetteville, Arkansas Area","Greater St. Louis Area","Kansas City, Missouri Area","Springfield, Missouri Area","Montana","Nebraska","Greater Omaha Area","Lincoln, Nebraska Area","Nevada","Las Vegas, Nevada Area","Reno, Nevada Area","New Hampshire","New Jersey","New Mexico","Albuquerque, New Mexico Area","New York","Albany, New York Area","Buffalo/Niagara, New York Area","Greater New York City Area","Rochester, New York Area","Syracuse, New York Area","North Carolina","Charlotte, North Carolina Area","Raleigh-Durham, North Carolina Area","Wilmington, North Carolina Area","North Dakota","Ohio","Cincinnati Area","Cleveland/Akron, Ohio Area","Columbus, Ohio Area","Dayton, Ohio Area","Toledo, Ohio Area","Oklahoma","Oklahoma City, Oklahoma Area","Tulsa, Oklahoma Area","Oregon","Eugene, Oregon Area","Portland, Oregon Area","Pennsylvania","Allentown, Pennsylvania Area","Greater Philadelphia Area","Greater Pittsburgh Area","Harrisburg, Pennsylvania Area","Ithaca, New York Area","Lancaster, Pennsylvania Area","Scranton, Pennsylvania Area","Rhode Island","Providence, Rhode Island Area","South Carolina","Augusta, Georgia Area","Charleston, South Carolina Area","Columbia, South Carolina Area","Greenville, South Carolina Area","Savannah, Georgia Area","South Dakota","Sioux Falls, South Dakota Area","Tennessee","Asheville, North Carolina Area","Chattanooga, Tennessee Area","Greater Memphis Area","Greater Nashville Area","Huntsville, Alabama Area","Johnson City, Tennessee Area","Knoxville, Tennessee Area","Texas","Austin, Texas Area","Dallas/Fort Worth Area","El Paso, Texas Area","Houston, Texas Area","San Antonio, Texas Area","Utah","Greater Salt Lake City Area","Provo, Utah Area","Vermont","Burlington, Vermont Area","Springfield, Massachusetts Area","Virginia","Charlottesville, Virginia Area","Greensboro/Winston-Salem, North Carolina Area","Norfolk, Virginia Area","Richmond, Virginia Area","Roanoke, Virginia Area","Washington","Greater Seattle Area","Spokane, Washington Area","West Virginia","Wisconsin","Greater Milwaukee Area","Green Bay, Wisconsin Area","Madison, Wisconsin Area","Oshkosh, Wisconsin Area","Rockford, Illinois Area","Wyoming"];
            options2 = array.map((entry) => {
                return {
                    value: entry,
                    label: entry
                };
            });
            this.setState({ options2: options2 });
        }

        this.questionCallback(val.value, {
            id: "0"
        });
    },
    logChange2: function(val2) {
        this.setState({ val2 });
        this.questionCallback(val2.value, {
            id: "1"
        });
    },

    previousQuestionCallback: function(index) {
        if(index > 0)
            return (
                <Button ref="previousQuestion" fill={true} plain={true} onClick={() => {
                    const nextQuestionObject = this.state.questions[index - 1];
                    if (nextQuestionObject) {
                        const nextQuestionRef = this.refs[nextQuestionObject.id];
                        if (nextQuestionRef){
                            nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                        }
                    }
                    this.decrementActiveIndex();
                }}  >
                    <i className="up_arrow"/>
                </Button>
            );
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

  incrementActiveIndex: function() {
    this.setState({ activeIndex: this.state.activeIndex + 1 });
  },

  decrementActiveIndex: function() {
    this.setState({ activeIndex: this.state.activeIndex - 1 });
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
                        <Heading tag="h3" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                </div>
                <div className="content">
                    <div className="personal" ref="personal">
                        <div className={'questions ' + (this.state.activeIndex === 0 ? 'active' : '')} ref='questions'>
                            {/*<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>*/}
                                <h className="survey_title">
                                    {this.state.survey.title}
                                </h>
                            {/*</ReactCSSTransitionGroup>*/}

                        <p className="intro-para">
                            Our mission is to unite the most talented people with the most rewarding opportunities. Your experience is very important to us, and we would love to learn more about it as you work with us.
                        </p>
                        <p className="intro-para">
                            Please invest five minutes to share your impression of the company you may be interviewing with. The information will be used to guide our efforts in accomplishing our mission only and your individual responses will not be shared with the organization.
                        </p>
                        <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {
                            const nextQuestionRef = this.refs['question-1'];
                            const nextQuestionObject = this.state.questions[0];
                            const thenextQuestionRef = this.refs[nextQuestionObject.id];
                                if (nextQuestionRef) {
                                  nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                                  //thenextQuestionRef.style.opacity = '0.3';
                                  //nextQuestionRef.style.opacity = null;

                                }
                                this.incrementActiveIndex();
                            }} label="NEXT" />
                        </div>
                    </div>

                  <div className="personal" ref="personal">
                    <div className={'questions ' + (this.state.activeIndex === 1 ? 'active' : '')} ref='questions'>
                      <div  className="question" ref="question-1">
                        <p>
                          0
                        </p>
                        <Label className="question_text">
                          What is your Location?
                        </Label>
                        <Select
                          name="form-field-name"
                          value={this.state.val}
                          options={this.state.options}
                          onChange={(value) => {
                            this.logChange(value);
                          }}
                        />

                        <Label className="question_text">
                          Which Country/City?
                        </Label>
                        <Select
                          name="form-field-name"
                          value={this.state.val2}
                          options={this.state.options2}
                          onChange={(value) => {
                            this.logChange2(value);
                          }}
                        />
                      </div>
                      <Button ref="nextQuestion" fill={true} plain={true} onClick={() => {
                        const nextQuestionObject = this.state.questions[0];
                        const thenextQuestionObject = this.state.questions[1];
                        if (nextQuestionObject) {
                          const nextQuestionRef = this.refs[nextQuestionObject.id];
                          const thenextQuestionRef = this.refs[thenextQuestionObject.id];
                          if (nextQuestionRef){
                            nextQuestionRef.scrollIntoView({block: "start", behavior: "smooth"});
                          //  thenextQuestionRef.style.opacity = '0.3';
                         //   nextQuestionRef.style.opacity = null;
                          }
                        }
                        this.incrementActiveIndex();
                            }} label="NEXT" />
                        </div>
                    </div>

                    <div className="personal" ref="personal">
                      {this.state.questions.map((question, index) => {
                        return (
                            <div className={
                              'questions ' +
                              (this.state.activeIndex === index + 2 ? 'active ' : '') +
                              (this.state.activeIndex === index + 3 ? 'previous' : '')
                            } ref='questions'>
                              <div className={question.id} ref={question.id}>
                                  <div className="previous_questions">
                                      {this.previousQuestionCallback(index)}
                                  </div>
                                <Question ref={question.id} index={index} onValueChangeNextQuestion={this.onValueChangeNextQuestion} answerCallback={this.questionCallback} question={question} key={index} />
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