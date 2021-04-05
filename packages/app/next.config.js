const withTM = require('next-transpile-modules');

module.exports = withTM(
  // Need to list all libs manually, see e.g.
  // https://github.com/martpie/next-transpile-modules/issues/143#issuecomment-812415305
  ['@demo/lib-utils', '@demo/lib-ui']
);
