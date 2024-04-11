require('dotenv').config();
















// Style 1 for setting up prompt-sync:
var prompt = require('prompt-sync')({sigint: true});

// Style 2 for setting up prompt-sync:
let promptPackage = require('prompt-sync');
let promptInstance = promptPackage({sigint: true});

// get input from the user

// var n = prompt('What number of Pokemon do you want to see? ');


let userWantsToExit = false;

function app() {
    do {
        let n = parseFloat(prompt("What number of pokemon do you want to see? "));
    
        // console.log(typeof(n));
        // console.log("Input is not a number:" + Number.isNaN(n));
    
        if (Number.isNaN(n)){
            throw new Error("User did not enter a number!");
        }
        //Give number to pokemon package  and get result
        try {
            let pokemonName = pokemonPrinterFile.pokemonNameFromNumber(n);
        console.log(`Your Pokemon is ${pokemonName}! How exciting!`);
        } catch (error) {
            console.log("Try number between 1 and 1025!");
        }
        
        // console.log("You entered " + n);
        
        let userInputToExit = prompt("Would you like to try again? ");
        if (userInputToExit == "y") {
            userInputToExit = false;
        } else {
            userInputToExit = true;
        }
    
    } while (userWantsToExit == false); {
    
    }
}

try {
    app();
} catch (error) {
    console.log("Gracefully shutting down...");
    console.log(error.message);
    // full error obj has stacktrace, users should not see that
    // console.log(error);
}

console.log("User entered: " + n);
console.log(typeof(n));

let nAsNumber = parseFloat(n);
console.log(typeof(nAsNumber));




console.log(process.env.ENVIRONMENT_MESSAGE);

console.log("Terminal app is running!");

const pokemon = require('pokemon');

let randomPokemon = pokemon.random();

console.log(`Today's lucky Pokemon is ${randomPokemon}`);

console.log("Bye bye, terminal app finished!");

