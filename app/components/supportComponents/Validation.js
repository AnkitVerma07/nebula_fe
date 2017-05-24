var React = require('react');
var ReactRouter = require('react-router');

var nameRegex = /^[A-z ]+$/;
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneRegex = /^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/;
var zipcodeRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
var urlRegex = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/;
var gpaRegex = /^[0-4]\.\d\d$/;

var maxInputLength = 50;
var minPasswordLength = 10;
var maxPhoneLength = 14;
var maxAddressLength = 50;
var maxAboutMeLength = 500;
var maxGPALength = 4;

var Validation = {
	validateName: function(nameType, name) {
		if((name.length) > maxInputLength) {
			console.log('length of ' + nameType + ' must be less than 50');
			//document.getElementById(nameType).value = "";
			return false;
		}
		else if(!(nameRegex.test(name))) {
			console.log(nameType + ' cannot contain numbers');
			//document.getElementById(nameType).value = "";
			return false;
		}
		return true;
	},
	validateEmail: function(emailType, email) {
		if((email.length) > maxInputLength) {
			console.log('length of ' + emailType + ' must be less than 50');
			//document.getElementById(emailType).value = "";
			return false;
		}
		else if(!(emailRegex.test(email))) {
			console.log(emailType + ' must be in correct format');
			//document.getElementById(emailType).value = "";
			return false;
		}
		return true;
	},
	validatePassword: function(passwordType, password) {
		if((password.length) < minPasswordLength) {
			console.log('length of ' + passwordType + ' must be more than 10');
			//document.getElementById(passwordType).value = "";
			return false;
		}
		return true;
	},
	validatePhone: function(phoneType, phone) {
		if((phone.length) > maxPhoneLength) {
			console.log('length of ' + phoneType + ' must be 10 digits');
		//	document.getElementById(phoneType).value = " ";
			return false;
		}
		else if(!(phoneRegex.test(phone))) {
			console.log(phoneType + ' must only contain numbers');
			//document.getElementById(phoneType).value = " ";
			return false;
		}
		return true;
	},
	validateAddress: function(addressType, address) {
		if((address.length) > maxAddressLength) {
			console.log('length of ' + addressType + ' must be less than 50');
			//document.getElementById(addressType).value = " ";
			return false;
		}
		return true;
	},
	validateZipcode: function(zipcodeType, zipcode) {
		if(!zipcodeRegex.test(zipcode)) {
			console.log(zipcodeType + ' must be numerical');
		//	document.getElementById(zipcodeType).value = " ";
			return false;
		}
		return true;
	},
	validateURL: function(urlType, url) {
		if(!urlRegex.test(url)) {
			console.log(urlType + ' must be in the correct format');
		//	document.getElementById(urlType).value = " ";
			return false;
		}
		return true;
	},
	validateAboutMe: function(aboutMeType, aboutMe) {
		if((aboutMe.length) > maxAboutMeLength) {
			console.log('length of ' + aboutMeType + ' must be less than 500 characters');
		//	document.getElementById(aboutMeType).value = " ";
			return false;
		}
		return true;
	},
	validateGPA: function(gpaType, gpa) {
		if((gpa.length) > maxGPALength) {
			console.log(gpaType + ' must be limited to 2 decimal places');
		//	document.getElementById(gpaType).value = " ";
			return false;
		}
		else if(!gpaRegex.test(gpa)) {
			console.log(gpaType + " must be numerical");
		//	document.getElementById(gpaType).value = " ";
			return false;
		}
		return true;
	},
}

module.exports = Validation;