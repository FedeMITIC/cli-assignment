const inquire = require('inquirer');
const _announceBirth = require('./birth');
const _announceDeath = require('./death');

const greetings = (() => {
  const _exitCLI = () => process.exit(0);
  /* Private */
  const _initialQuestions = [
    {
      type: 'checkbox',
      name: 'operation',
      message: 'What do you want to do?\n  Please check 1 of the options below.\n ',
      choices: [
        {
          name: 'Announce the birth of a person.',
        },
        {
          name: 'Announce the death of a person.',
        },
        {
          name: 'Exit',
        },
      ],
      /* Validate user input */
      validate: (answer) => {
        // I want just one answer.
        if (answer.length < 1) {
          return 'Please select one of the option above.';
        }
        if (answer.length > 1) {
          return 'Please select just one option.';
        }
        return true;
      },
    },
  ];
  const start = () => {
    inquire.prompt(_initialQuestions).then((answers) => {
      console.log(JSON.stringify(answers, null, '  '));
    });
  };
  /**
   * Exposes public functions and variables
   */
  return {
    start,
  };
})();

module.exports = greetings;
