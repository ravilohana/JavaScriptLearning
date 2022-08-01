/*
In Js there are two types of data type:
    i - primitive data type -- 7 types
    ii- non-primitive data type

i-  primitive data type
    nn ss bb u
    null, number, string, symbol, boolean, bigint, undefined

*/

let nullDataType = null;
let numberDataType = 20;
let stringDataType = "Ravi Lhana";
let symbolDataType = Symbol('I am Symbol primitive data type in JS');
let booleanDataType = true;
let bigIntDataType = BigInt("122");
let undefinedDataType = undefined;


// Primitive data type in JS
console.log("Primitive data type -- null " + nullDataType);
console.log("Primitive data type -- Number " + numberDataType);
console.log("Primitive data type -- string " + stringDataType);
console.log(symbolDataType);
console.log("Primitive data type -- boolean " + booleanDataType);
console.log("Primitive data type -- BigInt " + bigIntDataType);
console.log("Primitive data type -- undefined " + undefinedDataType);


// Non-primitive data type in JS
// Objects 

const items = {
    "name" : "Ravi Lohana",
    "roll_no" : 30,
    "mobile_no" : BigInt("9897909165"),
    "adult" : true,
    "job": undefined
}

console.log(items.job);
console.log(typeof items);

