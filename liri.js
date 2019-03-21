require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];

var search = process.argv.slice(3).join(" ");

var divider = "---------------------------"

switch (command) {
    case "concert-this":
        concert(search);
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

function concert(artist) {

    var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(URL)
        .then(function (response) {
            var events = response.data;

            for (var i = 0; i < 5; i++) {
                var date = moment(events[i].datetime).format("MM-DD-YYYY");

                console.log(divider);
                console.log("Venue: " + events[i].venue.name);
                console.log("\nVenue location: " + events[i].venue.city + ", " + events[i].venue.country);
                console.log("\nDate: " + date);
                console.log(divider);
            }
        })
        .catch(function (error) {
            console.log(error);
        })
}