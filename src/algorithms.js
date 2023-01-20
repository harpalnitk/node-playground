//TO RUN THIS FILE > node ./src/algorithms.js

//! ALGORITHMS
//0 in the last is the starting value
const arrA = [1,3,5,7];

const sumWithReduceFunction = arrA.reduce((acc,cur)=> acc+cur,0);
//OR
export function sum(arr){
    let total = 0;
    for(let i=0;i<arr.length;i++){
        total +=arr[i]
    }
    return total;
}

console.log('Sum is:', sum(arrA));

//! Binary Search
const arrSearch = ['a','b','c','x','y','z'];
export function search(arr,target){
    for(let i=0; i<arr.length;i++){
        if(arr[i] === target) return i;
    }

}
console.log(`Simple search for b in arrSearch:`,search(arrSearch,'b'));

export function binarySearch(arr,target,start=0,end=arr.length-1){
    console.log(`Start: ${start} End: ${end}`);
    if(start > end){
        console.log(`Not Found`);
        return -1;
    }

    const middle = Math.floor((start+end)/2)

    if(arr[middle] === target){
        console.log(`${target} found at index ${middle}`);
        return middle;
    }
    if(arr[middle] > target){
        return search(arr,target, start, middle-1);
    }
    if(arr[middle] < target){
        return search(arr,target, middle+1, end);
    }
}

console.log(`Binary search for b in arrSearch:`,binarySearch(arrSearch,'x'));


//! Design a Least Recently Used Cache
//an element that is least used is removed from a fixed lenth
//object when new elements are added

//We are designing custom data structure
//weher we will be maintaining State and functionality



//classes are syntatic sugars for javascript object prototypes
//i.e. we can defina a function and add methods to its prottoypes

// const LRU = function(capacity){}
// LRU.prototype.getItem = function(key){}

//but this code is harder to read and understand so we use classes

class LRU{
constructor(capacity){
    this.capacity = capacity;
    //we are using map and not a plain object
    //because map maintains the order of inserted
    //key value pairs
    this.cache = new Map();
}

getItem(key){
    const item = this.cache.get(key);
    //Map keeps track of insertion order,
    //this will referesh the item
    if(item){
        this.cache.delete(key);
        this.cache.set(key,item);
    }
    return item;
}

putItem(key,val){
    //delete to refresh the insertion order
    //also ensures we have unique items in the map
if(this.cache.has(key)){
    this.cache.delete(key);
}
//evict the oldest item in the cache
else if(this.cache.size == this.capacity){
this.cache.delete(this.oldestItem);
}
this.cache.set(key,val);
}
get oldestItem(){
    //keys is a method of map which returns all keys
    //next will call the first one which will be the oldest one
    return this.cache.keys().next().value;
}
}

const cacheLRU = new LRU(5);
cacheLRU.putItem('a',1);
cacheLRU.getItem('a');