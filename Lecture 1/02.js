// const, int, float, char, string, etc.... custom -> Car , Animal 

// var, let, const 

var a = "10";
let b = "20";
const c = "30"; // constant <- you cannot change its value 

// console.log(a);
// a = "40";
console.log(a); // 10
console.log(b);

// never use var in your code ...? this inntroduces bugs in your code


var special_var = "90";

// blocks in: for, while loops, if_else, functions 
// function blocks and other blocks are different.

{ // <- block in JS
    var a = "50";
    console.log(a); // 50
    let b = "50";
    console.log(b);
}

a = "90";
b = "90";
console.log(a); // 90
console.log(b);

// 10 50 90 <- a
// 20 50 90 <- b

var x = 20;
x = x - 10; // right to left evaluation
console.log(x);