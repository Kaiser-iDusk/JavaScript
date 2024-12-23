var a = 50;
let b = 50;
var a = 100;

{
    let b = 10;
    b = b + 10;
    console.log(b);
    a -= 5;
}

b = b - 5;
console.log(b);

console.log(a);

// global scoping <- you can access it everywhere (var)
// let is a block scoped variable... supposed to use let everywhere in newer codebases


// let b = 20;

