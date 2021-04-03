var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');
var octalConverter = require ("../OctalConverter");

describe('givenTwoIntegersWhenSumThenSuccess', function () {
  it('sum(1,2) = 3', function() {
    //Given
    var a = 1;
    var b = 2;
    var expectedResult = 3;

    //When
    var actualResult = javascriptFunctions.sum(a,b);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenOneInOctThenSuccess', function () {
  it('oct(1) = 1', function() {
    //Given
    var a = 1;
    var expectedResult = 1;

    //When
    var actualResult = octalConverter.oct(a);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenTwoInOctThenSuccess', function () {
  it('oct(2) = 2', function() {
    //Given
    var a = 2;
    var expectedResult = 2;

    //When
    var actualResult = octalConverter.oct(a);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenEightInOctThenSuccess', function () {
  it('oct(8) = 10', function() {
    //Given
    var a = 8;
    var expectedResult = 10;

    //When
    var actualResult = octalConverter.oct(a);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenNineFiveInOctThenSuccess', function () {
  it('oct(95) = 137', function() {
    //Given
    var a = 95;
    var expectedResult = 137;

    //When
    var actualResult = octalConverter.oct(a);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})

describe('givenTwentyFortyEightInOctThenSuccess', function () {
  it('oct(2048) = 4000', function() {
    //Given
    var a = 2048;
    var expectedResult = 4000;

    //When
    var actualResult = octalConverter.oct(a);

    //Then
    assert.strictEqual(expectedResult, actualResult);
  })
})