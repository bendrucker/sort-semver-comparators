# sort-semver-comparators [![Build Status](https://travis-ci.org/bendrucker/sort-semver-comparators.svg?branch=master)](https://travis-ci.org/bendrucker/sort-semver-comparators)

> Sort semver comparators


## Install

```
$ npm install --save sort-semver-comparators
```


## Usage

```js
var sortComparators = require('sort-semver-comparators')
var Comparator = require('semver').Comparator

sortComparators([new Comparator('>5'), new Comparator('<3')])
//=> ['<Comparator "<3.0.0">', '<Comparator ">=6.0.0">']
```

## API

#### `sortComparators(comparators)` -> `array[comparator]`

Sorts and returns a copy of the comparators.

##### comparators

*Required*  
Type: `array[comparators]`

An array of `semver.Comparator` instances.

## License

MIT © [Ben Drucker](http://bendrucker.me)
