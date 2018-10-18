const initialTweets = [];
const tweetreducer = (state = initialTweets, action) => {
  switch (action.type) {
    case "ENTERTWEET":
      return ["check", "now"];

    default:
      return state;
  }
};

export default tweetreducer;
