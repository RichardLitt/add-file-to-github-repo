# add-file-to-github-repo

[![Greenkeeper badge](https://badges.greenkeeper.io/RichardLitt/add-file-to-github-repo.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/RichardLitt/add-file-to-github-repo.svg?branch=master)](https://travis-ci.org/RichardLitt/add-file-to-github-repo) [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Add a file to a GitHub repository

## Install

```
$ npm install --save add-file-to-github-repo
```

## Usage

```js
const addFileToGithubRepo = require('add-file-to-github-repo');

addFileToGithubRepo('unicorns', 'RichardLitt/here', {
  path: '.github/unicorns'
})
//=> 'Done'
```

## API

### addFileToGithubRepo(file, repository, [options])

##### file

Type: `string`

The file.

#### repo

Type: `string`

In the format 'user/repo'

#### options

#### branch

Type: `string`
Default: `master`

The branch to commit to.

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
    $ add-file-to-github-repo [file] [repo] <opts>

  Options
    -b, --branch  GitHub branch [Default: master]
    -i, --input   Manually specify input file
    -r, --repo    Repository in form 'user/repo'
    -m, --message Commit message
    -p, --path    Where to put the file

  Examples
    $ GITHUB_TOKEN=abc... add-file-to-github-repo 'file' 'RichardLitt/add-file-to-github-repo'
```

## Contribute

PRs accepted. Check out the [issues](https://github.com/RichardLitt/add-file-to-github-repo/issues)!

## License

[MIT](LICENSE) © [Richard Littauer](https://burntfen.com)
