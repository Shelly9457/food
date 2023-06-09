const eatDate = [
    {
        name: '鹹酥雞',
        img: './images/鹹酥雞.png',
        id: 'eat1',
        text: '鹽酥雞原本是雞肉切成小塊，\
        先以醬料醃漬入味，再裹上油炸粉\
        （糖粉、麵粉、白粉、調味料等的混合物）\
        或調味過後的麵粉漿，再油炸的料理，\
        口感酥脆，肉質軟嫩。',
    },
    {
        name: '牛肉麵',
        img: './images/牛肉麵.png',
        id: 'eat2',
        text: '牛肉麵是台灣獨創一格的代表性美食，長久以來，不僅深植台灣飲食文化，\
        成為廣大民眾日常享用的國民美食；更以其獨特風味享譽國際、\
        深受各國觀光客喜愛，知名度與日本的拉麵並駕齊驅。\
        最常見的兩種不同風味的牛肉麵分別為清燉牛肉麵以及紅燒牛肉麵，\
        其中清燉牛肉麵比紅燒牛肉麵清淡。',
    },
    {
        name: '地瓜球',
        img: './images/地瓜球.jpg',
        id: 'eat3',
        text: '在台灣小吃中又稱為QQ蛋，地瓜球是將地瓜用成地瓜泥，加入麵粉與糯米粉，也可以個人口味加些黑芝麻或者是其他口味,將它揉成一顆像彈珠大小,將它拿去油炸，過後控干油分；美味外酥內軟的卡茲卡茲地瓜球就完成了，如喜歡還可撒些糖在上面。',
    },
    {
        name: '臭豆腐',
        img: './images/臭豆腐.png',
        id: 'eat4',
        text: '臭豆腐是一種深受民眾喜愛的台灣美食，含有活菌，臭豆腐散發著濃烈的腐臭，隔得老遠就能讓人聞到一股像是餿掉的牛奶或者腐爛垃圾的氣味。 喜歡它也好，討厭它也好，這些經過調味和切塊的發酵厚豆腐塊帶有一種獨特的變質味道，成為了台灣街頭美食的象徵。',
    },
    {
        name: '刨冰',
        img: './images/刨冰.jpg',
        id: 'eat5',
        text: '冰冰涼涼的刨冰在台灣的夏天可以說是人氣爆表!可以搭配不同口味，例如:黑糖、芒果、草莓、煉乳等等，冰冰涼涼的讓人欲罷不能。',
    },
    {
        name: '大腸麵線',
        img: './images/大腸麵線.jpg',
        id: 'eat6',
        text: '滷過的大腸再加上新鮮大顆的蚵仔，配料豐富，咬嚼大腸時，口感脆脆的，絲毫沒有腥味。',
    },
    {
        name: '炸雞排',
        img: './images/炸雞排.jpg',
        id: 'eat7',
        text: '酥酥脆脆的外皮加上軟嫩的肉質，一口咬下爆汁，是來台灣必嘗的美食之一!',
    },
    {
        name: '滷肉飯',
        img: './images/滷肉飯.jpg',
        id: 'eat8',
        text: '煮得剛剛好的白飯再淋上滷肉之後鹹度、口感相輔相成，造就一碗好吃的滷肉飯，滷肉肥而不膩，可謂色香味俱全。',
    },
    {
        name: '珍珠奶茶',
        img: './images/珍奶.png',
        id: 'eat9',
        text: '濃郁的奶茶，配上Q彈的珍珠，讓大家愛不釋手。',
    },
]

const gaveData = [
    {
        name: '鳳梨酥',
        img: './images/鳳梨酥.jpg',
        text: '鳳梨酥是臺灣的傳統糕點，以西式曲奇餅酥鬆餅皮發展而成的台式點心。 其主要原料為麵粉、奶油、糖、蛋、冬瓜醬（也可用純鳳梨或冬瓜混合鳳梨製作）。',
    },
    {
        name: '芋頭酥',
        img: './images/芋頭酥.jpg',
        text: '台灣的特產芋頭酥是將麵粉與奶油做成的酥皮，混合芋頭內餡加以烘烤製成的點心，外皮酥脆，芋香濃郁',
    },
    {
        name: '蛋捲',
        img: './images/蛋捲.jpg',
        text: '蛋卷是以雞蛋、油、低筋麵粉和細砂糖作原料攪拌，然後煎或烤製，再以筷子等類似用具捲成棒狀即可。酥酥脆脆，大人小孩都喜歡',
    },
    {
        name: '月餅',
        img: './images/月餅.jpg',
        text: '月餅皮層酥鬆，色澤美觀，餡料肥而不膩，口感松酥，分甜、鹹或烤、烙兩類。 甜月餅以烤為主，為素餡。 咸月餅以烙為主，為葷餡。',
    },
    {
        name: '太陽餅',
        img: './images/太陽餅.jpg',
        text: '「皮薄、酥香、餡巧」的真實口感，餅皮以柔捏製作而成，再包入以麥芽為主的餡，經過高溫烘烤一塊塊香味四溢、內外皆美的太陽餅就此完成。',
    },
    {
        name: '傳統麻糬',
        img: './images/傳統麻糬.jpg',
        text: '台灣麻糬一種傳統的米食，主要材料為糯米 吃的時候可以沾糖粉或花生粉。吃起來軟軟糯諾的',
    },
]