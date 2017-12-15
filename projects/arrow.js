// Items related  to project code ARROW

var core = require('../core');

function arrowCommander(command){
	switch(command){
		case 'emu':
			core.cleanTitaniumProject();
			// Run the arrow project on emulator
			core.runCommand('ti build -p android --device-id');
		break;

		case 'device':
			core.cleanTitaniumProject();
			// Run the arrow project on device
			core.runCommand('appc run -p android -T device');
		break;

		default:
			core.spicyMochi();
			console.log(core.emojiSpam('lightning', 5) + '    Command not found ' + core.emojiSpam('lightning', 5));
	}
}

// Exposes functions
module.exports = {
	arrowCommander : arrowCommander
};