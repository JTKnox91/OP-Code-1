// Collection Functions (Arrays, Objects, etc...)

// These functions provide tools for working with "collections". Many of these functions already exist
// as methods on the Array prototype, but can be modified to work on objects and
// array-like objects such as arguments, NodeList and similar. But it works by "duck-typing",
// so avoid passing objects with a numeric length property.
// When possible, try to reuse methods from this file and others, such as _.each or _.identity.
// Unless otherwise specified, DO NOT modify the input collection.

// Reference(s):
//   `Array.prototype` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//   `Object.prototyp` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//   "array like" objects
//     `arguments` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//     `NodeList` - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
//   "duck-typing" - https://en.wikipedia.org/wiki/Duck_typing
//   misc
//     `Number.prototype` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype

// (You'll see this line in every file. It ensures these files will work with eachother and in any order.)
window._ = _ = (window._ || {});


// _.identity(value)
// Returns the same value that is used as the argument. In math: f(x) = x
// This function looks useless, but is used throughout Underscore as a default iteratee.
// Note(s):
//   This doesn't really belong with the "collection" functions,
//   but for academic purposes its useful to display it here.

_.identity = function (input) {return input;};
// yup, that was really the entire function. Figuring out where to use it is the hard part.

// _.each(collection, iteratee)
// Iterates over a collection of elements, yielding each in turn to an iteratee function. Each
// invocation of iteratee is called with three arguments: (element, index, collection). If collection is a
// JavaScript object, iteratee's arguments will be (value, key, collection).
// Example(s):
//   _.each([1, 2, 3], alert);
//   => alerts 1, then 2, then 3
//   _.each({one: 1, two: 2, three: 3}, alert);
//   => also alerts 1, then 2, then 3

_.each = function (collection, iteratee) {
  /* NO TODO, consider this a freebee :) */

  // treat like an array (but could also be `arguments`)
  if (collection.length !== undefined) {
    for (var i = 0; i < collection.length; i++) {
      iteratee(collection[i], i, collection);
      // ^ note that the iteratee is being passed not just the value,
      // but also the index and original array, which the examples do not use
      // but can come in handy sometimes. See the spec for `Array.forEach`.
      // Javascript is VERY loosely typed, including its function signatures.
    }

  // treat like an object
  } else {
    for (var key in collection) {
      iteratee(collection[key], key, collection);
      // ^ same note as the array version, but passing the named key
      // instead of index
    }
  }
};


// _.map(collection, iteratee)
// Produces a new array of values by mapping each value in collection through a transformation function (iteratee).
// The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire collection.
// Example(s):
//   _.map([1, 2, 3], function(num){ return num * 3; });
//   => [3, 6, 9]
//   _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
//   => [3, 6, 9]
//   _.map([[1, 2], [3, 4]], _.first);
//   => [1, 3]
// Note(s):
//   How could you reuse _.forEach here?

_.map = function (collection, iteratee) {
  // create a a variable to hold the new array.
  var newArray = [];

  // iterate through each item or key in our collection using _.each
  _.each(collection, function(value, key, collection){
    // use the iteratee to push the new values to our newArray.
    newArray.push(iteratee(value, key, collection));
  })

  //return the new Array.
  return newArray;
};


// _.reduce(collection, iteratee, [initial])
// Reduce boils down a collection of values into a single value. `initial` is the initial state of the reduction,
// and each successive step of it should be returned by iteratee. The iteratee is passed four arguments:
//   1) the current total (starting with `initial` on the first iteration),
//   2) the value  of the iteration, and a reference to the entire collection.
//   3) the index (or key)
//   4) a reference to the original collection
// If no `initial` is passed to the initial invocation of reduce,the iteratee is not invoked on the first element of the collection,
// and the first element is instead passed as the `initial` in the invocation of the iteratee on the next element in the collection.
// Example(s):
//   _.reduce([2, 3], function(sum, n){ return sum + num; }, 1);
//   => 6
//   _.reduce([0, 1, 2], function(product, n){ return product * num; });
//   => 0
// Note(s):
//   How could you reuse _.forEach here?

_.reduce = function (collection, iteratee, initial) {
  // variable to hold our total
  var total;
  // using an if else statement. If initial is not defined we set initial to the index value.
  if(initial === undefined){
    // I created a new variable to hold a value to use with _.each
    var iteration = 1;
    //I will use _.each to iterate through collection
    _.each(collection, function(value, key, collection){
      // if my temp variable is 1 we will set the total to the value at the index.
      if(iteration == 1) {
        total = value;
        iteration++;
      } else {
        //every subsequent iteration will execute the iteratee
        total = iteratee(total, value, key, collection);
      }
    });
    return total;
  } else {
    // this else statement will be used if initial is passed to _.reduce
    total = initial;
    // I will use _.each to iterate through collection
    _.each(collection, function(value, key, collection){
      iteratee(total, value, key, collection);
    });
    // return the total
    return total;
  }
};


// _.reduceRight(collection, iteratee, [initial])
// The "right to left" version of reduce.
// If no `initial` is passed to the initial invocation of reduce, the iteratee is not invoked on the last element of the collection,
// and the last element is instead passed as the `initial` in the invocation of the iteratee on the second to last element in the collection.
// Example(s):
//   var collection = [[0, 1], [2, 3], [4, 5]];
//   var flat = _.reduceRight(collection, function(a, b) { return a.concat(b); }, []);
//   => [4, 5, 2, 3, 0, 1]
// Note(s):
//   For non-array like collections this is functionally equivalent to _.reduce.

_.reduceRight = function (collection, iteratee, initial) {
  /*
    I have to go back and break this down again, I am stumped. And the test passed, but I know Im not done.
  */
    var newArray = [];
    if(initial === undefined){
      "?????";
    } else {
      for(var i = collection.length - 1; i > -1; i--){
        // need to figure out how to use the iteratee and reverse the collection prior to passing as an argument.
        newArray.push(collection[i]);
      }
    }
    return newArray;
};


// _.find(collection, predicate)
// Looks through each value in the collection, returning the first one that passes a truth test (predicate),
// or undefined if no value passes the test. The function returns as soon as it finds an acceptable element,
// and doesn't traverse the entire collection.
// Example(s):
//   var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => 2
// Note(s):
//   Generally you want to reuse one of your other collection functions, but this is an exception
//   because it should return early as soon as finding a match.

_.find = function (collection, predicate) {
  //create a variable that holds the result
  var result;

  // I intitially tried to use _.each, but realized that I couldnt terminate early using return or break.
  // I than realized the comments stated not to reuse one of the other functions so I used _.each to help me.
  if(collection.length != undefined){
    //for loop to iterate over the array.
    for (var i = 0; i < collection.length; i++) {
      //if true we will return the first result.
      if(predicate(collection[i]) === true) {
        return collection[i];
      };
    };
  } else {
    //for loop to iterate over objects
    for (var key in collection) {
      //if true, we will return the first result.
      if(predicate(collection[key]) === true) {
        return collection[key];
      };
    }
  };

  //return result
  return result;
};


// _.filter(collection, predicate)
// Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate).
// Example(s):
//   var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => [2, 4, 6]
// Note(s):
//   How could you reuse _.reduce here?

_.filter = function (collection, predicate) {
  /* TODO */
};


// _.where(collection, properties)
// Looks through each value in the collection, returning an array
// of all the values that contain all of the key-value pairs collectioned in properties.
// Example(s):
//   _.where(collectionOfPlays, {author: "Shakespeare", year: 1611});
//   => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//       {title: "The Tempest", author: "Shakespeare", year: 1611}]
// Note(s):
//   How could you reuse _.filter here?

_.where = function (collection, properties) {
  /* TODO */
};


// _.findWhere(collection, properties)
// Looks through the collection and returns the first value that matches all of the key-value pairs collectioned in properties.
// If no match is found, or if collection is empty, undefined will be returned.
// Example(s):
//   _.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
//   => {year: 1918, newsroom: "The New York Times",
//     reason: "For its public service in publishing in full so many official reports,
//     documents and speeches by European statesmen relating to the progress and
//     conduct of the war."}

_.findWhere = function (collection, properties) {
  /* TODO */
};


// _.reject(collection, predicate)
// Returns the values in collection without the elements that the truth test (predicate) passes. The opposite of filter.
// Example(s):
//   var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//   => [1, 3, 5]

_.reject = function (collection, properties) {
  /* TODO */
};


// _.every(collection, [predicate]);
// Returns true if all of the values in the collection pass the predicate truth test.
// Short-circuits and stops traversing the collection if a false element is found.
// Example(s):
//   _.every([2, 4, 6], function(num) { return num % 2 == 0; });
//   => true
//   _.every([0, 1, 2]) //remember 0 is "falsey"
//   => false

_.every = function (collection, predicate) {
  /* TODO */
};


// _.some(collection, [predicate])
// Returns true if any of the values in the collection pass the predicate truth test.
// Short-circuits and stops traversing the collection if a true element is found.
// Example(s):
//   _.some([null, 0, 'yes', false]);
//   => true

_.some = function (collection, predicate) {
  /* TODO */
};


// _.contains(collection, value)
// Returns true if the value is present in the collection.
// Examples(s):
//   _.contains([1, 2, 3], 3);
//   => true
// Note(s):
//   How could you reuse _.some here?

_.contains = function (collection, value) {
  /* TODO */
};


// _.pluck(collection, propertyName)
// A convenient version of what is perhaps the most common use-case for _.map: extracting a collection of property values.
// Example(s):
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// Example(s):
//   _.pluck(stooges, 'name');
//   => ["moe", "larry", "curly"]

_.pluck = function (collection, propertyName) {
  /* TODO */
};


// _.max(collection, [iteratee])
// Returns the maximum value in collection. If an iteratee function is provided,
// it will be used on each value to generate the criterion by which the value is ranked.
// Number.NEGATIVE_INFINITY is returned if collection is empty. Non-numerical values in collection will be ignored.
// Example(s):
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.max(stooges, function(stooge){ return stooge.age; });
//   => {name: 'curly', age: 60};

_.max = function (collection, iteratee) {
  /* TODO */
};


// _.min(collection, [iteratee])
// Returns the minimum value in collection. The opposite of _.max.
// Number.POSITIVE_INFINITY is returned if collection is empty. Non-numerical values in collection will be ignored.
// Example(s):
//   var numbers = [10, 5, 100, 2, 1000];
//   _.min(numbers);
//   => 2

_.min = function (collection, iteratee) {
  /* TODO */
};


// _.sortBy(collection, iteratee)
// Returns a sorted copy of collection, ranked in ascending order by the results of running
// each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).
// Example(s):
//   _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
//   => [5, 4, 6, 3, 1, 2]
//   var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
//   _.sortBy(stooges, 'name');
//   => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];

_.sortBy = function (collection, iteratee) {
  /* TODO */
};


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
// Note(s):
//   This is only expected to work your keys are unique.

_.indexBy = function (collection, iteratee) {
  /* TODO */
};


// _.groupBy(collection, iteratee)
// Splits a collection into sets, grouped by the result of running each value through iteratee.
// If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.
// Example(s):
//   _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
//   => {1: [1.3], 2: [2.1, 2.4]}
//   _.groupBy(['one', 'two', 'three'], 'length');
//   => {3: ["one", "two"], 5: ["three"]}
// Note(s):
//   Similiar to _.indexBy but can handle non-unqiue keys.

_.groupBy = function (collection, iteratee) {
  /* TODO */
};


// _.isEmpty(object)
// Returns true if an enumerable object contains no values (no enumerable own-properties).
// For strings and array-like objects _.isEmpty checks if the length property is 0.
// Example(s):
//   _.isEmpty([1, 2, 3]);
//   => false
//   _.isEmpty({});
//   => true

_.isEmpty = function (object) {

};

// _.isEqual(object, other)
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
// Note(s):
//   Javascript script compares mutable types like Objects and Arrays by reference,
//   that is to say, unless the compared items share the same address in memory,
//   they will not be equal (regardless of value).

_.isEqual = function (object, other) {
  /* TODO */
};