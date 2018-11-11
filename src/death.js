const death = (() => {
  const init = () => {
    console.log('Hi, I\'m announce death');
  };
  return {
    init,
  };
})();

module.exports = death;
