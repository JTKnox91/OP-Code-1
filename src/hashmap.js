/*
  NOTES: Do not use a hashmap in your implementatation
  - ie: `{key : value}` or `object[key]` is not allowed.
  - Arrays (even the JS kind we'll pretend are actual arrays) and linked lists are fine.

  Presentation: https://docs.google.com/presentation/d/1InenYuIlFGwLrIJRK4yTXe58qoi4lOfcua6Iy_tblSI/edit
*/

class HashMap {

  /*
    Provide for you is a "hash function".
    It takes a string [input] and a [size], and outputs an integer between 0 and [size].
  */
  private hash(input, size) {
    return input.split('').map((letter) => {
      return letter.charCodeAt(0);
    }).reduce((sum, value) => {
      return sum + value;
    }, 0) % size;
  }

  constructor() {
    // TODO: What state is needed?
  }

  getValue(key) {
    // TODO
  }

  setVaue(key, value) {
    // TODO
  }

  deleteValue(key) {
     // TODO
  }
}

/*

**PHASE ONE: The basics**

STEP ONE:
- Use the hash function to convert keys into an integer, and store the values in an array.
- Do not worry about collisions yet

STEP TWO:
- Use the hash function to convert keys into an integer, and retrive the values in an array.
- Do not worry about collisions yet

STEP THREE
- Use the hash function to convert keyws into an integer, and delte values from the array

**PHASE TWO: Collision Handling **

- Collisions are inevitable, so how can they be handled?
- Hint: The solution may not be that elegant.


**PHASE THREE: Resizing**

- If a hashtable is too empty and it's wasting memory
- But if its too full and its performance is slowed down by collisions.
- Magic number: The ideal hashtable should be between 25% and 75% occupied.
- Modify the hashtable to automaticly resize if it gets too full or too empty.

*/ 