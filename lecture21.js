// let day = Number(prompt("Enter Day"));

// switch(day){
//     case 1:
//         console.log("moday");
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
// let day = Number(prompt("Enter Day"))
// switch(day){
// case 1:
// console.log("Monday");
// break;
// case 2:
// console.log("Sunday");
// break;
// case 3:
// console.log("Saturday");
// break;
// case 4:
// console.log("Firday");
// break;
// case 5:
// console.log("Thursday");
// break;
// case 6:
// console.log("Wednesday");
// break;
// case 7:
// console.log("Tuesday");
// break;
// default:
// console.log("Invaild day");

// }
//--------------------------------------------------
// let text = "";

// loop1: for (let j = 1; j <= 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { break loop1; }
//     text += i;
//    }

// }
// console.log(text);
//  let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { break loop1; }
//     text += i;
//    }

// }
// console.log(text);1
//-----------------------------------------------------
// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { break loop2; }
//     text += i;
//    }
// }
let text = "";

loop1: for (let j = 1; j < 5; j++){
loop2: for (let i = 1;i < 5; i++){
    if (i===3) {break loop2; }
    text += i;
}
}
console.log(text);


// console.log(text);
// let sName = "awais ahmad";
// console.log(`my name is : ${sName}"`);
// console.log(typeof(78));
// console.log(typeof('khan'));
let myName = "owais khan";
console.log(`My name is:${myName}`);
console.log(typeof(12));
console.log(typeof(`khan`));
//--------------length-------------
// let sName = "awais khan";
// console.log(sName.length)
let sName = "owais khani";
console.log(sName.length);

// let num = 20;

// for (let i = 1; i <= num; i++) {
//     console.log(`2 x ${i} = $ {2 * i}`);
// }
// 
let num = 20;
for (let i =1;i<=num;i++){
    console.log(`3 x ${i} = ${3 * i}`)
}

//------------------------------------------
// let password = prompt("Enter password:");

// if (password.length < 8) {
//     console.log("Weak password");
// } else {
//     console.log("Strong password");
// }
let password = prompt ("Enter password:");
if(password.length < 8){
    console.log("Weak password");
}else{
    console.log("Strong password");
}

