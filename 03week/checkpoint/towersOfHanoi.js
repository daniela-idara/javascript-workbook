'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
  let startArr = stacks[startStack];
  let endArr = stacks[endStack];

  endArr.push(startArr.pop());
}


function isLegal(startStack, endStack) {
  let startArr = stacks[startStack];
  let endArr = stacks[endStack];

  if (startArr.length === 0){
    console.log ("choose from a valid stack");
  }

  else if(startStack === endStack){
    console.log("Not a valid move");
    return false;
  }

  else if (startArr[startArr.length - 1] > endArr[endArr.length - 1]){
    console.log("Not a valid move");
    return false;
  }

  else{
    return true;
  }
}

function checkForWin() {

  let win = "4,3,2,1";
  let bString = stacks.b.toString();
  let cString = stacks.c.toString();
  
  if (bString === win){
    return true;
  }

  else if(cString === win){
    return true;
  }

  else{
    return false;
  }

}


function towersOfHanoi(startStack, endStack) {

  if(isLegal(startStack, endStack)){
    movePiece(startStack,endStack);
  }
  checkForWin();

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3],
        b: [1],
        c: [2]
      };
      assert.equal(isLegal('a', 'b'), false);
      assert.equal(isLegal('a', 'c'), false);
      assert.equal(isLegal('c', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
      stacks = { a: [4,3,2,1], b: [], c:[]};
      assert.equal(checkForWin(), false);
      stacks = { a: [], b: [], c:[4,3,2,1]};
      assert.equal(checkForWin(), true);
    });
  });

} else {

  getPrompt();

}

