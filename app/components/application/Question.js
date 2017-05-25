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

/* SASS includes */
require('../../styles/application.scss');


var Question = React.createClass({
  componentDidMount: function() {

    var options = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' }
    ];
    this.setState({
      options: options,

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
              <Select
                name="form-field-name"
                value={this.state.val}
                options={this.state.options}
                onChange={(value) => {
                  this.logChange(value);
                  this.props.answerCallback(value.value, this.props.question.question);
                }}
              />
            </div>
    )
  }
});

module.exports = Question;