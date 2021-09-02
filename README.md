# speak-something

## Install

```sh
$ npm install --save speak-something
```

## options
* rate[number]: the speed at which the utterance will be spoken at
* lang[zh|en|...]: the language of the utterance
* pitch[number]: the pitch at which the utterance will be spoken at
* volume[number < 1]: the volume that the utterance will be spoken at

## Usage

```js
const { speakSomething } = require('speak-something')
```

## Example

```js
const { speakSomething } = require('speak-something')

speakSomething('测试')
speakSomething('测试', {
  rate: 2,
  lang: 'zh',
  pitch: 2,
  volume: 0.5
})
speakSomething('say something', {
  rate: 1,
  lang: 'en'
})
```