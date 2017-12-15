// Items related  to project code ARROW

var core = require('./core');

function arrowCommander(command){
	if(command == 'emu'){
		// Clean titanium project
		core.cleanTitaniumProject();
		// Run the arrow project on emulator
		core.runCommand('ti build -p android --device-id');
	} else if(command == 'device'){
		// Clean titanium project
		core.cleanTitaniumProject();
		// Run the arrow project on device
		core.runCommand('appc run -p android -T device');
	} 
}

// Exposes functions
module.exports = {
	arrowCommander : arrowCommander
};