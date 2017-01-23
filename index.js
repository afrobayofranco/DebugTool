// Requires
const chalk = require('chalk');

// Debugging, the function to be available for other files
// and brings in the message and status
exports.debug = (message, status) => {
  // Create a new date for the timestamp
  const dt = new Date();
  const utcDate = dt.toUTCString();
  // Stores color to be available later on
  let color;
  // Stores message
  const msgcons = utcDate + ':\n   ' + chalk.black.bgGreen('[debugtool]') + ' ' + color(message);
  // DEBUG Switch if true it activates debbuging
  if (process.env.DEBUG) {
    // Checks for status, if == success chalk is green
    if (status === 'success') {
      color = chalk.green;
      // Console log the message with chalk included
      console.log(msgcons);
      // Checks for status, if == error chalk is red
    } else if (status === 'error') {
      color = chalk.red;
      // Console error the message with chalk included
      console.error(msgcons);
      // Any other, chalk is yellow
    } else {
      color = chalk.yellow;
      // Console warn the message with chalk included
      console.warn(msgcons);
    }
  }
}
