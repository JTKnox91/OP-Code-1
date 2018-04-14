// Object Functions

// These functions provide tools for working with any javascript object. Many of these functions were added to the
// `Object` prototype in later versions of javascript, but it is still worth knowing how to implement them.
// When possible, try to reuse methods from this file and others, such as _.each
// Unless otherwise specified, DO NOT modify the input object.

// Reference(s):
//   `Object.prototype` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//   `arguments` - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
//   `Array.prototype.slice` - https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work

// (You'll see this line in every file. It ensures these files will work with eachother and in any order.)
window._ = _ = (window._ || {});

// _.keys(object) 
// Retrieve all the names of the object's own enumerable properties.
// Example(s):
//   _.keys({one: 1, two: 2, three: 3});
//   => ["one", "two", "three"]

_.keys = function (object) {
  /* TODO */
};


/* DO I KEEP THIS?
allKeys_.allKeys(object) 
Retrieve all the names of object's own and inherited properties.

function Stooge(name) {
  this.name = name;
}
Stooge.prototype.silly = true;
_.allKeys(new Stooge("Moe"));
=> ["name", "silly"]
*/

// _.values(object)
// Return all of the values of the object's own properties.
// Example(s):
//   _.values({one: 1, two: 2, three: 3});
//   => [1, 2, 3]

_.values = function (object) {
  /* TODO */
};


// _.mapObject(object, iteratee) 
// Like map, but for objects. Transform the value of each property in turn.
// Example(s):
//   _.mapObject({start: 5, end: 12}, function(val, key) {
//     return val + 5;
//   });
//   => {start: 10, end: 17}

_.mapObject = function (object, iteratee) {
  /* TODO */
};


// _.pairs(object) 
// Convert an object into a list of [key, value] pairs.
// Example(s):
//   _.pairs({one: 1, two: 2, three: 3});
//   => [["one", 1], ["two", 2], ["three", 3]]

_.pairs = function (object) {
  /* TODO */
};


// _.invert(object) 
// Returns a copy of the object where the keys have become the values and the values the keys.
// For this to work, all of your object's values should be unique and string serializable.
// Example(s):
//   _.invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"});
//   => {Moses: "Moe", Louis: "Larry", Jerome: "Curly"};
// Note(s):
//   Your values need to be unique from other values, but not nessecarily from the current keys.

_.invert = function (object) {
  /* TODO */
};


// _.functions(object) Alias: methods 
// Returns a sorted list of the names of every method in an object,
// that is to say, the name of property that has a function for a value.
// Example(s):
//   _.functions(_);
//   => ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...

_.functions = function (object) {
  /* TODO */
};


// _.findKey(object, predicate)
// Similar to _.findIndex but for keys in objects. Returns the key where the predicate truth test passes or undefined.

_.findKey = function (object, predicate) {
  /* TODO */
};


// _.extend(destination, *sources) 
// Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object.
// Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source
// will override properties of the same name in previous arguments.
// Example(s):
//   _.extend({name: 'moe'}, {age: 50});
//   => {name: 'moe', age: 50}

_.extend = function (destination) {
  /* TODO */
};


// _.extendOwn(destination, *sources)
// Like extend, but only copies own properties over to the destination object.
// Example(s):
//   _.extend({name: 'moe', age: 45}, {age: 50, height: 60});
//   => {name: 'moe', age: 50}

_.extendOwn = function (destination) {
  /* TODO */
};


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
// Note(s):
//   You will need to pay attention to the number of arguments passed into the function.

_.pick = function (object, predicate) {
  /* TODO */
};


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

_.omit = function (object, predicate) {
  /* TODO */
};

defaults_.defaults(object, *defaults) 
Fill in undefined properties in object with the first value present in the following list of defaults objects.

var iceCream = {flavor: "chocolate"};
_.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
=> {flavor: "chocolate", sprinkles: "lots"}
clone_.clone(object) 
Create a shallow-copied clone of the provided plain object. Any nested objects or arrays will be copied by reference, not duplicated.

_.clone({name: 'moe'});
=> {name: 'moe'};
tap_.tap(object, interceptor) 
Invokes interceptor with the object, and then returns object. The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.

_.chain([1,2,3,200])
  .filter(function(num) { return num % 2 == 0; })
  .tap(alert)
  .map(function(num) { return num * num })
  .value();
=> // [2, 200] (alerted)
=> [4, 40000]
has_.has(object, key) 
Does the object contain the given key? Identical to object.hasOwnProperty(key), but uses a safe reference to the hasOwnProperty function, in case it's been overridden accidentally.

_.has({a: 1, b: 2, c: 3}, "b");
=> true
property_.property(key) 
Returns a function that will itself return the key property of any passed-in object.

var stooge = {name: 'moe'};
'moe' === _.property('name')(stooge);
=> true
propertyOf_.propertyOf(object) 
Inverse of _.property. Takes an object and returns a function which will return the value of a provided property.

var stooge = {name: 'moe'};
_.propertyOf(stooge)('name');
=> 'moe'
matcher_.matcher(attrs) Alias: matches 
Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.

var ready = _.matcher({selected: true, visible: true});
var readyToGoList = _.filter(list, ready);
isEqual_.isEqual(object, other) 
Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.

var stooge = {name: 'moe', luckyNumbers: [13, 27, 34]};
var clone  = {name: 'moe', luckyNumbers: [13, 27, 34]};
stooge == clone;
=> false
_.isEqual(stooge, clone);
=> true
isMatch_.isMatch(object, properties) 
Tells you if the keys and values in properties are contained in object.

var stooge = {name: 'moe', age: 32};
_.isMatch(stooge, {age: 32});
=> true
isEmpty_.isEmpty(object) 
Returns true if an enumerable object contains no values (no enumerable own-properties). For strings and array-like objects _.isEmpty checks if the length property is 0.

_.isEmpty([1, 2, 3]);
=> false
_.isEmpty({});
=> true
isElement_.isElement(object) 
Returns true if object is a DOM element.

_.isElement(jQuery('body')[0]);
=> true
isArray_.isArray(object) 
Returns true if object is an Array.

(function(){ return _.isArray(arguments); })();
=> false
_.isArray([1,2,3]);
=> true
isObject_.isObject(value) 
Returns true if value is an Object. Note that JavaScript arrays and functions are objects, while (normal) strings and numbers are not.

_.isObject({});
=> true
_.isObject(1);
=> false
isArguments_.isArguments(object) 
Returns true if object is an Arguments object.

(function(){ return _.isArguments(arguments); })(1, 2, 3);
=> true
_.isArguments([1,2,3]);
=> false
isFunction_.isFunction(object) 
Returns true if object is a Function.

_.isFunction(alert);
=> true
isString_.isString(object) 
Returns true if object is a String.

_.isString("moe");
=> true
isNumber_.isNumber(object) 
Returns true if object is a Number (including NaN).

_.isNumber(8.4 * 5);
=> true
isFinite_.isFinite(object) 
Returns true if object is a finite Number.

_.isFinite(-101);
=> true

_.isFinite(-Infinity);
=> false
isBoolean_.isBoolean(object) 
Returns true if object is either true or false.

_.isBoolean(null);
=> false
isDate_.isDate(object) 
Returns true if object is a Date.

_.isDate(new Date());
=> true
isRegExp_.isRegExp(object) 
Returns true if object is a RegExp.

_.isRegExp(/moe/);
=> true
isError_.isError(object) 
Returns true if object inherits from an Error.

try {
  throw new TypeError("Example");
} catch (o_O) {
  _.isError(o_O);
}
=> true
isNaN_.isNaN(object) 
Returns true if object is NaN.
Note: this is not the same as the native isNaN function, which will also return true for many other not-number values, such as undefined.

_.isNaN(NaN);
=> true
isNaN(undefined);
=> true
_.isNaN(undefined);
=> false
isNull_.isNull(object) 
Returns true if the value of object is null.

_.isNull(null);
=> true
_.isNull(undefined);
=> false
isUndefined_.isUndefined(value) 
Returns true if value is undefined.

_.isUndefined(window.missingVariable);
=> true