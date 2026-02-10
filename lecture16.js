//if condition ternary
let age22 = 19;
let text1 = (age22 < 18 ) ? 'minor': 'major';
console.log(text1)


// switch 
let fruit = 'banana';
switch (fruit){
    case 'banana':
        console.log(`the fruit is ${fruit}`)
        break;
    case 'apple':
        console.log(`the fruit is ${fruit} `)
        break;
    default:
        console.log('you guess the wrong')
}


let light = 'red';


switch (light){
    case 'red':
        console.log('stop')
        break;
    case 'yellow':
        console.log('ready')
        break;
    default:
        console.log('go')
}

let day = 2;
let activity;
switch(day){
    case 1:
    console.log(`Sunday`);
    break;
    case 2:
    console.log(`Monday`);
    break;
    case 3:
    console.log(`Tuesday`);
    break;
    case 4:
    console.log(`Wendnesday`)
    break;
    case 5:
    console.log(`Thursday`)
    break;
    case 6:
    console.log(`Friday`)
    break;
    case 7:
    console.log(`Saturday`)
    break;
    default:
        console.log(`Invaild day`)
}

// let op = `*`;
// let a,b,res;
// a =9; b =2;
// switch(op){
//     case `+`:
//     res = a+b;
//     break;
//     case `-`:
//     res = a-b;
//     break;
//     case `*`:
//     res = a*b;
//     break;
//     case `/`:
//     res = a/b;
//     break;
//     default:
//         console.log(`Wrong operator`);
//         console.log(`Enter operator like + - * /`);
//         break;
// }
// if(op =='+'|| op=="-"|| op=="*"|| op=="/"){
//     console.log("The result of two numbers is ",a," ",op," ",b," = ",res);
// }

let number1 = (prompt("Enter the value of number1: "));
let number2 = (prompt("Enter the value of number2: "));
const operator = prompt("Enter a operator ( either +, -, * or / ): ");

switch(operator) {

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
        console.log("Invalid operator");
}
