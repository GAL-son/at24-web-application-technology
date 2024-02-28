// IDK why in exc. function is named isEven when only odd numbers are left ¯\_(ツ)_/¯
function getOdd(arr) {
    return arr.filter((a) => {return a%2 != 0});
}

module.exports = {
    getOdd: getOdd,
}