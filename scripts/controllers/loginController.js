appName.controller('loginController', function ($scope) {
	
	let notification = document.querySelector("#notification");

	const ipcRenderer = require('electron').ipcRenderer;
	// wait for an updateNotAvailable message
        ipcRenderer.on('updateNotAvailable', function(event, text) {
            notification.opened = true;
            notification.innerHTML = "no updates available";
			console.log("no updates available");
        })
	// wait for an updateAvailable message
        ipcRenderer.on('updateAvailable', function(event, text) {
            // changes the text
			notification.opened = true;
            notification.innerHTML = "available & downloading...";
			console.log("available & downloading...");
        })
		
	$scope.Test = "Updates";	
	  
	$scope.notification = function(){
		  notification.opened = true;
		  notification.innerHTML = "Updates";
	 };
	 
});
