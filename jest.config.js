// const { defaults } = require('jest-config');

// module.exports = {
//   ...defaults,
//   verbose: true,
//   setupFiles: ['./testUtils/configuration.js'],
// }

module.exports = async () => {
  return {
    verbose: true,
    setupFiles: ['./testUtils/configuration.js'],
  };
};
