'use strict';
const cp = require('child_process');
const alfy = require('alfy');

const output = cp.spawnSync('say', ['-v', '?'], {
	encoding: 'utf8'
});

if (output.stderr) {
	alfy.error(output.stderr);
} else {
	const names = JSON.parse(
		output.stdout
		.replace(
			/^(.+?)[ ]{2,}(\S+).+?# (.+)/mg,
			'{"title": "$2", "subtitle": "$1", "arg": "$1"},'
		)
		.trim()
		.replace(/^/, '[')
		.replace(/,$/, ']')
	);
	const items = alfy.inputMatches(names, 'title');
	alfy.output(items);
}

