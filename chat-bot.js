// #####################################################
// ##            Google Meet chat bot                 ##
// ##  Original fork from Useems (c) 2021 MIT License ##
// ##  https://github.com/Useems/google-meet-chatbot  ##
// ##                                                 ##
// ##  This version 2021 (c) MIT License              ##
// ##  https://github.com/Andrew-McGee                ##
// ##                                                 ##
// ## This is a HACK on the DOM - there is no public  ##
// ## API for Google Meet chat.                       ##
// ##                                                 ##
// ## To run open DevTools in browser.                ##
// ## Ensure Google Meet chat window is open.         ##
// ## Paste script into the console.                  ##
// ## Hit enter to execute.                           ##
// ## Standby with fire extinguisher.                 ##
// ##                                                 ##
// #####################################################
(() => {
	let messagesLength = -1;
	let lastMessageLength = -1;
	let events = {};

	window.chatbot = {
		sendMessage: function(...args) {
			let message = document.querySelector("*[name=\"chatTextInput\"]");
			let button = message.parentElement.parentElement.parentElement.parentElement.children[1].querySelector('button'); // Best way I found
            		button.disabled = false;

			if (message && button) {
				let lastValue = message.value + "";
				message.value = args.join("");

				button.ariaDisabled = null
				button.click();

				let success = message.value === "";
				message.value = lastValue;

				return success;
			}

			return false;
		},
		on: function(event, f) {
			if (!events[event] && typeof(f) == "function")
				events[event] = f
		},
		emit: function(event, ...args) {
			if (events[event])
				events[event](...args);
		}
	}

	if (window.messagesInterval)
		try {
			clearInterval(messagesInterval);
		} catch (err) {}

	window.messagesInterval = setInterval(() => {
		var messages = document.querySelectorAll('[data-sender-name]');

		if (messages) {
			if (messages.length > 0)
				var message = messages[messages.length - 1];

			if (messagesLength === -1) {
				messagesLength = messages.length;
				lastMessageLength = message ? message.childNodes[1].childNodes.length : 0;
			} else if (messagesLength != messages.length || (message && lastMessageLength != message.childNodes[1].childNodes.length)) {
				let messageText = message.childNodes[1].childNodes[message.childNodes[1].childNodes.length - 1].dataset.messageText;

				messagesLength = messages.length;
				lastMessageLength = message.childNodes[1].childNodes.length;

				window.chatbot.emit("message", message.dataset.senderName, messageText, parseInt(message.dataset.timestamp));
			}
		}
	}, 100);
})();
// ###################################
// ##  Here comes our command logic ##
// ###################################

// prefix for special commands
var prefix = '.';
// Now create some vars to use as timers
var timeout01 = false;
var timeout02 = false;
var timeout03 = false;
var timeout04 = false;
var timeout05 = false;
var timeout06 = false;
var timeout07 = false;
var timeout08 = false;
var timeout09 = false;
var timeout10 = false;
var timeout11 = false;
var timeout12 = false;
var timeout13 = false;
var timeout14 = false;

// Make some constants to use in our replies - each array element is alternate response.
const response1 =["Yo!", "Wassup?", "Hey bud", "Yup", "Word"];
const greeting1 =["Howdy ", "Good afternoon ", "Hey there ", "Hi ", "Hello "];
const dadjoke1 =["I'm afraid for the calendar. Its days are numbered.","My wife said I should do lunges to stay in shape. That would be a big step forward.","Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!","Singing in the shower is fun until you get soap in your mouth. Then it's a soap opera.","What do a tick and the Eiffel Tower have in common? They're both Paris sites.","What do you call a fish wearing a bowtie? Sofishticated.","How do you follow Will Smith in the snow? You follow the fresh prints.","If April showers bring May flowers, what do May flowers bring? Pilgrims.","I thought the dryer was shrinking my clothes. Turns out it was the refrigerator all along.","What do you call a factory that makes okay products? A satisfactory.","Dear Math, grow up and solve your own problems.","What did the janitor say when he jumped out of the closet? Supplies!","Have you heard about the chocolate record player? It sounds pretty sweet.","What did the ocean say to the beach? Nothing, it just waved.","Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels.","I only know 25 letters of the alphabet. I don't know y.","How does the moon cut his hair? Eclipse it.","What did one wall say to the other? I'll meet you at the corner.","What did the zero say to the eight? That belt looks good on you.","A skeleton walks into a bar and says, 'Hey, bartender. I'll have one beer and a mop.'","Where do fruits go on vacation? Pear-is!","I asked my dog what's two minus two. He said nothing.","What did Baby Corn say to Mama Corn? Where's Pop Corn?","What's the best thing about Switzerland? I don't know, but the flag is a big plus.","What does a sprinter eat before a race? Nothing, they fast!","Where do you learn to make a banana split? Sundae school.","What has more letters than the alphabet? The post office!","Dad, did you get a haircut? No, I got them all cut!","What do you call a poor Santa Claus? St. Nickel-less.","I got carded at a liquor store, and my Blockbuster card accidentally fell out. The cashier said never mind.","Where do boats go when they're sick? To the boat doc.","I don't trust those trees. They seem kind of shady.","My wife is really mad at the fact that I have no sense of direction. So I packed up my stuff and right!","How do you get a squirrel to like you? Act like a nut.","Why don't eggs tell jokes? They'd crack each other up.","I don't trust stairs. They're always up to something.","What do you call someone with no body and no nose? Nobody knows.","Did you hear the rumor about butter? Well, I'm not going to spread it!","Why couldn't the bicycle stand up by itself? It was two tired.","What did one hat say to the other? Stay here! I'm going on ahead.","Why did Billy get fired from the banana factory? He kept throwing away the bent ones.","Why can't a nose be 12 inches long? Because then it would be a foot.","What does a lemon say when it answers the phone? Yellow!","This graveyard looks overcrowded. People must be dying to get in.","What kind of car does an egg drive? A yolkswagen.","Dad, can you put the cat out? I didn't know it was on fire.","How do you make 7 even? Take away the s.","How does a taco say grace? Lettuce pray.","What time did the man go to the dentist? Tooth hurt-y.","Why didn't the skeleton climb the mountain? It didn't have the guts.","What do you call it when a snowman throws a tantrum? A meltdown.","How many tickles does it take to make an octopus laugh? Ten tickles.","I have a joke about chemistry, but I don't think it will get a reaction.","What concert costs just 45 cents? 50 Cent featuring Nickelback!","What does a bee use to brush its hair? A honeycomb!","How do you make a tissue dance? You put a little boogie in it.","Why did the math book look so sad? Because of all of its problems!","What do you call cheese that isn't yours? Nacho cheese.","My dad told me a joke about boxing. I guess I missed the punch line.","What kind of shoes do ninjas wear? Sneakers!","How does a penguin build its house? Igloos it together."]

// This loop triggers on EVERY SINGLE msg in the chat - probably want to keep it lean
chatbot.on("message", (username, message, date) => {
	// Do some pre-formatting so we can better parse the chat
	message = message.toLowerCase();
	let m_prefix = message.slice(0, prefix.length);
	let splitted = message.slice(prefix.length).toLowerCase().split(' ');

	// These conditionals check for certain strings in our chat
	// If a string is found send a response and set a timeout timer so we don't double trigger
	// Some repsonse are built by picking a random element from the response array
	if ((message.includes('interlock')) && (timeout01 == false)) {
		chatbot.sendMessage("I love Interlock!");
		timeout01 = true;
		setTimeout(function() {timeout01 = false;}, 10000);
	}

	if ((message.includes('i love')) && (timeout01 == false)) {
		chatbot.sendMessage("I love Interlock!");
		timeout01 = true;
		setTimeout(function() {timeout01 = false;}, 10000);
	}

	if ((message.includes('football')) && (timeout02 == false)) {
		chatbot.sendMessage("Football is life!");
		timeout02 = true;
		setTimeout(function() {timeout02 = false;}, 10000);
	}

	if ((message.includes('red hat')) && (timeout03 == false)) {
		chatbot.sendMessage("We are Red Hat!");
		timeout03 = true;
		setTimeout(function() {timeout03 = false;}, 20000);
	}

	if ((message.includes('code')) && (timeout06 == false)) {
		chatbot.sendMessage("Eat> sleep> code> repeat;");
		timeout06 = true;
		setTimeout(function() {timeout06 = false;}, 20000);
	}

	if ((message.includes('hello')) && (timeout05 == false)) {
		var response = greeting1[Math.floor(Math.random() * greeting1.length)];
		chatbot.sendMessage(response, username);
		timeout05 = true;
		timeout04 = true;
		setTimeout(function() {timeout05 = false;}, 10000);
		setTimeout(function() {timeout04 = false;}, 5000);
	}

	if ((message.includes('hi ')) && (timeout05 == false)) {
		var response = greeting1[Math.floor(Math.random() * greeting1.length)];
		chatbot.sendMessage(response, username);
		timeout05 = true;
		timeout04 = true;
		setTimeout(function() {timeout05 = false;}, 10000);
		setTimeout(function() {timeout04 = false;}, 5000);
	}

	if ((message.includes('horse')) && (timeout07 == false)) {
		chatbot.sendMessage("Why the long face ", username, "?");
		timeout07 = true;
		setTimeout(function() {timeout07 = false;}, 5000);
	}

	if ((message.includes('i am')) && (timeout08 == false)) {
		chatbot.sendMessage("I know you are ", username, "!");
		timeout08 = true;
		setTimeout(function() {timeout08 = false;}, 5000);
	}

	if ((message.includes('lockybot')) && (message.includes('what can you do')) && (timeout09 == false)) {
		chatbot.sendMessage("Hi ", username, ". I can do the following:");
		chatbot.sendMessage("slap people");
		chatbot.sendMessage("praise people");
		chatbot.sendMessage("mute people");
		chatbot.sendMessage("tell a dadjoke");
		chatbot.sendMessage("...among other things.");
		chatbot.sendMessage("Remember to address me by name.");
		timeout09 = true;
		setTimeout(function() {timeout09 = false;}, 5000);
	}

	if ((message.includes('dadjoke')) && (timeout10 == false)) {
		var response = dadjoke1[Math.floor(Math.random() * dadjoke1.length)];
		chatbot.sendMessage(response);
		timeout10 = true;
		setTimeout(function() {timeout10 = false;}, 10000);
	}

	if ((message.includes('lockybot please slap')) && (timeout11 == false)) {
		chatbot.sendMessage("Lockybot slaps ", splitted[3], " with a wet fish.");
		timeout11 = true;
		timeout12 = true;
		timeout04 = true;
		setTimeout(function() {timeout11 = false;}, 5000);
		setTimeout(function() {timeout04 = false;}, 5000);
		setTimeout(function() {timeout12 = false;}, 5000);
	}

	if ((message.includes('lockybot please mute')) && (timeout13 == false)) {
		chatbot.sendMessage("Lockybot neuters ", splitted[3], ".");
		timeout13 = true;
		timeout12 = true;
		timeout04 = true;
		setTimeout(function() {timeout13 = false;}, 5000);
		setTimeout(function() {timeout04 = false;}, 5000);
		setTimeout(function() {timeout12 = false;}, 5000);
	}

	if ((message.includes('lockybot please praise')) && (timeout14 == false)) {
		chatbot.sendMessage("--<<{{{{ ", splitted[3], " }}}}>>-- We're not worthy! We're not worthy!");
		timeout14 = true;
		timeout12 = true;
		timeout04 = true;
		setTimeout(function() {timeout14 = false;}, 5000);
		setTimeout(function() {timeout04 = false;}, 5000);
		setTimeout(function() {timeout12 = false;}, 5000);
	}

	if ((message.includes('lockybot slap')) || (message.includes('lockybot praise')) || (message.includes('lockybot mute')) && (timeout12 == false)) {
		chatbot.sendMessage("Hey ", username, ", I respond better with good manners!");
				timeout04 = true;
				timeout12 = true;
				setTimeout(function() {timeout04 = false;}, 5000);
				setTimeout(function() {timeout12 = false;}, 5000);
	}

	if ((message.includes('wayne'))) {
		chatbot.sendMessage("Rigged!");
	}

	if ((message.includes('lockybot')) && (timeout04 == false)) {
		var response = response1[Math.floor(Math.random() * response1.length)];
		chatbot.sendMessage(response);
		timeout04 = true;
		setTimeout(function() {timeout04 = false;}, 10000);
	}

	// This section is for special commands that are preceeded by our command prefix
	if (m_prefix === prefix) {
		switch (splitted[0]) {
			case "ping":
				chatbot.sendMessage("Pong!");
				break;
			case "invite":
				chatbot.sendMessage("Invite URL: ", window.location.href.split('?')[0]);
				break;
			default:
				chatbot.sendMessage("Command not found.");
				break;
		}
	}
});
