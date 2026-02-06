// Exponentiation
let x = 5;
let z = x ** 2;
console.log(z)

// Exponentiation Math.pow(x,y)
let a = 5;
let b = Math.pow(x,2)
console.log(b)

// Logical AND assignment operator
let c = true;
let d = c &&=10;
console.log(d)

let e = false;
let f = e &&=10;
console.log(e)

let g = 1;
let h = g &&=10;
console.log(h);

let i = 0;
let j = i &&=10;
console.log(j);

let k = undefined;
let l = k &&=10;
console.log(l);

let n = null;
let m = n &&=10;
console.log(m);

// Logical OR assignment operator
let a1 = false;
let b1 = a1 ||=10;
console.log(b1)

let c1 = true;
let d1 =c1||=10;
console.log(d1)

let e1 = null;
let f1 =e1||=10;
console.log(f1)

let g1 = undefined;
let h1 =g1||=10;
console.log(h1);

// Nullish coalescing assignment operator
let i1;
i1 ??= 10;
console.log(`sum  operator is ${i1}`);

let j1 = 0;
j1 ??=10;
console.log(j1);

let k1 = null;
k1 ??=10;
console.log(k1);

let o1 = undefined;
o1 ??=10;
console.log(o1);

let v = 10;
let u = 5;
v ??= u;
console.log(v);

// The Spread (...) Operator
let text = "12345";
console.log(...text);

let min = Math.min(...text);
console.log(min);

let max = Math.max(...text);
console.log(max);

// Operator Precedence
let a2 = 100 + 50 * 3;
console.log(`sum operator precedence is ${a2}`)

let b2 = 45 - 100 / 4;
console.log(b2)

let c2 = 50 * 200 + 3;
console.log(c2);

let d2 = 35 / 150 - 7;
console.log(d2);

// Comparing Different Types
let e2= 2<12;
console.log(`sum Comparing is ${e2}`)

let f2 = 2<"12";
 console.log(f2)

let g2 = 2 < "Johu" 
console.log(g2)

let h2 = 2 > "Johu" 
console.log(g2)

let i2 = 2=="Johu"
console.log(i2)

let j2 = "2"<"12";
console.log(j2)

let k2 = "2">"12";
console.log(k2)

let l2 = "2" == "12";
console.log(l2)
//Example
let age = "18";

if(isNaN(age)){
    console.log("the given number is not an integer");
}else{
    console.log("the number is an integer");

}

let age1 = "18";
 
if (age1){
    console.log("the given number is not an integer");

}else{
    console.log("the number is an integer")
}

let age2 = 19;
if (isNaN){
    console.log("the given number is not an integer");
}else{
    console.log("the number is an integer")
}
 
// let tex1 = "johu"
// let tex2 = "doe"
// let tex3 = tex1 + " "+ tex2;
// console.log(tex3)