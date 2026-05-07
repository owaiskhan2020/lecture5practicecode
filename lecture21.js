// let day = Number(prompt("Enter Day"));
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("sunday");
//         break;
//     case 3:
//         console.log("saturday");
//         break;
//     case 4:
//         console.log("friday");
//         break;
//     case 5:
//         console.log("thursday");
//         break;
//     case 6:
//         console.log("wednesday");
//         break;
//     case 7:
//         console.log("tuesday");
//         break;
//     default:
//         console.log("invalid day");
// }
// //----------practice-------
// let day = Number(prompt("Enter day"))
// switch(day){
//     case 1:
//     console.log("Monday");
//     break;
//     case 2:
//     console.log("Tuesday");
//     break;
//     case 3:
//     console.log("Wnesday");
//     break;
//     case 4:
//     console.log("Thuesday");
//     break;
//     case 5:
//     console.log("Friday");
//     break;
//     case 6:
//     console.log("Saturday");
//     break;
//     case 7:
//     console.log("Sunday");
//     break;
//     default:
//     console.log("Invaild day")
// }
// //--------------------------------------------------
// let text1 = "";
// loop1: for (let j = 1; j <= 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { break loop1; }
//     text += i;
//    }
// }
// console.log(text1);
//---------practice-----
let text1 = "";
loop1: for (let j = 1; j <= 5; j++){
    loop2: for (let i = 1; i < 5; i++){
        if (i === 3) { break loop1;}
        text1 +=i;
    }
}
//-----------------------------------------------------
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { break loop2; }
    text += i;
   }
}
console.log(text);
// }
// let text = "";
// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) {
//       break loop2;
//     }
//     text += i;
//   }
// // console.log(text);
//----------practice-----
// // let sName = "awais ahmad";
// // console.log(`my name is : ${sName}"`);
// // console.log(typeof(78));
// // console.log(typeof('khan'));
// let myName = "owais khan";
// console.log(`My name is:${myName}`);
// console.log(typeof 12);
// console.log(typeof `khan`);
// //--------------length-------------
// // let sName = "awais khan";
// // console.log(sName.length)
// let sName = "owais khani";
// console.log(sName.length);
//------practice------
let sName = "owais khan";
console.log(sName.length)

// let num = 20;
// for (let i = 1; i <= num; i++) {
//     console.log(`2 x ${i} = $ {2 * i}`);
// }
//------practice-------
let num = 10;
for (let i = 1; i<num; i++){
    console.log(`2 x ${i} = ${2 * i}`)
}
//------------------------------------------
// let password = prompt("Enter password:");

// if (password.length < 8) {
//     console.log("Weak password");
// } else {
//     console.log("Strong password");
// }
//--------practice--------
// let password = prompt("Enter password");
// if (password.length < 8) {
//   console.log("Weak password");
// } else {
//   console.log("Strong password");
// }
