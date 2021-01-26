import axios from "axios";

const TWEET_API_BASE_URL = "http://localhost:8080/api/user";

class UserDataService {
  authentication(user) {
    console.log("login");
    return axios.post(TWEET_API_BASE_URL+"/login", user);
  }
  getTweets(username) {
    console.log("pulling");
    return axios.get(TWEET_API_BASE_URL+"/tweets/"+username);
  }
}

export default new UserDataService();