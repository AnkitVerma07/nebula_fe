/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');
var Paragraph = require('grommet/components/Paragraph');
//var Checkbox = require('grommet/components/Checkbox');

/* SASS includes */
require('../styles/cityInternships.scss');
var universityString = 'academicprogram';
var isAttendee = '-goer';

/* MySQL */
/*var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'city-internships.com',
    database: 'ci_partnerships'
});

connection.connect();*/


var CityInternships = React.createClass({
    render: function() {
    var url = window.location.href;
    var n = url.lastIndexOf('/');
    var name = url.substring(n + 1);

    var canSplitName = name.match(/[A-Z][a-z]+/g);
    var uniSplit = url.indexOf(universityString);
    var isUniversity = (uniSplit != -1);

    if(canSplitName) {
        var firstName = canSplitName[0];
        var lastName = canSplitName[1];
        name = firstName + " " + lastName;
    }

    var originalName = name;
    if(isUniversity) {
        name += isAttendee;
    }

    /*var query = "\ SELECT * \ FROM entries \ WHERE id='" + name + "'";
    connection.query(query, function(err, rows, fields) {
        rows.forEach(function(row) {
            alert(row);
            name = row;
        });
    });

    connection.end();*/

    var mainSection = (<div>
                            <Paragraph size="xlarge">
                                Hey <i>{name}</i>! Hope you're having a good day.
                            </Paragraph>
                    </div>)

    if(isUniversity && (name == "harvard-goer")) {
        mainSection = (<div>
                            <Paragraph size="xlarge">
                                Hey <i>{name}</i>! Hope you're having a good day.
                            </Paragraph>
                            <Paragraph size="large" className="para2">
                                Nice, so you went to {originalName}! 
                                Worked for The Crimson?
                            </Paragraph>

                        </div>)
    }
    return (
        <div className="cityInternships">
            <Grommet>
                <header>
                    <Heading tag="h2" uppercase={true}>
                        {this.props.header}
                    </Heading>
                </header>
                {mainSection}
            </Grommet>
        </div>
        );
    }
});

module.exports = CityInternships;