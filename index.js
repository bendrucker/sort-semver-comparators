'use strict'

var semver = require('semver')

module.exports = function sortSemverComparators (comparators) {
  return comparators.slice().sort(function (a, b) {
    return semver.compare(a.semver.toString(), b.semver.toString())
  })
}
