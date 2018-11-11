/** Private
 * Contains only the questions related to the death of a person.
 */
const deathQuestions = [
  {
    type: 'input',
    name: 'age',
    message: 'What was the age of the deceased?',
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
    name: 'name',
    message: 'What was the name of the deceased? (Please insert the full name)',
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
    message: 'What is your relationship to the deceased? (Father/Mother/Daughter/Son/...)',
    /* Validate user input */
    validate: (answer) => {
      if (answer.length > 0) {
        return true;
      }
      return 'Please insert a value';
    },
  },
];

module.exports = deathQuestions;
