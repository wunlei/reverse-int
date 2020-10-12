module.exports = function reverse(n) {
    let positiveNum = Math.abs(n);
    let strNum = positiveNum.toString();
    let result = "";
    for (let i = 0; i < strNum.length; i++) {
        result = strNum[i] + result;
    }
    return parseInt(result, 10);
};
