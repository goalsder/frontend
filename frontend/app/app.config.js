(function() {

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($routeProvider) {
		$routeProvider
			.when("/", {
				tepmlateUrl: "task/tas",
				controller: ""
			})
	}

	function runApp() {
	}
	
})();

