import express from 'express';

const app = express();
app.use(express.json());

let user = {
    username: "",
    avatar: ""
};

let users = [];

let tweets = [];

app.post("/sign-up", (req, res) => {
    user.username = req.body.username;
    user.avatar = req.body.avatar;

    users.push(user);

    res.send("OK")
});

app.post("/tweets", (req, res) => {
    let tweet = {
        username: "",
        avatar: "", 
        tweet: ""
    }

    tweet.username = req.body.username;
    tweet.avatar = user.avatar;
    tweet.tweet = req.body.tweet;

    tweets.push(tweet);

    console.log(tweets)

    res.send("OK")
});

app.listen(5000);