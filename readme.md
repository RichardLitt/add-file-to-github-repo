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

addFileToGithubRepo('unicorns');
//=> 'unicorns & rainbows'
```

## API

### addFileToGithubRepo(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global add-file-to-github-repo
```

```
$ add-file-to-github-repo --help

  Usage
    add-file-to-github-repo [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ add-file-to-github-repo
    unicorns & rainbows
    $ add-file-to-github-repo ponies
    ponies & rainbows
```

## Contribute

PRs accepted. Check out the [issues](https://github.com/RichardLitt/add-file-to-github-repo/issues)!

## License

MIT © [Richard Littauer](https://burntfen.com)
