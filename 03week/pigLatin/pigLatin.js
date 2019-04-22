'use strict';
/* 
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 */

function pigLatin(word) {
  let newWord = textWord.value;
  word = newWord.trim().toLowerCase();
  let vowels = /[aeiou]/;

  if (word[0].match(vowels)){
    document.getElementById('translation').innerHTML = word + 'yay';
  }

  else {
    let vowelIndice = word.indexOf(word.match(vowels)[0]);
    word = word.substr(vowelIndice) + word.substr(0, vowelIndice);
    document.getElementById('translation').innerHTML = word + 'ay';
  }
  
  
}

/* 
function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('Should separate two words and return them together', () => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
    }); 
  });
} else {

  getPrompt();

}
 */