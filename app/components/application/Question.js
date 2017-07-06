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
    </FormField>


  );
}

function NPSChoice(props) {
  return (
    <div className={props.question.id} >
        <input type="button" className="button-nps" value="Very Unlikely | 1" onClick={() => {
            props.answerCallback('1', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="2" onClick={() => {
            props.answerCallback('2', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="3" onClick={() => {
            props.answerCallback('3', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="4" onClick={() => {
            props.answerCallback('4', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="5" onClick={() => {
            props.answerCallback('5', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="6" onClick={() => {
            props.answerCallback('6', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="7" onClick={() => {
            props.answerCallback('7', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="8" onClick={() => {
            props.answerCallback('8', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="9" onClick={() => {
            props.answerCallback('9', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
        <input type="button" className="button-nps" value="10 | Very Likely" onClick={() => {
            props.answerCallback('10', props.question);
            props.onValueChangeNextQuestion(props.index);
        }}/>
    </div>
  );
}

function FiveStarChoice(props) {
    return (
      <StarField fieldName="" fieldID="ratingsBox" index={props.index} onValueChangeNextQuestion={props.onValueChangeNextQuestion} question={props.question} answerCallback={props.answerCallback} changeFunc={props.logChange} />
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
        props.onValueChangeNextQuestion(props.index);
      }}
    />
  );
}


function SelectChoice(props) {
  return (

        <div>
    <RadioButton className="radio-button" id={props.question.id + '-1'} label="Strongly Agree" onChange={() => {
      props.radiologChange('Strongly Agree', props.question.id + '-1', props.question.id);
      props.answerCallback('Strongly Agree', props.question);
        props.onValueChangeNextQuestion(props.index);
    }}/>

    <RadioButton className="radio-button" id={props.question.id + '-2'} label="Agree" onChange={() => {
    props.radiologChange('Agree', props.question.id + '-2', props.question.id);
    props.answerCallback('Agree', props.question);
        props.onValueChangeNextQuestion(props.index);
    }}/>

      <RadioButton className="radio-button" id={props.question.id + '-3'} label="Neither agree nor disagree" onChange={() => {
        props.radiologChange('Neither agree nor disagree', props.question.id + '-3', props.question.id);
        props.answerCallback('Neither agree nor disagree', props.question);
          props.onValueChangeNextQuestion(props.index);
      }}/>
      <RadioButton className="radio-button" id={props.question.id + '-4'} label="Disagree" onChange={() => {
        props.radiologChange('Disagree', props.question.id + '-4', props.question.id);
        props.answerCallback('Disagree', props.question);
          props.onValueChangeNextQuestion(props.index);
      }}/>

      <RadioButton className="radio-button" id={props.question.id + '-5'} label="Strongly Disagree" onChange={() => {
        props.radiologChange('Strongly Disagree', props.question.id + '-5', props.question.id);
        props.answerCallback('Strongly Disagree', props.question);
          props.onValueChangeNextQuestion(props.index);
      }}/>

        </div>
  );
}

function DropDownWInput(props){
return (
    <div>
         <div>
           <Select
             simpleValue
             placeholder="pick one..."
             value={props.val}
             options={props.options}
             onChange={(value) => {
               props.logChange(value);
               props.answerCallback(value.value, props.question);
             }}
           />
             <select id="dropdown_input_select" className="dropdown_input_select"  onChange={(event) => {
                props.logChange(event.target.value);
                props.answerCallback(event.target.value, props.question);
             }}>
                 {
                     props.options.map((option, index) => {
                         return(
                             <option className={index} value={option.value}>{option.label}</option>
                         )
                     })
                 }
             </select>
         </div>
        <div>
        <FormField className={props.question.question}>
            <input type="text"  placeholder='other..' id={props.question.id}  readOnly={props.isEditing ? "" : "readOnly"} onMouseOut={props.inputChange}/>
        </FormField>
        </div>
    </div>
)
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
        return <FiveStarChoice index={props.index} onValueChangeNextQuestion={props.onValueChangeNextQuestion} question={props.question} answerCallback={props.answerCallback} logChange={props.logChange}/>;
    } else if(type === 'multipleChoice') {
      return <SelectChoice index={props.index} onValueChangeNextQuestion={props.onValueChangeNextQuestion} question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} radiologChange={props.radiologChange}/>;
    } else if(type === 'dropdown') {
      return <DropDownChoice index={props.index} onValueChangeNextQuestion={props.onValueChangeNextQuestion} question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'checkBox') {
      return <MultiSelectChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'NPS') {
      return <NPSChoice index={props.index} onValueChangeNextQuestion={props.onValueChangeNextQuestion} question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange}/>;
    } else if(type === 'text') {
      return <InputFieldChoice question={props.question} answerCallback={props.answerCallback} options={props.options} val={props.val} inputChange={props.inputChange} />;
    }
    else if(type === 'dropdownWInput') {
        return <DropDownWInput question={props.question}  answerCallback={props.answerCallback} options={props.options} val={props.val} logChange={props.logChange} inputChange={props.inputChange} isEditing={props.isEditing}/>;
    } else if( type === 'N/A'){
        return <div></div>
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
        isEditing: '',
        options: [],
        val: ''
    }
  },
  logChange: function(val) {
      this.setState({ val });
      if(val === 'other'){
          this.setState({
              isEditing: 'readOnly'
          });
      }else{
          this.setState({
              isEditing: ''
          });
      }



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
    var val = e.target.value;
    this.setState({ val });
    this.props.answerCallback(val, this.props.question);
  },

  render: function() {
    return (
            <div  className="question" ref="question">
              <p>
                {this.props.question.order}
              </p>
                    <Label className="question_text">
                        {this.props.question.question}
                    </Label>
                <Choices className="question-choices" index={this.props.index} onValueChangeNextQuestion={this.props.onValueChangeNextQuestion} question={this.props.question} answerCallback={this.props.answerCallback}  options={this.state.options} val={this.state.val} logChange={this.logChange} radiologChange={this.radiologChange} inputChange={this.inputChange} isEditing ={this.state.isEditing} npsChange={this.npsChange}/>
            </div>
    )
  }
});

module.exports = Question;