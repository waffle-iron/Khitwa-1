var helpers = require('./helpers.js');
var userController = require('../users/userController.js');
var organizationController = require('../organizations/organizationController.js');
var opportunityController = require('../opportunities/opportunityController.js');
var openingController = require('../openings/openingController.js')

module.exports = function(app, express){
	
	// User routes goes here
	app.post('/api/users/signin', userController.signin);
	app.post('/api/users/signup', userController.signup);
	app.get('/api/users/getall', userController.getAll);
	app.get('/api/users/getUser/:username', userController.getUser);
	app.get('/api/users/signedin', userController.checkAuth);
	app.post('/api/user/edit/:username', userController.editUser);
	app.post('/api/user/delete/:username', userController.deleteUser);

	// Organization routes goes here
	app.post('/api/organization/signup', organizationController.createOrganization);
	app.get('/api/organization/getByName/:name', organizationController.getByName);
	app.get('/api/organization/all', organizationController.getAll);
	app.post('/api/organization/edit/:name', organizationController.editProfile);
	app.post('/api/organization/delete/:name', organizationController.deleteOrganization);
	app.post('/api/organization/addOpportunity', organizationController.addOpportunity);
	app.post('/api/organization/closeOpportunity/:id', organizationController.closeOpportunity);
	app.post('/api/organization/signin', organizationController.signin);
	app.get('/api/organization/signedin', organizationController.checkAuth);
	app.post('/api/organization/reopenOpportunity/:id', organizationController.reopenOpportunity);

	// Opportunities routes goes here
	app.get('/api/opportunities/getall', opportunityController.allOpportunities);
	app.post('/api/opportunities/addOpening/:id', opportunityController.addOpening);
	app.post('/api/opportunity/edit/:id',opportunityController.editOpportunity);
	app.get('/api/opportunity/currentopenings/:id', opportunityController.getCurrOpenings);
	app.get('/api/opportunity/closedopenings/:id', opportunityController.getClosedOpenings);
	app.get('/api/opportunity/get/:id', opportunityController.getOpportunity);
	app.get('/api/opportunities/organization/:id', opportunityController.getOpportunityByOrgId);
	app.post('/api/opportunity/delete/:id', opportunityController.deleteOne);
	app.post('/api/opportunity/reopenOpening/:id',opportunityController.reopenOpening);

	// Openings routes goes here
	app.get('/api/opening/getall',openingController.allOpenings );
	app.post('/api/openings/closeOpening/:id', openingController.closeOpening);
	app.post('/api/opening/delete/:id',openingController.deleteOne);
};