"use strict";

function isEven(n) {
    if (n == 0) return true;
    // Math.abs - возвращает абсолютное значение числа, если отрицательное - отбрасывает знак "минус"
    else if (Math.abs(n) == 1) return false;
    else return isEven(Math.abs(n - 2));
}

console.log(isEven(-1));
console.log(isEven(50));
console.log(isEven(75));