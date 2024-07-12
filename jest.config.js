module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": "jest-transform-css",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
