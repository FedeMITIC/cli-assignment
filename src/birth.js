const colors = require('colors');
const checkParams = require('./checkParam');

const birth = (() => {
  const init = (name, rel, yname, date) => {
    console.log('Hi, I\'m the announce birth service.');
    console.log(`I received the following data:
      \nName of the newborn: ${name},
      \nYour relationship to the newborn: ${rel},
      \nYour full name is: ${yname},
      \nBirthday: ${date}`);
    const status = checkParams('birth', name, rel, yname, date);
    if (status.length === 0) {
      console.log('%s', colors.green.bold('\nEverything is ok. The registration process is now complete.'));
    } else {
      console.log('%s', colors.red.bold('\nWe are still missing some data.'));
      for (let i = 0; i < status.length; i += 1) {
        console.log(`${status[i]}: missing`);
      }
      console.log('\nRemember that all the field are mandatory except the date (defaults to today');
    }
  };
  return {
    init,
  };
})();

module.exports = birth;
