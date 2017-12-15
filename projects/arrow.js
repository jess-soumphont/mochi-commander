// Items related  to project code ARROW

var core = require('../core');
var inquirer = require('inquirer');

/**
 * Manages commands sent to the arrow lib
 * @param  {String} command Action to take
 * @return {Void}
 */
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
			arrowHelper();
			
	}
}


/**
 * Creates a prompt to ask the user what they would like to do
 * @return {Void}
 */
function arrowHelper(){
	// Ask user what they would like to do
	inquirer.prompt([{
		name: 'arrowHelper',
		type: 'list',
		message: 'You did not enter a known command. Would you like to select any of the following?',
		choices: ['Build on Emulator', 'Build on Device', 'None'],
		default: 'emu'
	}]).then(answer => {
	    switch(answer.arrowHelper){
	    	case 'Build on Emulator':
	    		arrowCommander('emu');
	    	break;

	    	case 'Build on Device':
	    		arrowCommander('device');
	    	break;

	    	default:
	    		// do nothing
	    		return;
	    }
	});
}

// Exposes functions
module.exports = {
	arrowCommander : arrowCommander
};