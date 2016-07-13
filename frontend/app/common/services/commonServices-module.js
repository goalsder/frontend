(function() {
	"use strict";

	angular.module("commonServices", [])
	.config(configServices)
	.run(runServices);


	function configServices() {
		console.log("config services");
	}

	function runServices() {
		console.log("run services");
	};
	
})();