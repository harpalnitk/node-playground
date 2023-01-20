// vitest will automatically detect any File 
// ending with extension .test.js  and run it

import {expect, test} from 'vitest';

import {sum, binarySearch, } from './algorithms.js';

test('Test 1: Cumulative Sum of an Array', ()=>{
   expect(sum([1,3,5,7])).toBe(16);
   expect(sum([-2,-4,-8])).toBe(-14);
});

test('Test 2: Binary Search', ()=>{
    expect(binarySearch(['a','b','c','x','y','z'],'z')).toBe(5);
    expect(binarySearch(['a','b','c','x','y','z'],'c')).toBe(2);
 });