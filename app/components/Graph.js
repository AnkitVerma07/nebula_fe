/* React includes */
var React = require('react');

/* Grommet includes */
var Grommet = require('grommet/components/Grommet');
var Heading = require('grommet/components/Heading');
var Button = require('grommet/components/Button');

/* Chart includes */
var Chart = require('grommet/components/Chart');
var MarkerLabel = require('grommet/components/chart/MarkerLabel');
var Base = require('grommet/components/chart/Base');
var Layers = require('grommet/components/chart/Layers');
var Grid = require('grommet/components/chart/Grid');
var Marker = require('grommet/components/chart/Marker');
var Bar = require('grommet/components/chart/Bar');
var HotSpots = require('grommet/components/chart/HotSpots');
var Graph = require('grommet/components/chart/Graph');
var Value = require('grommet/components/Value');
var Axis = require('grommet/components/chart/Axis');
var Line = require('grommet/components/chart/Line');
var Meter = require('grommet/components/Meter');
var Area = require('grommet/components/chart/Area');
var Distribution = require('grommet/components/Distribution');
var Legend = require('grommet/components/Legend');
var Map = require('grommet/components/Map');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
var Meter = require('grommet/components/Meter');
var Notification = require('grommet/components/Notification');
var Timestamp = require('grommet/components/Timestamp');
var NumberInput = require('grommet/components/NumberInput');
var Quote = require('grommet/components/Quote');
var Sunburst = require('grommet/components/Sunburst');
var Worldmap = require('grommet/components/Worldmap');

/* ZingChart */
require('zingchart/client/zingchart.min.js');

/* SASS includes */
require('../styles/graph.scss');

var ZingChart = React.createClass({
    render: function() {
        var chartData1 = '{"type": "' + this.props.type1 + '", "plot": { "aspect": "' + this.props.aspect1 + '"}, ' + '"series": [' + this.props.data + ']}';
        var chartData2 = '{"type": "' + this.props.type2 + '", "plot": { "aspect": "' + this.props.aspect2 + '"}, ' + '"series": [' + this.props.data + ']}';
        var chartData3 = '{"type": "' + this.props.type3 + '", "series": [{"values": [101]}, {"values": [90]}, {"values": [60]}, {"values": [30]}, {"values": [15]}]}';
        var chartData4 = '{"type": "' + this.props.type4 + '", "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData5 = '{"type": "' + this.props.type5 + '", "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData6 = '{"type": "' + this.props.type6 + '", "plot": { "aspect": "' + this.props.aspect6 + '"}, ' + '"series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData7 = '{"type": "' + this.props.type7 + '", "plot": {"stacked": true}, "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData8 = '{"type": "' + this.props.type8 + '", "series": [{"values":[20,40,25,50,15,45,33,34], "background-color": "#6666FF #FF0066", "alpha-area":0.5}]}';
        var chartData9 = '{"type": "' + this.props.type9 + '", "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData10 = '{"type": "' + this.props.type10 + '", "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData11 = '{"type": "' + this.props.type11 + '", "plot": {"aspect": "' + this.props.aspect11 + '"}, "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData12 = '{"type": "' + this.props.type12 + '", "plot": {"stacked": true}, "series": [{"values":[20,40,25,50,15,45,33,34]}, {"values":[5,30,21,18,59,50,28,33]}, {"values":[30,5,18,21,33,41,29,15]}]}';
        var chartData13 = '{"type": "' + this.props.type13 + '", "series": [{"values": [[1,9,59], [2,15,15], [3,21,30], [4,30,5], [5,40,35], [6,59,21], [7,60,25], [8,75,85], [9,81,87], [10,99,12]]}]}';
        var chartData14 = '{"type": "' + this.props.type14 + '",   "plot": {"values": [[3,3,34], [5,12,101], [9,7,59], [11,5,15], [14,14,30]]}, "series": [{"data-v": [15,37,7,3,14]}, {"data-v": [13,34,21,7,8]}, {"data-v": [6,30,31,5,8]}, {"data-v": [5,29,null,3,13]}, {"data-v": [3,25,19,3,null]}]';

        window.onload = function() {
            zingchart.render({ 
                id: this.props.id1,
                data: chartData1, 
                type: this.props.type,
                height: this.props.height,
                width: this.props.width,
                hideprogresslogo: true,
            });
            zingchart.render({
                id: this.props.id2,
                data: chartData2,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id3,
                data: chartData3,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id4,
                data: chartData4, 
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id5,
                data: chartData5,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id6,
                data: chartData6,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id7,
                data: chartData7,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id8,
                data: chartData8,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id9,
                data: chartData9,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id10,
                data: chartData10,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id11,
                data: chartData11,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id12,
                data: chartData12,
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
            zingchart.render({
                id: this.props.id13,
                data: chartData13, 
                type: this.props.type,
                height: this.props.height,
                width: this.props.width
            });
        }.bind(this);
        return (
            <div>
                <div className={this.props.class} id={this.props.id1}></div>
                <div className={this.props.class} id={this.props.id2}></div>
                <div className={this.props.class} id={this.props.id3}></div>
                <div className={this.props.class} id={this.props.id4}></div>
                <div className={this.props.class} id={this.props.id5}></div>
                <div className={this.props.class} id={this.props.id6}></div>
                <div className={this.props.class} id={this.props.id7}></div>
                <div className={this.props.class} id={this.props.id8}></div>
                <div className={this.props.class} id={this.props.id9}></div>
                <div className={this.props.class} id={this.props.id10}></div>
                <div className={this.props.class} id={this.props.id11}></div>
                <div className={this.props.class} id={this.props.id12}></div>
                <div className={this.props.class} id={this.props.id13}></div>
            </div>
        )
    }
});

var NormalCurve = React.createClass({
    render: function() {
        return (
            <div className={this.props.class}>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox={this.props.viewBox} >
                    <g id="bell"></g>
                </svg>
            </div>
        )
    }
});

var CustomizeChart = React.createClass({
    render: function() {
        return (
            <div className={this.props.class}>
                <Chart 
                    series={[{'values': [[7, 3], [6, 5], [5, 5], [4, 8], [3, 3], [2, 8], [1, 6]]}]}
                    smooth={this.props.smooth} type={this.props.type} >
                </Chart>
            </div>
        )
    }
});

var CustomizeDistribution = React.createClass({
    render: function() {
        return (
            <div className={this.props.class}>
                <Distribution vertical={this.props.vertical} series={[
                    {label: 'Education', value: 30, colorIndex: "graph-1"},
                    {label: 'Experience', value: 50, colorIndex: "accent-2"},
                    {label: 'Leadership', value: 20, colorIndex: "graph-2"}
                    ]}  />
                <Legend series={[
                    {label: 'Education', value: 30, colorIndex: "graph-1"},
                    {label: 'Experience', value: 50, colorIndex: "accent-2"},
                    {label: 'Leadership', value: 20, colorIndex: "graph-2"}
                ]} />
            </div>
        )
    }
});

var CustomizeMap = React.createClass({
    render: function() {
        return (
            <div className={this.props.class}>
                <Map data={{
                "categories": [
                    {
                    "label": "Are you a student or an employer?",
                    "items": [
                        {"id": "student", "node": "Student"},
                        {"id": "employer", "node": "Employer"}
                    ]
                    },
                    {
                    "label": "Do you want to mentor or be mentored?",
                    "items": [
                        {"id": "mentor", "node": "I want to mentor"},
                        {"id": "mentee", "node": "I'm looking for a mentor"}
                    ]
                    },
                    {
                    "label": "Do you want to try the free or the premium version of Nebula?",
                    "items": [
                        {"id": "free", "node": "Free"},
                        {"id": "freemium", "node": "Is there a freemium?"},
                        {"id": "premium", "node": "I'll try premium!"},
                    ]
                    }
                ],
                "links": [
                    {"parentId": "student", "childId": "mentor"},
                    {"parentId": "student", "childId": "mentee"},
                    {"parentId": "employer", "childId": "mentor"},
                    {"parentId": "employer", "childId": "premium"},
                    {"parentId": "student", "childId": "free"},
                    {"parentId": "student", "childId": "freemium"},
                    {"parentId": "employer", "childId": "freemium"},
                ]
                }} />
            </div>
        )
    }
});

var CustomizeMenu = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <Menu label="Akriti">
                    <Anchor href="#">
                        Your Account
                    </Anchor>
                    <Anchor href="#">
                        Switch to Premium
                    </Anchor>
                    <Anchor href="#">
                        View your public profile
                    </Anchor>
                    <Anchor href="#">
                        Start Application
                    </Anchor>
                    <Anchor href="#">
                        Edit Application
                    </Anchor>
                    <Anchor href="#">
                        Settings
                    </Anchor>
                    <Anchor href="#">
                        Log Out
                    </Anchor>
                </Menu>
            </div>
        )
    }
});

var CustomizeMeter = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <Meter value={40} label={true} vertical={true} size="large" />
                <Meter value={40} type="circle" label={true} />
                <Meter value={40} label={true} size="large"/>
                <Meter type="arc" value = {40} label={true} />
                <Meter value={40} threshold={90} label={true} />
                <div className="filler">

                </div>
                <Meter className="meterSet" series={[
                    {label: "Students", value: "50 ", colorIndex: "graph-1"},
                    {label: "Coaches", value: "30 ", colorIndex: "graph-2"},
                    {label: "Employers", value: "20 ", colorIndex: "graph-3"}
                ]} label={true} max={100}  />
                <Meter className="meterSet" type="spiral" series={[
                    {label: "Students", value: "50 ", colorIndex: "graph-1"},
                    {label: "Coaches", value: "30 ", colorIndex: "graph-2"},
                    {label: "Employers", value: "20 ", colorIndex: "graph-3"}
                ]} label={true} max={100}  />
                <Meter className="meterSet" series={[
                    {label: "Students", value: "50 ", colorIndex: "graph-1"},
                    {label: "Coaches", value: "30 ", colorIndex: "graph-2"},
                    {label: "Employers", value: "20 ", colorIndex: "graph-3"}
                ]} stacked={true} label={true} max={100}  />
                <Meter className="meterSet" type="spiral" series={[
                    {label: "Students", value: "50 ", colorIndex: "graph-1"},
                    {label: "Coaches", value: "30 ", colorIndex: "graph-2"},
                    {label: "Employers", value: "20 ", colorIndex: "graph-3"}
                ]} stacked={true} label={true} max={100}  />
            </div>
        )
    }
});

var CustomizeNotification = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <Notification status="warning" message="I am a yellow notification"  /><br></br>
                <Notification status="critical" message="I am a red notification" /><br></br>
                <Notification status="ok" message="I am a green notification" /><br></br>
                <Notification status="ok" message="Percentage complete" percentComplete={30} /><br></br>
                <Notification status="critical" message="Try closing me. Go ahead" closer={true} onClose={this.closedNotification} /><br></br>
            </div>
        )
    }
});

var CustomizeNumberInput = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <NumberInput value={this.props.value} onChange={this.props.changeFunc} />
            </div>
        )
    }
});

var CustomizeQuote = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <Quote credit={this.props.credit}>
                    {this.props.quoteText}
                </Quote>
            </div>
        )
    }
});

var CustomizeSunburst = React.createClass({
    render: function() {
        return (
            <div className={this.props.class} >
                <Sunburst data={[
                {
                    "label": "root-1",
                    "value": 50,
                    "colorIndex": "neutral-1",
                    "children": [
                    {
                        "label": "sub-1",
                        "value": 20,
                        "colorIndex": "neutral-1",
                        "total": 10,
                        "children": [
                        {"label": "leaf-1", "value": 5, "colorIndex": "neutral-1"},
                        {"label": "leaf-2", "value": 1, "colorIndex": "neutral-1"}
                        ]
                    },
                    {"label": "sub-2", "value": 20, "colorIndex": "neutral-1"},
                    {"label": "sub-3", "value": 10, "colorIndex": "neutral-1"}
                    ]
                },
                {
                    "label": "root-2",
                    "value": 30,
                    "colorIndex": "neutral-2",
                    "children": [
                    {"label": "sub-4", "value": 15, "colorIndex": "neutral-2"},
                    {"label": "sub-5", "value": 10, "colorIndex": "neutral-1"},
                    {"label": "sub-6", "value": 5, "colorIndex": "neutral-3"}
                    ]
                },
                {
                    "label": "root-3",
                    "value": 20,
                    "colorIndex": "neutral-3",
                    "children": [
                    {"label": "sub-7", "value": 10, "colorIndex": "neutral-1"},
                    {"label": "sub-8", "value": 7, "colorIndex": "neutral-1"},
                    {"label": "sub-9", "value": 3, "colorIndex": "neutral-3"}
                    ]
                }
                ]} />
                <Legend series={[
                {"label": "on target", "colorIndex": "neutral-1"},
                {"label": "over", "colorIndex": "neutral-2"},
                {"label": "under", "colorIndex": "neutral-3"}
                ]} />
            </div>
        )
    }
});

var CustomizeWorldmap = React.createClass({
    render: function() {
        return (
            <div className={this.props.class}>
                <Worldmap series={[
                    { continent: 'NorthAmerica', colorIndex: 'graph-1' },
                    { continent: 'SouthAmerica', colorIndex: 'accent-1' },
                    { continent: 'Europe', colorIndex: 'unset' },
                    { continent: 'Africa', colorIndex: 'graph-2' },
                    { continent: 'Asia', colorIndex: 'graph-3' },
                    { continent: 'Australia', colorIndex: 'graph-4' }
                ]} />
            </div>
        )
    }
})

var Graph = React.createClass({
    componentDidMount: function() {
        var bellCurve = document.getElementById('bell');

        function plot(points) {
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M 0,50 ' + points.join(' ') + ' 100,50 z');
            path.setAttribute('transform', 'translate(0,0)');
            bellCurve.appendChild(path);
        }

        function plotOnCurve(x, scale) {
            var standardDev = 0.25;
            var mean = 0.5;

            if(scale) {
                return  1/((1/(standardDev * Math.sqrt(2 * Math.PI))) * Math.pow(Math.E , -1 * Math.pow(x - mean, 2) / (2 * Math.pow(standardDev,2))));
            }
            else{
                return ((1/(standardDev * Math.sqrt(2 * Math.PI))) * Math.pow(Math.E, -1 * Math.pow(x - mean, 2)/(2 * Math.pow(standardDev, 2)))) * plotOnCurve(.5, true);
            }
        }

        var points = [];
        var step = 0.5;
        var limit = 100;

        for(i = step ; i < limit ; i += step){
            var currPlot = plotOnCurve(i/limit);
            points.push([i, 50 - (40 * currPlot)]);
        }

        plot(points);
    },
    closedNotification: function() {
        alert("Well done, you can click.");
    },
    render: function() {
        return (
            <div className="graph">
                <Grommet>
                    <header>
                        <Heading tag="h2" uppercase={true}>
                            {this.props.header}
                        </Heading>
                    </header>
                    <div className="content">
                        <NormalCurve class="normal" viewBox="0 0 100 50" />
                        <CustomizeChart class="line" smooth={false} type="line" />
                        <CustomizeChart class="line" smooth={true} type="line" />
                        <CustomizeChart class="area" smooth={false} type="area" />
                        <CustomizeChart class="area" smooth={true} type="area" />
                        <CustomizeChart class="bar" smooth={false} type="bar" />
                        <CustomizeDistribution class="distribution" vertical={true} />
                        <CustomizeMap class="map" />
                        <CustomizeMenu class="menu" />
                        <CustomizeMeter class="meter" />
                        <CustomizeNotification class="notification" />
                        <CustomizeNumberInput class="numberInput" value={42} changeFunc={this.closedNotification} />
                        <CustomizeQuote class="quote" credit="E.E. Cummings" quoteText="To be nobody but yourself in a world which is doing its best, night and day, to make you everybody else means to fight the hardest battle which any human being can fight; and never stop fighting." />
                        <CustomizeSunburst class="sunburst" />
                        <CustomizeWorldmap class="worldmap" />
                        <ZingChart height="400" width="500" class="zingchart" data='{ "values": [15, 15, 15, 15, 15]}, { "values": [25, 18, 20, 15, 23]}'
                        id1="zingchartRadar"  type1="radar" aspect1="line" 
                        id2="zingchartPolar" type2="radar" aspect2="area" 
                        id3="zingchartFunnel" type3="funnel" aspect3="area" 
                        id4="zingchartArea" type4="area" aspect4="area"
                        id5="zingchartArea3d" type5="area3d" aspect5="area"
                        id6="zingchartStepped" type6="area" aspect6="stepped"
                        id7="zingchartStacked" type7="area" aspect7="area"
                        id8="zingchartGradient" type8="area" 
                        id9="zingchartBar" type9="bar"
                        id10="zingchartBar3D" type10="bar3d"
                        id11="zingchartBar3DCylinder" type11="bar3d" aspect11="cylinder"
                        id12="zingchartBarStacked" type12="bar" 
                        id13="zingchartBubble" type13="bubble"
                        />
                    </div>
                </Grommet>
            </div>
        );
    }
});

module.exports = Graph;