//! Adding Typescript

//1. Typescript is superset of javascript
//2. javascript is dynamically typed  e.g. function add(a,b)   a, b can be numbers or strings
//Typescript adds static typing to javascript function(a:number,b:number) a,b can only be numbers

//! Install typescript
//>npm init
//> npm install typescript 

//To RUn
//>npx tsc "filelocation/filename.ts"

//it will generate a filename.js file

//! Primitives
//number,string,boolean,null,undefined
let age:number =24;

let hobbies: string[];//array of strings
hobbies= ['cooking','singing'];

//types of objects
let person:{
    name: string;
    age?:number;  //age is optional
    isEmployee:boolean;
}
let people:{
    name: string;
    age?:number;  //age is optional
    isEmployee:boolean;
}[];   // array of persons

person={
    name:'Max',
    isEmployee:true
}

//! TYPE inferences

//if no type is specified typescript infers the type
let course = 'React-Complete Guide';

//course = 1234; // will give error

//! UNION TYPE

let dynamicVariable: string | number | boolean = 'string value';
dynamicVariable = 123;
dynamicVariable = false;

//! Type aliases

type Person = {
    name: string;
    age?:number;  //age is optional
    isEmployee:boolean;
}

let person1: Person;
let people1: Person[];