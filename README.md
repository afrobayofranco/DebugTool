# **An.dy Debug Tool**

An.dy debug tool makes debugging and easier task. Just install it in your project, and with a quick setup, you will be getting messages on your console and they will be registered to a .log file.

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
