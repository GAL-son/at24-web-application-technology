// IDK why in exc. function is named isEven when only odd numbers are left ¯\_(ツ)_/¯
function isOdd(arr) {
    return arr.filter((a) => {return a%2 != 0});
}

module.exports = {
    isEven: isOdd
}