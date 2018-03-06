const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(function(item){
    planetEl.innerHTML += `<section>${item}</section>`;
});

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

function capitalizePlanet(item){
    return item.charAt(0).toUpperCase() + item.slice(1);
}

let planetsCap = planets.map(capitalizePlanet);
console.log(planetsCap);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let ePlanets = planetsCap.filter(planet => planet.includes("e"));
console.log("ePlanets: ", ePlanets);



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]
var reducer = (sentence, item) => sentence + " " + item;
console.log(words.reduce(reducer));
