module.exports = {
  install: (less, pluginManager, functions) => {
    functions.add("pi", (val) => {
      return val;
    });
  },
};
