// let sname = "awais khan";
// let result = `my name is : <h1>${sname}</h1>`
// console.log(result);
//---practice---------------
let sname = "owais khan";
let result = `my name is : ${sname}`;
console.log(result);

//----------CharAt---------
// let nam3 = "nabil ahmad";
// console.log(nam.charAt(3));
//---------practice---------
let nam3 = "owais khan";
console.log(nam3.charAt(3))
//------------charCodeAt()-------------
// let text = "AELLO WORLD nabil ahmad";
// let char = text.charCodeAt(0);
// console.log(char);
//---------practice-------
let text = "AELLO WORLD owais ahmad";
let char = text.charCodeAt(0);
console.log(char);
//-------------concat---------
// let nam = "nabil";
// let nam2 =  "khan";
// let newNam = nam.concat(" ", nam2);
// console.log(newNam);\
//---------practice---------
let nam = "owais";
let nam2 = "khan";
let newNam = nam.concat(" ",nam2);
console.log(newNam)
//--------------concat------------
// let num1 = 3;
// let num2 = 4;
// let nam = "3";
// console.log(num1 + num2 - nam);
//---------practice--------
let num1 = 3;
let num4 = 4;
let nam5 = "3";
console.log(num1 + num4 - nam5)

//----------slice--------------
// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);
//---------practice-----
let text3 = "Apple, Banana, Kiwi";
let part = text3.slice(7,13);
console.log(part)

// let text = "Apple, Banana, Kiwi, mango";
// let part = text.slice(7);
// console.log(part);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-19);
// console.log(part);
// let text5 = "Apple,Banana, kiwi";
// let part3 = text5.slice(-18);
// console.log(part3);

//-------toUpperCase-----------
// let nam = "nabil";
// console.log(nam6.toUpperCase(nam));
//--------practice------
let nam6 = "owais";                  
console.log(nam6.toLocaleUpperCase(nam6))

//----------toLowerCase------------
// let nam = "NABIL";
// console.log(nam.toLowerCase(nam));
//-------practice-------
let nam4 = "OWAIS"
console.log(nam4.toLocaleLowerCase(nam4))

//--------trim----------
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);
//---------practice--------
let text6 = "       Hello World!      ";
let text7=text6.trim();
console.log(text7)

//---------toString------------
// let numb = 5;
// let text = numb.toString();
// console.log(typeof(numb));
// console.log(typeof(text));
//---------practice--------
let nu1= 5;
let text8 = nu1.toString();
console.log(typeof(nu1))
console.log(typeof(text8))
//--------------split--------------
// let fruits = "apple,banana,mango,orange";
// let res = fruits = fruits.split(",");
// console.log(res);
//---------practice-----------
let fruits = "apple,banana,mango,orange";
let res = fruits = fruits.split(".")
console.log(res);