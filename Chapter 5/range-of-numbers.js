"use strict";

function range(a, b, step=1) {
    let result = [];
    for ( ; a <= b; a+=step) {
        result.push(a);
    }
    return result;
}

function sum(arg) {
    return arg.reduce(function (iniValue, curValue) {
        return iniValue += curValue;
    });
}

// function range(a, b, step=1) {
//     let result = [];
//     while (a <=b ) {
//         result.push(a);
//         a += step;
//     }
//
//     return result;
// }

// function sum(arg) {
//     let result = 0;
//     for (let i=0; i < arg.length; i++) {
//         result += arg[i];
//     }
//     return result;
// }

console.log(sum(range(1, 10, 1)));