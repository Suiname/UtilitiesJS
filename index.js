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

module.exports = {objectsEqual};
