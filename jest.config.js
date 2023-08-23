module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/styleMock.js',
  },

  globals: {
    fetch: global.fetch,
  },
};
