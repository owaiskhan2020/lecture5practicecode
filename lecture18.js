// Logical Operators
let x2 = 10;
let y2 = 1;
(x2 < 10 && y2 > 1);
(x2 < 10 && y2 < 1);
console.log( Boolean(x2))

let x3 = 5;
let y3 = 5;
(x3 === 5 || y3 === 5)
console.log(Boolean(y3));

let x4 = 5;
let y4 = 8;
!(x4 === y4);
console.log(Boolean(x4));

// && operator
let a2 = 6;
let b2 = 10;
let z3 = (a2 < 10 && b2 >  5);
console.log( Boolean(z1));

// || operator
let  a4 = 6;
let  b3 = -3;
let z4 = (a4 > 0 || b3 > 0);
console.log(Boolean(z4))

// NOT operator (!)
let a5 = 5;
let b4 = 8;
let z5 = (5 == 8);
console.log(z5)

// Operator (??)
let names = null;
let text = "missing";
let result = names ?? text ;
console.log(result);


