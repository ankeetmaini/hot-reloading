export default function () {
	const messages = [
		'How are you?',
		'Hello World'
	];
	
	return messages[Math.floor(Math.random() * messages.length)];
}