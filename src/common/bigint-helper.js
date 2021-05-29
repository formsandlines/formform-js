const bigInt = require('big-integer');

export function getRandomBigInt(max) {
	return bigInt.randBetween(0,max);
}

