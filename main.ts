// Operators
// + , - , * , / , % , **  Arthmetic operators
// Assignment operator
// comparession operators
// logical operators
// unery operators
// Ternory operators

let num : number = 10;
let num2 : number = 6;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);
console.log(num ** num2);


// // == , === , != , !== , > , < , >= , <= 
let person  = 2;
let person1  = 2;

console.log(person == person1);
console.log(person === person1);
console.log(person != person1);
console.log(person !== person1);
console.log(person > person1);
console.log(person < person1);
console.log(person >= person1);
console.log(person <= person1);

// && , || , !
console.log(3===3 && 10 < 4);
console.log(3===3 || 10 < 3);
console.log(3===3 !, 10 < 3);

// // ++ , -- 
let i : number = 1;
let a : number = ++i + 1 
console.log(a);

let x : number = 10;
let y : number = --x + --x - --x +1 + ++x - --x;
console.log(y);

// ` `
let myName = Math.random() > 0.6 ? "Sami" : 17;
console.log(myName);

console.log(`${myName} is this number or name?`);


// Data types
let dataType : string = "Sami";
let dataType1 : number = 10;
let dataType2 : boolean = 10<=11;
let dataType3 : string[] = ["Mango","Orange","Banana"];
let dataType4 : number[] = [1, 2, 3, 4];
let dataType5 : boolean[] = [10 < 3, 10 == 10];
// Tuple
let dataType6 : [number, string, boolean] = [10, "Sami", true];

// union type
let dataType7 : string | number;
dataType7 = "TSC";
dataType7 = 90;

// type literal
let dataType8 : "Blue" | "Red" | "Green";
dataType8 = "Blue";
dataType8 = "Green";
dataType8 = "Red";

// enum

enum Color{
    Red = 1,
    Green,
    Blue = 4
};

let enum1 = Color.Blue;
let enum2 = Color[1];

// const enum
 const enum Fruit{
    Mango,
    Banana,
    Orange
 };

 let enum3 = Fruit.Banana;
//  let enum4 = Fruit[1]; // error 

// type intersection &

type Student = {
    name : string;
    class : string
};

type Teacher = {
    teacher_name : string;
    id : number
};

type School = Student & Teacher ;

let school : School = {
    name : "Ali",
    class : "12th",
    teacher_name : "Ahmed",
    id : 99
};

let school1 = school.teacher_name;
school1 = school.class;

// interface

interface Obj {
    name : string;
    age : number;
    id : number
};

let obj : Obj = {
    name : "Hassan",
    age : 16,
    id : 1001
};

let obj1 = obj.name;

// if else statement

let age : number = 18;

if(age < 20){
    console.log("Teenager")
}else if(age < 15){
    console.log("Kid")
}else{
    console.log("Adult")
};

// switch case

let personName : string = "M-Sami"

switch(personName){
    case "M-Sami":
        console.log("Right");
        break;
    case "Sami":
        console.log("Wrong");
        break;
    default:
        console.log(false);                    
};

// loops
// for loop

for(let i = 0; i <= 10; i++){
    console.log(i);
}
// while loop

let c = 0;
while(c < 10){
    console.log(c*2)
    c++
}

// do while loop
let h = 0;
do{
    console.log(h);
    h++
}while(h < 11)

// object 
// simple object
let object = {
    name:"Sami",
    age:19,
    id:2323
};

// type object

type ObjType = {
    name: string;
    id: number;
    address: string
};

let objType : ObjType = {
    name : "Tom",
    id: 786,
    address: "B213"
};

// interface object

interface S {
    name: string;
    age : number;
    school : string
};

let s : S = {
    name : "BOB",
    age : 123,
    school : "MCA"
};

// Nested object 

let nested = {
    name: "Jerry",
    id: 332,
    address:{
        street : "chowk",
        city: "A",
        country : "Pak"
    }
};

// explicit casting
let f : any = "joy";
console.log(f as string); // as
console.log(<string> f); // braces

// fresh && stale object
interface Ball {
    diameter: number
};

let ball : Ball = {
    diameter : 10
};

interface Dish {
    diameter : number
};

let dish : Dish = {
    diameter : 20
};

dish = ball // ok
ball = dish // ok

interface Circle {
    diameter : number;
    area : number
};

let cirlce : Circle = {
    diameter : 30,
    area : 28,
};

ball = cirlce // ok
dish = cirlce // ok
// cirlce = ball // error
// cirlce = dish // error

// simple funtion

function sum(num1 : number, num2 : number){
    return num1 + num2
};

let result = sum(10,10)

// Anonymous function

let fun = function(k : string){
    return k
}
let myFun = fun("Hello");

// default parameter function && optoinal parameter function

function build(firstName: string, lastName?: "Khan"){
    if(firstName){
        return firstName + " " + lastName
    }else{
        return lastName
    }
}

build("sami");

// Arrow function
let arr = (num : number, num1 : number) => num + num1
arr(2,3)

// function overload
function air(arg1: string, arg2: string): string 
function air(arg1: number, arg2: number): number 
function air(arg1: boolean, arg2: boolean): boolean

function air(arg1: any, arg2: any): any {
    return arg1 + " " + arg2
};
air("kal","kali");
air(1,2);
air(true,false);

// call back function
function call(name:string){
    console.log("Hello" ,name);
};
function back(arg: string, callback: (ans: string)=>void){
    callback(arg)
};
back("Samee",call);

//hoisting
let global = "daily";
if(true){
    if(true){
        global // global scope
    }
};

if(true){
    let z = 0;
}
// z // block scope 

// rest parameter
let greet = function(name:string, ...name2:string[]){
    return name +" "+ name2.join(" ")
};
console.log(greet("Sami","KaimKhani","Alad"));

// module
import sami from "./app.js"
import  {your, my as me}  from "./app.js";
console.log(sami);
console.log(your);
console.log(me);

//sync vs async
function wash(cb:()=> void){
    console.log("Washing Started....");
    
    setTimeout(() => {
        console.log("Washing Done")
        cb();
    },5000);
    
};

function soaking(cb:()=> void){
    console.log("Soaking Started....");
    
    setTimeout(() => {
        console.log("Soaking Done");
        cb();
    },3000); 
      
};

function dry(){
    console.log("Drying Started....");
    setTimeout(() => {
        console.log("Drying Done")
    }, 2000);       
};
wash(()=>{
    soaking(()=>{
        dry();
    })
});





