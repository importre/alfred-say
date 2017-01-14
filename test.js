import test from 'ava';
import alfyTest from 'alfy-test';

test(async t => {
	const alfy = alfyTest();
	const result = await alfy('en_US');

	t.true(result.length > 0);
	t.deepEqual(result[0], {
		title: 'en_US',
		subtitle: 'Alex',
		arg: 'Alex'
	});
});

