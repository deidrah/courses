new Vue({
    el: '#twitterVue',
    data: {
    tweet: ''
    },
    computed: {
        tweetIsEmpty: function() {
            return this.tweet.length == 0;
        }
    }
});