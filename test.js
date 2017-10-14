import test from 'ava'
import lib from './lib'

test('lib.validate throws without file', async t => {
  const err = await t.throws(lib.validate())
  t.is(err.message, 'You must specify a file!')
})

test('lib.validate throws without repository', async t => {
  const err = await t.throws(lib.validate('unicorns'))
  t.is(err.message, 'You must specify a repository!')
})

test('Allows empty opts', async t => {
  await t.notThrows(lib.validate('unicorns', 'string/string', {}))
})

test('lib.validate throws with invalid GitHub repo', async t => {
  const err = await t.throws(lib.validate('unicorns', 'blank', {}))
  t.is(err.message, 'blank doesn\'t include `/`. The string must be in the form of "username/repo". e.g. isaacs/node-glob')
})

test('lib.validate throws with invalid type for file arg', async t => {
  const err = await t.throws(lib.validate(123, 'blank', {}))
  t.is(err.message, 'The file needs to be a String!')
})

test('lib.validate throws with invalid type for message opt', async t => {
  const err = await t.throws(lib.validate('string', 'blank', {message: 12}))
  t.is(err.message, 'message needs to be a String!')
})

test('lib.validate throws with invalid type for path opt', async t => {
  const err = await t.throws(lib.validate('string', 'blank', {path: 12}))
  t.is(err.message, 'path needs to be a String!')
})

test('getfilecontents failed if no file', async t => {
  const err = await t.throws(lib.getFileContents('NOFILE', 'blank/repo'))
  t.is(err.message, 'ENOENT: no such file or directory, open \'NOFILE\'')
})

test('getfilecontents not failed if file', async t => {
  const file = await lib.getFileContents('env.js', 'blank/repo')
  t.is(file, 'bW9kdWxlLmV4cG9ydHMgPSB7CiAgR0lUSFVCX1RPS0VOOiBwcm9jZXNzLmVudi5HSVRIVUJfVE9LRU4KfQo=')
})
