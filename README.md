# OP-Code-1

A small tribute to the [Underscore.js](http://underscorejs.org/) library ...as a purely academic exercise.

## Setup

1. Create a fork of this repository.

2. Clone the fork to your local machine with

`$ git clone https://github.com/<YOUR_USER_NAME>/OP-Code-1.git <NEW_FOLDER_NAME>`

`$ cd <NEW_FOLDER_NAME>`

3. Setup the original repo as your 'upstream' so you can get updates.

`$ git remote add upstream https://github.com/jtknox91/OP-Code-1.git`

## Usage

1. Open `TestRunner.html` in a web browser.

2. Notice some tests are:
  
    * Already passing (You're welcome)

    * Failing (You'll need to edit the method in the `src` folder)

    * Missing (You'll need to add/edit an assertion in the `test` folder THEN edit in the method in the `src` folder)

3. Notice this library has been broken into seperate files for each module (and each file has a corresponding test file).

    * Instead of the alphabetical order they're in, I would reccomend tackling them in the following order:
    
        * `src/collections.js` (all test for this module have been written before hand)

        * `test/object.test.js` (some, but not all of the test of been written)

        * `src/object.js`

        * `test/array.test.js` (you will have to write all the tests yourself)

        * `src/array.js` 

        * (The `functions` module is still under construction but should definitely be tackled AFTER all of these)

    * But if you get stuck feel free to move on to a different section while waiting for help.


## Reccomendations

1. COMMIT OFTEN!

    * One way to make this easier is to think about what your commit message will be BEFORE writing any code.

    * As a general rule, try to make a commit for every method, but feel free to make more commits if you reach good a good stopping point.

    * In addition to making local commits, push to your fork on github often. This will make it easier to help you.

2. Write tests BEFORE writing the code being tested.
  
    * Ideally, put the test on its own commit. But feel free to add more tests after writing a method if you realize there is an uncovered case.

    * You should always see your tests fail at least once. Doing so will help verify that your tests are providing value.

3. If you're not sure what a method is supposed to do. You can visit the official [Underscore Documentation](http://underscorejs.org/)

    * Some methods have been modified (mostly simplified, for educational purposes) but the examples are usually relevant.

4. There is (or soon will be) a solution branch to the repo, but try to ask for help before resorting to using it.

## Style Guide

1. Use spaces instead of tab characters
    
    * (You can configure your text editor to make spaces wehn you hit the TAB key)

2. Each level of indentation should be 2 spaces. 

    * This might seem narrow at first, but you'll find yourself writing a lot of nested functions real quick.

