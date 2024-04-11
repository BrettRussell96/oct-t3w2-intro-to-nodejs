const pokemon = require('pokemon');


function pokemonPrinter(){


    let randomPokemon = pokemon.random();

    console.log(`Today's lucky pokemon is ${randomPokemon}`);
}

function pokemonNameFromNumber(targetNumber) {
    let result = pokemon.getName(targetNumber);
    
}

module.exports = {
    pokemonPrinter
}