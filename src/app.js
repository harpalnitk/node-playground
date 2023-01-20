//TO RUN THIS FILE > node ./src/app.js

//! VARIABLE SCOPES
let a = 'global'; //global variable (Lexical environment)

function fun(){
    let a = 'function'; //function scoped variable

    if (true){
        let a = 'block' //block scoped variable
        var b = 'hoisted' // this variable will be hosted 
                          // up to the local scope of the function
    }
}

function add(a,b){
    return a+b; // functions are objects

}

// which means they can also be used as expressions
const add1 = function(a,b){
    return a+b;
}
//or to construct higher order functions where function
// is used as an argument or return value
function higherOrder(fun){
    fun();
    return function(){

    };
}
//functions can also be nested to create a enclosure that encapsulates 
//data and logic from the rest of the program
function giveMeClosure(){
    let a = 10; // primitive var in function is stored on the 
    //call stack which is browser short term memory
    return function(){
        //inner function can still access variables of outer function
        //because then primitive value of data in outer function is stored in heap memory
        //which persists between function calls
        a++;
        return a;
    }

   
}
this
// from global scope this refers window object

function wtfIsThis(){
    console.log(this)
}
const person = {
    wtfIsThis: function(){
        console.log(this);
        //if this is attached to an object and called by that object
        //then this refers to that object
    }
}

// we can manually bind a function to some other object using bind
const person1={};
const personFun = wtfIsThis.bind(person);

//! arrow functions 
//are anonymous which makes them ideal for function expression

const personArrow = {
    wtfIsThis: () => {
        console.log(this);
        //if this is attached to an object and called by that object
        //then this refers to that object
    }
}

function someFun(num,obj){};
//in functions primitive is passed by value means copy of original primitive is passed
// but objects are passed by refernce and stored in heap that means
//multiple parts of code might be mutating the same object

//! OBJECTS
let human = {};
//OR
let human1 = new Object();


// objects can inherit properties from each other through mechanism
// called prototype chain

//every object has atleast one private property that links to exactly one
//prototype

//recommended way to get prototype
Object.getPrototypeOf(human);

//! Javascript supports OOP through class keyword

class HumanClass {
    //constructor is a function which is first called when object
// is first created
    constructor(name){
        this.dna = 'AACTG';
        this.name =  name;
    }
    get gender(){
        return this.gender
    }
    set gender(val){
        this.gender = val;
    }
//encapsulates functions as methods
    walk(){
        console.log('walking')
    }
    //global functions to the classname
    static isHuman(human){
        if(human.dna == 'AACTG'){
            return true;
        }
    }
}
//class is just syntatic sugar for prototype inheritance and objects

//! BUILT IN DATASTRUCTURES IN JAVASCRIPT

//arrays : dynamic collection of indexed items
const list = ['foo','bar','bar'];

//set: to hold a collection of unique items
const unique = new Set(list);

//map
const dict = new Map([
    ['foo',1],
    ['bar',2]
]) // in map all the properties will always be refrenced;
//so it will not be garbage colected

//javascript is automatically garbage collected
const weakDict = new WeakMap([
    [{},'1'],
    [{'bar':1},'2']  //in weakmap key cannot be primitive
]) //properties can be garbage collected to reduce memory usage

//! NON BLOCKING EVENT LOOP
//javascript is single thread but allows asynchronous operations
//callback functions
setTimeout(()=>{
console.log('.5 sec in the fututre')
setTimeout(()=>{
    console.log('.5 sec in the fututre')
    },500)
},500)

//deeply nested callback function: callback hell

//better way is Promise

const promise = new Promise((resolve,reject)=>{
//do something async here like call to an API

if (true){
    resolve('success');
} else{
    reject('failure')
}

})

//consumer of promise use then and catch

promise
.then(success=> console.log('yay!', success))
.catch(e=> console.log(e));

//async functions automatically return a promise

async function asyncFun(){
    try {
        const reult = await promise;
    } catch (error) {
        
    }
}

//MODULES TO SHARE CODE BETWEEN FILES

//import {helpFun,a,b} from './help';   //will work only in module

//MODULE BUNDLER
//e.g. Vite or webpack


//! PROTOTYPE CHAIN
//arrays,functions are all objects

const animal = {
    dna:123,
    legs:{
        front:2,back:2
    },
    sleep(){
        console.log('zzz');
    }
}

const p1 = Object.getPrototypeOf(animal);
console.log('Prototype of animal is ', p1);

const p2 = Object.getPrototypeOf(p1);
console.log('Prototype of animal-prototype is ', p2);
//when we reach the top of chain prototype is null

const dog = {
    bark(){
        console.log('woof');
    }
}

Object.setPrototypeOf(dog,animal);
//dog now has all property of animal
console.log('Prototype of dog is ',Object.getPrototypeOf(dog));

//! DESTRUCTURING

const cat = {
    name:'fido',
    age:4,
    meow(){
        console.log('meow')
    }
}

// const name = cat.name;
// const age = cat.age;

//OR with destructuring

const {name: catName, age} = cat;

//destructuring with arrays

const arr = ['foo','bar','baz'];

const [aa,bb,cc] = arr;
//OR
const [,,ccc] = arr; //equivalent to const c = arr[2]

//! SPREAD OPERATOR

const obj1 = {
    first:'a',
    second:'b',
    third:'c'
}

const obj2={
    fourth:'e',
    fifth:'f'
}

const full = Object.assign({},obj1,obj2);

const fullWithSpreadOperator = {...obj1,...obj2};

//! OPTIONAL CHAINING
full?.hello

// if object is null it will return undefined 
// without throwing an error
//can be used in array also or function with arguments
arr?.[0]
function foo(a,b){}
foo?.(1,2)

//! NULLISH COALESCING

//undefined and null are falsy values
// 0 zero and '' empty string are also falsy

const x = '';
const val = x || 'default'; //here val will be equal to default

const val1  = x ?? 'default';  //with ?? operator only null and undefined
//are considered falsy 
//thus ?? gives more predictable behavior than regular OR || operator

//! HIGHER ORDER FUNCTIONS
//remember functions are just objects
//which means they can be used as variables and
//passed along to other functions

//Two ways to define a function

//1. function declaration
function sayHi(message){
    return 'Said...'+ message;
}
//hosted at top means if function is declared later in file
//it can still be accessed at top of file

//2. Function Expression
const sayHii = function(message){
    return 'Said...'+ message;
} 
//this function will not be created until 
//it is referenced in the code
//expression functions can also be annonymous meaning
//they can be used as arguments to a function

//--DECLARATIONS FOR GLOBAL CODE
//--EXPRESSIONS FOR LOCAL CODE

//HIGHER ORDER FUNCTION is a function which either takes
//a function as an argument or return a function

function funWrapper(callback){
    callback('Called by a wrapper');
}

funWrapper(sayHi);
funWrapper(m => console.log(m));

//another type of higher order function is a 
//function which returns a new function

function funCreator(){
    return function(message){
        return 'Said...'+ message;
    }
}

const fn = funCreator();
fn('hello from higher order function returning a new function');

//! CLOSURES

//closures are functions that can access values 
//outside of their own curly braces

let b=3;
function impureFn(a){
return a+b;
}
//impure function which access values ouside of its scope
//this creates a closure and it is stored in heap memory
//whereas pure functions are used in stack memory

//closures require more memory and processing power

function outer(){
    let xx=1;
    function innner(){
        xx= xx+1;
    }
    return innner;
}

const incrementX = outer();
incrementX(); //xx=2
incrementX();//xx=3

//this helps in data encapsulation as it allows to change the
//value inside the function from anywhere else in the app


//! ARRAY TRICKS

const arrA = [1,2,3,3,3,4,5];
const arrB = Array(100).fill(0) //Array of 100 zero values
const arrC = Array(100).fill(0).map((_,i) => i+1)// array from 1,2,3...to 100
const arrD = [...Array(100).keys()];// same as above//keys return iterator on keys
//whereas keys() actually return keys from 0 to 99

const uniqueFromArray = [...new Set(arrA)];//return only unique values of arrA

//looping over an array
for(const val of arrA){

}
//looping over an array; getting index value also
for(const [i,val] of arrA.entries()){

}

//the above code is imperative
//however JS provides built in methods
//below is declarative code
const arrAA = [1,2,3,3,3,4,5,6];
arrAA.forEach(()=>{});
arrAA.map(()=>{});
arrAA.filter(()=>{});
arrAA.find(()=>{});
arrAA.findIndex(()=>{});
arrAA.reduce(()=>{});/// to take an entire array and calculate single val from it