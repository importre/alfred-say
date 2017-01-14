function run(argv) {
	const voices = argv[0].split('\n').map(voice => voice.toLowerCase());
	const app = Application.currentApplication();

	let voice = voices[0];
	let message = argv[1].trim();

	const expectedVoice = message.split(/\s+/, 1)[0].toLowerCase();
	if (voices.includes(expectedVoice)) {
		voice = expectedVoice;
		message = message.split(' ').filter((_, i) => i > 0).join(' ');
	} else {
		voice = voices[0];
	}

	app.includeStandardAdditions = true;
	app.say(message, {
		using: voice
	});
}

