const initialQuestion = [
  {
    type: 'checkbox',
    name: 'operation',
    message: 'Please check 1 of the options below.\nDo you want to announce the birth OR the death of a person?',
    choices: [
      {
        name: 'Birth',
      },
      {
        name: 'Death',
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

module.exports = initialQuestion;
