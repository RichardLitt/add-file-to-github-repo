#!/usr/bin/env node
'use strict'

const meow = require('meow')
const addFileToGithubRepo = require('./')

var cli = meow([`
  Usage
    $ add-file-to-github-repo [file] [repo] <opts>

  Options
    -b, --branch  GitHub branch [Default: default_branch of repo]
    -i, --input   Input file path
    -r, --repo    Repository. Format: 'user/repo'
    -m, --message Commit message [Default: chore(filename): init file]
    -p, --path    Where to put the file

  Examples
    $ GITHUB_TOKEN=abc... add-file-to-github-repo 'file' 'RichardLitt/add-file-to-github-repo'
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
