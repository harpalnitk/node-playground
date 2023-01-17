First you need to install typescript

npm install -g typescript
Create one file helloworld.ts

function hello(person){
   return "Hello, " + person;
}
let user = "Aamod Tiwari";
const result = hello(user);
console.log("Result", result)
Open command prompt and type the following command

tsc helloworld.ts

This converts typescript file to javascript file 
Again run the command >node filename.js to execute javascript file

node helloworld.js
Result will display on console

## What is javascript
high level,single threaded, garbage collected,interpreted (It is interpreted line by line as opposed to other languages like C which are compiled ahead of time), JIT compiled, prototype based, multi paradigm, dynamic language with a non blocking event loop

it is a interpreted scripting language but tools like V8 engine and chromium convert it into JIT compiler to covert it intoa machine code to be executed at run time

javascript also supports classes and inheritance for OOP
although it is single threaded it can work asynchronously with the Promise API

ecmascript is standard implementation of javascript

V8 engine in browser takes js code and convert it into machine code by JIT (Just in time compilation)

It is a dynamically typed language meaning no data type annotations are necessary

7 primitive datatypes
string
number
bigint
boolean
undefined (without assignment of any value to variable)
symbol
null (empty value)

any value which is not primitive will inherit from the object class

variable = new Object();
