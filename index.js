#!/usr/bin/env node
var slugify = function (str) { return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''); };
console.log(slugify('Hello World')); // -> hello-world
var shuffleArray = function (arr) { return arr.sort(function () { return Math.random() - 0.5; }); };
console.log(shuffleArray([1, 2, 3, 4, 5])); // -> [ 4, 5, 2, 1, 3 ]
