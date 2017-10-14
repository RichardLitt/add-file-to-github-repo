'use strict'

const lib = require('./lib')
const env = require('./env')

const axios = require('axios')
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      authorization: `token ${env.GITHUB_TOKEN}`
    }
  }
})

module.exports = async function request (file, repository, opts) {
  // Validate all the things
  await lib.validate(file, repository, opts)

  // Get file contents
  const fileContents = await lib.getFileContents(file)

  const path = opts.path || file

  // Put
  await github.put(`/repos/${repository}/contents/${path}`, {
    content: fileContents,
    message: opts.message || `chore(${file}): init file`,
    path: path,
    branch: opts.branch || 'master' // The only optional arg
  })
    .catch(err => {
      if (err) {
        console.log(`Unable to add ${file}!`, err)
        process.exit(1)
      }
    }).then((res) => {
      console.log('Done')
    })
}
