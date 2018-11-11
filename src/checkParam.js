const deathArgs = ['Age of the deceased', 'Name of the deceased', 'Your relationship to the deceased', 'Your fullname', 'Date of death'];
const birthArgs = ['Name of the newborn', 'Your relationship to the newborn', 'Your fullname', 'Date of birth'];

module.exports = function checkParams(...args) {
  const errors = [];
  for (let i = 0; i < args.length; i += 1) {
    if (args[i] === undefined) {
      if (args[0] === 'death') {
        errors.push(`${deathArgs[i - 1]}`);
      } else {
        errors.push(`${birthArgs[i - 1]}`);
      }
    }
  }
  return errors;
};
