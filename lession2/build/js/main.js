"use strict";
console.log("welcome to typescript lession 2 ");
console.log("Basic terminologies and data types");
//1 strongly typed language 
// the term "infer" refers to the ability of the TypeScript compiler to automatically deduce the type of a variable or expression based on the context in which it is used.
let data = "hello";
let age;
let loading;
loading = true;
let album; // this is the union types
album = "album";
age = 21;
album: "adfa";
console.log(data);
console.log(loading);
console.log(age);
console.log(album);
//  fucntion expression 
const sum = (a, b) => {
    return a + b;
};
console.log(sum(23, 4));
