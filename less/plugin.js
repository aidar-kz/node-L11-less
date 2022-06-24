module.exports = {
  install: (less, pluginManager, functions) => {
    functions.add("pi", () => {
      return Math.PI;
    });
  },
};
