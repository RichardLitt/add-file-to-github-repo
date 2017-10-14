#!/usr/bin/env node
'use strict'

const meow = require('meow')
const addFileToGithubRepo = require('./')

var cli = meow([`
  Usage
    $ add-file-to-github-repo [file] [repo] <opts>

  Options
    -b, --branch  GitHub branch [Default: master]
    -i, --input   Manually specify input
    -r, --repo    Repository in form 'user/repo'
    -m, --message Commit message
    -p, --path    Where to put the file

  Examples
    $ add-file-to-github-repo 'file' 'RichardLitt/add-file-to-github-repo'
`], {
  alias: {
    r: 'repo',
    b: 'branch',
    i: 'input',
    m: 'message',
    p: 'path'
  }
})

const input = cli.flags.input || cli.input[0]
const repo = cli.flags.repo || cli.input[1]

addFileToGithubRepo(input, repo, cli.flags)
