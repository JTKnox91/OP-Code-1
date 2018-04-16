// Reference(s):
//   `describe`,`it`,`beforeEach`, etc... - https://mochajs.org/
//   `expect` - https://github.com/mjackson/expect/tree/4ea42d5fdf542b307a5e92b06df1ab56de586845

describe("Object Module", function () {
// Disclaimer: Its usually bad style to not indent to contents of a function,
// but I am making an exception since most of the file is inside this function.

//Helper functions
var mutateChecker = function (methodName, secondArg) {
  it("does not mutate its input", function () {
    var collection = {a:1,b:"2",c:[1,2,3]};
    var clone = {a:1,b:"2",c:[1,2,3]};
    _[methodName](collection, secondArg);
    expect(collection).toEqual(clone);
  });
};
var argumentChecker = function (methodName, returnValue) {
  if (returnValue === undefined) {returnValue = true;}
  it("passes key, value, and collection to its predicate", function () {
    var collection = {a:3,b:4};
    var actualArguments = [];
    var expectedArguments = [
      {v:3, k:"a", c:collection},
      {v:4, k:"b", c:collection}
    ];
    var pushArguments = function (value, key, collection) {
      actualArguments.push({v:value, k:key, c:collection});
      return returnValue;
    }
    _[methodName](collection, pushArguments);
    expect(actualArguments).toEqual(expectedArguments);
  });
};
var alwaysFalse = function () {return false};
var alwaysTrue = function () {return false};
/* TODO (OPTIONAL): Add more helper functions if you need to. */

// _.keys(object) 
// Retrieve all the names of the object's own enumerable properties.
// Example(s):
//   _.keys({one: 1, two: 2, three: 3});
//   => ["one", "two", "three"]
describe("_.keys", function () {
  mutateChecker("keys");

  it("returns an array of the keys in the object", function () {
    expect(_.keys({one: 1, two: 2, three: 3})).toEqual(["one", "two", "three"]);
  });
});

// _.values(object)
// Return all of the values of the object's own properties.
// Example(s):
//   _.values({one: 1, two: 2, three: 3});
//   => [1, 2, 3]
describe("_.values", function () {
  mutateChecker("values");

  it("returns an array of the values in the object", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.mapObject(object, iteratee) 
// Like map, but for objects. Transform the value of each property in turn.
// Example(s):
//   _.mapObject({start: 5, end: 12}, function(val, key) {
//     return val + 5;
//   });
//   => {start: 10, end: 17}
describe("_.mapObject", function () {
  mutateChecker("mapObject", _.identity);
  argumentChecker("mapObject");

  it("returns a (shallow) copy of the object with its values transformed", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.pairs(object) 
// Convert an object into a list of [key, value] pairs.
// Example(s):
//   _.pairs({one: 1, two: 2, three: 3});
//   => [["one", 1], ["two", 2], ["three", 3]]
describe("_.pairs", function () {
  mutateChecker("pairs");

  it("converts an object in a list of [key,value] pairs", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("returns an empty array when given an empty object", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.invert(object) 
// Returns a copy of the object where the keys have become the values and the values the keys.
// For this to work, all of your object's values should be unique and string serializable.
// Example(s):
//   _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
//   => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};
// Note(s):
//   Your values need to be unique from other values, but not nessecarily from the current keys.
describe("_.invert", function () {
  mutateChecker("invert");

  it("returns a (shallow) copy of the object flipping keys and values", function () {
    var object = {Moe: "Moses", Larry: "Louis", Curly: "Jerome", Another:"Moe"};
    var inverted = {Moses: "Moe", Louis: "Larry", Jerome: "Curly", Moe:"Another"};
    expect(_.invert(object)).toEqual(inverted)
  });
});

// _.functions(object)
// Returns a sorted list of the names of every method in an object,
// that is to say, the name of property that has a function for a value.
// Example(s):
//   _.functions(_);
//   => ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...
describe("_.functions", function () {
  mutateChecker("functions");

  it("Returns a sorted list of the names of every method (function) in an object", function () {
    var object = {
      one: "one",
      two: 2,
      three: function () {return 3;},
      four: function () {return "four";},
    };
    expect(_.functions(object).sort()).toEqual(["four", "three"]);
  });
});

// _.findKey(object, predicate)
// Similar to _.findIndex but for keys in objects. Returns the key where the predicate truth test passes or undefined.
describe("_.findKey", function () {
  mutateChecker("findKey", alwaysFalse);
  argumentChecker("findKey", false);

  it("returns where the key where a predicate truth test passed", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("returns `undefined` if no predicate returns true", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("returns early as soon as one predicate passes", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.extend(destination, *sources) 
// Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object.
// Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source
// will override properties of the same name in previous arguments.
// Example(s):
//   _.extend({name: 'moe'}, {age: 50});
//   => {name: 'moe', age: 50}
describe("_.extend", function () {
  //no mutate test, this should actually change the input object

  it("assigns the source properties onto the destination object", function () {
    expect(_.extend({a:1}, {b:2})).toEqual({a:1, b:2});
  });

  it("can handle multiple source objects", function () {
    expect(_.extend({a:1}, {b:2}, {c:3}, {d:4})).toEqual({a:1, b:2, c:3, d:4});
  });

  it("uses 'last object wins' when multiple sources have the same property name", function () {
    expect(_.extend({a:1}, {b:2}, {c:3}, {b:4})).toEqual({a:1, b:4, c:3});
  });

  it("it returns a mutated destination object", function () {
    var destination = {a:1};
    var extended = _.extend(destination, {b:2});
    expect(extended).toEqual({a:1, b:2});
    expect(extended).toBe(destination); //note the difference between toEqual and toBe.
  });
});

// _.extendOwn(destination, *sources)
// Like extend, but only copies own properties over to the destination object.
// Example(s):
//   _.extend({name: 'moe', age: 45}, {age: 50, height: 60});
//   => {name: 'moe', age: 50}
describe("_.extendOwn", function () {
  //no mutate test, this should actually change the input object

  it("assigns the source properties onto the destination object, ONLY if the destination already has that property name", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("can handle multiple source objects", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("uses 'last object wins' when multiple sources have the same property name", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("it returns a mutated destination object", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.pick(object, *keys) 
// Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys).
// Alternatively accepts a predicate indicating which keys to pick.
// Example(s):
//   _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age');
//   => {name: 'moe', age: 50}
//   _.pick({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//     return _.isNumber(value);
//   });
//   => {age: 50}
describe("_.pick", function () {
  mutateChecker("pick", alwaysFalse);
  argumentChecker("pick");
  var object = {a:1,b:2,c:3,d:4};

  it("returns a copy of the object, with only certain keys remaining", function () {
    expect(_.pick(object, "a")).toEqual({a:1});
  });

  it("can handle multiple keys being passed in as multiple arguments", function () {

  });

  it("can handle multiple keys being passed in as an array", function () {

  });

  it("can handle a predicate function instead of string key(s)", function () {

  });

});

// _.omit(object, *keys) 
// Opposite of _.pick
// Return a copy of the object, filtered to omit the blacklisted keys (or array of keys).
// Alternatively accepts a predicate indicating which keys to omit.
// Example(s):
//   _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
//   => {name: 'moe', age: 50}
//   _.omit({name: 'moe', age: 50, userid: 'moe1'}, function(value, key, object) {
//     return _.isNumber(value);
//   });
//   => {name: 'moe', userid: 'moe1'}
describe("_.omit", function () {
  mutateChecker("omit", alwaysTrue);
  argumentChecker("omit");

  it("returns a copy of the object, with only certain keys removed", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("can handle multiple keys being passed in as multiple arguments", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("can handle multiple keys being passed in as an array", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });

  it("can handle a predicate function instead of string key(s)", function () {
    /* TODO: Write a real expectation here. */
    expect(false).toBe(true, "Replace this placeholder assertion.");
  });
});

// _.defaults(object, *defaults) 
// Fill in undefined properties in object with the first value present in the following list of defaults objects.
// Example(s):
//   var iceCream = {flavor: "chocolate"};
//   _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"}, {sprinkles, "little"});
//   => {flavor: "chocolate", sprinkles: "lots"}
describe("_.defaults", function () {
  //no mutate test, this should actually change the input object
  it("assigns the source properties onto the destination object, using 'first object wins'", function () {
    let defaultIceCream = _.defaults({flavor: "chocolate"}, {flavor: "vanilla", sprinkles: "lots"}, {sprinkles: "little"});
    expect(defaultIceCream).toEqual({flavor: "chocolate", sprinkles: "lots"});
  });
});

// _.clone(object)
// Create a deep clone of the provided plain object. Any nested objects or arrays should be recursively cloned.
// Example(s):
//   _.clone({name: 'moe'});
//   => {name: 'moe'};
describe("_.clone", function () {
  mutateChecker("clone");

  it("creates a deep copy", function () {
    var nested2 = ["c", "d"];
    var nested1 = {b: nested2};
    var tree = {
      a: nested1, b: 2, c: false,
    };
    var clone = _.clone(tree);
    expect(clone).toEqual(tree);
    expect(clone.a).toNotBe(nested1);
    expect(clone.a.b).toNotBe(nested2);
  });
});

});