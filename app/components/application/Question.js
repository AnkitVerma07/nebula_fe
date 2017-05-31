/**
 * Created by Ankit Verma on 5/24/17.
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
var StarField = require('../../components/supportComponents/Fields.js').StarField;

/* SASS includes */
require('../../styles/application.scss');

function FiveStarChoice(props) {
    return (
      <StarField fieldName="Rate your Job Experience" fieldID="ratingsBox" changeFunc={this.valueChange} />
    );
}

function SelectChoice(props) {
  return (
    <Select
      name="form-field-name"
      value={props.val}
      options={props.options}
      onChange={(value) => {
        this.logChange(value);
        props.answerCallback(value.value, props.question.question);
      }}
    />
  );
}

function Choices(props) {
    const type = props.question.type;
    if (type === '5star') {
        return <FiveStarChoice question={props.question} answerCallback={props.answerCallback}/>;
    } else if(type === 'multipleChoice') {
      return <SelectChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val}/>;
    }
}

var Question = React.createClass({
  componentDidMount: function() {

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
    }
  },
  logChange: function(val) {
    this.setState({ val });
  },


  render: function() {

    return (
            <div  className="question" ref="question">
              <p>
                {this.props.question.id}
              </p>
              <Label className="question_text">
                {this.props.question.question}
              </Label>
                <Choices question={this.props.question} answerCallback={this.props.answerCallback} options={this.state.options} val={this.state.val}/>
            </div>
    )
  }
});

module.exports = Question;