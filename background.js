var MEANING = "MEANING";
var READING = "READING";

var readings = [
	{
		clue: "年",
		answer: "ねん",
		hint: "Every year it feels like guns are on top."
	},
	{
		clue: "食",
		answer: "た",
		hint: 'Your eyes are important to you, right? Sadly, one of your eyes is missing right now, because a sheep grabbed it and pulled it out, and is now running away from you, yelling his sheep call.... "Mehhhhhh"'
	},
	{
		clue: "林",
		answer: "りん",
		hint: "Rinninninnin RIN nininn is the sound of a chainsaw cutting down a <strong>forest</strong>"
	},
	{
		clue: "雨",
		answer: "あめ",
		hint: 'The ticks are rain'
	},
	{
		clue: "長",
		answer: "なが",
		hint: 'The naga have long tails'
	},
	{
		clue: "夕",
		answer: "ゆう",
		hint: 'yuu are the bes '
	},
	{
		clue: "名",
		answer: "めい",
		hint: 'Who is that standing on the ice wall? Its Mei'
	},
	{
		clue: "文 ",
		answer: "ぶん",
		hint: 'That doll has a "bun" hair style'
	},
	{
		clue: "町",
		answer: "まち",
		hint: 'Rice near a town? Thats a town'
	},
	{
		clue: "竹",
		answer: "たけ",
		hint: '"take"-out food always has bamboo in it'
	},
		{
		clue: "古",
		answer: "ふる",
		hint: "furu"
	},
	{
		clue: "吾",
		answer: "わが",
		hint: "'I' = the perceiving subject. Five senses are like five mouths. 2 nostrils, 2 ears and 1 mouth"
	},
	{
		clue: "冒",
		answer: "ぼう",
		hint: "You draw your 'bow' straight up because you going to take down the sun."
	},
	{
		clue: "朋",
		answer: "ほう",
		hint: "Flesh of my flesh is another name for my 'ho'"
	},
	{
		clue: "明",
		answer: "あか",
		hint: "aka chan is a source of light for the future. Light is bright."
	},
	{
		clue: "唱",
		answer: "しょう",
		hint: "You came to the 'show' to hear the people chant zelda opening"
	},
	{
		clue: "晶",
		answer: "しょう",
		hint: "Where else would you see three crystals sparkling together, its a crystal show"
	},
	{
		clue: "品",
		answer: "ひん",
		hint: "Zombie apocalypse, we need to stockpile goods. Anyone who is a 'hin'drance won't get any"
	},
	{
		clue: "呂",
		answer: "りょ",
		hint: "Put your back into 'row'ing. Back = spine, dont question it"
	},
	{
		clue: "昌",
		answer: "さかん",
		hint: "If you are prosperous, you are 'sakan'd to none"
	},
	{
		clue: "早",
		answer: "はや",
		hint: "You know this one"
	},
	{
		clue: "旭",
		answer: "あさひ",
		hint: "あさひ is morning sun",

	},
	{
		clue: "世",
		answer: "せ",
		hint: "You need to have se-x to create the next generation"
	},
	{
		clue: "胃",
		answer: "い",
		hint: "I have a stomach"
	},
	{
		clue: "旦",
		answer: "あき",
		hint: "Aki dyu not, the earth revovles around the sun"
	},
	{
		clue: "胆",
		answer: "きも",
		hint: "Too much anger, you got gall bladder cancer. You need to do kimo"
	},
	{
		clue: "亘",
		answer: "わた",
		hint: "Spanning four years at Wataru(Waterloo)"
	},
	{
		clue: "凹",
		answer: "くぼ",
		hint: "Kubo the movie is deep like a bowl"
	},
	{
		clue: "凸",
		answer: "でこ",
		hint: "deko rate the area with pelvic thrusts"
	},
	{
		clue: "生",
		answer: "う",
		hint: 'Looks like a flower being born, "u"guu its so cute'
	},
	{
		clue: "休",
		answer: "やす",
		hint: 'Person resting besides a tree, yasumi == rest'
	},
	{
		clue: "先",
		answer: "せん",
		hint: "If you are a cow with legs, you have a'sen'cended"
	},
	{
		clue: "字",
		answer: "じ",
		hint: "If you learn all the kanji characters, you're a straight GEE"
	},
	{
		clue: "子",
		answer: "こ",
		hint: "ko"
	},
	{
		clue: "気",
		answer: "き",
		hint: "Gen KI"
	},
	{
		clue: "糸",
		answer: "いと",
		hint: "ito-u senpai threads together beautiful comics at the spine"
	},
	{
		clue: "耳",
		answer: "みみ",
		hint: "Slanted eye is an ear. Mimi = ear"
	},
	{
		clue: "村",
		answer: "むら",
		hint: "hana 'mura' is a nice village where I like to get owned by zenyatta"
	},
	{
		clue: "赤",
		answer: "あか",
		hint: "Aka chan is the pygmy, used lord soul to create fire and humans"
	},
	{
		clue: "足",
		answer: "あし",
		hint: "Ashiiiiet, I stepped on a spider"
	},
	{
		clue: "花",
		answer: "はな",
		hint: "Flowers have petals on the top of the stem. They change most noticeably"
	},
	{
		clue: "音",
		answer: "おん",
		hint: "Stand ON the sun"
	},
	{
		clue: "校",
		answer: "こう",
		hint: "Big tree 木 in the village center where people interact 交 and where children attend school. What a cuuuul tree"
	},
	{
		clue: "交",
		answer: "まじ",
		hint: "Several 六 roads crossing X. Its maji-k that no one is crashing"
	},
	{
		clue: "森",
		answer: "もり",
		hint: "Mori summer smokes a lot of trees(Everyday)"
	},
	{
		clue: "草",
		answer: "くさ",
		hint: "kusa, I got a grass stain"
	},
	{
		clue: "良",
		answer: "よ",
		hint: "yo this is sooooo good"
	},
	{
		clue: "弓",
		answer: "きゅう",
		hint: "Noire is an archer with a bow. What kyuutie."
	},
	{
		clue: "光",
		answer: "ひか",
		hint: "Like a splendid diamond shining on a pi pedestal. Hika cup and the boulder will start rolling"
	},
	{
		clue: "毎",
		answer: "まい",
		hint: "MAI is dad's mom, EVERYone has a mom."
	},
	{
		clue: "開",
		answer: "あ",
		hint: "Open your mouth, aaaaah. Theres a mini gate in between the gate"
	},
	{
		clue: "柔",
		answer: "やわ",
		hint: "yawai halberd is soooft"
	},
	{
		clue: "以",
		answer: "も",
		hint: "Spades are mo than enter"
	},
	{
		clue: "射",
		answer: "い",
		hint: "Inch to aim for the head on the body"
	},
	{
		clue: "安",
		answer: "やす",
		hint: "Woman with a hat looking for the cheap deals"
	},
	{
		clue: "穴",
		answer: "あな",
		hint: "Put a hat on that hole, hole == ana"
	},
	{
		clue: "倍",
		answer: "ばい",
		hint: "Person standing on a mouth so they don't have to say bai"
	},
	{
		clue: "乳",
		answer: "にゅう",
		hint: "Use a new hook when you learning to fish on the ground"
	},
	{
		clue: "尻",
		answer: "しり",
		hint: "I wave a flag for 9 things, its all ass"
	},
	{
		clue: "猫",
		answer: "ねこ",
		hint: "Whiskers and rice fields, rice is white, cats are white"
	},
	{
		clue: "初",
		answer: "はじ",
		hint: "Ne sword is the FIRST thing you want to collect"
	},
	{
		clue: "舐",
		answer: "ね",
		hint: "Lick a ne-ck"
	},
	{
		clue: "狭",
		answer: "きょう",
		hint: "Today(kyou) 2 in 10 men are squeezed into a hallway. Its tight."
	},
	{
		clue: "鳴",
		answer: "な",
		hint: "Cries come out of birds mouth"
	},
	{
		clue: "身",
		answer: "み",
		hint: "Dont touch mi body"
	},
	{
		clue: "知",
		answer: "し",
		hint: "Shiiii, dont put that arrow in your mouth. Its been in koichi's neck"
	},
	{
		clue: "顔",
		answer: "かお",
		hint: "See the guy standing? Does he have a shellfish with eyes, thus have a face?"
	},
	{
		clue: "舌",
		answer: "した",
		hint: "In a rimjob, you put a tongue in someones shita"
	},
	{
		clue: "氏",
		answer: "し",
		hint: "This shi-tty katar is a family heirloom"
	},
	{
		clue: "鳥",
		answer: "とり",
		hint: "Wing with a white head. dat a bird"
	},
	{
		clue: "米",
		answer: "べい",
		hint: "The dream is to get an American 'bae'"
	},
	{
		clue: "来",
		answer: "く",
		hint: "Fresh leaves (top part) coming forth from a tree's 木 branches."
	},
	{
		clue: "考",
		answer: "かんが",
		hint: "Its a kanga-roo ready to spring jump. But not yet, he is thinking about it."
	},
	{
		clue: "話",
		answer: "はな",
		hint: "When you put your thoughts on your tongue, thats speaking"
	},
	{
		clue: "西",
		answer: "にし",
		hint: "In the west, we like to put things in our piehole. And thats not nishi(niche?)"
	},
	{
		clue: "直",
		answer: "ただ",
		hint: "It takes ten 十 pairs of eyes 目 to fix a corner L not made at a right angle"
	},
	{
		clue: "言",
		answer: "い",
		hint: "Sound waves coming out of a mouth"
	},
	{
		clue: "親",
		answer: "おや",
		hint: "Parents standing 立 behind a tree 木, watching 見 over their children. Kids hurt their shins and cry"
	},
	{
		clue: "社",
		answer: "しゃ",
		hint: "You work all your life for your company, and your pension sucks. Whole thing is a sham"
	},
	{
		clue: "数",
		answer: "すう",
		hint: "Woman 女 spends a soothing(suu) evening, counting rice 米 with a tool 攵"
	},
	{
		clue: "近",
		answer: "ちか",
		hint: "Peons walk to the nearest trees with their axes 斤. Chikaku == near"
	},
	{
		clue: "首",
		answer: "しゅ",
		hint: "You always shuut the neck. Use eye to make hole in neck"
	},
	{
		clue: "新",
		answer: "あたら",
		hint: "Part of forest 亲 (standing 立 tree 木) cut down with an ax 斤 to make room for new growth."
	},
	{
		clue: "間",
		answer: "あいだ",
		hint: "Sun 日 viewed through the open gate 門 during a certain interval of the day."
	},
	{
		clue: "強",
		answer: "つよ",
		hint: "Must be pretty strong if you are drawing a bow against golden theif bug"
	},
	{
		clue: "家",
		answer: "か",
		hint: "Roof over a beast's head? That a KAyne approves."
	},
	{
		clue: "科",
		answer: "か",
		hint: "you swing your KAtana to protect your grain. Without agriculture you can't do your science."
	},
	{
		clue: "朝",
		answer: "あさ",
		hint: "In the morning, though the sun 日 rises with tenfold intensity , yet the moon 月can still be seen."
	},
	{
		clue: "会",
		answer: "あ",
		hint: "Two 二 individuals ム under the same roof."
	},
	{
		clue: "絵",
		answer: "え",
		hint: "When strings meet to make some picture. Eeeeeh, I can't make it out."
	},
	{
		clue: "遠",
		answer: "とお",
		hint: "far"
	},
	{
		clue: "売",
		answer: "う",
		hint: "sell"
	},
	{
		clue: "読",
		answer: "よ",
		hint: "Selling 売 words 言"
	}
];

var meanings = [
	{
		clue: "古",
		answer: "old",
		hint: "Tombstone with a cross on top. 'Old' people die"
	},
	{
		clue: "吾",
		answer: "I",
		hint: "'I' = the perceiving subject. Five senses are like five mouths. 2 nostrils, 2 ears and 1 mouth"
	},
	{
		clue: "冒",
		answer: "risk",
		hint: "Mom says don't look at the sun. But you gotta be 'risk'y. Sun above and an eye right below looking up."
	},
	{
		clue: "朋",
		answer: "companion",
		hint: "bible story of adam and eve. God thought Adam needed a companion so he made flesh of my flesh. 月 means flesh"
	},
	{
		clue: "明",
		answer: "bright",
		hint: "Both the moon and the sun are the 'bright' things in the sky"
	},
	{
		clue: "唱",
		answer: "chant",
		hint: "One mouth making no noise aka the choirmaster. Two mouths with wagging tongues because they are 'chanting'"
	},
	{
		clue: "晶",
		answer: "sparkle",
		hint: "A diamond 'sparkles' when you hold it up to the light (like the sun). The sparkles are like little light sources. A picture of a tiny sun in three places."
	},
	{
		clue: "品",
		answer: "goods",
		hint: "When we think of 'goods' in a modern industrial society, we think of what has been mass produced. Produced for the masses to consume like fledglings in a nest with open beaks."
	},
	{
		clue: "呂",
		answer: "spine",
		hint: "This is like a picture of two vertebrae in the spine linked by a single stroke"
	},
	{
		clue: "昌",
		answer: "propersous",
		hint: "If we had two suns we could yield twice the crops (to be more 'prosperous')"
	},
	{
		clue: "早",
		answer: "early",
		hint: "First flower of the day to rise. the sunflower is the early riser in the garden. Sunflowers know how to sun"
	},
	{
		clue: "旭",
		answer: "rising sun",
		hint: "Japan is the land of the 'rising sun'. Imagine baseball and the red sun?",

	},
	{
		clue: "世",
		answer: "generation",
		hint: "A generation is thirty years. This kanji has 3 tens. ten plus ten plus ten"
	},
	{
		clue: "胃",
		answer: "stomach",
		hint: "The part of the body that keeps the brain working"
	},
	{
		clue: "旦",
		answer: "daybreak",
		hint: "The sun is peaking out of the horizon, aka the night is breaking."
	},
	{
		clue: "胆",
		answer: "gall bladder",
		hint: "The left is a part of the body. The right is daybreak. Don't let the day break on your anger (anger === bile == gall blader)"
	},
	{
		clue: "亘",
		answer: "span",
		hint: "Sun going from one side of the horizon to the other. It is 'spanning' the day"
	},
	{
		clue: "凹",
		answer: "concave",
		hint: "Yo this shit is concave"
	},
	{
		clue: "凸 ",
		answer: "convex",
		hint: "Yo this shit is convex"
	},
	{
		clue: "生",
		answer: "life",
		hint: 'Life is like a cow standing on the ground. The ground is Mississauga'
	},
	{
		clue: "休",
		answer: "rest",
		hint: 'Person resting besides a tree, yasumi == rest'
	},
	{
		clue: "先",
		answer: "ahead",
		hint: "If you are a cow with legs, you have a'sen'cended. Ahead of the population"
	},
	{
		clue: "字",
		answer: "character",
		hint: "Review and study of the characters: a child's子 most important home宀 work"
	},
	{
		clue: "子",
		answer: "child",
		hint: "The head and arms of a child. You don't need to both with legs because its just a child, they don't have legs."
	},
	{
		clue: "気",
		answer: "spirit",
		hint: "Backwards square root of me? Thats spirit"
	},
	{
		clue: "糸",
		answer: "thread",
		hint: "ito-u senpai 'thread's together beautiful comics at the spine"
	},
	{
		clue: "耳",
		answer: "ear",
		hint: "Slanted eye is an ear. Mimi = ear"
	},
	{
		clue: "村",
		answer: "village",
		hint: "hanamura is a nice 'village' where I like to get owned by zenyatta"
	},
	{
		clue: "赤",
		answer: "red",
		hint: "From earth and fire. Aka chan is the pygmy, used lord soul to create fire and humans. Fire is red"
	},
	{
		clue: "足",
		answer: "foot",
		hint: "Ashiiiiet, I stepped on a spider with my 'foot'"
	},
	{
		clue: "花",
		answer: "flower",
		hint: "Flowers have petals on the top of the stem. They change most noticeably"
	},
	{
		clue: "音",
		answer: "sound",
		hint: "Stand ON the sun"
	},
	{
		clue: "校",
		answer: "school",
		hint: "Big tree 木 in the village center where people interact 交 and where children attend school"
	},
	{
		clue: "交",
		answer: "interchange",
		hint: "Several 六 roads crossing X"
	},
	{
		clue: "森",
		answer: "forest",
		hint: "Mori SUMMER smokes a lot of trees(Everyday)"
	},
	{
		clue: "草",
		answer: "grass",
		hint: "Grasses (top part) growing plentifully 十 under the sun 日"
	},
	{
		clue: "良",
		answer: "good",
		hint: "Eating without a roof is dah bes"
	},
	{
		clue: "犭豕",
		answer: "beast",
		hint: "All beasts have a fluffy tail"
	},
	{
		clue: "狭",
		answer: "tight",
		hint: "Today(kyou) 2 in 10 men are squeezed into a hallway. Its tight."
	},
	{
		clue: "斤",
		answer: "ax",
		hint: "T is the handle, the rest is the blade."
	},
	{
		clue: "弓",
		answer: "bow",
		hint: "Noire is an archer with a bow. What kyuutie."
	},
	{
		clue: "光",
		answer: "light",
		hint: "Like a splendid diamond shining on a pi pedestal. Hika cup and the boulder will start rolling"
	},
	{
		clue: "毎",
		answer: "every",
		hint: "MAI is dad's mom, EVERYone has a mom."
	},
	{
		clue: "開",
		answer: "open",
		hint: "Open your mouth, aaaaah. Theres a mini gate in between the gate"
	},
	{
		clue: "柔",
		answer: "soft",
		hint: "yawai halberd is soooft"
	},
	{
		clue: "以",
		answer: "by means of",
		hint: "Spades are mo than a person"
	},
	{
		clue: "射",
		answer: "shoot",
		hint: "Inch to aim for the head on the body"
	},
	{
		clue: "安",
		answer: "cheap",
		hint: "Woman with a hat looking for the cheap deals"
	},
	{
		clue: "穴",
		answer: "hole",
		hint: "Put a hat on that hole, hole == ana"
	},
	{
		clue: "倍",
		answer: "times",
		hint: "Person standing on a mouth so they don't have to say bai"
	},
	{
		clue: "乳",
		answer: "milk",
		hint: "Use a new hook when you learning to fish on the ground"
	},
	{
		clue: "尻",
		answer: "ass",
		hint: "I wave a flag for 9 things, its all ass"
	},
	{
		clue: "猫",
		answer: "cat",
		hint: "Whiskers and rice fields, rice is white, cats are white"
	},
	{
		clue: "初",
		answer: "first",
		hint: "Ne sword is the FIRST thing you want to collect"
	},
	{
		clue: "舐",
		answer: "neck",
		hint: "Lick a ne-ck"
	},
	{
		clue: "狭",
		answer: "tight",
		hint: "Today(kyou) 2 in 10 men are squeezed into a hallway. Its tight."
	},
	{
		clue: "鳴",
		answer: "cry",
		hint: "Cries come out of birds mouth"
	},
	{
		clue: "身",
		answer: "body",
		hint: "Dont touch mi body"
	},
	{
		clue: "知",
		answer: "know",
		hint: "Shiiii, dont put that arrow in your mouth. Its been in koichi's neck"
	},
	{
		clue: "顔",
		answer: "face",
		hint: "See the guy standing? Does he have a shellfish with eyes, thus have a face?"
	},
	{
		clue: "舌",
		answer: "tongue",
		hint: "In a rimjob, you put a tongue in someones shita"
	},
	{
		clue: "氏",
		answer: "family name",
		hint: "This shi-tty katar is a family heirloom"
	},
	{
		clue: "鳥",
		answer: "bird",
		hint: "Wing with a white head. dat a bird"
	},
	{
		clue: "米",
		answer: "rice",
		hint: "The dream is to get an American 'bae'"
	},
	{
		clue: "来",
		answer: "come",
		hint: "Fresh leaves (top part) coming forth from a tree's 木 branches."
	},
	{
		clue: "考",
		answer: "think",
		hint: "Its a kanga-roo ready to spring jump. But not yet, he is thinking about it."
	},
	{
		clue: "話",
		answer: "speak",
		hint: "When you put your thoughts on your tongue, thats speaking"
	},
	{
		clue: "西",
		answer: "west",
		hint: "In the west, we like to put things in our piehole. And thats not nishi(niche?)"
	},
	{
		clue: "直",
		answer: "fix",
		hint: "It takes ten 十 pairs of eyes 目 to fix a corner L not made at a right angle"
	},
	{
		clue: "言",
		answer: "say",
		hint: "Sound waves coming out of a mouth"
	},
	{
		clue: "親",
		answer: "parent",
		hint: "Parents standing 立 behind a tree 木, watching 見 over their children. Kids hurt their shins and cry"
	},
	{
		clue: "社",
		answer: "company",
		hint: "You work all your life for your company, and your pension sucks. Whole thing is a sham"
	},
	{
		clue: "数",
		answer: "number",
		hint: "Woman 女 spends a soothing(suu) evening, counting rice 米 with a tool 攵"
	},
	{
		clue: "近",
		answer: "near",
		hint: "Peons walk to the nearest trees with their axes 斤. Chikaku == near"
	},
	{
		clue: "首",
		answer: "neck",
		hint: "You always shuut the neck. Use eye to make hole in neck"
	},
	{
		clue: "新",
		answer: "new",
		hint: "Part of forest 亲 (standing 立 tree 木) cut down with an ax 斤 to make room for new growth."
	},
	{
		clue: "間",
		answer: "between",
		hint: "Sun 日 viewed through the open gate 門 during a certain interval of the day."
	},
	{
		clue: "強",
		answer: "strong",
		hint: "Must be pretty strong if you are drawing a bow against golden theif bug"
	},
	{
		clue: "家",
		answer: "house",
		hint: "Roof over a beast's head? That a KAyne approves."
	},
	{
		clue: "禾",
		answer: "grain",
		hint: "tree with a slanty hat is grain."
	}
];

var db;

function makeQuestion(callback) {
	var openCursorRequest = db.transaction(["readings"], "readwrite")
		.objectStore("readings")
		.index('exp')
		.openCursor(null, 'next');

	openCursorRequest.onsuccess = function (event) {
        if (event.target.result) {
        	var question = event.target.result.value;
            callback({
				hint: question.clue,
				choices: ["asd", "asd", "asd","asd"],
				answer: 1,
				mnemonic: question.hint
			});
        }
	}

	openCursorRequest.onerror = function(event) {
		console.log("Fail", event);
	}
}

function setupDb() {
	var request = window.indexedDB.open("factbank", 1);
	request.onerror = function(event) { console.log(event.target.errorCode); };
	request.onsuccess = function(event) { db = request.result; };

	request.onupgradeneeded = function(event) {
	    db = event.target.result;
	    var store = db.createObjectStore('readings', {keyPath: ['clue', 'answer']});
		store.createIndex("exp", "exp", { unique: false });

	    for (var i = 0; i < readings.length; i++) {
	    	readings[i].exp = 0;
	    	store.add(readings[i]);
	    }
	};
}

setupDb();

chrome.runtime.onMessage.addListener(
 	function(request, sender, sendResponse) {
 		console.log(request)
 		if (request.action === "prompt") {
		    makeQuestion(sendResponse);
 		} else if (request.action === "whitelist") {
 			sendResponse(localStorage.getItem("whitelist") || '.*');
 		}
	}
);