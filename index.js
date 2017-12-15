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
	motivate = require('motivate');

var core = require('./core'),
	arrowLib = require('./projects/arrow');

// Print cute intro text
console.log(
	chalk.green(
	    figlet.textSync('. . . Mochi . . .', { horizontalLayout: 'full' })
	  )
);

// Check for values to run
if (argv.clean) {
	core.cleanTitaniumProject();
}

if(argv.arrow){
	arrowLib.sendArrowCommand(argv.arrow);
}


else if(argv.twnty && argv.twnty == 'sim'){
	// Clean titanium project
	core.cleanTitaniumProject();
	// Run the arrow project on device
	core.runCommand('ti build -p ios --device-id');
}

else if(argv.iosCoreClean){
	core.runCommand('launchctl remove com.apple.CoreSimulator.CoreSimulatorService || true');
	core.enjoy();
}

else if(argv.showMe && argv.emoji && argv.count){
	console.log(core.emojiSpam(argv.emoji, argv.count));
}

else if(argv.hello){
	console.log(core.emojiSpam('sparkle', 3) + '    ' + emoji.get('heart') + core.emojiSpam('sparkle', 3));
	// Print cute intro text
	console.log(
		chalk.blue(
		    figlet.textSync('Welcome, Jess', { horizontalLayout: 'full' })
		  )
	);
	console.log(core.emojiSpam('sparkle', 3) + '    ' + emoji.get('heart') + core.emojiSpam('sparkle', 3));
	console.log('\n' + core.emojiSpam('star', 5));
	core.runCommand('motivate format');
	console.log(core.emojiSpam('star', 5));
} else {
	console.log(
		chalk.red(
		    figlet.textSync('SPICY MOCHI', { horizontalLayout: 'full' })
		  )
	);
	console.log('Unknown command given');
	// TODO: help text and config text
}




