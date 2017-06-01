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
//var CheckBox = require('grommet/components/CheckBox');
var NumberInput = require('grommet/components/NumberInput');


var Select = require('react-select');
require('react-select/dist/react-select.css');

var Question = require('../../components/application/Question.js');

var StarField = require('../../components/supportComponents/Fields.js').StarField;

/* SASS includes */
require('../../styles/application.scss');

function InputFieldChoice(props) {
  return (
    <FormField className={props.question.question}>
      <input type="text"  placeholder='Your Value' id={props.question.id}  onMouseOut={(value) => {
        props.inputChange(value);
      }} />
      <p>Clicking outside the text field will submit your response.*</p>
    </FormField>
  );
}

function NPSChoice(props) {
  return (
    <div className={props.question.question} >
    </div>
  );
}

function FiveStarChoice(props) {
    return (
      <StarField fieldName="Rate your Job Experience" fieldID="ratingsBox" question={props.question} answerCallback={props.answerCallback} changeFunc={props.logChange} />
    );
}

function DropDownChoice(props) {
  return (
    <Select
      name="form-field-name"
      value={props.val}
      options={props.options}
      onChange={(value) => {
        props.logChange(value);
        props.answerCallback(value.value, props.question);
      }}
    />
  );
}


function SelectChoice(props) {
  return (
    <Menu>

    <RadioButton id={props.question.id + '-1'} label="Strongly Agree" onChange={() => {
      props.radiologChange('Strongly Agree', props.question.id + '-1', props.question.id);
      props.answerCallback('Strongly Agree', props.question);
    }}/>

    <RadioButton id={props.question.id + '-2'} label="Agree" onChange={() => {
    props.radiologChange('Agree', props.question.id + '-2', props.question.id);
    props.answerCallback('Agree', props.question);
    }}/>

      <RadioButton id={props.question.id + '-3'} label="Neither agree nor disagree" onChange={() => {
        props.radiologChange('Neither agree nor disagree', props.question.id + '-3', props.question.id);
        props.answerCallback('Neither agree nor disagree', props.question);
      }}/>
      <RadioButton id={props.question.id + '-4'} label="Disagree" onChange={() => {
        props.radiologChange('Disagree', props.question.id + '-4', props.question.id);
        props.answerCallback('Disagree', props.question);
      }}/>

      <RadioButton id={props.question.id + '-5'} label="Strongly Disagree" onChange={() => {
        props.radiologChange('Strongly Disagree', props.question.id + '-5', props.question.id);
        props.answerCallback('Strongly Disagree', props.question);
      }}/>

    </Menu>
  );
}

function MultiSelectChoice(props) {
  return (
    <Select
      multi
      simpleValue
      placeholder="You may pick more than one"
      value={props.val}
      options={props.options}
      onChange={(value) => {
        props.logChange(value);
        props.answerCallback(value, props.question);
      }}
    />
  );
}

function Choices(props) {
    const type = props.question.type;
    if (type === '5star') {
        return <FiveStarChoice question={props.question} answerCallback={props.answerCallback} logChange={props.logChange}/>;
    } else if(type === 'multipleChoice') {
      return <SelectChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} radiologChange={props.radiologChange}/>;
    } else if(type === 'dropdown') {
      return <DropDownChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'checkBox') {
      return <MultiSelectChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'NPS') {
      return <NPSChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'input') {
      return <InputFieldChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} inputChange={props.inputChange}/>;
    }
}

var Question = React.createClass({
  componentDidMount: function() {
    var options = [];
    if(this.props.question.choices){
       options = this.props.question.choices.map( (choice) => {
         let returnObj = {
           value: choice,
           label: choice
         };
        return returnObj;
      });
    }
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
  radiologChange: function(val, id, questionId) {
    document.getElementById(questionId + '-1').checked = false;
    document.getElementById(questionId + '-2').checked = false;
    document.getElementById(questionId + '-3').checked = false;
    document.getElementById(questionId + '-4').checked = false;
    document.getElementById(questionId + '-5').checked = false;
    document.getElementById(id).checked = true;
    this.setState({ val });
  },
  inputChange: function(e) {
    var key = e.target.id;
    var val = e.target.value;
    this.setState({ val });
    this.props.answerCallback(val, this.props.question);
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
                <Choices question={this.props.question} answerCallback={this.props.answerCallback}  options={this.state.options} val={this.state.val} logChange={this.logChange} radiologChange={this.radiologChange} inputChange={this.inputChange} npsChange={this.npsChange}/>
            </div>
    )
  }
});

module.exports = Question;