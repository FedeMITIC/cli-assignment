const colors = require('colors');
const checkParams = require('./checkParam');

const death = (() => {
  const _displayAnnounce = (age, name, rel, yname, date) => {
    console.log('\n%s\n\n', colors.red.bold('Announce of death:'));
    console.log(`It is with great sadness that ${yname}, ${rel} of ${name}, announces his passing on ${date} at the age of ${age} years.`);
  };
  const init = (age, name, rel, yname, date) => {
    console.log('Hi, I\'m the announce death service.');
    console.log(`I received the following data:
      \nAge of the deceased: ${age},
      \nName of the deceased: ${name},
      \nYour relationship to the deceased: ${rel},
      \nYour full name is: ${yname},
      \nBirthday: ${date}`);
    const status = checkParams('death', age, name, rel, yname, date);
    if (status.length === 0) {
      console.log('%s', colors.green.bold('\nEverything is ok. The registration process is now complete.'));
    } else {
      console.log('%s', colors.red.bold('\nWe are still missing some data.'));
      for (let i = 0; i < status.length; i += 1) {
        console.log(`${status[i]}: missing`);
      }
      console.log('\nRemember that all the field are mandatory except the date (defaults to today');
    }
    _displayAnnounce(age, name, rel, yname, date);
  };
  return {
    init,
  };
})();

module.exports = death;
