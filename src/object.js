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
  return _.map(object, function (v,k) {
    return k;
  });
};


// _.values(object)
// Return all of the values of the object's own properties.
// Example(s):
//   _.values({one: 1, two: 2, three: 3});
//   => [1, 2, 3]

_.values = function (object) {
  return _.map(object, function (v,k) {
    return v;
  });
};


// _.mapObject(object, iteratee) 
// Like map, but for objects. Transform the value of each property in turn.
// Example(s):
//   _.mapObject({start: 5, end: 12}, function(val, key) {
//     return val + 5;
//   });
//   => {start: 10, end: 17}

_.mapObject = function (object, iteratee) {
  var result = {};
  _.each(object, function (v,k,c) {
    result[k] = iteratee(v,k,c);
  });
  return result;
};


// _.pairs(object) 
// Convert an object into a list of [key, value] pairs.
// Example(s):
//   _.pairs({one: 1, two: 2, three: 3});
//   => [["one", 1], ["two", 2], ["three", 3]]

_.pairs = function (object) {
  return _.map(object, function (v,k) {
    return [k,v];
  });
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
  var result = {};
  _.each(object, function (v,k,c) {
    result[v] = k;
  });
  return result;
};


// _.functions(object)
// Returns a sorted list of the names of every method in an object,
// that is to say, the name of property that has a function for a value.
// Example(s):
//   _.functions(_);
//   => ["all", "any", "bind", "bindAll", "clone", "compact", "compose" ...

_.functions = function (object) {
  var result = _.pick(object, function (v) {
    return typeof v === "function";
  });
  return _.keys(result);
};


// _.findKey(object, predicate)
// Similar to _.findIndex but for keys in objects. Returns the key where the predicate truth test passes or undefined.

_.findKey = function (object, predicate) {
  for (var k in object) {
    if (predicate(object[k], k, object)) {return k;}
  }
  return undefined;
};


// _.extend(destination, *sources) 
// Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object.
// Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source
// will override properties of the same name in previous arguments.
// Example(s):
//   _.extend({name: 'moe'}, {age: 50});
//   => {name: 'moe', age: 50}

_.extend = function (destination) {
  _.each(arguments, function (source, i) {
    if (i === 0) {return;}
    _.each(source, function (v, k) {
      destination[k] = v;
    });
  });
  return destination;
};


// _.extendOwn(destination, *sources)
// Like extend, but only copies own properties over to the destination object.
// Example(s):
//   _.extend({name: 'moe', age: 45}, {age: 50, height: 60});
//   => {name: 'moe', age: 50}

_.extendOwn = function (destination) {
  _.each(arguments, function (source, i) {
    if (i === 0) {return;}
    _.each(source, function (v, k) {
      if (destination.hasOwnProperty(k)) {
        destination[k] = v;
      }
    });
  });
  return destination;
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
  var result = {};
  if (typeof predicate === "function") {
    _.each(object, function (v,k, object) {
      if (predicate(v,k,object)) {result[k] = v;}
    });
  } else if (typeof predicate === "object") {
    _.each(predicate, function (key, i) {
      _.each(object, function (v,k) {
        if (k === key) {result[k] = v;}
      });
    });
  } else {
    _.each(arguments, function (key, i) {
      if (i === 0) {return;}
      _.each(object, function (v,k) {
        if (k === key) {result[k] = v;}
      });
    });
  }
  return result;
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
  var result = {};
  if (typeof predicate === "function") {
    _.each(object, function (v,k,c) {
      if (!predicate(v,k,c)) {result[k] = v;}
    });
  } else if (typeof predicate === "object") {
    _.each(predicate, function (key, i) {
      _.each(object, function (v,k) {
        if (k !== key) {result[k] = v;}
      });
    });
  } else {
    _.each(arguments, function (key, i) {
      if (i === 0) {return;}
      _.each(object, function (v,k) {
        if (k !== key) {result[k] = v;}
      });
    });
  }
  return result;
};


// _.defaults(object, *defaults) 
// Fill in undefined properties in object with the first value present in the following list of defaults objects.
// Example(s):
//   var iceCream = {flavor: "chocolate"};
//   _.defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"}, {sprinkles, "little"});
//   => {flavor: "chocolate", sprinkles: "lots"}

_.defaults = function (object) {
  _.each(arguments, function (source, i) {
    if (i === 0) {return;}
    _.each(source, function (v,k) {
      if (object.hasOwnProperty(k)) {
        return;
      } else {
        object[k] = v;
      }
    });
  });
  return object;
};


// _.clone(object)
// Create a deep clone of the provided plain object. Any nested objects or arrays should be recursively cloned.
// Example(s):
//   _.clone({name: 'moe'});
//   => {name: 'moe'};

_.clone = function (object) {
  var result;
  if (Array.isArray(object)) {
    result = []
  } else if (typeof object === "object") {
    if (object === null) {return null;}
    result = {};
  } else {
    return object;
  }
  for (var k in object) {
    result[k] = _.clone(object[k]);
  }
  return result;
};
