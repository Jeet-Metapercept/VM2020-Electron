const ElectronTitlebarWindows = require('electron-titlebar-windows');

const { remote } = require('electron');
const { BrowserWindow } = remote;

const titlebar = new ElectronTitlebarWindows(
		{darkMode: true,
        color: '#fff',
        backgroundColor: 'rgb(54, 149, 252)',/* #0078d7 */
        draggable: true,
        fullscreen: false}
		);
		
 /**
     * DOM
     */
    titlebar.appendTo();
	
	/** Event#close */
    titlebar.on('close', () => {
        console.info('close');

        remote.getCurrentWindow().close();
    });

    /** Event#fullscreen */
    /* titlebar.on('fullscreen', () => {
        console.info('fullscreen');

        remote.getCurrentWindow().setFullScreen(true);
    }); */

	/** Event#restore */
    titlebar.on('fullscreen', () => {
        console.info('restore');

        remote.getCurrentWindow().maximize();
    });

	
    /** Event#minimize */
    titlebar.on('minimize', () => {
        console.info('minimize');

        remote.getCurrentWindow().minimize();
    });

    /** Event#maximize */
    titlebar.on('maximize', () => {
        console.info('maximize');

        remote.getCurrentWindow().setFullScreen(false);
        remote.getCurrentWindow().unmaximize();
    });