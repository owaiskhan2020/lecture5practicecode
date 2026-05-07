// //if condition ternary
// // let age22 = 19;
// // let text1 = (age22 < 18 ) ? 'minor': 'major';
// // console.log(text1)
//-------practice--------
let age22 = 19;
let text1 = (age22 < 18) ? 'minor':'major';
console.log(text1)
//------------------------------------
// // switch 

// // let fruit = 'banana';
// // switch (fruit){
// //     case 'banana':
// //         console.log(`the fruit is ${fruit}`)
// //         break;
// //     case 'apple':
// //         console.log(`the fruit is ${fruit} `)
// //         break;
// //     default:
// //         console.log('you guess the wrong')
// // }
//-------practice-----
let fruit = `apple`;
switch (fruit){
    case `banana`:
        console.log(`the fruit is ${fruit}`)
        break;
        case `apple`:
        console.log(`the fruit is ${fruit}`)
        break;
        default:
            console.log(`you guess the wrong`)
}
//----------------------------------
// let light = 'red';
// switch (light){
//     case 'red':
//         console.log('stop')
//         break;
//     case 'yellow':
//         console.log('ready')
//         break;
//     default:
//         console.log('go')
// }
//-------- practice--------
let light = `red`;
switch(light){
    case `red`:
    console.log(`stop`)
    break;
    case `yellow`:
    console.log(`ready`)
    break;
    default:
    console.log(`go`)
}
//----------------------------------------
// // let day = 2;
// // let activity;
// // switch(day){
// //     case 1:
// //     console.log(`Sunday`);
// //     break;
// //     case 2:
// //     console.log(`Monday`);
// //     break;
// //     case 3:
// //     console.log(`Tuesday`);
// //     break;
// //     case 4:
// //     console.log(`Wendnesday`)
// //     break;
// //     case 5:
// //     console.log(`Thursday`)
// //     break;
// //     case 6:
// //     console.log(`Friday`)
// //     break;
// //     case 7:
// //     console.log(`Saturday`)
// //     break;
// //     default:
// //         console.log(`Invaild day`)
// // }
//----practice-----------
let day = 2;
let activity;
switch(day){
    case 1:
        console.log(`monday`)
        break;
    case 2:
        console.log(`tuesday`)
        break;
    case 3:
        console.log(`wendnesday`)
        break;
    case 4:
        console.log(`thursday`)
        break;
    case 5:
        console.log(`friday`)
        break;
    case 6:
        console.log(`saturday`)
        break;
    case 7:
        console.log(`sunday`);
        break;
        default:
            console.log(`invaild day`)
}
//-----------------------------------------------------
// let number1 = (prompt("Enter the value of number1: "));
// let number2 = (prompt("Enter the value of number2: "));
// const operator = prompt("Enter a operator ( either +, -, * or / ): ");
// switch(operator) {
//     case "+":
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case "-":
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case "*":
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case "/":
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
//     default:
//         console.log("Invalid operator");
//}

//-----------practice-------------------
let number1 = Number(prompt("Enter the value of number1: "));
let number2 = Number(prompt("Enter the value of number2: "));
let operator = prompt("Enter the operator (either +,-,*or/");
switch(operator){
    case "+":
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case "-":
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case "*":
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case "/":
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;
        default:
        console.log(`Invaild operator`);
}
