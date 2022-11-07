import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    let user = {
        username: "",
        avatar: ""
    };

    user.username = req.body.username;
    user.avatar = req.body.avatar;

    users.push(user);

    res.send("OK")
});

app.post("/tweets", (req, res) => {
    let tweet = {
        username: "",
        tweet: "", 
        avatar: ""
    }

    tweet.username = req.body.username;
    tweet.tweet = req.body.tweet;

    users.forEach((u) => {
        if(u.username === req.body.username) {
            tweet.avatar = u.avatar;
        }
    })    

    tweets.push(tweet);
    
    res.send("OK")
});

app.get("/tweets", (req, res) => {
    let last10 = [];

    if(tweets.length >= 9) {
        for(let i = tweets.length-1; i > tweets.length-10; i--) {
            last10.push(tweets[i]);
        }

        res.send(last10);
    } else {
        tweets.reverse();
        res.send(tweets);
    }    
});

app.listen(5000);