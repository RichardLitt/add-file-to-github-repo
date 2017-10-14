#!/usr/bin/env node
'use strict'

var meow = require('meow')
var addFileToGithubRepo = require('./')

var cli = meow([`
  Usage
    $ add-file-to-github-repo [input]

  Options
    -b, --branch  GitHub branch [Default: master]
    -i, --input   Manually specify input
    -r, --repo    Repository in form 'user/repo'
    -m, --message Commit message
    -p, --path    Where to put the file

  Examples
    $ add-file-to-github-repo file -r RichardLitt/add-file-to-github-repo
`], {
  alias: {
    r: 'repo',
    b: 'branch',
    i: 'input',
    m: 'message',
    p: 'path'
  }
})

cli.flags.branch = cli.flags.branch || 'master'
cli.flags.input = cli.flags.input || cli.input[0]

if (!cli.flags.repo) {
  console.log('You need to specify a repo! Format: username/repository')
  process.exit(1)
}

addFileToGithubRepo(cli.input[0], cli.flags)
