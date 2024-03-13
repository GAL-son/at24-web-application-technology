// Exc. 5
function linkCache(fn, cache) {
    return function (a, b) {
        var newKey = "$" + a + "_$" + b;
        if (!(newKey in cache)) {
            console.log("New result saved to cache");
            var result = fn(a, b);
            cache[newKey] = result;
        }
        else {
            console.log("Result from cache");
        }
        return cache[newKey];
    };
}
// Testing
// Add numbers
var addCache = {};
function add(a, b) {
    return a + b;
}
var cachedAdd = linkCache(add, addCache);
console.log(cachedAdd(1, 2));
console.log(cachedAdd(2, 2));
console.log(cachedAdd(1, 2));
console.log(cachedAdd(1, 1));
// Add strings (concatenation)
var concatCache = {};
function concat(a, b) {
    return a + b;
}
var cachedConcat = linkCache(concat, concatCache);
console.log(cachedConcat("aaa", "bbb"));
console.log(cachedConcat("aa", "bb"));
console.log(cachedConcat("aaa", "bbb"));
