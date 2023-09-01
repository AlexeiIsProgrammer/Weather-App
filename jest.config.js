module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
  },
  verbose: true,
  setupFiles: ["dotenv/config"],
  testEnvironment: 'jsdom',

  // globals: {
  //   fetch: global.fetch,
  // },
};
