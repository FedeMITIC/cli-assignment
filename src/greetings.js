const inquire = require('inquirer');
const colors = require('colors');
const _announceBirth = require('./birth');
const _announceDeath = require('./death');
/* Import the questions */
const _birthQuestions = require('./questions/birthQuestions');
const _deathQuestions = require('./questions/deathQuestions');
const _finalQuestions = require('./questions/finalQuestions');
const _initialQuestion = require('./questions/initialQuestions');

const greetings = (() => {
  const start = () => {
    inquire.prompt(_initialQuestion).then((answers) => {
      // Check if the user wants to quit the application.
      if (answers.operation[0] === 'Exit') {
        process.exit(0);
      }
      // Will contain all the data acquired from the user that will be forwarded to death.js/birth.js
      const userData = [];
      // Since there are only 2 possibilities, if isBirth is true the user wants to report the birth of someone, otherwise the death.
      const isBirth = answers.operation[0] === 'Birth';
      if (isBirth) {
        inquire.prompt([{
          type: 'confirm', name: 'confirmBirth', message: 'You are announcing a birth, is this OK?', default: true,
        }]).then((confirmation) => {
          if (confirmation.confirmBirth) {
            inquire.prompt(_birthQuestions).then((birthAnswers) => {
              console.log('\n%s', colors.green.bold('I received the following data:'));
              console.log(`\nName of the newborn: ${birthAnswers.name}`);
              console.log(`\nYour relationship to the newborn: ${birthAnswers.relationship}\n`);
              inquire.prompt([{
                type: 'confirm', name: 'confirmBirthData', message: 'Are the data displayed above correct?', default: true,
              }]).then((confirmation2) => {
                if (confirmation2.confirmBirthData) {
                  userData.push(birthAnswers);
                  inquire.prompt(_finalQuestions).then((finalAnswers) => {
                    console.log('\n%s', colors.green.bold('I received the following data:'));
                    console.log(`\nYour fullname: ${finalAnswers.yourname}`);
                    console.log(`\nDate of birth: ${finalAnswers.date}\n`);
                    inquire.prompt([{
                      type: 'confirm', name: 'confirmFinalData', message: 'Are the data displayed above correct?', default: true,
                    }]).then((confirmation3) => {
                      if (confirmation3.confirmFinalData) {
                        userData.push(finalAnswers);
                        _announceBirth.init(userData[0].name, userData[0].relationship, userData[1].yourname, userData[1].date);
                      } else {
                        return console.log('\n%s', colors.red.bold('Operation aborted.'));
                      }
                    });
                  });
                } else {
                  return console.log('\n%s', colors.red.bold('Operation aborted.'));
                }
              });
            });
          } else {
            return console.log('\n%s', colors.red.bold('Operation aborted.'));
          }
        });
      } else {
        inquire.prompt([{
          type: 'confirm', name: 'confirmDeath', message: 'You are announcing a death, is this OK?', default: true,
        }]).then((confirmation) => {
          if (confirmation.confirmDeath) {
            inquire.prompt(_deathQuestions).then((deathAnswers) => {
              console.log('\n%s', colors.green.bold('I received the following data:'));
              console.log(`\nAge of the deceased: ${deathAnswers.name}`);
              console.log(`\nName of the deceased: ${deathAnswers.name}`);
              console.log(`\nYour relationship to the deceased: ${deathAnswers.relationship}\n`);
              inquire.prompt([{
                type: 'confirm', name: 'confirmDeathData', message: 'Are the data displayed above correct?', default: true,
              }]).then((confirmation2) => {
                if (confirmation2.confirmDeathData) {
                  userData.push(deathAnswers);
                  inquire.prompt(_finalQuestions).then((finalAnswers) => {
                    console.log('\n%s', colors.green.bold('I received the following data:'));
                    console.log(`\nYour fullname: ${finalAnswers.yourname}`);
                    console.log(`\nDate of death: ${finalAnswers.date}\n`);
                    inquire.prompt([{
                      type: 'confirm', name: 'confirmFinalData', message: 'Are the data displayed above correct?', default: true,
                    }]).then((confirmation3) => {
                      if (confirmation3.confirmFinalData) {
                        userData.push(finalAnswers);
                        _announceDeath.init(userData[0].age, userData[0].name, userData[0].relationship, userData[1].yourname, userData[1].date);
                      } else {
                        return console.log('\n%s', colors.red.bold('Operation aborted.'));
                      }
                    });
                  });
                } else {
                  return console.log('\n%s', colors.red.bold('Operation aborted.'));
                }
              });
            });
          } else {
            return console.log('\n%s', colors.red.bold('Operation aborted.'));
          }
        });
      }
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
