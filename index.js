#!/usr/bin/env node

// Jess Soumphont's cli task management system
var exec = require('child_process').exec,
	execSync = require('child_process').execSync,
	argv = require('yargs').argv,
	chalk = require('chalk'),
	_ = require('lodash'),
	fs = require('fs'),
	figlet = require('figlet'),
	emoji = require('node-emoji'),
	motivate = require('motivate'),
	inquirer    = require('inquirer');

// Print cute intro text
console.log(
	chalk.green(
	    figlet.textSync('. . . Mochi . . .', { horizontalLayout: 'full' })
	  )
);

// Check for values to run
if (argv.clean) {
	cleanTitaniumProject();
} else if(argv.arrow && argv.arrow == 'emu'){
	// Clean titanium project
	cleanTitaniumProject();
	// Run the arrow project on emulator
	runCommand('ti build -p android --device-id');
} else if(argv.arrow && argv.arrow == 'device'){
	// Clean titanium project
	cleanTitaniumProject();
	// Run the arrow project on device
	runCommand('appc run -p android -T device');
} else if(argv.hello){
	console.log(emojiSpam('sparkle', 3) + '    ' + emoji.get('heart') + emojiSpam('sparkle', 3));
	// Print cute intro text
	console.log(
		chalk.blue(
		    figlet.textSync('Welcome, Jess', { horizontalLayout: 'full' })
		  )
	);
	console.log(emojiSpam('sparkle', 3) + '    ' + emoji.get('heart') + emojiSpam('sparkle', 3));
	console.log('\n' + emojiSpam('star', 5));
	runCommand('motivate format');
	console.log(emojiSpam('star', 5));

	// inquirer.prompt([{
	// 	name: 'appcDev',
	// 	message: "Are you developing for appc in this terminal? [Y/N]",
	// 	type: 'input',
	// }]).then(answers => {
	// 	if(answers = 'y'){
	// 		runCommand('~/.nvm/versions/node/v4.4.4');
	// 		enjoy();
	// 	}
	// });
} else {
	console.log(
		chalk.red(
		    figlet.textSync('SPICY MOCHI', { horizontalLayout: 'full' })
		  )
	);
	console.log('Unknown command given');
	// TODO: help text and config text
}

/**
 * Clean the titanium project
 * @return {Void}
 */
function cleanTitaniumProject(){
	runCommand('rm -rf build resources');
	console.log(chalk.green('Removed build resources directories'));
	runCommand('ti clean');
	enjoy();
}

function enjoy(){
	console.log(chalk.green('Enjoy ' + emoji.get('tea')));
}

/**
 * Creates a string of sparkle emojis based off the amount given
 * @param  {String} emojiString  Emoji to rpeat
 * @param  {Number} amount       How many sparkles to generate
 * @return {String}              String made of sparkles
 */
function emojiSpam(emojiString, amount){
	var spamString = '';
	for(var ii=0; ii < amount; ii++){
		spamString += '    ' + emoji.get(emojiString);
	}
	return spamString;
}


/**
 * Run the given command
 * @param  {String} command
 * @return {Void}
 */
function runCommand(command){
	return execSync(command, {
		stdio: [0, 1, 2]
	});
}