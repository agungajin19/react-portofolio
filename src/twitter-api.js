const Twitter = require('twitter')

var client = new Twitter ({
    consumer_key: 'vx7D7BEHhOoQDJbKLtZFM33Ht',
    consumer_secret: 'Hsw69R5sl5kKB8dkhVkNfKlJavVYOIPH9jZx6uczboUk37hp2t',
    access_token_key: '1134195839251804160-coHFrzd1aeejBPvprx63sUIlJ5VHJd',
    access_token_secret: 'G3JkaTMTbLSDFO31FzYZkewMvVRgtQEkcb3fA7Hzgt9n4'
})

client.get('statuses/user_timeline', {screen_name: 'BotMarzi', count: 1},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet[0]['text']);  // Tweet body.
    let stringTweet = tweet[0]['text']
    console.log(stringTweet.split("--**")[1])
    console.log(tweet)
  });
