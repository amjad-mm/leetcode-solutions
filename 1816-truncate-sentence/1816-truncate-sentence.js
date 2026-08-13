/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let array = s.split(" ");
let result = "";
for (let i = 0; i < k; i++) {
  result += array[i] + " ";
}
return result.trimEnd()
};