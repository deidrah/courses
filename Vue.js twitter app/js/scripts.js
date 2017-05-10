const MAX_TWEET_LENGTH = 140;

new Vue({
    el: '#twitterVue',
    data: {
        tweet: ''
    },
    computed: {
        tweetIsOutOfRange: function () {
            return this.charactersRemaining == MAX_TWEET_LENGTH ||
                this.charactersRemaining < 0;
        },
        charactersRemaining: function () {
            return MAX_TWEET_LENGTH - this.tweet.length;
        }
    }
});
