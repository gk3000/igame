function insult() {
var randomItems = ["backpack","computer","dog","cat"
]
var randomItem = randomItems[Math.floor(Math.random() * 4)]

var randomAdjectives = ["gross","crazy","stupid","useless"
]
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)]
var randomWords = ["potato","banana","rubbish","cabbage"
]
var randomWord = randomWords[Math.floor(Math.random() * 4)]
alert('Your ' + randomItem + ' looks like ' + randomAdjective + ' ' + randomWord + '!!!')
}