import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let user = {
    username: "",
    avatar: ""
};

let users = [];

let tweets = [];

let last10 = [];

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

    res.send("OK")
});

app.get("/tweets", (req, res) => {
    let contador = tweets.length-1;

    if(contador >= 9) {
        for(let i = 0; i < 10; i++) {
            last10.push(tweets[contador]);
            contador--;
        }

        res.send(last10);
    } else {
        res.send(tweets);
    }
    
});

app.listen(5000);