#!/usr/bin/env node


const slugify = (str: string): string => str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
console.log(slugify('Hello World'));// -> hello-world



const shuffleArray = <T>(arr: T[]): T[] => arr.sort(() => Math.random() - 0.5);

console.log(shuffleArray(<number[]>[1, 2, 3, 4, 5])); // -> [ 4, 5, 2, 1, 3 ]

const snakeToCamel = (s: string): string => s.toLowerCase().replace(/(_\w)/g, (w) => w.toUpperCase().substring(1));

console.log(snakeToCamel('foo_bar')); // -> fooBar

const randomInteger = (): number => new Date().getTime();

console.log(randomInteger()); // -> 1646617367345

const randomNumberString = (): string => new Date().getTime() + Math.random().toString(36).slice(2);

console.log(randomNumberString()); // -> 1646617484381wml196a8iso

const numberToLetter = (value: number): string => String.fromCharCode(94 + value);

console.log(numberToLetter(4)); // -> b

const randomHexColor = (): string => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`;

console.log(randomHexColor()); // -> #dc7c40

const removeTrailingSlash = (value: string): string => value && value.charAt(value.length - 1) === '/' ? value.slice(0, -1) : value;

console.log(removeTrailingSlash('foo-bar/')); // -> foo-bar

const randomItem = <T>(arr: T[]): T => arr[(Math.random() * arr.length) | 0];

console.log(randomItem(<number[]>[1, 2, 3, 4, 5])); // -> 4
const decapitalize = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

console.log(decapitalize('Hello world')); // -> hello world