/* React includes */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexRedirect = ReactRouter.IndexRedirect;

/* Router history includes */
var useRouterHistory = require('react-router').useRouterHistory;
var createHashHistory = require('history').createHashHistory;
var appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

/* Container includes */
var ApplicationContainer = require('../containers/ApplicationContainer');
var AboutUsContainer = require('../containers/AboutUsContainer');
var ContactUsContainer = require('../containers/ContactUsContainer');
var PrivacyPolicyContainer = require('../containers/PrivacyPolicyContainer');
var ContactUsEmployerContainer = require('../containers/ContactUsEmployerContainer');
var DashboardContainer = require('../containers/DashboardContainer');
var TermsOfUseContainer = require('../containers/TermsOfUseContainer');
var AdminContainer = require('../containers/AdminContainer');
var LoginContainer = require('../containers/LoginContainer');
var GraphContainer = require('../containers/GraphContainer');
var CityInternshipsContainer = require('../containers/CityInternshipsContainer');
var ResumeContainer = require('../containers/ResumeContainer');

/* Ajax URL includes */
var statesUrl = "http://ben.nebula.careers:8080/ben/nebula_fe/data/states.json";
var universityUrl = "http://ben.nebula.careers:8080/ben/nebula_fe/data/universities.json";
var skillsUrl = "http://ben.nebula.careers:8080/ben/nebula_fe/data/skills.json";

var requireAuth = require('../config/auth/AuthService.js').requireAuth;
var requireAdminAuth = require('../config/auth/AuthService.js').requireAdminAuth;

var routes = (
	<Router history={appHistory}>
		<Route path="/" component={LoginContainer} />
		<Route path="application" header="Application" 
			statesUrl={statesUrl} skillsUrl={skillsUrl} 
			universityUrl={universityUrl} 
			component={ApplicationContainer} onEnter={requireAuth}
		/>
		<Route path="aboutus" header="About Us" component={AboutUsContainer} />
		<Route path="contactus" header="Contact Us" component={ContactUsContainer} />
		<Route path="privacypolicy" header="Privacy Policy" component={PrivacyPolicyContainer} />
		<Route path="contactus_employer" header="Contact Us - Institution" component={ContactUsEmployerContainer} />
		<Route path="dashboard" header="Dashboard" component={DashboardContainer} onEnter={requireAuth} />
		<Route path="termsofuse" header="Terms Of Use" component={TermsOfUseContainer} />
		<Route path="admin" header="Admin Page" component={AdminContainer} onEnter={requireAdminAuth} />
		<Route path="login" component={LoginContainer} />
		<Route path="graph" header="Graphs" component={GraphContainer} />
		<Route path="resume" header="Resume" component={ResumeContainer} />
		<Route path="cityinternships" header="City Internships Test" component={CityInternshipsContainer}>
			<Route path="*" component={CityInternshipsContainer} />
		</Route>
	</Router>
);

module.exports = routes;