const commander = require('commander');
const colors = require('colors');
/* If the script is launched without any command, let's use the guided mode */
const init = require('./greetings');
const _announceBirth = require('./birth');
const _announceDeath = require('./death');

const processCommands = (() => {
  const _date = new Date();
  // Use the template string to coerce automatically to a string
  const _today = `${_date.getDate()}/${_date.getMonth() + 1}/${_date.getFullYear()}`;
  const _printHelp = (error) => {
    if (error) {
      console.log('%s\n%s\n\n',
        colors.red.bold('One or more parameter was not recognised.'),
        colors.red.bold('Please see the help section printed below.'));
    }
    console.log('%s\n%s\n%s\n\n%s\n%s\n%s\n%s\n%s\n%s\n\n%s\n%s\n%s\n%s\n%s\n%s\n\n%s',
      'Hi, this is a CLI utility to announce the birth or the death of a person.',
      'Below you will find the available commands to interact with this tool along with their description.',
      'All the parameter are mandatory, except the date that defaults to today.',
      colors.green.bold('birth, b: announce the birth of a person'),
      colors.bgCyan.bold('The birth command must be combined with the following commands'),
      '-n, --name: the name of the newborn (please insert also the surname)',
      '-r, --relationship: your relationship to the newborn (father, mother, ...)',
      '-y, --yourname: your name (please use your fullname)',
      `-d, --date: the date of the birth (defaults to today, ${_today})`,
      colors.red.bold('death, d: announce the death of a person'),
      colors.bgCyan.bold('The death command must be combined with the following commands'),
      '-n, --name: the name of the deceased (please use the fullname)',
      '-r, --relationship: your relationship to the deceased (father, mother, ...)',
      '-y, --yourname: your name (please use your fullname)',
      `-d, --date: the date of the death (defaults to today, ${_today})`,
      colors.bgCyan.bold('Call this utility without any parameter to activate the guided version.'));
    if (error) {
      process.exit(1);
    }
  };
  const initializeCommands = () => {
    commander
      // Route all unrecognized commands and activate the guided mode.
      .command('*')
      .action(() => _printHelp(true));
    commander
      .command('birth')
      .alias('b')
      .description('Announce the birth of a person.')
      .option('-n, --name [value]', 'Name of the newborn')
      .option('-r, --relationship [value]', 'How are you related to the newbord? (father, mother, ...)')
      .option('-y, --yourname [value]', 'What is your name?')
      .option('-d, --date [value]', 'Date of the birth', _today)
      .action((args) => {
        _announceBirth.init(args.name, args.relationship, args.yourname, args.date);
      });
    commander
      .command('death')
      .alias('d')
      .description('Announce the death of a person.')
      .option('-a, --age [value]', 'How old was the deceased?')
      .option('-n, --name [value]', 'Name of the deceased')
      .option('-r, --relationship [value]', 'How are you related to the deceased? (father, mother, ...)')
      .option('-y, --yourname [value]', 'What is your name?')
      .option('-d, --date [value]', 'Date of the death', _today)
      .action((args) => {
        _announceDeath.init(args.age, args.name, args.relationship, args.yourname, args.date);
      });
    commander
      .command('help')
      .alias('-h')
      .alias('--h')
      .description('print the help text')
      .action(() => _printHelp(false));
    commander.parse(process.argv);
    // No parameter supplied, use the guided mode.
    if (commander.args.length === 0) {
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
