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
		clue: "年",
		type: MEANING,
		answer: "year",
		hint: "Every year it feels like guns are on top."
	},
	{
		clue: "林",
		type: MEANING,
		answer: "forest",
		hint: "Two trees = forest"
	},
	{
		clue: "食",
		type: MEANING,
		answer: "food",
		hint: "There's a woman in front of you. Who is she? It's just you and her in the store, and you're staring each other down. Oh. It turns out she's the store owner (onna), which is weird, because you are in a store that makes only manly things. A woman owner of a manly things store? Strange..."
	},
	{
		clue: "車",
		type: MEANING,
		answer: "vehicle",
		hint: "Its two lines because its two. Yep."
	},
	{
		clue: "雨",
		type: MEANING,
		answer: "rain",
		hint: "Its two lines because its two. Yep."
	},
	{
		clue: "衣",
		type: MEANING,
		answer: "garment",
		hint: "It looks like a tree. See the roots on the bottom and the branches?"
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