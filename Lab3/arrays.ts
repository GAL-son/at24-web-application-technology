// Exc. 3
function mergeArrays<T, U>(array1: Array<T>, array2: Array<U>) : Array<T|U> {
    return [...array1, ...array2];
}

let arr1 : Array<number> = [1,2,3];
let arr2 : Array<string> = ["abc", "cde", "fgh"];

let merged : Array<number|string> = mergeArrays(arr1, arr2);

console.log(merged);
