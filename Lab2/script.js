// Exc. 1
console.log("---Exc. 1---");

function wordReverse(word) {
    return word.split('').reverse().join("");
}

const word = "Hello World!"

console.log("Original word: " + word);
console.log("Reversed word: " + wordReverse(word));

// Exc. 2
console.log("---Exc. 2---");

function celciusToFarenheit(celcius) {
    return (celcius * (9/5)) + 32;
}

function farenheitToCelcius(farenheit) {
    return (farenheit - 32) * (5/9);
}

const celciusTemps = [-23, -2, 4, 0, 23, 35, 45, 50];
const farenheitTemps = [0, 12, 32, 46, 73, 57, 98, 100, 114];

console.log("CELCIUS TO FARENHEIT");
celciusTemps.forEach(tempC => {
    const tempF = Math.round(celciusToFarenheit(tempC)*10)/10
    console.log(tempC + "C = " + tempF + "F");
});

console.log("FARENHEIT TO CELCIUS");
farenheitTemps.forEach(tempF => {
    const tempC = Math.round(farenheitToCelcius(tempF)*10)/10
    console.log(tempF + "F = " + tempC + "C");
});

