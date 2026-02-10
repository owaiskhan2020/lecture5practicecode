// javascript conditional statements

//if statement

// let hour = 19

// if (hour < 18){
//     // if the condition is true the block of code to be executed
//     console.log('good morning')
// }else {
//     // if the condition is false the block of code to be executed
//     console.log('good evening')
// }


//if else

// let age = 16;

// if (age >= 25){

//     console.log(`you are ${age} years old you are university student`)

// }else if (age > 18){
//     console.log(`you are ${age} years old you are collage student`)
// }else{
//     console.log(`you are ${age} years old so go to school`)
// }
 
// if statement 

let hour = 17;
if (hour < 18){
    console.log(`Good day`)
}

let age = 19;
if ( age >= 18){
    console.log(`you can drive`)
}

// if else statement

let hour1 = 18;
if (hour1 < 16){
    console.log(`good day`);
}else{
    console.log(`good evening`);
} 

// if else if

let time = 10;
if(time < 15){
    console.log(`good morning`);
}else if (time < 20){
    console.log(`good day`);
}else{
    console.log(`good evening`);
}

let text ;
if(Math.random() < 0.6){
    console.log("a href='https://w3schools.com'>Visit W3Schools</a>")
}else {
    console.log("a href='https://wwf.org'>Visit WWF</a>")
}

let country = 'usa';
let age1 = 16;
let txt1 = 'you can drive';

if (country == 'usa'){
    if(age1 >= 17){
        console.log(txt1);
    }else{
        console.log('enner if condition')
    }
}else {
    console.log('invalid country')
}


// do your home-work make marks calculator
let marks = 77;
let position;
if( marks >=95 && marks<=100){
    console.log(`1st position`)
}else if(marks >=85 && marks <95){
    console.log(`2nd position`)
}else if(marks >=75 && marks <85){
    console.log(`3rd position`)
}else if(marks >=65 && marks <75){
    console.log(`4th position`)
}else if(marks >=55 && marks <65){
    console.log(`5th position`)
}else if(marks >=45 && marks <55){
    console.log(`6th position`)
}else if(marks >=35 && marks <45){
    console.log(` position`)
// }else if(marks >=45 && marks <35){
//     console.log(`position`)
}else {
    console.log(`your marks less than ${marks} you are fail`)
}

