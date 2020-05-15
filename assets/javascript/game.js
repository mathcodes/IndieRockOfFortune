var words = ["the_smiths", "pixies", "pavement", "dinosaur_jr"]
    // "Belle & Sebastian",
    // "Yo La Tengo",
    // "Modest Mouse",
    // "Guided By Voices",
    // "Elliott Smith",
    // "Arcade Fire",
    // "Neutral Milk Hotel",
    // "Built to Spill",
    // "The Strokes",
    // "Spoon",
    // "Beat Happening",
    // "Wilco",
    // "The Go-Betweens",
    // "Death Cab for Cutie",
    // "Sleater-Kinney",
    // "Sebadoh",
    // "Broken Social Scene",
    // "LCD Soundsystem",
    // "Morrissey",
    // "Low",
    // "Bright Eyes",
    // "The Shins",
    // "The Dismemberment Plan",
    // "Interpol",
    // "Galaxie 500",
    // "Animal Collective",
    // "The Wedding Present",
    // "The Libertines",
    // "Liz Phair",
    // "Franz Ferdinand",
    // "Slint",
    // "Arctic Monkeys",
    // "Red House Painters",
    // "The Decemberists",
    // "The Hold Steady",
    // "Yeah Yeah Yeahs",
    // "Sufjan Stevens",
    // "The National",
    // "TV on the Radio",
    // "Royal Trux",
    // "Superchunk",
    // "The Magnetic Fields",
    // "...And You Will Know Us by the Trail of Dead",
    // "Will Oldham (Bonnie 'Prince' Billy/Palace)",
    // "The Housemartins",
    // "Mercury Rev",
    // "Olivia Tremor Control",
    // "The New Pornographers",
    // "Orange Juice",
    // "Don Caballero",
    // "Metric",
    // "Wolf Parade",
    // "The Vaselines",
    // "Bloc Party",
    // "The Rapture",
    // "The Walkmen",
    // "The Apples in Stereo",
    // "The Mountain Goats",
    // "Cat Power",
    // "Codeine",
    // "Television Personalities",
    // "The Microphones/Mount Eerie",
    // "Heavenly",
    // "Phoenix",
    // "Band of Horses",
    // "Clap Your Hands Say Yeah",
    // "Kaiser Chiefs",
    // "Vampire Weekend",
    // "Smog",
    // "Half Man Half Biscuit",
    // "Unrest",
    // "Clinic",
    // "Rilo Kiley",
    // "Camera Obscura",
    // "American Music Club",
    // "Iron & Wine",
    // "The Cardigans",
    // "The Thermals",
    // "mclusky",
    // "The Folk Implosion",
    // "Feist",
    // "Xiu Xiu",
    // "Stars",
    // "Deerhunter",
    // "Okkervil River",
    // "Peter Bjorn & John",
    // "The Pastels",
    // "The Postal Service",
    // "Grizzly Bear",
    // "Grandaddy",
    // "The Field Mice",
    // "Fleet Foxes",
    // "The Wrens",
    // "The Silver Jews",
    // "Talulah Gosh",
    // "of Loaf"


var wins = 0;
var wordSelected = "";
var lettersGuessed = [];
var blankLetterArrayStart = [];
var guessesCorrect = 0;
var guessesRemaining = 8;
var userGuessRecord = [1];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"]; //>>> this is to prevent the user from enterting a letter more than once

//function that creates buttons:
function createButtons() {
    for (var i = 0; i < letters.length; i++) {
        var buttonElement = document.createElement("BUTTON");
        var l = document.createTextNode(letters[i]);
        buttonElement.appendChild(l);
        buttonElement.className = "letter-button btn btn-default";
        buttonElement.setAttribute("data-letter", letters[i]);
        buttonElement.setAttribute("onclick", "audioButton.play()");
        document.getElementById("button_div").appendChild(buttonElement);
    }
}

function animateShark() {

    var shark = document.getElementById("img_shark");
    var style = window.getComputedStyle(shark);
    var startWidth = style.getPropertyValue('width');
    var startHeight = style.getPropertyValue('height');
    var startWidthInt = Number(startWidth.replace('px', ''));
    var startHeightInt = Number(startHeight.replace('px', ''));


    var newWidth = 0;
    var newHeight = 0;
    var interval = setInterval(frame, 10);

    function frame() {
        if ((newWidth + startWidthInt) == (startWidthInt + 29)) {
            clearInterval(interval);
        } else {
            newWidth++;
            newHeight++;
            shark.style.width = (startWidthInt + newWidth) + "px";
            shark.style.height = (startHeightInt + newHeight) + "px";
        }
    }

}


function animateBlood() {

    var blood = document.getElementById("img_blood");
    var opacity = 0;
    var width = 400;
    var height = 400;
    var interval = setInterval(frame, 1);

    function frame() {
        if (width === 500) {
            clearInterval(interval);
        } else {
            width++;
            height++;
            opacity = opacity + .01;

            blood.style.width = width + "px";
            blood.style.height = height + "px";
            blood.style.opacity = opacity;
            blood.style.top = 0 + "px";
            blood.style.bottom = -20 + "px";
            blood.style.left = -74 + "px";
        }

    }
}

function resetBlood() {

    var blood = document.getElementById("img_blood");

    var width = -50;
    var height = -50;
    var interval = setInterval(frame, 20);

    function frame() {
        if (width === 50) {
            clearInterval(interval);
        } else {
            width++;
            height++;


            blood.style.width = width + "px";
            blood.style.height = height + "px";
            blood.style.opacity = 0;
            blood.style.top = 216 + "px";
            blood.style.bottom = 414 + "px";
            blood.style.left = 150 + "px";
        }

    }
}




// function resetGif() {

//     var gif = document.getElementById("surfer_gif");
//     var style = window.getComputedStyle(gif);
//     var opacity = style.getPropertyValue('opacity');

//     console.log(opacity === "1");

//     if (opacity === "1") {
//         var newOpacity = 1;

//         var interval = setInterval(frame, 5);

//         function frame() {
//             if (newOpacity === 0) {
//                 clearInterval(interval);
//             } else {
//                 newOpacity = newOpacity - .25;
//                 gif.style.opacity = newOpacity.toString();


//             }

//         }
//     } else {
//         gif.style.opacity = "0";
//     }
// }

function fadeInstructions() {

    var instructions = document.getElementById("instructions");
    var style = window.getComputedStyle(instructions);
    var opacity = style.getPropertyValue('opacity');

    if ((userGuessRecord.length === 1) && (opacity === "1")) {

        var newOpacity = 1;

        var interval = setInterval(frame, 20);

        function frame() {
            if (newOpacity === 0) {
                clearInterval(interval);
            } else {
                newOpacity = newOpacity - .25;
                instructions.style.opacity = newOpacity.toString();

            }

        }
    } else { null }
}




// function to generate random number:
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// This function takes the random int from get getRandomIntInclusive fucntion and chooses a word from the words array.
function getWord() {
    var index = getRandomIntInclusive(0, words.length - 1);
    wordSelected = words[index];
    return wordSelected;
}

// This function takes the length of the chosen word and replaces adds that many blanks to an array. Returns an array of blanks
function wordToBlanks() {
    var wordLength = getWord().length;

    for (var i = 0; i < wordLength; i++) {
        blankLetterArrayStart.push("_");
    }
    return blankLetterArrayStart;
}
//>>> This function returns true if the letter has already been guessed by the user.
function lettersInArray(array, value) {
    var count = 0
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) count++;
    }
    if (count === 2) {
        array.pop();
        return true;
    } else {
        return false;
    }
}

// this button restarts the game and sets points to zero:
document.getElementById("restart").onclick = function(restartButton) {
    wins = 0;
    // document.getElementById("surfer_gif").style.opacity = "1";
    document.getElementById("instructions").style.opacity = "1";
    startfunction();
}


function startfunction() {
    wordSelected = "";
    lettersGuessed = [];
    blankLetterArrayStart = [];
    guessesCorrect = 0;
    guessesRemaining = 8;
    userGuessRecord = [1];
    document.getElementById("img_surfer").style.opacity = "1";
    document.getElementById("img_shark").style.opacity = "0";
    document.getElementById("img_shark").style.height = 100 + "px";
    document.getElementById("img_shark").style.width = 100 + "px";



    wordToBlanks();



    var html =

        "<p>Word: " + blankLetterArrayStart.join("   ").toUpperCase() + "</p>" +
        "<p>Letters Guessed: " + lettersGuessed.join("   ").toUpperCase() + "</p>" +
        "<p>Remaining Guesses: " + guessesRemaining + "</p>" +
        "<p>Wins: " + wins + "</p>";

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}




// all game logic:

$(document).ready(function() {


    var classname = document.getElementsByClassName("letter-button");

    var getAttributeFunction = function() {

        fadeInstructions();
        // resetGif();

        var attribute = this.getAttribute("data-letter");
        var userGuess = attribute.toLowerCase();

        userGuessRecord.push(userGuess);

        var indices = [];
        var x = lettersInArray(userGuessRecord, userGuess);
        // This if statements finds the indices of all the digits in which the letter occurs

        if (x) {

            alert("You have already chosen this letter. Please try another letter.");

        } else {
            if (wordSelected.includes(userGuess)) {
                lettersGuessed.push(userGuess);

                for (var i = 0; i < wordSelected.length; i++) {
                    if (wordSelected[i] === userGuess) indices.push(i);
                }

                for (var j = 0; j < indices.length; j++) {
                    guessesCorrect = guessesCorrect + 1;
                    blankLetterArrayStart[indices[j]] = userGuess;
                }

                if (wordSelected.length === guessesCorrect) {
                    // document.getElementById("surfer_gif").style.opacity = 1;
                    var winnerAudio = new Audio("assets/audio/wapahh.mp3");
                    winnerAudio.play();
                    alert("you win!");
                    wins = wins + 1;
                    startfunction();
                    // resetGif();
                }
            } else {

                if (guessesRemaining === 1) {
                    var loserAudio = new Audio("assets/audio/bahh.mp3");
                    loserAudio.play();
                    animateBlood();
                    startfunction();
                    resetBlood();


                } else {
                    guessesRemaining = guessesRemaining - 1;
                    lettersGuessed.push(userGuess);
                    // document.getElementById("img_surfer").style.opacity = Math.pow(guessesRemaining + 4, 2)/100;
                    document.getElementById("img_shark").style.opacity = Math.pow(10 - guessesRemaining, 2) / 100;
                    animateShark();
                }

            }
        }
        var html =

            "<p>Word: " + blankLetterArrayStart.join("   ").toUpperCase() + "</p>" +
            "<p>Letters Guessed: " + lettersGuessed.join("   ").toUpperCase() + "</p>" +
            "<p>Remaining Guesses: " + guessesRemaining + "</p>" +

            "<p>Wins: " + wins + "</p>";

        // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;

    };


    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener("click", getAttributeFunction, false);
    }

}); //ready.function end

var audioButton = new Audio();
audioButton.src = "assets/audio/correct.mp3";


startfunction();
createButtons();