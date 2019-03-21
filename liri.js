require("dotenv").config();

var axios = require("axios");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var fs = require("fs");
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
        song(search);
        break;
    case "movie-this":
        movie(search);
        break;
    case "do-what-it-says":
        doWhat();
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

function song(song_name) {
    var songSearch = "";
    songSearch = song_name;
    if (!song_name) {
        songSearch = "The Sign";
    }


    spotify.search({ type: 'track', query: songSearch, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var songData = data.tracks.items[0];

        var artistArr = [];
        for (var i = 0; i < songData.artists.length; i++) {
            artistArr.push(songData.artists[i].name);
        }
        var artists = artistArr.slice().join(", ");

        console.log(divider);
        console.log("Artist(s): " + artists);
        console.log("Song name: " + songData.name);
        console.log("Preview link: " + songData.preview_url);
        console.log("Album: " + songData.album.name);
        console.log(divider);

    });

}

function movie(movie_name) {
    var movieSearch = "";
    movieSearch = movie_name;
    if (!movie_name) {
        movieSearch = "Mr. Nobody";
    }

    var URL = "http://www.omdbapi.com/?t=" + movieSearch + "&y=&plot=short&apikey=trilogy";

    axios.get(URL)
        .then(function (response) {

            var movieData = response.data;

            console.log(divider);
            console.log("Title: " + movieData.Title);
            console.log("Release Year: " + movieData.Year);
            console.log("IMDB Rating: " + movieData.imdbRating);
            console.log("Rotten Tomatoes Rating: " + movieData.Ratings[2].Value);
            console.log("Country(ies): " + movieData.Country);
            console.log("Language: " + movieData.Language);
            console.log("Plot: " + movieData.Plot);
            console.log("Actors: " + movieData.Actors);
            console.log(divider);

        }).catch(function (error) {
            console.log(error);
        })

}

function doWhat() {
    fs.readFile('random.txt', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}