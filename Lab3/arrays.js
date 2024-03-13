var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exc. 3
function mergeArrays(array1, array2) {
    return __spreadArray(__spreadArray([], array1, true), array2, true);
}
var arr1 = [1, 2, 3];
var arr2 = ["abc", "cde", "fgh"];
var merged = mergeArrays(arr1, arr2);
console.log(merged);
