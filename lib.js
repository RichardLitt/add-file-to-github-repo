const btoa = require('btoa')
const parse = require('parse-user-repo')
const fs = require('mz/fs')

async function getFileContents (file) {
  const fileContents = await fs.readFileSync(file, 'utf8')
  return btoa(fileContents)
}

async function validate (file, repository, opts) {
  opts = opts || {}

  if (!file) {
    throw new TypeError('You must specify a file!')
  }

  if (typeof file !== 'string') {
    throw new TypeError('The file needs to be a String!')
  }

  if (opts.path && typeof opts.path !== 'string') {
    throw new TypeError('path needs to be a String!')
  }

  if (opts.message && typeof opts.message !== 'string') {
    throw new TypeError('message needs to be a String!')
  }

  if (!repository) {
    throw new Error('You must specify a repository!')
  }

  // This throws if it doesn't work, nicely.
  await parse(repository)
}

module.exports = {
  validate,
  getFileContents
}
