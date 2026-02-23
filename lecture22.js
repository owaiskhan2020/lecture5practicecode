// let sname = "awais khan";
// let result = `my name is : <h1>${sname}</h1>`
// console.log(result);
let sname = "owais khan";
let result = `my name is : ${sname}`
console.log(result);

//----------CharAt---------
// let nam = "nabil ahmad";
// console.log(nam.charAt(3));
let name = "owais koko";
console.log(name.charAt(3));

//------------charCodeAt()-------------
// let text = "AELLO WORLD nabil ahmad";
// let char = text.charCodeAt(0);
// console.log(char);
let text = "Allw WORLD yaman ahamad";
let char = text.charCodeAt(2);
console.log(char)

//-------------concat---------
// let nam = "nabil";
// let nam2 =  "khan";
// let newNam = nam.concat(" ", nam2);
// console.log(newNam);
let nam = "owais";
let nam2 = "khan";
let newNam= nam.concat(" ",nam2);
console.log(newNam)

//--------------concat------------
// let num1 = 3;
// let num2 = 4;
// let nam = "3";
// console.log(num1 + num2 - nam);
let num1 = 3;
let num2 = 4;
let num3 = "3";
console.log(num1 + num2 - num3)

//----------slice--------------
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);
let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7,13);
console.log(part)

// let text = "Apple, Banana, Kiwi, mango";
// let part = text.slice(7);
// console.log(part);
let text4 = "Apple,Banana,Kiwi,mango";
let part1= text4.slice(7);
console.log(part1);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-19);
// console.log(part);
let text5 = "Apple,Banana, kiwi";
let part3 = text5.slice(-18);
console.log(part3);

//-------toUpperCase-----------
// let nam = "nabil";
// console.log(nam.toUpperCase(nam));
let nam3 = "owais";
console.log(nam3.toLocaleUpperCase(nam3))

//----------toLowerCase------------
// let nam = "NABIL";
// console.log(nam.toLowerCase(nam));
let nam4 = "OWAIS"
console.log(nam4.toLocaleLowerCase(nam4))

//--------trim----------
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();

// console.log(text2);
let text6 = "       Hello World!      ";
let text7=text6.trim();
console.log(text7)

//---------toString------------
// let numb = 5;
// let text = numb.toString();
// console.log(typeof(numb));
// console.log(typeof(text));
let numb = 5;
let t =numb.toString();
console.log(typeof(numb));
console.log(typeof(t));

//--------------split--------------
let fruits = "apple,banana,mango,orange";
let res = fruits = fruits.split(",");
console.log(res);

