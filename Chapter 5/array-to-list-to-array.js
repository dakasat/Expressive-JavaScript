"use strict";

// Вариант 1
function arrayToList(array) {
    if (array.length > 1) {
        return { value: array.shift(), rest: arrayToList(array) };
    } else {
        return { value: array.shift(), rest: null };
    }
}

// Вариант 2
// function arrayToList(array) {
//     return array.length ? { value: array.shift(), rest: arrayToList(array) } : null;
// }

// Вариант 3
// function arrayToList(arr) {
//     let currentElement = 0;
//     while (arr[currentElement]) {
//         if (currentElement == (arr.length - 1)) {
//             return {value: arr[currentElement], rest: null};
//         }
//         return {value: arr[currentElement],
//             rest: arrayToList(arr.slice(++currentElement))};
//     }
// }

let list = arrayToList([1, 2, 3, 4]);
console.log(list);

function listToArray(list)
{
//Вариант 1
    /*let arr = [];
    while (list){
    arr.push(list.value);
    list = list.rest;
    }
    return arr;*/
//Вариант 2
    if (list.rest == null) {
        return [list.value];
    }

    return [list.value].concat(listToArray(list.rest));

}
let list1 = listToArray(list);
console.log(list1);

function prepend(num, list)
{
    return {value: num, rest: list};
}
console.log(prepend(0, list));

function nth(list, pos)
{
    if (list == null) return undefined;
    else {
        if(1 == pos) return list.value;
        return nth(list.rest, --pos);
    }
}
console.log(nth(list, 4));