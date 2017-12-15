// Central area for functions that get run most often globally

var exec = require('child_process').exec,
	execSync = require('child_process').execSync,
	argv = require('yargs').argv,
	chalk = require('chalk'),
	_ = require('lodash'),
	fs = require('fs'),
	figlet = require('figlet'),
	emoji = require('node-emoji'),
	motivate = require('motivate');


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

/**
 * Print enjoy text
 * @return {Void}
 */
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



// Exposes functions
module.exports = {
	cleanTitaniumProject: cleanTitaniumProject,
	runCommand : runCommand,
	enjoy: enjoy,
	emojiSpam: emojiSpam
};