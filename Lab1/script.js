// Exc. 1
console.log("Exc. 1");
console.log('Pierwszy skrypt - działa');
console.log("-------------------------");

// Exc. 2
console.log("Exc. 2");
let arr = [1,2,3,4,5,6];
console.log(arr);
arr.pop();
console.log(arr);
console.log("-------------------------");

// Exc.3 
console.log("Exc. 3");
function insertToArray(arr, end, value) {
    if(![0,1].includes(end)) {
        console.error("Invalid end value: Must be 1 or 0 but given ");
        return;
    }
    
    if(!end) {
        arr.push(value);
    } else {
        arr.unshift(value);
    }
    
    return arr;
}

console.log(insertToArray(arr, 1, 3));
console.log(insertToArray(arr, 0, 8));
console.log(insertToArray(arr, 2, 8)); // Should throw error
console.log("-------------------------");

// Exc. 4
console.log("Exc. 4");
function squareNumbers(numbers, sep = " ") {
    let arr = numbers.split(sep);
    let result = arr.map(a => a*a).join(sep);
    
    return result;
}

let numbers = "1.2.3.4.5.6.7.8.9";

console.log(squareNumbers(numbers, '.'));
console.log("-------------------------");

// Exc. 5
console.log("Exc. 5");
const poleKwadratu = (a) => {
    return a*a;
}

console.log(poleKwadratu(5));
console.log(poleKwadratu(50));
console.log("-------------------------");

// Exc. 6
console.log("Exc. 6");
function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const students = ["Olek", "Janek", "Stefan", "Tymek", "Sławek"];
console.log(randomItem(students));
console.log(randomItem(students));
console.log("-------------------------");

// Exc. 7
console.log("Exc. 7");
function randomNumberTimeout(count, waitTime) {
    if (count == 0) return;
    
    let timeout = setTimeout(() => {
        console.log(Math.floor(Math.random() * 10));
        randomNumberTimeout(count-1, waitTime);
        clearTimeout(timeout);
    }, waitTime);

}

randomNumberTimeout(10, 500);

function simulateServerConneciton(name) {
    setInterval(() => {console.log("Witaj "+name);}, 3000);
}

let timeout = setTimeout(() => {
    simulateServerConneciton("Pawel")
}, 5000);





