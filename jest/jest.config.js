module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@@/(.*)$': '<rootDir>/src/.umi/$1',
  },
  moduleDirectories: ['node_modules', 'src/.umi', 'src/.umi-test'],
};