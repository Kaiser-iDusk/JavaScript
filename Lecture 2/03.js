// 1. named declaration of function

function addition(a, b, c = 0){
    return a + b + c;
}

const result = addition(1, 4);
console.log(result);

//strings
// const str = "Hello World!";
// let str1 = "My name is _ and my age is _";
// const name = "John";
// const age = 14;

// let str2 = `My name is ${name} and my age is ${age}`;
// console.log(str2);

function greet(name, age, message = 'Hello World!'){
    console.log(message);
    console.log(`My name is ${name} and my age is ${age}`);
}

greet("SP", 21);

// 2. anonymous function

const pow = function (a, b) {
    return a ** b;
}

console.log(pow(2, 3));

// 3. arrow function

const substraction = (a, b, c = 1) => {
    return a - b + c;
}

console.log(substraction(10, 4, 0));

const f = a => a + 7;
const f2 = () => "Hi!";

console.log(f(5));
console.log(f2());

// 4. recursive code:

function fibo(i){
    if(i == 0 || i == 1) return 1;
    return fibo(i-1) + fibo(i-2);
}

const n = 5;
console.log(fibo(n));