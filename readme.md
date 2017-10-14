# add-file-to-github-repo

[![Build Status](https://travis-ci.org/RichardLitt/add-file-to-github-repo.svg?branch=master)](https://travis-ci.org/RichardLitt/add-file-to-github-repo)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Add a file to a GitHub repository

## Install

```
$ npm install --save add-file-to-github-repo
```

## Usage

```js
const addFileToGithubRepo = require('add-file-to-github-repo');

addFileToGithubRepo('unicorns', {
  path: '.github/unicorns', repo: 'RichardLitt/here'
})
//=> 'Done'
```

## API

### addFileToGithubRepo(input, [options])

##### input

Type: `string`

The file.

#### options

#### branch

Type: `string`
Default: `master`

The branch to commit to.

#### repo

Type: `string`

In the format 'user/repo'

#### message

Type: `string`

The commit message. Default: `chore(filename): init file.`

#### path

Type: `string`

Where to save the file.


## CLI

```
$ npm install --global add-file-to-github-repo
```

```
$ add-file-to-github-repo --help

  Usage
    add-file-to-github-repo [input]

  Options
    -b, --branch  GitHub branch [Default: master]
    -i, --input   Manually specify input
    -r, --repo    Repository in form 'user/repo'
    -m, --message Commit message
    -p, --path    Where to put the file

  Examples
    $ add-file-to-github-repo -p ".github/first-timers.yml" -r "RichardLitt/add-file-to-github-repo"
```

## Contribute

PRs accepted. Check out the [issues](https://github.com/RichardLitt/add-file-to-github-repo/issues)!

## License

MIT © [Richard Littauer](https://burntfen.com)
