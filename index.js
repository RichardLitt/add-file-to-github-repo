'use strict'

const fs = require('mz/fs')
// const path = require('path')
const axios = require('axios')
const env = require('./env')
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      authorization: `token ${env.GITHUB_TOKEN}`
    }
  }
})
const btoa = require('btoa')

module.exports = addFile

async function addFile (file, opts) {
  if (opts.repo.indexOf('/') === -1) {
    throw new Error('You need to specify repo in format user/repo')
  }

  // Read File
  const fileContents = await fs.readFileSync(file, 'utf8')

  // Commit
  await github.put(`/repos/${opts.repo}/contents/${opts.path}`, {
    path: opts.path || file,
    message: opts.message || `chore(${file}): init file`,
    content: btoa(fileContents),
    branch: opts.branch || 'master'
  }).catch(err => {
    if (err) {
      console.log(`Unable to add ${file}!`, err)
      process.exit(1)
    }
  }).then((res) => {
    console.log('Done')
  })
}
