# **An.dy Debug Tool**

 [![codeship](https://codeship.com/projects/5372b130-c332-0134-9ef6-66f63a02c034/status?branch=master)](https://app.codeship.com/projects/197550)

An.dy debug tool makes debugging an easier task. Just install it in your project, and with a quick setup, you will be getting messages on your console.

## install
By command line do:
~~~~
npm install andydebugtool --save
~~~~

## Use
### Requiring the debug tool on your project
Wherever you need to put a message, remember to require the debug tool at the top of such file.
~~~~
const debugTool = require('andydebugtool');
~~~~

### Setting your own debug messages
Put the following line were you want to get a debug message:
~~~~
debugTool.debug('YOUR_MESSAGE', '{type}');
~~~~

#### Error Types
***success*** will turn debug message to green color.  
***error*** will turn debug message to red color.  
You can leave the argument empty and debug message will be yellow color.

### Running debug mode
Once messages are in place, initiate Debug mode on the command line by setting the environmental variable:
~~~~
DEBUG=true
~~~~

### Debug message on you console
Debug messages will appear in the following form, according to their placement and will
~~~~
Fri, 13 Jan 2017 01:38:24 GMT:
   [an.dy_url_shortener] YOUR_MESSAGE
 ~~~~

## Running Tests
Unit testing is provided with mocha and chai.

In order to run the tests use:
~~~~
npm test
~~~~
Or if you have mocha install globally (with the -g option), you could also use:
~~~~
mocha
~~~~

A complete successful test should look like this:
~~~~
debugTool
    ✓ Should test for no print
Sun, 22 Jan 2017 20:03:57 GMT:
   [debugtool] success
    ✓ Should test for print


  2 passing (9ms)
~~~~
