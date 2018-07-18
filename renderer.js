// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const ipcRenderer = require('electron').ipcRenderer;
        // wait for an updateReady message
        ipcRenderer.on('updateReady', function(event, text) {
            // changes the text of the button
            var container = document.getElementById('ready');
            container.innerHTML = "new version ready!";
			var update = document.getElementById('check');
            update.innerHTML = "update download complete";
        })
		// wait for an updateAvailable message
        ipcRenderer.on('updateAvailable', function(event, text) {
            // changes the text
            var update = document.getElementById('check');
            update.innerHTML = "available & downloading...";
        })
		
		// wait for an updateNotAvailable message
        ipcRenderer.on('updateNotAvailable', function(event, text) {
            // changes the text
            var no_update = document.getElementById('check');
            no_update.innerHTML = "no updates available";
			console.log("no updates available");
        })
		
		// Listen for messages
		ipcRenderer.on('message', function(event, text) {
		  var process_container = document.getElementById('messages');
		  //var message = document.createElement('div');
		  process_container.innerHTML = text;
		 // container.appendChild(message);
		})