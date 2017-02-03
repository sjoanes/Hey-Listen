var MEANING = "MEANING";
var READING = "READING";

var readings = [
	{
		clue: "年",
		type: READING,
		answer: "ねん",
		hint: "Every year it feels like guns are on top."
	},
	{
		clue: "食",
		type: READING,
		answer: "た",
		hint: 'Your eyes are important to you, right? Sadly, one of your eyes is missing right now, because a sheep grabbed it and pulled it out, and is now running away from you, yelling his sheep call.... "Mehhhhhh"'
	},
	{
		clue: "林",
		type: READING,
		answer: "りん",
		hint: "Rinninninnin RIN nininn is the sound of a chainsaw cutting down a <strong>forest</strong>"
	},
	{
		clue: "雨",
		type: READING,
		answer: "あめ",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "長",
		type: READING,
		answer: "なが",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "夕",
		type: READING,
		answer: "ゆう",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "名",
		type: READING,
		answer: "めい",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "文 ",
		type: READING,
		answer: "ぶん",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "町",
		type: READING,
		answer: "まち",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	},
	{
		clue: "竹",
		type: READING,
		answer: "たけ",
		hint: 'You’re walking through the trees, looking at them. They look ominous. Then, your foot gets stuck in the muck (mock) and you try to pull your leg out, but can’t. Then the trees next to you beginning to "mock" you. '
	}
];

var meanings = [
	{
		clue: "古",
		type: MEANING,
		answer: "old",
		hint: "Tombstone with a cross on top. 'Old' people die"
	},
	{
		clue: "吾",
		type: MEANING,
		answer: "I",
		hint: "'I' = the perceiving subject. Five senses are like five mouths. 2 nostrils, 2 ears and 1 mouth"
	},
	{
		clue: "冒",
		type: MEANING,
		answer: "risk",
		hint: "Mom says don't look at the sun. But you gotta be 'risk'y. Sun above and an eye right below looking up."
	},
	{
		clue: "朋",
		type: MEANING,
		answer: "companion",
		hint: "bible story of adam and eve. God thought Adam needed a companion so he made flesh of my flesh. 月 means flesh"
	},
	{
		clue: "明",
		type: MEANING,
		answer: "bright",
		hint: "Both the moon and the sun are the 'bright' things in the sky"
	},
	{
		clue: "唱",
		type: MEANING,
		answer: "chant",
		hint: "One mouth making no noise aka the choirmaster. Two mouths with wagging tongues because they are 'chanting'"
	},
	{
		clue: "晶",
		type: MEANING,
		answer: "sparkle",
		hint: "A diamond 'sparkles' when you hold it up to the light (like the sun). The sparkles are like little light sources. A picture of a tiny sun in three places."
	},
	{
		clue: "品",
		type: MEANING,
		answer: "goods",
		hint: "When we think of 'goods' in a modern industrial society, we think of what has been mass produced. Produced for the masses to consume like fledglings in a nest with open beaks."
	},
	{
		clue: "呂",
		type: MEANING,
		answer: "spine",
		hint: "This is like a picture of two vertebrae in the spine linked by a single stroke"
	},
	{
		clue: "昌",
		type: MEANING,
		answer: "propersous",
		hint: "If we had two suns we could yield twice the crops (to be more 'prosperous')"
	},
	{
		clue: "早",
		type: MEANING,
		answer: "early",
		hint: "First flower of the day to rise. the sunflower is the early riser in the garden. Sunflowers know how to sun"
	},
	{
		clue: "旭",
		type: MEANING,
		answer: "rising sun",
		hint: "Japan is the land of the 'rising sun'. Imagine baseball and the red sun?",

	},
	{
		clue: "世",
		type: MEANING,
		answer: "generation",
		hint: "A generation is thirty years. This kanji has 3 tens. ten plus ten plus ten"
	},
	{
		clue: "胃",
		type: MEANING,
		answer: "stomach",
		hint: "The part of the body that keeps the brain working"
	},
	{
		clue: "旦",
		type: MEANING,
		answer: "nightbreak",
		hint: "The sun is peaking out of the horizon, aka the night is breaking."
	},
	{
		clue: "胆",
		type: MEANING,
		answer: "gall bladder",
		hint: "The left is a part of the body. The right is nightbreak. Don't let the night break on your anger (anger === bile == gall blader)"
	},
	{
		clue: "亘",
		type: MEANING,
		answer: "span",
		hint: "Sun going from one side of the horizon to the other. It is 'spanning' the day"
	},
	{
		clue: "凹",
		type: MEANING,
		answer: "concave",
		hint: "Yo this shit is concave"
	},
	{
		clue: "凸 ",
		type: MEANING,
		answer: "convex",
		hint: "Yo this shit is convex"
	}
];

var cards = [meanings, readings];

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }

    return a;
}

function roundRobin(array) {
	var head = array.shift();
	array.push(head);
	return head;
}

function makeQuestion(cards) {
	var stack = roundRobin(cards);
	var question = roundRobin(stack);
	var options = shuffle([stack.length - 1,0,1,2].map(function(i) {
		return stack[i].answer;
	}));

	return {
		hint: question.clue,
		choices: options,
		answer: options.indexOf(question.answer),
		mnemonic: question.hint
	};
}

chrome.runtime.onMessage.addListener(
 	function(request, sender, sendResponse) {
      sendResponse(makeQuestion(cards));
	}
);