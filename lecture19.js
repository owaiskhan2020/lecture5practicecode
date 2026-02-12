// variable
let x = 20;
let y = 7;
let add = x + y;
console.log(`the sum variable is ${add}`);

 let a = 5;
 let b = 9;
 let sub = a - b;
 console.log(`the sum variable is ${sub}`);

 let x1 = 20;
 let y1 = 4;
 let mul = x1 * y1;
 console.log(`the sum variable is ${mul}`);

 let a1 = 20;
 let b1 = 4;
 let div = a1 / b1;
 console.log(`the sum variable is ${div}`)

 //Create 2nd variables
 let x2 = 12;
 let y2 = 4;
 let z = x2 + y2;
 console.log("Addition:",z);

 let a2 = 12;
 let b2 = 4;
 let z1 = a2 - b2;
 console.log("Subtraction:",z1);

 let x3 = 12;
 let y3 = 4;
 let z2 = x3 * y3;
 console.log("Multiplication:",z2);

 let a3 = 12;
 let b3 = 4;
 let z3 = a3 / b3;
 console.log("Division:",z3)

 let x4 = 12;
 let y4 = 4;
 let z4 = x4 % y4;
 console.log("Remainder:",z4)

 // variable num = 17.
let num = 17;
if (num % 2 === 0){
    console.log("Even");
}else{
    console.log("Odd")
}

// Create 3rd variables:
let a4 = 25;
let b4 = "25";
let z5 = (25 == "25");
console.log(z5);

let x5 = 25;
let y5 = "25";
let z6 = (25 === "25");
console.log(z6)

// Logical Operator
let age = 20;
let hasID = true;
if(age > 18 && hasID === true){
    console.log("Allowed")
}else{
    console.log("Not Allowed")
}
// Increment 
let count = 5;
console.log(count ++);
console.log(count);
console.log(++count);

// Using ternary operator

let age1 = 16;
if(age1 >= 18){
    console.log("Adult");
}else{
    console.log("Mino")
}

// calculator using if else 
let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt ("Enter number (+,-,*,/):");
if(operator === "+"){
    console.log("Result:",num1+num2);
}else if(operator === "-"){
    console.log("Result:",num1-num2);
}else if(operator === "*"){
    console.log("Result:",num1*num2);
}else if(operator === "/"){
    console.log("Result:",num1/num2)
}else{
    console.log("Invoild operator");
}
