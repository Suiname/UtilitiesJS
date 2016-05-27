//Library of Array and Object sorting algorithms
var sort = require('./sorting');
//Library of Discrete Data Structures
var data = require('./data');

function objectsEqual(o1, o2) {
	if (typeof o1 !== typeof o2)
		return false

	if (typeof o1 === 'object') {
		var k1 = Object.keys(o1);
		var k2 = Object.keys(o2);
		if (k1.length !== k2.length)
			return false
    for (var i = 0; i < k1.length; i++) {
      if (k1[i] !== k2[i]) {
        return false
      }
    }
		for (var i = 0; i < k1.length; i++) {
			if (! objectsEqual(o1[k1[i]], o2[k2[i]]))
      	return false
		}
    return true
	}
	else
		return o1 === o2
}

function randomInt(min, max) {
  if (min <= max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    throw new RangeError("Minimum must be less than or equal to Maximum")
  }
}

module.exports = {objectsEqual, randomInt, sort};
