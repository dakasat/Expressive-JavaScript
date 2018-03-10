"use strict";

let arrayValue = [1, 2, 3, 4, 5];

function reverseArray(arg) {
    let result = [];
    for (let i=arg.length-1; i >= 0; i--) {
        result.push(arg[i]);
    }
    return result;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arg) {
    let result = [];
    for (let i=arg.length-1; i >= 0; i--) {
        result.push(arg[i]);
    }
    return arrayValue = result;
}


reverseArrayInPlace(arrayValue);
console.log(arrayValue);