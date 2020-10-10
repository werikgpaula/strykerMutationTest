/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using a preset. Please see the handbook for more information: https://github.com/stryker-mutator/stryker-handbook/blob/master/stryker/guides/angular.md#angular",
  mutate: [
    "src/**/*.js",
    "!src/**/range.js",
    "!src/**/*.spec.js",
    "!src/test.js",
    "!src/environments/*.js",
  ],
  testRunner: "jest",
  reporters: ["progress", "clear-text", "html"],
  concurrency: 2,
  concurrency_comment:
    "Recommended to use about half of your available cores when running stryker with angular",
  coverageAnalysis: "perTest",
};
