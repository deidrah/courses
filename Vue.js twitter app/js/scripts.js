const MAX_TWEET_LENGTH = 140;

new Vue({
    el: '#twitterVue',
    data: {
        tweet: '',
        photo: null
    },
    computed: {
        tweetIsOutOfRange: function () {
            return this.charactersRemaining == MAX_TWEET_LENGTH ||
                this.charactersRemaining < 0;
        },
        charactersRemaining: function () {
            return MAX_TWEET_LENGTH - this.tweet.length;
        },
        underTwentyMark: function () {
            return this.charactersRemaining <= 20 && this.charactersRemaining > 10;
        },
        underTenMark: function () {
            return this.charactersRemaining <= 10;
        },
        photoHasBeenUploaded: function () {
            return this.photo !== null;
        }
    },
    methods: {
        triggerFileUpload: function () {
            this.$refs.photoUpload.click();
        },
        handlePhotoUpload: function (e) {
            var self = this;
            var reader = new FileReader();

            reader.onload = function (e) {
                self.photo = (e.target.result);
            }

            reader.readAsDataURL(e.target.files[0]);
        },
        removePhoto: function () {
            this.photo = null;
        }
    }
});
