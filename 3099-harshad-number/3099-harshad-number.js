/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function (x) {
    let sumNumber = 0;
    let temp = x;
    while (temp > 0) {
        sumNumber += temp % 10;
        temp = Math.floor(temp / 10);
    }
    if (x % sumNumber === 0)
        return sumNumber;
    return -1;
};