"use strict";

let res = "";

for (let row=1; row<=8; row++) {
    for (let col=1; col<=8; col++){
        res += (row%2 == col%2)? "#" : " ";
    }
    console.log(res);
    res = "";
}
