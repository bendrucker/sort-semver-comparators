'use strict'

var test = require('tape')
var semver = require('semver')
var sort = require('./')

test(function (t) {
  var comparators = new semver.Range('<2 >1.2.5 >=3 >4').set[0]
  var sorted = sort(comparators)
  t.notEqual(comparators, sorted, 'sort copy')
  var string = sorted.map(function (comparator) {
    return comparator.value
  })
    .join(' ')
  t.equal(string, '>1.2.5 <2.0.0 >=3.0.0 >=5.0.0')
  t.end()
})
