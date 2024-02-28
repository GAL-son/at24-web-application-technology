// Exc. 1
console.log('Pierwszy skrypt - działa');

// Exc. 2
let arr = [1,2,3,4,5,6];
console.log(arr);
arr.pop();
console.log(arr);

// Exc.3 
function insertToArray(arr, end, value) {
    if(![0,1].includes(end)) {
        throw "Invalid end value: Must be 1 or 0 but given " + end;
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
// console.log(insertToArray(arr, 2, 8)); // Should throw error

