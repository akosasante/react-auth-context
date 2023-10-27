module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
};
