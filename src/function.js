// Function (uh, ahem) Functions



// isMatch_.isMatch(object, properties) 
// Tells you if the keys and values in properties are contained in object.
// var stooge = {name: 'moe', age: 32};
// _.isMatch(stooge, {age: 32});
// => true


// property_.property(key) 
// Returns a function that will itself return the key property of any passed-in object.
// var stooge = {name: 'moe'};
// 'moe' === _.property('name')(stooge);
// => true


// propertyOf_.propertyOf(object) 
// Inverse of _.property. Takes an object and returns a function which will return the value of a provided property.
// var stooge = {name: 'moe'};
// _.propertyOf(stooge)('name');
// => 'moe'


// matcher_.matcher(attrs) Alias: matches 
// Returns a predicate function that will tell you if a passed in object contains all of the key/value properties present in attrs.
// var ready = _.matcher({selected: true, visible: true});
// var readyToGoList = _.filter(list, ready);


// _.bind(function, object, *arguments) 
// Bind a function to an object, meaning that whenever the function is called, the value of this will be the object. Optionally, pass arguments to the function to pre-fill them, also known as partial application. For partial application without context binding, use partial.
// var func = function(greeting){ return greeting + ': ' + this.name };
// func = _.bind(func, {name: 'moe'}, 'hi');
// func();
// => 'hi: moe'


// bindAll_.bindAll(object, *methodNames) 
// Binds a number of methods on the object, specified by methodNames, to be run in the context of that object whenever they are invoked. Very handy for binding functions that are going to be used as event handlers, which would otherwise be invoked with a fairly useless this. methodNames are required.
// var buttonView = {
//   label  : 'underscore',
//   onClick: function(){ alert('clicked: ' + this.label); },
//   onHover: function(){ console.log('hovering: ' + this.label); }
// };
// _.bindAll(buttonView, 'onClick', 'onHover');
// // When the button is clicked, this.label will have the correct value.
// jQuery('#underscore_button').on('click', buttonView.onClick);


// partial_.partial(function, *arguments) 
// Partially apply a function by filling in any number of its arguments, without changing its dynamic this value. A close cousin of bind. You may pass _ in your list of arguments to specify an argument that should not be pre-filled, but left open to supply at call-time.
// var subtract = function(a, b) { return b - a; };
// sub5 = _.partial(subtract, 5);
// sub5(20);
// => 15
// // Using a placeholder
// subFrom20 = _.partial(subtract, _, 20);
// subFrom20(5);
// => 15


// memoize_.memoize(function, [hashFunction]) 
// Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function.
// var fibonacci = _.memoize(function(n) {
//   return n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2);
// });


// delay_.delay(function, wait, *arguments) 
// Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
// var log = _.bind(console.log, console);
// _.delay(log, 1000, 'logged later');
// => 'logged later' // Appears after one second.


// defer_.defer(function, *arguments) 
// Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0. Useful for performing expensive computations or HTML rendering in chunks without blocking the UI thread from updating. If you pass the optional arguments, they will be forwarded on to the function when it is invoked.
// _.defer(function(){ alert('deferred'); });
// // Returns from the function before the alert runs.


// throttle_.throttle(function, wait, [options]) 
// Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds. Useful for rate-limiting events that occur faster than you can keep up with.
// By default, throttle will execute the function as soon as you call it for the first time, and, if you call it again any number of times during the wait period, as soon as that period is over. If you'd like to disable the leading-edge call, pass {leading: false}, and if you'd like to disable the execution on the trailing-edge, pass 
// {trailing: false}.
// var throttled = _.throttle(updatePosition, 100);
// $(window).scroll(throttled);
// debounce_.debounce(function, wait, [immediate]) 
// Creates and returns a new debounced version of the passed function which will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked. Useful for implementing behavior that should only happen after the input has stopped arriving. For example: rendering a preview of a Markdown comment, recalculating a layout after the window has stopped being resized, and so on.
// At the end of the wait interval, the function will be called with the arguments that were passed most recently to the debounced function.
// Pass true for the immediate argument to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval. Useful in circumstances like preventing accidental double-clicks on a "submit" button from firing a second time.
// var lazyLayout = _.debounce(calculateLayout, 300);
// $(window).resize(lazyLayout);


// once_.once(function) 
// Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later.
// var initialize = _.once(createApplication);
// initialize();
// initialize();
// // Application is only created once.


// after_.after(count, function) 
// Creates a version of the function that will only be run after being called count times. Useful for grouping asynchronous responses, where you want to be sure that all the async calls have finished, before proceeding.
// var renderNotes = _.after(notes.length, render);
// _.each(notes, function(note) {
//   note.asyncSave({success: renderNotes});
// });
// // renderNotes is run once, after all notes have saved.


// before_.before(count, function) 
// Creates a version of the function that can be called no more than count times. The result of the last function call is memoized and returned when count has been reached.
// var monthlyMeeting = _.before(3, askForRaise);
// monthlyMeeting();
// monthlyMeeting();
// monthlyMeeting();
// // the result of any subsequent calls is the same as the second call


// wrap_.wrap(function, wrapper) 
// Wraps the first function inside of the wrapper function, passing it as the first argument. This allows the wrapper to execute code before and after the function runs, adjust the arguments, and execute it conditionally.
// var hello = function(name) { return "hello: " + name; };
// hello = _.wrap(hello, function(func) {
//   return "before, " + func("moe") + ", after";
// });
// hello();
// => 'before, hello: moe, after'


// negate_.negate(predicate) 
// Returns a new negated version of the predicate function.
// var isFalsy = _.negate(Boolean);
// _.find([-2, -1, 0, 1, 2], isFalsy);
// => 0


// compose_.compose(*functions) 
// Returns the composition of a list of functions, where each function consumes the return value of the function that follows. In math terms, composing the functions f(), g(), and h() produces f(g(h())).
// var greet    = function(name){ return "hi: " + name; };
// var exclaim  = function(statement){ return statement.toUpperCase() + "!"; };
// var welcome = _.compose(greet, exclaim);
// welcome('moe');
// => 'hi: MOE!'