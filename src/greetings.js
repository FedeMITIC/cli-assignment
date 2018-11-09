const inquire = require('inquirer');

const greetings = (() => {
  /* Private */
  const _initialQuestions = [
    {
      type: 'checkbox',
      name: 'operation',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Announce the birth of a person',
          checked: true,
        },
        {
          name: 'Announce the death of a person',
        },
        {
          name: 'Exit',
        },
      ],
      /* Create a simple validator */
      validate: (answer) => {
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
