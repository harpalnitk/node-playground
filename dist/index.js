#!/usr/bin/env node
const slugify = (str) => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
console.log(slugify('Hello World'));
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
console.log(shuffleArray([1, 2, 3, 4, 5]));
const snakeToCamel = (s) => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substring(1));
console.log(snakeToCamel('foo_bar'));
const randomInteger = () => new Date().getTime();
console.log(randomInteger());
const randomNumberString = () => new Date().getTime() + Math.random().toString(36).slice(2);
console.log(randomNumberString());
const numberToLetter = (value) => String.fromCharCode(94 + value);
console.log(numberToLetter(4));
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;
console.log(randomHexColor());
const removeTrailingSlash = (value) => value && value.charAt(value.length - 1) === '/' ? value.slice(0, -1) : value;
console.log(removeTrailingSlash('foo-bar/'));
const randomItem = (arr) => arr[(Math.random() * arr.length) | 0];
console.log(randomItem([1, 2, 3, 4, 5]));
const decapitalize = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
console.log(decapitalize('Hello world'));
//# sourceMappingURL=index.js.map