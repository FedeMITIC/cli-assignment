/** Private
 * Contains only the questions related to the birth of a person.
 */
const birthQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the newborn? (Please insert the full name)',
    /* Validate user input */
    validate: (answer) => {
      if (answer.length > 0) {
        return true;
      }
      return 'Please insert a name';
    },
  },
  {
    type: 'input',
    name: 'relationship',
    message: 'What is your relationship to the newborn? (Father/Mother/...)',
    /* Validate user input */
    validate: (answer) => {
      if (answer.length > 0) {
        return true;
      }
      return 'Please insert a value';
    },
  },
];

module.exports = birthQuestions;
