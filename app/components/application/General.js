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
var Calendar = require('grommet/components/Calendar');
var SearchInput = require('grommet/components/SearchInput');
var FormField = require('grommet/components/FormField');

var InputField = require('../../components/supportComponents/Fields.js').InputField;
var SelectField = require('../../components/supportComponents/Fields.js').SelectField;
var CalendarField = require('../../components/supportComponents/Fields.js').CalendarField;
var GenderField = require('../../components/supportComponents/Fields.js').GenderField;
var EducationField = require('../../components/supportComponents/Fields.js').EducationField;
var HighestEduField = require('../../components/supportComponents/Fields.js').HighestEduField;
var SearchInputField = require('../../components/supportComponents/Fields.js').SearchInputField;
var TextAreaField = require('../../components/supportComponents/Fields.js').TextAreaField;

function unsetRBsGeneral() {
	document.getElementById('profilePhotoRB').checked = false;
	document.getElementById('nameRB').checked = false;
	document.getElementById('contactInformationRB').checked = false;
	document.getElementById('addressRB').checked = false;
	document.getElementById('basicRB').checked = false;
	document.getElementById('linksRB').checked = false;
	document.getElementById('educationRB').checked = false;
	document.getElementById('aboutMeRB').checked = false;

	var rbLabels = document.getElementsByClassName('grommetux-radio-button__label');
	for(var i = 0; i < rbLabels.length; i++) {
		rbLabels[i].style.display = "none";
	}
}

function scroll(e, text) {
	if(text == "profilePhoto") {
		$('.profilePhoto')[0].scrollIntoView({block: "start", behavior: "smooth"});
		unsetRBsGeneral();
		document.getElementById('profilePhotoRB').checked = true;
		var rbLabels = $('.grommetux-radio-button__label');
		rbLabels[0].style.display = "block";
	}
}

function profilePhotoScroll() {
	$('.profilePhoto')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('profilePhotoRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[0].style.display = "block";
}

function nameLinkScroll(){
	$('.nameLink')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('nameRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[1].style.display = "block";
}
function contactInformationScroll() {
	$('.contactInformation')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('contactInformationRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[2].style.display = "block";
}
function addressScroll() {
	$('.address')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('addressRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[3].style.display = "block";
}

function basicScroll() {
	$('.basic')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('basicRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[4].style.display = "block";
}
function linksScroll() {
	$('.links')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('linksRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[5].style.display = "block";
}
function educationScroll() {
	$('.education')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('educationRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[6].style.display = "block";
}
function aboutMeScroll() {
	$('.aboutMe')[0].scrollIntoView({block: "start", behavior: "smooth"});
	unsetRBsGeneral();
	document.getElementById('aboutMeRB').checked = true;
	var rbLabels = $('.grommetux-radio-button__label');
	rbLabels[7].style.display = "block";
}

function generalTabIsActive() {
	var tab1Classname = document.getElementById('tab-1').className;
	var tab1Selected = (tab1Classname.indexOf("active") !== -1);

	if(tab1Selected) {
		return 1;
	}
	else {
        return 0;
    }
}

var ApplicationGeneral = React.createClass({
	uploadImage: function() {
		this.refs.profilePhotoImg.click();
	},
	handleImageChange: function(e) {
		e.preventDefault();
		var reader = new FileReader();
		var file = e.target.files[0];

		reader.onloadend = function() { 
			this.setState({
				imageFile: file,
				imagePreviewUrl: reader.result
			})
		}.bind(this);
		reader.readAsDataURL(file);
	},

  updateUser: function(e) {
    let userData= {
      id: localStorage.getItem('user_id')
    };
    if(this.refs.firstName.value){
      userData.firstName = this.refs.firstName.value.trim();
    }
    if(this.refs.lastName.value){
      userData.lastName = this.refs.lastName.value.trim();
    }
    if(this.refs.email.value){
      userData.email = this.refs.email.value.trim();
    }
    if(this.refs.preferredName.value){
      userData.preferredName = this.refs.preferredName.value.trim();
    }
    if(this.refs.phoneNumber.value){
      userData.phoneNumber = this.refs.phoneNumber.value.trim();
    }
    if(this.refs.fbURL.value){
      userData.fbURL = this.refs.fbURL.value.trim();
    }
    if(this.refs.portfolioURL.value){
      userData.portfolioURL = this.refs.portfolioURL.value.trim();
    }
    if(this.refs.videoURL.value){
      userData.videoURL = this.refs.videoURL.value.trim();
    }
    if(this.refs.aboutMe.value){
      userData.aboutMe = this.refs.aboutMe.value.trim();
    }

    var D = JSON.stringify(userData);
    console.log(D);
    $.ajax({
      type: 'POST',
      dataType: "application/json",
      crossDomain: true,
      url: 'http://localhost:9090/nebulaben/benapi/userInfo/updateUser',
      data: D,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      success: (response) => {
        console.log(response);
      },
      error : (xhr, status) => {
        alert('Sorry, there was a problem!');
      },
    });


    let locationData= {
    };
    if(this.refs.address1.value){
      locationData.street_address1 = this.refs.address1.value.trim();
    }
    if(this.refs.address2.value){
      locationData.street_address2 = this.refs.address2.value.trim();
    }
    if(this.refs.city.value){
      locationData.city = this.refs.city.value.trim();
    }
    if(this.refs.state.value){
      locationData.state = this.refs.state.value.trim();
    }
    if(this.refs.zipcode.value){
      locationData.zipcode = this.refs.zipcode.value.trim();
    }
    if(this.refs.country.value){
      locationData.country = this.refs.country.value.trim();
    }


  },


    render: function() {
        var lastScrollTop = 0;
        $(window).scroll(function() {
			if(generalTabIsActive()) {
				var currScrollTop = $(window).scrollTop();
				if(currScrollTop >= lastScrollTop) { //scrolling down
					if(($(window).scrollTop() >= 50) && ($(window).scrollTop() < 100)) {
						profilePhotoScroll();
					}
					if(($(window).scrollTop() >= 500) && ($(window).scrollTop() < 550)) {
						nameLinkScroll();
					}
					if(($(window).scrollTop() >= 900) && ($(window).scrollTop() < 950)) {
						contactInformationScroll();
					}
					if(($(window).scrollTop() >= 1400) && ($(window).scrollTop() < 1450)) {
						addressScroll();
					}
					if(($(window).scrollTop() >= 1900) && ($(window).scrollTop() < 1950)) {
						basicScroll();
					}
					if(($(window).scrollTop() >= 2300) && ($(window).scrollTop() < 2350)) {
						linksScroll();
					}
					if(($(window).scrollTop() >= 2700) && ($(window).scrollTop() < 2750)) {
						educationScroll();
					}
					if(($(window).scrollTop() >= 3100) && ($(window).scrollTop() < 3150)) {
						aboutMeScroll();
					}
				}
				else {
					if(($(window).scrollTop() >= 3200) && ($(window).scrollTop() < 3250)) {
						educationScroll();
					}
					if(($(window).scrollTop() >= 2700) && ($(window).scrollTop() < 2750)) {
						linksScroll();
					}
					if(($(window).scrollTop() >= 2300) && ($(window).scrollTop() < 2350)) {
						basicScroll();
					}
					if(($(window).scrollTop() >= 1900) && ($(window).scrollTop() < 1950)) {
						addressScroll();
					}
					if(($(window).scrollTop() >= 1300) && ($(window).scrollTop() < 1350)) {
						contactInformationScroll();
					}
					if(($(window).scrollTop() >= 900) && ($(window).scrollTop() < 950)) {
						nameLinkScroll();
					}
					if(($(window).scrollTop() >= 600) && ($(window).scrollTop() < 650)) {
						profilePhotoScroll();
					}
				}
				lastScrollTop = currScrollTop;
			}
        });
        return (
			<div id="generalTab" className="main">
				<div className="title">
					<Label uppercase={true}>
						General Information
					</Label>
				</div>
				<div className="sidebar">
					<Sidebar>
						<Menu>
							<RadioButton defaultChecked={true} id="profilePhotoRB" label="Profile Photo" onChange={scroll.bind('profilePhoto')}/>
							<RadioButton id="nameRB" label="Name" onChange={nameLinkScroll}/>
							<RadioButton id="contactInformationRB" label="Contact Information" onChange={contactInformationScroll}/>
							<RadioButton id="addressRB" label="Address" onChange={addressScroll}/>
							<RadioButton id="basicRB" label="Basic" onChange={basicScroll}/>
							<RadioButton id="linksRB" label="Links" onChange={linksScroll}/>
							<RadioButton id="educationRB" label="Education" onChange={educationScroll}/>
							<RadioButton id="aboutMeRB" label="About Me" onChange={aboutMeScroll}/>
						</Menu>
					</Sidebar>
				</div>
				<div className="content">
					<div className="profilePhoto" ref="profilePhoto">
						<input type="file" className="profilePhotoImg" ref="profilePhotoImg" onChange={this.handleImageChange} />
						<img ref="preview" src="/app/styles/pictures/uploadPicture.png" onClick={this.uploadImage} />
						<Button ref="profilePhotoButton" id="profilePhotoButton" type="file" fill={true} plain={true} onClick={this.uploadImage} label="Upload Profile Photo" />
						<Button ref="profilePhotoNext" fill={true} plain={true} onClick={nameLinkScroll} label="NEXT" />
					</div>
					<div className="nameLink" ref="nameLink">
						<FormField className='firstName'>
							<input type="text"  placeholder='First Name' id='firstName' ref='firstName' onMouseOut={this.valueChange} />
						</FormField>
						<FormField className='lastName'>
							<input type="text"  placeholder='Last Name' id='lastName' ref='lastName' onMouseOut={this.valueChange} />
						</FormField>
						<FormField className='preferredName'>
							<input type="text"  placeholder='Preferred Name' id='preferredName' ref='preferredName' onMouseOut={this.valueChange} />
						</FormField>
						<Button id="nameButton" fill={true} plain={true} onClick={contactInformationScroll}>NEXT</Button>
					</div>
					<div className="contactInformation" ref="contactInformation">
						<FormField className='email'>
							<input type="text"  placeholder='Email' id='email' ref='email' onMouseOut={this.valueChange} />
						</FormField>
						<FormField className='phoneNumber'>
							<input type="text"  placeholder='Phone Number' id='phoneNumber' ref='phoneNumber' onMouseOut={this.valueChange} />
						</FormField>
						<Button id="contactButton" fill={true} plain={true} onClick={addressScroll}>NEXT</Button>
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
						<Button fill={true} plain={true} onClick={basicScroll}>NEXT</Button>
					</div>
					<div className="basic" ref="basic">
						<Calendar fieldName="Date of Birth" fieldID="dateOfBirth" onChange={this.valueChange} />
						<GenderField fieldName="Gender" fieldID="gender" changeFunc={this.valueChange} />
						<Button fill={true} plain={true} onClick={linksScroll}>NEXT</Button>
					</div>
					<div className="links" ref="links">
						<FormField className='fbURL'>
							<input type="text"  placeholder='Facebook URL' id='fbURL' ref='fbURL' onMouseOut={this.valueChange} />
						</FormField>
						<FormField className='portfolioURL'>
							<input type="text"  placeholder='Portfolio URL' id='portfolioURL' ref='portfolioURL' onMouseOut={this.valueChange} />
						</FormField>
						<FormField className='videoURL'>
							<input type="text"  placeholder='Video URL' id='videoURL' ref='videoURL' onMouseOut={this.valueChange} />
						</FormField>
						<Button fill={true} plain={true} onClick={educationScroll}>NEXT</Button>
					</div>
					<div className="education" ref="education">
						<EducationField fieldName="Currently, I am:" fieldID="education" changeFunc={this.valueChange} />
						<HighestEduField fieldName="Highest Level of Education:" fieldID="highestLevel" changeFunc={this.valueChange} />
						<SearchInputField fieldName="Goals:" fieldID="goals" changeFunc={this.valueChange} />
						<Button fill={true} plain={true} onClick={aboutMeScroll}>NEXT</Button>
					</div>
					<div className="aboutMe" ref="aboutMe">
						<TextAreaField fieldName="About Me" fieldID="aboutMe" changeFunc={this.valueChange} />
						<Button fill={true} plain={true} onClick={this.updateUser}>SUBMIT</Button>
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

module.exports = ApplicationGeneral;