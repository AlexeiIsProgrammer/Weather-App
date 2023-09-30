module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    "^@root(.*)$": "<rootDir>/src$1",
    "^@Components(.*)$": "<rootDir>/src/components$1",
    "^@Hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@Store(.*)$": "<rootDir>/src/store$1",
    "^@API(.*)$": "<rootDir>/src/API$1",
    "^@Utils(.*)$": "<rootDir>/src/utils$1",
    "^@Constants(.*)$": "<rootDir>/src/constants$1",
    "^@UI(.*)$": "<rootDir>/src/components/UI$1",
    "^@Interfaces(.*)$": "<rootDir>/src/interfaces$1",
    "^@Theme(.*)$": "<rootDir>/src/theme$1",
  },
  verbose: true,
  setupFiles: ["dotenv/config"],
  testEnvironment: 'jsdom',
};
