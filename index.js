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

// Not tested, because don't want to overload their API
// This has the dual benefit of validating the GitHub repository
async function getDefaultBranch (repository) {
  const {data: {default_branch: branch}} = await github.get(`/repos/${repository}`)
  return branch
}

module.exports = async function request (file, repository, opts) {
  // Validate all the things
  await lib.validate(file, repository, opts)

  // Get file contents
  const content = await lib.getFileContents(file)
  const path = opts.path || file
  const branch = opts.branch || await getDefaultBranch(repository)

  // Put
  await github.put(`/repos/${repository}/contents/${path}`, {
    content,
    message: opts.message || `chore(${file}): init file`,
    path,
    branch // The only optional arg
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
