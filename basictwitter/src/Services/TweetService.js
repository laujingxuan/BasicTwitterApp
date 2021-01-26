import axios from "axios";

const TWEET_API_BASE_URL = "http://localhost:8080/api/tweet";

class TweetDataService {
  getTweets() {
    console.log("pulling");
    return axios.get(TWEET_API_BASE_URL+"/tweets");
  }
  createTweet(userId, tweet) {
    return axios.post(TWEET_API_BASE_URL+"/new/"+userId, tweet);
  }
  deleteTweet(tweetId) {
    return axios.delete(TWEET_API_BASE_URL+"/delete/"+tweetId);
  }
}

export default new TweetDataService();
