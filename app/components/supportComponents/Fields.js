/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Label = require('grommet/components/Label');
var Tabs = require('grommet/components/Tabs');
var Tab = require('grommet/components/Tab');
var Form = require('grommet/components/Form');
var FormField = require('grommet/components/FormField');
var Mail = require('grommet/components/icons/base/Mail');
//var Checkbox = require('grommet/components/Checkbox');
var SocialFacebook = require('grommet/components/icons/base/SocialFacebook');
var SocialGoogle = require('grommet/components/icons/base/SocialGoogle');
var SocialWindows = require('grommet/components/icons/base/PlatformWindows');
var SocialTwitter = require('grommet/components/icons/base/SocialTwitter');
var Paragraph = require('grommet/components/Paragraph');
var Notification = require('grommet/components/Notification');
var SearchInput = require('grommet/components/SearchInput');

var Fields = {
    // InputFieldLogin: React.createClass({
    //     render: function() {
    //         return (
    //             <FormField className={this.props.fieldID}>
    //                 <input type="text"  placeholder={this.props.fieldName} id={this.props.fieldID} ref={this.props.fieldRef} onMouseOut={this.props.changeFunc} />
    //             </FormField>
    //         )
    //     }
    // }),
    WhatWeDoSection: React.createClass({
        render: function() {
            return (
                <div>
                    <Heading tag={this.props.tag} strong={true} uppercase={true} className={this.props.class} >
                        {this.props.headingText}
                    </Heading>
                    <Paragraph>
                        {this.props.paraText}
                    </Paragraph>
                </div>
            )
        }
    }),
    SocialMediaSet: React.createClass({
        render: function() {
            return (
                <div className="socialMedia">
                    <div id="facebook" onClick={this.props.authFunc}>
                        <SocialFacebook />
                    </div>
                    <div id="google" onClick={this.props.authFunc} >
                        <SocialGoogle />
                    </div>
                    <div id="twitter" onClick={this.props.authFunc} >
                        <SocialTwitter />
                    </div>
                </div>
            )
        }
    }),
    InputField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName} help={this.props.help}>
                        <input type="text" id={this.props.fieldID} onMouseOut={this.props.changeFunc} />
                    </FormField>
                </div>
            )
        }
    }),
    SearchInputField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <SearchInput value="one" suggestions={["one", "two", "three", "four", "five", "six", "seven", "eight"]} />
                    </FormField>
                </div>
            )
        }
    }),
    TextAreaField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <textarea cols="50" rows="5" id={this.props.fieldID} onMouseOut={this.props.changeFunc} >
                        </textarea>
                    </FormField>
                </div>
            )
        }
    }),
    SelectField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    CheckboxField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName} >
                    </FormField>
                </div>
            )
        }
    }),
    GenderField: React.createClass({
        render: function() {
            return (
                <div>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='M'>Male</option>
                            <option key='F'>Female</option>
                            <option key='O'>Other</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    EducationField: React.createClass({
        render: function() {
            return (
                <div>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='school'>In School</option>
                            <option key='employed'>Employed</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    HighestEduField: React.createClass({
        render: function() {
            return (
                <div>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='highschool'>High School Diploma</option>
                            <option key='associate'>Associate's Degree</option>
                            <option key='undergrad'>Bachelor's Degree</option>
                            <option key='postgrad'>Master's Degree</option>
                            <option key='phd'>Postgraduate</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    MonthField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='jan'>January</option>
                            <option key='feb'>February</option>
                            <option key='mar'>March</option>
                            <option key='apr'>April</option>
                            <option key='may'>May</option>
                            <option key='jun'>June</option>
                            <option key='jul'>July</option>
                            <option key='aug'>August</option>
                            <option key='sept'>September</option>
                            <option key='oct'>October</option>
                            <option key='nov'>November</option>
                            <option key='dec'>December</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    YearField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='2020'>2020</option>
                            <option key='2019'>2019</option>
                            <option key='2018'>2018</option>
                            <option key='2017'>2017</option>
                            <option key='2016'>2016</option>
                            <option key='2015'>2015</option>
                            <option key='2014'>2014</option>
                            <option key='2013'>2013</option>
                            <option key='2012'>2012</option>
                            <option key='2011'>2011</option>
                            <option key='2010'>2010</option>
                            <option key='2009'>2009</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    LeadershipField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='responsibility'>Position of responsibility</option>
                            <option key='achievement'>Achievement</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    SkillsCategoryField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='athletics'>Athletics</option>
                            <option key='academics'>Academics</option>
                            <option key='volunteer'>Volunteer</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    FileField: React.createClass({
        render: function() {
            return (
                <div>
                    <FormField label={this.props.fieldName}>
                        <input type="file" id={this.props.fieldID} onChange={this.props.fileFunc}/>
                    </FormField>
                </div>
            )
        }
    }),
    CalendarField: React.createClass({
        render: function() {
            return (
                <div>
                    <FormField label={this.props.fieldName}>
                        <Calendar id={this.props.fieldID} onChange={this.props.fileFunc}/>
                    </FormField>
                </div>
            )
        }
    }),
    CareerGoalsField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'>Select Industry</option>
                            <option key='acc'>Accounting</option>
                            <option key='anim'>Animation</option>
                            <option key='auto'>Automotive</option>
                            <option key='bank'>Banking</option>
                            <option key='chem'>Chemicals</option>
                            <option key='civil'>Civil Engineering</option>
                            <option key='comp'>Computer</option>
                            <option key='cosm'>Cosmetics</option>
                            <option key='def'>Defense</option>
                            <option key='edu'>Education</option>
                            <option key='farm'>Farming</option>
                            <option key='fine'>Fine Art</option>
                            <option key='hosp'>Hospitality</option>
                            <option key='it'>Information Technology</option>
                            <option key='ib'>Investment Banking</option>
                            <option key='music'>Music</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    PositionField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'>Select Position</option>
                            <option key='intern'>Intern</option>
                            <option key='dev'>Developer</option>
                            <option key='seniorDev'>Senior Developer</option>
                            <option key='staffDev'>Staff Developer</option>
                            <option key='exec'>Executive</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    PrivacyField: React.createClass({
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <select onChange={this.props.changeFunc} id={this.props.fieldID}>
                            <option key='-1'></option>
                            <option key='intern'>Yes</option>
                            <option key='dev'>No</option>
                        </select>
                    </FormField>
                </div>
            )
        }
    }),
    StarField: React.createClass({
        componentDidMount: function() {
            var starContainer = document.getElementsByClassName('stars')[0];
            var stars = Array.prototype.slice.call(starContainer.children);
            var totalStars = stars.length;
          starContainer.addEventListener('click', function(e) {
                var index = stars.indexOf(e.target);
                var count = count = totalStars - index;
                for(var i = 0; i < stars.length; i++) {
                    stars[i].classList.remove('is-selected');
                }
                e.target.classList.add('is-selected');
                alert(count);
                console.log(this.props);
            });
          this.props.changeFunc( count);
          this.props.answerCallback(count, this.props.question);
        },
        render: function() {
            return (
                <div className={this.props.fieldID}>
                    <FormField label={this.props.fieldName}>
                        <div className="starField">
                            <svg className="initialSVG" fx="50%" fy="50%" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin">
                                <symbol id="star" preserveAspectRatio="xMinYMin" viewBox="0 0 100 100">
                                    <path stroke='orange' strokeWidth='5' d='M49 73.5L22.55 87.406l5.05-29.453-21.398-20.86 29.573-4.296L49 6l13.225 26.797 29.573 4.297-21.4 20.86 5.052 29.452z' fillRule='evenodd'/>
                                </symbol>
                            </svg>
                            
                            <div className="starSet">
                                <div className="stars">
                                    <a className="star" preserveAspectRatio="xMinYMin">
                                        <svg preserveAspectRatio="xMinYMin">
                                            <use transform="scale(0.4)" xlinkHref="#star"></use>
                                        </svg>
                                    </a>
                                    <a className="star" preserveAspectRatio="xMinYMin">
                                        <svg preserveAspectRatio="xMinYMin">
                                            <use transform="scale(0.4)" xlinkHref="#star"></use>
                                        </svg>
                                    </a>
                                    <a className="star" preserveAspectRatio="xMinYMin">
                                        <svg preserveAspectRatio="xMinYMin">
                                            <use transform="scale(0.4)" xlinkHref="#star"></use>
                                        </svg>
                                    </a>
                                    <a className="star" preserveAspectRatio="xMinYMin">
                                        <svg preserveAspectRatio="xMinYMin">
                                            <use transform="scale(0.4)" xlinkHref="#star"></use>
                                        </svg>
                                    </a>
                                    <a className="star" preserveAspectRatio="xMinYMin">
                                        <svg preserveAspectRatio="xMinYMin">
                                            <use transform="scale(0.4)" xlinkHref="#star"></use>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FormField>
                </div>
            )
        }
    })
}

module.exports = Fields;