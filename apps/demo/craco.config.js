const {
  aliasDangerous,
  configPaths,
  CracoAliasPlugin,
} = require('react-app-rewire-alias/lib/aliasDangerous');

const aliasMap = configPaths('./tsconfig.json'); // or jsconfig.paths.json

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { aliasDangerous: aliasMap },
    },
  ],
};
