(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"));
	else if(typeof define === 'function' && define.amd)
		define(["d3"], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory(require("d3"));
	else
		root["formform"] = factory(root["d3"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_d3__) {
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

/***/ "./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n(__webpack_require__(/*! d3 */ "d3")):undefined}(window,function(t){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(n,e){n.exports=t},function(t,n,e){"use strict";e.r(n),e.d(n,"default",function(){return o});var r=e(0);function o(){var t,n,e,o,i,u,f,a,c,l=[];function h(t){return t.eachAfter(d),t.eachBefore(p),t.eachBefore(y),t}function d(o){var h=c(o).width,d=c(o).height;if(t(o)){if(h=d=0,o.children){for(var p=function(t){var r=[],o=0,i=!1,f=0,c=!0;return t.children.forEach(function(l,h){n(l)&&!i&&(i=!0),o+=l.x1-l.x0,o+=c?e(l)?u(l).left:0:Math.max(u(l).left,u(t.children[h-1]).right);var d=e(l)?u(l).right:0;(o+d>a(t)||h===t.children.length-1)&&(o+=d),o>a(t)||h===t.children.length-1?(r.push({from:f,to:h,width:o,flexHeight:i}),h<t.children.length-1&&(f=h+1,o=0,i=!1,c=!0)):c=!1}),r}(o),y=0;y<p.length;y++)p[y].height=g(o,p,y);l.push({box:o,lines:p}),h+=r.max(p,function(t){return t.width}),d+=r.sum(p,function(t){return t.height})}h+=i(o).left+i(o).right,d+=i(o).top+i(o).bottom,h=Math.max(h,f(o).width),d=Math.max(d,f(o).height)}o.x0=o.y0=0,o.x1=h,o.y1=d}function p(r){var o=r.y1;if(r.parent&&n(r)){o=m(r).height;var i=x(r.parent),f=s(r,i);o-=e(r)||0!==f?u(r).top:0;var a=(o-=e(r)||f!==i.length-1?u(r).bottom:0)-r.y1;if(t(r)&&r.children&&a>0){var c=x(r),l=a/c.length,h=!0,d=!1,p=void 0;try{for(var y,g=c[Symbol.iterator]();!(h=(y=g.next()).done);h=!0){y.value.height+=l}}catch(t){d=!0,p=t}finally{try{h||null==g.return||g.return()}finally{if(d)throw p}}}}r.y1=o}function y(t){var n=t.x1-t.x0,r=t.y1-t.y0;if(t.parent){t.y0=t.parent.y0+i(t.parent).top;var f=t.parent.children.indexOf(t);if(0===f||function(t){if(t.parent){var n=t.parent.children.indexOf(t),e=x(t.parent),r=e[s(t,e)];return r.from===n}return null}(t))t.x0+=t.parent.x0+i(t.parent).left,e(t)&&(t.x0+=u(t).left);else{var a=t.parent.children[f-1];t.x0=a.x1,t.x0+=Math.max(u(a).right,u(t).left)}}else switch(o){case"top":t.y0=0;break;case"middle":t.y0=r/2;break;case"bottom":t.y0=r}switch(o){case"top":if(t.parent){var c=s(t);t.y0+=e(t)||0!==c?u(t).top:0,t.y0+=v(t)}break;case"middle":t.parent&&(t.y0+=v(t)+m(t).height/2),t.y0-=r/2;break;case"bottom":if(t.parent){var l=x(t.parent),h=s(t,l);t.y0-=e(t)||h!==l.length-1?u(t).bottom:0,t.y0+=v(t,!0)}t.y0-=r}t.x1=t.x0+n,t.y1=t.y0+r}function g(t,n,r){for(var o=n[r],i=0,a=o.from;a<=o.to;a++){var c=t.children[a],l=c.y1-c.y0,h=(e(c)||0!==r?u(c).top:0)+(e(c)||r!==n.length-1?u(c).bottom:0);l+h>i&&(i=l+h)}return Math.max(i,f(t).height)}function x(t){return l[l.findIndex(function(n){return n.box===t})].lines}function s(t,n){if(t.parent){var e=arguments.length>1?n:x(t.parent),r=t.parent.children.indexOf(t);return e.findIndex(function(t){return r>=t.from&&r<=t.to})}return null}function m(t){var n=x(t.parent);return n[s(t,n)]}function v(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t.parent){var e=x(t.parent),o=s(t,e),i=n?o:o-1;return r.sum(e.filter(function(t,n){return n<=i}),function(t){return t.height})}return null}function b(t){return function(){return t}}return h.vAlign=function(t){return arguments.length?(o=t,h):o},h.edgeMargins=function(t){return arguments.length?(e="function"==typeof t?t:b(+t),h):e},h.isContainer=function(n){return arguments.length?(t="function"==typeof n?n:b(+n),h):t},h.spanHeight=function(t){return arguments.length?(n="function"==typeof t?t:b(+t),h):n},h.padding=function(t){return arguments.length?(i="function"==typeof t?t:b(+t),h):i},h.margin=function(t){return arguments.length?(u="function"==typeof t?t:b(+t),h):u},h.nodeSize=function(t){return arguments.length?(c="function"==typeof t?t:b(+t),h):c},h.minContainerSize=function(t){return arguments.length?(f="function"==typeof t?t:b(+t),h):f},h.maxLineWidth=function(t){return arguments.length?(a="function"==typeof t?t:b(+t),h):a},h}}]).default});
//# sourceMappingURL=boxmodel-d3.min.js.map

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

/***/ "./src/common/d3-helper.js":
/*!*********************************!*\
  !*** ./src/common/d3-helper.js ***!
  \*********************************/
/*! exports provided: default, fitChart, getRealDepth, textSubscript, textSize, opacity, reduceRemainder, calcCircleDash, circleDashArray, circleLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return chartFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitChart", function() { return fitChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRealDepth", function() { return getRealDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSubscript", function() { return textSubscript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textSize", function() { return textSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return opacity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceRemainder", function() { return reduceRemainder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcCircleDash", function() { return calcCircleDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleDashArray", function() { return circleDashArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleLabel", function() { return circleLabel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);


const protoChart = {
    width: window.innerWidth,
    height: window.innerHeight,
    margin: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  };
  
function chartFactory(opts, proto = protoChart) {

  const chart = Object.assign({}, proto, opts);
  if(opts.parentId) chart.parent = d3__WEBPACK_IMPORTED_MODULE_0__["select"](`#${opts.parentId}`);
  else chart.parent = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body');

  chart.svg = chart.parent
    .append('svg').lower()
    .attr('id', chart.id || 'chart')
    .attr('width', chart.width - chart.margin.right)
    .attr('height', chart.height - chart.margin.bottom);

  if (opts.styleClass) chart.svg.attr('class', opts.styleClass);

  // if (opts.drawBackground) 
  chart.svg.append('rect')
    .attr('id', 'background')
    .attr('width','100%').attr('height','100%')
    .attr('fill', (opts.drawBackground ? '#ffffff' : 'none')); 
    // .attr('fill', 'rgba(255,0,0,.2)');

  chart.container = chart.svg.append('g')
    .attr('id', 'container')
    .attr('transform', `translate(${chart.margin.left}, ${chart.margin.top})`);

  return chart;
}

function fitChart(chart, padding) {
  // calculate real dimensions of a chart (assumes chart is a g-element wrapped inside an svg)
  d3__WEBPACK_IMPORTED_MODULE_0__["select"](chart.node().parentElement)
      .attr('width', chart.node().getBBox().width + padding.left + padding.right)
      .attr('height', chart.node().getBBox().height + padding.top + padding.bottom);
}

function getRealDepth(d) {
  // calculates the real depth of a FORM by subtracting unmarked and open reEntry FORMs
  const ghosts = d.ancestors()
      .filter(e => (e.data.type === 'form' && e.data.unmarked || 
                e.data.type === 'reEntry' && e.data.lastOpen)).length;
  return d.depth - ghosts;
}

function textSubscript(text) {
  // selection module to split text into parts for subscripts (e.g. "x_n")
  return (selection) => {
    selection.each(function(d) {

        const split = (typeof(text(d)) === 'string') ? text(d).split('_') : '';

        // if (split.length > 1) {
        //   split.forEach((part,i) => {

        //     const elem = d3.select(this).append('tspan')
        //       .text(d => part);

        //     if (i%2===1) elem
        //       .attr('dx', 1)
        //       .attr('dy', 6)
        //       .attr('font-size', '.8em');
        //   });
        // }
        if (split.length === 2) {
          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[0]);

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('tspan')
            .text(d => split[1])
            .attr('dx', 1)
            .attr('dy', 6)
            .style('font-size', '.8em');
        }
        else {
          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this)
            .text(text(d));
        }

    })
  };
}

function textSize(text, fontSize='inherit', fontFamily='inherit', fontStyle='normal') {
  /* Source: https://gist.github.com/huytd/327e453c95ca3edadb32d0c867e2561b 
  Credits to: Huy Tr. */
  if (!d3__WEBPACK_IMPORTED_MODULE_0__) return;
  var container = d3__WEBPACK_IMPORTED_MODULE_0__["select"]('body').append('svg');
  container.append('text')
    .style('font-size', fontSize)
    .style('font-style', fontStyle)
    .style('font-family', fontFamily)
    .attr('x','-9999').attr('y','-9999')
    .call(textSubscript(() => text)); // .text(text);
  var size = container.node().getBBox();
  container.remove();
  return { width: size.width, height: size.height };
}

function opacity(color, alpha) {
  const colorCopy = d3__WEBPACK_IMPORTED_MODULE_0__["color"](color);
colorCopy.opacity = alpha;
return colorCopy;
}

function reduceRemainder(num, _den) {
  let count = 0;
  let sign = 1;
  let den = Math.round(_den);
  let candidate = den;
  while (num % den > 0.3) {
      candidate += sign * 0.001;
      if (num%candidate < num%den) den = candidate;

      if(count >= 5000) {
          candidate = Math.round(_den);
          sign = -1;
      }
      if(count >= 10000) break;
      count++;
  }
  return den;
}
function calcCircleDash(r, unit, fraction) {
  const circ = Math.PI*2 * r;
  return reduceRemainder(circ, unit) * fraction;
}
function circleDashArray(r, unit, fractions) {
  let str = '';
  for (let i in fractions) {
      str = str.concat(`${ calcCircleDash(r, unit, fractions[i]) }px `);
  }
  return str;
}

function circleLabel(text, fontSize='inherit', fontFamily='inherit', fontStyle='normal') {
  // selection module to split text into parts for subscripts (e.g. "x_n")
  return (selection) => {

      selection.each(function(d) {

          const textSz = textSize(text(d), fontSize, fontFamily);
          const margin = 50;

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).append('text')
              .style('font-size', fontSize)
              .style('font-style', fontStyle)
              .style('font-family', fontFamily)
              .style('text-anchor', 'middle')
              .raise()
              .text(d => text(d));

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).filter(d => d.r*2 >= textSz.width + margin).select('text')
              .classed('label inside', true)
              .attr('y', d => d.r - textSz.height*0.5 )
              .attr('dominant-baseline','baseline');

          d3__WEBPACK_IMPORTED_MODULE_0__["select"](this).filter(d => d.r*2 < textSz.width + margin).select('text')
              .classed('label outside', true)
              .attr('y', d => d.r + 4)
              .attr('dominant-baseline','hanging');

      });
  };
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
    /*
    =======================================================
       'calc' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */
   
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
/* harmony import */ var _modules_dna_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/dna-svg */ "./src/lib/modules/dna-svg.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _common_bigint_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/bigint-helper */ "./src/common/bigint-helper.js");





const bigInt = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js"); // obsolete with better BigInt support in browsers

class FDna extends _fform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /*
    =======================================================
      'dna' module for formform (c) 2019/20 Peter Hofmann
    =======================================================
    */
   
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
	            const interprVals = Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["pad"])(i.toString(4), vnum);
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
		return Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["pad"])(quat, dnaLen);
	}

    // ----------------------------------------------------
    // Output
    // ----------------------------------------------------

    static formToDNA (input, varorder=undefined, options=undefined) {
    	/* converts a form into its formDNA representation in HTML */

    	const {output} = { output: 'text', ...options };

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
			case 'html': {
				return Object(_modules_dna_svg__WEBPACK_IMPORTED_MODULE_1__["formDNA_html"])(formula, dna, varList);
			}
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
		const value_bin = Object(_common_bigint_helper__WEBPACK_IMPORTED_MODULE_3__["getRandomBigInt"])( maxN.subtract(1) );
		return this.intToDNA(value_bin, vnum);
	}

    static vmap (input, varorder=undefined, options=undefined) {
    	/* generates vmap HTML from form/formDNA input */

		const { output, limitSize, convDefaultVarorder,
				size, gapGrow, marginFunc, strokeW } = {
					output: 'svg',
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

			if (varorder !== undefined && varList !== undefined && !Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["equalArrays"])(varorder, varList)) {
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

		switch (output) {
			case 'svg':
				return Object(_modules_dna_svg__WEBPACK_IMPORTED_MODULE_1__["vmap_svg"])(vmapTree, input, varorder, options);
			default:
				return vmapTree;
		}
    }

	static vmapPerspectives (form, varorder=undefined, globalOptions=undefined, localOptions=undefined) {
		/* Generates a list of vmap perspectives as permutations of a form/formDNA input */
		// Note: formDNA input not yet supported (permutation algorithm required)

		const {output, limitSize} = { output: 'svg', limitSize: true, ...globalOptions };

		if (typeof(form) === 'string' && form.includes('::')) throw new Error('formDNA input is not yet supported for vmap perspectives.');

		if (varorder === undefined) varorder = this.matchDefaultVarOrder( this.getVariables(form) );
		const vnum = varorder.length;
		if (limitSize && vnum > 5) throw new Error('Rendering all the perspectives for vmaps with more than 5 variables is too computationally intensive with this implementation. You can, however, still compute single permutations by changing the variable order of your FORM. If you still want to proceed, add the option "limitSize: false" to your vmapPerspectives function call (using the formform library).');

		const formula = form; // <<< support for JSON?

		const vmapPermutations = Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["permuteArray"])(varorder)
			.map(varorder => this.vmap(formula, varorder, {
				hideInputLabel: true, 
				customLabel: undefined,
				...localOptions }) );

		switch (output) {
			case 'svg':
				return Object(_modules_dna_svg__WEBPACK_IMPORTED_MODULE_1__["vmapPerspectives_svg"])(vmapPermutations, formula, globalOptions);
			default:
				return vmapPermutations;
		}
	}

	static vmapList (inputList, globalOptions=undefined) {
		/* Generates a list of vmaps from an array of FORM inputs */
		// inputList format: [['form/formDNA', [varorder]/undefined, options/undefined], ...]

		const {output} = { output: 'svg', ...globalOptions }

		const vmaps = inputList.map(input => this.vmap(input[0], input[1], {...input[2], ...globalOptions}) );

		switch (output) {
			case 'svg':
				return Object(_modules_dna_svg__WEBPACK_IMPORTED_MODULE_1__["vmapList_svg"]) (vmaps, globalOptions);
			default:
				return vmaps;
		}
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
			Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(
				() => this.formMatchesVarList(form, varList),
				'FORM doesn\'t match the given variable list'),
			Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(
				() => varList.length === this.totalVarsFromDNA(dna),
				'Number of variables in given variable list doesn\'t match formDNA code length'),
			Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(
				() => this.encode(form, varList) === dna,
				'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
		] : [
			Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(
				() => varList && varList.length === this.totalVarsFromDNA(dna),
				'Number of FORM variables doesn\'t match formDNA code length'),
			Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(
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
    		Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => typeof(input) === 'string',
    			'formDNA input is not of type ‘string’'),
    		Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => input.includes('::'),
    			'Input does not include the mark ‘::’ for formDNA'),
    		Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => input.length >= 3,
    			'formDNA input is too short'),
    	];
		validations1.every(validation => validation().cata({
			error: e => { throw new Error(e); },
			success: data => data,
		}) );

    	const { dna, formula, varList } = this.getDNAparts(input);
    	const validations2 = [
    		Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => this.totalVarsFromDNA(dna) >= 0,
    			'formDNA code length is not in the range 4^x'),
    		Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
    			'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
    		compareForm && formula !== undefined
    		? Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["createValidation"])(() => this.dnaMatchesForm(dna, formula, varList),
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
	  const iq = Object(_common_helper__WEBPACK_IMPORTED_MODULE_2__["pad"])(i.toString(4), vnum).split('');
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
    /*
    =======================================================
       'form' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */

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

    // ----------------------------------------------------
    // Representation
    // ----------------------------------------------------

    static jsonString(_form) {
        /* returns json-representation of the specified FORM */
        const form = this.getValidForm(_form);
    
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

/***/ "./src/lib/core/fgraph.js":
/*!********************************!*\
  !*** ./src/lib/core/fgraph.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FGraph; });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var _modules_graph_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/graph-d3 */ "./src/lib/modules/graph-d3.js");



let g1 = {}; let g2 = {};

class FGraph extends _fform__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /*
    =======================================================
      'graph' module for formform (c) 2018 Peter Hofmann
    =======================================================
    */

  constructor() {
    // this.graphs = [];
  };

  // ----------------------------------------------------
  // Extensions of FForm
  // ----------------------------------------------------

  static jsonString(_form) {

    const expandedForm = this.expand_reEntry(_form);
    return super.jsonString(expandedForm);
  }

  // ----------------------------------------------------
  // Graph representation
  // ----------------------------------------------------

  static createGraph(graphType, _form, options) {
    const addEmptyReChildSpace = (graphType === 'pack');

    // expand re-entry structure to be usable for graphs
    const form = this.expand_reEntry(_form, {addEmptyReChildSpace: addEmptyReChildSpace});
    // initialize the graph

    const graph = new _modules_graph_d3__WEBPACK_IMPORTED_MODULE_1__["default"](graphType, form, options);
    graph.formula = _form;
    // graphs.push( new D3Graph(graphType, form, options) );

    return graph;
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
/* harmony import */ var _core_fgraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/fgraph */ "./src/lib/core/fgraph.js");
/* harmony import */ var _core_fdna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/fdna */ "./src/lib/core/fdna.js");





/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__["default"], form: _core_fform__WEBPACK_IMPORTED_MODULE_1__["default"], graph: _core_fgraph__WEBPACK_IMPORTED_MODULE_2__["default"], dna: _core_fdna__WEBPACK_IMPORTED_MODULE_3__["default"] });

/***/ }),

/***/ "./src/lib/modules/dna-svg-styles.js":
/*!*******************************************!*\
  !*** ./src/lib/modules/dna-svg-styles.js ***!
  \*******************************************/
/*! exports provided: vmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmap", function() { return vmap; });
// -----------------------
// global styles

const global = {
    common: {
        // font: {family: 'sans-serif', size: '14px', style: 'normal'},
    }
};
global.basic = {
    ...global.common,
};
const [basic] = [global.basic];

const vmap = {
    common: {
        font: {base: `'IBM Plex Mono', 'SFMono-Regular', 'Andale Mono', AndaleMono, 'Lucida Console', 'Lucida Sans Typewriter', Consolas, monospace`},
        textSize: {base: 12, sm: 10},
    }
};

vmap.basic = {
    ...basic,
    ...vmap.common,
};
vmap.basic.applyStyles = function() {

}

/***/ }),

/***/ "./src/lib/modules/dna-svg.js":
/*!************************************!*\
  !*** ./src/lib/modules/dna-svg.js ***!
  \************************************/
/*! exports provided: formDNA_html, vmap_svg, vmapPerspectives_svg, vmapList_svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formDNA_html", function() { return formDNA_html; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmap_svg", function() { return vmap_svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmapPerspectives_svg", function() { return vmapPerspectives_svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vmapList_svg", function() { return vmapList_svg; });
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _dna_svg_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dna-svg-styles.js */ "./src/lib/modules/dna-svg-styles.js");





// ===========================================================
//                      formDNA markup
// ===========================================================

function formDNA_html (formula, dna, vars) {
	/* Constructs an HTML wrapper for formDNA */

	// construct HTML markup for the formDNA
	const formStr = formula !== undefined ? `<span class="dna-form" title="FORM">${formula}</span>` : '';

	const varorderStr = vars && dna.length > 1 ? '.<span class="dna-varorder" title="Variable interpretation order">['+vars.join(',')+']</span>' : '';

	return `<div id="dna"><code>${formStr + varorderStr}::<span class="dna-code">${markupQuartCycles(dna)}</span></code></div>`;
}

// ===========================================================
//                        vmap markup
// ===========================================================

function vmap_svg (vmapTree, input, varorder, options) {
	/* Generates SVG output for a given vmap tree */

	// option defaults
	const {vmapPad, strokeC, vmapC, figPad, figC, hideInputLabel, hideOrderLabel, customLabel, fullInputLabel, inputLabelMax, styleClass} = {
		vmapPad: 0, strokeC: `#fff`, vmapC: `none`, figPad: 0, figC: `#fff`,
		hideInputLabel: false, hideOrderLabel: false, fullInputLabel: false, inputLabelMax: 200, 
		customLabel: undefined, styleClass: 'basic',
		...options};

	const design = _dna_svg_styles_js__WEBPACK_IMPORTED_MODULE_1__["vmap"][styleClass];
	const [textSize, font] = [design.textSize, design.font.base];

	const {vnum, margins} = vmapTree.data;
	const scale = vmapTree.scale;
	const strokeW = margins[0];
	// const len = Math.sqrt(4**vnum); // length of dna without '::'
	const bounds = {w: scale[0] + strokeW, h: scale[1] + strokeW};
	const rhomb = {w: Math.sqrt(2 * (bounds.w**2)), h: Math.sqrt(2 * (bounds.h**2))};

	const chart = {tree: vmapTree, input: input, varorder: varorder, options: options};

	// if (output == 'mixed') {
		// svg with html wrapper

		// const caption = () => {
		// 	if (customLabel !== undefined) return `<figcaption style="word-wrap: break-word;">${customLabel}</figcaption>`;
		// 	if (!(hideInputLabel && hideOrderLabel)) {
		// 		let label = '';
		// 		if (!hideOrderLabel) label += `${varorder.reduce((acc,curr,i) => acc + (i > 0 ? ' > ' : '') + processLabel(curr),'' )}${hideInputLabel || vnum < 1 ? '' : '<br/>'}`;
		// 		if (!hideInputLabel) {
		// 			const isFormDNA = input.includes('::');
		// 			if (isFormDNA) label += `<code style="font-size:0.8em;">${fullInputLabel ? input : truncateStr(input,(input.split('::')[0].length + 4**4),`…(${4**vnum})`)}</code>`;
		// 			else label += 'ƒ = '+(fullInputLabel ? input : truncateStr(input,inputLabelMax,`… <i>+more</i>`));
		// 		}
		// 		return `<figcaption style="word-wrap: break-word;">${label}</figcaption>`;
		// 	}
		// 	return '';
		// }

		// chart.elem = `<figure class="vmap-figure" style="margin: 0;">
		// 	<svg class="vmap" style="background: ${bgC}; padding: ${vmapPad};" width=${scale[0]} height=${scale[1]}
		// 	fill="white" stroke="${strokeC}" stroke-width="${strokeW}"
		// 	viewBox="-${strokeW/2} -${strokeW/2} ${rhomb.w} ${rhomb.h}">
		// 	<g transform="translate(${0},${rhomb.h/2}) rotate(-45,0,0)">${ constructSVG(vmapTree) }</g>
		// 	</svg>
		// 	${ caption() }
		// 	</figure>`;

	// } else {
		// pure svg output

		const caption = (input, customLabel) => {
			if (customLabel !== undefined) return customLabel;

			let label = '';
			if (!hideOrderLabel && vnum > 0) {
				const pos = `y="0"`;

				label += orderLabel(varorder, pos, {font: font, textSize: textSize.base});
			}
			if (!hideInputLabel) {
				const isFormDNA = input.includes('::');

				const prefix = isFormDNA ? '' : `ƒ = `;
				const truncMax = isFormDNA ? (input.split('::')[0].length + 4**4) : inputLabelMax;
				const truncSuffix = isFormDNA ? `…(${4**vnum})` : `… <tspan style="font-style: italic">+more</tspan>`;

				const pos = `y="0"` + (label.length > 0 ? ` dy="${textSize.base + textSize.sm - 2}px"` : '');

				label += inputLabel(input, pos, {prefix: prefix, truncated: !fullInputLabel, truncMax: truncMax, truncSuffix: truncSuffix, font: font, textSize: textSize.sm});
			}
			return label;
		}

		const vmap = {w: (scale[0] + vmapPad), h: (scale[1] + vmapPad)};

		vmap.elem = `<svg class="vmap" width=${vmap.w} height=${vmap.h} viewBox="-${strokeW/2 + vmapPad/2} -${strokeW/2 + vmapPad/2} ${rhomb.w + vmapPad} ${rhomb.h + vmapPad}">
			<rect x="-${vmapPad/2}" y="-${vmapPad/2}" width="${rhomb.w + vmapPad}" height="${rhomb.h + vmapPad}" fill="${vmapC}"></rect>
			<g transform="translate(0,${rhomb.h/2}) rotate(-45,0,0)" stroke="${strokeC}" stroke-width="${strokeW}">${ constructSVG(vmapTree) }</g>
		</svg>`;

		const figCaption = {elem: caption(input, customLabel), pos: {x: 0, y: (vmap.h + 10)}};
		figCaption.size = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["getSvgSize"])(figCaption.elem);

		const appendSize = [Math.max(0, (figCaption.size.w - vmap.w)),
							(figCaption.size.h > 0 ? (figCaption.size.h + (figCaption.pos.y - vmap.h)) : 0)];

		chart.size = {w: (vmap.w + appendSize[0] + figPad), h: (vmap.h + appendSize[1] + figPad)};

		chart.elem = `<svg class="vmap-figure" xmlns="http://www.w3.org/2000/svg" width="${chart.size.w}" height="${chart.size.h}" viewBox="-${figPad/2} -${figPad/2} ${chart.size.w} ${chart.size.h}">
			<rect x="-${figPad/2}" y="-${figPad/2}" width="${chart.size.w}" height="${chart.size.h}" fill="${figC}"></rect>
			<g>${ vmap.elem }</g>
			<g transform="translate(${figCaption.pos.x},${figCaption.pos.y})">${ figCaption.elem }</g>
		</svg>`;
	// }

	return chart;
}

function orderLabel (varorder, pos='x="0" y="0"', options=undefined) {
	/* Generates an order label (e.g. "a > b > c") from variable order */
	const {maxLineWidth, font, textSize, leading} = 
		{ maxLineWidth: 60, font: 'inherit', textSize: 12, leading: 4, ...options };
	const style = `font-family: ${font}; font-size: ${textSize}px; dominant-baseline: hanging;`;

	let output = varorder.reduce((acc,curr,i) => acc + (i > 0 ? '<tspan y="0"> > </tspan>' : '') + Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["processLabel"])(curr, 'svg'),'' );

	// output = breakStr(output, maxLineWidth) // <-- fix tag breaks
	// 	.reduce((str,curr,i) => str + (i > 0 ? svgLinebreak(curr, (textSize + leading + 'px')) : curr), '');

	return `<text ${pos} style="${style}">${output}</text>`;
}

function inputLabel (input, pos='x="0" y="0"', options=undefined) {
	/* Generates an input label (e.g. "ƒ = ((a)b)" or "::3210") */
	const {prefix, maxLineWidth, truncated, truncMax, truncSuffix, font, textSize, leading} = 
		{prefix: '', maxLineWidth: 60, truncated: false, truncMax: 1000, truncSuffix: '…', font: 'inherit', textSize: 12, leading: 4, ...options };
	const style = `font-family: ${font}; font-size: ${textSize}px; dominant-baseline: hanging;`;

	let output = prefix + input;
	let appendix = '';

	if (truncated && (output.length > truncMax)) {
		output = output.substr(0,truncMax);
		appendix += truncSuffix;
	}
	output = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["breakStr"])(output, maxLineWidth)
		.reduce((str,curr,i) => str + (i > 0 ? Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["svgLinebreak"])(curr, (textSize + leading + 'px')) : curr), '');

	return `<text ${pos} style="${style}">${output + appendix}</text>`;
}

function constructSVG(subTree, mapSVG='') {
	/* Recursive function to construct svg markup from vmap tree structure */

	if(subTree !== null && typeof subTree == "object") {
		if(subTree.children) {
			mapSVG += `<g transform="translate(${subTree.position[0]}, ${subTree.position[1]})">`;

			subTree.children.forEach(child => {
				mapSVG += constructSVG(child);
			});
			mapSVG += `</g>`;
			return mapSVG;
		}
		else {				
			mapSVG += `<rect x="${subTree.position[0]}" y="${subTree.position[1]}" width="${subTree.scale[0]}" height="${subTree.scale[1]}" fill="${vColor(subTree.value)}"></rect>`;
			return mapSVG;
		}
	}
	else {
		throw new Error('Not a subtree!');
	};
}


function vmapPerspectives_svg (vmapPermutations, input, globalOptions=undefined) {
	/* Constructs vmap perspectives as HTML output (flex list) */

	const {figPad, figC, margin, customLabel, styleClass} = 
		{ figPad: 0, figC: `#fff`,
		  margin: 20, customLabel: undefined, styleClass: 'basic', ...globalOptions };

	const design = _dna_svg_styles_js__WEBPACK_IMPORTED_MODULE_1__["vmap"][styleClass];
	const [textSize, font] = [design.textSize, design.font.base];

	const chart = {vmaps: vmapPermutations, input: input, options: globalOptions};

	// if (output == 'mixed') {
		// const vmapItems = vmapPermutations.map(vmap => {
		// 	return `<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px"> 
		// 			${vmap.elem}</div>`}).reduce((str,item) => str+item,'');

		// const label = caption();

		// return `<figure class="vmap-perspectives" style="max-width: none;">
		// 		<div class="vmap-list" style="display: flex; flex-wrap: wrap; margin: 0 -${Math.floor(margin/2)}px">
		// 		${ vmapItems }
		// 		</div>
		// 		<figcaption style="border-top: 1px solid; padding-top: ${Math.floor(margin/4)}px; margin-top: ${Math.floor(margin/2)}px; word-wrap: break-word;">${label}</figcaption>
		// 		</figure>`;
	// }
	// else {
		const padding = {x: (Math.floor(margin/4)), y: (Math.floor(margin/2))};
		const count = vmapPermutations.length;
		const vmapSize = vmapPermutations[0].size;

		const colNum = Math.min(count, 6);
		const rowNum = Math.floor(count/colNum);
		const tableSize = { w: vmapSize.w * colNum + (padding.x*2) * (colNum-1),
							h: vmapSize.h * rowNum + (padding.y*2) * (rowNum-1) };

		const vmapItems = vmapPermutations.map(vmap => {
			
			return {elem: vmap.elem};
		}).reduce((str,item,i) => {
			const x = i%colNum;
			const y = Math.floor(i/colNum);

			const coords = [vmapSize.w * x + (padding.x*2) * x,
						    vmapSize.h * y + (padding.y*2) * y];
			return str+ `<g class="vmap-item" transform="translate(${coords[0]},${coords[1]})">${item.elem}</g>`;
		},'');
	
		const caption = (input, customLabel) => {
			if (customLabel !== undefined) return customLabel;

			const isFormDNA = input.includes('::');
			const prefix = isFormDNA ? '' : `ƒ = `;
			const pos = `y="0"`; //  dy="${textSize.base + textSize.sm - 2}px"

			return inputLabel(input, pos, {prefix: prefix, truncated: false, font: font, textSize: textSize.base});
		}

		const figCaption = {elem: caption(input, customLabel), pos: {x: 0, y: tableSize.h + padding.y}, lineSpacing: padding.y};
		figCaption.size = Object(_common_helper__WEBPACK_IMPORTED_MODULE_0__["getSvgSize"])(figCaption.elem);

		const appendSize = [Math.max(0, (figCaption.size.w - tableSize.w)),
							figCaption.size.h + (figCaption.pos.y - tableSize.h) + figCaption.lineSpacing];

		// const listMargin = {x: 0, y: Math.floor(margin/2)};

		chart.size = {w: (tableSize.w + appendSize[0] + figPad), 
					  h: (tableSize.h + appendSize[1] + figPad)};

		chart.elem = `<svg class="vmap-perspectives-figure" xmlns="http://www.w3.org/2000/svg" width="${chart.size.w}" height="${chart.size.h}" viewBox="-${figPad/2} -${figPad/2} ${chart.size.w} ${chart.size.h}">
			<rect x="-${figPad/2}" y="-${figPad/2}" width="${chart.size.w}" height="${chart.size.h}" fill="${figC}"></rect>
			<g class="vmap-perspectives vmap-table">${ vmapItems }</g>
			<g transform="translate(${figCaption.pos.x},${figCaption.pos.y})">
				<line x1="0" y1="0" x2="${tableSize.w}" y2="0" stroke="black" stroke-width="0.5" />
				<g transform="translate(0,${figCaption.lineSpacing})">${ figCaption.elem }</g>
			</g>
		</svg>`;

		return chart;
	// }
}


function vmapList_svg (vmaps_svg, globalOptions=undefined) {
	/* Constructs multiple vmaps as SVG output */

	const {margin, vAlign} = { margin: 20, vAlign: 'bottom', ...globalOptions }

	// const vmapItems = vmapPermutations_svg.map(vmap_svg => {
			
	// 	return {size: vmap_svg.size, elem: vmap_svg.elem};
	// }).reduce((str,item,i,arr) => {

	// 	// const shiftX = (i > 0) ? ( arr[0].size.w * i + (padding.x*2) * i ) : 0;
	// 	return str+ `<g class="vmap-item" transform="translate(${shiftX},0)">${item.elem}</g>`;
	// },'');

	return `<div class="vmap-list" style="display: flex; flex-wrap: wrap; ${getVAlign(vAlign)} margin: 0 -${Math.floor(margin/2)}px">
			${ vmaps_svg.reduce((str, vmap_svg) => `${str}<div class="vmap-item" style="padding: ${Math.floor(margin/4)}px ${Math.floor(margin/2)}px">${vmap_svg.elem}</div>`,'') }
			</div>`
};

// -----------------------------------------------------------
//                         Helper
// -----------------------------------------------------------

const markupQuartCycles = (str) => {
	/* Marks up groups of 4 numbers each for dna to be able to apply readable CSS */
	return str.split('').reduce((str,c,i,arr) => {

		return str + ((i+1)%4 === 1 ? '<span class="dna-quart1">' : '') + c + ((i+1)%4 === 0 ? '</span>' : '');
	},'');
}

const getVAlign = vAlign => {
	// >>> as helper
	const alignItems = vAlign === 'top'    ? 'flex-start'
				 	 : vAlign === 'center' ? 'center'
				 	 : vAlign === 'bottom' ? 'flex-end' : 'flex-end';
	return `align-items: ${alignItems};`;
}

const vColor = val => {
	/* Value to color map for vmap */
	return val == 0 ? '#000000'
		 : val == 1 ? '#4757ff'
		 : val == 2 ? '#ff0044'
		 : val == 3 ? '#00ff5f'
		 : NaN;
};


/***/ }),

/***/ "./src/lib/modules/graph-d3-styles.js":
/*!********************************************!*\
  !*** ./src/lib/modules/graph-d3-styles.js ***!
  \********************************************/
/*! exports provided: clearDefaults, tree, pack, boxmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDefaults", function() { return clearDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return pack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxmodel", function() { return boxmodel; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");



/* Cascading D3-Styles - by Peter Hofmann, 12/2018 */

// -----------------------
// global styles

const global = {
    common: {
        font: {family: 'sans-serif', size: '14px', style: 'normal'},
        fontVar: {family: 'sans-serif', size: '14px', style: 'italic'},
        fontConst: {family: 'courier, monospace', size: '14px', style: 'normal'},
        fontContext: {family: 'sans-serif', size: '10px', style: 'normal'},
        strokeWidth: 1,
        labels: {reEven: '2|r|', reOdd: '2|r|+1'},
        color: {base: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black'),
                ground: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'),
                indef: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('red'),
                light: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('#ddd'),
            }
    }
};
global.basic = {
    ...global.common,
    font: { ...global.common.font,
            family: 'georgia, serif'
        },
    fontVar: { ...global.common.fontVar,
            family: 'georgia, serif', style: 'italic'
        },
    fontConst: { ...global.common.fontConst,
        family: 'georgia, serif'
    },
    fontContext: { ...global.common.fontContext,
            family: 'courier, monospace'
        }
};
global.gestalt = {
    ...global.common,
    font: { ...global.common.font,
            family: 'arial, sans-serif'
        },
    fontVar: { ...global.common.fontVar,
            family: 'arial, sans-serif'
        },
    fontConst: { ...global.common.fontConst,
        family: 'arial, sans-serif'
    },
    fontContext: { ...global.common.fontContext,
            family: 'georgia, serif'
        },
    color: {...global.common.color,
            pos: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('white'), 
            neg: d3__WEBPACK_IMPORTED_MODULE_0__["color"]('black')
        }
};
const [basic, gestalt] = [global.basic, global.gestalt];

function clearDefaults(svg) {
    svg.attr('stroke','none').attr('fill','none');
}

// -----------------------
// d3.tree styles:

const tree = {
    common: {
        nodeSize: {w: 10.0, h: 10.0}, // size of nodes
        nodeSeparation: {hz: 20, vt: 40}, // separation between nodes
        dashes: {link: '4px 6px'
            },
    }
};

tree.basic = {
    ...basic,
    ...tree.common,
};
tree.basic.applyAxisStyles = function(axis) {

    axis.selectAll('.tick').select('line')
        .style('stroke-width', this.nodeSize.w*1.5)
        .style('stroke', 'rgba(0,0,0,.05')
        .style('stroke-linecap', 'round');
    axis.selectAll('.tick').select('text')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('fill', this.color.base.toString())
        .attr('text-anchor', 'start');

}
tree.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.selectAll('circle')
        .style('stroke', this.color.base.toString())
        .style('fill', this.color.ground.toString());


    elements.selectAll('circle')
        .style('fill', this.color.base.toString());

    reEntries.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('fill', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('fill', this.color.ground.toString());
    reChilds.selectAll('circle')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 3, [1]));
    rePoints.selectAll('circle')
        .style('fill', this.color.indef.toString());

    nodes.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('fill', this.color.base.toString())
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

    sets.selectAll('circle.inner')
        // .classed('inner')
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());

};
tree.basic.applyLinkStyles = function(links, linkPartitions) {
    const [reChildLink, rePointLink] = linkPartitions;

    links.selectAll('path')
        .style('stroke', this.color.base.toString());

    reChildLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);

    rePointLink.selectAll('path')
        .style('stroke', this.color.indef.toString())
        .style('stroke-dasharray', this.dashes.link);
};

// tree.gestalt = {
//     ...gestalt,
//     ...tree.common,
// };
// tree.gestalt.applyAxisStyles = function(axis) {
//     tree.basic.applyAxisStyles(axis);
// }
// tree.gestalt.applyNodeStyles = function(nodes, nodePartitions) {
//     const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

//     tree.basic.applyNodeStyles(nodes, nodePartitions);
// };
// tree.gestalt.applyLinkStyles = function(links, linkPartitions) {
//     // const [reChildLink] = linkPartitions;

//     tree.basic.applyLinkStyles(links, linkPartitions);
// };

// -----------------------
// d3.pack styles:

const pack = {
    common: {
        radius: 14,
        padding: 14,
    }
};

pack.basic = {
    ...basic,
    ...pack.common,
};
pack.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    forms.select('circle')
        .style('stroke', this.color.base.toString())
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    reEntries.select('circle')
        .style('stroke', this.color.indef.toString())
        .filter(d => d.data.lastOpen)
            .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 14, [2/5, 3/5]) );

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('fill', this.color.base.toString());
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

    unclear.select('rect')
        .style('fill', this.color.light.toString());

    rePoints.select('circle')
        .style('fill', this.color.indef.toString())
        .style('stroke','none');

    const reEvenLabels = reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('stroke', 'none')
        .style('fill', this.color.indef.toString());
};

pack.gestalt = {
    ...gestalt,
    ...pack.common,
};
pack.gestalt.invertFill = function(d) {
    return Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["getRealDepth"])(d)%2 ? this.color.pos.toString() : this.color.neg.toString();
};
pack.gestalt.applyNodeStyles = function(nodes, nodePartitions, chart) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    const defs = d3__WEBPACK_IMPORTED_MODULE_0__["select"](chart.node().parentNode)
        .append('defs');
    const grad_1 = defs.append('radialGradient').attr('id', 'grad-indef-outin')
        .attr('fx','20%')
        grad_1.append('stop')
            .attr('offset','40%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.3);
            grad_1.append('stop')
            .attr('offset','90%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.8);
        grad_1.append('stop')
            .attr('offset','100%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 1.0);
    const grad_2 = defs.append('radialGradient').attr('id', 'grad-indef-inout')
        .attr('fx','20%')
        grad_2.append('stop')
            .attr('offset','10%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 1.0);
        grad_2.append('stop')
            .attr('offset','50%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.6);
        grad_2.append('stop')
            .attr('offset','60%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.4);
        grad_2.append('stop')
            .attr('offset','100%').attr('stop-color', this.color.indef.toString() ).attr('stop-opacity', 0.0);

    forms.select('circle').filter(d => !d.data.unmarked)
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));

    reEntries.select('circle')
        .style('stroke', d => (d.parent.data.type === 'reEntry') ? this.color.pos.toString() : 'none' )
        .style('fill', 'url(#grad-indef-outin)');

    const openReEntries = reEntries.select('circle').filter(d => d.data.lastOpen)
        .style('fill', 'url(#grad-indef-inout)')
        .style('stroke-dasharray', d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["circleDashArray"])(d.r, 8, [2/5, 3/5]) );

    openReEntries.filter(d => ((d.parent.data.type !== 'reEntry') || !Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_1__["getRealDepth"])(d)%2) ) //  
            .style('stroke', d => this.color.indef.toString());

    openReEntries.filter(d => (d.parent.data.type === 'reEntry') && !d.parent.data.lastOpen)
            .style('stroke', d => this.color.pos.toString());

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        .style('dominant-baseline','middle')
        .style('text-anchor', 'middle')
        .style('stroke', 'none')
        .style('fill', d => this.invertFill(d));
    vars.selectAll('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.selectAll('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);

    unclear.select('rect')
        .style('fill',this.color.light.toString());
    unclear.select('text')
        .style('fill',this.color.base.toString());
        
    rePoints.select('circle')
        .style('fill',this.color.indef.toString())
        .style('stroke','none')
        .filter(d => d.parent.data.type === 'reEntry')
            .style('stroke', this.color.indef.toString())
            .style('fill', this.color.pos.toString())
            .attr('transform', 'scale(1.5)');

    const reEvenLabels = reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('stroke', 'none')
        .style('fill', d => (d.parent.data.type === 'reEntry' && !d.parent.data.lastOpen) ? this.color.pos.toString() : this.color.indef.toString());
    reEntries.select('.label.inside')
        .style('fill', d => (d.parent.data.type !== 'reEntry' && d.data.lastOpen) ? this.color.indef.toString() : this.color.pos.toString());

};

// -----------------------
// boxmodelD3 styles:

const boxmodel = {
    common: {
        elemMargin: {hz: 12, vt: 8}, // vt: 8
        formMargin: {top: 10, right: 10},
        formPadding: {hz: 0},
        minFormSize: {width: 34, height: 34},
        maxLineWidth: 10000,
        strokeWidth: 1.1
    }
};

boxmodel.basic = {
    ...basic,
    ...boxmodel.common
    // font: {...basic.font, size: '18px'}
};
boxmodel.basic.applyNodeStyles = function(nodes, nodePartitions) {
    const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

    sets.select('polyline')
        .style('fill', 'none')
        .style('stroke', this.color.base.toString())
        .style('stroke-width', this.strokeWidth);
    forms.select('polyline')
        .filter(d => d.data.unmarked)
            .style('stroke','none');
    // reEntries.select('polyline')
    //     .style('stroke', this.color.indef.toString());

    elements.selectAll('text')
        .style('font-size', this.font.size)
        .style('font-style', this.font.style)
        .style('font-family', this.font.family)
        // .style('alignment-baseline','baseline') <-- "bug" in Safari
        .style('fill', this.color.base.toString());
    vars.select('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', this.fontVar.style)
        .style('font-family', this.fontVar.family);
    consts.select('text')
        .style('font-size', this.fontConst.size)
        .style('font-style', this.fontConst.style)
        .style('font-family', this.fontConst.family);
    reEntries.select('.label')
        .style('font-size', this.fontContext.size)
        .style('font-style', this.fontContext.style)
        .style('font-family', this.fontContext.family)
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());
        // .style('fill', this.color.indef.toString());

    unclear.select('.unclearMark')
        .style('fill', this.color.light.toString());

    unclear.select('text')
        .style('font-size', this.fontVar.size)
        .style('font-style', 'normal')
        .style('font-family', this.fontVar.family)
        .style('stroke', 'none')
        .style('fill', this.color.base.toString());
};

/***/ }),

/***/ "./src/lib/modules/graph-d3.js":
/*!*************************************!*\
  !*** ./src/lib/modules/graph-d3.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return D3Graph; });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! boxmodel-layout-for-d3 */ "./node_modules/boxmodel-layout-for-d3/dist/boxmodel-d3.min.js");
/* harmony import */ var boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_d3_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/d3-helper */ "./src/common/d3-helper.js");
/* harmony import */ var _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graph-d3-styles.js */ "./src/lib/modules/graph-d3-styles.js");








class D3Graph {
    // -----------------------------------------------------------
    //                    Visualization Setup
    // -----------------------------------------------------------

    constructor(graphType, data, opts, ...args) {
        // create basic svg-structure from chartFactory and merge options with configuration

        const proto = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["default"])( { 
            ...{ margin: { left: 50, right: 50, top: 50, bottom: 50 }, 
                padding: { left: 10, right: 10, top: 10, bottom: 10 },
                // padding: { left: 0, right: 0, top: 0, bottom: 0 },
                styleClass: 'basic' },
            ...opts
        } );

        // merge this graph with the chart structure
        Object.assign(this, proto);
        // calculate inner dimensions of the svg-chart
        this.innerHeight = this.height - this.margin.top - this.margin.bottom - this.padding.top - this.padding.bottom;
        this.innerWidth = this.width - this.margin.left - this.margin.right - this.padding.left - this.padding.right;

        // call the appropriate method to build the graph
        this.constructor[graphType].call(this, data, ...args);
    }


    // ===========================================================
    //                Depth Tree visualization
    // ===========================================================

    static tree(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space);

        // set up design variables
        const design = _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["tree"][this.styleClass];
        const [nodeSize, nodeSep] = [design.nodeSize, design.nodeSeparation];
        const [fontSize, font] = [design.font.size, design.font.family];

        this.padding = { left: 10, right: 10, top: 10, bottom: 10 };

        root.dx = nodeSize.w + nodeSep.hz;
        root.dy = this.width / (root.height + 1);

        // define tree layout
        const layout = d3__WEBPACK_IMPORTED_MODULE_0__["tree"]()
            .nodeSize([
                root.dx,
                root.dy
            ])
            .separation((a,b) => {
                return a.parent == b.parent ? 1 : 2;
            });
        const tree = layout(root);

        // compute min/max x-values
        let x0 = Infinity;
        let x1 = -x0;
        tree.each(d => {
            if (d.x > x1) x1 = d.x;
            if (d.x < x0) x0 = d.x;
        });
        // compute new height based on the difference of min/max x-values of tree nodes + twice the padding
        const rootUnmarked = root.data.unmarked;
        const tickpadding = nodeSize.h*1.8;
        const axisHeight = tickpadding; //30;
        this.height = (x1 - x0) + this.padding.top*2 + nodeSize.h+2 + axisHeight;

        // setup svg container
        this.svg
            .attr('width', this.width)
            .attr('height', this.height);
        _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["clearDefaults"](this.svg); // clear default styles for svg export

        // setup basic chart structure
        chart
            .classed('graph-tree', true)
                .attr('transform', `translate(${this.padding.left + nodeSize.w/2 + (root.data.unmarked ? -root.dy : 0)},${this.padding.top - x0 + nodeSize.h/2})`);
        
        // add vertical axis lines for depth

        const rootHeights = d3__WEBPACK_IMPORTED_MODULE_0__["range"](root.height + (rootUnmarked ? 0:1));

        this.depthScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleOrdinal"]()
            .domain( rootHeights )
            .range( rootHeights.map(i => (i+(rootUnmarked ? 1:0))*root.dy) );
        
        const depthAxis = d3__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]()
            .scale(this.depthScale)
            .tickSizeInner(-(x1-x0))
            .tickSizeOuter(0)
            .tickPadding(tickpadding)
            .tickValues( this.depthScale.domain().map(i => 
                (this.depthScale.domain().length < 15) ? 'Depth '+i : i
            ) );

        const axis = chart.append('g')
            .classed('depthAxis', true)
            .attr('transform', `translate(0, ${x1})`)
            .call(depthAxis);
        axis.select('.domain').remove();
        

        // add groups for links and nodes

        const links = chart.selectAll('.link')
            .data(tree.links()) 
            .enter().append('g')
                .classed('link', true)

        const nodes = chart.selectAll('.node')
            .data(tree.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.y},${d.x})`);

        if (rootUnmarked) {
            links.filter(d => d.source.depth === 0)
                .remove();

            nodes.filter(d => d.depth === 0)
                .remove();
        }

        // generate link partition selections
        const linkPartitions = resolveLinks(tree, links);
        const [reChildLink, rePointLink] = linkPartitions;

        // generate node partition selections
        const nodePartitions = resolveNodes(tree, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // curved line generator
        const line = d3__WEBPACK_IMPORTED_MODULE_0__["line"]().curve(d3__WEBPACK_IMPORTED_MODULE_0__["curveBasis"]);

        links
            .append('path')
                .attr('d', d3__WEBPACK_IMPORTED_MODULE_0__["linkHorizontal"]()
                    .x(d => d.y)
                    .y(d => d.x));

        nodes.filter(d => !d.data.unmarked)
            .append('circle')
            .attr('r', nodeSize.w/2)
        rePoints.append('text')
            .attr('x', nodeSize.w/2 + 2)
            .text(d => {
                let p = d.parent;
                let counter = 0;
                while(p.data.type !== 'reEntry') {
                    p = p.parent;
                    if (counter > 1000) return null; // security
                    counter++;
                }
                return (p.data.reEven !== 'undefined') ? (p.data.reEven ? '2|r|' : '2|r|+1') : '';
            });

        elements.selectAll('circle')
            .attr('r', (nodeSize.w/2)/2);

        nodes
            .append('text')
            .attr('x', nodeSize.w/2 + 2)
        
        vars.selectAll('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));
        consts.selectAll('text')
            .text(d => `= ${d.data.value}`);
        unclear.selectAll('text')
            .text(d => `/${d.data.symbol}/`);

        sets.filter(d => d.children)
            .append('circle')
            .classed('inner',true)
            .attr('r', (nodeSize.w/2)/2);


        // apply all style-related attributes to the selections
        design.applyAxisStyles(axis);
        design.applyLinkStyles(links, linkPartitions);
        design.applyNodeStyles(nodes, nodePartitions);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.tree, this.design] = 
        //     [root, layout, chart, tree, design];
    }


    // ===========================================================
    //                Circle packing visualization
    // ===========================================================

    static pack(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["clearDefaults"](this.svg); // clear default styles for svg export

        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space)
            .sum(d => d.children ? 0 : 1);

        // set up design variables
        const design = _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["pack"][this.styleClass];
        const [radius, padding] = [design.radius, design.padding];
        const [fontSize, font] = [design.font.size, design.font.family];

        // define pack layout
        const layout = d3__WEBPACK_IMPORTED_MODULE_0__["pack"]()
        .padding(d => {
            let pad = padding;
            if (d.data.type === 'form' && d.children.length === 1) {
                if (d.children[0].data.type === 'form')
                    pad = pad * 0.4;
            }
            if (d.data.unmarked && d.children.length === 1) pad = 0;
            return pad;
        })
        .radius(d => {
            let rad = radius;
            if(typeof(d.data.symbol) === 'string') {
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.symbol, fontSize, font).width /2;
                if(d.data.type === 'unclear') rad += padding*2;
            }
            else if(d.data.value) {
                rad = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.value+'', fontSize, font).width /2;
            }
            else if(d.data.children || d.data.type === 'reEntryPoint' || d.data.type === 'space') rad = 0;
            return rad;
        });
        const pack = layout(root);

        // setup basic chart structure
        chart.attr('class', 'graph-pack')
            .attr('transform', `translate(${pack.r + this.padding.left},${pack.r + this.padding.top})`);

        const nodes = chart.selectAll('.node')
            .data(pack.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.x},${d.y})`);

        // generate node partition selections
        const nodePartitions = resolveNodes(pack, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // define detailled structure/logic

        sets.append('circle')
            .attr('r', d => d.r);
        vars.append('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));

        consts.append('text')
            .text(d => d.data.value);

        unclear.append('rect')
            .attr('transform', d => 
            `skewX(-30) translate(${-(d.r - padding)},
            ${-(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])('x',fontSize, font).height + padding*2)/2})`)
            .attr('width', d => d.r*2 - padding*2)
            .attr('height', d => (Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])('x',fontSize, font).height + padding*2))
        unclear.append('text')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));

        rePoints
            .append('circle')
            .attr('r', 1.5);

        reEntries.filter(d => d.data.reEven !== 'undefined')
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["circleLabel"])( d => d.data.reEven ? '2|r|' : '2|r|+1', design.fontContext.size, design.fontContext.family ));

        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.pack, this.design] = 
        //     [root, layout, chart, pack, design];
    }


    // ===========================================================
    // Boxmodel visualization (Spencer-Brown hook notation)
    // ===========================================================

    static gsbhooks(data) {
        const chart = this.container;
        // create a d3-hierarchy from our form-json
        _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["clearDefaults"](this.svg); // clear default styles for svg export

        const root = d3__WEBPACK_IMPORTED_MODULE_0__["hierarchy"](data, d => d.space)
            .sum(d => d.space ? 0 : 1);

        this.styleClass = 'basic';
        const compactReEntry = (this.compactChecked !== null) ? this.compactChecked : true;

        // set up design variables
        const design = _graph_d3_styles_js__WEBPACK_IMPORTED_MODULE_3__["boxmodel"][this.styleClass];
        const {elemMargin, formMargin, formPadding, minFormSize, maxLineWidth, fontVar, fontConst, fontContext, labels} = {...design};
        const unclearPad = {hz: elemMargin.hz/2, vt: elemMargin.vt};
        const dataLabelPad = 4;

        // define boxmodel layout
        const layout = boxmodel_layout_for_d3__WEBPACK_IMPORTED_MODULE_1___default()()
            .vAlign('bottom')
            .edgeMargins(d => !(isContainer(d) && !d.parent.parent && d.parent.data.unmarked) )
            .isContainer(d => isContainer(d))
            .padding(d => {
                let p = {left: 0, right: 0, top: 0, bottom: 0};
                
                if (isContainer(d)) {
                    p.left = p.right = formPadding.hz;
                    if (d.data.type === 'reEntry') {
                        const text = d.data.reEven ? labels.reEven : labels.reOdd;
                        const txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(text, fontContext.size, fontContext.family, fontContext.style);
                        p.bottom = txtSz.height + elemMargin.vt/2;
                    }
                }
                return p;
                })
            .margin(d => {
                let m = {left: 0, right: 0, top: 0, bottom: 0};
                
                if (isContainer(d)) {
                    m.top = formMargin.top;
                    m.right = formMargin.right;
                    if (d.depth === 0) m.top = 0;
                    if (d.data.reChild) {
                        if (d.parent.children.length === 1) m.right = minFormSize.width;
                        if (d.parent.data.lastOpen) m.top = 0;
                        if (compactReEntry && d.parent.data.reChild) {
                            if (!(d.children[0].data.type === 'reEntryPoint' && reParentLastOpen(d))) m.top = 0;
                        }
                    }
                }
                else if (d.data.type !== 'reEntryPoint') { // all other elements
                    m.top = m.bottom = elemMargin.vt;
                    m.left = m.right = elemMargin.hz;
                    if (fontVar.style == 'italic') m.right += 1;

                    if (d.data.type === 'unclear') {
                        // m.bottom = (d.data.symbol.split('_').length > 1) ? -6 : 0;
                        m.bottom = 0;
                    }
                }
                else if (d.data.type === 'reEntryPoint') {
                    m.right = formMargin.right;
                }
                
                return m;
                })
            .spanHeight(d => {
                let span = false;
                if (compactReEntry && d.data.reChild) {
                    span = true;
                }
                return span;
                })
            .minContainerSize(d => {
                let w = minFormSize.width;
                let h = minFormSize.height;
                if (d.data.reChild) {
                    if (d.children.length === 1 && d.children[0].data.type === 'reEntryPoint') {
                        if (reParentLastOpen(d)) w = minFormSize.width/2;
                    }
                }
                if (d.data.type === 'reEntry' && d.children.length <= 2 && d.children[0].data.type === 'reEntryPoint') {
                    const text = d.data.reEven ? labels.reEven : labels.reOdd;
                    let txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(text, fontContext.size, fontContext.family, fontContext.style);
                    w = txtSz.width + dataLabelPad*2;
                    w = w < minFormSize.width ? minFormSize.width : w;
                }
                return {width: w, height: h};
                })
            .maxLineWidth(d => {
                let w = maxLineWidth;
                return w;
                })
            .nodeSize(d => {
                let w = 0, h = 0;
                
                if (isText(d)) {
                    let txtSz = undefined;
                    switch (d.data.type) {
                    case 'var':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, fontVar.style);
                        w = txtSz.width;
                        h = txtSz.height * 0.7;
                        break;
                    case 'unclear':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, 'normal');
                        w = txtSz.width;
                        h = txtSz.height * 0.7;

                        w += skewDiff((h + unclearPad.vt*2))*2 + unclearPad.hz*2;
                        h += unclearPad.vt*2;
                        break;
                    case 'const':
                        txtSz = Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.value, fontConst.size, fontConst.family, fontConst.style);
                        w = txtSz.width;
                        h = txtSz.height * 0.7;
                        break;
                    }
                
                }
                return {width: w, height: h};
                });

        const boxmodel = layout(root);

        // setup basic chart structure
        chart.attr('class', 'graph-boxmodel')
            .attr('transform', `translate(${this.padding.left},${this.padding.top})`);

// chart.attr('width','100%').attr('height','100%').style('fill','rgba(255,0,0,.2)');

        const nodes = chart.selectAll('.node')
            .data(boxmodel.descendants())
            .enter().append('g')
                .classed('node', true)
                .attr('transform', d => `translate(${d.x0},${d.y0})`);

        // generate node partition selections
        const nodePartitions = resolveNodes(boxmodel, nodes);
        const [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear] = nodePartitions;

        // define detailled structure/logic

        forms.append('polyline') //.filter(d => !d.data.unmarked).append('polyline')
            .attr('points', d => `0,0 ${d.x1-d.x0},0 ${d.x1-d.x0},${d.y1-d.y0}`);
        reEntries.append('polyline')
            .attr('points', d => {
                const w = d.x1-d.x0;
                const h = d.y1-d.y0;
                const reH = minFormSize.height;
                return `0,0 ${w},0 ${w},${h} 0,${h} 0,${h-reH}`;
            })
            .filter(d => d.data.lastOpen)
                .attr('points', d => {
                    const w = d.x1-d.x0;
                    const h = d.y1-d.y0;
                    const reH = minFormSize.height;
                    return `${w},${h-reH} ${w},${h} 0,${h} 0,${h-reH}`;
                });
        reEntries.filter(d => d.data.reEven !== 'undefined').append('text')
            .classed('label', true)
            .attr('transform', d => `translate(0,${d.y1-d.y0})`)
            .attr('x',d => dataLabelPad )
            .attr('y',d => -5 )
            .text(d => d.data.reEven ? labels.reEven : labels.reOdd);

        const unclTxtSize = d => Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSize"])(d.data.symbol, fontVar.size, fontVar.family, 'normal');
        const unclDiff = d => skewDiff( (unclTxtSize(d).height*0.7 + unclearPad.vt*2) );

        unclear.append('rect')
            .classed('unclearMark',true)
            .attr('transform', d => `skewX(-30) translate(${unclDiff(d)},${0})`)
            .attr('width', d => ((d.x1-d.x0) - unclDiff(d) ))
            .attr('height', d => (d.y1-d.y0) )
        unclear.append('text')
            .attr('x',d => unclDiff(d) + unclearPad.hz )
            .attr('y',d => (d.y1-d.y0) -unclearPad.vt  - ((d.data.symbol.split('_').length > 1) ? 6 : 0) )
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));
          
        consts.append('text')
            .attr('y',d => (d.y1-d.y0) )
            .text(d => d.data.value);
        vars.append('text')
            .attr('y',d => (d.y1-d.y0) )
            .call(Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["textSubscript"])(d => d.data.symbol));


        // apply all style-related attributes to the selections
        design.applyNodeStyles(nodes, nodePartitions, chart);

        Object(_common_d3_helper__WEBPACK_IMPORTED_MODULE_2__["fitChart"])(chart, this.padding);

        // debugging:
        // [this.root, this.layout, this.chart, this.boxmodel, this.design] = 
        //     [root, layout, chart, boxmodel, design];
    }

    static force(data) {

    }

}


// -----------------------------------------------------------
// Helper functions
// -----------------------------------------------------------

function resolveNodes(root, nodes) {
  // resolves descendant nodes into filtered selections
  const leaves = nodes.filter(d => root.leaves().filter(l => l === d).pop() )
      .classed('leaf', true);

  const sets = nodes.filter(d => d.data.type === 'form' || d.data.type === 'reEntry')
      .classed('form', true)
  const forms = sets.filter(d => d.data.type === 'form')
      .classed('form', true);
  const reEntries = sets.filter(d => d.data.type === 'reEntry')
      .classed('reEntry', true);

  const elements = nodes.filter(d => !(d.data.type === 'form' || d.data.type === 'reEntry'))
      .classed('element', true);
  const vars = elements.filter(d => d.data.type === 'var')
      .classed('var', true);
  let consts = elements.filter(d => d.data.type === 'const')
      .classed('const', true);
  consts.unmarked = elements.filter(d => d.data.value == 0).classed('unmarked', true);
  consts.marked = elements.filter(d => d.data.value == 1).classed('marked', true);
  consts.indef = elements.filter(d => d.data.value == 2).classed('indef', true);
  consts.imag = elements.filter(d => d.data.value == 3).classed('imag', true);

  const unclear = elements.filter(d => d.data.type === 'unclear')
      .classed('unclear', true);

  const reChilds = forms.filter(d => d.data.reChild)
      .classed('reChild', true);

  const rePoints = elements.filter(d => d.data.type === 'reEntryPoint')
      .classed('reEntryPoint', true);

  return [leaves, sets, forms, reEntries, reChilds, rePoints, elements, vars, consts, unclear];
}

function resolveLinks(root, links) {
  // resolves links between descendant nodes into filtered selections
  const reChildLink = links.filter(d => d.target.data.reChild)
      .classed('reChildLink', true);

  const rePointLink = links.filter(d => d.target.data.type === 'reEntryPoint')
      .classed('rePointLink', true);

  return [reChildLink, rePointLink];
}

function isText(node) { return node.data.type === 'var' || node.data.type === 'const' || node.data.type === 'unclear'; }

function isContainer(node) { return node.data.type === 'form' || node.data.type === 'reEntry'; }

function reParentLastOpen(node) {
let reParent = node.ancestors().filter(d => d.data.type === 'reEntry').shift();
return reParent.data.lastOpen;
}

function skewDiff(height,degrees=30) { return Math.tan((degrees*(Math.PI/180))) * height; };

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9ib3htb2RlbC1sYXlvdXQtZm9yLWQzL2Rpc3QvYm94bW9kZWwtZDMubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL2NhbnZnL2Rpc3QvYnJvd3Nlci9jYW52Zy5taW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmdiY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvc3RhY2tibHVyLWNhbnZhcy9zcmMvc3RhY2tibHVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vYmlnaW50LWhlbHBlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvbW9kdWxlcy9ncmFwaC1kMy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZ3JhcGgtZDMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vZXh0ZXJuYWwgXCJkM1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixJQUFJO0FBQ3ZFO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFLLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrR0FBK0csd0JBQXdCOztBQUV2STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7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OztBQ0FudTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx5RUFBZTtBQUN2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0Qyx5RUFBZTs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNFQUFZO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIseUNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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SyxNQUFNO0FBQzlELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLEVBQUUsR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssTUFBTTtBQUNyRSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLG1EQUFtRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0VBQVE7QUFDekM7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxZQUFZLEdBQUcsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhOzs7QUFHL0I7QUFDQTs7QUFFQSxRQUFRLGtFQUFROztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QkFBdUIsK0ZBQStGOztBQUV0SCw0QkFBNEIsa0VBQWtFOztBQUU5RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsbURBQW1ELEc7Ozs7Ozs7Ozs7O0FDaGpCekYsZ0QiLCJmaWxlIjoiZm9ybWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJkM1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmb3JtZm9ybVwiXSA9IGZhY3Rvcnkocm9vdFtcImQzXCJdKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbGliL21haW4uanNcIik7XG4iLCJ2YXIgYmlnSW50ID0gKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBCQVNFID0gMWU3LFxyXG4gICAgICAgIExPR19CQVNFID0gNyxcclxuICAgICAgICBNQVhfSU5UID0gOTAwNzE5OTI1NDc0MDk5MixcclxuICAgICAgICBNQVhfSU5UX0FSUiA9IHNtYWxsVG9BcnJheShNQVhfSU5UKSxcclxuICAgICAgICBERUZBVUxUX0FMUEhBQkVUID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgICB2YXIgc3VwcG9ydHNOYXRpdmVCaWdJbnQgPSB0eXBlb2YgQmlnSW50ID09PSBcImZ1bmN0aW9uXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gSW50ZWdlcih2LCByYWRpeCwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXggIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiArcmFkaXggPT09IDEwICYmICFhbHBoYWJldCA/IHBhcnNlVmFsdWUodikgOiBwYXJzZUJhc2UodiwgcmFkaXgsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHNpZ247XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFNtYWxsSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB2YWx1ZSA8IDA7XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBOYXRpdmVCaWdJbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQcmVjaXNlKG4pIHtcclxuICAgICAgICByZXR1cm4gLU1BWF9JTlQgPCBuICYmIG4gPCBNQVhfSU5UO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNtYWxsVG9BcnJheShuKSB7IC8vIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIGRvZXNuJ3QgcmVmZXJlbmNlIEJBU0UsIG5lZWQgdG8gY2hhbmdlIHRoaXMgZnVuY3Rpb24gaWYgQkFTRSBjaGFuZ2VzXHJcbiAgICAgICAgaWYgKG4gPCAxZTcpXHJcbiAgICAgICAgICAgIHJldHVybiBbbl07XHJcbiAgICAgICAgaWYgKG4gPCAxZTE0KVxyXG4gICAgICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNyldO1xyXG4gICAgICAgIHJldHVybiBbbiAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWU3KSAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWUxNCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFycmF5VG9TbWFsbChhcnIpIHsgLy8gSWYgQkFTRSBjaGFuZ2VzIHRoaXMgZnVuY3Rpb24gbWF5IG5lZWQgdG8gY2hhbmdlXHJcbiAgICAgICAgdHJpbShhcnIpO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCA0ICYmIGNvbXBhcmVBYnMoYXJyLCBNQVhfSU5UX0FSUikgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gYXJyWzBdICsgYXJyWzFdICogQkFTRTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBhcnJbMF0gKyAoYXJyWzFdICsgYXJyWzJdICogQkFTRSkgKiBCQVNFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpbSh2KSB7XHJcbiAgICAgICAgdmFyIGkgPSB2Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodlstLWldID09PSAwKTtcclxuICAgICAgICB2Lmxlbmd0aCA9IGkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KGxlbmd0aCkgeyAvLyBmdW5jdGlvbiBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBZYWZmbGUncyBsaWJyYXJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvQmlnSW50ZWdlclxyXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHhbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnVuY2F0ZShuKSB7XHJcbiAgICAgICAgaWYgKG4gPiAwKSByZXR1cm4gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYS5sZW5ndGggPj0gYi5sZW5ndGhcclxuICAgICAgICB2YXIgbF9hID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxfYiA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGxfYSksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbF9iOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGJbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBzdW0gPj0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaSA8IGxfYSkge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID09PSBiYXNlID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcnJ5ID4gMCkgci5wdXNoKGNhcnJ5KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbnkoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCA+PSBiLmxlbmd0aCkgcmV0dXJuIGFkZChhLCBiKTtcclxuICAgICAgICByZXR1cm4gYWRkKGIsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNtYWxsKGEsIGNhcnJ5KSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgY2FycnkgaXMgbnVtYmVyIHdpdGggMCA8PSBjYXJyeSA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgc3VtLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSAtIGJhc2UgKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHN1bSAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChhLCBNYXRoLmFicyhiKSksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRBbnkoYSwgYiksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucGx1cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZShhICsgYikpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgKyBiKTtcclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShNYXRoLmFicyhiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChiLCBNYXRoLmFicyhhKSksIGEgPCAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBsdXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSArIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wbHVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEgPj0gYlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkoYV9sKSxcclxuICAgICAgICAgICAgYm9ycm93ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93IC0gYltpXTtcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IGJfbDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93O1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByW2krK10gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgcltpXSA9IGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RBbnkoYSwgYiwgc2lnbikge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICBpZiAoY29tcGFyZUFicyhhLCBiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYSwgYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChiLCBhKTtcclxuICAgICAgICAgICAgc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IGFycmF5VG9TbWFsbCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdFNtYWxsKGEsIGIsIHNpZ24pIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIDAgPD0gYiA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IC1iLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gYmFzZSk7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgJT0gYmFzZTtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2UgPCAwID8gZGlmZmVyZW5jZSArIGJhc2UgOiBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gYXJyYXlUb1NtYWxsKHIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgciA9IC1yO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihyKTtcclxuICAgICAgICB9IHJldHVybiBuZXcgQmlnSW50ZWdlcihyLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbClcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYSwgTWF0aC5hYnMoYiksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0QW55KGEsIGIsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYSAtIGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChiLCBNYXRoLmFicyhhKSwgYSA+PSAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm1pbnVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC0gcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1pbnVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsICF0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciBzbWFsbCA9IG5ldyBTbWFsbEludGVnZXIoLXRoaXMudmFsdWUpO1xyXG4gICAgICAgIHNtYWxsLnNpZ24gPSAhc2lnbjtcclxuICAgICAgICByZXR1cm4gc21hbGw7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKE1hdGguYWJzKHRoaXMudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlID49IDAgPyB0aGlzLnZhbHVlIDogLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUxvbmcoYSwgYikge1xyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGwgPSBhX2wgKyBiX2wsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGJfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYV9sOyArK2kpIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiX2w7ICsraikge1xyXG4gICAgICAgICAgICAgICAgYl9qID0gYltqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBhX2kgKiBiX2ogKyByW2kgKyBqXTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqICsgMV0gKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsKGEsIGIpIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIHxifCA8IEJBU0VcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgY2FycnkgPSAwLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGFbaV0gKiBiICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgIHJbaV0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0TGVmdCh4LCBuKSB7XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB3aGlsZSAobi0tID4gMCkgci5wdXNoKDApO1xyXG4gICAgICAgIHJldHVybiByLmNvbmNhdCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUthcmF0c3ViYSh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAobiA8PSAzMCkgcmV0dXJuIG11bHRpcGx5TG9uZyh4LCB5KTtcclxuICAgICAgICBuID0gTWF0aC5jZWlsKG4gLyAyKTtcclxuXHJcbiAgICAgICAgdmFyIGIgPSB4LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBhID0geC5zbGljZSgwLCBuKSxcclxuICAgICAgICAgICAgZCA9IHkuc2xpY2UobiksXHJcbiAgICAgICAgICAgIGMgPSB5LnNsaWNlKDAsIG4pO1xyXG5cclxuICAgICAgICB2YXIgYWMgPSBtdWx0aXBseUthcmF0c3ViYShhLCBjKSxcclxuICAgICAgICAgICAgYmQgPSBtdWx0aXBseUthcmF0c3ViYShiLCBkKSxcclxuICAgICAgICAgICAgYWJjZCA9IG11bHRpcGx5S2FyYXRzdWJhKGFkZEFueShhLCBiKSwgYWRkQW55KGMsIGQpKTtcclxuXHJcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBhZGRBbnkoYWRkQW55KGFjLCBzaGlmdExlZnQoc3VidHJhY3Qoc3VidHJhY3QoYWJjZCwgYWMpLCBiZCksIG4pKSwgc2hpZnRMZWZ0KGJkLCAyICogbikpO1xyXG4gICAgICAgIHRyaW0ocHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gYSBzdXJmYWNlIGZpdCBvZiBhIGdyYXBoIHBsb3R0aW5nIHRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlXHJcbiAgICAvLyBiZXR3ZWVuIGxvbmcgbXVsdGlwbGljYXRpb24gYW5kIGthcmF0c3ViYSBtdWx0aXBsaWNhdGlvbiB2ZXJzdXMgdGhlIGxlbmd0aHMgb2YgdGhlIHR3byBhcnJheXMuXHJcbiAgICBmdW5jdGlvbiB1c2VLYXJhdHN1YmEobDEsIGwyKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wLjAxMiAqIGwxIC0gMC4wMTIgKiBsMiArIDAuMDAwMDE1ICogbDEgKiBsMiA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICBzaWduID0gdGhpcy5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIGFicztcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGEsIGFicyksIHNpZ24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZUthcmF0c3ViYShhLmxlbmd0aCwgYi5sZW5ndGgpKSAvLyBLYXJhdHN1YmEgaXMgb25seSBmYXN0ZXIgZm9yIGNlcnRhaW4gYXJyYXkgc2l6ZXNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5S2FyYXRzdWJhKGEsIGIpLCBzaWduKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGEsIGIpLCBzaWduKTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoYSwgYiwgc2lnbikgeyAvLyBhID49IDBcclxuICAgICAgICBpZiAoYSA8IEJBU0UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5U21hbGwoYiwgYSksIHNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGIsIHNtYWxsVG9BcnJheShhKSksIHNpZ24pO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKGEudmFsdWUgKiB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSksIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAtMSkgcmV0dXJuIHRoaXMubmVnYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpcGx5U21hbGxBbmRBcnJheShNYXRoLmFicyhhLnZhbHVlKSwgdGhpcy52YWx1ZSwgdGhpcy5zaWduICE9PSBhLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpLl9tdWx0aXBseUJ5U21hbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50aW1lcyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAqIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50aW1lcyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3F1YXJlKGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUuYXNzZXJ0KDIgKiBCQVNFICogQkFTRSA8IE1BWF9JTlQpO1xyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsICsgbCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBhX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBhX2kgPSBhW2ldO1xyXG4gICAgICAgICAgICBjYXJyeSA9IDAgLSBhX2kgKiBhX2k7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpOyBqIDwgbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhX2ogPSBhW2pdO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IDIgKiAoYV9pICogYV9qKSArIHJbaSArIGpdICsgY2Fycnk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaSArIGxdID0gY2Fycnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzcXVhcmUodGhpcy52YWx1ZSksIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSAqIHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSkpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSkpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kMShhLCBiKSB7IC8vIExlZnQgb3ZlciBmcm9tIHByZXZpb3VzIHZlcnNpb24uIFBlcmZvcm1zIGZhc3RlciB0aGFuIGRpdk1vZDIgb24gc21hbGxlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gY3JlYXRlQXJyYXkoYi5sZW5ndGgpLFxyXG4gICAgICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBiW2JfbCAtIDFdLFxyXG4gICAgICAgICAgICAvLyBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgICAgIGxhbWJkYSA9IE1hdGguY2VpbChiYXNlIC8gKDIgKiBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpKSxcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gbXVsdGlwbHlTbWFsbChhLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBkaXZpc29yID0gbXVsdGlwbHlTbWFsbChiLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBxdW90aWVudERpZ2l0LCBzaGlmdCwgY2FycnksIGJvcnJvdywgaSwgbCwgcTtcclxuICAgICAgICBpZiAocmVtYWluZGVyLmxlbmd0aCA8PSBhX2wpIHJlbWFpbmRlci5wdXNoKDApO1xyXG4gICAgICAgIGRpdmlzb3IucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBkaXZpc29yW2JfbCAtIDFdO1xyXG4gICAgICAgIGZvciAoc2hpZnQgPSBhX2wgLSBiX2w7IHNoaWZ0ID49IDA7IHNoaWZ0LS0pIHtcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IGJhc2UgLSAxO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAhPT0gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0ID0gTWF0aC5mbG9vcigocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAqIGJhc2UgKyByZW1haW5kZXJbc2hpZnQgKyBiX2wgLSAxXSkgLyBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHF1b3RpZW50RGlnaXQgPD0gYmFzZSAtIDFcclxuICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICBsID0gZGl2aXNvci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ICs9IHF1b3RpZW50RGlnaXQgKiBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgcSA9IE1hdGguZmxvb3IoY2FycnkgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIChjYXJyeSAtIHEgKiBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gcTtcclxuICAgICAgICAgICAgICAgIGlmIChib3Jyb3cgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3cgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvdyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGJvcnJvdztcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChib3Jyb3cgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJyeSArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIGJhc2UgKyBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJyeSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeSArIGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9ycm93ICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdFtzaGlmdF0gPSBxdW90aWVudERpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkZW5vcm1hbGl6YXRpb25cclxuICAgICAgICByZW1haW5kZXIgPSBkaXZNb2RTbWFsbChyZW1haW5kZXIsIGxhbWJkYSlbMF07XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHJlbWFpbmRlcildO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDIoYSwgYikgeyAvLyBJbXBsZW1lbnRhdGlvbiBpZGVhIHNoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIFNpbGVudCBNYXR0J3MgbGlicmFyeSBodHRwOi8vc2lsZW50bWF0dC5jb20vYmlnaW50ZWdlci9cclxuICAgICAgICAvLyBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QxIG9uIGxhcmdlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXN1bHQgPSBbXSxcclxuICAgICAgICAgICAgcGFydCA9IFtdLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgZ3Vlc3MsIHhsZW4sIGhpZ2h4LCBoaWdoeSwgY2hlY2s7XHJcbiAgICAgICAgd2hpbGUgKGFfbCkge1xyXG4gICAgICAgICAgICBwYXJ0LnVuc2hpZnQoYVstLWFfbF0pO1xyXG4gICAgICAgICAgICB0cmltKHBhcnQpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyZUFicyhwYXJ0LCBiKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGxlbiA9IHBhcnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBoaWdoeCA9IHBhcnRbeGxlbiAtIDFdICogYmFzZSArIHBhcnRbeGxlbiAtIDJdO1xyXG4gICAgICAgICAgICBoaWdoeSA9IGJbYl9sIC0gMV0gKiBiYXNlICsgYltiX2wgLSAyXTtcclxuICAgICAgICAgICAgaWYgKHhsZW4gPiBiX2wpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2h4ID0gKGhpZ2h4ICsgMSkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGd1ZXNzID0gTWF0aC5jZWlsKGhpZ2h4IC8gaGlnaHkpO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IG11bHRpcGx5U21hbGwoYiwgZ3Vlc3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMoY2hlY2ssIHBhcnQpIDw9IDApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3MtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZ3Vlc3MpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChndWVzcyk7XHJcbiAgICAgICAgICAgIHBhcnQgPSBzdWJ0cmFjdChwYXJ0LCBjaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHBhcnQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2RTbWFsbCh2YWx1ZSwgbGFtYmRhKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCxcclxuICAgICAgICAgICAgcXVvdGllbnQgPSBjcmVhdGVBcnJheShsZW5ndGgpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgcSwgcmVtYWluZGVyLCBkaXZpc29yO1xyXG4gICAgICAgIHJlbWFpbmRlciA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgZGl2aXNvciA9IHJlbWFpbmRlciAqIGJhc2UgKyB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgcSA9IHRydW5jYXRlKGRpdmlzb3IgLyBsYW1iZGEpO1xyXG4gICAgICAgICAgICByZW1haW5kZXIgPSBkaXZpc29yIC0gcSAqIGxhbWJkYTtcclxuICAgICAgICAgICAgcXVvdGllbnRbaV0gPSBxIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgcmVtYWluZGVyIHwgMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kQW55KHNlbGYsIHYpIHtcclxuICAgICAgICB2YXIgdmFsdWUsIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBOYXRpdmVCaWdJbnQoc2VsZi52YWx1ZSAvIG4udmFsdWUpLCBuZXcgTmF0aXZlQmlnSW50KHNlbGYudmFsdWUgJSBuLnZhbHVlKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gc2VsZi52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgdmFyIHF1b3RpZW50O1xyXG4gICAgICAgIGlmIChiID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGl2aWRlIGJ5IHplcm9cIik7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUoYSAvIGIpKSwgbmV3IFNtYWxsSW50ZWdlcihhICUgYildO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiBbc2VsZiwgSW50ZWdlclswXV07XHJcbiAgICAgICAgICAgIGlmIChiID09IC0xKSByZXR1cm4gW3NlbGYubmVnYXRlKCksIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZFNtYWxsKGEsIGFicyk7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudCA9IGFycmF5VG9TbWFsbCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduKSByZW1haW5kZXIgPSAtcmVtYWluZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNpZ24gIT09IG4uc2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHF1b3RpZW50KSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHNlbGYuc2lnbiAhPT0gbi5zaWduKSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFicyhhLCBiKTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHJldHVybiBbSW50ZWdlcltzZWxmLnNpZ24gPT09IG4uc2lnbiA/IDEgOiAtMV0sIEludGVnZXJbMF1dO1xyXG5cclxuICAgICAgICAvLyBkaXZNb2QxIGlzIGZhc3RlciBvbiBzbWFsbGVyIGlucHV0IHNpemVzXHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICsgYi5sZW5ndGggPD0gMjAwKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZDEoYSwgYik7XHJcbiAgICAgICAgZWxzZSB2YWx1ZSA9IGRpdk1vZDIoYSwgYik7XHJcblxyXG4gICAgICAgIHF1b3RpZW50ID0gdmFsdWVbMF07XHJcbiAgICAgICAgdmFyIHFTaWduID0gc2VsZi5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIG1vZCA9IHZhbHVlWzFdLFxyXG4gICAgICAgICAgICBtU2lnbiA9IHNlbGYuc2lnbjtcclxuICAgICAgICBpZiAodHlwZW9mIHF1b3RpZW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChxU2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHF1b3RpZW50ID0gbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHFTaWduKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1vZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAobVNpZ24pIG1vZCA9IC1tb2Q7XHJcbiAgICAgICAgICAgIG1vZCA9IG5ldyBTbWFsbEludGVnZXIobW9kKTtcclxuICAgICAgICB9IGVsc2UgbW9kID0gbmV3IEJpZ0ludGVnZXIobW9kLCBtU2lnbik7XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgbW9kXTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBkaXZNb2RBbnkodGhpcywgdik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcXVvdGllbnQ6IHJlc3VsdFswXSxcclxuICAgICAgICAgICAgcmVtYWluZGVyOiByZXN1bHRbMV1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZGl2bW9kID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2Q7XHJcblxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIGRpdk1vZEFueSh0aGlzLCB2KVswXTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm92ZXIgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAvIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMV07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2QgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnJlbWFpbmRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAlIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsdWUsIHgsIHk7XHJcbiAgICAgICAgaWYgKGIgPT09IDApIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gMSkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IC0xKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW4uaXNTbWFsbCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV4cG9uZW50IFwiICsgbi50b1N0cmluZygpICsgXCIgaXMgdG9vIGxhcmdlLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUgPSBNYXRoLnBvdyhhLCBiKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih0cnVuY2F0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gdGhpcztcclxuICAgICAgICB5ID0gSW50ZWdlclsxXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoYiAmIDEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSBicmVhaztcclxuICAgICAgICAgICAgYiAvPSAyO1xyXG4gICAgICAgICAgICB4ID0geC5zcXVhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3c7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBfMCA9IEJpZ0ludCgwKSwgXzEgPSBCaWdJbnQoMSksIF8yID0gQmlnSW50KDIpO1xyXG4gICAgICAgIGlmIChiID09PSBfMCkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IF8wKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gXzEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSBCaWdJbnQoLTEpKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkpIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KF8wKTtcclxuICAgICAgICB2YXIgeCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHkgPSBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoYiAmIF8xKSA9PT0gXzEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSBfMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gXzI7XHJcbiAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBmdW5jdGlvbiAoZXhwLCBtb2QpIHtcclxuICAgICAgICBleHAgPSBwYXJzZVZhbHVlKGV4cCk7XHJcbiAgICAgICAgbW9kID0gcGFyc2VWYWx1ZShtb2QpO1xyXG4gICAgICAgIGlmIChtb2QuaXNaZXJvKCkpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0YWtlIG1vZFBvdyB3aXRoIG1vZHVsdXMgMFwiKTtcclxuICAgICAgICB2YXIgciA9IEludGVnZXJbMV0sXHJcbiAgICAgICAgICAgIGJhc2UgPSB0aGlzLm1vZChtb2QpO1xyXG4gICAgICAgIGlmIChleHAuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5tdWx0aXBseShJbnRlZ2VyWy0xXSk7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLm1vZEludihtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoZXhwLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChleHAuaXNPZGQoKSkgciA9IHIubXVsdGlwbHkoYmFzZSkubW9kKG1vZCk7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5kaXZpZGUoMik7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLnNxdWFyZSgpLm1vZChtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZFBvdyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBYnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID4gYi5sZW5ndGggPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gYVtpXSA+IGJbaV0gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gTWF0aC5hYnModGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICBhID0gYSA+PSAwID8gYSA6IC1hO1xyXG4gICAgICAgIGIgPSBiID49IDAgPyBiIDogLWI7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgLy8gU2VlIGRpc2N1c3Npb24gYWJvdXQgY29tcGFyaXNvbiB3aXRoIEluZmluaXR5OlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRlcm9sc29uL0JpZ0ludGVnZXIuanMvaXNzdWVzLzYxXHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5zaWduID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ24gPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpICogKHRoaXMuc2lnbiA/IC0xIDogMSk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIDwgMCA/IC0xIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgPCAwID8gMSA6IC0xO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZVRvID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5lcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgIT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdEVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ndCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDwgMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmx0ID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmx0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPj0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdlcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA8PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVbMF0gJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiBCaWdJbnQoMSkpID09PSBCaWdJbnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIEJpZ0ludCgxKSkgPT09IEJpZ0ludCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPCAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnZhbHVlKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hYnMoKS52YWx1ZSA9PT0gQmlnSW50KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEJpZ0ludCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5pc1VuaXQoKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZUFicygyKSA9PT0gMCkgcmV0dXJuIHRoaXMuaXNFdmVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKG4pLmlzWmVybygpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNCYXNpY1ByaW1lKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHYuYWJzKCk7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5lcXVhbHMoMikgfHwgbi5lcXVhbHMoMykgfHwgbi5lcXVhbHMoNSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmlzRXZlbigpIHx8IG4uaXNEaXZpc2libGVCeSgzKSB8fCBuLmlzRGl2aXNpYmxlQnkoNSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5sZXNzZXIoNDkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgcHJpbWU6IGxldCB0aGUgb3RoZXIgZnVuY3Rpb25zIGZpZ3VyZSBpdCBvdXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaWxsZXJSYWJpblRlc3QobiwgYSkge1xyXG4gICAgICAgIHZhciBuUHJldiA9IG4ucHJldigpLFxyXG4gICAgICAgICAgICBiID0gblByZXYsXHJcbiAgICAgICAgICAgIHIgPSAwLFxyXG4gICAgICAgICAgICBkLCB0LCBpLCB4O1xyXG4gICAgICAgIHdoaWxlIChiLmlzRXZlbigpKSBiID0gYi5kaXZpZGUoMiksIHIrKztcclxuICAgICAgICBuZXh0OiBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5sZXNzZXIoYVtpXSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB4ID0gYmlnSW50KGFbaV0pLm1vZFBvdyhiLCBuKTtcclxuICAgICAgICAgICAgaWYgKHguaXNVbml0KCkgfHwgeC5lcXVhbHMoblByZXYpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChkID0gciAtIDE7IGQgIT0gMDsgZC0tKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5zcXVhcmUoKS5tb2Qobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pc1VuaXQoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguZXF1YWxzKG5QcmV2KSkgY29udGludWUgbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBcInN0cmljdFwiIHRvIHRydWUgdG8gZm9yY2UgR1JILXN1cHBvcnRlZCBsb3dlciBib3VuZCBvZiAyKmxvZyhOKV4yXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gZnVuY3Rpb24gKHN0cmljdCkge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKTtcclxuICAgICAgICB2YXIgYml0cyA9IG4uYml0TGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGJpdHMgPD0gNjQpXHJcbiAgICAgICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzN10pO1xyXG4gICAgICAgIHZhciBsb2dOID0gTWF0aC5sb2coMikgKiBiaXRzLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICB2YXIgdCA9IE1hdGguY2VpbCgoc3RyaWN0ID09PSB0cnVlKSA/ICgyICogTWF0aC5wb3cobG9nTiwgMikpIDogbG9nTik7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50KGkgKyAyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgYSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1ByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBmdW5jdGlvbiAoaXRlcmF0aW9ucywgcm5nKSB7XHJcbiAgICAgICAgdmFyIGlzUHJpbWUgPSBpc0Jhc2ljUHJpbWUodGhpcyk7XHJcbiAgICAgICAgaWYgKGlzUHJpbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzUHJpbWU7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLmFicygpO1xyXG4gICAgICAgIHZhciB0ID0gaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkID8gNSA6IGl0ZXJhdGlvbnM7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50LnJhbmRCZXR3ZWVuKDIsIG4ubWludXMoMiksIHJuZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIGEpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgdCA9IGJpZ0ludC56ZXJvLCBuZXdUID0gYmlnSW50Lm9uZSwgciA9IHBhcnNlVmFsdWUobiksIG5ld1IgPSB0aGlzLmFicygpLCBxLCBsYXN0VCwgbGFzdFI7XHJcbiAgICAgICAgd2hpbGUgKCFuZXdSLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIHEgPSByLmRpdmlkZShuZXdSKTtcclxuICAgICAgICAgICAgbGFzdFQgPSB0O1xyXG4gICAgICAgICAgICBsYXN0UiA9IHI7XHJcbiAgICAgICAgICAgIHQgPSBuZXdUO1xyXG4gICAgICAgICAgICByID0gbmV3UjtcclxuICAgICAgICAgICAgbmV3VCA9IGxhc3RULnN1YnRyYWN0KHEubXVsdGlwbHkobmV3VCkpO1xyXG4gICAgICAgICAgICBuZXdSID0gbGFzdFIuc3VidHJhY3QocS5tdWx0aXBseShuZXdSKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghci5pc1VuaXQoKSkgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSArIFwiIGFuZCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGFyZSBub3QgY28tcHJpbWVcIik7XHJcbiAgICAgICAgaWYgKHQuY29tcGFyZSgwKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdCA9IHQuYWRkKG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQubmVnYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZEludiA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSArIDEgPCBNQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSArIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICsgQmlnSW50KDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwodmFsdWUsIDEsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlIC0gMSA+IC1NQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSAtIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLSBCaWdJbnQoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwb3dlcnNPZlR3byA9IFsxXTtcclxuICAgIHdoaWxlICgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0gPD0gQkFTRSkgcG93ZXJzT2ZUd28ucHVzaCgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0pO1xyXG4gICAgdmFyIHBvd2VyczJMZW5ndGggPSBwb3dlcnNPZlR3by5sZW5ndGgsIGhpZ2hlc3RQb3dlcjIgPSBwb3dlcnNPZlR3b1twb3dlcnMyTGVuZ3RoIC0gMV07XHJcblxyXG4gICAgZnVuY3Rpb24gc2hpZnRfaXNTbWFsbChuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG4pIDw9IEJBU0U7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodikudG9KU051bWJlcigpO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRSaWdodCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tdWx0aXBseShoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgbiAtPSBwb3dlcnMyTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5tdWx0aXBseShwb3dlcnNPZlR3b1tuXSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdExlZnQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVtUXVvO1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPCAwKSByZXR1cm4gdGhpcy5zaGlmdExlZnQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIHdoaWxlIChuID49IHBvd2VyczJMZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSB8fCAocmVzdWx0LmlzTmVnYXRpdmUoKSAmJiByZXN1bHQuaXNVbml0KCkpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIHBvd2Vyc09mVHdvW25dKTtcclxuICAgICAgICByZXR1cm4gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodDtcclxuXHJcbiAgICBmdW5jdGlvbiBiaXR3aXNlKHgsIHksIGZuKSB7XHJcbiAgICAgICAgeSA9IHBhcnNlVmFsdWUoeSk7XHJcbiAgICAgICAgdmFyIHhTaWduID0geC5pc05lZ2F0aXZlKCksIHlTaWduID0geS5pc05lZ2F0aXZlKCk7XHJcbiAgICAgICAgdmFyIHhSZW0gPSB4U2lnbiA/IHgubm90KCkgOiB4LFxyXG4gICAgICAgICAgICB5UmVtID0geVNpZ24gPyB5Lm5vdCgpIDogeTtcclxuICAgICAgICB2YXIgeERpZ2l0ID0gMCwgeURpZ2l0ID0gMDtcclxuICAgICAgICB2YXIgeERpdk1vZCA9IG51bGwsIHlEaXZNb2QgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXhSZW0uaXNaZXJvKCkgfHwgIXlSZW0uaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgeERpdk1vZCA9IGRpdk1vZEFueSh4UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeERpZ2l0ID0geERpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh4U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeERpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB4RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeURpdk1vZCA9IGRpdk1vZEFueSh5UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeURpZ2l0ID0geURpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh5U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeURpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB5RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeFJlbSA9IHhEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHlSZW0gPSB5RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChmbih4RGlnaXQsIHlEaWdpdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3VtID0gZm4oeFNpZ24gPyAxIDogMCwgeVNpZ24gPyAxIDogMCkgIT09IDAgPyBiaWdJbnQoLTEpIDogYmlnSW50KDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuICAgICAgICAgICAgc3VtID0gc3VtLm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpLmFkZChiaWdJbnQocmVzdWx0W2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lZ2F0ZSgpLnByZXYoKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgJiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFuZCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYW5kID0gQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSB8IGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUub3IgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3I7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSBeIGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUueG9yID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3I7XHJcblxyXG4gICAgdmFyIExPQk1BU0tfSSA9IDEgPDwgMzAsIExPQk1BU0tfQkkgPSAoQkFTRSAmIC1CQVNFKSAqIChCQVNFICYgLUJBU0UpIHwgTE9CTUFTS19JO1xyXG4gICAgZnVuY3Rpb24gcm91Z2hMT0IobikgeyAvLyBnZXQgbG93ZXN0T25lQml0IChyb3VnaClcclxuICAgICAgICAvLyBTbWFsbEludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDMwKVxyXG4gICAgICAgIC8vIEJpZ0ludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDE0KSBbQkFTRT0xZTddXHJcbiAgICAgICAgdmFyIHYgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICB4ID0gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgPyB2IHwgTE9CTUFTS19JIDpcclxuICAgICAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcImJpZ2ludFwiID8gdiB8IEJpZ0ludChMT0JNQVNLX0kpIDpcclxuICAgICAgICAgICAgICAgICAgICB2WzBdICsgdlsxXSAqIEJBU0UgfCBMT0JNQVNLX0JJO1xyXG4gICAgICAgIHJldHVybiB4ICYgLXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlLmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZS5zcXVhcmUoYmFzZSkpO1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRtcC5wO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRtcC5lO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHAubXVsdGlwbHkoYmFzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCA/IHsgcDogdCwgZTogZSAqIDIgKyAxIH0gOiB7IHA6IHAsIGU6IGUgKiAyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IGJpZ0ludCgxKSwgZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPCAwKSB7XHJcbiAgICAgICAgICAgIG4gPSBuLm5lZ2F0ZSgpLnN1YnRyYWN0KGJpZ0ludCgxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaWdJbnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdJbnQoaW50ZWdlckxvZ2FyaXRobShuLCBiaWdJbnQoMikpLmUpLmFkZChiaWdJbnQoMSkpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5iaXRMZW5ndGggPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXgoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmdyZWF0ZXIoYikgPyBhIDogYjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbihhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgcmV0dXJuIGEubGVzc2VyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnY2QoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIGlmIChhLmVxdWFscyhiKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgaWYgKGEuaXNaZXJvKCkpIHJldHVybiBiO1xyXG4gICAgICAgIGlmIChiLmlzWmVybygpKSByZXR1cm4gYTtcclxuICAgICAgICB2YXIgYyA9IEludGVnZXJbMV0sIGQsIHQ7XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkgJiYgYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBkID0gbWluKHJvdWdoTE9CKGEpLCByb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYiA9IGIuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBjID0gYy5tdWx0aXBseShkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKHJvdWdoTE9CKGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYiA9IGIuZGl2aWRlKHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5ncmVhdGVyKGIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gYjsgYiA9IGE7IGEgPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBiLnN1YnRyYWN0KGEpO1xyXG4gICAgICAgIH0gd2hpbGUgKCFiLmlzWmVybygpKTtcclxuICAgICAgICByZXR1cm4gYy5pc1VuaXQoKSA/IGEgOiBhLm11bHRpcGx5KGMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGNtKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICByZXR1cm4gYS5kaXZpZGUoZ2NkKGEsIGIpKS5tdWx0aXBseShiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJhbmRCZXR3ZWVuKGEsIGIsIHJuZykge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHZhciB1c2VkUk5HID0gcm5nIHx8IE1hdGgucmFuZG9tO1xyXG4gICAgICAgIHZhciBsb3cgPSBtaW4oYSwgYiksIGhpZ2ggPSBtYXgoYSwgYik7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gaGlnaC5zdWJ0cmFjdChsb3cpLmFkZCgxKTtcclxuICAgICAgICBpZiAocmFuZ2UuaXNTbWFsbCkgcmV0dXJuIGxvdy5hZGQoTWF0aC5mbG9vcih1c2VkUk5HKCkgKiByYW5nZSkpO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSB0b0Jhc2UocmFuZ2UsIEJBU0UpLnZhbHVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSwgcmVzdHJpY3RlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRvcCA9IHJlc3RyaWN0ZWQgPyBkaWdpdHNbaV0gOiBCQVNFO1xyXG4gICAgICAgICAgICB2YXIgZGlnaXQgPSB0cnVuY2F0ZSh1c2VkUk5HKCkgKiB0b3ApO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChkaWdpdCk7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdCA8IHRvcCkgcmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG93LmFkZChJbnRlZ2VyLmZyb21BcnJheShyZXN1bHQsIEJBU0UsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhcnNlQmFzZSA9IGZ1bmN0aW9uICh0ZXh0LCBiYXNlLCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQgfHwgREVGQVVMVF9BTFBIQUJFVDtcclxuICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xyXG4gICAgICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgYWJzQmFzZSA9IE1hdGguYWJzKGJhc2UpO1xyXG4gICAgICAgIHZhciBhbHBoYWJldFZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbHBoYWJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbHBoYWJldFZhbHVlc1thbHBoYWJldFtpXV0gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldO1xyXG4gICAgICAgICAgICBpZiAoYyA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYyBpbiBhbHBoYWJldFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhYmV0VmFsdWVzW2NdID49IGFic0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gXCIxXCIgJiYgYWJzQmFzZSA9PT0gMSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbiBiYXNlIFwiICsgYmFzZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlID0gcGFyc2VWYWx1ZShiYXNlKTtcclxuICAgICAgICB2YXIgZGlnaXRzID0gW107XHJcbiAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSB0ZXh0WzBdID09PSBcIi1cIjtcclxuICAgICAgICBmb3IgKGkgPSBpc05lZ2F0aXZlID8gMSA6IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGMgaW4gYWxwaGFiZXRWYWx1ZXMpIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUoYWxwaGFiZXRWYWx1ZXNbY10pKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGk7XHJcbiAgICAgICAgICAgICAgICBkbyB7IGkrKzsgfSB3aGlsZSAodGV4dFtpXSAhPT0gXCI+XCIgJiYgaSA8IHRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUodGV4dC5zbGljZShzdGFydCArIDEsIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYXJhY3RlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IEludGVnZXJbMF0sIHBvdyA9IEludGVnZXJbMV0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gZGlnaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5hZGQoZGlnaXRzW2ldLnRpbWVzKHBvdykpO1xyXG4gICAgICAgICAgICBwb3cgPSBwb3cudGltZXMoYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc05lZ2F0aXZlID8gdmFsLm5lZ2F0ZSgpIDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeShkaWdpdCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0IHx8IERFRkFVTFRfQUxQSEFCRVQ7XHJcbiAgICAgICAgaWYgKGRpZ2l0IDwgYWxwaGFiZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbHBoYWJldFtkaWdpdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxcIiArIGRpZ2l0ICsgXCI+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICBiYXNlID0gYmlnSW50KGJhc2UpO1xyXG4gICAgICAgIGlmIChiYXNlLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY29udmVydCBub256ZXJvIG51bWJlcnMgdG8gYmFzZSAwLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuZXF1YWxzKC0xKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBBcnJheS5hcHBseShudWxsLCBBcnJheSgtbi50b0pTTnVtYmVyKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMSwgMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBBcnJheS5hcHBseShudWxsLCBBcnJheShuLnRvSlNOdW1iZXIoKSAtIDEpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzAsIDFdKTtcclxuICAgICAgICAgICAgYXJyLnVuc2hpZnQoWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXS5jb25jYXQuYXBwbHkoW10sIGFyciksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5lZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSAmJiBiYXNlLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBuZWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBuID0gbi5hYnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuaXNVbml0KCkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG4udG9KU051bWJlcigpKSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlci5wcm90b3R5cGUudmFsdWVPZiwgMSksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBuZWdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gbiwgZGl2bW9kO1xyXG4gICAgICAgIHdoaWxlIChsZWZ0LmlzTmVnYXRpdmUoKSB8fCBsZWZ0LmNvbXBhcmVBYnMoYmFzZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkaXZtb2QgPSBsZWZ0LmRpdm1vZChiYXNlKTtcclxuICAgICAgICAgICAgbGVmdCA9IGRpdm1vZC5xdW90aWVudDtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gZGl2bW9kLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0LmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZGlnaXQgPSBiYXNlLm1pbnVzKGRpZ2l0KS5hYnMoKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0Lm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChkaWdpdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXQucHVzaChsZWZ0LnRvSlNOdW1iZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG91dC5yZXZlcnNlKCksIGlzTmVnYXRpdmU6IG5lZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZVN0cmluZyhuLCBiYXNlLCBhbHBoYWJldCkge1xyXG4gICAgICAgIHZhciBhcnIgPSB0b0Jhc2UobiwgYmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIChhcnIuaXNOZWdhdGl2ZSA/IFwiLVwiIDogXCJcIikgKyBhcnIudmFsdWUubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnkoeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT09IDEwKSByZXR1cm4gdG9CYXNlU3RyaW5nKHRoaXMsIHJhZGl4LCBhbHBoYWJldCk7XHJcbiAgICAgICAgdmFyIHYgPSB0aGlzLnZhbHVlLCBsID0gdi5sZW5ndGgsIHN0ciA9IFN0cmluZyh2Wy0tbF0pLCB6ZXJvcyA9IFwiMDAwMDAwMFwiLCBkaWdpdDtcclxuICAgICAgICB3aGlsZSAoLS1sID49IDApIHtcclxuICAgICAgICAgICAgZGlnaXQgPSBTdHJpbmcodltsXSk7XHJcbiAgICAgICAgICAgIHN0ciArPSB6ZXJvcy5zbGljZShkaWdpdC5sZW5ndGgpICsgZGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBzaWduICsgc3RyO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJhZGl4LCBhbHBoYWJldCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9KU09OID0gQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b0pTTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZ1ZhbHVlKHYpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKCt2KSkge1xyXG4gICAgICAgICAgICB2YXIgeCA9ICt2O1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdHJ1bmNhdGUoeCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNOYXRpdmVCaWdJbnQgPyBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh4KSkgOiBuZXcgU21hbGxJbnRlZ2VyKHgpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdlswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgaWYgKHNpZ24pIHYgPSB2LnNsaWNlKDEpO1xyXG4gICAgICAgIHZhciBzcGxpdCA9IHYuc3BsaXQoL2UvaSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBzcGxpdC5qb2luKFwiZVwiKSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gc3BsaXRbMV07XHJcbiAgICAgICAgICAgIGlmIChleHBbMF0gPT09IFwiK1wiKSBleHAgPSBleHAuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGV4cCA9ICtleHA7XHJcbiAgICAgICAgICAgIGlmIChleHAgIT09IHRydW5jYXRlKGV4cCkgfHwgIWlzUHJlY2lzZShleHApKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgZXhwICsgXCIgaXMgbm90IGEgdmFsaWQgZXhwb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNwbGl0WzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbFBsYWNlID0gdGV4dC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWxQbGFjZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBleHAgLT0gdGV4dC5sZW5ndGggLSBkZWNpbWFsUGxhY2UgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgZGVjaW1hbFBsYWNlKSArIHRleHQuc2xpY2UoZGVjaW1hbFBsYWNlICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV4cCA8IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbmNsdWRlIG5lZ2F0aXZlIGV4cG9uZW50IHBhcnQgZm9yIGludGVnZXJzXCIpO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IChuZXcgQXJyYXkoZXhwICsgMSkpLmpvaW4oXCIwXCIpO1xyXG4gICAgICAgICAgICB2ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvXihbMC05XVswLTldKikkLy50ZXN0KHYpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQoc2lnbiA/IFwiLVwiICsgdiA6IHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBbXSwgbWF4ID0gdi5sZW5ndGgsIGwgPSBMT0dfQkFTRSwgbWluID0gbWF4IC0gbDtcclxuICAgICAgICB3aGlsZSAobWF4ID4gMCkge1xyXG4gICAgICAgICAgICByLnB1c2goK3Yuc2xpY2UobWluLCBtYXgpKTtcclxuICAgICAgICAgICAgbWluIC09IGw7XHJcbiAgICAgICAgICAgIGlmIChtaW4gPCAwKSBtaW4gPSAwO1xyXG4gICAgICAgICAgICBtYXggLT0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VOdW1iZXJWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzTmF0aXZlQmlnSW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodikpIHtcclxuICAgICAgICAgICAgaWYgKHYgIT09IHRydW5jYXRlKHYpKSB0aHJvdyBuZXcgRXJyb3IodiArIFwiIGlzIG5vdCBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlclZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJiaWdpbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbiAgICAvLyBQcmUtZGVmaW5lIG51bWJlcnMgaW4gcmFuZ2UgWy05OTksOTk5XVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICBJbnRlZ2VyW2ldID0gcGFyc2VWYWx1ZShpKTtcclxuICAgICAgICBpZiAoaSA+IDApIEludGVnZXJbLWldID0gcGFyc2VWYWx1ZSgtaSk7XHJcbiAgICB9XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgSW50ZWdlci5vbmUgPSBJbnRlZ2VyWzFdO1xyXG4gICAgSW50ZWdlci56ZXJvID0gSW50ZWdlclswXTtcclxuICAgIEludGVnZXIubWludXNPbmUgPSBJbnRlZ2VyWy0xXTtcclxuICAgIEludGVnZXIubWF4ID0gbWF4O1xyXG4gICAgSW50ZWdlci5taW4gPSBtaW47XHJcbiAgICBJbnRlZ2VyLmdjZCA9IGdjZDtcclxuICAgIEludGVnZXIubGNtID0gbGNtO1xyXG4gICAgSW50ZWdlci5pc0luc3RhbmNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiBCaWdJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBTbWFsbEludGVnZXIgfHwgeCBpbnN0YW5jZW9mIE5hdGl2ZUJpZ0ludDsgfTtcclxuICAgIEludGVnZXIucmFuZEJldHdlZW4gPSByYW5kQmV0d2VlbjtcclxuXHJcbiAgICBJbnRlZ2VyLmZyb21BcnJheSA9IGZ1bmN0aW9uIChkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cy5tYXAocGFyc2VWYWx1ZSksIHBhcnNlVmFsdWUoYmFzZSB8fCAxMCksIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gSW50ZWdlcjtcclxufSkoKTtcclxuXHJcbi8vIE5vZGUuanMgY2hlY2tcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmhhc093blByb3BlcnR5KFwiZXhwb3J0c1wiKSkge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBiaWdJbnQ7XHJcbn1cclxuXHJcbi8vYW1kIGNoZWNrXHJcbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludDtcclxuICAgIH0pO1xyXG59XHJcbiIsIiFmdW5jdGlvbih0LG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZShcImQzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImQzXCJdLG4pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHNbXCJib3htb2RlbC1kM1wiXT1uKHJlcXVpcmUoXCJkM1wiKSk6dFtcImJveG1vZGVsLWQzXCJdPW4odC5kMyl9KHdpbmRvdyxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIG49e307ZnVuY3Rpb24gZShyKXtpZihuW3JdKXJldHVybiBuW3JdLmV4cG9ydHM7dmFyIG89bltyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIHRbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsZSksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gZS5tPXQsZS5jPW4sZS5kPWZ1bmN0aW9uKHQsbixyKXtlLm8odCxuKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsbix7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxlLnI9ZnVuY3Rpb24odCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sZS50PWZ1bmN0aW9uKHQsbil7aWYoMSZuJiYodD1lKHQpKSw4Jm4pcmV0dXJuIHQ7aWYoNCZuJiZcIm9iamVjdFwiPT10eXBlb2YgdCYmdCYmdC5fX2VzTW9kdWxlKXJldHVybiB0O3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoZS5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOnR9KSwyJm4mJlwic3RyaW5nXCIhPXR5cGVvZiB0KWZvcih2YXIgbyBpbiB0KWUuZChyLG8sZnVuY3Rpb24obil7cmV0dXJuIHRbbl19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LGUubj1mdW5jdGlvbih0KXt2YXIgbj10JiZ0Ll9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gdC5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiB0fTtyZXR1cm4gZS5kKG4sXCJhXCIsbiksbn0sZS5vPWZ1bmN0aW9uKHQsbil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LG4pfSxlLnA9XCJcIixlKGUucz0xKX0oW2Z1bmN0aW9uKG4sZSl7bi5leHBvcnRzPXR9LGZ1bmN0aW9uKHQsbixlKXtcInVzZSBzdHJpY3RcIjtlLnIobiksZS5kKG4sXCJkZWZhdWx0XCIsZnVuY3Rpb24oKXtyZXR1cm4gb30pO3ZhciByPWUoMCk7ZnVuY3Rpb24gbygpe3ZhciB0LG4sZSxvLGksdSxmLGEsYyxsPVtdO2Z1bmN0aW9uIGgodCl7cmV0dXJuIHQuZWFjaEFmdGVyKGQpLHQuZWFjaEJlZm9yZShwKSx0LmVhY2hCZWZvcmUoeSksdH1mdW5jdGlvbiBkKG8pe3ZhciBoPWMobykud2lkdGgsZD1jKG8pLmhlaWdodDtpZih0KG8pKXtpZihoPWQ9MCxvLmNoaWxkcmVuKXtmb3IodmFyIHA9ZnVuY3Rpb24odCl7dmFyIHI9W10sbz0wLGk9ITEsZj0wLGM9ITA7cmV0dXJuIHQuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihsLGgpe24obCkmJiFpJiYoaT0hMCksbys9bC54MS1sLngwLG8rPWM/ZShsKT91KGwpLmxlZnQ6MDpNYXRoLm1heCh1KGwpLmxlZnQsdSh0LmNoaWxkcmVuW2gtMV0pLnJpZ2h0KTt2YXIgZD1lKGwpP3UobCkucmlnaHQ6MDsobytkPmEodCl8fGg9PT10LmNoaWxkcmVuLmxlbmd0aC0xKSYmKG8rPWQpLG8+YSh0KXx8aD09PXQuY2hpbGRyZW4ubGVuZ3RoLTE/KHIucHVzaCh7ZnJvbTpmLHRvOmgsd2lkdGg6byxmbGV4SGVpZ2h0Oml9KSxoPHQuY2hpbGRyZW4ubGVuZ3RoLTEmJihmPWgrMSxvPTAsaT0hMSxjPSEwKSk6Yz0hMX0pLHJ9KG8pLHk9MDt5PHAubGVuZ3RoO3krKylwW3ldLmhlaWdodD1nKG8scCx5KTtsLnB1c2goe2JveDpvLGxpbmVzOnB9KSxoKz1yLm1heChwLGZ1bmN0aW9uKHQpe3JldHVybiB0LndpZHRofSksZCs9ci5zdW0ocCxmdW5jdGlvbih0KXtyZXR1cm4gdC5oZWlnaHR9KX1oKz1pKG8pLmxlZnQraShvKS5yaWdodCxkKz1pKG8pLnRvcCtpKG8pLmJvdHRvbSxoPU1hdGgubWF4KGgsZihvKS53aWR0aCksZD1NYXRoLm1heChkLGYobykuaGVpZ2h0KX1vLngwPW8ueTA9MCxvLngxPWgsby55MT1kfWZ1bmN0aW9uIHAocil7dmFyIG89ci55MTtpZihyLnBhcmVudCYmbihyKSl7bz1tKHIpLmhlaWdodDt2YXIgaT14KHIucGFyZW50KSxmPXMocixpKTtvLT1lKHIpfHwwIT09Zj91KHIpLnRvcDowO3ZhciBhPShvLT1lKHIpfHxmIT09aS5sZW5ndGgtMT91KHIpLmJvdHRvbTowKS1yLnkxO2lmKHQocikmJnIuY2hpbGRyZW4mJmE+MCl7dmFyIGM9eChyKSxsPWEvYy5sZW5ndGgsaD0hMCxkPSExLHA9dm9pZCAwO3RyeXtmb3IodmFyIHksZz1jW1N5bWJvbC5pdGVyYXRvcl0oKTshKGg9KHk9Zy5uZXh0KCkpLmRvbmUpO2g9ITApe3kudmFsdWUuaGVpZ2h0Kz1sfX1jYXRjaCh0KXtkPSEwLHA9dH1maW5hbGx5e3RyeXtofHxudWxsPT1nLnJldHVybnx8Zy5yZXR1cm4oKX1maW5hbGx5e2lmKGQpdGhyb3cgcH19fX1yLnkxPW99ZnVuY3Rpb24geSh0KXt2YXIgbj10LngxLXQueDAscj10LnkxLXQueTA7aWYodC5wYXJlbnQpe3QueTA9dC5wYXJlbnQueTAraSh0LnBhcmVudCkudG9wO3ZhciBmPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCk7aWYoMD09PWZ8fGZ1bmN0aW9uKHQpe2lmKHQucGFyZW50KXt2YXIgbj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpLGU9eCh0LnBhcmVudCkscj1lW3ModCxlKV07cmV0dXJuIHIuZnJvbT09PW59cmV0dXJuIG51bGx9KHQpKXQueDArPXQucGFyZW50LngwK2kodC5wYXJlbnQpLmxlZnQsZSh0KSYmKHQueDArPXUodCkubGVmdCk7ZWxzZXt2YXIgYT10LnBhcmVudC5jaGlsZHJlbltmLTFdO3QueDA9YS54MSx0LngwKz1NYXRoLm1heCh1KGEpLnJpZ2h0LHUodCkubGVmdCl9fWVsc2Ugc3dpdGNoKG8pe2Nhc2VcInRvcFwiOnQueTA9MDticmVhaztjYXNlXCJtaWRkbGVcIjp0LnkwPXIvMjticmVhaztjYXNlXCJib3R0b21cIjp0LnkwPXJ9c3dpdGNoKG8pe2Nhc2VcInRvcFwiOmlmKHQucGFyZW50KXt2YXIgYz1zKHQpO3QueTArPWUodCl8fDAhPT1jP3UodCkudG9wOjAsdC55MCs9dih0KX1icmVhaztjYXNlXCJtaWRkbGVcIjp0LnBhcmVudCYmKHQueTArPXYodCkrbSh0KS5oZWlnaHQvMiksdC55MC09ci8yO2JyZWFrO2Nhc2VcImJvdHRvbVwiOmlmKHQucGFyZW50KXt2YXIgbD14KHQucGFyZW50KSxoPXModCxsKTt0LnkwLT1lKHQpfHxoIT09bC5sZW5ndGgtMT91KHQpLmJvdHRvbTowLHQueTArPXYodCwhMCl9dC55MC09cn10LngxPXQueDArbix0LnkxPXQueTArcn1mdW5jdGlvbiBnKHQsbixyKXtmb3IodmFyIG89bltyXSxpPTAsYT1vLmZyb207YTw9by50bzthKyspe3ZhciBjPXQuY2hpbGRyZW5bYV0sbD1jLnkxLWMueTAsaD0oZShjKXx8MCE9PXI/dShjKS50b3A6MCkrKGUoYyl8fHIhPT1uLmxlbmd0aC0xP3UoYykuYm90dG9tOjApO2wraD5pJiYoaT1sK2gpfXJldHVybiBNYXRoLm1heChpLGYodCkuaGVpZ2h0KX1mdW5jdGlvbiB4KHQpe3JldHVybiBsW2wuZmluZEluZGV4KGZ1bmN0aW9uKG4pe3JldHVybiBuLmJveD09PXR9KV0ubGluZXN9ZnVuY3Rpb24gcyh0LG4pe2lmKHQucGFyZW50KXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjE/bjp4KHQucGFyZW50KSxyPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCk7cmV0dXJuIGUuZmluZEluZGV4KGZ1bmN0aW9uKHQpe3JldHVybiByPj10LmZyb20mJnI8PXQudG99KX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBtKHQpe3ZhciBuPXgodC5wYXJlbnQpO3JldHVybiBuW3ModCxuKV19ZnVuY3Rpb24gdih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSYmYXJndW1lbnRzWzFdO2lmKHQucGFyZW50KXt2YXIgZT14KHQucGFyZW50KSxvPXModCxlKSxpPW4/bzpvLTE7cmV0dXJuIHIuc3VtKGUuZmlsdGVyKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG48PWl9KSxmdW5jdGlvbih0KXtyZXR1cm4gdC5oZWlnaHR9KX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBiKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1yZXR1cm4gaC52QWxpZ249ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KG89dCxoKTpvfSxoLmVkZ2VNYXJnaW5zPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhlPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTplfSxoLmlzQ29udGFpbmVyPWZ1bmN0aW9uKG4pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bjpiKCtuKSxoKTp0fSxoLnNwYW5IZWlnaHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KG49XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOm59LGgucGFkZGluZz1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oaT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6aX0saC5tYXJnaW49ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHU9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOnV9LGgubm9kZVNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGM9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmN9LGgubWluQ29udGFpbmVyU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oZj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6Zn0saC5tYXhMaW5lV2lkdGg9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGE9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmF9LGh9fV0pLmRlZmF1bHR9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJveG1vZGVsLWQzLm1pbi5qcy5tYXAiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJyZ2Jjb2xvclwiKSxyZXF1aXJlKFwic3RhY2tibHVyLWNhbnZhc1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZ2Jjb2xvclwiLFwic3RhY2tibHVyLWNhbnZhc1wiXSxlKTp0LmNhbnZnPWUodC5SR0JDb2xvcix0LlN0YWNrQmx1cil9KHRoaXMsZnVuY3Rpb24obSxkKXtcInVzZSBzdHJpY3RcIjt2YXIgdDtyZXR1cm4gbT1tJiZtLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9tLmRlZmF1bHQ6bSxkPWQmJmQuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP2QuZGVmYXVsdDpkLGZ1bmN0aW9uKHQpe3ZhciB1O3QuZXhwb3J0czsodT13aW5kb3cpLkRPTVBhcnNlcj13aW5kb3cuRE9NUGFyc2VyO2Z1bmN0aW9uIHAoKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKX12YXIgZixjPWZ1bmN0aW9uKHQsZSxpKXtpZihudWxsIT10fHxudWxsIT1lfHxudWxsIT1pKXt2YXIgbj1mdW5jdGlvbihzKXt2YXIgQT17b3B0czpzLEZSQU1FUkFURTozMCxNQVhfVklSVFVBTF9QSVhFTFM6M2U0LHJvb3RFbVNpemU6MTIsZW1TaXplOjEyLGxvZzpmdW5jdGlvbih0KXt9fTsxPT1BLm9wdHMubG9nJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgY29uc29sZSYmKEEubG9nPWZ1bmN0aW9uKHQpe2NvbnNvbGUubG9nKHQpfSk7QS5pbml0PWZ1bmN0aW9uKHQpe3ZhciBlPTA7QS5VbmlxdWVJZD1mdW5jdGlvbigpe3JldHVyblwiY2FudmdcIisgKytlfSxBLkRlZmluaXRpb25zPXt9LEEuU3R5bGVzPXt9LEEuU3R5bGVzU3BlY2lmaWNpdHk9e30sQS5BbmltYXRpb25zPVtdLEEuSW1hZ2VzPVtdLEEuY3R4PXQsQS5WaWV3UG9ydD1uZXcgZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXSx0aGlzLkNsZWFyPWZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHM9W119LHRoaXMuU2V0Q3VycmVudD1mdW5jdGlvbih0LGUpe3RoaXMudmlld1BvcnRzLnB1c2goe3dpZHRoOnQsaGVpZ2h0OmV9KX0sdGhpcy5SZW1vdmVDdXJyZW50PWZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHMucG9wKCl9LHRoaXMuQ3VycmVudD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZpZXdQb3J0c1t0aGlzLnZpZXdQb3J0cy5sZW5ndGgtMV19LHRoaXMud2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkud2lkdGh9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ3VycmVudCgpLmhlaWdodH0sdGhpcy5Db21wdXRlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmXCJudW1iZXJcIj09dHlwZW9mIHQ/dDpcInhcIj09dD90aGlzLndpZHRoKCk6XCJ5XCI9PXQ/dGhpcy5oZWlnaHQoKTpNYXRoLnNxcnQoTWF0aC5wb3codGhpcy53aWR0aCgpLDIpK01hdGgucG93KHRoaXMuaGVpZ2h0KCksMikpL01hdGguc3FydCgyKX19fSxBLmluaXQoKSxBLkltYWdlc0xvYWRlZD1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8QS5JbWFnZXMubGVuZ3RoO3QrKylpZighQS5JbWFnZXNbdF0ubG9hZGVkKXJldHVybiExO3JldHVybiEwfSxBLnRyaW09ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX0sQS5jb21wcmVzc1NwYWNlcz1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC8oPyFcXHUzMDAwKVxccysvZ20sXCIgXCIpfSxBLmFqYXg9ZnVuY3Rpb24odCl7dmFyIGU7cmV0dXJuKGU9dS5YTUxIdHRwUmVxdWVzdD9uZXcgdS5YTUxIdHRwUmVxdWVzdDpuZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxIVFRQXCIpKT8oZS5vcGVuKFwiR0VUXCIsdCwhMSksZS5zZW5kKG51bGwpLGUucmVzcG9uc2VUZXh0KTpudWxsfSxBLnBhcnNlWG1sPWZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBXaW5kb3dzJiZ2b2lkIDAhPT1XaW5kb3dzLkRhdGEmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YS5YbWwpe3ZhciB0PW5ldyBXaW5kb3dzLkRhdGEuWG1sLkRvbS5YbWxEb2N1bWVudCxpPW5ldyBXaW5kb3dzLkRhdGEuWG1sLkRvbS5YbWxMb2FkU2V0dGluZ3M7cmV0dXJuIGkucHJvaGliaXREdGQ9ITEsdC5sb2FkWG1sKGUsaSksdH1pZighdS5ET01QYXJzZXIpe2U9ZS5yZXBsYWNlKC88IURPQ1RZUEUgc3ZnW14+XSo+LyxcIlwiKTt2YXIgdD1uZXcgQWN0aXZlWE9iamVjdChcIk1pY3Jvc29mdC5YTUxET01cIik7cmV0dXJuIHQuYXN5bmM9XCJmYWxzZVwiLHQubG9hZFhNTChlKSx0fXRyeXt2YXIgbj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcjtyZXR1cm4gbi5wYXJzZUZyb21TdHJpbmcoZSxcImltYWdlL3N2Zyt4bWxcIil9Y2F0Y2godCl7cmV0dXJuKG49cy54bWxkb20/bmV3IHUuRE9NUGFyc2VyKHMueG1sZG9tKTpuZXcgdS5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9fSxBLlByb3BlcnR5PWZ1bmN0aW9uKHQsZSl7dGhpcy5uYW1lPXQsdGhpcy52YWx1ZT1lfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5oYXNWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT10aGlzLnZhbHVlJiZcIlwiIT09dGhpcy52YWx1ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWU9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXBhcnNlRmxvYXQodGhpcy52YWx1ZSk7cmV0dXJuKHRoaXMudmFsdWUrXCJcIikubWF0Y2goLyUkLykmJih0Lz0xMDApLHR9LEEuUHJvcGVydHkucHJvdG90eXBlLnZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy52YWx1ZTp0fSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RoaXMubnVtVmFsdWUoKTp0fSxBLlByb3BlcnR5LnByb3RvdHlwZS5hZGRPcGFjaXR5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWU7aWYobnVsbCE9dC52YWx1ZSYmXCJcIiE9dC52YWx1ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMudmFsdWUpe3ZhciBpPW5ldyBtKHRoaXMudmFsdWUpO2kub2smJihlPVwicmdiYShcIitpLnIrXCIsIFwiK2kuZytcIiwgXCIraS5iK1wiLCBcIit0Lm51bVZhbHVlKCkrXCIpXCIpfXJldHVybiBuZXcgQS5Qcm9wZXJ0eSh0aGlzLm5hbWUsZSl9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERlZmluaXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlLm1hdGNoKC8jKFteXFwpJ1wiXSspLyk7cmV0dXJuIHQmJih0PXRbMV0pLHR8fCh0PXRoaXMudmFsdWUpLEEuRGVmaW5pdGlvbnNbdF19LEEuUHJvcGVydHkucHJvdG90eXBlLmlzVXJsRGVmaW5pdGlvbj1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLnZhbHVlLmluZGV4T2YoXCJ1cmwoXCIpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9aSYmaS5jcmVhdGVHcmFkaWVudClyZXR1cm4gaS5jcmVhdGVHcmFkaWVudChBLmN0eCx0LGUpO2lmKG51bGwhPWkmJmkuY3JlYXRlUGF0dGVybil7aWYoaS5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSl7dmFyIG49aS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpO2k9aS5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLG4uaGFzVmFsdWUoKSYmKGkuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiLCEwKS52YWx1ZT1uLnZhbHVlKX1yZXR1cm4gaS5jcmVhdGVQYXR0ZXJuKEEuY3R4LHQpfXJldHVybiBudWxsfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXREUEk9ZnVuY3Rpb24odCl7cmV0dXJuIDk2fSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRSRU09ZnVuY3Rpb24odCl7cmV0dXJuIEEucm9vdEVtU2l6ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RU09ZnVuY3Rpb24odCl7cmV0dXJuIEEuZW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRVbml0cz1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5yZXBsYWNlKC9bMC05XFwuXFwtXS9nLFwiXCIpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5pc1BpeGVscz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuITE7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiEhdC5tYXRjaCgvcHgkLyl8fCEhdC5tYXRjaCgvXlswLTldKyQvKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9QaXhlbHM9ZnVuY3Rpb24odCxlKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciBpPXRoaXMudmFsdWUrXCJcIjtpZihpLm1hdGNoKC9yZW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldFJFTSh0KTtpZihpLm1hdGNoKC9lbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCk7aWYoaS5tYXRjaCgvZXgkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldEVNKHQpLzI7aWYoaS5tYXRjaCgvcHgkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKTtpZihpLm1hdGNoKC9wdCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpKigxLzcyKTtpZihpLm1hdGNoKC9wYyQvKSlyZXR1cm4gMTUqdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL2NtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMi41NDtpZihpLm1hdGNoKC9tbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpLzI1LjQ7aWYoaS5tYXRjaCgvaW4kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KTtpZihpLm1hdGNoKC8lJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTt2YXIgbj10aGlzLm51bVZhbHVlKCk7cmV0dXJuIGUmJm48MT9uKkEuVmlld1BvcnQuQ29tcHV0ZVNpemUodCk6bn0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9NaWxsaXNlY29uZHM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5tYXRjaCgvcyQvKT8xZTMqdGhpcy5udW1WYWx1ZSgpOih0Lm1hdGNoKC9tcyQvKSx0aGlzLm51bVZhbHVlKCkpfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1JhZGlhbnM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4gdC5tYXRjaCgvZGVnJC8pP3RoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApOnQubWF0Y2goL2dyYWQkLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzIwMCk6dC5tYXRjaCgvcmFkJC8pP3RoaXMubnVtVmFsdWUoKTp0aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMTgwKX07dmFyIHQ9e2Jhc2VsaW5lOlwiYWxwaGFiZXRpY1wiLFwiYmVmb3JlLWVkZ2VcIjpcInRvcFwiLFwidGV4dC1iZWZvcmUtZWRnZVwiOlwidG9wXCIsbWlkZGxlOlwibWlkZGxlXCIsY2VudHJhbDpcIm1pZGRsZVwiLFwiYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsXCJ0ZXh0LWFmdGVyLWVkZ2VcIjpcImJvdHRvbVwiLGlkZW9ncmFwaGljOlwiaWRlb2dyYXBoaWNcIixhbHBoYWJldGljOlwiYWxwaGFiZXRpY1wiLGhhbmdpbmc6XCJoYW5naW5nXCIsbWF0aGVtYXRpY2FsOlwiYWxwaGFiZXRpY1wifTtyZXR1cm4gQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9UZXh0QmFzZWxpbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RbdGhpcy52YWx1ZV06bnVsbH0sQS5Gb250PW5ldyBmdW5jdGlvbigpe3RoaXMuU3R5bGVzPVwibm9ybWFsfGl0YWxpY3xvYmxpcXVlfGluaGVyaXRcIix0aGlzLlZhcmlhbnRzPVwibm9ybWFsfHNtYWxsLWNhcHN8aW5oZXJpdFwiLHRoaXMuV2VpZ2h0cz1cIm5vcm1hbHxib2xkfGJvbGRlcnxsaWdodGVyfDEwMHwyMDB8MzAwfDQwMHw1MDB8NjAwfDcwMHw4MDB8OTAwfGluaGVyaXRcIix0aGlzLkNyZWF0ZUZvbnQ9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPW51bGwhPWE/dGhpcy5QYXJzZShhKTp0aGlzLkNyZWF0ZUZvbnQoXCJcIixcIlwiLFwiXCIsXCJcIixcIlwiLEEuY3R4LmZvbnQpO3JldHVybntmb250RmFtaWx5OnM9c3x8ci5mb250RmFtaWx5LGZvbnRTaXplOm58fHIuZm9udFNpemUsZm9udFN0eWxlOnR8fHIuZm9udFN0eWxlLGZvbnRXZWlnaHQ6aXx8ci5mb250V2VpZ2h0LGZvbnRWYXJpYW50OmV8fHIuZm9udFZhcmlhbnQsdG9TdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm5bdGhpcy5mb250U3R5bGUsdGhpcy5mb250VmFyaWFudCx0aGlzLmZvbnRXZWlnaHQsdGhpcy5mb250U2l6ZSx0aGlzLmZvbnRGYW1pbHldLmpvaW4oXCIgXCIpfX19O3ZhciByPXRoaXM7dGhpcy5QYXJzZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9e30saT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0fHxcIlwiKSkuc3BsaXQoXCIgXCIpLG49e2ZvbnRTaXplOiExLGZvbnRTdHlsZTohMSxmb250V2VpZ2h0OiExLGZvbnRWYXJpYW50OiExfSxzPVwiXCIsYT0wO2E8aS5sZW5ndGg7YSsrKW4uZm9udFN0eWxlfHwtMT09ci5TdHlsZXMuaW5kZXhPZihpW2FdKT9uLmZvbnRWYXJpYW50fHwtMT09ci5WYXJpYW50cy5pbmRleE9mKGlbYV0pP24uZm9udFdlaWdodHx8LTE9PXIuV2VpZ2h0cy5pbmRleE9mKGlbYV0pP24uZm9udFNpemU/XCJpbmhlcml0XCIhPWlbYV0mJihzKz1pW2FdKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTaXplPWlbYV0uc3BsaXQoXCIvXCIpWzBdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD1uLmZvbnRTaXplPSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRXZWlnaHQ9aVthXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD1uLmZvbnRXZWlnaHQ9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFZhcmlhbnQ9aVthXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250U3R5bGU9aVthXSksbi5mb250U3R5bGU9ITApO3JldHVyblwiXCIhPXMmJihlLmZvbnRGYW1pbHk9cyksZX19LEEuVG9OdW1iZXJBcnJheT1mdW5jdGlvbih0KXtmb3IodmFyIGU9QS50cmltKEEuY29tcHJlc3NTcGFjZXMoKHR8fFwiXCIpLnJlcGxhY2UoLywvZyxcIiBcIikpKS5zcGxpdChcIiBcIiksaT0wO2k8ZS5sZW5ndGg7aSsrKWVbaV09cGFyc2VGbG9hdChlW2ldKTtyZXR1cm4gZX0sQS5Qb2ludD1mdW5jdGlvbih0LGUpe3RoaXMueD10LHRoaXMueT1lfSxBLlBvaW50LnByb3RvdHlwZS5hbmdsZVRvPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmF0YW4yKHQueS10aGlzLnksdC54LXRoaXMueCl9LEEuUG9pbnQucHJvdG90eXBlLmFwcGx5VHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMueCp0WzBdK3RoaXMueSp0WzJdK3RbNF0saT10aGlzLngqdFsxXSt0aGlzLnkqdFszXSt0WzVdO3RoaXMueD1lLHRoaXMueT1pfSxBLkNyZWF0ZVBvaW50PWZ1bmN0aW9uKHQpe3ZhciBlPUEuVG9OdW1iZXJBcnJheSh0KTtyZXR1cm4gbmV3IEEuUG9pbnQoZVswXSxlWzFdKX0sQS5DcmVhdGVQYXRoPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCksaT1bXSxuPTA7bjxlLmxlbmd0aDtuKz0yKWkucHVzaChuZXcgQS5Qb2ludChlW25dLGVbbisxXSkpO3JldHVybiBpfSxBLkJvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSxpLG4pe3RoaXMueDE9TnVtYmVyLk5hTix0aGlzLnkxPU51bWJlci5OYU4sdGhpcy54Mj1OdW1iZXIuTmFOLHRoaXMueTI9TnVtYmVyLk5hTix0aGlzLng9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54MX0sdGhpcy55PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTF9LHRoaXMud2lkdGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy54Mi10aGlzLngxfSx0aGlzLmhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnkyLXRoaXMueTF9LHRoaXMuYWRkUG9pbnQ9ZnVuY3Rpb24odCxlKXtudWxsIT10JiYoKGlzTmFOKHRoaXMueDEpfHxpc05hTih0aGlzLngyKSkmJih0aGlzLngxPXQsdGhpcy54Mj10KSx0PHRoaXMueDEmJih0aGlzLngxPXQpLHQ+dGhpcy54MiYmKHRoaXMueDI9dCkpLG51bGwhPWUmJigoaXNOYU4odGhpcy55MSl8fGlzTmFOKHRoaXMueTIpKSYmKHRoaXMueTE9ZSx0aGlzLnkyPWUpLGU8dGhpcy55MSYmKHRoaXMueTE9ZSksZT50aGlzLnkyJiYodGhpcy55Mj1lKSl9LHRoaXMuYWRkWD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQsbnVsbCl9LHRoaXMuYWRkWT1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KG51bGwsdCl9LHRoaXMuYWRkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludCh0LngxLHQueTEpLHRoaXMuYWRkUG9pbnQodC54Mix0LnkyKX0sdGhpcy5hZGRRdWFkcmF0aWNDdXJ2ZT1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9dCsyLzMqKGktdCksbz1lKzIvMyoobi1lKSxsPXIrMS8zKihzLXQpLGg9bysxLzMqKGEtZSk7dGhpcy5hZGRCZXppZXJDdXJ2ZSh0LGUscixsLG8saCxzLGEpfSx0aGlzLmFkZEJlemllckN1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIsbyl7dmFyIGw9W3QsZV0saD1baSxuXSx1PVtzLGFdLGM9W3Isb107dGhpcy5hZGRQb2ludChsWzBdLGxbMV0pLHRoaXMuYWRkUG9pbnQoY1swXSxjWzFdKTtmb3IodmFyIGY9MDtmPD0xO2YrKyl7dmFyIG09ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgucG93KDEtdCwzKSpsW2ZdKzMqTWF0aC5wb3coMS10LDIpKnQqaFtmXSszKigxLXQpKk1hdGgucG93KHQsMikqdVtmXStNYXRoLnBvdyh0LDMpKmNbZl19LHA9NipsW2ZdLTEyKmhbZl0rNip1W2ZdLGQ9LTMqbFtmXSs5KmhbZl0tOSp1W2ZdKzMqY1tmXSx5PTMqaFtmXS0zKmxbZl07aWYoMCE9ZCl7dmFyIHY9TWF0aC5wb3cocCwyKS00KnkqZDtpZighKHY8MCkpe3ZhciBnPSgtcCtNYXRoLnNxcnQodikpLygyKmQpOzA8ZyYmZzwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oZykpLDE9PWYmJnRoaXMuYWRkWShtKGcpKSk7dmFyIHg9KC1wLU1hdGguc3FydCh2KSkvKDIqZCk7MDx4JiZ4PDEmJigwPT1mJiZ0aGlzLmFkZFgobSh4KSksMT09ZiYmdGhpcy5hZGRZKG0oeCkpKX19ZWxzZXtpZigwPT1wKWNvbnRpbnVlO3ZhciBiPS15L3A7MDxiJiZiPDEmJigwPT1mJiZ0aGlzLmFkZFgobShiKSksMT09ZiYmdGhpcy5hZGRZKG0oYikpKX19fSx0aGlzLmlzUG9pbnRJbkJveD1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLngxPD10JiZ0PD10aGlzLngyJiZ0aGlzLnkxPD1lJiZlPD10aGlzLnkyfSx0aGlzLmFkZFBvaW50KHQsZSksdGhpcy5hZGRQb2ludChpLG4pfSxBLlRyYW5zZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzO3RoaXMuVHlwZT17fSx0aGlzLlR5cGUudHJhbnNsYXRlPWZ1bmN0aW9uKHQpe3RoaXMucD1BLkNyZWF0ZVBvaW50KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5wLnh8fDAsdGhpcy5wLnl8fDApfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUoLTEqdGhpcy5wLnh8fDAsLTEqdGhpcy5wLnl8fDApfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLHRoaXMucC54fHwwLHRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUucm90YXRlPWZ1bmN0aW9uKHQpe3ZhciBlPUEuVG9OdW1iZXJBcnJheSh0KTt0aGlzLmFuZ2xlPW5ldyBBLlByb3BlcnR5KFwiYW5nbGVcIixlWzBdKSx0aGlzLmN4PWVbMV18fDAsdGhpcy5jeT1lWzJdfHwwLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5jeCx0aGlzLmN5KSx0LnJvdGF0ZSh0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSx0LnRyYW5zbGF0ZSgtdGhpcy5jeCwtdGhpcy5jeSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKC0xKnRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hbmdsZS50b1JhZGlhbnMoKTt0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLHRoaXMucC54fHwwLHRoaXMucC55fHwwXSksdC5hcHBseVRyYW5zZm9ybShbTWF0aC5jb3MoZSksTWF0aC5zaW4oZSksLU1hdGguc2luKGUpLE1hdGguY29zKGUpLDAsMF0pLHQuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsLXRoaXMucC54fHwwLC10aGlzLnAueXx8MF0pfX0sdGhpcy5UeXBlLnNjYWxlPWZ1bmN0aW9uKHQpe3RoaXMucD1BLkNyZWF0ZVBvaW50KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC5zY2FsZSh0aGlzLnAueHx8MSx0aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC5zY2FsZSgxL3RoaXMucC54fHwxLDEvdGhpcy5wLnl8fHRoaXMucC54fHwxKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybShbdGhpcy5wLnh8fDAsMCwwLHRoaXMucC55fHwwLDAsMF0pfX0sdGhpcy5UeXBlLm1hdHJpeD1mdW5jdGlvbih0KXt0aGlzLm09QS5Ub051bWJlckFycmF5KHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2Zvcm0odGhpcy5tWzBdLHRoaXMubVsxXSx0aGlzLm1bMl0sdGhpcy5tWzNdLHRoaXMubVs0XSx0aGlzLm1bNV0pfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5tWzBdLGk9dGhpcy5tWzJdLG49dGhpcy5tWzRdLHM9dGhpcy5tWzFdLGE9dGhpcy5tWzNdLHI9dGhpcy5tWzVdLG89MS8oZSooMSphLTAqciktaSooMSpzLTAqcikrbiooMCpzLTAqYSkpO3QudHJhbnNmb3JtKG8qKDEqYS0wKnIpLG8qKDAqci0xKnMpLG8qKDAqbi0xKmkpLG8qKDEqZS0wKm4pLG8qKGkqci1uKmEpLG8qKG4qcy1lKnIpKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybSh0aGlzLm0pfX0sdGhpcy5UeXBlLlNrZXdCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUubWF0cml4LHRoaXMuYmFzZSh0KSx0aGlzLmFuZ2xlPW5ldyBBLlByb3BlcnR5KFwiYW5nbGVcIix0KX0sdGhpcy5UeXBlLlNrZXdCYXNlLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLm1hdHJpeCx0aGlzLlR5cGUuc2tld1g9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLDAsTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksMSwwLDBdfSx0aGlzLlR5cGUuc2tld1gucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy5UeXBlLnNrZXdZPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUuU2tld0Jhc2UsdGhpcy5iYXNlKHQpLHRoaXMubT1bMSxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwwLDEsMCwwXX0sdGhpcy5UeXBlLnNrZXdZLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLlNrZXdCYXNlLHRoaXMudHJhbnNmb3Jtcz1bXSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy50cmFuc2Zvcm1zLmxlbmd0aDtlKyspdGhpcy50cmFuc2Zvcm1zW2VdLmFwcGx5KHQpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudHJhbnNmb3Jtcy5sZW5ndGgtMTswPD1lO2UtLSl0aGlzLnRyYW5zZm9ybXNbZV0udW5hcHBseSh0KX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHlUb1BvaW50KHQpfTtmb3IodmFyIGk9QS50cmltKEEuY29tcHJlc3NTcGFjZXModCkpLnJlcGxhY2UoL1xcKShbYS16QS1aXSkvZyxcIikgJDFcIikucmVwbGFjZSgvXFwpKFxccz8sXFxzPykvZyxcIikgXCIpLnNwbGl0KC9cXHMoPz1bYS16XSkvKSxuPTA7bjxpLmxlbmd0aDtuKyspaWYoXCJub25lXCIhPT1pW25dKXt2YXIgcz1BLnRyaW0oaVtuXS5zcGxpdChcIihcIilbMF0pLGE9aVtuXS5zcGxpdChcIihcIilbMV0ucmVwbGFjZShcIilcIixcIlwiKSxyPXRoaXMuVHlwZVtzXTtpZih2b2lkIDAhPT1yKXt2YXIgbz1uZXcgcihhKTtvLnR5cGU9cyx0aGlzLnRyYW5zZm9ybXMucHVzaChvKX19fSxBLkFzcGVjdFJhdGlvPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIsbyxsLGgpe3ZhciB1PShlPShlPUEuY29tcHJlc3NTcGFjZXMoZSkpLnJlcGxhY2UoL15kZWZlclxccy8sXCJcIikpLnNwbGl0KFwiIFwiKVswXXx8XCJ4TWlkWU1pZFwiLGM9ZS5zcGxpdChcIiBcIilbMV18fFwibWVldFwiLGY9aS9uLG09cy9hLHA9TWF0aC5taW4oZixtKSxkPU1hdGgubWF4KGYsbSk7XCJtZWV0XCI9PWMmJihuKj1wLGEqPXApLFwic2xpY2VcIj09YyYmKG4qPWQsYSo9ZCksbD1uZXcgQS5Qcm9wZXJ0eShcInJlZlhcIixsKSxoPW5ldyBBLlByb3BlcnR5KFwicmVmWVwiLGgpLGwuaGFzVmFsdWUoKSYmaC5oYXNWYWx1ZSgpP3QudHJhbnNsYXRlKC1wKmwudG9QaXhlbHMoXCJ4XCIpLC1wKmgudG9QaXhlbHMoXCJ5XCIpKToodS5tYXRjaCgvXnhNaWQvKSYmKFwibWVldFwiPT1jJiZwPT1tfHxcInNsaWNlXCI9PWMmJmQ9PW0pJiZ0LnRyYW5zbGF0ZShpLzItbi8yLDApLHUubWF0Y2goL1lNaWQkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLzItYS8yKSx1Lm1hdGNoKC9eeE1heC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGktbiwwKSx1Lm1hdGNoKC9ZTWF4JC8pJiYoXCJtZWV0XCI9PWMmJnA9PWZ8fFwic2xpY2VcIj09YyYmZD09ZikmJnQudHJhbnNsYXRlKDAscy1hKSksXCJub25lXCI9PXU/dC5zY2FsZShmLG0pOlwibWVldFwiPT1jP3Quc2NhbGUocCxwKTpcInNsaWNlXCI9PWMmJnQuc2NhbGUoZCxkKSx0LnRyYW5zbGF0ZShudWxsPT1yPzA6LXIsbnVsbD09bz8wOi1vKX0sQS5FbGVtZW50PXt9LEEuRW1wdHlQcm9wZXJ0eT1uZXcgQS5Qcm9wZXJ0eShcIkVNUFRZXCIsXCJcIiksQS5FbGVtZW50LkVsZW1lbnRCYXNlPWZ1bmN0aW9uKGEpe3RoaXMuYXR0cmlidXRlcz17fSx0aGlzLnN0eWxlcz17fSx0aGlzLnN0eWxlc1NwZWNpZmljaXR5PXt9LHRoaXMuY2hpbGRyZW49W10sdGhpcy5hdHRyaWJ1dGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNbdF07cmV0dXJuIG51bGwhPWk/aTooMT09ZSYmKGk9bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLmF0dHJpYnV0ZXNbdF09aSksaXx8QS5FbXB0eVByb3BlcnR5KX0sdGhpcy5nZXRIcmVmQXR0cmlidXRlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMuYXR0cmlidXRlcylpZihcImhyZWZcIj09dHx8dC5tYXRjaCgvOmhyZWYkLykpcmV0dXJuIHRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gQS5FbXB0eVByb3BlcnR5fSx0aGlzLnN0eWxlPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzLnN0eWxlc1t0XTtpZihudWxsIT1uKXJldHVybiBuO3ZhciBzPXRoaXMuYXR0cmlidXRlKHQpO2lmKG51bGwhPXMmJnMuaGFzVmFsdWUoKSlyZXR1cm4gdGhpcy5zdHlsZXNbdF09cztpZigxIT1pKXt2YXIgYT10aGlzLnBhcmVudDtpZihudWxsIT1hKXt2YXIgcj1hLnN0eWxlKHQpO2lmKG51bGwhPXImJnIuaGFzVmFsdWUoKSlyZXR1cm4gcn19cmV0dXJuIDE9PWUmJihuPW5ldyBBLlByb3BlcnR5KHQsXCJcIiksdGhpcy5zdHlsZXNbdF09biksbnx8QS5FbXB0eVByb3BlcnR5fSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXtpZihcIm5vbmVcIiE9dGhpcy5zdHlsZShcImRpc3BsYXlcIikudmFsdWUmJlwiaGlkZGVuXCIhPXRoaXMuc3R5bGUoXCJ2aXNpYmlsaXR5XCIpLnZhbHVlKXtpZih0LnNhdmUoKSx0aGlzLnN0eWxlKFwibWFza1wiKS5oYXNWYWx1ZSgpKXt2YXIgZT10aGlzLnN0eWxlKFwibWFza1wiKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9ZSYmZS5hcHBseSh0LHRoaXMpfWVsc2UgaWYodGhpcy5zdHlsZShcImZpbHRlclwiKS5oYXNWYWx1ZSgpKXt2YXIgaT10aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1pJiZpLmFwcGx5KHQsdGhpcyl9ZWxzZSB0aGlzLnNldENvbnRleHQodCksdGhpcy5yZW5kZXJDaGlsZHJlbih0KSx0aGlzLmNsZWFyQ29udGV4dCh0KTt0LnJlc3RvcmUoKX19LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt9LHRoaXMuY2xlYXJDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl0aGlzLmNoaWxkcmVuW2VdLnJlbmRlcih0KX0sdGhpcy5hZGRDaGlsZD1mdW5jdGlvbih0LGUpe3ZhciBpPXQ7ZSYmKGk9QS5DcmVhdGVFbGVtZW50KHQpKSxpLnBhcmVudD10aGlzLFwidGl0bGVcIiE9aS50eXBlJiZ0aGlzLmNoaWxkcmVuLnB1c2goaSl9LHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbj1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiBBLlN0eWxlcylpZihcIkBcIiE9dFswXSYmZihhLHQpKXt2YXIgZT1BLlN0eWxlc1t0XSxpPUEuU3R5bGVzU3BlY2lmaWNpdHlbdF07aWYobnVsbCE9ZSlmb3IodmFyIG4gaW4gZSl7dmFyIHM9dGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXTt2b2lkIDA9PT1zJiYocz1cIjAwMFwiKSxzPGkmJih0aGlzLnN0eWxlc1tuXT1lW25dLHRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbl09aSl9fX07dmFyIHQsZT1uZXcgUmVnRXhwKFwiXltBLVotXSskXCIpO2lmKG51bGwhPWEmJjE9PWEubm9kZVR5cGUpe2Zvcih2YXIgaT0wO2k8YS5hdHRyaWJ1dGVzLmxlbmd0aDtpKyspe3ZhciBuPWEuYXR0cmlidXRlc1tpXSxzPSh0PW4ubm9kZU5hbWUsZS50ZXN0KHQpP3QudG9Mb3dlckNhc2UoKTp0KTt0aGlzLmF0dHJpYnV0ZXNbc109bmV3IEEuUHJvcGVydHkocyxuLnZhbHVlKX1pZih0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKSx0aGlzLmF0dHJpYnV0ZShcInN0eWxlXCIpLmhhc1ZhbHVlKCkpe3ZhciByPXRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikudmFsdWUuc3BsaXQoXCI7XCIpO2ZvcihpPTA7aTxyLmxlbmd0aDtpKyspaWYoXCJcIiE9QS50cmltKHJbaV0pKXt2YXIgbz1yW2ldLnNwbGl0KFwiOlwiKSxsPUEudHJpbShvWzBdKSxoPUEudHJpbShvWzFdKTt0aGlzLnN0eWxlc1tsXT1uZXcgQS5Qcm9wZXJ0eShsLGgpfX1mb3IodGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS5oYXNWYWx1ZSgpJiZudWxsPT1BLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdJiYoQS5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZShcImlkXCIpLnZhbHVlXT10aGlzKSxpPTA7aTxhLmNoaWxkTm9kZXMubGVuZ3RoO2krKyl7dmFyIHU9YS5jaGlsZE5vZGVzW2ldO2lmKDE9PXUubm9kZVR5cGUmJnRoaXMuYWRkQ2hpbGQodSwhMCksdGhpcy5jYXB0dXJlVGV4dE5vZGVzJiYoMz09dS5ub2RlVHlwZXx8ND09dS5ub2RlVHlwZSkpe3ZhciBjPXUudmFsdWV8fHUudGV4dHx8dS50ZXh0Q29udGVudHx8XCJcIjtcIlwiIT1BLmNvbXByZXNzU3BhY2VzKGMpJiZ0aGlzLmFkZENoaWxkKG5ldyBBLkVsZW1lbnQudHNwYW4odSksITEpfX19fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGN1bGF0ZU9wYWNpdHk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MSxlPXRoaXM7bnVsbCE9ZTspe3ZhciBpPWUuc3R5bGUoXCJvcGFjaXR5XCIsITEsITApO2kuaGFzVmFsdWUoKSYmKHQqPWkubnVtVmFsdWUoKSksZT1lLnBhcmVudH1yZXR1cm4gdH0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQsZSl7aWYoIWUpe3ZhciBpO2lmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmlzVXJsRGVmaW5pdGlvbigpKW51bGwhPShpPXRoaXMuc3R5bGUoXCJmaWxsXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSkmJih0LmZpbGxTdHlsZT1pKTtlbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmhhc1ZhbHVlKCkpe3ZhciBuO1wiY3VycmVudENvbG9yXCI9PShuPXRoaXMuc3R5bGUoXCJmaWxsXCIpKS52YWx1ZSYmKG4udmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9bi52YWx1ZSYmKHQuZmlsbFN0eWxlPVwibm9uZVwiPT1uLnZhbHVlP1wicmdiYSgwLDAsMCwwKVwiOm4udmFsdWUpfWlmKHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKG49KG49bmV3IEEuUHJvcGVydHkoXCJmaWxsXCIsdC5maWxsU3R5bGUpKS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpLHQuZmlsbFN0eWxlPW4udmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2VcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcInN0cm9rZVwiKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsdGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpKSkmJih0LnN0cm9rZVN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcInN0cm9rZVwiKS5oYXNWYWx1ZSgpKXt2YXIgcztcImN1cnJlbnRDb2xvclwiPT0ocz10aGlzLnN0eWxlKFwic3Ryb2tlXCIpKS52YWx1ZSYmKHMudmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9cy52YWx1ZSYmKHQuc3Ryb2tlU3R5bGU9XCJub25lXCI9PXMudmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6cy52YWx1ZSl9aWYodGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihzPShzPW5ldyBBLlByb3BlcnR5KFwic3Ryb2tlXCIsdC5zdHJva2VTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpKSx0LnN0cm9rZVN0eWxlPXMudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2Utd2lkdGhcIikuaGFzVmFsdWUoKSl7dmFyIGE9dGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS50b1BpeGVscygpO3QubGluZVdpZHRoPTA9PWE/LjAwMTphfWlmKHRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS5oYXNWYWx1ZSgpJiYodC5saW5lQ2FwPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1saW5lam9pblwiKS5oYXNWYWx1ZSgpJiYodC5saW5lSm9pbj10aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikuaGFzVmFsdWUoKSYmKHQubWl0ZXJMaW1pdD10aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS5oYXNWYWx1ZSgpJiYodC5wYWludE9yZGVyPXRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikuaGFzVmFsdWUoKSYmXCJub25lXCIhPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLnZhbHVlKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpO3ZvaWQgMCE9PXQuc2V0TGluZURhc2g/dC5zZXRMaW5lRGFzaChyKTp2b2lkIDAhPT10LndlYmtpdExpbmVEYXNoP3Qud2Via2l0TGluZURhc2g9cjp2b2lkIDA9PT10Lm1vekRhc2h8fDE9PXIubGVuZ3RoJiYwPT1yWzBdfHwodC5tb3pEYXNoPXIpO3ZhciBvPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaG9mZnNldFwiKS50b1BpeGVscygpO3ZvaWQgMCE9PXQubGluZURhc2hPZmZzZXQ/dC5saW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2hPZmZzZXQ/dC53ZWJraXRMaW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQubW96RGFzaE9mZnNldCYmKHQubW96RGFzaE9mZnNldD1vKX19aWYodm9pZCAwIT09dC5mb250KXt0LmZvbnQ9QS5Gb250LkNyZWF0ZUZvbnQodGhpcy5zdHlsZShcImZvbnQtc3R5bGVcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtdmFyaWFudFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC13ZWlnaHRcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS5oYXNWYWx1ZSgpP3RoaXMuc3R5bGUoXCJmb250LXNpemVcIikudG9QaXhlbHMoKStcInB4XCI6XCJcIix0aGlzLnN0eWxlKFwiZm9udC1mYW1pbHlcIikudmFsdWUpLnRvU3RyaW5nKCk7dmFyIGw9dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiLCExLCExKTtsLmlzUGl4ZWxzKCkmJihBLmVtU2l6ZT1sLnRvUGl4ZWxzKCkpfWlmKHRoaXMuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSYmbmV3IEEuVHJhbnNmb3JtKHRoaXMuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpLmFwcGx5KHQpLHRoaXMuc3R5bGUoXCJjbGlwLXBhdGhcIiwhMSwhMCkuaGFzVmFsdWUoKSl7dmFyIGg9dGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9aCYmaC5hcHBseSh0KX10Lmdsb2JhbEFscGhhPXRoaXMuY2FsY3VsYXRlT3BhY2l0eSgpfX0sQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbCE9dCYmdC5iZWdpblBhdGgoKSxuZXcgQS5Cb3VuZGluZ0JveH0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt0aGlzLnBhdGgodCksQS5Nb3VzZS5jaGVja1BhdGgodGhpcyx0KSxcIlwiIT10LmZpbGxTdHlsZSYmKFwiaW5oZXJpdFwiIT10aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlT3JEZWZhdWx0KFwiaW5oZXJpdFwiKT90LmZpbGwodGhpcy5zdHlsZShcImZpbGwtcnVsZVwiKS52YWx1ZSk6dC5maWxsKCkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlKCk7dmFyIGU9dGhpcy5nZXRNYXJrZXJzKCk7aWYobnVsbCE9ZSl7aWYodGhpcy5zdHlsZShcIm1hcmtlci1zdGFydFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1zdGFydFwiKS5nZXREZWZpbml0aW9uKCkpLnJlbmRlcih0LGVbMF1bMF0sZVswXVsxXSksdGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuaXNVcmxEZWZpbml0aW9uKCkpZm9yKHZhciBpPXRoaXMuc3R5bGUoXCJtYXJrZXItbWlkXCIpLmdldERlZmluaXRpb24oKSxuPTE7bjxlLmxlbmd0aC0xO24rKylpLnJlbmRlcih0LGVbbl1bMF0sZVtuXVsxXSk7dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuaXNVcmxEZWZpbml0aW9uKCkmJihpPXRoaXMuc3R5bGUoXCJtYXJrZXItZW5kXCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVtlLmxlbmd0aC0xXVswXSxlW2UubGVuZ3RoLTFdWzFdKX19LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXRoKCl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3JldHVybiBudWxsfX0sQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zdmc9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VDbGVhckNvbnRleHQ9dGhpcy5jbGVhckNvbnRleHQsdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlQ2xlYXJDb250ZXh0KHQpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpfSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7aWYodC5zdHJva2VTdHlsZT1cInJnYmEoMCwwLDAsMClcIix0LmxpbmVDYXA9XCJidXR0XCIsdC5saW5lSm9pbj1cIm1pdGVyXCIsdC5taXRlckxpbWl0PTQsdC5jYW52YXMuc3R5bGUmJnZvaWQgMCE9PXQuZm9udCYmdm9pZCAwIT09dS5nZXRDb21wdXRlZFN0eWxlKXt0LmZvbnQ9dS5nZXRDb21wdXRlZFN0eWxlKHQuY2FudmFzKS5nZXRQcm9wZXJ0eVZhbHVlKFwiZm9udFwiKTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKHQuZm9udCkuZm9udFNpemUpO2UuaGFzVmFsdWUoKSYmKEEucm9vdEVtU2l6ZT1BLmVtU2l6ZT1lLnRvUGl4ZWxzKFwieVwiKSl9dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT0wKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieVwiLCEwKS52YWx1ZT0wKSx0LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBpPUEuVmlld1BvcnQud2lkdGgoKSxuPUEuVmlld1BvcnQuaGVpZ2h0KCk7aWYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiLCEwKS52YWx1ZT1cIjEwMCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIsITApLnZhbHVlPVwiMTAwJVwiKSx2b2lkIDA9PT10aGlzLnJvb3Qpe2k9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7dmFyIHM9MCxhPTA7dGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS5oYXNWYWx1ZSgpJiYocz0tdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnRvUGl4ZWxzKFwieFwiKSxhPS10aGlzLmF0dHJpYnV0ZShcInJlZllcIikudG9QaXhlbHMoXCJ5XCIpKSxcInZpc2libGVcIiE9dGhpcy5hdHRyaWJ1dGUoXCJvdmVyZmxvd1wiKS52YWx1ZU9yRGVmYXVsdChcImhpZGRlblwiKSYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8ocyxhKSx0LmxpbmVUbyhpLGEpLHQubGluZVRvKGksbiksdC5saW5lVG8ocyxuKSx0LmNsb3NlUGF0aCgpLHQuY2xpcCgpKX1pZihBLlZpZXdQb3J0LlNldEN1cnJlbnQoaSxuKSx0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikuaGFzVmFsdWUoKSl7dmFyIHI9QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbz1yWzBdLGw9clsxXTtpPXJbMl0sbj1yWzNdLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsQS5WaWV3UG9ydC53aWR0aCgpLGksQS5WaWV3UG9ydC5oZWlnaHQoKSxuLG8sbCx0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudmFsdWUsdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnZhbHVlKSxBLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQoclsyXSxyWzNdKX19fSxBLkVsZW1lbnQuc3ZnLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnJlY3Q9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS50b1BpeGVscyhcInhcIikscj10aGlzLmF0dHJpYnV0ZShcInJ5XCIpLnRvUGl4ZWxzKFwieVwiKTtpZih0aGlzLmF0dHJpYnV0ZShcInJ4XCIpLmhhc1ZhbHVlKCkmJiF0aGlzLmF0dHJpYnV0ZShcInJ5XCIpLmhhc1ZhbHVlKCkmJihyPWEpLHRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmKGE9ciksYT1NYXRoLm1pbihhLG4vMikscj1NYXRoLm1pbihyLHMvMiksbnVsbCE9dCl7dmFyIG89KE1hdGguc3FydCgyKS0xKS8zKjQ7dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlK2EsaSksdC5saW5lVG8oZStuLWEsaSksdC5iZXppZXJDdXJ2ZVRvKGUrbi1hK28qYSxpLGUrbixpK3ItbypyLGUrbixpK3IpLHQubGluZVRvKGUrbixpK3MtciksdC5iZXppZXJDdXJ2ZVRvKGUrbixpK3MtcitvKnIsZStuLWErbyphLGkrcyxlK24tYSxpK3MpLHQubGluZVRvKGUrYSxpK3MpLHQuYmV6aWVyQ3VydmVUbyhlK2EtbyphLGkrcyxlLGkrcy1yK28qcixlLGkrcy1yKSx0LmxpbmVUbyhlLGkrciksdC5iZXppZXJDdXJ2ZVRvKGUsaStyLW8qcixlK2EtbyphLGksZSthLGkpLHQuY2xvc2VQYXRoKCl9cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KGUsaSxlK24saStzKX19LEEuRWxlbWVudC5yZWN0LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQuY2lyY2xlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0LmFyYyhlLGksbiwwLDIqTWF0aC5QSSwhMSksdC5jbG9zZVBhdGgoKSksbmV3IEEuQm91bmRpbmdCb3goZS1uLGktbixlK24saStuKX19LEEuRWxlbWVudC5jaXJjbGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5lbGxpcHNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9KE1hdGguc3FydCgyKS0xKS8zKjQsaT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8ocytpLGEpLHQuYmV6aWVyQ3VydmVUbyhzK2ksYStlKm4scytlKmksYStuLHMsYStuKSx0LmJlemllckN1cnZlVG8ocy1lKmksYStuLHMtaSxhK2UqbixzLWksYSksdC5iZXppZXJDdXJ2ZVRvKHMtaSxhLWUqbixzLWUqaSxhLW4scyxhLW4pLHQuYmV6aWVyQ3VydmVUbyhzK2UqaSxhLW4scytpLGEtZSpuLHMraSxhKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChzLWksYS1uLHMraSxhK24pfX0sQS5FbGVtZW50LmVsbGlwc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5saW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldFBvaW50cz1mdW5jdGlvbigpe3JldHVybltuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLnRvUGl4ZWxzKFwieVwiKSksbmV3IEEuUG9pbnQodGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS50b1BpeGVscyhcInlcIikpXX0sdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0UG9pbnRzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGVbMF0ueCxlWzBdLnkpLHQubGluZVRvKGVbMV0ueCxlWzFdLnkpKSxuZXcgQS5Cb3VuZGluZ0JveChlWzBdLngsZVswXS55LGVbMV0ueCxlWzFdLnkpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50cygpLGU9dFswXS5hbmdsZVRvKHRbMV0pO3JldHVybltbdFswXSxlXSxbdFsxXSxlXV19fSxBLkVsZW1lbnQubGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlsaW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBvaW50cz1BLkNyZWF0ZVBhdGgodGhpcy5hdHRyaWJ1dGUoXCJwb2ludHNcIikudmFsdWUpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT1uZXcgQS5Cb3VuZGluZ0JveCh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpO251bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSkpO2Zvcih2YXIgaT0xO2k8dGhpcy5wb2ludHMubGVuZ3RoO2krKyllLmFkZFBvaW50KHRoaXMucG9pbnRzW2ldLngsdGhpcy5wb2ludHNbaV0ueSksbnVsbCE9dCYmdC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KTtyZXR1cm4gZX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPHRoaXMucG9pbnRzLmxlbmd0aC0xO2UrKyl0LnB1c2goW3RoaXMucG9pbnRzW2VdLHRoaXMucG9pbnRzW2VdLmFuZ2xlVG8odGhpcy5wb2ludHNbZSsxXSldKTtyZXR1cm4gMDx0Lmxlbmd0aCYmdC5wdXNoKFt0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0sdFt0Lmxlbmd0aC0xXVsxXV0pLHR9fSxBLkVsZW1lbnQucG9seWxpbmUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wb2x5Z29uPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucG9seWxpbmUsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVBhdGg9dGhpcy5wYXRoLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmJhc2VQYXRoKHQpO3JldHVybiBudWxsIT10JiYodC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSx0LmNsb3NlUGF0aCgpKSxlfX0sQS5FbGVtZW50LnBvbHlnb24ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucG9seWxpbmUsQS5FbGVtZW50LnBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiZFwiKS52YWx1ZTtlPWUucmVwbGFjZSgvLC9nbSxcIiBcIik7Zm9yKHZhciBpPTA7aTwyO2krKyllPWUucmVwbGFjZSgvKFtNbVp6TGxIaFZ2Q2NTc1FxVHRBYV0pKFteXFxzXSkvZ20sXCIkMSAkMlwiKTtmb3IoZT0oZT1lLnJlcGxhY2UoLyhbXlxcc10pKFtNbVp6TGxIaFZ2Q2NTc1FxVHRBYV0pL2dtLFwiJDEgJDJcIikpLnJlcGxhY2UoLyhbMC05XSkoWytcXC1dKS9nbSxcIiQxICQyXCIpLGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oXFwuWzAtOV0qKShcXC4pL2dtLFwiJDEgJDJcIik7ZT1lLnJlcGxhY2UoLyhbQWFdKFxccytbMC05XSspezN9KVxccysoWzAxXSlcXHMqKFswMV0pL2dtLFwiJDEgJDMgJDQgXCIpLGU9QS5jb21wcmVzc1NwYWNlcyhlKSxlPUEudHJpbShlKSx0aGlzLlBhdGhQYXJzZXI9bmV3IGZ1bmN0aW9uKHQpe3RoaXMudG9rZW5zPXQuc3BsaXQoXCIgXCIpLHRoaXMucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmk9LTEsdGhpcy5jb21tYW5kPVwiXCIsdGhpcy5wcmV2aW91c0NvbW1hbmQ9XCJcIix0aGlzLnN0YXJ0PW5ldyBBLlBvaW50KDAsMCksdGhpcy5jb250cm9sPW5ldyBBLlBvaW50KDAsMCksdGhpcy5jdXJyZW50PW5ldyBBLlBvaW50KDAsMCksdGhpcy5wb2ludHM9W10sdGhpcy5hbmdsZXM9W119LHRoaXMuaXNFbmQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pPj10aGlzLnRva2Vucy5sZW5ndGgtMX0sdGhpcy5pc0NvbW1hbmRPckVuZD1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5pc0VuZCgpfHxudWxsIT10aGlzLnRva2Vuc1t0aGlzLmkrMV0ubWF0Y2goL15bQS1aYS16XSQvKX0sdGhpcy5pc1JlbGF0aXZlQ29tbWFuZD1mdW5jdGlvbigpe3N3aXRjaCh0aGlzLmNvbW1hbmQpe2Nhc2VcIm1cIjpjYXNlXCJsXCI6Y2FzZVwiaFwiOmNhc2VcInZcIjpjYXNlXCJjXCI6Y2FzZVwic1wiOmNhc2VcInFcIjpjYXNlXCJ0XCI6Y2FzZVwiYVwiOmNhc2VcInpcIjpyZXR1cm4hMH1yZXR1cm4hMX0sdGhpcy5nZXRUb2tlbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmkrKyx0aGlzLnRva2Vuc1t0aGlzLmldfSx0aGlzLmdldFNjYWxhcj1mdW5jdGlvbigpe3JldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0VG9rZW4oKSl9LHRoaXMubmV4dENvbW1hbmQ9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzQ29tbWFuZD10aGlzLmNvbW1hbmQsdGhpcy5jb21tYW5kPXRoaXMuZ2V0VG9rZW4oKX0sdGhpcy5nZXRQb2ludD1mdW5jdGlvbigpe3ZhciB0PW5ldyBBLlBvaW50KHRoaXMuZ2V0U2NhbGFyKCksdGhpcy5nZXRTY2FsYXIoKSk7cmV0dXJuIHRoaXMubWFrZUFic29sdXRlKHQpfSx0aGlzLmdldEFzQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmNvbnRyb2w9dH0sdGhpcy5nZXRBc0N1cnJlbnRQb2ludD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnQoKTtyZXR1cm4gdGhpcy5jdXJyZW50PXR9LHRoaXMuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7cmV0dXJuXCJjXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwic1wiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInFcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJ0XCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCk/dGhpcy5jdXJyZW50Om5ldyBBLlBvaW50KDIqdGhpcy5jdXJyZW50LngtdGhpcy5jb250cm9sLngsMip0aGlzLmN1cnJlbnQueS10aGlzLmNvbnRyb2wueSl9LHRoaXMubWFrZUFic29sdXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzUmVsYXRpdmVDb21tYW5kKCkmJih0LngrPXRoaXMuY3VycmVudC54LHQueSs9dGhpcy5jdXJyZW50LnkpLHR9LHRoaXMuYWRkTWFya2VyPWZ1bmN0aW9uKHQsZSxpKXtudWxsIT1pJiYwPHRoaXMuYW5nbGVzLmxlbmd0aCYmbnVsbD09dGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdJiYodGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdPXRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS5hbmdsZVRvKGkpKSx0aGlzLmFkZE1hcmtlckFuZ2xlKHQsbnVsbD09ZT9udWxsOmUuYW5nbGVUbyh0KSl9LHRoaXMuYWRkTWFya2VyQW5nbGU9ZnVuY3Rpb24odCxlKXt0aGlzLnBvaW50cy5wdXNoKHQpLHRoaXMuYW5nbGVzLnB1c2goZSl9LHRoaXMuZ2V0TWFya2VyUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnRzfSx0aGlzLmdldE1hcmtlckFuZ2xlcz1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8dGhpcy5hbmdsZXMubGVuZ3RoO3QrKylpZihudWxsPT10aGlzLmFuZ2xlc1t0XSlmb3IodmFyIGU9dCsxO2U8dGhpcy5hbmdsZXMubGVuZ3RoO2UrKylpZihudWxsIT10aGlzLmFuZ2xlc1tlXSl7dGhpcy5hbmdsZXNbdF09dGhpcy5hbmdsZXNbZV07YnJlYWt9cmV0dXJuIHRoaXMuYW5nbGVzfX0oZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuUGF0aFBhcnNlcjtlLnJlc2V0KCk7dmFyIGk9bmV3IEEuQm91bmRpbmdCb3g7Zm9yKG51bGwhPXQmJnQuYmVnaW5QYXRoKCk7IWUuaXNFbmQoKTspc3dpdGNoKGUubmV4dENvbW1hbmQoKSxlLmNvbW1hbmQpe2Nhc2VcIk1cIjpjYXNlXCJtXCI6dmFyIG49ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2ZvcihlLmFkZE1hcmtlcihuKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubW92ZVRvKG4ueCxuLnkpLGUuc3RhcnQ9ZS5jdXJyZW50OyFlLmlzQ29tbWFuZE9yRW5kKCk7KW49ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4sZS5zdGFydCksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KTticmVhaztjYXNlXCJMXCI6Y2FzZVwibFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBzPWUuY3VycmVudDtuPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihuLHMpLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5saW5lVG8obi54LG4ueSl9YnJlYWs7Y2FzZVwiSFwiOmNhc2VcImhcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgYT1uZXcgQS5Qb2ludCgoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC54OjApK2UuZ2V0U2NhbGFyKCksZS5jdXJyZW50LnkpO2UuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSl9YnJlYWs7Y2FzZVwiVlwiOmNhc2VcInZcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KWE9bmV3IEEuUG9pbnQoZS5jdXJyZW50LngsKGUuaXNSZWxhdGl2ZUNvbW1hbmQoKT9lLmN1cnJlbnQueTowKStlLmdldFNjYWxhcigpKSxlLmFkZE1hcmtlcihhLGUuY3VycmVudCksZS5jdXJyZW50PWEsaS5hZGRQb2ludChlLmN1cnJlbnQueCxlLmN1cnJlbnQueSksbnVsbCE9dCYmdC5saW5lVG8oZS5jdXJyZW50LngsZS5jdXJyZW50LnkpO2JyZWFrO2Nhc2VcIkNcIjpjYXNlXCJjXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHI9ZS5jdXJyZW50LG89ZS5nZXRQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2UuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSl9YnJlYWs7Y2FzZVwiU1wiOmNhc2VcInNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LG89ZS5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbyksaS5hZGRCZXppZXJDdXJ2ZShyLngsci55LG8ueCxvLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LmJlemllckN1cnZlVG8oby54LG8ueSxsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIlFcIjpjYXNlXCJxXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbCksaS5hZGRRdWFkcmF0aWNDdXJ2ZShyLngsci55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5xdWFkcmF0aWNDdXJ2ZVRvKGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiVFwiOmNhc2VcInRcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSxlLmNvbnRyb2w9bCxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihoLGwsbCksaS5hZGRRdWFkcmF0aWNDdXJ2ZShyLngsci55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5xdWFkcmF0aWNDdXJ2ZVRvKGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiQVwiOmNhc2VcImFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXtyPWUuY3VycmVudDt2YXIgdT1lLmdldFNjYWxhcigpLGM9ZS5nZXRTY2FsYXIoKSxmPWUuZ2V0U2NhbGFyKCkqKE1hdGguUEkvMTgwKSxtPWUuZ2V0U2NhbGFyKCkscD1lLmdldFNjYWxhcigpLGQ9KGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLG5ldyBBLlBvaW50KE1hdGguY29zKGYpKihyLngtaC54KS8yK01hdGguc2luKGYpKihyLnktaC55KS8yLC1NYXRoLnNpbihmKSooci54LWgueCkvMitNYXRoLmNvcyhmKSooci55LWgueSkvMikpLHk9TWF0aC5wb3coZC54LDIpL01hdGgucG93KHUsMikrTWF0aC5wb3coZC55LDIpL01hdGgucG93KGMsMik7MTx5JiYodSo9TWF0aC5zcXJ0KHkpLGMqPU1hdGguc3FydCh5KSk7dmFyIHY9KG09PXA/LTE6MSkqTWF0aC5zcXJ0KChNYXRoLnBvdyh1LDIpKk1hdGgucG93KGMsMiktTWF0aC5wb3codSwyKSpNYXRoLnBvdyhkLnksMiktTWF0aC5wb3coYywyKSpNYXRoLnBvdyhkLngsMikpLyhNYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKStNYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkpO2lzTmFOKHYpJiYodj0wKTt2YXIgZz1uZXcgQS5Qb2ludCh2KnUqZC55L2MsdiotYypkLngvdSkseD1uZXcgQS5Qb2ludCgoci54K2gueCkvMitNYXRoLmNvcyhmKSpnLngtTWF0aC5zaW4oZikqZy55LChyLnkraC55KS8yK01hdGguc2luKGYpKmcueCtNYXRoLmNvcyhmKSpnLnkpLGI9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0WzBdLDIpK01hdGgucG93KHRbMV0sMikpfSxQPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVswXSt0WzFdKmVbMV0pLyhiKHQpKmIoZSkpfSxFPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVsxXTx0WzFdKmVbMF0/LTE6MSkqTWF0aC5hY29zKFAodCxlKSl9LHc9RShbMSwwXSxbKGQueC1nLngpL3UsKGQueS1nLnkpL2NdKSxCPVsoZC54LWcueCkvdSwoZC55LWcueSkvY10sQz1bKC1kLngtZy54KS91LCgtZC55LWcueSkvY10sVD1FKEIsQyk7UChCLEMpPD0tMSYmKFQ9TWF0aC5QSSksMTw9UChCLEMpJiYoVD0wKTt2YXIgVj0xLXA/MTotMSxNPXcrViooVC8yKSxTPW5ldyBBLlBvaW50KHgueCt1Kk1hdGguY29zKE0pLHgueStjKk1hdGguc2luKE0pKTtpZihlLmFkZE1hcmtlckFuZ2xlKFMsTS1WKk1hdGguUEkvMiksZS5hZGRNYXJrZXJBbmdsZShoLE0tVipNYXRoLlBJKSxpLmFkZFBvaW50KGgueCxoLnkpLG51bGwhPXQpe1A9Yzx1P3U6Yzt2YXIgaz1jPHU/MTp1L2MsRD1jPHU/Yy91OjE7dC50cmFuc2xhdGUoeC54LHgueSksdC5yb3RhdGUoZiksdC5zY2FsZShrLEQpLHQuYXJjKDAsMCxQLHcsdytULDEtcCksdC5zY2FsZSgxL2ssMS9EKSx0LnJvdGF0ZSgtZiksdC50cmFuc2xhdGUoLXgueCwteC55KX19YnJlYWs7Y2FzZVwiWlwiOmNhc2VcInpcIjpudWxsIT10JiZpLngxIT09aS54MiYmaS55MSE9PWkueTImJnQuY2xvc2VQYXRoKCksZS5jdXJyZW50PWUuc3RhcnR9cmV0dXJuIGl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyUG9pbnRzKCksZT10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyQW5nbGVzKCksaT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspaS5wdXNoKFt0W25dLGVbbl1dKTtyZXR1cm4gaX19LEEuRWxlbWVudC5wYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucGF0dGVybj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNyZWF0ZVBhdHRlcm49ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiLCEwKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiLCEwKSxzPW5ldyBBLkVsZW1lbnQuc3ZnO3MuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSkscy5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixpK1wicHhcIikscy5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLG4rXCJweFwiKSxzLmF0dHJpYnV0ZXMudHJhbnNmb3JtPW5ldyBBLlByb3BlcnR5KFwidHJhbnNmb3JtXCIsdGhpcy5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpLnZhbHVlKSxzLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW47dmFyIGE9cCgpO2Eud2lkdGg9aSxhLmhlaWdodD1uO3ZhciByPWEuZ2V0Q29udGV4dChcIjJkXCIpO3RoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpJiZ0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmci50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiLCEwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIsITApKTtmb3IodmFyIG89LTE7bzw9MTtvKyspZm9yKHZhciBsPS0xO2w8PTE7bCsrKXIuc2F2ZSgpLHMuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLG8qYS53aWR0aCkscy5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsbCphLmhlaWdodCkscy5yZW5kZXIociksci5yZXN0b3JlKCk7cmV0dXJuIHQuY3JlYXRlUGF0dGVybihhLFwicmVwZWF0XCIpfX0sQS5FbGVtZW50LnBhdHRlcm4ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1hcmtlcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VSZW5kZXI9dGhpcy5yZW5kZXIsdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCxlLGkpe2lmKGUpe3QudHJhbnNsYXRlKGUueCxlLnkpLFwiYXV0b1wiPT10aGlzLmF0dHJpYnV0ZShcIm9yaWVudFwiKS52YWx1ZU9yRGVmYXVsdChcImF1dG9cIikmJnQucm90YXRlKGkpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKHQubGluZVdpZHRoLHQubGluZVdpZHRoKSx0LnNhdmUoKTt2YXIgbj1uZXcgQS5FbGVtZW50LnN2ZztuLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIix0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLG4uYXR0cmlidXRlcy5yZWZYPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlk9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VyV2lkdGhcIikudmFsdWUpLG4uYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcIm1hcmtlckhlaWdodFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmZpbGw9bmV3IEEuUHJvcGVydHkoXCJmaWxsXCIsdGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwiYmxhY2tcIikpLG4uYXR0cmlidXRlcy5zdHJva2U9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0aGlzLmF0dHJpYnV0ZShcInN0cm9rZVwiKS52YWx1ZU9yRGVmYXVsdChcIm5vbmVcIikpLG4uY2hpbGRyZW49dGhpcy5jaGlsZHJlbixuLnJlbmRlcih0KSx0LnJlc3RvcmUoKSxcInN0cm9rZVdpZHRoXCI9PXRoaXMuYXR0cmlidXRlKFwibWFya2VyVW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJzdHJva2VXaWR0aFwiKSYmdC5zY2FsZSgxL3QubGluZVdpZHRoLDEvdC5saW5lV2lkdGgpLFwiYXV0b1wiPT10aGlzLmF0dHJpYnV0ZShcIm9yaWVudFwiKS52YWx1ZU9yRGVmYXVsdChcImF1dG9cIikmJnQucm90YXRlKC1pKSx0LnRyYW5zbGF0ZSgtZS54LC1lLnkpfX19LEEuRWxlbWVudC5tYXJrZXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmRlZnM9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmRlZnMucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkdyYWRpZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnN0b3BzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wic3RvcFwiPT1pLnR5cGUmJnRoaXMuc3RvcHMucHVzaChpKX10aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKCl7fSx0aGlzLmdyYWRpZW50VW5pdHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwib2JqZWN0Qm91bmRpbmdCb3hcIil9LHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdD1bXCJncmFkaWVudFVuaXRzXCJdLHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXI9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0W2VdOyF0aGlzLmF0dHJpYnV0ZShpKS5oYXNWYWx1ZSgpJiZ0LmF0dHJpYnV0ZShpKS5oYXNWYWx1ZSgpJiYodGhpcy5hdHRyaWJ1dGUoaSwhMCkudmFsdWU9dC5hdHRyaWJ1dGUoaSkudmFsdWUpfX0sdGhpcy5jcmVhdGVHcmFkaWVudD1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpczt0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpJiYobj10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcihuKSk7dmFyIHM9ZnVuY3Rpb24odCl7cmV0dXJuIGkuaGFzVmFsdWUoKT9uZXcgQS5Qcm9wZXJ0eShcImNvbG9yXCIsdCkuYWRkT3BhY2l0eShpKS52YWx1ZTp0fSxhPXRoaXMuZ2V0R3JhZGllbnQodCxlKTtpZihudWxsPT1hKXJldHVybiBzKG4uc3RvcHNbbi5zdG9wcy5sZW5ndGgtMV0uY29sb3IpO2Zvcih2YXIgcj0wO3I8bi5zdG9wcy5sZW5ndGg7cisrKWEuYWRkQ29sb3JTdG9wKG4uc3RvcHNbcl0ub2Zmc2V0LHMobi5zdG9wc1tyXS5jb2xvcikpO2lmKHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIikuaGFzVmFsdWUoKSl7dmFyIG89QS5WaWV3UG9ydC52aWV3UG9ydHNbMF0sbD1uZXcgQS5FbGVtZW50LnJlY3Q7bC5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLC1BLk1BWF9WSVJUVUFMX1BJWEVMUy8zKSxsLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLEEuTUFYX1ZJUlRVQUxfUElYRUxTKSxsLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpO3ZhciBoPW5ldyBBLkVsZW1lbnQuZztoLmF0dHJpYnV0ZXMudHJhbnNmb3JtPW5ldyBBLlByb3BlcnR5KFwidHJhbnNmb3JtXCIsdGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS52YWx1ZSksaC5jaGlsZHJlbj1bbF07dmFyIHU9bmV3IEEuRWxlbWVudC5zdmc7dS5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsMCksdS5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsMCksdS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixvLndpZHRoKSx1LmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsby5oZWlnaHQpLHUuY2hpbGRyZW49W2hdO3ZhciBjPXAoKTtjLndpZHRoPW8ud2lkdGgsYy5oZWlnaHQ9by5oZWlnaHQ7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGYuZmlsbFN0eWxlPWEsdS5yZW5kZXIoZiksZi5jcmVhdGVQYXR0ZXJuKGMsXCJuby1yZXBlYXRcIil9cmV0dXJuIGF9fSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5saW5lYXJHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieDJcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ5MlwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9lLmdldEJvdW5kaW5nQm94KHQpOm51bGw7dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieDJcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieTFcIiwhMCkudmFsdWU9MCx0aGlzLmF0dHJpYnV0ZShcIngyXCIsITApLnZhbHVlPTEsdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiLCEwKS52YWx1ZT0wKTt2YXIgbj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS50b1BpeGVscyhcInhcIikscz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpLGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieDJcIikudG9QaXhlbHMoXCJ4XCIpLHI9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwieTJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbj09YSYmcz09cj9udWxsOnQuY3JlYXRlTGluZWFyR3JhZGllbnQobixzLGEscil9fSxBLkVsZW1lbnQubGluZWFyR3JhZGllbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuR3JhZGllbnRCYXNlLEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJjeFwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN5XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiclwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImZ4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnlcIiksdGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCk7dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJjeFwiLCEwKS52YWx1ZT1cIjUwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImN5XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN5XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiclwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJyXCIsITApLnZhbHVlPVwiNTAlXCIpO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwiY3hcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIiksYT1uLHI9czt0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLmhhc1ZhbHVlKCkmJihhPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwiZnhcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS5oYXNWYWx1ZSgpJiYocj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnlcIikudG9QaXhlbHMoXCJ5XCIpKTt2YXIgbz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpPyhpLndpZHRoKCkraS5oZWlnaHQoKSkvMip0aGlzLmF0dHJpYnV0ZShcInJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInJcIikudG9QaXhlbHMoKTtyZXR1cm4gdC5jcmVhdGVSYWRpYWxHcmFkaWVudChhLHIsMCxuLHMsbyl9fSxBLkVsZW1lbnQucmFkaWFsR3JhZGllbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuR3JhZGllbnRCYXNlLEEuRWxlbWVudC5zdG9wPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMub2Zmc2V0PXRoaXMuYXR0cmlidXRlKFwib2Zmc2V0XCIpLm51bVZhbHVlKCksdGhpcy5vZmZzZXQ8MCYmKHRoaXMub2Zmc2V0PTApLDE8dGhpcy5vZmZzZXQmJih0aGlzLm9mZnNldD0xKTt2YXIgZT10aGlzLnN0eWxlKFwic3RvcC1jb2xvclwiLCEwKTtcIlwiPT09ZS52YWx1ZSYmKGUudmFsdWU9XCIjMDAwXCIpLHRoaXMuc3R5bGUoXCJzdG9wLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKGU9ZS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJzdG9wLW9wYWNpdHlcIikpKSx0aGlzLmNvbG9yPWUudmFsdWV9LEEuRWxlbWVudC5zdG9wLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5BbmltYXRlQmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSxBLkFuaW1hdGlvbnMucHVzaCh0aGlzKSx0aGlzLmR1cmF0aW9uPTAsdGhpcy5iZWdpbj10aGlzLmF0dHJpYnV0ZShcImJlZ2luXCIpLnRvTWlsbGlzZWNvbmRzKCksdGhpcy5tYXhEdXJhdGlvbj10aGlzLmJlZ2luK3RoaXMuYXR0cmlidXRlKFwiZHVyXCIpLnRvTWlsbGlzZWNvbmRzKCksdGhpcy5nZXRQcm9wZXJ0eT1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cmlidXRlKFwiYXR0cmlidXRlVHlwZVwiKS52YWx1ZSxlPXRoaXMuYXR0cmlidXRlKFwiYXR0cmlidXRlTmFtZVwiKS52YWx1ZTtyZXR1cm5cIkNTU1wiPT10P3RoaXMucGFyZW50LnN0eWxlKGUsITApOnRoaXMucGFyZW50LmF0dHJpYnV0ZShlLCEwKX0sdGhpcy5pbml0aWFsVmFsdWU9bnVsbCx0aGlzLmluaXRpYWxVbml0cz1cIlwiLHRoaXMucmVtb3ZlZD0hMSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3JldHVyblwiXCJ9LHRoaXMudXBkYXRlPWZ1bmN0aW9uKHQpe2lmKG51bGw9PXRoaXMuaW5pdGlhbFZhbHVlJiYodGhpcy5pbml0aWFsVmFsdWU9dGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlLHRoaXMuaW5pdGlhbFVuaXRzPXRoaXMuZ2V0UHJvcGVydHkoKS5nZXRVbml0cygpKSx0aGlzLmR1cmF0aW9uPnRoaXMubWF4RHVyYXRpb24pe2lmKFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdENvdW50XCIpLnZhbHVlfHxcImluZGVmaW5pdGVcIj09dGhpcy5hdHRyaWJ1dGUoXCJyZXBlYXREdXJcIikudmFsdWUpdGhpcy5kdXJhdGlvbj0wO2Vsc2UgaWYoXCJmcmVlemVcIiE9dGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwicmVtb3ZlXCIpfHx0aGlzLmZyb3plbil7aWYoXCJyZW1vdmVcIj09dGhpcy5hdHRyaWJ1dGUoXCJmaWxsXCIpLnZhbHVlT3JEZWZhdWx0KFwicmVtb3ZlXCIpJiYhdGhpcy5yZW1vdmVkKXJldHVybiB0aGlzLnJlbW92ZWQ9ITAsdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlPXRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plbj90aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW5WYWx1ZTp0aGlzLmluaXRpYWxWYWx1ZSwhMH1lbHNlIHRoaXMuZnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plbj0hMCx0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW5WYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWU7cmV0dXJuITF9dGhpcy5kdXJhdGlvbj10aGlzLmR1cmF0aW9uK3Q7dmFyIGU9ITE7aWYodGhpcy5iZWdpbjx0aGlzLmR1cmF0aW9uKXt2YXIgaT10aGlzLmNhbGNWYWx1ZSgpO3RoaXMuYXR0cmlidXRlKFwidHlwZVwiKS5oYXNWYWx1ZSgpJiYoaT10aGlzLmF0dHJpYnV0ZShcInR5cGVcIikudmFsdWUrXCIoXCIraStcIilcIiksdGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlPWksZT0hMH1yZXR1cm4gZX0sdGhpcy5mcm9tPXRoaXMuYXR0cmlidXRlKFwiZnJvbVwiKSx0aGlzLnRvPXRoaXMuYXR0cmlidXRlKFwidG9cIiksdGhpcy52YWx1ZXM9dGhpcy5hdHRyaWJ1dGUoXCJ2YWx1ZXNcIiksdGhpcy52YWx1ZXMuaGFzVmFsdWUoKSYmKHRoaXMudmFsdWVzLnZhbHVlPXRoaXMudmFsdWVzLnZhbHVlLnNwbGl0KFwiO1wiKSksdGhpcy5wcm9ncmVzcz1mdW5jdGlvbigpe3ZhciB0PXtwcm9ncmVzczoodGhpcy5kdXJhdGlvbi10aGlzLmJlZ2luKS8odGhpcy5tYXhEdXJhdGlvbi10aGlzLmJlZ2luKX07aWYodGhpcy52YWx1ZXMuaGFzVmFsdWUoKSl7dmFyIGU9dC5wcm9ncmVzcyoodGhpcy52YWx1ZXMudmFsdWUubGVuZ3RoLTEpLGk9TWF0aC5mbG9vcihlKSxuPU1hdGguY2VpbChlKTt0LmZyb209bmV3IEEuUHJvcGVydHkoXCJmcm9tXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtpXSkpLHQudG89bmV3IEEuUHJvcGVydHkoXCJ0b1wiLHBhcnNlRmxvYXQodGhpcy52YWx1ZXMudmFsdWVbbl0pKSx0LnByb2dyZXNzPShlLWkpLyhuLWkpfWVsc2UgdC5mcm9tPXRoaXMuZnJvbSx0LnRvPXRoaXMudG87cmV0dXJuIHR9fSxBLkVsZW1lbnQuQW5pbWF0ZUJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmFuaW1hdGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCk7cmV0dXJuIHQuZnJvbS5udW1WYWx1ZSgpKyh0LnRvLm51bVZhbHVlKCktdC5mcm9tLm51bVZhbHVlKCkpKnQucHJvZ3Jlc3MrdGhpcy5pbml0aWFsVW5pdHN9fSxBLkVsZW1lbnQuYW5pbWF0ZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5BbmltYXRlQmFzZSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9ncmVzcygpLGU9bmV3IG0odC5mcm9tLnZhbHVlKSxpPW5ldyBtKHQudG8udmFsdWUpO2lmKGUub2smJmkub2spe3ZhciBuPWUucisoaS5yLWUucikqdC5wcm9ncmVzcyxzPWUuZysoaS5nLWUuZykqdC5wcm9ncmVzcyxhPWUuYisoaS5iLWUuYikqdC5wcm9ncmVzcztyZXR1cm5cInJnYihcIitwYXJzZUludChuLDEwKStcIixcIitwYXJzZUludChzLDEwKStcIixcIitwYXJzZUludChhLDEwKStcIilcIn1yZXR1cm4gdGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLnZhbHVlfX0sQS5FbGVtZW50LmFuaW1hdGVDb2xvci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5BbmltYXRlQmFzZSxBLkVsZW1lbnQuYW5pbWF0ZVRyYW5zZm9ybT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLnByb2dyZXNzKCksZT1BLlRvTnVtYmVyQXJyYXkodC5mcm9tLnZhbHVlKSxpPUEuVG9OdW1iZXJBcnJheSh0LnRvLnZhbHVlKSxuPVwiXCIscz0wO3M8ZS5sZW5ndGg7cysrKW4rPWVbc10rKGlbc10tZVtzXSkqdC5wcm9ncmVzcytcIiBcIjtyZXR1cm4gbn19LEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LmFuaW1hdGUsQS5FbGVtZW50LmZvbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9dGhpcy5hdHRyaWJ1dGUoXCJob3Jpei1hZHYteFwiKS5udW1WYWx1ZSgpLHRoaXMuaXNSVEw9ITEsdGhpcy5pc0FyYWJpYz0hMSx0aGlzLmZvbnRGYWNlPW51bGwsdGhpcy5taXNzaW5nR2x5cGg9bnVsbCx0aGlzLmdseXBocz1bXTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5jaGlsZHJlbltlXTtcImZvbnQtZmFjZVwiPT1pLnR5cGU/KHRoaXMuZm9udEZhY2U9aSkuc3R5bGUoXCJmb250LWZhbWlseVwiKS5oYXNWYWx1ZSgpJiYoQS5EZWZpbml0aW9uc1tpLnN0eWxlKFwiZm9udC1mYW1pbHlcIikudmFsdWVdPXRoaXMpOlwibWlzc2luZy1nbHlwaFwiPT1pLnR5cGU/dGhpcy5taXNzaW5nR2x5cGg9aTpcImdseXBoXCI9PWkudHlwZSYmKFwiXCIhPWkuYXJhYmljRm9ybT8odGhpcy5pc1JUTD0hMCx0aGlzLmlzQXJhYmljPSEwLHZvaWQgMD09PXRoaXMuZ2x5cGhzW2kudW5pY29kZV0mJih0aGlzLmdseXBoc1tpLnVuaWNvZGVdPVtdKSx0aGlzLmdseXBoc1tpLnVuaWNvZGVdW2kuYXJhYmljRm9ybV09aSk6dGhpcy5nbHlwaHNbaS51bmljb2RlXT1pKX19LEEuRWxlbWVudC5mb250LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mb250ZmFjZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFzY2VudD10aGlzLmF0dHJpYnV0ZShcImFzY2VudFwiKS52YWx1ZSx0aGlzLmRlc2NlbnQ9dGhpcy5hdHRyaWJ1dGUoXCJkZXNjZW50XCIpLnZhbHVlLHRoaXMudW5pdHNQZXJFbT10aGlzLmF0dHJpYnV0ZShcInVuaXRzLXBlci1lbVwiKS5udW1WYWx1ZSgpfSxBLkVsZW1lbnQuZm9udGZhY2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1pc3NpbmdnbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPTB9LEEuRWxlbWVudC5taXNzaW5nZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQuZ2x5cGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wYXRoLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy51bmljb2RlPXRoaXMuYXR0cmlidXRlKFwidW5pY29kZVwiKS52YWx1ZSx0aGlzLmFyYWJpY0Zvcm09dGhpcy5hdHRyaWJ1dGUoXCJhcmFiaWMtZm9ybVwiKS52YWx1ZX0sQS5FbGVtZW50LmdseXBoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBhdGgsQS5FbGVtZW50LnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZVNldENvbnRleHQodCk7dmFyIGU9dGhpcy5zdHlsZShcImRvbWluYW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCk7bnVsbD09ZSYmKGU9dGhpcy5zdHlsZShcImFsaWdubWVudC1iYXNlbGluZVwiKS50b1RleHRCYXNlbGluZSgpKSxudWxsIT1lJiYodC50ZXh0QmFzZWxpbmU9ZSl9LHRoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzPWZ1bmN0aW9uKHQpe3RoaXMueD10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMueT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHRoaXMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKHRoaXMueCs9dGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpLHRoaXMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHRoaXMueSs9dGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpLHRoaXMueCs9dGhpcy5nZXRBbmNob3JEZWx0YSh0LHRoaXMsMCl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXModCk7Zm9yKHZhciBlPW51bGwsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmdldENoaWxkQm91bmRpbmdCb3godCx0aGlzLHRoaXMsaSk7bnVsbD09ZT9lPW46ZS5hZGRCb3VuZGluZ0JveChuKX1yZXR1cm4gZX0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl0aGlzLnJlbmRlckNoaWxkKHQsdGhpcyx0aGlzLGUpfSx0aGlzLmdldEFuY2hvckRlbHRhPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzLnN0eWxlKFwidGV4dC1hbmNob3JcIikudmFsdWVPckRlZmF1bHQoXCJzdGFydFwiKTtpZihcInN0YXJ0XCIhPW4pe2Zvcih2YXIgcz0wLGE9aTthPGUuY2hpbGRyZW4ubGVuZ3RoO2ErKyl7dmFyIHI9ZS5jaGlsZHJlblthXTtpZihpPGEmJnIuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpKWJyZWFrO3MrPXIubWVhc3VyZVRleHRSZWN1cnNpdmUodCl9cmV0dXJuLTEqKFwiZW5kXCI9PW4/czpzLzIpfXJldHVybiAwfSx0aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9aS5jaGlsZHJlbltuXTtyZXR1cm4gcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCk/KHMueD1zLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpK2UuZ2V0QW5jaG9yRGVsdGEodCxpLG4pLHMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKHMueCs9cy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpKToocy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYoZS54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkscy54PWUueCksZS54PXMueCtzLm1lYXN1cmVUZXh0KHQpLHMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpPyhzLnk9cy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJihzLnkrPXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSk6KHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKGUueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpLHMueT1lLnkpLGUueT1zLnksc30sdGhpcy5nZXRDaGlsZEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPXRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcyh0LGUsaSxuKSxhPXMuZ2V0Qm91bmRpbmdCb3godCk7Zm9yKG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyl7dmFyIHI9ZS5nZXRDaGlsZEJvdW5kaW5nQm94KHQsZSxzLG4pO2EuYWRkQm91bmRpbmdCb3gocil9cmV0dXJuIGF9LHRoaXMucmVuZGVyQ2hpbGQ9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pO2ZvcihzLnJlbmRlcih0KSxuPTA7bjxzLmNoaWxkcmVuLmxlbmd0aDtuKyspZS5yZW5kZXJDaGlsZCh0LGUscyxuKX19LEEuRWxlbWVudC50ZXh0LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0R2x5cGg9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPWVbaV0scz1udWxsO2lmKHQuaXNBcmFiaWMpe3ZhciBhPVwiaXNvbGF0ZWRcIjsoMD09aXx8XCIgXCI9PWVbaS0xXSkmJmk8ZS5sZW5ndGgtMiYmXCIgXCIhPWVbaSsxXSYmKGE9XCJ0ZXJtaW5hbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJmk8ZS5sZW5ndGgtMiYmXCIgXCIhPWVbaSsxXSYmKGE9XCJtZWRpYWxcIiksMDxpJiZcIiBcIiE9ZVtpLTFdJiYoaT09ZS5sZW5ndGgtMXx8XCIgXCI9PWVbaSsxXSkmJihhPVwiaW5pdGlhbFwiKSx2b2lkIDAhPT10LmdseXBoc1tuXSYmbnVsbD09KHM9dC5nbHlwaHNbbl1bYV0pJiZcImdseXBoXCI9PXQuZ2x5cGhzW25dLnR5cGUmJihzPXQuZ2x5cGhzW25dKX1lbHNlIHM9dC5nbHlwaHNbbl07cmV0dXJuIG51bGw9PXMmJihzPXQubWlzc2luZ0dseXBoKSxzfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGw9PWUpXCJzdHJva2VcIj09dC5wYWludE9yZGVyPyhcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZVRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSksXCJcIiE9dC5maWxsU3R5bGUmJnQuZmlsbFRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSkpOihcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZVRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSkpO2Vsc2V7dmFyIGk9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKSxuPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFN0eWxlKSxzPXRoaXMuZ2V0VGV4dCgpO2UuaXNSVEwmJihzPXMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO2Zvcih2YXIgYT1BLlRvTnVtYmVyQXJyYXkodGhpcy5wYXJlbnQuYXR0cmlidXRlKFwiZHhcIikudmFsdWUpLHI9MDtyPHMubGVuZ3RoO3IrKyl7dmFyIG89dGhpcy5nZXRHbHlwaChlLHMsciksbD1pL2UuZm9udEZhY2UudW5pdHNQZXJFbTt0LnRyYW5zbGF0ZSh0aGlzLngsdGhpcy55KSx0LnNjYWxlKGwsLWwpO3ZhciBoPXQubGluZVdpZHRoO3QubGluZVdpZHRoPXQubGluZVdpZHRoKmUuZm9udEZhY2UudW5pdHNQZXJFbS9pLFwiaXRhbGljXCI9PW4mJnQudHJhbnNmb3JtKDEsMCwuNCwxLDAsMCksby5yZW5kZXIodCksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC0uNCwxLDAsMCksdC5saW5lV2lkdGg9aCx0LnNjYWxlKDEvbCwtMS9sKSx0LnRyYW5zbGF0ZSgtdGhpcy54LC10aGlzLnkpLHRoaXMueCs9aSooby5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKS9lLmZvbnRGYWNlLnVuaXRzUGVyRW0sdm9pZCAwPT09YVtyXXx8aXNOYU4oYVtyXSl8fCh0aGlzLngrPWFbcl0pfX19LHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe30sdGhpcy5tZWFzdXJlVGV4dFJlY3Vyc2l2ZT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy5tZWFzdXJlVGV4dCh0KSxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspZSs9dGhpcy5jaGlsZHJlbltpXS5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KTtyZXR1cm4gZX0sdGhpcy5tZWFzdXJlVGV4dD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmdldERlZmluaXRpb24oKTtpZihudWxsIT1lKXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49MCxzPXRoaXMuZ2V0VGV4dCgpO2UuaXNSVEwmJihzPXMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIikpO2Zvcih2YXIgYT1BLlRvTnVtYmVyQXJyYXkodGhpcy5wYXJlbnQuYXR0cmlidXRlKFwiZHhcIikudmFsdWUpLHI9MDtyPHMubGVuZ3RoO3IrKyluKz0odGhpcy5nZXRHbHlwaChlLHMscikuaG9yaXpBZHZYfHxlLmhvcml6QWR2WCkqaS9lLmZvbnRGYWNlLnVuaXRzUGVyRW0sdm9pZCAwPT09YVtyXXx8aXNOYU4oYVtyXSl8fChuKz1hW3JdKTtyZXR1cm4gbn12YXIgbz1BLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKTtpZighdC5tZWFzdXJlVGV4dClyZXR1cm4gMTAqby5sZW5ndGg7dC5zYXZlKCksdGhpcy5zZXRDb250ZXh0KHQsITApO3ZhciBsPXQubWVhc3VyZVRleHQobykud2lkdGg7cmV0dXJuIHQucmVzdG9yZSgpLGx9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSl9fSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnRzcGFuPWZ1bmN0aW9uKHQpe3RoaXMuY2FwdHVyZVRleHROb2Rlcz0hMCx0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy50ZXh0PUEuY29tcHJlc3NTcGFjZXModC52YWx1ZXx8dC50ZXh0fHx0LnRleHRDb250ZW50fHxcIlwiKSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gMDx0aGlzLmNoaWxkcmVuLmxlbmd0aD9cIlwiOnRoaXMudGV4dH19LEEuRWxlbWVudC50c3Bhbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LnRyZWY9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtpZihudWxsIT10KXJldHVybiB0LmNoaWxkcmVuWzBdLmdldFRleHQoKX19LEEuRWxlbWVudC50cmVmLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQuYT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5oYXNUZXh0PTA8dC5jaGlsZE5vZGVzLmxlbmd0aDtmb3IodmFyIGU9MDtlPHQuY2hpbGROb2Rlcy5sZW5ndGg7ZSsrKTMhPXQuY2hpbGROb2Rlc1tlXS5ub2RlVHlwZSYmKHRoaXMuaGFzVGV4dD0hMSk7dGhpcy50ZXh0PXRoaXMuaGFzVGV4dD90LmNoaWxkTm9kZXNbMF0udmFsdWV8fHQuY2hpbGROb2Rlc1swXS5kYXRhOlwiXCIsdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGV4dH0sdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW49dGhpcy5yZW5kZXJDaGlsZHJlbix0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2lmKHRoaXMuaGFzVGV4dCl7dGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4odCk7dmFyIGU9bmV3IEEuUHJvcGVydHkoXCJmb250U2l6ZVwiLEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSk7QS5Nb3VzZS5jaGVja0JvdW5kaW5nQm94KHRoaXMsbmV3IEEuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLnRvUGl4ZWxzKFwieVwiKSx0aGlzLngrdGhpcy5tZWFzdXJlVGV4dCh0KSx0aGlzLnkpKX1lbHNlIGlmKDA8dGhpcy5jaGlsZHJlbi5sZW5ndGgpe3ZhciBpPW5ldyBBLkVsZW1lbnQuZztpLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saS5wYXJlbnQ9dGhpcyxpLnJlbmRlcih0KX19LHRoaXMub25jbGljaz1mdW5jdGlvbigpe3Uub3Blbih0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZSl9LHRoaXMub25tb3VzZW1vdmU9ZnVuY3Rpb24oKXtBLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwifX0sQS5FbGVtZW50LmEucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5pbWFnZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBlPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlO2lmKFwiXCIhPWUpe3ZhciBhPWUubWF0Y2goL1xcLnN2ZyQvKTtpZihBLkltYWdlcy5wdXNoKHRoaXMpLHRoaXMubG9hZGVkPSExLGEpdGhpcy5pbWc9QS5hamF4KGUpLHRoaXMubG9hZGVkPSEwO2Vsc2V7dGhpcy5pbWc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwxPT1BLm9wdHMudXNlQ09SUyYmKHRoaXMuaW1nLmNyb3NzT3JpZ2luPVwiQW5vbnltb3VzXCIpO3ZhciByPXRoaXM7dGhpcy5pbWcub25sb2FkPWZ1bmN0aW9uKCl7ci5sb2FkZWQ9ITB9LHRoaXMuaW1nLm9uZXJyb3I9ZnVuY3Rpb24oKXtBLmxvZygnRVJST1I6IGltYWdlIFwiJytlKydcIiBub3QgZm91bmQnKSxyLmxvYWRlZD0hMH0sdGhpcy5pbWcuc3JjPWV9dGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpOzAhPW4mJjAhPXMmJih0LnNhdmUoKSxhP3QuZHJhd1N2Zyh0aGlzLmltZyxlLGksbixzKToodC50cmFuc2xhdGUoZSxpKSxBLkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLG4sdGhpcy5pbWcud2lkdGgscyx0aGlzLmltZy5oZWlnaHQsMCwwKSxyLmxvYWRlZCYmKHZvaWQgMD09PXRoaXMuaW1nLmNvbXBsZXRlfHx0aGlzLmltZy5jb21wbGV0ZSkmJnQuZHJhd0ltYWdlKHRoaXMuaW1nLDAsMCkpLHQucmVzdG9yZSgpKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksZT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KHQsZSx0K2ksZStuKX19fSxBLkVsZW1lbnQuaW1hZ2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuZz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBBLkJvdW5kaW5nQm94LGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdCb3godCkpO3JldHVybiBlfX0sQS5FbGVtZW50LmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3ltYm9sPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LnN5bWJvbC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zdHlsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTtmb3IodmFyIGU9XCJcIixpPTA7aTx0LmNoaWxkTm9kZXMubGVuZ3RoO2krKyllKz10LmNoaWxkTm9kZXNbaV0uZGF0YTtlPWUucmVwbGFjZSgvKFxcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKlxcL118W1xcclxcbl0pKSkqXFwqK1xcLyl8KF5bXFxzXSpcXC9cXC8uKikvZ20sXCJcIik7dmFyIG49KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkuc3BsaXQoXCJ9XCIpO2ZvcihpPTA7aTxuLmxlbmd0aDtpKyspaWYoXCJcIiE9QS50cmltKG5baV0pKWZvcih2YXIgcz1uW2ldLnNwbGl0KFwie1wiKSxhPXNbMF0uc3BsaXQoXCIsXCIpLHI9c1sxXS5zcGxpdChcIjtcIiksbz0wO288YS5sZW5ndGg7bysrKXt2YXIgbD1BLnRyaW0oYVtvXSk7aWYoXCJcIiE9bCl7Zm9yKHZhciBoPUEuU3R5bGVzW2xdfHx7fSx1PTA7dTxyLmxlbmd0aDt1Kyspe3ZhciBjPXJbdV0uaW5kZXhPZihcIjpcIiksZj1yW3VdLnN1YnN0cigwLGMpLG09clt1XS5zdWJzdHIoYysxLHJbdV0ubGVuZ3RoLWMpO251bGwhPWYmJm51bGwhPW0mJihoW0EudHJpbShmKV09bmV3IEEuUHJvcGVydHkoQS50cmltKGYpLEEudHJpbShtKSkpfWlmKEEuU3R5bGVzW2xdPWgsQS5TdHlsZXNTcGVjaWZpY2l0eVtsXT13KGwpLFwiQGZvbnQtZmFjZVwiPT1sKWZvcih2YXIgcD1oW1wiZm9udC1mYW1pbHlcIl0udmFsdWUucmVwbGFjZSgvXCIvZyxcIlwiKSxkPWguc3JjLnZhbHVlLnNwbGl0KFwiLFwiKSx5PTA7eTxkLmxlbmd0aDt5KyspaWYoMDxkW3ldLmluZGV4T2YoJ2Zvcm1hdChcInN2Z1wiKScpKWZvcih2YXIgdj1kW3ldLmluZGV4T2YoXCJ1cmxcIiksZz1kW3ldLmluZGV4T2YoXCIpXCIsdikseD1kW3ldLnN1YnN0cih2KzUsZy12LTYpLGI9QS5wYXJzZVhtbChBLmFqYXgoeCkpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKSxQPTA7UDxiLmxlbmd0aDtQKyspe3ZhciBFPUEuQ3JlYXRlRWxlbWVudChiW1BdKTtBLkRlZmluaXRpb25zW3BdPUV9fX19LEEuRWxlbWVudC5zdHlsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQudXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZVNldENvbnRleHQodCksdGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksMCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCkmJnQudHJhbnNsYXRlKDAsdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSl9O3ZhciBuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTt0aGlzLnBhdGg9ZnVuY3Rpb24odCl7bnVsbCE9biYmbi5wYXRoKHQpfSx0aGlzLmVsZW1lbnRUcmFuc2Zvcm09ZnVuY3Rpb24oKXtpZihudWxsIT1uJiZuLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkpcmV0dXJuIG5ldyBBLlRyYW5zZm9ybShuLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtpZihudWxsIT1uKXJldHVybiBuLmdldEJvdW5kaW5nQm94KHQpfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pe3ZhciBlPW47XCJzeW1ib2xcIj09bi50eXBlJiYoKGU9bmV3IEEuRWxlbWVudC5zdmcpLnR5cGU9XCJzdmdcIixlLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIixuLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLGUuYXR0cmlidXRlcy5wcmVzZXJ2ZUFzcGVjdFJhdGlvPW5ldyBBLlByb3BlcnR5KFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLG4uYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLm92ZXJmbG93PW5ldyBBLlByb3BlcnR5KFwib3ZlcmZsb3dcIixuLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlKSxlLmNoaWxkcmVuPW4uY2hpbGRyZW4pLFwic3ZnXCI9PWUudHlwZSYmKHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS52YWx1ZSkpLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihlLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudmFsdWUpKSk7dmFyIGk9ZS5wYXJlbnQ7ZS5wYXJlbnQ9bnVsbCxlLnJlbmRlcih0KSxlLnBhcmVudD1pfX19LEEuRWxlbWVudC51c2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQubWFzaz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtpZigwPT1zJiYwPT1hKXtmb3IodmFyIHI9bmV3IEEuQm91bmRpbmdCb3gsbz0wO288dGhpcy5jaGlsZHJlbi5sZW5ndGg7bysrKXIuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltvXS5nZXRCb3VuZGluZ0JveCh0KSk7aT1NYXRoLmZsb29yKHIueDEpLG49TWF0aC5mbG9vcihyLnkxKSxzPU1hdGguZmxvb3Ioci53aWR0aCgpKSxhPU1hdGguZmxvb3Ioci5oZWlnaHQoKSl9dmFyIGw9ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlO2UuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1cIlwiO3ZhciBoPXAoKTtoLndpZHRoPWkrcyxoLmhlaWdodD1uK2E7dmFyIHU9aC5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5yZW5kZXJDaGlsZHJlbih1KTt2YXIgYz1wKCk7Yy53aWR0aD1pK3MsYy5oZWlnaHQ9bithO3ZhciBmPWMuZ2V0Q29udGV4dChcIjJkXCIpO2UucmVuZGVyKGYpLGYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwiZGVzdGluYXRpb24taW5cIixmLmZpbGxTdHlsZT11LmNyZWF0ZVBhdHRlcm4oaCxcIm5vLXJlcGVhdFwiKSxmLmZpbGxSZWN0KDAsMCxpK3MsbithKSx0LmZpbGxTdHlsZT1mLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKSx0LmZpbGxSZWN0KDAsMCxpK3MsbithKSxlLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU9bH0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50Lm1hc2sucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmNsaXBQYXRoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7dmFyIGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxpPXQuYmVnaW5QYXRoLG49dC5jbG9zZVBhdGg7ZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoPWZ1bmN0aW9uKCl7fSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1mdW5jdGlvbigpe30pLGkuY2FsbCh0KTtmb3IodmFyIHM9MDtzPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3MrKyl7dmFyIGE9dGhpcy5jaGlsZHJlbltzXTtpZih2b2lkIDAhPT1hLnBhdGgpe3ZhciByPXZvaWQgMCE9PWEuZWxlbWVudFRyYW5zZm9ybSYmYS5lbGVtZW50VHJhbnNmb3JtKCk7IXImJmEuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSYmKHI9bmV3IEEuVHJhbnNmb3JtKGEuc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpKSxyJiZyLmFwcGx5KHQpLGEucGF0aCh0KSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9biksciYmci51bmFwcGx5KHQpfX1uLmNhbGwodCksdC5jbGlwKCksZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuYmVnaW5QYXRoPWksQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9bil9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5jbGlwUGF0aC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmlsdGVyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmdldEJvdW5kaW5nQm94KHQpLG49TWF0aC5mbG9vcihpLngxKSxzPU1hdGguZmxvb3IoaS55MSksYT1NYXRoLmZsb29yKGkud2lkdGgoKSkscj1NYXRoLmZsb29yKGkuaGVpZ2h0KCkpLG89ZS5zdHlsZShcImZpbHRlclwiKS52YWx1ZTtlLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlPVwiXCI7Zm9yKHZhciBsPTAsaD0wLHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKyl7dmFyIGM9dGhpcy5jaGlsZHJlblt1XS5leHRyYUZpbHRlckRpc3RhbmNlfHwwO2w9TWF0aC5tYXgobCxjKSxoPU1hdGgubWF4KGgsYyl9dmFyIGY9cCgpO2Yud2lkdGg9YSsyKmwsZi5oZWlnaHQ9cisyKmg7dmFyIG09Zi5nZXRDb250ZXh0KFwiMmRcIik7Zm9yKG0udHJhbnNsYXRlKC1uK2wsLXMraCksZS5yZW5kZXIobSksdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKVwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuY2hpbGRyZW5bdV0uYXBwbHkmJnRoaXMuY2hpbGRyZW5bdV0uYXBwbHkobSwwLDAsYSsyKmwscisyKmgpO3QuZHJhd0ltYWdlKGYsMCwwLGErMipsLHIrMipoLG4tbCxzLWgsYSsyKmwscisyKmgpLGUuc3R5bGUoXCJmaWx0ZXJcIiwhMCkudmFsdWU9b30sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmZpbHRlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVNb3JwaG9sb2d5PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVNb3JwaG9sb2d5LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUNvbXBvc2l0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7fX0sQS5FbGVtZW50LmZlQ29tcG9zaXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUNvbG9yTWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBuPUEuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKS52YWx1ZSk7c3dpdGNoKHRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZU9yRGVmYXVsdChcIm1hdHJpeFwiKSl7Y2FzZVwic2F0dXJhdGVcIjp2YXIgZT1uWzBdO249Wy4yMTMrLjc4NyplLC43MTUtLjcxNSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1Ky4yODUqZSwuMDcyLS4wNzIqZSwwLDAsLjIxMy0uMjEzKmUsLjcxNS0uNzE1KmUsLjA3MisuOTI4KmUsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImh1ZVJvdGF0ZVwiOnZhciBzPW5bMF0qTWF0aC5QSS8xODAsaT1mdW5jdGlvbih0LGUsaSl7cmV0dXJuIHQrTWF0aC5jb3MocykqZStNYXRoLnNpbihzKSppfTtuPVtpKC4yMTMsLjc4NywtLjIxMyksaSguNzE1LC0uNzE1LC0uNzE1KSxpKC4wNzIsLS4wNzIsLjkyOCksMCwwLGkoLjIxMywtLjIxMywuMTQzKSxpKC43MTUsLjI4NSwuMTQpLGkoLjA3MiwtLjA3MiwtLjI4MyksMCwwLGkoLjIxMywtLjIxMywtLjc4NyksaSguNzE1LC0uNzE1LC43MTUpLGkoLjA3MiwuOTI4LC4wNzIpLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxXTticmVhaztjYXNlXCJsdW1pbmFuY2VUb0FscGhhXCI6bj1bMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsLjIxMjUsLjcxNTQsLjA3MjEsMCwwLDAsMCwwLDAsMV19ZnVuY3Rpb24gdSh0LGUsaSxuLHMsYSl7cmV0dXJuIHRbaSpuKjQrNCplK2FdfWZ1bmN0aW9uIGModCxlLGksbixzLGEscil7dFtpKm4qNCs0KmUrYV09cn1mdW5jdGlvbiBmKHQsZSl7dmFyIGk9blt0XTtyZXR1cm4gaSooaTwwP2UtMjU1OmUpfXRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt2YXIgYT10LmdldEltYWdlRGF0YSgwLDAsbixzKTtmb3IoaT0wO2k8cztpKyspZm9yKGU9MDtlPG47ZSsrKXt2YXIgcj11KGEuZGF0YSxlLGksbiwwLDApLG89dShhLmRhdGEsZSxpLG4sMCwxKSxsPXUoYS5kYXRhLGUsaSxuLDAsMiksaD11KGEuZGF0YSxlLGksbiwwLDMpO2MoYS5kYXRhLGUsaSxuLDAsMCxmKDAscikrZigxLG8pK2YoMixsKStmKDMsaCkrZig0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDEsZig1LHIpK2YoNixvKStmKDcsbCkrZig4LGgpK2YoOSwxKSksYyhhLmRhdGEsZSxpLG4sMCwyLGYoMTAscikrZigxMSxvKStmKDEyLGwpK2YoMTMsaCkrZigxNCwxKSksYyhhLmRhdGEsZSxpLG4sMCwzLGYoMTUscikrZigxNixvKStmKDE3LGwpK2YoMTgsaCkrZigxOSwxKSl9dC5jbGVhclJlY3QoMCwwLG4scyksdC5wdXRJbWFnZURhdGEoYSwwLDApfX0sQS5FbGVtZW50LmZlQ29sb3JNYXRyaXgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmx1clJhZGl1cz1NYXRoLmZsb29yKHRoaXMuYXR0cmlidXRlKFwic3RkRGV2aWF0aW9uXCIpLm51bVZhbHVlKCkpLHRoaXMuZXh0cmFGaWx0ZXJEaXN0YW5jZT10aGlzLmJsdXJSYWRpdXMsdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe2QmJnZvaWQgMCE9PWQuY2FudmFzUkdCQT8odC5jYW52YXMuaWQ9QS5VbmlxdWVJZCgpLHQuY2FudmFzLnN0eWxlLmRpc3BsYXk9XCJub25lXCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0LmNhbnZhcyksZC5jYW52YXNSR0JBKHQuY2FudmFzLGUsaSxuLHMsdGhpcy5ibHVyUmFkaXVzKSxkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQuY2FudmFzKSk6QS5sb2coXCJFUlJPUjogU3RhY2tCbHVyLmpzIG11c3QgYmUgaW5jbHVkZWQgZm9yIGJsdXIgdG8gd29ya1wiKX19LEEuRWxlbWVudC5mZUdhdXNzaWFuQmx1ci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQudGl0bGU9ZnVuY3Rpb24odCl7fSxBLkVsZW1lbnQudGl0bGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmRlc2M9ZnVuY3Rpb24odCl7fSxBLkVsZW1lbnQuZGVzYy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuTUlTU0lORz1mdW5jdGlvbih0KXtBLmxvZyhcIkVSUk9SOiBFbGVtZW50ICdcIit0Lm5vZGVOYW1lK1wiJyBub3QgeWV0IGltcGxlbWVudGVkLlwiKX0sQS5FbGVtZW50Lk1JU1NJTkcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5DcmVhdGVFbGVtZW50PWZ1bmN0aW9uKHQpe3ZhciBlPXQubm9kZU5hbWUucmVwbGFjZSgvXlteOl0rOi8sXCJcIik7ZT1lLnJlcGxhY2UoL1xcLS9nLFwiXCIpO3ZhciBpPW51bGw7cmV0dXJuKGk9dm9pZCAwIT09QS5FbGVtZW50W2VdP25ldyBBLkVsZW1lbnRbZV0odCk6bmV3IEEuRWxlbWVudC5NSVNTSU5HKHQpKS50eXBlPXQubm9kZU5hbWUsaX0sQS5sb2FkPWZ1bmN0aW9uKHQsZSl7QS5sb2FkWG1sKHQsQS5hamF4KGUpKX0sQS5sb2FkWG1sPWZ1bmN0aW9uKHQsZSl7QS5sb2FkWG1sRG9jKHQsQS5wYXJzZVhtbChlKSl9LEEubG9hZFhtbERvYz1mdW5jdGlvbihhLHIpe0EuaW5pdChhKTt2YXIgaT1mdW5jdGlvbih0KXtmb3IodmFyIGU9YS5jYW52YXM7ZTspdC54LT1lLm9mZnNldExlZnQsdC55LT1lLm9mZnNldFRvcCxlPWUub2Zmc2V0UGFyZW50O3JldHVybiB1LnNjcm9sbFgmJih0LngrPXUuc2Nyb2xsWCksdS5zY3JvbGxZJiYodC55Kz11LnNjcm9sbFkpLHR9OzEhPUEub3B0cy5pZ25vcmVNb3VzZSYmKGEuY2FudmFzLm9uY2xpY2s9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9uY2xpY2soZS54LGUueSl9LGEuY2FudmFzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKHQpe3ZhciBlPWkobmV3IEEuUG9pbnQobnVsbCE9dD90LmNsaWVudFg6ZXZlbnQuY2xpZW50WCxudWxsIT10P3QuY2xpZW50WTpldmVudC5jbGllbnRZKSk7QS5Nb3VzZS5vbm1vdXNlbW92ZShlLngsZS55KX0pO3ZhciBvPUEuQ3JlYXRlRWxlbWVudChyLmRvY3VtZW50RWxlbWVudCk7by5yb290PSEwLG8uYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpO3ZhciBsPSEwLG49ZnVuY3Rpb24oKXtBLlZpZXdQb3J0LkNsZWFyKCksYS5jYW52YXMucGFyZW50Tm9kZT9BLlZpZXdQb3J0LlNldEN1cnJlbnQoYS5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aCxhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodCk6QS5WaWV3UG9ydC5TZXRDdXJyZW50KDgwMCw2MDApLDEhPUEub3B0cy5pZ25vcmVEaW1lbnNpb25zJiYoby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy53aWR0aD1vLnN0eWxlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUud2lkdGg9YS5jYW52YXMud2lkdGgrXCJweFwiKSksby5zdHlsZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoYS5jYW52YXMuaGVpZ2h0PW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUuaGVpZ2h0PWEuY2FudmFzLmhlaWdodCtcInB4XCIpKSk7dmFyIHQ9YS5jYW52YXMuY2xpZW50V2lkdGh8fGEuY2FudmFzLndpZHRoLGU9YS5jYW52YXMuY2xpZW50SGVpZ2h0fHxhLmNhbnZhcy5oZWlnaHQ7aWYoMT09QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJm8uc3R5bGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiZvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJih0PW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksZT1vLnN0eWxlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSksQS5WaWV3UG9ydC5TZXRDdXJyZW50KHQsZSksbnVsbCE9QS5vcHRzLm9mZnNldFgmJihvLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFgpLG51bGwhPUEub3B0cy5vZmZzZXRZJiYoby5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPUEub3B0cy5vZmZzZXRZKSxudWxsIT1BLm9wdHMuc2NhbGVXaWR0aHx8bnVsbCE9QS5vcHRzLnNjYWxlSGVpZ2h0KXt2YXIgaT1udWxsLG49bnVsbCxzPUEuVG9OdW1iZXJBcnJheShvLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpO251bGwhPUEub3B0cy5zY2FsZVdpZHRoJiYoby5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpP2k9by5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikvQS5vcHRzLnNjYWxlV2lkdGg6aXNOYU4oc1syXSl8fChpPXNbMl0vQS5vcHRzLnNjYWxlV2lkdGgpKSxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQmJihvLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpP249by5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpL0Eub3B0cy5zY2FsZUhlaWdodDppc05hTihzWzNdKXx8KG49c1szXS9BLm9wdHMuc2NhbGVIZWlnaHQpKSxudWxsPT1pJiYoaT1uKSxudWxsPT1uJiYobj1pKSxvLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPUEub3B0cy5zY2FsZVdpZHRoLG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIsITApLnZhbHVlPUEub3B0cy5zY2FsZUhlaWdodCxvLnN0eWxlKFwidHJhbnNmb3JtXCIsITAsITApLnZhbHVlKz1cIiBzY2FsZShcIisxL2krXCIsXCIrMS9uK1wiKVwifTEhPUEub3B0cy5pZ25vcmVDbGVhciYmYS5jbGVhclJlY3QoMCwwLHQsZSksby5yZW5kZXIoYSksbCYmKGw9ITEsXCJmdW5jdGlvblwiPT10eXBlb2YgQS5vcHRzLnJlbmRlckNhbGxiYWNrJiZBLm9wdHMucmVuZGVyQ2FsbGJhY2socikpfSxzPSEwO0EuSW1hZ2VzTG9hZGVkKCkmJihzPSExLG4oKSksQS5pbnRlcnZhbElEPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIHQ9ITE7aWYocyYmQS5JbWFnZXNMb2FkZWQoKSYmKHQ9IShzPSExKSksMSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYodHw9QS5Nb3VzZS5oYXNFdmVudHMoKSksMSE9QS5vcHRzLmlnbm9yZUFuaW1hdGlvbilmb3IodmFyIGU9MDtlPEEuQW5pbWF0aW9ucy5sZW5ndGg7ZSsrKXR8PUEuQW5pbWF0aW9uc1tlXS51cGRhdGUoMWUzL0EuRlJBTUVSQVRFKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMuZm9yY2VSZWRyYXcmJjE9PUEub3B0cy5mb3JjZVJlZHJhdygpJiYodD0hMCksdCYmKG4oKSxBLk1vdXNlLnJ1bkV2ZW50cygpKX0sMWUzL0EuRlJBTUVSQVRFKX0sQS5zdG9wPWZ1bmN0aW9uKCl7QS5pbnRlcnZhbElEJiZjbGVhckludGVydmFsKEEuaW50ZXJ2YWxJRCl9LEEuTW91c2U9bmV3IGZ1bmN0aW9uKCl7dGhpcy5ldmVudHM9W10sdGhpcy5oYXNFdmVudHM9ZnVuY3Rpb24oKXtyZXR1cm4gMCE9dGhpcy5ldmVudHMubGVuZ3RofSx0aGlzLm9uY2xpY2s9ZnVuY3Rpb24odCxlKXt0aGlzLmV2ZW50cy5wdXNoKHt0eXBlOlwib25jbGlja1wiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25jbGljayYmdC5vbmNsaWNrKCl9fSl9LHRoaXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCxlKXt0aGlzLmV2ZW50cy5wdXNoKHt0eXBlOlwib25tb3VzZW1vdmVcIix4OnQseTplLHJ1bjpmdW5jdGlvbih0KXt0Lm9ubW91c2Vtb3ZlJiZ0Lm9ubW91c2Vtb3ZlKCl9fSl9LHRoaXMuZXZlbnRFbGVtZW50cz1bXSx0aGlzLmNoZWNrUGF0aD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5QYXRoJiZlLmlzUG9pbnRJblBhdGgobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLmNoZWNrQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluQm94KG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5ydW5FdmVudHM9ZnVuY3Rpb24oKXtBLmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwiXCI7Zm9yKHZhciB0PTA7dDx0aGlzLmV2ZW50cy5sZW5ndGg7dCsrKWZvcih2YXIgZT10aGlzLmV2ZW50c1t0XSxpPXRoaXMuZXZlbnRFbGVtZW50c1t0XTtpOyllLnJ1bihpKSxpPWkucGFyZW50O3RoaXMuZXZlbnRzPVtdLHRoaXMuZXZlbnRFbGVtZW50cz1bXX19LEF9KGl8fHt9KTtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpLG51bGwhPXQuc3ZnJiZ0LnN2Zy5zdG9wKCksdC5jaGlsZE5vZGVzJiYxPT10LmNoaWxkTm9kZXMubGVuZ3RoJiZcIk9CSkVDVFwiPT10LmNoaWxkTm9kZXNbMF0ubm9kZU5hbWV8fCh0LnN2Zz1uKTt2YXIgcz10LmdldENvbnRleHQoXCIyZFwiKTt2b2lkIDAhPT1lLmRvY3VtZW50RWxlbWVudD9uLmxvYWRYbWxEb2MocyxlKTpcIjxcIj09ZS5zdWJzdHIoMCwxKT9uLmxvYWRYbWwocyxlKTpuLmxvYWQocyxlKX1lbHNlIGZvcih2YXIgYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3ZnXCIpLHI9MDtyPGEubGVuZ3RoO3IrKyl7dmFyIG89YVtyXSxsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7bC53aWR0aD1vLmNsaWVudFdpZHRoLGwuaGVpZ2h0PW8uY2xpZW50SGVpZ2h0LG8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobCxvKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyk7dmFyIGg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtoLmFwcGVuZENoaWxkKG8pLGMobCxoLmlubmVySFRNTCl9fTtcInVuZGVmaW5lZFwiPT10eXBlb2YgRWxlbWVudHx8KHZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXM/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1hdGNoZXMoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1vek1hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm1zTWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5vTWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5vTWF0Y2hlc1NlbGVjdG9yKGUpfTooXCJmdW5jdGlvblwiIT10eXBlb2YgalF1ZXJ5JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBaZXB0b3x8KGY9ZnVuY3Rpb24odCxlKXtyZXR1cm4gJCh0KS5pcyhlKX0pLHZvaWQgMD09PWYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTaXp6bGUmJihmPVNpenpsZS5tYXRjaGVzU2VsZWN0b3IpKSk7dmFyIGU9LyhcXFtbXlxcXV0rXFxdKS9nLGk9LygjW15cXHNcXCs+flxcLlxcWzpdKykvZyxhPS8oXFwuW15cXHNcXCs+flxcLlxcWzpdKykvZyxyPS8oOjpbXlxcc1xcKz5+XFwuXFxbOl0rfDpmaXJzdC1saW5lfDpmaXJzdC1sZXR0ZXJ8OmJlZm9yZXw6YWZ0ZXIpL2dpLG89Lyg6W1xcdy1dK1xcKFteXFwpXSpcXCkpL2dpLGw9Lyg6W15cXHNcXCs+flxcLlxcWzpdKykvZyxoPS8oW15cXHNcXCs+flxcLlxcWzpdKykvZztmdW5jdGlvbiB3KG4pe3ZhciBzPVswLDAsMF0sdD1mdW5jdGlvbih0LGUpe3ZhciBpPW4ubWF0Y2godCk7bnVsbCE9aSYmKHNbZV0rPWkubGVuZ3RoLG49bi5yZXBsYWNlKHQsXCIgXCIpKX07cmV0dXJuIG49KG49bi5yZXBsYWNlKC86bm90XFwoKFteXFwpXSopXFwpL2csXCIgICAgICQxIFwiKSkucmVwbGFjZSgve1tcXHNcXFNdKi9nbSxcIiBcIiksdChlLDEpLHQoaSwwKSx0KGEsMSksdChyLDIpLHQobywxKSx0KGwsMSksbj0obj1uLnJlcGxhY2UoL1tcXCpcXHNcXCs+fl0vZyxcIiBcIikpLnJlcGxhY2UoL1sjXFwuXS9nLFwiIFwiKSx0KGgsMikscy5qb2luKFwiXCIpfVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmRyYXdTdmc9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPXtpZ25vcmVNb3VzZTohMCxpZ25vcmVBbmltYXRpb246ITAsaWdub3JlRGltZW5zaW9uczohMCxpZ25vcmVDbGVhcjohMCxvZmZzZXRYOmUsb2Zmc2V0WTppLHNjYWxlV2lkdGg6bixzY2FsZUhlaWdodDpzfTtmb3IodmFyIG8gaW4gYSlhLmhhc093blByb3BlcnR5KG8pJiYocltvXT1hW29dKTtjKHRoaXMuY2FudmFzLHQscil9KSx0LmV4cG9ydHM9Y30odD17ZXhwb3J0czp7fX0sdC5leHBvcnRzKSx0LmV4cG9ydHN9KTsiLCIvKlxuXHRCYXNlZCBvbiByZ2Jjb2xvci5qcyBieSBTdG95YW4gU3RlZmFub3YgPHNzdG9vQGdtYWlsLmNvbT5cblx0aHR0cDovL3d3dy5waHBpZWQuY29tL3JnYi1jb2xvci1wYXJzZXItaW4tamF2YXNjcmlwdC9cbiovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29sb3Jfc3RyaW5nKSB7XG4gICAgdGhpcy5vayA9IGZhbHNlO1xuICAgIHRoaXMuYWxwaGEgPSAxLjA7XG5cbiAgICAvLyBzdHJpcCBhbnkgbGVhZGluZyAjXG4gICAgaWYgKGNvbG9yX3N0cmluZy5jaGFyQXQoMCkgPT0gJyMnKSB7IC8vIHJlbW92ZSAjIGlmIGFueVxuICAgICAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcuc3Vic3RyKDEsNik7XG4gICAgfVxuXG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnJlcGxhY2UoLyAvZywnJyk7XG4gICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBiZWZvcmUgZ2V0dGluZyBpbnRvIHJlZ2V4cHMsIHRyeSBzaW1wbGUgbWF0Y2hlc1xuICAgIC8vIGFuZCBvdmVyd3JpdGUgdGhlIGlucHV0XG4gICAgdmFyIHNpbXBsZV9jb2xvcnMgPSB7XG4gICAgICAgIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gICAgICAgIGFxdWE6ICcwMGZmZmYnLFxuICAgICAgICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICdmMGZmZmYnLFxuICAgICAgICBiZWlnZTogJ2Y1ZjVkYycsXG4gICAgICAgIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnMDAwMDAwJyxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICAgICAgICBibHVlOiAnMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gICAgICAgIGJyb3duOiAnYTUyYTJhJyxcbiAgICAgICAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgICAgICAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gICAgICAgIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnZmY3ZjUwJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICAgICAgICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gICAgICAgIGNyaW1zb246ICdkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnMDBmZmZmJyxcbiAgICAgICAgZGFya2JsdWU6ICcwMDAwOGInLFxuICAgICAgICBkYXJrY3lhbjogJzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICAgICAgICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gICAgICAgIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gICAgICAgIGRhcmtraGFraTogJ2JkYjc2YicsXG4gICAgICAgIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgICAgICAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgICAgICAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gICAgICAgIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgICAgICAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgICAgICAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgICAgICAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gICAgICAgIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICAgICAgICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgICAgICAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gICAgICAgIGZlbGRzcGFyOiAnZDE5Mjc1JyxcbiAgICAgICAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgICAgICAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICAgICAgICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICAgICAgICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICAgICAgICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJ2ZmZDcwMCcsXG4gICAgICAgIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gICAgICAgIGdyYXk6ICc4MDgwODAnLFxuICAgICAgICBncmVlbjogJzAwODAwMCcsXG4gICAgICAgIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgICAgICAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICAgICAgICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkIDogJ2NkNWM1YycsXG4gICAgICAgIGluZGlnbyA6ICc0YjAwODInLFxuICAgICAgICBpdm9yeTogJ2ZmZmZmMCcsXG4gICAgICAgIGtoYWtpOiAnZjBlNjhjJyxcbiAgICAgICAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICAgICAgICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgICAgICAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgICAgICAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gICAgICAgIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gICAgICAgIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgICAgICAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gICAgICAgIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgICAgICAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gICAgICAgIGxpZ2h0c2xhdGVibHVlOiAnODQ3MGZmJyxcbiAgICAgICAgbGlnaHRzbGF0ZWdyYXk6ICc3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgICAgICAgbGltZTogJzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJzMyY2QzMicsXG4gICAgICAgIGxpbmVuOiAnZmFmMGU2JyxcbiAgICAgICAgbWFnZW50YTogJ2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJzgwMDAwMCcsXG4gICAgICAgIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgICAgICAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgICAgICAgbWVkaXVtcHVycGxlOiAnOTM3MGQ4JyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICAgICAgICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gICAgICAgIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gICAgICAgIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gICAgICAgIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gICAgICAgIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICAgICAgICBuYXZ5OiAnMDAwMDgwJyxcbiAgICAgICAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnODA4MDAwJyxcbiAgICAgICAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgICAgICAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgICAgICAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgICAgICAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gICAgICAgIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICAgICAgICBwYWxldmlvbGV0cmVkOiAnZDg3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gICAgICAgIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gICAgICAgIHBlcnU6ICdjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnZmZjMGNiJyxcbiAgICAgICAgcGx1bTogJ2RkYTBkZCcsXG4gICAgICAgIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICc4MDAwODAnLFxuICAgICAgICByZWJlY2NhcHVycGxlOiAnNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnZmYwMDAwJyxcbiAgICAgICAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgICAgICAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICAgICAgICBzYWxtb246ICdmYTgwNzInLFxuICAgICAgICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICAgICAgICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gICAgICAgIHNpZW5uYTogJ2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJ2MwYzBjMCcsXG4gICAgICAgIHNreWJsdWU6ICc4N2NlZWInLFxuICAgICAgICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICAgICAgICBzbm93OiAnZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICAgICAgICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICAgICAgICB0YW46ICdkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnMDA4MDgwJyxcbiAgICAgICAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gICAgICAgIHRvbWF0bzogJ2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gICAgICAgIHZpb2xldDogJ2VlODJlZScsXG4gICAgICAgIHZpb2xldHJlZDogJ2QwMjA5MCcsXG4gICAgICAgIHdoZWF0OiAnZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICdmZmZmZmYnLFxuICAgICAgICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgICAgICAgeWVsbG93OiAnZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG4gICAgfTtcbiAgICBjb2xvcl9zdHJpbmcgPSBzaW1wbGVfY29sb3JzW2NvbG9yX3N0cmluZ10gfHwgY29sb3Jfc3RyaW5nO1xuICAgIC8vIGVtZCBvZiBzaW1wbGUgdHlwZS1pbiBjb2xvcnNcblxuICAgIC8vIGFycmF5IG9mIGNvbG9yIGRlZmluaXRpb24gb2JqZWN0c1xuICAgIHZhciBjb2xvcl9kZWZzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JhXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKCg/OlxcZD9cXC4pP1xcZClcXCkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsncmdiYSgxMjMsIDIzNCwgNDUsIDAuOCknLCAncmdiYSgyNTUsMjM0LDI0NSwxLjApJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChiaXRzWzRdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYlxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSlcXCkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsncmdiKDEyMywgMjM0LCA0NSknLCAncmdiKDI1NSwyMzQsMjQ1KSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnIzAwZmYwMCcsICczMzY2OTknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyNmYjAnLCAnZjBmJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSArIGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSArIGJpdHNbMl0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSArIGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgLy8gc2VhcmNoIHRocm91Z2ggdGhlIGRlZmluaXRpb25zIHRvIGZpbmQgYSBtYXRjaFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3JfZGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmUgPSBjb2xvcl9kZWZzW2ldLnJlO1xuICAgICAgICB2YXIgcHJvY2Vzc29yID0gY29sb3JfZGVmc1tpXS5wcm9jZXNzO1xuICAgICAgICB2YXIgYml0cyA9IHJlLmV4ZWMoY29sb3Jfc3RyaW5nKTtcbiAgICAgICAgaWYgKGJpdHMpIHtcbiAgICAgICAgICAgIHZhciBjaGFubmVscyA9IHByb2Nlc3NvcihiaXRzKTtcbiAgICAgICAgICAgIHRoaXMuciA9IGNoYW5uZWxzWzBdO1xuICAgICAgICAgICAgdGhpcy5nID0gY2hhbm5lbHNbMV07XG4gICAgICAgICAgICB0aGlzLmIgPSBjaGFubmVsc1syXTtcbiAgICAgICAgICAgIGlmIChjaGFubmVscy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbHBoYSA9IGNoYW5uZWxzWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5vayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIHZhbGlkYXRlL2NsZWFudXAgdmFsdWVzXG4gICAgdGhpcy5yID0gKHRoaXMuciA8IDAgfHwgaXNOYU4odGhpcy5yKSkgPyAwIDogKCh0aGlzLnIgPiAyNTUpID8gMjU1IDogdGhpcy5yKTtcbiAgICB0aGlzLmcgPSAodGhpcy5nIDwgMCB8fCBpc05hTih0aGlzLmcpKSA/IDAgOiAoKHRoaXMuZyA+IDI1NSkgPyAyNTUgOiB0aGlzLmcpO1xuICAgIHRoaXMuYiA9ICh0aGlzLmIgPCAwIHx8IGlzTmFOKHRoaXMuYikpID8gMCA6ICgodGhpcy5iID4gMjU1KSA/IDI1NSA6IHRoaXMuYik7XG4gICAgdGhpcy5hbHBoYSA9ICh0aGlzLmFscGhhIDwgMCkgPyAwIDogKCh0aGlzLmFscGhhID4gMS4wIHx8IGlzTmFOKHRoaXMuYWxwaGEpKSA/IDEuMCA6IHRoaXMuYWxwaGEpO1xuXG4gICAgLy8gc29tZSBnZXR0ZXJzXG4gICAgdGhpcy50b1JHQiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdyZ2IoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJyknO1xuICAgIH1cbiAgICB0aGlzLnRvUkdCQSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcsICcgKyB0aGlzLmFscGhhICsgJyknO1xuICAgIH1cbiAgICB0aGlzLnRvSGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgciA9IHRoaXMuci50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBnID0gdGhpcy5nLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGIgPSB0aGlzLmIudG9TdHJpbmcoMTYpO1xuICAgICAgICBpZiAoci5sZW5ndGggPT0gMSkgciA9ICcwJyArIHI7XG4gICAgICAgIGlmIChnLmxlbmd0aCA9PSAxKSBnID0gJzAnICsgZztcbiAgICAgICAgaWYgKGIubGVuZ3RoID09IDEpIGIgPSAnMCcgKyBiO1xuICAgICAgICByZXR1cm4gJyMnICsgciArIGcgKyBiO1xuICAgIH1cblxuICAgIC8vIGhlbHBcbiAgICB0aGlzLmdldEhlbHBYTUwgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGV4YW1wbGVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIC8vIGFkZCByZWdleHBzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sb3JfZGVmcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGV4YW1wbGUgPSBjb2xvcl9kZWZzW2ldLmV4YW1wbGU7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV4YW1wbGUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gZXhhbXBsZVtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgdHlwZS1pbiBjb2xvcnNcbiAgICAgICAgZm9yICh2YXIgc2MgaW4gc2ltcGxlX2NvbG9ycykge1xuICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IHNjO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHhtbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHhtbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JnYmNvbG9yLWV4YW1wbGVzJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhhbXBsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfY29sb3IgPSBuZXcgUkdCQ29sb3IoZXhhbXBsZXNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBleGFtcGxlX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbjogM3B4OyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdib3JkZXI6IDFweCBzb2xpZCBibGFjazsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYmFja2dyb3VuZDonICsgbGlzdF9jb2xvci50b0hleCgpICsgJzsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnY29sb3I6JyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgndGVzdCcpKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtX3ZhbHVlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXG4gICAgICAgICAgICAgICAgICAgICcgJyArIGV4YW1wbGVzW2ldICsgJyAtPiAnICsgbGlzdF9jb2xvci50b1JHQigpICsgJyAtPiAnICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQoZXhhbXBsZV9kaXYpO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChsaXN0X2l0ZW1fdmFsdWUpO1xuICAgICAgICAgICAgICAgIHhtbC5hcHBlbmRDaGlsZChsaXN0X2l0ZW0pO1xuXG4gICAgICAgICAgICB9IGNhdGNoKGUpe31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geG1sO1xuXG4gICAgfVxuXG59XG4iLCIvKlxuICAgIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXG5cbiAgICBWZXJzaW9uOiAgICAgMC41XG4gICAgQXV0aG9yOiAgICAgICAgTWFyaW8gS2xpbmdlbWFublxuICAgIENvbnRhY3Q6ICAgICBtYXJpb0BxdWFzaW1vbmRvLmNvbVxuICAgIFdlYnNpdGU6ICAgIGh0dHA6Ly93d3cucXVhc2ltb25kby5jb20vU3RhY2tCbHVyRm9yQ2FudmFzXG4gICAgVHdpdHRlcjogICAgQHF1YXNpbW9uZG9cblxuICAgIEluIGNhc2UgeW91IGZpbmQgdGhpcyBjbGFzcyB1c2VmdWwgLSBlc3BlY2lhbGx5IGluIGNvbW1lcmNpYWwgcHJvamVjdHMgLVxuICAgIEkgYW0gbm90IHRvdGFsbHkgdW5oYXBweSBmb3IgYSBzbWFsbCBkb25hdGlvbiB0byBteSBQYXlQYWwgYWNjb3VudFxuICAgIG1hcmlvQHF1YXNpbW9uZG8uZGVcblxuICAgIE9yIHN1cHBvcnQgbWUgb24gZmxhdHRyOlxuICAgIGh0dHBzOi8vZmxhdHRyLmNvbS90aGluZy83Mjc5MS9TdGFja0JsdXItYS1mYXN0LWFsbW9zdC1HYXVzc2lhbi1CbHVyLUVmZmVjdC1mb3ItQ2FudmFzSmF2YXNjcmlwdFxuXG4gICAgQ29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cblxuICAgIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uXG4gICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiAgICBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXRcbiAgICByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcbiAgICBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICAgIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZVxuICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXG4gICAgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG4gICAgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuICAgIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuICAgIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXG4gICAgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFRcbiAgICBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiAgICBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcbiAgICBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SXG4gICAgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICAgICovXG5cblxudmFyIG11bF90YWJsZSA9IFtcbiAgICA1MTIsNTEyLDQ1Niw1MTIsMzI4LDQ1NiwzMzUsNTEyLDQwNSwzMjgsMjcxLDQ1NiwzODgsMzM1LDI5Miw1MTIsXG4gICAgNDU0LDQwNSwzNjQsMzI4LDI5OCwyNzEsNDk2LDQ1Niw0MjAsMzg4LDM2MCwzMzUsMzEyLDI5MiwyNzMsNTEyLFxuICAgIDQ4Miw0NTQsNDI4LDQwNSwzODMsMzY0LDM0NSwzMjgsMzEyLDI5OCwyODQsMjcxLDI1OSw0OTYsNDc1LDQ1NixcbiAgICA0MzcsNDIwLDQwNCwzODgsMzc0LDM2MCwzNDcsMzM1LDMyMywzMTIsMzAyLDI5MiwyODIsMjczLDI2NSw1MTIsXG4gICAgNDk3LDQ4Miw0NjgsNDU0LDQ0MSw0MjgsNDE3LDQwNSwzOTQsMzgzLDM3MywzNjQsMzU0LDM0NSwzMzcsMzI4LFxuICAgIDMyMCwzMTIsMzA1LDI5OCwyOTEsMjg0LDI3OCwyNzEsMjY1LDI1OSw1MDcsNDk2LDQ4NSw0NzUsNDY1LDQ1NixcbiAgICA0NDYsNDM3LDQyOCw0MjAsNDEyLDQwNCwzOTYsMzg4LDM4MSwzNzQsMzY3LDM2MCwzNTQsMzQ3LDM0MSwzMzUsXG4gICAgMzI5LDMyMywzMTgsMzEyLDMwNywzMDIsMjk3LDI5MiwyODcsMjgyLDI3OCwyNzMsMjY5LDI2NSwyNjEsNTEyLFxuICAgIDUwNSw0OTcsNDg5LDQ4Miw0NzUsNDY4LDQ2MSw0NTQsNDQ3LDQ0MSw0MzUsNDI4LDQyMiw0MTcsNDExLDQwNSxcbiAgICAzOTksMzk0LDM4OSwzODMsMzc4LDM3MywzNjgsMzY0LDM1OSwzNTQsMzUwLDM0NSwzNDEsMzM3LDMzMiwzMjgsXG4gICAgMzI0LDMyMCwzMTYsMzEyLDMwOSwzMDUsMzAxLDI5OCwyOTQsMjkxLDI4NywyODQsMjgxLDI3OCwyNzQsMjcxLFxuICAgIDI2OCwyNjUsMjYyLDI1OSwyNTcsNTA3LDUwMSw0OTYsNDkxLDQ4NSw0ODAsNDc1LDQ3MCw0NjUsNDYwLDQ1NixcbiAgICA0NTEsNDQ2LDQ0Miw0MzcsNDMzLDQyOCw0MjQsNDIwLDQxNiw0MTIsNDA4LDQwNCw0MDAsMzk2LDM5MiwzODgsXG4gICAgMzg1LDM4MSwzNzcsMzc0LDM3MCwzNjcsMzYzLDM2MCwzNTcsMzU0LDM1MCwzNDcsMzQ0LDM0MSwzMzgsMzM1LFxuICAgIDMzMiwzMjksMzI2LDMyMywzMjAsMzE4LDMxNSwzMTIsMzEwLDMwNywzMDQsMzAyLDI5OSwyOTcsMjk0LDI5MixcbiAgICAyODksMjg3LDI4NSwyODIsMjgwLDI3OCwyNzUsMjczLDI3MSwyNjksMjY3LDI2NSwyNjMsMjYxLDI1OV07XG5cblxudmFyIHNoZ190YWJsZSA9IFtcbiAgICA5LCAxMSwgMTIsIDEzLCAxMywgMTQsIDE0LCAxNSwgMTUsIDE1LCAxNSwgMTYsIDE2LCAxNiwgMTYsIDE3LFxuICAgIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LFxuICAgIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAyMCwgMjAsIDIwLFxuICAgIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQgXTtcblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2UoaW1nLCBjYW52YXMsIHJhZGl1cywgYmx1ckFscGhhQ2hhbm5lbClcbntcbiAgICBpZiAodHlwZW9mKGltZykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MSW1hZ2VFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhaW1nIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB3ID0gaW1nLm5hdHVyYWxXaWR0aDtcbiAgICB2YXIgaCA9IGltZy5uYXR1cmFsSGVpZ2h0O1xuXG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FudmFzLnN0eWxlLndpZHRoICA9IHcgKyAncHgnO1xuICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICBjYW52YXMud2lkdGggPSB3O1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3LCBoKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWcsIDAsIDApO1xuXG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuXG4gICAgaWYgKGJsdXJBbHBoYUNoYW5uZWwpXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbiAgICBlbHNlXG4gICAgICAgIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xufVxuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KVxue1xuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJylcbiAgICAgICAgdmFyIGNhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KVxuICAgICAgICByZXR1cm47XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHZhciBpbWFnZURhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaW1hZ2VEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEodG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGxvY2FsIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLCBhX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSwgYV9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLCBhX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcGEsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1twKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhICE9IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSA9IHBpeGVsc1t5aSsxXSA9IHBpeGVsc1t5aSsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG4gICAgICAgICAgICBhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG4gICAgICAgICAgICBhX3N1bSArPSBhX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG4gICAgICAgIGFfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpKzNdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgICAgICBhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG4gICAgICAgICAgICBhX3N1bSArPSAoc3RhY2suYSA9IChwYSA9IHBpeGVsc1t5aSszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twKzNdID0gcGEgPSAoYV9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgaWYgKHBhID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gPSBwaXhlbHNbcCsxXSA9IHBpeGVsc1twKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuICAgICAgICAgICAgYV9zdW0gKz0gKGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSxcbiAgICAgICAgcl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSxcbiAgICAgICAgcHIsIHBnLCBwYiwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX3N1bSA9IGdfc3VtID0gYl9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWldICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSA0O1xuICAgICAgICB9XG4gICAgICAgIHl3ICs9IHdpZHRoO1xuICAgIH1cblxuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAge1xuICAgICAgICBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBCbHVyU3RhY2soKVxue1xuICAgIHRoaXMuciA9IDA7XG4gICAgdGhpcy5nID0gMDtcbiAgICB0aGlzLmIgPSAwO1xuICAgIHRoaXMuYSA9IDA7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW1hZ2U6IHByb2Nlc3NJbWFnZSxcbiAgICBjYW52YXNSR0JBOiBwcm9jZXNzQ2FudmFzUkdCQSxcbiAgICBjYW52YXNSR0I6IHByb2Nlc3NDYW52YXNSR0IsXG4gICAgaW1hZ2VEYXRhUkdCQTogcHJvY2Vzc0ltYWdlRGF0YVJHQkEsXG4gICAgaW1hZ2VEYXRhUkdCOiBwcm9jZXNzSW1hZ2VEYXRhUkdCXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiY29uc3QgYmlnSW50ID0gcmVxdWlyZSgnYmlnLWludGVnZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpZ0ludFRvU2NpTm90YXRpb24obiwgZnJhY3Rpb25EaWdpdHM9MikgeyBcblx0LyogU2NpZW50aWZpYyBub3RhdGlvbiBmb3IgQmlnSW50IG51bWJlcnMgKG5lZWRzIHNvbWUgb3B0aW1pemF0aW9uKSAqL1xuXHRjb25zdCBuU3RyID0gbi50b1N0cmluZygxMCk7XG5cdGNvbnN0IG5MZW4gPSBuU3RyLmxlbmd0aDtcblx0Y29uc3QgZnJhY3Rpb24gPSBuTGVuLTEgPCAxNiA/IG5MZW4tMSA6IDE2O1xuXHRjb25zdCBbd2hvbGVzLCBwYXJ0c10gPSBbblN0ci5zdWJzdHIoMCwxKSwgbkxlbiA+IDEgPyBuU3RyLnN1YnN0cigxLGZyYWN0aW9uKSA6IDBdO1xuXHRsZXQgbkZsb2F0ID0gcGFyc2VGbG9hdCh3aG9sZXMrJy4nK3BhcnRzKTtcblx0bkZsb2F0ID0gbkZsb2F0LnRvUHJlY2lzaW9uKCAoZnJhY3Rpb25EaWdpdHMrMSA+IHBhcnRzLmxlbmd0aCA/IDIgOiBmcmFjdGlvbkRpZ2l0cysxKSApO1xuXHRyZXR1cm4gdGV4YFxcYXBwcm94ICR7bkZsb2F0fSBcXHRpbWVzIDEwXnske25MZW4tMX19YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUJpZ0ludChtYXgpIHtcblx0cmV0dXJuIGJpZ0ludC5yYW5kQmV0d2VlbigwLG1heCk7XG59XG5cbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcblxuY29uc3QgcHJvdG9DaGFydCA9IHtcbiAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgbWFyZ2luOiB7XG4gICAgICBsZWZ0OiAxMCxcbiAgICAgIHJpZ2h0OiAxMCxcbiAgICAgIHRvcDogMTAsXG4gICAgICBib3R0b206IDEwLFxuICAgIH0sXG4gIH07XG4gIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhcnRGYWN0b3J5KG9wdHMsIHByb3RvID0gcHJvdG9DaGFydCkge1xuXG4gIGNvbnN0IGNoYXJ0ID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIG9wdHMpO1xuICBpZihvcHRzLnBhcmVudElkKSBjaGFydC5wYXJlbnQgPSBkMy5zZWxlY3QoYCMke29wdHMucGFyZW50SWR9YCk7XG4gIGVsc2UgY2hhcnQucGFyZW50ID0gZDMuc2VsZWN0KCdib2R5Jyk7XG5cbiAgY2hhcnQuc3ZnID0gY2hhcnQucGFyZW50XG4gICAgLmFwcGVuZCgnc3ZnJykubG93ZXIoKVxuICAgIC5hdHRyKCdpZCcsIGNoYXJ0LmlkIHx8ICdjaGFydCcpXG4gICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQud2lkdGggLSBjaGFydC5tYXJnaW4ucmlnaHQpXG4gICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0LmhlaWdodCAtIGNoYXJ0Lm1hcmdpbi5ib3R0b20pO1xuXG4gIGlmIChvcHRzLnN0eWxlQ2xhc3MpIGNoYXJ0LnN2Zy5hdHRyKCdjbGFzcycsIG9wdHMuc3R5bGVDbGFzcyk7XG5cbiAgLy8gaWYgKG9wdHMuZHJhd0JhY2tncm91bmQpIFxuICBjaGFydC5zdmcuYXBwZW5kKCdyZWN0JylcbiAgICAuYXR0cignaWQnLCAnYmFja2dyb3VuZCcpXG4gICAgLmF0dHIoJ3dpZHRoJywnMTAwJScpLmF0dHIoJ2hlaWdodCcsJzEwMCUnKVxuICAgIC5hdHRyKCdmaWxsJywgKG9wdHMuZHJhd0JhY2tncm91bmQgPyAnI2ZmZmZmZicgOiAnbm9uZScpKTsgXG4gICAgLy8gLmF0dHIoJ2ZpbGwnLCAncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gIGNoYXJ0LmNvbnRhaW5lciA9IGNoYXJ0LnN2Zy5hcHBlbmQoJ2cnKVxuICAgIC5hdHRyKCdpZCcsICdjb250YWluZXInKVxuICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7Y2hhcnQubWFyZ2luLmxlZnR9LCAke2NoYXJ0Lm1hcmdpbi50b3B9KWApO1xuXG4gIHJldHVybiBjaGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpdENoYXJ0KGNoYXJ0LCBwYWRkaW5nKSB7XG4gIC8vIGNhbGN1bGF0ZSByZWFsIGRpbWVuc2lvbnMgb2YgYSBjaGFydCAoYXNzdW1lcyBjaGFydCBpcyBhIGctZWxlbWVudCB3cmFwcGVkIGluc2lkZSBhbiBzdmcpXG4gIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbiAgICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBwYWRkaW5nLmxlZnQgKyBwYWRkaW5nLnJpZ2h0KVxuICAgICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0ICsgcGFkZGluZy50b3AgKyBwYWRkaW5nLmJvdHRvbSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWFsRGVwdGgoZCkge1xuICAvLyBjYWxjdWxhdGVzIHRoZSByZWFsIGRlcHRoIG9mIGEgRk9STSBieSBzdWJ0cmFjdGluZyB1bm1hcmtlZCBhbmQgb3BlbiByZUVudHJ5IEZPUk1zXG4gIGNvbnN0IGdob3N0cyA9IGQuYW5jZXN0b3JzKClcbiAgICAgIC5maWx0ZXIoZSA9PiAoZS5kYXRhLnR5cGUgPT09ICdmb3JtJyAmJiBlLmRhdGEudW5tYXJrZWQgfHwgXG4gICAgICAgICAgICAgICAgZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JyAmJiBlLmRhdGEubGFzdE9wZW4pKS5sZW5ndGg7XG4gIHJldHVybiBkLmRlcHRoIC0gZ2hvc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFN1YnNjcmlwdCh0ZXh0KSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0ID0gKHR5cGVvZih0ZXh0KGQpKSA9PT0gJ3N0cmluZycpID8gdGV4dChkKS5zcGxpdCgnXycpIDogJyc7XG5cbiAgICAgICAgLy8gaWYgKHNwbGl0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gICBzcGxpdC5mb3JFYWNoKChwYXJ0LGkpID0+IHtcblxuICAgICAgICAvLyAgICAgY29uc3QgZWxlbSA9IGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgLy8gICAgICAgLnRleHQoZCA9PiBwYXJ0KTtcblxuICAgICAgICAvLyAgICAgaWYgKGklMj09PTEpIGVsZW1cbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgLy8gICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcuOGVtJyk7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMF0pO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFsxXSlcbiAgICAgICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgICAgICAuYXR0cignZHknLCA2KVxuICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgLnRleHQodGV4dChkKSk7XG4gICAgICAgIH1cblxuICAgIH0pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U2l6ZSh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLyogU291cmNlOiBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9odXl0ZC8zMjdlNDUzYzk1Y2EzZWRhZGIzMmQwYzg2N2UyNTYxYiBcbiAgQ3JlZGl0cyB0bzogSHV5IFRyLiAqL1xuICBpZiAoIWQzKSByZXR1cm47XG4gIHZhciBjb250YWluZXIgPSBkMy5zZWxlY3QoJ2JvZHknKS5hcHBlbmQoJ3N2ZycpO1xuICBjb250YWluZXIuYXBwZW5kKCd0ZXh0JylcbiAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKVxuICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAuYXR0cigneCcsJy05OTk5JykuYXR0cigneScsJy05OTk5JylcbiAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KCgpID0+IHRleHQpKTsgLy8gLnRleHQodGV4dCk7XG4gIHZhciBzaXplID0gY29udGFpbmVyLm5vZGUoKS5nZXRCQm94KCk7XG4gIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgcmV0dXJuIHsgd2lkdGg6IHNpemUud2lkdGgsIGhlaWdodDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wYWNpdHkoY29sb3IsIGFscGhhKSB7XG4gIGNvbnN0IGNvbG9yQ29weSA9IGQzLmNvbG9yKGNvbG9yKTtcbmNvbG9yQ29weS5vcGFjaXR5ID0gYWxwaGE7XG5yZXR1cm4gY29sb3JDb3B5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlUmVtYWluZGVyKG51bSwgX2Rlbikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgc2lnbiA9IDE7XG4gIGxldCBkZW4gPSBNYXRoLnJvdW5kKF9kZW4pO1xuICBsZXQgY2FuZGlkYXRlID0gZGVuO1xuICB3aGlsZSAobnVtICUgZGVuID4gMC4zKSB7XG4gICAgICBjYW5kaWRhdGUgKz0gc2lnbiAqIDAuMDAxO1xuICAgICAgaWYgKG51bSVjYW5kaWRhdGUgPCBudW0lZGVuKSBkZW4gPSBjYW5kaWRhdGU7XG5cbiAgICAgIGlmKGNvdW50ID49IDUwMDApIHtcbiAgICAgICAgICBjYW5kaWRhdGUgPSBNYXRoLnJvdW5kKF9kZW4pO1xuICAgICAgICAgIHNpZ24gPSAtMTtcbiAgICAgIH1cbiAgICAgIGlmKGNvdW50ID49IDEwMDAwKSBicmVhaztcbiAgICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGRlbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjYWxjQ2lyY2xlRGFzaChyLCB1bml0LCBmcmFjdGlvbikge1xuICBjb25zdCBjaXJjID0gTWF0aC5QSSoyICogcjtcbiAgcmV0dXJuIHJlZHVjZVJlbWFpbmRlcihjaXJjLCB1bml0KSAqIGZyYWN0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZURhc2hBcnJheShyLCB1bml0LCBmcmFjdGlvbnMpIHtcbiAgbGV0IHN0ciA9ICcnO1xuICBmb3IgKGxldCBpIGluIGZyYWN0aW9ucykge1xuICAgICAgc3RyID0gc3RyLmNvbmNhdChgJHsgY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb25zW2ldKSB9cHggYCk7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNpcmNsZUxhYmVsKHRleHQsIGZvbnRTaXplPSdpbmhlcml0JywgZm9udEZhbWlseT0naW5oZXJpdCcsIGZvbnRTdHlsZT0nbm9ybWFsJykge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuXG4gICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgICBjb25zdCB0ZXh0U3ogPSB0ZXh0U2l6ZSh0ZXh0KGQpLCBmb250U2l6ZSwgZm9udEZhbWlseSk7XG4gICAgICAgICAgY29uc3QgbWFyZ2luID0gNTA7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgZm9udFN0eWxlKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgZm9udEZhbWlseSlcbiAgICAgICAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgICAgICAudGV4dChkID0+IHRleHQoZCkpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyID49IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIGluc2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgLSB0ZXh0U3ouaGVpZ2h0KjAuNSApXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2Jhc2VsaW5lJyk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPCB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBvdXRzaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciArIDQpXG4gICAgICAgICAgICAgIC5hdHRyKCdkb21pbmFudC1iYXNlbGluZScsJ2hhbmdpbmcnKTtcblxuICAgICAgfSk7XG4gIH07XG59IiwiaW1wb3J0ICogYXMgY2FudmcgZnJvbSAnY2FudmcnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGpRdWVyeSByZXBsYWNlbWVudHM6XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBzaG93KGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgLy8gZWxlbS5jbGFzc0xpc3QuYWRkKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgaGlkZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHRvZ2dsZShlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgcmV0dXJuICggIWVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSApO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogcGFkcyAwcyBiZWZvcmUgbnVtYmVyIHN0cmluZ1xuICAgICAgIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5OTg4MjJcbiAgICAgICBDcmVkaXRzIHRvOiBJbmZpbml0aWVzTG9vcCAqL1xuXG4gICAgdmFyIHMgPSBudW0rXCJcIjsgLy8gY29udmVydHMgbnVtYmVyIHRvIHN0cmluZyBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSBcIjBcIiArIHM7XG4gICAgcmV0dXJuIHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlU3ZnKHN2Z0VsLCBuYW1lKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDY0MDM1ODlcbiAgICBDcmVkaXRzIHRvOiBkZWZnaGkxOTc3LCBEYXZlVGhlU2NpZW50aXN0LCBzZW56ICovXG4gICAgc3ZnRWwuc2V0QXR0cmlidXRlKFwieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiKTtcbiAgICB2YXIgc3ZnRGF0YSA9IHN2Z0VsLm91dGVySFRNTDtcbiAgICB2YXIgcHJlZmFjZSA9ICc8P3htbCB2ZXJzaW9uPVwiMS4wXCIgc3RhbmRhbG9uZT1cIm5vXCI/Plxcclxcbic7XG4gICAgdmFyIHN2Z0Jsb2IgPSBuZXcgQmxvYihbcHJlZmFjZSwgc3ZnRGF0YV0sIHt0eXBlOlwiaW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0Zi04XCJ9KTtcbiAgICB2YXIgc3ZnVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChzdmdCbG9iKTtcbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBzdmdVcmw7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVJbWcoc3ZnLCBuYW1lLCBzY2FsZT0xKSB7ICAgIFxuICAgIC8qIFVzaW5nIGNhbnZnIGxpYi4gaHR0cHM6Ly9naXRodWIuY29tL2NhbnZnL2NhbnZnIGFuZCBwYXJ0cyBvZiB0aGUgYXBwcm9hY2ggZm9yIHNhdmVTdmcuXG4gICAgVGhhbmtzIHRvIGpiZWFyZDQgaW46IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTc2MDM0LzEyMDQwNDcgZm9yIHRoZSBzdWdnZXN0aW9uICovXG5cbiAgICBjb25zdCB3ID0gc3ZnLmdldEJCb3goKS53aWR0aDtcbiAgICBjb25zdCBoID0gc3ZnLmdldEJCb3goKS5oZWlnaHQ7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2lkJywnZHJhd2luZ0FyZWEnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgY2FudmFzLndpZHRoID0gdyAqIHNjYWxlO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoICogc2NhbGU7XG5cbiAgICBjYW52Zyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSwgc3ZnLm91dGVySFRNTCwgeyBpZ25vcmVEaW1lbnNpb25zOnRydWUsIGlnbm9yZU1vdXNlOiB0cnVlLCBpZ25vcmVBbmltYXRpb246IHRydWUsXG4gICAgc2NhbGVXaWR0aDogdyAqIHNjYWxlLFxuICAgIHNjYWxlSGVpZ2h0OiBoICogc2NhbGUgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyggZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdBcmVhJykgKTtcblxuICAgIGNvbnN0IGltZ1VybCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9wbmdcIik7XG5cbiAgICB2YXIgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZG93bmxvYWRMaW5rLmhyZWYgPSBpbWdVcmw7XG4gICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gbmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoZm9ybWF0LCBzdmcsIG5hbWUsIHNjYWxlKSB7XG4gICAgLy8gZXhwb3J0cyBncmFwaHMgaW50byBzdmdcbiAgICBcbiAgICBuYW1lID0gbmFtZSB8fMKgc3ZnLnBhcmVudE5vZGUuaWQ7XG4gICAgY29uc3QgdGltZXN0YW1wID0gZ2V0VGltZXN0YW1wKCk7XG5cblx0dHJ5IHtcbiAgICBzd2l0Y2goZm9ybWF0KSB7XG4gICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICBzYXZlU3ZnKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycuc3ZnJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICBzYXZlSW1nKHN2ZywgdGltZXN0YW1wKydfJytuYW1lKycucG5nJywgc2NhbGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXHR9IGNhdGNoKGUpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlKG8sZnVuYykge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzcyMjY2OC90cmF2ZXJzZS1hbGwtdGhlLW5vZGVzLW9mLWEtanNvbi1vYmplY3QtdHJlZS13aXRoLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogVGhlSGlwcG8gKi9cbiAgICBmb3IgKHZhciBpIGluIG8pIHtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLFtpLG9baV1dKTsgIC8vIG51bGwgb3IgdGhpcz9cbiAgICAgICAgaWYgKG9baV0gIT09IG51bGwgJiYgdHlwZW9mKG9baV0pPT1cIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvL2dvaW5nIG9uZSBzdGVwIGRvd24gaW4gdGhlIG9iamVjdCB0cmVlISFcbiAgICAgICAgICAgIHRyYXZlcnNlKG9baV0sZnVuYyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGwgPSBmdW5jdGlvbihmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cblN0cmluZy5wcm90b3R5cGUuYWRkQmVmb3JlPWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBzdGFydDEsIHN0b3AxLCBzdGFydDIsIHN0b3AyKSB7XG4gICAgLy8gUHJvY2Vzc2luZy1saWtlIG1hcCBmdW5jdGlvblxuICAgIHJldHVybiBzdGFydDIgKyAoc3RvcDIgLSBzdGFydDIpICogKCh2YWx1ZSAtIHN0YXJ0MSkgLyAoc3RvcDEgLSBzdGFydDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQXQ9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCArIHJlcGxhY2VtZW50Lmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lc3RhbXAoKSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICByZXR1cm4gKCcnXG4gICAgKyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkpLnN1YnN0cigyKSBcbiAgICArIChwYWQoKGRhdGUuZ2V0VVRDTW9udGgoKSsxKSwyKSkgXG4gICAgKyAocGFkKGRhdGUuZ2V0VVRDRGF0ZSgpLDIpKSArICctJ1xuICAgICsgKHBhZCgoZGF0ZS5nZXRIb3VycygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0TWludXRlcygpKSwyKSlcbiAgICArIChwYWQoKGRhdGUuZ2V0U2Vjb25kcygpKSwyKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZVNWRyhzdmcsIGNvbnRhaW5lciwgcmF0aW8pIHtcbiAgICBjb25zdCBwcmVmaXhlcyA9IFsnLW1zLXRyYW5zZm9ybScsJy13ZWJraXQtdHJhbnNmb3JtJywnLW1vei10cmFuc2Zvcm0nLCctby10cmFuc2Zvcm0nLCd0cmFuc2Zvcm0nXTtcbiAgICBwcmVmaXhlcy5mb3JFYWNoKHByZWZpeCA9PiB7XG4gICAgICAgIHN2Zy5zdHlsZVtwcmVmaXhdID0gYHNjYWxlKCR7cmF0aW99KSB0cmFuc2xhdGUoMCwwKWA7XG4gICAgfSk7XG4gICAgLy8gY29udGFpbmVyLnN0eWxlLndpZHRoID0gcGFyc2VJbnQoc3ZnLmdldEJCb3goKS53aWR0aCAqIHJhdGlvKSArICdweCc7XG4gICAgLy8gY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHN2Zy5nZXRCQm94KCkuaGVpZ2h0ICogcmF0aW8pICsgJ3B4JztcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBzdmcuZ2V0QkJveCgpLndpZHRoICogcmF0aW8gKyAncHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBzdmcuZ2V0QkJveCgpLmhlaWdodCAqIHJhdGlvICsgJ3B4Jztcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHBlcm11dGVBcnJheSA9IGlucHV0QXJyYXkgPT4gaW5wdXRBcnJheS5yZWR1Y2UoZnVuY3Rpb24gcGVybXV0ZShyZXMsIGl0ZW0sIGtleSwgYXJyKSB7XG4gIC8qIFBlcm11dGF0aW9uIGFsZ29yaXRobSBmb3IgYXJyYXlzIG9mIGFyYml0cmFyeSBsZW5ndGhcbiAgICAgKGNyZWRpdHMgJiB0aGFua3MgdG8gdXNlciBtb25rZXk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA2MzQ0MCkgKi9cbiAgICByZXR1cm4gcmVzLmNvbmNhdChhcnIubGVuZ3RoID4gMSAmJiBhcnIuc2xpY2UoMCwga2V5KVxuICAgICAgLmNvbmNhdChhcnIuc2xpY2Uoa2V5ICsgMSkpXG4gICAgICAucmVkdWNlKHBlcm11dGUsIFtdKVxuICAgICAgLm1hcChmdW5jdGlvbihwZXJtKSB7IHJldHVybiBbaXRlbV0uY29uY2F0KHBlcm0pOyB9KSB8fCBbW2l0ZW1dXSk7XG59LCBbXSk7XG5cbmV4cG9ydCBjb25zdCB0cnVuY2F0ZVN0ciA9IChzdHIsbGltaXQsYXBwZW5kaXg9JycpID0+IHN0ci5sZW5ndGggPiBsaW1pdCA/IChzdHIuc3Vic3RyKDAsbGltaXQpICsgYXBwZW5kaXgpIDogc3RyO1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZU1hcHBpbmcgPSAobyxiaWplY3RpdmU9ZmFsc2UpID0+IE9iamVjdC5rZXlzKG8pLnJlZHVjZSgociwgaykgPT4gT2JqZWN0LmFzc2lnbihyLCB7IFtvW2tdXTogKGJpamVjdGl2ZSA/IGsgOiAocltvW2tdXSB8fCBbXSkuY29uY2F0KGspKSB9KSwge30pOyAvLyBtb2RpZmllZCBmcm9tIGFuc3dlciBieSBOaW5hIFNjaG9sejogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1NzI4ODUwXG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2Zvcm1mb3JtLXRvb2xib3ggXG4qL1xuXG5leHBvcnQgY29uc3QgVkFSQ09ERSA9ICh7J2EnOifhtKwnLCAnYic6J+G0ricsICdjJzon4bWTJywgJ2QnOifhtLAnLCAnZSc6J+G0sScsICdmJzon4bWOJywgJ2cnOifhtLMnLCAnaCc6J+G0tCcsICdpJzon4bS1JywgJ2onOifhtLYnLCAnayc6J+G0tycsICdsJzon4bS4JywgJ20nOifhtLknLCAnbic6J+G0uicsICdvJzon4bS8JywgJ3AnOifhtL4nLCAncSc6J+G0vScsICdyJzon4bS/JywgJ3MnOifhtZUnLCAndCc6J+G1gCcsICd1Jzon4bWBJywgJ3YnOifhtZsnLCAndyc6J+G1gicsICd4Jzon4bWhJywgJ3knOifhtZ4nLCAneic6J+G1nCcsICdhbHQnOifhtb0nLCAnMnInOifhtbMnLCAnMnIrMSc6J+G1sid9KTtcblxuZXhwb3J0IGNvbnN0IFZBUkNPREVfUkVWID0gcmV2ZXJzZU1hcHBpbmcoVkFSQ09ERSx0cnVlKTtcblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDEwLzIwMjBcbiovXG5cbmV4cG9ydCBjb25zdCBwcm9jZXNzTGFiZWwgPSAobGFiZWwsIG1vZGU9J2h0bWwnKSA9PiB7XG4gICAgLyogTGFiZWwgcHJvY2Vzc2luZyB0byBoYW5kbGUgc3ViL3N1cGVyc2NyaXB0ICovXG5cbiAgICBsZXQgdGFnUmV2ID0gW107IC8vIHRhZ1JldiByZXNldHMgeS1wb3NpdGlvbiBvZiBsYWJlbCBhZnRlciBzdWJzY3JpcHRzIChuZWVkZWQgZm9yIHN2ZylcbiAgICBpZiAobW9kZSA9PT0gJ3N2ZycpIHRhZ1JldiA9IFsnPHRzcGFuIHk9XCIwXCI+JywnPC90c3Bhbj4nXTtcbiAgICBlbHNlIHRhZ1JldiA9IFsnJywnJ107XG5cbiAgICBpZiAobGFiZWwubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBsYWJlbFBhcnRzID0gbGFiZWwuc3BsaXQoJ18nKTtcblxuICAgICAgICBsZXQgdGFnU3ViID0gW107XG4gICAgICAgIGlmIChtb2RlID09PSAnc3ZnJykgdGFnU3ViID0gW2A8dHNwYW4gc3R5bGU9XCJmb250LXNpemU6IC44ZW07XCIgZHg9XCIwXCIgZHk9XCI2XCI+YCwnPC90c3Bhbj4nXTtcbiAgICAgICAgZWxzZSB0YWdTdWIgPSBbJzxzdWI+JywnPC9zdWI+J107XG5cbiAgICAgICAgcmV0dXJuIChsYWJlbFBhcnRzLmxlbmd0aCA+IDEpID8gYCR7dGFnUmV2WzBdICsgbGFiZWxQYXJ0c1swXSArIHRhZ1JldlsxXSArIHRhZ1N1YlswXSArIGxhYmVsUGFydHNbMV0gKyB0YWdTdWJbMV19YCA6IHRhZ1JldlswXStsYWJlbCt0YWdSZXZbMV07XG4gICAgfVxuICAgIGVsc2UgcmV0dXJuIHRhZ1JldlswXStsYWJlbCt0YWdSZXZbMV07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVmFsaWRhdGlvbiA9IChmbiwgZXJyb3JNc2cpID0+ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2F0YTogYnJhbmNoID0+IHJlc3VsdCA/IGJyYW5jaC5zdWNjZXNzKHJlc3VsdCkgOiBicmFuY2guZXJyb3IoZXJyb3JNc2cpXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZUxpdGVyYWxzID0gKHN0ciwgc2VwPSdcIicsIHJlcGw9J+KAvScpID0+IHtcbiAgICBpZiAoIWNoZWNrTGl0ZXJhbE1hdGNoaW5nKHN0ciwgc2VwKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgc3RyU2VwID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgcmV0dXJuIHN0clNlcC5maWx0ZXIoKHN1YnN0cixpLGFycikgPT4gaSAlIDIgPT09IDAgfHwgaSA9PT0gYXJyLmxlbmd0aC0xKS5qb2luKHJlcGwpO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tMaXRlcmFsTWF0Y2hpbmcgPSAoc3RyLCBzZXA9J1wiJykgPT4ge1xuICAgIGNvbnN0IHN0clNlcCA9IHN0ci5zcGxpdChzZXApO1xuICAgIHJldHVybiBzdHJTZXAubGVuZ3RoICUgMiA9PT0gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcmFja2V0VW5pdHMgPSAoZm9ybXVsYSwgYnI9e29wZW46J3snLCBjbG9zZTonfSd9LCBtYXRjaGVzPVtdKSA9PiB7XG4gICAgY29uc3QgcmVFbnRyaWVzID0gZm9ybXVsYS5tYXRjaChuZXcgUmVnRXhwKGBcXFxcJHtici5vcGVufVteJHtici5vcGVufSR7YnIuY2xvc2V9XSo/XFxcXCR7YnIuY2xvc2V9YCwgJ2cnKSk7XG4gICAgaWYgKCFyZUVudHJpZXMpIHJldHVybiBtYXRjaGVzO1xuXG4gICAgY29uc3QgcmVkdWNlZEZvcm11bGEgPSByZUVudHJpZXMucmVkdWNlKChzdHIsIHBhdHRlcm4pID0+IHN0ci5yZXBsYWNlKHBhdHRlcm4sICfigKInKSxmb3JtdWxhKTtcblxuICAgIHJldHVybiBnZXRCcmFja2V0VW5pdHMocmVkdWNlZEZvcm11bGEsIGJyLCBbLi4ubWF0Y2hlcywgLi4ucmVFbnRyaWVzXSk7XG59XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMC8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5cbmV4cG9ydCBjb25zdCBjaGVja0JyYWNrZXRNYXRjaGluZyA9IChzdHIsIG9wZW5Ccj0nKCcsIGNsb3NlQnI9JyknKSA9PiB7XG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTsgLy8gZW1wdHkgc3RyaW5ncyBjYW4ndCBoYXZlIGJyYWNrZXRzLCBzbyB0aGF0J3MgZmluZVxuICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCxhcnIpID0+IHtcbiAgICBpZiAoY3VyciA9PT0gb3BlbkJyKSBhY2MrKztcbiAgICBlbHNlIGlmIChjdXJyID09PSBjbG9zZUJyKSB7XG4gICAgICBpZiAoYWNjID09PSBudWxsKSByZXR1cm4gTmFOO1xuICAgICAgYWNjLS07XG4gICAgICB9XG4gICAgaWYgKGlkeCA9PT0gYXJyLmxlbmd0aC0xICYmIGFjYyA9PT0gbnVsbCkgcmV0dXJuIDA7XG4gICAgcmV0dXJuIGFjYztcbiAgfSxudWxsKSA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBlcXVhbEFycmF5cyA9IChhcnJBLCBhcnJCKSA9PiB7XG4gICAgaWYgKGFyckEgPT09IHVuZGVmaW5lZCB8fCBhcnJCID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gYXJyQS5sZW5ndGggPT09IGFyckIubGVuZ3RoICYmIGFyckEuZXZlcnkoYSA9PiBhcnJCLnNvbWUoYiA9PiBhID09PSBiKSk7XG59XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMi8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzLzc2OGRiZTE5ZWQ0N2UyODEgKFN0YXRlIG1hY2hpbmVzKVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxleFggKGlucHV0LCBydWxlTWFwKSB7XG4gICAgaW5wdXQgPSBpbnB1dC5zcGxpdCgnICcpLmpvaW4oJycpO1xuICAgIGNvbnN0IGNvbXBSdWxlID0gY29tcFJlZ0V4cChydWxlTWFwLm1hcChyID0+IHJbMV0pKTtcbiAgICBcbiAgICByZXR1cm4gWy4uLmlucHV0Lm1hdGNoQWxsKGNvbXBSdWxlKV0ubWFwKChtYXRjaCxpKSA9PiB7XG4gICAgICBjb25zdCBpZHggPSBtYXRjaC5maWx0ZXIoKF8saSkgPT4gaSA+IDApLmZpbmRJbmRleChtID0+IG0gIT0gdW5kZWZpbmVkKTtcbiAgICAgIHJldHVybiB7dG9rZW46IHJ1bGVNYXBbaWR4XVswXSwgdmFsdWU6IChydWxlTWFwW2lkeF1bMl0gPyBydWxlTWFwW2lkeF1bMl0obWF0Y2hbMF0pIDogdW5kZWZpbmVkICkgfTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbXBSZWdFeHAgPSBwYXR0ZXJucyA9PiBuZXcgUmVnRXhwKHBhdHRlcm5zLnJlZHVjZSgoY29tcCxyLGkpID0+IGNvbXArKGkgPiAwID8gJ3wnIDogJycpK2AoJHtyfSlgLCcnKSwgJ2cnKTtcblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAzLzIwMjFcbiovXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBmaXRTdmcoc2VsZWN0b3IsIHBhZGRpbmcpIHtcbi8vICAgICAvLyBjYWxjdWxhdGUgcmVhbCBkaW1lbnNpb25zIG9mIGEgY2hhcnQgKGFzc3VtZXMgY2hhcnQgaXMgYSBnLWVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gc3ZnKVxuLy8gICAgIGQzLnNlbGVjdChjaGFydC5ub2RlKCkucGFyZW50RWxlbWVudClcbi8vICAgICAgICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQubm9kZSgpLmdldEJCb3goKS53aWR0aCArIHBhZGRpbmcubGVmdCArIHBhZGRpbmcucmlnaHQpXG4vLyAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLmhlaWdodCArIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b20pO1xuLy8gICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdmdTaXplKHN2Z1RleHQpIHtcblx0Y29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcblx0c3ZnLmlubmVySFRNTCA9IHN2Z1RleHQ7XG5cdHN2Zy5zZXRBdHRyaWJ1dGUoJ3gnLCctOTk5OScpO1xuXHRzdmcuc2V0QXR0cmlidXRlKCd5JywnLTk5OTknKTtcblxuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuXHRjb25zdCBzaXplID0gc3ZnLmdldEJCb3goKTtcblx0Y29udGFpbmVyLnJlbW92ZSgpO1xuXHRyZXR1cm4geyB3OiBzaXplLndpZHRoLCBoOiBzaXplLmhlaWdodCB9O1xufVxuXG4vKiBCcmVha3Mgc3RyaW5nIHVwIGluIHBhcnRzIG9mIGxlbmd0aCBuICh4IDw9IG4gZm9yIHRoZSBsYXN0IHBhcnQpIFxuICAgZnJvbTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5leHBvcnQgY29uc3QgYnJlYWtTdHIgPSAoc3RyLG49MSkgPT4gWy4uLm5ldyBBcnJheShNYXRoLmNlaWwoc3RyLmxlbmd0aC9uKSldLm1hcCgoZCxpKSA9PiBzdHIuc3Vic3RyKG4qaSxuKSk7XG5cbmV4cG9ydCBjb25zdCBzdmdMaW5lYnJlYWsgPSAoc3RyLCBsaW5lU2hpZnQpID0+IGA8dHNwYW4geD1cIjBcIiBkeT1cIiR7bGluZVNoaWZ0fVwiPiR7c3RyfTwvdHNwYW4+YDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGQ2FsYyB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgJ2NhbGMnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIHN0YXRpYyByZWxfbG9naWMoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgY29tbXV0YXRpdmUgcmVsYXRpb246IHggeSAqL1xuICAgICAgICBpZiAoIGZ4ID4gMyB8fCBmeCA8IDAgfHwgZnkgPiAzIHx8IGZ5IDwgMCApIHJldHVybiAtOTg7XG4gICAgICAgIGVsc2UgaWYgKCBmeCA9PT0gMCB8fCBmeSA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZnk7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoIGZ5ID09PSAwIHx8IGZ4ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBmeCA9PT0gZnkgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDNSAvVGhlb3JlbSA1XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIChmeCA9PT0gMiAmJiBmeSA9PT0gMykgfHwgKGZ4ID09PSAzICYmIGZ5ID09PSAyKSApIHsgXG4gICAgICAgICAgICByZXR1cm4gMTsgLy8gQzIgL1RoZW9yZW0gMTMgKyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgcmVsYXRpb24gd2l0aCBuIHZhcmlhYmxlczogeF8xIC4uLiB4X24gKi9cbiAgICAgICAgaWYgKGZWYWxzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmVmFscykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmVsX2xvZ2ljKCB2YWwsZlZhbHNbaV0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cbiAgICBzdGF0aWMgaW52X2xvZ2ljKGZ4KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgaW52ZXJzaW9uL25lZ2F0aW9uOiAoeCkgKi9cbiAgICAgICAgc3dpdGNoIChmeCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciBuIGludmVyc2lvbnMvbmVnYXRpb25zOiAoeCkgKi9cbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gZng7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5pbnZfbG9naWModmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnZfbG9naWMoZngpO1xuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFJFLUVOVFJZIEZPUk0gQ0FMQ1VMQVRJT05cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyB1Rm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQik7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQik7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodHJ1ZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtMyhsYXN0T3BlbiwgZkEsIGZCLCBmQywgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCBjbG9zZWQgJiBvcGVuIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodHJ1ZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcblxuICAgIC8vIHN0YXRpYyByZUVudHJ5KC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG4gICAgLy8gc3RhdGljIHJlRW50cnkocmVFdmVuLCAuLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHJlRXZlbiwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cblxuICAgIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgbGFzdE9wZW4sIGFsdEludGVycHIsIC4uLmZWYWxzKSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgZGlmZmVyZW50IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNc1xuICAgICAgICAgW0FyZ3VtZW50c10gcmVFdmVuOiBldmVuIHJlLWVudHJ5LW51bWJlcj8gfCBsYXN0T3BlbjogbGFzdCB2YXJpYWJsZSBub3QgY3Jvc3NlZD8gfCBmVmFsczogdmFyaWFibGVzICgwLzEvMi8zKVxuXG4gICAgICAgICBOb3RlOiBjYWxjdWxhdGlvbiBtYW51YWxseSB2ZXJpZmllZCBmb3LigKYgXG4gICAgICAgICAtICh1Rk9STSBhMSwgcmVzMikgxpI9KCjGkngpeSlcbiAgICAgICAgIC0gKGlGT1JNIGEyLCByZXMyKSDGkijGkik9KGExeCl5XG4gICAgICAgICAtIChpRk9STSBiMSwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoKMaSeCl5KXopIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtIChpRk9STSBiMiwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoYjF4KXkpelxuICAgICAgICAgLSAodUZPUk0gYzEsIHJlczMpIFsyfHJ8XSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAodUZPUk0gYzIsIHJlczMpIFsyfHJ8XSDGkijGkik9KChjMXgpeSl6XG4gICAgICAgICBTaG91bGQgd29yayB3aXRoIHJlc29sdXRpb25zIG9mIDQsIDUsIOKApiBidXQgbmVlZHMgdmVyaWZpY2F0aW9uLlxuXG4gICAgICAgICBNeSBiYXNpYyBvYnNlcnZhdGlvbnMgYWJvdXQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zOlxuICAgICAgICAgLSBFdmVyeSByZS1lbnRyeSBGT1JNIG5lZWRzIHRvIGhhdmUgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyB0byBiZSBzZWxmLWVxdWl2YWxlbnQgKHVGT1JNKTogxpIgPSAoKMaSMSkyKSAuXG4gICAgICAgICAgIFNvIHdpdGggdW5ldmVuIHJlc29sdXRpb25zLCB3ZSBhbHdheXMgbmVlZCB0byBoYXZlIGFuIGV2ZW4gcmUtZW50cnkgbnVtYmVyOiDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIC5cbiAgICAgICAgIC0gVG8gYmUgYWJsZSB0byBhbHNvIGhhdmUgdW5ldmVuIHJlLWVudHJ5IG51bWJlcnMsIGVpdGhlciB0aGUgcmVzb2x1dGlvbiBuZWVkcyB0byBiZSBldmVuXG4gICAgICAgICAgIG9yIHdlIGhhdmUgdG8gZW1iZWQgdGhlIHJlLWVudHJ5IEZPUk0gaW50byBhIG5vcm1hbCBGT1JNIHRoYXQgaXMgb25lIHJlLWVudHJ5IG9mIHRoYXQgRk9STTpcbiAgICAgICAgICAgxpIoxpIpID0gKCgoxpIxKTIpMykgPC0+ICgoKCDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIDEpMikzKSAuXG4gICAgICAgICAgIFRoZXNlIGNvbXBvc2l0aW9uYWwgcmUtZW50cnkgRk9STXMgYXJlIGlGT1JNcywgc2luY2UgdGhleSByZXNvbHZlIHRvOiAoIMaSID0gKCjGkikpICkgLlxuICAgICAgICAgLSBJZiB0aGUgb3V0bW9zdCBjcm9zcyBvZiB0aGUgRk9STSBzaG91bGQgYmUgbGVmdCBvdXQgKG9wZW4gRk9STXMpLCB0aGlzIGNhbiBvbmx5IGJlIGRvbmUgaWYgd2UgZW1iZWRcbiAgICAgICAgICAgYSBjb3JyZXNwb25kaW5nIGNsb3NlZCBGT1JNIG9mIGl0c2VsZiB0aGF0IGVpdGhlciBpcyBvciBlbWJlZHMgaXRzIHJlLWVudHJ5IEZPUk0gKGNhc2VzIGRlc2NyaWJlZCBhYm92ZSkuXG4gICAgICAgICAgIEkgYmVsaWV2ZSB0aGUgb3V0bW9zdCAob3BlbikgRk9STSBpcyBub3QgYmVpbmcgY291bnRlZCBhcyBhIHJlLWVudHJ5IGF0IGFsbCwgc2luY2UgaXQncyBtaXNzaW5nIGEgY3Jvc3MuXG5cbiAgICAgICAgIFRoaXMgYWxnb3JpdGhtIGlzIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgcnVsZXMvcGF0dGVybnMvb2JzZXJ2YXRpb25zIGRlcml2ZWQgZnJvbSBcInVGT1JNIGlGT1JNXCI6XG4gICAgICAgICBbMV0gSWYgMSBpcyBzb21ld2hlcmUgaW4gdGhlIEZPUk0sIGl0IHdpbGwgZG9taW5hdGUgYWxsIHZhbHVlcyBpbiBzcGFjZXMgZGVlcGVyIHRoYW4gbSxcbiAgICAgICAgICAgICBzbyB0aGUgcmUtZW50cnkgaXMgb2Jzb2xldGUgYW5kIHdlIGNhbiBzdGFydCBjYWxjdWxhdGUgZnJvbSB0aGlzIHNwYWNlLiBcbiAgICAgICAgIFsyXSBJZiB0aGVyZSBhcmUgMy8yIG9yIDIvMyBwYWlycyBpbiB0aGUgRk9STSwgdGhlIGZpcnN0IHRlcm0gY2FuIGJlIHR1cm5lZCBpbnRvIDEsIHNpbmNlXG4gICAgICAgICAgICAgdGhyb3VnaCBDMiB0aGUgc2Vjb25kIHRlcm0gY2FuIGFsd2F5cyBiZSBnZW5lcmF0ZWQgaW50byBpdHMgc3BhY2UsIHdoZXJlIDIzID0gMS5cbiAgICAgICAgICAgICBUaGVuIHdlIGNhbiBwcm9jZWVkIGFzIGluICgxKS5cbiAgICAgICAgIFszXSBJZiBhbGwgdmFyaWFibGVzIGFyZSAwLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIGEgdUZPUk0gb3IgaUZPUk0sIGhlbmNlIHRoZSB2YWx1ZSBvZiB0aGVcbiAgICAgICAgICAgICBGT1JNIHdpbGwgYmUgZWl0aGVyIDIgb3IgMywgZGVwZW5kaW5nIG9uIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQsICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGExKVxuICAgICAgICAgICAgIC0gMjogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIGV2ZW4gICAgIChjMSwgYzIpXG4gICAgICAgICAgICAgLSAzOiBvcGVuLCAgICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGEyKVxuICAgICAgICAgICAgIC0gMzogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIG9kZCAgICAgIChiMSwgYjIpXG4gICAgICAgICBTaW5jZSBbMV1bMl1bM10gZWxpbWluYXRlIGFsbCBvdGhlciBjYXNlcywgYWxsIHZhcmlhYmxlcyBhcmUgbm93IGVpdGhlciAyIG9yIDMgKGFuZCBtYXliZSAwcyksXG4gICAgICAgICBzbyB1c2luZyBDMiBhcyBkZXNjcmliZWQgYWJvdmUsIG9ubHkgdGhlIGxhc3Qgb2NjYXNpb24gb2YgdGhlc2UgdmFyaWFibGVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZDpcbiAgICAgICAgIFs0XSBJZiB3ZSB1c2UgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMiAocC4xNjcpIHJlY3Vyc2l2ZSBpZGVudGl0eSAoIG1uIDwtPiAoKMaSKSk9xpIgKSwgQzIgYW5kIEMxXG4gICAgICAgICAgICAgxpIgY2FuIGJlIHNlcGFyYXRlZCBmcm9tIDIvMyBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGUuXG4gICAgICAgICAgICAgVGhlbiwgZGVwZW5kaW5nIG9uIHRoZSBGT1JNLCB3ZSBoYXZlIGVpdGhlcjpcbiAgICAgICAgICAgICBpRk9STTogKMaSPSgoxpIpKSkgMi8zIDwtPiAoMikgMi8zICBvclxuICAgICAgICAgICAgIHVGT1JNOiAgxpI9KCjGkikpIDIvMyAgPC0+ICAyIDIvM1xuICAgICAgICAgWzVdIElmIFs0XSBkb2VzIG5vdCBhcHBseSBvciB3ZSBkZWNpZGUgZm9yIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDEgKHAuMTY3KTogcmVjdXJzaW9uIGluc3RydWN0aW9uIFxuICAgICAgICAgICAgICggbW4gLT4gxpI9KCjGkikpICksIHdlIHdpbGwgaGF2ZSBlaXRoZXIgdmFyaWFibGVzIG9mIDIgb3IgMyB3aGljaCB3ZSBjYW5ub3QgcmVsYXRlIHRvIMaSLCBzaW5jZVxuICAgICAgICAgICAgIHRoZXkgbmVlZCBub3QgYmUgdGhlIHNhbWUgdW5kZXRlcm1pbmVkIHZhbHVlLiBVc2luZyBjYXNlIGRpc3RpbmN0aW9uLCB3ZSBpbnRlcnByZXQgdGhlXG4gICAgICAgICAgICAgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMgYXMgMCBhbmQgYXMgMSwgY2FsY3VsYXRlIGV2ZXJ5dGhpbmcgd2l0aCDGkj0yIGFuZCByZWxhdGUgdGhlIHJlc3VsdHMgXG4gICAgICAgICAgICAgdXNpbmcgY29udHJhdmFsZW5jZTogKCh4KXkpKCh5KXgpIHdoaWNoIHlpZWxkcyB0aGUgZmluYWwgcmVzdWx0LlxuICAgICAgICAqL1xuICAgICAgICAvLyBjaGVjayBpZiBhcmd1bWVudHMgYXJlIGFjdHVhbGx5IGRlZmluZWRcbiAgICAgICAgaWYgKHJlRXZlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZUV2ZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9wZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFzdE9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc0V2ZW4gPSAoZlZhbHMubGVuZ3RoJTIgPT0gMCk7IC8vIGV2ZW4gcmVzb2x1dGlvbj9cbiAgICAgICAgbGV0IHplcm9zID0gMDsgLy8gemVybyBjb3VudGVyXG4gICAgICAgIGxldCBmaXJzdFVuZGVmID0gLTE7IC8vIGNhdGNoZXMgZmlyc3QgbW4vKG1uKVxuXG4gICAgICAgIC8vIFszXSBkZXRlcm1pbmUgaWYgdUZPUk0gb3IgaUZPUk1cbiAgICAgICAgbGV0IHVGT1JNID0gZmFsc2U7XG4gICAgICAgIGxldCBpRk9STSA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzRXZlbikge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuKSBpRk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZUV2ZW4pIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgMS9tIHNvbWV3aGVyZSBpbiB4XzEg4oCmIHhfblxuICAgICAgICBsZXQgY2FsY2Zyb20gPSAtMTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZ4ID0gZlZhbHNbaV07IFxuXG4gICAgICAgICAgICBpZiAoZnggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gaTsgLy8gWzFdIGlmIG0gaXMgc29tZXdoZXJlLCBzZXQgY2FsY3VsYXRpb24gc3RhcnQgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMCkgemVyb3MrKzsgLy8gWzNdIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgemVyb3MgdGhlcmUgYXJlXG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAyIHx8IGZ4ID09IDMpIHsgLy8gWzJdXG4gICAgICAgICAgICAgICAgaWYoZmlyc3RVbmRlZiA9PSAtMSkgZmlyc3RVbmRlZiA9IGk7IC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgMi91IG9yIDMvaSwgcmVtZW1iZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGZ4ICE9IGZWYWxzW2ZpcnN0VW5kZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gZmlyc3RVbmRlZjsgLy8gaWYgMy8yIG9yIDIvMyBwYWlycywgc2V0IGNhbGN1bGF0aW9uIGZvcm0gZmlyc3QgdW5kZWYuIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmICh6ZXJvcyA9PSBmVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFszXSBpbiBjYXNlIGFsbCB2YXJpYWJsZXMgYXJlIG4sIGp1c3QgcmV0dXJuIHRoZSB1bmRlZmluZWQvaW1hZ2luYXJ5IHZhbHVlIG9mIHRoZSBGT1JNXG4gICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiAzO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsY2Zyb20gPj0gMCkge1xuICAgICAgICAgICAgLy8gWzF8Ml0gaWYgdGhlcmUgaXMgYSAxL20gc29tZXdoZXJlIGluIHRoZSBmb3JtLCB3ZSBjYW4gZWFzaWx5IGNhbGN1bGF0ZSB0aGUgcmVzdCBmcm9tIHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGxldCB2YWwgPSAxO1xuICAgICAgICAgICAgZm9yKGxldCBpPWNhbGNmcm9tOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7ICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGkgPT0gZlZhbHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWwodmFsLGZWYWxzW2ldKTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHZhbCA9IHRoaXMuaW52KCB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gd2hhdCByZW1haW5zLCB3aWxsIG9ubHkgYmUgZWl0aGVyXG4gICAgICAgIC8vIC0gKDEpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciBtbi8yICAgb3JcbiAgICAgICAgLy8gLSAoMikgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIChtbikvM1xuICAgICAgICAvLyBTbyB3ZSBjYWxjdWxhdGUgZnJvbSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMsIGJlY2F1c2Ugd2l0aCBDMiAoZGVnZW5lcmF0ZSkgYWxsIGVsc2UgY2FuIGJlIGlnbm9yZWRcblxuICAgICAgICAvLyBmb3IgZXZlbiBjbG9zZWQgcmUtZW50cnktRk9STXMgd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbiAodUZPUk0gYzEpLCB3ZSBuZWVkIHRvIGRvIHRoZSBjYWxjdWxhdGlvbiB0d2ljZVxuICAgICAgICBjb25zdCByZXBlYXQgPSAocmVFdmVuICYmICFyZXNFdmVuICYmICFsYXN0T3Blbik/IDI6MTtcbiAgICAgIFxuICAgICAgICBmb3IobGV0IGk9KGZWYWxzLmxlbmd0aCpyZXBlYXQpLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpJWZWYWxzLmxlbmd0aDsgLy8gcmVwZWF0ZWQgdmFyaWFibGUgaW5kZXhcblxuICAgICAgICAgICAgaWYgKGZWYWxzW2luZGV4XSA9PSAyIHx8IGZWYWxzW2luZGV4XSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaVJldiA9IChmVmFscy5sZW5ndGgqcmVwZWF0KS0xIC0gaTsgLy8gcmV2ZXJzZSBpbmRleCB0byBlYXNpZXIgY2hlY2sgZm9yIGludGVycHJldGF0aW9uIDIgKHNlZSBuZXh0KVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIgJiYgKChsYXN0T3BlbiAmJiBpUmV2JTI9PTApIHx8ICghbGFzdE9wZW4gJiYgaVJldiUyPT0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMjogcmVjdXJzaXZlIGlkZW50aXR5ICggxpI9KCjGkikpIDwtPiBtbiApXG4gICAgICAgICAgICAgICAgICAgIC8vIMaSPSgoxpIpKSBjYW4gYmUgc2VwYXJhdGVkIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZTsgdGhpcyBpcyB0aGUgY2FzZSBpZiBlaXRoZXI6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDEpIHRoZSBGT1JNIGlzIG9wZW4gYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgZXZlbiAgICAgIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDIpIHRoZSBGT1JNIGlzIGNsb3NlZCBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBvZGRcblxuICAgICAgICAgICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBjcm9zc2VzIGJldHdlZW4gxpIgYW5kIG91ciB2YXIgaXMgZXZlbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiB0aGlzLnJlbCgzLGZWYWxzW2luZGV4XSk7IC8vIGlGT1JNOiAoxpI9KCjGkikpKXggPC0+IChtbikgeFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbCgyLGZWYWxzW2luZGV4XSk7ICAgICAgIC8vIHVGT1JNOiAgxpI9KCjGkikpeCAgPC0+ICBtbiB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBbNV0gaWYgZXZlcnl0aGluZyBlbHNlIGZhaWxzLCB1c2UgY2FzZSBkaXN0aW5jdGlvbjogdUZPUk0gaUZPUk0gKHAuOTQpOyBhbHNvIGFjY29yZGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gKHAuMTY3KSBpbnRlcnByZXRhdGlvbiAxOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gKCDGkj0oKMaSKSkgYW5kIG1uIG5lZWQgdG8gYmUgZGlmZmVyZW50aWF0ZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2UwID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTAgPSB0aGlzLmludihjYXNlMCk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDA7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMCk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTAgPSB0aGlzLnJlbChjYXNlMCxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTAgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTAsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2UxID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTEgPSB0aGlzLmludihjYXNlMSk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDE7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMSk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTEgPSB0aGlzLnJlbChjYXNlMSxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTEgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTEsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250KCBjYXNlMCxjYXNlMSApOyAvLyBjb250cmF2YWxlbmNlIG9mIGJvdGggY2FzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07IC8vIGVuZCByZUVudHJ5KClcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIENPTVBMRVggRk9STSBDQUxDVUxBVElPTlNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0gMiBWQVJJQUJMRVNcblxuICAgIHN0YXRpYyBpbXBsTChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6ICh4KXkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLmludihmeCksZnkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbXBsUihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6IHgoeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCBmeCx0aGlzLmludihmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHByZShmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInByZXNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICgoeCl5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbEwoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgcG9zdChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInBvc3RzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxSKGZ4LGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY29udChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImNvbnRyYXZhbGVuY2VcIi9cImVpdGhlci1vclwiOiAoKHgpeSkgKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5wcmUoZngsZnkpLCB0aGlzLnBvc3QoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgZXF1aXYoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJlcXVpdmFsZW5jZVwiLz86ICggKCh4KXkpICh4KHkpKSApICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5jb250KGZ4LGZ5KSApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgeyBmb3JtRE5BX2h0bWwsIHZtYXBfc3ZnLCB2bWFwUGVyc3BlY3RpdmVzX3N2Zywgdm1hcExpc3Rfc3ZnIH0gZnJvbSAnLi4vbW9kdWxlcy9kbmEtc3ZnJztcbmltcG9ydCB7IHBlcm11dGVBcnJheSwgcGFkLCBjcmVhdGVWYWxpZGF0aW9uLCBlcXVhbEFycmF5cyB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IHsgZ2V0UmFuZG9tQmlnSW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL2JpZ2ludC1oZWxwZXInO1xuXG5jb25zdCBiaWdJbnQgPSByZXF1aXJlKCdiaWctaW50ZWdlcicpOyAvLyBvYnNvbGV0ZSB3aXRoIGJldHRlciBCaWdJbnQgc3VwcG9ydCBpbiBicm93c2Vyc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRG5hIGV4dGVuZHMgRkZvcm0ge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgJ2RuYScgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOS8yMCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkZPUk1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY2FsY0FsbChpbnB1dCkge1xuICAgIFx0LyogZXh0ZW5zaW9uIHRvIHJlcHJlc2VudCBmb3JtRE5BIGFzIEZPUk0gY2FsY3VsYXRpb24gKi9cblxuICAgIFx0aWYgKGlucHV0LmluY2x1ZGVzKCc6OicpICYmIHRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHtcblxuICAgIFx0XHRjb25zdCBkbmEgPSBpbnB1dC5zcGxpdCgnOicpLnBvcCgpO1xuICAgIFx0XHRjb25zdCByZXN1bHRzID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCk7XG5cbiAgICBcdFx0Y29uc3Qgdm51bSA9IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpO1xuICAgIFx0XHRjb25zdCB2YXJzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IGBcInhfJHtpfVwiYCApO1xuICAgIFx0XHRjb25zdCB2YWxzID0ge307XG5cblx0ICAgICAgICBpZiAodm51bSA8IDEpIHtcblx0ICAgICAgICAgICAgdmFsc1snUmVzdWx0J10gPSBwYXJzZUludChyZXN1bHRzWzBdKTtcblx0ICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG5cdCAgICAgICAgfVxuXG4gICAgXHRcdGNvbnN0IGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG5cdCAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICBjb25zdCBpbnRlcnByVmFscyA9IHBhZChpLnRvU3RyaW5nKDQpLCB2bnVtKTtcblx0ICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cblx0ICAgICAgICAgICAgdmFsc1tpbnRlcktleStpbnRlcnByVmFsc10gPSByZXN1bHRzW2ldO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIHJldHVybiB2YWxzO1xuICAgIFx0fVxuXG4gICAgXHRyZXR1cm4gc3VwZXIuY2FsY0FsbChpbnB1dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhpbnB1dCkge1xuICAgIFx0LyogZXh0ZW5zaW9uIHRvIGdldCB2YXJpYWJsZXMgZnJvbSBmb3JtRE5BICovXG5cbiAgICBcdGlmICh0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyAmJiBpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgIFx0XHRjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICBcdFx0aWYgKHZhckxpc3QgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHZhckxpc3Q7XG4gICAgXHRcdGVsc2UgaWYgKGZvcm11bGEgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHN1cGVyLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcblxuXHQgICAgXHRjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG4gICAgXHRcdHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4gYHhfJHtpfWAgKTtcbiAgICBcdH1cblxuXHRcdHJldHVybiBzdXBlci5nZXRWYXJpYWJsZXMoaW5wdXQpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb252ZXJzaW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBlbmNvZGUgKF9mb3JtLCB2YXJvcmRlcj11bmRlZmluZWQpIHtcbiAgICBcdC8qIEVuY29kZXMgYSBGT1JNIGFzIGEgZG5hIHN0cmluZyAqL1xuXG4gICAgXHRjb25zdCBmb3JtID0gdmFyb3JkZXIgPyB0aGlzLnJlT3JkZXJWYXJzKF9mb3JtLCB2YXJvcmRlcikgOiBfZm9ybTtcblxuICAgIFx0cmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jYWxjQWxsKGZvcm0pKS5yZXZlcnNlKCkuam9pbignJyk7XG4gXHR9O1xuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG4gXHRzdGF0aWMgZGVjb2RlIChkbmEsIHZhckxpc3Q9dW5kZWZpbmVkKSB7XG5cdFx0LyogRGVjb2RlcyBkbmEgaW50byAob25lIG9mIGl0cykgc2ltcGxlc3QgY29ycmVzcG9uZGluZyBGT1JNIG1vZGVsKHMpIGFzIGEganNvbi1yZXByZXNlbnRhdGlvbiAqL1xuXG5cblx0XHQvLyAtPiByZW1vdmUgMC10ZXJtcyBhbmQgZ3JvdXBpbmdzP1xuXG5cdFx0aWYgKHZhckxpc3QgJiYgdmFyTGlzdC5sZW5ndGggIT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpKSB0aHJvdyBuZXcgRXJyb3IoJ051bWJlciBvZiB2YXJpYWJsZXMgaW4gZ2l2ZW4gdmFyaWFibGUgbGlzdCBkb2VzblxcJ3QgbWF0Y2ggZm9ybUROQSBjb2RlIGxlbmd0aCcpO1xuXHRcdGlmICghdmFyTGlzdCkgdmFyTGlzdCA9IHRoaXMuZ2VuZXJhdGVWYXJOYW1lcyh0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSk7IC8vLm1hcChzdHIgPT4gYFwiJHtzdHJ9XCJgKTtcblx0XHRcblx0XHRjb25zdCB1bml2ID0gdGhpcy51bml2ZXJzZV9uKHZhckxpc3QpO1xuXHRcdGNvbnN0IHZhbHMgPSBkbmEuc3BsaXQoJycpLnJldmVyc2UoKTtcblxuXHRcdHJldHVybiB1bml2Lm1hcCgodGVybSwgaSkgPT4ge1xuXHRcdFx0cmV0dXJuIGAoKCR7dmFsc1tpXX0pKCR7dGVybX0pKWA7XG5cdFx0fSkuam9pbignJyk7XG4gXHR9XG5cbi8vIDwgRU5EXG5cblx0c3RhdGljIGludFRvRE5BIChpbnQsIHZudW0pIHtcblx0XHQvKiBUYWtlcyBhbiBpbnRlZ2VyICh1c3VhbGx5IEJpZ0ludCkgYW5kIGEgZGVzaXJlZCB2YXJpYWJsZSBudW1iZXIgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgZm9ybUROQSBcblxuXHRcdE5vdGU6IHZhcmlhYmxlIG51bWJlciBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgaW50ZW5kZWQgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgY2Fubm90IGJlIGluZmVyZWQgZnJvbSB0aGUgaW50ZWdlciBhbG9uZS4gSWYgbm8gdmFyaWFibGUgbnVtYmVyIGlzIGdpdmVuLCB0aGUgc21hbGxlc3QgdmFyaWFibGUgbnVtYmVyIHBvc3NpYmxlIGZvciB0aGUgcXVhdGVybmlvbiBpcyBhc3N1bWVkIHRvIGdlbmVyYXRlIHZhbGlkIGZvcm1ETkEuICovXG5cblx0XHRjb25zdCBxdWF0ID0gaW50LnRvU3RyaW5nKDQpO1xuXHRcdGlmIChxdWF0LnN1YnN0cigwLDEpID09PSAnLScpIHRocm93IG5ldyBFcnJvcignTmVnYXRpdmUgaW50ZWdlcnMgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBmb3JtRE5BLicpO1xuXHRcdGlmIChxdWF0LmluY2x1ZGVzKCcuJykpIHRocm93IG5ldyBFcnJvcignRnJhY3Rpb25hbCBudW1iZXJzIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZm9ybUROQS4nKVxuXG5cdFx0Y29uc3QgZG5hTGVuID0gdm51bSA/IDQqKnZudW0gOiAoZnVuY3Rpb24gbWluRG5hTGVuKHN0ckxlbiwgbj0wKSB7IFxuXHRcdFx0cmV0dXJuIDQqKm4gPj0gc3RyTGVuID8gNCoqbiA6IG1pbkRuYUxlbihzdHJMZW4sIG4rMSk7XG5cdFx0fSkocXVhdC5sZW5ndGgpO1xuXG5cdFx0aWYgKHF1YXQubGVuZ3RoID4gZG5hTGVuKSB0aHJvdyBuZXcgRXJyb3IoJ0ludGVnZXIgc2l6ZSBleGNlZWRzIGRlc2lyZWQgRE5BIGxlbmd0aC4nKTtcblx0XHRyZXR1cm4gcGFkKHF1YXQsIGRuYUxlbik7XG5cdH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdXRwdXRcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZm9ybVRvRE5BIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgIFx0LyogY29udmVydHMgYSBmb3JtIGludG8gaXRzIGZvcm1ETkEgcmVwcmVzZW50YXRpb24gaW4gSFRNTCAqL1xuXG4gICAgXHRjb25zdCB7b3V0cHV0fSA9IHsgb3V0cHV0OiAndGV4dCcsIC4uLm9wdGlvbnMgfTtcblxuICAgIFx0bGV0IGRuYSA9IHVuZGVmaW5lZCwgZm9ybXVsYSA9IHVuZGVmaW5lZCwgdmFyTGlzdCA9IHVuZGVmaW5lZDtcbiAgICBcdGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgIFx0XHQvLyBpZiB0aGUgaW5wdXQgY29udGFpbnMgdGhlIG1hcmsgJzo6JyBmb3IgZm9ybUROQSwgcmV0dXJuIGl0IGlmIGl0J3MgdmFsaWRcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkRE5BKGlucHV0KSkgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgdmFsaWQgZm9ybUROQScpO1xuXG4gICAgXHRcdGNvbnN0IHBhcnRzID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICBcdFx0ZG5hID0gcGFydHMuZG5hO1xuICAgIFx0XHRmb3JtdWxhID0gcGFydHMuZm9ybXVsYTtcbiAgICBcdFx0dmFyTGlzdCA9IHBhcnRzLnZhckxpc3Q7XG5cdCAgICB9XG5cdCAgICBlbHNlIHtcblx0XHQgICAgLy8gaWYgbm90LCBwcm9jZXNzIHRoZSBpbnB1dCBhcyBhIEZPUk0gd2l0aCBzcGVjaWZpZWQgb3IgZGVmYXVsdCB2YXJvcmRlciBhbmQgZW5jb2RlIGl0IHRvIGRuYVxuXHRcdFx0ZG5hID0gdGhpcy5lbmNvZGUoIGlucHV0LCAodmFyb3JkZXIgPyB2YXJvcmRlciA6IHVuZGVmaW5lZCkgKTtcblx0XHRcdGZvcm11bGEgPSBpbnB1dDtcblx0XHRcdHZhckxpc3QgPSB2YXJvcmRlciA/IHZhcm9yZGVyIDogdGhpcy5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG5cdCAgICB9XG5cblx0XHRzd2l0Y2ggKG91dHB1dCkge1xuXHRcdFx0Y2FzZSAnaHRtbCc6IHtcblx0XHRcdFx0cmV0dXJuIGZvcm1ETkFfaHRtbChmb3JtdWxhLCBkbmEsIHZhckxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAndGV4dCc6IHtcblx0XHRcdFx0cmV0dXJuIChmb3JtdWxhICE9PSB1bmRlZmluZWQgPyBmb3JtdWxhIDogJycpICsgKHZhckxpc3QgJiYgZG5hLmxlbmd0aCA+IDEgPyBgLlske3Zhckxpc3Quam9pbignLCcpfV1gIDogJycpICsgJzo6JyArIGRuYTtcblx0XHRcdH1cblx0XHRcdGNhc2UgJ251bSc6IHtcblx0XHRcdFx0cmV0dXJuIGRuYTtcblx0XHRcdH1cblx0XHRcdGRlZmF1bHQ6IHtcblx0XHRcdFx0cmV0dXJuIFtmb3JtdWxhLCB2YXJMaXN0LCBkbmFdO1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZG5hVG9GT1JNIChmb3JtRE5BLCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgXHQvKiBjb252ZXJ0cyBmb3JtRE5BIHdpdGggYSBnaXZlbiB2YXJpYWJsZSBsaXN0L29yZGVyIGludG8gYSBncmFwaCByZXByZXNlbnRhdGlvbiBvZiAob25lIG9mIGl0cykgc2ltcGxlc3QgY29ycmVzcG9uZGluZyBGT1JNIG1vZGVsKHMpICovXG5cbiAgICBcdC8vID4+PiBub3QgeWV0IGltcGxlbWVudGVkIVxuXG4gICAgXHRyZXR1cm4gdGhpcy5kZWNvZGUoZm9ybUROQSwgdmFyb3JkZXIpO1xuICAgIH1cblxuXHRzdGF0aWMgZ2VuUmFuZG9tRE5BICh2bnVtKSB7XG5cdFx0LyogR2VuZXJhdGVzIGEgcmFuZG9tIGZvcm1ETkEgc3RyaW5nIGZvciBhIGdpdmVuIHZhcmlhYmxlIG51bWJlciAqL1xuXG5cdFx0Y29uc3QgbWF4TiA9IGJpZ0ludCg0KS5wb3coIGJpZ0ludCg0KS5wb3codm51bSkgKTtcblx0XHRjb25zdCB2YWx1ZV9iaW4gPSBnZXRSYW5kb21CaWdJbnQoIG1heE4uc3VidHJhY3QoMSkgKTtcblx0XHRyZXR1cm4gdGhpcy5pbnRUb0ROQSh2YWx1ZV9iaW4sIHZudW0pO1xuXHR9XG5cbiAgICBzdGF0aWMgdm1hcCAoaW5wdXQsIHZhcm9yZGVyPXVuZGVmaW5lZCwgb3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICBcdC8qIGdlbmVyYXRlcyB2bWFwIEhUTUwgZnJvbSBmb3JtL2Zvcm1ETkEgaW5wdXQgKi9cblxuXHRcdGNvbnN0IHsgb3V0cHV0LCBsaW1pdFNpemUsIGNvbnZEZWZhdWx0VmFyb3JkZXIsXG5cdFx0XHRcdHNpemUsIGdhcEdyb3csIG1hcmdpbkZ1bmMsIHN0cm9rZVcgfSA9IHtcblx0XHRcdFx0XHRvdXRwdXQ6ICdzdmcnLFxuXHRcdFx0XHRcdGxpbWl0U2l6ZTogdHJ1ZSwgY29udkRlZmF1bHRWYXJvcmRlcjogdHJ1ZSxcblx0XHRcdFx0XHRzaXplOiB1bmRlZmluZWQsIGdhcEdyb3c6IDEuNSwgbWFyZ2luRnVuYzogdW5kZWZpbmVkLCBzdHJva2VXOiAwLjUsXG5cdFx0XHRcdFx0Ly8gZmlsdGVyOiAnMTExMScsIDwtIG1pZ2h0IGFkZCBsYXRlclxuXHRcdFx0XHRcdC4uLm9wdGlvbnN9O1xuXG4gICAgXHRsZXQgZG5hID0gdW5kZWZpbmVkO1xuICAgIFx0bGV0IGZvcm11bGEgPSBpbnB1dDtcblxuICAgIFx0aWYgKGlucHV0LmluY2x1ZGVzKCc6OicpICYmIHRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHtcblx0XHRcdGNvbnN0IGRuYVBhcnRzID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cdFx0XHRkbmEgPSBkbmFQYXJ0cy5kbmE7XG5cdFx0XHRmb3JtdWxhID0gZG5hUGFydHMuZm9ybXVsYTtcblx0XHRcdGNvbnN0IHZhckxpc3QgPSBkbmFQYXJ0cy52YXJMaXN0ID8gZG5hUGFydHMudmFyTGlzdCA6IHRoaXMuZ2V0VmFyaWFibGVzKGlucHV0KTtcblxuXHRcdFx0aWYgKHZhcm9yZGVyICE9PSB1bmRlZmluZWQgJiYgdmFyTGlzdCAhPT0gdW5kZWZpbmVkICYmICFlcXVhbEFycmF5cyh2YXJvcmRlciwgdmFyTGlzdCkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWYXJpYWJsZSBvcmRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIGZvcm1ETkEgaW5wdXQgYW5kIGFzIGFuIGFyZ3VtZW50IGZvciB0aGUgdm1hcCBmdW5jdGlvbiBhbmQgdGhleSBhcmUgZGlmZmVyZW50LiBQbGVhc2Ugc2VsZWN0IG9ubHkgb25lIHNwZWNpZmljYXRpb24gdG8gYXZvaWQgY29uZmxpY3RpbmcgcmVzdWx0cy4nKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHZhckxpc3QpIHtcblx0XHRcdFx0dmFyb3JkZXIgPSB2YXJMaXN0O1xuXHRcdFx0fSBlbHNlIGlmIChmb3JtdWxhKSB7XG5cdFx0XHRcdHZhcm9yZGVyID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG5cdFx0XHR9XG4gICAgXHR9XG5cdFx0ZWxzZSBpZiAoIXZhcm9yZGVyKSB7XG5cdFx0XHR2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXHRcdFx0aWYgKGNvbnZEZWZhdWx0VmFyb3JkZXIpIHZhcm9yZGVyID0gdGhpcy5tYXRjaERlZmF1bHRWYXJPcmRlcih2YXJvcmRlcik7XG5cdFx0fVxuXG5cdFx0aWYgKCFkbmEpIGRuYSA9IHRoaXMuZW5jb2RlKGZvcm11bGEsIHZhcm9yZGVyKTtcblx0XHRjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG5cblx0XHRpZiAodm51bSA9PT0gTmFOKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFyaWFibGUgbnVtYmVyIGZvciB2bWFwcy4nKTtcblx0XHRpZiAobGltaXRTaXplICYmIHZudW0gPiA4KSB0aHJvdyBuZXcgRXJyb3IoJ3ZtYXBzIHdpdGggbW9yZSB0aGFuIDggdmFyaWFibGVzIGFyZSB0b28gY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSB0byBiZSByZW5kZXJlZCB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcCBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cblxuXHRcdGNvbnN0IHJldmVyc2VkRE5BID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG5cdFx0XG5cdFx0Y29uc3QgY2VsbFNpemUgPSBzaXplIHx8ICh2bnVtID0+IHtcblx0XHRcdC8vIHJlZHVjdGlvbiBieSAycHggZm9yIGVhY2ggYWRkaXRpb25hbCB2YXJpYWJsZSBpZiB2bnVtID4gM1xuXHRcdFx0Y29uc3QgbiA9IDE3IC0gKHZudW0gPiAzID8gMiAqICh2bnVtLTMpIDogMCk7IC8vIGNoYW5nZWQgZnJvbTogMTQgLSAodm51bS0xKTtcblx0XHRcdHJldHVybiBNYXRoLm1heCgyLCBuKTsgLy8gbWluIHNpemUgb2YgMnB4XG5cdFx0fSkodm51bSk7XG5cblx0XHQvLyBtYXJnaW5zIGNhbiBhbHNvIGJlIGNhbGN1bGF0ZWQgdGhyb3VnaCBhIGN1c3RvbSBmdW5jdGlvblxuXHRcdGNvbnN0IG1hcmdpbnMgPSBbc3Ryb2tlVywgXG5cdFx0XHQuLi5BcnJheS5mcm9tKHtsZW5ndGg6dm51bS0xfSwgbWFyZ2luRnVuYyA/IG1hcmdpbkZ1bmMgOiAoKF8saSkgPT4gKGkrMSkgKiBnYXBHcm93KSApXTtcblx0XHRjb25zdCBjZWxsID0ge3c6Y2VsbFNpemUsIGg6Y2VsbFNpemV9O1xuXG5cblx0XHRjb25zdCB2bWFwVHJlZSA9IHRoaXMuY29uc3RydWN0Vm1hcChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG5cblx0XHRzd2l0Y2ggKG91dHB1dCkge1xuXHRcdFx0Y2FzZSAnc3ZnJzpcblx0XHRcdFx0cmV0dXJuIHZtYXBfc3ZnKHZtYXBUcmVlLCBpbnB1dCwgdmFyb3JkZXIsIG9wdGlvbnMpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHZtYXBUcmVlO1xuXHRcdH1cbiAgICB9XG5cblx0c3RhdGljIHZtYXBQZXJzcGVjdGl2ZXMgKGZvcm0sIHZhcm9yZGVyPXVuZGVmaW5lZCwgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQsIGxvY2FsT3B0aW9ucz11bmRlZmluZWQpIHtcblx0XHQvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXAgcGVyc3BlY3RpdmVzIGFzIHBlcm11dGF0aW9ucyBvZiBhIGZvcm0vZm9ybUROQSBpbnB1dCAqL1xuXHRcdC8vIE5vdGU6IGZvcm1ETkEgaW5wdXQgbm90IHlldCBzdXBwb3J0ZWQgKHBlcm11dGF0aW9uIGFsZ29yaXRobSByZXF1aXJlZClcblxuXHRcdGNvbnN0IHtvdXRwdXQsIGxpbWl0U2l6ZX0gPSB7IG91dHB1dDogJ3N2ZycsIGxpbWl0U2l6ZTogdHJ1ZSwgLi4uZ2xvYmFsT3B0aW9ucyB9O1xuXG5cdFx0aWYgKHR5cGVvZihmb3JtKSA9PT0gJ3N0cmluZycgJiYgZm9ybS5pbmNsdWRlcygnOjonKSkgdGhyb3cgbmV3IEVycm9yKCdmb3JtRE5BIGlucHV0IGlzIG5vdCB5ZXQgc3VwcG9ydGVkIGZvciB2bWFwIHBlcnNwZWN0aXZlcy4nKTtcblxuXHRcdGlmICh2YXJvcmRlciA9PT0gdW5kZWZpbmVkKSB2YXJvcmRlciA9IHRoaXMubWF0Y2hEZWZhdWx0VmFyT3JkZXIoIHRoaXMuZ2V0VmFyaWFibGVzKGZvcm0pICk7XG5cdFx0Y29uc3Qgdm51bSA9IHZhcm9yZGVyLmxlbmd0aDtcblx0XHRpZiAobGltaXRTaXplICYmIHZudW0gPiA1KSB0aHJvdyBuZXcgRXJyb3IoJ1JlbmRlcmluZyBhbGwgdGhlIHBlcnNwZWN0aXZlcyBmb3Igdm1hcHMgd2l0aCBtb3JlIHRoYW4gNSB2YXJpYWJsZXMgaXMgdG9vIGNvbXB1dGF0aW9uYWxseSBpbnRlbnNpdmUgd2l0aCB0aGlzIGltcGxlbWVudGF0aW9uLiBZb3UgY2FuLCBob3dldmVyLCBzdGlsbCBjb21wdXRlIHNpbmdsZSBwZXJtdXRhdGlvbnMgYnkgY2hhbmdpbmcgdGhlIHZhcmlhYmxlIG9yZGVyIG9mIHlvdXIgRk9STS4gSWYgeW91IHN0aWxsIHdhbnQgdG8gcHJvY2VlZCwgYWRkIHRoZSBvcHRpb24gXCJsaW1pdFNpemU6IGZhbHNlXCIgdG8geW91ciB2bWFwUGVyc3BlY3RpdmVzIGZ1bmN0aW9uIGNhbGwgKHVzaW5nIHRoZSBmb3JtZm9ybSBsaWJyYXJ5KS4nKTtcblxuXHRcdGNvbnN0IGZvcm11bGEgPSBmb3JtOyAvLyA8PDwgc3VwcG9ydCBmb3IgSlNPTj9cblxuXHRcdGNvbnN0IHZtYXBQZXJtdXRhdGlvbnMgPSBwZXJtdXRlQXJyYXkodmFyb3JkZXIpXG5cdFx0XHQubWFwKHZhcm9yZGVyID0+IHRoaXMudm1hcChmb3JtdWxhLCB2YXJvcmRlciwge1xuXHRcdFx0XHRoaWRlSW5wdXRMYWJlbDogdHJ1ZSwgXG5cdFx0XHRcdGN1c3RvbUxhYmVsOiB1bmRlZmluZWQsXG5cdFx0XHRcdC4uLmxvY2FsT3B0aW9ucyB9KSApO1xuXG5cdFx0c3dpdGNoIChvdXRwdXQpIHtcblx0XHRcdGNhc2UgJ3N2Zyc6XG5cdFx0XHRcdHJldHVybiB2bWFwUGVyc3BlY3RpdmVzX3N2Zyh2bWFwUGVybXV0YXRpb25zLCBmb3JtdWxhLCBnbG9iYWxPcHRpb25zKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2bWFwUGVybXV0YXRpb25zO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyB2bWFwTGlzdCAoaW5wdXRMaXN0LCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuXHRcdC8qIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygdm1hcHMgZnJvbSBhbiBhcnJheSBvZiBGT1JNIGlucHV0cyAqL1xuXHRcdC8vIGlucHV0TGlzdCBmb3JtYXQ6IFtbJ2Zvcm0vZm9ybUROQScsIFt2YXJvcmRlcl0vdW5kZWZpbmVkLCBvcHRpb25zL3VuZGVmaW5lZF0sIC4uLl1cblxuXHRcdGNvbnN0IHtvdXRwdXR9ID0geyBvdXRwdXQ6ICdzdmcnLCAuLi5nbG9iYWxPcHRpb25zIH1cblxuXHRcdGNvbnN0IHZtYXBzID0gaW5wdXRMaXN0Lm1hcChpbnB1dCA9PiB0aGlzLnZtYXAoaW5wdXRbMF0sIGlucHV0WzFdLCB7Li4uaW5wdXRbMl0sIC4uLmdsb2JhbE9wdGlvbnN9KSApO1xuXG5cdFx0c3dpdGNoIChvdXRwdXQpIHtcblx0XHRcdGNhc2UgJ3N2Zyc6XG5cdFx0XHRcdHJldHVybiB2bWFwTGlzdF9zdmcgKHZtYXBzLCBnbG9iYWxPcHRpb25zKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2bWFwcztcblx0XHR9XG5cdH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBEYXRhIFN0cnVjdHVyZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRzdGF0aWMgY29uc3RydWN0Vm1hcCAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpIHtcblx0XHQvKiBSZWN1cnNpdmVseSBjb25zdHJ1Y3RzIHZtYXAgZGF0YS1zdHJ1Y3R1cmUgZnJvbSBmb3JtRE5BICovXG5cblx0XHRjb25zdCBjYWxjR2FwU3VtID0gKHYsbWFyZ2lucykgPT4gbWFyZ2lucy5zbGljZSgxLHYpLnJldmVyc2UoKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4gYWNjICsgKDIqKmlkeCkgKiBjdXJyLCAwKTtcblx0XHRjb25zdCBmeCA9IChxaSxuKSA9PiAgKHFpJTIpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgICAgICAgICAvLyB4cG9zOiAwMTIzIC0+IDAxMDEgKiBzaGlmdCBuXG5cdFx0Y29uc3QgZnkgPSAocWksbikgPT4gKyhxaT4wICYmIHFpPDMpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgLy8geXBvczogMDEyMyAtPiAwMTEwICogc2hpZnQgblxuXG5cdFx0Y29uc3QgY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUgPSAoZG5hSG9sb24sIHZjb3VudCwgY2VsbCwgbWFyZ2lucywgcWk9MCkgPT4ge1xuXHRcdFx0Y29uc3Qgc3ViVHJlZSA9IHt9O1xuXHRcdFx0Y29uc3QgZ2FwU3VtID0gY2FsY0dhcFN1bSh2Y291bnQsbWFyZ2lucyk7XG5cdFx0XHRjb25zdCBxdG4gPSA0Kip2Y291bnQ7XG5cdFx0XHRjb25zdCBsZW4gPSBNYXRoLnNxcnQocXRuKTtcblx0XHRcdGRuYUhvbG9uID0gZG5hSG9sb24uc3Vic3RyKHFpKnF0biwgcXRuKTsgLy8gcXVhcnRlciBvZiB0aGUgZm9ybUROQSBzdHJpbmdcblx0XHRcblx0XHRcdHN1YlRyZWUuZGF0YSA9IHsgXG5cdFx0XHRcdGRuYTogJzo6JytkbmFIb2xvbi5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpLFxuXHRcdFx0XHR2bnVtOiB2Y291bnQsIGNlbGw6IGNlbGwsXG5cdFx0XHRcdG1hcmdpbnM6IHZudW0gPiAwID8gbWFyZ2lucy5zbGljZSgwLHZjb3VudCkgOiBtYXJnaW5zLnNsaWNlKDAsMSlcblx0XHRcdH07XG5cblx0XHRcdHN1YlRyZWUuaGVpZ2h0ID0gdmNvdW50O1xuXHRcdFx0c3ViVHJlZS5kZXB0aCA9IHZudW0gLSAoTWF0aC5sb2cocXRuKSAvIE1hdGgubG9nKDQpKTsgLy8gbG9nIGJhc2UgNFxuXHRcdFx0c3ViVHJlZS5vcmRlciA9IHFpO1xuXHRcdFxuXHRcdFx0c3ViVHJlZS5wb3NpdGlvbiA9IFtcblx0XHRcdFx0Ly8gYmFzZSBzaGlmdCAgPSAgKDEpIGNlbGwgc2l6ZSAqIGxlbmd0aCB1bml0cyAgKyAgKDIpIHN1bSBvZiBhbGwgcHJldmlvdXMgZ2Fwcy9tYXJnaW5zXG5cdFx0XHRcdC8vIHJlYWwgc2hpZnQgID0gIGJhc2Ugc2hpZnQgICsgICgzKSBtYXJnaW5zIG9mIGN1cnJlbnQgaXRlcmF0aW9uIGxldmVsXG5cdFx0XHRcdC8vIC0tIHFpOiBjdXJyZW50IHZhbHVlIGluZGV4IDAvMS8yLzNcblx0XHRcdFx0Ly8gLS0gLS0gZngvZnkgbWFwIHFpIHRvIHgveSBwb3NpdGlvbnMgb2YgYSBzcXVhcmUgYW5kIG11bHRpcGx5IGJ5IHNoaWZ0IHZhbHVlICgyLiBhcmd1bWVudClcblx0XHRcdFx0Ly8gLS0gbWFyZ2luczogW3N0cm9rZVcsIDEgKiBnYXBHcm93LCAyICogZ2FwR3Jvdywg4oCmICh2bnVtLTEpICogZ2FwR3Jvd11cblx0XHRcdFx0Ly8gLS0gLS0gaWYgdmNvdW50ID09IDAgICAgLT4gc2hpZnQgKDMpID09IHN0cm9rZVdcblx0XHRcdFx0Ly8gLS0gLS0gaWYgdmNvdW50ID09IHZudW0gLT4gc2hpZnQgKDMpID09IDBcblx0XHRcdFx0ZngocWksIGxlbipjZWxsLncpICsgZngocWksIGdhcFN1bSkgKyBmeChxaSwgbWFyZ2luc1t2Y291bnRdKSxcblx0XHRcdFx0ZnkocWksIGxlbipjZWxsLmgpICsgZnkocWksIGdhcFN1bSkgKyBmeShxaSwgbWFyZ2luc1t2Y291bnRdKV07XG5cblx0XHRcdHN1YlRyZWUuc2NhbGUgPSBbXG5cdFx0XHRcdGxlbipjZWxsLncgKyBnYXBTdW0sIFxuXHRcdFx0XHRsZW4qY2VsbC5oICsgZ2FwU3VtIF07XG5cblx0XHRcdGlmICh2bnVtID09PSAwKSB7IC8vIGlmIGZvcm1ETkEgb25seSBoYXMgYSBzaW5nbGUgdmFsdWUsIGxpa2UgOjozXG5cdFx0XHRcdHN1YlRyZWUudmFsdWUgPSBkbmFIb2xvbjtcblx0XHRcdFx0cmV0dXJuIHN1YlRyZWU7XG5cdFx0XHR9XG5cblx0XHRcdHN1YlRyZWUuY2hpbGRyZW4gPSBbXTtcblx0XHRcblx0XHRcdGZvciAobGV0IGk9MDsgKHZjb3VudCA+IDAgJiYgaSA8IDQpIHx8wqAodmNvdW50ID09PSAwICYmIGkgPCAxKTsgaSsrKSB7XG5cdFx0XHRcdGlmICh2Y291bnQgPiAxKSB7XG5cdFx0XHRcdHN1YlRyZWUuY2hpbGRyZW4gPSBcblx0XHRcdFx0XHRbLi4uc3ViVHJlZS5jaGlsZHJlbiwgY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUoZG5hSG9sb24sIHZjb3VudC0xLCBjZWxsLCBtYXJnaW5zLCBpKSBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjb25zdCB2YWwgPSBkbmFIb2xvbi5zdWJzdHIoaSwxKTtcblx0XHRcblx0XHRcdFx0c3ViVHJlZS5jaGlsZHJlbiA9IFsuLi5zdWJUcmVlLmNoaWxkcmVuLCAoe1xuXHRcdFx0XHRcdC8vIHR5cGU6ICd2YWx1ZScsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0ZG5hOiAnOjonK3ZhbCxcblx0XHRcdFx0XHRcdHZudW06IDAsIGNlbGw6IGNlbGwsXG5cdFx0XHRcdFx0XHRtYXJnaW5zOiBtYXJnaW5zLnNsaWNlKDAsMSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR2YWx1ZTogdmFsLFxuXHRcdFx0XHRcdGhlaWdodDogdmNvdW50LTEsXG5cdFx0XHRcdFx0ZGVwdGg6IHN1YlRyZWUuZGVwdGggKyAxLFxuXHRcdFx0XHRcdG9yZGVyOiBpLFxuXHRcdFx0XHRcdC8vIGNvdW50OiAxLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiBbZngoaSxjZWxsLncpLCBmeShpLGNlbGwuaCldLFxuXHRcdFx0XHRcdHNjYWxlOiBbY2VsbC53LCBjZWxsLmhdLFxuXHRcdFx0XHRcdC8vIHBhcmVudDogc3ViVHJlZVxuXHRcdFx0XHR9KSBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0ICByZXR1cm4gc3ViVHJlZTtcblx0XHR9XG5cdFx0cmV0dXJuIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlIChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG5cdH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBWYWxpZGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdHN0YXRpYyBkbmFNYXRjaGVzRm9ybSAoZG5hLCBmb3JtLCBfdmFyTGlzdD11bmRlZmluZWQsIG9wdGlvbnMpIHtcblx0XHQvKiBDaGVja3MgaWYgYSBnaXZlbiBETkEgY29kZSBtYXRjaGVzIGEgZ2l2ZW4gRk9STSAoKyBvcHRpb25hbCB2YXJpYWJsZSBsaXN0KSAqL1xuXHRcdC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXHRcdGNvbnN0IHZhckxpc3QgPSBfdmFyTGlzdCA/IF92YXJMaXN0IDogc3VwZXIuZ2V0VmFyaWFibGVzKGZvcm0pO1xuXG5cdFx0Y29uc3QgdmFsaWRhdGlvbnMgPSBfdmFyTGlzdCA/IFtcblx0XHRcdGNyZWF0ZVZhbGlkYXRpb24oXG5cdFx0XHRcdCgpID0+IHRoaXMuZm9ybU1hdGNoZXNWYXJMaXN0KGZvcm0sIHZhckxpc3QpLFxuXHRcdFx0XHQnRk9STSBkb2VzblxcJ3QgbWF0Y2ggdGhlIGdpdmVuIHZhcmlhYmxlIGxpc3QnKSxcblx0XHRcdGNyZWF0ZVZhbGlkYXRpb24oXG5cdFx0XHRcdCgpID0+IHZhckxpc3QubGVuZ3RoID09PSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSxcblx0XHRcdFx0J051bWJlciBvZiB2YXJpYWJsZXMgaW4gZ2l2ZW4gdmFyaWFibGUgbGlzdCBkb2VzblxcJ3QgbWF0Y2ggZm9ybUROQSBjb2RlIGxlbmd0aCcpLFxuXHRcdFx0Y3JlYXRlVmFsaWRhdGlvbihcblx0XHRcdFx0KCkgPT4gdGhpcy5lbmNvZGUoZm9ybSwgdmFyTGlzdCkgPT09IGRuYSxcblx0XHRcdFx0J2Zvcm1ETkEgY29kZSBpcyBpbmNvbnNpc3RlbnQgd2l0aCBGT1JNIGludGVycHJldGF0aW9uIHJlc3VsdHMgKHJlc3BlY3Rpbmcgc3BlY2lmaWVkIHZhcmlhYmxlIG9yZGVyKScpLFxuXHRcdF0gOiBbXG5cdFx0XHRjcmVhdGVWYWxpZGF0aW9uKFxuXHRcdFx0XHQoKSA9PiB2YXJMaXN0ICYmIHZhckxpc3QubGVuZ3RoID09PSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSxcblx0XHRcdFx0J051bWJlciBvZiBGT1JNIHZhcmlhYmxlcyBkb2VzblxcJ3QgbWF0Y2ggZm9ybUROQSBjb2RlIGxlbmd0aCcpLFxuXHRcdFx0Y3JlYXRlVmFsaWRhdGlvbihcblx0XHRcdFx0KCkgPT4gdGhpcy5lbmNvZGUoZm9ybSkgPT09IGRuYSxcblx0XHRcdFx0J2Zvcm1ETkEgY29kZSBpcyBpbmNvbnNpc3RlbnQgd2l0aCBGT1JNIGludGVycHJldGF0aW9uIHJlc3VsdHMnKSxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIHZhbGlkYXRpb25zLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuXHRcdFx0ZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG5cdFx0XHRzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG5cdFx0fSkgKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cbiAgICBzdGF0aWMgaXNWYWxpZEROQSAoX2lucHV0LCBvcHRpb25zKSB7XG4gICAgXHQvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgaW4gZm9ybUROQSBmb3JtYXQgKGhhcyB0byBiZSBtYXJrZWQgd2l0aCAnOjonIHRvIG5vdCBjb25mdXNlIGl0IHdpdGggYSBGT1JNIG91dCBvZiBjb25zdGFudHMpICovXG4gICAgXHRjb25zdCB7Y29tcGFyZUZvcm0sIHJlcXVpcmVNYXJrfSA9IHsgY29tcGFyZUZvcm06IHRydWUsIHJlcXVpcmVNYXJrOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICBcdGNvbnN0IGlucHV0ID0gcmVxdWlyZU1hcmsgPyBfaW5wdXQgOiAnOjonK19pbnB1dDtcblxuICAgIFx0Y29uc3QgdmFsaWRhdGlvbnMxID0gW1xuICAgIFx0XHRjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnLFxuICAgIFx0XHRcdCdmb3JtRE5BIGlucHV0IGlzIG5vdCBvZiB0eXBlIOKAmHN0cmluZ+KAmScpLFxuICAgIFx0XHRjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0LmluY2x1ZGVzKCc6OicpLFxuICAgIFx0XHRcdCdJbnB1dCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBtYXJrIOKAmDo64oCZIGZvciBmb3JtRE5BJyksXG4gICAgXHRcdGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gaW5wdXQubGVuZ3RoID49IDMsXG4gICAgXHRcdFx0J2Zvcm1ETkEgaW5wdXQgaXMgdG9vIHNob3J0JyksXG4gICAgXHRdO1xuXHRcdHZhbGlkYXRpb25zMS5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcblx0XHRcdGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuXHRcdFx0c3VjY2VzczogZGF0YSA9PiBkYXRhLFxuXHRcdH0pICk7XG5cbiAgICBcdGNvbnN0IHsgZG5hLCBmb3JtdWxhLCB2YXJMaXN0IH0gPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcbiAgICBcdGNvbnN0IHZhbGlkYXRpb25zMiA9IFtcbiAgICBcdFx0Y3JlYXRlVmFsaWRhdGlvbigoKSA9PiB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSA+PSAwLFxuICAgIFx0XHRcdCdmb3JtRE5BIGNvZGUgbGVuZ3RoIGlzIG5vdCBpbiB0aGUgcmFuZ2UgNF54JyksXG4gICAgXHRcdGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gIWRuYS5zcGxpdCgnJykuc29tZShuID0+IGlzTmFOKHBhcnNlSW50KG4pKSB8fCBwYXJzZUludChuKSA8IDAgfHwgcGFyc2VJbnQobikgPiAzKSxcbiAgICBcdFx0XHQnZm9ybUROQSBjb2RlIGlzIG5vdCBpbiBxdWF0ZXJuaW9uIGZvcm1hdCAoY29uc2lzdGluZyBvbmx5IG9mIHRoZSBudW1iZXJzIDAvMS8yLzMpJyksXG4gICAgXHRcdGNvbXBhcmVGb3JtICYmIGZvcm11bGEgIT09IHVuZGVmaW5lZFxuICAgIFx0XHQ/IGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdGhpcy5kbmFNYXRjaGVzRm9ybShkbmEsIGZvcm11bGEsIHZhckxpc3QpLFxuICAgIFx0XHRcdCdmb3JtRE5BIGNvZGUgcGFydCBkb2VzblxcJ3QgbWF0Y2ggZm9ybXVsYSBwYXJ0IG9yIGZvcm11bGEgcGFydCBkb2VzblxcJ3QgbWF0Y2ggaXRzIHNwZWNpZmllZCB2YXJpYWJsZSBvcmRlcicpIDogbnVsbCxcbiAgICBcdF0uZmlsdGVyKGZuID0+IGZuKTtcblxuXHRcdHZhbGlkYXRpb25zMi5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcblx0XHRcdGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuXHRcdFx0c3VjY2VzczogZGF0YSA9PiBkYXRhLFxuXHRcdH0pICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG5zdGF0aWMgZ2VuZXJhdGVWYXJOYW1lcyAodm51bSwgZXhjbHVkZUxpc3QgPSB1bmRlZmluZWQpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdm51bX0sIChfLCBpKSA9PiB7XG5cdFx0bGV0IGNhbmRpZGF0ZSA9IGB4XyR7aX1gO1xuXHRcdGlmIChleGNsdWRlTGlzdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR3aGlsZSAoZXhjbHVkZUxpc3QuaW5jbHVkZXMoY2FuZGlkYXRlKSkge1xuXHRcdFx0XHRjYW5kaWRhdGUgPSBjYW5kaWRhdGUrYOKAsmA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYW5kaWRhdGU7XG5cdH0pO1xufVxuXG5zdGF0aWMgdW5pdmVyc2VfMSAoeCkge1xuXHQvKiBSZXR1cm5zIHRoZSBjb25zdGl0dWVudHMgb2YgdGhlIDQtdmFsdWVkIHVuaXZlcnNlIG9mIDEgdGVybXMgZnJvbSBhIHZhcmlhYmxlIG5hbWUgKi9cblx0aWYgKHgubGVuZ3RoID4gMSkgeCA9IGBcIiR7eH1cImA7XG5cdHJldHVybiBbIFxuXHRcdGAoeygke3h9KX17MnJ8KCR7eH0pfSlgLCBcblx0XHRgKHske3h9fXsycnwke3h9fSlgLCBcblx0XHRgKCh7KCR7eH0pfSR7eH0pKHsycnwke3h9fSgke3h9KSkpYCwgXG5cdFx0YCgoeyR7eH19KCR7eH0pKSh7MnJ8KCR7eH0pfSR7eH0pKWBdO1xufVxuXG5zdGF0aWMgdW5pdmVyc2VfbiAodmFycykge1xuXHQvKiBSZXR1cm5zIHRoZSBjb25zdGl0dWVudHMgb2YgdGhlIDQtdmFsdWVkIHVuaXZlcnNlIG9mIG4gdGVybXMgZnJvbSBhIGxpc3Qgb2YgbiB2YXJpYWJsZSBuYW1lcyAqL1xuXHRjb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG5cdGNvbnN0IHVuaXYxcyA9IHZhcnMubWFwKHYgPT4gdGhpcy51bml2ZXJzZV8xKHYpKTtcblx0cmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogNCoqdm51bX0sIChfLCBpKSA9PiB7XG5cdCAgY29uc3QgaXEgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSkuc3BsaXQoJycpO1xuXHQgIGNvbnN0IHVuaXZOID0gdW5pdjFzLnJlZHVjZSgoZm9ybXVsYSwgdW5pdjEsIGosIGFycikgPT4gXG5cdFx0XHRcdFx0XHQgICBmb3JtdWxhK2AoJHt1bml2MVtpcVtqXV19KWBcblx0XHRcdFx0XHRcdCAgICsoaiA9PT0gYXJyLmxlbmd0aC0xID8gJyknIDogJycpLCAnKCcpO1xuXHQgIHJldHVybiB2bnVtID4gMSA/IHVuaXZOIDogdW5pdk4uc2xpY2UoMiwtMik7XG5cdH0pO1xufTtcblxuLy8gPCBFTkRcblxuXHRzdGF0aWMgdG90YWxWYXJzRnJvbUROQSAoZm9ybUROQSkgeyBcblx0XHQvKiBDYWxjdWxhdGVzIHZhcmlhYmxlIG51bWJlciBmcm9tIGZvcm1ETkEgKi9cblxuXHRcdC8vIGRldGFjaCBmcm9tIGZvcm1ETkEgbWFyayAnOjonXG5cdFx0Y29uc3QgZG5hID0gZm9ybUROQS5zcGxpdCgnOicpLnBvcCgpO1xuXG5cdFx0Ly8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgdmFyaWFibGVzIGZyb20gdGhlIGxlbmdodCBvZiB0aGUgc3RyaW5nXG5cdFx0Y29uc3QgbiA9IE1hdGgubG9nKGRuYS5sZW5ndGgpL01hdGgubG9nKDQpOyAvLyBsb2dfNChkbmEgbGVuZ3RoKSA9IHZhcmlhYmxlIG51bWJlclxuXHRcdHJldHVybiBuICUgMSA9PT0gMCA/IG4gOiBOYU47XG5cdH07XG5cbiAgICBzdGF0aWMgcmVwYWlyRE5BIChpbnB1dCkge1xuICAgIFx0LyogUmVwYWlycyBhIGdpdmVuIHN0cmluZyB0aGF0IGlzIG5vdCBpbiBhIHZhbGlkIGZvcm1ETkEgZm9ybSB0byBwYXNzIGFzIGZvcm1ETkEgKi9cblxuICAgIFx0Ly8gaWYgdGhlIGlucHV0IGNvbnRhaW5zIHRoZSBtYXJrICc6OicgZm9yIGZvcm1ETkEsIGRpc3Rpbmd1aXNoIHR3byBjYXNlc1xuICAgIFx0aWYgKGlucHV0LmluY2x1ZGVzKCc6OicpKSB7XG4gICAgXHRcdC8vIENhc2UgMTogaW5wdXQgaXMgb2YgZm9ybSBmLlt4XTo6biBvciBmOjpuIC0+IGYgd2lsbCBiZSBlbmNvZGVkIGFzIGEgRk9STSAod2l0aCBbeF0gYXMgdmFyaWFibGUgb3JkZXIsIGlmIGl0IG1hdGNoZXMgdGhlIEZPUk1zIHZhcmlhYmxlcyBpbiBudW1iZXIgYW5kIGxhYmVscylcbiAgICBcdFx0Ly8gLSBJZiB0aGUgZm9ybUROQSBoYXMgYmVlbiB3ZWxsIGZvcm1lZCBpbiB0aGUgZmlyc3QgcGxhY2UsIHRoZSBvdXRwdXQgd2lsbCBiZSBlcXVpdmFsZW50XG4gICAgXHRcdC8vIC0gSWYgdGhlIGRuYSBwYXJ0IGRvZXNuJ3QgbWF0Y2ggdGhlIEZPUk0gcGFydCwgdGhlIGRuYSBwYXJ0IHdpbGwgYmUgY29ycmVjdGVkXG4gICAgXHRcdC8vIC0gSWYgdGhlIHZhcmlhYmxlIG9yZGVyIGRvZXNuJ3QgbWF0Y2ggdGhlIEZPUk0gdmFyaWFibGVzLCBpdCB3aWxsIGFsc28gYmUgY29ycmVjdGVkXG4gICAgXHRcdC8vIE5vdGUgdGhhdCB0aGlzIGNhc2UgZWZmZWN0aXZlbHkgaW50ZXJwcmV0cyB0aGUgaW5wdXQgYXMgRk9STSBpbnB1dCBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBmb3JtRE5BIGlzIGNvbnNpc3RlbnQsIGJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byBpbmZlciBhIEZPUk0gZnJvbSBpdHMgRE5BLlxuICAgIFx0XHRjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgIFx0XHRpZiAocGFydHMuZm9ybXVsYSkge1xuXHRcdCAgICBcdC8vIGlmIHRoZXJlIGlzIGEgW3hdLXBhcnQsIGV4dHJhY3QgdmFyaWFibGUgb3JkZXIgYW5kIGNoZWNrIGlmIGl0cyB2YWxpZCBmb3IgdGhlIEZPUk1cblx0XHQgICAgXHRsZXQgdmFyTGlzdCA9IHVuZGVmaW5lZDtcblx0XHQgICAgXHR0cnkgeyAvLyB0cnkuLi5jYXRjaCBhdm9pZHMgaW50ZXJydXB0aW9uIGJ5IEVycm9yXG5cdCAgICBcdFx0XHRpZiAocGFydHMudmFyTGlzdCAmJiB0aGlzLmZvcm1NYXRjaGVzVmFyTGlzdChwYXJ0cy5mb3JtdWxhLCBwYXJ0cy52YXJMaXN0KSkgdmFyTGlzdCA9IHBhcnRzLnZhckxpc3Q7XG5cdFx0ICAgIFx0fSBjYXRjaCAoZSkge1xuXHRcdCAgICBcdFx0Y29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuXHRcdCAgICBcdH1cblx0ICAgIFx0XHQvLyByZS1lbmNvZGUgdG8gcmV0dXJuIGNvcnJlY3QgZm9ybUROQSBmb3IgdGhlIGdpdmVuIGZvcm11bGFcblx0ICAgIFx0XHRyZXR1cm4gdGhpcy5mb3JtVG9ETkEocGFydHMuZm9ybXVsYSwgdmFyTGlzdCk7XG5cdCAgICBcdH1cblx0ICAgIFx0Ly8gQ2FzZSAyOiBpbnB1dCBpcyBvZiBmb3JtIDo6biAtPiB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWVcblx0ICAgIFx0Ly8gTm90ZSB0aGF0IGEgRk9STSB3aWxsIG5vdCBiZSBkZWNvZGVkIGZyb20gdGhlIGRuYSBhbG9uZSwgc2luY2UgdGhpcyBGT1JNIHdvdWxkIGJlIG9waW5pb25hdGVkXG5cdCAgICBcdGlmICghdGhpcy5pc1ZhbGlkRE5BKGlucHV0KSkgcmV0dXJuIG51bGw7XG5cblx0ICAgIFx0cmV0dXJuIGlucHV0O1xuXHQgICAgfVxuXHQgICAgLy8gaWYgdGhlIGlucHV0IGlzIG5vdCBtYXJrZWQgYXMgZm9ybUROQSwgaXQgd2lsbCBqdXN0IGJlIGVuY29kZWQgYXMgYSBGT1JNXG5cdCAgICByZXR1cm4gdGhpcy5mb3JtVG9ETkEoaW5wdXQpO1xuICAgIH1cblxuXHRzdGF0aWMgZ2V0RE5BcGFydHMgKGZvcm1ETkEpIHtcblx0XHQvKiBEZWNvbXBvc2VzIGEgZm9ybUROQSBzdHJpbmcgaW50byBpdHMgMy8yLzEgcGFydHMgKi9cblx0XHRsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuXG5cdFx0Y29uc3QgcGFydHMgPSBmb3JtRE5BLnNwbGl0KCc6Jyk7XG5cdFx0ZG5hID0gcGFydHMucG9wKCk7XG5cblx0XHRpZiAocGFydHNbMF0ubGVuZ3RoID4gMCkge1xuICAgIFx0XHRjb25zdCBmb3JtX3BhcnRzID0gcGFydHNbMF0uc3BsaXQoJy4nKTtcbiAgICBcdFx0Zm9ybXVsYSA9IGZvcm1fcGFydHNbMF07XG4gICAgXHRcdHZhckxpc3QgPSBmb3JtX3BhcnRzLmxlbmd0aCA+IDEgPyBmb3JtX3BhcnRzWzFdLnNsaWNlKDEsLTEpLnNwbGl0KCcsJykgOiB2YXJMaXN0O1xuICAgIFx0fVxuXG5cdFx0cmV0dXJuICh7IGRuYTogZG5hLCBmb3JtdWxhOiBmb3JtdWxhLCB2YXJMaXN0OiB2YXJMaXN0IH0pO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBwYWQsIGZsYXR0ZW4sIGluY2x1ZGUsIFZBUkNPREUsIFZBUkNPREVfUkVWLCBjcmVhdGVWYWxpZGF0aW9uLCBjaGVja0JyYWNrZXRNYXRjaGluZywgY2hlY2tMaXRlcmFsTWF0Y2hpbmcsIGNvbGxhcHNlTGl0ZXJhbHMsIGdldEJyYWNrZXRVbml0cyB9IGZyb20gJy4uLy4uL2NvbW1vbi9oZWxwZXInO1xuaW1wb3J0IEZDYWxjIGZyb20gJy4vZmNhbGMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRm9ybSBleHRlbmRzIEZDYWxjIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAnZm9ybScgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEZvcm0gQ2FsY3VsYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY2FsYyhfZm9ybSkge1xuICAgICAgICAvKiBDYWxjdWxhdGVzIGEgZ2l2ZW4gZm9ybSByZWN1cnNpdmVseSBcblxuICAgICAgICBOb3RlOiBEbyBOT1QgdXNlIHRoaXMgZnVuY3Rpb24gZm9yIGZvcm11bGFzIHdpdGggdmFyaWFibGVzIVxuICAgICAgICAgICAgICBBc3N1bWVzIHg9MCBmb3IgYWxsIHZhcmlhYmxlcy4gVXNlIGludGVyQ2FsYygpIGluc3RlYWQuXG4gICAgICAgICovXG5cbiAgICAgICAgbGV0IGZ4ID0gMDtcbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0uc3BhY2UpIHtcbiAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMuY2FsYyhmb3JtLnNwYWNlW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnY29uc3QnKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgIGlmKCFpc05hTihmb3JtLnNwYWNlW2ldLnZhbHVlKSkgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndW5jbGVhcicpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgIGxldCBuZXN0ZWRWYWxzID0gW107XG4gICAgICAgICAgICAgICAgY29uc3QgZlJlRW50cnkgPSBmb3JtLnNwYWNlW2ldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBmUmVFbnRyeS5uZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmVzdGVkVmFscyA9IFsuLi5uZXN0ZWRWYWxzLCB0aGlzLmNhbGMoZlJlRW50cnkubmVzdGVkW2pdKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGZvciBldmVuIHJlc29sdXRpb25zICh0b3RhbCBuZXN0ZWQgYXJndW1lbnRzKSwgcmVFbnRyeSBudW1iZXIgd2lsbCBiZSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBkb2Vzbid0IG1hdHRlciBpZiBpdHMgZXZlbiBvciBvZGRcbiAgICAgICAgICAgICAgICBjb25zdCByZUVudHJ5TnVtYmVyID0gKGZSZUVudHJ5Lm5lc3RlZC5sZW5ndGggJSAyID09PSAwKSA/IHVuZGVmaW5lZCA6IGZSZUVudHJ5LnJlRXZlbjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBub3RhdGlvbiByZWFkaW5nOiB7ZGVlcGVzdCwgLi4uLCBzaGFsbG93ZXN0fSAgdXNlIG5lc3RlZFZhbHMucmV2ZXJzZSgpIHRvIHJldmVyc2UgdmFyaWFibGVzXG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5yZUVudHJ5KHJlRW50cnlOdW1iZXIsIGZSZUVudHJ5Lmxhc3RPcGVuLCBmUmVFbnRyeS5hbHRJbnRlcnByZXRhdGlvbiwgLi4ubmVzdGVkVmFscykgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihmb3JtLnVubWFya2VkKSByZXR1cm4gZng7XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52KCBmeCApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY2FsY0FsbChfZm9ybSkge1xuICAgICAgICAvKiBJbnRlcnByZXQgYW5kIGNhbGN1bGF0ZSBhbGwgcG9zc2libGUgdmFsdWVzIGZvciB0aGUgZm9ybVxuICAgICAgICAgICAocmVmYWN0b3JlZDogMTAuMTAuMjAyMClcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBjb25zdCB2YXJzID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSk7XG4gICAgICAgIGNvbnN0IHZudW0gPSB2YXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdmFscyA9IHt9O1xuXG4gICAgICAgIGlmICh2bnVtIDwgMSkge1xuICAgICAgICAgICAgdmFsc1snUmVzdWx0J10gPSB0aGlzLmNhbGMoZm9ybSk7XG4gICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwgNCoqdm51bTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnByVmFscyA9IHBhZChpLnRvU3RyaW5nKDQpLCB2bnVtKTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycHIgPSBpbnRlcnByVmFscy5zcGxpdCgnJykubWFwKCh2YWwsbikgPT4gKHt2YXI6IHZhcnNbbl0sIHZhbHVlOiBwYXJzZUludCh2YWwpfSkpO1xuXG4gICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ludGVycHJWYWxzXSA9IHRoaXMuaW50ZXJDYWxjKGZvcm0sIGludGVycHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnRlckNhbGMoZm9ybSwgaW50ZXJwcikge1xuICAgICAgICAvKiBJbnRlcnByZXRzIGEgZm9ybSBhbmQgY2FsY3VsYXRlcyB0aGUgcmVzdWx0IG9mIHRoZSBpbnRlcnByZXRhdGlvbiAqL1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNhbGMoIHRoaXMuaW50ZXJwcmV0KGZvcm0sIGludGVycHIpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnRlcnByZXQoX2Zvcm0sIGludGVycHIpIHtcbiAgICAgICAgLyogSW50ZXJwcmV0cyBhIGZvcm0gd2l0aCBzcGVjaWZpZWQgdmFsdWVzIGZvciBlYWNoIHZhcmlhYmxlXG5cbiAgICAgICAgaW50ZXJwcjogW3t2YXI6ICd4JywgdmFsdWU6IG59LCDigKZdXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICAgICAgY29uc3QgaW50ZXJwckZvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvcm0pKTsgLy8gY2xvbmUgZm9ybVxuXG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKGludGVycHJGb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBpbnRlcnByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0uc3ltYm9sID09PSBpbnRlcnByW3ZdLnZhcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VbaV0udmFsdWUgPSBpbnRlcnByW3ZdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW50ZXJwckZvcm07XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBFeHRlbnNpb25zIG9mIEZDYWxjXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHtcbiAgICAgICAgaWYodHlwZW9mKGZ4KSA9PT0gQXJyYXkgfHwgdHlwZW9mKGZ5KSA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5yZWxfbG9naWMoZngsIGZ5KTtcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbCguLi5mVmFscyk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHtcbiAgICAgICAgaWYodHlwZW9mKGZ4KSA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdXBlci5pbnZfbG9naWMoZngpO1xuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW52KGZ4LCBuKTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbnZlcnNpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHBhcnNlTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLyogQ29udmVydHMgZnJvbSBwYXJhbnRoZXNpcyBub3RhdGlvbiBpbnRvIEpTT04gc3RyaW5nIGFuZCBwYXJzZXMgYXMgSlNPTiBvYmplY3QgKi9cblxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmb3JtdWxhIGludG8gYSBKU09OIHN0cmluZ1xuICAgICAgICBjb25zdCBqc29uU3RyID0gdGhpcy5jb252RnJvbUxpbmVhcihmb3JtdWxhKTtcblxuICAgICAgICAvLyB0cnkgcGFyc2luZyB0aGUgc3RyaW5nIGFzIGEgSlNPTiBvYmplY3RcbiAgICAgICAgbGV0IGpzb24gPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cik7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29udkZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvLyBjbGVhbiBmb3JtdWxhIHN0cmluZyBmcm9tIHdoaXRlc3BhY2VcbiAgICAgICAgY29uc3QgY2xlYW5Gb3JtdWxhID0gdGhpcy5jbGVhbkxpbmVhcihmb3JtdWxhKTtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKGNsZWFuRm9ybXVsYSk7XG4gICAgICAgIHJldHVybiBmbGF0dGVuKGFycikuam9pbignJyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsZWFuTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgbGV0IGNsZWFuRm9ybXVsYSA9ICcnO1xuICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcblxuICAgICAgICAgICAgLy8gb21pdCB3aGl0ZXNwYWNlIG91dHNpZGUgb2YgcXVvdGVzXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluUXVvdGUgfHzCoGluU2xhc2gpIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYW5Gb3JtdWxhO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25zdHJ1Y3RGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLyogQ29udmVydHMgZnJvbSBwYXJhbnRoZXNpcyBub3RhdGlvbiB0byBKU09OLWZvcm0gKi9cblxuICAgICAgICBsZXQgY29tcEFsbCA9IFtdO1xuICAgICAgICBsZXQgdW5tYXJrZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGNoZWNrIGZvciBhbGwgZW5jbG9zaW5nIG91dGVyIGZvcm1cbiAgICAgICAgbGV0IGNvdW50RGVwdGggPSAwO1xuICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb3VudERlcHRoID09IDApICYmIChpICE9IDApKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBmb3JtdWxhLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnICB7J107XG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1widHlwZVwiOlwiZm9ybVwiLCddO1xuXG4gICAgICAgIGlmICh1bm1hcmtlZCkgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXCJ1bm1hcmtlZFwiOnRydWUsJ107XG4gICAgICAgIGVsc2UgZm9ybXVsYSA9IGZvcm11bGEuc2xpY2UoMSxmb3JtdWxhLmxlbmd0aC0xKTtcblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInNwYWNlXCI6WyddO1xuXG5cbiAgICAgICAgbGV0IHBhcnRzID0gWycnXTtcblxuICAgICAgICBjb3VudERlcHRoID0gMDtcbiAgICAgICAgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgcmVDaGFyID0gJ+KGuyc7XG4gICAgICAgIGNvbnN0IG9wdENoYXIgPSAn4qS0JztcbiAgICAgICAgY29uc3QgbmVzdENoYXIgPSAn4qS1JztcblxuICAgICAgICBmb3IgKGxldCBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIGxldCBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZDaGFyID0gZm9ybXVsYVtpLTFdO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKScgfHzCoGNoYXIgPT09ICd9JykgY291bnREZXB0aC0tO1xuICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnKCcgfHzCoGNoYXIgPT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0ICh4KSBkb2Vzbid0IG5lZWQgdG8gYmUgc2VwYXJhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHBhcnRzID0gWy4uLnBhcnRzLCAnJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY291bnREZXB0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggKHByZXZDaGFyID09PSAnKScgfHzCoHByZXZDaGFyID09PSAnfScpICYmICEoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpICkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBjaGFyIGZvbGxvd3MgKHgpLCBzZXBhcmF0ZTsgYnV0IG5vdCBpZiBpdCBpcyBhbm90aGVyICcpJ1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkgcGFydHMgPSBbLi4ucGFydHMsICcnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdW5pcXVlIHNlcGFyYXRpb24gY2hhcnMgZm9yIHJlLWVudHJ5IGZvcm1zIGZvciBlYXN5IHNwbGl0dGluZ1xuICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICcsJykgY2hhciA9IG5lc3RDaGFyO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ3wnKSBjaGFyID0gb3B0Q2hhcjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICdAJykgY2hhciA9IHJlQ2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAvLyBhZGQgY2hhciB0byB0aGUgbGF0ZXN0IHB1c2hlZCBwYXJ0XG4gICAgICAgICAgICBwYXJ0c1twYXJ0cy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSBpbiBwYXJ0cykge1xuXG4gICAgICAgICAgICBpZiAocGFydHNbaV1bMF0gPT09ICcoJykgeyBcbiAgICAgICAgICAgICAgICAvLyBpZiBwYXJ0IGlzIGZvcm1cbiAgICAgICAgICAgICAgICBsZXQgY29tcCA9IFt0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocGFydHNbaV0pXTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFydHNbaV1bMF0gPT09ICd7Jykge1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgcGFydCBpcyByZS1lbnRyeSBmb3JtXG5cbiAgICAgICAgICAgICAgICBsZXQgY29tcCA9IFsnICB7J107XG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJyZUVudHJ5XCIsJ107XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50ID0gcGFydHNbaV0uc2xpY2UoMSxwYXJ0c1tpXS5sZW5ndGgtMSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlTmVzdGVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQuaW5jbHVkZXMocmVDaGFyKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXcgcmUtZW50cnkgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFsdEludGVycHIgPSBjb250ZW50LnN0YXJ0c1dpdGgoYGFsdCR7b3B0Q2hhcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX2NvbnRlbnQgPSBhbHRJbnRlcnByID8gY29udGVudC5zbGljZSg0LCkgOiBjb250ZW50LnNsaWNlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBbLTEsLTFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn0uX2ApKSB0eXBlID0gWzMsMV1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn0uYCkpIHR5cGUgPSBbMywwXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfV9gKSkgdHlwZSA9IFsyLDFdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9YCkpIHR5cGUgPSBbMiwwXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAke3JlQ2hhcn1fYCkpIHR5cGUgPSBbMCwxXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKHJlQ2hhcikpIHR5cGUgPSBbMCwwXVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVDaGFyU3VtID0gdHlwZVswXSArIHR5cGVbMV0gKyAxO1xuICAgICAgICAgICAgICAgICAgICByZU5lc3RlZCA9IF9jb250ZW50LnNsaWNlKHR5cGVDaGFyU3VtLCkuc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZU5lc3RlZC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZVswXSA9PT0gMikgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6ZmFsc2UsJ107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVbMV0gPiAwKSBjb21wID0gWy4uLmNvbXAsICdcImxhc3RPcGVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcImxhc3RPcGVuXCI6ZmFsc2UsJ107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIpIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG9sZCByZS1lbnRyeSBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVQYXJ0cyA9IGNvbnRlbnQuc3BsaXQob3B0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVOZXN0ZWQgPSByZVBhcnRzW3JlUGFydHMubGVuZ3RoLTFdLnNwbGl0KG5lc3RDaGFyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVOZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpcInVuZGVmaW5lZFwiLCddO1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnMnInIHx8IHJlUGFydHNbMV0gPT09ICcycicgfHwgcmVQYXJ0c1syXSA9PT0gJzJyJykgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzFdID09PSAnb3BlbicgfHwgcmVQYXJ0c1syXSA9PT0gJ29wZW4nKSBjb21wID0gWy4uLmNvbXAsICdcImxhc3RPcGVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcImxhc3RPcGVuXCI6ZmFsc2UsJ107XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdhbHQnIHx8IHJlUGFydHNbMV0gPT09ICdhbHQnIHx8IHJlUGFydHNbMl0gPT09ICdhbHQnKSBjb21wID0gWy4uLmNvbXAsICdcImFsdEludGVycHJldGF0aW9uXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcImFsdEludGVycHJldGF0aW9uXCI6ZmFsc2UsJ107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJuZXN0ZWRcIjpbJ107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuIGluIHJlTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKHJlTmVzdGVkW25dKSBdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobiA8IHJlTmVzdGVkLmxlbmd0aC0xKSBjb21wID0gWy4uLmNvbXAsICcsJ107XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlTmVzdGVkW25dID0gdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKCByZU5lc3RlZFtuXSApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ119ICAnXTtcblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSB3ZSBoYXZlIHZhcmlhYmxlcy9jb25zdGFudHNcblxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gW107XG5cbiAgICAgICAgICAgICAgICBsZXQgdmFycyA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gcGFydHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hhciA9IHBhcnRzW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyayBxdW90ZWQgc3RyaW5nIHdpdGggYSAn4oCWJyBmb3IgaWRlbnRpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblF1b3RlKSB2YXJzID0gWy4uLnZhcnMsICfigJYnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgdW5jbGVhciBmb3JtIHdpdGggYSAn4oC9JyBmb3IgaWRlbnRpZmljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpblNsYXNoKSB2YXJzID0gWy4uLnZhcnMsICfigL0nXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW5RdW90ZSAmJiAhaW5TbGFzaCkgdmFycyA9IFsuLi52YXJzLCAnJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBxdW90ZSBjaGFycyBpbnNpZGUgc2xhc2hlcyB3aWxsIGJlIGVzY2FwZWQgdG8gbm90IGludGVyZmVyZSB3aXRoIEpTT04gc3ludGF4XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiBpblNsYXNoKSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9ICdcXFxcJyArIGNoYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gdmFycykge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YodmFyc1t2XSkgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICcgIHsnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTih2YXJzW3ZdKSAmJiB2YXJzW3ZdLmxlbmd0aCA+IDAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YXJzW3ZdWzBdICE9PSAn4oC9JyAmJiB2YXJzW3ZdWzBdICE9PSAn4oCWJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJjb25zdFwiLCddOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widmFsdWVcIjonXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgdmFyc1t2XV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFyc1t2XVswXSA9PT0gJ+KAvScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwidW5jbGVhclwiLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ2YWx1ZVwiOjIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInN5bWJvbFwiOiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInZhclwiLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ2YWx1ZVwiOlwiKlwiLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJzeW1ib2xcIjonXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhcnNbdl1bMF0gPT09ICfigJYnKSBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCInK3ZhcnNbdl0rJ1wiJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnfSAgJ107XG4gICAgICAgICAgICAgICAgICAgIGlmICh2IDwgdmFycy5sZW5ndGgtMSkgY29tcCA9IFsuLi5jb21wLCAnLCddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICAgICAgfSAvLyBlbmQgZWxzZVxuXG4gICAgICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsIHBhcnRzW2ldXTtcbiAgICAgICAgICAgIGlmIChpIDwgcGFydHMubGVuZ3RoLTEpIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJywnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ119ICAnXTtcblxuICAgICAgICByZXR1cm4gY29tcEFsbDtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVwcmVzZW50YXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMganNvblN0cmluZyhfZm9ybSkge1xuICAgICAgICAvKiByZXR1cm5zIGpzb24tcmVwcmVzZW50YXRpb24gb2YgdGhlIHNwZWNpZmllZCBGT1JNICovXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG4gICAgXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmb3JtLCB1bmRlZmluZWQsIDIpO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZ2V0VmFyaWFibGVzKF9mb3JtKSB7XG4gICAgICAgIC8qIHBhcnNlcyBhIEZPUk0gdG8gZ2V0IGFsbCBvZiBpdHMgdmFyaWFibGVzIGFuZCBzb3J0cyB0aGVtIHVzaW5nIHRoZSBKUyBBcnJheS5zb3J0KCkgbWV0aG9kXG4gICAgICAgIHdoaWNoIHNvcnRzIGJ5IGNvbXBhcmluZyBVVEYtMTYgY29kZSB1bml0IHZhbHVlcy5cbiAgICAgICAgTm90ZTogQnkgY29udmVudGlvbiwgdGhlIHByb2Nlc3Mgb2YgZGVyaXZpbmcgZm9ybUROQSBmcm9tIGEgZ2l2ZW4gRk9STSBpbnZvbHZlcyBvcmRlcmluZyBvZiB0aGUgZXh0cmFjdGVkIHZhcmlhYmxlcyBieSB0aGlzIHNhbWUgc29ydGluZyBtZXRob2QsIGlmIG5vIHNwZWNpYWwgb3JkZXJpbmcgaXMgc3BlY2lmaWVkLiAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGxldCB2YXJzID0gW107XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKGZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUodmFycywgc3BhY2VbaV0uc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFycyA9IFsuLi52YXJzLCBzcGFjZVtpXS5zeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhcnMuc29ydCgpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgdHJhdmVyc2VGb3JtKGZvcm0sZnVuYykge1xuICAgICAgICAvKiB0cmF2ZXJzZXMgb25seSBmb3JtLXR5cGVzIGluIGEganNvbiB0cmVlICovXG4gICAgICAgIGNvbnN0IGJyZWFrVHJhdiA9IGZ1bmMuYXBwbHkodGhpcyxbZm9ybV0pO1xuXG4gICAgICAgIGlmIChmb3JtLnNwYWNlKSB7IC8vIGZvcm0udHlwZTogJ2Zvcm0nXG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJyB8fCBmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJlYWtMb29wID0gdGhpcy50cmF2ZXJzZUZvcm0oZm9ybS5zcGFjZVtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChicmVha0xvb3ApIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0ubmVzdGVkKSB7IC8vIGZvcm0udHlwZTogJ3JlRW50cnknXG4gICAgICAgICAgICBpZiAoZm9ybS5uZXN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5uZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnJlYWtMb29wID0gdGhpcy50cmF2ZXJzZUZvcm0oZm9ybS5uZXN0ZWRbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChicmVha0xvb3ApIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUjogTm90IGEgZm9ybSEnKTtcblxuICAgICAgICByZXR1cm4gYnJlYWtUcmF2O1xuICAgIH07XG5cbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICAgICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2Zvcm1mb3JtLXRvb2xib3ggXG4gICAgKi9cblxuICAgIHN0YXRpYyBnZXRUb3RhbFZhcnMgKGZvcm1TdHIpIHtcbiAgICAgICAgLyogZ2V0cyB0b3RhbCB2YXJpYWJsZSBudW1iZXIgb2YgYSBGT1JNICovXG4gICAgICAgIHJldHVybiB0aGlzLmdldFZhcmlhYmxlcyhmb3JtU3RyLnN1YnN0cigpKS5sZW5ndGg7XG4gICAgfTtcblxuICAgIHN0YXRpYyByZU9yZGVyVmFycyAoZm9ybXVsYSwgdmFyb3JkZXIpIHtcbiAgICAgICAgLyogcmUtb3JkZXJzIHZhcmlhYmxlcyBpbiBhIGZvcm11bGEgdG8gbWF0Y2ggYW4gb3JkZXJpbmcgcGF0dGVybiAqL1xuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGVWYXJzKCB0aGlzLmVuY29kZVZhcnMoZm9ybXVsYSwgdmFyb3JkZXIpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWNvZGVWYXJzIChlbmNTdHIsIGRlY29kZVBhdHRlcm49dW5kZWZpbmVkKSB7XG4gICAgICAvKiBkZWNvZGVzIHZhcmlhYmxlcyBpbiBhbiBlbmNvZGVkIGZvcm11bGEgc3RyaW5nIHdpdGggYW4gb3B0aW9uYWwgZGVjb2RlIHBhdHRlcm4gKi9cbiAgICAgIGxldCByZXZDb2RlID0gVkFSQ09ERV9SRVY7XG4gICAgICBpZiAoZGVjb2RlUGF0dGVybikge1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVkFSQ09ERV9SRVYpO1xuICAgICAgICBjb25zdCB2YXJQYXJ0ID0ga2V5cy5zbGljZSgwLGRlY29kZVBhdHRlcm4ubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbW9kUGFydCA9IGtleXMuc2xpY2UoLTMpO1xuICAgICAgICBcbiAgICAgICAgcmV2Q29kZSA9IHZhclBhcnQuY29uY2F0KG1vZFBhcnQpLnJlZHVjZSggKGNvZGUsa2V5LGkpID0+ICh7Li4uY29kZSwgXG4gICAgICAgICAgICBba2V5XTogaSA8IGRlY29kZVBhdHRlcm4ubGVuZ3RoID8gZGVjb2RlUGF0dGVybltpXSA6IFZBUkNPREVfUkVWW2tleV0sIH0pLHt9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVuY1N0ci5zcGxpdCgnJylcbiAgICAgICAgICAgICAgICAubWFwKGMgPT4gT2JqZWN0LmtleXMocmV2Q29kZSkuaW5kZXhPZihjKSA+IC0xID8gcmV2Q29kZVtjXSA6IGMpLmpvaW4oJycpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZW5jb2RlVmFycyAoZm9ybXVsYSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgICAvKiBlbmNvZGVzIHZhcmlhYmxlcyBpbiBhIGZvcm11bGEgc3RyaW5nIGFjY29yZGluZyB0byBhIGdpdmVuIHZhcmlhYmxlIG9yZGVyIChhcnJheSkgKi9cbiAgICAgIGlmICghdmFyb3JkZXIpIHZhcm9yZGVyID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHJpbmcpIHsgLy8gdGh4IHRvIENvb2xBSjg2OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNjk2OTQ4NlxuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBmaXhQdG4gPSB7YWx0OiAnYWx0KD89XFx8KScsIHJFdmVuOiAnMnIoPz1cXHwpJywgck9kZDogJzJyKzEoPz1cXHwpJ307XG4gICAgICBjb25zdCBwdG4gPSB2ID0+IHtcbiAgICAgICAgaWYgKHYubGVuZ3RoID4gMSkgcmV0dXJuIGBcXFwiJHtlc2NhcGVSZWdFeHAodil9XFxcImA7IC8vICg/PD1cXFwiKSgke3Z9KSg/PVxcXCIpXG4gICAgICAgIHJldHVybiBgJHtlc2NhcGVSZWdFeHAodil9YDtcbiAgICAgIH07XG4gICAgICBcbiAgICAgIHJldHVybiB2YXJvcmRlclxuICAgICAgICAucmVkdWNlKChlbmNTdHIsdixpKSA9PiBlbmNTdHJcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5hbHQsICdnJyksVkFSQ09ERVsnYWx0J10gKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLnJFdmVuLCAnZycpLFZBUkNPREVbJzJyJ10pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uck9kZCwgJ2cnKSxWQVJDT0RFWycycisxJ10pXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChwdG4odiksICdnJyksKE9iamVjdC5rZXlzKFZBUkNPREVfUkVWKVtpXSkgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICwgZm9ybXVsYSApO1xuICAgIH07XG5cblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBOZXcgQWRkaXRpb25zIDAxLzIwMjA6XG4gICAgKi9cblxuICAgIHN0YXRpYyBtYXRjaERlZmF1bHRWYXJPcmRlciAodmFyTGlzdCkge1xuICAgICAgICAvKiBIZWxwZXIgdG8gbWF0Y2ggZGVmYXVsdCBvcmRlcmluZ3MgZm9yIGNhbGN1bGF0aW9uIGFuZCB2bWFwcyAqL1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJ0VMUicpIHJldHVybiBbJ0wnLCdFJywnUiddO1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJystTFInKSByZXR1cm4gWyctJywnTCcsJ1InLCcrJ107XG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnKy1FTFInKSByZXR1cm4gWyctJywnTCcsJ0UnLCdSJywnKyddO1xuICAgICAgICByZXR1cm4gdmFyTGlzdDtcbiAgICB9XG5cbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgTmV3IEFkZGl0aW9ucyAxMC8yMDIwOlxuICAgICovXG5cbiAgICBzdGF0aWMgaXNWYWxpZEZvcm0gKGlucHV0LCBvcHRpb25zKcKge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBmb3JtdWxhIG9yIEpTT04tRk9STSAqL1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyA/IFxuICAgICAgICAgICAgaXNWYWxpZEZvcm11bGEoaW5wdXQsIG9wdGlvbnMpIDogaXNWYWxpZEpTT05Gb3JtKGlucHV0LCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWYWxpZEZvcm11bGEgKGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIGZvcm11bGEgKi9cbiAgICAgICAgLy8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgbGV0IHZhbGlkYXRpb25zMSA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgJ0Zvcm11bGEgaW5wdXQgaXMgbm90IG9mIHR5cGUg4oCYc3RyaW5n4oCZJyksXG4gICAgICAgIF07XG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiAwKSB2YWxpZGF0aW9uczEgPSBbLi4udmFsaWRhdGlvbnMxLFxuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpICYmICEhY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qgc2Fuc0xpdGVyYWxzID0gY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJ1wiJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBzYW5zTGl0ZXJhbHMgPyBjaGVja0xpdGVyYWxNYXRjaGluZyhzYW5zTGl0ZXJhbHMsICcvJykgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb2YgcXVvdGVzIGZvciBsaXRlcmFsIHZhcmlhYmxlcyAoZS5nLjogXCJ4XCIpIG9yIG51bWJlciBvZiBzbGFzaGVzIGZvciB1bmNsZWFyIEZPUk1zIChlLmcuOiAveC8pIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgICAgIC8vIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAvLyAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3BlblNlcCA9ICfigYUnLCBjbG9zZVNlcCA9ICfigYYnO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXJVbmNsRm9ybXMgPSBpbnB1dC5zcGxpdCgnLycpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gYWNjICsgKGlkeCAlIDIgPT09IDEgPyBvcGVuU2VwIDogY2xvc2VTZXApICsgY3VyclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdW5jbEZvcm1Vbml0cyA9IGdldEJyYWNrZXRVbml0cyhkaXJVbmNsRm9ybXMsIHtvcGVuOiBvcGVuU2VwLCBjbG9zZTogY2xvc2VTZXB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdW5jbEZvcm1Vbml0cy5ldmVyeSh1bmNsRm9ybSA9PiB1bmNsRm9ybS5zcGxpdCgnXCInKS5sZW5ndGggPCAyKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG9wZW5TZXAgPSAn4oGMJywgY2xvc2VTZXAgPSAn4oGNJztcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlyTGl0ZXJhbHMgPSBpbnB1dC5zcGxpdCgnXCInKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGFjYyArIChpZHggJSAyID09PSAxID8gb3BlblNlcCA6IGNsb3NlU2VwKSArIGN1cnJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxpdGVyYWxVbml0cyA9IGdldEJyYWNrZXRVbml0cyhkaXJMaXRlcmFscywge29wZW46IG9wZW5TZXAsIGNsb3NlOiBjbG9zZVNlcH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxpdGVyYWxVbml0cy5ldmVyeShsaXRlcmFsID0+IClcbiAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIC8vICdOdW1iZXIgb2YgcXVvdGVzIGZvciBsaXRlcmFsIHZhcmlhYmxlcyAoZS5nLjogXCJ4XCIpIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgXTtcbiAgICAgICAgdmFsaWRhdGlvbnMxLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgIH0pICk7XG5cbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuSW5wdXQgPSBjb2xsYXBzZUxpdGVyYWxzKCBjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKSwgJy8nKTtcblxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbnMyID0gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKGNsZWFuSW5wdXQsICcoJywgJyknKSxcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlciBvciBvcGVuaW5nL2Nsb3Npbmcgb3JkZXIgb2YgcGFyYW50aGVzZXMgaW4gZm9ybXVsYSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoY2xlYW5JbnB1dCwgJ3snLCAnfScpLFxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyIG9yIG9wZW5pbmcvY2xvc2luZyBvcmRlciBvZiBjdXJseSBicmFja2V0cyBpbiBmb3JtdWxhIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhbGlkYXRpb25zMi5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICB9KSApO1xuXG4gICAgICAgICAgICBjb25zdCByb3VuZEJyVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoY2xlYW5JbnB1dCwge29wZW46ICcoJywgY2xvc2U6ICcpJ30pO1xuICAgICAgICAgICAgY29uc3QgY3VybHlCclVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGNsZWFuSW5wdXQsIHtvcGVuOiAneycsIGNsb3NlOiAnfSd9KTtcblxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbnMzID0gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHJvdW5kQnJVbml0cy5ldmVyeShzdWJGb3JtID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKHN1YkZvcm0sICd7JywgJ30nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgJiYgY3VybHlCclVuaXRzLmV2ZXJ5KHN1YkZvcm0gPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoc3ViRm9ybSwgJygnLCAnKScpKSxcbiAgICAgICAgICAgICAgICAgICAgJ09wZW5pbmcvY2xvc2luZyBvZiBwYXJhbnRoZXNlcyBvdmVybGFwcyB3aXRoIG9wZW5pbmcvY2xvc2luZyBvZiBjdXJseSBicmFja2V0cyBpbiBmb3JtdWxhIChlLmcuOiAoe2EpYn0pJyksXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY3VybHlCclVuaXRzLmV2ZXJ5KHJlRW50cnkgPT4gdGhpcy5pc1ZhbGlkUmVFbnRyeShyZUVudHJ5KSksXG4gICAgICAgICAgICAgICAgICAgICdPcHRpb24gcGFydCBvZiBvbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGlzIG5vdCB3ZWxsLWZvcm1lZCcpLFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFsaWRhdGlvbnMzLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgIH0pICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWYWxpZFJlRW50cnkgKGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIHJlLWVudHJ5IGNvbnN0cnVjdGlvbiAqL1xuICAgICAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBjb25zdCBwYXJ0cyA9IGlucHV0LnNsaWNlKDEsLTEpLnNwbGl0KCd8Jyk7XG5cbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJpZXMgPSBwYXJ0cy5maWx0ZXIoKHAsaSxhcnIpID0+IGkgPCBhcnIubGVuZ3RoLTEpO1xuICAgICAgICAgICAgY29uc3Qgb3B0TGlzdCA9IFsnYWx0Jywnb3BlbicsJzJyJywnMnIrMSddO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxMaXN0ID0gZW50cmllcy5yZWR1Y2UoKGFjYyxzdHIpID0+IFsuLi5hY2MsIG9wdExpc3QuZmlsdGVyKG9wdCA9PiBzdHIgPT09IG9wdClbMF1dLFtdICkuZmlsdGVyKG9wdCA9PiBvcHQpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxMaXN0X3VuaXF1ZSA9IFsuLi5uZXcgU2V0KHNlbExpc3QpXTtcblxuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gc2VsTGlzdF91bmlxdWUubGVuZ3RoID09PSBlbnRyaWVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgJ09uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaGF2ZSBpbnZhbGlkIG9yIGR1cGxpY2F0ZSBvcHRpb25zJyksXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gc2VsTGlzdF91bmlxdWUuZmlsdGVyKHN0ciA9PiBzdHIgPT09IG9wdExpc3RbMl0gfHwgc3RyID09PSBvcHRMaXN0WzNdKS5sZW5ndGggPCAyLFxuICAgICAgICAgICAgICAgICAgICAnT25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBoYXZlIGJvdGggb3B0aW9ucyDigJgycuKAmSBhbmQg4oCYMnIrMeKAmSBzZXQgYXQgdGhlIHNhbWUgdGltZScpLFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25zLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgIH0pICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaXNWYWxpZEpTT05Gb3JtIChpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBKU09OLUZPUk0gKi9cbiAgICAgICAgLy8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IHRydWUsXG4gICAgICAgICAgICAgICAgJycpLFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtTWF0Y2hlc1Zhckxpc3QgKGZvcm0sIHZhckxpc3QpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGEgZ2l2ZW4gRk9STSBtYXRjaGVzIGEgZ2l2ZW4gdmFyaWFibGUgbGlzdCAqL1xuICAgICAgICBjb25zdCB2YXJzRm9ybSA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm0pO1xuXG4gICAgICAgIGNvbnN0IG1hdGNoID0gdmFyTGlzdC5sZW5ndGggPT09IHZhcnNGb3JtLmxlbmd0aFxuICAgICAgICAgICAgJiYgdmFyc0Zvcm0uZXZlcnkodl9hID0+IHZhckxpc3Quc29tZSh2X2IgPT4gdl9hID09PSB2X2IpKTtcbiAgICAgICAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdGT1JNIGRvZXNuXFwndCBtYXRjaCB0aGUgZ2l2ZW4gdmFyaWFibGUgbGlzdCcpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRWYWxpZEZvcm0oaW5wdXQpIHtcbiAgICAgICAgaWYodHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkRm9ybXVsYShpbnB1dCkpIHRocm93IG5ldyBFcnJvcignSW5wdXQgaXMgbm90IGEgdmFsaWQgZm9ybXVsYScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VMaW5lYXIoaW5wdXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gPj4+IG5lZWQgdG8gY2hlY2sganNvbiBpbnB1dCB0b29cbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCBEM0dyYXBoIGZyb20gJy4uL21vZHVsZXMvZ3JhcGgtZDMnO1xuXG5sZXQgZzEgPSB7fTsgbGV0IGcyID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZHcmFwaCBleHRlbmRzIEZGb3JtIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICdncmFwaCcgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdGhpcy5ncmFwaHMgPSBbXTtcbiAgfTtcblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEV4dGVuc2lvbnMgb2YgRkZvcm1cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHN0YXRpYyBqc29uU3RyaW5nKF9mb3JtKSB7XG5cbiAgICBjb25zdCBleHBhbmRlZEZvcm0gPSB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtKTtcbiAgICByZXR1cm4gc3VwZXIuanNvblN0cmluZyhleHBhbmRlZEZvcm0pO1xuICB9XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBHcmFwaCByZXByZXNlbnRhdGlvblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc3RhdGljIGNyZWF0ZUdyYXBoKGdyYXBoVHlwZSwgX2Zvcm0sIG9wdGlvbnMpIHtcbiAgICBjb25zdCBhZGRFbXB0eVJlQ2hpbGRTcGFjZSA9IChncmFwaFR5cGUgPT09ICdwYWNrJyk7XG5cbiAgICAvLyBleHBhbmQgcmUtZW50cnkgc3RydWN0dXJlIHRvIGJlIHVzYWJsZSBmb3IgZ3JhcGhzXG4gICAgY29uc3QgZm9ybSA9IHRoaXMuZXhwYW5kX3JlRW50cnkoX2Zvcm0sIHthZGRFbXB0eVJlQ2hpbGRTcGFjZTogYWRkRW1wdHlSZUNoaWxkU3BhY2V9KTtcbiAgICAvLyBpbml0aWFsaXplIHRoZSBncmFwaFxuXG4gICAgY29uc3QgZ3JhcGggPSBuZXcgRDNHcmFwaChncmFwaFR5cGUsIGZvcm0sIG9wdGlvbnMpO1xuICAgIGdyYXBoLmZvcm11bGEgPSBfZm9ybTtcbiAgICAvLyBncmFwaHMucHVzaCggbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKSApO1xuXG4gICAgcmV0dXJuIGdyYXBoO1xuICB9XG5cbiAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAvKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uICovXG5cbiAgICAvLyA+Pj4gc2hvdWxkIGJlIHJld3JpdHRlbiBjb21wbGV0ZWx5IHRvIGdldCByaWQgb2YgYWxsIHRoZSBtdXRhdGlvbiFcbiAgICBcbiAgICBsZXQgc3BhY2UgPSByZUZvcm0uc3BhY2UgPSBbXTtcbiAgICByZUZvcm0ubmVzdGVkLnJldmVyc2UoKTsgLy8gTVVTVCBiZSByZXZlcnNlZCwgYmVjYXVzZSBub3RhdGlvbjoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH1cblxuICAgIGZvcihsZXQgaSBpbiByZUZvcm0ubmVzdGVkKSB7XG4gICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgLy8gcHJlcGVuZCB0aGUgcmVFbnRyeSBuZXN0aW5nIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIHNwYWNlXG4gICAgICAgIHNwYWNlLnVuc2hpZnQoIHt0eXBlOiAnZm9ybScsIHJlQ2hpbGQ6IHRydWUsIHNwYWNlOiBbXX0gKTsgLy8gc3BhY2UucHVzaCA8LSBvcmRlciBsYXN0XG4gICAgICAgIGNvbnN0IG5lc3RlZEZvcm0gPSBzcGFjZVswXTsgLy8gc3BhY2Vbc3BhY2UubGVuZ3RoLTFdIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgXG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vIG5lc3RlZEZvcm0uc3BhY2UucHVzaChyZUZvcm0ubmVzdGVkW2ldKTtcbiAgICAgICAgICBuZXN0ZWRGb3JtLnNwYWNlLnB1c2goLi4ucmVGb3JtLm5lc3RlZFtpXS5zcGFjZSk7IC8vIHB1c2gocmVGb3JtLm5lc3RlZFtpXSkgZm9yIGdyb3VwaW5nXG4gICAgICAgIH1cblxuICAgICAgICBzcGFjZSA9IG5lc3RlZEZvcm0uc3BhY2U7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYoIXJlRm9ybS5uZXN0ZWRbaV0udW5tYXJrZWQpIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIC8vIGVsc2Ugc3BhY2UucHVzaChyZUZvcm0ubmVzdGVkW2ldKTtcbiAgICAgICAgZWxzZSBzcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5hZGRFbXB0eVJlQ2hpbGRTcGFjZSAmJiAoc3BhY2UubGVuZ3RoID09PSAwKSkge1xuICAgICAgICBzcGFjZS5wdXNoKCB7dHlwZTogJ3NwYWNlJ30gKTtcbiAgICAgIH1cbiAgICB9ICAgIFxuXG4gICAgLy8gd2UgbmVlZCB0byBhZGQgYSBwb2ludCBvZiByZS1lbnRyeSB0byB0aGUgbGFzdCBuZXN0ZWQgZm9ybVxuICAgIC8vIGZpcnN0LCBsZXRzIGFzc3VtZSB0aGlzIGlzIHRoZSBmb3JtIGl0c2VsZlxuICAgIGxldCBsYXN0TmVzdGVkID0gcmVGb3JtO1xuICAgIFxuICAgIGlmKHJlRm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyB0aGVuIGxvb3AgdW50aWwgdGhlIGxhc3QgcmVDaGlsZCBpcyBmb3VuZCBhbmQgbWFrZSB0aGlzIG91ciBsYXN0IG5lc3RlZCBmb3JtXG4gICAgICBcbiAgICAgIHdoaWxlIChsYXN0TmVzdGVkLnNwYWNlWzBdLmhhc093blByb3BlcnR5KCdyZUNoaWxkJykpIHsgICAgICAgIFxuICAgICAgICBsYXN0TmVzdGVkID0gbGFzdE5lc3RlZC5zcGFjZVswXTtcbiAgICAgICAgaWYgKGxhc3ROZXN0ZWQuc3BhY2UubGVuZ3RoIDwgMSkgYnJlYWs7IC8vIHByZXZlbnQgZXJyb3JzIHdoZW4gbm90aGluZyBpcyBmb3VuZFxuICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3Igb3BlbiByZS1lbnRyaWVzLCB3ZSBuZWVkIHRvIGFkZCBhbm90aGVyIG5lc3RpbmcgKHNlZSB1Rk9STSBpRk9STSBmb3IgcmVmZXJlbmNlKVxuICAgIGlmKHJlRm9ybS5sYXN0T3Blbikge1xuICAgICAgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7XG4gICAgICAvLyB0aGVuIGFkZCB0aGUgcmUtZW50cnkgcG9pbnQgdG8gZWl0aGVyIHNwYWNlXG4gICAgICBsYXN0TmVzdGVkLnNwYWNlWzBdLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcbiAgICB9XG4gICAgZWxzZSBsYXN0TmVzdGVkLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcblxuICAgIC8vIGxhc3QsIGRlbGV0ZSB0aGUgbmVzdGVkIHN0cnVjdHVyZSwgd2UgZG9uJ3QgbmVlZCBpdCBhbnltb3JlXG4gICAgZGVsZXRlIHJlRm9ybS5uZXN0ZWQ7XG4gICAgcmV0dXJuIHJlRm9ybTtcbiAgfVxuXG5cbiAgc3RhdGljIGV4cGFuZF9yZUVudHJ5KF9mb3JtLCBvcHRpb25zPXt9KSB7XG4gICAgLy8gPj4+IHNob3VsZCBiZSByZXdyaXR0ZW4gY29tcGxldGVseSB0byBnZXQgcmlkIG9mIGFsbCB0aGUgbXV0YXRpb24hXG4gICAgY29uc3QgcmVmRm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcbiAgICBjb25zdCB0YXJnZXRGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZWZGb3JtKSk7IC8vIGNvcHkganNvbiBvYmplY3Qgd2l0aG91dCBpZGVudGlmeWluZyBpdFxuXG4gICAgLy8gd2UgbXVzdCBrZWVwIGEgcnVubmluZyBpbmRleCB0byBub3QgY29uZnVzZSBpZGVudGljYWwgZm9ybXMgd2hpbGUgcmVjb25zdHJ1Y3RpbmcgdGhlIHJlRW50cmllc1xuICAgIC8vIE5vdGU6IHRoaXMgc2hvdWxkIGJlIGRvbmUgbW9yZSBlZmZpY2llbnRseSBpbiB0aGUgZnV0dXJlXG4gICAgbGV0IHJ1bm5pbmdJbmRleCA9IDA7XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0ocmVmRm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcbiAgICBydW5uaW5nSW5kZXggPSAwO1xuICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBicmFuY2gucnVubmluZ0luZGV4ID0gcnVubmluZ0luZGV4LCBydW5uaW5nSW5kZXgrKzsgfSk7XG5cbiAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihyZWZCcmFuY2gpIHtcblxuICAgICAgaWYocmVmQnJhbmNoLnR5cGUgPT09ICdyZUVudHJ5Jykge1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbih0YXJnZXRCcmFuY2gpIHtcblxuICAgICAgICAgIGlmKCAoSlNPTi5zdHJpbmdpZnkocmVmQnJhbmNoKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFyZ2V0QnJhbmNoKSkgJiYgXG4gICAgICAgICAgICAgIChyZWZCcmFuY2gucnVubmluZ0luZGV4ID09PSAodGFyZ2V0QnJhbmNoLmhhc093blByb3BlcnR5KCdydW5uaW5nSW5kZXgnKSA/IHRhcmdldEJyYW5jaC5ydW5uaW5nSW5kZXggOiBudWxsKSkgKSB7XG4gICAgICAgICAgICB0YXJnZXRCcmFuY2ggPSB0aGlzLmNvbnN0cnVjdE5lc3RlZCh0YXJnZXRCcmFuY2gsIG9wdGlvbnMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGRlbGV0ZSBydW5uaW5nIGluZGV4IHByb3BlcnR5XG4gICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGRlbGV0ZSBicmFuY2gucnVubmluZ0luZGV4OyB9KTtcblxuICAgIHJldHVybiB0YXJnZXRGb3JtO1xuICB9XG5cblxufSIsImltcG9ydCBjYWxjIGZyb20gJy4vY29yZS9mY2FsYyc7XG5pbXBvcnQgZm9ybSBmcm9tICcuL2NvcmUvZmZvcm0nO1xuaW1wb3J0IGdyYXBoIGZyb20gJy4vY29yZS9mZ3JhcGgnO1xuaW1wb3J0IGRuYSBmcm9tICcuL2NvcmUvZmRuYSc7XG5cbmV4cG9ydCBkZWZhdWx0IHsgY2FsYywgZm9ybSwgZ3JhcGgsIGRuYSB9OyIsIi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnbG9iYWwgc3R5bGVzXG5cbmNvbnN0IGdsb2JhbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgLy8gZm9udDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgfVxufTtcbmdsb2JhbC5iYXNpYyA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxufTtcbmNvbnN0IFtiYXNpY10gPSBbZ2xvYmFsLmJhc2ljXTtcblxuZXhwb3J0IGNvbnN0IHZtYXAgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGZvbnQ6IHtiYXNlOiBgJ0lCTSBQbGV4IE1vbm8nLCAnU0ZNb25vLVJlZ3VsYXInLCAnQW5kYWxlIE1vbm8nLCBBbmRhbGVNb25vLCAnTHVjaWRhIENvbnNvbGUnLCAnTHVjaWRhIFNhbnMgVHlwZXdyaXRlcicsIENvbnNvbGFzLCBtb25vc3BhY2VgfSxcbiAgICAgICAgdGV4dFNpemU6IHtiYXNlOiAxMiwgc206IDEwfSxcbiAgICB9XG59O1xuXG52bWFwLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnZtYXAuY29tbW9uLFxufTtcbnZtYXAuYmFzaWMuYXBwbHlTdHlsZXMgPSBmdW5jdGlvbigpwqB7XG5cbn0iLCJpbXBvcnQgeyB0cnVuY2F0ZVN0ciwgcHJvY2Vzc0xhYmVsLCBnZXRTdmdTaXplLCBicmVha1N0ciwgc3ZnTGluZWJyZWFrIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5cbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2RuYS1zdmctc3R5bGVzLmpzJztcblxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gICAgICAgICAgICAgICAgICAgICAgZm9ybUROQSBtYXJrdXBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtRE5BX2h0bWwgKGZvcm11bGEsIGRuYSwgdmFycynCoHtcblx0LyogQ29uc3RydWN0cyBhbiBIVE1MIHdyYXBwZXIgZm9yIGZvcm1ETkEgKi9cblxuXHQvLyBjb25zdHJ1Y3QgSFRNTCBtYXJrdXAgZm9yIHRoZSBmb3JtRE5BXG5cdGNvbnN0IGZvcm1TdHIgPSBmb3JtdWxhICE9PSB1bmRlZmluZWQgPyBgPHNwYW4gY2xhc3M9XCJkbmEtZm9ybVwiIHRpdGxlPVwiRk9STVwiPiR7Zm9ybXVsYX08L3NwYW4+YCA6ICcnO1xuXG5cdGNvbnN0IHZhcm9yZGVyU3RyID0gdmFycyAmJiBkbmEubGVuZ3RoID4gMSA/ICcuPHNwYW4gY2xhc3M9XCJkbmEtdmFyb3JkZXJcIiB0aXRsZT1cIlZhcmlhYmxlIGludGVycHJldGF0aW9uIG9yZGVyXCI+WycrdmFycy5qb2luKCcsJykrJ108L3NwYW4+JyA6ICcnO1xuXG5cdHJldHVybiBgPGRpdiBpZD1cImRuYVwiPjxjb2RlPiR7Zm9ybVN0ciArIHZhcm9yZGVyU3RyfTo6PHNwYW4gY2xhc3M9XCJkbmEtY29kZVwiPiR7bWFya3VwUXVhcnRDeWNsZXMoZG5hKX08L3NwYW4+PC9jb2RlPjwvZGl2PmA7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHZtYXAgbWFya3VwXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgZnVuY3Rpb24gdm1hcF9zdmcgKHZtYXBUcmVlLCBpbnB1dCwgdmFyb3JkZXIsIG9wdGlvbnMpIHtcblx0LyogR2VuZXJhdGVzIFNWRyBvdXRwdXQgZm9yIGEgZ2l2ZW4gdm1hcCB0cmVlICovXG5cblx0Ly8gb3B0aW9uIGRlZmF1bHRzXG5cdGNvbnN0IHt2bWFwUGFkLCBzdHJva2VDLCB2bWFwQywgZmlnUGFkLCBmaWdDLCBoaWRlSW5wdXRMYWJlbCwgaGlkZU9yZGVyTGFiZWwsIGN1c3RvbUxhYmVsLCBmdWxsSW5wdXRMYWJlbCwgaW5wdXRMYWJlbE1heCwgc3R5bGVDbGFzc30gPSB7XG5cdFx0dm1hcFBhZDogMCwgc3Ryb2tlQzogYCNmZmZgLCB2bWFwQzogYG5vbmVgLCBmaWdQYWQ6IDAsIGZpZ0M6IGAjZmZmYCxcblx0XHRoaWRlSW5wdXRMYWJlbDogZmFsc2UsIGhpZGVPcmRlckxhYmVsOiBmYWxzZSwgZnVsbElucHV0TGFiZWw6IGZhbHNlLCBpbnB1dExhYmVsTWF4OiAyMDAsIFxuXHRcdGN1c3RvbUxhYmVsOiB1bmRlZmluZWQsIHN0eWxlQ2xhc3M6ICdiYXNpYycsXG5cdFx0Li4ub3B0aW9uc307XG5cblx0Y29uc3QgZGVzaWduID0gc3R5bGVzLnZtYXBbc3R5bGVDbGFzc107XG5cdGNvbnN0IFt0ZXh0U2l6ZSwgZm9udF0gPSBbZGVzaWduLnRleHRTaXplLCBkZXNpZ24uZm9udC5iYXNlXTtcblxuXHRjb25zdCB7dm51bSwgbWFyZ2luc30gPSB2bWFwVHJlZS5kYXRhO1xuXHRjb25zdCBzY2FsZSA9IHZtYXBUcmVlLnNjYWxlO1xuXHRjb25zdCBzdHJva2VXID0gbWFyZ2luc1swXTtcblx0Ly8gY29uc3QgbGVuID0gTWF0aC5zcXJ0KDQqKnZudW0pOyAvLyBsZW5ndGggb2YgZG5hIHdpdGhvdXQgJzo6J1xuXHRjb25zdCBib3VuZHMgPSB7dzogc2NhbGVbMF0gKyBzdHJva2VXLCBoOiBzY2FsZVsxXSArIHN0cm9rZVd9O1xuXHRjb25zdCByaG9tYiA9IHt3OiBNYXRoLnNxcnQoMiAqIChib3VuZHMudyoqMikpLCBoOiBNYXRoLnNxcnQoMiAqIChib3VuZHMuaCoqMikpfTtcblxuXHRjb25zdCBjaGFydCA9IHt0cmVlOiB2bWFwVHJlZSwgaW5wdXQ6IGlucHV0LCB2YXJvcmRlcjogdmFyb3JkZXIsIG9wdGlvbnM6IG9wdGlvbnN9O1xuXG5cdC8vIGlmIChvdXRwdXQgPT0gJ21peGVkJykge1xuXHRcdC8vIHN2ZyB3aXRoIGh0bWwgd3JhcHBlclxuXG5cdFx0Ly8gY29uc3QgY2FwdGlvbiA9ICgpID0+IHtcblx0XHQvLyBcdGlmIChjdXN0b21MYWJlbCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gYDxmaWdjYXB0aW9uIHN0eWxlPVwid29yZC13cmFwOiBicmVhay13b3JkO1wiPiR7Y3VzdG9tTGFiZWx9PC9maWdjYXB0aW9uPmA7XG5cdFx0Ly8gXHRpZiAoIShoaWRlSW5wdXRMYWJlbCAmJiBoaWRlT3JkZXJMYWJlbCkpIHtcblx0XHQvLyBcdFx0bGV0IGxhYmVsID0gJyc7XG5cdFx0Ly8gXHRcdGlmICghaGlkZU9yZGVyTGFiZWwpIGxhYmVsICs9IGAke3Zhcm9yZGVyLnJlZHVjZSgoYWNjLGN1cnIsaSkgPT4gYWNjICsgKGkgPiAwID8gJyA+ICcgOiAnJykgKyBwcm9jZXNzTGFiZWwoY3VyciksJycgKX0ke2hpZGVJbnB1dExhYmVsIHx8IHZudW0gPCAxID8gJycgOiAnPGJyLz4nfWA7XG5cdFx0Ly8gXHRcdGlmICghaGlkZUlucHV0TGFiZWwpIHtcblx0XHQvLyBcdFx0XHRjb25zdCBpc0Zvcm1ETkEgPSBpbnB1dC5pbmNsdWRlcygnOjonKTtcblx0XHQvLyBcdFx0XHRpZiAoaXNGb3JtRE5BKSBsYWJlbCArPSBgPGNvZGUgc3R5bGU9XCJmb250LXNpemU6MC44ZW07XCI+JHtmdWxsSW5wdXRMYWJlbCA/IGlucHV0IDogdHJ1bmNhdGVTdHIoaW5wdXQsKGlucHV0LnNwbGl0KCc6OicpWzBdLmxlbmd0aCArIDQqKjQpLGDigKYoJHs0Kip2bnVtfSlgKX08L2NvZGU+YDtcblx0XHQvLyBcdFx0XHRlbHNlIGxhYmVsICs9ICfGkiA9ICcrKGZ1bGxJbnB1dExhYmVsID8gaW5wdXQgOiB0cnVuY2F0ZVN0cihpbnB1dCxpbnB1dExhYmVsTWF4LGDigKYgPGk+K21vcmU8L2k+YCkpO1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHRcdHJldHVybiBgPGZpZ2NhcHRpb24gc3R5bGU9XCJ3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XCI+JHtsYWJlbH08L2ZpZ2NhcHRpb24+YDtcblx0XHQvLyBcdH1cblx0XHQvLyBcdHJldHVybiAnJztcblx0XHQvLyB9XG5cblx0XHQvLyBjaGFydC5lbGVtID0gYDxmaWd1cmUgY2xhc3M9XCJ2bWFwLWZpZ3VyZVwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuXHRcdC8vIFx0PHN2ZyBjbGFzcz1cInZtYXBcIiBzdHlsZT1cImJhY2tncm91bmQ6ICR7YmdDfTsgcGFkZGluZzogJHt2bWFwUGFkfTtcIiB3aWR0aD0ke3NjYWxlWzBdfSBoZWlnaHQ9JHtzY2FsZVsxXX1cblx0XHQvLyBcdGZpbGw9XCJ3aGl0ZVwiIHN0cm9rZT1cIiR7c3Ryb2tlQ31cIiBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVd9XCJcblx0XHQvLyBcdHZpZXdCb3g9XCItJHtzdHJva2VXLzJ9IC0ke3N0cm9rZVcvMn0gJHtyaG9tYi53fSAke3Job21iLmh9XCI+XG5cdFx0Ly8gXHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHswfSwke3Job21iLmgvMn0pIHJvdGF0ZSgtNDUsMCwwKVwiPiR7IGNvbnN0cnVjdFNWRyh2bWFwVHJlZSkgfTwvZz5cblx0XHQvLyBcdDwvc3ZnPlxuXHRcdC8vIFx0JHsgY2FwdGlvbigpIH1cblx0XHQvLyBcdDwvZmlndXJlPmA7XG5cblx0Ly8gfSBlbHNlIHtcblx0XHQvLyBwdXJlIHN2ZyBvdXRwdXRcblxuXHRcdGNvbnN0IGNhcHRpb24gPSAoaW5wdXQsIGN1c3RvbUxhYmVsKSA9PiB7XG5cdFx0XHRpZiAoY3VzdG9tTGFiZWwgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGN1c3RvbUxhYmVsO1xuXG5cdFx0XHRsZXQgbGFiZWwgPSAnJztcblx0XHRcdGlmICghaGlkZU9yZGVyTGFiZWwgJiYgdm51bSA+IDApIHtcblx0XHRcdFx0Y29uc3QgcG9zID0gYHk9XCIwXCJgO1xuXG5cdFx0XHRcdGxhYmVsICs9IG9yZGVyTGFiZWwodmFyb3JkZXIsIHBvcywge2ZvbnQ6IGZvbnQsIHRleHRTaXplOiB0ZXh0U2l6ZS5iYXNlfSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhpZGVJbnB1dExhYmVsKSB7XG5cdFx0XHRcdGNvbnN0IGlzRm9ybUROQSA9IGlucHV0LmluY2x1ZGVzKCc6OicpO1xuXG5cdFx0XHRcdGNvbnN0IHByZWZpeCA9IGlzRm9ybUROQSA/ICcnIDogYMaSID0gYDtcblx0XHRcdFx0Y29uc3QgdHJ1bmNNYXggPSBpc0Zvcm1ETkEgPyAoaW5wdXQuc3BsaXQoJzo6JylbMF0ubGVuZ3RoICsgNCoqNCkgOiBpbnB1dExhYmVsTWF4O1xuXHRcdFx0XHRjb25zdCB0cnVuY1N1ZmZpeCA9IGlzRm9ybUROQSA/IGDigKYoJHs0Kip2bnVtfSlgIDogYOKApiA8dHNwYW4gc3R5bGU9XCJmb250LXN0eWxlOiBpdGFsaWNcIj4rbW9yZTwvdHNwYW4+YDtcblxuXHRcdFx0XHRjb25zdCBwb3MgPSBgeT1cIjBcImAgKyAobGFiZWwubGVuZ3RoID4gMCA/IGAgZHk9XCIke3RleHRTaXplLmJhc2UgKyB0ZXh0U2l6ZS5zbSAtIDJ9cHhcImAgOiAnJyk7XG5cblx0XHRcdFx0bGFiZWwgKz0gaW5wdXRMYWJlbChpbnB1dCwgcG9zLCB7cHJlZml4OiBwcmVmaXgsIHRydW5jYXRlZDogIWZ1bGxJbnB1dExhYmVsLCB0cnVuY01heDogdHJ1bmNNYXgsIHRydW5jU3VmZml4OiB0cnVuY1N1ZmZpeCwgZm9udDogZm9udCwgdGV4dFNpemU6IHRleHRTaXplLnNtfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbGFiZWw7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgdm1hcCA9IHt3OiAoc2NhbGVbMF0gKyB2bWFwUGFkKSwgaDogKHNjYWxlWzFdICsgdm1hcFBhZCl9O1xuXG5cdFx0dm1hcC5lbGVtID0gYDxzdmcgY2xhc3M9XCJ2bWFwXCIgd2lkdGg9JHt2bWFwLnd9IGhlaWdodD0ke3ZtYXAuaH0gdmlld0JveD1cIi0ke3N0cm9rZVcvMiArIHZtYXBQYWQvMn0gLSR7c3Ryb2tlVy8yICsgdm1hcFBhZC8yfSAke3Job21iLncgKyB2bWFwUGFkfSAke3Job21iLmggKyB2bWFwUGFkfVwiPlxuXHRcdFx0PHJlY3QgeD1cIi0ke3ZtYXBQYWQvMn1cIiB5PVwiLSR7dm1hcFBhZC8yfVwiIHdpZHRoPVwiJHtyaG9tYi53ICsgdm1hcFBhZH1cIiBoZWlnaHQ9XCIke3Job21iLmggKyB2bWFwUGFkfVwiIGZpbGw9XCIke3ZtYXBDfVwiPjwvcmVjdD5cblx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCR7cmhvbWIuaC8yfSkgcm90YXRlKC00NSwwLDApXCIgc3Ryb2tlPVwiJHtzdHJva2VDfVwiIHN0cm9rZS13aWR0aD1cIiR7c3Ryb2tlV31cIj4keyBjb25zdHJ1Y3RTVkcodm1hcFRyZWUpIH08L2c+XG5cdFx0PC9zdmc+YDtcblxuXHRcdGNvbnN0IGZpZ0NhcHRpb24gPSB7ZWxlbTogY2FwdGlvbihpbnB1dCwgY3VzdG9tTGFiZWwpLCBwb3M6IHt4OiAwLCB5OiAodm1hcC5oICsgMTApfX07XG5cdFx0ZmlnQ2FwdGlvbi5zaXplID0gZ2V0U3ZnU2l6ZShmaWdDYXB0aW9uLmVsZW0pO1xuXG5cdFx0Y29uc3QgYXBwZW5kU2l6ZSA9IFtNYXRoLm1heCgwLCAoZmlnQ2FwdGlvbi5zaXplLncgLSB2bWFwLncpKSxcblx0XHRcdFx0XHRcdFx0KGZpZ0NhcHRpb24uc2l6ZS5oID4gMCA/IChmaWdDYXB0aW9uLnNpemUuaCArIChmaWdDYXB0aW9uLnBvcy55IC0gdm1hcC5oKSkgOiAwKV07XG5cblx0XHRjaGFydC5zaXplID0ge3c6ICh2bWFwLncgKyBhcHBlbmRTaXplWzBdICsgZmlnUGFkKSwgaDogKHZtYXAuaCArIGFwcGVuZFNpemVbMV0gKyBmaWdQYWQpfTtcblxuXHRcdGNoYXJ0LmVsZW0gPSBgPHN2ZyBjbGFzcz1cInZtYXAtZmlndXJlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgdmlld0JveD1cIi0ke2ZpZ1BhZC8yfSAtJHtmaWdQYWQvMn0gJHtjaGFydC5zaXplLnd9ICR7Y2hhcnQuc2l6ZS5ofVwiPlxuXHRcdFx0PHJlY3QgeD1cIi0ke2ZpZ1BhZC8yfVwiIHk9XCItJHtmaWdQYWQvMn1cIiB3aWR0aD1cIiR7Y2hhcnQuc2l6ZS53fVwiIGhlaWdodD1cIiR7Y2hhcnQuc2l6ZS5ofVwiIGZpbGw9XCIke2ZpZ0N9XCI+PC9yZWN0PlxuXHRcdFx0PGc+JHsgdm1hcC5lbGVtIH08L2c+XG5cdFx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHtmaWdDYXB0aW9uLnBvcy54fSwke2ZpZ0NhcHRpb24ucG9zLnl9KVwiPiR7IGZpZ0NhcHRpb24uZWxlbSB9PC9nPlxuXHRcdDwvc3ZnPmA7XG5cdC8vIH1cblxuXHRyZXR1cm4gY2hhcnQ7XG59XG5cbmZ1bmN0aW9uIG9yZGVyTGFiZWwgKHZhcm9yZGVyLCBwb3M9J3g9XCIwXCIgeT1cIjBcIicsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdC8qIEdlbmVyYXRlcyBhbiBvcmRlciBsYWJlbCAoZS5nLiBcImEgPiBiID4gY1wiKSBmcm9tIHZhcmlhYmxlIG9yZGVyICovXG5cdGNvbnN0IHttYXhMaW5lV2lkdGgsIGZvbnQsIHRleHRTaXplLCBsZWFkaW5nfSA9IFxuXHRcdHsgbWF4TGluZVdpZHRoOiA2MCwgZm9udDogJ2luaGVyaXQnLCB0ZXh0U2l6ZTogMTIsIGxlYWRpbmc6IDQsIC4uLm9wdGlvbnMgfTtcblx0Y29uc3Qgc3R5bGUgPSBgZm9udC1mYW1pbHk6ICR7Zm9udH07IGZvbnQtc2l6ZTogJHt0ZXh0U2l6ZX1weDsgZG9taW5hbnQtYmFzZWxpbmU6IGhhbmdpbmc7YDtcblxuXHRsZXQgb3V0cHV0ID0gdmFyb3JkZXIucmVkdWNlKChhY2MsY3VycixpKSA9PiBhY2MgKyAoaSA+IDAgPyAnPHRzcGFuIHk9XCIwXCI+ID4gPC90c3Bhbj4nIDogJycpICsgcHJvY2Vzc0xhYmVsKGN1cnIsICdzdmcnKSwnJyApO1xuXG5cdC8vIG91dHB1dCA9IGJyZWFrU3RyKG91dHB1dCwgbWF4TGluZVdpZHRoKSAvLyA8LS0gZml4IHRhZyBicmVha3Ncblx0Ly8gXHQucmVkdWNlKChzdHIsY3VycixpKSA9PiBzdHIgKyAoaSA+IDAgPyBzdmdMaW5lYnJlYWsoY3VyciwgKHRleHRTaXplICsgbGVhZGluZyArICdweCcpKSA6IGN1cnIpLCAnJyk7XG5cblx0cmV0dXJuIGA8dGV4dCAke3Bvc30gc3R5bGU9XCIke3N0eWxlfVwiPiR7b3V0cHV0fTwvdGV4dD5gO1xufVxuXG5mdW5jdGlvbiBpbnB1dExhYmVsIChpbnB1dCwgcG9zPSd4PVwiMFwiIHk9XCIwXCInLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuXHQvKiBHZW5lcmF0ZXMgYW4gaW5wdXQgbGFiZWwgKGUuZy4gXCLGkiA9ICgoYSliKVwiIG9yIFwiOjozMjEwXCIpICovXG5cdGNvbnN0IHtwcmVmaXgsIG1heExpbmVXaWR0aCwgdHJ1bmNhdGVkLCB0cnVuY01heCwgdHJ1bmNTdWZmaXgsIGZvbnQsIHRleHRTaXplLCBsZWFkaW5nfSA9IFxuXHRcdHtwcmVmaXg6ICcnLCBtYXhMaW5lV2lkdGg6IDYwLCB0cnVuY2F0ZWQ6IGZhbHNlLCB0cnVuY01heDogMTAwMCwgdHJ1bmNTdWZmaXg6ICfigKYnLCBmb250OiAnaW5oZXJpdCcsIHRleHRTaXplOiAxMiwgbGVhZGluZzogNCwgLi4ub3B0aW9ucyB9O1xuXHRjb25zdCBzdHlsZSA9IGBmb250LWZhbWlseTogJHtmb250fTsgZm9udC1zaXplOiAke3RleHRTaXplfXB4OyBkb21pbmFudC1iYXNlbGluZTogaGFuZ2luZztgO1xuXG5cdGxldCBvdXRwdXQgPSBwcmVmaXggKyBpbnB1dDtcblx0bGV0IGFwcGVuZGl4ID0gJyc7XG5cblx0aWYgKHRydW5jYXRlZCAmJiAob3V0cHV0Lmxlbmd0aCA+IHRydW5jTWF4KSkge1xuXHRcdG91dHB1dCA9IG91dHB1dC5zdWJzdHIoMCx0cnVuY01heCk7XG5cdFx0YXBwZW5kaXggKz0gdHJ1bmNTdWZmaXg7XG5cdH1cblx0b3V0cHV0ID0gYnJlYWtTdHIob3V0cHV0LCBtYXhMaW5lV2lkdGgpXG5cdFx0LnJlZHVjZSgoc3RyLGN1cnIsaSkgPT4gc3RyICsgKGkgPiAwID8gc3ZnTGluZWJyZWFrKGN1cnIsICh0ZXh0U2l6ZSArIGxlYWRpbmcgKyAncHgnKSkgOiBjdXJyKSwgJycpO1xuXG5cdHJldHVybiBgPHRleHQgJHtwb3N9IHN0eWxlPVwiJHtzdHlsZX1cIj4ke291dHB1dCArIGFwcGVuZGl4fTwvdGV4dD5gO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RTVkcoc3ViVHJlZSwgbWFwU1ZHPScnKSB7XG5cdC8qIFJlY3Vyc2l2ZSBmdW5jdGlvbiB0byBjb25zdHJ1Y3Qgc3ZnIG1hcmt1cCBmcm9tIHZtYXAgdHJlZSBzdHJ1Y3R1cmUgKi9cblxuXHRpZihzdWJUcmVlICE9PSBudWxsICYmIHR5cGVvZiBzdWJUcmVlID09IFwib2JqZWN0XCIpIHtcblx0XHRpZihzdWJUcmVlLmNoaWxkcmVuKSB7XG5cdFx0XHRtYXBTVkcgKz0gYDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3N1YlRyZWUucG9zaXRpb25bMF19LCAke3N1YlRyZWUucG9zaXRpb25bMV19KVwiPmA7XG5cblx0XHRcdHN1YlRyZWUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRcdG1hcFNWRyArPSBjb25zdHJ1Y3RTVkcoY2hpbGQpO1xuXHRcdFx0fSk7XG5cdFx0XHRtYXBTVkcgKz0gYDwvZz5gO1xuXHRcdFx0cmV0dXJuIG1hcFNWRztcblx0XHR9XG5cdFx0ZWxzZSB7XHRcdFx0XHRcblx0XHRcdG1hcFNWRyArPSBgPHJlY3QgeD1cIiR7c3ViVHJlZS5wb3NpdGlvblswXX1cIiB5PVwiJHtzdWJUcmVlLnBvc2l0aW9uWzFdfVwiIHdpZHRoPVwiJHtzdWJUcmVlLnNjYWxlWzBdfVwiIGhlaWdodD1cIiR7c3ViVHJlZS5zY2FsZVsxXX1cIiBmaWxsPVwiJHt2Q29sb3Ioc3ViVHJlZS52YWx1ZSl9XCI+PC9yZWN0PmA7XG5cdFx0XHRyZXR1cm4gbWFwU1ZHO1xuXHRcdH1cblx0fVxuXHRlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vdCBhIHN1YnRyZWUhJyk7XG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHZtYXBQZXJzcGVjdGl2ZXNfc3ZnICh2bWFwUGVybXV0YXRpb25zLCBpbnB1dCwgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQpIHtcblx0LyogQ29uc3RydWN0cyB2bWFwIHBlcnNwZWN0aXZlcyBhcyBIVE1MIG91dHB1dCAoZmxleCBsaXN0KSAqL1xuXG5cdGNvbnN0IHtmaWdQYWQsIGZpZ0MsIG1hcmdpbiwgY3VzdG9tTGFiZWwsIHN0eWxlQ2xhc3N9ID0gXG5cdFx0eyBmaWdQYWQ6IDAsIGZpZ0M6IGAjZmZmYCxcblx0XHQgIG1hcmdpbjogMjAsIGN1c3RvbUxhYmVsOiB1bmRlZmluZWQsIHN0eWxlQ2xhc3M6ICdiYXNpYycsIC4uLmdsb2JhbE9wdGlvbnMgfTtcblxuXHRjb25zdCBkZXNpZ24gPSBzdHlsZXMudm1hcFtzdHlsZUNsYXNzXTtcblx0Y29uc3QgW3RleHRTaXplLCBmb250XSA9IFtkZXNpZ24udGV4dFNpemUsIGRlc2lnbi5mb250LmJhc2VdO1xuXG5cdGNvbnN0IGNoYXJ0ID0ge3ZtYXBzOiB2bWFwUGVybXV0YXRpb25zLCBpbnB1dDogaW5wdXQsIG9wdGlvbnM6IGdsb2JhbE9wdGlvbnN9O1xuXG5cdC8vIGlmIChvdXRwdXQgPT0gJ21peGVkJykge1xuXHRcdC8vIGNvbnN0IHZtYXBJdGVtcyA9IHZtYXBQZXJtdXRhdGlvbnMubWFwKHZtYXAgPT4ge1xuXHRcdC8vIFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwidm1hcC1pdGVtXCIgc3R5bGU9XCJwYWRkaW5nOiAke01hdGguZmxvb3IobWFyZ2luLzQpfXB4ICR7TWF0aC5mbG9vcihtYXJnaW4vMil9cHhcIj4gXG5cdFx0Ly8gXHRcdFx0JHt2bWFwLmVsZW19PC9kaXY+YH0pLnJlZHVjZSgoc3RyLGl0ZW0pID0+IHN0citpdGVtLCcnKTtcblxuXHRcdC8vIGNvbnN0IGxhYmVsID0gY2FwdGlvbigpO1xuXG5cdFx0Ly8gcmV0dXJuIGA8ZmlndXJlIGNsYXNzPVwidm1hcC1wZXJzcGVjdGl2ZXNcIiBzdHlsZT1cIm1heC13aWR0aDogbm9uZTtcIj5cblx0XHQvLyBcdFx0PGRpdiBjbGFzcz1cInZtYXAtbGlzdFwiIHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBtYXJnaW46IDAgLSR7TWF0aC5mbG9vcihtYXJnaW4vMil9cHhcIj5cblx0XHQvLyBcdFx0JHsgdm1hcEl0ZW1zIH1cblx0XHQvLyBcdFx0PC9kaXY+XG5cdFx0Ly8gXHRcdDxmaWdjYXB0aW9uIHN0eWxlPVwiYm9yZGVyLXRvcDogMXB4IHNvbGlkOyBwYWRkaW5nLXRvcDogJHtNYXRoLmZsb29yKG1hcmdpbi80KX1weDsgbWFyZ2luLXRvcDogJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weDsgd29yZC13cmFwOiBicmVhay13b3JkO1wiPiR7bGFiZWx9PC9maWdjYXB0aW9uPlxuXHRcdC8vIFx0XHQ8L2ZpZ3VyZT5gO1xuXHQvLyB9XG5cdC8vIGVsc2Uge1xuXHRcdGNvbnN0IHBhZGRpbmcgPSB7eDogKE1hdGguZmxvb3IobWFyZ2luLzQpKSwgeTogKE1hdGguZmxvb3IobWFyZ2luLzIpKX07XG5cdFx0Y29uc3QgY291bnQgPSB2bWFwUGVybXV0YXRpb25zLmxlbmd0aDtcblx0XHRjb25zdCB2bWFwU2l6ZSA9IHZtYXBQZXJtdXRhdGlvbnNbMF0uc2l6ZTtcblxuXHRcdGNvbnN0IGNvbE51bSA9IE1hdGgubWluKGNvdW50LCA2KTtcblx0XHRjb25zdCByb3dOdW0gPSBNYXRoLmZsb29yKGNvdW50L2NvbE51bSk7XG5cdFx0Y29uc3QgdGFibGVTaXplID0geyB3OiB2bWFwU2l6ZS53ICogY29sTnVtICsgKHBhZGRpbmcueCoyKSAqIChjb2xOdW0tMSksXG5cdFx0XHRcdFx0XHRcdGg6IHZtYXBTaXplLmggKiByb3dOdW0gKyAocGFkZGluZy55KjIpICogKHJvd051bS0xKSB9O1xuXG5cdFx0Y29uc3Qgdm1hcEl0ZW1zID0gdm1hcFBlcm11dGF0aW9ucy5tYXAodm1hcCA9PiB7XG5cdFx0XHRcblx0XHRcdHJldHVybiB7ZWxlbTogdm1hcC5lbGVtfTtcblx0XHR9KS5yZWR1Y2UoKHN0cixpdGVtLGkpID0+IHtcblx0XHRcdGNvbnN0IHggPSBpJWNvbE51bTtcblx0XHRcdGNvbnN0IHkgPSBNYXRoLmZsb29yKGkvY29sTnVtKTtcblxuXHRcdFx0Y29uc3QgY29vcmRzID0gW3ZtYXBTaXplLncgKiB4ICsgKHBhZGRpbmcueCoyKSAqIHgsXG5cdFx0XHRcdFx0XHQgICAgdm1hcFNpemUuaCAqIHkgKyAocGFkZGluZy55KjIpICogeV07XG5cdFx0XHRyZXR1cm4gc3RyKyBgPGcgY2xhc3M9XCJ2bWFwLWl0ZW1cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHtjb29yZHNbMF19LCR7Y29vcmRzWzFdfSlcIj4ke2l0ZW0uZWxlbX08L2c+YDtcblx0XHR9LCcnKTtcblx0XG5cdFx0Y29uc3QgY2FwdGlvbiA9IChpbnB1dCwgY3VzdG9tTGFiZWwpID0+IHtcblx0XHRcdGlmIChjdXN0b21MYWJlbCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY3VzdG9tTGFiZWw7XG5cblx0XHRcdGNvbnN0IGlzRm9ybUROQSA9IGlucHV0LmluY2x1ZGVzKCc6OicpO1xuXHRcdFx0Y29uc3QgcHJlZml4ID0gaXNGb3JtRE5BID8gJycgOiBgxpIgPSBgO1xuXHRcdFx0Y29uc3QgcG9zID0gYHk9XCIwXCJgOyAvLyAgZHk9XCIke3RleHRTaXplLmJhc2UgKyB0ZXh0U2l6ZS5zbSAtIDJ9cHhcIlxuXG5cdFx0XHRyZXR1cm4gaW5wdXRMYWJlbChpbnB1dCwgcG9zLCB7cHJlZml4OiBwcmVmaXgsIHRydW5jYXRlZDogZmFsc2UsIGZvbnQ6IGZvbnQsIHRleHRTaXplOiB0ZXh0U2l6ZS5iYXNlfSk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmlnQ2FwdGlvbiA9IHtlbGVtOiBjYXB0aW9uKGlucHV0LCBjdXN0b21MYWJlbCksIHBvczoge3g6IDAsIHk6IHRhYmxlU2l6ZS5oICsgcGFkZGluZy55fSwgbGluZVNwYWNpbmc6IHBhZGRpbmcueX07XG5cdFx0ZmlnQ2FwdGlvbi5zaXplID0gZ2V0U3ZnU2l6ZShmaWdDYXB0aW9uLmVsZW0pO1xuXG5cdFx0Y29uc3QgYXBwZW5kU2l6ZSA9IFtNYXRoLm1heCgwLCAoZmlnQ2FwdGlvbi5zaXplLncgLSB0YWJsZVNpemUudykpLFxuXHRcdFx0XHRcdFx0XHRmaWdDYXB0aW9uLnNpemUuaCArIChmaWdDYXB0aW9uLnBvcy55IC0gdGFibGVTaXplLmgpICsgZmlnQ2FwdGlvbi5saW5lU3BhY2luZ107XG5cblx0XHQvLyBjb25zdCBsaXN0TWFyZ2luID0ge3g6IDAsIHk6IE1hdGguZmxvb3IobWFyZ2luLzIpfTtcblxuXHRcdGNoYXJ0LnNpemUgPSB7dzogKHRhYmxlU2l6ZS53ICsgYXBwZW5kU2l6ZVswXSArIGZpZ1BhZCksIFxuXHRcdFx0XHRcdCAgaDogKHRhYmxlU2l6ZS5oICsgYXBwZW5kU2l6ZVsxXSArIGZpZ1BhZCl9O1xuXG5cdFx0Y2hhcnQuZWxlbSA9IGA8c3ZnIGNsYXNzPVwidm1hcC1wZXJzcGVjdGl2ZXMtZmlndXJlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgdmlld0JveD1cIi0ke2ZpZ1BhZC8yfSAtJHtmaWdQYWQvMn0gJHtjaGFydC5zaXplLnd9ICR7Y2hhcnQuc2l6ZS5ofVwiPlxuXHRcdFx0PHJlY3QgeD1cIi0ke2ZpZ1BhZC8yfVwiIHk9XCItJHtmaWdQYWQvMn1cIiB3aWR0aD1cIiR7Y2hhcnQuc2l6ZS53fVwiIGhlaWdodD1cIiR7Y2hhcnQuc2l6ZS5ofVwiIGZpbGw9XCIke2ZpZ0N9XCI+PC9yZWN0PlxuXHRcdFx0PGcgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlcyB2bWFwLXRhYmxlXCI+JHsgdm1hcEl0ZW1zIH08L2c+XG5cdFx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHtmaWdDYXB0aW9uLnBvcy54fSwke2ZpZ0NhcHRpb24ucG9zLnl9KVwiPlxuXHRcdFx0XHQ8bGluZSB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIiR7dGFibGVTaXplLnd9XCIgeTI9XCIwXCIgc3Ryb2tlPVwiYmxhY2tcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiAvPlxuXHRcdFx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwke2ZpZ0NhcHRpb24ubGluZVNwYWNpbmd9KVwiPiR7IGZpZ0NhcHRpb24uZWxlbSB9PC9nPlxuXHRcdFx0PC9nPlxuXHRcdDwvc3ZnPmA7XG5cblx0XHRyZXR1cm4gY2hhcnQ7XG5cdC8vIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdm1hcExpc3Rfc3ZnICh2bWFwc19zdmcsIGdsb2JhbE9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdC8qIENvbnN0cnVjdHMgbXVsdGlwbGUgdm1hcHMgYXMgU1ZHIG91dHB1dCAqL1xuXG5cdGNvbnN0IHttYXJnaW4sIHZBbGlnbn0gPSB7IG1hcmdpbjogMjAsIHZBbGlnbjogJ2JvdHRvbScsIC4uLmdsb2JhbE9wdGlvbnMgfVxuXG5cdC8vIGNvbnN0IHZtYXBJdGVtcyA9IHZtYXBQZXJtdXRhdGlvbnNfc3ZnLm1hcCh2bWFwX3N2ZyA9PiB7XG5cdFx0XHRcblx0Ly8gXHRyZXR1cm4ge3NpemU6IHZtYXBfc3ZnLnNpemUsIGVsZW06IHZtYXBfc3ZnLmVsZW19O1xuXHQvLyB9KS5yZWR1Y2UoKHN0cixpdGVtLGksYXJyKSA9PiB7XG5cblx0Ly8gXHQvLyBjb25zdCBzaGlmdFggPSAoaSA+IDApID8gKCBhcnJbMF0uc2l6ZS53ICogaSArIChwYWRkaW5nLngqMikgKiBpICkgOiAwO1xuXHQvLyBcdHJldHVybiBzdHIrIGA8ZyBjbGFzcz1cInZtYXAtaXRlbVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3NoaWZ0WH0sMClcIj4ke2l0ZW0uZWxlbX08L2c+YDtcblx0Ly8gfSwnJyk7XG5cblx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwidm1hcC1saXN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7ICR7Z2V0VkFsaWduKHZBbGlnbil9IG1hcmdpbjogMCAtJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPlxuXHRcdFx0JHsgdm1hcHNfc3ZnLnJlZHVjZSgoc3RyLCB2bWFwX3N2ZykgPT4gYCR7c3RyfTxkaXYgY2xhc3M9XCJ2bWFwLWl0ZW1cIiBzdHlsZT1cInBhZGRpbmc6ICR7TWF0aC5mbG9vcihtYXJnaW4vNCl9cHggJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPiR7dm1hcF9zdmcuZWxlbX08L2Rpdj5gLCcnKSB9XG5cdFx0XHQ8L2Rpdj5gXG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgSGVscGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5jb25zdCBtYXJrdXBRdWFydEN5Y2xlcyA9IChzdHIpID0+IHtcblx0LyogTWFya3MgdXAgZ3JvdXBzIG9mIDQgbnVtYmVycyBlYWNoIGZvciBkbmEgdG8gYmUgYWJsZSB0byBhcHBseSByZWFkYWJsZSBDU1MgKi9cblx0cmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChzdHIsYyxpLGFycikgPT4ge1xuXG5cdFx0cmV0dXJuIHN0ciArICgoaSsxKSU0ID09PSAxID8gJzxzcGFuIGNsYXNzPVwiZG5hLXF1YXJ0MVwiPicgOiAnJykgKyBjICsgKChpKzEpJTQgPT09IDAgPyAnPC9zcGFuPicgOiAnJyk7XG5cdH0sJycpO1xufVxuXG5jb25zdCBnZXRWQWxpZ24gPSB2QWxpZ24gPT4ge1xuXHQvLyA+Pj4gYXMgaGVscGVyXG5cdGNvbnN0IGFsaWduSXRlbXMgPSB2QWxpZ24gPT09ICd0b3AnICAgID8gJ2ZsZXgtc3RhcnQnXG5cdFx0XHRcdCBcdCA6IHZBbGlnbiA9PT0gJ2NlbnRlcicgPyAnY2VudGVyJ1xuXHRcdFx0XHQgXHQgOiB2QWxpZ24gPT09ICdib3R0b20nID8gJ2ZsZXgtZW5kJyA6ICdmbGV4LWVuZCc7XG5cdHJldHVybiBgYWxpZ24taXRlbXM6ICR7YWxpZ25JdGVtc307YDtcbn1cblxuY29uc3QgdkNvbG9yID0gdmFsID0+IHtcblx0LyogVmFsdWUgdG8gY29sb3IgbWFwIGZvciB2bWFwICovXG5cdHJldHVybiB2YWwgPT0gMCA/ICcjMDAwMDAwJ1xuXHRcdCA6IHZhbCA9PSAxID8gJyM0NzU3ZmYnXG5cdFx0IDogdmFsID09IDIgPyAnI2ZmMDA0NCdcblx0XHQgOiB2YWwgPT0gMyA/ICcjMDBmZjVmJ1xuXHRcdCA6IE5hTjtcbn07XG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgeyBnZXRSZWFsRGVwdGgsIG9wYWNpdHksIGNpcmNsZURhc2hBcnJheSB9IGZyb20gJy4uLy4uL2NvbW1vbi9kMy1oZWxwZXInO1xuXG4vKiBDYXNjYWRpbmcgRDMtU3R5bGVzIC0gYnkgUGV0ZXIgSG9mbWFubiwgMTIvMjAxOCAqL1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZ2xvYmFsIHN0eWxlc1xuXG5jb25zdCBnbG9iYWwgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGZvbnQ6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBmb250VmFyOiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdpdGFsaWMnfSxcbiAgICAgICAgZm9udENvbnN0OiB7ZmFtaWx5OiAnY291cmllciwgbW9ub3NwYWNlJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ25vcm1hbCd9LFxuICAgICAgICBmb250Q29udGV4dDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTBweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLFxuICAgICAgICBsYWJlbHM6IHtyZUV2ZW46ICcyfHJ8JywgcmVPZGQ6ICcyfHJ8KzEnfSxcbiAgICAgICAgY29sb3I6IHtiYXNlOiBkMy5jb2xvcignYmxhY2snKSxcbiAgICAgICAgICAgICAgICBncm91bmQ6IGQzLmNvbG9yKCd3aGl0ZScpLFxuICAgICAgICAgICAgICAgIGluZGVmOiBkMy5jb2xvcigncmVkJyksXG4gICAgICAgICAgICAgICAgbGlnaHQ6IGQzLmNvbG9yKCcjZGRkJyksXG4gICAgICAgICAgICB9XG4gICAgfVxufTtcbmdsb2JhbC5iYXNpYyA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxuICAgIGZvbnQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250LFxuICAgICAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udFZhcjogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRWYXIsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZicsIHN0eWxlOiAnaXRhbGljJ1xuICAgICAgICB9LFxuICAgIGZvbnRDb25zdDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb25zdCxcbiAgICAgICAgZmFtaWx5OiAnZ2VvcmdpYSwgc2VyaWYnXG4gICAgfSxcbiAgICBmb250Q29udGV4dDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRDb250ZXh0LFxuICAgICAgICAgICAgZmFtaWx5OiAnY291cmllciwgbW9ub3NwYWNlJ1xuICAgICAgICB9XG59O1xuZ2xvYmFsLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2xvYmFsLmNvbW1vbixcbiAgICBmb250OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udCxcbiAgICAgICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgICAgICB9LFxuICAgIGZvbnRWYXI6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250VmFyLFxuICAgICAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udENvbnN0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnN0LFxuICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICB9LFxuICAgIGZvbnRDb250ZXh0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnRleHQsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICAgICAgfSxcbiAgICBjb2xvcjogey4uLmdsb2JhbC5jb21tb24uY29sb3IsXG4gICAgICAgICAgICBwb3M6IGQzLmNvbG9yKCd3aGl0ZScpLCBcbiAgICAgICAgICAgIG5lZzogZDMuY29sb3IoJ2JsYWNrJylcbiAgICAgICAgfVxufTtcbmNvbnN0IFtiYXNpYywgZ2VzdGFsdF0gPSBbZ2xvYmFsLmJhc2ljLCBnbG9iYWwuZ2VzdGFsdF07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRlZmF1bHRzKHN2Zykge1xuICAgIHN2Zy5hdHRyKCdzdHJva2UnLCdub25lJykuYXR0cignZmlsbCcsJ25vbmUnKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGQzLnRyZWUgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgdHJlZSA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgbm9kZVNpemU6IHt3OiAxMC4wLCBoOiAxMC4wfSwgLy8gc2l6ZSBvZiBub2Rlc1xuICAgICAgICBub2RlU2VwYXJhdGlvbjoge2h6OiAyMCwgdnQ6IDQwfSwgLy8gc2VwYXJhdGlvbiBiZXR3ZWVuIG5vZGVzXG4gICAgICAgIGRhc2hlczoge2xpbms6ICc0cHggNnB4J1xuICAgICAgICAgICAgfSxcbiAgICB9XG59O1xuXG50cmVlLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnRyZWUuY29tbW9uLFxufTtcbnRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuXG4gICAgYXhpcy5zZWxlY3RBbGwoJy50aWNrJykuc2VsZWN0KCdsaW5lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLm5vZGVTaXplLncqMS41KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdyZ2JhKDAsMCwwLC4wNScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKTtcbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLmF0dHIoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0Jyk7XG5cbn1cbnRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcblxuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUVudHJpZXMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5ncm91bmQudG9TdHJpbmcoKSk7XG4gICAgcmVDaGlsZHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCAzLCBbMV0pKTtcbiAgICByZVBvaW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBub2Rlcy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgdmFycy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG5cbiAgICBzZXRzLnNlbGVjdEFsbCgnY2lyY2xlLmlubmVyJylcbiAgICAgICAgLy8gLmNsYXNzZWQoJ2lubmVyJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxufTtcbnRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzID0gZnVuY3Rpb24obGlua3MsIGxpbmtQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuICAgIGxpbmtzLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG4gICAgcmVDaGlsZExpbmsuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRoaXMuZGFzaGVzLmxpbmspO1xuXG4gICAgcmVQb2ludExpbmsuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRoaXMuZGFzaGVzLmxpbmspO1xufTtcblxuLy8gdHJlZS5nZXN0YWx0ID0ge1xuLy8gICAgIC4uLmdlc3RhbHQsXG4vLyAgICAgLi4udHJlZS5jb21tb24sXG4vLyB9O1xuLy8gdHJlZS5nZXN0YWx0LmFwcGx5QXhpc1N0eWxlcyA9IGZ1bmN0aW9uKGF4aXMpIHtcbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5QXhpc1N0eWxlcyhheGlzKTtcbi8vIH1cbi8vIHRyZWUuZ2VzdGFsdC5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbi8vICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMpO1xuLy8gfTtcbi8vIHRyZWUuZ2VzdGFsdC5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbi8vICAgICAvLyBjb25zdCBbcmVDaGlsZExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbi8vICAgICB0cmVlLmJhc2ljLmFwcGx5TGlua1N0eWxlcyhsaW5rcywgbGlua1BhcnRpdGlvbnMpO1xuLy8gfTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGQzLnBhY2sgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgcGFjayA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgcmFkaXVzOiAxNCxcbiAgICAgICAgcGFkZGluZzogMTQsXG4gICAgfVxufTtcblxucGFjay5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi5wYWNrLmNvbW1vbixcbn07XG5wYWNrLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGZvcm1zLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCAxNCwgWzIvNSwgMy81XSkgKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHJlUG9pbnRzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcblxuICAgIGNvbnN0IHJlRXZlbkxhYmVscyA9IHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xufTtcblxucGFjay5nZXN0YWx0ID0ge1xuICAgIC4uLmdlc3RhbHQsXG4gICAgLi4ucGFjay5jb21tb24sXG59O1xucGFjay5nZXN0YWx0LmludmVydEZpbGwgPSBmdW5jdGlvbihkKSB7XG4gICAgcmV0dXJuIGdldFJlYWxEZXB0aChkKSUyID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IubmVnLnRvU3RyaW5nKCk7XG59O1xucGFjay5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBjb25zdCBkZWZzID0gZDMuc2VsZWN0KGNoYXJ0Lm5vZGUoKS5wYXJlbnROb2RlKVxuICAgICAgICAuYXBwZW5kKCdkZWZzJyk7XG4gICAgY29uc3QgZ3JhZF8xID0gZGVmcy5hcHBlbmQoJ3JhZGlhbEdyYWRpZW50JykuYXR0cignaWQnLCAnZ3JhZC1pbmRlZi1vdXRpbicpXG4gICAgICAgIC5hdHRyKCdmeCcsJzIwJScpXG4gICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzQwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjMpO1xuICAgICAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnOTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuOCk7XG4gICAgICAgIGdyYWRfMS5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzEwMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMS4wKTtcbiAgICBjb25zdCBncmFkXzIgPSBkZWZzLmFwcGVuZCgncmFkaWFsR3JhZGllbnQnKS5hdHRyKCdpZCcsICdncmFkLWluZGVmLWlub3V0JylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDEuMCk7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzUwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjYpO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc2MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC40KTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjApO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuXG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogJ25vbmUnIClcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1vdXRpbiknKTtcblxuICAgIGNvbnN0IG9wZW5SZUVudHJpZXMgPSByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKS5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICd1cmwoI2dyYWQtaW5kZWYtaW5vdXQpJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgZCA9PiBjaXJjbGVEYXNoQXJyYXkoZC5yLCA4LCBbMi81LCAzLzVdKSApO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknKSB8fMKgIWdldFJlYWxEZXB0aChkKSUyKSApIC8vICBcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgZCA9PiB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgb3BlblJlRW50cmllcy5maWx0ZXIoZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScpICYmICFkLnBhcmVudC5kYXRhLmxhc3RPcGVuKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkpO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gdGhpcy5pbnZlcnRGaWxsKGQpKTtcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCdyZWN0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuICAgIHVuY2xlYXIuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgICAgIFxuICAgIHJlUG9pbnRzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJyx0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCAnc2NhbGUoMS41KScpO1xuXG4gICAgY29uc3QgcmVFdmVuTGFiZWxzID0gcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknICYmICFkLnBhcmVudC5kYXRhLmxhc3RPcGVuKSA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbC5pbnNpZGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5JyAmJiBkLmRhdGEubGFzdE9wZW4pID8gdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpIDogdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSk7XG5cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBib3htb2RlbEQzIHN0eWxlczpcblxuZXhwb3J0IGNvbnN0IGJveG1vZGVsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBlbGVtTWFyZ2luOiB7aHo6IDEyLCB2dDogOH0sIC8vIHZ0OiA4XG4gICAgICAgIGZvcm1NYXJnaW46IHt0b3A6IDEwLCByaWdodDogMTB9LFxuICAgICAgICBmb3JtUGFkZGluZzoge2h6OiAwfSxcbiAgICAgICAgbWluRm9ybVNpemU6IHt3aWR0aDogMzQsIGhlaWdodDogMzR9LFxuICAgICAgICBtYXhMaW5lV2lkdGg6IDEwMDAwLFxuICAgICAgICBzdHJva2VXaWR0aDogMS4xXG4gICAgfVxufTtcblxuYm94bW9kZWwuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4uYm94bW9kZWwuY29tbW9uXG4gICAgLy8gZm9udDogey4uLmJhc2ljLmZvbnQsIHNpemU6ICcxOHB4J31cbn07XG5ib3htb2RlbC5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBzZXRzLnNlbGVjdCgncG9seWxpbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgdGhpcy5zdHJva2VXaWR0aCk7XG4gICAgZm9ybXMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsJ25vbmUnKTtcbiAgICAvLyByZUVudHJpZXMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgLy8gICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIGVsZW1lbnRzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC8vIC5zdHlsZSgnYWxpZ25tZW50LWJhc2VsaW5lJywnYmFzZWxpbmUnKSA8LS0gXCJidWdcIiBpbiBTYWZhcmlcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuICAgIHJlRW50cmllcy5zZWxlY3QoJy5sYWJlbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICB1bmNsZWFyLnNlbGVjdCgnLnVuY2xlYXJNYXJrJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5saWdodC50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgJ25vcm1hbCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xufTsiLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5pbXBvcnQgYm94bW9kZWxEMyBmcm9tICdib3htb2RlbC1sYXlvdXQtZm9yLWQzJztcblxuaW1wb3J0IGNoYXJ0RmFjdG9yeSwgeyBmaXRDaGFydCwgdGV4dFNpemUsIHRleHRTdWJzY3JpcHQsIGNpcmNsZUxhYmVsIH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tICcuL2dyYXBoLWQzLXN0eWxlcy5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRDNHcmFwaCB7XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgVmlzdWFsaXphdGlvbiBTZXR1cFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBjb25zdHJ1Y3RvcihncmFwaFR5cGUsIGRhdGEsIG9wdHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gY3JlYXRlIGJhc2ljIHN2Zy1zdHJ1Y3R1cmUgZnJvbSBjaGFydEZhY3RvcnkgYW5kIG1lcmdlIG9wdGlvbnMgd2l0aCBjb25maWd1cmF0aW9uXG5cbiAgICAgICAgY29uc3QgcHJvdG8gPSBjaGFydEZhY3RvcnkoIHsgXG4gICAgICAgICAgICAuLi57IG1hcmdpbjogeyBsZWZ0OiA1MCwgcmlnaHQ6IDUwLCB0b3A6IDUwLCBib3R0b206IDUwIH0sIFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9LFxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IHsgbGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwIH0sXG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzczogJ2Jhc2ljJyB9LFxuICAgICAgICAgICAgLi4ub3B0c1xuICAgICAgICB9ICk7XG5cbiAgICAgICAgLy8gbWVyZ2UgdGhpcyBncmFwaCB3aXRoIHRoZSBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBwcm90byk7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBpbm5lciBkaW1lbnNpb25zIG9mIHRoZSBzdmctY2hhcnRcbiAgICAgICAgdGhpcy5pbm5lckhlaWdodCA9IHRoaXMuaGVpZ2h0IC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tIC0gdGhpcy5wYWRkaW5nLnRvcCAtIHRoaXMucGFkZGluZy5ib3R0b207XG4gICAgICAgIHRoaXMuaW5uZXJXaWR0aCA9IHRoaXMud2lkdGggLSB0aGlzLm1hcmdpbi5sZWZ0IC0gdGhpcy5tYXJnaW4ucmlnaHQgLSB0aGlzLnBhZGRpbmcubGVmdCAtIHRoaXMucGFkZGluZy5yaWdodDtcblxuICAgICAgICAvLyBjYWxsIHRoZSBhcHByb3ByaWF0ZSBtZXRob2QgdG8gYnVpbGQgdGhlIGdyYXBoXG4gICAgICAgIHRoaXMuY29uc3RydWN0b3JbZ3JhcGhUeXBlXS5jYWxsKHRoaXMsIGRhdGEsIC4uLmFyZ3MpO1xuICAgIH1cblxuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgICAgICAgICAgICBEZXB0aCBUcmVlIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHRyZWUoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKTtcblxuICAgICAgICAvLyBzZXQgdXAgZGVzaWduIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBkZXNpZ24gPSBzdHlsZXMudHJlZVt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCBbbm9kZVNpemUsIG5vZGVTZXBdID0gW2Rlc2lnbi5ub2RlU2l6ZSwgZGVzaWduLm5vZGVTZXBhcmF0aW9uXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIHRoaXMucGFkZGluZyA9IHsgbGVmdDogMTAsIHJpZ2h0OiAxMCwgdG9wOiAxMCwgYm90dG9tOiAxMCB9O1xuXG4gICAgICAgIHJvb3QuZHggPSBub2RlU2l6ZS53ICsgbm9kZVNlcC5oejtcbiAgICAgICAgcm9vdC5keSA9IHRoaXMud2lkdGggLyAocm9vdC5oZWlnaHQgKyAxKTtcblxuICAgICAgICAvLyBkZWZpbmUgdHJlZSBsYXlvdXRcbiAgICAgICAgY29uc3QgbGF5b3V0ID0gZDMudHJlZSgpXG4gICAgICAgICAgICAubm9kZVNpemUoW1xuICAgICAgICAgICAgICAgIHJvb3QuZHgsXG4gICAgICAgICAgICAgICAgcm9vdC5keVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5zZXBhcmF0aW9uKChhLGIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5wYXJlbnQgPT0gYi5wYXJlbnQgPyAxIDogMjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0cmVlID0gbGF5b3V0KHJvb3QpO1xuXG4gICAgICAgIC8vIGNvbXB1dGUgbWluL21heCB4LXZhbHVlc1xuICAgICAgICBsZXQgeDAgPSBJbmZpbml0eTtcbiAgICAgICAgbGV0IHgxID0gLXgwO1xuICAgICAgICB0cmVlLmVhY2goZCA9PiB7XG4gICAgICAgICAgICBpZiAoZC54ID4geDEpIHgxID0gZC54O1xuICAgICAgICAgICAgaWYgKGQueCA8IHgwKSB4MCA9IGQueDtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGNvbXB1dGUgbmV3IGhlaWdodCBiYXNlZCBvbiB0aGUgZGlmZmVyZW5jZSBvZiBtaW4vbWF4IHgtdmFsdWVzIG9mIHRyZWUgbm9kZXMgKyB0d2ljZSB0aGUgcGFkZGluZ1xuICAgICAgICBjb25zdCByb290VW5tYXJrZWQgPSByb290LmRhdGEudW5tYXJrZWQ7XG4gICAgICAgIGNvbnN0IHRpY2twYWRkaW5nID0gbm9kZVNpemUuaCoxLjg7XG4gICAgICAgIGNvbnN0IGF4aXNIZWlnaHQgPSB0aWNrcGFkZGluZzsgLy8zMDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAoeDEgLSB4MCkgKyB0aGlzLnBhZGRpbmcudG9wKjIgKyBub2RlU2l6ZS5oKzIgKyBheGlzSGVpZ2h0O1xuXG4gICAgICAgIC8vIHNldHVwIHN2ZyBjb250YWluZXJcbiAgICAgICAgdGhpcy5zdmdcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGgpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0XG4gICAgICAgICAgICAuY2xhc3NlZCgnZ3JhcGgtdHJlZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdCArIG5vZGVTaXplLncvMiArIChyb290LmRhdGEudW5tYXJrZWQgPyAtcm9vdC5keSA6IDApfSwke3RoaXMucGFkZGluZy50b3AgLSB4MCArIG5vZGVTaXplLmgvMn0pYCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhZGQgdmVydGljYWwgYXhpcyBsaW5lcyBmb3IgZGVwdGhcblxuICAgICAgICBjb25zdCByb290SGVpZ2h0cyA9IGQzLnJhbmdlKHJvb3QuaGVpZ2h0ICsgKHJvb3RVbm1hcmtlZCA/IDA6MSkpO1xuXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgICAgICAgICAuZG9tYWluKCByb290SGVpZ2h0cyApXG4gICAgICAgICAgICAucmFuZ2UoIHJvb3RIZWlnaHRzLm1hcChpID0+IChpKyhyb290VW5tYXJrZWQgPyAxOjApKSpyb290LmR5KSApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVwdGhBeGlzID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAuc2NhbGUodGhpcy5kZXB0aFNjYWxlKVxuICAgICAgICAgICAgLnRpY2tTaXplSW5uZXIoLSh4MS14MCkpXG4gICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICAgICAgLnRpY2tQYWRkaW5nKHRpY2twYWRkaW5nKVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoIHRoaXMuZGVwdGhTY2FsZS5kb21haW4oKS5tYXAoaSA9PiBcbiAgICAgICAgICAgICAgICAodGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLmxlbmd0aCA8IDE1KSA/ICdEZXB0aCAnK2kgOiBpXG4gICAgICAgICAgICApICk7XG5cbiAgICAgICAgY29uc3QgYXhpcyA9IGNoYXJ0LmFwcGVuZCgnZycpXG4gICAgICAgICAgICAuY2xhc3NlZCgnZGVwdGhBeGlzJywgdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKDAsICR7eDF9KWApXG4gICAgICAgICAgICAuY2FsbChkZXB0aEF4aXMpO1xuICAgICAgICBheGlzLnNlbGVjdCgnLmRvbWFpbicpLnJlbW92ZSgpO1xuICAgICAgICBcblxuICAgICAgICAvLyBhZGQgZ3JvdXBzIGZvciBsaW5rcyBhbmQgbm9kZXNcblxuICAgICAgICBjb25zdCBsaW5rcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLmxpbmsnKVxuICAgICAgICAgICAgLmRhdGEodHJlZS5saW5rcygpKSBcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xpbmsnLCB0cnVlKVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC55fSwke2QueH0pYCk7XG5cbiAgICAgICAgaWYgKHJvb3RVbm1hcmtlZCkge1xuICAgICAgICAgICAgbGlua3MuZmlsdGVyKGQgPT4gZC5zb3VyY2UuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiBkLmRlcHRoID09PSAwKVxuICAgICAgICAgICAgICAgIC5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdlbmVyYXRlIGxpbmsgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3QgbGlua1BhcnRpdGlvbnMgPSByZXNvbHZlTGlua3ModHJlZSwgbGlua3MpO1xuICAgICAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXModHJlZSwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gY3VydmVkIGxpbmUgZ2VuZXJhdG9yXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcyk7XG5cbiAgICAgICAgbGlua3NcbiAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkJywgZDMubGlua0hvcml6b250YWwoKVxuICAgICAgICAgICAgICAgICAgICAueChkID0+IGQueSlcbiAgICAgICAgICAgICAgICAgICAgLnkoZCA9PiBkLngpKTtcblxuICAgICAgICBub2Rlcy5maWx0ZXIoZCA9PiAhZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgbm9kZVNpemUudy8yKVxuICAgICAgICByZVBvaW50cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLCBub2RlU2l6ZS53LzIgKyAyKVxuICAgICAgICAgICAgLnRleHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHAgPSBkLnBhcmVudDtcbiAgICAgICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUocC5kYXRhLnR5cGUgIT09ICdyZUVudHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICBwID0gcC5wYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMTAwMCkgcmV0dXJuIG51bGw7IC8vIHNlY3VyaXR5XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChwLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykgPyAocC5kYXRhLnJlRXZlbiA/ICcyfHJ8JyA6ICcyfHJ8KzEnKSA6ICcnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgZWxlbWVudHMuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAobm9kZVNpemUudy8yKS8yKTtcblxuICAgICAgICBub2Rlc1xuICAgICAgICAgICAgLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgIFxuICAgICAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuICAgICAgICBjb25zdHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYD0gJHtkLmRhdGEudmFsdWV9YCk7XG4gICAgICAgIHVuY2xlYXIuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gYC8ke2QuZGF0YS5zeW1ib2x9L2ApO1xuXG4gICAgICAgIHNldHMuZmlsdGVyKGQgPT4gZC5jaGlsZHJlbilcbiAgICAgICAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAgICAgICAuY2xhc3NlZCgnaW5uZXInLHRydWUpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuICAgICAgICBkZXNpZ24uYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zKTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnRyZWUsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHRyZWUsIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIENpcmNsZSBwYWNraW5nIHZpc3VhbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIHBhY2soZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLmNoaWxkcmVuID8gMCA6IDEpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5wYWNrW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtyYWRpdXMsIHBhZGRpbmddID0gW2Rlc2lnbi5yYWRpdXMsIGRlc2lnbi5wYWRkaW5nXTtcbiAgICAgICAgY29uc3QgW2ZvbnRTaXplLCBmb250XSA9IFtkZXNpZ24uZm9udC5zaXplLCBkZXNpZ24uZm9udC5mYW1pbHldO1xuXG4gICAgICAgIC8vIGRlZmluZSBwYWNrIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy5wYWNrKClcbiAgICAgICAgLnBhZGRpbmcoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcGFkID0gcGFkZGluZztcbiAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nICYmIGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAgICAgICAgICAgICAgIHBhZCA9IHBhZCAqIDAuNDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkLmRhdGEudW5tYXJrZWQgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHBhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcGFkO1xuICAgICAgICB9KVxuICAgICAgICAucmFkaXVzKGQgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZCA9IHJhZGl1cztcbiAgICAgICAgICAgIGlmKHR5cGVvZihkLmRhdGEuc3ltYm9sKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICAgICAgaWYoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykgcmFkICs9IHBhZGRpbmcqMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmFkID0gdGV4dFNpemUoZC5kYXRhLnZhbHVlKycnLCBmb250U2l6ZSwgZm9udCkud2lkdGggLzI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGQuZGF0YS5jaGlsZHJlbiB8fCBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgfHzCoGQuZGF0YS50eXBlID09PSAnc3BhY2UnKSByYWQgPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJhZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBhY2sgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLXBhY2snKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcubGVmdH0sJHtwYWNrLnIgKyB0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEocGFjay5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueH0sJHtkLnl9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMocGFjaywgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBzZXRzLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgZCA9PiBkLnIpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuXG4gICAgICAgIHVuY2xlYXIuYXBwZW5kKCdyZWN0JylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IFxuICAgICAgICAgICAgYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7LShkLnIgLSBwYWRkaW5nKX0sXG4gICAgICAgICAgICAkey0odGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpLzJ9KWApXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCBkID0+IGQucioyIC0gcGFkZGluZyoyKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKHRleHRTaXplKCd4Jyxmb250U2l6ZSwgZm9udCkuaGVpZ2h0ICsgcGFkZGluZyoyKSlcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcblxuICAgICAgICByZVBvaW50c1xuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5hdHRyKCdyJywgMS41KTtcblxuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAuY2FsbChjaXJjbGVMYWJlbCggZCA9PiBkLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScsIGRlc2lnbi5mb250Q29udGV4dC5zaXplLCBkZXNpZ24uZm9udENvbnRleHQuZmFtaWx5ICkpO1xuXG4gICAgICAgIC8vIGFwcGx5IGFsbCBzdHlsZS1yZWxhdGVkIGF0dHJpYnV0ZXMgdG8gdGhlIHNlbGVjdGlvbnNcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMsIGNoYXJ0KTtcblxuICAgICAgICBmaXRDaGFydChjaGFydCwgdGhpcy5wYWRkaW5nKTtcblxuICAgICAgICAvLyBkZWJ1Z2dpbmc6XG4gICAgICAgIC8vIFt0aGlzLnJvb3QsIHRoaXMubGF5b3V0LCB0aGlzLmNoYXJ0LCB0aGlzLnBhY2ssIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIHBhY2ssIGRlc2lnbl07XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vIEJveG1vZGVsIHZpc3VhbGl6YXRpb24gKFNwZW5jZXItQnJvd24gaG9vayBub3RhdGlvbilcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc3RhdGljIGdzYmhvb2tzKGRhdGEpIHtcbiAgICAgICAgY29uc3QgY2hhcnQgPSB0aGlzLmNvbnRhaW5lcjtcbiAgICAgICAgLy8gY3JlYXRlIGEgZDMtaGllcmFyY2h5IGZyb20gb3VyIGZvcm0tanNvblxuICAgICAgICBzdHlsZXMuY2xlYXJEZWZhdWx0cyh0aGlzLnN2Zyk7IC8vIGNsZWFyIGRlZmF1bHQgc3R5bGVzIGZvciBzdmcgZXhwb3J0XG5cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpXG4gICAgICAgICAgICAuc3VtKGQgPT4gZC5zcGFjZSA/IDAgOiAxKTtcblxuICAgICAgICB0aGlzLnN0eWxlQ2xhc3MgPSAnYmFzaWMnO1xuICAgICAgICBjb25zdCBjb21wYWN0UmVFbnRyeSA9ICh0aGlzLmNvbXBhY3RDaGVja2VkICE9PSBudWxsKSA/IHRoaXMuY29tcGFjdENoZWNrZWQgOiB0cnVlO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy5ib3htb2RlbFt0aGlzLnN0eWxlQ2xhc3NdO1xuICAgICAgICBjb25zdCB7ZWxlbU1hcmdpbiwgZm9ybU1hcmdpbiwgZm9ybVBhZGRpbmcsIG1pbkZvcm1TaXplLCBtYXhMaW5lV2lkdGgsIGZvbnRWYXIsIGZvbnRDb25zdCwgZm9udENvbnRleHQsIGxhYmVsc30gPSB7Li4uZGVzaWdufTtcbiAgICAgICAgY29uc3QgdW5jbGVhclBhZCA9IHtoejogZWxlbU1hcmdpbi5oei8yLCB2dDogZWxlbU1hcmdpbi52dH07XG4gICAgICAgIGNvbnN0IGRhdGFMYWJlbFBhZCA9IDQ7XG5cbiAgICAgICAgLy8gZGVmaW5lIGJveG1vZGVsIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBib3htb2RlbEQzKClcbiAgICAgICAgICAgIC52QWxpZ24oJ2JvdHRvbScpXG4gICAgICAgICAgICAuZWRnZU1hcmdpbnMoZCA9PiAhKGlzQ29udGFpbmVyKGQpICYmICFkLnBhcmVudC5wYXJlbnQgJiYgZC5wYXJlbnQuZGF0YS51bm1hcmtlZCkgKVxuICAgICAgICAgICAgLmlzQ29udGFpbmVyKGQgPT4gaXNDb250YWluZXIoZCkpXG4gICAgICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwLmxlZnQgPSBwLnJpZ2h0ID0gZm9ybVBhZGRpbmcuaHo7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0eHRTeiA9IHRleHRTaXplKHRleHQsIGZvbnRDb250ZXh0LnNpemUsIGZvbnRDb250ZXh0LmZhbWlseSwgZm9udENvbnRleHQuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcC5ib3R0b20gPSB0eHRTei5oZWlnaHQgKyBlbGVtTWFyZ2luLnZ0LzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXJnaW4oZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSB7bGVmdDogMCwgcmlnaHQ6IDAsIHRvcDogMCwgYm90dG9tOiAwfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNDb250YWluZXIoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBmb3JtTWFyZ2luLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgbS5yaWdodCA9IGZvcm1NYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRlcHRoID09PSAwKSBtLnRvcCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgbS5yaWdodCA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGQucGFyZW50LmRhdGEubGFzdE9wZW4pIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb21wYWN0UmVFbnRyeSAmJiBkLnBhcmVudC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcgJiYgcmVQYXJlbnRMYXN0T3BlbihkKSkpIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkLmRhdGEudHlwZSAhPT0gJ3JlRW50cnlQb2ludCcpIHsgLy8gYWxsIG90aGVyIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIG0udG9wID0gbS5ib3R0b20gPSBlbGVtTWFyZ2luLnZ0O1xuICAgICAgICAgICAgICAgICAgICBtLmxlZnQgPSBtLnJpZ2h0ID0gZWxlbU1hcmdpbi5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvbnRWYXIuc3R5bGUgPT0gJ2l0YWxpYycpIG0ucmlnaHQgKz0gMTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbS5ib3R0b20gPSAoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gLTYgOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zcGFuSGVpZ2h0KGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1pbkNvbnRhaW5lclNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtaW5Gb3JtU2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgaCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFyZW50TGFzdE9wZW4oZCkpIHcgPSBtaW5Gb3JtU2l6ZS53aWR0aC8yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknICYmIGQuY2hpbGRyZW4ubGVuZ3RoIDw9IDIgJiYgZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dFN6ID0gdGV4dFNpemUodGV4dCwgZm9udENvbnRleHQuc2l6ZSwgZm9udENvbnRleHQuZmFtaWx5LCBmb250Q29udGV4dC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aCArIGRhdGFMYWJlbFBhZCoyO1xuICAgICAgICAgICAgICAgICAgICB3ID0gdyA8IG1pbkZvcm1TaXplLndpZHRoID8gbWluRm9ybVNpemUud2lkdGggOiB3O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4ge3dpZHRoOiB3LCBoZWlnaHQ6IGh9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWF4TGluZVdpZHRoKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gbWF4TGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIHJldHVybiB3O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubm9kZVNpemUoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSAwLCBoID0gMDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaXNUZXh0KGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHRTeiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChkLmRhdGEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YXInOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCBmb250VmFyLnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndW5jbGVhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSB0eHRTei53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGggPSB0eHRTei5oZWlnaHQgKiAwLjc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHcgKz0gc2tld0RpZmYoKGggKyB1bmNsZWFyUGFkLnZ0KjIpKSoyICsgdW5jbGVhclBhZC5oeioyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCArPSB1bmNsZWFyUGFkLnZ0KjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29uc3QnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0U3ogPSB0ZXh0U2l6ZShkLmRhdGEudmFsdWUsIGZvbnRDb25zdC5zaXplLCBmb250Q29uc3QuZmFtaWx5LCBmb250Q29uc3Quc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6IHcsIGhlaWdodDogaH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYm94bW9kZWwgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gc2V0dXAgYmFzaWMgY2hhcnQgc3RydWN0dXJlXG4gICAgICAgIGNoYXJ0LmF0dHIoJ2NsYXNzJywgJ2dyYXBoLWJveG1vZGVsJylcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlKCR7dGhpcy5wYWRkaW5nLmxlZnR9LCR7dGhpcy5wYWRkaW5nLnRvcH0pYCk7XG5cbi8vIGNoYXJ0LmF0dHIoJ3dpZHRoJywnMTAwJScpLmF0dHIoJ2hlaWdodCcsJzEwMCUnKS5zdHlsZSgnZmlsbCcsJ3JnYmEoMjU1LDAsMCwuMiknKTtcblxuICAgICAgICBjb25zdCBub2RlcyA9IGNoYXJ0LnNlbGVjdEFsbCgnLm5vZGUnKVxuICAgICAgICAgICAgLmRhdGEoYm94bW9kZWwuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLngwfSwke2QueTB9KWApO1xuXG4gICAgICAgIC8vIGdlbmVyYXRlIG5vZGUgcGFydGl0aW9uIHNlbGVjdGlvbnNcbiAgICAgICAgY29uc3Qgbm9kZVBhcnRpdGlvbnMgPSByZXNvbHZlTm9kZXMoYm94bW9kZWwsIG5vZGVzKTtcbiAgICAgICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgICAgIC8vIGRlZmluZSBkZXRhaWxsZWQgc3RydWN0dXJlL2xvZ2ljXG5cbiAgICAgICAgZm9ybXMuYXBwZW5kKCdwb2x5bGluZScpIC8vLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpLmFwcGVuZCgncG9seWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4gYDAsMCAke2QueDEtZC54MH0sMCAke2QueDEtZC54MH0sJHtkLnkxLWQueTB9YCk7XG4gICAgICAgIHJlRW50cmllcy5hcHBlbmQoJ3BvbHlsaW5lJylcbiAgICAgICAgICAgIC5hdHRyKCdwb2ludHMnLCBkID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3ID0gZC54MS1kLngwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGggPSBkLnkxLWQueTA7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVIID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHJldHVybiBgMCwwICR7d30sMCAke3d9LCR7aH0gMCwke2h9IDAsJHtoLXJlSH1gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB3ID0gZC54MS1kLngwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoID0gZC55MS1kLnkwO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZUggPSBtaW5Gb3JtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgJHt3fSwke2gtcmVIfSAke3d9LCR7aH0gMCwke2h9IDAsJHtoLXJlSH1gO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICByZUVudHJpZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnJlRXZlbiAhPT0gJ3VuZGVmaW5lZCcpLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgwLCR7ZC55MS1kLnkwfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLGQgPT4gZGF0YUxhYmVsUGFkIClcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IC01IClcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gZC5kYXRhLnJlRXZlbiA/IGxhYmVscy5yZUV2ZW4gOiBsYWJlbHMucmVPZGQpO1xuXG4gICAgICAgIGNvbnN0IHVuY2xUeHRTaXplID0gZCA9PiB0ZXh0U2l6ZShkLmRhdGEuc3ltYm9sLCBmb250VmFyLnNpemUsIGZvbnRWYXIuZmFtaWx5LCAnbm9ybWFsJyk7XG4gICAgICAgIGNvbnN0IHVuY2xEaWZmID0gZCA9PiBza2V3RGlmZiggKHVuY2xUeHRTaXplKGQpLmhlaWdodCowLjcgKyB1bmNsZWFyUGFkLnZ0KjIpICk7XG5cbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmNsYXNzZWQoJ3VuY2xlYXJNYXJrJyx0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHNrZXdYKC0zMCkgdHJhbnNsYXRlKCR7dW5jbERpZmYoZCl9LCR7MH0pYClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gKChkLngxLWQueDApIC0gdW5jbERpZmYoZCkgKSlcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCBkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3gnLGQgPT4gdW5jbERpZmYoZCkgKyB1bmNsZWFyUGFkLmh6IClcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIC11bmNsZWFyUGFkLnZ0ICAtICgoZC5kYXRhLnN5bWJvbC5zcGxpdCgnXycpLmxlbmd0aCA+IDEpID8gNiA6IDApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG4gICAgICAgICAgXG4gICAgICAgIGNvbnN0cy5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEudmFsdWUpO1xuICAgICAgICB2YXJzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMuYm94bW9kZWwsIHRoaXMuZGVzaWduXSA9IFxuICAgICAgICAvLyAgICAgW3Jvb3QsIGxheW91dCwgY2hhcnQsIGJveG1vZGVsLCBkZXNpZ25dO1xuICAgIH1cblxuICAgIHN0YXRpYyBmb3JjZShkYXRhKSB7XG5cbiAgICB9XG5cbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gcmVzb2x2ZU5vZGVzKHJvb3QsIG5vZGVzKSB7XG4gIC8vIHJlc29sdmVzIGRlc2NlbmRhbnQgbm9kZXMgaW50byBmaWx0ZXJlZCBzZWxlY3Rpb25zXG4gIGNvbnN0IGxlYXZlcyA9IG5vZGVzLmZpbHRlcihkID0+IHJvb3QubGVhdmVzKCkuZmlsdGVyKGwgPT4gbCA9PT0gZCkucG9wKCkgKVxuICAgICAgLmNsYXNzZWQoJ2xlYWYnLCB0cnVlKTtcblxuICBjb25zdCBzZXRzID0gbm9kZXMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSlcbiAgY29uc3QgZm9ybXMgPSBzZXRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnZm9ybScpXG4gICAgICAuY2xhc3NlZCgnZm9ybScsIHRydWUpO1xuICBjb25zdCByZUVudHJpZXMgPSBzZXRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpXG4gICAgICAuY2xhc3NlZCgncmVFbnRyeScsIHRydWUpO1xuXG4gIGNvbnN0IGVsZW1lbnRzID0gbm9kZXMuZmlsdGVyKGQgPT4gIShkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSlcbiAgICAgIC5jbGFzc2VkKCdlbGVtZW50JywgdHJ1ZSk7XG4gIGNvbnN0IHZhcnMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3ZhcicpXG4gICAgICAuY2xhc3NlZCgndmFyJywgdHJ1ZSk7XG4gIGxldCBjb25zdHMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2NvbnN0JylcbiAgICAgIC5jbGFzc2VkKCdjb25zdCcsIHRydWUpO1xuICBjb25zdHMudW5tYXJrZWQgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMCkuY2xhc3NlZCgndW5tYXJrZWQnLCB0cnVlKTtcbiAgY29uc3RzLm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAxKS5jbGFzc2VkKCdtYXJrZWQnLCB0cnVlKTtcbiAgY29uc3RzLmluZGVmID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDIpLmNsYXNzZWQoJ2luZGVmJywgdHJ1ZSk7XG4gIGNvbnN0cy5pbWFnID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDMpLmNsYXNzZWQoJ2ltYWcnLCB0cnVlKTtcblxuICBjb25zdCB1bmNsZWFyID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICd1bmNsZWFyJylcbiAgICAgIC5jbGFzc2VkKCd1bmNsZWFyJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVDaGlsZHMgPSBmb3Jtcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVDaGlsZClcbiAgICAgIC5jbGFzc2VkKCdyZUNoaWxkJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVQb2ludHMgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVFbnRyeVBvaW50JywgdHJ1ZSk7XG5cbiAgcmV0dXJuIFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl07XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVMaW5rcyhyb290LCBsaW5rcykge1xuICAvLyByZXNvbHZlcyBsaW5rcyBiZXR3ZWVuIGRlc2NlbmRhbnQgbm9kZXMgaW50byBmaWx0ZXJlZCBzZWxlY3Rpb25zXG4gIGNvbnN0IHJlQ2hpbGRMaW5rID0gbGlua3MuZmlsdGVyKGQgPT4gZC50YXJnZXQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGRMaW5rJywgdHJ1ZSk7XG5cbiAgY29uc3QgcmVQb2ludExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKVxuICAgICAgLmNsYXNzZWQoJ3JlUG9pbnRMaW5rJywgdHJ1ZSk7XG5cbiAgcmV0dXJuIFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdO1xufVxuXG5mdW5jdGlvbiBpc1RleHQobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICd2YXInIHx8wqBub2RlLmRhdGEudHlwZSA9PT0gJ2NvbnN0JyB8fCBub2RlLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInOyB9XG5cbmZ1bmN0aW9uIGlzQ29udGFpbmVyKG5vZGUpIHsgcmV0dXJuIG5vZGUuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoG5vZGUuZGF0YS50eXBlID09PSAncmVFbnRyeSc7IH1cblxuZnVuY3Rpb24gcmVQYXJlbnRMYXN0T3Blbihub2RlKSB7XG5sZXQgcmVQYXJlbnQgPSBub2RlLmFuY2VzdG9ycygpLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpLnNoaWZ0KCk7XG5yZXR1cm4gcmVQYXJlbnQuZGF0YS5sYXN0T3Blbjtcbn1cblxuZnVuY3Rpb24gc2tld0RpZmYoaGVpZ2h0LGRlZ3JlZXM9MzApIHsgcmV0dXJuIE1hdGgudGFuKChkZWdyZWVzKihNYXRoLlBJLzE4MCkpKSAqIGhlaWdodDsgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXzsiXSwic291cmNlUm9vdCI6IiJ9