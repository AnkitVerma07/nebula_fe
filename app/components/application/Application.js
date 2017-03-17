/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var $ = require('jquery');

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
var Checkbox = require('grommet/components/Checkbox');

/* SASS includes */
require('../../styles/application.scss');

var validateName = require('../../components/supportComponents/Validation.js').validateName;
var validateEmail = require('../../components/supportComponents/Validation.js').validateEmail;
var validatePassword = require('../../components/supportComponents/Validation.js').validatePassword;
var validatePhone = require('../../components/supportComponents/Validation.js').validatePhone;
var validateAddress = require('../../components/supportComponents/Validation.js').validateAddress;
var validateZipcode = require('../../components/supportComponents/Validation.js').validateZipcode;
var validateURL = require('../../components/supportComponents/Validation.js').validateURL;
var validateAboutMe = require('../../components/supportComponents/Validation.js').validateAboutMe;
var validateGPA = require('../../components/supportComponents/Validation.js').validateGPA;

var NebulaFooter = require('../../components/supportComponents/Footer.js');

var InputField = require('../../components/supportComponents/Fields.js').InputField;
var SearchInputField = require('../../components/supportComponents/Fields.js').SearchInputField;
var TextAreaField = require('../../components/supportComponents/Fields.js').TextAreaField;
var SelectField = require('../../components/supportComponents/Fields.js').SelectField;
var CheckboxField = require('../../components/supportComponents/Fields.js').CheckboxField;
var GenderField = require('../../components/supportComponents/Fields.js').GenderField;
var EducationField = require('../../components/supportComponents/Fields.js').EducationField;
var HighestEduField = require('../../components/supportComponents/Fields.js').HighestEduField;
var MonthField = require('../../components/supportComponents/Fields.js').MonthField;
var YearField = require('../../components/supportComponents/Fields.js').YearField;
var LeadershipField = require('../../components/supportComponents/Fields.js').LeadershipField;
var SkillsCategoryField = require('../../components/supportComponents/Fields.js').SkillsCategoryField;
var FileField = require('../../components/supportComponents/Fields.js').FileField;
var CalendarField = require('../../components/supportComponents/Fields.js').CalendarField;
var CareerGoalsField = require('../../components/supportComponents/Fields.js').CareerGoalsField;
var PositionField = require('../../components/supportComponents/Fields.js').PositionField;
var PrivacyField = require('../../components/supportComponents/Fields.js').PrivacyField;
var StarField = require('../../components/supportComponents/Fields.js').StarField;

var ApplicationSettings = require('../../components/application/Settings.js');
var ApplicationGeneral = require('../../components/application/General.js');
var ApplicationAcademic = require('../../components/application/Academic.js');
var ApplicationExperience = require('../../components/application/Experience.js');
var ApplicationSkills = require('../../components/application/Skills.js');

var Application = React.createClass({
	componentDidMount: function() {
		document.getElementById('personalRB').checked = true;
		var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
		rbLabels[0].style.display = "block";
	},
	getInitialState: function() {
		return {}
	},
	makeStateOption: function(state) {
		return <option key={state[0]}>{state[1]}</option>
	},
	clearForm: function() {
		this.setState({
			stringifyUniversities: "",
			firstName: "", 
			lastName: "",
			preferredName: "",
			email: "",
			currentCity: "",
			currentState: "",
			telephone: "",
			socialMedia: ""
		});
	},
	fileSubmit: function(e) {
		e.preventDefault();
		alert('in file submit!');
		var formData = new FormData();
		formData.append('file', $(e.target.id)[0].files[0]);

		$.ajax({
			type: 'POST',
			url: 'http://ben.nebula.careers:8080/nebula/benapi/userInfo/insertUser/',
			data: formData,
			async: true,
			cache: false,
			contentType: false,
			enctype: 'multipart/form-data',
			processData: false,
			success: function(response) {
				alert('Submitted! Response from servers: ' + response);
			}
		});
		return false;
	},
	appSubmit: function(e) {
		e.preventDefault();
		var dataObj = {
			"firstName": this.state.firstName,
			"lastName": this.state.lastName,
			"preferredName": this.state.preferredName,
			"email": this.state.email,
			"currentCity": this.state.currentCity,
			"telephone": this.state.telephone,
			"socialMedia": this.state.socialMedia
		}
		var data = JSON.stringify(dataObj);
		$.ajax({
			type: 'POST',
			dataType: "application/json",
			crossDomain: true,
			url: 'http://ben.nebula.careers:8080/nebula/benapi/userInfo/insertUser/',
			data: data,
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.done(function(data) {
			self.clearForm();
		});
		console.log(data);
	},
    validate: function(key, value) {
        switch(key) {
            case "firstName":
            return validateName(key, value);

            case "lastName":
            return validateName(key, value);

			case "preferredName":
			return validateName(key, value);

            case "email":
            return validateEmail(key, value);

            case "password":
            return validatePassword(key, value);

			case "phoneNumber":
			return validatePhone(key, value);

			case "address1":
			return validateAddress(key, value);

			case "address2":
			return validateAddress(key, value);

			case "zipCode":
			return validateZipcode(key, value);

			case "fbURL":
			return validateURL(key, value);

			case "portfolioURL":
			return validateURL(key, value);

			case "videoURL":
			return validateURL(key, value);

			case "aboutMe":
			return validateAboutMe(key, value);

			case "activities":
			return validateAboutMe(key, value);

			case "description":
			return validateAboutMe(key, value);

			case "gpa":
			return validateGPA(key, value);
        }
    },
	valueChange: function(e) {
		var key = e.target.id;
		var val = e.target.value;
		var obj = {};
		obj[key] = val;
		var validationResult = this.validate(key, val);

		if(validationResult) {
			this.setState(obj);
		}
	},
	render: function() {
		var imagePreviewUrl = this.state.imagePreviewUrl;
		var imagePreview = null;
		if (imagePreviewUrl) {
			this.refs.preview.src = imagePreviewUrl;
		} else {

		}

		$(window).click(function(e) {
			if((e.target.className == "grommetux-tab__label") || (e.target.className == "grommetux-tab__link")) {
				var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
				rbLabels[0].style.display = "block";
			}
		});
		return (
			<div className="application">
				<Grommet>
					<header>
						<a href="http://localhost:8080/#/login">
							<img src="/app/styles/logos/nebulaLogoWhite.png" />
						</a>
					</header>
					<div className="tabs">
						<Tabs>
							<Tab title="SETTINGS">
								<ApplicationSettings />
							</Tab>
							<Tab title="GENERAL">
								<ApplicationGeneral />
							</Tab>
							<Tab title="ACADEMIC">
								<ApplicationAcademic />
							</Tab>
							<Tab title="EXPERIENCE">
								<ApplicationExperience />
							</Tab>
							<Tab title="SKILLS">
								<ApplicationSkills />
							</Tab>
						</Tabs>
						<NebulaFooter />
					</div>
				</Grommet>
			</div>
		)
	}
});

module.exports = Application;