/**
 * Created by Marten on 9/26/2016.
 */
//demo
var express = require('express')
var app = express();
var bodyParser = require('body-parser');




var express = require('express');
var app = express();
var db = {
    movies: [
        {
            ttNumber: "tt03877808",
            title: "Idiocracy",
            date: "2006/01/25",
            length: 84,
            director: "Mike Judge",
            desc: "Private Joe Bauers, the definition of \"average American\", is selected by the Pentagon to be the guinea pig for a top-secret hibernation program. Forgotten, he awakes five centuries in the future. He discovers a society so incredibly dumbed down that he's easily the most intelligent person alive."
        },
        {
            ttNumber: "tt0371724",
            title: "The Hitchhiker's Guide to the Galaxy",
            date: "2005/08/04",
            length: 109,
            director: "Garth Jennings",
            desc: "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\""
        },
        {
            ttNumber: "tt0119654",
            title: "Men in Black",
            date: "1997/07/24",
            length: 98,
            director: "Barry Sonnenfeld",
            desc: "A police officer joins a secret organization that polices and monitors extraterrestrial interactions on Earth."
        }],
    users: [
        {
            id: 1,
            lastName: "Groot Wesseldijk",
            insertion: "",
            firstName: "Sander",
            username: "heuker",
            password: "password1"
        },
        {id: 2, lastName: "Krings", insertion: "", firstname: "Marten", username: "zixue", password: "password2"}
    ],

    ratings: [
        {userId: 1, rating: 5, movieTtNumber: "tt0119654"},
        {userId: 2, rating: 3, movieTtNumber: "tt0119654"}
    ]
};

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});

//parse application/json
var bodyParser = require('body-parser');
app.use(bodyParser.json());

/**
 * standard get to ensure setup went OK
 */
app.get('/', function (req, res) {
    res.send('Hello World!');
});

/**
 * Get a user by his id
 */
app.get('/user/:id', function (req, res) {
    var users = db["users"];
    var reqId = req.params.id;
    console.log(reqId)
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == reqId) {
            res.send(users[i]);
        }
    }
});

/**
 * Get all movies
 */
app.get("/movies/", function (req, res) {
    res.send(db["movies"])
})

app.route("/register/:lastName/:firstName/:userName/:password").post(function (req, res) {
    
})







