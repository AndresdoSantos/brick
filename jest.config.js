/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  preset: 'jest-expo',
  transform: { '^.+\\.ts?$': 'ts-jest' },
  moduleNameMapper: {
    '^hooks/(.*)$': '<rootDir>/hooks/$1',
    '^app/(.*)$': '<rootDir>/app/$1',
    '\\.svg': '<rootDir>/__mocks__/svg-mocks.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  setupFilesAfterEnv: ['./setup-test.js'],
}
