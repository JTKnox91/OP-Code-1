describe('Array Module', function () {
// Disclaimer: Its usually bad style to not indent to contents of a function,
// but I am making an exception since most of the file is inside this function.

/* TODO:
  While not always neccesary, you may want to write some setup variables here.
  The 'beforeEach'/'afterEach' functions might be useful here.
*/

// _.first(array, [n])
// Returns the first element of an array. Passing n will return the first n elements of the array.
// Example(s):
//   _.first([5, 4, 3, 2, 1]);
//   => 5
//   _.first([5, 4, 3, 2, 1], 2);
//   => [5, 4]
describe("_.first", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.initial (array, [n])
// Returns everything but the last entry of the array. Especially useful on the arguments object.
// Pass n to exclude the last n elements from the result.
// Example(s):
//   _.initial([5, 4, 3, 2, 1]);
//   => [5, 4, 3, 2]
//   _.initial([5, 4, 3, 2, 1], 3);
//   => [5, 4]
describe("_.initial", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.last(array, [n]) 
// Returns the last element of an array. Passing n will return the last n elements of the array.
// Example(s):
//   _.last([5, 4, 3, 2, 1]);
//   => 1
//   _.last([5, 4, 3, 2, 1], 3);
//   => [3,2,1];
describe("_.last", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.rest(array, [index])
// Returns the rest of the elements in an array. Pass an index to return the values of the array from that index onward.
// Example(s):
//   _.rest([5, 4, 3, 2, 1]);
//   => [4, 3, 2, 1]
//     _.rest([5, 4, 3, 2, 1], 2);
//   => [2, 1]
describe("_.rest", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.compact(array) 
// Returns a copy of the array with all falsy values removed. In JavaScript, false, null, 0, "", undefined and NaN are all falsy.
// Example(s):
//   _.compact([0, 1, false, 2, '', 3]);
//   => [1, 2, 3]
describe("_.compact", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.flatten(array, [shallow]) 
// Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level.
// Example(s):
//   _.flatten([1, [2], [3, [[4]]]]);
//   => [1, 2, 3, 4];
//   _.flatten([1, [2], [3, [[4]]]], true);
//   => [1, 2, 3, [[4]]];
describe("_.flatten", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.without(array, *values) 
// Returns a copy of the array with all instances of the values removed.
// Examples(s):
//   _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
//   => [2, 3, 4]
describe("_.without", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.union(*arrays) 
// Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.
// Examples(s):
//   _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
//   => [1, 2, 3, 101, 10]
describe("_.union", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.intersection(*arrays) 
// Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays.
// Examples(s):
//   _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
//   => [1, 2]
describe("_.intersection", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.difference(array, *others) 
// Similar to without, but returns the values from array that are not present in the other arrays.
// Examples(s):
//   _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
//   => [1, 3, 4]
describe("_.difference", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.uniq(array, [isSorted], [iteratee])
// Produces a duplicate-free version of the array, using === to test object equality.
// In particular only the first occurence of each value is kept. If you know in advance that the array is sorted,
// passing `true` for `isSorted` will run a much faster algorithm. If you want to compute
// unique items based on a transformation, pass an iteratee function.
// Example(s):
//   _.uniq([1, 2, 1, 4, 1, 3]);
//   => [1, 2, 4, 3]
//   var nearestInteger = function (x) {return Math.round(x);}
//   _.uniq([1.2, 1.3, 1.6, 2, 3], true, nearestInteger);
//   => [1.2, 1.6, 3];
describe("_.uniq", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.zip(*arrays) 
// Merges together the values of each of the arrays with the values at the corresponding position.
// Useful when you have separate data sources that are coordinated through matching array indexes.
// Example(s):
//   _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
//   => [["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]
describe("_.zip", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.unzip(array) 
// The opposite of zip. Given an array of arrays, returns a series of new arrays,
// the first of which contains all of the first elements in the input arrays,
// the second of which contains all of the second elements, and so on.
// Example(s):
//   _.unzip([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);
//   => [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
describe("_.unzip", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.findIndex(array, predicate) 
// Similar to `Array.indexOf`, returns the first index where the predicate truth test passes; otherwise returns -1.
// Example(s):
//   _.findIndex([4, 6, 8, 12], isPrime);
//   => -1 // not found
//   _.findIndex([4, 6, 7, 12], isPrime);
//   => 2
describe("_.findIndex", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

// _.range([start], stop, [step]) 
// A function to create flexibly-numbered lists of integers, handy for each and map loops.
// `start`, if omitted, defaults to 0; `step` defaults to 1. Returns a list of integers
// from start (inclusive) to stop (exclusive), incremented (or decremented) by step, exclusive.
// Note that ranges that stop before they start are considered to be zero-length instead of negative.
// If you'd like a negative range, use a negative step.
// Example(s):
//   _.range(10);
//   => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   _.range(1, 11);
//   => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   _.range(0, 30, 5);
//   => [0, 5, 10, 15, 20, 25]
//   _.range(0, -10, -1);
//   => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
//   _.range(0);
//   => []
describe("_.range", function () {
  /* TODO */
  it("needs you to write tests about it", function () {
    expect(false).toBe(true);
  });
}); 

});
