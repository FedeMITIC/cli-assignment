const commander = require('commander');
const colors = require('colors');
/* If the script is launched without any command, let's use the guided mode */
const init = require('./greetings');

const processCommands = (() => {
  const initializeCommands = () => {
    commander
      .command('*')
      .action(() => {
        console.log('%s', colors.gray.bold('Starting the CLI in guided mode'));
        init.start();
      });
    commander
      .command('birth')
      .description('Announce the birth of a person.')
      .action(() => {
        console.log('called with birth parameter');
      });
    commander
      .command('death')
      .description('Announce the death of a person.')
      .action(() => {
        console.log('called with death parameter');
      });
    commander.parse(process.argv);
    if (commander.args.length === 0) {
      console.log('%s', colors.gray.bold('Starting the CLI in guided mode'));
      init.start();
    }
  };
  /**
   * Exposes public functions and variables
   */
  return {
    initializeCommands,
  };
})();


module.exports = processCommands;
