//-------Array introduction----------
// let fruits = ["mango","banana","orange","apple"];
// console.log(fruits)
//-----------Array methods---------
// let fruits = ["mango", "banana", "orange"];
// fruits.shift();
// fruits.unshift("apple");
// console.log(fruits);
// console.log(fruits.slice(0,2));
//fruits.push("apple");
// fruits.pop();
// console.log(fruits.slice(0,2));
// console.log(fruits.length);
//----------array methods--------
//-------push-------
// let nam1 = ["owais","ubaid","yoman","nouman"];
// nam1.push("azan");
// console.log(nam1);
//-------practice------
   let nam1 = ["owais","ubaid","yoman","nouman"];
   nam1.push("azan");
   console.log(nam1)
// //---------pop-----------
// let nam2 = ["owais","ubaid","yoman","nouman"];
// nam2.pop();
// console.log(nam2);
//-------practice-------
let nam2 = ["owais","ubaid","yoman","nouman"];
nam2.pop();
console.log(nam2)
// //----------shift---------
// let nam3 = ["owais","ubaid","yoman","nouman"];
// nam3.shift();
// console.log(nam3);
//---------practice---------
let nam3 = ["owais","suleman","uzair","ubaid"];
nam3.shift();
console.log(nam3)
// //--------unshift-------
// let nam4 = ["owais","ubaid"];
// nam4.unshift("azad");
// console.log(nam4);
//-----------practice-------
let nam4 = ["owais","suleman"];
nam4.unshift("azan");
console.log(nam4)
// //--------slice-------------
// let aname = ["owais","yaman","nouman","ubaid"];
// console.log(aname.slice(0,2));
//----------practice--------
let nam5 = ["suleman","ubaid","nouman","uzair"];
console.log(nam5.slice(0,2))
//-----------splice------------
// let sName = [1,2,3,4,5];
// sName.splice(3,3)
// console.log(sName)
let sName = [1,2,3,4,5];
sName.splice(0,3,"12");
console.log(sName);
//-----------todo list----------------
// let DB = [];
// DB.push("banana", "apple");
// DB.pop()
// console.log(DB);
let DB = [];
DB.push("owais","ubaid","nouman");
// DB.pop()
console.log(DB)
//-----for loop----------
// let arr = [1,2,3,4,5];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
//------------pracitce-----
let arr1 = [1,2,3,4,5];
for (let i=0;i<arr1.length; i++){
    console.log(arr1[i]);
}
//-------for of loop--------
// let fruits = ["orange", "mango", "banana"];
// for(fruit of fruits){
//     console.log(fruit);
// }
//-------practice--------
let fruit = ["banana","mango","orange"];
for(fruit of fruit){
    console.log(fruit);
}
//--------Marks average calculator------
// let arr = [50,60,70,80,90];
// for(a of arr){
//     console.log(a);
// }
//--------practice------
let arr = [55,43,25,67,87];
for (arr of arr){
    console.log(arr)
}
