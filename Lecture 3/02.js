let str1 = "Hello world?";
// console.log(str1);
// console.log(str1[1])
// for(let i of str1) console.log(i);
// for(let i = 0; i< str1.length; i++) console.log(str1[i]);
// for(let i in str1) console.log(str1[i]);

let arr1 = [0, "Cat", BigInt(2), undefined, null, true];
// console.log(arr1);
// for(let i of arr1) console.log(i);
// for(let i = 0; i< arr1.length; i++) console.log(arr1[i]);
// for(let i in arr1) console.log(arr1[i]);

// let obj1 = {
//     name: "john",
//     age: 20,
//     phone: 9087,
//     greet: function() {
//         console.log("Hi");
//     }
// };
// console.log(obj1);
// // for(let i of obj1) console.log(i);
// // for(let i in obj1) console.log(obj1[i]);

// obj1['hasCar'] = false;

// console.log(obj1);

console.log(arr1);
console.log(arr1[4]);
// console.log();
console.log(arr1[100]);
console.log(arr1);

arr1['dog'] = "Something";

console.log(arr1);

for(let i of arr1) console.log(i);
// for(let i in arr1) console.log(arr1[i]); // for in loop