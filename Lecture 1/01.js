// Variables 
// undefined, null, number, string, bool, symbol, BigInt (primitive types)

var a = 10;
var b = "Hello World!";
var c = true;
var d = undefined;
var e = null;
var f = Symbol("I am a symbol");
var g = BigInt("20");

console.log(a, b, c, d, e, f, g);

// null and undefined??
// 1. undefined -> by default is value is not assigned after delaration
// 2. null -> specified by us

var x;
console.log(x);

// BigInt and number 

console.log(10 + 2);

// booleans

if((a >= 10)){
    console.log("True!");
}
else{
    console.log("False!");
}

console.log(a>=10);

// strings

var newstr = "Shirsendu Pal";
console.log(newstr);

// string is made of characters and you can 
// access them just like in other languages!

console.log(newstr[100]);