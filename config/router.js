module.exports = {
	options: {
		// If no controller is specified in the url, this action will be used.
		defaultController: 'IndexController',
		// If no action is specified in the url, this action will be used.
		defaultAction: 'index'
	},
	routes: {
		'get /': 'IndexController.index'
	}
}