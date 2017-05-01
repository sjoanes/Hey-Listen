var MEANING = "MEANING";
var READING = "READING";

var readings = [
	{
		clue: "年",
		answer: "ねん",
		hint: "NENtendo comes up with great content every YEAR."
	},
	{
		clue: "食",
		answer: "た",
		hint: 'You eat on a TAble. You only eat when you have a good(良) roof over your head'
	},
	{
		clue: "林",
		answer: "りん",
		hint: "Rinninninnin RIN nininn is the sound of a chainsaw cutting down a <strong>forest</strong>"
	},
	{
		clue: "雨",
		answer: "あめ",
		hint: 'The ticks are rain. Thank God, AMEn, we have a roof!'
	},
	{
		clue: "長",
		answer: "なが",
		hint: 'The naga have long tails with spades at the end'
	},
	{
		clue: "夕",
		answer: "ゆう",
		hint: 'Who added that extra line to you ク to make タ? YUU did.'
	},
	{
		clue: "名",
		answer: "めい",
		hint: 'Who is that standing on the ice wall? Its Mei'
	},
	{
		clue: "文 ",
		answer: "ぶん",
		hint: 'That doll has a BUN hair style'
	},
	{
		clue: "町",
		answer: "まち",
		hint: 'The MACHIne moves it from the rice paddy to town.'
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
		answer: "な",
		hint: "Lick a na-ck"
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
		hint: "Only the nobility 袁 (mouths 口 of robes  trailing on the ground 土) could afford to travel  to distant places"
	},
	{
		clue: "売",
		answer: "う",
		hint: "When you put Earth on the table, thats the practice of selling"
	},
	{
		clue: "読",
		answer: "よ",
		hint: "Selling 売 words 言"
	},
	{
		clue: "栄",
		answer: "えい",
		hint: "A good education \\/ system and good resources 木 bring prosperity. EIsenhower knew that."
	},
	{
		clue: "養",
		answer: "よう",
		hint: "To raise/rear children one has to spend lots of Yen to give them YooHoo and food to eat 食."
	},
	{
		clue: "相",
		answer: "そう",
		hint: "SO (significant others) eye 目 each other mutually, each from behind a tree 木"
	},
	{
		clue: "場",
		answer: "じょう",
		hint: "Jyousuke lived in the countryside. Grazing grounds 土 for cattle 昜."
	},
	{
		clue: "決",
		answer: "けっ",
		hint: "Village headman 夬 DECIDES the distribution of the water シ in the KEttle"
	},
	{
		clue: "拾",
		answer: "しゅう",
		hint: "Pick up a gun with both hands 扌 together 合. And shuu-t!"
	},
	{
		clue: "合",
		answer: "ごう",
		hint: "Fit a triangle and square into the baby toy. Matching them is like a go-al for babies."
	},
	{
		clue: "声",
		answer: "せい",
		hint: "Soldier 士 with weapon ノ shouting with a double loud mouth 口口. <bold>SEI</bold>TO KAIBA!!!!!"
	},
	{
		clue: "別",
		answer: "べつ",
		hint: "Put your betsu in. You dont have a choice with the katana to your mouth and a knife next to that. You thought this is different from usual"
	},
	{
		clue: "込",
		answer: "こ",
		hint: "Moving (on the road) inward 入 for the KO"
	},
	{
		clue: "汚",
		answer: "きたな",
		hint: "kitana from mortal kombat is dirty"
	},
	{
		clue: "味",
		answer: "あじ",
		hint: "In the mouth 口 and not yet 未 swallowed. Ajeez not again"
	},
	{
		clue: "高",
		answer: "たか",
		hint: "Stack all those box up high like a pagoda. (taka)"
	},
	{
		clue: "恥",
		answer: "はず",
		hint: "You can hear your heart in your ears when you are embarassed."
	},
	{
		clue: "幸",
		answer: "しあわ",
		hint: "Happy couple \\ / in their own shielded 干 world/land 土."
	},
	{
		clue: "化",
		answer: "か",
		hint: "KAyne can change the shape of the spoon."
	},
	{
		clue: "夫",
		answer: "ふ",
		hint: "Two humans, one is the husband who is screaming fuuuuuu"
	},
	{
		clue: "加",
		answer: "くわ",
		hint: "KUWAit needs to Strengthed 力 itself by adding food to the mouth 口"
	},
	{
		clue: "眺",
		answer: "なが",
		hint: "Keep your eyes north for the NAGA"
	},
	{
		clue: "悪",
		answer: "わる",
		hint: "亜 is a coffin being carried. Hearts are heavy. This is a BAD day. warui == bad"
	},
	{
		clue: "張",
		answer: "は",
		hint: "HA you scream in victory as you nail the Nohrian with your long bow"
	},
	{
		clue: "皆",
		answer: "みな",
		hint: "Everyone has two spoons on their skull. Everyone = mina"
	},
	{
		clue: "付",
		answer: "つ",
		hint: "Every inch of Kurisu(person) is TSUndere"
	},
	{
		clue: "似",
		answer: "に",
		hint: "Your NI really resembles my knee."
	},
	{
		clue: "泣",
		answer: "な",
		hint: "Standing with water flowing out. Crying = na"
	},
	{
		clue: "臭",
		answer: "くさ",
		hint: "Oneself big, smeellllss. KUSAI"
	},
	{
		clue: "金",
		answer: "きん",
		hint: "He presented two GOLD nuggets ( \\ / ) covered (roof thing) with earth (土) to the blue KINg (キン)."
	},
	{
		clue: "青",
		answer: "あお",
		hint: "Ow(ao) my toe is blue for a month now"
	},
	{
		clue: "戸",
		answer: "と",
		hint: "You put up a flag after you once stubbed your TOe in the door"
	},
	{
		clue: "外",
		answer: "がい",
		hint: "In the early evening タ, fortune tellers ト sit outside"
	},
	{
		clue: "台",
		answer: "だい",
		hint: "Individual ム speaking 口 on a podium"
	},
	{
		clue: "母",
		answer: "はは",
		hint: "These are sideways boobs, like mothers have"
	},
	{
		clue: "地",
		answer: "ち",
		hint: "Earth 土 with earthworms 也 are the main producers of CHIese."
	},
	{
		clue: "作",
		answer: "つく",
		hint: "Person's イ surprise 乍 at the sight of a beautifully made object. Make == tsukuru"
	},
	{
		clue: "汽",
		answer: "き",
		hint: "Evaporation of water シ."
	},
	{
		clue: "当",
		answer: "あ",
		hint: "Hand ヨ strikes flint to make fire \|/ AH it worked!?"
	},
	{
		clue: "池",
		answer: "ち",
		hint: "Stagnant water シ with insects that snakes 也 can feed on. Later used for CHIese"
	},
	{
		clue: "羽",
		answer: "は",
		hint: "HAhahahaha stop tickling me with those feathers"
	},
	{
		clue: "自",
		answer: "じ",
		hint: "Point at your eye to refer to self. Use eyes to Jiiiiiiiro jiro"
	},
	{
		clue: "色",
		answer: "いろ",
		hint: "The artist's installation includes statues of bent bodies (, 巴), which are SHOCKingly (ショク) blue, in front of a COLORful"
	},
	{
		clue: "図",
		answer: "と",
		hint: "Drawing a TOe on a map as a hint for later"
	},
	{
		clue: "声",
		answer: "こえ",
		hint: "My flag will be under the Earth before I stop singing Koe Koe In the House"
	},
	{
		clue: "形",
		answer: "けい",
		hint: "The gate with hair is SHAPEd like a KEI"
	},
	{
		clue: "角",
		answer: "かく",
		hint: "Horn on an elephant is a /\\"
	},
	{
		clue: "走",
		answer: "はし",
		hint: "Put your feet to the ground and run. Run == hashiru"
	},
	{
		clue: "画",
		answer: "が",
		hint: "The stain GArasu(glass) picture hangs from the ceiling"
	},
	{
		clue: "国",
		answer: "くに",
		hint: "King with his jewel 玉 within the borders 口 of his country"
	},
	{
		clue: "夜",
		answer: "や",
		hint: "At night, a person イ goes under cover 亠 and holds in his hand 夂 his small valuables 乀."
	},
	{
		clue: "店",
		answer: "みせ",
		hint: "A MISErable job is fortunetelling 占 in her store 广"
	},
	{
		clue: "歩",
		answer: "ある",
		hint: "A few 少 steps taken with the feet, stopping 止 because you are slowly walking taking in the smell of all the ARUgala"
	},
	{
		clue: "門",
		answer: "もん",
		hint: "pokeMON is a gateway drug to the rest of anime in the west"
	},
	{
		clue: "室",
		answer: "しつ",
		hint: "Where one finally arrives 至 after entering a house 宀, desperately needing to take a SHITSU"
	},
	{
		clue: "至",
		answer: "いた",
		hint: "Arrive in praires only to get an arrow in the back, ittaaaa"
	},
	{
		clue: "後",
		answer: "うし",
		hint: "Walking 彳 with a thread 幺 in the hand 夂: it trails behind. USHIro = behind"
	},
	{
		clue: "活",
		answer: "がっ",
		hint: "Active person with a well oiled シ tongue 舌 because GArlic is always keeping it salivated"
	},
	{
		clue: "海",
		answer: "うみ",
		hint: "Where every 毎 drop of water シ flows to."
	},
	{
		clue: "思",
		answer: "おも",
		hint: "OH MOses, your heart lies with the rice paddies"
	},
	{
		clue: "昼",
		answer: "ひる",
		hint: "The HIRO of the sun 日 is tiny, casting a one foot 尺 long shadow on the ground 一"
	},
	{
		clue: "尺",
		answer: "しゃく",
		hint: "Theres a big R on the flag, its the sign for the SHAKU"
	},
	{
		clue: "点",
		answer: "てん",
		hint: "The fortuneteller was put to flames because only 1 in TEN things he said were true. He never really got to the POINT"
	},
	{
		clue: "計",
		answer: "けい",
		hint: "The key(KEI) to wisdom is to MEASURE your words 言 many 十 times before speaking"
	},
	{
		clue: "風",
		answer: "かぜ",
		hint: "A bug is off the ground when the wind picks it up. KAZE = wind"
	},
	{
		clue: "帰",
		answer: "かえ",
		hint: "Need to return my KAEtana to my city"
	},
	{
		clue: "弱",
		answer: "よわ",
		hint: "YO WAH(yowa) are you doing??! Trying to dual wield bows makes you WEAKER."
	},
	{
		clue: "通",
		answer: "つう",
		hint: "Main street where people move around in action 甬. TOO(tsuu) busy to talk is usual on the commute"
	},
	{
		clue: "現",
		answer: "けん",
		hint: "The king 王 KEN is actually seen 見 only at special events"
	},
	{
		clue: "書",
		answer: "か",
		hint: "Using a writing brush 聿 (holding brush 丨 with fingers 二) in a sunlit 日 place. KAku = write"
	},
	{
		clue: "寺",
		answer: "てら",
		hint: "Place 土 where monks follow monastic rules 寸. oTERA = temple"
	},
	{
		clue: "時",
		answer: "じ",
		hint: "Time of the day 日 announced by the temple 寺 bell. the G(ji) rings the bell cause he is a boss"
	},
	{
		clue: "記",
		answer: "き",
		hint: "One's 己 words 言 written down so I never forget I have to KIll you"
	},
	{
		clue: "己",
		answer: "おのれ",
		hint: "If I ever saw those snakes ONE REpublic, id address them with ONERE"
	},
	{
		clue: "魚",
		answer: "さかな",
		hint: "Cook some rice over a fire. Whats that on the top? Its a fish. SAKANA = fish"
	},
	{
		clue: "黄",
		answer: "き",
		hint: "Grain is protected by a fence. Its like eight rice in one."
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

function randomIndex(list) {
	return Math.floor(Math.random() * list.length);
}

function getRandomOptions(list) {
	return [1,2,3,4].map(function() {
		return list[randomIndex(list)].answer;
	});
}

function makeQuestion(callback) {
	var openCursorRequest = db.transaction(["readings"], "readwrite")
		.objectStore("readings")
		.index('exp')
		.openCursor(null, 'next');

	openCursorRequest.onsuccess = function (event) {
        if (event.target.result) {
        	var question = event.target.result.value;
        	var options = getRandomOptions(readings);
        	options[randomIndex(options)] = question.answer;

            callback({
				clue: question.clue,
				choices: options,
				answer: question.answer,
				mnemonic: question.hint
			});
        }
	}

	openCursorRequest.onerror = function(event) {
		console.log("Fail", event);
	}
}

function gainExperience(clue, attempts) {
	var objectStore = db.transaction(["readings"], "readwrite").objectStore("readings");
	var getRequest = objectStore.get(clue);

	getRequest.onsuccess = function (event) {
		var updated = getRequest.result;
		var failAttempts = attempts == 1 ? Math.floor((Math.random() * 2) % 2) : attempts; // assume %50 of 1 failed attempts are misinputs

        updated.streak = failAttempts ? 0 : (updated.streak || 0) + 1;
        updated.exp += Math.floor(Math.log2(updated.streak + 2)) * (4 - Math.min(3, failAttempts));
        objectStore.put(updated);
	}
}

function setupDb() {
	var item = 0;
	var level = 0;
	var request = window.indexedDB.open("factbank", 1);
	request.onerror = function(event) { console.log(event.target.errorCode); };
	request.onsuccess = function(event) {
		db = request.result;

		var objectStore = db.transaction(["readings"], "readwrite").objectStore("readings");
		putIfDoesntExist(0, readings, objectStore);

		// this updates the vocabulary list without touching the experience(exp) values
		// Also initializes each item with experience so the user is exposed to new items in chunks
	    function putIfDoesntExist(i, array, store) {
			if (i >= array.length) return;

			var getRequest = objectStore.get(readings[i].clue);
			getRequest.onsuccess = function(event) {
				item = item + 1 == 10 ? 0 : item + 1;
				level = item == 0 ? level + 1 : level;
				readings[i].exp = event.target.result && event.target.result.exp || level * 50;
				objectStore.put(readings[i]).onsuccess = function() { putIfDoesntExist(i + 1, array) };
			}
		}
	};

	request.onupgradeneeded = function(event) {
	    db = event.target.result;
	    var store = db.createObjectStore('readings', {keyPath: 'clue'});
		store.createIndex("exp", "exp", { unique: false });
	};
}

function setupMessageHandler() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			console.log(request);
			if (request.action === "prompt") {
			    makeQuestion(sendResponse);
			    return true;
			} else if (request.action === "init") {
				sendResponse({
					isFirstTime: isFirstTime(),
					whitelist: makeRegex(localStorage.getItem("whitelist")),
					delay: localStorage.getItem("delay") || 10
				});
			} else if (request.action === "solved") {
				gainExperience(request.clue, request.attempts);
			}
		}
	);
}

function isFirstTime() {
	var isFirstTime = localStorage.getItem("isFirstTime") === null;
	localStorage.setItem("isFirstTime", false);

	return isFirstTime;
}

function makeRegex(whitelist) {
	return whitelist ? "(http://|https://)www\.(" + whitelist.split(",").join('|') + ")\." : "a^";
}

function init() {
	setupDb();
	setupMessageHandler();
}

init();