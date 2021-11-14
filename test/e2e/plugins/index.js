// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (on, config) => {
  return {
    ...config,
    baseUrl: 'http://localhost:3000',
    fixturesFolder: 'test/e2e/fixtures',
    integrationFolder: 'test/e2e/specs',
    supportFile: 'test/e2e/support/index.js',
  }
}
