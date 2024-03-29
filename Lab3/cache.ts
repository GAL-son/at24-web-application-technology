// Exc. 5
type CacheArr<T> = {
    [key: string]: T;
};

function linkCache<T>(fn: (a: T, b: T) => T, cache: CacheArr<T>): (a: T, b: T) => T {
    return (a: T, b: T): T => {
        let newKey: string = "$" + a + "_$" + b;

        if (!(newKey in cache)) {
            console.log("New result saved to cache");
            let result: T = fn(a, b);
            cache[newKey] = result;
        } else {
            console.log("Result from cache",);
        }

        return cache[newKey];
    }
}

// Testing

// Add numbers
let addCache: CacheArr<number> = {};

function add(a: number, b: number) {
    return a + b;
}

let cachedAdd = linkCache(add, addCache);

console.log(cachedAdd(1, 2));
console.log(cachedAdd(2, 2));
console.log(cachedAdd(1, 2));
console.log(cachedAdd(1, 1));

// Add strings (concatenation)
let concatCache: CacheArr<string> = {};

function concat(a: string, b: string) {
    return a + b;
}

let cachedConcat = linkCache(concat, concatCache);

console.log(cachedConcat("aaa", "bbb"));
console.log(cachedConcat("aa", "bb"));
console.log(cachedConcat("aaa", "bbb"));



