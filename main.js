// Operators
// + , - , * , / , % , **  Arthmetic operators
// Assignment operator
// comparession operators
// logical operators
// unery operators
// Ternory operators
let num = 10;
let num2 = 6;
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);
console.log(num ** num2);
// // == , === , != , !== , > , < , >= , <= 
let person = 2;
let person1 = 2;
console.log(person == person1);
console.log(person === person1);
console.log(person != person1);
console.log(person !== person1);
console.log(person > person1);
console.log(person < person1);
console.log(person >= person1);
console.log(person <= person1);
// && , || , !
console.log(3 === 3 && 10 < 4);
console.log(3 === 3 || 10 < 3);
console.log(3 === 3, 10 < 3);
// // ++ , -- 
let i = 1;
let a = ++i + 1;
console.log(a);
let x = 10;
let y = --x + --x - --x + 1 + ++x - --x;
console.log(y);
// ` `
let myName = Math.random() > 0.6 ? "Sami" : 17;
console.log(myName);
console.log(`${myName} is this number or name?`);
// Data types
let dataType = "Sami";
let dataType1 = 10;
let dataType2 = 10 <= 11;
let dataType3 = ["Mango", "Orange", "Banana"];
let dataType4 = [1, 2, 3, 4];
let dataType5 = [10 < 3, 10 == 10];
// Tuple
let dataType6 = [10, "Sami", true];
// union type
let dataType7;
dataType7 = "TSC";
dataType7 = 90;
// type literal
let dataType8;
dataType8 = "Blue";
dataType8 = "Green";
dataType8 = "Red";
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
let enum1 = Color.Blue;
let enum2 = Color[1];
;
let enum3 = 1 /* Fruit.Banana */;
let school = {
    name: "Ali",
    class: "12th",
    teacher_name: "Ahmed",
    id: 99
};
let school1 = school.teacher_name;
school1 = school.class;
;
let obj = {
    name: "Hassan",
    age: 16,
    id: 1001
};
let obj1 = obj.name;
// if else statement
let age = 18;
if (age < 20) {
    console.log("Teenager");
}
else if (age < 15) {
    console.log("Kid");
}
else {
    console.log("Adult");
}
;
// switch case
let personName = "M-Sami";
switch (personName) {
    case "M-Sami":
        console.log("Right");
        break;
    case "Sami":
        console.log("Wrong");
        break;
    default:
        console.log(false);
}
;
// loops
// for loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
// while loop
let c = 0;
while (c < 10) {
    console.log(c * 2);
    c++;
}
// do while loop
let h = 0;
do {
    console.log(h);
    h++;
} while (h < 11);
// object 
// simple object
let object = {
    name: "Sami",
    age: 19,
    id: 2323
};
let objType = {
    name: "Tom",
    id: 786,
    address: "B213"
};
;
let s = {
    name: "BOB",
    age: 123,
    school: "MCA"
};
// Nested object 
let nested = {
    name: "Jerry",
    id: 332,
    address: {
        street: "chowk",
        city: "A",
        country: "Pak"
    }
};
// explicit casting
let f = "joy";
console.log(f); // as
console.log(f); // braces
;
let ball = {
    diameter: 10
};
;
let dish = {
    diameter: 20
};
dish = ball; // ok
ball = dish; // ok
;
let cirlce = {
    diameter: 30,
    area: 28,
};
ball = cirlce; // ok
dish = cirlce; // ok
// cirlce = ball // error
// cirlce = dish // error
// simple funtion
function sum(num1, num2) {
    return num1 + num2;
}
;
let result = sum(10, 10);
// Anonymous function
let fun = function (k) {
    return k;
};
let myFun = fun("Hello");
// default parameter function && optoinal parameter function
function build(firstName, lastName) {
    if (firstName) {
        return firstName + " " + lastName;
    }
    else {
        return lastName;
    }
}
build("sami");
// Arrow function
let arr = (num, num1) => num + num1;
arr(2, 3);
function air(arg1, arg2) {
    return arg1 + " " + arg2;
}
;
air("kal", "kali");
air(1, 2);
air(true, false);
// call back function
function call(name) {
    console.log("Hello", name);
}
;
function back(arg, callback) {
    callback(arg);
}
;
back("Samee", call);
//hoisting
let global = "daily";
if (true) {
    if (true) {
        global; // global scope
    }
}
;
if (true) {
    let z = 0;
}
// z // block scope 
// rest parameter
let greet = function (name, ...name2) {
    return name + " " + name2.join(" ");
};
console.log(greet("Sami", "KaimKhani", "Alad"));
// module
import sami from "./app.js";
import { your, my as me } from "./app.js";
console.log(sami);
console.log(your);
console.log(me);
//sync vs async
function wash(cb) {
    console.log("Washing Started....");
    setTimeout(() => {
        console.log("Washing Done");
        cb();
    }, 5000);
}
;
function soaking(cb) {
    console.log("Soaking Started....");
    setTimeout(() => {
        console.log("Soaking Done");
        cb();
    }, 3000);
}
;
function dry() {
    console.log("Drying Started....");
    setTimeout(() => {
        console.log("Drying Done");
    }, 2000);
}
;
wash(() => {
    soaking(() => {
        dry();
    });
});
// async await
// promise try catch
