const assert = require('chai').assert;
const breedDetailsFromFile = require('../asyncBreeds');

describe('#breedDetailsFromFile', () => {

  it('provides, via callback, breed details for the Balinese breed', (done) => {
    breedDetailsFromFile('Balinese', (balinese) => {
      const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner.";
      assert.equal(expectedDesc, balinese);
      done();
    });
  });

  it('provides, via callback, undefined for a breed that does not exist', (done) => {
    breedDetailsFromFile('Saphire', (desc) => {
      assert.equal(undefined, desc);
      done();
    });
  });
});



// breedDetailsFromFile('Bombay', (Bombay) => {
//   console.log('Return Value: ', Bombay);// => will NOT print out details, instead we will see undefined!
// });