/**
 * This a CLI utility to announce the birth or the death of a person.
 * It can be operated in two different ways:
 * 1) guided mode, where the user is guided with questions.
 * 2) solo mode, where the user issues a single command.
 *
 * Under the hood, only the solo mode is implemented: the guided mode indeed collect the data from the user,
 * then call the same utility in the solo mode with the right paramenters.
 *
 * The validation of the parameter is pretty dumb: I just make sure that they are defined, but I don't check if
 * they make sense (for example date of death after the current date or similar cases): this kind of check is out
 * of the scope.
 *
 * For now, it is not possible to correct the inserted data: if a user mistakenly insert a value, he/she has to redo the entire process.
 * However, the process is really fast and straightforward, it takes at most 1 minute to be completed.
 *
 * (c) Federico Macchi, federico.macchi (at) aalto.fi - https://github.com/FedeMITIC/cli-assignment
 * All packages used are under MIT (or similar) license.
 * This CLI has a MIT license, thus it is possible to modify or redistribuite it.
 */

// eslint-disable-next-line
'use strict'
// https://itnext.io/making-cli-app-with-ease-using-commander-js-and-inquirer-js-f3bbd52977ac
/* Import colors to pretty print stuff */
const colors = require('colors');
/* Commander is for advanced users only */
const programArgs = require('./src/commands');

/* Clean the screen */
process.stdout.write('\x1Bc');

/* Handlers for graceful shutdown (thank you SO) */
if (process.platform === 'win32"') {
  // eslint-disable-next-line
  const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on('SIGINT', () => process.emit('SIGINT'));
}
process.on('SIGINT', () => process.exit());
process.on('exit', (code) => {
  if (code === 0) {
    console.log('%s', colors.green.bold(`\n\nScript terminated successfully. [Exit code: ${code}]`));
  } else {
    console.log('%s', colors.red.bold(`\n\nScript terminated with a error. [Exit code: ${code}]`));
  }
});
/* Initializes the available commands */
programArgs.initializeCommands();
