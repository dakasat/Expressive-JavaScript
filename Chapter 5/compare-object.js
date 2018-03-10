"use strict";

function deepEqual(a, b) {
    if ((typeof a == "object" && typeof b == "object") && (a != null || b != null)) {
        for (var i = 0, j = 0; i < Object.keys(a).length, j < Object.keys(b).length; ++i, ++j) {
            var result = deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[j]]);
            if (result == false) break;
        }
        return result;
    } else {
        return (a === b);
    }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true