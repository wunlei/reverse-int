module.exports = function reverse(n) {
    const positiveNum = Math.abs(n);
    const reversed = positiveNum.toString().split("").reverse().join("");
    return Number(reversed);
};
