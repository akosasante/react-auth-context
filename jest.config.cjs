module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).(t|j)s?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
