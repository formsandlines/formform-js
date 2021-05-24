(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory();
	else
		root["formform"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/big-integer/BigInteger.js":
/*!************************************************!*\
  !*** ./node_modules/big-integer/BigInteger.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;var bigInt = (function (undefined) {
    "use strict";

    var BASE = 1e7,
        LOG_BASE = 7,
        MAX_INT = 9007199254740992,
        MAX_INT_ARR = smallToArray(MAX_INT),
        DEFAULT_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";

    var supportsNativeBigInt = typeof BigInt === "function";

    function Integer(v, radix, alphabet, caseSensitive) {
        if (typeof v === "undefined") return Integer[0];
        if (typeof radix !== "undefined") return +radix === 10 && !alphabet ? parseValue(v) : parseBase(v, radix, alphabet, caseSensitive);
        return parseValue(v);
    }

    function BigInteger(value, sign) {
        this.value = value;
        this.sign = sign;
        this.isSmall = false;
    }
    BigInteger.prototype = Object.create(Integer.prototype);

    function SmallInteger(value) {
        this.value = value;
        this.sign = value < 0;
        this.isSmall = true;
    }
    SmallInteger.prototype = Object.create(Integer.prototype);

    function NativeBigInt(value) {
        this.value = value;
    }
    NativeBigInt.prototype = Object.create(Integer.prototype);

    function isPrecise(n) {
        return -MAX_INT < n && n < MAX_INT;
    }

    function smallToArray(n) { // For performance reasons doesn't reference BASE, need to change this function if BASE changes
        if (n < 1e7)
            return [n];
        if (n < 1e14)
            return [n % 1e7, Math.floor(n / 1e7)];
        return [n % 1e7, Math.floor(n / 1e7) % 1e7, Math.floor(n / 1e14)];
    }

    function arrayToSmall(arr) { // If BASE changes this function may need to change
        trim(arr);
        var length = arr.length;
        if (length < 4 && compareAbs(arr, MAX_INT_ARR) < 0) {
            switch (length) {
                case 0: return 0;
                case 1: return arr[0];
                case 2: return arr[0] + arr[1] * BASE;
                default: return arr[0] + (arr[1] + arr[2] * BASE) * BASE;
            }
        }
        return arr;
    }

    function trim(v) {
        var i = v.length;
        while (v[--i] === 0);
        v.length = i + 1;
    }

    function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
        var x = new Array(length);
        var i = -1;
        while (++i < length) {
            x[i] = 0;
        }
        return x;
    }

    function truncate(n) {
        if (n > 0) return Math.floor(n);
        return Math.ceil(n);
    }

    function add(a, b) { // assumes a and b are arrays with a.length >= b.length
        var l_a = a.length,
            l_b = b.length,
            r = new Array(l_a),
            carry = 0,
            base = BASE,
            sum, i;
        for (i = 0; i < l_b; i++) {
            sum = a[i] + b[i] + carry;
            carry = sum >= base ? 1 : 0;
            r[i] = sum - carry * base;
        }
        while (i < l_a) {
            sum = a[i] + carry;
            carry = sum === base ? 1 : 0;
            r[i++] = sum - carry * base;
        }
        if (carry > 0) r.push(carry);
        return r;
    }

    function addAny(a, b) {
        if (a.length >= b.length) return add(a, b);
        return add(b, a);
    }

    function addSmall(a, carry) { // assumes a is array, carry is number with 0 <= carry < MAX_INT
        var l = a.length,
            r = new Array(l),
            base = BASE,
            sum, i;
        for (i = 0; i < l; i++) {
            sum = a[i] - base + carry;
            carry = Math.floor(sum / base);
            r[i] = sum - carry * base;
            carry += 1;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    BigInteger.prototype.add = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.subtract(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall) {
            return new BigInteger(addSmall(a, Math.abs(b)), this.sign);
        }
        return new BigInteger(addAny(a, b), this.sign);
    };
    BigInteger.prototype.plus = BigInteger.prototype.add;

    SmallInteger.prototype.add = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.subtract(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            if (isPrecise(a + b)) return new SmallInteger(a + b);
            b = smallToArray(Math.abs(b));
        }
        return new BigInteger(addSmall(b, Math.abs(a)), a < 0);
    };
    SmallInteger.prototype.plus = SmallInteger.prototype.add;

    NativeBigInt.prototype.add = function (v) {
        return new NativeBigInt(this.value + parseValue(v).value);
    }
    NativeBigInt.prototype.plus = NativeBigInt.prototype.add;

    function subtract(a, b) { // assumes a and b are arrays with a >= b
        var a_l = a.length,
            b_l = b.length,
            r = new Array(a_l),
            borrow = 0,
            base = BASE,
            i, difference;
        for (i = 0; i < b_l; i++) {
            difference = a[i] - borrow - b[i];
            if (difference < 0) {
                difference += base;
                borrow = 1;
            } else borrow = 0;
            r[i] = difference;
        }
        for (i = b_l; i < a_l; i++) {
            difference = a[i] - borrow;
            if (difference < 0) difference += base;
            else {
                r[i++] = difference;
                break;
            }
            r[i] = difference;
        }
        for (; i < a_l; i++) {
            r[i] = a[i];
        }
        trim(r);
        return r;
    }

    function subtractAny(a, b, sign) {
        var value;
        if (compareAbs(a, b) >= 0) {
            value = subtract(a, b);
        } else {
            value = subtract(b, a);
            sign = !sign;
        }
        value = arrayToSmall(value);
        if (typeof value === "number") {
            if (sign) value = -value;
            return new SmallInteger(value);
        }
        return new BigInteger(value, sign);
    }

    function subtractSmall(a, b, sign) { // assumes a is array, b is number with 0 <= b < MAX_INT
        var l = a.length,
            r = new Array(l),
            carry = -b,
            base = BASE,
            i, difference;
        for (i = 0; i < l; i++) {
            difference = a[i] + carry;
            carry = Math.floor(difference / base);
            difference %= base;
            r[i] = difference < 0 ? difference + base : difference;
        }
        r = arrayToSmall(r);
        if (typeof r === "number") {
            if (sign) r = -r;
            return new SmallInteger(r);
        } return new BigInteger(r, sign);
    }

    BigInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        if (this.sign !== n.sign) {
            return this.add(n.negate());
        }
        var a = this.value, b = n.value;
        if (n.isSmall)
            return subtractSmall(a, Math.abs(b), this.sign);
        return subtractAny(a, b, this.sign);
    };
    BigInteger.prototype.minus = BigInteger.prototype.subtract;

    SmallInteger.prototype.subtract = function (v) {
        var n = parseValue(v);
        var a = this.value;
        if (a < 0 !== n.sign) {
            return this.add(n.negate());
        }
        var b = n.value;
        if (n.isSmall) {
            return new SmallInteger(a - b);
        }
        return subtractSmall(b, Math.abs(a), a >= 0);
    };
    SmallInteger.prototype.minus = SmallInteger.prototype.subtract;

    NativeBigInt.prototype.subtract = function (v) {
        return new NativeBigInt(this.value - parseValue(v).value);
    }
    NativeBigInt.prototype.minus = NativeBigInt.prototype.subtract;

    BigInteger.prototype.negate = function () {
        return new BigInteger(this.value, !this.sign);
    };
    SmallInteger.prototype.negate = function () {
        var sign = this.sign;
        var small = new SmallInteger(-this.value);
        small.sign = !sign;
        return small;
    };
    NativeBigInt.prototype.negate = function () {
        return new NativeBigInt(-this.value);
    }

    BigInteger.prototype.abs = function () {
        return new BigInteger(this.value, false);
    };
    SmallInteger.prototype.abs = function () {
        return new SmallInteger(Math.abs(this.value));
    };
    NativeBigInt.prototype.abs = function () {
        return new NativeBigInt(this.value >= 0 ? this.value : -this.value);
    }


    function multiplyLong(a, b) {
        var a_l = a.length,
            b_l = b.length,
            l = a_l + b_l,
            r = createArray(l),
            base = BASE,
            product, carry, i, a_i, b_j;
        for (i = 0; i < a_l; ++i) {
            a_i = a[i];
            for (var j = 0; j < b_l; ++j) {
                b_j = b[j];
                product = a_i * b_j + r[i + j];
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
                r[i + j + 1] += carry;
            }
        }
        trim(r);
        return r;
    }

    function multiplySmall(a, b) { // assumes a is array, b is number with |b| < BASE
        var l = a.length,
            r = new Array(l),
            base = BASE,
            carry = 0,
            product, i;
        for (i = 0; i < l; i++) {
            product = a[i] * b + carry;
            carry = Math.floor(product / base);
            r[i] = product - carry * base;
        }
        while (carry > 0) {
            r[i++] = carry % base;
            carry = Math.floor(carry / base);
        }
        return r;
    }

    function shiftLeft(x, n) {
        var r = [];
        while (n-- > 0) r.push(0);
        return r.concat(x);
    }

    function multiplyKaratsuba(x, y) {
        var n = Math.max(x.length, y.length);

        if (n <= 30) return multiplyLong(x, y);
        n = Math.ceil(n / 2);

        var b = x.slice(n),
            a = x.slice(0, n),
            d = y.slice(n),
            c = y.slice(0, n);

        var ac = multiplyKaratsuba(a, c),
            bd = multiplyKaratsuba(b, d),
            abcd = multiplyKaratsuba(addAny(a, b), addAny(c, d));

        var product = addAny(addAny(ac, shiftLeft(subtract(subtract(abcd, ac), bd), n)), shiftLeft(bd, 2 * n));
        trim(product);
        return product;
    }

    // The following function is derived from a surface fit of a graph plotting the performance difference
    // between long multiplication and karatsuba multiplication versus the lengths of the two arrays.
    function useKaratsuba(l1, l2) {
        return -0.012 * l1 - 0.012 * l2 + 0.000015 * l1 * l2 > 0;
    }

    BigInteger.prototype.multiply = function (v) {
        var n = parseValue(v),
            a = this.value, b = n.value,
            sign = this.sign !== n.sign,
            abs;
        if (n.isSmall) {
            if (b === 0) return Integer[0];
            if (b === 1) return this;
            if (b === -1) return this.negate();
            abs = Math.abs(b);
            if (abs < BASE) {
                return new BigInteger(multiplySmall(a, abs), sign);
            }
            b = smallToArray(abs);
        }
        if (useKaratsuba(a.length, b.length)) // Karatsuba is only faster for certain array sizes
            return new BigInteger(multiplyKaratsuba(a, b), sign);
        return new BigInteger(multiplyLong(a, b), sign);
    };

    BigInteger.prototype.times = BigInteger.prototype.multiply;

    function multiplySmallAndArray(a, b, sign) { // a >= 0
        if (a < BASE) {
            return new BigInteger(multiplySmall(b, a), sign);
        }
        return new BigInteger(multiplyLong(b, smallToArray(a)), sign);
    }
    SmallInteger.prototype._multiplyBySmall = function (a) {
        if (isPrecise(a.value * this.value)) {
            return new SmallInteger(a.value * this.value);
        }
        return multiplySmallAndArray(Math.abs(a.value), smallToArray(Math.abs(this.value)), this.sign !== a.sign);
    };
    BigInteger.prototype._multiplyBySmall = function (a) {
        if (a.value === 0) return Integer[0];
        if (a.value === 1) return this;
        if (a.value === -1) return this.negate();
        return multiplySmallAndArray(Math.abs(a.value), this.value, this.sign !== a.sign);
    };
    SmallInteger.prototype.multiply = function (v) {
        return parseValue(v)._multiplyBySmall(this);
    };
    SmallInteger.prototype.times = SmallInteger.prototype.multiply;

    NativeBigInt.prototype.multiply = function (v) {
        return new NativeBigInt(this.value * parseValue(v).value);
    }
    NativeBigInt.prototype.times = NativeBigInt.prototype.multiply;

    function square(a) {
        //console.assert(2 * BASE * BASE < MAX_INT);
        var l = a.length,
            r = createArray(l + l),
            base = BASE,
            product, carry, i, a_i, a_j;
        for (i = 0; i < l; i++) {
            a_i = a[i];
            carry = 0 - a_i * a_i;
            for (var j = i; j < l; j++) {
                a_j = a[j];
                product = 2 * (a_i * a_j) + r[i + j] + carry;
                carry = Math.floor(product / base);
                r[i + j] = product - carry * base;
            }
            r[i + l] = carry;
        }
        trim(r);
        return r;
    }

    BigInteger.prototype.square = function () {
        return new BigInteger(square(this.value), false);
    };

    SmallInteger.prototype.square = function () {
        var value = this.value * this.value;
        if (isPrecise(value)) return new SmallInteger(value);
        return new BigInteger(square(smallToArray(Math.abs(this.value))), false);
    };

    NativeBigInt.prototype.square = function (v) {
        return new NativeBigInt(this.value * this.value);
    }

    function divMod1(a, b) { // Left over from previous version. Performs faster than divMod2 on smaller input sizes.
        var a_l = a.length,
            b_l = b.length,
            base = BASE,
            result = createArray(b.length),
            divisorMostSignificantDigit = b[b_l - 1],
            // normalization
            lambda = Math.ceil(base / (2 * divisorMostSignificantDigit)),
            remainder = multiplySmall(a, lambda),
            divisor = multiplySmall(b, lambda),
            quotientDigit, shift, carry, borrow, i, l, q;
        if (remainder.length <= a_l) remainder.push(0);
        divisor.push(0);
        divisorMostSignificantDigit = divisor[b_l - 1];
        for (shift = a_l - b_l; shift >= 0; shift--) {
            quotientDigit = base - 1;
            if (remainder[shift + b_l] !== divisorMostSignificantDigit) {
                quotientDigit = Math.floor((remainder[shift + b_l] * base + remainder[shift + b_l - 1]) / divisorMostSignificantDigit);
            }
            // quotientDigit <= base - 1
            carry = 0;
            borrow = 0;
            l = divisor.length;
            for (i = 0; i < l; i++) {
                carry += quotientDigit * divisor[i];
                q = Math.floor(carry / base);
                borrow += remainder[shift + i] - (carry - q * base);
                carry = q;
                if (borrow < 0) {
                    remainder[shift + i] = borrow + base;
                    borrow = -1;
                } else {
                    remainder[shift + i] = borrow;
                    borrow = 0;
                }
            }
            while (borrow !== 0) {
                quotientDigit -= 1;
                carry = 0;
                for (i = 0; i < l; i++) {
                    carry += remainder[shift + i] - base + divisor[i];
                    if (carry < 0) {
                        remainder[shift + i] = carry + base;
                        carry = 0;
                    } else {
                        remainder[shift + i] = carry;
                        carry = 1;
                    }
                }
                borrow += carry;
            }
            result[shift] = quotientDigit;
        }
        // denormalization
        remainder = divModSmall(remainder, lambda)[0];
        return [arrayToSmall(result), arrayToSmall(remainder)];
    }

    function divMod2(a, b) { // Implementation idea shamelessly stolen from Silent Matt's library http://silentmatt.com/biginteger/
        // Performs faster than divMod1 on larger input sizes.
        var a_l = a.length,
            b_l = b.length,
            result = [],
            part = [],
            base = BASE,
            guess, xlen, highx, highy, check;
        while (a_l) {
            part.unshift(a[--a_l]);
            trim(part);
            if (compareAbs(part, b) < 0) {
                result.push(0);
                continue;
            }
            xlen = part.length;
            highx = part[xlen - 1] * base + part[xlen - 2];
            highy = b[b_l - 1] * base + b[b_l - 2];
            if (xlen > b_l) {
                highx = (highx + 1) * base;
            }
            guess = Math.ceil(highx / highy);
            do {
                check = multiplySmall(b, guess);
                if (compareAbs(check, part) <= 0) break;
                guess--;
            } while (guess);
            result.push(guess);
            part = subtract(part, check);
        }
        result.reverse();
        return [arrayToSmall(result), arrayToSmall(part)];
    }

    function divModSmall(value, lambda) {
        var length = value.length,
            quotient = createArray(length),
            base = BASE,
            i, q, remainder, divisor;
        remainder = 0;
        for (i = length - 1; i >= 0; --i) {
            divisor = remainder * base + value[i];
            q = truncate(divisor / lambda);
            remainder = divisor - q * lambda;
            quotient[i] = q | 0;
        }
        return [quotient, remainder | 0];
    }

    function divModAny(self, v) {
        var value, n = parseValue(v);
        if (supportsNativeBigInt) {
            return [new NativeBigInt(self.value / n.value), new NativeBigInt(self.value % n.value)];
        }
        var a = self.value, b = n.value;
        var quotient;
        if (b === 0) throw new Error("Cannot divide by zero");
        if (self.isSmall) {
            if (n.isSmall) {
                return [new SmallInteger(truncate(a / b)), new SmallInteger(a % b)];
            }
            return [Integer[0], self];
        }
        if (n.isSmall) {
            if (b === 1) return [self, Integer[0]];
            if (b == -1) return [self.negate(), Integer[0]];
            var abs = Math.abs(b);
            if (abs < BASE) {
                value = divModSmall(a, abs);
                quotient = arrayToSmall(value[0]);
                var remainder = value[1];
                if (self.sign) remainder = -remainder;
                if (typeof quotient === "number") {
                    if (self.sign !== n.sign) quotient = -quotient;
                    return [new SmallInteger(quotient), new SmallInteger(remainder)];
                }
                return [new BigInteger(quotient, self.sign !== n.sign), new SmallInteger(remainder)];
            }
            b = smallToArray(abs);
        }
        var comparison = compareAbs(a, b);
        if (comparison === -1) return [Integer[0], self];
        if (comparison === 0) return [Integer[self.sign === n.sign ? 1 : -1], Integer[0]];

        // divMod1 is faster on smaller input sizes
        if (a.length + b.length <= 200)
            value = divMod1(a, b);
        else value = divMod2(a, b);

        quotient = value[0];
        var qSign = self.sign !== n.sign,
            mod = value[1],
            mSign = self.sign;
        if (typeof quotient === "number") {
            if (qSign) quotient = -quotient;
            quotient = new SmallInteger(quotient);
        } else quotient = new BigInteger(quotient, qSign);
        if (typeof mod === "number") {
            if (mSign) mod = -mod;
            mod = new SmallInteger(mod);
        } else mod = new BigInteger(mod, mSign);
        return [quotient, mod];
    }

    BigInteger.prototype.divmod = function (v) {
        var result = divModAny(this, v);
        return {
            quotient: result[0],
            remainder: result[1]
        };
    };
    NativeBigInt.prototype.divmod = SmallInteger.prototype.divmod = BigInteger.prototype.divmod;


    BigInteger.prototype.divide = function (v) {
        return divModAny(this, v)[0];
    };
    NativeBigInt.prototype.over = NativeBigInt.prototype.divide = function (v) {
        return new NativeBigInt(this.value / parseValue(v).value);
    };
    SmallInteger.prototype.over = SmallInteger.prototype.divide = BigInteger.prototype.over = BigInteger.prototype.divide;

    BigInteger.prototype.mod = function (v) {
        return divModAny(this, v)[1];
    };
    NativeBigInt.prototype.mod = NativeBigInt.prototype.remainder = function (v) {
        return new NativeBigInt(this.value % parseValue(v).value);
    };
    SmallInteger.prototype.remainder = SmallInteger.prototype.mod = BigInteger.prototype.remainder = BigInteger.prototype.mod;

    BigInteger.prototype.pow = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value,
            value, x, y;
        if (b === 0) return Integer[1];
        if (a === 0) return Integer[0];
        if (a === 1) return Integer[1];
        if (a === -1) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.sign) {
            return Integer[0];
        }
        if (!n.isSmall) throw new Error("The exponent " + n.toString() + " is too large.");
        if (this.isSmall) {
            if (isPrecise(value = Math.pow(a, b)))
                return new SmallInteger(truncate(value));
        }
        x = this;
        y = Integer[1];
        while (true) {
            if (b & 1 === 1) {
                y = y.times(x);
                --b;
            }
            if (b === 0) break;
            b /= 2;
            x = x.square();
        }
        return y;
    };
    SmallInteger.prototype.pow = BigInteger.prototype.pow;

    NativeBigInt.prototype.pow = function (v) {
        var n = parseValue(v);
        var a = this.value, b = n.value;
        var _0 = BigInt(0), _1 = BigInt(1), _2 = BigInt(2);
        if (b === _0) return Integer[1];
        if (a === _0) return Integer[0];
        if (a === _1) return Integer[1];
        if (a === BigInt(-1)) return n.isEven() ? Integer[1] : Integer[-1];
        if (n.isNegative()) return new NativeBigInt(_0);
        var x = this;
        var y = Integer[1];
        while (true) {
            if ((b & _1) === _1) {
                y = y.times(x);
                --b;
            }
            if (b === _0) break;
            b /= _2;
            x = x.square();
        }
        return y;
    }

    BigInteger.prototype.modPow = function (exp, mod) {
        exp = parseValue(exp);
        mod = parseValue(mod);
        if (mod.isZero()) throw new Error("Cannot take modPow with modulus 0");
        var r = Integer[1],
            base = this.mod(mod);
        if (exp.isNegative()) {
            exp = exp.multiply(Integer[-1]);
            base = base.modInv(mod);
        }
        while (exp.isPositive()) {
            if (base.isZero()) return Integer[0];
            if (exp.isOdd()) r = r.multiply(base).mod(mod);
            exp = exp.divide(2);
            base = base.square().mod(mod);
        }
        return r;
    };
    NativeBigInt.prototype.modPow = SmallInteger.prototype.modPow = BigInteger.prototype.modPow;

    function compareAbs(a, b) {
        if (a.length !== b.length) {
            return a.length > b.length ? 1 : -1;
        }
        for (var i = a.length - 1; i >= 0; i--) {
            if (a[i] !== b[i]) return a[i] > b[i] ? 1 : -1;
        }
        return 0;
    }

    BigInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) return 1;
        return compareAbs(a, b);
    };
    SmallInteger.prototype.compareAbs = function (v) {
        var n = parseValue(v),
            a = Math.abs(this.value),
            b = n.value;
        if (n.isSmall) {
            b = Math.abs(b);
            return a === b ? 0 : a > b ? 1 : -1;
        }
        return -1;
    };
    NativeBigInt.prototype.compareAbs = function (v) {
        var a = this.value;
        var b = parseValue(v).value;
        a = a >= 0 ? a : -a;
        b = b >= 0 ? b : -b;
        return a === b ? 0 : a > b ? 1 : -1;
    }

    BigInteger.prototype.compare = function (v) {
        // See discussion about comparison with Infinity:
        // https://github.com/peterolson/BigInteger.js/issues/61
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (this.sign !== n.sign) {
            return n.sign ? 1 : -1;
        }
        if (n.isSmall) {
            return this.sign ? -1 : 1;
        }
        return compareAbs(a, b) * (this.sign ? -1 : 1);
    };
    BigInteger.prototype.compareTo = BigInteger.prototype.compare;

    SmallInteger.prototype.compare = function (v) {
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }

        var n = parseValue(v),
            a = this.value,
            b = n.value;
        if (n.isSmall) {
            return a == b ? 0 : a > b ? 1 : -1;
        }
        if (a < 0 !== n.sign) {
            return a < 0 ? -1 : 1;
        }
        return a < 0 ? 1 : -1;
    };
    SmallInteger.prototype.compareTo = SmallInteger.prototype.compare;

    NativeBigInt.prototype.compare = function (v) {
        if (v === Infinity) {
            return -1;
        }
        if (v === -Infinity) {
            return 1;
        }
        var a = this.value;
        var b = parseValue(v).value;
        return a === b ? 0 : a > b ? 1 : -1;
    }
    NativeBigInt.prototype.compareTo = NativeBigInt.prototype.compare;

    BigInteger.prototype.equals = function (v) {
        return this.compare(v) === 0;
    };
    NativeBigInt.prototype.eq = NativeBigInt.prototype.equals = SmallInteger.prototype.eq = SmallInteger.prototype.equals = BigInteger.prototype.eq = BigInteger.prototype.equals;

    BigInteger.prototype.notEquals = function (v) {
        return this.compare(v) !== 0;
    };
    NativeBigInt.prototype.neq = NativeBigInt.prototype.notEquals = SmallInteger.prototype.neq = SmallInteger.prototype.notEquals = BigInteger.prototype.neq = BigInteger.prototype.notEquals;

    BigInteger.prototype.greater = function (v) {
        return this.compare(v) > 0;
    };
    NativeBigInt.prototype.gt = NativeBigInt.prototype.greater = SmallInteger.prototype.gt = SmallInteger.prototype.greater = BigInteger.prototype.gt = BigInteger.prototype.greater;

    BigInteger.prototype.lesser = function (v) {
        return this.compare(v) < 0;
    };
    NativeBigInt.prototype.lt = NativeBigInt.prototype.lesser = SmallInteger.prototype.lt = SmallInteger.prototype.lesser = BigInteger.prototype.lt = BigInteger.prototype.lesser;

    BigInteger.prototype.greaterOrEquals = function (v) {
        return this.compare(v) >= 0;
    };
    NativeBigInt.prototype.geq = NativeBigInt.prototype.greaterOrEquals = SmallInteger.prototype.geq = SmallInteger.prototype.greaterOrEquals = BigInteger.prototype.geq = BigInteger.prototype.greaterOrEquals;

    BigInteger.prototype.lesserOrEquals = function (v) {
        return this.compare(v) <= 0;
    };
    NativeBigInt.prototype.leq = NativeBigInt.prototype.lesserOrEquals = SmallInteger.prototype.leq = SmallInteger.prototype.lesserOrEquals = BigInteger.prototype.leq = BigInteger.prototype.lesserOrEquals;

    BigInteger.prototype.isEven = function () {
        return (this.value[0] & 1) === 0;
    };
    SmallInteger.prototype.isEven = function () {
        return (this.value & 1) === 0;
    };
    NativeBigInt.prototype.isEven = function () {
        return (this.value & BigInt(1)) === BigInt(0);
    }

    BigInteger.prototype.isOdd = function () {
        return (this.value[0] & 1) === 1;
    };
    SmallInteger.prototype.isOdd = function () {
        return (this.value & 1) === 1;
    };
    NativeBigInt.prototype.isOdd = function () {
        return (this.value & BigInt(1)) === BigInt(1);
    }

    BigInteger.prototype.isPositive = function () {
        return !this.sign;
    };
    SmallInteger.prototype.isPositive = function () {
        return this.value > 0;
    };
    NativeBigInt.prototype.isPositive = SmallInteger.prototype.isPositive;

    BigInteger.prototype.isNegative = function () {
        return this.sign;
    };
    SmallInteger.prototype.isNegative = function () {
        return this.value < 0;
    };
    NativeBigInt.prototype.isNegative = SmallInteger.prototype.isNegative;

    BigInteger.prototype.isUnit = function () {
        return false;
    };
    SmallInteger.prototype.isUnit = function () {
        return Math.abs(this.value) === 1;
    };
    NativeBigInt.prototype.isUnit = function () {
        return this.abs().value === BigInt(1);
    }

    BigInteger.prototype.isZero = function () {
        return false;
    };
    SmallInteger.prototype.isZero = function () {
        return this.value === 0;
    };
    NativeBigInt.prototype.isZero = function () {
        return this.value === BigInt(0);
    }

    BigInteger.prototype.isDivisibleBy = function (v) {
        var n = parseValue(v);
        if (n.isZero()) return false;
        if (n.isUnit()) return true;
        if (n.compareAbs(2) === 0) return this.isEven();
        return this.mod(n).isZero();
    };
    NativeBigInt.prototype.isDivisibleBy = SmallInteger.prototype.isDivisibleBy = BigInteger.prototype.isDivisibleBy;

    function isBasicPrime(v) {
        var n = v.abs();
        if (n.isUnit()) return false;
        if (n.equals(2) || n.equals(3) || n.equals(5)) return true;
        if (n.isEven() || n.isDivisibleBy(3) || n.isDivisibleBy(5)) return false;
        if (n.lesser(49)) return true;
        // we don't know if it's prime: let the other functions figure it out
    }

    function millerRabinTest(n, a) {
        var nPrev = n.prev(),
            b = nPrev,
            r = 0,
            d, t, i, x;
        while (b.isEven()) b = b.divide(2), r++;
        next: for (i = 0; i < a.length; i++) {
            if (n.lesser(a[i])) continue;
            x = bigInt(a[i]).modPow(b, n);
            if (x.isUnit() || x.equals(nPrev)) continue;
            for (d = r - 1; d != 0; d--) {
                x = x.square().mod(n);
                if (x.isUnit()) return false;
                if (x.equals(nPrev)) continue next;
            }
            return false;
        }
        return true;
    }

    // Set "strict" to true to force GRH-supported lower bound of 2*log(N)^2
    BigInteger.prototype.isPrime = function (strict) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var bits = n.bitLength();
        if (bits <= 64)
            return millerRabinTest(n, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
        var logN = Math.log(2) * bits.toJSNumber();
        var t = Math.ceil((strict === true) ? (2 * Math.pow(logN, 2)) : logN);
        for (var a = [], i = 0; i < t; i++) {
            a.push(bigInt(i + 2));
        }
        return millerRabinTest(n, a);
    };
    NativeBigInt.prototype.isPrime = SmallInteger.prototype.isPrime = BigInteger.prototype.isPrime;

    BigInteger.prototype.isProbablePrime = function (iterations, rng) {
        var isPrime = isBasicPrime(this);
        if (isPrime !== undefined) return isPrime;
        var n = this.abs();
        var t = iterations === undefined ? 5 : iterations;
        for (var a = [], i = 0; i < t; i++) {
            a.push(bigInt.randBetween(2, n.minus(2), rng));
        }
        return millerRabinTest(n, a);
    };
    NativeBigInt.prototype.isProbablePrime = SmallInteger.prototype.isProbablePrime = BigInteger.prototype.isProbablePrime;

    BigInteger.prototype.modInv = function (n) {
        var t = bigInt.zero, newT = bigInt.one, r = parseValue(n), newR = this.abs(), q, lastT, lastR;
        while (!newR.isZero()) {
            q = r.divide(newR);
            lastT = t;
            lastR = r;
            t = newT;
            r = newR;
            newT = lastT.subtract(q.multiply(newT));
            newR = lastR.subtract(q.multiply(newR));
        }
        if (!r.isUnit()) throw new Error(this.toString() + " and " + n.toString() + " are not co-prime");
        if (t.compare(0) === -1) {
            t = t.add(n);
        }
        if (this.isNegative()) {
            return t.negate();
        }
        return t;
    };

    NativeBigInt.prototype.modInv = SmallInteger.prototype.modInv = BigInteger.prototype.modInv;

    BigInteger.prototype.next = function () {
        var value = this.value;
        if (this.sign) {
            return subtractSmall(value, 1, this.sign);
        }
        return new BigInteger(addSmall(value, 1), this.sign);
    };
    SmallInteger.prototype.next = function () {
        var value = this.value;
        if (value + 1 < MAX_INT) return new SmallInteger(value + 1);
        return new BigInteger(MAX_INT_ARR, false);
    };
    NativeBigInt.prototype.next = function () {
        return new NativeBigInt(this.value + BigInt(1));
    }

    BigInteger.prototype.prev = function () {
        var value = this.value;
        if (this.sign) {
            return new BigInteger(addSmall(value, 1), true);
        }
        return subtractSmall(value, 1, this.sign);
    };
    SmallInteger.prototype.prev = function () {
        var value = this.value;
        if (value - 1 > -MAX_INT) return new SmallInteger(value - 1);
        return new BigInteger(MAX_INT_ARR, true);
    };
    NativeBigInt.prototype.prev = function () {
        return new NativeBigInt(this.value - BigInt(1));
    }

    var powersOfTwo = [1];
    while (2 * powersOfTwo[powersOfTwo.length - 1] <= BASE) powersOfTwo.push(2 * powersOfTwo[powersOfTwo.length - 1]);
    var powers2Length = powersOfTwo.length, highestPower2 = powersOfTwo[powers2Length - 1];

    function shift_isSmall(n) {
        return Math.abs(n) <= BASE;
    }

    BigInteger.prototype.shiftLeft = function (v) {
        var n = parseValue(v).toJSNumber();
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftRight(-n);
        var result = this;
        if (result.isZero()) return result;
        while (n >= powers2Length) {
            result = result.multiply(highestPower2);
            n -= powers2Length - 1;
        }
        return result.multiply(powersOfTwo[n]);
    };
    NativeBigInt.prototype.shiftLeft = SmallInteger.prototype.shiftLeft = BigInteger.prototype.shiftLeft;

    BigInteger.prototype.shiftRight = function (v) {
        var remQuo;
        var n = parseValue(v).toJSNumber();
        if (!shift_isSmall(n)) {
            throw new Error(String(n) + " is too large for shifting.");
        }
        if (n < 0) return this.shiftLeft(-n);
        var result = this;
        while (n >= powers2Length) {
            if (result.isZero() || (result.isNegative() && result.isUnit())) return result;
            remQuo = divModAny(result, highestPower2);
            result = remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
            n -= powers2Length - 1;
        }
        remQuo = divModAny(result, powersOfTwo[n]);
        return remQuo[1].isNegative() ? remQuo[0].prev() : remQuo[0];
    };
    NativeBigInt.prototype.shiftRight = SmallInteger.prototype.shiftRight = BigInteger.prototype.shiftRight;

    function bitwise(x, y, fn) {
        y = parseValue(y);
        var xSign = x.isNegative(), ySign = y.isNegative();
        var xRem = xSign ? x.not() : x,
            yRem = ySign ? y.not() : y;
        var xDigit = 0, yDigit = 0;
        var xDivMod = null, yDivMod = null;
        var result = [];
        while (!xRem.isZero() || !yRem.isZero()) {
            xDivMod = divModAny(xRem, highestPower2);
            xDigit = xDivMod[1].toJSNumber();
            if (xSign) {
                xDigit = highestPower2 - 1 - xDigit; // two's complement for negative numbers
            }

            yDivMod = divModAny(yRem, highestPower2);
            yDigit = yDivMod[1].toJSNumber();
            if (ySign) {
                yDigit = highestPower2 - 1 - yDigit; // two's complement for negative numbers
            }

            xRem = xDivMod[0];
            yRem = yDivMod[0];
            result.push(fn(xDigit, yDigit));
        }
        var sum = fn(xSign ? 1 : 0, ySign ? 1 : 0) !== 0 ? bigInt(-1) : bigInt(0);
        for (var i = result.length - 1; i >= 0; i -= 1) {
            sum = sum.multiply(highestPower2).add(bigInt(result[i]));
        }
        return sum;
    }

    BigInteger.prototype.not = function () {
        return this.negate().prev();
    };
    NativeBigInt.prototype.not = SmallInteger.prototype.not = BigInteger.prototype.not;

    BigInteger.prototype.and = function (n) {
        return bitwise(this, n, function (a, b) { return a & b; });
    };
    NativeBigInt.prototype.and = SmallInteger.prototype.and = BigInteger.prototype.and;

    BigInteger.prototype.or = function (n) {
        return bitwise(this, n, function (a, b) { return a | b; });
    };
    NativeBigInt.prototype.or = SmallInteger.prototype.or = BigInteger.prototype.or;

    BigInteger.prototype.xor = function (n) {
        return bitwise(this, n, function (a, b) { return a ^ b; });
    };
    NativeBigInt.prototype.xor = SmallInteger.prototype.xor = BigInteger.prototype.xor;

    var LOBMASK_I = 1 << 30, LOBMASK_BI = (BASE & -BASE) * (BASE & -BASE) | LOBMASK_I;
    function roughLOB(n) { // get lowestOneBit (rough)
        // SmallInteger: return Min(lowestOneBit(n), 1 << 30)
        // BigInteger: return Min(lowestOneBit(n), 1 << 14) [BASE=1e7]
        var v = n.value,
            x = typeof v === "number" ? v | LOBMASK_I :
                typeof v === "bigint" ? v | BigInt(LOBMASK_I) :
                    v[0] + v[1] * BASE | LOBMASK_BI;
        return x & -x;
    }

    function integerLogarithm(value, base) {
        if (base.compareTo(value) <= 0) {
            var tmp = integerLogarithm(value, base.square(base));
            var p = tmp.p;
            var e = tmp.e;
            var t = p.multiply(base);
            return t.compareTo(value) <= 0 ? { p: t, e: e * 2 + 1 } : { p: p, e: e * 2 };
        }
        return { p: bigInt(1), e: 0 };
    }

    BigInteger.prototype.bitLength = function () {
        var n = this;
        if (n.compareTo(bigInt(0)) < 0) {
            n = n.negate().subtract(bigInt(1));
        }
        if (n.compareTo(bigInt(0)) === 0) {
            return bigInt(0);
        }
        return bigInt(integerLogarithm(n, bigInt(2)).e).add(bigInt(1));
    }
    NativeBigInt.prototype.bitLength = SmallInteger.prototype.bitLength = BigInteger.prototype.bitLength;

    function max(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.greater(b) ? a : b;
    }
    function min(a, b) {
        a = parseValue(a);
        b = parseValue(b);
        return a.lesser(b) ? a : b;
    }
    function gcd(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        if (a.equals(b)) return a;
        if (a.isZero()) return b;
        if (b.isZero()) return a;
        var c = Integer[1], d, t;
        while (a.isEven() && b.isEven()) {
            d = min(roughLOB(a), roughLOB(b));
            a = a.divide(d);
            b = b.divide(d);
            c = c.multiply(d);
        }
        while (a.isEven()) {
            a = a.divide(roughLOB(a));
        }
        do {
            while (b.isEven()) {
                b = b.divide(roughLOB(b));
            }
            if (a.greater(b)) {
                t = b; b = a; a = t;
            }
            b = b.subtract(a);
        } while (!b.isZero());
        return c.isUnit() ? a : a.multiply(c);
    }
    function lcm(a, b) {
        a = parseValue(a).abs();
        b = parseValue(b).abs();
        return a.divide(gcd(a, b)).multiply(b);
    }
    function randBetween(a, b, rng) {
        a = parseValue(a);
        b = parseValue(b);
        var usedRNG = rng || Math.random;
        var low = min(a, b), high = max(a, b);
        var range = high.subtract(low).add(1);
        if (range.isSmall) return low.add(Math.floor(usedRNG() * range));
        var digits = toBase(range, BASE).value;
        var result = [], restricted = true;
        for (var i = 0; i < digits.length; i++) {
            var top = restricted ? digits[i] : BASE;
            var digit = truncate(usedRNG() * top);
            result.push(digit);
            if (digit < top) restricted = false;
        }
        return low.add(Integer.fromArray(result, BASE, false));
    }

    var parseBase = function (text, base, alphabet, caseSensitive) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        text = String(text);
        if (!caseSensitive) {
            text = text.toLowerCase();
            alphabet = alphabet.toLowerCase();
        }
        var length = text.length;
        var i;
        var absBase = Math.abs(base);
        var alphabetValues = {};
        for (i = 0; i < alphabet.length; i++) {
            alphabetValues[alphabet[i]] = i;
        }
        for (i = 0; i < length; i++) {
            var c = text[i];
            if (c === "-") continue;
            if (c in alphabetValues) {
                if (alphabetValues[c] >= absBase) {
                    if (c === "1" && absBase === 1) continue;
                    throw new Error(c + " is not a valid digit in base " + base + ".");
                }
            }
        }
        base = parseValue(base);
        var digits = [];
        var isNegative = text[0] === "-";
        for (i = isNegative ? 1 : 0; i < text.length; i++) {
            var c = text[i];
            if (c in alphabetValues) digits.push(parseValue(alphabetValues[c]));
            else if (c === "<") {
                var start = i;
                do { i++; } while (text[i] !== ">" && i < text.length);
                digits.push(parseValue(text.slice(start + 1, i)));
            }
            else throw new Error(c + " is not a valid character");
        }
        return parseBaseFromArray(digits, base, isNegative);
    };

    function parseBaseFromArray(digits, base, isNegative) {
        var val = Integer[0], pow = Integer[1], i;
        for (i = digits.length - 1; i >= 0; i--) {
            val = val.add(digits[i].times(pow));
            pow = pow.times(base);
        }
        return isNegative ? val.negate() : val;
    }

    function stringify(digit, alphabet) {
        alphabet = alphabet || DEFAULT_ALPHABET;
        if (digit < alphabet.length) {
            return alphabet[digit];
        }
        return "<" + digit + ">";
    }

    function toBase(n, base) {
        base = bigInt(base);
        if (base.isZero()) {
            if (n.isZero()) return { value: [0], isNegative: false };
            throw new Error("Cannot convert nonzero numbers to base 0.");
        }
        if (base.equals(-1)) {
            if (n.isZero()) return { value: [0], isNegative: false };
            if (n.isNegative())
                return {
                    value: [].concat.apply([], Array.apply(null, Array(-n.toJSNumber()))
                        .map(Array.prototype.valueOf, [1, 0])
                    ),
                    isNegative: false
                };

            var arr = Array.apply(null, Array(n.toJSNumber() - 1))
                .map(Array.prototype.valueOf, [0, 1]);
            arr.unshift([1]);
            return {
                value: [].concat.apply([], arr),
                isNegative: false
            };
        }

        var neg = false;
        if (n.isNegative() && base.isPositive()) {
            neg = true;
            n = n.abs();
        }
        if (base.isUnit()) {
            if (n.isZero()) return { value: [0], isNegative: false };

            return {
                value: Array.apply(null, Array(n.toJSNumber()))
                    .map(Number.prototype.valueOf, 1),
                isNegative: neg
            };
        }
        var out = [];
        var left = n, divmod;
        while (left.isNegative() || left.compareAbs(base) >= 0) {
            divmod = left.divmod(base);
            left = divmod.quotient;
            var digit = divmod.remainder;
            if (digit.isNegative()) {
                digit = base.minus(digit).abs();
                left = left.next();
            }
            out.push(digit.toJSNumber());
        }
        out.push(left.toJSNumber());
        return { value: out.reverse(), isNegative: neg };
    }

    function toBaseString(n, base, alphabet) {
        var arr = toBase(n, base);
        return (arr.isNegative ? "-" : "") + arr.value.map(function (x) {
            return stringify(x, alphabet);
        }).join('');
    }

    BigInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    SmallInteger.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    NativeBigInt.prototype.toArray = function (radix) {
        return toBase(this, radix);
    };

    BigInteger.prototype.toString = function (radix, alphabet) {
        if (radix === undefined) radix = 10;
        if (radix !== 10) return toBaseString(this, radix, alphabet);
        var v = this.value, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
        while (--l >= 0) {
            digit = String(v[l]);
            str += zeros.slice(digit.length) + digit;
        }
        var sign = this.sign ? "-" : "";
        return sign + str;
    };

    SmallInteger.prototype.toString = function (radix, alphabet) {
        if (radix === undefined) radix = 10;
        if (radix != 10) return toBaseString(this, radix, alphabet);
        return String(this.value);
    };

    NativeBigInt.prototype.toString = SmallInteger.prototype.toString;

    NativeBigInt.prototype.toJSON = BigInteger.prototype.toJSON = SmallInteger.prototype.toJSON = function () { return this.toString(); }

    BigInteger.prototype.valueOf = function () {
        return parseInt(this.toString(), 10);
    };
    BigInteger.prototype.toJSNumber = BigInteger.prototype.valueOf;

    SmallInteger.prototype.valueOf = function () {
        return this.value;
    };
    SmallInteger.prototype.toJSNumber = SmallInteger.prototype.valueOf;
    NativeBigInt.prototype.valueOf = NativeBigInt.prototype.toJSNumber = function () {
        return parseInt(this.toString(), 10);
    }

    function parseStringValue(v) {
        if (isPrecise(+v)) {
            var x = +v;
            if (x === truncate(x))
                return supportsNativeBigInt ? new NativeBigInt(BigInt(x)) : new SmallInteger(x);
            throw new Error("Invalid integer: " + v);
        }
        var sign = v[0] === "-";
        if (sign) v = v.slice(1);
        var split = v.split(/e/i);
        if (split.length > 2) throw new Error("Invalid integer: " + split.join("e"));
        if (split.length === 2) {
            var exp = split[1];
            if (exp[0] === "+") exp = exp.slice(1);
            exp = +exp;
            if (exp !== truncate(exp) || !isPrecise(exp)) throw new Error("Invalid integer: " + exp + " is not a valid exponent.");
            var text = split[0];
            var decimalPlace = text.indexOf(".");
            if (decimalPlace >= 0) {
                exp -= text.length - decimalPlace - 1;
                text = text.slice(0, decimalPlace) + text.slice(decimalPlace + 1);
            }
            if (exp < 0) throw new Error("Cannot include negative exponent part for integers");
            text += (new Array(exp + 1)).join("0");
            v = text;
        }
        var isValid = /^([0-9][0-9]*)$/.test(v);
        if (!isValid) throw new Error("Invalid integer: " + v);
        if (supportsNativeBigInt) {
            return new NativeBigInt(BigInt(sign ? "-" + v : v));
        }
        var r = [], max = v.length, l = LOG_BASE, min = max - l;
        while (max > 0) {
            r.push(+v.slice(min, max));
            min -= l;
            if (min < 0) min = 0;
            max -= l;
        }
        trim(r);
        return new BigInteger(r, sign);
    }

    function parseNumberValue(v) {
        if (supportsNativeBigInt) {
            return new NativeBigInt(BigInt(v));
        }
        if (isPrecise(v)) {
            if (v !== truncate(v)) throw new Error(v + " is not an integer.");
            return new SmallInteger(v);
        }
        return parseStringValue(v.toString());
    }

    function parseValue(v) {
        if (typeof v === "number") {
            return parseNumberValue(v);
        }
        if (typeof v === "string") {
            return parseStringValue(v);
        }
        if (typeof v === "bigint") {
            return new NativeBigInt(v);
        }
        return v;
    }
    // Pre-define numbers in range [-999,999]
    for (var i = 0; i < 1000; i++) {
        Integer[i] = parseValue(i);
        if (i > 0) Integer[-i] = parseValue(-i);
    }
    // Backwards compatibility
    Integer.one = Integer[1];
    Integer.zero = Integer[0];
    Integer.minusOne = Integer[-1];
    Integer.max = max;
    Integer.min = min;
    Integer.gcd = gcd;
    Integer.lcm = lcm;
    Integer.isInstance = function (x) { return x instanceof BigInteger || x instanceof SmallInteger || x instanceof NativeBigInt; };
    Integer.randBetween = randBetween;

    Integer.fromArray = function (digits, base, isNegative) {
        return parseBaseFromArray(digits.map(parseValue), parseValue(base || 10), isNegative);
    };

    return Integer;
})();

// Node.js check
if ( true && module.hasOwnProperty("exports")) {
    module.exports = bigInt;
}

//amd check
if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return bigInt;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/canvg/dist/browser/canvg.min.js":
/*!******************************************************!*\
  !*** ./node_modules/canvg/dist/browser/canvg.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! rgbcolor */ "./node_modules/rgbcolor/index.js"),__webpack_require__(/*! stackblur-canvas */ "./node_modules/stackblur-canvas/src/stackblur.js")):undefined}(this,function(m,d){"use strict";var t;return m=m&&m.hasOwnProperty("default")?m.default:m,d=d&&d.hasOwnProperty("default")?d.default:d,function(t){var u;t.exports;(u=window).DOMParser=window.DOMParser;function p(){return document.createElement("canvas")}var f,c=function(t,e,i){if(null!=t||null!=e||null!=i){var n=function(s){var A={opts:s,FRAMERATE:30,MAX_VIRTUAL_PIXELS:3e4,rootEmSize:12,emSize:12,log:function(t){}};1==A.opts.log&&"undefined"!=typeof console&&(A.log=function(t){console.log(t)});A.init=function(t){var e=0;A.UniqueId=function(){return"canvg"+ ++e},A.Definitions={},A.Styles={},A.StylesSpecificity={},A.Animations=[],A.Images=[],A.ctx=t,A.ViewPort=new function(){this.viewPorts=[],this.Clear=function(){this.viewPorts=[]},this.SetCurrent=function(t,e){this.viewPorts.push({width:t,height:e})},this.RemoveCurrent=function(){this.viewPorts.pop()},this.Current=function(){return this.viewPorts[this.viewPorts.length-1]},this.width=function(){return this.Current().width},this.height=function(){return this.Current().height},this.ComputeSize=function(t){return null!=t&&"number"==typeof t?t:"x"==t?this.width():"y"==t?this.height():Math.sqrt(Math.pow(this.width(),2)+Math.pow(this.height(),2))/Math.sqrt(2)}}},A.init(),A.ImagesLoaded=function(){for(var t=0;t<A.Images.length;t++)if(!A.Images[t].loaded)return!1;return!0},A.trim=function(t){return t.replace(/^\s+|\s+$/g,"")},A.compressSpaces=function(t){return t.replace(/(?!\u3000)\s+/gm," ")},A.ajax=function(t){var e;return(e=u.XMLHttpRequest?new u.XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"))?(e.open("GET",t,!1),e.send(null),e.responseText):null},A.parseXml=function(e){if("undefined"!=typeof Windows&&void 0!==Windows.Data&&void 0!==Windows.Data.Xml){var t=new Windows.Data.Xml.Dom.XmlDocument,i=new Windows.Data.Xml.Dom.XmlLoadSettings;return i.prohibitDtd=!1,t.loadXml(e,i),t}if(!u.DOMParser){e=e.replace(/<!DOCTYPE svg[^>]*>/,"");var t=new ActiveXObject("Microsoft.XMLDOM");return t.async="false",t.loadXML(e),t}try{var n=s.xmldom?new u.DOMParser(s.xmldom):new u.DOMParser;return n.parseFromString(e,"image/svg+xml")}catch(t){return(n=s.xmldom?new u.DOMParser(s.xmldom):new u.DOMParser).parseFromString(e,"text/xml")}},A.Property=function(t,e){this.name=t,this.value=e},A.Property.prototype.getValue=function(){return this.value},A.Property.prototype.hasValue=function(){return null!=this.value&&""!==this.value},A.Property.prototype.numValue=function(){if(!this.hasValue())return 0;var t=parseFloat(this.value);return(this.value+"").match(/%$/)&&(t/=100),t},A.Property.prototype.valueOrDefault=function(t){return this.hasValue()?this.value:t},A.Property.prototype.numValueOrDefault=function(t){return this.hasValue()?this.numValue():t},A.Property.prototype.addOpacity=function(t){var e=this.value;if(null!=t.value&&""!=t.value&&"string"==typeof this.value){var i=new m(this.value);i.ok&&(e="rgba("+i.r+", "+i.g+", "+i.b+", "+t.numValue()+")")}return new A.Property(this.name,e)},A.Property.prototype.getDefinition=function(){var t=this.value.match(/#([^\)'"]+)/);return t&&(t=t[1]),t||(t=this.value),A.Definitions[t]},A.Property.prototype.isUrlDefinition=function(){return 0==this.value.indexOf("url(")},A.Property.prototype.getFillStyleDefinition=function(t,e){var i=this.getDefinition();if(null!=i&&i.createGradient)return i.createGradient(A.ctx,t,e);if(null!=i&&i.createPattern){if(i.getHrefAttribute().hasValue()){var n=i.attribute("patternTransform");i=i.getHrefAttribute().getDefinition(),n.hasValue()&&(i.attribute("patternTransform",!0).value=n.value)}return i.createPattern(A.ctx,t)}return null},A.Property.prototype.getDPI=function(t){return 96},A.Property.prototype.getREM=function(t){return A.rootEmSize},A.Property.prototype.getEM=function(t){return A.emSize},A.Property.prototype.getUnits=function(){var t=this.value+"";return t.replace(/[0-9\.\-]/g,"")},A.Property.prototype.isPixels=function(){if(!this.hasValue())return!1;var t=this.value+"";return!!t.match(/px$/)||!!t.match(/^[0-9]+$/)},A.Property.prototype.toPixels=function(t,e){if(!this.hasValue())return 0;var i=this.value+"";if(i.match(/rem$/))return this.numValue()*this.getREM(t);if(i.match(/em$/))return this.numValue()*this.getEM(t);if(i.match(/ex$/))return this.numValue()*this.getEM(t)/2;if(i.match(/px$/))return this.numValue();if(i.match(/pt$/))return this.numValue()*this.getDPI(t)*(1/72);if(i.match(/pc$/))return 15*this.numValue();if(i.match(/cm$/))return this.numValue()*this.getDPI(t)/2.54;if(i.match(/mm$/))return this.numValue()*this.getDPI(t)/25.4;if(i.match(/in$/))return this.numValue()*this.getDPI(t);if(i.match(/%$/))return this.numValue()*A.ViewPort.ComputeSize(t);var n=this.numValue();return e&&n<1?n*A.ViewPort.ComputeSize(t):n},A.Property.prototype.toMilliseconds=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/s$/)?1e3*this.numValue():(t.match(/ms$/),this.numValue())},A.Property.prototype.toRadians=function(){if(!this.hasValue())return 0;var t=this.value+"";return t.match(/deg$/)?this.numValue()*(Math.PI/180):t.match(/grad$/)?this.numValue()*(Math.PI/200):t.match(/rad$/)?this.numValue():this.numValue()*(Math.PI/180)};var t={baseline:"alphabetic","before-edge":"top","text-before-edge":"top",middle:"middle",central:"middle","after-edge":"bottom","text-after-edge":"bottom",ideographic:"ideographic",alphabetic:"alphabetic",hanging:"hanging",mathematical:"alphabetic"};return A.Property.prototype.toTextBaseline=function(){return this.hasValue()?t[this.value]:null},A.Font=new function(){this.Styles="normal|italic|oblique|inherit",this.Variants="normal|small-caps|inherit",this.Weights="normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit",this.CreateFont=function(t,e,i,n,s,a){var r=null!=a?this.Parse(a):this.CreateFont("","","","","",A.ctx.font);return{fontFamily:s=s||r.fontFamily,fontSize:n||r.fontSize,fontStyle:t||r.fontStyle,fontWeight:i||r.fontWeight,fontVariant:e||r.fontVariant,toString:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize,this.fontFamily].join(" ")}}};var r=this;this.Parse=function(t){for(var e={},i=A.trim(A.compressSpaces(t||"")).split(" "),n={fontSize:!1,fontStyle:!1,fontWeight:!1,fontVariant:!1},s="",a=0;a<i.length;a++)n.fontStyle||-1==r.Styles.indexOf(i[a])?n.fontVariant||-1==r.Variants.indexOf(i[a])?n.fontWeight||-1==r.Weights.indexOf(i[a])?n.fontSize?"inherit"!=i[a]&&(s+=i[a]):("inherit"!=i[a]&&(e.fontSize=i[a].split("/")[0]),n.fontStyle=n.fontVariant=n.fontWeight=n.fontSize=!0):("inherit"!=i[a]&&(e.fontWeight=i[a]),n.fontStyle=n.fontVariant=n.fontWeight=!0):("inherit"!=i[a]&&(e.fontVariant=i[a]),n.fontStyle=n.fontVariant=!0):("inherit"!=i[a]&&(e.fontStyle=i[a]),n.fontStyle=!0);return""!=s&&(e.fontFamily=s),e}},A.ToNumberArray=function(t){for(var e=A.trim(A.compressSpaces((t||"").replace(/,/g," "))).split(" "),i=0;i<e.length;i++)e[i]=parseFloat(e[i]);return e},A.Point=function(t,e){this.x=t,this.y=e},A.Point.prototype.angleTo=function(t){return Math.atan2(t.y-this.y,t.x-this.x)},A.Point.prototype.applyTransform=function(t){var e=this.x*t[0]+this.y*t[2]+t[4],i=this.x*t[1]+this.y*t[3]+t[5];this.x=e,this.y=i},A.CreatePoint=function(t){var e=A.ToNumberArray(t);return new A.Point(e[0],e[1])},A.CreatePath=function(t){for(var e=A.ToNumberArray(t),i=[],n=0;n<e.length;n+=2)i.push(new A.Point(e[n],e[n+1]));return i},A.BoundingBox=function(t,e,i,n){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN,this.x=function(){return this.x1},this.y=function(){return this.y1},this.width=function(){return this.x2-this.x1},this.height=function(){return this.y2-this.y1},this.addPoint=function(t,e){null!=t&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),null!=e&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))},this.addX=function(t){this.addPoint(t,null)},this.addY=function(t){this.addPoint(null,t)},this.addBoundingBox=function(t){this.addPoint(t.x1,t.y1),this.addPoint(t.x2,t.y2)},this.addQuadraticCurve=function(t,e,i,n,s,a){var r=t+2/3*(i-t),o=e+2/3*(n-e),l=r+1/3*(s-t),h=o+1/3*(a-e);this.addBezierCurve(t,e,r,l,o,h,s,a)},this.addBezierCurve=function(t,e,i,n,s,a,r,o){var l=[t,e],h=[i,n],u=[s,a],c=[r,o];this.addPoint(l[0],l[1]),this.addPoint(c[0],c[1]);for(var f=0;f<=1;f++){var m=function(t){return Math.pow(1-t,3)*l[f]+3*Math.pow(1-t,2)*t*h[f]+3*(1-t)*Math.pow(t,2)*u[f]+Math.pow(t,3)*c[f]},p=6*l[f]-12*h[f]+6*u[f],d=-3*l[f]+9*h[f]-9*u[f]+3*c[f],y=3*h[f]-3*l[f];if(0!=d){var v=Math.pow(p,2)-4*y*d;if(!(v<0)){var g=(-p+Math.sqrt(v))/(2*d);0<g&&g<1&&(0==f&&this.addX(m(g)),1==f&&this.addY(m(g)));var x=(-p-Math.sqrt(v))/(2*d);0<x&&x<1&&(0==f&&this.addX(m(x)),1==f&&this.addY(m(x)))}}else{if(0==p)continue;var b=-y/p;0<b&&b<1&&(0==f&&this.addX(m(b)),1==f&&this.addY(m(b)))}}},this.isPointInBox=function(t,e){return this.x1<=t&&t<=this.x2&&this.y1<=e&&e<=this.y2},this.addPoint(t,e),this.addPoint(i,n)},A.Transform=function(t){var e=this;this.Type={},this.Type.translate=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.translate(this.p.x||0,this.p.y||0)},this.unapply=function(t){t.translate(-1*this.p.x||0,-1*this.p.y||0)},this.applyToPoint=function(t){t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0])}},this.Type.rotate=function(t){var e=A.ToNumberArray(t);this.angle=new A.Property("angle",e[0]),this.cx=e[1]||0,this.cy=e[2]||0,this.apply=function(t){t.translate(this.cx,this.cy),t.rotate(this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.unapply=function(t){t.translate(this.cx,this.cy),t.rotate(-1*this.angle.toRadians()),t.translate(-this.cx,-this.cy)},this.applyToPoint=function(t){var e=this.angle.toRadians();t.applyTransform([1,0,0,1,this.p.x||0,this.p.y||0]),t.applyTransform([Math.cos(e),Math.sin(e),-Math.sin(e),Math.cos(e),0,0]),t.applyTransform([1,0,0,1,-this.p.x||0,-this.p.y||0])}},this.Type.scale=function(t){this.p=A.CreatePoint(t),this.apply=function(t){t.scale(this.p.x||1,this.p.y||this.p.x||1)},this.unapply=function(t){t.scale(1/this.p.x||1,1/this.p.y||this.p.x||1)},this.applyToPoint=function(t){t.applyTransform([this.p.x||0,0,0,this.p.y||0,0,0])}},this.Type.matrix=function(t){this.m=A.ToNumberArray(t),this.apply=function(t){t.transform(this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5])},this.unapply=function(t){var e=this.m[0],i=this.m[2],n=this.m[4],s=this.m[1],a=this.m[3],r=this.m[5],o=1/(e*(1*a-0*r)-i*(1*s-0*r)+n*(0*s-0*a));t.transform(o*(1*a-0*r),o*(0*r-1*s),o*(0*n-1*i),o*(1*e-0*n),o*(i*r-n*a),o*(n*s-e*r))},this.applyToPoint=function(t){t.applyTransform(this.m)}},this.Type.SkewBase=function(t){this.base=e.Type.matrix,this.base(t),this.angle=new A.Property("angle",t)},this.Type.SkewBase.prototype=new this.Type.matrix,this.Type.skewX=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,0,Math.tan(this.angle.toRadians()),1,0,0]},this.Type.skewX.prototype=new this.Type.SkewBase,this.Type.skewY=function(t){this.base=e.Type.SkewBase,this.base(t),this.m=[1,Math.tan(this.angle.toRadians()),0,1,0,0]},this.Type.skewY.prototype=new this.Type.SkewBase,this.transforms=[],this.apply=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].apply(t)},this.unapply=function(t){for(var e=this.transforms.length-1;0<=e;e--)this.transforms[e].unapply(t)},this.applyToPoint=function(t){for(var e=0;e<this.transforms.length;e++)this.transforms[e].applyToPoint(t)};for(var i=A.trim(A.compressSpaces(t)).replace(/\)([a-zA-Z])/g,") $1").replace(/\)(\s?,\s?)/g,") ").split(/\s(?=[a-z])/),n=0;n<i.length;n++)if("none"!==i[n]){var s=A.trim(i[n].split("(")[0]),a=i[n].split("(")[1].replace(")",""),r=this.Type[s];if(void 0!==r){var o=new r(a);o.type=s,this.transforms.push(o)}}},A.AspectRatio=function(t,e,i,n,s,a,r,o,l,h){var u=(e=(e=A.compressSpaces(e)).replace(/^defer\s/,"")).split(" ")[0]||"xMidYMid",c=e.split(" ")[1]||"meet",f=i/n,m=s/a,p=Math.min(f,m),d=Math.max(f,m);"meet"==c&&(n*=p,a*=p),"slice"==c&&(n*=d,a*=d),l=new A.Property("refX",l),h=new A.Property("refY",h),l.hasValue()&&h.hasValue()?t.translate(-p*l.toPixels("x"),-p*h.toPixels("y")):(u.match(/^xMid/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i/2-n/2,0),u.match(/YMid$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s/2-a/2),u.match(/^xMax/)&&("meet"==c&&p==m||"slice"==c&&d==m)&&t.translate(i-n,0),u.match(/YMax$/)&&("meet"==c&&p==f||"slice"==c&&d==f)&&t.translate(0,s-a)),"none"==u?t.scale(f,m):"meet"==c?t.scale(p,p):"slice"==c&&t.scale(d,d),t.translate(null==r?0:-r,null==o?0:-o)},A.Element={},A.EmptyProperty=new A.Property("EMPTY",""),A.Element.ElementBase=function(a){this.attributes={},this.styles={},this.stylesSpecificity={},this.children=[],this.attribute=function(t,e){var i=this.attributes[t];return null!=i?i:(1==e&&(i=new A.Property(t,""),this.attributes[t]=i),i||A.EmptyProperty)},this.getHrefAttribute=function(){for(var t in this.attributes)if("href"==t||t.match(/:href$/))return this.attributes[t];return A.EmptyProperty},this.style=function(t,e,i){var n=this.styles[t];if(null!=n)return n;var s=this.attribute(t);if(null!=s&&s.hasValue())return this.styles[t]=s;if(1!=i){var a=this.parent;if(null!=a){var r=a.style(t);if(null!=r&&r.hasValue())return r}}return 1==e&&(n=new A.Property(t,""),this.styles[t]=n),n||A.EmptyProperty},this.render=function(t){if("none"!=this.style("display").value&&"hidden"!=this.style("visibility").value){if(t.save(),this.style("mask").hasValue()){var e=this.style("mask").getDefinition();null!=e&&e.apply(t,this)}else if(this.style("filter").hasValue()){var i=this.style("filter").getDefinition();null!=i&&i.apply(t,this)}else this.setContext(t),this.renderChildren(t),this.clearContext(t);t.restore()}},this.setContext=function(t){},this.clearContext=function(t){},this.renderChildren=function(t){for(var e=0;e<this.children.length;e++)this.children[e].render(t)},this.addChild=function(t,e){var i=t;e&&(i=A.CreateElement(t)),i.parent=this,"title"!=i.type&&this.children.push(i)},this.addStylesFromStyleDefinition=function(){for(var t in A.Styles)if("@"!=t[0]&&f(a,t)){var e=A.Styles[t],i=A.StylesSpecificity[t];if(null!=e)for(var n in e){var s=this.stylesSpecificity[n];void 0===s&&(s="000"),s<i&&(this.styles[n]=e[n],this.stylesSpecificity[n]=i)}}};var t,e=new RegExp("^[A-Z-]+$");if(null!=a&&1==a.nodeType){for(var i=0;i<a.attributes.length;i++){var n=a.attributes[i],s=(t=n.nodeName,e.test(t)?t.toLowerCase():t);this.attributes[s]=new A.Property(s,n.value)}if(this.addStylesFromStyleDefinition(),this.attribute("style").hasValue()){var r=this.attribute("style").value.split(";");for(i=0;i<r.length;i++)if(""!=A.trim(r[i])){var o=r[i].split(":"),l=A.trim(o[0]),h=A.trim(o[1]);this.styles[l]=new A.Property(l,h)}}for(this.attribute("id").hasValue()&&null==A.Definitions[this.attribute("id").value]&&(A.Definitions[this.attribute("id").value]=this),i=0;i<a.childNodes.length;i++){var u=a.childNodes[i];if(1==u.nodeType&&this.addChild(u,!0),this.captureTextNodes&&(3==u.nodeType||4==u.nodeType)){var c=u.value||u.text||u.textContent||"";""!=A.compressSpaces(c)&&this.addChild(new A.Element.tspan(u),!1)}}}},A.Element.RenderedElementBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.calculateOpacity=function(){for(var t=1,e=this;null!=e;){var i=e.style("opacity",!1,!0);i.hasValue()&&(t*=i.numValue()),e=e.parent}return t},this.setContext=function(t,e){if(!e){var i;if(this.style("fill").isUrlDefinition())null!=(i=this.style("fill").getFillStyleDefinition(this,this.style("fill-opacity")))&&(t.fillStyle=i);else if(this.style("fill").hasValue()){var n;"currentColor"==(n=this.style("fill")).value&&(n.value=this.style("color").value),"inherit"!=n.value&&(t.fillStyle="none"==n.value?"rgba(0,0,0,0)":n.value)}if(this.style("fill-opacity").hasValue()&&(n=(n=new A.Property("fill",t.fillStyle)).addOpacity(this.style("fill-opacity")),t.fillStyle=n.value),this.style("stroke").isUrlDefinition())null!=(i=this.style("stroke").getFillStyleDefinition(this,this.style("stroke-opacity")))&&(t.strokeStyle=i);else if(this.style("stroke").hasValue()){var s;"currentColor"==(s=this.style("stroke")).value&&(s.value=this.style("color").value),"inherit"!=s.value&&(t.strokeStyle="none"==s.value?"rgba(0,0,0,0)":s.value)}if(this.style("stroke-opacity").hasValue()&&(s=(s=new A.Property("stroke",t.strokeStyle)).addOpacity(this.style("stroke-opacity")),t.strokeStyle=s.value),this.style("stroke-width").hasValue()){var a=this.style("stroke-width").toPixels();t.lineWidth=0==a?.001:a}if(this.style("stroke-linecap").hasValue()&&(t.lineCap=this.style("stroke-linecap").value),this.style("stroke-linejoin").hasValue()&&(t.lineJoin=this.style("stroke-linejoin").value),this.style("stroke-miterlimit").hasValue()&&(t.miterLimit=this.style("stroke-miterlimit").value),this.style("paint-order").hasValue()&&(t.paintOrder=this.style("paint-order").value),this.style("stroke-dasharray").hasValue()&&"none"!=this.style("stroke-dasharray").value){var r=A.ToNumberArray(this.style("stroke-dasharray").value);void 0!==t.setLineDash?t.setLineDash(r):void 0!==t.webkitLineDash?t.webkitLineDash=r:void 0===t.mozDash||1==r.length&&0==r[0]||(t.mozDash=r);var o=this.style("stroke-dashoffset").toPixels();void 0!==t.lineDashOffset?t.lineDashOffset=o:void 0!==t.webkitLineDashOffset?t.webkitLineDashOffset=o:void 0!==t.mozDashOffset&&(t.mozDashOffset=o)}}if(void 0!==t.font){t.font=A.Font.CreateFont(this.style("font-style").value,this.style("font-variant").value,this.style("font-weight").value,this.style("font-size").hasValue()?this.style("font-size").toPixels()+"px":"",this.style("font-family").value).toString();var l=this.style("font-size",!1,!1);l.isPixels()&&(A.emSize=l.toPixels())}if(this.style("transform",!1,!0).hasValue()&&new A.Transform(this.style("transform",!1,!0).value).apply(t),this.style("clip-path",!1,!0).hasValue()){var h=this.style("clip-path",!1,!0).getDefinition();null!=h&&h.apply(t)}t.globalAlpha=this.calculateOpacity()}},A.Element.RenderedElementBase.prototype=new A.Element.ElementBase,A.Element.PathElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.path=function(t){return null!=t&&t.beginPath(),new A.BoundingBox},this.renderChildren=function(t){this.path(t),A.Mouse.checkPath(this,t),""!=t.fillStyle&&("inherit"!=this.style("fill-rule").valueOrDefault("inherit")?t.fill(this.style("fill-rule").value):t.fill()),""!=t.strokeStyle&&t.stroke();var e=this.getMarkers();if(null!=e){if(this.style("marker-start").isUrlDefinition()&&(i=this.style("marker-start").getDefinition()).render(t,e[0][0],e[0][1]),this.style("marker-mid").isUrlDefinition())for(var i=this.style("marker-mid").getDefinition(),n=1;n<e.length-1;n++)i.render(t,e[n][0],e[n][1]);this.style("marker-end").isUrlDefinition()&&(i=this.style("marker-end").getDefinition()).render(t,e[e.length-1][0],e[e.length-1][1])}},this.getBoundingBox=function(){return this.path()},this.getMarkers=function(){return null}},A.Element.PathElementBase.prototype=new A.Element.RenderedElementBase,A.Element.svg=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseClearContext=this.clearContext,this.clearContext=function(t){this.baseClearContext(t),A.ViewPort.RemoveCurrent()},this.baseSetContext=this.setContext,this.setContext=function(t){if(t.strokeStyle="rgba(0,0,0,0)",t.lineCap="butt",t.lineJoin="miter",t.miterLimit=4,t.canvas.style&&void 0!==t.font&&void 0!==u.getComputedStyle){t.font=u.getComputedStyle(t.canvas).getPropertyValue("font");var e=new A.Property("fontSize",A.Font.Parse(t.font).fontSize);e.hasValue()&&(A.rootEmSize=A.emSize=e.toPixels("y"))}this.baseSetContext(t),this.attribute("x").hasValue()||(this.attribute("x",!0).value=0),this.attribute("y").hasValue()||(this.attribute("y",!0).value=0),t.translate(this.attribute("x").toPixels("x"),this.attribute("y").toPixels("y"));var i=A.ViewPort.width(),n=A.ViewPort.height();if(this.attribute("width").hasValue()||(this.attribute("width",!0).value="100%"),this.attribute("height").hasValue()||(this.attribute("height",!0).value="100%"),void 0===this.root){i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");var s=0,a=0;this.attribute("refX").hasValue()&&this.attribute("refY").hasValue()&&(s=-this.attribute("refX").toPixels("x"),a=-this.attribute("refY").toPixels("y")),"visible"!=this.attribute("overflow").valueOrDefault("hidden")&&(t.beginPath(),t.moveTo(s,a),t.lineTo(i,a),t.lineTo(i,n),t.lineTo(s,n),t.closePath(),t.clip())}if(A.ViewPort.SetCurrent(i,n),this.attribute("viewBox").hasValue()){var r=A.ToNumberArray(this.attribute("viewBox").value),o=r[0],l=r[1];i=r[2],n=r[3],A.AspectRatio(t,this.attribute("preserveAspectRatio").value,A.ViewPort.width(),i,A.ViewPort.height(),n,o,l,this.attribute("refX").value,this.attribute("refY").value),A.ViewPort.RemoveCurrent(),A.ViewPort.SetCurrent(r[2],r[3])}}},A.Element.svg.prototype=new A.Element.RenderedElementBase,A.Element.rect=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y"),a=this.attribute("rx").toPixels("x"),r=this.attribute("ry").toPixels("y");if(this.attribute("rx").hasValue()&&!this.attribute("ry").hasValue()&&(r=a),this.attribute("ry").hasValue()&&!this.attribute("rx").hasValue()&&(a=r),a=Math.min(a,n/2),r=Math.min(r,s/2),null!=t){var o=(Math.sqrt(2)-1)/3*4;t.beginPath(),t.moveTo(e+a,i),t.lineTo(e+n-a,i),t.bezierCurveTo(e+n-a+o*a,i,e+n,i+r-o*r,e+n,i+r),t.lineTo(e+n,i+s-r),t.bezierCurveTo(e+n,i+s-r+o*r,e+n-a+o*a,i+s,e+n-a,i+s),t.lineTo(e+a,i+s),t.bezierCurveTo(e+a-o*a,i+s,e,i+s-r+o*r,e,i+s-r),t.lineTo(e,i+r),t.bezierCurveTo(e,i+r-o*r,e+a-o*a,i,e+a,i),t.closePath()}return new A.BoundingBox(e,i,e+n,i+s)}},A.Element.rect.prototype=new A.Element.PathElementBase,A.Element.circle=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=this.attribute("cx").toPixels("x"),i=this.attribute("cy").toPixels("y"),n=this.attribute("r").toPixels();return null!=t&&(t.beginPath(),t.arc(e,i,n,0,2*Math.PI,!1),t.closePath()),new A.BoundingBox(e-n,i-n,e+n,i+n)}},A.Element.circle.prototype=new A.Element.PathElementBase,A.Element.ellipse=function(t){this.base=A.Element.PathElementBase,this.base(t),this.path=function(t){var e=(Math.sqrt(2)-1)/3*4,i=this.attribute("rx").toPixels("x"),n=this.attribute("ry").toPixels("y"),s=this.attribute("cx").toPixels("x"),a=this.attribute("cy").toPixels("y");return null!=t&&(t.beginPath(),t.moveTo(s+i,a),t.bezierCurveTo(s+i,a+e*n,s+e*i,a+n,s,a+n),t.bezierCurveTo(s-e*i,a+n,s-i,a+e*n,s-i,a),t.bezierCurveTo(s-i,a-e*n,s-e*i,a-n,s,a-n),t.bezierCurveTo(s+e*i,a-n,s+i,a-e*n,s+i,a),t.closePath()),new A.BoundingBox(s-i,a-n,s+i,a+n)}},A.Element.ellipse.prototype=new A.Element.PathElementBase,A.Element.line=function(t){this.base=A.Element.PathElementBase,this.base(t),this.getPoints=function(){return[new A.Point(this.attribute("x1").toPixels("x"),this.attribute("y1").toPixels("y")),new A.Point(this.attribute("x2").toPixels("x"),this.attribute("y2").toPixels("y"))]},this.path=function(t){var e=this.getPoints();return null!=t&&(t.beginPath(),t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y)),new A.BoundingBox(e[0].x,e[0].y,e[1].x,e[1].y)},this.getMarkers=function(){var t=this.getPoints(),e=t[0].angleTo(t[1]);return[[t[0],e],[t[1],e]]}},A.Element.line.prototype=new A.Element.PathElementBase,A.Element.polyline=function(t){this.base=A.Element.PathElementBase,this.base(t),this.points=A.CreatePath(this.attribute("points").value),this.path=function(t){var e=new A.BoundingBox(this.points[0].x,this.points[0].y);null!=t&&(t.beginPath(),t.moveTo(this.points[0].x,this.points[0].y));for(var i=1;i<this.points.length;i++)e.addPoint(this.points[i].x,this.points[i].y),null!=t&&t.lineTo(this.points[i].x,this.points[i].y);return e},this.getMarkers=function(){for(var t=[],e=0;e<this.points.length-1;e++)t.push([this.points[e],this.points[e].angleTo(this.points[e+1])]);return 0<t.length&&t.push([this.points[this.points.length-1],t[t.length-1][1]]),t}},A.Element.polyline.prototype=new A.Element.PathElementBase,A.Element.polygon=function(t){this.base=A.Element.polyline,this.base(t),this.basePath=this.path,this.path=function(t){var e=this.basePath(t);return null!=t&&(t.lineTo(this.points[0].x,this.points[0].y),t.closePath()),e}},A.Element.polygon.prototype=new A.Element.polyline,A.Element.path=function(t){this.base=A.Element.PathElementBase,this.base(t);var e=this.attribute("d").value;e=e.replace(/,/gm," ");for(var i=0;i<2;i++)e=e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm,"$1 $2");for(e=(e=e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm,"$1 $2")).replace(/([0-9])([+\-])/gm,"$1 $2"),i=0;i<2;i++)e=e.replace(/(\.[0-9]*)(\.)/gm,"$1 $2");e=e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm,"$1 $3 $4 "),e=A.compressSpaces(e),e=A.trim(e),this.PathParser=new function(t){this.tokens=t.split(" "),this.reset=function(){this.i=-1,this.command="",this.previousCommand="",this.start=new A.Point(0,0),this.control=new A.Point(0,0),this.current=new A.Point(0,0),this.points=[],this.angles=[]},this.isEnd=function(){return this.i>=this.tokens.length-1},this.isCommandOrEnd=function(){return!!this.isEnd()||null!=this.tokens[this.i+1].match(/^[A-Za-z]$/)},this.isRelativeCommand=function(){switch(this.command){case"m":case"l":case"h":case"v":case"c":case"s":case"q":case"t":case"a":case"z":return!0}return!1},this.getToken=function(){return this.i++,this.tokens[this.i]},this.getScalar=function(){return parseFloat(this.getToken())},this.nextCommand=function(){this.previousCommand=this.command,this.command=this.getToken()},this.getPoint=function(){var t=new A.Point(this.getScalar(),this.getScalar());return this.makeAbsolute(t)},this.getAsControlPoint=function(){var t=this.getPoint();return this.control=t},this.getAsCurrentPoint=function(){var t=this.getPoint();return this.current=t},this.getReflectedControlPoint=function(){return"c"!=this.previousCommand.toLowerCase()&&"s"!=this.previousCommand.toLowerCase()&&"q"!=this.previousCommand.toLowerCase()&&"t"!=this.previousCommand.toLowerCase()?this.current:new A.Point(2*this.current.x-this.control.x,2*this.current.y-this.control.y)},this.makeAbsolute=function(t){return this.isRelativeCommand()&&(t.x+=this.current.x,t.y+=this.current.y),t},this.addMarker=function(t,e,i){null!=i&&0<this.angles.length&&null==this.angles[this.angles.length-1]&&(this.angles[this.angles.length-1]=this.points[this.points.length-1].angleTo(i)),this.addMarkerAngle(t,null==e?null:e.angleTo(t))},this.addMarkerAngle=function(t,e){this.points.push(t),this.angles.push(e)},this.getMarkerPoints=function(){return this.points},this.getMarkerAngles=function(){for(var t=0;t<this.angles.length;t++)if(null==this.angles[t])for(var e=t+1;e<this.angles.length;e++)if(null!=this.angles[e]){this.angles[t]=this.angles[e];break}return this.angles}}(e),this.path=function(t){var e=this.PathParser;e.reset();var i=new A.BoundingBox;for(null!=t&&t.beginPath();!e.isEnd();)switch(e.nextCommand(),e.command){case"M":case"m":var n=e.getAsCurrentPoint();for(e.addMarker(n),i.addPoint(n.x,n.y),null!=t&&t.moveTo(n.x,n.y),e.start=e.current;!e.isCommandOrEnd();)n=e.getAsCurrentPoint(),e.addMarker(n,e.start),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y);break;case"L":case"l":for(;!e.isCommandOrEnd();){var s=e.current;n=e.getAsCurrentPoint(),e.addMarker(n,s),i.addPoint(n.x,n.y),null!=t&&t.lineTo(n.x,n.y)}break;case"H":case"h":for(;!e.isCommandOrEnd();){var a=new A.Point((e.isRelativeCommand()?e.current.x:0)+e.getScalar(),e.current.y);e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y)}break;case"V":case"v":for(;!e.isCommandOrEnd();)a=new A.Point(e.current.x,(e.isRelativeCommand()?e.current.y:0)+e.getScalar()),e.addMarker(a,e.current),e.current=a,i.addPoint(e.current.x,e.current.y),null!=t&&t.lineTo(e.current.x,e.current.y);break;case"C":case"c":for(;!e.isCommandOrEnd();){var r=e.current,o=e.getPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint();e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y)}break;case"S":case"s":for(;!e.isCommandOrEnd();)r=e.current,o=e.getReflectedControlPoint(),l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,o),i.addBezierCurve(r.x,r.y,o.x,o.y,l.x,l.y,h.x,h.y),null!=t&&t.bezierCurveTo(o.x,o.y,l.x,l.y,h.x,h.y);break;case"Q":case"q":for(;!e.isCommandOrEnd();)r=e.current,l=e.getAsControlPoint(),h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"T":case"t":for(;!e.isCommandOrEnd();)r=e.current,l=e.getReflectedControlPoint(),e.control=l,h=e.getAsCurrentPoint(),e.addMarker(h,l,l),i.addQuadraticCurve(r.x,r.y,l.x,l.y,h.x,h.y),null!=t&&t.quadraticCurveTo(l.x,l.y,h.x,h.y);break;case"A":case"a":for(;!e.isCommandOrEnd();){r=e.current;var u=e.getScalar(),c=e.getScalar(),f=e.getScalar()*(Math.PI/180),m=e.getScalar(),p=e.getScalar(),d=(h=e.getAsCurrentPoint(),new A.Point(Math.cos(f)*(r.x-h.x)/2+Math.sin(f)*(r.y-h.y)/2,-Math.sin(f)*(r.x-h.x)/2+Math.cos(f)*(r.y-h.y)/2)),y=Math.pow(d.x,2)/Math.pow(u,2)+Math.pow(d.y,2)/Math.pow(c,2);1<y&&(u*=Math.sqrt(y),c*=Math.sqrt(y));var v=(m==p?-1:1)*Math.sqrt((Math.pow(u,2)*Math.pow(c,2)-Math.pow(u,2)*Math.pow(d.y,2)-Math.pow(c,2)*Math.pow(d.x,2))/(Math.pow(u,2)*Math.pow(d.y,2)+Math.pow(c,2)*Math.pow(d.x,2)));isNaN(v)&&(v=0);var g=new A.Point(v*u*d.y/c,v*-c*d.x/u),x=new A.Point((r.x+h.x)/2+Math.cos(f)*g.x-Math.sin(f)*g.y,(r.y+h.y)/2+Math.sin(f)*g.x+Math.cos(f)*g.y),b=function(t){return Math.sqrt(Math.pow(t[0],2)+Math.pow(t[1],2))},P=function(t,e){return(t[0]*e[0]+t[1]*e[1])/(b(t)*b(e))},E=function(t,e){return(t[0]*e[1]<t[1]*e[0]?-1:1)*Math.acos(P(t,e))},w=E([1,0],[(d.x-g.x)/u,(d.y-g.y)/c]),B=[(d.x-g.x)/u,(d.y-g.y)/c],C=[(-d.x-g.x)/u,(-d.y-g.y)/c],T=E(B,C);P(B,C)<=-1&&(T=Math.PI),1<=P(B,C)&&(T=0);var V=1-p?1:-1,M=w+V*(T/2),S=new A.Point(x.x+u*Math.cos(M),x.y+c*Math.sin(M));if(e.addMarkerAngle(S,M-V*Math.PI/2),e.addMarkerAngle(h,M-V*Math.PI),i.addPoint(h.x,h.y),null!=t){P=c<u?u:c;var k=c<u?1:u/c,D=c<u?c/u:1;t.translate(x.x,x.y),t.rotate(f),t.scale(k,D),t.arc(0,0,P,w,w+T,1-p),t.scale(1/k,1/D),t.rotate(-f),t.translate(-x.x,-x.y)}}break;case"Z":case"z":null!=t&&i.x1!==i.x2&&i.y1!==i.y2&&t.closePath(),e.current=e.start}return i},this.getMarkers=function(){for(var t=this.PathParser.getMarkerPoints(),e=this.PathParser.getMarkerAngles(),i=[],n=0;n<t.length;n++)i.push([t[n],e[n]]);return i}},A.Element.path.prototype=new A.Element.PathElementBase,A.Element.pattern=function(t){this.base=A.Element.ElementBase,this.base(t),this.createPattern=function(t,e){var i=this.attribute("width").toPixels("x",!0),n=this.attribute("height").toPixels("y",!0),s=new A.Element.svg;s.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),s.attributes.width=new A.Property("width",i+"px"),s.attributes.height=new A.Property("height",n+"px"),s.attributes.transform=new A.Property("transform",this.attribute("patternTransform").value),s.children=this.children;var a=p();a.width=i,a.height=n;var r=a.getContext("2d");this.attribute("x").hasValue()&&this.attribute("y").hasValue()&&r.translate(this.attribute("x").toPixels("x",!0),this.attribute("y").toPixels("y",!0));for(var o=-1;o<=1;o++)for(var l=-1;l<=1;l++)r.save(),s.attributes.x=new A.Property("x",o*a.width),s.attributes.y=new A.Property("y",l*a.height),s.render(r),r.restore();return t.createPattern(a,"repeat")}},A.Element.pattern.prototype=new A.Element.ElementBase,A.Element.marker=function(t){this.base=A.Element.ElementBase,this.base(t),this.baseRender=this.render,this.render=function(t,e,i){if(e){t.translate(e.x,e.y),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(i),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(t.lineWidth,t.lineWidth),t.save();var n=new A.Element.svg;n.attributes.viewBox=new A.Property("viewBox",this.attribute("viewBox").value),n.attributes.refX=new A.Property("refX",this.attribute("refX").value),n.attributes.refY=new A.Property("refY",this.attribute("refY").value),n.attributes.width=new A.Property("width",this.attribute("markerWidth").value),n.attributes.height=new A.Property("height",this.attribute("markerHeight").value),n.attributes.fill=new A.Property("fill",this.attribute("fill").valueOrDefault("black")),n.attributes.stroke=new A.Property("stroke",this.attribute("stroke").valueOrDefault("none")),n.children=this.children,n.render(t),t.restore(),"strokeWidth"==this.attribute("markerUnits").valueOrDefault("strokeWidth")&&t.scale(1/t.lineWidth,1/t.lineWidth),"auto"==this.attribute("orient").valueOrDefault("auto")&&t.rotate(-i),t.translate(-e.x,-e.y)}}},A.Element.marker.prototype=new A.Element.ElementBase,A.Element.defs=function(t){this.base=A.Element.ElementBase,this.base(t),this.render=function(t){}},A.Element.defs.prototype=new A.Element.ElementBase,A.Element.GradientBase=function(t){this.base=A.Element.ElementBase,this.base(t),this.stops=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"stop"==i.type&&this.stops.push(i)}this.getGradient=function(){},this.gradientUnits=function(){return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox")},this.attributesToInherit=["gradientUnits"],this.inheritStopContainer=function(t){for(var e=0;e<this.attributesToInherit.length;e++){var i=this.attributesToInherit[e];!this.attribute(i).hasValue()&&t.attribute(i).hasValue()&&(this.attribute(i,!0).value=t.attribute(i).value)}},this.createGradient=function(t,e,i){var n=this;this.getHrefAttribute().hasValue()&&(n=this.getHrefAttribute().getDefinition(),this.inheritStopContainer(n));var s=function(t){return i.hasValue()?new A.Property("color",t).addOpacity(i).value:t},a=this.getGradient(t,e);if(null==a)return s(n.stops[n.stops.length-1].color);for(var r=0;r<n.stops.length;r++)a.addColorStop(n.stops[r].offset,s(n.stops[r].color));if(this.attribute("gradientTransform").hasValue()){var o=A.ViewPort.viewPorts[0],l=new A.Element.rect;l.attributes.x=new A.Property("x",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.y=new A.Property("y",-A.MAX_VIRTUAL_PIXELS/3),l.attributes.width=new A.Property("width",A.MAX_VIRTUAL_PIXELS),l.attributes.height=new A.Property("height",A.MAX_VIRTUAL_PIXELS);var h=new A.Element.g;h.attributes.transform=new A.Property("transform",this.attribute("gradientTransform").value),h.children=[l];var u=new A.Element.svg;u.attributes.x=new A.Property("x",0),u.attributes.y=new A.Property("y",0),u.attributes.width=new A.Property("width",o.width),u.attributes.height=new A.Property("height",o.height),u.children=[h];var c=p();c.width=o.width,c.height=o.height;var f=c.getContext("2d");return f.fillStyle=a,u.render(f),f.createPattern(c,"no-repeat")}return a}},A.Element.GradientBase.prototype=new A.Element.ElementBase,A.Element.linearGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("x1"),this.attributesToInherit.push("y1"),this.attributesToInherit.push("x2"),this.attributesToInherit.push("y2"),this.getGradient=function(t,e){var i="objectBoundingBox"==this.gradientUnits()?e.getBoundingBox(t):null;this.attribute("x1").hasValue()||this.attribute("y1").hasValue()||this.attribute("x2").hasValue()||this.attribute("y2").hasValue()||(this.attribute("x1",!0).value=0,this.attribute("y1",!0).value=0,this.attribute("x2",!0).value=1,this.attribute("y2",!0).value=0);var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x1").numValue():this.attribute("x1").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y1").numValue():this.attribute("y1").toPixels("y"),a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("x2").numValue():this.attribute("x2").toPixels("x"),r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("y2").numValue():this.attribute("y2").toPixels("y");return n==a&&s==r?null:t.createLinearGradient(n,s,a,r)}},A.Element.linearGradient.prototype=new A.Element.GradientBase,A.Element.radialGradient=function(t){this.base=A.Element.GradientBase,this.base(t),this.attributesToInherit.push("cx"),this.attributesToInherit.push("cy"),this.attributesToInherit.push("r"),this.attributesToInherit.push("fx"),this.attributesToInherit.push("fy"),this.getGradient=function(t,e){var i=e.getBoundingBox(t);this.attribute("cx").hasValue()||(this.attribute("cx",!0).value="50%"),this.attribute("cy").hasValue()||(this.attribute("cy",!0).value="50%"),this.attribute("r").hasValue()||(this.attribute("r",!0).value="50%");var n="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("cx").numValue():this.attribute("cx").toPixels("x"),s="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("cy").numValue():this.attribute("cy").toPixels("y"),a=n,r=s;this.attribute("fx").hasValue()&&(a="objectBoundingBox"==this.gradientUnits()?i.x()+i.width()*this.attribute("fx").numValue():this.attribute("fx").toPixels("x")),this.attribute("fy").hasValue()&&(r="objectBoundingBox"==this.gradientUnits()?i.y()+i.height()*this.attribute("fy").numValue():this.attribute("fy").toPixels("y"));var o="objectBoundingBox"==this.gradientUnits()?(i.width()+i.height())/2*this.attribute("r").numValue():this.attribute("r").toPixels();return t.createRadialGradient(a,r,0,n,s,o)}},A.Element.radialGradient.prototype=new A.Element.GradientBase,A.Element.stop=function(t){this.base=A.Element.ElementBase,this.base(t),this.offset=this.attribute("offset").numValue(),this.offset<0&&(this.offset=0),1<this.offset&&(this.offset=1);var e=this.style("stop-color",!0);""===e.value&&(e.value="#000"),this.style("stop-opacity").hasValue()&&(e=e.addOpacity(this.style("stop-opacity"))),this.color=e.value},A.Element.stop.prototype=new A.Element.ElementBase,A.Element.AnimateBase=function(t){this.base=A.Element.ElementBase,this.base(t),A.Animations.push(this),this.duration=0,this.begin=this.attribute("begin").toMilliseconds(),this.maxDuration=this.begin+this.attribute("dur").toMilliseconds(),this.getProperty=function(){var t=this.attribute("attributeType").value,e=this.attribute("attributeName").value;return"CSS"==t?this.parent.style(e,!0):this.parent.attribute(e,!0)},this.initialValue=null,this.initialUnits="",this.removed=!1,this.calcValue=function(){return""},this.update=function(t){if(null==this.initialValue&&(this.initialValue=this.getProperty().value,this.initialUnits=this.getProperty().getUnits()),this.duration>this.maxDuration){if("indefinite"==this.attribute("repeatCount").value||"indefinite"==this.attribute("repeatDur").value)this.duration=0;else if("freeze"!=this.attribute("fill").valueOrDefault("remove")||this.frozen){if("remove"==this.attribute("fill").valueOrDefault("remove")&&!this.removed)return this.removed=!0,this.getProperty().value=this.parent.animationFrozen?this.parent.animationFrozenValue:this.initialValue,!0}else this.frozen=!0,this.parent.animationFrozen=!0,this.parent.animationFrozenValue=this.getProperty().value;return!1}this.duration=this.duration+t;var e=!1;if(this.begin<this.duration){var i=this.calcValue();this.attribute("type").hasValue()&&(i=this.attribute("type").value+"("+i+")"),this.getProperty().value=i,e=!0}return e},this.from=this.attribute("from"),this.to=this.attribute("to"),this.values=this.attribute("values"),this.values.hasValue()&&(this.values.value=this.values.value.split(";")),this.progress=function(){var t={progress:(this.duration-this.begin)/(this.maxDuration-this.begin)};if(this.values.hasValue()){var e=t.progress*(this.values.value.length-1),i=Math.floor(e),n=Math.ceil(e);t.from=new A.Property("from",parseFloat(this.values.value[i])),t.to=new A.Property("to",parseFloat(this.values.value[n])),t.progress=(e-i)/(n-i)}else t.from=this.from,t.to=this.to;return t}},A.Element.AnimateBase.prototype=new A.Element.ElementBase,A.Element.animate=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress();return t.from.numValue()+(t.to.numValue()-t.from.numValue())*t.progress+this.initialUnits}},A.Element.animate.prototype=new A.Element.AnimateBase,A.Element.animateColor=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){var t=this.progress(),e=new m(t.from.value),i=new m(t.to.value);if(e.ok&&i.ok){var n=e.r+(i.r-e.r)*t.progress,s=e.g+(i.g-e.g)*t.progress,a=e.b+(i.b-e.b)*t.progress;return"rgb("+parseInt(n,10)+","+parseInt(s,10)+","+parseInt(a,10)+")"}return this.attribute("from").value}},A.Element.animateColor.prototype=new A.Element.AnimateBase,A.Element.animateTransform=function(t){this.base=A.Element.AnimateBase,this.base(t),this.calcValue=function(){for(var t=this.progress(),e=A.ToNumberArray(t.from.value),i=A.ToNumberArray(t.to.value),n="",s=0;s<e.length;s++)n+=e[s]+(i[s]-e[s])*t.progress+" ";return n}},A.Element.animateTransform.prototype=new A.Element.animate,A.Element.font=function(t){this.base=A.Element.ElementBase,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.isRTL=!1,this.isArabic=!1,this.fontFace=null,this.missingGlyph=null,this.glyphs=[];for(var e=0;e<this.children.length;e++){var i=this.children[e];"font-face"==i.type?(this.fontFace=i).style("font-family").hasValue()&&(A.Definitions[i.style("font-family").value]=this):"missing-glyph"==i.type?this.missingGlyph=i:"glyph"==i.type&&(""!=i.arabicForm?(this.isRTL=!0,this.isArabic=!0,void 0===this.glyphs[i.unicode]&&(this.glyphs[i.unicode]=[]),this.glyphs[i.unicode][i.arabicForm]=i):this.glyphs[i.unicode]=i)}},A.Element.font.prototype=new A.Element.ElementBase,A.Element.fontface=function(t){this.base=A.Element.ElementBase,this.base(t),this.ascent=this.attribute("ascent").value,this.descent=this.attribute("descent").value,this.unitsPerEm=this.attribute("units-per-em").numValue()},A.Element.fontface.prototype=new A.Element.ElementBase,A.Element.missingglyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=0},A.Element.missingglyph.prototype=new A.Element.path,A.Element.glyph=function(t){this.base=A.Element.path,this.base(t),this.horizAdvX=this.attribute("horiz-adv-x").numValue(),this.unicode=this.attribute("unicode").value,this.arabicForm=this.attribute("arabic-form").value},A.Element.glyph.prototype=new A.Element.path,A.Element.text=function(t){this.captureTextNodes=!0,this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t);var e=this.style("dominant-baseline").toTextBaseline();null==e&&(e=this.style("alignment-baseline").toTextBaseline()),null!=e&&(t.textBaseline=e)},this.initializeCoordinates=function(t){this.x=this.attribute("x").toPixels("x"),this.y=this.attribute("y").toPixels("y"),this.attribute("dx").hasValue()&&(this.x+=this.attribute("dx").toPixels("x")),this.attribute("dy").hasValue()&&(this.y+=this.attribute("dy").toPixels("y")),this.x+=this.getAnchorDelta(t,this,0)},this.getBoundingBox=function(t){this.initializeCoordinates(t);for(var e=null,i=0;i<this.children.length;i++){var n=this.getChildBoundingBox(t,this,this,i);null==e?e=n:e.addBoundingBox(n)}return e},this.renderChildren=function(t){this.initializeCoordinates(t);for(var e=0;e<this.children.length;e++)this.renderChild(t,this,this,e)},this.getAnchorDelta=function(t,e,i){var n=this.style("text-anchor").valueOrDefault("start");if("start"!=n){for(var s=0,a=i;a<e.children.length;a++){var r=e.children[a];if(i<a&&r.attribute("x").hasValue())break;s+=r.measureTextRecursive(t)}return-1*("end"==n?s:s/2)}return 0},this.adjustChildCoordinates=function(t,e,i,n){var s=i.children[n];return s.attribute("x").hasValue()?(s.x=s.attribute("x").toPixels("x")+e.getAnchorDelta(t,i,n),s.attribute("dx").hasValue()&&(s.x+=s.attribute("dx").toPixels("x"))):(s.attribute("dx").hasValue()&&(e.x+=s.attribute("dx").toPixels("x")),s.x=e.x),e.x=s.x+s.measureText(t),s.attribute("y").hasValue()?(s.y=s.attribute("y").toPixels("y"),s.attribute("dy").hasValue()&&(s.y+=s.attribute("dy").toPixels("y"))):(s.attribute("dy").hasValue()&&(e.y+=s.attribute("dy").toPixels("y")),s.y=e.y),e.y=s.y,s},this.getChildBoundingBox=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n),a=s.getBoundingBox(t);for(n=0;n<s.children.length;n++){var r=e.getChildBoundingBox(t,e,s,n);a.addBoundingBox(r)}return a},this.renderChild=function(t,e,i,n){var s=this.adjustChildCoordinates(t,e,i,n);for(s.render(t),n=0;n<s.children.length;n++)e.renderChild(t,e,s,n)}},A.Element.text.prototype=new A.Element.RenderedElementBase,A.Element.TextElementBase=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getGlyph=function(t,e,i){var n=e[i],s=null;if(t.isArabic){var a="isolated";(0==i||" "==e[i-1])&&i<e.length-2&&" "!=e[i+1]&&(a="terminal"),0<i&&" "!=e[i-1]&&i<e.length-2&&" "!=e[i+1]&&(a="medial"),0<i&&" "!=e[i-1]&&(i==e.length-1||" "==e[i+1])&&(a="initial"),void 0!==t.glyphs[n]&&null==(s=t.glyphs[n][a])&&"glyph"==t.glyphs[n].type&&(s=t.glyphs[n])}else s=t.glyphs[n];return null==s&&(s=t.missingGlyph),s},this.renderChildren=function(t){var e=this.parent.style("font-family").getDefinition();if(null==e)"stroke"==t.paintOrder?(""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y)):(""!=t.fillStyle&&t.fillText(A.compressSpaces(this.getText()),this.x,this.y),""!=t.strokeStyle&&t.strokeText(A.compressSpaces(this.getText()),this.x,this.y));else{var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=this.parent.style("font-style").valueOrDefault(A.Font.Parse(A.ctx.font).fontStyle),s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++){var o=this.getGlyph(e,s,r),l=i/e.fontFace.unitsPerEm;t.translate(this.x,this.y),t.scale(l,-l);var h=t.lineWidth;t.lineWidth=t.lineWidth*e.fontFace.unitsPerEm/i,"italic"==n&&t.transform(1,0,.4,1,0,0),o.render(t),"italic"==n&&t.transform(1,0,-.4,1,0,0),t.lineWidth=h,t.scale(1/l,-1/l),t.translate(-this.x,-this.y),this.x+=i*(o.horizAdvX||e.horizAdvX)/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(this.x+=a[r])}}},this.getText=function(){},this.measureTextRecursive=function(t){for(var e=this.measureText(t),i=0;i<this.children.length;i++)e+=this.children[i].measureTextRecursive(t);return e},this.measureText=function(t){var e=this.parent.style("font-family").getDefinition();if(null!=e){var i=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize),n=0,s=this.getText();e.isRTL&&(s=s.split("").reverse().join(""));for(var a=A.ToNumberArray(this.parent.attribute("dx").value),r=0;r<s.length;r++)n+=(this.getGlyph(e,s,r).horizAdvX||e.horizAdvX)*i/e.fontFace.unitsPerEm,void 0===a[r]||isNaN(a[r])||(n+=a[r]);return n}var o=A.compressSpaces(this.getText());if(!t.measureText)return 10*o.length;t.save(),this.setContext(t,!0);var l=t.measureText(o).width;return t.restore(),l},this.getBoundingBox=function(t){var e=this.parent.style("font-size").numValueOrDefault(A.Font.Parse(A.ctx.font).fontSize);return new A.BoundingBox(this.x,this.y-e,this.x+this.measureText(t),this.y)}},A.Element.TextElementBase.prototype=new A.Element.RenderedElementBase,A.Element.tspan=function(t){this.captureTextNodes=!0,this.base=A.Element.TextElementBase,this.base(t),this.text=A.compressSpaces(t.value||t.text||t.textContent||""),this.getText=function(){return 0<this.children.length?"":this.text}},A.Element.tspan.prototype=new A.Element.TextElementBase,A.Element.tref=function(t){this.base=A.Element.TextElementBase,this.base(t),this.getText=function(){var t=this.getHrefAttribute().getDefinition();if(null!=t)return t.children[0].getText()}},A.Element.tref.prototype=new A.Element.TextElementBase,A.Element.a=function(t){this.base=A.Element.TextElementBase,this.base(t),this.hasText=0<t.childNodes.length;for(var e=0;e<t.childNodes.length;e++)3!=t.childNodes[e].nodeType&&(this.hasText=!1);this.text=this.hasText?t.childNodes[0].value||t.childNodes[0].data:"",this.getText=function(){return this.text},this.baseRenderChildren=this.renderChildren,this.renderChildren=function(t){if(this.hasText){this.baseRenderChildren(t);var e=new A.Property("fontSize",A.Font.Parse(A.ctx.font).fontSize);A.Mouse.checkBoundingBox(this,new A.BoundingBox(this.x,this.y-e.toPixels("y"),this.x+this.measureText(t),this.y))}else if(0<this.children.length){var i=new A.Element.g;i.children=this.children,i.parent=this,i.render(t)}},this.onclick=function(){u.open(this.getHrefAttribute().value)},this.onmousemove=function(){A.ctx.canvas.style.cursor="pointer"}},A.Element.a.prototype=new A.Element.TextElementBase,A.Element.image=function(t){this.base=A.Element.RenderedElementBase,this.base(t);var e=this.getHrefAttribute().value;if(""!=e){var a=e.match(/\.svg$/);if(A.Images.push(this),this.loaded=!1,a)this.img=A.ajax(e),this.loaded=!0;else{this.img=document.createElement("img"),1==A.opts.useCORS&&(this.img.crossOrigin="Anonymous");var r=this;this.img.onload=function(){r.loaded=!0},this.img.onerror=function(){A.log('ERROR: image "'+e+'" not found'),r.loaded=!0},this.img.src=e}this.renderChildren=function(t){var e=this.attribute("x").toPixels("x"),i=this.attribute("y").toPixels("y"),n=this.attribute("width").toPixels("x"),s=this.attribute("height").toPixels("y");0!=n&&0!=s&&(t.save(),a?t.drawSvg(this.img,e,i,n,s):(t.translate(e,i),A.AspectRatio(t,this.attribute("preserveAspectRatio").value,n,this.img.width,s,this.img.height,0,0),r.loaded&&(void 0===this.img.complete||this.img.complete)&&t.drawImage(this.img,0,0)),t.restore())},this.getBoundingBox=function(){var t=this.attribute("x").toPixels("x"),e=this.attribute("y").toPixels("y"),i=this.attribute("width").toPixels("x"),n=this.attribute("height").toPixels("y");return new A.BoundingBox(t,e,t+i,e+n)}}},A.Element.image.prototype=new A.Element.RenderedElementBase,A.Element.g=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.getBoundingBox=function(t){for(var e=new A.BoundingBox,i=0;i<this.children.length;i++)e.addBoundingBox(this.children[i].getBoundingBox(t));return e}},A.Element.g.prototype=new A.Element.RenderedElementBase,A.Element.symbol=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.render=function(t){}},A.Element.symbol.prototype=new A.Element.RenderedElementBase,A.Element.style=function(t){this.base=A.Element.ElementBase,this.base(t);for(var e="",i=0;i<t.childNodes.length;i++)e+=t.childNodes[i].data;e=e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,"");var n=(e=A.compressSpaces(e)).split("}");for(i=0;i<n.length;i++)if(""!=A.trim(n[i]))for(var s=n[i].split("{"),a=s[0].split(","),r=s[1].split(";"),o=0;o<a.length;o++){var l=A.trim(a[o]);if(""!=l){for(var h=A.Styles[l]||{},u=0;u<r.length;u++){var c=r[u].indexOf(":"),f=r[u].substr(0,c),m=r[u].substr(c+1,r[u].length-c);null!=f&&null!=m&&(h[A.trim(f)]=new A.Property(A.trim(f),A.trim(m)))}if(A.Styles[l]=h,A.StylesSpecificity[l]=w(l),"@font-face"==l)for(var p=h["font-family"].value.replace(/"/g,""),d=h.src.value.split(","),y=0;y<d.length;y++)if(0<d[y].indexOf('format("svg")'))for(var v=d[y].indexOf("url"),g=d[y].indexOf(")",v),x=d[y].substr(v+5,g-v-6),b=A.parseXml(A.ajax(x)).getElementsByTagName("font"),P=0;P<b.length;P++){var E=A.CreateElement(b[P]);A.Definitions[p]=E}}}},A.Element.style.prototype=new A.Element.ElementBase,A.Element.use=function(t){this.base=A.Element.RenderedElementBase,this.base(t),this.baseSetContext=this.setContext,this.setContext=function(t){this.baseSetContext(t),this.attribute("x").hasValue()&&t.translate(this.attribute("x").toPixels("x"),0),this.attribute("y").hasValue()&&t.translate(0,this.attribute("y").toPixels("y"))};var n=this.getHrefAttribute().getDefinition();this.path=function(t){null!=n&&n.path(t)},this.elementTransform=function(){if(null!=n&&n.style("transform",!1,!0).hasValue())return new A.Transform(n.style("transform",!1,!0).value)},this.getBoundingBox=function(t){if(null!=n)return n.getBoundingBox(t)},this.renderChildren=function(t){if(null!=n){var e=n;"symbol"==n.type&&((e=new A.Element.svg).type="svg",e.attributes.viewBox=new A.Property("viewBox",n.attribute("viewBox").value),e.attributes.preserveAspectRatio=new A.Property("preserveAspectRatio",n.attribute("preserveAspectRatio").value),e.attributes.overflow=new A.Property("overflow",n.attribute("overflow").value),e.children=n.children),"svg"==e.type&&(this.attribute("width").hasValue()&&(e.attributes.width=new A.Property("width",this.attribute("width").value)),this.attribute("height").hasValue()&&(e.attributes.height=new A.Property("height",this.attribute("height").value)));var i=e.parent;e.parent=null,e.render(t),e.parent=i}}},A.Element.use.prototype=new A.Element.RenderedElementBase,A.Element.mask=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=this.attribute("x").toPixels("x"),n=this.attribute("y").toPixels("y"),s=this.attribute("width").toPixels("x"),a=this.attribute("height").toPixels("y");if(0==s&&0==a){for(var r=new A.BoundingBox,o=0;o<this.children.length;o++)r.addBoundingBox(this.children[o].getBoundingBox(t));i=Math.floor(r.x1),n=Math.floor(r.y1),s=Math.floor(r.width()),a=Math.floor(r.height())}var l=e.attribute("mask").value;e.attribute("mask").value="";var h=p();h.width=i+s,h.height=n+a;var u=h.getContext("2d");this.renderChildren(u);var c=p();c.width=i+s,c.height=n+a;var f=c.getContext("2d");e.render(f),f.globalCompositeOperation="destination-in",f.fillStyle=u.createPattern(h,"no-repeat"),f.fillRect(0,0,i+s,n+a),t.fillStyle=f.createPattern(c,"no-repeat"),t.fillRect(0,0,i+s,n+a),e.attribute("mask").value=l},this.render=function(t){}},A.Element.mask.prototype=new A.Element.ElementBase,A.Element.clipPath=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t){var e="undefined"!=typeof CanvasRenderingContext2D,i=t.beginPath,n=t.closePath;e&&(CanvasRenderingContext2D.prototype.beginPath=function(){},CanvasRenderingContext2D.prototype.closePath=function(){}),i.call(t);for(var s=0;s<this.children.length;s++){var a=this.children[s];if(void 0!==a.path){var r=void 0!==a.elementTransform&&a.elementTransform();!r&&a.style("transform",!1,!0).hasValue()&&(r=new A.Transform(a.style("transform",!1,!0).value)),r&&r.apply(t),a.path(t),e&&(CanvasRenderingContext2D.prototype.closePath=n),r&&r.unapply(t)}}n.call(t),t.clip(),e&&(CanvasRenderingContext2D.prototype.beginPath=i,CanvasRenderingContext2D.prototype.closePath=n)},this.render=function(t){}},A.Element.clipPath.prototype=new A.Element.ElementBase,A.Element.filter=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e){var i=e.getBoundingBox(t),n=Math.floor(i.x1),s=Math.floor(i.y1),a=Math.floor(i.width()),r=Math.floor(i.height()),o=e.style("filter").value;e.style("filter").value="";for(var l=0,h=0,u=0;u<this.children.length;u++){var c=this.children[u].extraFilterDistance||0;l=Math.max(l,c),h=Math.max(h,c)}var f=p();f.width=a+2*l,f.height=r+2*h;var m=f.getContext("2d");for(m.translate(-n+l,-s+h),e.render(m),u=0;u<this.children.length;u++)"function"==typeof this.children[u].apply&&this.children[u].apply(m,0,0,a+2*l,r+2*h);t.drawImage(f,0,0,a+2*l,r+2*h,n-l,s-h,a+2*l,r+2*h),e.style("filter",!0).value=o},this.render=function(t){}},A.Element.filter.prototype=new A.Element.ElementBase,A.Element.feMorphology=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e,i,n,s){}},A.Element.feMorphology.prototype=new A.Element.ElementBase,A.Element.feComposite=function(t){this.base=A.Element.ElementBase,this.base(t),this.apply=function(t,e,i,n,s){}},A.Element.feComposite.prototype=new A.Element.ElementBase,A.Element.feColorMatrix=function(t){this.base=A.Element.ElementBase,this.base(t);var n=A.ToNumberArray(this.attribute("values").value);switch(this.attribute("type").valueOrDefault("matrix")){case"saturate":var e=n[0];n=[.213+.787*e,.715-.715*e,.072-.072*e,0,0,.213-.213*e,.715+.285*e,.072-.072*e,0,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,0,1,0,0,0,0,0,1];break;case"hueRotate":var s=n[0]*Math.PI/180,i=function(t,e,i){return t+Math.cos(s)*e+Math.sin(s)*i};n=[i(.213,.787,-.213),i(.715,-.715,-.715),i(.072,-.072,.928),0,0,i(.213,-.213,.143),i(.715,.285,.14),i(.072,-.072,-.283),0,0,i(.213,-.213,-.787),i(.715,-.715,.715),i(.072,.928,.072),0,0,0,0,0,1,0,0,0,0,0,1];break;case"luminanceToAlpha":n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.2125,.7154,.0721,0,0,0,0,0,0,1]}function u(t,e,i,n,s,a){return t[i*n*4+4*e+a]}function c(t,e,i,n,s,a,r){t[i*n*4+4*e+a]=r}function f(t,e){var i=n[t];return i*(i<0?e-255:e)}this.apply=function(t,e,i,n,s){var a=t.getImageData(0,0,n,s);for(i=0;i<s;i++)for(e=0;e<n;e++){var r=u(a.data,e,i,n,0,0),o=u(a.data,e,i,n,0,1),l=u(a.data,e,i,n,0,2),h=u(a.data,e,i,n,0,3);c(a.data,e,i,n,0,0,f(0,r)+f(1,o)+f(2,l)+f(3,h)+f(4,1)),c(a.data,e,i,n,0,1,f(5,r)+f(6,o)+f(7,l)+f(8,h)+f(9,1)),c(a.data,e,i,n,0,2,f(10,r)+f(11,o)+f(12,l)+f(13,h)+f(14,1)),c(a.data,e,i,n,0,3,f(15,r)+f(16,o)+f(17,l)+f(18,h)+f(19,1))}t.clearRect(0,0,n,s),t.putImageData(a,0,0)}},A.Element.feColorMatrix.prototype=new A.Element.ElementBase,A.Element.feGaussianBlur=function(t){this.base=A.Element.ElementBase,this.base(t),this.blurRadius=Math.floor(this.attribute("stdDeviation").numValue()),this.extraFilterDistance=this.blurRadius,this.apply=function(t,e,i,n,s){d&&void 0!==d.canvasRGBA?(t.canvas.id=A.UniqueId(),t.canvas.style.display="none",document.body.appendChild(t.canvas),d.canvasRGBA(t.canvas,e,i,n,s,this.blurRadius),document.body.removeChild(t.canvas)):A.log("ERROR: StackBlur.js must be included for blur to work")}},A.Element.feGaussianBlur.prototype=new A.Element.ElementBase,A.Element.title=function(t){},A.Element.title.prototype=new A.Element.ElementBase,A.Element.desc=function(t){},A.Element.desc.prototype=new A.Element.ElementBase,A.Element.MISSING=function(t){A.log("ERROR: Element '"+t.nodeName+"' not yet implemented.")},A.Element.MISSING.prototype=new A.Element.ElementBase,A.CreateElement=function(t){var e=t.nodeName.replace(/^[^:]+:/,"");e=e.replace(/\-/g,"");var i=null;return(i=void 0!==A.Element[e]?new A.Element[e](t):new A.Element.MISSING(t)).type=t.nodeName,i},A.load=function(t,e){A.loadXml(t,A.ajax(e))},A.loadXml=function(t,e){A.loadXmlDoc(t,A.parseXml(e))},A.loadXmlDoc=function(a,r){A.init(a);var i=function(t){for(var e=a.canvas;e;)t.x-=e.offsetLeft,t.y-=e.offsetTop,e=e.offsetParent;return u.scrollX&&(t.x+=u.scrollX),u.scrollY&&(t.y+=u.scrollY),t};1!=A.opts.ignoreMouse&&(a.canvas.onclick=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onclick(e.x,e.y)},a.canvas.onmousemove=function(t){var e=i(new A.Point(null!=t?t.clientX:event.clientX,null!=t?t.clientY:event.clientY));A.Mouse.onmousemove(e.x,e.y)});var o=A.CreateElement(r.documentElement);o.root=!0,o.addStylesFromStyleDefinition();var l=!0,n=function(){A.ViewPort.Clear(),a.canvas.parentNode?A.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth,a.canvas.parentNode.clientHeight):A.ViewPort.SetCurrent(800,600),1!=A.opts.ignoreDimensions&&(o.style("width").hasValue()&&(a.canvas.width=o.style("width").toPixels("x"),a.canvas.style&&(a.canvas.style.width=a.canvas.width+"px")),o.style("height").hasValue()&&(a.canvas.height=o.style("height").toPixels("y"),a.canvas.style&&(a.canvas.style.height=a.canvas.height+"px")));var t=a.canvas.clientWidth||a.canvas.width,e=a.canvas.clientHeight||a.canvas.height;if(1==A.opts.ignoreDimensions&&o.style("width").hasValue()&&o.style("height").hasValue()&&(t=o.style("width").toPixels("x"),e=o.style("height").toPixels("y")),A.ViewPort.SetCurrent(t,e),null!=A.opts.offsetX&&(o.attribute("x",!0).value=A.opts.offsetX),null!=A.opts.offsetY&&(o.attribute("y",!0).value=A.opts.offsetY),null!=A.opts.scaleWidth||null!=A.opts.scaleHeight){var i=null,n=null,s=A.ToNumberArray(o.attribute("viewBox").value);null!=A.opts.scaleWidth&&(o.attribute("width").hasValue()?i=o.attribute("width").toPixels("x")/A.opts.scaleWidth:isNaN(s[2])||(i=s[2]/A.opts.scaleWidth)),null!=A.opts.scaleHeight&&(o.attribute("height").hasValue()?n=o.attribute("height").toPixels("y")/A.opts.scaleHeight:isNaN(s[3])||(n=s[3]/A.opts.scaleHeight)),null==i&&(i=n),null==n&&(n=i),o.attribute("width",!0).value=A.opts.scaleWidth,o.attribute("height",!0).value=A.opts.scaleHeight,o.style("transform",!0,!0).value+=" scale("+1/i+","+1/n+")"}1!=A.opts.ignoreClear&&a.clearRect(0,0,t,e),o.render(a),l&&(l=!1,"function"==typeof A.opts.renderCallback&&A.opts.renderCallback(r))},s=!0;A.ImagesLoaded()&&(s=!1,n()),A.intervalID=setInterval(function(){var t=!1;if(s&&A.ImagesLoaded()&&(t=!(s=!1)),1!=A.opts.ignoreMouse&&(t|=A.Mouse.hasEvents()),1!=A.opts.ignoreAnimation)for(var e=0;e<A.Animations.length;e++)t|=A.Animations[e].update(1e3/A.FRAMERATE);"function"==typeof A.opts.forceRedraw&&1==A.opts.forceRedraw()&&(t=!0),t&&(n(),A.Mouse.runEvents())},1e3/A.FRAMERATE)},A.stop=function(){A.intervalID&&clearInterval(A.intervalID)},A.Mouse=new function(){this.events=[],this.hasEvents=function(){return 0!=this.events.length},this.onclick=function(t,e){this.events.push({type:"onclick",x:t,y:e,run:function(t){t.onclick&&t.onclick()}})},this.onmousemove=function(t,e){this.events.push({type:"onmousemove",x:t,y:e,run:function(t){t.onmousemove&&t.onmousemove()}})},this.eventElements=[],this.checkPath=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInPath&&e.isPointInPath(n.x,n.y)&&(this.eventElements[i]=t)}},this.checkBoundingBox=function(t,e){for(var i=0;i<this.events.length;i++){var n=this.events[i];e.isPointInBox(n.x,n.y)&&(this.eventElements[i]=t)}},this.runEvents=function(){A.ctx.canvas.style.cursor="";for(var t=0;t<this.events.length;t++)for(var e=this.events[t],i=this.eventElements[t];i;)e.run(i),i=i.parent;this.events=[],this.eventElements=[]}},A}(i||{});"string"==typeof t&&(t=document.getElementById(t)),null!=t.svg&&t.svg.stop(),t.childNodes&&1==t.childNodes.length&&"OBJECT"==t.childNodes[0].nodeName||(t.svg=n);var s=t.getContext("2d");void 0!==e.documentElement?n.loadXmlDoc(s,e):"<"==e.substr(0,1)?n.loadXml(s,e):n.load(s,e)}else for(var a=document.querySelectorAll("svg"),r=0;r<a.length;r++){var o=a[r],l=document.createElement("canvas");l.width=o.clientWidth,l.height=o.clientHeight,o.parentNode.insertBefore(l,o),o.parentNode.removeChild(o);var h=document.createElement("div");h.appendChild(o),c(l,h.innerHTML)}};"undefined"==typeof Element||(void 0!==Element.prototype.matches?f=function(t,e){return t.matches(e)}:void 0!==Element.prototype.webkitMatchesSelector?f=function(t,e){return t.webkitMatchesSelector(e)}:void 0!==Element.prototype.mozMatchesSelector?f=function(t,e){return t.mozMatchesSelector(e)}:void 0!==Element.prototype.msMatchesSelector?f=function(t,e){return t.msMatchesSelector(e)}:void 0!==Element.prototype.oMatchesSelector?f=function(t,e){return t.oMatchesSelector(e)}:("function"!=typeof jQuery&&"function"!=typeof Zepto||(f=function(t,e){return $(t).is(e)}),void 0===f&&"undefined"!=typeof Sizzle&&(f=Sizzle.matchesSelector)));var e=/(\[[^\]]+\])/g,i=/(#[^\s\+>~\.\[:]+)/g,a=/(\.[^\s\+>~\.\[:]+)/g,r=/(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,o=/(:[\w-]+\([^\)]*\))/gi,l=/(:[^\s\+>~\.\[:]+)/g,h=/([^\s\+>~\.\[:]+)/g;function w(n){var s=[0,0,0],t=function(t,e){var i=n.match(t);null!=i&&(s[e]+=i.length,n=n.replace(t," "))};return n=(n=n.replace(/:not\(([^\)]*)\)/g,"     $1 ")).replace(/{[\s\S]*/gm," "),t(e,1),t(i,0),t(a,1),t(r,2),t(o,1),t(l,1),n=(n=n.replace(/[\*\s\+>~]/g," ")).replace(/[#\.]/g," "),t(h,2),s.join("")}"undefined"!=typeof CanvasRenderingContext2D&&(CanvasRenderingContext2D.prototype.drawSvg=function(t,e,i,n,s,a){var r={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0,ignoreClear:!0,offsetX:e,offsetY:i,scaleWidth:n,scaleHeight:s};for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o]);c(this.canvas,t,r)}),t.exports=c}(t={exports:{}},t.exports),t.exports});

/***/ }),

/***/ "./node_modules/rgbcolor/index.js":
/*!****************************************!*\
  !*** ./node_modules/rgbcolor/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/

module.exports = function(color_string) {
    this.ok = false;
    this.alpha = 1.0;

    // strip any leading #
    if (color_string.charAt(0) == '#') { // remove # if any
        color_string = color_string.substr(1,6);
    }

    color_string = color_string.replace(/ /g,'');
    color_string = color_string.toLowerCase();

    // before getting into regexps, try simple matches
    // and overwrite the input
    var simple_colors = {
        aliceblue: 'f0f8ff',
        antiquewhite: 'faebd7',
        aqua: '00ffff',
        aquamarine: '7fffd4',
        azure: 'f0ffff',
        beige: 'f5f5dc',
        bisque: 'ffe4c4',
        black: '000000',
        blanchedalmond: 'ffebcd',
        blue: '0000ff',
        blueviolet: '8a2be2',
        brown: 'a52a2a',
        burlywood: 'deb887',
        cadetblue: '5f9ea0',
        chartreuse: '7fff00',
        chocolate: 'd2691e',
        coral: 'ff7f50',
        cornflowerblue: '6495ed',
        cornsilk: 'fff8dc',
        crimson: 'dc143c',
        cyan: '00ffff',
        darkblue: '00008b',
        darkcyan: '008b8b',
        darkgoldenrod: 'b8860b',
        darkgray: 'a9a9a9',
        darkgreen: '006400',
        darkkhaki: 'bdb76b',
        darkmagenta: '8b008b',
        darkolivegreen: '556b2f',
        darkorange: 'ff8c00',
        darkorchid: '9932cc',
        darkred: '8b0000',
        darksalmon: 'e9967a',
        darkseagreen: '8fbc8f',
        darkslateblue: '483d8b',
        darkslategray: '2f4f4f',
        darkturquoise: '00ced1',
        darkviolet: '9400d3',
        deeppink: 'ff1493',
        deepskyblue: '00bfff',
        dimgray: '696969',
        dodgerblue: '1e90ff',
        feldspar: 'd19275',
        firebrick: 'b22222',
        floralwhite: 'fffaf0',
        forestgreen: '228b22',
        fuchsia: 'ff00ff',
        gainsboro: 'dcdcdc',
        ghostwhite: 'f8f8ff',
        gold: 'ffd700',
        goldenrod: 'daa520',
        gray: '808080',
        green: '008000',
        greenyellow: 'adff2f',
        honeydew: 'f0fff0',
        hotpink: 'ff69b4',
        indianred : 'cd5c5c',
        indigo : '4b0082',
        ivory: 'fffff0',
        khaki: 'f0e68c',
        lavender: 'e6e6fa',
        lavenderblush: 'fff0f5',
        lawngreen: '7cfc00',
        lemonchiffon: 'fffacd',
        lightblue: 'add8e6',
        lightcoral: 'f08080',
        lightcyan: 'e0ffff',
        lightgoldenrodyellow: 'fafad2',
        lightgrey: 'd3d3d3',
        lightgreen: '90ee90',
        lightpink: 'ffb6c1',
        lightsalmon: 'ffa07a',
        lightseagreen: '20b2aa',
        lightskyblue: '87cefa',
        lightslateblue: '8470ff',
        lightslategray: '778899',
        lightsteelblue: 'b0c4de',
        lightyellow: 'ffffe0',
        lime: '00ff00',
        limegreen: '32cd32',
        linen: 'faf0e6',
        magenta: 'ff00ff',
        maroon: '800000',
        mediumaquamarine: '66cdaa',
        mediumblue: '0000cd',
        mediumorchid: 'ba55d3',
        mediumpurple: '9370d8',
        mediumseagreen: '3cb371',
        mediumslateblue: '7b68ee',
        mediumspringgreen: '00fa9a',
        mediumturquoise: '48d1cc',
        mediumvioletred: 'c71585',
        midnightblue: '191970',
        mintcream: 'f5fffa',
        mistyrose: 'ffe4e1',
        moccasin: 'ffe4b5',
        navajowhite: 'ffdead',
        navy: '000080',
        oldlace: 'fdf5e6',
        olive: '808000',
        olivedrab: '6b8e23',
        orange: 'ffa500',
        orangered: 'ff4500',
        orchid: 'da70d6',
        palegoldenrod: 'eee8aa',
        palegreen: '98fb98',
        paleturquoise: 'afeeee',
        palevioletred: 'd87093',
        papayawhip: 'ffefd5',
        peachpuff: 'ffdab9',
        peru: 'cd853f',
        pink: 'ffc0cb',
        plum: 'dda0dd',
        powderblue: 'b0e0e6',
        purple: '800080',
        rebeccapurple: '663399',
        red: 'ff0000',
        rosybrown: 'bc8f8f',
        royalblue: '4169e1',
        saddlebrown: '8b4513',
        salmon: 'fa8072',
        sandybrown: 'f4a460',
        seagreen: '2e8b57',
        seashell: 'fff5ee',
        sienna: 'a0522d',
        silver: 'c0c0c0',
        skyblue: '87ceeb',
        slateblue: '6a5acd',
        slategray: '708090',
        snow: 'fffafa',
        springgreen: '00ff7f',
        steelblue: '4682b4',
        tan: 'd2b48c',
        teal: '008080',
        thistle: 'd8bfd8',
        tomato: 'ff6347',
        turquoise: '40e0d0',
        violet: 'ee82ee',
        violetred: 'd02090',
        wheat: 'f5deb3',
        white: 'ffffff',
        whitesmoke: 'f5f5f5',
        yellow: 'ffff00',
        yellowgreen: '9acd32'
    };
    color_string = simple_colors[color_string] || color_string;
    // emd of simple type-in colors

    // array of color definition objects
    var color_defs = [
        {
            re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
            example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3]),
                    parseFloat(bits[4])
                ];
            }
        },
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
            process: function (bits){
                return [
                    parseInt(bits[1]),
                    parseInt(bits[2]),
                    parseInt(bits[3])
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            example: ['#00ff00', '336699'],
            process: function (bits){
                return [
                    parseInt(bits[1], 16),
                    parseInt(bits[2], 16),
                    parseInt(bits[3], 16)
                ];
            }
        },
        {
            re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            example: ['#fb0', 'f0f'],
            process: function (bits){
                return [
                    parseInt(bits[1] + bits[1], 16),
                    parseInt(bits[2] + bits[2], 16),
                    parseInt(bits[3] + bits[3], 16)
                ];
            }
        }
    ];

    // search through the definitions to find a match
    for (var i = 0; i < color_defs.length; i++) {
        var re = color_defs[i].re;
        var processor = color_defs[i].process;
        var bits = re.exec(color_string);
        if (bits) {
            var channels = processor(bits);
            this.r = channels[0];
            this.g = channels[1];
            this.b = channels[2];
            if (channels.length > 3) {
                this.alpha = channels[3];
            }
            this.ok = true;
        }

    }

    // validate/cleanup values
    this.r = (this.r < 0 || isNaN(this.r)) ? 0 : ((this.r > 255) ? 255 : this.r);
    this.g = (this.g < 0 || isNaN(this.g)) ? 0 : ((this.g > 255) ? 255 : this.g);
    this.b = (this.b < 0 || isNaN(this.b)) ? 0 : ((this.b > 255) ? 255 : this.b);
    this.alpha = (this.alpha < 0) ? 0 : ((this.alpha > 1.0 || isNaN(this.alpha)) ? 1.0 : this.alpha);

    // some getters
    this.toRGB = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    }
    this.toRGBA = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
    }
    this.toHex = function () {
        var r = this.r.toString(16);
        var g = this.g.toString(16);
        var b = this.b.toString(16);
        if (r.length == 1) r = '0' + r;
        if (g.length == 1) g = '0' + g;
        if (b.length == 1) b = '0' + b;
        return '#' + r + g + b;
    }

    // help
    this.getHelpXML = function () {

        var examples = new Array();
        // add regexps
        for (var i = 0; i < color_defs.length; i++) {
            var example = color_defs[i].example;
            for (var j = 0; j < example.length; j++) {
                examples[examples.length] = example[j];
            }
        }
        // add type-in colors
        for (var sc in simple_colors) {
            examples[examples.length] = sc;
        }

        var xml = document.createElement('ul');
        xml.setAttribute('id', 'rgbcolor-examples');
        for (var i = 0; i < examples.length; i++) {
            try {
                var list_item = document.createElement('li');
                var list_color = new RGBColor(examples[i]);
                var example_div = document.createElement('div');
                example_div.style.cssText =
                        'margin: 3px; '
                        + 'border: 1px solid black; '
                        + 'background:' + list_color.toHex() + '; '
                        + 'color:' + list_color.toHex()
                ;
                example_div.appendChild(document.createTextNode('test'));
                var list_item_value = document.createTextNode(
                    ' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex()
                );
                list_item.appendChild(example_div);
                list_item.appendChild(list_item_value);
                xml.appendChild(list_item);

            } catch(e){}
        }
        return xml;

    }

}


/***/ }),

/***/ "./node_modules/stackblur-canvas/src/stackblur.js":
/*!********************************************************!*\
  !*** ./node_modules/stackblur-canvas/src/stackblur.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
    StackBlur - a fast almost Gaussian Blur For Canvas

    Version:     0.5
    Author:        Mario Klingemann
    Contact:     mario@quasimondo.com
    Website:    http://www.quasimondo.com/StackBlurForCanvas
    Twitter:    @quasimondo

    In case you find this class useful - especially in commercial projects -
    I am not totally unhappy for a small donation to my PayPal account
    mario@quasimondo.de

    Or support me on flattr:
    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

    Copyright (c) 2010 Mario Klingemann

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    */


var mul_table = [
    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];


var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];


function processImage(img, canvas, radius, blurAlphaChannel)
{
    if (typeof(img) == 'string') {
        var img = document.getElementById(img);
    }
    else if (typeof HTMLImageElement !== 'undefined' && !img instanceof HTMLImageElement) {
        return;
    }
    var w = img.naturalWidth;
    var h = img.naturalHeight;

    if (typeof(canvas) == 'string') {
        var canvas = document.getElementById(canvas);
    }
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement) {
        return;
    }

    canvas.style.width  = w + 'px';
    canvas.style.height = h + 'px';
    canvas.width = w;
    canvas.height = h;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, w, h);
    context.drawImage(img, 0, 0);

    if (isNaN(radius) || radius < 1) return;

    if (blurAlphaChannel)
        processCanvasRGBA(canvas, 0, 0, w, h, radius);
    else
        processCanvasRGB(canvas, 0, 0, w, h, radius);
}

function getImageDataFromCanvas(canvas, top_x, top_y, width, height)
{
    if (typeof(canvas) == 'string')
        var canvas  = document.getElementById(canvas);
    else if (typeof HTMLCanvasElement !== 'undefined' && !canvas instanceof HTMLCanvasElement)
        return;

    var context = canvas.getContext('2d');
    var imageData;

    try {
        try {
            imageData = context.getImageData(top_x, top_y, width, height);
        } catch(e) {
            throw new Error("unable to access local image data: " + e);
            return;
        }
    } catch(e) {
        throw new Error("unable to access image data: " + e);
    }

    return imageData;
}

function processCanvasRGBA(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);

    imageData = processImageDataRGBA(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGBA(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
        r_out_sum, g_out_sum, b_out_sum, a_out_sum,
        r_in_sum, g_in_sum, b_in_sum, a_in_sum,
        pr, pg, pb, pa, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[p+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa != 0)
            {
                pa = 255 / pa;
                pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);
            a_in_sum += (stackIn.a = pixels[p+3]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;
            a_sum += (stack.a = (pa = pixels[yi+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa > 0)
            {
                pa = 255 / pa;
                pixels[p]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[p+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[p] = pixels[p+1] = pixels[p+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));
            a_sum += (a_in_sum += (stackIn.a = pixels[p+3]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);
            a_out_sum += (pa = stackOut.a);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += width;
        }
    }
    return imageData;
}

function processCanvasRGB(canvas, top_x, top_y, width, height, radius)
{
    if (isNaN(radius) || radius < 1) return;
    radius |= 0;

    var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
    imageData = processImageDataRGB(imageData, top_x, top_y, width, height, radius);

    canvas.getContext('2d').putImageData(imageData, top_x, top_y);
}

function processImageDataRGB(imageData, top_x, top_y, width, height, radius)
{
    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
        r_out_sum, g_out_sum, b_out_sum,
        r_in_sum, g_in_sum, b_in_sum,
        pr, pg, pb, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for (i = 1; i < div; i++)
    {
        stack = stack.next = new BlurStack();
        if (i == radiusPlus1) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for (y = 0; y < height; y++)
    {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        for (i = 1; i < radiusPlus1; i++)
        {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = (pr = pixels[p])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[p+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[p+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++)
        {
            pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
            pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p =  (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;

            r_in_sum += (stackIn.r = pixels[p]);
            g_in_sum += (stackIn.g = pixels[p+1]);
            b_in_sum += (stackIn.b = pixels[p+2]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for (x = 0; x < width; x++)
    {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for (i = 0; i < radiusPlus1; i++)
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        yp = width;

        for (i = 1; i <= radius; i++)
        {
            yi = (yp + x) << 2;

            r_sum += (stack.r = (pr = pixels[yi])) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = (pg = pixels[yi+1])) * rbs;
            b_sum += (stack.b = (pb = pixels[yi+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;

            if(i < heightMinus1)
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++)
        {
            p = yi << 2;
            pixels[p]   = (r_sum * mul_sum) >> shg_sum;
            pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = (x + (((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width)) << 2;

            r_sum += (r_in_sum += (stackIn.r = pixels[p]));
            g_sum += (g_in_sum += (stackIn.g = pixels[p+1]));
            b_sum += (b_in_sum += (stackIn.b = pixels[p+2]));

            stackIn = stackIn.next;

            r_out_sum += (pr = stackOut.r);
            g_out_sum += (pg = stackOut.g);
            b_out_sum += (pb = stackOut.b);

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += width;
        }
    }

    return imageData;
}

function BlurStack()
{
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}

module.exports = {
    image: processImage,
    canvasRGBA: processCanvasRGBA,
    canvasRGB: processCanvasRGB,
    imageDataRGBA: processImageDataRGBA,
    imageDataRGB: processImageDataRGB
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/common/bigint-helper.js":
/*!*************************************!*\
  !*** ./src/common/bigint-helper.js ***!
  \*************************************/
/*! exports provided: bigIntToSciNotation, getRandomBigInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bigIntToSciNotation", function() { return bigIntToSciNotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBigInt", function() { return getRandomBigInt; });
const bigInt = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js");

function bigIntToSciNotation(n, fractionDigits=2) { 
	/* Scientific notation for BigInt numbers (needs some optimization) */
	const nStr = n.toString(10);
	const nLen = nStr.length;
	const fraction = nLen-1 < 16 ? nLen-1 : 16;
	const [wholes, parts] = [nStr.substr(0,1), nLen > 1 ? nStr.substr(1,fraction) : 0];
	let nFloat = parseFloat(wholes+'.'+parts);
	nFloat = nFloat.toPrecision( (fractionDigits+1 > parts.length ? 2 : fractionDigits+1) );
	return tex`\approx ${nFloat} \times 10^{${nLen-1}}`;
}

function getRandomBigInt(max) {
	return bigInt.randBetween(0,max);
}



/***/ }),

/***/ "./src/common/helper.js":
/*!******************************!*\
  !*** ./src/common/helper.js ***!
  \******************************/
/*! exports provided: showAll, show, hideAll, hide, toggleAll, toggle, isVisible, pad, saveSvg, saveImg, save, flatten, include, traverse, escapeRegExp, map, arrayMoveItem, getTimestamp, scaleSVG, permuteArray, truncateStr, reverseMapping, VARCODE, VARCODE_REV, processLabel, createValidation, collapseLiterals, checkLiteralMatching, getBracketUnits, checkBracketMatching, equalArrays, lexX, compRegExp, getSvgSize, breakStr, svgLinebreak */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAll", function() { return showAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAll", function() { return toggleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pad", function() { return pad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveSvg", function() { return saveSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImg", function() { return saveImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "include", function() { return include; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverse", function() { return traverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMoveItem", function() { return arrayMoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimestamp", function() { return getTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSVG", function() { return scaleSVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permuteArray", function() { return permuteArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateStr", function() { return truncateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseMapping", function() { return reverseMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARCODE", function() { return VARCODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VARCODE_REV", function() { return VARCODE_REV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLabel", function() { return processLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValidation", function() { return createValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collapseLiterals", function() { return collapseLiterals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLiteralMatching", function() { return checkLiteralMatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBracketUnits", function() { return getBracketUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkBracketMatching", function() { return checkBracketMatching; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalArrays", function() { return equalArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexX", function() { return lexX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compRegExp", function() { return compRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSvgSize", function() { return getSvgSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakStr", function() { return breakStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgLinebreak", function() { return svgLinebreak; });
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! canvg */ "./node_modules/canvg/dist/browser/canvg.min.js");
/* harmony import */ var canvg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvg__WEBPACK_IMPORTED_MODULE_0__);


// ------------------------
// jQuery replacements:

function showAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        show(e);
    });
}
function show(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.remove('d-none');
    // elem.classList.add('is-visible');
};

function hideAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        hide(e);
    });
}
function hide(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.add('d-none');
	// elem.classList.remove('is-visible');
};

function toggleAll(elems) {
    if(typeof(elems) === 'string') elems = document.querySelectorAll(elems);
    elems.forEach( (e,i) => {
        toggle(e);
    });
}
function toggle(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    elem.classList.toggle('d-none');
	// elem.classList.toggle('is-visible');
};

function isVisible(elem) {
    if(typeof(elem) === 'string') elem = document.querySelector(elem);
    return ( !elem.classList.contains('d-none') );
}
// ------------------------

function pad(num, size) {
    /* pads 0s before number string
       Source: https://stackoverflow.com/a/2998822
       Credits to: InfinitiesLoop */

    var s = num+""; // converts number to string if not already a string
    while (s.length < size) s = "0" + s;
    return s;
}

function saveSvg(svgEl, name) {
    /* Source: https://stackoverflow.com/a/46403589
    Credits to: defghi1977, DaveTheScientist, senz */
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl.outerHTML;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
function saveImg(svg, name, scale=1) {    
    /* Using canvg lib. https://github.com/canvg/canvg and parts of the approach for saveSvg.
    Thanks to jbeard4 in: https://stackoverflow.com/a/3976034/1204047 for the suggestion */

    const w = svg.getBBox().width;
    const h = svg.getBBox().height;

    const canvas = document.createElement("canvas");
    canvas.setAttribute('id','drawingArea');
    document.body.appendChild(canvas);
    canvas.width = w * scale;
    canvas.height = h * scale;

    canvg__WEBPACK_IMPORTED_MODULE_0__(document.getElementById('drawingArea'), svg.outerHTML, { ignoreDimensions:true, ignoreMouse: true, ignoreAnimation: true,
    scaleWidth: w * scale,
    scaleHeight: h * scale });

    // console.log( document.getElementById('drawingArea') );

    const imgUrl = canvas.toDataURL("image/png");

    var downloadLink = document.createElement("a");
    downloadLink.href = imgUrl;
    downloadLink.download = name;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    document.body.removeChild(canvas);
}

function save(format, svg, name, scale) {
    // exports graphs into svg
    
    name = name || svg.parentNode.id;
    const timestamp = getTimestamp();

	try {
    switch(format) {
        case 'svg':
            saveSvg(svg, timestamp+'_'+name+'.svg', scale);
            break;
        case 'img':
            saveImg(svg, timestamp+'_'+name+'.png', scale);
            break;
    }
	} catch(e) {
		console.log(e);
	}
}

function flatten(arr) {
    /* Source: https://stackoverflow.com/a/15030117 
    Credits to: Noah Freitas */
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

function include(arr,obj) {
    /*  Source: https://stackoverflow.com/a/143863
    Credits to: Vinko Vrsalovic */
    return (arr.indexOf(obj) != -1);
}

function traverse(o,func) {
    /*  Source: https://stackoverflow.com/questions/722668/traverse-all-the-nodes-of-a-json-object-tree-with-javascript 
    Credits to: TheHippo */
    for (var i in o) {
        func.apply(null,[i,o[i]]);  // null or this?
        if (o[i] !== null && typeof(o[i])=="object") {
            //going one step down in the object tree!!
            traverse(o[i],func);
        }
    }
}
String.prototype.replaceAll = function(find, replace, escapeMeta) {
    /*  Modified from: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript 
    Credits to: Sean Bright */
    if(escapeMeta) find = escapeRegExp(find);
    return this.replace(new RegExp(find, 'g'), replace);
};
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
String.prototype.addBefore=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index);
}

function map(value, start1, stop1, start2, stop2) {
    // Processing-like map function
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

function arrayMoveItem(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
}

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function getTimestamp() {
    const date = new Date();

    return (''
    + date.getUTCFullYear()).substr(2) 
    + (pad((date.getUTCMonth()+1),2)) 
    + (pad(date.getUTCDate(),2)) + '-'
    + (pad((date.getHours()),2))
    + (pad((date.getMinutes()),2))
    + (pad((date.getSeconds()),2));
}

function scaleSVG(svg, container, ratio) {
    const prefixes = ['-ms-transform','-webkit-transform','-moz-transform','-o-transform','transform'];
    prefixes.forEach(prefix => {
        svg.style[prefix] = `scale(${ratio}) translate(0,0)`;
    });
    // container.style.width = parseInt(svg.getBBox().width * ratio) + 'px';
    // container.style.height = parseInt(svg.getBBox().height * ratio) + 'px';
    container.style.width = svg.getBBox().width * ratio + 'px';
    container.style.height = svg.getBBox().height * ratio + 'px';
}

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/js-toolbox
*/

const permuteArray = inputArray => inputArray.reduce(function permute(res, item, key, arr) {
  /* Permutation algorithm for arrays of arbitrary length
     (credits & thanks to user monkey: https://stackoverflow.com/a/22063440) */
    return res.concat(arr.length > 1 && arr.slice(0, key)
      .concat(arr.slice(key + 1))
      .reduce(permute, [])
      .map(function(perm) { return [item].concat(perm); }) || [[item]]);
}, []);

const truncateStr = (str,limit,appendix='') => str.length > limit ? (str.substr(0,limit) + appendix) : str;

const reverseMapping = (o,bijective=false) => Object.keys(o).reduce((r, k) => Object.assign(r, { [o[k]]: (bijective ? k : (r[o[k]] || []).concat(k)) }), {}); // modified from answer by Nina Scholz: https://stackoverflow.com/a/45728850

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/formform-toolbox 
*/

const VARCODE = ({'a':'ᴬ', 'b':'ᴮ', 'c':'ᵓ', 'd':'ᴰ', 'e':'ᴱ', 'f':'ᵎ', 'g':'ᴳ', 'h':'ᴴ', 'i':'ᴵ', 'j':'ᴶ', 'k':'ᴷ', 'l':'ᴸ', 'm':'ᴹ', 'n':'ᴺ', 'o':'ᴼ', 'p':'ᴾ', 'q':'ᴽ', 'r':'ᴿ', 's':'ᵕ', 't':'ᵀ', 'u':'ᵁ', 'v':'ᵛ', 'w':'ᵂ', 'x':'ᵡ', 'y':'ᵞ', 'z':'ᵜ', 'alt':'ᵽ', '2r':'ᵳ', '2r+1':'ᵲ'});

const VARCODE_REV = reverseMapping(VARCODE,true);

/*  --------------------------------------------------------
    Additions 10/2020
*/

const processLabel = (label, mode='html') => {
    /* Label processing to handle sub/superscript */

    let tagRev = []; // tagRev resets y-position of label after subscripts (needed for svg)
    if (mode === 'svg') tagRev = ['<tspan y="0">','</tspan>'];
    else tagRev = ['',''];

    if (label.length > 1) {
        const labelParts = label.split('_');

        let tagSub = [];
        if (mode === 'svg') tagSub = [`<tspan style="font-size: .8em;" dx="0" dy="6">`,'</tspan>'];
        else tagSub = ['<sub>','</sub>'];

        return (labelParts.length > 1) ? `${tagRev[0] + labelParts[0] + tagRev[1] + tagSub[0] + labelParts[1] + tagSub[1]}` : tagRev[0]+label+tagRev[1];
    }
    else return tagRev[0]+label+tagRev[1];
};

const createValidation = (fn, errorMsg) => (...args) => {
    const result = fn(...args);
    return {
        cata: branch => result ? branch.success(result) : branch.error(errorMsg)
    };
};

const collapseLiterals = (str, sep='"', repl='‽') => {
    if (!checkLiteralMatching(str, sep)) return null;
    const strSep = str.split(sep);
    return strSep.filter((substr,i,arr) => i % 2 === 0 || i === arr.length-1).join(repl);
}

const checkLiteralMatching = (str, sep='"') => {
    const strSep = str.split(sep);
    return strSep.length % 2 === 1;
};

const getBracketUnits = (formula, br={open:'{', close:'}'}, matches=[]) => {
    const reEntries = formula.match(new RegExp(`\\${br.open}[^${br.open}${br.close}]*?\\${br.close}`, 'g'));
    if (!reEntries) return matches;

    const reducedFormula = reEntries.reduce((str, pattern) => str.replace(pattern, '•'),formula);

    return getBracketUnits(reducedFormula, br, [...matches, ...reEntries]);
}

/*  --------------------------------------------------------
    Additions 10/2020 from:
    https://observablehq.com/@formsandlines/js-toolbox
*/

const checkBracketMatching = (str, openBr='(', closeBr=')') => {
  if (str.length === 0) return true; // empty strings can't have brackets, so that's fine
  return str.split('').reduce((acc,curr,idx,arr) => {
    if (curr === openBr) acc++;
    else if (curr === closeBr) {
      if (acc === null) return NaN;
      acc--;
      }
    if (idx === arr.length-1 && acc === null) return 0;
    return acc;
  },null) === 0 ? true : false;
};

const equalArrays = (arrA, arrB) => {
    if (arrA === undefined || arrB === undefined) return false;
    return arrA.length === arrB.length && arrA.every(a => arrB.some(b => a === b));
}

/*  --------------------------------------------------------
    Additions 12/2020 from:
    https://observablehq.com/@formsandlines/768dbe19ed47e281 (State machines)
*/

function lexX (input, ruleMap) {
    input = input.split(' ').join('');
    const compRule = compRegExp(ruleMap.map(r => r[1]));
    
    return [...input.matchAll(compRule)].map((match,i) => {
      const idx = match.filter((_,i) => i > 0).findIndex(m => m != undefined);
      return {token: ruleMap[idx][0], value: (ruleMap[idx][2] ? ruleMap[idx][2](match[0]) : undefined ) };
    });
}

const compRegExp = patterns => new RegExp(patterns.reduce((comp,r,i) => comp+(i > 0 ? '|' : '')+`(${r})`,''), 'g');

/*  --------------------------------------------------------
    Additions 03/2021
*/

// export function fitSvg(selector, padding) {
//     // calculate real dimensions of a chart (assumes chart is a g-element wrapped inside an svg)
//     d3.select(chart.node().parentElement)
//         .attr('width', chart.node().getBBox().width + padding.left + padding.right)
//         .attr('height', chart.node().getBBox().height + padding.top + padding.bottom);
//   }

function getSvgSize(svgText) {
	const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.innerHTML = svgText;
	svg.setAttribute('x','-9999');
	svg.setAttribute('y','-9999');

	const container = document.querySelector('body').appendChild(svg);

	const size = svg.getBBox();
	container.remove();
	return { w: size.width, h: size.height };
}

/* Breaks string up in parts of length n (x <= n for the last part) 
   from: https://observablehq.com/@formsandlines/js-toolbox
*/
const breakStr = (str,n=1) => [...new Array(Math.ceil(str.length/n))].map((d,i) => str.substr(n*i,n));

const svgLinebreak = (str, lineShift) => `<tspan x="0" dy="${lineShift}">${str}</tspan>`;

/***/ }),

/***/ "./src/lib/core/fcalc.js":
/*!*******************************!*\
  !*** ./src/lib/core/fcalc.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FCalc; });
class FCalc {
    
    // ===================================================================
    //     formform core module 'calc'
    //     -- since 2018, by Peter Hofmann (formsandlines.eu)
    // ===================================================================

    constructor() {
    };

    static rel_logic(fx, fy) { // verified
        /* FORM arithmetic for commutative relation: x y */
        if ( fx > 3 || fx < 0 || fy > 3 || fy < 0 ) return -98;
        else if ( fx === 0 || fy === 1 ) { 
            return fy; // C3 /Theorem 2
        } 
        else if ( fy === 0 || fx === 1 ) { 
            return fx; // C3 /Theorem 2
        }
        else if ( fx === fy ) { 
            return fx; // C5 /Theorem 5
        }
        else if ( (fx === 2 && fy === 3) || (fx === 3 && fy === 2) ) { 
            return 1; // C2 /Theorem 13 + C3 /Theorem 2
        }
        return -99; // error code
    };
    static rel(...fVals) { // verified
        /* Shortcut for relation with n variables: x_1 ... x_n */
        if (fVals.length > 1) {
            let val = 0;
            for (let i in fVals) {
                val = this.rel_logic( val,fVals[i] );
            }
            return val;
        }
        return -97; // error code
    };

    static inv_logic(fx) { // verified
        /* FORM arithmetic for inversion/negation: (x) */
        switch (fx) {
        case 0:
            return 1;
        case 1:
            return 0;
        case 2:
            return 3;
        case 3:
            return 2;
        }
        return -99; // error code
    };
    static inv(fx, n) { // verified
        /* Shortcut for n inversions/negations: (x) */
        if (n > 0) {
            let val = fx;
            for (let i=0; i<n; i++) {
                val = this.inv_logic(val);
            }
            return val;
        }
        else return this.inv_logic(fx);
        return -97; // error code
    };


    // ---------------------------
    //  RE-ENTRY FORM CALCULATION
    // ---------------------------

    static uForm2(fA, fB, altInterpr=false) { // calculation verified (both interpr.)
        return this.reEntry(undefined, false, altInterpr, fA, fB);
    };
    static iForm2(fA, fB, altInterpr=false) { // calculation verified (both interpr.)
        return this.reEntry(undefined, true, altInterpr, fA, fB);
    };
    static uForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(true, lastOpen, altInterpr, fA, fB, fC);
    };
    static iForm3(lastOpen, fA, fB, fC, altInterpr=false) { // calculation verified closed & open (both interpr.)
        return this.reEntry(false, lastOpen, altInterpr, fA, fB, fC);
    };
    static uForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(undefined, false, altInterpr, fA, fB, fC, fD);
    };
    static iForm4(fA, fB, fC, fD, altInterpr=false) {
        return this.reEntry(undefined, true, altInterpr, fA, fB, fC, fD);
    };
    static uForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
        return this.reEntry(true, lastOpen, altInterpr, fA, fB, fC, fD, fE);
    };
    static iForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
        return this.reEntry(false, lastOpen, altInterpr, fA, fB, fC, fD, fE);
    };

    // static reEntry(... vars) {
    //     return this.reEntry(false, false, vars);
    // }
    // static reEntry(reEven, ... vars) {
    //     return this.reEntry(reEven, false, vars);
    // }

    static reEntry(reEven, lastOpen, altInterpr, ...fVals) {
        /* FORM arithmetic for different self-equivalent re-entry FORMs
         [Arguments] reEven: even re-entry-number? | lastOpen: last variable not crossed? | fVals: variables (0/1/2/3)

         Note: calculation manually verified for… 
         - (uFORM a1, res2) ƒ=((ƒx)y)
         - (iFORM a2, res2) ƒ(ƒ)=(a1x)y
         - (iFORM b1, res3) [2|r|+1] ƒ(ƒ)=(((ƒx)y)z) ƒ=((((((ƒx)y)z)x)y)z)
         - (iFORM b2, res3) [2|r|+1] ƒ(ƒ)=((b1x)y)z
         - (uFORM c1, res3) [2|r|] ƒ=((((((ƒx)y)z)x)y)z)
         - (uFORM c2, res3) [2|r|] ƒ(ƒ)=((c1x)y)z
         Should work with resolutions of 4, 5, … but needs verification.

         My basic observations about self-equivalent re-entry FORMs:
         - Every re-entry FORM needs to have an even number of crosses to be self-equivalent (uFORM): ƒ = ((ƒ1)2) .
           So with uneven resolutions, we always need to have an even re-entry number: ƒ = ((((((ƒ1)2)3)1)2)3) .
         - To be able to also have uneven re-entry numbers, either the resolution needs to be even
           or we have to embed the re-entry FORM into a normal FORM that is one re-entry of that FORM:
           ƒ(ƒ) = (((ƒ1)2)3) <-> ((( ƒ = ((((((ƒ1)2)3)1)2)3) 1)2)3) .
           These compositional re-entry FORMs are iFORMs, since they resolve to: ( ƒ = ((ƒ)) ) .
         - If the outmost cross of the FORM should be left out (open FORMs), this can only be done if we embed
           a corresponding closed FORM of itself that either is or embeds its re-entry FORM (cases described above).
           I believe the outmost (open) FORM is not being counted as a re-entry at all, since it's missing a cross.

         This algorithm is based on the following rules/patterns/observations derived from "uFORM iFORM":
         [1] If 1 is somewhere in the FORM, it will dominate all values in spaces deeper than m,
             so the re-entry is obsolete and we can start calculate from this space. 
         [2] If there are 3/2 or 2/3 pairs in the FORM, the first term can be turned into 1, since
             through C2 the second term can always be generated into its space, where 23 = 1.
             Then we can proceed as in (1).
         [3] If all variables are 0, we will have either a uFORM or iFORM, hence the value of the
             FORM will be either 2 or 3, depending on the following cases:
             - 2: closed,      resolution even, re-entry-number even/odd (a1)
             - 2: closed/open, resolution odd,  re-entry-number even     (c1, c2)
             - 3: open,        resolution even, re-entry-number even/odd (a2)
             - 3: closed/open, resolution odd,  re-entry-number odd      (b1, b2)
         Since [1][2][3] eliminate all other cases, all variables are now either 2 or 3 (and maybe 0s),
         so using C2 as described above, only the last occasion of these variables need to be considered:
         [4] If we use uFORM iFORM interpretation 2 (p.167) recursive identity ( mn <-> ((ƒ))=ƒ ), C2 and C1
             ƒ can be separated from 2/3 if there is an even number of crosses (or none) after the variable.
             Then, depending on the FORM, we have either:
             iFORM: (ƒ=((ƒ))) 2/3 <-> (2) 2/3  or
             uFORM:  ƒ=((ƒ)) 2/3  <->  2 2/3
         [5] If [4] does not apply or we decide for uFORM iFORM interpretation 1 (p.167): recursion instruction 
             ( mn -> ƒ=((ƒ)) ), we will have either variables of 2 or 3 which we cannot relate to ƒ, since
             they need not be the same undetermined value. Using case distinction, we interpret the
             last occasion of 2 or 3 as 0 and as 1, calculate everything with ƒ=2 and relate the results 
             using contravalence: ((x)y)((y)x) which yields the final result.
        */
        // check if arguments are actually defined
        if (reEven === undefined) {
            reEven = false;
        }
        if (lastOpen === undefined) {
            lastOpen = false;
        }

        const resEven = (fVals.length%2 == 0); // even resolution?
        let zeros = 0; // zero counter
        let firstUndef = -1; // catches first mn/(mn)

        // [3] determine if uFORM or iFORM
        let uFORM = false;
        let iFORM = false;
        if (resEven) {
            if (lastOpen) iFORM = true;
            else uFORM = true;
        }
        else {
            if (reEven) uFORM = true;
            else iFORM = true;
        }
      
        // check if there is 1/m somewhere in x_1 … x_n
        let calcfrom = -1;
        for(let i=0; i<fVals.length; i++) {
            const fx = fVals[i]; 

            if (fx == 1) {
                calcfrom = i; // [1] if m is somewhere, set calculation start from there
                break;
            }
            else if (fx == 0) zeros++; // [3] keep track of how many zeros there are
            else if (fx == 2 || fx == 3) { // [2]
                if(firstUndef == -1) firstUndef = i; // if there is a first 2/u or 3/i, remember
                else if(fx != fVals[firstUndef]) {
                    calcfrom = firstUndef; // if 3/2 or 2/3 pairs, set calculation form first undef. value
                    break;
                }
            }
        }
      
        if (zeros == fVals.length) {
            // [3] in case all variables are n, just return the undefined/imaginary value of the FORM
            if (iFORM) return 3;
            else return 2;
        }
        if (calcfrom >= 0) {
            // [1|2] if there is a 1/m somewhere in the form, we can easily calculate the rest from this point
            let val = 1;
            for(let i=calcfrom; i<fVals.length; i++) {      
                if (lastOpen && i == fVals.length-1) {
                    val = this.rel(val,fVals[i]); // if no cross on last var, don't invert
                }
                else val = this.inv( this.rel(val,fVals[i]) );
            }
            return val;
        }
      
        // what remains, will only be either
        // - (1) all variables are n/0 or mn/2   or
        // - (2) all variables are n/0 or (mn)/3
        // So we calculate from the last occasion of 2 or 3, because with C2 (degenerate) all else can be ignored

        // for even closed re-entry-FORMs with uneven resolution (uFORM c1), we need to do the calculation twice
        const repeat = (reEven && !resEven && !lastOpen)? 2:1;
      
        for(let i=(fVals.length*repeat)-1; i>=0; i--) {
            const index = i%fVals.length; // repeated variable index

            if (fVals[index] == 2 || fVals[index] == 3) {
                const iRev = (fVals.length*repeat)-1 - i; // reverse index to easier check for interpretation 2 (see next)

                if (altInterpr && ((lastOpen && iRev%2==0) || (!lastOpen && iRev%2==1))) {
                    // uFORM iFORM interpretation 2: recursive identity ( ƒ=((ƒ)) <-> mn )
                    // ƒ=((ƒ)) can be separated if there is an even number of crosses (or none) after the variable; this is the case if either:
                    // - (1) the FORM is open and the backwards variable index is even      or
                    // - (2) the FORM is closed and the backwards variable index is odd

                    // to determine if the number of crosses between ƒ and our var is even, we distinguish two cases:
                    if (iFORM) return this.rel(3,fVals[index]); // iFORM: (ƒ=((ƒ)))x <-> (mn) x
                    else return this.rel(2,fVals[index]);       // uFORM:  ƒ=((ƒ))x  <->  mn x
                }
                else {
                    // [5] if everything else fails, use case distinction: uFORM iFORM (p.94); also according to:
                    // uFORM iFORM (p.167) interpretation 1: recursion instruction ( ƒ=((ƒ)) and mn need to be differentiated)

                    let case0 = 2; // re-entry ƒ=mn, because other mn=0
                    if (lastOpen && !resEven && !reEven) case0 = this.inv(case0); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                    for(let j=0; j<(fVals.length*repeat); j++) {
                        let fx = 0; // all other values will be (degenerated to) zero
                        if (j == i) {
                            if(fVals[index] == 2) fx = 0; // last occasion of mn/2 will be interpreted as 0
                            else fx = this.inv(0); // last occasion of (mn)/3 will be interpreted as (0)
                        }
                        if (lastOpen && j == fVals.length-1) case0 = this.rel(case0,fx); // if no cross on last var, don't invert
                        else case0 = this.inv( this.rel(case0,fx) );
                    }
                    let case1 = 2; // re-entry ƒ=mn, because other mn=1
                    if (lastOpen && !resEven && !reEven) case1 = this.inv(case1); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                    for(let j=0; j<(fVals.length*repeat); j++) {
                        let fx = 0; // all other values will be (degenerated to) zero
                        if (j == i) {
                            if(fVals[index] == 2) fx = 1; // last occasion of mn/2 will be interpreted as 1
                            else fx = this.inv(1); // last occasion of (mn)/3 will be interpreted as (1)
                        }
                        if (lastOpen && j == fVals.length-1) case1 = this.rel(case1,fx); // if no cross on last var, don't invert
                        else case1 = this.inv( this.rel(case1,fx) );
                    }

                    return this.cont( case0,case1 ); // contravalence of both cases
                }

            }
        }
      return -99; // error code
    }; // end reEntry()


    // ---------------------------
    //  COMPLEX FORM CALCULATIONS
    // ---------------------------

    // - 2 VARIABLES

    static implL(fx, fy) { // verified
        /* FORM arithmetic for "implication": (x)y */
        return this.rel( this.inv(fx),fy );
    };
    static implR(fx, fy) {
        /* FORM arithmetic for "implication": x(y) */
        return this.rel( fx,this.inv(fy) );
    };

    static pre(fx, fy) { // verified
        /* FORM arithmetic for "presection"/"decision": ((x)y) */
        return this.inv( this.implL(fx,fy) );
    };
    static post(fx, fy) { // verified
        /* FORM arithmetic for "postsection"/"decision": (x(y)) */
        return this.inv( this.implR(fx,fy) );
    };

    static cont(fx, fy) { // verified
        /* FORM arithmetic for "contravalence"/"either-or": ((x)y) (x(y)) */
        return this.rel( this.pre(fx,fy), this.post(fx,fy) );
    };
    static equiv(fx, fy) {
        /* FORM arithmetic for "equivalence"/?: ( ((x)y) (x(y)) ) */
        return this.inv( this.cont(fx,fy) );
    };

}

/***/ }),

/***/ "./src/lib/core/fdna.js":
/*!******************************!*\
  !*** ./src/lib/core/fdna.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FDna; });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _common_bigint_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/bigint-helper */ "./src/common/bigint-helper.js");




const bigInt = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js"); // obsolete with better BigInt support in browsers

class FDna extends _fform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    
    // ===================================================================
    //     formform core module 'dna'
    //     -- since 2019/20, by Peter Hofmann (formsandlines.eu)
    // ===================================================================
   
    constructor() {
    };

    // ----------------------------------------------------
    // Extensions of FFORM
    // ----------------------------------------------------

    static calcAll(input) {
        /* extension to represent formDNA as FORM calculation */

        if (input.includes('::') && this.isValidDNA(input)) {

            const dna = input.split(':').pop();
            const results = dna.split('').reverse();

            const vnum = this.totalVarsFromDNA(dna);
            const vars = Array.from({length: vnum}, (_, i) => `"x_${i}"` );
            const vals = {};

            if (vnum < 1) {
                vals['Result'] = parseInt(results[0]);
                return vals;
            }

            const interKey = ''+vars.join()+';';

            for (let i=0; i < results.length; i++) {
                const interprVals = Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["pad"])(i.toString(4), vnum);
                const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

                vals[interKey+interprVals] = results[i];
            }

            return vals;
        }

        return super.calcAll(input);
    }

    static getVariables(input) {
        /* extension to get variables from formDNA */

        if (typeof(input) === 'string' && input.includes('::')) {
            const { dna, formula, varList } = this.getDNAparts(input);

            if (varList !== undefined) return varList;
            else if (formula !== undefined) return super.getVariables(formula);

            const vnum = this.totalVarsFromDNA(dna);
            return Array.from({length: vnum}, (_, i) => `x_${i}` );
        }

        return super.getVariables(input);
    }

    // ----------------------------------------------------
    // Conversions
    // ----------------------------------------------------

    static encode (_form, varorder=undefined) {
        /* Encodes a FORM as a dna string */

        const form = varorder ? this.reOrderVars(_form, varorder) : _form;

        return Object.values(this.calcAll(form)).reverse().join('');
     };

// EXPERIMENTAL >

     static decode (dna, varList=undefined) {
        /* Decodes dna into (one of its) simplest corresponding FORM model(s) as a json-representation */


        // -> remove 0-terms and groupings?

        if (varList && varList.length !== this.totalVarsFromDNA(dna)) throw new Error('Number of variables in given variable list doesn\'t match formDNA code length');
        if (!varList) varList = this.generateVarNames(this.totalVarsFromDNA(dna)); //.map(str => `"${str}"`);
        
        const univ = this.universe_n(varList);
        const vals = dna.split('').reverse();

        return univ.map((term, i) => {
            return `((${vals[i]})(${term}))`;
        }).join('');
     }

// < END

    static intToDNA (int, vnum) {
        /* Takes an integer (usually BigInt) and a desired variable number and returns the corresponding formDNA 

        Note: variable number is needed because the intended number of leading zeros cannot be infered from the integer alone. If no variable number is given, the smallest variable number possible for the quaternion is assumed to generate valid formDNA. */

        const quat = int.toString(4);
        if (quat.substr(0,1) === '-') throw new Error('Negative integers cannot be converted to formDNA.');
        if (quat.includes('.')) throw new Error('Fractional numbers cannot be converted to formDNA.')

        const dnaLen = vnum ? 4**vnum : (function minDnaLen(strLen, n=0) { 
            return 4**n >= strLen ? 4**n : minDnaLen(strLen, n+1);
        })(quat.length);

        if (quat.length > dnaLen) throw new Error('Integer size exceeds desired DNA length.');
        return Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["pad"])(quat, dnaLen);
    }

    // ----------------------------------------------------
    // Output
    // ----------------------------------------------------

    static formToDNA (input, varorder=undefined, options=undefined) {
        /* converts a form into its formDNA representation in HTML */

        const {output} = { output: undefined, ...options };

        let dna = undefined, formula = undefined, varList = undefined;
        if (input.includes('::')) {
            // if the input contains the mark '::' for formDNA, return it if it's valid
            if (!this.isValidDNA(input)) throw new Error('Input is not valid formDNA');

            const parts = this.getDNAparts(input);

            dna = parts.dna;
            formula = parts.formula;
            varList = parts.varList;
        }
        else {
            // if not, process the input as a FORM with specified or default varorder and encode it to dna
            dna = this.encode( input, (varorder ? varorder : undefined) );
            formula = input;
            varList = varorder ? varorder : this.getVariables(formula);
        }

        switch (output) {
            // case 'html': {
            // 	return formDNA_html(formula, dna, varList);
            // }
            case 'text': {
                return (formula !== undefined ? formula : '') + (varList && dna.length > 1 ? `.[${varList.join(',')}]` : '') + '::' + dna;
            }
            case 'num': {
                return dna;
            }
            default: {
                return [formula, varList, dna];
            }
        }
    }

    static dnaToFORM (formDNA, varorder=undefined, options=undefined) {
        /* converts formDNA with a given variable list/order into a graph representation of (one of its) simplest corresponding FORM model(s) */

        // >>> not yet implemented!

        return this.decode(formDNA, varorder);
    }

    static genRandomDNA (vnum) {
        /* Generates a random formDNA string for a given variable number */

        const maxN = bigInt(4).pow( bigInt(4).pow(vnum) );
        const value_bin = Object(_common_bigint_helper__WEBPACK_IMPORTED_MODULE_2__["getRandomBigInt"])( maxN.subtract(1) );
        return this.intToDNA(value_bin, vnum);
    }

    static vmap (input, varorder=undefined, options=undefined) {
        /* generates vmap HTML from form/formDNA input */

        const { limitSize, convDefaultVarorder,
                size, gapGrow, marginFunc, strokeW } = {
                    limitSize: true, convDefaultVarorder: true,
                    size: undefined, gapGrow: 1.5, marginFunc: undefined, strokeW: 0.5,
                    // filter: '1111', <- might add later
                    ...options};

        let dna = undefined;
        let formula = input;

        if (input.includes('::') && this.isValidDNA(input)) {
            const dnaParts = this.getDNAparts(input);
            dna = dnaParts.dna;
            formula = dnaParts.formula;
            const varList = dnaParts.varList ? dnaParts.varList : this.getVariables(input);

            if (varorder !== undefined && varList !== undefined && !Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["equalArrays"])(varorder, varList)) {
                throw new Error('Variable order is specified in the formDNA input and as an argument for the vmap function and they are different. Please select only one specification to avoid conflicting results.');
            }
            else if (varList) {
                varorder = varList;
            } else if (formula) {
                varorder = this.getVariables(formula);
            }
        }
        else if (!varorder) {
            varorder = this.getVariables(formula);
            if (convDefaultVarorder) varorder = this.matchDefaultVarOrder(varorder);
        }

        if (!dna) dna = this.encode(formula, varorder);
        const vnum = this.totalVarsFromDNA(dna);

        if (vnum === NaN) throw new Error('Invalid variable number for vmaps.');
        if (limitSize && vnum > 8) throw new Error('vmaps with more than 8 variables are too computationally intensive to be rendered with this implementation. If you still want to proceed, add the option "limitSize: false" to your vmap function call (using the formform library).');


        const reversedDNA = dna.split('').reverse().join('');
        
        const cellSize = size || (vnum => {
            // reduction by 2px for each additional variable if vnum > 3
            const n = 17 - (vnum > 3 ? 2 * (vnum-3) : 0); // changed from: 14 - (vnum-1);
            return Math.max(2, n); // min size of 2px
        })(vnum);

        // margins can also be calculated through a custom function
        const margins = [strokeW, 
            ...Array.from({length:vnum-1}, marginFunc ? marginFunc : ((_,i) => (i+1) * gapGrow) )];
        const cell = {w:cellSize, h:cellSize};


        const vmapTree = this.constructVmap(reversedDNA, vnum, cell, margins);

        return {tree: vmapTree,
                input: input, 
                varorder: varorder, 
                options: options};
    }

    static vmapPerspectives (form, varorder=undefined, globalOptions=undefined, localOptions=undefined) {
        /* Generates a list of vmap perspectives as permutations of a form/formDNA input */
        // Note: formDNA input not yet supported (permutation algorithm required)

        const {limitSize} = { limitSize: true, ...globalOptions };

        if (typeof(form) === 'string' && form.includes('::')) throw new Error('formDNA input is not yet supported for vmap perspectives.');

        if (varorder === undefined) varorder = this.matchDefaultVarOrder( this.getVariables(form) );
        const vnum = varorder.length;
        if (limitSize && vnum > 5) throw new Error('Rendering all the perspectives for vmaps with more than 5 variables is too computationally intensive with this implementation. You can, however, still compute single permutations by changing the variable order of your FORM. If you still want to proceed, add the option "limitSize: false" to your vmapPerspectives function call (using the formform library).');

        const formula = form; // <<< support for JSON?

        const vmapPermutations = Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["permuteArray"])(varorder)
            .map(varorder => this.vmap(formula, varorder, {
                hideInputLabel: true, 
                customLabel: undefined,
                ...localOptions }) );

        return vmapPermutations;
    }

    static vmapList (inputList, globalOptions=undefined) {
        /* Generates a list of vmaps from an array of FORM inputs */
        // inputList format: [['form/formDNA', [varorder]/undefined, options/undefined], ...]

        const vmaps = inputList.map(input => this.vmap(input[0], input[1], {...input[2], ...globalOptions}) );

        return vmaps;
    }

    // ----------------------------------------------------
    // Data Structure
    // ----------------------------------------------------

    static constructVmap (reversedDNA, vnum, cell, margins) {
        /* Recursively constructs vmap data-structure from formDNA */

        const calcGapSum = (v,margins) => margins.slice(1,v).reverse().reduce((acc,curr,idx) => acc + (2**idx) * curr, 0);
        const fx = (qi,n) =>  (qi%2) * (n !== undefined ? n : 0);         // xpos: 0123 -> 0101 * shift n
        const fy = (qi,n) => +(qi>0 && qi<3) * (n !== undefined ? n : 0); // ypos: 0123 -> 0110 * shift n

        const constructVmap_recursive = (dnaHolon, vcount, cell, margins, qi=0) => {
            const subTree = {};
            const gapSum = calcGapSum(vcount,margins);
            const qtn = 4**vcount;
            const len = Math.sqrt(qtn);
            dnaHolon = dnaHolon.substr(qi*qtn, qtn); // quarter of the formDNA string
        
            subTree.data = { 
                dna: '::'+dnaHolon.split('').reverse().join(''),
                vnum: vcount, cell: cell,
                margins: vnum > 0 ? margins.slice(0,vcount) : margins.slice(0,1)
            };

            subTree.height = vcount;
            subTree.depth = vnum - (Math.log(qtn) / Math.log(4)); // log base 4
            subTree.order = qi;
        
            subTree.position = [
                // base shift  =  (1) cell size * length units  +  (2) sum of all previous gaps/margins
                // real shift  =  base shift  +  (3) margins of current iteration level
                // -- qi: current value index 0/1/2/3
                // -- -- fx/fy map qi to x/y positions of a square and multiply by shift value (2. argument)
                // -- margins: [strokeW, 1 * gapGrow, 2 * gapGrow, … (vnum-1) * gapGrow]
                // -- -- if vcount == 0    -> shift (3) == strokeW
                // -- -- if vcount == vnum -> shift (3) == 0
                fx(qi, len*cell.w) + fx(qi, gapSum) + fx(qi, margins[vcount]),
                fy(qi, len*cell.h) + fy(qi, gapSum) + fy(qi, margins[vcount])];

            subTree.scale = [
                len*cell.w + gapSum, 
                len*cell.h + gapSum ];

            if (vnum === 0) { // if formDNA only has a single value, like ::3
                subTree.value = dnaHolon;
                return subTree;
            }

            subTree.children = [];
        
            for (let i=0; (vcount > 0 && i < 4) || (vcount === 0 && i < 1); i++) {
                if (vcount > 1) {
                subTree.children = 
                    [...subTree.children, constructVmap_recursive(dnaHolon, vcount-1, cell, margins, i) ];
                }
                else {
                const val = dnaHolon.substr(i,1);
        
                subTree.children = [...subTree.children, ({
                    // type: 'value',
                    data: {
                        dna: '::'+val,
                        vnum: 0, cell: cell,
                        margins: margins.slice(0,1),
                    },
                    value: val,
                    height: vcount-1,
                    depth: subTree.depth + 1,
                    order: i,
                    // count: 1,
                    position: [fx(i,cell.w), fy(i,cell.h)],
                    scale: [cell.w, cell.h],
                    // parent: subTree
                }) ];
                }
            }
          return subTree;
        }
        return constructVmap_recursive (reversedDNA, vnum, cell, margins);
    }

    // ----------------------------------------------------
    // Validation
    // ----------------------------------------------------

    static dnaMatchesForm (dna, form, _varList=undefined, options) {
        /* Checks if a given DNA code matches a given FORM (+ optional variable list) */
        // const { } = { ...options };
        const varList = _varList ? _varList : super.getVariables(form);

        const validations = _varList ? [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(
                () => this.formMatchesVarList(form, varList),
                'FORM doesn\'t match the given variable list'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(
                () => varList.length === this.totalVarsFromDNA(dna),
                'Number of variables in given variable list doesn\'t match formDNA code length'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(
                () => this.encode(form, varList) === dna,
                'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
        ] : [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(
                () => varList && varList.length === this.totalVarsFromDNA(dna),
                'Number of FORM variables doesn\'t match formDNA code length'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(
                () => this.encode(form) === dna,
                'formDNA code is inconsistent with FORM interpretation results'),
        ];

        return validations.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        return true;
    }

    static isValidDNA (_input, options) {
        /* Checks if an input is in formDNA format (has to be marked with '::' to not confuse it with a FORM out of constants) */
        const {compareForm, requireMark} = { compareForm: true, requireMark: true, ...options };

        const input = requireMark ? _input : '::'+_input;

        const validations1 = [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => typeof(input) === 'string',
                'formDNA input is not of type ‘string’'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => input.includes('::'),
                'Input does not include the mark ‘::’ for formDNA'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => input.length >= 3,
                'formDNA input is too short'),
        ];
        validations1.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        const { dna, formula, varList } = this.getDNAparts(input);
        const validations2 = [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => this.totalVarsFromDNA(dna) >= 0,
                'formDNA code length is not in the range 4^x'),
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
                'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
            compareForm && formula !== undefined
            ? Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["createValidation"])(() => this.dnaMatchesForm(dna, formula, varList),
                'formDNA code part doesn\'t match formula part or formula part doesn\'t match its specified variable order') : null,
        ].filter(fn => fn);

        validations2.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        return true;
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

// EXPERIMENTAL >

static generateVarNames (vnum, excludeList = undefined) {
    return Array.from({length: vnum}, (_, i) => {
        let candidate = `x_${i}`;
        if (excludeList !== undefined) {
            while (excludeList.includes(candidate)) {
                candidate = candidate+`′`;
            }
        }
        return candidate;
    });
}

static universe_1 (x) {
    /* Returns the constituents of the 4-valued universe of 1 terms from a variable name */
    if (x.length > 1) x = `"${x}"`;
    return [ 
        `({(${x})}{2r|(${x})})`, 
        `({${x}}{2r|${x}})`, 
        `(({(${x})}${x})({2r|${x}}(${x})))`, 
        `(({${x}}(${x}))({2r|(${x})}${x}))`];
}

static universe_n (vars) {
    /* Returns the constituents of the 4-valued universe of n terms from a list of n variable names */
    const vnum = vars.length;
    const univ1s = vars.map(v => this.universe_1(v));
    return Array.from({length: 4**vnum}, (_, i) => {
      const iq = Object(_common_helper__WEBPACK_IMPORTED_MODULE_1__["pad"])(i.toString(4), vnum).split('');
      const univN = univ1s.reduce((formula, univ1, j, arr) => 
                           formula+`(${univ1[iq[j]]})`
                           +(j === arr.length-1 ? ')' : ''), '(');
      return vnum > 1 ? univN : univN.slice(2,-2);
    });
};

// < END

    static totalVarsFromDNA (formDNA) { 
        /* Calculates variable number from formDNA */

        // detach from formDNA mark '::'
        const dna = formDNA.split(':').pop();

        // calculate the number of variables from the lenght of the string
        const n = Math.log(dna.length)/Math.log(4); // log_4(dna length) = variable number
        return n % 1 === 0 ? n : NaN;
    };

    static repairDNA (input) {
        /* Repairs a given string that is not in a valid formDNA form to pass as formDNA */

        // if the input contains the mark '::' for formDNA, distinguish two cases
        if (input.includes('::')) {
            // Case 1: input is of form f.[x]::n or f::n -> f will be encoded as a FORM (with [x] as variable order, if it matches the FORMs variables in number and labels)
            // - If the formDNA has been well formed in the first place, the output will be equivalent
            // - If the dna part doesn't match the FORM part, the dna part will be corrected
            // - If the variable order doesn't match the FORM variables, it will also be corrected
            // Note that this case effectively interprets the input as FORM input and makes sure that the formDNA is consistent, because it is impossible to infer a FORM from its DNA.
            const parts = this.getDNAparts(input);
            if (parts.formula) {
                // if there is a [x]-part, extract variable order and check if its valid for the FORM
                let varList = undefined;
                try { // try...catch avoids interruption by Error
                    if (parts.varList && this.formMatchesVarList(parts.formula, parts.varList)) varList = parts.varList;
                } catch (e) {
                    console.error(e.message);
                }
                // re-encode to return correct formDNA for the given formula
                return this.formToDNA(parts.formula, varList);
            }
            // Case 2: input is of form ::n -> the output will be the same
            // Note that a FORM will not be decoded from the dna alone, since this FORM would be opinionated
            if (!this.isValidDNA(input)) return null;

            return input;
        }
        // if the input is not marked as formDNA, it will just be encoded as a FORM
        return this.formToDNA(input);
    }

    static getDNAparts (formDNA) {
        /* Decomposes a formDNA string into its 3/2/1 parts */
        let dna = undefined, formula = undefined, varList = undefined;

        const parts = formDNA.split(':');
        dna = parts.pop();

        if (parts[0].length > 0) {
            const form_parts = parts[0].split('.');
            formula = form_parts[0];
            varList = form_parts.length > 1 ? form_parts[1].slice(1,-1).split(',') : varList;
        }

        return ({ dna: dna, formula: formula, varList: varList });
    }

}

/***/ }),

/***/ "./src/lib/core/fform.js":
/*!*******************************!*\
  !*** ./src/lib/core/fform.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FForm; });
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _fcalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcalc */ "./src/lib/core/fcalc.js");



class FForm extends _fcalc__WEBPACK_IMPORTED_MODULE_1__["default"] {

    // ===================================================================
    //     formform core module 'form'
    //     -- since 2018, by Peter Hofmann (formsandlines.eu)
    // ===================================================================

    constructor() {
    };

    // ----------------------------------------------------
    // Form Calculation
    // ----------------------------------------------------

    static calc(_form) {
        /* Calculates a given form recursively 

        Note: Do NOT use this function for formulas with variables!
              Assumes x=0 for all variables. Use interCalc() instead.
        */

        let fx = 0;
        // make sure to have a json form, if not: try to convert
        const form = this.getValidForm(_form);

        for (let i in form.space) {
            if (form.space[i].type === 'form') {
                fx = this.rel( fx,this.calc(form.space[i]) );
            }
            else if (form.space[i].type === 'const') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'var') {
                if(!isNaN(form.space[i].value)) fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'unclear') {
                fx = this.rel( fx,form.space[i].value );
            }
            else if (form.space[i].type === 'reEntry') {
                let nestedVals = [];
                const fReEntry = form.space[i];

                for (let j in fReEntry.nested) {
                    nestedVals = [...nestedVals, this.calc(fReEntry.nested[j])];
                }
                // for even resolutions (total nested arguments), reEntry number will be undefined
                // since it doesn't matter if its even or odd
                const reEntryNumber = (fReEntry.nested.length % 2 === 0) ? undefined : fReEntry.reEven;
                
                // notation reading: {deepest, ..., shallowest}  use nestedVals.reverse() to reverse variables
                fx = this.rel( fx,this.reEntry(reEntryNumber, fReEntry.lastOpen, fReEntry.altInterpretation, ...nestedVals) );
            }
        }
        if(form.unmarked) return fx;
        else return this.inv( fx );
    };

    static calcAll(_form) {
        /* Interpret and calculate all possible values for the form
           (refactored: 10.10.2020)
        */
        const form = this.getValidForm(_form);

        const vars = this.getVariables(form);
        const vnum = vars.length;
        const vals = {};

        if (vnum < 1) {
            vals['Result'] = this.calc(form);
            return vals;
        }

        const interKey = ''+vars.join()+';';
        
        for (let i=0; i < 4**vnum; i++) {
            const interprVals = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["pad"])(i.toString(4), vnum);
            const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

            vals[interKey+interprVals] = this.interCalc(form, interpr);
        }

        return vals;
    };

    static interCalc(form, interpr) {
        /* Interprets a form and calculates the result of the interpretation */

        return this.calc( this.interpret(form, interpr) );
    };

    static interpret(_form, interpr) {
        /* Interprets a form with specified values for each variable

        interpr: [{var: 'x', value: n}, …]
        */
        const form = this.getValidForm(_form);

        const interprForm = JSON.parse(JSON.stringify(form)); // clone form

        this.traverseForm(interprForm, function(fBranch) {
            const space = fBranch.space;

            for (let i in space) {
                if (space[i].type === 'var') {
                    for (let v in interpr) {
                        if (space[i].symbol === interpr[v].var) {

                            space[i].value = interpr[v].value;
                            break;
                        }
                    }
                }
            }
        });

        return interprForm;
    };

    // ----------------------------------------------------
    // Extensions of FCalc
    // ----------------------------------------------------

    static rel_logic(fx, fy) {
        if(typeof(fx) === Array || typeof(fy) === Array) {
            return null;
        }
        return super.rel_logic(fx, fy);
    };
    static rel(...fVals) {
        return super.rel(...fVals);
    };

    static inv_logic(fx) {
        if(typeof(fx) === Array) {
            return null;
        }
        return super.inv_logic(fx);
    };
    static inv(fx, n) {
        return super.inv(fx, n);
    };

    // ----------------------------------------------------
    // Conversions
    // ----------------------------------------------------

    static parseLinear(formula) {
        /* Converts from paranthesis notation into JSON string and parses as JSON object */

        // convert the formula into a JSON string
        const jsonStr = this.convFromLinear(formula);

        // try parsing the string as a JSON object
        let json = null;
        try {
            json = JSON.parse(jsonStr);
        } catch(e) {
            console.log(e);
        }

        return json;
    }

    static convFromLinear(formula) {
        // clean formula string from whitespace
        const cleanFormula = this.cleanLinear(formula);
        const arr = this.constructFromLinear(cleanFormula);
        return Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["flatten"])(arr).join('');
    }

    static cleanLinear(formula) {
        let cleanFormula = '';
        let inQuote = false;
        let inSlash = false;

        for (let i in formula) {
            const char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks

            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;

            // omit whitespace outside of quotes
            if (char === ' ') {
                if (inQuote || inSlash) cleanFormula += char;
            }
            else cleanFormula += char;
        }
        return cleanFormula;
    }

    static constructFromLinear(formula) {
        /* Converts from paranthesis notation to JSON-form */

        let compAll = [];
        let unmarked = true;

        // check for all enclosing outer form
        let countDepth = 0;
        let inQuote = false;
        let inSlash = false;
        for (let i in formula) {
            const char = formula[i];
            if(typeof(char) !== "string") break; // prototype hacks

            if (!inQuote && !inSlash) {
                if (char === '(') {
                    if ((countDepth == 0) && (i != 0)) break;
                    countDepth++;
                }
                else if (char === ')') {
                    countDepth--;
                    if (countDepth == 0) {
                        if (i == formula.length-1) {
                            unmarked = false;
                            break;
                        }
                        else break;
                    }
                }
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
        }

        compAll = [...compAll, '  {'];
        compAll = [...compAll, '"type":"form",'];

        if (unmarked) compAll = [...compAll, '"unmarked":true,'];
        else formula = formula.slice(1,formula.length-1);

        compAll = [...compAll, '"space":['];


        let parts = [''];

        countDepth = 0;
        inQuote = false;
        inSlash = false;

        const reChar = '↻';
        const optChar = '⤴';
        const nestChar = '⤵';

        for (let i in formula) {
            let char = formula[i];
            const prevChar = formula[i-1];
            if(typeof(char) !== "string") break; // prototype hacks
            
            if (!inQuote && !inSlash) {
                if (char === ')' || char === '}') countDepth--;
                if (char === '(' || char === '{') {
                    
                    if (countDepth === 0) {
                        // first (x) doesn't need to be separated
                        if (i > 0) parts = [...parts, ''];
                    }
                    countDepth++;
                }
                else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
                    // if char follows (x), separate; but not if it is another ')'
                    if (countDepth === 0) parts = [...parts, ''];
                }
                // unique separation chars for re-entry forms for easy splitting
                if (countDepth === 1 && char === ',') char = nestChar;
                else if (countDepth === 1 && char === '|') char = optChar;
                else if (countDepth === 1 && char === '@') char = reChar;
            }
            if (char === '"' && !inSlash) inQuote = !inQuote;
            if (char === '/' && !inQuote) inSlash = !inSlash;
            // add char to the latest pushed part
            parts[parts.length-1] += char;
        }
        
        for (let i in parts) {

            if (parts[i][0] === '(') { 
                // if part is form
                let comp = [this.constructFromLinear(parts[i])];

                parts[i] = comp.slice();
            }
            else if (parts[i][0] === '{') {
                // else if part is re-entry form

                let comp = ['  {'];
                comp = [...comp, '"type":"reEntry",'];

                const content = parts[i].slice(1,parts[i].length-1);
                let reNested = undefined;

                if (content.includes(reChar)) {
                    // new re-entry syntax
                    const altInterpr = content.startsWith(`alt${optChar}`);
                    const _content = altInterpr ? content.slice(4,) : content.slice();

                    let type = [-1,-1];
                    if (_content.startsWith(`..${reChar}._`)) type = [3,1]
                    else if (_content.startsWith(`..${reChar}.`)) type = [3,0]
                    else if (_content.startsWith(`..${reChar}_`)) type = [2,1]
                    else if (_content.startsWith(`..${reChar}`)) type = [2,0]
                    else if (_content.startsWith(`${reChar}_`)) type = [0,1]
                    else if (_content.startsWith(reChar)) type = [0,0]

                    const typeCharSum = type[0] + type[1] + 1;
                    reNested = _content.slice(typeCharSum,).split(nestChar);

                    if (reNested.length % 2 === 0) {
                        comp = [...comp, '"reEven":"undefined",'];
                    }
                    else if (type[0] === 2) comp = [...comp, '"reEven":true,'];
                    else comp = [...comp, '"reEven":false,'];

                    if (type[1] > 0) comp = [...comp, '"lastOpen":true,'];
                    else comp = [...comp, '"lastOpen":false,'];

                    if (altInterpr) comp = [...comp, '"altInterpretation":true,'];
                    else comp = [...comp, '"altInterpretation":false,'];
                }
                else {
                    // old re-entry syntax
                    const reParts = content.split(optChar);

                    reNested = reParts[reParts.length-1].split(nestChar);

                    if (reNested.length % 2 === 0) {
                        comp = [...comp, '"reEven":"undefined",'];
                    } 
                    else {
                        if (reParts[0] === '2r' || reParts[1] === '2r' || reParts[2] === '2r') comp = [...comp, '"reEven":true,'];
                        else comp = [...comp, '"reEven":false,'];
                    }

                    if (reParts[0] === 'open' || reParts[1] === 'open' || reParts[2] === 'open') comp = [...comp, '"lastOpen":true,'];
                    else comp = [...comp, '"lastOpen":false,'];

                    if (reParts[0] === 'alt' || reParts[1] === 'alt' || reParts[2] === 'alt') comp = [...comp, '"altInterpretation":true,'];
                    else comp = [...comp, '"altInterpretation":false,'];
                }

                comp = [...comp, '"nested":['];

                for (let n in reNested) {
                    comp = [...comp, this.constructFromLinear(reNested[n]) ];
                    if (n < reNested.length-1) comp = [...comp, ','];
                    // reNested[n] = this.constructFromLinear( reNested[n] );
                }

                comp = [...comp, ']}  '];

                parts[i] = comp.slice();
            }
            else {
                // else we have variables/constants

                let comp = [];

                let vars = [];
                let inQuote = false;
                let inSlash = false;

                for (let j in parts[i]) {
                    const char = parts[i][j];
                    if(typeof(char) !== "string") break; // prototype hacks

                    if (char === '"' && !inSlash) {
                        inQuote = !inQuote;
                        // mark quoted string with a '‖' for identification
                        if (inQuote) vars = [...vars, '‖'];
                    }
                    else if (char === '/' && !inQuote) {
                        inSlash = !inSlash;
                        // mark unclear form with a '‽' for identification
                        if (inSlash) vars = [...vars, '‽'];
                    }
                    else {
                        if (!inQuote && !inSlash) vars = [...vars, ''];
                        // quote chars inside slashes will be escaped to not interfere with JSON syntax
                        if (char === '"' && inSlash) vars[vars.length-1] += '\\' + char;
                        else vars[vars.length-1] += char;
                    }
                }

                for (let v in vars) {
                    if(typeof(vars[v]) !== "string") break; // prototype hacks

                    comp = [...comp, '  {'];
                    if (!isNaN(vars[v]) && vars[v].length > 0 
                        && vars[v][0] !== '‽' && vars[v][0] !== '‖') {
                        comp = [...comp, '"type":"const",']; 
                        comp = [...comp, '"value":'];
                        comp = [...comp, vars[v]];
                    }
                    else if (vars[v][0] === '‽') {
                        comp = [...comp, '"type":"unclear",'];
                        comp = [...comp, '"value":2,'];
                        comp = [...comp, '"symbol":'];
                        comp = [...comp, '"'+vars[v].slice(1)+'"'];
                    }
                    else {
                        comp = [...comp, '"type":"var",'];
                        comp = [...comp, '"value":"*",'];
                        comp = [...comp, '"symbol":'];
                        if(vars[v][0] === '‖') comp = [...comp, '"'+vars[v].slice(1)+'"'];
                        else comp = [...comp, '"'+vars[v]+'"'];
                    }
                    comp = [...comp, '}  '];
                    if (v < vars.length-1) comp = [...comp, ','];
                }

                parts[i] = comp.slice();
            } // end else

            compAll = [...compAll, parts[i]];
            if (i < parts.length-1) compAll = [...compAll, ','];
        }

        compAll = [...compAll, ']}  '];

        return compAll;
    }


    static constructNested(reForm, options={}) {
        /* Constructs a (real) nested form structure from the .nested array of the original re-entry json */

        // >>> should be rewritten completely to get rid of all the mutation!
        
        let space = reForm.space = [];
        reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

        for(let i in reForm.nested) {
            if (i > 0) {
                // prepend the reEntry nesting before everything else in the space
                space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
                const nestedForm = space[0]; // space[space.length-1] <- order last
                
                if(!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
                else {
                    // nestedForm.space.push(reForm.nested[i]);
                    nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
                }

                space = nestedForm.space;
            }
            else {
                if(!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
                // else space.push(reForm.nested[i]);
                else space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
            }

            if (options.addEmptyReChildSpace && (space.length === 0)) {
                space.push( {type: 'space'} );
            }
        }    

        // we need to add a point of re-entry to the last nested form
        // first, lets assume this is the form itself
        let lastNested = reForm;
        
        if(reForm.space.length > 0) {
            // then loop until the last reChild is found and make this our last nested form
            
            while (lastNested.space[0].hasOwnProperty('reChild')) {        
                lastNested = lastNested.space[0];
                if (lastNested.space.length < 1) break; // prevent errors when nothing is found
            }
        }
        // for open re-entries, we need to add another nesting (see uFORM iFORM for reference)
        if(reForm.lastOpen) {
            lastNested.space.unshift( {type: 'form', reChild: true, space: []} );
            // then add the re-entry point to either space
            lastNested.space[0].space.unshift( {type: 'reEntryPoint'} );
        }
        else lastNested.space.unshift( {type: 'reEntryPoint'} );

        // last, delete the nested structure, we don't need it anymore
        delete reForm.nested;
        return reForm;
    }

    static expand_reEntry(_form, options={}) {
        // >>> should be rewritten completely to get rid of all the mutation!
        const refForm = this.getValidForm(_form);
        const targetForm = JSON.parse(JSON.stringify(refForm)); // copy json object without identifying it

        // we must keep a running index to not confuse identical forms while reconstructing the reEntries
        // Note: this should be done more efficiently in the future
        let runningIndex = 0;
        this.traverseForm(refForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });
        runningIndex = 0;
        this.traverseForm(targetForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });

        this.traverseForm(refForm, function(refBranch) {

            if(refBranch.type === 'reEntry') {
                this.traverseForm(targetForm, function(targetBranch) {

                    if( (JSON.stringify(refBranch) === JSON.stringify(targetBranch)) && 
                            (refBranch.runningIndex === (targetBranch.hasOwnProperty('runningIndex') ? targetBranch.runningIndex : null)) ) {
                        targetBranch = this.constructNested(targetBranch, options);
                        return true;
                    }
                });

            }
        });
        // delete running index property
        this.traverseForm(targetForm, function(branch) { delete branch.runningIndex; });

        return targetForm;
    }


    // ----------------------------------------------------
    // Representation
    // ----------------------------------------------------

    static jsonString(_form, expandRE=false) {
        /* returns json-representation of the specified FORM */
        const form = this.getValidForm(expandRE ? this.expand_reEntry(_form) : _form);
    
        return JSON.stringify(form, undefined, 2);
    }

    // ----------------------------------------------------
    // Helper
    // ----------------------------------------------------

    static getVariables(_form) {
        /* parses a FORM to get all of its variables and sorts them using the JS Array.sort() method
        which sorts by comparing UTF-16 code unit values.
        Note: By convention, the process of deriving formDNA from a given FORM involves ordering of the extracted variables by this same sorting method, if no special ordering is specified. */
        const form = this.getValidForm(_form);

        let vars = [];
        this.traverseForm(form, function(fBranch) {
            const space = fBranch.space;

            for (let i in space) {
                if (space[i].type === 'var') {
                    if (!Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["include"])(vars, space[i].symbol)) {
                        vars = [...vars, space[i].symbol];
                    }
                }
            }
        });
        return vars.sort();
    };

    static traverseForm(form,func) {
        /* traverses only form-types in a json tree */
        const breakTrav = func.apply(this,[form]);

        if (form.space) { // form.type: 'form'
            if (form.space.length > 0) {
                for (let i in form.space) {
                    if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                        const breakLoop = this.traverseForm(form.space[i],func);
                        if (breakLoop) break;
                    }
                }
            }
        }
        else if (form.nested) { // form.type: 'reEntry'
            if (form.nested.length > 0) {
                for (let i in form.nested) {
                    const breakLoop = this.traverseForm(form.nested[i],func);
                    if (breakLoop) break;
                }
            }
        }
        else console.log('ERROR: Not a form!');

        return breakTrav;
    };

    /*  --------------------------------------------------------
        Additions 01/2020 from:
        https://observablehq.com/@formsandlines/formform-toolbox 
    */

    static getTotalVars (formStr) {
        /* gets total variable number of a FORM */
        return this.getVariables(formStr.substr()).length;
    };

    static reOrderVars (formula, varorder) {
        /* re-orders variables in a formula to match an ordering pattern */
        return this.decodeVars( this.encodeVars(formula, varorder) );
    };

    static decodeVars (encStr, decodePattern=undefined) {
      /* decodes variables in an encoded formula string with an optional decode pattern */
      let revCode = _common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"];
      if (decodePattern) {
        const keys = Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"]);
        const varPart = keys.slice(0,decodePattern.length);
        const modPart = keys.slice(-3);
        
        revCode = varPart.concat(modPart).reduce( (code,key,i) => ({...code, 
            [key]: i < decodePattern.length ? decodePattern[i] : _common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"][key], }),{});
      }

      return encStr.split('')
                .map(c => Object.keys(revCode).indexOf(c) > -1 ? revCode[c] : c).join('');
    };

    static encodeVars (formula, varorder=undefined) {
      /* encodes variables in a formula string according to a given variable order (array) */
      if (!varorder) varorder = this.getVariables(formula);
      
      function escapeRegExp(string) { // thx to CoolAJ86: https://stackoverflow.com/a/6969486
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
      
      const fixPtn = {alt: 'alt(?=\|)', rEven: '2r(?=\|)', rOdd: '2r+1(?=\|)'};
      const ptn = v => {
        if (v.length > 1) return `\"${escapeRegExp(v)}\"`; // (?<=\")(${v})(?=\")
        return `${escapeRegExp(v)}`;
      };
      
      return varorder
        .reduce((encStr,v,i) => encStr
                .replace(new RegExp(fixPtn.alt, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['alt'] )
                .replace(new RegExp(fixPtn.rEven, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['2r'])
                .replace(new RegExp(fixPtn.rOdd, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE"]['2r+1'])
                .replace(new RegExp(ptn(v), 'g'),(Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__["VARCODE_REV"])[i]) )
                         , formula );
    };


    /*  --------------------------------------------------------
        New Additions 01/2020:
    */

    static matchDefaultVarOrder (varList) {
        /* Helper to match default orderings for calculation and vmaps */
        if (varList.join('') === 'ELR') return ['L','E','R'];
        if (varList.join('') === '+-LR') return ['-','L','R','+'];
        if (varList.join('') === '+-ELR') return ['-','L','E','R','+'];
        return varList;
    }

    /*  --------------------------------------------------------
        New Additions 10/2020:
    */

    static isValidForm (input, options) {
        /* Checks if an input is a valid formula or JSON-FORM */

        return typeof(input) === 'string' ? 
            isValidFormula(input, options) : isValidJSONForm(input, options);
    }

    static isValidFormula (input, options) {
        /* Checks if an input is a valid formula */
        // const { } = { ...options };

        let validations1 = [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(() => typeof(input) === 'string',
                'Formula input is not of type ‘string’'),
        ];
        if (input.length > 0) validations1 = [...validations1,
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                () => {
                    return !!Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["collapseLiterals"])(input, '"') && !!Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["collapseLiterals"])(input, '/');
                    // const sansLiterals = collapseLiterals(input, '"');
                    // return sansLiterals ? checkLiteralMatching(sansLiterals, '/') : false;
                },
                'Number of quotes for literal variables (e.g.: "x") or number of slashes for unclear FORMs (e.g.: /x/) don\'t match'),
            // createValidation(
            //     () => {
                    // let openSep = '⁅', closeSep = '⁆';
                    // const dirUnclForms = input.split('/').reduce((acc,curr,idx) => {
                    //     return acc + (idx % 2 === 1 ? openSep : closeSep) + curr
                    // });
                    // const unclFormUnits = getBracketUnits(dirUnclForms, {open: openSep, close: closeSep});

                    // return unclFormUnits.every(unclForm => unclForm.split('"').length < 2); 

                    // let openSep = '⁌', closeSep = '⁍';
                    // const dirLiterals = input.split('"').reduce((acc,curr,idx) => {
                    //     return acc + (idx % 2 === 1 ? openSep : closeSep) + curr
                    // });
                    // const literalUnits = getBracketUnits(dirLiterals, {open: openSep, close: closeSep});

                    // literalUnits.every(literal => )
                // },
                // 'Number of quotes for literal variables (e.g.: "x") don\'t match'),
        ];
        validations1.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        if (input.length > 0) {
            const cleanInput = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["collapseLiterals"])( Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["collapseLiterals"])(input, '"'), '/');

            const validations2 = [
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["checkBracketMatching"])(cleanInput, '(', ')'),
                    'Number or opening/closing order of parantheses in formula don\'t match'),
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["checkBracketMatching"])(cleanInput, '{', '}'),
                    'Number or opening/closing order of curly brackets in formula don\'t match'),
            ];

            validations2.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );

            const roundBrUnits = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["getBracketUnits"])(cleanInput, {open: '(', close: ')'});
            const curlyBrUnits = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["getBracketUnits"])(cleanInput, {open: '{', close: '}'});

            const validations3 = [
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => roundBrUnits.every(subForm => Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["checkBracketMatching"])(subForm, '{', '}'))
                       && curlyBrUnits.every(subForm => Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["checkBracketMatching"])(subForm, '(', ')')),
                    'Opening/closing of parantheses overlaps with opening/closing of curly brackets in formula (e.g.: ({a)b})'),
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => curlyBrUnits.every(reEntry => this.isValidReEntry(reEntry)),
                    'Option part of one or more re-entry constructions is not well-formed'),
            ];

            validations3.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );
        }

        return true;
    }

    static isValidReEntry (input, options) {
        /* Checks if an input is a valid re-entry construction */
        // const { } = { ...options };

        const parts = input.slice(1,-1).split('|');

        if (parts.length > 1) {
            const entries = parts.filter((p,i,arr) => i < arr.length-1);
            const optList = ['alt','open','2r','2r+1'];

            const selList = entries.reduce((acc,str) => [...acc, optList.filter(opt => str === opt)[0]],[] ).filter(opt => opt);

            const selList_unique = [...new Set(selList)];

            const validations = [
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => selList_unique.length === entries.length,
                    'One or more re-entry constructions have invalid or duplicate options'),
                Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                    () => selList_unique.filter(str => str === optList[2] || str === optList[3]).length < 2,
                    'One or more re-entry constructions have both options ‘2r’ and ‘2r+1’ set at the same time'),
            ];

            return validations.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );
        }

        return true;
    }

    static isValidJSONForm (input, options) {
        /* Checks if an input is a valid JSON-FORM */
        // const { } = { ...options };

        const validations = [
            Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["createValidation"])(
                () => true,
                ''),
        ];

        return validations.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        return true;
    }

    static formMatchesVarList (form, varList) {
        /* Checks if a given FORM matches a given variable list */
        const varsForm = this.getVariables(form);

        const match = varList.length === varsForm.length
            && varsForm.every(v_a => varList.some(v_b => v_a === v_b));
        if (!match) throw new Error('FORM doesn\'t match the given variable list');

        return true;
    }

    static getValidForm(input) {
        if(typeof(input) === 'string') {
            if (!this.isValidFormula(input)) throw new Error('Input is not a valid formula');
            return this.parseLinear(input);
        } else {
            // >>> need to check json input too
            return input;
        }
    }

}

/***/ }),

/***/ "./src/lib/main.js":
/*!*************************!*\
  !*** ./src/lib/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fcalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/fcalc */ "./src/lib/core/fcalc.js");
/* harmony import */ var _core_fform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/fform */ "./src/lib/core/fform.js");
/* harmony import */ var _core_fdna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/fdna */ "./src/lib/core/fdna.js");




/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__["default"], form: _core_fform__WEBPACK_IMPORTED_MODULE_1__["default"], dna: _core_fdna__WEBPACK_IMPORTED_MODULE_2__["default"] });

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9jYW52Zy9kaXN0L2Jyb3dzZXIvY2FudmcubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3JnYmNvbG9yL2luZGV4LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvc3JjL3N0YWNrYmx1ci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29tbW9uL2JpZ2ludC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29tbW9uL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mY2FsYy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZG5hLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9jb3JlL2Zmb3JtLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2xpYi9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdTQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7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QUFBQTtBQUFBO0FBQWdDO0FBQ0E7QUFDRjs7QUFFZixnRUFBQyxDQUFDLHlEQUFJLEVBQUUseURBQUksRUFBRSx1REFBRyxFQUFFLEUiLCJmaWxlIjoiZm9ybWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGliL21haW4uanNcIik7XG4iLCJ2YXIgYmlnSW50ID0gKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBCQVNFID0gMWU3LFxyXG4gICAgICAgIExPR19CQVNFID0gNyxcclxuICAgICAgICBNQVhfSU5UID0gOTAwNzE5OTI1NDc0MDk5MixcclxuICAgICAgICBNQVhfSU5UX0FSUiA9IHNtYWxsVG9BcnJheShNQVhfSU5UKSxcclxuICAgICAgICBERUZBVUxUX0FMUEhBQkVUID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgICB2YXIgc3VwcG9ydHNOYXRpdmVCaWdJbnQgPSB0eXBlb2YgQmlnSW50ID09PSBcImZ1bmN0aW9uXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gSW50ZWdlcih2LCByYWRpeCwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXggIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiArcmFkaXggPT09IDEwICYmICFhbHBoYWJldCA/IHBhcnNlVmFsdWUodikgOiBwYXJzZUJhc2UodiwgcmFkaXgsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHNpZ247XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFNtYWxsSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB2YWx1ZSA8IDA7XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBOYXRpdmVCaWdJbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQcmVjaXNlKG4pIHtcclxuICAgICAgICByZXR1cm4gLU1BWF9JTlQgPCBuICYmIG4gPCBNQVhfSU5UO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNtYWxsVG9BcnJheShuKSB7IC8vIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIGRvZXNuJ3QgcmVmZXJlbmNlIEJBU0UsIG5lZWQgdG8gY2hhbmdlIHRoaXMgZnVuY3Rpb24gaWYgQkFTRSBjaGFuZ2VzXHJcbiAgICAgICAgaWYgKG4gPCAxZTcpXHJcbiAgICAgICAgICAgIHJldHVybiBbbl07XHJcbiAgICAgICAgaWYgKG4gPCAxZTE0KVxyXG4gICAgICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNyldO1xyXG4gICAgICAgIHJldHVybiBbbiAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWU3KSAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWUxNCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFycmF5VG9TbWFsbChhcnIpIHsgLy8gSWYgQkFTRSBjaGFuZ2VzIHRoaXMgZnVuY3Rpb24gbWF5IG5lZWQgdG8gY2hhbmdlXHJcbiAgICAgICAgdHJpbShhcnIpO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCA0ICYmIGNvbXBhcmVBYnMoYXJyLCBNQVhfSU5UX0FSUikgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gYXJyWzBdICsgYXJyWzFdICogQkFTRTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBhcnJbMF0gKyAoYXJyWzFdICsgYXJyWzJdICogQkFTRSkgKiBCQVNFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpbSh2KSB7XHJcbiAgICAgICAgdmFyIGkgPSB2Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodlstLWldID09PSAwKTtcclxuICAgICAgICB2Lmxlbmd0aCA9IGkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KGxlbmd0aCkgeyAvLyBmdW5jdGlvbiBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBZYWZmbGUncyBsaWJyYXJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvQmlnSW50ZWdlclxyXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHhbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnVuY2F0ZShuKSB7XHJcbiAgICAgICAgaWYgKG4gPiAwKSByZXR1cm4gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYS5sZW5ndGggPj0gYi5sZW5ndGhcclxuICAgICAgICB2YXIgbF9hID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxfYiA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGxfYSksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbF9iOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGJbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBzdW0gPj0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaSA8IGxfYSkge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID09PSBiYXNlID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcnJ5ID4gMCkgci5wdXNoKGNhcnJ5KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbnkoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCA+PSBiLmxlbmd0aCkgcmV0dXJuIGFkZChhLCBiKTtcclxuICAgICAgICByZXR1cm4gYWRkKGIsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNtYWxsKGEsIGNhcnJ5KSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgY2FycnkgaXMgbnVtYmVyIHdpdGggMCA8PSBjYXJyeSA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgc3VtLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSAtIGJhc2UgKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHN1bSAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChhLCBNYXRoLmFicyhiKSksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRBbnkoYSwgYiksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucGx1cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZShhICsgYikpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgKyBiKTtcclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShNYXRoLmFicyhiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChiLCBNYXRoLmFicyhhKSksIGEgPCAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBsdXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSArIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wbHVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEgPj0gYlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkoYV9sKSxcclxuICAgICAgICAgICAgYm9ycm93ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93IC0gYltpXTtcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IGJfbDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93O1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByW2krK10gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgcltpXSA9IGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RBbnkoYSwgYiwgc2lnbikge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICBpZiAoY29tcGFyZUFicyhhLCBiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYSwgYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChiLCBhKTtcclxuICAgICAgICAgICAgc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IGFycmF5VG9TbWFsbCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdFNtYWxsKGEsIGIsIHNpZ24pIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIDAgPD0gYiA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IC1iLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gYmFzZSk7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgJT0gYmFzZTtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2UgPCAwID8gZGlmZmVyZW5jZSArIGJhc2UgOiBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gYXJyYXlUb1NtYWxsKHIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgciA9IC1yO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihyKTtcclxuICAgICAgICB9IHJldHVybiBuZXcgQmlnSW50ZWdlcihyLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbClcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYSwgTWF0aC5hYnMoYiksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0QW55KGEsIGIsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYSAtIGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChiLCBNYXRoLmFicyhhKSwgYSA+PSAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm1pbnVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC0gcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1pbnVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsICF0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciBzbWFsbCA9IG5ldyBTbWFsbEludGVnZXIoLXRoaXMudmFsdWUpO1xyXG4gICAgICAgIHNtYWxsLnNpZ24gPSAhc2lnbjtcclxuICAgICAgICByZXR1cm4gc21hbGw7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKE1hdGguYWJzKHRoaXMudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlID49IDAgPyB0aGlzLnZhbHVlIDogLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUxvbmcoYSwgYikge1xyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGwgPSBhX2wgKyBiX2wsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGJfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYV9sOyArK2kpIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiX2w7ICsraikge1xyXG4gICAgICAgICAgICAgICAgYl9qID0gYltqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBhX2kgKiBiX2ogKyByW2kgKyBqXTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqICsgMV0gKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsKGEsIGIpIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIHxifCA8IEJBU0VcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgY2FycnkgPSAwLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGFbaV0gKiBiICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgIHJbaV0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0TGVmdCh4LCBuKSB7XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB3aGlsZSAobi0tID4gMCkgci5wdXNoKDApO1xyXG4gICAgICAgIHJldHVybiByLmNvbmNhdCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUthcmF0c3ViYSh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAobiA8PSAzMCkgcmV0dXJuIG11bHRpcGx5TG9uZyh4LCB5KTtcclxuICAgICAgICBuID0gTWF0aC5jZWlsKG4gLyAyKTtcclxuXHJcbiAgICAgICAgdmFyIGIgPSB4LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBhID0geC5zbGljZSgwLCBuKSxcclxuICAgICAgICAgICAgZCA9IHkuc2xpY2UobiksXHJcbiAgICAgICAgICAgIGMgPSB5LnNsaWNlKDAsIG4pO1xyXG5cclxuICAgICAgICB2YXIgYWMgPSBtdWx0aXBseUthcmF0c3ViYShhLCBjKSxcclxuICAgICAgICAgICAgYmQgPSBtdWx0aXBseUthcmF0c3ViYShiLCBkKSxcclxuICAgICAgICAgICAgYWJjZCA9IG11bHRpcGx5S2FyYXRzdWJhKGFkZEFueShhLCBiKSwgYWRkQW55KGMsIGQpKTtcclxuXHJcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBhZGRBbnkoYWRkQW55KGFjLCBzaGlmdExlZnQoc3VidHJhY3Qoc3VidHJhY3QoYWJjZCwgYWMpLCBiZCksIG4pKSwgc2hpZnRMZWZ0KGJkLCAyICogbikpO1xyXG4gICAgICAgIHRyaW0ocHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gYSBzdXJmYWNlIGZpdCBvZiBhIGdyYXBoIHBsb3R0aW5nIHRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlXHJcbiAgICAvLyBiZXR3ZWVuIGxvbmcgbXVsdGlwbGljYXRpb24gYW5kIGthcmF0c3ViYSBtdWx0aXBsaWNhdGlvbiB2ZXJzdXMgdGhlIGxlbmd0aHMgb2YgdGhlIHR3byBhcnJheXMuXHJcbiAgICBmdW5jdGlvbiB1c2VLYXJhdHN1YmEobDEsIGwyKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wLjAxMiAqIGwxIC0gMC4wMTIgKiBsMiArIDAuMDAwMDE1ICogbDEgKiBsMiA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICBzaWduID0gdGhpcy5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIGFicztcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGEsIGFicyksIHNpZ24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZUthcmF0c3ViYShhLmxlbmd0aCwgYi5sZW5ndGgpKSAvLyBLYXJhdHN1YmEgaXMgb25seSBmYXN0ZXIgZm9yIGNlcnRhaW4gYXJyYXkgc2l6ZXNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5S2FyYXRzdWJhKGEsIGIpLCBzaWduKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGEsIGIpLCBzaWduKTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoYSwgYiwgc2lnbikgeyAvLyBhID49IDBcclxuICAgICAgICBpZiAoYSA8IEJBU0UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5U21hbGwoYiwgYSksIHNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGIsIHNtYWxsVG9BcnJheShhKSksIHNpZ24pO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKGEudmFsdWUgKiB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSksIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAtMSkgcmV0dXJuIHRoaXMubmVnYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpcGx5U21hbGxBbmRBcnJheShNYXRoLmFicyhhLnZhbHVlKSwgdGhpcy52YWx1ZSwgdGhpcy5zaWduICE9PSBhLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpLl9tdWx0aXBseUJ5U21hbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50aW1lcyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAqIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50aW1lcyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3F1YXJlKGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUuYXNzZXJ0KDIgKiBCQVNFICogQkFTRSA8IE1BWF9JTlQpO1xyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsICsgbCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBhX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBhX2kgPSBhW2ldO1xyXG4gICAgICAgICAgICBjYXJyeSA9IDAgLSBhX2kgKiBhX2k7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpOyBqIDwgbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhX2ogPSBhW2pdO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IDIgKiAoYV9pICogYV9qKSArIHJbaSArIGpdICsgY2Fycnk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaSArIGxdID0gY2Fycnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzcXVhcmUodGhpcy52YWx1ZSksIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSAqIHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSkpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSkpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kMShhLCBiKSB7IC8vIExlZnQgb3ZlciBmcm9tIHByZXZpb3VzIHZlcnNpb24uIFBlcmZvcm1zIGZhc3RlciB0aGFuIGRpdk1vZDIgb24gc21hbGxlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gY3JlYXRlQXJyYXkoYi5sZW5ndGgpLFxyXG4gICAgICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBiW2JfbCAtIDFdLFxyXG4gICAgICAgICAgICAvLyBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgICAgIGxhbWJkYSA9IE1hdGguY2VpbChiYXNlIC8gKDIgKiBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpKSxcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gbXVsdGlwbHlTbWFsbChhLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBkaXZpc29yID0gbXVsdGlwbHlTbWFsbChiLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBxdW90aWVudERpZ2l0LCBzaGlmdCwgY2FycnksIGJvcnJvdywgaSwgbCwgcTtcclxuICAgICAgICBpZiAocmVtYWluZGVyLmxlbmd0aCA8PSBhX2wpIHJlbWFpbmRlci5wdXNoKDApO1xyXG4gICAgICAgIGRpdmlzb3IucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBkaXZpc29yW2JfbCAtIDFdO1xyXG4gICAgICAgIGZvciAoc2hpZnQgPSBhX2wgLSBiX2w7IHNoaWZ0ID49IDA7IHNoaWZ0LS0pIHtcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IGJhc2UgLSAxO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAhPT0gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0ID0gTWF0aC5mbG9vcigocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAqIGJhc2UgKyByZW1haW5kZXJbc2hpZnQgKyBiX2wgLSAxXSkgLyBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHF1b3RpZW50RGlnaXQgPD0gYmFzZSAtIDFcclxuICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICBsID0gZGl2aXNvci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ICs9IHF1b3RpZW50RGlnaXQgKiBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgcSA9IE1hdGguZmxvb3IoY2FycnkgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIChjYXJyeSAtIHEgKiBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gcTtcclxuICAgICAgICAgICAgICAgIGlmIChib3Jyb3cgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3cgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvdyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGJvcnJvdztcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChib3Jyb3cgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJyeSArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIGJhc2UgKyBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJyeSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeSArIGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9ycm93ICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdFtzaGlmdF0gPSBxdW90aWVudERpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkZW5vcm1hbGl6YXRpb25cclxuICAgICAgICByZW1haW5kZXIgPSBkaXZNb2RTbWFsbChyZW1haW5kZXIsIGxhbWJkYSlbMF07XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHJlbWFpbmRlcildO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDIoYSwgYikgeyAvLyBJbXBsZW1lbnRhdGlvbiBpZGVhIHNoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIFNpbGVudCBNYXR0J3MgbGlicmFyeSBodHRwOi8vc2lsZW50bWF0dC5jb20vYmlnaW50ZWdlci9cclxuICAgICAgICAvLyBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QxIG9uIGxhcmdlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXN1bHQgPSBbXSxcclxuICAgICAgICAgICAgcGFydCA9IFtdLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgZ3Vlc3MsIHhsZW4sIGhpZ2h4LCBoaWdoeSwgY2hlY2s7XHJcbiAgICAgICAgd2hpbGUgKGFfbCkge1xyXG4gICAgICAgICAgICBwYXJ0LnVuc2hpZnQoYVstLWFfbF0pO1xyXG4gICAgICAgICAgICB0cmltKHBhcnQpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyZUFicyhwYXJ0LCBiKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGxlbiA9IHBhcnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBoaWdoeCA9IHBhcnRbeGxlbiAtIDFdICogYmFzZSArIHBhcnRbeGxlbiAtIDJdO1xyXG4gICAgICAgICAgICBoaWdoeSA9IGJbYl9sIC0gMV0gKiBiYXNlICsgYltiX2wgLSAyXTtcclxuICAgICAgICAgICAgaWYgKHhsZW4gPiBiX2wpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2h4ID0gKGhpZ2h4ICsgMSkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGd1ZXNzID0gTWF0aC5jZWlsKGhpZ2h4IC8gaGlnaHkpO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IG11bHRpcGx5U21hbGwoYiwgZ3Vlc3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMoY2hlY2ssIHBhcnQpIDw9IDApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3MtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZ3Vlc3MpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChndWVzcyk7XHJcbiAgICAgICAgICAgIHBhcnQgPSBzdWJ0cmFjdChwYXJ0LCBjaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHBhcnQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2RTbWFsbCh2YWx1ZSwgbGFtYmRhKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCxcclxuICAgICAgICAgICAgcXVvdGllbnQgPSBjcmVhdGVBcnJheShsZW5ndGgpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgcSwgcmVtYWluZGVyLCBkaXZpc29yO1xyXG4gICAgICAgIHJlbWFpbmRlciA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgZGl2aXNvciA9IHJlbWFpbmRlciAqIGJhc2UgKyB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgcSA9IHRydW5jYXRlKGRpdmlzb3IgLyBsYW1iZGEpO1xyXG4gICAgICAgICAgICByZW1haW5kZXIgPSBkaXZpc29yIC0gcSAqIGxhbWJkYTtcclxuICAgICAgICAgICAgcXVvdGllbnRbaV0gPSBxIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgcmVtYWluZGVyIHwgMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kQW55KHNlbGYsIHYpIHtcclxuICAgICAgICB2YXIgdmFsdWUsIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBOYXRpdmVCaWdJbnQoc2VsZi52YWx1ZSAvIG4udmFsdWUpLCBuZXcgTmF0aXZlQmlnSW50KHNlbGYudmFsdWUgJSBuLnZhbHVlKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gc2VsZi52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgdmFyIHF1b3RpZW50O1xyXG4gICAgICAgIGlmIChiID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGl2aWRlIGJ5IHplcm9cIik7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUoYSAvIGIpKSwgbmV3IFNtYWxsSW50ZWdlcihhICUgYildO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiBbc2VsZiwgSW50ZWdlclswXV07XHJcbiAgICAgICAgICAgIGlmIChiID09IC0xKSByZXR1cm4gW3NlbGYubmVnYXRlKCksIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZFNtYWxsKGEsIGFicyk7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudCA9IGFycmF5VG9TbWFsbCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduKSByZW1haW5kZXIgPSAtcmVtYWluZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNpZ24gIT09IG4uc2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHF1b3RpZW50KSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHNlbGYuc2lnbiAhPT0gbi5zaWduKSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFicyhhLCBiKTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHJldHVybiBbSW50ZWdlcltzZWxmLnNpZ24gPT09IG4uc2lnbiA/IDEgOiAtMV0sIEludGVnZXJbMF1dO1xyXG5cclxuICAgICAgICAvLyBkaXZNb2QxIGlzIGZhc3RlciBvbiBzbWFsbGVyIGlucHV0IHNpemVzXHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICsgYi5sZW5ndGggPD0gMjAwKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZDEoYSwgYik7XHJcbiAgICAgICAgZWxzZSB2YWx1ZSA9IGRpdk1vZDIoYSwgYik7XHJcblxyXG4gICAgICAgIHF1b3RpZW50ID0gdmFsdWVbMF07XHJcbiAgICAgICAgdmFyIHFTaWduID0gc2VsZi5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIG1vZCA9IHZhbHVlWzFdLFxyXG4gICAgICAgICAgICBtU2lnbiA9IHNlbGYuc2lnbjtcclxuICAgICAgICBpZiAodHlwZW9mIHF1b3RpZW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChxU2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHF1b3RpZW50ID0gbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHFTaWduKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1vZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAobVNpZ24pIG1vZCA9IC1tb2Q7XHJcbiAgICAgICAgICAgIG1vZCA9IG5ldyBTbWFsbEludGVnZXIobW9kKTtcclxuICAgICAgICB9IGVsc2UgbW9kID0gbmV3IEJpZ0ludGVnZXIobW9kLCBtU2lnbik7XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgbW9kXTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBkaXZNb2RBbnkodGhpcywgdik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcXVvdGllbnQ6IHJlc3VsdFswXSxcclxuICAgICAgICAgICAgcmVtYWluZGVyOiByZXN1bHRbMV1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZGl2bW9kID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2Q7XHJcblxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIGRpdk1vZEFueSh0aGlzLCB2KVswXTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm92ZXIgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAvIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMV07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2QgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnJlbWFpbmRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAlIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsdWUsIHgsIHk7XHJcbiAgICAgICAgaWYgKGIgPT09IDApIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gMSkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IC0xKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW4uaXNTbWFsbCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV4cG9uZW50IFwiICsgbi50b1N0cmluZygpICsgXCIgaXMgdG9vIGxhcmdlLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUgPSBNYXRoLnBvdyhhLCBiKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih0cnVuY2F0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gdGhpcztcclxuICAgICAgICB5ID0gSW50ZWdlclsxXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoYiAmIDEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSBicmVhaztcclxuICAgICAgICAgICAgYiAvPSAyO1xyXG4gICAgICAgICAgICB4ID0geC5zcXVhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3c7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBfMCA9IEJpZ0ludCgwKSwgXzEgPSBCaWdJbnQoMSksIF8yID0gQmlnSW50KDIpO1xyXG4gICAgICAgIGlmIChiID09PSBfMCkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IF8wKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gXzEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSBCaWdJbnQoLTEpKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkpIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KF8wKTtcclxuICAgICAgICB2YXIgeCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHkgPSBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoYiAmIF8xKSA9PT0gXzEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSBfMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gXzI7XHJcbiAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBmdW5jdGlvbiAoZXhwLCBtb2QpIHtcclxuICAgICAgICBleHAgPSBwYXJzZVZhbHVlKGV4cCk7XHJcbiAgICAgICAgbW9kID0gcGFyc2VWYWx1ZShtb2QpO1xyXG4gICAgICAgIGlmIChtb2QuaXNaZXJvKCkpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0YWtlIG1vZFBvdyB3aXRoIG1vZHVsdXMgMFwiKTtcclxuICAgICAgICB2YXIgciA9IEludGVnZXJbMV0sXHJcbiAgICAgICAgICAgIGJhc2UgPSB0aGlzLm1vZChtb2QpO1xyXG4gICAgICAgIGlmIChleHAuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5tdWx0aXBseShJbnRlZ2VyWy0xXSk7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLm1vZEludihtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoZXhwLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChleHAuaXNPZGQoKSkgciA9IHIubXVsdGlwbHkoYmFzZSkubW9kKG1vZCk7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5kaXZpZGUoMik7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLnNxdWFyZSgpLm1vZChtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZFBvdyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBYnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID4gYi5sZW5ndGggPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gYVtpXSA+IGJbaV0gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gTWF0aC5hYnModGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICBhID0gYSA+PSAwID8gYSA6IC1hO1xyXG4gICAgICAgIGIgPSBiID49IDAgPyBiIDogLWI7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgLy8gU2VlIGRpc2N1c3Npb24gYWJvdXQgY29tcGFyaXNvbiB3aXRoIEluZmluaXR5OlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRlcm9sc29uL0JpZ0ludGVnZXIuanMvaXNzdWVzLzYxXHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5zaWduID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ24gPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpICogKHRoaXMuc2lnbiA/IC0xIDogMSk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIDwgMCA/IC0xIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgPCAwID8gMSA6IC0xO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZVRvID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5lcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgIT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdEVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ndCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDwgMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmx0ID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmx0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPj0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdlcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA8PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVbMF0gJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiBCaWdJbnQoMSkpID09PSBCaWdJbnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIEJpZ0ludCgxKSkgPT09IEJpZ0ludCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPCAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnZhbHVlKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hYnMoKS52YWx1ZSA9PT0gQmlnSW50KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEJpZ0ludCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5pc1VuaXQoKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZUFicygyKSA9PT0gMCkgcmV0dXJuIHRoaXMuaXNFdmVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKG4pLmlzWmVybygpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNCYXNpY1ByaW1lKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHYuYWJzKCk7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5lcXVhbHMoMikgfHwgbi5lcXVhbHMoMykgfHwgbi5lcXVhbHMoNSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmlzRXZlbigpIHx8IG4uaXNEaXZpc2libGVCeSgzKSB8fCBuLmlzRGl2aXNpYmxlQnkoNSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5sZXNzZXIoNDkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgcHJpbWU6IGxldCB0aGUgb3RoZXIgZnVuY3Rpb25zIGZpZ3VyZSBpdCBvdXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaWxsZXJSYWJpblRlc3QobiwgYSkge1xyXG4gICAgICAgIHZhciBuUHJldiA9IG4ucHJldigpLFxyXG4gICAgICAgICAgICBiID0gblByZXYsXHJcbiAgICAgICAgICAgIHIgPSAwLFxyXG4gICAgICAgICAgICBkLCB0LCBpLCB4O1xyXG4gICAgICAgIHdoaWxlIChiLmlzRXZlbigpKSBiID0gYi5kaXZpZGUoMiksIHIrKztcclxuICAgICAgICBuZXh0OiBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5sZXNzZXIoYVtpXSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB4ID0gYmlnSW50KGFbaV0pLm1vZFBvdyhiLCBuKTtcclxuICAgICAgICAgICAgaWYgKHguaXNVbml0KCkgfHwgeC5lcXVhbHMoblByZXYpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChkID0gciAtIDE7IGQgIT0gMDsgZC0tKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5zcXVhcmUoKS5tb2Qobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pc1VuaXQoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguZXF1YWxzKG5QcmV2KSkgY29udGludWUgbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBcInN0cmljdFwiIHRvIHRydWUgdG8gZm9yY2UgR1JILXN1cHBvcnRlZCBsb3dlciBib3VuZCBvZiAyKmxvZyhOKV4yXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gZnVuY3Rpb24gKHN0cmljdCkge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKTtcclxuICAgICAgICB2YXIgYml0cyA9IG4uYml0TGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGJpdHMgPD0gNjQpXHJcbiAgICAgICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzN10pO1xyXG4gICAgICAgIHZhciBsb2dOID0gTWF0aC5sb2coMikgKiBiaXRzLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICB2YXIgdCA9IE1hdGguY2VpbCgoc3RyaWN0ID09PSB0cnVlKSA/ICgyICogTWF0aC5wb3cobG9nTiwgMikpIDogbG9nTik7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50KGkgKyAyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgYSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1ByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBmdW5jdGlvbiAoaXRlcmF0aW9ucywgcm5nKSB7XHJcbiAgICAgICAgdmFyIGlzUHJpbWUgPSBpc0Jhc2ljUHJpbWUodGhpcyk7XHJcbiAgICAgICAgaWYgKGlzUHJpbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzUHJpbWU7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLmFicygpO1xyXG4gICAgICAgIHZhciB0ID0gaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkID8gNSA6IGl0ZXJhdGlvbnM7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50LnJhbmRCZXR3ZWVuKDIsIG4ubWludXMoMiksIHJuZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIGEpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgdCA9IGJpZ0ludC56ZXJvLCBuZXdUID0gYmlnSW50Lm9uZSwgciA9IHBhcnNlVmFsdWUobiksIG5ld1IgPSB0aGlzLmFicygpLCBxLCBsYXN0VCwgbGFzdFI7XHJcbiAgICAgICAgd2hpbGUgKCFuZXdSLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIHEgPSByLmRpdmlkZShuZXdSKTtcclxuICAgICAgICAgICAgbGFzdFQgPSB0O1xyXG4gICAgICAgICAgICBsYXN0UiA9IHI7XHJcbiAgICAgICAgICAgIHQgPSBuZXdUO1xyXG4gICAgICAgICAgICByID0gbmV3UjtcclxuICAgICAgICAgICAgbmV3VCA9IGxhc3RULnN1YnRyYWN0KHEubXVsdGlwbHkobmV3VCkpO1xyXG4gICAgICAgICAgICBuZXdSID0gbGFzdFIuc3VidHJhY3QocS5tdWx0aXBseShuZXdSKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghci5pc1VuaXQoKSkgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSArIFwiIGFuZCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGFyZSBub3QgY28tcHJpbWVcIik7XHJcbiAgICAgICAgaWYgKHQuY29tcGFyZSgwKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdCA9IHQuYWRkKG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQubmVnYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZEludiA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSArIDEgPCBNQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSArIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICsgQmlnSW50KDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwodmFsdWUsIDEsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlIC0gMSA+IC1NQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSAtIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLSBCaWdJbnQoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwb3dlcnNPZlR3byA9IFsxXTtcclxuICAgIHdoaWxlICgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0gPD0gQkFTRSkgcG93ZXJzT2ZUd28ucHVzaCgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0pO1xyXG4gICAgdmFyIHBvd2VyczJMZW5ndGggPSBwb3dlcnNPZlR3by5sZW5ndGgsIGhpZ2hlc3RQb3dlcjIgPSBwb3dlcnNPZlR3b1twb3dlcnMyTGVuZ3RoIC0gMV07XHJcblxyXG4gICAgZnVuY3Rpb24gc2hpZnRfaXNTbWFsbChuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG4pIDw9IEJBU0U7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodikudG9KU051bWJlcigpO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRSaWdodCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tdWx0aXBseShoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgbiAtPSBwb3dlcnMyTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5tdWx0aXBseShwb3dlcnNPZlR3b1tuXSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdExlZnQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVtUXVvO1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPCAwKSByZXR1cm4gdGhpcy5zaGlmdExlZnQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIHdoaWxlIChuID49IHBvd2VyczJMZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSB8fCAocmVzdWx0LmlzTmVnYXRpdmUoKSAmJiByZXN1bHQuaXNVbml0KCkpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIHBvd2Vyc09mVHdvW25dKTtcclxuICAgICAgICByZXR1cm4gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodDtcclxuXHJcbiAgICBmdW5jdGlvbiBiaXR3aXNlKHgsIHksIGZuKSB7XHJcbiAgICAgICAgeSA9IHBhcnNlVmFsdWUoeSk7XHJcbiAgICAgICAgdmFyIHhTaWduID0geC5pc05lZ2F0aXZlKCksIHlTaWduID0geS5pc05lZ2F0aXZlKCk7XHJcbiAgICAgICAgdmFyIHhSZW0gPSB4U2lnbiA/IHgubm90KCkgOiB4LFxyXG4gICAgICAgICAgICB5UmVtID0geVNpZ24gPyB5Lm5vdCgpIDogeTtcclxuICAgICAgICB2YXIgeERpZ2l0ID0gMCwgeURpZ2l0ID0gMDtcclxuICAgICAgICB2YXIgeERpdk1vZCA9IG51bGwsIHlEaXZNb2QgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXhSZW0uaXNaZXJvKCkgfHwgIXlSZW0uaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgeERpdk1vZCA9IGRpdk1vZEFueSh4UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeERpZ2l0ID0geERpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh4U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeERpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB4RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeURpdk1vZCA9IGRpdk1vZEFueSh5UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeURpZ2l0ID0geURpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh5U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeURpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB5RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeFJlbSA9IHhEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHlSZW0gPSB5RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChmbih4RGlnaXQsIHlEaWdpdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3VtID0gZm4oeFNpZ24gPyAxIDogMCwgeVNpZ24gPyAxIDogMCkgIT09IDAgPyBiaWdJbnQoLTEpIDogYmlnSW50KDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuICAgICAgICAgICAgc3VtID0gc3VtLm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpLmFkZChiaWdJbnQocmVzdWx0W2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lZ2F0ZSgpLnByZXYoKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgJiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFuZCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYW5kID0gQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSB8IGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUub3IgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3I7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSBeIGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUueG9yID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3I7XHJcblxyXG4gICAgdmFyIExPQk1BU0tfSSA9IDEgPDwgMzAsIExPQk1BU0tfQkkgPSAoQkFTRSAmIC1CQVNFKSAqIChCQVNFICYgLUJBU0UpIHwgTE9CTUFTS19JO1xyXG4gICAgZnVuY3Rpb24gcm91Z2hMT0IobikgeyAvLyBnZXQgbG93ZXN0T25lQml0IChyb3VnaClcclxuICAgICAgICAvLyBTbWFsbEludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDMwKVxyXG4gICAgICAgIC8vIEJpZ0ludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDE0KSBbQkFTRT0xZTddXHJcbiAgICAgICAgdmFyIHYgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICB4ID0gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgPyB2IHwgTE9CTUFTS19JIDpcclxuICAgICAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcImJpZ2ludFwiID8gdiB8IEJpZ0ludChMT0JNQVNLX0kpIDpcclxuICAgICAgICAgICAgICAgICAgICB2WzBdICsgdlsxXSAqIEJBU0UgfCBMT0JNQVNLX0JJO1xyXG4gICAgICAgIHJldHVybiB4ICYgLXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlLmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZS5zcXVhcmUoYmFzZSkpO1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRtcC5wO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRtcC5lO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHAubXVsdGlwbHkoYmFzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCA/IHsgcDogdCwgZTogZSAqIDIgKyAxIH0gOiB7IHA6IHAsIGU6IGUgKiAyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IGJpZ0ludCgxKSwgZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPCAwKSB7XHJcbiAgICAgICAgICAgIG4gPSBuLm5lZ2F0ZSgpLnN1YnRyYWN0KGJpZ0ludCgxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaWdJbnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdJbnQoaW50ZWdlckxvZ2FyaXRobShuLCBiaWdJbnQoMikpLmUpLmFkZChiaWdJbnQoMSkpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5iaXRMZW5ndGggPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXgoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmdyZWF0ZXIoYikgPyBhIDogYjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbihhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgcmV0dXJuIGEubGVzc2VyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnY2QoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIGlmIChhLmVxdWFscyhiKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgaWYgKGEuaXNaZXJvKCkpIHJldHVybiBiO1xyXG4gICAgICAgIGlmIChiLmlzWmVybygpKSByZXR1cm4gYTtcclxuICAgICAgICB2YXIgYyA9IEludGVnZXJbMV0sIGQsIHQ7XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkgJiYgYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBkID0gbWluKHJvdWdoTE9CKGEpLCByb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYiA9IGIuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBjID0gYy5tdWx0aXBseShkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKHJvdWdoTE9CKGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYiA9IGIuZGl2aWRlKHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5ncmVhdGVyKGIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gYjsgYiA9IGE7IGEgPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBiLnN1YnRyYWN0KGEpO1xyXG4gICAgICAgIH0gd2hpbGUgKCFiLmlzWmVybygpKTtcclxuICAgICAgICByZXR1cm4gYy5pc1VuaXQoKSA/IGEgOiBhLm11bHRpcGx5KGMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGNtKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICByZXR1cm4gYS5kaXZpZGUoZ2NkKGEsIGIpKS5tdWx0aXBseShiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJhbmRCZXR3ZWVuKGEsIGIsIHJuZykge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHZhciB1c2VkUk5HID0gcm5nIHx8IE1hdGgucmFuZG9tO1xyXG4gICAgICAgIHZhciBsb3cgPSBtaW4oYSwgYiksIGhpZ2ggPSBtYXgoYSwgYik7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gaGlnaC5zdWJ0cmFjdChsb3cpLmFkZCgxKTtcclxuICAgICAgICBpZiAocmFuZ2UuaXNTbWFsbCkgcmV0dXJuIGxvdy5hZGQoTWF0aC5mbG9vcih1c2VkUk5HKCkgKiByYW5nZSkpO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSB0b0Jhc2UocmFuZ2UsIEJBU0UpLnZhbHVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSwgcmVzdHJpY3RlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRvcCA9IHJlc3RyaWN0ZWQgPyBkaWdpdHNbaV0gOiBCQVNFO1xyXG4gICAgICAgICAgICB2YXIgZGlnaXQgPSB0cnVuY2F0ZSh1c2VkUk5HKCkgKiB0b3ApO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChkaWdpdCk7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdCA8IHRvcCkgcmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG93LmFkZChJbnRlZ2VyLmZyb21BcnJheShyZXN1bHQsIEJBU0UsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhcnNlQmFzZSA9IGZ1bmN0aW9uICh0ZXh0LCBiYXNlLCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQgfHwgREVGQVVMVF9BTFBIQUJFVDtcclxuICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xyXG4gICAgICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgYWJzQmFzZSA9IE1hdGguYWJzKGJhc2UpO1xyXG4gICAgICAgIHZhciBhbHBoYWJldFZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbHBoYWJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbHBoYWJldFZhbHVlc1thbHBoYWJldFtpXV0gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldO1xyXG4gICAgICAgICAgICBpZiAoYyA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYyBpbiBhbHBoYWJldFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhYmV0VmFsdWVzW2NdID49IGFic0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gXCIxXCIgJiYgYWJzQmFzZSA9PT0gMSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbiBiYXNlIFwiICsgYmFzZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlID0gcGFyc2VWYWx1ZShiYXNlKTtcclxuICAgICAgICB2YXIgZGlnaXRzID0gW107XHJcbiAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSB0ZXh0WzBdID09PSBcIi1cIjtcclxuICAgICAgICBmb3IgKGkgPSBpc05lZ2F0aXZlID8gMSA6IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGMgaW4gYWxwaGFiZXRWYWx1ZXMpIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUoYWxwaGFiZXRWYWx1ZXNbY10pKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGk7XHJcbiAgICAgICAgICAgICAgICBkbyB7IGkrKzsgfSB3aGlsZSAodGV4dFtpXSAhPT0gXCI+XCIgJiYgaSA8IHRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUodGV4dC5zbGljZShzdGFydCArIDEsIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYXJhY3RlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IEludGVnZXJbMF0sIHBvdyA9IEludGVnZXJbMV0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gZGlnaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5hZGQoZGlnaXRzW2ldLnRpbWVzKHBvdykpO1xyXG4gICAgICAgICAgICBwb3cgPSBwb3cudGltZXMoYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc05lZ2F0aXZlID8gdmFsLm5lZ2F0ZSgpIDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeShkaWdpdCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0IHx8IERFRkFVTFRfQUxQSEFCRVQ7XHJcbiAgICAgICAgaWYgKGRpZ2l0IDwgYWxwaGFiZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbHBoYWJldFtkaWdpdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxcIiArIGRpZ2l0ICsgXCI+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICBiYXNlID0gYmlnSW50KGJhc2UpO1xyXG4gICAgICAgIGlmIChiYXNlLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY29udmVydCBub256ZXJvIG51bWJlcnMgdG8gYmFzZSAwLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuZXF1YWxzKC0xKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBBcnJheS5hcHBseShudWxsLCBBcnJheSgtbi50b0pTTnVtYmVyKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMSwgMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBBcnJheS5hcHBseShudWxsLCBBcnJheShuLnRvSlNOdW1iZXIoKSAtIDEpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzAsIDFdKTtcclxuICAgICAgICAgICAgYXJyLnVuc2hpZnQoWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXS5jb25jYXQuYXBwbHkoW10sIGFyciksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5lZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSAmJiBiYXNlLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBuZWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBuID0gbi5hYnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuaXNVbml0KCkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG4udG9KU051bWJlcigpKSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlci5wcm90b3R5cGUudmFsdWVPZiwgMSksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBuZWdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gbiwgZGl2bW9kO1xyXG4gICAgICAgIHdoaWxlIChsZWZ0LmlzTmVnYXRpdmUoKSB8fCBsZWZ0LmNvbXBhcmVBYnMoYmFzZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkaXZtb2QgPSBsZWZ0LmRpdm1vZChiYXNlKTtcclxuICAgICAgICAgICAgbGVmdCA9IGRpdm1vZC5xdW90aWVudDtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gZGl2bW9kLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0LmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZGlnaXQgPSBiYXNlLm1pbnVzKGRpZ2l0KS5hYnMoKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0Lm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChkaWdpdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXQucHVzaChsZWZ0LnRvSlNOdW1iZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG91dC5yZXZlcnNlKCksIGlzTmVnYXRpdmU6IG5lZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZVN0cmluZyhuLCBiYXNlLCBhbHBoYWJldCkge1xyXG4gICAgICAgIHZhciBhcnIgPSB0b0Jhc2UobiwgYmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIChhcnIuaXNOZWdhdGl2ZSA/IFwiLVwiIDogXCJcIikgKyBhcnIudmFsdWUubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnkoeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT09IDEwKSByZXR1cm4gdG9CYXNlU3RyaW5nKHRoaXMsIHJhZGl4LCBhbHBoYWJldCk7XHJcbiAgICAgICAgdmFyIHYgPSB0aGlzLnZhbHVlLCBsID0gdi5sZW5ndGgsIHN0ciA9IFN0cmluZyh2Wy0tbF0pLCB6ZXJvcyA9IFwiMDAwMDAwMFwiLCBkaWdpdDtcclxuICAgICAgICB3aGlsZSAoLS1sID49IDApIHtcclxuICAgICAgICAgICAgZGlnaXQgPSBTdHJpbmcodltsXSk7XHJcbiAgICAgICAgICAgIHN0ciArPSB6ZXJvcy5zbGljZShkaWdpdC5sZW5ndGgpICsgZGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBzaWduICsgc3RyO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJhZGl4LCBhbHBoYWJldCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9KU09OID0gQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b0pTTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZ1ZhbHVlKHYpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKCt2KSkge1xyXG4gICAgICAgICAgICB2YXIgeCA9ICt2O1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdHJ1bmNhdGUoeCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNOYXRpdmVCaWdJbnQgPyBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh4KSkgOiBuZXcgU21hbGxJbnRlZ2VyKHgpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdlswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgaWYgKHNpZ24pIHYgPSB2LnNsaWNlKDEpO1xyXG4gICAgICAgIHZhciBzcGxpdCA9IHYuc3BsaXQoL2UvaSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBzcGxpdC5qb2luKFwiZVwiKSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gc3BsaXRbMV07XHJcbiAgICAgICAgICAgIGlmIChleHBbMF0gPT09IFwiK1wiKSBleHAgPSBleHAuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGV4cCA9ICtleHA7XHJcbiAgICAgICAgICAgIGlmIChleHAgIT09IHRydW5jYXRlKGV4cCkgfHwgIWlzUHJlY2lzZShleHApKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgZXhwICsgXCIgaXMgbm90IGEgdmFsaWQgZXhwb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNwbGl0WzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbFBsYWNlID0gdGV4dC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWxQbGFjZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBleHAgLT0gdGV4dC5sZW5ndGggLSBkZWNpbWFsUGxhY2UgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgZGVjaW1hbFBsYWNlKSArIHRleHQuc2xpY2UoZGVjaW1hbFBsYWNlICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV4cCA8IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbmNsdWRlIG5lZ2F0aXZlIGV4cG9uZW50IHBhcnQgZm9yIGludGVnZXJzXCIpO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IChuZXcgQXJyYXkoZXhwICsgMSkpLmpvaW4oXCIwXCIpO1xyXG4gICAgICAgICAgICB2ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvXihbMC05XVswLTldKikkLy50ZXN0KHYpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQoc2lnbiA/IFwiLVwiICsgdiA6IHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBbXSwgbWF4ID0gdi5sZW5ndGgsIGwgPSBMT0dfQkFTRSwgbWluID0gbWF4IC0gbDtcclxuICAgICAgICB3aGlsZSAobWF4ID4gMCkge1xyXG4gICAgICAgICAgICByLnB1c2goK3Yuc2xpY2UobWluLCBtYXgpKTtcclxuICAgICAgICAgICAgbWluIC09IGw7XHJcbiAgICAgICAgICAgIGlmIChtaW4gPCAwKSBtaW4gPSAwO1xyXG4gICAgICAgICAgICBtYXggLT0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VOdW1iZXJWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzTmF0aXZlQmlnSW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodikpIHtcclxuICAgICAgICAgICAgaWYgKHYgIT09IHRydW5jYXRlKHYpKSB0aHJvdyBuZXcgRXJyb3IodiArIFwiIGlzIG5vdCBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlclZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJiaWdpbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbiAgICAvLyBQcmUtZGVmaW5lIG51bWJlcnMgaW4gcmFuZ2UgWy05OTksOTk5XVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICBJbnRlZ2VyW2ldID0gcGFyc2VWYWx1ZShpKTtcclxuICAgICAgICBpZiAoaSA+IDApIEludGVnZXJbLWldID0gcGFyc2VWYWx1ZSgtaSk7XHJcbiAgICB9XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgSW50ZWdlci5vbmUgPSBJbnRlZ2VyWzFdO1xyXG4gICAgSW50ZWdlci56ZXJvID0gSW50ZWdlclswXTtcclxuICAgIEludGVnZXIubWludXNPbmUgPSBJbnRlZ2VyWy0xXTtcclxuICAgIEludGVnZXIubWF4ID0gbWF4O1xyXG4gICAgSW50ZWdlci5taW4gPSBtaW47XHJcbiAgICBJbnRlZ2VyLmdjZCA9IGdjZDtcclxuICAgIEludGVnZXIubGNtID0gbGNtO1xyXG4gICAgSW50ZWdlci5pc0luc3RhbmNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiBCaWdJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBTbWFsbEludGVnZXIgfHwgeCBpbnN0YW5jZW9mIE5hdGl2ZUJpZ0ludDsgfTtcclxuICAgIEludGVnZXIucmFuZEJldHdlZW4gPSByYW5kQmV0d2VlbjtcclxuXHJcbiAgICBJbnRlZ2VyLmZyb21BcnJheSA9IGZ1bmN0aW9uIChkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cy5tYXAocGFyc2VWYWx1ZSksIHBhcnNlVmFsdWUoYmFzZSB8fCAxMCksIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gSW50ZWdlcjtcclxufSkoKTtcclxuXHJcbi8vIE5vZGUuanMgY2hlY2tcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmhhc093blByb3BlcnR5KFwiZXhwb3J0c1wiKSkge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBiaWdJbnQ7XHJcbn1cclxuXHJcbi8vYW1kIGNoZWNrXHJcbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludDtcclxuICAgIH0pO1xyXG59XHJcbiIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInJnYmNvbG9yXCIpLHJlcXVpcmUoXCJzdGFja2JsdXItY2FudmFzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJnYmNvbG9yXCIsXCJzdGFja2JsdXItY2FudmFzXCJdLGUpOnQuY2Fudmc9ZSh0LlJHQkNvbG9yLHQuU3RhY2tCbHVyKX0odGhpcyxmdW5jdGlvbihtLGQpe1widXNlIHN0cmljdFwiO3ZhciB0O3JldHVybiBtPW0mJm0uaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP20uZGVmYXVsdDptLGQ9ZCYmZC5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/ZC5kZWZhdWx0OmQsZnVuY3Rpb24odCl7dmFyIHU7dC5leHBvcnRzOyh1PXdpbmRvdykuRE9NUGFyc2VyPXdpbmRvdy5ET01QYXJzZXI7ZnVuY3Rpb24gcCgpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpfXZhciBmLGM9ZnVuY3Rpb24odCxlLGkpe2lmKG51bGwhPXR8fG51bGwhPWV8fG51bGwhPWkpe3ZhciBuPWZ1bmN0aW9uKHMpe3ZhciBBPXtvcHRzOnMsRlJBTUVSQVRFOjMwLE1BWF9WSVJUVUFMX1BJWEVMUzozZTQscm9vdEVtU2l6ZToxMixlbVNpemU6MTIsbG9nOmZ1bmN0aW9uKHQpe319OzE9PUEub3B0cy5sb2cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiYoQS5sb2c9ZnVuY3Rpb24odCl7Y29uc29sZS5sb2codCl9KTtBLmluaXQ9ZnVuY3Rpb24odCl7dmFyIGU9MDtBLlVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW52Z1wiKyArK2V9LEEuRGVmaW5pdGlvbnM9e30sQS5TdHlsZXM9e30sQS5TdHlsZXNTcGVjaWZpY2l0eT17fSxBLkFuaW1hdGlvbnM9W10sQS5JbWFnZXM9W10sQS5jdHg9dCxBLlZpZXdQb3J0PW5ldyBmdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdLHRoaXMuQ2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXX0sdGhpcy5TZXRDdXJyZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy52aWV3UG9ydHMucHVzaCh7d2lkdGg6dCxoZWlnaHQ6ZX0pfSx0aGlzLlJlbW92ZUN1cnJlbnQ9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cy5wb3AoKX0sdGhpcy5DdXJyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld1BvcnRzW3RoaXMudmlld1BvcnRzLmxlbmd0aC0xXX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aH0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0fSx0aGlzLkNvbXB1dGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm51bWJlclwiPT10eXBlb2YgdD90OlwieFwiPT10P3RoaXMud2lkdGgoKTpcInlcIj09dD90aGlzLmhlaWdodCgpOk1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoKCksMikrTWF0aC5wb3codGhpcy5oZWlnaHQoKSwyKSkvTWF0aC5zcXJ0KDIpfX19LEEuaW5pdCgpLEEuSW1hZ2VzTG9hZGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDxBLkltYWdlcy5sZW5ndGg7dCsrKWlmKCFBLkltYWdlc1t0XS5sb2FkZWQpcmV0dXJuITE7cmV0dXJuITB9LEEudHJpbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxBLmNvbXByZXNzU3BhY2VzPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSxcIiBcIil9LEEuYWpheD1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4oZT11LlhNTEh0dHBSZXF1ZXN0P25ldyB1LlhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpPyhlLm9wZW4oXCJHRVRcIix0LCExKSxlLnNlbmQobnVsbCksZS5yZXNwb25zZVRleHQpOm51bGx9LEEucGFyc2VYbWw9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdpbmRvd3MmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YSYmdm9pZCAwIT09V2luZG93cy5EYXRhLlhtbCl7dmFyIHQ9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50LGk9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncztyZXR1cm4gaS5wcm9oaWJpdER0ZD0hMSx0LmxvYWRYbWwoZSxpKSx0fWlmKCF1LkRPTVBhcnNlcil7ZT1lLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLFwiXCIpO3ZhciB0PW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtyZXR1cm4gdC5hc3luYz1cImZhbHNlXCIsdC5sb2FkWE1MKGUpLHR9dHJ5e3ZhciBuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyO3JldHVybiBuLnBhcnNlRnJvbVN0cmluZyhlLFwiaW1hZ2Uvc3ZnK3htbFwiKX1jYXRjaCh0KXtyZXR1cm4obj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX19LEEuUHJvcGVydHk9ZnVuY3Rpb24odCxlKXt0aGlzLm5hbWU9dCx0aGlzLnZhbHVlPWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMudmFsdWUmJlwiXCIhPT10aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZT1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9cGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtyZXR1cm4odGhpcy52YWx1ZStcIlwiKS5tYXRjaCgvJSQvKSYmKHQvPTEwMCksdH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLnZhbHVlOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy5udW1WYWx1ZSgpOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLmFkZE9wYWNpdHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZTtpZihudWxsIT10LnZhbHVlJiZcIlwiIT10LnZhbHVlJiZcInN0cmluZ1wiPT10eXBlb2YgdGhpcy52YWx1ZSl7dmFyIGk9bmV3IG0odGhpcy52YWx1ZSk7aS5vayYmKGU9XCJyZ2JhKFwiK2kucitcIiwgXCIraS5nK1wiLCBcIitpLmIrXCIsIFwiK3QubnVtVmFsdWUoKStcIilcIil9cmV0dXJuIG5ldyBBLlByb3BlcnR5KHRoaXMubmFtZSxlKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RGVmaW5pdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtyZXR1cm4gdCYmKHQ9dFsxXSksdHx8KHQ9dGhpcy52YWx1ZSksQS5EZWZpbml0aW9uc1t0XX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNVcmxEZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudmFsdWUuaW5kZXhPZihcInVybChcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEZpbGxTdHlsZURlZmluaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldERlZmluaXRpb24oKTtpZihudWxsIT1pJiZpLmNyZWF0ZUdyYWRpZW50KXJldHVybiBpLmNyZWF0ZUdyYWRpZW50KEEuY3R4LHQsZSk7aWYobnVsbCE9aSYmaS5jcmVhdGVQYXR0ZXJuKXtpZihpLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKXt2YXIgbj1pLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIik7aT1pLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksbi5oYXNWYWx1ZSgpJiYoaS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIsITApLnZhbHVlPW4udmFsdWUpfXJldHVybiBpLmNyZWF0ZVBhdHRlcm4oQS5jdHgsdCl9cmV0dXJuIG51bGx9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERQST1mdW5jdGlvbih0KXtyZXR1cm4gOTZ9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFJFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5yb290RW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5lbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0LnJlcGxhY2UoL1swLTlcXC5cXC1dL2csXCJcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmlzUGl4ZWxzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4hMTt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuISF0Lm1hdGNoKC9weCQvKXx8ISF0Lm1hdGNoKC9eWzAtOV0rJC8pfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1BpeGVscz1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIGk9dGhpcy52YWx1ZStcIlwiO2lmKGkubWF0Y2goL3JlbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0UkVNKHQpO2lmKGkubWF0Y2goL2VtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KTtpZihpLm1hdGNoKC9leCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCkvMjtpZihpLm1hdGNoKC9weCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL3B0JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkqKDEvNzIpO2lmKGkubWF0Y2goL3BjJC8pKXJldHVybiAxNSp0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvY20kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yLjU0O2lmKGkubWF0Y2goL21tJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMjUuNDtpZihpLm1hdGNoKC9pbiQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpO2lmKGkubWF0Y2goLyUkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSpBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpO3ZhciBuPXRoaXMubnVtVmFsdWUoKTtyZXR1cm4gZSYmbjwxP24qQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTpufSxBLlByb3BlcnR5LnByb3RvdHlwZS50b01pbGxpc2Vjb25kcz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9zJC8pPzFlMyp0aGlzLm51bVZhbHVlKCk6KHQubWF0Y2goL21zJC8pLHRoaXMubnVtVmFsdWUoKSl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUmFkaWFucz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9kZWckLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCk6dC5tYXRjaCgvZ3JhZCQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMjAwKTp0Lm1hdGNoKC9yYWQkLyk/dGhpcy5udW1WYWx1ZSgpOnRoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApfTt2YXIgdD17YmFzZWxpbmU6XCJhbHBoYWJldGljXCIsXCJiZWZvcmUtZWRnZVwiOlwidG9wXCIsXCJ0ZXh0LWJlZm9yZS1lZGdlXCI6XCJ0b3BcIixtaWRkbGU6XCJtaWRkbGVcIixjZW50cmFsOlwibWlkZGxlXCIsXCJhZnRlci1lZGdlXCI6XCJib3R0b21cIixcInRleHQtYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsaWRlb2dyYXBoaWM6XCJpZGVvZ3JhcGhpY1wiLGFscGhhYmV0aWM6XCJhbHBoYWJldGljXCIsaGFuZ2luZzpcImhhbmdpbmdcIixtYXRoZW1hdGljYWw6XCJhbHBoYWJldGljXCJ9O3JldHVybiBBLlByb3BlcnR5LnByb3RvdHlwZS50b1RleHRCYXNlbGluZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dFt0aGlzLnZhbHVlXTpudWxsfSxBLkZvbnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy5TdHlsZXM9XCJub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdFwiLHRoaXMuVmFyaWFudHM9XCJub3JtYWx8c21hbGwtY2Fwc3xpbmhlcml0XCIsdGhpcy5XZWlnaHRzPVwibm9ybWFsfGJvbGR8Ym9sZGVyfGxpZ2h0ZXJ8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8aW5oZXJpdFwiLHRoaXMuQ3JlYXRlRm9udD1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9bnVsbCE9YT90aGlzLlBhcnNlKGEpOnRoaXMuQ3JlYXRlRm9udChcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsQS5jdHguZm9udCk7cmV0dXJue2ZvbnRGYW1pbHk6cz1zfHxyLmZvbnRGYW1pbHksZm9udFNpemU6bnx8ci5mb250U2l6ZSxmb250U3R5bGU6dHx8ci5mb250U3R5bGUsZm9udFdlaWdodDppfHxyLmZvbnRXZWlnaHQsZm9udFZhcmlhbnQ6ZXx8ci5mb250VmFyaWFudCx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblt0aGlzLmZvbnRTdHlsZSx0aGlzLmZvbnRWYXJpYW50LHRoaXMuZm9udFdlaWdodCx0aGlzLmZvbnRTaXplLHRoaXMuZm9udEZhbWlseV0uam9pbihcIiBcIil9fX07dmFyIHI9dGhpczt0aGlzLlBhcnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHR8fFwiXCIpKS5zcGxpdChcIiBcIiksbj17Zm9udFNpemU6ITEsZm9udFN0eWxlOiExLGZvbnRXZWlnaHQ6ITEsZm9udFZhcmlhbnQ6ITF9LHM9XCJcIixhPTA7YTxpLmxlbmd0aDthKyspbi5mb250U3R5bGV8fC0xPT1yLlN0eWxlcy5pbmRleE9mKGlbYV0pP24uZm9udFZhcmlhbnR8fC0xPT1yLlZhcmlhbnRzLmluZGV4T2YoaVthXSk/bi5mb250V2VpZ2h0fHwtMT09ci5XZWlnaHRzLmluZGV4T2YoaVthXSk/bi5mb250U2l6ZT9cImluaGVyaXRcIiE9aVthXSYmKHMrPWlbYV0pOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFNpemU9aVthXS5zcGxpdChcIi9cIilbMF0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PW4uZm9udFNpemU9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFdlaWdodD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250VmFyaWFudD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTdHlsZT1pW2FdKSxuLmZvbnRTdHlsZT0hMCk7cmV0dXJuXCJcIiE9cyYmKGUuZm9udEZhbWlseT1zKSxlfX0sQS5Ub051bWJlckFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcygodHx8XCJcIikucmVwbGFjZSgvLC9nLFwiIFwiKSkpLnNwbGl0KFwiIFwiKSxpPTA7aTxlLmxlbmd0aDtpKyspZVtpXT1wYXJzZUZsb2F0KGVbaV0pO3JldHVybiBlfSxBLlBvaW50PWZ1bmN0aW9uKHQsZSl7dGhpcy54PXQsdGhpcy55PWV9LEEuUG9pbnQucHJvdG90eXBlLmFuZ2xlVG89ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYXRhbjIodC55LXRoaXMueSx0LngtdGhpcy54KX0sQS5Qb2ludC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy54KnRbMF0rdGhpcy55KnRbMl0rdFs0XSxpPXRoaXMueCp0WzFdK3RoaXMueSp0WzNdK3RbNV07dGhpcy54PWUsdGhpcy55PWl9LEEuQ3JlYXRlUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3JldHVybiBuZXcgQS5Qb2ludChlWzBdLGVbMV0pfSxBLkNyZWF0ZVBhdGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEuVG9OdW1iZXJBcnJheSh0KSxpPVtdLG49MDtuPGUubGVuZ3RoO24rPTIpaS5wdXNoKG5ldyBBLlBvaW50KGVbbl0sZVtuKzFdKSk7cmV0dXJuIGl9LEEuQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dGhpcy54MT1OdW1iZXIuTmFOLHRoaXMueTE9TnVtYmVyLk5hTix0aGlzLngyPU51bWJlci5OYU4sdGhpcy55Mj1OdW1iZXIuTmFOLHRoaXMueD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngxfSx0aGlzLnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55MX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngyLXRoaXMueDF9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTItdGhpcy55MX0sdGhpcy5hZGRQb2ludD1mdW5jdGlvbih0LGUpe251bGwhPXQmJigoaXNOYU4odGhpcy54MSl8fGlzTmFOKHRoaXMueDIpKSYmKHRoaXMueDE9dCx0aGlzLngyPXQpLHQ8dGhpcy54MSYmKHRoaXMueDE9dCksdD50aGlzLngyJiYodGhpcy54Mj10KSksbnVsbCE9ZSYmKChpc05hTih0aGlzLnkxKXx8aXNOYU4odGhpcy55MikpJiYodGhpcy55MT1lLHRoaXMueTI9ZSksZTx0aGlzLnkxJiYodGhpcy55MT1lKSxlPnRoaXMueTImJih0aGlzLnkyPWUpKX0sdGhpcy5hZGRYPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodCxudWxsKX0sdGhpcy5hZGRZPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQobnVsbCx0KX0sdGhpcy5hZGRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQueDEsdC55MSksdGhpcy5hZGRQb2ludCh0LngyLHQueTIpfSx0aGlzLmFkZFF1YWRyYXRpY0N1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj10KzIvMyooaS10KSxvPWUrMi8zKihuLWUpLGw9cisxLzMqKHMtdCksaD1vKzEvMyooYS1lKTt0aGlzLmFkZEJlemllckN1cnZlKHQsZSxyLGwsbyxoLHMsYSl9LHRoaXMuYWRkQmV6aWVyQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEscixvKXt2YXIgbD1bdCxlXSxoPVtpLG5dLHU9W3MsYV0sYz1bcixvXTt0aGlzLmFkZFBvaW50KGxbMF0sbFsxXSksdGhpcy5hZGRQb2ludChjWzBdLGNbMV0pO2Zvcih2YXIgZj0wO2Y8PTE7ZisrKXt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5wb3coMS10LDMpKmxbZl0rMypNYXRoLnBvdygxLXQsMikqdCpoW2ZdKzMqKDEtdCkqTWF0aC5wb3codCwyKSp1W2ZdK01hdGgucG93KHQsMykqY1tmXX0scD02KmxbZl0tMTIqaFtmXSs2KnVbZl0sZD0tMypsW2ZdKzkqaFtmXS05KnVbZl0rMypjW2ZdLHk9MypoW2ZdLTMqbFtmXTtpZigwIT1kKXt2YXIgdj1NYXRoLnBvdyhwLDIpLTQqeSpkO2lmKCEodjwwKSl7dmFyIGc9KC1wK01hdGguc3FydCh2KSkvKDIqZCk7MDxnJiZnPDEmJigwPT1mJiZ0aGlzLmFkZFgobShnKSksMT09ZiYmdGhpcy5hZGRZKG0oZykpKTt2YXIgeD0oLXAtTWF0aC5zcXJ0KHYpKS8oMipkKTswPHgmJng8MSYmKDA9PWYmJnRoaXMuYWRkWChtKHgpKSwxPT1mJiZ0aGlzLmFkZFkobSh4KSkpfX1lbHNle2lmKDA9PXApY29udGludWU7dmFyIGI9LXkvcDswPGImJmI8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGIpKSwxPT1mJiZ0aGlzLmFkZFkobShiKSkpfX19LHRoaXMuaXNQb2ludEluQm94PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMueDE8PXQmJnQ8PXRoaXMueDImJnRoaXMueTE8PWUmJmU8PXRoaXMueTJ9LHRoaXMuYWRkUG9pbnQodCxlKSx0aGlzLmFkZFBvaW50KGksbil9LEEuVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5UeXBlPXt9LHRoaXMuVHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLnAueHx8MCx0aGlzLnAueXx8MCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSgtMSp0aGlzLnAueHx8MCwtMSp0aGlzLnAueXx8MCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5yb3RhdGU9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3RoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLGVbMF0pLHRoaXMuY3g9ZVsxXXx8MCx0aGlzLmN5PWVbMl18fDAsdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUoLTEqdGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFuZ2xlLnRvUmFkaWFucygpO3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKSx0LmFwcGx5VHJhbnNmb3JtKFtNYXRoLmNvcyhlKSxNYXRoLnNpbihlKSwtTWF0aC5zaW4oZSksTWF0aC5jb3MoZSksMCwwXSksdC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSwtdGhpcy5wLnh8fDAsLXRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUuc2NhbGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKHRoaXMucC54fHwxLHRoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKDEvdGhpcy5wLnh8fDEsMS90aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFt0aGlzLnAueHx8MCwwLDAsdGhpcy5wLnl8fDAsMCwwXSl9fSx0aGlzLlR5cGUubWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMubT1BLlRvTnVtYmVyQXJyYXkodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zZm9ybSh0aGlzLm1bMF0sdGhpcy5tWzFdLHRoaXMubVsyXSx0aGlzLm1bM10sdGhpcy5tWzRdLHRoaXMubVs1XSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm1bMF0saT10aGlzLm1bMl0sbj10aGlzLm1bNF0scz10aGlzLm1bMV0sYT10aGlzLm1bM10scj10aGlzLm1bNV0sbz0xLyhlKigxKmEtMCpyKS1pKigxKnMtMCpyKStuKigwKnMtMCphKSk7dC50cmFuc2Zvcm0obyooMSphLTAqciksbyooMCpyLTEqcyksbyooMCpuLTEqaSksbyooMSplLTAqbiksbyooaSpyLW4qYSksbyoobipzLWUqcikpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKHRoaXMubSl9fSx0aGlzLlR5cGUuU2tld0Jhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5tYXRyaXgsdGhpcy5iYXNlKHQpLHRoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLHQpfSx0aGlzLlR5cGUuU2tld0Jhc2UucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUubWF0cml4LHRoaXMuVHlwZS5za2V3WD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsMCxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwxLDAsMF19LHRoaXMuVHlwZS5za2V3WC5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLlR5cGUuc2tld1k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDAsMSwwLDBdfSx0aGlzLlR5cGUuc2tld1kucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy50cmFuc2Zvcm1zPVtdLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHkodCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cmFuc2Zvcm1zLmxlbmd0aC0xOzA8PWU7ZS0tKXRoaXMudHJhbnNmb3Jtc1tlXS51bmFwcGx5KHQpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseVRvUG9pbnQodCl9O2Zvcih2YXIgaT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0KSkucmVwbGFjZSgvXFwpKFthLXpBLVpdKS9nLFwiKSAkMVwiKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLFwiKSBcIikuc3BsaXQoL1xccyg/PVthLXpdKS8pLG49MDtuPGkubGVuZ3RoO24rKylpZihcIm5vbmVcIiE9PWlbbl0pe3ZhciBzPUEudHJpbShpW25dLnNwbGl0KFwiKFwiKVswXSksYT1pW25dLnNwbGl0KFwiKFwiKVsxXS5yZXBsYWNlKFwiKVwiLFwiXCIpLHI9dGhpcy5UeXBlW3NdO2lmKHZvaWQgMCE9PXIpe3ZhciBvPW5ldyByKGEpO28udHlwZT1zLHRoaXMudHJhbnNmb3Jtcy5wdXNoKG8pfX19LEEuQXNwZWN0UmF0aW89ZnVuY3Rpb24odCxlLGksbixzLGEscixvLGwsaCl7dmFyIHU9KGU9KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkucmVwbGFjZSgvXmRlZmVyXFxzLyxcIlwiKSkuc3BsaXQoXCIgXCIpWzBdfHxcInhNaWRZTWlkXCIsYz1lLnNwbGl0KFwiIFwiKVsxXXx8XCJtZWV0XCIsZj1pL24sbT1zL2EscD1NYXRoLm1pbihmLG0pLGQ9TWF0aC5tYXgoZixtKTtcIm1lZXRcIj09YyYmKG4qPXAsYSo9cCksXCJzbGljZVwiPT1jJiYobio9ZCxhKj1kKSxsPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLGwpLGg9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsaCksbC5oYXNWYWx1ZSgpJiZoLmhhc1ZhbHVlKCk/dC50cmFuc2xhdGUoLXAqbC50b1BpeGVscyhcInhcIiksLXAqaC50b1BpeGVscyhcInlcIikpOih1Lm1hdGNoKC9eeE1pZC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGkvMi1uLzIsMCksdS5tYXRjaCgvWU1pZCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMvMi1hLzIpLHUubWF0Y2goL154TWF4LykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS1uLDApLHUubWF0Y2goL1lNYXgkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLWEpKSxcIm5vbmVcIj09dT90LnNjYWxlKGYsbSk6XCJtZWV0XCI9PWM/dC5zY2FsZShwLHApOlwic2xpY2VcIj09YyYmdC5zY2FsZShkLGQpLHQudHJhbnNsYXRlKG51bGw9PXI/MDotcixudWxsPT1vPzA6LW8pfSxBLkVsZW1lbnQ9e30sQS5FbXB0eVByb3BlcnR5PW5ldyBBLlByb3BlcnR5KFwiRU1QVFlcIixcIlwiKSxBLkVsZW1lbnQuRWxlbWVudEJhc2U9ZnVuY3Rpb24oYSl7dGhpcy5hdHRyaWJ1dGVzPXt9LHRoaXMuc3R5bGVzPXt9LHRoaXMuc3R5bGVzU3BlY2lmaWNpdHk9e30sdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gbnVsbCE9aT9pOigxPT1lJiYoaT1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuYXR0cmlidXRlc1t0XT1pKSxpfHxBLkVtcHR5UHJvcGVydHkpfSx0aGlzLmdldEhyZWZBdHRyaWJ1dGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5hdHRyaWJ1dGVzKWlmKFwiaHJlZlwiPT10fHx0Lm1hdGNoKC86aHJlZiQvKSlyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBBLkVtcHR5UHJvcGVydHl9LHRoaXMuc3R5bGU9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGVzW3RdO2lmKG51bGwhPW4pcmV0dXJuIG47dmFyIHM9dGhpcy5hdHRyaWJ1dGUodCk7aWYobnVsbCE9cyYmcy5oYXNWYWx1ZSgpKXJldHVybiB0aGlzLnN0eWxlc1t0XT1zO2lmKDEhPWkpe3ZhciBhPXRoaXMucGFyZW50O2lmKG51bGwhPWEpe3ZhciByPWEuc3R5bGUodCk7aWYobnVsbCE9ciYmci5oYXNWYWx1ZSgpKXJldHVybiByfX1yZXR1cm4gMT09ZSYmKG49bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLnN0eWxlc1t0XT1uKSxufHxBLkVtcHR5UHJvcGVydHl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe2lmKFwibm9uZVwiIT10aGlzLnN0eWxlKFwiZGlzcGxheVwiKS52YWx1ZSYmXCJoaWRkZW5cIiE9dGhpcy5zdHlsZShcInZpc2liaWxpdHlcIikudmFsdWUpe2lmKHQuc2F2ZSgpLHRoaXMuc3R5bGUoXCJtYXNrXCIpLmhhc1ZhbHVlKCkpe3ZhciBlPXRoaXMuc3R5bGUoXCJtYXNrXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1lJiZlLmFwcGx5KHQsdGhpcyl9ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmhhc1ZhbHVlKCkpe3ZhciBpPXRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWkmJmkuYXBwbHkodCx0aGlzKX1lbHNlIHRoaXMuc2V0Q29udGV4dCh0KSx0aGlzLnJlbmRlckNoaWxkcmVuKHQpLHRoaXMuY2xlYXJDb250ZXh0KHQpO3QucmVzdG9yZSgpfX0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMuY2hpbGRyZW5bZV0ucmVuZGVyKHQpfSx0aGlzLmFkZENoaWxkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dDtlJiYoaT1BLkNyZWF0ZUVsZW1lbnQodCkpLGkucGFyZW50PXRoaXMsXCJ0aXRsZVwiIT1pLnR5cGUmJnRoaXMuY2hpbGRyZW4ucHVzaChpKX0sdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIEEuU3R5bGVzKWlmKFwiQFwiIT10WzBdJiZmKGEsdCkpe3ZhciBlPUEuU3R5bGVzW3RdLGk9QS5TdHlsZXNTcGVjaWZpY2l0eVt0XTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKXt2YXIgcz10aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dO3ZvaWQgMD09PXMmJihzPVwiMDAwXCIpLHM8aSYmKHRoaXMuc3R5bGVzW25dPWVbbl0sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXT1pKX19fTt2YXIgdCxlPW5ldyBSZWdFeHAoXCJeW0EtWi1dKyRcIik7aWYobnVsbCE9YSYmMT09YS5ub2RlVHlwZSl7Zm9yKHZhciBpPTA7aTxhLmF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7dmFyIG49YS5hdHRyaWJ1dGVzW2ldLHM9KHQ9bi5ub2RlTmFtZSxlLnRlc3QodCk/dC50b0xvd2VyQ2FzZSgpOnQpO3RoaXMuYXR0cmlidXRlc1tzXT1uZXcgQS5Qcm9wZXJ0eShzLG4udmFsdWUpfWlmKHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpLHRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikuaGFzVmFsdWUoKSl7dmFyIHI9dGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS52YWx1ZS5zcGxpdChcIjtcIik7Zm9yKGk9MDtpPHIubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0ocltpXSkpe3ZhciBvPXJbaV0uc3BsaXQoXCI6XCIpLGw9QS50cmltKG9bMF0pLGg9QS50cmltKG9bMV0pO3RoaXMuc3R5bGVzW2xdPW5ldyBBLlByb3BlcnR5KGwsaCl9fWZvcih0aGlzLmF0dHJpYnV0ZShcImlkXCIpLmhhc1ZhbHVlKCkmJm51bGw9PUEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV0mJihBLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdPXRoaXMpLGk9MDtpPGEuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKXt2YXIgdT1hLmNoaWxkTm9kZXNbaV07aWYoMT09dS5ub2RlVHlwZSYmdGhpcy5hZGRDaGlsZCh1LCEwKSx0aGlzLmNhcHR1cmVUZXh0Tm9kZXMmJigzPT11Lm5vZGVUeXBlfHw0PT11Lm5vZGVUeXBlKSl7dmFyIGM9dS52YWx1ZXx8dS50ZXh0fHx1LnRleHRDb250ZW50fHxcIlwiO1wiXCIhPUEuY29tcHJlc3NTcGFjZXMoYykmJnRoaXMuYWRkQ2hpbGQobmV3IEEuRWxlbWVudC50c3Bhbih1KSwhMSl9fX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY3VsYXRlT3BhY2l0eT1mdW5jdGlvbigpe2Zvcih2YXIgdD0xLGU9dGhpcztudWxsIT1lOyl7dmFyIGk9ZS5zdHlsZShcIm9wYWNpdHlcIiwhMSwhMCk7aS5oYXNWYWx1ZSgpJiYodCo9aS5udW1WYWx1ZSgpKSxlPWUucGFyZW50fXJldHVybiB0fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCxlKXtpZighZSl7dmFyIGk7aWYodGhpcy5zdHlsZShcImZpbGxcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcImZpbGxcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpKSYmKHQuZmlsbFN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcImZpbGxcIikuaGFzVmFsdWUoKSl7dmFyIG47XCJjdXJyZW50Q29sb3JcIj09KG49dGhpcy5zdHlsZShcImZpbGxcIikpLnZhbHVlJiYobi52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1uLnZhbHVlJiYodC5maWxsU3R5bGU9XCJub25lXCI9PW4udmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6bi52YWx1ZSl9aWYodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYobj0obj1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0LmZpbGxTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSksdC5maWxsU3R5bGU9bi52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZVwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpKSYmKHQuc3Ryb2tlU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmhhc1ZhbHVlKCkpe3ZhciBzO1wiY3VycmVudENvbG9yXCI9PShzPXRoaXMuc3R5bGUoXCJzdHJva2VcIikpLnZhbHVlJiYocy52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1zLnZhbHVlJiYodC5zdHJva2VTdHlsZT1cIm5vbmVcIj09cy52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpzLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKHM9KHM9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0LnN0cm9rZVN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpLHQuc3Ryb2tlU3R5bGU9cy52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS5oYXNWYWx1ZSgpKXt2YXIgYT10aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLnRvUGl4ZWxzKCk7dC5saW5lV2lkdGg9MD09YT8uMDAxOmF9aWYodGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVDYXA9dGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVKb2luPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS5oYXNWYWx1ZSgpJiYodC5taXRlckxpbWl0PXRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLmhhc1ZhbHVlKCkmJih0LnBhaW50T3JkZXI9dGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS5oYXNWYWx1ZSgpJiZcIm5vbmVcIiE9dGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSk7dm9pZCAwIT09dC5zZXRMaW5lRGFzaD90LnNldExpbmVEYXNoKHIpOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2g/dC53ZWJraXRMaW5lRGFzaD1yOnZvaWQgMD09PXQubW96RGFzaHx8MT09ci5sZW5ndGgmJjA9PXJbMF18fCh0Lm1vekRhc2g9cik7dmFyIG89dGhpcy5zdHlsZShcInN0cm9rZS1kYXNob2Zmc2V0XCIpLnRvUGl4ZWxzKCk7dm9pZCAwIT09dC5saW5lRGFzaE9mZnNldD90LmxpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaE9mZnNldD90LndlYmtpdExpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC5tb3pEYXNoT2Zmc2V0JiYodC5tb3pEYXNoT2Zmc2V0PW8pfX1pZih2b2lkIDAhPT10LmZvbnQpe3QuZm9udD1BLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC12YXJpYW50XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXdlaWdodFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLmhhc1ZhbHVlKCk/dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS50b1BpeGVscygpK1wicHhcIjpcIlwiLHRoaXMuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZSkudG9TdHJpbmcoKTt2YXIgbD10aGlzLnN0eWxlKFwiZm9udC1zaXplXCIsITEsITEpO2wuaXNQaXhlbHMoKSYmKEEuZW1TaXplPWwudG9QaXhlbHMoKSl9aWYodGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiZuZXcgQS5UcmFuc2Zvcm0odGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkuYXBwbHkodCksdGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5oYXNWYWx1ZSgpKXt2YXIgaD10aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmdldERlZmluaXRpb24oKTtudWxsIT1oJiZoLmFwcGx5KHQpfXQuZ2xvYmFsQWxwaGE9dGhpcy5jYWxjdWxhdGVPcGFjaXR5KCl9fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZ0LmJlZ2luUGF0aCgpLG5ldyBBLkJvdW5kaW5nQm94fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMucGF0aCh0KSxBLk1vdXNlLmNoZWNrUGF0aCh0aGlzLHQpLFwiXCIhPXQuZmlsbFN0eWxlJiYoXCJpbmhlcml0XCIhPXRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWVPckRlZmF1bHQoXCJpbmhlcml0XCIpP3QuZmlsbCh0aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlKTp0LmZpbGwoKSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2UoKTt2YXIgZT10aGlzLmdldE1hcmtlcnMoKTtpZihudWxsIT1lKXtpZih0aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVswXVswXSxlWzBdWzFdKSx0aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5pc1VybERlZmluaXRpb24oKSlmb3IodmFyIGk9dGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuZ2V0RGVmaW5pdGlvbigpLG49MTtuPGUubGVuZ3RoLTE7bisrKWkucmVuZGVyKHQsZVtuXVswXSxlW25dWzFdKTt0aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlW2UubGVuZ3RoLTFdWzBdLGVbZS5sZW5ndGgtMV1bMV0pfX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGgoKX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN2Zz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZUNsZWFyQ29udGV4dD10aGlzLmNsZWFyQ29udGV4dCx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VDbGVhckNvbnRleHQodCksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCl9LHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXtpZih0LnN0cm9rZVN0eWxlPVwicmdiYSgwLDAsMCwwKVwiLHQubGluZUNhcD1cImJ1dHRcIix0LmxpbmVKb2luPVwibWl0ZXJcIix0Lm1pdGVyTGltaXQ9NCx0LmNhbnZhcy5zdHlsZSYmdm9pZCAwIT09dC5mb250JiZ2b2lkIDAhPT11LmdldENvbXB1dGVkU3R5bGUpe3QuZm9udD11LmdldENvbXB1dGVkU3R5bGUodC5jYW52YXMpLmdldFByb3BlcnR5VmFsdWUoXCJmb250XCIpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UodC5mb250KS5mb250U2l6ZSk7ZS5oYXNWYWx1ZSgpJiYoQS5yb290RW1TaXplPUEuZW1TaXplPWUudG9QaXhlbHMoXCJ5XCIpKX10aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPTApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPTApLHQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIGk9QS5WaWV3UG9ydC53aWR0aCgpLG49QS5WaWV3UG9ydC5oZWlnaHQoKTtpZih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPVwiMTAwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHZvaWQgMD09PXRoaXMucm9vdCl7aT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTt2YXIgcz0wLGE9MDt0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLmhhc1ZhbHVlKCkmJihzPS10aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudG9QaXhlbHMoXCJ4XCIpLGE9LXRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS50b1BpeGVscyhcInlcIikpLFwidmlzaWJsZVwiIT10aGlzLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlT3JEZWZhdWx0KFwiaGlkZGVuXCIpJiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzLGEpLHQubGluZVRvKGksYSksdC5saW5lVG8oaSxuKSx0LmxpbmVUbyhzLG4pLHQuY2xvc2VQYXRoKCksdC5jbGlwKCkpfWlmKEEuVmlld1BvcnQuU2V0Q3VycmVudChpLG4pLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS5oYXNWYWx1ZSgpKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxvPXJbMF0sbD1yWzFdO2k9clsyXSxuPXJbM10sQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxBLlZpZXdQb3J0LndpZHRoKCksaSxBLlZpZXdQb3J0LmhlaWdodCgpLG4sbyxsLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSx0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpLEEuVmlld1BvcnQuU2V0Q3VycmVudChyWzJdLHJbM10pfX19LEEuRWxlbWVudC5zdmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQucmVjdD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxyPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpO2lmKHRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmKHI9YSksdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYoYT1yKSxhPU1hdGgubWluKGEsbi8yKSxyPU1hdGgubWluKHIscy8yKSxudWxsIT10KXt2YXIgbz0oTWF0aC5zcXJ0KDIpLTEpLzMqNDt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrYSxpKSx0LmxpbmVUbyhlK24tYSxpKSx0LmJlemllckN1cnZlVG8oZStuLWErbyphLGksZStuLGkrci1vKnIsZStuLGkrciksdC5saW5lVG8oZStuLGkrcy1yKSx0LmJlemllckN1cnZlVG8oZStuLGkrcy1yK28qcixlK24tYStvKmEsaStzLGUrbi1hLGkrcyksdC5saW5lVG8oZSthLGkrcyksdC5iZXppZXJDdXJ2ZVRvKGUrYS1vKmEsaStzLGUsaStzLXIrbypyLGUsaStzLXIpLHQubGluZVRvKGUsaStyKSx0LmJlemllckN1cnZlVG8oZSxpK3ItbypyLGUrYS1vKmEsaSxlK2EsaSksdC5jbG9zZVBhdGgoKX1yZXR1cm4gbmV3IEEuQm91bmRpbmdCb3goZSxpLGUrbixpK3MpfX0sQS5FbGVtZW50LnJlY3QucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5jaXJjbGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQuYXJjKGUsaSxuLDAsMipNYXRoLlBJLCExKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChlLW4saS1uLGUrbixpK24pfX0sQS5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmVsbGlwc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT0oTWF0aC5zcXJ0KDIpLTEpLzMqNCxpPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzK2ksYSksdC5iZXppZXJDdXJ2ZVRvKHMraSxhK2UqbixzK2UqaSxhK24scyxhK24pLHQuYmV6aWVyQ3VydmVUbyhzLWUqaSxhK24scy1pLGErZSpuLHMtaSxhKSx0LmJlemllckN1cnZlVG8ocy1pLGEtZSpuLHMtZSppLGEtbixzLGEtbiksdC5iZXppZXJDdXJ2ZVRvKHMrZSppLGEtbixzK2ksYS1lKm4scytpLGEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KHMtaSxhLW4scytpLGErbil9fSxBLkVsZW1lbnQuZWxsaXBzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0UG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpKSxuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKSldfSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRQb2ludHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZVswXS54LGVbMF0ueSksdC5saW5lVG8oZVsxXS54LGVbMV0ueSkpLG5ldyBBLkJvdW5kaW5nQm94KGVbMF0ueCxlWzBdLnksZVsxXS54LGVbMV0ueSl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnRzKCksZT10WzBdLmFuZ2xlVG8odFsxXSk7cmV0dXJuW1t0WzBdLGVdLFt0WzFdLGVdXX19LEEuRWxlbWVudC5saW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucG9pbnRzPUEuQ3JlYXRlUGF0aCh0aGlzLmF0dHJpYnV0ZShcInBvaW50c1wiKS52YWx1ZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBLkJvdW5kaW5nQm94KHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSk7bnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSk7Zm9yKHZhciBpPTE7aTx0aGlzLnBvaW50cy5sZW5ndGg7aSsrKWUuYWRkUG9pbnQodGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KSxudWxsIT10JiZ0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpO3JldHVybiBlfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8dGhpcy5wb2ludHMubGVuZ3RoLTE7ZSsrKXQucHVzaChbdGhpcy5wb2ludHNbZV0sdGhpcy5wb2ludHNbZV0uYW5nbGVUbyh0aGlzLnBvaW50c1tlKzFdKV0pO3JldHVybiAwPHQubGVuZ3RoJiZ0LnB1c2goW3RoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXSx0W3QubGVuZ3RoLTFdWzFdXSksdH19LEEuRWxlbWVudC5wb2x5bGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlnb249ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wb2x5bGluZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUGF0aD10aGlzLnBhdGgsdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYmFzZVBhdGgodCk7cmV0dXJuIG51bGwhPXQmJih0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpLHQuY2xvc2VQYXRoKCkpLGV9fSxBLkVsZW1lbnQucG9seWdvbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wb2x5bGluZSxBLkVsZW1lbnQucGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJkXCIpLnZhbHVlO2U9ZS5yZXBsYWNlKC8sL2dtLFwiIFwiKTtmb3IodmFyIGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkoW15cXHNdKS9nbSxcIiQxICQyXCIpO2ZvcihlPShlPWUucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sXCIkMSAkMlwiKSkucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLFwiJDEgJDJcIiksaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhcXC5bMC05XSopKFxcLikvZ20sXCIkMSAkMlwiKTtlPWUucmVwbGFjZSgvKFtBYV0oXFxzK1swLTldKyl7M30pXFxzKyhbMDFdKVxccyooWzAxXSkvZ20sXCIkMSAkMyAkNCBcIiksZT1BLmNvbXByZXNzU3BhY2VzKGUpLGU9QS50cmltKGUpLHRoaXMuUGF0aFBhcnNlcj1uZXcgZnVuY3Rpb24odCl7dGhpcy50b2tlbnM9dC5zcGxpdChcIiBcIiksdGhpcy5yZXNldD1mdW5jdGlvbigpe3RoaXMuaT0tMSx0aGlzLmNvbW1hbmQ9XCJcIix0aGlzLnByZXZpb3VzQ29tbWFuZD1cIlwiLHRoaXMuc3RhcnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmNvbnRyb2w9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmN1cnJlbnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLnBvaW50cz1bXSx0aGlzLmFuZ2xlcz1bXX0sdGhpcy5pc0VuZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmk+PXRoaXMudG9rZW5zLmxlbmd0aC0xfSx0aGlzLmlzQ29tbWFuZE9yRW5kPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmlzRW5kKCl8fG51bGwhPXRoaXMudG9rZW5zW3RoaXMuaSsxXS5tYXRjaCgvXltBLVphLXpdJC8pfSx0aGlzLmlzUmVsYXRpdmVDb21tYW5kPWZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMuY29tbWFuZCl7Y2FzZVwibVwiOmNhc2VcImxcIjpjYXNlXCJoXCI6Y2FzZVwidlwiOmNhc2VcImNcIjpjYXNlXCJzXCI6Y2FzZVwicVwiOmNhc2VcInRcIjpjYXNlXCJhXCI6Y2FzZVwielwiOnJldHVybiEwfXJldHVybiExfSx0aGlzLmdldFRva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaSsrLHRoaXMudG9rZW5zW3RoaXMuaV19LHRoaXMuZ2V0U2NhbGFyPWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlRmxvYXQodGhpcy5nZXRUb2tlbigpKX0sdGhpcy5uZXh0Q29tbWFuZD1mdW5jdGlvbigpe3RoaXMucHJldmlvdXNDb21tYW5kPXRoaXMuY29tbWFuZCx0aGlzLmNvbW1hbmQ9dGhpcy5nZXRUb2tlbigpfSx0aGlzLmdldFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEEuUG9pbnQodGhpcy5nZXRTY2FsYXIoKSx0aGlzLmdldFNjYWxhcigpKTtyZXR1cm4gdGhpcy5tYWtlQWJzb2x1dGUodCl9LHRoaXMuZ2V0QXNDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY29udHJvbD10fSx0aGlzLmdldEFzQ3VycmVudFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmN1cnJlbnQ9dH0sdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJzXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwicVwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInRcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKT90aGlzLmN1cnJlbnQ6bmV3IEEuUG9pbnQoMip0aGlzLmN1cnJlbnQueC10aGlzLmNvbnRyb2wueCwyKnRoaXMuY3VycmVudC55LXRoaXMuY29udHJvbC55KX0sdGhpcy5tYWtlQWJzb2x1dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQoKSYmKHQueCs9dGhpcy5jdXJyZW50LngsdC55Kz10aGlzLmN1cnJlbnQueSksdH0sdGhpcy5hZGRNYXJrZXI9ZnVuY3Rpb24odCxlLGkpe251bGwhPWkmJjA8dGhpcy5hbmdsZXMubGVuZ3RoJiZudWxsPT10aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV0mJih0aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV09dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLmFuZ2xlVG8oaSkpLHRoaXMuYWRkTWFya2VyQW5nbGUodCxudWxsPT1lP251bGw6ZS5hbmdsZVRvKHQpKX0sdGhpcy5hZGRNYXJrZXJBbmdsZT1mdW5jdGlvbih0LGUpe3RoaXMucG9pbnRzLnB1c2godCksdGhpcy5hbmdsZXMucHVzaChlKX0sdGhpcy5nZXRNYXJrZXJQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludHN9LHRoaXMuZ2V0TWFya2VyQW5nbGVzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLmFuZ2xlcy5sZW5ndGg7dCsrKWlmKG51bGw9PXRoaXMuYW5nbGVzW3RdKWZvcih2YXIgZT10KzE7ZTx0aGlzLmFuZ2xlcy5sZW5ndGg7ZSsrKWlmKG51bGwhPXRoaXMuYW5nbGVzW2VdKXt0aGlzLmFuZ2xlc1t0XT10aGlzLmFuZ2xlc1tlXTticmVha31yZXR1cm4gdGhpcy5hbmdsZXN9fShlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXRoUGFyc2VyO2UucmVzZXQoKTt2YXIgaT1uZXcgQS5Cb3VuZGluZ0JveDtmb3IobnVsbCE9dCYmdC5iZWdpblBhdGgoKTshZS5pc0VuZCgpOylzd2l0Y2goZS5uZXh0Q29tbWFuZCgpLGUuY29tbWFuZCl7Y2FzZVwiTVwiOmNhc2VcIm1cIjp2YXIgbj1lLmdldEFzQ3VycmVudFBvaW50KCk7Zm9yKGUuYWRkTWFya2VyKG4pLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5tb3ZlVG8obi54LG4ueSksZS5zdGFydD1lLmN1cnJlbnQ7IWUuaXNDb21tYW5kT3JFbmQoKTspbj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixlLnN0YXJ0KSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpO2JyZWFrO2Nhc2VcIkxcIjpjYXNlXCJsXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHM9ZS5jdXJyZW50O249ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4scyksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KX1icmVhaztjYXNlXCJIXCI6Y2FzZVwiaFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBhPW5ldyBBLlBvaW50KChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lng6MCkrZS5nZXRTY2FsYXIoKSxlLmN1cnJlbnQueSk7ZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KX1icmVhaztjYXNlXCJWXCI6Y2FzZVwidlwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspYT1uZXcgQS5Qb2ludChlLmN1cnJlbnQueCwoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC55OjApK2UuZ2V0U2NhbGFyKCkpLGUuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSk7YnJlYWs7Y2FzZVwiQ1wiOmNhc2VcImNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcj1lLmN1cnJlbnQsbz1lLmdldFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KX1icmVhaztjYXNlXCJTXCI6Y2FzZVwic1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbz1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiUVwiOmNhc2VcInFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJUXCI6Y2FzZVwidFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGUuY29udHJvbD1sLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJBXCI6Y2FzZVwiYVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50O3ZhciB1PWUuZ2V0U2NhbGFyKCksYz1lLmdldFNjYWxhcigpLGY9ZS5nZXRTY2FsYXIoKSooTWF0aC5QSS8xODApLG09ZS5nZXRTY2FsYXIoKSxwPWUuZ2V0U2NhbGFyKCksZD0oaD1lLmdldEFzQ3VycmVudFBvaW50KCksbmV3IEEuUG9pbnQoTWF0aC5jb3MoZikqKHIueC1oLngpLzIrTWF0aC5zaW4oZikqKHIueS1oLnkpLzIsLU1hdGguc2luKGYpKihyLngtaC54KS8yK01hdGguY29zKGYpKihyLnktaC55KS8yKSkseT1NYXRoLnBvdyhkLngsMikvTWF0aC5wb3codSwyKStNYXRoLnBvdyhkLnksMikvTWF0aC5wb3coYywyKTsxPHkmJih1Kj1NYXRoLnNxcnQoeSksYyo9TWF0aC5zcXJ0KHkpKTt2YXIgdj0obT09cD8tMToxKSpNYXRoLnNxcnQoKE1hdGgucG93KHUsMikqTWF0aC5wb3coYywyKS1NYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKS1NYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkvKE1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpK01hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKSk7aXNOYU4odikmJih2PTApO3ZhciBnPW5ldyBBLlBvaW50KHYqdSpkLnkvYyx2Ki1jKmQueC91KSx4PW5ldyBBLlBvaW50KChyLngraC54KS8yK01hdGguY29zKGYpKmcueC1NYXRoLnNpbihmKSpnLnksKHIueStoLnkpLzIrTWF0aC5zaW4oZikqZy54K01hdGguY29zKGYpKmcueSksYj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRbMF0sMikrTWF0aC5wb3codFsxXSwyKSl9LFA9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzBdK3RbMV0qZVsxXSkvKGIodCkqYihlKSl9LEU9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzFdPHRbMV0qZVswXT8tMToxKSpNYXRoLmFjb3MoUCh0LGUpKX0sdz1FKFsxLDBdLFsoZC54LWcueCkvdSwoZC55LWcueSkvY10pLEI9WyhkLngtZy54KS91LChkLnktZy55KS9jXSxDPVsoLWQueC1nLngpL3UsKC1kLnktZy55KS9jXSxUPUUoQixDKTtQKEIsQyk8PS0xJiYoVD1NYXRoLlBJKSwxPD1QKEIsQykmJihUPTApO3ZhciBWPTEtcD8xOi0xLE09dytWKihULzIpLFM9bmV3IEEuUG9pbnQoeC54K3UqTWF0aC5jb3MoTSkseC55K2MqTWF0aC5zaW4oTSkpO2lmKGUuYWRkTWFya2VyQW5nbGUoUyxNLVYqTWF0aC5QSS8yKSxlLmFkZE1hcmtlckFuZ2xlKGgsTS1WKk1hdGguUEkpLGkuYWRkUG9pbnQoaC54LGgueSksbnVsbCE9dCl7UD1jPHU/dTpjO3ZhciBrPWM8dT8xOnUvYyxEPWM8dT9jL3U6MTt0LnRyYW5zbGF0ZSh4LngseC55KSx0LnJvdGF0ZShmKSx0LnNjYWxlKGssRCksdC5hcmMoMCwwLFAsdyx3K1QsMS1wKSx0LnNjYWxlKDEvaywxL0QpLHQucm90YXRlKC1mKSx0LnRyYW5zbGF0ZSgteC54LC14LnkpfX1icmVhaztjYXNlXCJaXCI6Y2FzZVwielwiOm51bGwhPXQmJmkueDEhPT1pLngyJiZpLnkxIT09aS55MiYmdC5jbG9zZVBhdGgoKSxlLmN1cnJlbnQ9ZS5zdGFydH1yZXR1cm4gaX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKSxlPXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJBbmdsZXMoKSxpPVtdLG49MDtuPHQubGVuZ3RoO24rKylpLnB1c2goW3Rbbl0sZVtuXV0pO3JldHVybiBpfX0sQS5FbGVtZW50LnBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wYXR0ZXJuPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY3JlYXRlUGF0dGVybj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIsITApLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIsITApLHM9bmV3IEEuRWxlbWVudC5zdmc7cy5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxzLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLGkrXCJweFwiKSxzLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsbitcInB4XCIpLHMuYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIikudmFsdWUpLHMuY2hpbGRyZW49dGhpcy5jaGlsZHJlbjt2YXIgYT1wKCk7YS53aWR0aD1pLGEuaGVpZ2h0PW47dmFyIHI9YS5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZyLnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIsITApLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiwhMCkpO2Zvcih2YXIgbz0tMTtvPD0xO28rKylmb3IodmFyIGw9LTE7bDw9MTtsKyspci5zYXZlKCkscy5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsbyphLndpZHRoKSxzLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIixsKmEuaGVpZ2h0KSxzLnJlbmRlcihyKSxyLnJlc3RvcmUoKTtyZXR1cm4gdC5jcmVhdGVQYXR0ZXJuKGEsXCJyZXBlYXRcIil9fSxBLkVsZW1lbnQucGF0dGVybi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWFya2VyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnJlbmRlcj1mdW5jdGlvbih0LGUsaSl7aWYoZSl7dC50cmFuc2xhdGUoZS54LGUueSksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoaSksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUodC5saW5lV2lkdGgsdC5saW5lV2lkdGgpLHQuc2F2ZSgpO3ZhciBuPW5ldyBBLkVsZW1lbnQuc3ZnO24uYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlg9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWT1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIix0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLG4uYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJXaWR0aFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VySGVpZ2h0XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuZmlsbD1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJibGFja1wiKSksbi5hdHRyaWJ1dGVzLnN0cm9rZT1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHRoaXMuYXR0cmlidXRlKFwic3Ryb2tlXCIpLnZhbHVlT3JEZWZhdWx0KFwibm9uZVwiKSksbi5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLG4ucmVuZGVyKHQpLHQucmVzdG9yZSgpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKDEvdC5saW5lV2lkdGgsMS90LmxpbmVXaWR0aCksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoLWkpLHQudHJhbnNsYXRlKC1lLngsLWUueSl9fX0sQS5FbGVtZW50Lm1hcmtlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVmcz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZGVmcy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuc3RvcHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJzdG9wXCI9PWkudHlwZSYmdGhpcy5zdG9wcy5wdXNoKGkpfXRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24oKXt9LHRoaXMuZ3JhZGllbnRVbml0cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJvYmplY3RCb3VuZGluZ0JveFwiKX0sdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0PVtcImdyYWRpZW50VW5pdHNcIl0sdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXRbZV07IXRoaXMuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJnQuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJih0aGlzLmF0dHJpYnV0ZShpLCEwKS52YWx1ZT10LmF0dHJpYnV0ZShpKS52YWx1ZSl9fSx0aGlzLmNyZWF0ZUdyYWRpZW50PWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzO3RoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkmJihuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyKG4pKTt2YXIgcz1mdW5jdGlvbih0KXtyZXR1cm4gaS5oYXNWYWx1ZSgpP25ldyBBLlByb3BlcnR5KFwiY29sb3JcIix0KS5hZGRPcGFjaXR5KGkpLnZhbHVlOnR9LGE9dGhpcy5nZXRHcmFkaWVudCh0LGUpO2lmKG51bGw9PWEpcmV0dXJuIHMobi5zdG9wc1tuLnN0b3BzLmxlbmd0aC0xXS5jb2xvcik7Zm9yKHZhciByPTA7cjxuLnN0b3BzLmxlbmd0aDtyKyspYS5hZGRDb2xvclN0b3Aobi5zdG9wc1tyXS5vZmZzZXQscyhuLnN0b3BzW3JdLmNvbG9yKSk7aWYodGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS5oYXNWYWx1ZSgpKXt2YXIgbz1BLlZpZXdQb3J0LnZpZXdQb3J0c1swXSxsPW5ldyBBLkVsZW1lbnQucmVjdDtsLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpLGwuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyk7dmFyIGg9bmV3IEEuRWxlbWVudC5nO2guYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLnZhbHVlKSxoLmNoaWxkcmVuPVtsXTt2YXIgdT1uZXcgQS5FbGVtZW50LnN2Zzt1LmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwwKSx1LmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwwKSx1LmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLG8ud2lkdGgpLHUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixvLmhlaWdodCksdS5jaGlsZHJlbj1baF07dmFyIGM9cCgpO2Mud2lkdGg9by53aWR0aCxjLmhlaWdodD1vLmhlaWdodDt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZi5maWxsU3R5bGU9YSx1LnJlbmRlcihmKSxmLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKX1yZXR1cm4gYX19LEEuRWxlbWVudC5HcmFkaWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmVhckdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MlwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkyXCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2UuZ2V0Qm91bmRpbmdCb3godCk6bnVsbDt0aGlzLmF0dHJpYnV0ZShcIngxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIngxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieDJcIiwhMCkudmFsdWU9MSx0aGlzLmF0dHJpYnV0ZShcInkyXCIsITApLnZhbHVlPTApO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIiksYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIikscj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuPT1hJiZzPT1yP251bGw6dC5jcmVhdGVMaW5lYXJHcmFkaWVudChuLHMsYSxyKX19LEEuRWxlbWVudC5saW5lYXJHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3lcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnhcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeVwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KTt0aGlzLmF0dHJpYnV0ZShcImN4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN4XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiY3lcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3lcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInJcIiwhMCkudmFsdWU9XCI1MCVcIik7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiY3lcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxhPW4scj1zO3RoaXMuYXR0cmlidXRlKFwiZnhcIikuaGFzVmFsdWUoKSYmKGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLmhhc1ZhbHVlKCkmJihyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBvPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/KGkud2lkdGgoKStpLmhlaWdodCgpKS8yKnRoaXMuYXR0cmlidXRlKFwiclwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGEsciwwLG4scyxvKX19LEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnN0b3A9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5vZmZzZXQ9dGhpcy5hdHRyaWJ1dGUoXCJvZmZzZXRcIikubnVtVmFsdWUoKSx0aGlzLm9mZnNldDwwJiYodGhpcy5vZmZzZXQ9MCksMTx0aGlzLm9mZnNldCYmKHRoaXMub2Zmc2V0PTEpO3ZhciBlPXRoaXMuc3R5bGUoXCJzdG9wLWNvbG9yXCIsITApO1wiXCI9PT1lLnZhbHVlJiYoZS52YWx1ZT1cIiMwMDBcIiksdGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYoZT1lLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKSkpLHRoaXMuY29sb3I9ZS52YWx1ZX0sQS5FbGVtZW50LnN0b3AucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkFuaW1hdGVCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLEEuQW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuZHVyYXRpb249MCx0aGlzLmJlZ2luPXRoaXMuYXR0cmlidXRlKFwiYmVnaW5cIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLm1heER1cmF0aW9uPXRoaXMuYmVnaW4rdGhpcy5hdHRyaWJ1dGUoXCJkdXJcIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLmdldFByb3BlcnR5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVUeXBlXCIpLnZhbHVlLGU9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVOYW1lXCIpLnZhbHVlO3JldHVyblwiQ1NTXCI9PXQ/dGhpcy5wYXJlbnQuc3R5bGUoZSwhMCk6dGhpcy5wYXJlbnQuYXR0cmlidXRlKGUsITApfSx0aGlzLmluaXRpYWxWYWx1ZT1udWxsLHRoaXMuaW5pdGlhbFVuaXRzPVwiXCIsdGhpcy5yZW1vdmVkPSExLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdGhpcy51cGRhdGU9ZnVuY3Rpb24odCl7aWYobnVsbD09dGhpcy5pbml0aWFsVmFsdWUmJih0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWUsdGhpcy5pbml0aWFsVW5pdHM9dGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCkpLHRoaXMuZHVyYXRpb24+dGhpcy5tYXhEdXJhdGlvbil7aWYoXCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0Q291bnRcIikudmFsdWV8fFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdER1clwiKS52YWx1ZSl0aGlzLmR1cmF0aW9uPTA7ZWxzZSBpZihcImZyZWV6ZVwiIT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIil8fHRoaXMuZnJvemVuKXtpZihcInJlbW92ZVwiPT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIikmJiF0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXMucmVtb3ZlZD0hMCx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuP3RoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlOnRoaXMuaW5pdGlhbFZhbHVlLCEwfWVsc2UgdGhpcy5mcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtyZXR1cm4hMX10aGlzLmR1cmF0aW9uPXRoaXMuZHVyYXRpb24rdDt2YXIgZT0hMTtpZih0aGlzLmJlZ2luPHRoaXMuZHVyYXRpb24pe3ZhciBpPXRoaXMuY2FsY1ZhbHVlKCk7dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLmhhc1ZhbHVlKCkmJihpPXRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZStcIihcIitpK1wiKVwiKSx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9aSxlPSEwfXJldHVybiBlfSx0aGlzLmZyb209dGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLHRoaXMudG89dGhpcy5hdHRyaWJ1dGUoXCJ0b1wiKSx0aGlzLnZhbHVlcz10aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKSx0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpJiYodGhpcy52YWx1ZXMudmFsdWU9dGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoXCI7XCIpKSx0aGlzLnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHQ9e3Byb2dyZXNzOih0aGlzLmR1cmF0aW9uLXRoaXMuYmVnaW4pLyh0aGlzLm1heER1cmF0aW9uLXRoaXMuYmVnaW4pfTtpZih0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpKXt2YXIgZT10LnByb2dyZXNzKih0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGgtMSksaT1NYXRoLmZsb29yKGUpLG49TWF0aC5jZWlsKGUpO3QuZnJvbT1uZXcgQS5Qcm9wZXJ0eShcImZyb21cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2ldKSksdC50bz1uZXcgQS5Qcm9wZXJ0eShcInRvXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtuXSkpLHQucHJvZ3Jlc3M9KGUtaSkvKG4taSl9ZWxzZSB0LmZyb209dGhpcy5mcm9tLHQudG89dGhpcy50bztyZXR1cm4gdH19LEEuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuYW5pbWF0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKTtyZXR1cm4gdC5mcm9tLm51bVZhbHVlKCkrKHQudG8ubnVtVmFsdWUoKS10LmZyb20ubnVtVmFsdWUoKSkqdC5wcm9ncmVzcyt0aGlzLmluaXRpYWxVbml0c319LEEuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlQ29sb3I9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCksZT1uZXcgbSh0LmZyb20udmFsdWUpLGk9bmV3IG0odC50by52YWx1ZSk7aWYoZS5vayYmaS5vayl7dmFyIG49ZS5yKyhpLnItZS5yKSp0LnByb2dyZXNzLHM9ZS5nKyhpLmctZS5nKSp0LnByb2dyZXNzLGE9ZS5iKyhpLmItZS5iKSp0LnByb2dyZXNzO3JldHVyblwicmdiKFwiK3BhcnNlSW50KG4sMTApK1wiLFwiK3BhcnNlSW50KHMsMTApK1wiLFwiK3BhcnNlSW50KGEsMTApK1wiKVwifXJldHVybiB0aGlzLmF0dHJpYnV0ZShcImZyb21cIikudmFsdWV9fSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPUEuVG9OdW1iZXJBcnJheSh0LmZyb20udmFsdWUpLGk9QS5Ub051bWJlckFycmF5KHQudG8udmFsdWUpLG49XCJcIixzPTA7czxlLmxlbmd0aDtzKyspbis9ZVtzXSsoaVtzXS1lW3NdKSp0LnByb2dyZXNzK1wiIFwiO3JldHVybiBufX0sQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuYW5pbWF0ZSxBLkVsZW1lbnQuZm9udD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy5pc1JUTD0hMSx0aGlzLmlzQXJhYmljPSExLHRoaXMuZm9udEZhY2U9bnVsbCx0aGlzLm1pc3NpbmdHbHlwaD1udWxsLHRoaXMuZ2x5cGhzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wiZm9udC1mYWNlXCI9PWkudHlwZT8odGhpcy5mb250RmFjZT1pKS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmhhc1ZhbHVlKCkmJihBLkRlZmluaXRpb25zW2kuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZV09dGhpcyk6XCJtaXNzaW5nLWdseXBoXCI9PWkudHlwZT90aGlzLm1pc3NpbmdHbHlwaD1pOlwiZ2x5cGhcIj09aS50eXBlJiYoXCJcIiE9aS5hcmFiaWNGb3JtPyh0aGlzLmlzUlRMPSEwLHRoaXMuaXNBcmFiaWM9ITAsdm9pZCAwPT09dGhpcy5nbHlwaHNbaS51bmljb2RlXSYmKHRoaXMuZ2x5cGhzW2kudW5pY29kZV09W10pLHRoaXMuZ2x5cGhzW2kudW5pY29kZV1baS5hcmFiaWNGb3JtXT1pKTp0aGlzLmdseXBoc1tpLnVuaWNvZGVdPWkpfX0sQS5FbGVtZW50LmZvbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZvbnRmYWNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXNjZW50PXRoaXMuYXR0cmlidXRlKFwiYXNjZW50XCIpLnZhbHVlLHRoaXMuZGVzY2VudD10aGlzLmF0dHJpYnV0ZShcImRlc2NlbnRcIikudmFsdWUsdGhpcy51bml0c1BlckVtPXRoaXMuYXR0cmlidXRlKFwidW5pdHMtcGVyLWVtXCIpLm51bVZhbHVlKCl9LEEuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWlzc2luZ2dseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9MH0sQS5FbGVtZW50Lm1pc3NpbmdnbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC5nbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLnVuaWNvZGU9dGhpcy5hdHRyaWJ1dGUoXCJ1bmljb2RlXCIpLnZhbHVlLHRoaXMuYXJhYmljRm9ybT10aGlzLmF0dHJpYnV0ZShcImFyYWJpYy1mb3JtXCIpLnZhbHVlfSxBLkVsZW1lbnQuZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQudGV4dD1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KTt2YXIgZT10aGlzLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKTtudWxsPT1lJiYoZT10aGlzLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCkpLG51bGwhPWUmJih0LnRleHRCYXNlbGluZT1lKX0sdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCl7dGhpcy54PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy55PXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksdGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYodGhpcy54Kz10aGlzLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYodGhpcy55Kz10aGlzLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSksdGhpcy54Kz10aGlzLmdldEFuY2hvckRlbHRhKHQsdGhpcywwKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9bnVsbCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LHRoaXMsdGhpcyxpKTtudWxsPT1lP2U9bjplLmFkZEJvdW5kaW5nQm94KG4pfXJldHVybiBlfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMucmVuZGVyQ2hpbGQodCx0aGlzLHRoaXMsZSl9LHRoaXMuZ2V0QW5jaG9yRGVsdGE9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIiE9bil7Zm9yKHZhciBzPTAsYT1pO2E8ZS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgcj1lLmNoaWxkcmVuW2FdO2lmKGk8YSYmci5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkpYnJlYWs7cys9ci5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KX1yZXR1cm4tMSooXCJlbmRcIj09bj9zOnMvMil9cmV0dXJuIDB9LHRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz1pLmNoaWxkcmVuW25dO3JldHVybiBzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKT8ocy54PXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIikrZS5nZXRBbmNob3JEZWx0YSh0LGksbikscy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYocy54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkpOihzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihlLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSxzLng9ZS54KSxlLng9cy54K3MubWVhc3VyZVRleHQodCkscy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCk/KHMueT1zLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHMueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpKToocy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYoZS55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkscy55PWUueSksZS55PXMueSxzfSx0aGlzLmdldENoaWxkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pLGE9cy5nZXRCb3VuZGluZ0JveCh0KTtmb3Iobj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKXt2YXIgcj1lLmdldENoaWxkQm91bmRpbmdCb3godCxlLHMsbik7YS5hZGRCb3VuZGluZ0JveChyKX1yZXR1cm4gYX0sdGhpcy5yZW5kZXJDaGlsZD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbik7Zm9yKHMucmVuZGVyKHQpLG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyllLnJlbmRlckNoaWxkKHQsZSxzLG4pfX0sQS5FbGVtZW50LnRleHQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRHbHlwaD1mdW5jdGlvbih0LGUsaSl7dmFyIG49ZVtpXSxzPW51bGw7aWYodC5pc0FyYWJpYyl7dmFyIGE9XCJpc29sYXRlZFwiOygwPT1pfHxcIiBcIj09ZVtpLTFdKSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cInRlcm1pbmFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cIm1lZGlhbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJihpPT1lLmxlbmd0aC0xfHxcIiBcIj09ZVtpKzFdKSYmKGE9XCJpbml0aWFsXCIpLHZvaWQgMCE9PXQuZ2x5cGhzW25dJiZudWxsPT0ocz10LmdseXBoc1tuXVthXSkmJlwiZ2x5cGhcIj09dC5nbHlwaHNbbl0udHlwZSYmKHM9dC5nbHlwaHNbbl0pfWVsc2Ugcz10LmdseXBoc1tuXTtyZXR1cm4gbnVsbD09cyYmKHM9dC5taXNzaW5nR2x5cGgpLHN9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbD09ZSlcInN0cm9rZVwiPT10LnBhaW50T3JkZXI/KFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk6KFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk7ZWxzZXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U3R5bGUpLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbz10aGlzLmdldEdseXBoKGUscyxyKSxsPWkvZS5mb250RmFjZS51bml0c1BlckVtO3QudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpLHQuc2NhbGUobCwtbCk7dmFyIGg9dC5saW5lV2lkdGg7dC5saW5lV2lkdGg9dC5saW5lV2lkdGgqZS5mb250RmFjZS51bml0c1BlckVtL2ksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC40LDEsMCwwKSxvLnJlbmRlcih0KSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLS40LDEsMCwwKSx0LmxpbmVXaWR0aD1oLHQuc2NhbGUoMS9sLC0xL2wpLHQudHJhbnNsYXRlKC10aGlzLngsLXRoaXMueSksdGhpcy54Kz1pKihvLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHRoaXMueCs9YVtyXSl9fX0sdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLm1lYXN1cmVUZXh0UmVjdXJzaXZlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLm1lYXN1cmVUZXh0KHQpLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllKz10aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpO3JldHVybiBlfSx0aGlzLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj0wLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKW4rPSh0aGlzLmdldEdseXBoKGUscyxyKS5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKSppL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KG4rPWFbcl0pO3JldHVybiBufXZhciBvPUEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpO2lmKCF0Lm1lYXN1cmVUZXh0KXJldHVybiAxMCpvLmxlbmd0aDt0LnNhdmUoKSx0aGlzLnNldENvbnRleHQodCwhMCk7dmFyIGw9dC5tZWFzdXJlVGV4dChvKS53aWR0aDtyZXR1cm4gdC5yZXN0b3JlKCksbH0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUsdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KX19LEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHNwYW49ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnRleHQ9QS5jb21wcmVzc1NwYWNlcyh0LnZhbHVlfHx0LnRleHR8fHQudGV4dENvbnRlbnR8fFwiXCIpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiAwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoP1wiXCI6dGhpcy50ZXh0fX0sQS5FbGVtZW50LnRzcGFuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHJlZj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPXQpcmV0dXJuIHQuY2hpbGRyZW5bMF0uZ2V0VGV4dCgpfX0sQS5FbGVtZW50LnRyZWYucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5hPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhhc1RleHQ9MDx0LmNoaWxkTm9kZXMubGVuZ3RoO2Zvcih2YXIgZT0wO2U8dC5jaGlsZE5vZGVzLmxlbmd0aDtlKyspMyE9dC5jaGlsZE5vZGVzW2VdLm5vZGVUeXBlJiYodGhpcy5oYXNUZXh0PSExKTt0aGlzLnRleHQ9dGhpcy5oYXNUZXh0P3QuY2hpbGROb2Rlc1swXS52YWx1ZXx8dC5jaGlsZE5vZGVzWzBdLmRhdGE6XCJcIix0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50ZXh0fSx0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbj10aGlzLnJlbmRlckNoaWxkcmVuLHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYodGhpcy5oYXNUZXh0KXt0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbih0KTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtBLk1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcyxuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUudG9QaXhlbHMoXCJ5XCIpLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSkpfWVsc2UgaWYoMDx0aGlzLmNoaWxkcmVuLmxlbmd0aCl7dmFyIGk9bmV3IEEuRWxlbWVudC5nO2kuY2hpbGRyZW49dGhpcy5jaGlsZHJlbixpLnBhcmVudD10aGlzLGkucmVuZGVyKHQpfX0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKCl7dS5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlKX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJ9fSxBLkVsZW1lbnQuYS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmltYWdlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWU7aWYoXCJcIiE9ZSl7dmFyIGE9ZS5tYXRjaCgvXFwuc3ZnJC8pO2lmKEEuSW1hZ2VzLnB1c2godGhpcyksdGhpcy5sb2FkZWQ9ITEsYSl0aGlzLmltZz1BLmFqYXgoZSksdGhpcy5sb2FkZWQ9ITA7ZWxzZXt0aGlzLmltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLDE9PUEub3B0cy51c2VDT1JTJiYodGhpcy5pbWcuY3Jvc3NPcmlnaW49XCJBbm9ueW1vdXNcIik7dmFyIHI9dGhpczt0aGlzLmltZy5vbmxvYWQ9ZnVuY3Rpb24oKXtyLmxvYWRlZD0hMH0sdGhpcy5pbWcub25lcnJvcj1mdW5jdGlvbigpe0EubG9nKCdFUlJPUjogaW1hZ2UgXCInK2UrJ1wiIG5vdCBmb3VuZCcpLHIubG9hZGVkPSEwfSx0aGlzLmltZy5zcmM9ZX10aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7MCE9biYmMCE9cyYmKHQuc2F2ZSgpLGE/dC5kcmF3U3ZnKHRoaXMuaW1nLGUsaSxuLHMpOih0LnRyYW5zbGF0ZShlLGkpLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsbix0aGlzLmltZy53aWR0aCxzLHRoaXMuaW1nLmhlaWdodCwwLDApLHIubG9hZGVkJiYodm9pZCAwPT09dGhpcy5pbWcuY29tcGxldGV8fHRoaXMuaW1nLmNvbXBsZXRlKSYmdC5kcmF3SW1hZ2UodGhpcy5pbWcsMCwwKSksdC5yZXN0b3JlKCkpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxlPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godCxlLHQraSxlK24pfX19LEEuRWxlbWVudC5pbWFnZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5nPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEEuQm91bmRpbmdCb3gsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCh0KSk7cmV0dXJuIGV9fSxBLkVsZW1lbnQuZy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zeW1ib2w9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN0eWxlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO2Zvcih2YXIgZT1cIlwiLGk9MDtpPHQuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKWUrPXQuY2hpbGROb2Rlc1tpXS5kYXRhO2U9ZS5yZXBsYWNlKC8oXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qXFwvXXxbXFxyXFxuXSkpKSpcXCorXFwvKXwoXltcXHNdKlxcL1xcLy4qKS9nbSxcIlwiKTt2YXIgbj0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5zcGxpdChcIn1cIik7Zm9yKGk9MDtpPG4ubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0obltpXSkpZm9yKHZhciBzPW5baV0uc3BsaXQoXCJ7XCIpLGE9c1swXS5zcGxpdChcIixcIikscj1zWzFdLnNwbGl0KFwiO1wiKSxvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBsPUEudHJpbShhW29dKTtpZihcIlwiIT1sKXtmb3IodmFyIGg9QS5TdHlsZXNbbF18fHt9LHU9MDt1PHIubGVuZ3RoO3UrKyl7dmFyIGM9clt1XS5pbmRleE9mKFwiOlwiKSxmPXJbdV0uc3Vic3RyKDAsYyksbT1yW3VdLnN1YnN0cihjKzEsclt1XS5sZW5ndGgtYyk7bnVsbCE9ZiYmbnVsbCE9bSYmKGhbQS50cmltKGYpXT1uZXcgQS5Qcm9wZXJ0eShBLnRyaW0oZiksQS50cmltKG0pKSl9aWYoQS5TdHlsZXNbbF09aCxBLlN0eWxlc1NwZWNpZmljaXR5W2xdPXcobCksXCJAZm9udC1mYWNlXCI9PWwpZm9yKHZhciBwPWhbXCJmb250LWZhbWlseVwiXS52YWx1ZS5yZXBsYWNlKC9cIi9nLFwiXCIpLGQ9aC5zcmMudmFsdWUuc3BsaXQoXCIsXCIpLHk9MDt5PGQubGVuZ3RoO3krKylpZigwPGRbeV0uaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykpZm9yKHZhciB2PWRbeV0uaW5kZXhPZihcInVybFwiKSxnPWRbeV0uaW5kZXhPZihcIilcIix2KSx4PWRbeV0uc3Vic3RyKHYrNSxnLXYtNiksYj1BLnBhcnNlWG1sKEEuYWpheCh4KSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpLFA9MDtQPGIubGVuZ3RoO1ArKyl7dmFyIEU9QS5DcmVhdGVFbGVtZW50KGJbUF0pO0EuRGVmaW5pdGlvbnNbcF09RX19fX0sQS5FbGVtZW50LnN0eWxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC51c2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSwwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUoMCx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKX07dmFyIG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO3RoaXMucGF0aD1mdW5jdGlvbih0KXtudWxsIT1uJiZuLnBhdGgodCl9LHRoaXMuZWxlbWVudFRyYW5zZm9ybT1mdW5jdGlvbigpe2lmKG51bGwhPW4mJm4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSlyZXR1cm4gbmV3IEEuVHJhbnNmb3JtKG4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pcmV0dXJuIG4uZ2V0Qm91bmRpbmdCb3godCl9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYobnVsbCE9bil7dmFyIGU9bjtcInN5bWJvbFwiPT1uLnR5cGUmJigoZT1uZXcgQS5FbGVtZW50LnN2ZykudHlwZT1cInN2Z1wiLGUuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLG4uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLnByZXNlcnZlQXNwZWN0UmF0aW89bmV3IEEuUHJvcGVydHkoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsbi5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMub3ZlcmZsb3c9bmV3IEEuUHJvcGVydHkoXCJvdmVyZmxvd1wiLG4uYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWUpLGUuY2hpbGRyZW49bi5jaGlsZHJlbiksXCJzdmdcIj09ZS50eXBlJiYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnZhbHVlKSksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS52YWx1ZSkpKTt2YXIgaT1lLnBhcmVudDtlLnBhcmVudD1udWxsLGUucmVuZGVyKHQpLGUucGFyZW50PWl9fX0sQS5FbGVtZW50LnVzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXNrPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO2lmKDA9PXMmJjA9PWEpe2Zvcih2YXIgcj1uZXcgQS5Cb3VuZGluZ0JveCxvPTA7bzx0aGlzLmNoaWxkcmVuLmxlbmd0aDtvKyspci5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW29dLmdldEJvdW5kaW5nQm94KHQpKTtpPU1hdGguZmxvb3Ioci54MSksbj1NYXRoLmZsb29yKHIueTEpLHM9TWF0aC5mbG9vcihyLndpZHRoKCkpLGE9TWF0aC5mbG9vcihyLmhlaWdodCgpKX12YXIgbD1lLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU7ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPVwiXCI7dmFyIGg9cCgpO2gud2lkdGg9aStzLGguaGVpZ2h0PW4rYTt2YXIgdT1oLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLnJlbmRlckNoaWxkcmVuKHUpO3ZhciBjPXAoKTtjLndpZHRoPWkrcyxjLmhlaWdodD1uK2E7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7ZS5yZW5kZXIoZiksZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkZXN0aW5hdGlvbi1pblwiLGYuZmlsbFN0eWxlPXUuY3JlYXRlUGF0dGVybihoLFwibm8tcmVwZWF0XCIpLGYuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLHQuZmlsbFN0eWxlPWYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpLHQuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLGUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1sfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQubWFzay5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuY2xpcFBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGk9dC5iZWdpblBhdGgsbj10LmNsb3NlUGF0aDtlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9ZnVuY3Rpb24oKXt9LENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPWZ1bmN0aW9uKCl7fSksaS5jYWxsKHQpO2Zvcih2YXIgcz0wO3M8dGhpcy5jaGlsZHJlbi5sZW5ndGg7cysrKXt2YXIgYT10aGlzLmNoaWxkcmVuW3NdO2lmKHZvaWQgMCE9PWEucGF0aCl7dmFyIHI9dm9pZCAwIT09YS5lbGVtZW50VHJhbnNmb3JtJiZhLmVsZW1lbnRUcmFuc2Zvcm0oKTshciYmYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiYocj1uZXcgQS5UcmFuc2Zvcm0oYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkpLHImJnIuYXBwbHkodCksYS5wYXRoKHQpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKSxyJiZyLnVuYXBwbHkodCl9fW4uY2FsbCh0KSx0LmNsaXAoKSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9aSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmNsaXBQYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5maWx0ZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCksbj1NYXRoLmZsb29yKGkueDEpLHM9TWF0aC5mbG9vcihpLnkxKSxhPU1hdGguZmxvb3IoaS53aWR0aCgpKSxyPU1hdGguZmxvb3IoaS5oZWlnaHQoKSksbz1lLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlO2Uuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU9XCJcIjtmb3IodmFyIGw9MCxoPTAsdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKXt2YXIgYz10aGlzLmNoaWxkcmVuW3VdLmV4dHJhRmlsdGVyRGlzdGFuY2V8fDA7bD1NYXRoLm1heChsLGMpLGg9TWF0aC5tYXgoaCxjKX12YXIgZj1wKCk7Zi53aWR0aD1hKzIqbCxmLmhlaWdodD1yKzIqaDt2YXIgbT1mLmdldENvbnRleHQoXCIyZFwiKTtmb3IobS50cmFuc2xhdGUoLW4rbCwtcytoKSxlLnJlbmRlcihtKSx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1KyspXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jaGlsZHJlblt1XS5hcHBseSYmdGhpcy5jaGlsZHJlblt1XS5hcHBseShtLDAsMCxhKzIqbCxyKzIqaCk7dC5kcmF3SW1hZ2UoZiwwLDAsYSsyKmwscisyKmgsbi1sLHMtaCxhKzIqbCxyKzIqaCksZS5zdHlsZShcImZpbHRlclwiLCEwKS52YWx1ZT1vfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZmlsdGVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZU1vcnBob2xvZ3k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29tcG9zaXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVDb21wb3NpdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29sb3JNYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIG49QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLnZhbHVlKTtzd2l0Y2godGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlT3JEZWZhdWx0KFwibWF0cml4XCIpKXtjYXNlXCJzYXR1cmF0ZVwiOnZhciBlPW5bMF07bj1bLjIxMysuNzg3KmUsLjcxNS0uNzE1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUrLjI4NSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1LS43MTUqZSwuMDcyKy45MjgqZSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwiaHVlUm90YXRlXCI6dmFyIHM9blswXSpNYXRoLlBJLzE4MCxpPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhzKSplK01hdGguc2luKHMpKml9O249W2koLjIxMywuNzg3LC0uMjEzKSxpKC43MTUsLS43MTUsLS43MTUpLGkoLjA3MiwtLjA3MiwuOTI4KSwwLDAsaSguMjEzLC0uMjEzLC4xNDMpLGkoLjcxNSwuMjg1LC4xNCksaSguMDcyLC0uMDcyLC0uMjgzKSwwLDAsaSguMjEzLC0uMjEzLC0uNzg3KSxpKC43MTUsLS43MTUsLjcxNSksaSguMDcyLC45MjgsLjA3MiksMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImx1bWluYW5jZVRvQWxwaGFcIjpuPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwuMjEyNSwuNzE1NCwuMDcyMSwwLDAsMCwwLDAsMCwxXX1mdW5jdGlvbiB1KHQsZSxpLG4scyxhKXtyZXR1cm4gdFtpKm4qNCs0KmUrYV19ZnVuY3Rpb24gYyh0LGUsaSxuLHMsYSxyKXt0W2kqbio0KzQqZSthXT1yfWZ1bmN0aW9uIGYodCxlKXt2YXIgaT1uW3RdO3JldHVybiBpKihpPDA/ZS0yNTU6ZSl9dGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe3ZhciBhPXQuZ2V0SW1hZ2VEYXRhKDAsMCxuLHMpO2ZvcihpPTA7aTxzO2krKylmb3IoZT0wO2U8bjtlKyspe3ZhciByPXUoYS5kYXRhLGUsaSxuLDAsMCksbz11KGEuZGF0YSxlLGksbiwwLDEpLGw9dShhLmRhdGEsZSxpLG4sMCwyKSxoPXUoYS5kYXRhLGUsaSxuLDAsMyk7YyhhLmRhdGEsZSxpLG4sMCwwLGYoMCxyKStmKDEsbykrZigyLGwpK2YoMyxoKStmKDQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMSxmKDUscikrZig2LG8pK2YoNyxsKStmKDgsaCkrZig5LDEpKSxjKGEuZGF0YSxlLGksbiwwLDIsZigxMCxyKStmKDExLG8pK2YoMTIsbCkrZigxMyxoKStmKDE0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDMsZigxNSxyKStmKDE2LG8pK2YoMTcsbCkrZigxOCxoKStmKDE5LDEpKX10LmNsZWFyUmVjdCgwLDAsbixzKSx0LnB1dEltYWdlRGF0YShhLDAsMCl9fSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ibHVyUmFkaXVzPU1hdGguZmxvb3IodGhpcy5hdHRyaWJ1dGUoXCJzdGREZXZpYXRpb25cIikubnVtVmFsdWUoKSksdGhpcy5leHRyYUZpbHRlckRpc3RhbmNlPXRoaXMuYmx1clJhZGl1cyx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7ZCYmdm9pZCAwIT09ZC5jYW52YXNSR0JBPyh0LmNhbnZhcy5pZD1BLlVuaXF1ZUlkKCksdC5jYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQuY2FudmFzKSxkLmNhbnZhc1JHQkEodC5jYW52YXMsZSxpLG4scyx0aGlzLmJsdXJSYWRpdXMpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC5jYW52YXMpKTpBLmxvZyhcIkVSUk9SOiBTdGFja0JsdXIuanMgbXVzdCBiZSBpbmNsdWRlZCBmb3IgYmx1ciB0byB3b3JrXCIpfX0sQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC50aXRsZT1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC50aXRsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVzYz1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC5kZXNjLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5NSVNTSU5HPWZ1bmN0aW9uKHQpe0EubG9nKFwiRVJST1I6IEVsZW1lbnQgJ1wiK3Qubm9kZU5hbWUrXCInIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpfSxBLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlTmFtZS5yZXBsYWNlKC9eW146XSs6LyxcIlwiKTtlPWUucmVwbGFjZSgvXFwtL2csXCJcIik7dmFyIGk9bnVsbDtyZXR1cm4oaT12b2lkIDAhPT1BLkVsZW1lbnRbZV0/bmV3IEEuRWxlbWVudFtlXSh0KTpuZXcgQS5FbGVtZW50Lk1JU1NJTkcodCkpLnR5cGU9dC5ub2RlTmFtZSxpfSxBLmxvYWQ9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWwodCxBLmFqYXgoZSkpfSxBLmxvYWRYbWw9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWxEb2ModCxBLnBhcnNlWG1sKGUpKX0sQS5sb2FkWG1sRG9jPWZ1bmN0aW9uKGEscil7QS5pbml0KGEpO3ZhciBpPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hLmNhbnZhcztlOyl0LngtPWUub2Zmc2V0TGVmdCx0LnktPWUub2Zmc2V0VG9wLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIHUuc2Nyb2xsWCYmKHQueCs9dS5zY3JvbGxYKSx1LnNjcm9sbFkmJih0LnkrPXUuc2Nyb2xsWSksdH07MSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYoYS5jYW52YXMub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25jbGljayhlLngsZS55KX0sYS5jYW52YXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9ubW91c2Vtb3ZlKGUueCxlLnkpfSk7dmFyIG89QS5DcmVhdGVFbGVtZW50KHIuZG9jdW1lbnRFbGVtZW50KTtvLnJvb3Q9ITAsby5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7dmFyIGw9ITAsbj1mdW5jdGlvbigpe0EuVmlld1BvcnQuQ2xlYXIoKSxhLmNhbnZhcy5wYXJlbnROb2RlP0EuVmlld1BvcnQuU2V0Q3VycmVudChhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoLGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTpBLlZpZXdQb3J0LlNldEN1cnJlbnQoODAwLDYwMCksMSE9QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJihvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLndpZHRoPW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS53aWR0aD1hLmNhbnZhcy53aWR0aCtcInB4XCIpKSxvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy5oZWlnaHQ9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS5oZWlnaHQ9YS5jYW52YXMuaGVpZ2h0K1wicHhcIikpKTt2YXIgdD1hLmNhbnZhcy5jbGllbnRXaWR0aHx8YS5jYW52YXMud2lkdGgsZT1hLmNhbnZhcy5jbGllbnRIZWlnaHR8fGEuY2FudmFzLmhlaWdodDtpZigxPT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJm8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKHQ9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxlPW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQodCxlKSxudWxsIT1BLm9wdHMub2Zmc2V0WCYmKG8uYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WCksbnVsbCE9QS5vcHRzLm9mZnNldFkmJihvLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFkpLG51bGwhPUEub3B0cy5zY2FsZVdpZHRofHxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQpe3ZhciBpPW51bGwsbj1udWxsLHM9QS5Ub051bWJlckFycmF5KG8uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSk7bnVsbCE9QS5vcHRzLnNjYWxlV2lkdGgmJihvLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCk/aT1vLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKS9BLm9wdHMuc2NhbGVXaWR0aDppc05hTihzWzJdKXx8KGk9c1syXS9BLm9wdHMuc2NhbGVXaWR0aCkpLG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCYmKG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCk/bj1vLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikvQS5vcHRzLnNjYWxlSGVpZ2h0OmlzTmFOKHNbM10pfHwobj1zWzNdL0Eub3B0cy5zY2FsZUhlaWdodCkpLG51bGw9PWkmJihpPW4pLG51bGw9PW4mJihuPWkpLG8uYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlV2lkdGgsby5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlSGVpZ2h0LG8uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMCwhMCkudmFsdWUrPVwiIHNjYWxlKFwiKzEvaStcIixcIisxL24rXCIpXCJ9MSE9QS5vcHRzLmlnbm9yZUNsZWFyJiZhLmNsZWFyUmVjdCgwLDAsdCxlKSxvLnJlbmRlcihhKSxsJiYobD0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMucmVuZGVyQ2FsbGJhY2smJkEub3B0cy5yZW5kZXJDYWxsYmFjayhyKSl9LHM9ITA7QS5JbWFnZXNMb2FkZWQoKSYmKHM9ITEsbigpKSxBLmludGVydmFsSUQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgdD0hMTtpZihzJiZBLkltYWdlc0xvYWRlZCgpJiYodD0hKHM9ITEpKSwxIT1BLm9wdHMuaWdub3JlTW91c2UmJih0fD1BLk1vdXNlLmhhc0V2ZW50cygpKSwxIT1BLm9wdHMuaWdub3JlQW5pbWF0aW9uKWZvcih2YXIgZT0wO2U8QS5BbmltYXRpb25zLmxlbmd0aDtlKyspdHw9QS5BbmltYXRpb25zW2VdLnVwZGF0ZSgxZTMvQS5GUkFNRVJBVEUpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5mb3JjZVJlZHJhdyYmMT09QS5vcHRzLmZvcmNlUmVkcmF3KCkmJih0PSEwKSx0JiYobigpLEEuTW91c2UucnVuRXZlbnRzKCkpfSwxZTMvQS5GUkFNRVJBVEUpfSxBLnN0b3A9ZnVuY3Rpb24oKXtBLmludGVydmFsSUQmJmNsZWFySW50ZXJ2YWwoQS5pbnRlcnZhbElEKX0sQS5Nb3VzZT1uZXcgZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXSx0aGlzLmhhc0V2ZW50cz1mdW5jdGlvbigpe3JldHVybiAwIT10aGlzLmV2ZW50cy5sZW5ndGh9LHRoaXMub25jbGljaz1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbmNsaWNrXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbmNsaWNrJiZ0Lm9uY2xpY2soKX19KX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbm1vdXNlbW92ZVwiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25tb3VzZW1vdmUmJnQub25tb3VzZW1vdmUoKX19KX0sdGhpcy5ldmVudEVsZW1lbnRzPVtdLHRoaXMuY2hlY2tQYXRoPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJblBhdGgmJmUuaXNQb2ludEluUGF0aChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMuY2hlY2tCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5Cb3gobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLnJ1bkV2ZW50cz1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJcIjtmb3IodmFyIHQ9MDt0PHRoaXMuZXZlbnRzLmxlbmd0aDt0KyspZm9yKHZhciBlPXRoaXMuZXZlbnRzW3RdLGk9dGhpcy5ldmVudEVsZW1lbnRzW3RdO2k7KWUucnVuKGkpLGk9aS5wYXJlbnQ7dGhpcy5ldmVudHM9W10sdGhpcy5ldmVudEVsZW1lbnRzPVtdfX0sQX0oaXx8e30pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSksbnVsbCE9dC5zdmcmJnQuc3ZnLnN0b3AoKSx0LmNoaWxkTm9kZXMmJjE9PXQuY2hpbGROb2Rlcy5sZW5ndGgmJlwiT0JKRUNUXCI9PXQuY2hpbGROb2Rlc1swXS5ub2RlTmFtZXx8KHQuc3ZnPW4pO3ZhciBzPXQuZ2V0Q29udGV4dChcIjJkXCIpO3ZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50P24ubG9hZFhtbERvYyhzLGUpOlwiPFwiPT1lLnN1YnN0cigwLDEpP24ubG9hZFhtbChzLGUpOm4ubG9hZChzLGUpfWVsc2UgZm9yKHZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmdcIikscj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgbz1hW3JdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtsLndpZHRoPW8uY2xpZW50V2lkdGgsbC5oZWlnaHQ9by5jbGllbnRIZWlnaHQsby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLG8pLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guYXBwZW5kQ2hpbGQobyksYyhsLGguaW5uZXJIVE1MKX19O1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHwodm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubWF0Y2hlcyhlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubW96TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm9NYXRjaGVzU2VsZWN0b3IoZSl9OihcImZ1bmN0aW9uXCIhPXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFplcHRvfHwoZj1mdW5jdGlvbih0LGUpe3JldHVybiAkKHQpLmlzKGUpfSksdm9pZCAwPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNpenpsZSYmKGY9U2l6emxlLm1hdGNoZXNTZWxlY3RvcikpKTt2YXIgZT0vKFxcW1teXFxdXStcXF0pL2csaT0vKCNbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGE9LyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHI9Lyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksbz0vKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksbD0vKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGg9LyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO2Z1bmN0aW9uIHcobil7dmFyIHM9WzAsMCwwXSx0PWZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5tYXRjaCh0KTtudWxsIT1pJiYoc1tlXSs9aS5sZW5ndGgsbj1uLnJlcGxhY2UodCxcIiBcIikpfTtyZXR1cm4gbj0obj1uLnJlcGxhY2UoLzpub3RcXCgoW15cXCldKilcXCkvZyxcIiAgICAgJDEgXCIpKS5yZXBsYWNlKC97W1xcc1xcU10qL2dtLFwiIFwiKSx0KGUsMSksdChpLDApLHQoYSwxKSx0KHIsMiksdChvLDEpLHQobCwxKSxuPShuPW4ucmVwbGFjZSgvW1xcKlxcc1xcKz5+XS9nLFwiIFwiKSkucmVwbGFjZSgvWyNcXC5dL2csXCIgXCIpLHQoaCwyKSxzLmpvaW4oXCJcIil9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd1N2Zz1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9e2lnbm9yZU1vdXNlOiEwLGlnbm9yZUFuaW1hdGlvbjohMCxpZ25vcmVEaW1lbnNpb25zOiEwLGlnbm9yZUNsZWFyOiEwLG9mZnNldFg6ZSxvZmZzZXRZOmksc2NhbGVXaWR0aDpuLHNjYWxlSGVpZ2h0OnN9O2Zvcih2YXIgbyBpbiBhKWEuaGFzT3duUHJvcGVydHkobykmJihyW29dPWFbb10pO2ModGhpcy5jYW52YXMsdCxyKX0pLHQuZXhwb3J0cz1jfSh0PXtleHBvcnRzOnt9fSx0LmV4cG9ydHMpLHQuZXhwb3J0c30pOyIsIi8qXG5cdEJhc2VkIG9uIHJnYmNvbG9yLmpzIGJ5IFN0b3lhbiBTdGVmYW5vdiA8c3N0b29AZ21haWwuY29tPlxuXHRodHRwOi8vd3d3LnBocGllZC5jb20vcmdiLWNvbG9yLXBhcnNlci1pbi1qYXZhc2NyaXB0L1xuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb2xvcl9zdHJpbmcpIHtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gICAgdGhpcy5hbHBoYSA9IDEuMDtcblxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcbiAgICBpZiAoY29sb3Jfc3RyaW5nLmNoYXJBdCgwKSA9PSAnIycpIHsgLy8gcmVtb3ZlICMgaWYgYW55XG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSw2KTtcbiAgICB9XG5cbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcucmVwbGFjZSgvIC9nLCcnKTtcbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIGJlZm9yZSBnZXR0aW5nIGludG8gcmVnZXhwcywgdHJ5IHNpbXBsZSBtYXRjaGVzXG4gICAgLy8gYW5kIG92ZXJ3cml0ZSB0aGUgaW5wdXRcbiAgICB2YXIgc2ltcGxlX2NvbG9ycyA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJ2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICdhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICdmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJ2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgICAgICAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICc2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgICAgICAgZmVsZHNwYXI6ICdkMTkyNzUnLFxuICAgICAgICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICAgICAgICBob25leWRldzogJ2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICdmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQgOiAnY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvIDogJzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICdmMGU2OGMnLFxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICAgICAgICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWJsdWU6ICc4NDcwZmYnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICdmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnODAwMDAwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICc5MzcwZDgnLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICdmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICdkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICdkODcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgICAgICAgcGVydTogJ2NkODUzZicsXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxuICAgICAgICBwbHVtOiAnZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICc2NjMzOTknLFxuICAgICAgICByZWQ6ICdmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICdiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJ2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gICAgICAgIHNub3c6ICdmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJ2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgICAgICAgdmlvbGV0cmVkOiAnZDAyMDkwJyxcbiAgICAgICAgd2hlYXQ6ICdmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJ2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICdmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgICB9O1xuICAgIGNvbG9yX3N0cmluZyA9IHNpbXBsZV9jb2xvcnNbY29sb3Jfc3RyaW5nXSB8fCBjb2xvcl9zdHJpbmc7XG4gICAgLy8gZW1kIG9mIHNpbXBsZSB0eXBlLWluIGNvbG9yc1xuXG4gICAgLy8gYXJyYXkgb2YgY29sb3IgZGVmaW5pdGlvbiBvYmplY3RzXG4gICAgdmFyIGNvbG9yX2RlZnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooKD86XFxkP1xcLik/XFxkKVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2JhKDEyMywgMjM0LCA0NSwgMC44KScsICdyZ2JhKDI1NSwyMzQsMjQ1LDEuMCknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGJpdHNbNF0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2IoMTIzLCAyMzQsIDQ1KScsICdyZ2IoMjU1LDIzNCwyNDUpJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjMDBmZjAwJywgJzMzNjY5OSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnI2ZiMCcsICdmMGYnXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdICsgYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdICsgYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdICsgYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzZWFyY2ggdGhyb3VnaCB0aGUgZGVmaW5pdGlvbnMgdG8gZmluZCBhIG1hdGNoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZSA9IGNvbG9yX2RlZnNbaV0ucmU7XG4gICAgICAgIHZhciBwcm9jZXNzb3IgPSBjb2xvcl9kZWZzW2ldLnByb2Nlc3M7XG4gICAgICAgIHZhciBiaXRzID0gcmUuZXhlYyhjb2xvcl9zdHJpbmcpO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gcHJvY2Vzc29yKGJpdHMpO1xuICAgICAgICAgICAgdGhpcy5yID0gY2hhbm5lbHNbMF07XG4gICAgICAgICAgICB0aGlzLmcgPSBjaGFubmVsc1sxXTtcbiAgICAgICAgICAgIHRoaXMuYiA9IGNoYW5uZWxzWzJdO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gY2hhbm5lbHNbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUvY2xlYW51cCB2YWx1ZXNcbiAgICB0aGlzLnIgPSAodGhpcy5yIDwgMCB8fCBpc05hTih0aGlzLnIpKSA/IDAgOiAoKHRoaXMuciA+IDI1NSkgPyAyNTUgOiB0aGlzLnIpO1xuICAgIHRoaXMuZyA9ICh0aGlzLmcgPCAwIHx8IGlzTmFOKHRoaXMuZykpID8gMCA6ICgodGhpcy5nID4gMjU1KSA/IDI1NSA6IHRoaXMuZyk7XG4gICAgdGhpcy5iID0gKHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSkgPyAwIDogKCh0aGlzLmIgPiAyNTUpID8gMjU1IDogdGhpcy5iKTtcbiAgICB0aGlzLmFscGhhID0gKHRoaXMuYWxwaGEgPCAwKSA/IDAgOiAoKHRoaXMuYWxwaGEgPiAxLjAgfHwgaXNOYU4odGhpcy5hbHBoYSkpID8gMS4wIDogdGhpcy5hbHBoYSk7XG5cbiAgICAvLyBzb21lIGdldHRlcnNcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9SR0JBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJywgJyArIHRoaXMuYWxwaGEgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9IZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSByID0gJzAnICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkgYiA9ICcwJyArIGI7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgfVxuXG4gICAgLy8gaGVscFxuICAgIHRoaXMuZ2V0SGVscFhNTCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZXhhbXBsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgLy8gYWRkIHJlZ2V4cHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXhhbXBsZSA9IGNvbG9yX2RlZnNbaV0uZXhhbXBsZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhhbXBsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBleGFtcGxlW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0eXBlLWluIGNvbG9yc1xuICAgICAgICBmb3IgKHZhciBzYyBpbiBzaW1wbGVfY29sb3JzKSB7XG4gICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gc2M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgeG1sLnNldEF0dHJpYnV0ZSgnaWQnLCAncmdiY29sb3ItZXhhbXBsZXMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9jb2xvciA9IG5ldyBSR0JDb2xvcihleGFtcGxlc1tpXSk7XG4gICAgICAgICAgICAgICAgdmFyIGV4YW1wbGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luOiAzcHg7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdiYWNrZ3JvdW5kOicgKyBsaXN0X2NvbG9yLnRvSGV4KCkgKyAnOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdjb2xvcjonICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd0ZXN0JykpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW1fdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgICAgICAgJyAnICsgZXhhbXBsZXNbaV0gKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvUkdCKCkgKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeG1sLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWw7XG5cbiAgICB9XG5cbn1cbiIsIi8qXG4gICAgU3RhY2tCbHVyIC0gYSBmYXN0IGFsbW9zdCBHYXVzc2lhbiBCbHVyIEZvciBDYW52YXNcblxuICAgIFZlcnNpb246ICAgICAwLjVcbiAgICBBdXRob3I6ICAgICAgICBNYXJpbyBLbGluZ2VtYW5uXG4gICAgQ29udGFjdDogICAgIG1hcmlvQHF1YXNpbW9uZG8uY29tXG4gICAgV2Vic2l0ZTogICAgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXNcbiAgICBUd2l0dGVyOiAgICBAcXVhc2ltb25kb1xuXG4gICAgSW4gY2FzZSB5b3UgZmluZCB0aGlzIGNsYXNzIHVzZWZ1bCAtIGVzcGVjaWFsbHkgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyAtXG4gICAgSSBhbSBub3QgdG90YWxseSB1bmhhcHB5IGZvciBhIHNtYWxsIGRvbmF0aW9uIHRvIG15IFBheVBhbCBhY2NvdW50XG4gICAgbWFyaW9AcXVhc2ltb25kby5kZVxuXG4gICAgT3Igc3VwcG9ydCBtZSBvbiBmbGF0dHI6XG4gICAgaHR0cHM6Ly9mbGF0dHIuY29tL3RoaW5nLzcyNzkxL1N0YWNrQmx1ci1hLWZhc3QtYWxtb3N0LUdhdXNzaWFuLUJsdXItRWZmZWN0LWZvci1DYW52YXNKYXZhc2NyaXB0XG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMTAgTWFyaW8gS2xpbmdlbWFublxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAgIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAgIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAgIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgICBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gICAgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICAgIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gICAgKi9cblxuXG52YXIgbXVsX3RhYmxlID0gW1xuICAgIDUxMiw1MTIsNDU2LDUxMiwzMjgsNDU2LDMzNSw1MTIsNDA1LDMyOCwyNzEsNDU2LDM4OCwzMzUsMjkyLDUxMixcbiAgICA0NTQsNDA1LDM2NCwzMjgsMjk4LDI3MSw0OTYsNDU2LDQyMCwzODgsMzYwLDMzNSwzMTIsMjkyLDI3Myw1MTIsXG4gICAgNDgyLDQ1NCw0MjgsNDA1LDM4MywzNjQsMzQ1LDMyOCwzMTIsMjk4LDI4NCwyNzEsMjU5LDQ5Niw0NzUsNDU2LFxuICAgIDQzNyw0MjAsNDA0LDM4OCwzNzQsMzYwLDM0NywzMzUsMzIzLDMxMiwzMDIsMjkyLDI4MiwyNzMsMjY1LDUxMixcbiAgICA0OTcsNDgyLDQ2OCw0NTQsNDQxLDQyOCw0MTcsNDA1LDM5NCwzODMsMzczLDM2NCwzNTQsMzQ1LDMzNywzMjgsXG4gICAgMzIwLDMxMiwzMDUsMjk4LDI5MSwyODQsMjc4LDI3MSwyNjUsMjU5LDUwNyw0OTYsNDg1LDQ3NSw0NjUsNDU2LFxuICAgIDQ0Niw0MzcsNDI4LDQyMCw0MTIsNDA0LDM5NiwzODgsMzgxLDM3NCwzNjcsMzYwLDM1NCwzNDcsMzQxLDMzNSxcbiAgICAzMjksMzIzLDMxOCwzMTIsMzA3LDMwMiwyOTcsMjkyLDI4NywyODIsMjc4LDI3MywyNjksMjY1LDI2MSw1MTIsXG4gICAgNTA1LDQ5Nyw0ODksNDgyLDQ3NSw0NjgsNDYxLDQ1NCw0NDcsNDQxLDQzNSw0MjgsNDIyLDQxNyw0MTEsNDA1LFxuICAgIDM5OSwzOTQsMzg5LDM4MywzNzgsMzczLDM2OCwzNjQsMzU5LDM1NCwzNTAsMzQ1LDM0MSwzMzcsMzMyLDMyOCxcbiAgICAzMjQsMzIwLDMxNiwzMTIsMzA5LDMwNSwzMDEsMjk4LDI5NCwyOTEsMjg3LDI4NCwyODEsMjc4LDI3NCwyNzEsXG4gICAgMjY4LDI2NSwyNjIsMjU5LDI1Nyw1MDcsNTAxLDQ5Niw0OTEsNDg1LDQ4MCw0NzUsNDcwLDQ2NSw0NjAsNDU2LFxuICAgIDQ1MSw0NDYsNDQyLDQzNyw0MzMsNDI4LDQyNCw0MjAsNDE2LDQxMiw0MDgsNDA0LDQwMCwzOTYsMzkyLDM4OCxcbiAgICAzODUsMzgxLDM3NywzNzQsMzcwLDM2NywzNjMsMzYwLDM1NywzNTQsMzUwLDM0NywzNDQsMzQxLDMzOCwzMzUsXG4gICAgMzMyLDMyOSwzMjYsMzIzLDMyMCwzMTgsMzE1LDMxMiwzMTAsMzA3LDMwNCwzMDIsMjk5LDI5NywyOTQsMjkyLFxuICAgIDI4OSwyODcsMjg1LDI4MiwyODAsMjc4LDI3NSwyNzMsMjcxLDI2OSwyNjcsMjY1LDI2MywyNjEsMjU5XTtcblxuXG52YXIgc2hnX3RhYmxlID0gW1xuICAgIDksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsXG4gICAgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTksXG4gICAgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsXG4gICAgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCBdO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsKVxue1xuICAgIGlmICh0eXBlb2YoaW1nKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFpbWcgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHcgPSBpbWcubmF0dXJhbFdpZHRoO1xuICAgIHZhciBoID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuc3R5bGUud2lkdGggID0gdyArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG5cbiAgICBpZiAoYmx1ckFscGhhQ2hhbm5lbClcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICAgIGVsc2VcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKVxuICAgICAgICB2YXIgY2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpXG4gICAgICAgIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGltYWdlRGF0YTtcblxuICAgIHRyeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgbG9jYWwgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sIGFfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLCBhX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sIGFfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCBwYSwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3ArM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWkrM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgIT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldID0gcGl4ZWxzW3lpKzFdID0gcGl4ZWxzW3lpKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcbiAgICAgICAgICAgIGFfc3VtICs9IGFfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3lpKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3ArM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSA9IHBpeGVsc1twKzFdID0gcGl4ZWxzW3ArMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG4gICAgICAgICAgICBhX3N1bSArPSAoYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcF0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIEJsdXJTdGFjaygpXG57XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLmcgPSAwO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5hID0gMDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbWFnZTogcHJvY2Vzc0ltYWdlLFxuICAgIGNhbnZhc1JHQkE6IHByb2Nlc3NDYW52YXNSR0JBLFxuICAgIGNhbnZhc1JHQjogcHJvY2Vzc0NhbnZhc1JHQixcbiAgICBpbWFnZURhdGFSR0JBOiBwcm9jZXNzSW1hZ2VEYXRhUkdCQSxcbiAgICBpbWFnZURhdGFSR0I6IHByb2Nlc3NJbWFnZURhdGFSR0Jcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBiaWdJbnQgPSByZXF1aXJlKCdiaWctaW50ZWdlcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmlnSW50VG9TY2lOb3RhdGlvbihuLCBmcmFjdGlvbkRpZ2l0cz0yKSB7IFxuXHQvKiBTY2llbnRpZmljIG5vdGF0aW9uIGZvciBCaWdJbnQgbnVtYmVycyAobmVlZHMgc29tZSBvcHRpbWl6YXRpb24pICovXG5cdGNvbnN0IG5TdHIgPSBuLnRvU3RyaW5nKDEwKTtcblx0Y29uc3QgbkxlbiA9IG5TdHIubGVuZ3RoO1xuXHRjb25zdCBmcmFjdGlvbiA9IG5MZW4tMSA8IDE2ID8gbkxlbi0xIDogMTY7XG5cdGNvbnN0IFt3aG9sZXMsIHBhcnRzXSA9IFtuU3RyLnN1YnN0cigwLDEpLCBuTGVuID4gMSA/IG5TdHIuc3Vic3RyKDEsZnJhY3Rpb24pIDogMF07XG5cdGxldCBuRmxvYXQgPSBwYXJzZUZsb2F0KHdob2xlcysnLicrcGFydHMpO1xuXHRuRmxvYXQgPSBuRmxvYXQudG9QcmVjaXNpb24oIChmcmFjdGlvbkRpZ2l0cysxID4gcGFydHMubGVuZ3RoID8gMiA6IGZyYWN0aW9uRGlnaXRzKzEpICk7XG5cdHJldHVybiB0ZXhgXFxhcHByb3ggJHtuRmxvYXR9IFxcdGltZXMgMTBeeyR7bkxlbi0xfX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQmlnSW50KG1heCkge1xuXHRyZXR1cm4gYmlnSW50LnJhbmRCZXR3ZWVuKDAsbWF4KTtcbn1cblxuIiwiaW1wb3J0ICogYXMgY2FudmcgZnJvbSAnY2FudmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGpRdWVyeSByZXBsYWNlbWVudHM6XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBzaG93KGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgLy8gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgaGlkZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHRvZ2dsZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgcmV0dXJuICggIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSApO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogcGFkcyAwcyBiZWZvcmUgbnVtYmVyIHN0cmluZ1xuICAgICAgIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5OTg4MjJcbiAgICAgICBDcmVkaXRzIHRvOiBJbmZpbml0aWVzTG9vcCAqL1xuXG4gICAgdmFyIHMgPSBudW0rXCJcIjsgLy8gY29udmVydHMgbnVtYmVyIHRvIHN0cmluZyBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSBcIjBcIiArIHM7XG4gICAgcmV0dXJuIHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3ZnKHN2Z0VsLCBuYW1lKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDY0MDM1ODlcbiAgICBDcmVkaXRzIHRvOiBkZWZnaGkxOTc3LCBEYXZlVGhlU2NpZW50aXN0LCBzZW56ICovXG4gICAgc3ZnRWwuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICB2YXIgc3ZnRGF0YSA9IHN2Z0VsLm91dGVySFRNTDtcbiAgICB2YXIgcHJlZmFjZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/Plxcclxcbic7XG4gICAgdmFyIHN2Z0Jsb2IgPSBuZXcgQmxvYihbcHJlZmFjZSwgc3ZnRGF0YV0sIHt0eXBlOlwiaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04XCJ9KTtcbiAgICB2YXIgc3ZnVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdmdCbG9iKTtcbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBzdmdVcmw7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJbWcoc3ZnLCBuYW1lLCBzY2FsZT0xKSB7ICAgIFxuICAgIC8qIFVzaW5nIGNhbnZnIGxpYi4gaHR0cHM6Ly9naXRodWIuY29tL2NhbnZnL2NhbnZnIGFuZCBwYXJ0cyBvZiB0aGUgYXBwcm9hY2ggZm9yIHNhdmVTdmcuXG4gICAgVGhhbmtzIHRvIGpiZWFyZDQgaW46IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTc2MDM0LzEyMDQwNDcgZm9yIHRoZSBzdWdnZXN0aW9uICovXG5cbiAgICBjb25zdCB3ID0gc3ZnLmdldEJCb3goKS53aWR0aDtcbiAgICBjb25zdCBoID0gc3ZnLmdldEJCb3goKS5oZWlnaHQ7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywnZHJhd2luZ0FyZWEnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgY2FudmFzLndpZHRoID0gdyAqIHNjYWxlO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoICogc2NhbGU7XG5cbiAgICBjYW52Zyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSwgc3ZnLm91dGVySFRNTCwgeyBpZ25vcmVEaW1lbnNpb25zOnRydWUsIGlnbm9yZU1vdXNlOiB0cnVlLCBpZ25vcmVBbmltYXRpb246IHRydWUsXG4gICAgc2NhbGVXaWR0aDogdyAqIHNjYWxlLFxuICAgIHNjYWxlSGVpZ2h0OiBoICogc2NhbGUgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdBcmVhJykgKTtcblxuICAgIGNvbnN0IGltZ1VybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG5cbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBpbWdVcmw7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoZm9ybWF0LCBzdmcsIG5hbWUsIHNjYWxlKSB7XG4gICAgLy8gZXhwb3J0cyBncmFwaHMgaW50byBzdmdcbiAgICBcbiAgICBuYW1lID0gbmFtZSB8fMKgc3ZnLnBhcmVudE5vZGUuaWQ7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wKCk7XG5cblx0dHJ5IHtcbiAgICBzd2l0Y2goZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICBzYXZlU3ZnKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycuc3ZnJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICBzYXZlSW1nKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycucG5nJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVNWRyhzdmcsIGNvbnRhaW5lciwgcmF0aW8pIHtcbiAgICBjb25zdCBwcmVmaXhlcyA9IFsnLW1zLXRyYW5zZm9ybScsJy13ZWJraXQtdHJhbnNmb3JtJywnLW1vei10cmFuc2Zvcm0nLCctby10cmFuc2Zvcm0nLCd0cmFuc2Zvcm0nXTtcbiAgICBwcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgIHN2Zy5zdHlsZVtwcmVmaXhdID0gYHNjYWxlKCR7cmF0aW99KSB0cmFuc2xhdGUoMCwwKWA7XG4gICAgfSk7XG4gICAgLy8gY29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoc3ZnLmdldEJCb3goKS53aWR0aCAqIHJhdGlvKSArICdweCc7XG4gICAgLy8gY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHN2Zy5nZXRCQm94KCkuaGVpZ2h0ICogcmF0aW8pICsgJ3B4JztcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBzdmcuZ2V0QkJveCgpLndpZHRoICogcmF0aW8gKyAncHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBzdmcuZ2V0QkJveCgpLmhlaWdodCAqIHJhdGlvICsgJ3B4Jztcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHBlcm11dGVBcnJheSA9IGlucHV0QXJyYXkgPT4gaW5wdXRBcnJheS5yZWR1Y2UoZnVuY3Rpb24gcGVybXV0ZShyZXMsIGl0ZW0sIGtleSwgYXJyKSB7XG4gIC8qIFBlcm11dGF0aW9uIGFsZ29yaXRobSBmb3IgYXJyYXlzIG9mIGFyYml0cmFyeSBsZW5ndGhcbiAgICAgKGNyZWRpdHMgJiB0aGFua3MgdG8gdXNlciBtb25rZXk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA2MzQ0MCkgKi9cbiAgICByZXR1cm4gcmVzLmNvbmNhdChhcnIubGVuZ3RoID4gMSAmJiBhcnIuc2xpY2UoMCwga2V5KVxuICAgICAgLmNvbmNhdChhcnIuc2xpY2Uoa2V5ICsgMSkpXG4gICAgICAucmVkdWNlKHBlcm11dGUsIFtdKVxuICAgICAgLm1hcChmdW5jdGlvbihwZXJtKSB7IHJldHVybiBbaXRlbV0uY29uY2F0KHBlcm0pOyB9KSB8fCBbW2l0ZW1dXSk7XG59LCBbXSk7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZVN0ciA9IChzdHIsbGltaXQsYXBwZW5kaXg9JycpID0+IHN0ci5sZW5ndGggPiBsaW1pdCA/IChzdHIuc3Vic3RyKDAsbGltaXQpICsgYXBwZW5kaXgpIDogc3RyO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZU1hcHBpbmcgPSAobyxiaWplY3RpdmU9ZmFsc2UpID0+IE9iamVjdC5rZXlzKG8pLnJlZHVjZSgociwgaykgPT4gT2JqZWN0LmFzc2lnbihyLCB7IFtvW2tdXTogKGJpamVjdGl2ZSA/IGsgOiAocltvW2tdXSB8fCBbXSkuY29uY2F0KGspKSB9KSwge30pOyAvLyBtb2RpZmllZCBmcm9tIGFuc3dlciBieSBOaW5hIFNjaG9sejogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1NzI4ODUwXG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2Zvcm1mb3JtLXRvb2xib3ggXG4qL1xuXG5leHBvcnQgY29uc3QgVkFSQ09ERSA9ICh7J2EnOifhtKwnLCAnYic6J+G0ricsICdjJzon4bWTJywgJ2QnOifhtLAnLCAnZSc6J+G0sScsICdmJzon4bWOJywgJ2cnOifhtLMnLCAnaCc6J+G0tCcsICdpJzon4bS1JywgJ2onOifhtLYnLCAnayc6J+G0tycsICdsJzon4bS4JywgJ20nOifhtLknLCAnbic6J+G0uicsICdvJzon4bS8JywgJ3AnOifhtL4nLCAncSc6J+G0vScsICdyJzon4bS/JywgJ3MnOifhtZUnLCAndCc6J+G1gCcsICd1Jzon4bWBJywgJ3YnOifhtZsnLCAndyc6J+G1gicsICd4Jzon4bWhJywgJ3knOifhtZ4nLCAneic6J+G1nCcsICdhbHQnOifhtb0nLCAnMnInOifhtbMnLCAnMnIrMSc6J+G1sid9KTtcblxuZXhwb3J0IGNvbnN0IFZBUkNPREVfUkVWID0gcmV2ZXJzZU1hcHBpbmcoVkFSQ09ERSx0cnVlKTtcblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDEwLzIwMjBcbiovXG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzTGFiZWwgPSAobGFiZWwsIG1vZGU9J2h0bWwnKSA9PiB7XG4gICAgLyogTGFiZWwgcHJvY2Vzc2luZyB0byBoYW5kbGUgc3ViL3N1cGVyc2NyaXB0ICovXG5cbiAgICBsZXQgdGFnUmV2ID0gW107IC8vIHRhZ1JldiByZXNldHMgeS1wb3NpdGlvbiBvZiBsYWJlbCBhZnRlciBzdWJzY3JpcHRzIChuZWVkZWQgZm9yIHN2ZylcbiAgICBpZiAobW9kZSA9PT0gJ3N2ZycpIHRhZ1JldiA9IFsnPHRzcGFuIHk9XCIwXCI+JywnPC90c3Bhbj4nXTtcbiAgICBlbHNlIHRhZ1JldiA9IFsnJywnJ107XG5cbiAgICBpZiAobGFiZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBsYWJlbFBhcnRzID0gbGFiZWwuc3BsaXQoJ18nKTtcblxuICAgICAgICBsZXQgdGFnU3ViID0gW107XG4gICAgICAgIGlmIChtb2RlID09PSAnc3ZnJykgdGFnU3ViID0gW2A8dHNwYW4gc3R5bGU9XCJmb250LXNpemU6IC44ZW07XCIgZHg9XCIwXCIgZHk9XCI2XCI+YCwnPC90c3Bhbj4nXTtcbiAgICAgICAgZWxzZSB0YWdTdWIgPSBbJzxzdWI+JywnPC9zdWI+J107XG5cbiAgICAgICAgcmV0dXJuIChsYWJlbFBhcnRzLmxlbmd0aCA+IDEpID8gYCR7dGFnUmV2WzBdICsgbGFiZWxQYXJ0c1swXSArIHRhZ1JldlsxXSArIHRhZ1N1YlswXSArIGxhYmVsUGFydHNbMV0gKyB0YWdTdWJbMV19YCA6IHRhZ1JldlswXStsYWJlbCt0YWdSZXZbMV07XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIHRhZ1JldlswXStsYWJlbCt0YWdSZXZbMV07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVmFsaWRhdGlvbiA9IChmbiwgZXJyb3JNc2cpID0+ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2F0YTogYnJhbmNoID0+IHJlc3VsdCA/IGJyYW5jaC5zdWNjZXNzKHJlc3VsdCkgOiBicmFuY2guZXJyb3IoZXJyb3JNc2cpXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZUxpdGVyYWxzID0gKHN0ciwgc2VwPSdcIicsIHJlcGw9J+KAvScpID0+IHtcbiAgICBpZiAoIWNoZWNrTGl0ZXJhbE1hdGNoaW5nKHN0ciwgc2VwKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgc3RyU2VwID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgcmV0dXJuIHN0clNlcC5maWx0ZXIoKHN1YnN0cixpLGFycikgPT4gaSAlIDIgPT09IDAgfHwgaSA9PT0gYXJyLmxlbmd0aC0xKS5qb2luKHJlcGwpO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tMaXRlcmFsTWF0Y2hpbmcgPSAoc3RyLCBzZXA9J1wiJykgPT4ge1xuICAgIGNvbnN0IHN0clNlcCA9IHN0ci5zcGxpdChzZXApO1xuICAgIHJldHVybiBzdHJTZXAubGVuZ3RoICUgMiA9PT0gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcmFja2V0VW5pdHMgPSAoZm9ybXVsYSwgYnI9e29wZW46J3snLCBjbG9zZTonfSd9LCBtYXRjaGVzPVtdKSA9PiB7XG4gICAgY29uc3QgcmVFbnRyaWVzID0gZm9ybXVsYS5tYXRjaChuZXcgUmVnRXhwKGBcXFxcJHtici5vcGVufVteJHtici5vcGVufSR7YnIuY2xvc2V9XSo/XFxcXCR7YnIuY2xvc2V9YCwgJ2cnKSk7XG4gICAgaWYgKCFyZUVudHJpZXMpIHJldHVybiBtYXRjaGVzO1xuXG4gICAgY29uc3QgcmVkdWNlZEZvcm11bGEgPSByZUVudHJpZXMucmVkdWNlKChzdHIsIHBhdHRlcm4pID0+IHN0ci5yZXBsYWNlKHBhdHRlcm4sICfigKInKSxmb3JtdWxhKTtcblxuICAgIHJldHVybiBnZXRCcmFja2V0VW5pdHMocmVkdWNlZEZvcm11bGEsIGJyLCBbLi4ubWF0Y2hlcywgLi4ucmVFbnRyaWVzXSk7XG59XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMC8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5cbmV4cG9ydCBjb25zdCBjaGVja0JyYWNrZXRNYXRjaGluZyA9IChzdHIsIG9wZW5Ccj0nKCcsIGNsb3NlQnI9JyknKSA9PiB7XG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTsgLy8gZW1wdHkgc3RyaW5ncyBjYW4ndCBoYXZlIGJyYWNrZXRzLCBzbyB0aGF0J3MgZmluZVxuICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCxhcnIpID0+IHtcbiAgICBpZiAoY3VyciA9PT0gb3BlbkJyKSBhY2MrKztcbiAgICBlbHNlIGlmIChjdXJyID09PSBjbG9zZUJyKSB7XG4gICAgICBpZiAoYWNjID09PSBudWxsKSByZXR1cm4gTmFOO1xuICAgICAgYWNjLS07XG4gICAgICB9XG4gICAgaWYgKGlkeCA9PT0gYXJyLmxlbmd0aC0xICYmIGFjYyA9PT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxudWxsKSA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbEFycmF5cyA9IChhcnJBLCBhcnJCKSA9PiB7XG4gICAgaWYgKGFyckEgPT09IHVuZGVmaW5lZCB8fCBhcnJCID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gYXJyQS5sZW5ndGggPT09IGFyckIubGVuZ3RoICYmIGFyckEuZXZlcnkoYSA9PiBhcnJCLnNvbWUoYiA9PiBhID09PSBiKSk7XG59XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMi8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzLzc2OGRiZTE5ZWQ0N2UyODEgKFN0YXRlIG1hY2hpbmVzKVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxleFggKGlucHV0LCBydWxlTWFwKSB7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCgnICcpLmpvaW4oJycpO1xuICAgIGNvbnN0IGNvbXBSdWxlID0gY29tcFJlZ0V4cChydWxlTWFwLm1hcChyID0+IHJbMV0pKTtcbiAgICBcbiAgICByZXR1cm4gWy4uLmlucHV0Lm1hdGNoQWxsKGNvbXBSdWxlKV0ubWFwKChtYXRjaCxpKSA9PiB7XG4gICAgICBjb25zdCBpZHggPSBtYXRjaC5maWx0ZXIoKF8saSkgPT4gaSA+IDApLmZpbmRJbmRleChtID0+IG0gIT0gdW5kZWZpbmVkKTtcbiAgICAgIHJldHVybiB7dG9rZW46IHJ1bGVNYXBbaWR4XVswXSwgdmFsdWU6IChydWxlTWFwW2lkeF1bMl0gPyBydWxlTWFwW2lkeF1bMl0obWF0Y2hbMF0pIDogdW5kZWZpbmVkICkgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBSZWdFeHAgPSBwYXR0ZXJucyA9PiBuZXcgUmVnRXhwKHBhdHRlcm5zLnJlZHVjZSgoY29tcCxyLGkpID0+IGNvbXArKGkgPiAwID8gJ3wnIDogJycpK2AoJHtyfSlgLCcnKSwgJ2cnKTtcblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAzLzIwMjFcbiovXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmaXRTdmcoc2VsZWN0b3IsIHBhZGRpbmcpIHtcbi8vICAgICAvLyBjYWxjdWxhdGUgcmVhbCBkaW1lbnNpb25zIG9mIGEgY2hhcnQgKGFzc3VtZXMgY2hhcnQgaXMgYSBnLWVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gc3ZnKVxuLy8gICAgIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbi8vICAgICAgICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQubm9kZSgpLmdldEJCb3goKS53aWR0aCArIHBhZGRpbmcubGVmdCArIHBhZGRpbmcucmlnaHQpXG4vLyAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLmhlaWdodCArIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b20pO1xuLy8gICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdmdTaXplKHN2Z1RleHQpIHtcblx0Y29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblx0c3ZnLmlubmVySFRNTCA9IHN2Z1RleHQ7XG5cdHN2Zy5zZXRBdHRyaWJ1dGUoJ3gnLCctOTk5OScpO1xuXHRzdmcuc2V0QXR0cmlidXRlKCd5JywnLTk5OTknKTtcblxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuXHRjb25zdCBzaXplID0gc3ZnLmdldEJCb3goKTtcblx0Y29udGFpbmVyLnJlbW92ZSgpO1xuXHRyZXR1cm4geyB3OiBzaXplLndpZHRoLCBoOiBzaXplLmhlaWdodCB9O1xufVxuXG4vKiBCcmVha3Mgc3RyaW5nIHVwIGluIHBhcnRzIG9mIGxlbmd0aCBuICh4IDw9IG4gZm9yIHRoZSBsYXN0IHBhcnQpIFxuICAgZnJvbTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5leHBvcnQgY29uc3QgYnJlYWtTdHIgPSAoc3RyLG49MSkgPT4gWy4uLm5ldyBBcnJheShNYXRoLmNlaWwoc3RyLmxlbmd0aC9uKSldLm1hcCgoZCxpKSA9PiBzdHIuc3Vic3RyKG4qaSxuKSk7XG5cbmV4cG9ydCBjb25zdCBzdmdMaW5lYnJlYWsgPSAoc3RyLCBsaW5lU2hpZnQpID0+IGA8dHNwYW4geD1cIjBcIiBkeT1cIiR7bGluZVNoaWZ0fVwiPiR7c3RyfTwvdHNwYW4+YDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGQ2FsYyB7XG4gICAgXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICBmb3JtZm9ybSBjb3JlIG1vZHVsZSAnY2FsYydcbiAgICAvLyAgICAgLS0gc2luY2UgMjAxOCwgYnkgUGV0ZXIgSG9mbWFubiAoZm9ybXNhbmRsaW5lcy5ldSlcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBjb21tdXRhdGl2ZSByZWxhdGlvbjogeCB5ICovXG4gICAgICAgIGlmICggZnggPiAzIHx8IGZ4IDwgMCB8fCBmeSA+IDMgfHwgZnkgPCAwICkgcmV0dXJuIC05ODtcbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSAwIHx8IGZ5ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeTsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICggZnkgPT09IDAgfHwgZnggPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSBmeSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEM1IC9UaGVvcmVtIDVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggKGZ4ID09PSAyICYmIGZ5ID09PSAzKSB8fCAoZnggPT09IDMgJiYgZnkgPT09IDIpICkgeyBcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBDMiAvVGhlb3JlbSAxMyArIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciByZWxhdGlvbiB3aXRoIG4gdmFyaWFibGVzOiB4XzEgLi4uIHhfbiAqL1xuICAgICAgICBpZiAoZlZhbHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZWYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWxfbG9naWMoIHZhbCxmVmFsc1tpXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBpbnZlcnNpb24vbmVnYXRpb246ICh4KSAqL1xuICAgICAgICBzd2l0Y2ggKGZ4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIG4gaW52ZXJzaW9ucy9uZWdhdGlvbnM6ICh4KSAqL1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBmeDtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmludl9sb2dpYyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludl9sb2dpYyhmeCk7XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgUkUtRU5UUlkgRk9STSBDQUxDVUxBVElPTlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHVGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuXG4gICAgLy8gc3RhdGljIHJlRW50cnkoLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkocmVFdmVuLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuXG4gICAgc3RhdGljIHJlRW50cnkocmVFdmVuLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgLi4uZlZhbHMpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBkaWZmZXJlbnQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zXG4gICAgICAgICBbQXJndW1lbnRzXSByZUV2ZW46IGV2ZW4gcmUtZW50cnktbnVtYmVyPyB8IGxhc3RPcGVuOiBsYXN0IHZhcmlhYmxlIG5vdCBjcm9zc2VkPyB8IGZWYWxzOiB2YXJpYWJsZXMgKDAvMS8yLzMpXG5cbiAgICAgICAgIE5vdGU6IGNhbGN1bGF0aW9uIG1hbnVhbGx5IHZlcmlmaWVkIGZvcuKApiBcbiAgICAgICAgIC0gKHVGT1JNIGExLCByZXMyKSDGkj0oKMaSeCl5KVxuICAgICAgICAgLSAoaUZPUk0gYTIsIHJlczIpIMaSKMaSKT0oYTF4KXlcbiAgICAgICAgIC0gKGlGT1JNIGIxLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KCgoxpJ4KXkpeikgxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKGlGT1JNIGIyLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KChiMXgpeSl6XG4gICAgICAgICAtICh1Rk9STSBjMSwgcmVzMykgWzJ8cnxdIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtICh1Rk9STSBjMiwgcmVzMykgWzJ8cnxdIMaSKMaSKT0oKGMxeCl5KXpcbiAgICAgICAgIFNob3VsZCB3b3JrIHdpdGggcmVzb2x1dGlvbnMgb2YgNCwgNSwg4oCmIGJ1dCBuZWVkcyB2ZXJpZmljYXRpb24uXG5cbiAgICAgICAgIE15IGJhc2ljIG9ic2VydmF0aW9ucyBhYm91dCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXM6XG4gICAgICAgICAtIEV2ZXJ5IHJlLWVudHJ5IEZPUk0gbmVlZHMgdG8gaGF2ZSBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIHRvIGJlIHNlbGYtZXF1aXZhbGVudCAodUZPUk0pOiDGkiA9ICgoxpIxKTIpIC5cbiAgICAgICAgICAgU28gd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbnMsIHdlIGFsd2F5cyBuZWVkIHRvIGhhdmUgYW4gZXZlbiByZS1lbnRyeSBudW1iZXI6IMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgLlxuICAgICAgICAgLSBUbyBiZSBhYmxlIHRvIGFsc28gaGF2ZSB1bmV2ZW4gcmUtZW50cnkgbnVtYmVycywgZWl0aGVyIHRoZSByZXNvbHV0aW9uIG5lZWRzIHRvIGJlIGV2ZW5cbiAgICAgICAgICAgb3Igd2UgaGF2ZSB0byBlbWJlZCB0aGUgcmUtZW50cnkgRk9STSBpbnRvIGEgbm9ybWFsIEZPUk0gdGhhdCBpcyBvbmUgcmUtZW50cnkgb2YgdGhhdCBGT1JNOlxuICAgICAgICAgICDGkijGkikgPSAoKCjGkjEpMikzKSA8LT4gKCgoIMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgMSkyKTMpIC5cbiAgICAgICAgICAgVGhlc2UgY29tcG9zaXRpb25hbCByZS1lbnRyeSBGT1JNcyBhcmUgaUZPUk1zLCBzaW5jZSB0aGV5IHJlc29sdmUgdG86ICggxpIgPSAoKMaSKSkgKSAuXG4gICAgICAgICAtIElmIHRoZSBvdXRtb3N0IGNyb3NzIG9mIHRoZSBGT1JNIHNob3VsZCBiZSBsZWZ0IG91dCAob3BlbiBGT1JNcyksIHRoaXMgY2FuIG9ubHkgYmUgZG9uZSBpZiB3ZSBlbWJlZFxuICAgICAgICAgICBhIGNvcnJlc3BvbmRpbmcgY2xvc2VkIEZPUk0gb2YgaXRzZWxmIHRoYXQgZWl0aGVyIGlzIG9yIGVtYmVkcyBpdHMgcmUtZW50cnkgRk9STSAoY2FzZXMgZGVzY3JpYmVkIGFib3ZlKS5cbiAgICAgICAgICAgSSBiZWxpZXZlIHRoZSBvdXRtb3N0IChvcGVuKSBGT1JNIGlzIG5vdCBiZWluZyBjb3VudGVkIGFzIGEgcmUtZW50cnkgYXQgYWxsLCBzaW5jZSBpdCdzIG1pc3NpbmcgYSBjcm9zcy5cblxuICAgICAgICAgVGhpcyBhbGdvcml0aG0gaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBydWxlcy9wYXR0ZXJucy9vYnNlcnZhdGlvbnMgZGVyaXZlZCBmcm9tIFwidUZPUk0gaUZPUk1cIjpcbiAgICAgICAgIFsxXSBJZiAxIGlzIHNvbWV3aGVyZSBpbiB0aGUgRk9STSwgaXQgd2lsbCBkb21pbmF0ZSBhbGwgdmFsdWVzIGluIHNwYWNlcyBkZWVwZXIgdGhhbiBtLFxuICAgICAgICAgICAgIHNvIHRoZSByZS1lbnRyeSBpcyBvYnNvbGV0ZSBhbmQgd2UgY2FuIHN0YXJ0IGNhbGN1bGF0ZSBmcm9tIHRoaXMgc3BhY2UuIFxuICAgICAgICAgWzJdIElmIHRoZXJlIGFyZSAzLzIgb3IgMi8zIHBhaXJzIGluIHRoZSBGT1JNLCB0aGUgZmlyc3QgdGVybSBjYW4gYmUgdHVybmVkIGludG8gMSwgc2luY2VcbiAgICAgICAgICAgICB0aHJvdWdoIEMyIHRoZSBzZWNvbmQgdGVybSBjYW4gYWx3YXlzIGJlIGdlbmVyYXRlZCBpbnRvIGl0cyBzcGFjZSwgd2hlcmUgMjMgPSAxLlxuICAgICAgICAgICAgIFRoZW4gd2UgY2FuIHByb2NlZWQgYXMgaW4gKDEpLlxuICAgICAgICAgWzNdIElmIGFsbCB2YXJpYWJsZXMgYXJlIDAsIHdlIHdpbGwgaGF2ZSBlaXRoZXIgYSB1Rk9STSBvciBpRk9STSwgaGVuY2UgdGhlIHZhbHVlIG9mIHRoZVxuICAgICAgICAgICAgIEZPUk0gd2lsbCBiZSBlaXRoZXIgMiBvciAzLCBkZXBlbmRpbmcgb24gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZCwgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTEpXG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgZXZlbiAgICAgKGMxLCBjMilcbiAgICAgICAgICAgICAtIDM6IG9wZW4sICAgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTIpXG4gICAgICAgICAgICAgLSAzOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgb2RkICAgICAgKGIxLCBiMilcbiAgICAgICAgIFNpbmNlIFsxXVsyXVszXSBlbGltaW5hdGUgYWxsIG90aGVyIGNhc2VzLCBhbGwgdmFyaWFibGVzIGFyZSBub3cgZWl0aGVyIDIgb3IgMyAoYW5kIG1heWJlIDBzKSxcbiAgICAgICAgIHNvIHVzaW5nIEMyIGFzIGRlc2NyaWJlZCBhYm92ZSwgb25seSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiB0aGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkOlxuICAgICAgICAgWzRdIElmIHdlIHVzZSB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyIChwLjE2NykgcmVjdXJzaXZlIGlkZW50aXR5ICggbW4gPC0+ICgoxpIpKT3GkiApLCBDMiBhbmQgQzFcbiAgICAgICAgICAgICDGkiBjYW4gYmUgc2VwYXJhdGVkIGZyb20gMi8zIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZS5cbiAgICAgICAgICAgICBUaGVuLCBkZXBlbmRpbmcgb24gdGhlIEZPUk0sIHdlIGhhdmUgZWl0aGVyOlxuICAgICAgICAgICAgIGlGT1JNOiAoxpI9KCjGkikpKSAyLzMgPC0+ICgyKSAyLzMgIG9yXG4gICAgICAgICAgICAgdUZPUk06ICDGkj0oKMaSKSkgMi8zICA8LT4gIDIgMi8zXG4gICAgICAgICBbNV0gSWYgWzRdIGRvZXMgbm90IGFwcGx5IG9yIHdlIGRlY2lkZSBmb3IgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMSAocC4xNjcpOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gXG4gICAgICAgICAgICAgKCBtbiAtPiDGkj0oKMaSKSkgKSwgd2Ugd2lsbCBoYXZlIGVpdGhlciB2YXJpYWJsZXMgb2YgMiBvciAzIHdoaWNoIHdlIGNhbm5vdCByZWxhdGUgdG8gxpIsIHNpbmNlXG4gICAgICAgICAgICAgdGhleSBuZWVkIG5vdCBiZSB0aGUgc2FtZSB1bmRldGVybWluZWQgdmFsdWUuIFVzaW5nIGNhc2UgZGlzdGluY3Rpb24sIHdlIGludGVycHJldCB0aGVcbiAgICAgICAgICAgICBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMyBhcyAwIGFuZCBhcyAxLCBjYWxjdWxhdGUgZXZlcnl0aGluZyB3aXRoIMaSPTIgYW5kIHJlbGF0ZSB0aGUgcmVzdWx0cyBcbiAgICAgICAgICAgICB1c2luZyBjb250cmF2YWxlbmNlOiAoKHgpeSkoKHkpeCkgd2hpY2ggeWllbGRzIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICovXG4gICAgICAgIC8vIGNoZWNrIGlmIGFyZ3VtZW50cyBhcmUgYWN0dWFsbHkgZGVmaW5lZFxuICAgICAgICBpZiAocmVFdmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlRXZlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T3BlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzRXZlbiA9IChmVmFscy5sZW5ndGglMiA9PSAwKTsgLy8gZXZlbiByZXNvbHV0aW9uP1xuICAgICAgICBsZXQgemVyb3MgPSAwOyAvLyB6ZXJvIGNvdW50ZXJcbiAgICAgICAgbGV0IGZpcnN0VW5kZWYgPSAtMTsgLy8gY2F0Y2hlcyBmaXJzdCBtbi8obW4pXG5cbiAgICAgICAgLy8gWzNdIGRldGVybWluZSBpZiB1Rk9STSBvciBpRk9STVxuICAgICAgICBsZXQgdUZPUk0gPSBmYWxzZTtcbiAgICAgICAgbGV0IGlGT1JNID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXNFdmVuKSB7XG4gICAgICAgICAgICBpZiAobGFzdE9wZW4pIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgdUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlRXZlbikgdUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpRk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyAxL20gc29tZXdoZXJlIGluIHhfMSDigKYgeF9uXG4gICAgICAgIGxldCBjYWxjZnJvbSA9IC0xO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxmVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZnggPSBmVmFsc1tpXTsgXG5cbiAgICAgICAgICAgIGlmIChmeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBpOyAvLyBbMV0gaWYgbSBpcyBzb21ld2hlcmUsIHNldCBjYWxjdWxhdGlvbiBzdGFydCBmcm9tIHRoZXJlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAwKSB6ZXJvcysrOyAvLyBbM10ga2VlcCB0cmFjayBvZiBob3cgbWFueSB6ZXJvcyB0aGVyZSBhcmVcbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDIgfHwgZnggPT0gMykgeyAvLyBbMl1cbiAgICAgICAgICAgICAgICBpZihmaXJzdFVuZGVmID09IC0xKSBmaXJzdFVuZGVmID0gaTsgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCAyL3Ugb3IgMy9pLCByZW1lbWJlclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZnggIT0gZlZhbHNbZmlyc3RVbmRlZl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBmaXJzdFVuZGVmOyAvLyBpZiAzLzIgb3IgMi8zIHBhaXJzLCBzZXQgY2FsY3VsYXRpb24gZm9ybSBmaXJzdCB1bmRlZi4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHplcm9zID09IGZWYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gWzNdIGluIGNhc2UgYWxsIHZhcmlhYmxlcyBhcmUgbiwganVzdCByZXR1cm4gdGhlIHVuZGVmaW5lZC9pbWFnaW5hcnkgdmFsdWUgb2YgdGhlIEZPUk1cbiAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIDM7XG4gICAgICAgICAgICBlbHNlIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxjZnJvbSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBbMXwyXSBpZiB0aGVyZSBpcyBhIDEvbSBzb21ld2hlcmUgaW4gdGhlIGZvcm0sIHdlIGNhbiBlYXNpbHkgY2FsY3VsYXRlIHRoZSByZXN0IGZyb20gdGhpcyBwb2ludFxuICAgICAgICAgICAgbGV0IHZhbCA9IDE7XG4gICAgICAgICAgICBmb3IobGV0IGk9Y2FsY2Zyb207IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHsgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaSA9PSBmVmFscy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgdmFsID0gdGhpcy5pbnYoIHRoaXMucmVsKHZhbCxmVmFsc1tpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyB3aGF0IHJlbWFpbnMsIHdpbGwgb25seSBiZSBlaXRoZXJcbiAgICAgICAgLy8gLSAoMSkgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIG1uLzIgICBvclxuICAgICAgICAvLyAtICgyKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgKG1uKS8zXG4gICAgICAgIC8vIFNvIHdlIGNhbGN1bGF0ZSBmcm9tIHRoZSBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMywgYmVjYXVzZSB3aXRoIEMyIChkZWdlbmVyYXRlKSBhbGwgZWxzZSBjYW4gYmUgaWdub3JlZFxuXG4gICAgICAgIC8vIGZvciBldmVuIGNsb3NlZCByZS1lbnRyeS1GT1JNcyB3aXRoIHVuZXZlbiByZXNvbHV0aW9uICh1Rk9STSBjMSksIHdlIG5lZWQgdG8gZG8gdGhlIGNhbGN1bGF0aW9uIHR3aWNlXG4gICAgICAgIGNvbnN0IHJlcGVhdCA9IChyZUV2ZW4gJiYgIXJlc0V2ZW4gJiYgIWxhc3RPcGVuKT8gMjoxO1xuICAgICAgXG4gICAgICAgIGZvcihsZXQgaT0oZlZhbHMubGVuZ3RoKnJlcGVhdCktMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGklZlZhbHMubGVuZ3RoOyAvLyByZXBlYXRlZCB2YXJpYWJsZSBpbmRleFxuXG4gICAgICAgICAgICBpZiAoZlZhbHNbaW5kZXhdID09IDIgfHwgZlZhbHNbaW5kZXhdID09IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpUmV2ID0gKGZWYWxzLmxlbmd0aCpyZXBlYXQpLTEgLSBpOyAvLyByZXZlcnNlIGluZGV4IHRvIGVhc2llciBjaGVjayBmb3IgaW50ZXJwcmV0YXRpb24gMiAoc2VlIG5leHQpXG5cbiAgICAgICAgICAgICAgICBpZiAoYWx0SW50ZXJwciAmJiAoKGxhc3RPcGVuICYmIGlSZXYlMj09MCkgfHwgKCFsYXN0T3BlbiAmJiBpUmV2JTI9PTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyOiByZWN1cnNpdmUgaWRlbnRpdHkgKCDGkj0oKMaSKSkgPC0+IG1uIClcbiAgICAgICAgICAgICAgICAgICAgLy8gxpI9KCjGkikpIGNhbiBiZSBzZXBhcmF0ZWQgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlOyB0aGlzIGlzIHRoZSBjYXNlIGlmIGVpdGhlcjpcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMSkgdGhlIEZPUk0gaXMgb3BlbiBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBldmVuICAgICAgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMikgdGhlIEZPUk0gaXMgY2xvc2VkIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIG9kZFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSBpZiB0aGUgbnVtYmVyIG9mIGNyb3NzZXMgYmV0d2VlbiDGkiBhbmQgb3VyIHZhciBpcyBldmVuLCB3ZSBkaXN0aW5ndWlzaCB0d28gY2FzZXM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIHRoaXMucmVsKDMsZlZhbHNbaW5kZXhdKTsgLy8gaUZPUk06ICjGkj0oKMaSKSkpeCA8LT4gKG1uKSB4XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucmVsKDIsZlZhbHNbaW5kZXhdKTsgICAgICAgLy8gdUZPUk06ICDGkj0oKMaSKSl4ICA8LT4gIG1uIHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFs1XSBpZiBldmVyeXRoaW5nIGVsc2UgZmFpbHMsIHVzZSBjYXNlIGRpc3RpbmN0aW9uOiB1Rk9STSBpRk9STSAocC45NCk7IGFsc28gYWNjb3JkaW5nIHRvOlxuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSAocC4xNjcpIGludGVycHJldGF0aW9uIDE6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiAoIMaSPSgoxpIpKSBhbmQgbW4gbmVlZCB0byBiZSBkaWZmZXJlbnRpYXRlZClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZTAgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0wXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMCA9IHRoaXMuaW52KGNhc2UwKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMDsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigwKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMCA9IHRoaXMucmVsKGNhc2UwLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMCA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMCxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZTEgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0xXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMSA9IHRoaXMuaW52KGNhc2UxKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigxKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMSA9IHRoaXMucmVsKGNhc2UxLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMSA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMSxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnQoIGNhc2UwLGNhc2UxICk7IC8vIGNvbnRyYXZhbGVuY2Ugb2YgYm90aCBjYXNlc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTsgLy8gZW5kIHJlRW50cnkoKVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgQ09NUExFWCBGT1JNIENBTENVTEFUSU9OU1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLSAyIFZBUklBQkxFU1xuXG4gICAgc3RhdGljIGltcGxMKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogKHgpeSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMuaW52KGZ4KSxmeSApO1xuICAgIH07XG4gICAgc3RhdGljIGltcGxSKGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogeCh5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIGZ4LHRoaXMuaW52KGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgcHJlKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicHJlc2VjdGlvblwiL1wiZGVjaXNpb25cIjogKCh4KXkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsTChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBwb3N0KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicG9zdHNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbFIoZngsZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjb250KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiY29udHJhdmFsZW5jZVwiL1wiZWl0aGVyLW9yXCI6ICgoeCl5KSAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLnByZShmeCxmeSksIHRoaXMucG9zdChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBlcXVpdihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImVxdWl2YWxlbmNlXCIvPzogKCAoKHgpeSkgKHgoeSkpICkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmNvbnQoZngsZnkpICk7XG4gICAgfTtcblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCB7IHBlcm11dGVBcnJheSwgcGFkLCBjcmVhdGVWYWxpZGF0aW9uLCBlcXVhbEFycmF5cyB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQmlnSW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL2JpZ2ludC1oZWxwZXInO1xuXG5jb25zdCBiaWdJbnQgPSByZXF1aXJlKCdiaWctaW50ZWdlcicpOyAvLyBvYnNvbGV0ZSB3aXRoIGJldHRlciBCaWdJbnQgc3VwcG9ydCBpbiBicm93c2Vyc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRG5hIGV4dGVuZHMgRkZvcm0ge1xuICAgIFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgZm9ybWZvcm0gY29yZSBtb2R1bGUgJ2RuYSdcbiAgICAvLyAgICAgLS0gc2luY2UgMjAxOS8yMCwgYnkgUGV0ZXIgSG9mbWFubiAoZm9ybXNhbmRsaW5lcy5ldSlcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkZPUk1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY2FsY0FsbChpbnB1dCkge1xuICAgICAgICAvKiBleHRlbnNpb24gdG8gcmVwcmVzZW50IGZvcm1ETkEgYXMgRk9STSBjYWxjdWxhdGlvbiAqL1xuXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRuYSA9IGlucHV0LnNwbGl0KCc6JykucG9wKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZudW0gPSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcbiAgICAgICAgICAgIGNvbnN0IHZhcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4gYFwieF8ke2l9XCJgICk7XG4gICAgICAgICAgICBjb25zdCB2YWxzID0ge307XG5cbiAgICAgICAgICAgIGlmICh2bnVtIDwgMSkge1xuICAgICAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gcGFyc2VJbnQocmVzdWx0c1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJwclZhbHMgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ludGVycHJWYWxzXSA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNhbGNBbGwoaW5wdXQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoaW5wdXQpIHtcbiAgICAgICAgLyogZXh0ZW5zaW9uIHRvIGdldCB2YXJpYWJsZXMgZnJvbSBmb3JtRE5BICovXG5cbiAgICAgICAgaWYgKHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnICYmIGlucHV0LmluY2x1ZGVzKCc6OicpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJMaXN0ICE9PSB1bmRlZmluZWQpIHJldHVybiB2YXJMaXN0O1xuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXG4gICAgICAgICAgICBjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IGB4XyR7aX1gICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGlucHV0KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZW5jb2RlIChfZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIEVuY29kZXMgYSBGT1JNIGFzIGEgZG5hIHN0cmluZyAqL1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB2YXJvcmRlciA/IHRoaXMucmVPcmRlclZhcnMoX2Zvcm0sIHZhcm9yZGVyKSA6IF9mb3JtO1xuXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY2FsY0FsbChmb3JtKSkucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICB9O1xuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG4gICAgIHN0YXRpYyBkZWNvZGUgKGRuYSwgdmFyTGlzdD11bmRlZmluZWQpIHtcbiAgICAgICAgLyogRGVjb2RlcyBkbmEgaW50byAob25lIG9mIGl0cykgc2ltcGxlc3QgY29ycmVzcG9uZGluZyBGT1JNIG1vZGVsKHMpIGFzIGEganNvbi1yZXByZXNlbnRhdGlvbiAqL1xuXG5cbiAgICAgICAgLy8gLT4gcmVtb3ZlIDAtdGVybXMgYW5kIGdyb3VwaW5ncz9cblxuICAgICAgICBpZiAodmFyTGlzdCAmJiB2YXJMaXN0Lmxlbmd0aCAhPT0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkpIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG9mIHZhcmlhYmxlcyBpbiBnaXZlbiB2YXJpYWJsZSBsaXN0IGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyk7XG4gICAgICAgIGlmICghdmFyTGlzdCkgdmFyTGlzdCA9IHRoaXMuZ2VuZXJhdGVWYXJOYW1lcyh0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSk7IC8vLm1hcChzdHIgPT4gYFwiJHtzdHJ9XCJgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXYgPSB0aGlzLnVuaXZlcnNlX24odmFyTGlzdCk7XG4gICAgICAgIGNvbnN0IHZhbHMgPSBkbmEuc3BsaXQoJycpLnJldmVyc2UoKTtcblxuICAgICAgICByZXR1cm4gdW5pdi5tYXAoKHRlcm0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgKCgke3ZhbHNbaV19KSgke3Rlcm19KSlgO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgfVxuXG4vLyA8IEVORFxuXG4gICAgc3RhdGljIGludFRvRE5BIChpbnQsIHZudW0pIHtcbiAgICAgICAgLyogVGFrZXMgYW4gaW50ZWdlciAodXN1YWxseSBCaWdJbnQpIGFuZCBhIGRlc2lyZWQgdmFyaWFibGUgbnVtYmVyIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGZvcm1ETkEgXG5cbiAgICAgICAgTm90ZTogdmFyaWFibGUgbnVtYmVyIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBpbnRlbmRlZCBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyBjYW5ub3QgYmUgaW5mZXJlZCBmcm9tIHRoZSBpbnRlZ2VyIGFsb25lLiBJZiBubyB2YXJpYWJsZSBudW1iZXIgaXMgZ2l2ZW4sIHRoZSBzbWFsbGVzdCB2YXJpYWJsZSBudW1iZXIgcG9zc2libGUgZm9yIHRoZSBxdWF0ZXJuaW9uIGlzIGFzc3VtZWQgdG8gZ2VuZXJhdGUgdmFsaWQgZm9ybUROQS4gKi9cblxuICAgICAgICBjb25zdCBxdWF0ID0gaW50LnRvU3RyaW5nKDQpO1xuICAgICAgICBpZiAocXVhdC5zdWJzdHIoMCwxKSA9PT0gJy0nKSB0aHJvdyBuZXcgRXJyb3IoJ05lZ2F0aXZlIGludGVnZXJzIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZm9ybUROQS4nKTtcbiAgICAgICAgaWYgKHF1YXQuaW5jbHVkZXMoJy4nKSkgdGhyb3cgbmV3IEVycm9yKCdGcmFjdGlvbmFsIG51bWJlcnMgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBmb3JtRE5BLicpXG5cbiAgICAgICAgY29uc3QgZG5hTGVuID0gdm51bSA/IDQqKnZudW0gOiAoZnVuY3Rpb24gbWluRG5hTGVuKHN0ckxlbiwgbj0wKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDQqKm4gPj0gc3RyTGVuID8gNCoqbiA6IG1pbkRuYUxlbihzdHJMZW4sIG4rMSk7XG4gICAgICAgIH0pKHF1YXQubGVuZ3RoKTtcblxuICAgICAgICBpZiAocXVhdC5sZW5ndGggPiBkbmFMZW4pIHRocm93IG5ldyBFcnJvcignSW50ZWdlciBzaXplIGV4Y2VlZHMgZGVzaXJlZCBETkEgbGVuZ3RoLicpO1xuICAgICAgICByZXR1cm4gcGFkKHF1YXQsIGRuYUxlbik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE91dHB1dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBmb3JtVG9ETkEgKGlucHV0LCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIGNvbnZlcnRzIGEgZm9ybSBpbnRvIGl0cyBmb3JtRE5BIHJlcHJlc2VudGF0aW9uIGluIEhUTUwgKi9cblxuICAgICAgICBjb25zdCB7b3V0cHV0fSA9IHsgb3V0cHV0OiB1bmRlZmluZWQsIC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBjb250YWlucyB0aGUgbWFyayAnOjonIGZvciBmb3JtRE5BLCByZXR1cm4gaXQgaWYgaXQncyB2YWxpZFxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCB2YWxpZCBmb3JtRE5BJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGRuYSA9IHBhcnRzLmRuYTtcbiAgICAgICAgICAgIGZvcm11bGEgPSBwYXJ0cy5mb3JtdWxhO1xuICAgICAgICAgICAgdmFyTGlzdCA9IHBhcnRzLnZhckxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBub3QsIHByb2Nlc3MgdGhlIGlucHV0IGFzIGEgRk9STSB3aXRoIHNwZWNpZmllZCBvciBkZWZhdWx0IHZhcm9yZGVyIGFuZCBlbmNvZGUgaXQgdG8gZG5hXG4gICAgICAgICAgICBkbmEgPSB0aGlzLmVuY29kZSggaW5wdXQsICh2YXJvcmRlciA/IHZhcm9yZGVyIDogdW5kZWZpbmVkKSApO1xuICAgICAgICAgICAgZm9ybXVsYSA9IGlucHV0O1xuICAgICAgICAgICAgdmFyTGlzdCA9IHZhcm9yZGVyID8gdmFyb3JkZXIgOiB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAob3V0cHV0KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdodG1sJzoge1xuICAgICAgICAgICAgLy8gXHRyZXR1cm4gZm9ybUROQV9odG1sKGZvcm11bGEsIGRuYSwgdmFyTGlzdCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkID8gZm9ybXVsYSA6ICcnKSArICh2YXJMaXN0ICYmIGRuYS5sZW5ndGggPiAxID8gYC5bJHt2YXJMaXN0LmpvaW4oJywnKX1dYCA6ICcnKSArICc6OicgKyBkbmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdudW0nOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRuYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Zvcm11bGEsIHZhckxpc3QsIGRuYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZG5hVG9GT1JNIChmb3JtRE5BLCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIGNvbnZlcnRzIGZvcm1ETkEgd2l0aCBhIGdpdmVuIHZhcmlhYmxlIGxpc3Qvb3JkZXIgaW50byBhIGdyYXBoIHJlcHJlc2VudGF0aW9uIG9mIChvbmUgb2YgaXRzKSBzaW1wbGVzdCBjb3JyZXNwb25kaW5nIEZPUk0gbW9kZWwocykgKi9cblxuICAgICAgICAvLyA+Pj4gbm90IHlldCBpbXBsZW1lbnRlZCFcblxuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoZm9ybUROQSwgdmFyb3JkZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5SYW5kb21ETkEgKHZudW0pIHtcbiAgICAgICAgLyogR2VuZXJhdGVzIGEgcmFuZG9tIGZvcm1ETkEgc3RyaW5nIGZvciBhIGdpdmVuIHZhcmlhYmxlIG51bWJlciAqL1xuXG4gICAgICAgIGNvbnN0IG1heE4gPSBiaWdJbnQoNCkucG93KCBiaWdJbnQoNCkucG93KHZudW0pICk7XG4gICAgICAgIGNvbnN0IHZhbHVlX2JpbiA9IGdldFJhbmRvbUJpZ0ludCggbWF4Ti5zdWJ0cmFjdCgxKSApO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRUb0ROQSh2YWx1ZV9iaW4sIHZudW0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB2bWFwIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBnZW5lcmF0ZXMgdm1hcCBIVE1MIGZyb20gZm9ybS9mb3JtRE5BIGlucHV0ICovXG5cbiAgICAgICAgY29uc3QgeyBsaW1pdFNpemUsIGNvbnZEZWZhdWx0VmFyb3JkZXIsXG4gICAgICAgICAgICAgICAgc2l6ZSwgZ2FwR3JvdywgbWFyZ2luRnVuYywgc3Ryb2tlVyB9ID0ge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdFNpemU6IHRydWUsIGNvbnZEZWZhdWx0VmFyb3JkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHVuZGVmaW5lZCwgZ2FwR3JvdzogMS41LCBtYXJnaW5GdW5jOiB1bmRlZmluZWQsIHN0cm9rZVc6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyOiAnMTExMScsIDwtIG1pZ2h0IGFkZCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zfTtcblxuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZm9ybXVsYSA9IGlucHV0O1xuXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25zdCBkbmFQYXJ0cyA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgICAgICAgICAgZG5hID0gZG5hUGFydHMuZG5hO1xuICAgICAgICAgICAgZm9ybXVsYSA9IGRuYVBhcnRzLmZvcm11bGE7XG4gICAgICAgICAgICBjb25zdCB2YXJMaXN0ID0gZG5hUGFydHMudmFyTGlzdCA/IGRuYVBhcnRzLnZhckxpc3QgOiB0aGlzLmdldFZhcmlhYmxlcyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJvcmRlciAhPT0gdW5kZWZpbmVkICYmIHZhckxpc3QgIT09IHVuZGVmaW5lZCAmJiAhZXF1YWxBcnJheXModmFyb3JkZXIsIHZhckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpYWJsZSBvcmRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIGZvcm1ETkEgaW5wdXQgYW5kIGFzIGFuIGFyZ3VtZW50IGZvciB0aGUgdm1hcCBmdW5jdGlvbiBhbmQgdGhleSBhcmUgZGlmZmVyZW50LiBQbGVhc2Ugc2VsZWN0IG9ubHkgb25lIHNwZWNpZmljYXRpb24gdG8gYXZvaWQgY29uZmxpY3RpbmcgcmVzdWx0cy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhckxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXJvcmRlciA9IHZhckxpc3Q7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm11bGEpIHtcbiAgICAgICAgICAgICAgICB2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF2YXJvcmRlcikge1xuICAgICAgICAgICAgdmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgICAgICAgIGlmIChjb252RGVmYXVsdFZhcm9yZGVyKSB2YXJvcmRlciA9IHRoaXMubWF0Y2hEZWZhdWx0VmFyT3JkZXIodmFyb3JkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkbmEpIGRuYSA9IHRoaXMuZW5jb2RlKGZvcm11bGEsIHZhcm9yZGVyKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpO1xuXG4gICAgICAgIGlmICh2bnVtID09PSBOYU4pIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YXJpYWJsZSBudW1iZXIgZm9yIHZtYXBzLicpO1xuICAgICAgICBpZiAobGltaXRTaXplICYmIHZudW0gPiA4KSB0aHJvdyBuZXcgRXJyb3IoJ3ZtYXBzIHdpdGggbW9yZSB0aGFuIDggdmFyaWFibGVzIGFyZSB0b28gY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSB0byBiZSByZW5kZXJlZCB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcCBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cblxuICAgICAgICBjb25zdCByZXZlcnNlZEROQSA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2VsbFNpemUgPSBzaXplIHx8ICh2bnVtID0+IHtcbiAgICAgICAgICAgIC8vIHJlZHVjdGlvbiBieSAycHggZm9yIGVhY2ggYWRkaXRpb25hbCB2YXJpYWJsZSBpZiB2bnVtID4gM1xuICAgICAgICAgICAgY29uc3QgbiA9IDE3IC0gKHZudW0gPiAzID8gMiAqICh2bnVtLTMpIDogMCk7IC8vIGNoYW5nZWQgZnJvbTogMTQgLSAodm51bS0xKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgyLCBuKTsgLy8gbWluIHNpemUgb2YgMnB4XG4gICAgICAgIH0pKHZudW0pO1xuXG4gICAgICAgIC8vIG1hcmdpbnMgY2FuIGFsc28gYmUgY2FsY3VsYXRlZCB0aHJvdWdoIGEgY3VzdG9tIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IG1hcmdpbnMgPSBbc3Ryb2tlVywgXG4gICAgICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6dm51bS0xfSwgbWFyZ2luRnVuYyA/IG1hcmdpbkZ1bmMgOiAoKF8saSkgPT4gKGkrMSkgKiBnYXBHcm93KSApXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHt3OmNlbGxTaXplLCBoOmNlbGxTaXplfTtcblxuXG4gICAgICAgIGNvbnN0IHZtYXBUcmVlID0gdGhpcy5jb25zdHJ1Y3RWbWFwKHJldmVyc2VkRE5BLCB2bnVtLCBjZWxsLCBtYXJnaW5zKTtcblxuICAgICAgICByZXR1cm4ge3RyZWU6IHZtYXBUcmVlLFxuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dCwgXG4gICAgICAgICAgICAgICAgdmFyb3JkZXI6IHZhcm9yZGVyLCBcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdm1hcFBlcnNwZWN0aXZlcyAoZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkLCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCwgbG9jYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXAgcGVyc3BlY3RpdmVzIGFzIHBlcm11dGF0aW9ucyBvZiBhIGZvcm0vZm9ybUROQSBpbnB1dCAqL1xuICAgICAgICAvLyBOb3RlOiBmb3JtRE5BIGlucHV0IG5vdCB5ZXQgc3VwcG9ydGVkIChwZXJtdXRhdGlvbiBhbGdvcml0aG0gcmVxdWlyZWQpXG5cbiAgICAgICAgY29uc3Qge2xpbWl0U2l6ZX0gPSB7IGxpbWl0U2l6ZTogdHJ1ZSwgLi4uZ2xvYmFsT3B0aW9ucyB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnICYmIGZvcm0uaW5jbHVkZXMoJzo6JykpIHRocm93IG5ldyBFcnJvcignZm9ybUROQSBpbnB1dCBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3Igdm1hcCBwZXJzcGVjdGl2ZXMuJyk7XG5cbiAgICAgICAgaWYgKHZhcm9yZGVyID09PSB1bmRlZmluZWQpIHZhcm9yZGVyID0gdGhpcy5tYXRjaERlZmF1bHRWYXJPcmRlciggdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSkgKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHZhcm9yZGVyLmxlbmd0aDtcbiAgICAgICAgaWYgKGxpbWl0U2l6ZSAmJiB2bnVtID4gNSkgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJpbmcgYWxsIHRoZSBwZXJzcGVjdGl2ZXMgZm9yIHZtYXBzIHdpdGggbW9yZSB0aGFuIDUgdmFyaWFibGVzIGlzIHRvbyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbi4gWW91IGNhbiwgaG93ZXZlciwgc3RpbGwgY29tcHV0ZSBzaW5nbGUgcGVybXV0YXRpb25zIGJ5IGNoYW5naW5nIHRoZSB2YXJpYWJsZSBvcmRlciBvZiB5b3VyIEZPUk0uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcFBlcnNwZWN0aXZlcyBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybXVsYSA9IGZvcm07IC8vIDw8PCBzdXBwb3J0IGZvciBKU09OP1xuXG4gICAgICAgIGNvbnN0IHZtYXBQZXJtdXRhdGlvbnMgPSBwZXJtdXRlQXJyYXkodmFyb3JkZXIpXG4gICAgICAgICAgICAubWFwKHZhcm9yZGVyID0+IHRoaXMudm1hcChmb3JtdWxhLCB2YXJvcmRlciwge1xuICAgICAgICAgICAgICAgIGhpZGVJbnB1dExhYmVsOiB0cnVlLCBcbiAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC4uLmxvY2FsT3B0aW9ucyB9KSApO1xuXG4gICAgICAgIHJldHVybiB2bWFwUGVybXV0YXRpb25zO1xuICAgIH1cblxuICAgIHN0YXRpYyB2bWFwTGlzdCAoaW5wdXRMaXN0LCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXBzIGZyb20gYW4gYXJyYXkgb2YgRk9STSBpbnB1dHMgKi9cbiAgICAgICAgLy8gaW5wdXRMaXN0IGZvcm1hdDogW1snZm9ybS9mb3JtRE5BJywgW3Zhcm9yZGVyXS91bmRlZmluZWQsIG9wdGlvbnMvdW5kZWZpbmVkXSwgLi4uXVxuXG4gICAgICAgIGNvbnN0IHZtYXBzID0gaW5wdXRMaXN0Lm1hcChpbnB1dCA9PiB0aGlzLnZtYXAoaW5wdXRbMF0sIGlucHV0WzFdLCB7Li4uaW5wdXRbMl0sIC4uLmdsb2JhbE9wdGlvbnN9KSApO1xuXG4gICAgICAgIHJldHVybiB2bWFwcztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRGF0YSBTdHJ1Y3R1cmVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY29uc3RydWN0Vm1hcCAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpIHtcbiAgICAgICAgLyogUmVjdXJzaXZlbHkgY29uc3RydWN0cyB2bWFwIGRhdGEtc3RydWN0dXJlIGZyb20gZm9ybUROQSAqL1xuXG4gICAgICAgIGNvbnN0IGNhbGNHYXBTdW0gPSAodixtYXJnaW5zKSA9PiBtYXJnaW5zLnNsaWNlKDEsdikucmV2ZXJzZSgpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiBhY2MgKyAoMioqaWR4KSAqIGN1cnIsIDApO1xuICAgICAgICBjb25zdCBmeCA9IChxaSxuKSA9PiAgKHFpJTIpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgICAgICAgICAvLyB4cG9zOiAwMTIzIC0+IDAxMDEgKiBzaGlmdCBuXG4gICAgICAgIGNvbnN0IGZ5ID0gKHFpLG4pID0+ICsocWk+MCAmJiBxaTwzKSAqIChuICE9PSB1bmRlZmluZWQgPyBuIDogMCk7IC8vIHlwb3M6IDAxMjMgLT4gMDExMCAqIHNoaWZ0IG5cblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RWbWFwX3JlY3Vyc2l2ZSA9IChkbmFIb2xvbiwgdmNvdW50LCBjZWxsLCBtYXJnaW5zLCBxaT0wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJUcmVlID0ge307XG4gICAgICAgICAgICBjb25zdCBnYXBTdW0gPSBjYWxjR2FwU3VtKHZjb3VudCxtYXJnaW5zKTtcbiAgICAgICAgICAgIGNvbnN0IHF0biA9IDQqKnZjb3VudDtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChxdG4pO1xuICAgICAgICAgICAgZG5hSG9sb24gPSBkbmFIb2xvbi5zdWJzdHIocWkqcXRuLCBxdG4pOyAvLyBxdWFydGVyIG9mIHRoZSBmb3JtRE5BIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgICAgIHN1YlRyZWUuZGF0YSA9IHsgXG4gICAgICAgICAgICAgICAgZG5hOiAnOjonK2RuYUhvbG9uLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyksXG4gICAgICAgICAgICAgICAgdm51bTogdmNvdW50LCBjZWxsOiBjZWxsLFxuICAgICAgICAgICAgICAgIG1hcmdpbnM6IHZudW0gPiAwID8gbWFyZ2lucy5zbGljZSgwLHZjb3VudCkgOiBtYXJnaW5zLnNsaWNlKDAsMSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlRyZWUuaGVpZ2h0ID0gdmNvdW50O1xuICAgICAgICAgICAgc3ViVHJlZS5kZXB0aCA9IHZudW0gLSAoTWF0aC5sb2cocXRuKSAvIE1hdGgubG9nKDQpKTsgLy8gbG9nIGJhc2UgNFxuICAgICAgICAgICAgc3ViVHJlZS5vcmRlciA9IHFpO1xuICAgICAgICBcbiAgICAgICAgICAgIHN1YlRyZWUucG9zaXRpb24gPSBbXG4gICAgICAgICAgICAgICAgLy8gYmFzZSBzaGlmdCAgPSAgKDEpIGNlbGwgc2l6ZSAqIGxlbmd0aCB1bml0cyAgKyAgKDIpIHN1bSBvZiBhbGwgcHJldmlvdXMgZ2Fwcy9tYXJnaW5zXG4gICAgICAgICAgICAgICAgLy8gcmVhbCBzaGlmdCAgPSAgYmFzZSBzaGlmdCAgKyAgKDMpIG1hcmdpbnMgb2YgY3VycmVudCBpdGVyYXRpb24gbGV2ZWxcbiAgICAgICAgICAgICAgICAvLyAtLSBxaTogY3VycmVudCB2YWx1ZSBpbmRleCAwLzEvMi8zXG4gICAgICAgICAgICAgICAgLy8gLS0gLS0gZngvZnkgbWFwIHFpIHRvIHgveSBwb3NpdGlvbnMgb2YgYSBzcXVhcmUgYW5kIG11bHRpcGx5IGJ5IHNoaWZ0IHZhbHVlICgyLiBhcmd1bWVudClcbiAgICAgICAgICAgICAgICAvLyAtLSBtYXJnaW5zOiBbc3Ryb2tlVywgMSAqIGdhcEdyb3csIDIgKiBnYXBHcm93LCDigKYgKHZudW0tMSkgKiBnYXBHcm93XVxuICAgICAgICAgICAgICAgIC8vIC0tIC0tIGlmIHZjb3VudCA9PSAwICAgIC0+IHNoaWZ0ICgzKSA9PSBzdHJva2VXXG4gICAgICAgICAgICAgICAgLy8gLS0gLS0gaWYgdmNvdW50ID09IHZudW0gLT4gc2hpZnQgKDMpID09IDBcbiAgICAgICAgICAgICAgICBmeChxaSwgbGVuKmNlbGwudykgKyBmeChxaSwgZ2FwU3VtKSArIGZ4KHFpLCBtYXJnaW5zW3Zjb3VudF0pLFxuICAgICAgICAgICAgICAgIGZ5KHFpLCBsZW4qY2VsbC5oKSArIGZ5KHFpLCBnYXBTdW0pICsgZnkocWksIG1hcmdpbnNbdmNvdW50XSldO1xuXG4gICAgICAgICAgICBzdWJUcmVlLnNjYWxlID0gW1xuICAgICAgICAgICAgICAgIGxlbipjZWxsLncgKyBnYXBTdW0sIFxuICAgICAgICAgICAgICAgIGxlbipjZWxsLmggKyBnYXBTdW0gXTtcblxuICAgICAgICAgICAgaWYgKHZudW0gPT09IDApIHsgLy8gaWYgZm9ybUROQSBvbmx5IGhhcyBhIHNpbmdsZSB2YWx1ZSwgbGlrZSA6OjNcbiAgICAgICAgICAgICAgICBzdWJUcmVlLnZhbHVlID0gZG5hSG9sb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YlRyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YlRyZWUuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7ICh2Y291bnQgPiAwICYmIGkgPCA0KSB8fMKgKHZjb3VudCA9PT0gMCAmJiBpIDwgMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2Y291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgc3ViVHJlZS5jaGlsZHJlbiA9IFxuICAgICAgICAgICAgICAgICAgICBbLi4uc3ViVHJlZS5jaGlsZHJlbiwgY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUoZG5hSG9sb24sIHZjb3VudC0xLCBjZWxsLCBtYXJnaW5zLCBpKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBkbmFIb2xvbi5zdWJzdHIoaSwxKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc3ViVHJlZS5jaGlsZHJlbiA9IFsuLi5zdWJUcmVlLmNoaWxkcmVuLCAoe1xuICAgICAgICAgICAgICAgICAgICAvLyB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkbmE6ICc6OicrdmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm51bTogMCwgY2VsbDogY2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbnM6IG1hcmdpbnMuc2xpY2UoMCwxKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2Y291bnQtMSxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IHN1YlRyZWUuZGVwdGggKyAxLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogaSxcbiAgICAgICAgICAgICAgICAgICAgLy8gY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbZngoaSxjZWxsLncpLCBmeShpLGNlbGwuaCldLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogW2NlbGwudywgY2VsbC5oXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50OiBzdWJUcmVlXG4gICAgICAgICAgICAgICAgfSkgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YlRyZWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlIChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFZhbGlkYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZG5hTWF0Y2hlc0Zvcm0gKGRuYSwgZm9ybSwgX3Zhckxpc3Q9dW5kZWZpbmVkLCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhIGdpdmVuIEROQSBjb2RlIG1hdGNoZXMgYSBnaXZlbiBGT1JNICgrIG9wdGlvbmFsIHZhcmlhYmxlIGxpc3QpICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuICAgICAgICBjb25zdCB2YXJMaXN0ID0gX3Zhckxpc3QgPyBfdmFyTGlzdCA6IHN1cGVyLmdldFZhcmlhYmxlcyhmb3JtKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IF92YXJMaXN0ID8gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmZvcm1NYXRjaGVzVmFyTGlzdChmb3JtLCB2YXJMaXN0KSxcbiAgICAgICAgICAgICAgICAnRk9STSBkb2VzblxcJ3QgbWF0Y2ggdGhlIGdpdmVuIHZhcmlhYmxlIGxpc3QnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb2YgdmFyaWFibGVzIGluIGdpdmVuIHZhcmlhYmxlIGxpc3QgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5lbmNvZGUoZm9ybSwgdmFyTGlzdCkgPT09IGRuYSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cyAocmVzcGVjdGluZyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXIpJyksXG4gICAgICAgIF0gOiBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IHZhckxpc3QgJiYgdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb2YgRk9STSB2YXJpYWJsZXMgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5lbmNvZGUoZm9ybSkgPT09IGRuYSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cycpLFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkRE5BIChfaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGluIGZvcm1ETkEgZm9ybWF0IChoYXMgdG8gYmUgbWFya2VkIHdpdGggJzo6JyB0byBub3QgY29uZnVzZSBpdCB3aXRoIGEgRk9STSBvdXQgb2YgY29uc3RhbnRzKSAqL1xuICAgICAgICBjb25zdCB7Y29tcGFyZUZvcm0sIHJlcXVpcmVNYXJrfSA9IHsgY29tcGFyZUZvcm06IHRydWUsIHJlcXVpcmVNYXJrOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSByZXF1aXJlTWFyayA/IF9pbnB1dCA6ICc6OicrX2lucHV0O1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMSA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgJ2Zvcm1ETkEgaW5wdXQgaXMgbm90IG9mIHR5cGUg4oCYc3RyaW5n4oCZJyksXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0LmluY2x1ZGVzKCc6OicpLFxuICAgICAgICAgICAgICAgICdJbnB1dCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBtYXJrIOKAmDo64oCZIGZvciBmb3JtRE5BJyksXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0Lmxlbmd0aCA+PSAzLFxuICAgICAgICAgICAgICAgICdmb3JtRE5BIGlucHV0IGlzIHRvbyBzaG9ydCcpLFxuICAgICAgICBdO1xuICAgICAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICBjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMiA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkgPj0gMCxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGxlbmd0aCBpcyBub3QgaW4gdGhlIHJhbmdlIDReeCcpLFxuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbigoKSA9PiAhZG5hLnNwbGl0KCcnKS5zb21lKG4gPT4gaXNOYU4ocGFyc2VJbnQobikpIHx8IHBhcnNlSW50KG4pIDwgMCB8fCBwYXJzZUludChuKSA+IDMpLFxuICAgICAgICAgICAgICAgICdmb3JtRE5BIGNvZGUgaXMgbm90IGluIHF1YXRlcm5pb24gZm9ybWF0IChjb25zaXN0aW5nIG9ubHkgb2YgdGhlIG51bWJlcnMgMC8xLzIvMyknKSxcbiAgICAgICAgICAgIGNvbXBhcmVGb3JtICYmIGZvcm11bGEgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHRoaXMuZG5hTWF0Y2hlc0Zvcm0oZG5hLCBmb3JtdWxhLCB2YXJMaXN0KSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIHBhcnQgZG9lc25cXCd0IG1hdGNoIGZvcm11bGEgcGFydCBvciBmb3JtdWxhIHBhcnQgZG9lc25cXCd0IG1hdGNoIGl0cyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXInKSA6IG51bGwsXG4gICAgICAgIF0uZmlsdGVyKGZuID0+IGZuKTtcblxuICAgICAgICB2YWxpZGF0aW9uczIuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG5zdGF0aWMgZ2VuZXJhdGVWYXJOYW1lcyAodm51bSwgZXhjbHVkZUxpc3QgPSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IHtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IGB4XyR7aX1gO1xuICAgICAgICBpZiAoZXhjbHVkZUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2hpbGUgKGV4Y2x1ZGVMaXN0LmluY2x1ZGVzKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUrYOKAsmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9KTtcbn1cblxuc3RhdGljIHVuaXZlcnNlXzEgKHgpIHtcbiAgICAvKiBSZXR1cm5zIHRoZSBjb25zdGl0dWVudHMgb2YgdGhlIDQtdmFsdWVkIHVuaXZlcnNlIG9mIDEgdGVybXMgZnJvbSBhIHZhcmlhYmxlIG5hbWUgKi9cbiAgICBpZiAoeC5sZW5ndGggPiAxKSB4ID0gYFwiJHt4fVwiYDtcbiAgICByZXR1cm4gWyBcbiAgICAgICAgYCh7KCR7eH0pfXsycnwoJHt4fSl9KWAsIFxuICAgICAgICBgKHske3h9fXsycnwke3h9fSlgLCBcbiAgICAgICAgYCgoeygke3h9KX0ke3h9KSh7MnJ8JHt4fX0oJHt4fSkpKWAsIFxuICAgICAgICBgKCh7JHt4fX0oJHt4fSkpKHsycnwoJHt4fSl9JHt4fSkpYF07XG59XG5cbnN0YXRpYyB1bml2ZXJzZV9uICh2YXJzKSB7XG4gICAgLyogUmV0dXJucyB0aGUgY29uc3RpdHVlbnRzIG9mIHRoZSA0LXZhbHVlZCB1bml2ZXJzZSBvZiBuIHRlcm1zIGZyb20gYSBsaXN0IG9mIG4gdmFyaWFibGUgbmFtZXMgKi9cbiAgICBjb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG4gICAgY29uc3QgdW5pdjFzID0gdmFycy5tYXAodiA9PiB0aGlzLnVuaXZlcnNlXzEodikpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IDQqKnZudW19LCAoXywgaSkgPT4ge1xuICAgICAgY29uc3QgaXEgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSkuc3BsaXQoJycpO1xuICAgICAgY29uc3QgdW5pdk4gPSB1bml2MXMucmVkdWNlKChmb3JtdWxhLCB1bml2MSwgaiwgYXJyKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGErYCgke3VuaXYxW2lxW2pdXX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKyhqID09PSBhcnIubGVuZ3RoLTEgPyAnKScgOiAnJyksICcoJyk7XG4gICAgICByZXR1cm4gdm51bSA+IDEgPyB1bml2TiA6IHVuaXZOLnNsaWNlKDIsLTIpO1xuICAgIH0pO1xufTtcblxuLy8gPCBFTkRcblxuICAgIHN0YXRpYyB0b3RhbFZhcnNGcm9tRE5BIChmb3JtRE5BKSB7IFxuICAgICAgICAvKiBDYWxjdWxhdGVzIHZhcmlhYmxlIG51bWJlciBmcm9tIGZvcm1ETkEgKi9cblxuICAgICAgICAvLyBkZXRhY2ggZnJvbSBmb3JtRE5BIG1hcmsgJzo6J1xuICAgICAgICBjb25zdCBkbmEgPSBmb3JtRE5BLnNwbGl0KCc6JykucG9wKCk7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgdmFyaWFibGVzIGZyb20gdGhlIGxlbmdodCBvZiB0aGUgc3RyaW5nXG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLmxvZyhkbmEubGVuZ3RoKS9NYXRoLmxvZyg0KTsgLy8gbG9nXzQoZG5hIGxlbmd0aCkgPSB2YXJpYWJsZSBudW1iZXJcbiAgICAgICAgcmV0dXJuIG4gJSAxID09PSAwID8gbiA6IE5hTjtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlcGFpckROQSAoaW5wdXQpIHtcbiAgICAgICAgLyogUmVwYWlycyBhIGdpdmVuIHN0cmluZyB0aGF0IGlzIG5vdCBpbiBhIHZhbGlkIGZvcm1ETkEgZm9ybSB0byBwYXNzIGFzIGZvcm1ETkEgKi9cblxuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgY29udGFpbnMgdGhlIG1hcmsgJzo6JyBmb3IgZm9ybUROQSwgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgICAgICAgICAgLy8gQ2FzZSAxOiBpbnB1dCBpcyBvZiBmb3JtIGYuW3hdOjpuIG9yIGY6Om4gLT4gZiB3aWxsIGJlIGVuY29kZWQgYXMgYSBGT1JNICh3aXRoIFt4XSBhcyB2YXJpYWJsZSBvcmRlciwgaWYgaXQgbWF0Y2hlcyB0aGUgRk9STXMgdmFyaWFibGVzIGluIG51bWJlciBhbmQgbGFiZWxzKVxuICAgICAgICAgICAgLy8gLSBJZiB0aGUgZm9ybUROQSBoYXMgYmVlbiB3ZWxsIGZvcm1lZCBpbiB0aGUgZmlyc3QgcGxhY2UsIHRoZSBvdXRwdXQgd2lsbCBiZSBlcXVpdmFsZW50XG4gICAgICAgICAgICAvLyAtIElmIHRoZSBkbmEgcGFydCBkb2Vzbid0IG1hdGNoIHRoZSBGT1JNIHBhcnQsIHRoZSBkbmEgcGFydCB3aWxsIGJlIGNvcnJlY3RlZFxuICAgICAgICAgICAgLy8gLSBJZiB0aGUgdmFyaWFibGUgb3JkZXIgZG9lc24ndCBtYXRjaCB0aGUgRk9STSB2YXJpYWJsZXMsIGl0IHdpbGwgYWxzbyBiZSBjb3JyZWN0ZWRcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhc2UgZWZmZWN0aXZlbHkgaW50ZXJwcmV0cyB0aGUgaW5wdXQgYXMgRk9STSBpbnB1dCBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBmb3JtRE5BIGlzIGNvbnNpc3RlbnQsIGJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byBpbmZlciBhIEZPUk0gZnJvbSBpdHMgRE5BLlxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5mb3JtdWxhKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBbeF0tcGFydCwgZXh0cmFjdCB2YXJpYWJsZSBvcmRlciBhbmQgY2hlY2sgaWYgaXRzIHZhbGlkIGZvciB0aGUgRk9STVxuICAgICAgICAgICAgICAgIGxldCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIHRyeS4uLmNhdGNoIGF2b2lkcyBpbnRlcnJ1cHRpb24gYnkgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzLnZhckxpc3QgJiYgdGhpcy5mb3JtTWF0Y2hlc1Zhckxpc3QocGFydHMuZm9ybXVsYSwgcGFydHMudmFyTGlzdCkpIHZhckxpc3QgPSBwYXJ0cy52YXJMaXN0O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZS1lbmNvZGUgdG8gcmV0dXJuIGNvcnJlY3QgZm9ybUROQSBmb3IgdGhlIGdpdmVuIGZvcm11bGFcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtVG9ETkEocGFydHMuZm9ybXVsYSwgdmFyTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXNlIDI6IGlucHV0IGlzIG9mIGZvcm0gOjpuIC0+IHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGEgRk9STSB3aWxsIG5vdCBiZSBkZWNvZGVkIGZyb20gdGhlIGRuYSBhbG9uZSwgc2luY2UgdGhpcyBGT1JNIHdvdWxkIGJlIG9waW5pb25hdGVkXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzIG5vdCBtYXJrZWQgYXMgZm9ybUROQSwgaXQgd2lsbCBqdXN0IGJlIGVuY29kZWQgYXMgYSBGT1JNXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Ub0ROQShpbnB1dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEROQXBhcnRzIChmb3JtRE5BKSB7XG4gICAgICAgIC8qIERlY29tcG9zZXMgYSBmb3JtRE5BIHN0cmluZyBpbnRvIGl0cyAzLzIvMSBwYXJ0cyAqL1xuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZm9ybUROQS5zcGxpdCgnOicpO1xuICAgICAgICBkbmEgPSBwYXJ0cy5wb3AoKTtcblxuICAgICAgICBpZiAocGFydHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybV9wYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBmb3JtdWxhID0gZm9ybV9wYXJ0c1swXTtcbiAgICAgICAgICAgIHZhckxpc3QgPSBmb3JtX3BhcnRzLmxlbmd0aCA+IDEgPyBmb3JtX3BhcnRzWzFdLnNsaWNlKDEsLTEpLnNwbGl0KCcsJykgOiB2YXJMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh7IGRuYTogZG5hLCBmb3JtdWxhOiBmb3JtdWxhLCB2YXJMaXN0OiB2YXJMaXN0IH0pO1xuICAgIH1cblxufSIsImltcG9ydCB7IHBhZCwgZmxhdHRlbiwgaW5jbHVkZSwgVkFSQ09ERSwgVkFSQ09ERV9SRVYsIGNyZWF0ZVZhbGlkYXRpb24sIGNoZWNrQnJhY2tldE1hdGNoaW5nLCBjb2xsYXBzZUxpdGVyYWxzLCBnZXRCcmFja2V0VW5pdHMgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCBGQ2FsYyBmcm9tICcuL2ZjYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkZvcm0gZXh0ZW5kcyBGQ2FsYyB7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gICAgIGZvcm1mb3JtIGNvcmUgbW9kdWxlICdmb3JtJ1xuICAgIC8vICAgICAtLSBzaW5jZSAyMDE4LCBieSBQZXRlciBIb2ZtYW5uIChmb3Jtc2FuZGxpbmVzLmV1KVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRm9ybSBDYWxjdWxhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjKF9mb3JtKSB7XG4gICAgICAgIC8qIENhbGN1bGF0ZXMgYSBnaXZlbiBmb3JtIHJlY3Vyc2l2ZWx5IFxuXG4gICAgICAgIE5vdGU6IERvIE5PVCB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgZm9ybXVsYXMgd2l0aCB2YXJpYWJsZXMhXG4gICAgICAgICAgICAgIEFzc3VtZXMgeD0wIGZvciBhbGwgdmFyaWFibGVzLiBVc2UgaW50ZXJDYWxjKCkgaW5zdGVhZC5cbiAgICAgICAgKi9cblxuICAgICAgICBsZXQgZnggPSAwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5jYWxjKGZvcm0uc3BhY2VbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgaWYoIWlzTmFOKGZvcm0uc3BhY2VbaV0udmFsdWUpKSBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5lc3RlZFZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmUmVFbnRyeSA9IGZvcm0uc3BhY2VbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIGZSZUVudHJ5Lm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRWYWxzID0gWy4uLm5lc3RlZFZhbHMsIHRoaXMuY2FsYyhmUmVFbnRyeS5uZXN0ZWRbal0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIGV2ZW4gcmVzb2x1dGlvbnMgKHRvdGFsIG5lc3RlZCBhcmd1bWVudHMpLCByZUVudHJ5IG51bWJlciB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGl0cyBldmVuIG9yIG9kZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlRW50cnlOdW1iZXIgPSAoZlJlRW50cnkubmVzdGVkLmxlbmd0aCAlIDIgPT09IDApID8gdW5kZWZpbmVkIDogZlJlRW50cnkucmVFdmVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5vdGF0aW9uIHJlYWRpbmc6IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9ICB1c2UgbmVzdGVkVmFscy5yZXZlcnNlKCkgdG8gcmV2ZXJzZSB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLnJlRW50cnkocmVFbnRyeU51bWJlciwgZlJlRW50cnkubGFzdE9wZW4sIGZSZUVudHJ5LmFsdEludGVycHJldGF0aW9uLCAuLi5uZXN0ZWRWYWxzKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm0udW5tYXJrZWQpIHJldHVybiBmeDtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnYoIGZ4ICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjYWxjQWxsKF9mb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtXG4gICAgICAgICAgIChyZWZhY3RvcmVkOiAxMC4xMC4yMDIwKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHZhcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCB2YWxzID0ge307XG5cbiAgICAgICAgaWYgKHZudW0gPCAxKSB7XG4gICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHRoaXMuY2FsYyhmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCA0Kip2bnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkraW50ZXJwclZhbHNdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFscztcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVyQ2FsYyhmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8qIEludGVycHJldHMgYSBmb3JtIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHQgb2YgdGhlIGludGVycHJldGF0aW9uICovXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsYyggdGhpcy5pbnRlcnByZXQoZm9ybSwgaW50ZXJwcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVycHJldChfZm9ybSwgaW50ZXJwcikge1xuICAgICAgICAvKiBJbnRlcnByZXRzIGEgZm9ybSB3aXRoIHNwZWNpZmllZCB2YWx1ZXMgZm9yIGVhY2ggdmFyaWFibGVcblxuICAgICAgICBpbnRlcnByOiBbe3ZhcjogJ3gnLCB2YWx1ZTogbn0sIOKApl1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBjb25zdCBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS5zeW1ib2wgPT09IGludGVycHJbdl0udmFyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZVtpXS52YWx1ZSA9IGludGVycHJbdl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnByRm9ybTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkNhbGNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbF9sb2dpYyhmeCwgZnkpO1xuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVsKC4uLmZWYWxzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmludl9sb2dpYyhmeCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbnYoZngsIG4pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdCAqL1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgICAgIGNvbnN0IGpzb25TdHIgPSB0aGlzLmNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBzdHJpbmcgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICBsZXQganNvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8vIGNsZWFuIGZvcm11bGEgc3RyaW5nIGZyb20gd2hpdGVzcGFjZVxuICAgICAgICBjb25zdCBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoY2xlYW5Gb3JtdWxhKTtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oYXJyKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW5MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICBsZXQgY2xlYW5Gb3JtdWxhID0gJyc7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuXG4gICAgICAgICAgICAvLyBvbWl0IHdoaXRlc3BhY2Ugb3V0c2lkZSBvZiBxdW90ZXNcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSB8fMKgaW5TbGFzaCkgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbkZvcm11bGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdEZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIHRvIEpTT04tZm9ybSAqL1xuXG4gICAgICAgIGxldCBjb21wQWxsID0gW107XG4gICAgICAgIGxldCB1bm1hcmtlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGFsbCBlbmNsb3Npbmcgb3V0ZXIgZm9ybVxuICAgICAgICBsZXQgY291bnREZXB0aCA9IDA7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICcgIHsnXTtcbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXCJ0eXBlXCI6XCJmb3JtXCIsJ107XG5cbiAgICAgICAgaWYgKHVubWFya2VkKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInVubWFya2VkXCI6dHJ1ZSwnXTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1wic3BhY2VcIjpbJ107XG5cblxuICAgICAgICBsZXQgcGFydHMgPSBbJyddO1xuXG4gICAgICAgIGNvdW50RGVwdGggPSAwO1xuICAgICAgICBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICBjb25zdCByZUNoYXIgPSAn4oa7JztcbiAgICAgICAgY29uc3Qgb3B0Q2hhciA9ICfipLQnO1xuICAgICAgICBjb25zdCBuZXN0Q2hhciA9ICfipLUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgbGV0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJldkNoYXIgPSBmb3JtdWxhW2ktMV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fMKgY2hhciA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgKHgpIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkgcGFydHMgPSBbLi4ucGFydHMsICcnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAocHJldkNoYXIgPT09ICcpJyB8fMKgcHJldkNoYXIgPT09ICd9JykgJiYgIShjaGFyID09PSAnKScgfHzCoGNoYXIgPT09ICd9JykgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGNoYXIgZm9sbG93cyAoeCksIHNlcGFyYXRlOyBidXQgbm90IGlmIGl0IGlzIGFub3RoZXIgJyknXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSBwYXJ0cyA9IFsuLi5wYXJ0cywgJyddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1bmlxdWUgc2VwYXJhdGlvbiBjaGFycyBmb3IgcmUtZW50cnkgZm9ybXMgZm9yIGVhc3kgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJywnKSBjaGFyID0gbmVzdENoYXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnfCcpIGNoYXIgPSBvcHRDaGFyO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ0AnKSBjaGFyID0gcmVDaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgIC8vIGFkZCBjaGFyIHRvIHRoZSBsYXRlc3QgcHVzaGVkIHBhcnRcbiAgICAgICAgICAgIHBhcnRzW3BhcnRzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gJygnKSB7IFxuICAgICAgICAgICAgICAgIC8vIGlmIHBhcnQgaXMgZm9ybVxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gW3RoaXMuY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSldO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBwYXJ0IGlzIHJlLWVudHJ5IGZvcm1cblxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gWycgIHsnXTtcbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInJlRW50cnlcIiwnXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVOZXN0ZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyhyZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyByZS1lbnRyeSBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0SW50ZXJwciA9IGNvbnRlbnQuc3RhcnRzV2l0aChgYWx0JHtvcHRDaGFyfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfY29udGVudCA9IGFsdEludGVycHIgPyBjb250ZW50LnNsaWNlKDQsKSA6IGNvbnRlbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IFstMSwtMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfS5fYCkpIHR5cGUgPSBbMywxXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfS5gKSkgdHlwZSA9IFszLDBdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9X2ApKSB0eXBlID0gWzIsMV1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn1gKSkgdHlwZSA9IFsyLDBdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYCR7cmVDaGFyfV9gKSkgdHlwZSA9IFswLDFdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgocmVDaGFyKSkgdHlwZSA9IFswLDBdXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZUNoYXJTdW0gPSB0eXBlWzBdICsgdHlwZVsxXSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlTmVzdGVkID0gX2NvbnRlbnQuc2xpY2UodHlwZUNoYXJTdW0sKS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlTmVzdGVkLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6XCJ1bmRlZmluZWRcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlWzBdID09PSAyKSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVsxXSA+IDApIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0SW50ZXJwcikgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb2xkIHJlLWVudHJ5IHN5bnRheFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZVBhcnRzID0gY29udGVudC5zcGxpdChvcHRDaGFyKTtcblxuICAgICAgICAgICAgICAgICAgICByZU5lc3RlZCA9IHJlUGFydHNbcmVQYXJ0cy5sZW5ndGgtMV0uc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZU5lc3RlZC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJ107XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICcycicgfHwgcmVQYXJ0c1sxXSA9PT0gJzJyJyB8fCByZVBhcnRzWzJdID09PSAnMnInKSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6ZmFsc2UsJ107XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMV0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzJdID09PSAnb3BlbicpIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcIm5lc3RlZFwiOlsnXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IG4gaW4gcmVOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocmVOZXN0ZWRbbl0pIF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgcmVOZXN0ZWQubGVuZ3RoLTEpIGNvbXAgPSBbLi4uY29tcCwgJywnXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVOZXN0ZWRbbl0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHJlTmVzdGVkW25dICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXX0gICddO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHdlIGhhdmUgdmFyaWFibGVzL2NvbnN0YW50c1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIGxldCB2YXJzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBwYXJ0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gcGFydHNbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHF1b3RlZCBzdHJpbmcgd2l0aCBhICfigJYnIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVvdGUpIHZhcnMgPSBbLi4udmFycywgJ+KAliddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyayB1bmNsZWFyIGZvcm0gd2l0aCBhICfigL0nIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluU2xhc2gpIHZhcnMgPSBbLi4udmFycywgJ+KAvSddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB2YXJzID0gWy4uLnZhcnMsICcnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHF1b3RlIGNoYXJzIGluc2lkZSBzbGFzaGVzIHdpbGwgYmUgZXNjYXBlZCB0byBub3QgaW50ZXJmZXJlIHdpdGggSlNPTiBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmIGluU2xhc2gpIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gJ1xcXFwnICsgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZih2YXJzW3ZdKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJyAgeyddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhcnNbdl0pICYmIHZhcnNbdl0ubGVuZ3RoID4gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhcnNbdl1bMF0gIT09ICfigL0nICYmIHZhcnNbdl1bMF0gIT09ICfigJYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcImNvbnN0XCIsJ107IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ2YWx1ZVwiOiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCB2YXJzW3ZdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YXJzW3ZdWzBdID09PSAn4oC9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJ1bmNsZWFyXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6MiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wic3ltYm9sXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwidmFyXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6XCIqXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInN5bWJvbFwiOiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFyc1t2XVswXSA9PT0gJ+KAlicpIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICd9ICAnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCB2YXJzLmxlbmd0aC0xKSBjb21wID0gWy4uLmNvbXAsICcsJ107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9IC8vIGVuZCBlbHNlXG5cbiAgICAgICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgcGFydHNbaV1dO1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJ0cy5sZW5ndGgtMSkgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnLCddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXX0gICddO1xuXG4gICAgICAgIHJldHVybiBjb21wQWxsO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAgICAgLyogQ29uc3RydWN0cyBhIChyZWFsKSBuZXN0ZWQgZm9ybSBzdHJ1Y3R1cmUgZnJvbSB0aGUgLm5lc3RlZCBhcnJheSBvZiB0aGUgb3JpZ2luYWwgcmUtZW50cnkganNvbiAqL1xuXG4gICAgICAgIC8vID4+PiBzaG91bGQgYmUgcmV3cml0dGVuIGNvbXBsZXRlbHkgdG8gZ2V0IHJpZCBvZiBhbGwgdGhlIG11dGF0aW9uIVxuICAgICAgICBcbiAgICAgICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgICAgIHJlRm9ybS5uZXN0ZWQucmV2ZXJzZSgpOyAvLyBNVVNUIGJlIHJldmVyc2VkLCBiZWNhdXNlIG5vdGF0aW9uOiB7ZGVlcGVzdCwgLi4uLCBzaGFsbG93ZXN0fVxuXG4gICAgICAgIGZvcihsZXQgaSBpbiByZUZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBwcmVwZW5kIHRoZSByZUVudHJ5IG5lc3RpbmcgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgc3BhY2VcbiAgICAgICAgICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZEZvcm0gPSBzcGFjZVswXTsgLy8gc3BhY2Vbc3BhY2UubGVuZ3RoLTFdIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZEZvcm0uc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFjZSA9IG5lc3RlZEZvcm0uc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgc3BhY2UucHVzaChyZUZvcm0ubmVzdGVkW2ldKTtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZGRFbXB0eVJlQ2hpbGRTcGFjZSAmJiAoc3BhY2UubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHNwYWNlLnB1c2goIHt0eXBlOiAnc3BhY2UnfSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgLy8gZmlyc3QsIGxldHMgYXNzdW1lIHRoaXMgaXMgdGhlIGZvcm0gaXRzZWxmXG4gICAgICAgIGxldCBsYXN0TmVzdGVkID0gcmVGb3JtO1xuICAgICAgICBcbiAgICAgICAgaWYocmVGb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoZW4gbG9vcCB1bnRpbCB0aGUgbGFzdCByZUNoaWxkIGlzIGZvdW5kIGFuZCBtYWtlIHRoaXMgb3VyIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUgKGxhc3ROZXN0ZWQuc3BhY2VbMF0uaGFzT3duUHJvcGVydHkoJ3JlQ2hpbGQnKSkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgICAgICAgICAgaWYgKGxhc3ROZXN0ZWQuc3BhY2UubGVuZ3RoIDwgMSkgYnJlYWs7IC8vIHByZXZlbnQgZXJyb3JzIHdoZW4gbm90aGluZyBpcyBmb3VuZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZvciBvcGVuIHJlLWVudHJpZXMsIHdlIG5lZWQgdG8gYWRkIGFub3RoZXIgbmVzdGluZyAoc2VlIHVGT1JNIGlGT1JNIGZvciByZWZlcmVuY2UpXG4gICAgICAgIGlmKHJlRm9ybS5sYXN0T3Blbikge1xuICAgICAgICAgICAgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgcmUtZW50cnkgcG9pbnQgdG8gZWl0aGVyIHNwYWNlXG4gICAgICAgICAgICBsYXN0TmVzdGVkLnNwYWNlWzBdLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdyZUVudHJ5UG9pbnQnfSApO1xuXG4gICAgICAgIC8vIGxhc3QsIGRlbGV0ZSB0aGUgbmVzdGVkIHN0cnVjdHVyZSwgd2UgZG9uJ3QgbmVlZCBpdCBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgICAgICByZXR1cm4gcmVGb3JtO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRfcmVFbnRyeShfZm9ybSwgb3B0aW9ucz17fSkge1xuICAgICAgICAvLyA+Pj4gc2hvdWxkIGJlIHJld3JpdHRlbiBjb21wbGV0ZWx5IHRvIGdldCByaWQgb2YgYWxsIHRoZSBtdXRhdGlvbiFcbiAgICAgICAgY29uc3QgcmVmRm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0Rm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVmRm9ybSkpOyAvLyBjb3B5IGpzb24gb2JqZWN0IHdpdGhvdXQgaWRlbnRpZnlpbmcgaXRcblxuICAgICAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgICAgIC8vIE5vdGU6IHRoaXMgc2hvdWxkIGJlIGRvbmUgbW9yZSBlZmZpY2llbnRseSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIGxldCBydW5uaW5nSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgICAgICBydW5uaW5nSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuXG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICAgICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24odGFyZ2V0QnJhbmNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVmQnJhbmNoLnJ1bm5pbmdJbmRleCA9PT0gKHRhcmdldEJyYW5jaC5oYXNPd25Qcm9wZXJ0eSgncnVubmluZ0luZGV4JykgPyB0YXJnZXRCcmFuY2gucnVubmluZ0luZGV4IDogbnVsbCkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJhbmNoID0gdGhpcy5jb25zdHJ1Y3ROZXN0ZWQodGFyZ2V0QnJhbmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRlbGV0ZSBydW5uaW5nIGluZGV4IHByb3BlcnR5XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBkZWxldGUgYnJhbmNoLnJ1bm5pbmdJbmRleDsgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldEZvcm07XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVwcmVzZW50YXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMganNvblN0cmluZyhfZm9ybSwgZXhwYW5kUkU9ZmFsc2UpIHtcbiAgICAgICAgLyogcmV0dXJucyBqc29uLXJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgRk9STSAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oZXhwYW5kUkUgPyB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtKSA6IF9mb3JtKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZvcm0sIHVuZGVmaW5lZCwgMik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoX2Zvcm0pIHtcbiAgICAgICAgLyogcGFyc2VzIGEgRk9STSB0byBnZXQgYWxsIG9mIGl0cyB2YXJpYWJsZXMgYW5kIHNvcnRzIHRoZW0gdXNpbmcgdGhlIEpTIEFycmF5LnNvcnQoKSBtZXRob2RcbiAgICAgICAgd2hpY2ggc29ydHMgYnkgY29tcGFyaW5nIFVURi0xNiBjb2RlIHVuaXQgdmFsdWVzLlxuICAgICAgICBOb3RlOiBCeSBjb252ZW50aW9uLCB0aGUgcHJvY2VzcyBvZiBkZXJpdmluZyBmb3JtRE5BIGZyb20gYSBnaXZlbiBGT1JNIGludm9sdmVzIG9yZGVyaW5nIG9mIHRoZSBleHRyYWN0ZWQgdmFyaWFibGVzIGJ5IHRoaXMgc2FtZSBzb3J0aW5nIG1ldGhvZCwgaWYgbm8gc3BlY2lhbCBvcmRlcmluZyBpcyBzcGVjaWZpZWQuICovXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICAgICAgbGV0IHZhcnMgPSBbXTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oZm9ybSwgZnVuY3Rpb24oZkJyYW5jaCkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBmQnJhbmNoLnNwYWNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZSh2YXJzLCBzcGFjZVtpXS5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJzID0gWy4uLnZhcnMsIHNwYWNlW2ldLnN5bWJvbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycy5zb3J0KCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyB0cmF2ZXJzZUZvcm0oZm9ybSxmdW5jKSB7XG4gICAgICAgIC8qIHRyYXZlcnNlcyBvbmx5IGZvcm0tdHlwZXMgaW4gYSBqc29uIHRyZWUgKi9cbiAgICAgICAgY29uc3QgYnJlYWtUcmF2ID0gZnVuYy5hcHBseSh0aGlzLFtmb3JtXSk7XG5cbiAgICAgICAgaWYgKGZvcm0uc3BhY2UpIHsgLy8gZm9ybS50eXBlOiAnZm9ybSdcbiAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0uc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nIHx8IGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLnNwYWNlW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5uZXN0ZWQpIHsgLy8gZm9ybS50eXBlOiAncmVFbnRyeSdcbiAgICAgICAgICAgIGlmIChmb3JtLm5lc3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SOiBOb3QgYSBmb3JtIScpO1xuXG4gICAgICAgIHJldHVybiBicmVha1RyYXY7XG4gICAgfTtcblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgICAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvZm9ybWZvcm0tdG9vbGJveCBcbiAgICAqL1xuXG4gICAgc3RhdGljIGdldFRvdGFsVmFycyAoZm9ybVN0cikge1xuICAgICAgICAvKiBnZXRzIHRvdGFsIHZhcmlhYmxlIG51bWJlciBvZiBhIEZPUk0gKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFyaWFibGVzKGZvcm1TdHIuc3Vic3RyKCkpLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlT3JkZXJWYXJzIChmb3JtdWxhLCB2YXJvcmRlcikge1xuICAgICAgICAvKiByZS1vcmRlcnMgdmFyaWFibGVzIGluIGEgZm9ybXVsYSB0byBtYXRjaCBhbiBvcmRlcmluZyBwYXR0ZXJuICovXG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZVZhcnMoIHRoaXMuZW5jb2RlVmFycyhmb3JtdWxhLCB2YXJvcmRlcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlY29kZVZhcnMgKGVuY1N0ciwgZGVjb2RlUGF0dGVybj11bmRlZmluZWQpIHtcbiAgICAgIC8qIGRlY29kZXMgdmFyaWFibGVzIGluIGFuIGVuY29kZWQgZm9ybXVsYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBkZWNvZGUgcGF0dGVybiAqL1xuICAgICAgbGV0IHJldkNvZGUgPSBWQVJDT0RFX1JFVjtcbiAgICAgIGlmIChkZWNvZGVQYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhWQVJDT0RFX1JFVik7XG4gICAgICAgIGNvbnN0IHZhclBhcnQgPSBrZXlzLnNsaWNlKDAsZGVjb2RlUGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBtb2RQYXJ0ID0ga2V5cy5zbGljZSgtMyk7XG4gICAgICAgIFxuICAgICAgICByZXZDb2RlID0gdmFyUGFydC5jb25jYXQobW9kUGFydCkucmVkdWNlKCAoY29kZSxrZXksaSkgPT4gKHsuLi5jb2RlLCBcbiAgICAgICAgICAgIFtrZXldOiBpIDwgZGVjb2RlUGF0dGVybi5sZW5ndGggPyBkZWNvZGVQYXR0ZXJuW2ldIDogVkFSQ09ERV9SRVZba2V5XSwgfSkse30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jU3RyLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgIC5tYXAoYyA9PiBPYmplY3Qua2V5cyhyZXZDb2RlKS5pbmRleE9mKGMpID4gLTEgPyByZXZDb2RlW2NdIDogYykuam9pbignJyk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBlbmNvZGVWYXJzIChmb3JtdWxhLCB2YXJvcmRlcj11bmRlZmluZWQpIHtcbiAgICAgIC8qIGVuY29kZXMgdmFyaWFibGVzIGluIGEgZm9ybXVsYSBzdHJpbmcgYWNjb3JkaW5nIHRvIGEgZ2l2ZW4gdmFyaWFibGUgb3JkZXIgKGFycmF5KSAqL1xuICAgICAgaWYgKCF2YXJvcmRlcikgdmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgIFxuICAgICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykgeyAvLyB0aHggdG8gQ29vbEFKODY6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82OTY5NDg2XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGZpeFB0biA9IHthbHQ6ICdhbHQoPz1cXHwpJywgckV2ZW46ICcycig/PVxcfCknLCByT2RkOiAnMnIrMSg/PVxcfCknfTtcbiAgICAgIGNvbnN0IHB0biA9IHYgPT4ge1xuICAgICAgICBpZiAodi5sZW5ndGggPiAxKSByZXR1cm4gYFxcXCIke2VzY2FwZVJlZ0V4cCh2KX1cXFwiYDsgLy8gKD88PVxcXCIpKCR7dn0pKD89XFxcIilcbiAgICAgICAgcmV0dXJuIGAke2VzY2FwZVJlZ0V4cCh2KX1gO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZhcm9yZGVyXG4gICAgICAgIC5yZWR1Y2UoKGVuY1N0cix2LGkpID0+IGVuY1N0clxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLmFsdCwgJ2cnKSxWQVJDT0RFWydhbHQnXSApXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uckV2ZW4sICdnJyksVkFSQ09ERVsnMnInXSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5yT2RkLCAnZycpLFZBUkNPREVbJzJyKzEnXSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKHB0bih2KSwgJ2cnKSwoT2JqZWN0LmtleXMoVkFSQ09ERV9SRVYpW2ldKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgLCBmb3JtdWxhICk7XG4gICAgfTtcblxuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE5ldyBBZGRpdGlvbnMgMDEvMjAyMDpcbiAgICAqL1xuXG4gICAgc3RhdGljIG1hdGNoRGVmYXVsdFZhck9yZGVyICh2YXJMaXN0KSB7XG4gICAgICAgIC8qIEhlbHBlciB0byBtYXRjaCBkZWZhdWx0IG9yZGVyaW5ncyBmb3IgY2FsY3VsYXRpb24gYW5kIHZtYXBzICovXG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnRUxSJykgcmV0dXJuIFsnTCcsJ0UnLCdSJ107XG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnKy1MUicpIHJldHVybiBbJy0nLCdMJywnUicsJysnXTtcbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICcrLUVMUicpIHJldHVybiBbJy0nLCdMJywnRScsJ1InLCcrJ107XG4gICAgICAgIHJldHVybiB2YXJMaXN0O1xuICAgIH1cblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBOZXcgQWRkaXRpb25zIDEwLzIwMjA6XG4gICAgKi9cblxuICAgIHN0YXRpYyBpc1ZhbGlkRm9ybSAoaW5wdXQsIG9wdGlvbnMpwqB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIGZvcm11bGEgb3IgSlNPTi1GT1JNICovXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnID8gXG4gICAgICAgICAgICBpc1ZhbGlkRm9ybXVsYShpbnB1dCwgb3B0aW9ucykgOiBpc1ZhbGlkSlNPTkZvcm0oaW5wdXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkRm9ybXVsYSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgZm9ybXVsYSAqL1xuICAgICAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBsZXQgdmFsaWRhdGlvbnMxID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbigoKSA9PiB0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAnRm9ybXVsYSBpbnB1dCBpcyBub3Qgb2YgdHlwZSDigJhzdHJpbmfigJknKSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHZhbGlkYXRpb25zMSA9IFsuLi52YWxpZGF0aW9uczEsXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJ1wiJykgJiYgISFjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnLycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzYW5zTGl0ZXJhbHMgPSBjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHNhbnNMaXRlcmFscyA/IGNoZWNrTGl0ZXJhbE1hdGNoaW5nKHNhbnNMaXRlcmFscywgJy8nKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ051bWJlciBvZiBxdW90ZXMgZm9yIGxpdGVyYWwgdmFyaWFibGVzIChlLmcuOiBcInhcIikgb3IgbnVtYmVyIG9mIHNsYXNoZXMgZm9yIHVuY2xlYXIgRk9STXMgKGUuZy46IC94LykgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgLy8gY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgIC8vICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvcGVuU2VwID0gJ+KBhScsIGNsb3NlU2VwID0gJ+KBhic7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRpclVuY2xGb3JtcyA9IGlucHV0LnNwbGl0KCcvJykucmVkdWNlKChhY2MsY3VycixpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBhY2MgKyAoaWR4ICUgMiA9PT0gMSA/IG9wZW5TZXAgOiBjbG9zZVNlcCkgKyBjdXJyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB1bmNsRm9ybVVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGRpclVuY2xGb3Jtcywge29wZW46IG9wZW5TZXAsIGNsb3NlOiBjbG9zZVNlcH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB1bmNsRm9ybVVuaXRzLmV2ZXJ5KHVuY2xGb3JtID0+IHVuY2xGb3JtLnNwbGl0KCdcIicpLmxlbmd0aCA8IDIpOyBcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3BlblNlcCA9ICfigYwnLCBjbG9zZVNlcCA9ICfigY0nO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXJMaXRlcmFscyA9IGlucHV0LnNwbGl0KCdcIicpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gYWNjICsgKGlkeCAlIDIgPT09IDEgPyBvcGVuU2VwIDogY2xvc2VTZXApICsgY3VyclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGl0ZXJhbFVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGRpckxpdGVyYWxzLCB7b3Blbjogb3BlblNlcCwgY2xvc2U6IGNsb3NlU2VwfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGl0ZXJhbFVuaXRzLmV2ZXJ5KGxpdGVyYWwgPT4gKVxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8gJ051bWJlciBvZiBxdW90ZXMgZm9yIGxpdGVyYWwgdmFyaWFibGVzIChlLmcuOiBcInhcIikgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICBdO1xuICAgICAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY2xlYW5JbnB1dCA9IGNvbGxhcHNlTGl0ZXJhbHMoIGNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpLCAnLycpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uczIgPSBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoY2xlYW5JbnB1dCwgJygnLCAnKScpLFxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyIG9yIG9wZW5pbmcvY2xvc2luZyBvcmRlciBvZiBwYXJhbnRoZXNlcyBpbiBmb3JtdWxhIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhjbGVhbklucHV0LCAneycsICd9JyksXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXIgb3Igb3BlbmluZy9jbG9zaW5nIG9yZGVyIG9mIGN1cmx5IGJyYWNrZXRzIGluIGZvcm11bGEgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFsaWRhdGlvbnMyLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgIH0pICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdW5kQnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJygnLCBjbG9zZTogJyknfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJseUJyVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoY2xlYW5JbnB1dCwge29wZW46ICd7JywgY2xvc2U6ICd9J30pO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uczMgPSBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcm91bmRCclVuaXRzLmV2ZXJ5KHN1YkZvcm0gPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoc3ViRm9ybSwgJ3snLCAnfScpKVxuICAgICAgICAgICAgICAgICAgICAgICAmJiBjdXJseUJyVW5pdHMuZXZlcnkoc3ViRm9ybSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhzdWJGb3JtLCAnKCcsICcpJykpLFxuICAgICAgICAgICAgICAgICAgICAnT3BlbmluZy9jbG9zaW5nIG9mIHBhcmFudGhlc2VzIG92ZXJsYXBzIHdpdGggb3BlbmluZy9jbG9zaW5nIG9mIGN1cmx5IGJyYWNrZXRzIGluIGZvcm11bGEgKGUuZy46ICh7YSlifSknKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjdXJseUJyVW5pdHMuZXZlcnkocmVFbnRyeSA9PiB0aGlzLmlzVmFsaWRSZUVudHJ5KHJlRW50cnkpKSxcbiAgICAgICAgICAgICAgICAgICAgJ09wdGlvbiBwYXJ0IG9mIG9uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaXMgbm90IHdlbGwtZm9ybWVkJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uczMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkUmVFbnRyeSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgcmUtZW50cnkgY29uc3RydWN0aW9uICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc2xpY2UoMSwtMSkuc3BsaXQoJ3wnKTtcblxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IHBhcnRzLmZpbHRlcigocCxpLGFycikgPT4gaSA8IGFyci5sZW5ndGgtMSk7XG4gICAgICAgICAgICBjb25zdCBvcHRMaXN0ID0gWydhbHQnLCdvcGVuJywnMnInLCcycisxJ107XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSBlbnRyaWVzLnJlZHVjZSgoYWNjLHN0cikgPT4gWy4uLmFjYywgb3B0TGlzdC5maWx0ZXIob3B0ID0+IHN0ciA9PT0gb3B0KVswXV0sW10gKS5maWx0ZXIob3B0ID0+IG9wdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbExpc3RfdW5pcXVlID0gWy4uLm5ldyBTZXQoc2VsTGlzdCldO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5sZW5ndGggPT09IGVudHJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAnT25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBoYXZlIGludmFsaWQgb3IgZHVwbGljYXRlIG9wdGlvbnMnKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5maWx0ZXIoc3RyID0+IHN0ciA9PT0gb3B0TGlzdFsyXSB8fCBzdHIgPT09IG9wdExpc3RbM10pLmxlbmd0aCA8IDIsXG4gICAgICAgICAgICAgICAgICAgICdPbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGhhdmUgYm90aCBvcHRpb25zIOKAmDJy4oCZIGFuZCDigJgycisx4oCZIHNldCBhdCB0aGUgc2FtZSB0aW1lJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkSlNPTkZvcm0gKGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIEpTT04tRk9STSAqL1xuICAgICAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdHJ1ZSxcbiAgICAgICAgICAgICAgICAnJyksXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25zLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgIH0pICk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1NYXRjaGVzVmFyTGlzdCAoZm9ybSwgdmFyTGlzdCkge1xuICAgICAgICAvKiBDaGVja3MgaWYgYSBnaXZlbiBGT1JNIG1hdGNoZXMgYSBnaXZlbiB2YXJpYWJsZSBsaXN0ICovXG4gICAgICAgIGNvbnN0IHZhcnNGb3JtID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YXJMaXN0Lmxlbmd0aCA9PT0gdmFyc0Zvcm0ubGVuZ3RoXG4gICAgICAgICAgICAmJiB2YXJzRm9ybS5ldmVyeSh2X2EgPT4gdmFyTGlzdC5zb21lKHZfYiA9PiB2X2EgPT09IHZfYikpO1xuICAgICAgICBpZiAoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoJ0ZPUk0gZG9lc25cXCd0IG1hdGNoIHRoZSBnaXZlbiB2YXJpYWJsZSBsaXN0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZhbGlkRm9ybShpbnB1dCkge1xuICAgICAgICBpZih0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRGb3JtdWxhKGlucHV0KSkgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgYSB2YWxpZCBmb3JtdWxhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxpbmVhcihpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA+Pj4gbmVlZCB0byBjaGVjayBqc29uIGlucHV0IHRvb1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZG5hIGZyb20gJy4vY29yZS9mZG5hJztcblxuZXhwb3J0IGRlZmF1bHQgeyBjYWxjLCBmb3JtLCBkbmEgfTsiXSwic291cmNlUm9vdCI6IiJ9