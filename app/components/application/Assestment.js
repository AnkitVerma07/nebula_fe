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


var InputField = require('../supportComponents/Fields.js').InputField;
var SelectField = require('../supportComponents/Fields.js').SelectField;
var PrivacyField = require('../supportComponents/Fields.js').PrivacyField;

/* SASS includes */
require('../../styles/application.scss');


var Assestment = React.createClass({
    componentDidMount: function() {

        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        this.setState({
            options: options,

        });


        var id = 1;
        $.ajax({
            type: 'GET',
            dataType: "json",
            crossDomain: true,
            url: 'http://localhost:9090/nebulaben/benapi/surveyInfo/getSurvey/' + id,
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
        }
    },
    logChange: function(val) {
        this.setState({ val });
    },

    submitAssesment: function(e) {

            console.log( this.state);

    },

    render: function() {

        return (
            <div id="settingsTab" className="main">
                <div className="title">

                </div>
                <div className="content">
                    <div className="personal" ref="personal">
                        <div  className="question" ref="question">
                            <Label className="question_text">
                                Question
                            </Label>
                            <Select
                                name="form-field-name"
                                value={this.state.val}
                                options={this.state.options}
                                onChange={this.logChange}
                            />
                        </div>
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