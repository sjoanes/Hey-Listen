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
	},
		{
		clue: "古",
		type: READING,
		answer: "ふる",
		hint: "furu"
	},
	{
		clue: "吾",
		type: READING,
		answer: "わが",
		hint: "'I' = the perceiving subject. Five senses are like five mouths. 2 nostrils, 2 ears and 1 mouth"
	},
	{
		clue: "冒",
		type: READING,
		answer: "ぼう",
		hint: "You draw your 'bow' straight up because you going to take down the sun."
	},
	{
		clue: "朋",
		type: READING,
		answer: "ほう",
		hint: "Flesh of my flesh is another name for my 'ho'"
	},
	{
		clue: "明",
		type: READING,
		answer: "あか",
		hint: "aka chan is a source of light for the future. Light is bright."
	},
	{
		clue: "唱",
		type: READING,
		answer: "しょう",
		hint: "You came to the 'show' to hear the people chant zelda opening"
	},
	{
		clue: "晶",
		type: READING,
		answer: "しょう",
		hint: "Where else would you see three crystals sparkling together, its a crystal show"
	},
	{
		clue: "品",
		type: READING,
		answer: "ひん",
		hint: "Zombie apocalypse, we need to stockpile goods. Anyone who is a 'hin'drance won't get any"
	},
	{
		clue: "呂",
		type: READING,
		answer: "りょ",
		hint: "Put your back into 'row'ing. Back = spine, dont question it"
	},
	{
		clue: "昌",
		type: READING,
		answer: "さかん",
		hint: "If you are prosperous, you are 'sakan'd to none"
	},
	{
		clue: "早",
		type: READING,
		answer: "はや",
		hint: "You know this one"
	},
	{
		clue: "旭",
		type: READING,
		answer: "あさひ",
		hint: "あさひ is morning sun",

	},
	{
		clue: "世",
		type: READING,
		answer: "せ",
		hint: "You need to have se-x to create the next generation"
	},
	{
		clue: "胃",
		type: READING,
		answer: "い",
		hint: "I have a stomach"
	},
	{
		clue: "旦",
		type: READING,
		answer: "あき",
		hint: "Aki dyu not, the earth revovles around the sun"
	},
	{
		clue: "胆",
		type: READING,
		answer: "きも",
		hint: "Too much anger, you got gall bladder cancer. You need to do kimo"
	},
	{
		clue: "亘",
		type: READING,
		answer: "わた",
		hint: "Spanning four years at Wataru(Waterloo)"
	},
	{
		clue: "凹",
		type: READING,
		answer: "くぼ",
		hint: "Kubo the movie is deep like a bowl"
	},
	{
		clue: "凸",
		type: READING,
		answer: "でこ",
		hint: "deko rate the area with pelvic thrusts"
	},
	{
		clue: "生",
		type: READING,
		answer: "う",
		hint: 'Looks like a flower being born, "u"guu its so cute'
	},
	{
		clue: "休",
		type: READING,
		answer: "やす",
		hint: 'Person resting besides a tree, yasumi == rest'
	},
	{
		clue: "先",
		type: READING,
		answer: "せん",
		hint: "If you are a cow with legs, you have a'sen'cended"
	},
	{
		clue: "字",
		type: READING,
		answer: "じ",
		hint: "If you learn all the kanji characters, you're a straight GEE"
	},
	{
		clue: "子",
		type: READING,
		answer: "こ",
		hint: "ko"
	},
	{
		clue: "気",
		type: READING,
		answer: "き",
		hint: "Gen KI"
	},
	{
		clue: "糸",
		type: READING,
		answer: "いと",
		hint: "ito-u senpai threads together beautiful comics at the spine"
	},
	{
		clue: "耳",
		type: READING,
		answer: "みみ",
		hint: "Slanted eye is an ear. Mimi = ear"
	},
	{
		clue: "村",
		type: READING,
		answer: "むら",
		hint: "hana 'mura' is a nice village where I like to get owned by zenyatta"
	},
	{
		clue: "赤",
		type: READING,
		answer: "あか",
		hint: "Aka chan is the pygmy, used lord soul to create fire and humans"
	},
	{
		clue: "足",
		type: READING,
		answer: "あし",
		hint: "Ashiiiiet, I stepped on a spider"
	},
	{
		clue: "花",
		type: READING,
		answer: "はな",
		hint: "Flowers have petals on the top of the stem. They change most noticeably"
	},
	{
		clue: "音",
		type: READING,
		answer: "おん",
		hint: "Stand ON the sun"
	},
	{
		clue: "校",
		type: READING,
		answer: "こう",
		hint: "Big tree 木 in the village center where people interact 交 and where children attend school. What a cuuuul tree"
	},
	{
		clue: "交",
		type: READING,
		answer: "まじ",
		hint: "Several 六 roads crossing X. Its maji-k that no one is crashing"
	},
	{
		clue: "森",
		type: READING,
		answer: "もり",
		hint: "Mori summer smokes a lot of trees(Everyday)"
	},
	{
		clue: "草",
		type: READING,
		answer: "くさ",
		hint: "kusa, I got a grass stain"
	},
	{
		clue: "良",
		type: READING,
		answer: "よ",
		hint: "yo this is sooooo good"
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
		answer: "daybreak",
		hint: "The sun is peaking out of the horizon, aka the night is breaking."
	},
	{
		clue: "胆",
		type: MEANING,
		answer: "gall bladder",
		hint: "The left is a part of the body. The right is daybreak. Don't let the day break on your anger (anger === bile == gall blader)"
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
	},
	{
		clue: "生",
		type: MEANING,
		answer: "life",
		hint: 'Life is like a cow standing on the ground. The ground is Mississauga'
	},
	{
		clue: "休",
		type: MEANING,
		answer: "rest",
		hint: 'Person resting besides a tree, yasumi == rest'
	},
	{
		clue: "先",
		type: MEANING,
		answer: "ahead",
		hint: "If you are a cow with legs, you have a'sen'cended. Ahead of the population"
	},
	{
		clue: "字",
		type: MEANING,
		answer: "character",
		hint: "Review and study of the characters: a child's子 most important home宀 work"
	},
	{
		clue: "子",
		type: MEANING,
		answer: "child",
		hint: "The head and arms of a child. You don't need to both with legs because its just a child, they don't have legs."
	},
	{
		clue: "気",
		type: MEANING,
		answer: "spirit",
		hint: "Backwards square root of me? Thats spirit"
	},
	{
		clue: "糸",
		type: MEANING,
		answer: "thread",
		hint: "ito-u senpai 'thread's together beautiful comics at the spine"
	},
	{
		clue: "耳",
		type: MEANING,
		answer: "ear",
		hint: "Slanted eye is an ear. Mimi = ear"
	},
	{
		clue: "村",
		type: MEANING,
		answer: "village",
		hint: "hanamura is a nice 'village' where I like to get owned by zenyatta"
	},
	{
		clue: "赤",
		type: MEANING,
		answer: "red",
		hint: "From earth and fire. Aka chan is the pygmy, used lord soul to create fire and humans. Fire is red"
	},
	{
		clue: "足",
		type: MEANING,
		answer: "foot",
		hint: "Ashiiiiet, I stepped on a spider with my 'foot'"
	},
	{
		clue: "花",
		type: MEANING,
		answer: "flower",
		hint: "Flowers have petals on the top of the stem. They change most noticeably"
	},
	{
		clue: "音",
		type: MEANING,
		answer: "sound",
		hint: "Stand ON the sun"
	},
	{
		clue: "校",
		type: MEANING,
		answer: "school",
		hint: "Big tree 木 in the village center where people interact 交 and where children attend school"
	},
	{
		clue: "交",
		type: MEANING,
		answer: "interchange",
		hint: "Several 六 roads crossing X"
	},
	{
		clue: "森",
		type: MEANING,
		answer: "forest",
		hint: "Mori SUMMER smokes a lot of trees(Everyday)"
	},
	{
		clue: "草",
		type: MEANING,
		answer: "grass",
		hint: "Grasses (top part) growing plentifully 十 under the sun 日"
	},
	{
		clue: "良",
		type: READING,
		answer: "good",
		hint: "Eating without a roof is dah bes"
	}
];

var cards = [shuffle(meanings), shuffle(readings)];

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