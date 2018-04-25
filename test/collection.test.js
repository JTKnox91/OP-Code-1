// Reference(s):
//   `describe`,`it`,`beforeEach`, etc... - https://mochajs.org/
//   `expect` - https://github.com/mjackson/expect/tree/4ea42d5fdf542b307a5e92b06df1ab56de586845

describe("Utility Module", function () {

  // _.identity(value)
  // Returns the same value that is used as the argument. In math: f(x) = x
  // This function looks useless, but is used throughout Underscore as a default iteratee.
  describe("_.identity", function () {
    it("returns its input, unchanged", function () {
      var input = {a:1,b:"2",c:[1,2,3]};
      var clone = {a:1,b:"2",c:[1,2,3]};
      var output = _.identity(input);
      expect(output).toBe(input);
      expect(output).toEqual(clone);
    });
  });
});  //End of Utility Module

describe("Collection Module", function () {
// Disclaimer: Its usually bad style to not indent to contents of a function,
// but I am making an exception since most of the file is inside this function.

//Helper functions
var mutateTest = function (methodName) {
  it("does not mutate its input", function () {
    var collection = {a:1,b:"2",c:[1,2,3]};
    var clone = {a:1,b:"2",c:[1,2,3]};
    var secondArgLibrary = {
      each: _.identity, map: _.identity, reduce: _.identity, reduceRight: _.identity, sortBy: _.identity,
      every: alwaysTrue, filter: alwaysTrue, find: alwaysFalse, reject: alwaysFalse, some: alwaysFalse,
      contains: {}, findWhere: {}, where: {}, pluck: "",
      max: undefined, min: undefined, isEmpty: undefined,
    };
    var secondArg = secondArgLibrary[methodName]
    _[methodName](collection, secondArg);
    expect(collection).toEqual(clone);
  });
};
var alwaysFalse = function () {return false};
var alwaysTrue = function () {return false};
var isEven = function (n) {return n%2 === 0;}
var isOdd = function (n) {return n%2 !== 0;}


// _.each(collection, iteratee)
// Iterates over a collection of elements, yielding each in turn to an iteratee function. Each
// invocation of iteratee is called with three arguments: (element, index, collection). If collection is a
// JavaScript object, iteratee's arguments will be (value, key, collection).
// Example(s):
//   _.each([1, 2, 3], alert);
//   => alerts 1, then 2, then 3
//   _.each({one: 1, two: 2, three: 3}, alert);
//   => also alerts 1, then 2, then 3
describe("_.each", function () {
  mutateTest("each");

  //setup
  var actual;
  beforeEach(function () {
    actual = [];
  });
  var pushToActual = function (value, key, collection) {
    actual.push([value, key, collection]);
  }

  it("works on arrays", function () {
    var input = [1,2,3];
    var expected = [
      [1, 0, [1,2,3]],
      [2, 1, [1,2,3]],
      [3, 2, [1,2,3]],
    ];
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
  });


  it("works regular objects", function () {
    var input = {"a":1,"b":2,"c":3};
    var expected = [
      [1, "a", {"a":1,"b":2,"c":3}],
      [2, "b", {"a":1,"b":2,"c":3}],
      [3, "c", {"a":1,"b":2,"c":3}],
    ];
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
  });

  it("works on array-likes", function () {
    var input = {"0":1,"1":2,"2":3,"length":3};
    var expected = [
      [1, 0, {"0":1,"1":2,"2":3,"length":3}],
      [2, 1, {"0":1,"1":2,"2":3,"length":3}],
      [3, 2, {"0":1,"1":2,"2":3,"length":3}],
    ];
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
  });

  it("does nothing with empty collections", function () {
    var input;
    var expected = [];
    input = [];
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
    input = {};
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
    input = {length:0};
    _.each(input, pushToActual);
    expect(actual).toEqual(expected);
  });
});


// _.map(collection, iteratee)
// Produces a new array of values by mapping each value in collection through a transformation function (iteratee).
// The iteratee is passed three arguments: the value, then the index (or key) of the iteration,
// and finally a reference to the entire collection.
// Example(s):
//   _.map([1, 2, 3], function(num){ return num * 3; });
//   => [3, 6, 9]
//   _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
//   => [3, 6, 9]
//   _.map([[1, 2], [3, 4]], _.first);
//   => [1, 3]
describe("_.map", function () {
  mutateTest("map");

  //setup
  var argsToArrayPlus1 = function (value, key, collection) {
    return [value+1, key, collection];
  }

  it("works on arrays", function () {
    var input = [1,2,3];
    var expected = [
      [2, 0, [1,2,3]],
      [3, 1, [1,2,3]],
      [4, 2, [1,2,3]],
    ];
    expect(_.map(input, argsToArrayPlus1)).toEqual(expected);
  });


  it("works regular objects", function () {
    var input = {"a":1,"b":2,"c":3};
    var expected = [
      [2, "a", {"a":1,"b":2,"c":3}],
      [3, "b", {"a":1,"b":2,"c":3}],
      [4, "c", {"a":1,"b":2,"c":3}],
    ];
    expect(_.map(input, argsToArrayPlus1)).toEqual(expected);
  });

  it("works on array-likes", function () {
    var input = {"0":1,"1":2,"2":3,"length":3};
    var expected = [
      [2, 0, {"0":1,"1":2,"2":3,"length":3}],
      [3, 1, {"0":1,"1":2,"2":3,"length":3}],
      [4, 2, {"0":1,"1":2,"2":3,"length":3}],
    ];
    expect(_.map(input, argsToArrayPlus1)).toEqual(expected);
  });

  it("returns empty array for empty collections", function () {
    var expected = [];
    expect(_.map([], argsToArrayPlus1)).toEqual(expected);
    expect(_.map({}, argsToArrayPlus1)).toEqual(expected);
    expect(_.map({"length":0}, argsToArrayPlus1)).toEqual(expected);
  });
});


// _.reduce(collection, iteratee, [initial])
// Reduce boils down a collection of values into a single value. `initial` is the initial state of the reduction,
// and each successive step of it should be returned by iteratee. The iteratee is passed four arguments:
//   1) the current total (starting with `initial` on the first iteration),
//   2) the value  of the iteration, and a reference to the entire collection.
//   3) the index (or key)
//   4) a reference to the original collection
// If no `intial` is passed to the initial invocation of reduce,the iteratee is not invoked on the first element of the collection,
// and the first element is instead passed as the `initial` in the invocation of the iteratee on the next element in the collection.
// Example(s):
//   _.reduce([2, 3], function(sum, n){ return sum + num; }, 1);
//   => 6
//   _.reduce([0, 1, 2], function(product, n){ return product * num; });
//   => 0
describe("_.reduce", function () {
  mutateTest("reduce");

  //setup
  var input = {a:1,b:2,c:3};
  var multiply = function (prod, n) {
    return prod * n;
  };

  it("runs an iteratee on all its elements", function () {
    expect(_.reduce(input, multiply)).toBe(6);
  });

  it("can have a start value set", function () {
    expect(_.reduce(input, multiply, 0)).toBe(0);
  });

  it("returns its start value for an empty collection", function () {
    expect(_.reduce([], multiply, 7)).toBe(7);
  });

  it("passes {total, value, key, collection} to the iteratee", function () {
    var actualArgs;
    var setArgs = function (total, value, key, collection) {
      actualArgs = {t:total, v:value, k:index, c:collection};
      return true;
    };
    _.reduce({a:1, length:1}, setArgs, 42);
    expect(actualArgs).toEqual({t:42, v:1, k:"a", c:{a:1, length:1}});
  });
});


// _.reduceRight(collection, iteratee, [initial])
// The "right to left" version of reduce.
// If no `intial` is passed to the initial invocation of reduce, the iteratee is not invoked on the last element of the collection,
// and the last element is instead passed as the `initial` in the invocation of the iteratee on the second to last element in the collection.
// Example(s):
//   var collection = [[0, 1], [2, 3], [4, 5]];
//   var flat = _.reduceRight(collection, function(a, b) { return a.concat(b); }, []);
//   => [4, 5, 2, 3, 0, 1]
describe("_.reduceRight", function () {
    mutateTest("reduceRight");

    it("should iterate in reverse", function () {
      var input = [1,2,3];
      var pusher = function (pushed, nextElement) {
        arr.push(element);
        return arr;
      };
      //note the start value is an empty array
      expect(_.reduceRight(input, pusher, [])).toEqual([3,2,1]);
    });
});


// _.find(collection, predicate)
// Looks through each value in the collection, returning the first one that passes a truth test (predicate),
// or undefined if no value passes the test. The function returns as soon as it finds an acceptable element,
// and doesn't traverse the entire collection.
// Example(s):
//   var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => 2
describe("_.find", function () {
  mutateTest("find");

  it("returns the first element to pass the truth test", function () {
    expect(_.find([1,2,3,4], isEven)).toBe(2);
  });

  it("returns early after finding its target", function () {
    var runCount = 0;
    var isEvenWithCounter = function (n) {runCount++; return isEven(n);}
    _.find([1,2,3,4], isEven)
    expect(runCount).toBe(2);
  });

  it("returns `undefined` if it cannot find a target", function () {
    expect(_.find([1,3], isEven)).toBe(undefined);
  });

  it("handles regular objects, or array-likes", function () {
    expect(_.find({a:1, b:2, c:3}, isEven)).toBe(2);
    expect(_.find({a:1, c:3, length:2}, isEven)).toBe(undefined);
  });
});


// _.filter(collection, predicate)
// Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
// Example(s):
//   var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => [2, 4, 6]
describe("_.filter", function () {
  mutateTest("filter", alwaysTrue);

  it("returns an array of elements that pass a truth test", function () {
    expect(_.filter({a:1, b:2, c:3, d:4}, isEven)).toEqual([2,4]);
  });

  it("returns an empty array if no elements pass the truth test", function () {
    expect(_.filter({b:2, d:4}, isOdd)).toEqual([]);
  });
});


// _.where(collection, properties)
// Looks through each value in the collection, returning an array
// of all the values that contain all of the key-value pairs collectioned in properties.
// Example(s):
//   _.where(collectionOfPlays, {author: "Shakespeare", year: 1611});
//   => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//       {title: "The Tempest", author: "Shakespeare", year: 1611}]
describe("_.where.", function () {
  mutateTest("where", {});

  it("returns an array of objects that match the input properties", function () {
    var collection = [
      {a:1, b:2, c:3},
      {a:2, b:2, c:3},
      {a:3, b:3, c:3},
      {a:4, b:2, c:4},
    ];
    var properties = {b:2,c:3}
    var expected = [
      {a:1, b:2, c:3},
      {a:2, b:2, c:3},
    ];
    expect(_.where(collection, properties)).toEqual(expected);
  });

  it("always treats `properties` like a regular object", function () {
    expect(_.where([[],[1],[2],[3,4]], {length:1})).toEqual([[1],[2]]);
  });

  it("handles primitive values gracefully", function () {
    expect(_.where([1,true,{a:1}], {a:1})).toEqual([{a:1}]);
  });

  it("acts like identity function if `properties` has no properties", function () {
    expect(_.where([1,true,{a:1}], {})).toEqual([1,true,{a:1}]);
    expect(_.where([0,false,{a:0}], 2)).toEqual([0,false,{a:0}]);
  });
});


// _.findWhere(collection, properties)
// Looks through the collection and returns the first value that matches all of the key-value pairs collectioned in properties.
// If no match is found, or if collection is empty, undefined will be returned.
// Example(s):
//   _.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
//   => {year: 1918, newsroom: "The New York Times",
//     reason: "For its public service in publishing in full so many official reports,
//     documents and speeches by European statesmen relating to the progress and
//     conduct of the war."}
describe("_.findWhere", function () {
  mutateTest("findWhere", {});

  it("returns the first element to match the input properties", function () {
    var collection = [
      {a:1, b:2, c:3},
      {a:2, b:2, c:3},
      {a:3, b:3, c:3},
      {a:4, b:2, c:4},
    ];
    var properties = {b:2,c:3}
    var expected = {a:1, b:2, c:3};
    expect(_.findWhere(collection, properties)).toEqual(expected);
  });

  it("always treats `properties` like a regular object", function () {
    expect(_.findWhere([[],[1],[2],[3,4]], {length:1})).toEqual([1]);
  });

  it("handles primitive values gracefully", function () {
    expect(_.findWhere([1,true,{a:1}], {a:1})).toEqual([{a:1}]);
  });

  it("returns `undefined` if no match is found", function () {
    expect(_.findWhere([{a:1},{a:2}], {a:3})).toBe(undefined);
  });

  it("returns `undefined` if the collection is empty", function () {
    expect(_.findWhere({}, {a:3})).toBe(undefined);
  });
});


// _.reject(collection, predicate)
// Returns the values in collection without the elements that the truth test (predicate) passes. The opposite of filter.
// Example(s):
//   var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => [1, 3, 5]
describe("_.reject", function () {
  mutateTest("reject");

  it("returns an array of elements that pass a truth test", function () {
    expect(_.reject({a:1, b:2, c:3, d:4}, isOdd)).toEqual([2,4]);
  });

  it("returns an empty array if no elements pass the truth test", function () {
    expect(_.reject({b:2, d:4}, isEven)).toEqual([]);
  });
});


// _.every(collection, [predicate]);
// Returns true if all of the values in the collection pass the predicate truth test.
// Short-circuits and stops traversing the collection if a false element is found.
// Example(s):
//   _.every([2, 4, 6], function(num) { return num % 2 == 0; });
//   => true
//   _.every([0, 1, 2]) //remember 0 is "falsey"
//   => false
describe("_.every", function () {
  mutateTest("every", alwaysTrue);

  it("returns true if every value in the collection passes a truth test", function () {
    expect(_.every([2,4,6,8], isEven)).toBe(true);
  });

  it("returns false if any values in the collection fails a truth test", function () {
    expect(_.every([2,4,5,6], isEven)).toBe(false);
  });

  it("returns early after a failed predicate", function () {
    var runCount = 0;
    var isEvenWithCounter = function (n) {runCount++; return isEven(n);}
    _.every([2,3,4,6], isEven)
    expect(runCount).toBe(2);
  });

  it("returns true for an empty collection", function () {
    // in other words, it returns true if the predicate never fails,
    // and the predicate can't fail if it nevery tries.
    expect(_.every({}, isEven)).toBe(true);
  });

  it("treats array-likes as arrays", function () {
    expect(_.every({length:0}, isEven)).toBe(true);
  });
});


// _.some(collection, [predicate])
// Returns true if any of the values in the collection pass the predicate truth test.
// Short-circuits and stops traversing the collection if a true element is found.
// Example(s):
//   _.some([null, 0, 'yes', false]);
//   => true
describe("_.some", function () {
  mutateTest("some", alwaysTrue);

  it("returns true if any value in the collection passes a truth test", function () {
    expect(_.some([1,3,5,6], isEven)).toBe(true);
  });

  it("returns false if every value in the collection fails a truth test", function () {
    expect(_.some([1,3,5,7], isEven)).toBe(false);
  });

  it("returns early after a passed predicate", function () {
    var runCount = 0;
    var isOddWithCounter = function (n) {runCount++; return isOdd(n);}
    _.some([2,3,4,6], isOdd)
    expect(runCount).toBe(2);
  });

  it("returns false for an empty collection", function () {
    // in other words, it returns false if the predicate never passes,
    // and the predicate can't pass if it never runs.
    expect(_.some({}, isEven)).toBe(false);
  });

  it("treats array-likes as arrays", function () {
    expect(_.some({length:0}, isEven)).toBe(false);
  });
});


// _.contains(collection, value)
// Returns true if the value is present in the collection.
// Examples(s):
//   _.contains([1, 2, 3], 3);
//   => true
describe("_.contains", function () {
  mutateTest("contains", null);

  it("returns true if any value in the collection matches `value`", function () {
    expect(_.contains([1,2,3,4], 3)).toBe(true);
  });

  it("returns false if no value in the collection matches `value`", function () {
    expect(_.contains([1,2,3,4], 5)).toBe(false);
  });

  it("uses strict equality for all data types", function () {
    expect(_.contains([1,2,3], "1")).toBe(false, "'1' !== 1");
    expect(_.contains([undefined,2,3], null)).toBe(false, "'undefined' !== null");
    var three = [3];
    var valueCollection = {
      a:1, b:2, c:[3],
    };
    var referenceCollection = {
      a:1, b:2, c:three,
    };
    expect(_.contains(valueCollection, three)).toBe(false, "[3] is NOT === (by reference) [3]");
    expect(_.contains(referenceCollection, three)).toBe(true, "[3] is === (by reference) to [3]");
  });

  it("returns false for an empty collection", function () {
    // in other words, it returns false `value` is never found,
    // and `value` cannot be found if method does not look.
    expect(_.contains({}, 1)).toBe(false);
  });

  it("treats array-liks as arrays", function () {
    expect(_.contains({"0":"A", length:1}, 1)).toBe(false);
  });
});


// _.pluck(collection, propertyName)
// A convenient version of what is perhaps the most common use-case for _.map: extracting a collection of property values.
// Example(s):
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// Example(s):
//   _.pluck(stooges, 'name');
//   => ["moe", "larry", "curly"]
describe("_.pluck", function () {
  mutateTest("pluck", "");

  it("returns an array of values at `propertyName`", function () {
    var collection = [{name: "moe", age: 40}, {name: "larry", age: 50}, {name: "curly", age: 60}];
    expect(_.pluck(collection, "name")).toEqual(["moe", "larry", "curly"]);
  });

  it("maintains the collection size, using undefined when needed", function () {
    var collection = [{name: "moe", age: 40}, {age: 50}, {name: "curly", age: 60}];
    expect(_.pluck(collection, "name")).toEqual(["moe", undefined, "curly"]);
  });

  it("handles arrays, regular objects and array-likes", function () {
    var collection = {a:[1,2,3], b:{}, c:{length:0}};
    expect(_.pluck(collection, "length")).toEqual([3, undefined, 0]);
  });
});


// _.max(collection, [iteratee])
// Returns the maximum value in collection. If an iteratee function is provided,
// it will be used on each value to generate the criterion by which the value is ranked.
// Number.NEGATIVE_INFINITY is returned if collection is empty. Non-numerical values in collection will be ignored.
// Example(s):
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.max(stooges, function(stooge){ return stooge.age; });
//   => {name: 'curly', age: 60};
describe("_.max", function () {
  mutateTest("max");

  it("returns the highest value in the collection based on a the return of an iteratee function", function () {
    var collection = [{name: "moe", age: 40}, {name: "larry", age: 50}, {name: "curly", age: 60}];
    expect(_.max(collection, function(stooge){ return stooge.age; })).toEqual({name: "curly", age: 60});
  });

  it("ignores non number values", function () {
    expect(_.max([-2, "1", "2", [], null, true]), _.identity).toBe(-2);
  });

  it("defaults to the identity function if no iteratee is supplied", function () {
    expect(_.max([0, "1", "2"])).toBe(0);
  });

  it("returns NEGATIVE_INFINITY for empty collections", function () {
    expect(_.max({})).toBe(Number.NEGATIVE_INFINITY);
  });
});


// min_.min(collection, [iteratee])
// Returns the minimum value in collection. The opposite of _.max.
// Number.POSITIVE_INFINITY is returned if collection is empty. Non-numerical values in collection will be ignored.
// Example(s):
//   var numbers = [10, 5, 100, 2, 1000];
//   _.min(numbers);
//   => 2
describe("_.min", function () {
  mutateTest("min");

  it("returns the lowest value in the collection based on a the return of an iteratee function", function () {
    var collection = [{name: "moe", age: 40}, {name: "larry", age: 50}, {name: "curly", age: 60}];
    expect(_.min(collection, function(stooge){ return stooge.age; })).toEqual({name: "moe", age: 40});
  });

  it("ignores non number values", function () {
    expect(_.min([5, "1", "2", [], null, false]), _.identity).toBe(5);
  });

  it("defaults to the identity function if no iteratee is supplied", function () {
    expect(_.min(["1", "2", 3])).toBe(3);
  });

  it("returns POSITIVE_INFINITY for empty collections", function () {
    expect(_.min({})).toBe(Number.POSITIVE_INFINITY);
  });
});


// _.sortBy(collection, iteratee)
// Returns a sorted copy of collection, ranked in ascending order by the results of running
// each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).
// Example(s):
//   _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
//   => [5, 4, 6, 3, 1, 2]
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.sortBy(stooges, 'name');
//   => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
describe("_.sortBy", function () {
  mutateTest("sortBy");

  it("returns a (shallow) sorted copy of collection, based on a the return of an iteratee function", function () {
    var stooges = [{name: "moe", age: 40}, {name: "larry", age: 50}, {name: "curly", age: 60}];
    var sorted = [{name: "curly", age: 60}, {name: "larry", age: 50}, {name: "moe", age: 40}];
    var getName = function (arr) {return arr.length;};
    expect(_.sortBy(stooges, getName)).toEqual(sorted);
  });

  it("returns a (shallow) sorted copy of collection, based on a string propertyName", function () {
    var stooges = [{name: "moe", age: 40}, {name: "larry", age: 50}, {name: "curly", age: 60}];
    var sorted = [{name: "curly", age: 60}, {name: "larry", age: 50}, {name: "moe", age: 40}];
    expect(_.sortBy(stooges, "name")).toEqual(sorted);
  });
});


// _.indexBy(collection, iteratee)
// Given a list, and an iteratee function that returns a key for each element in the list
// (or a property name), returns an object with an index of each item.
// Example(s):
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.indexBy(stooges, 'age');
//   => {
//     "40": {name: 'moe', age: 40},
//     "50": {name: 'larry', age: 50},
//     "60": {name: 'curly', age: 60}
//   }
describe("_.indexBy", function () {
  var stooges = [
    {name: 'moe', age: 40},
    {name: 'larry', age: 50},
    {name: 'curly', age: 60}];
  var indexed = {
    "40": {name: 'moe', age: 40},
    "50": {name: 'larry', age: 50},
    "60": {name: 'curly', age: 60}
  };
  it("returns a key/value store, based on a the return of an iteratee function", function () {
    var getAge = function (obj) {return obj.age;}
    expect(_.indexBy(stooges), getAge).toEqual(indexed);
  });
  it("returns a key/value store, based on a the return on a string propertyName", function () {
    expect(_.indexBy(stooges), "age").toEqual(indexed);
  });
});


// _.groupBy(collection, iteratee)
// Splits a collection into sets, grouped by the result of running each value through iteratee.
// If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.
// Example(s):
//   _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
//   => {1: [1.3], 2: [2.1, 2.4]}
//   _.groupBy(['one', 'two', 'three'], 'length');
//   => {3: ["one", "two"], 5: ["three"]}
describe("_.groupBy", function () {
  it("returns a key/value(s) store, based on a the return of an iteratee function", function () {
    var floor = function(num){ return Math.floor(num); };
    expect(_.groupBy([1.3, 2.1, 2.4], floor)).toEqual({1: [1.3], 2: [2.1, 2.4]});
  });
  it("returns a key/value(s) store, based on a the return on a string propertyName", function () {
    expect(_.groupBy(['one', 'two', 'three'], 'length')).toEqual({3: ["one", "two"], 5: ["three"]});
  });
});


// _.isEmpty(collection)
// Returns true if an enumerable object contains no values (no enumerable own-properties).
// For strings and array-like objects _.isEmpty checks if the length property is 0.
// Example(s):
//   _.isEmpty([1, 2, 3]);
//   => false
//   _.isEmpty({});
//   => true
describe("_.isEmpty", function () {
  it("returns true for empty collections", function () {
    expect(_.isEmpty({})).toBe(true);
  });
  it("returns false for non-empty collections", function () {
    expect(_.isEmpty([1, 2, 3])).toBe(false);
  });
});


// _.isEqual(collection, other)
// Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.
// Example(s):
//   var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
//   var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
//   stooge == clone;
//   => false
//   _.isEqual(stooge, clone);
//   => true
//   var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
//   var clone  = {name: 'moe', luckyNumbers: [[1, 3], [2, 7], [3, 4]};
//   _.isEqual(stooge, clone);
//   => false
describe("_.isEqual", function () {
  it("does a deep comparison of two objects, not just equality check", function () {
    var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
    var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
    expect(_.isEqual(stooge, clone)).toBe(true);
  });
  it("uses a recursive deep comparison", function () {
    var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
    var clone  = {name: 'moe', luckyNumbers: [[1, 3], [2, 7], [3, 4]]};
    expect(_.isEqual(stooge, clone)).toBe(false);
  });
});

}); //End of Collection Module
