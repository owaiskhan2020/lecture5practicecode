// let student = {
//     name: "owais",
//     rollNo: 55,
//     semester: "6th",
//     address: function(){
//         console.log("hello world");
//     }
// };
// console.log(student.address);

// let student1 = {
//     name:"nouman",
//     rollNo: 12,
//     class : 10,
//     city : "peshawar", 
//     address: function (){
//     console.log("welcome to school")
//     }
// }
// console.log(student1.address);
// console.log(student1.name);
// console.log(student1.rollNo);
// console.log(student1.city)


//-----------nested object----------------
// let student = {
//     name: "owais",
//     age: "20",
//     address: {
//         city: "Peshawar",
//         village: "badabera",
//     }
// }
// // console.log(student.address.city);
// console.log(Object.keys(student));
// console.log(Object.values(student));
//-----Object introduction------
let person = {
    name: "Ali",
    age: 20,
    city: "peshawar"
}
// console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
//-------- object Properties-------
// let car = {
//     brand : "Toyota",
//     model : 2020,
// };
// console.log(car);
//------practice-------
let car = {
    brand: "Toyota",
    model : 2020,
}
console.log(car);
//----------Methods-------
// let student = {
//     name:"owais",
//     age : 19,
//     greet: function(){
//         return "My name is" + this.name
//     }
// }
// console.log(student.greet());
//-------practice---------
let student = {
    name: "owais",
    age: 19,
    greet : function(){
    return " My name is " + this.name
    }
};
console.log(student.greet());

//-----------Nested Objects---------
// let student1 = {
//     name : "owais",
//     city : "peshawar",
//     marks:{
//         maths : 89,
//         english :78, 
//     }
// } 
// console.log(student1.marks.maths);
//---------practice-------
let student1 = {
    name: "owais",
    city: "peshawar",
    marks : {
        maths: 90,
        englis : 80,
    }
}
console.log(student1.marks)
//-------Object.keys()---------
// let user = {
//     name: "Ahamd",
//     age: 24,
// }
// console.log(Object.keys(user));
// //--------Object.values()-----
// console.log(Object.values(user))
//----practice----------
let user = {
    name : "Ahamd",
    age : 23,
}
console.log(Object.keys(user));
//--------Object.values()-----
console.log(Object.values(user));


//-----------------E-commerce product object--------------------------
// let electricthings = {
//     name: "laptop",
//     price: 90000,
//     speci: {
//         brand: "Dell",
//         model: "5400",
//     }
// }
// console.log(electricthings.speci);
//--------------practice-----
let electricthings = {
    name : "laptop",
    price: 80000,
    speci: {
        brand : "Dell",
        model: "2025"
    }
}
console.log(electricthings.speci)
//---------Student object system---------
// let student2 = {
//     name: "owais",
//     marks: [60, 70, 80, 90],
//     avg: function() {
//         let sum = 0;
//         for (let i = 0; i < this.marks.length; i++) {
//             sum += this.marks[i];
//         }
//         let average = sum / this.marks.length;
//         return average;
//     }
// };
// console.log(student2.avg());
//---------practice-------
// let student2 = {
//     name : "owais",
//     marks : [40,50,60,70],
//     avg: function(){
//         let sum = 0;
//         for (let i = 0; i<this.marks.length; i++){
//             sum += this.marks[i];
//         }
//         let average = sum / this.marks.length;
//         return average;
//     }
// }
// console.log(student2.avg());
//-------------------------------
// const user1 = {
//   username: "owais 123",
//   email: "owais@gmail.com",
//   isLoggedIn: true,
//   skills: ["HTML", "CSS", "JavaScript"]
// };
// if (user.isLoggedIn) { 
// }
// console.log("Welcome " + user1.username);
const user1 = {
    username : "owais 123",
    email : "owaiskhan@gmail.com",
    isloggedIn : true,
    skills:["HTML","CSS","JavaScript"]
};
if (user.isloggedIn){
    console.log("welcome" + user1.username)
}
//----------------------------------
// const cart = {
//   items: [
//     { name: "Shirt", price: 1500, qty: 2 },
//     { name: "Shoes", price: 3000, qty: 1 }
//   ],
//   total: function () {
//     let sum = 0;
//     this.items.forEach(item => {
//       sum += item.price + item.qty;
//     });
//     return sum;
//   }
// };
// console.log(cart.total());
