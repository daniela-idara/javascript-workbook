'use strict';

const assert = require('assert');

const array = [2, 4, 6, 8];

function map(arr, callback) {
  let newArray = [];
  for (let i=0; i<arr.length; i++){
    let elements = callback(arr[i]);
    newArray.push(elements);
  }
  return newArray;
}

const checkArray = [10,20,30];
function reduce(arr, callback, accumulator) {
  accumulator = accumulator || 0;
  for (let index=0; index<arr.length; index++){
    if (typeof arr[index] == 'number') {
      accumulator = accumulator + arr[index];
    } else if (typeof arr[index] == 'object') {
      for (let i in arr[index]){
        accumulator = accumulator + arr[index][i];
      }
    }
    callback(accumulator, arr[index], index, arr);
  }
  return accumulator;
}

const sum = reduce(checkArray, function (a, b) {
  return a + b;
});

console.log(sum);

function filter(arr, callback) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let element = callback(arr[i]);
    if (element === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], (acc, num) => {
        return acc + num;
      });
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}