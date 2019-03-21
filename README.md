# liri-node-app

## Description
### This is a basic terminal application with four different commands. concert-this takes in a band or artist and returns details for 5 upcoming concerts gathered from the BandsInTown API. spotify-this-song takes in a song and returns some details about the song, as well as a preview url, gathered from the spotify api. If no song is entered, it defaults to "The Sign" by Ace of Base. movie-this takes in a movie and returns details about the movie gathered from the OMDB API. If no movie is entered it defaults to Mr. Nobody.  do-what-it-says reads a command and search term from a text file (random.txt) and executes the command.

## Notes
* External node packages are required. Run npm install in the folder to install all necessary packages
* The spotify-this-song command will not work unless you provide your own api-key.

## GIF Demos

concert-this |
:------------------:
![concert-this command](https://github.com/mxweidmer/liri-node-app/blob/master/images/concert.gif) |

spotify-this-song |
:------------------:
![spotify-this-song command](https://github.com/mxweidmer/liri-node-app/blob/master/images/spotify.gif) |

movie-this |
:------------------:
![movie-this command](https://github.com/mxweidmer/liri-node-app/blob/master/images/movie.gif) |

do-what-it-says |
:------------------:
![do-what-it-says command](https://github.com/mxweidmer/liri-node-app/blob/master/images/do.gif) |

## Important Code Details

Requiring packages |
:------------------:
![Requiring packages](https://github.com/mxweidmer/liri-node-app/blob/master/images/package.JPG) |

Gathering user input |
:------------------:
![Gathering user input](https://github.com/mxweidmer/liri-node-app/blob/master/images/input.JPG) |

Switch commmand block |
:------------------:
![Switch commmand block](https://github.com/mxweidmer/liri-node-app/blob/master/images/switch.JPG) |

concert-this function |
:------------------:
![concert-this function](https://github.com/mxweidmer/liri-node-app/blob/master/images/concert.JPG) |

spotify-this-song function |
:------------------:
![spotify-this-song function](https://github.com/mxweidmer/liri-node-app/blob/master/images/spotify.JPG) |

movie-this function |
:------------------:
![movie-this function](https://github.com/mxweidmer/liri-node-app/blob/master/images/movie.JPG) |

do-what-it-says function |
:------------------:
![do-what-it-says function](https://github.com/mxweidmer/liri-node-app/blob/master/images/do.JPG) |

Technologies Used |
:---------:
* Javascript
* Node.js (+ fs package)
* moment.js (node package)
* Axios
* dotenv
* Spotify API (node package)
* OMDB API
* BandsInTown API