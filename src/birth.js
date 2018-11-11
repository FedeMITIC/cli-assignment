const birth = (() => {
  const init = () => {
    console.log('Hi, I\'m announce birth');
  };
  return {
    init,
  };
})();

module.exports = birth;
