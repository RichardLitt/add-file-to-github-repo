'use strict'

const querystring = require('querystring')
const fs = require('mz/fs')
const path = require('path')
const axios = require('axios')
const env = require('./env')
const github = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    common: {
      authorization: `token ${env.GITHUB_TOKEN}`,
    }
  }
})

module.exports = async function addFile(file, opts) {
  if (opts.repo.indexOf('/') === -1) {
    throw new Error('You need to specify repo in format user/repo')
  }

  // Read File
  file = await fs.readFile(file, 'utf8')
  // Commit
  // await github.put(`/repos/${opts.repo}/contents/${opts.file}?ref=${opts.branch}`, {
  //       path: opts.path || '',
  //       message: opts.message || `chore(${file}): init file`,
  //       content: file,
  //       branch: opts.branch,
  //     }).catch(err => {
  //       if (err) {
  //         console.log(`Unable to add ${file}!`)
  //       }
  //     }).then(console.log)
}
