// function hello(num1, num2) {
//     // alert("hello world");
//     // console.log("hello world");
//     let result = num1 * num2;
//     console.log(result);
    
// }

// hello(2, 4);

// function hello (){
//     // alert ("hello world")
//     console.log("well come");
// }
// hello();

// function greet (nu1,nu2){
//     let result = nu1 + nu2;
//     console.log(result);
// }
// greet(3,4);

// function greet1(num1,num2){
//     let result = num1-num2;
//     console.log(result);
// }
// greet1(5,9)
//-----practice------
function greet2(num1,num2){
    let result = num1*num2;
    console.log(result);
}
greet2(4,5)
//--------------------
function ret(a, b){
    return a + b;
}
console.log(ret(2, 45 ));
// console.log(ret(34, 45 ));
// console.log(ret(78, 45 ));
// console.log(ret(32, 45 ));
// console.log(ret(98, 45 ));

//---------arrow function-------------
// const arr = (a, b)=> {
//     return a * b;
// }
// let val = arr(5, 5);
// console.log(val);
//-----practice-------
// const arr = (a,b) =>{
//  return a - b;
// }
// let val = arr (10,7);
// console.log(val)
//--------------expression-------------------

// const func = function(sName, num){
//     let greeting = `Welcome ${sName} your age is ${num}`
//     return greeting;
// }
// console.log(func("nabil", 22))
//---------practice------------------
const func = function(sName,num){
  let greeting = `Welcome ${sName} your age is ${num}`
  return greeting;
}
console.log(func("owais", 20))
//------------default parameter-----------

// function defa(name = "Guest"){
//     return name;
// }
// console.log(defa());
// console.log("owais")
//--------practice----------
function defa(name = "Guest "){
  return name;
}
console.log(defa());
console.log("owais")

//---------------colculator--------------
// function colculator(num1, num2, logi){
//     if(logi === "+"){
//         return num1 + num2;
//     }
//     else if(logi === "-"){
//         return num1 - num2;
//     }
//     else if(logi === "*"){
//         return num1 * num2;
//     }
//     else if(logi === "/"){
//         return num1 / num2;
//     }
//     else if(logi === "%"){
//         return num1 % num2;
//     }
//     else {
//         console.log("please give correct symbol");
//     }   
// }
// let result = colculator(18, 5, "+");
// console.log(result);
//-----------practice------------
function colculator (num1,num2,logi){
  if(logi === "+" ){
    return num1 + num2;
  }
  else if (logi === "-"){
    return num1 - num2;
  }
  else if (logi === "*"){
    return num1 * num2;
  }
  else if (logi === "/"){
    return num1 / num2;
  }
  else if (logi === "%"){
    return num1 % num2;
  }
  else {
    console.log("please give correct symblo");
  }
}
let result = colculator(16 , 5, "-");
console.log(result);


//-------------ageChecker
// function ageChecker(age) {
//   if (age < 0) {
//     console.log("Invalid age");
//   } 
//   else if (age <= 10) {
//     console.log("You are a child");
//   } 
//   else if (age <= 17) {
//     console.log("You are a teenager");
//   } 
//   else if (age <= 20) {
//     console.log("You are an adult");
//   } 
//   else {
//     console.log("You are a senior citizen");
//   }
// }
// ageChecker(11);
//----------practice-----
// function ageChecker(age){
//   if(age < 0){
//     console.log("Invoild age");
//   }
//   else if (age <= 8){
//     console.log("You are child");
//   }
//   else if (age <= 17){
//      console.log("You are teenager");
//   }else if(age <= 20){
//     console.log("You are adult");
//   }else{
//     console.log("You are a senior citizen")
//   }
// }
// ageChecker(20);
//--------practice----------
function ageChecker(age){
  if (age < 0){
    console.log("Invoild age");
  }
  else if (age <=8){
    console.log("you are child");
  }
  else if (age <= 17){
    console.log("you are teenager");
  }
  else if (age <= 20){
    console.log("you are adult");
  }
  else{
  console.log("you are a senior citizen");
  }
}
ageChecker(20)
