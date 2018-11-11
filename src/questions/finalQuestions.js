const date = new Date();
// Use the template string to coerce automatically to a string
const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
/** Private
 * Contains the final common questions
 */
const finalQuestions = [
  {
    type: 'input',
    name: 'yourname',
    message: 'What is your name? (Please insert your full name)',
    /* Validate user input */
    validate: answer => answer.length > 0,
  },
  {
    type: 'input',
    name: 'date',
    message: `Please, insert the date of the birth/death [format dd/mm/YYYY] (defaults to today, ${today})`,
    default: today,
  },
];

module.exports = finalQuestions;
