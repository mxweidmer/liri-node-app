require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var search = process.argv.slice(3).join(" ");

switch (command) {
    case "concert-this":
        break;
    case "spotify-this-song":
        break;
    case "movie-this":
        break;
    case "do-what-it-says":
        break;
    default:
        break;

}