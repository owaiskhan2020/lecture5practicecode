// assignment operator in js
// + operator

let num1 = 10;
let num2 = 5;

let result = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${result}`)

// - Subtraction operator
let x = 10;
let y = 7;
let z = x-y;
console.log(`the subtraction of ${x} and  ${y} is ${z}`)

// * Multiplication operator
let a = 9;
let b = 5;
let c = a*b;
console.log(`The multiplication of ${a} and ${b} is ${c}`)

// **  Exponentiation operator
let d = 10;
let e = 6;
let f = d**e;
console.log(`The exponentiation of ${d} and ${e} is ${f}`)
//Division operator
let g = 11;
let h = 9;
let i = g/h;
console.log(`The division of ${g} and ${h} is ${i}`)

// Increment and Decrement
let num = 21;
console.log(num++)
console.log(num--)

if(num%2 == 0){
    console.log(`the ${num} is even`)
} else {
    console.log(`the ${num} is not even`)
}

// js string addition

let fname = "jhon";
let lname = "doi";

console.log(fname +' '+ lname)
let num3 = 5;
let num4 = "5";
console.log(typeof(num3) +" "+ typeof(num4))

// = operator
let a1 = 10;
console.log(a1)

//+= operator
let b1 = 12;
 b1 += 3;
 console.log(b1);
  
 // -= operator
 let c1= 14;
 c1 -= 6;
 console.log(c1)

 //*= operator
 let d1 = 15;
 d1 *= 7;
 console.log(d1)

 // /=operator
 let e1 = 16;
 e1 /=8;
 console.log(e1)

 // %= operator
 let f1 = 16;
 f1 %= 3;
 console.log(f1)

 // **= operator
 let g1 = 21;
 g1 **= 6;
 console.log(g1)

 // == equal operator 

 let item = 10;
 let item2 = 10;

 let res = (item == item2);
 console.log(res)

 //  === equal operator
 let per = 12;
 let per1 = 13;
 let resu = (per === per1);
 console.log(resu)

 // != equal operator
 let t1 = 16;
 let t2 = 12;
 let t3 = (t1 != t2);
 console.log(t3) 

 // !== equal operator
 let x1 = 11;
 let x2 = 19;
 let x3 = (x1 !== x2);
 console.log(x3)

 // > equal operator
 let y1 = 18;
 let y2 = 22;
 let y3 =(y1 > y2);
 console.log(y3)

 // < equal operator
 let p1 = 34;
 let p2 = 37;
 let p3 = (p1 < p2);
 console.log(p3)

 // >= equal operator
 let o1 = 55;
 let o2 = 57;
 let o3 = (o1 >= o2);
 console.log(o3)

 // <= equal operator
 let u1 = 23;
 let u2 = 45;
 let u3 = (u1 <= u2);
 console.log(u3)
