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
  // DEBUG Switch if true it activates debbuging
  if (process.env.DEBUG === 'true') {
    // Checks for status, if == success chalk is green
    if (status === 'success') {
      color = chalk.green;
      // Checks for status, if == error chalk is red
    } else if (status === 'error') {
      color = chalk.red;
      // Any other, chalk is yellow
    } else {
      color = chalk.yellow;
    }

    // Stores message
    const msgcons = utcDate + ':\n   ' + chalk.black.bgGreen('[debugtool]') + ' ' + color(message);

    // Console log the message with chalk included
    console.log(msgcons);
  }
};
