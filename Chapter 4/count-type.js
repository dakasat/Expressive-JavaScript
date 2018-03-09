"use strict";

// Поиск символа либо строки - через while
function countType(str, type, pos=0) {
    let count = 0;
    let position = str.indexOf(type, pos);
    while (position != -1){
        count += 1;
        position = str.indexOf(type, position+1);
    }
    return count;
}

// Поиск символа либо строки - рекурсивно
function countRecurseType(string, type, position=0) {
        let result = 0;
        function typeSearch() {
            position = (string.indexOf(type, position));
            if (position == -1) {
                return result;
            } else {
                result += 1;
                position += 1;
                return typeSearch();
            }
        }
        return typeSearch();
}

// Поиск символа
function countChar(string, char, position=0) {
    let count = 0;
    for (let i=1; i<string.length; i++){
        if (string[i]==char){
            count += 1;
        }
    }
    return count;
}


console.log(countType("Всем приветик", "е", 5));
console.log(countRecurseType("Всем приветик", "е", 5));
console.log(countChar("Всем приветик", "e", 5));
