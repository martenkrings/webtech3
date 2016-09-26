/**
 * Created by Marten on 9/26/2016.
 */
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
        {lastName: "Groot Wesseldijk", insertion: "", firstName: "Sander", username: "heuker", password: "password1"},
        {lastName: "Krings", insertion: "", firstname: "Marten", username: "zixue", password: "password2"}
    ],

    ratings: [
        {username: ""}
    ]
};

//parse application/json
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

