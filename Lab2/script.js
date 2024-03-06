// Exc. 1
console.log("---Exc. 1---");

function wordReverse(word) {
    return word.split('').reverse().join("");
}

const word = "Hello World!"

console.log("Original word: " + word);
console.log("Reversed word: " + wordReverse(word));


