module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    "^@root(.*)$": "<rootDir>/src$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@API(.*)$": "<rootDir>/src/API$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@UI(.*)$": "<rootDir>/src/components/UI$1",
    "^@interfaces(.*)$": "<rootDir>/src/interfaces$1",
  },
  verbose: true,
  setupFiles: ["dotenv/config"],
  testEnvironment: 'jsdom',
  // globals: {
  //   fetch: global.fetch,
  // },
};
