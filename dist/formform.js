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





// export {default as calc} from './core/fcalc';
// export {default as form} from './core/fform';
// export {default as graph} from './core/fgraph';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9ib3htb2RlbC1sYXlvdXQtZm9yLWQzL2Rpc3QvYm94bW9kZWwtZDMubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL2NhbnZnL2Rpc3QvYnJvd3Nlci9jYW52Zy5taW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmdiY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvc3RhY2tibHVyLWNhbnZhcy9zcmMvc3RhY2tibHVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vYmlnaW50LWhlbHBlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvbW9kdWxlcy9ncmFwaC1kMy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZ3JhcGgtZDMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vZXh0ZXJuYWwgXCJkM1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixJQUFJO0FBQ3ZFO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFLLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrR0FBK0csd0JBQXdCOztBQUV2STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7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OztBQ0FudTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLDhCQUE4QixFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssTUFBTTtBQUM5RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixFQUFFLEdBQUcsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLE1BQU07QUFDckUsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtREFBbUQsVUFBVTtBQUM3RDtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtFQUFRO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQSw0REFBNEQsWUFBWSxHQUFHLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7O0FBRy9CO0FBQ0E7O0FBRUEsUUFBUSxrRUFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLCtGQUErRjs7QUFFdEgsNEJBQTRCLGtFQUFrRTs7QUFFOUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLG1EQUFtRCxHOzs7Ozs7Ozs7OztBQ2hqQnpGLGdEIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiZDNcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJkM1wiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KHJvb3RbXCJkM1wiXSk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZDNfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2xpYi9tYWluLmpzXCIpO1xuIiwidmFyIGJpZ0ludCA9IChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgQkFTRSA9IDFlNyxcclxuICAgICAgICBMT0dfQkFTRSA9IDcsXHJcbiAgICAgICAgTUFYX0lOVCA9IDkwMDcxOTkyNTQ3NDA5OTIsXHJcbiAgICAgICAgTUFYX0lOVF9BUlIgPSBzbWFsbFRvQXJyYXkoTUFYX0lOVCksXHJcbiAgICAgICAgREVGQVVMVF9BTFBIQUJFVCA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XHJcblxyXG4gICAgdmFyIHN1cHBvcnRzTmF0aXZlQmlnSW50ID0gdHlwZW9mIEJpZ0ludCA9PT0gXCJmdW5jdGlvblwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIEludGVnZXIodiwgcmFkaXgsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAodHlwZW9mIHJhZGl4ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gK3JhZGl4ID09PSAxMCAmJiAhYWxwaGFiZXQgPyBwYXJzZVZhbHVlKHYpIDogcGFyc2VCYXNlKHYsIHJhZGl4LCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWUodik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcih2YWx1ZSwgc2lnbikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSBzaWduO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBTbWFsbEludGVnZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdmFsdWUgPCAwO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gTmF0aXZlQmlnSW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzUHJlY2lzZShuKSB7XHJcbiAgICAgICAgcmV0dXJuIC1NQVhfSU5UIDwgbiAmJiBuIDwgTUFYX0lOVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzbWFsbFRvQXJyYXkobikgeyAvLyBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBkb2Vzbid0IHJlZmVyZW5jZSBCQVNFLCBuZWVkIHRvIGNoYW5nZSB0aGlzIGZ1bmN0aW9uIGlmIEJBU0UgY2hhbmdlc1xyXG4gICAgICAgIGlmIChuIDwgMWU3KVxyXG4gICAgICAgICAgICByZXR1cm4gW25dO1xyXG4gICAgICAgIGlmIChuIDwgMWUxNClcclxuICAgICAgICAgICAgcmV0dXJuIFtuICUgMWU3LCBNYXRoLmZsb29yKG4gLyAxZTcpXTtcclxuICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNykgJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlMTQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcnJheVRvU21hbGwoYXJyKSB7IC8vIElmIEJBU0UgY2hhbmdlcyB0aGlzIGZ1bmN0aW9uIG1heSBuZWVkIHRvIGNoYW5nZVxyXG4gICAgICAgIHRyaW0oYXJyKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoIDwgNCAmJiBjb21wYXJlQWJzKGFyciwgTUFYX0lOVF9BUlIpIDwgMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIGFyclswXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIGFyclswXSArIGFyclsxXSAqIEJBU0U7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gYXJyWzBdICsgKGFyclsxXSArIGFyclsyXSAqIEJBU0UpICogQkFTRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaW0odikge1xyXG4gICAgICAgIHZhciBpID0gdi5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHZbLS1pXSA9PT0gMCk7XHJcbiAgICAgICAgdi5sZW5ndGggPSBpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBcnJheShsZW5ndGgpIHsgLy8gZnVuY3Rpb24gc2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gWWFmZmxlJ3MgbGlicmFyeSBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0JpZ0ludGVnZXJcclxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG4gICAgICAgIHZhciBpID0gLTE7XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB4W2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUobikge1xyXG4gICAgICAgIGlmIChuID4gMCkgcmV0dXJuIE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEubGVuZ3RoID49IGIubGVuZ3RoXHJcbiAgICAgICAgdmFyIGxfYSA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBsX2IgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsX2EpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IDAsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBzdW0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxfYjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gKyBiW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID49IGJhc2UgPyAxIDogMDtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGkgPCBsX2EpIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IHN1bSA9PT0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2krK10gPSBzdW0gLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSA+IDApIHIucHVzaChjYXJyeSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQW55KGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPj0gYi5sZW5ndGgpIHJldHVybiBhZGQoYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGFkZChiLCBhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTbWFsbChhLCBjYXJyeSkgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGNhcnJ5IGlzIG51bWJlciB3aXRoIDAgPD0gY2FycnkgPCBNQVhfSU5UXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gLSBiYXNlICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihzdW0gLyBiYXNlKTtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYSwgTWF0aC5hYnMoYikpLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkQW55KGEsIGIpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBsdXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UoYSArIGIpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhICsgYik7XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoTWF0aC5hYnMoYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYiwgTWF0aC5hYnMoYSkpLCBhIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wbHVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKyBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucGx1cyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYWRkO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHsgLy8gYXNzdW1lcyBhIGFuZCBiIGFyZSBhcnJheXMgd2l0aCBhID49IGJcclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGFfbCksXHJcbiAgICAgICAgICAgIGJvcnJvdyA9IDAsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBkaWZmZXJlbmNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiX2w7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSAtIGJvcnJvdyAtIGJbaV07XHJcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZSArPSBiYXNlO1xyXG4gICAgICAgICAgICAgICAgYm9ycm93ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSBiX2w7IGkgPCBhX2w7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSAtIGJvcnJvdztcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcltpKytdID0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJbaV0gPSBhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0QW55KGEsIGIsIHNpZ24pIHtcclxuICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVBYnMoYSwgYikgPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHN1YnRyYWN0KGEsIGIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYiwgYSk7XHJcbiAgICAgICAgICAgIHNpZ24gPSAhc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsdWUgPSBhcnJheVRvU21hbGwodmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNpZ24pIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih2YWx1ZSwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RTbWFsbChhLCBiLCBzaWduKSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgYiBpcyBudW1iZXIgd2l0aCAwIDw9IGIgPCBNQVhfSU5UXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgY2FycnkgPSAtYixcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIGJhc2UpO1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlICU9IGJhc2U7XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlIDwgMCA/IGRpZmZlcmVuY2UgKyBiYXNlIDogZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IGFycmF5VG9TbWFsbChyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNpZ24pIHIgPSAtcjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIocik7XHJcbiAgICAgICAgfSByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpXHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKGEsIE1hdGguYWJzKGIpLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdEFueShhLCBiLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbnVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgLSBiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYiwgTWF0aC5hYnMoYSksIGEgPj0gMCk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5taW51cyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAtIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5taW51cyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih0aGlzLnZhbHVlLCAhdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2lnbiA9IHRoaXMuc2lnbjtcclxuICAgICAgICB2YXIgc21hbGwgPSBuZXcgU21hbGxJbnRlZ2VyKC10aGlzLnZhbHVlKTtcclxuICAgICAgICBzbWFsbC5zaWduID0gIXNpZ247XHJcbiAgICAgICAgcmV0dXJuIHNtYWxsO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KC10aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihNYXRoLmFicyh0aGlzLnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSA+PSAwID8gdGhpcy52YWx1ZSA6IC10aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlMb25nKGEsIGIpIHtcclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBsID0gYV9sICsgYl9sLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBiX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFfbDsgKytpKSB7XHJcbiAgICAgICAgICAgIGFfaSA9IGFbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYl9sOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGJfaiA9IGJbal07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gYV9pICogYl9qICsgcltpICsgal07XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgcltpICsgaiArIDFdICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbChhLCBiKSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgYiBpcyBudW1iZXIgd2l0aCB8YnwgPCBCQVNFXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgcHJvZHVjdCwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSBhW2ldICogYiArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdExlZnQoeCwgbikge1xyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgd2hpbGUgKG4tLSA+IDApIHIucHVzaCgwKTtcclxuICAgICAgICByZXR1cm4gci5jb25jYXQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlLYXJhdHN1YmEoeCwgeSkge1xyXG4gICAgICAgIHZhciBuID0gTWF0aC5tYXgoeC5sZW5ndGgsIHkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKG4gPD0gMzApIHJldHVybiBtdWx0aXBseUxvbmcoeCwgeSk7XHJcbiAgICAgICAgbiA9IE1hdGguY2VpbChuIC8gMik7XHJcblxyXG4gICAgICAgIHZhciBiID0geC5zbGljZShuKSxcclxuICAgICAgICAgICAgYSA9IHguc2xpY2UoMCwgbiksXHJcbiAgICAgICAgICAgIGQgPSB5LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBjID0geS5zbGljZSgwLCBuKTtcclxuXHJcbiAgICAgICAgdmFyIGFjID0gbXVsdGlwbHlLYXJhdHN1YmEoYSwgYyksXHJcbiAgICAgICAgICAgIGJkID0gbXVsdGlwbHlLYXJhdHN1YmEoYiwgZCksXHJcbiAgICAgICAgICAgIGFiY2QgPSBtdWx0aXBseUthcmF0c3ViYShhZGRBbnkoYSwgYiksIGFkZEFueShjLCBkKSk7XHJcblxyXG4gICAgICAgIHZhciBwcm9kdWN0ID0gYWRkQW55KGFkZEFueShhYywgc2hpZnRMZWZ0KHN1YnRyYWN0KHN1YnRyYWN0KGFiY2QsIGFjKSwgYmQpLCBuKSksIHNoaWZ0TGVmdChiZCwgMiAqIG4pKTtcclxuICAgICAgICB0cmltKHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIGEgc3VyZmFjZSBmaXQgb2YgYSBncmFwaCBwbG90dGluZyB0aGUgcGVyZm9ybWFuY2UgZGlmZmVyZW5jZVxyXG4gICAgLy8gYmV0d2VlbiBsb25nIG11bHRpcGxpY2F0aW9uIGFuZCBrYXJhdHN1YmEgbXVsdGlwbGljYXRpb24gdmVyc3VzIHRoZSBsZW5ndGhzIG9mIHRoZSB0d28gYXJyYXlzLlxyXG4gICAgZnVuY3Rpb24gdXNlS2FyYXRzdWJhKGwxLCBsMikge1xyXG4gICAgICAgIHJldHVybiAtMC4wMTIgKiBsMSAtIDAuMDEyICogbDIgKyAwLjAwMDAxNSAqIGwxICogbDIgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgc2lnbiA9IHRoaXMuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBhYnM7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgaWYgKGIgPT09IC0xKSByZXR1cm4gdGhpcy5uZWdhdGUoKTtcclxuICAgICAgICAgICAgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlTbWFsbChhLCBhYnMpLCBzaWduKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VLYXJhdHN1YmEoYS5sZW5ndGgsIGIubGVuZ3RoKSkgLy8gS2FyYXRzdWJhIGlzIG9ubHkgZmFzdGVyIGZvciBjZXJ0YWluIGFycmF5IHNpemVzXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseUthcmF0c3ViYShhLCBiKSwgc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhhLCBiKSwgc2lnbik7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRpbWVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbEFuZEFycmF5KGEsIGIsIHNpZ24pIHsgLy8gYSA+PSAwXHJcbiAgICAgICAgaWYgKGEgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGIsIGEpLCBzaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhiLCBzbWFsbFRvQXJyYXkoYSkpLCBzaWduKTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZShhLnZhbHVlICogdGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYS52YWx1ZSAqIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXVsdGlwbHlTbWFsbEFuZEFycmF5KE1hdGguYWJzKGEudmFsdWUpLCBzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpLCB0aGlzLnNpZ24gIT09IGEuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHRoaXMudmFsdWUsIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KS5fbXVsdGlwbHlCeVNtYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKiBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudGltZXMgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNxdWFyZShhKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmFzc2VydCgyICogQkFTRSAqIEJBU0UgPCBNQVhfSU5UKTtcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCArIGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcHJvZHVjdCwgY2FycnksIGksIGFfaSwgYV9qO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgY2FycnkgPSAwIC0gYV9pICogYV9pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaTsgaiA8IGw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYV9qID0gYVtqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSAyICogKGFfaSAqIGFfaikgKyByW2kgKyBqXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHByb2R1Y3QgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGpdID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByW2kgKyBsXSA9IGNhcnJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHRoaXMudmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUgKiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHNxdWFyZShzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpKSwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAqIHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDEoYSwgYikgeyAvLyBMZWZ0IG92ZXIgZnJvbSBwcmV2aW91cyB2ZXJzaW9uLiBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QyIG9uIHNtYWxsZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNyZWF0ZUFycmF5KGIubGVuZ3RoKSxcclxuICAgICAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gYltiX2wgLSAxXSxcclxuICAgICAgICAgICAgLy8gbm9ybWFsaXphdGlvblxyXG4gICAgICAgICAgICBsYW1iZGEgPSBNYXRoLmNlaWwoYmFzZSAvICgyICogZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSksXHJcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IG11bHRpcGx5U21hbGwoYSwgbGFtYmRhKSxcclxuICAgICAgICAgICAgZGl2aXNvciA9IG11bHRpcGx5U21hbGwoYiwgbGFtYmRhKSxcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCwgc2hpZnQsIGNhcnJ5LCBib3Jyb3csIGksIGwsIHE7XHJcbiAgICAgICAgaWYgKHJlbWFpbmRlci5sZW5ndGggPD0gYV9sKSByZW1haW5kZXIucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yLnB1c2goMCk7XHJcbiAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gZGl2aXNvcltiX2wgLSAxXTtcclxuICAgICAgICBmb3IgKHNoaWZ0ID0gYV9sIC0gYl9sOyBzaGlmdCA+PSAwOyBzaGlmdC0tKSB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgPSBiYXNlIC0gMTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gIT09IGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IE1hdGguZmxvb3IoKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gKiBiYXNlICsgcmVtYWluZGVyW3NoaWZ0ICsgYl9sIC0gMV0pIC8gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBxdW90aWVudERpZ2l0IDw9IGJhc2UgLSAxXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgbCA9IGRpdmlzb3IubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSArPSBxdW90aWVudERpZ2l0ICogZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgIHEgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSAoY2FycnkgLSBxICogYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IHE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9ycm93IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gYm9ycm93ICsgYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAoYm9ycm93ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0IC09IDE7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FycnkgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSBiYXNlICsgZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gY2FycnkgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSBjYXJyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHRbc2hpZnRdID0gcXVvdGllbnREaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGVub3JtYWxpemF0aW9uXHJcbiAgICAgICAgcmVtYWluZGVyID0gZGl2TW9kU21hbGwocmVtYWluZGVyLCBsYW1iZGEpWzBdO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChyZW1haW5kZXIpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2QyKGEsIGIpIHsgLy8gSW1wbGVtZW50YXRpb24gaWRlYSBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBTaWxlbnQgTWF0dCdzIGxpYnJhcnkgaHR0cDovL3NpbGVudG1hdHQuY29tL2JpZ2ludGVnZXIvXHJcbiAgICAgICAgLy8gUGVyZm9ybXMgZmFzdGVyIHRoYW4gZGl2TW9kMSBvbiBsYXJnZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVzdWx0ID0gW10sXHJcbiAgICAgICAgICAgIHBhcnQgPSBbXSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGd1ZXNzLCB4bGVuLCBoaWdoeCwgaGlnaHksIGNoZWNrO1xyXG4gICAgICAgIHdoaWxlIChhX2wpIHtcclxuICAgICAgICAgICAgcGFydC51bnNoaWZ0KGFbLS1hX2xdKTtcclxuICAgICAgICAgICAgdHJpbShwYXJ0KTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMocGFydCwgYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhsZW4gPSBwYXJ0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaGlnaHggPSBwYXJ0W3hsZW4gLSAxXSAqIGJhc2UgKyBwYXJ0W3hsZW4gLSAyXTtcclxuICAgICAgICAgICAgaGlnaHkgPSBiW2JfbCAtIDFdICogYmFzZSArIGJbYl9sIC0gMl07XHJcbiAgICAgICAgICAgIGlmICh4bGVuID4gYl9sKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoeCA9IChoaWdoeCArIDEpICogYmFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBndWVzcyA9IE1hdGguY2VpbChoaWdoeCAvIGhpZ2h5KTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBtdWx0aXBseVNtYWxsKGIsIGd1ZXNzKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlQWJzKGNoZWNrLCBwYXJ0KSA8PSAwKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGd1ZXNzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGd1ZXNzKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZ3Vlc3MpO1xyXG4gICAgICAgICAgICBwYXJ0ID0gc3VidHJhY3QocGFydCwgY2hlY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChwYXJ0KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kU21hbGwodmFsdWUsIGxhbWJkYSkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gY3JlYXRlQXJyYXkobGVuZ3RoKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIHEsIHJlbWFpbmRlciwgZGl2aXNvcjtcclxuICAgICAgICByZW1haW5kZXIgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGRpdmlzb3IgPSByZW1haW5kZXIgKiBiYXNlICsgdmFsdWVbaV07XHJcbiAgICAgICAgICAgIHEgPSB0cnVuY2F0ZShkaXZpc29yIC8gbGFtYmRhKTtcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gZGl2aXNvciAtIHEgKiBsYW1iZGE7XHJcbiAgICAgICAgICAgIHF1b3RpZW50W2ldID0gcSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIHJlbWFpbmRlciB8IDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZEFueShzZWxmLCB2KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlLCBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAoc3VwcG9ydHNOYXRpdmVCaWdJbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgTmF0aXZlQmlnSW50KHNlbGYudmFsdWUgLyBuLnZhbHVlKSwgbmV3IE5hdGl2ZUJpZ0ludChzZWxmLnZhbHVlICUgbi52YWx1ZSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHNlbGYudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBxdW90aWVudDtcclxuICAgICAgICBpZiAoYiA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGRpdmlkZSBieSB6ZXJvXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHRydW5jYXRlKGEgLyBiKSksIG5ldyBTbWFsbEludGVnZXIoYSAlIGIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gW3NlbGYsIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICBpZiAoYiA9PSAtMSkgcmV0dXJuIFtzZWxmLm5lZ2F0ZSgpLCBJbnRlZ2VyWzBdXTtcclxuICAgICAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICBpZiAoYWJzIDwgQkFTRSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2RTbWFsbChhLCBhYnMpO1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnQgPSBhcnJheVRvU21hbGwodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IHZhbHVlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2lnbikgcmVtYWluZGVyID0gLXJlbWFpbmRlcjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcXVvdGllbnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduICE9PSBuLnNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBzZWxmLnNpZ24gIT09IG4uc2lnbiksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShhYnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBYnMoYSwgYik7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IC0xKSByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uID09PSAwKSByZXR1cm4gW0ludGVnZXJbc2VsZi5zaWduID09PSBuLnNpZ24gPyAxIDogLTFdLCBJbnRlZ2VyWzBdXTtcclxuXHJcbiAgICAgICAgLy8gZGl2TW9kMSBpcyBmYXN0ZXIgb24gc21hbGxlciBpbnB1dCBzaXplc1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCArIGIubGVuZ3RoIDw9IDIwMClcclxuICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2QxKGEsIGIpO1xyXG4gICAgICAgIGVsc2UgdmFsdWUgPSBkaXZNb2QyKGEsIGIpO1xyXG5cclxuICAgICAgICBxdW90aWVudCA9IHZhbHVlWzBdO1xyXG4gICAgICAgIHZhciBxU2lnbiA9IHNlbGYuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBtb2QgPSB2YWx1ZVsxXSxcclxuICAgICAgICAgICAgbVNpZ24gPSBzZWxmLnNpZ247XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAocVNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICBxdW90aWVudCA9IG5ldyBTbWFsbEludGVnZXIocXVvdGllbnQpO1xyXG4gICAgICAgIH0gZWxzZSBxdW90aWVudCA9IG5ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBxU2lnbik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb2QgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKG1TaWduKSBtb2QgPSAtbW9kO1xyXG4gICAgICAgICAgICBtb2QgPSBuZXcgU21hbGxJbnRlZ2VyKG1vZCk7XHJcbiAgICAgICAgfSBlbHNlIG1vZCA9IG5ldyBCaWdJbnRlZ2VyKG1vZCwgbVNpZ24pO1xyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIG1vZF07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGl2TW9kQW55KHRoaXMsIHYpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50OiByZXN1bHRbMF0sXHJcbiAgICAgICAgICAgIHJlbWFpbmRlcjogcmVzdWx0WzFdXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmRpdm1vZCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kO1xyXG5cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMF07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5vdmVyID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLyBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm92ZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm92ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gZGl2TW9kQW55KHRoaXMsIHYpWzFdO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubW9kID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5yZW1haW5kZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgJSBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kID0gQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlLCB4LCB5O1xyXG4gICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEgPT09IDEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAtMSkgcmV0dXJuIG4uaXNFdmVuKCkgPyBJbnRlZ2VyWzFdIDogSW50ZWdlclstMV07XHJcbiAgICAgICAgaWYgKG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFuLmlzU21hbGwpIHRocm93IG5ldyBFcnJvcihcIlRoZSBleHBvbmVudCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGlzIHRvbyBsYXJnZS5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmVjaXNlKHZhbHVlID0gTWF0aC5wb3coYSwgYikpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeCA9IHRoaXM7XHJcbiAgICAgICAgeSA9IEludGVnZXJbMV07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGIgJiAxID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB5ID0geS50aW1lcyh4KTtcclxuICAgICAgICAgICAgICAgIC0tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gMjtcclxuICAgICAgICAgICAgeCA9IHguc3F1YXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUucG93O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICB2YXIgXzAgPSBCaWdJbnQoMCksIF8xID0gQmlnSW50KDEpLCBfMiA9IEJpZ0ludCgyKTtcclxuICAgICAgICBpZiAoYiA9PT0gXzApIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSBfMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEgPT09IF8xKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gQmlnSW50KC0xKSkgcmV0dXJuIG4uaXNFdmVuKCkgPyBJbnRlZ2VyWzFdIDogSW50ZWdlclstMV07XHJcbiAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKSByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChfMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzO1xyXG4gICAgICAgIHZhciB5ID0gSW50ZWdlclsxXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoKGIgJiBfMSkgPT09IF8xKSB7XHJcbiAgICAgICAgICAgICAgICB5ID0geS50aW1lcyh4KTtcclxuICAgICAgICAgICAgICAgIC0tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PT0gXzApIGJyZWFrO1xyXG4gICAgICAgICAgICBiIC89IF8yO1xyXG4gICAgICAgICAgICB4ID0geC5zcXVhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gZnVuY3Rpb24gKGV4cCwgbW9kKSB7XHJcbiAgICAgICAgZXhwID0gcGFyc2VWYWx1ZShleHApO1xyXG4gICAgICAgIG1vZCA9IHBhcnNlVmFsdWUobW9kKTtcclxuICAgICAgICBpZiAobW9kLmlzWmVybygpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdGFrZSBtb2RQb3cgd2l0aCBtb2R1bHVzIDBcIik7XHJcbiAgICAgICAgdmFyIHIgPSBJbnRlZ2VyWzFdLFxyXG4gICAgICAgICAgICBiYXNlID0gdGhpcy5tb2QobW9kKTtcclxuICAgICAgICBpZiAoZXhwLmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICBleHAgPSBleHAubXVsdGlwbHkoSW50ZWdlclstMV0pO1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5tb2RJbnYobW9kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGV4cC5pc1Bvc2l0aXZlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UuaXNaZXJvKCkpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgICAgICBpZiAoZXhwLmlzT2RkKCkpIHIgPSByLm11bHRpcGx5KGJhc2UpLm1vZChtb2QpO1xyXG4gICAgICAgICAgICBleHAgPSBleHAuZGl2aWRlKDIpO1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5zcXVhcmUoKS5tb2QobW9kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2RQb3cgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdztcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wYXJlQWJzKGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmxlbmd0aCA+IGIubGVuZ3RoID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGFbaV0gPiBiW2ldID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlQWJzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gY29tcGFyZUFicyhhLCBiKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IE1hdGguYWJzKHRoaXMudmFsdWUpLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGIgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlVmFsdWUodikudmFsdWU7XHJcbiAgICAgICAgYSA9IGEgPj0gMCA/IGEgOiAtYTtcclxuICAgICAgICBiID0gYiA+PSAwID8gYiA6IC1iO1xyXG4gICAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIC8vIFNlZSBkaXNjdXNzaW9uIGFib3V0IGNvbXBhcmlzb24gd2l0aCBJbmZpbml0eTpcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0ZXJvbHNvbi9CaWdJbnRlZ2VyLmpzL2lzc3Vlcy82MVxyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG4uc2lnbiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcGFyZUFicyhhLCBiKSAqICh0aGlzLnNpZ24gPyAtMSA6IDEpO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA8IDAgPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhIDwgMCA/IDEgOiAtMTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlVmFsdWUodikudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmVUbyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5lcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpICE9PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ub3RFcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubmVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPiAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3QgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdyZWF0ZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmd0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA8IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sdCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVzc2VyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gQmlnSW50ZWdlci5wcm90b3R5cGUubHQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpID49IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5nZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ2VxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPD0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmxlcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgQmlnSW50KDEpKSA9PT0gQmlnSW50KDApO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVswXSAmIDEpID09PSAxO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiBCaWdJbnQoMSkpID09PSBCaWdJbnQoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPiAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpZ247XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIDwgMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy52YWx1ZSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzKCkudmFsdWUgPT09IEJpZ0ludCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBCaWdJbnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmNvbXBhcmVBYnMoMikgPT09IDApIHJldHVybiB0aGlzLmlzRXZlbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZChuKS5pc1plcm8oKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQmFzaWNQcmltZSh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSB2LmFicygpO1xyXG4gICAgICAgIGlmIChuLmlzVW5pdCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uZXF1YWxzKDIpIHx8IG4uZXF1YWxzKDMpIHx8IG4uZXF1YWxzKDUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAobi5pc0V2ZW4oKSB8fCBuLmlzRGl2aXNpYmxlQnkoMykgfHwgbi5pc0RpdmlzaWJsZUJ5KDUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4ubGVzc2VyKDQ5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3Qga25vdyBpZiBpdCdzIHByaW1lOiBsZXQgdGhlIG90aGVyIGZ1bmN0aW9ucyBmaWd1cmUgaXQgb3V0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWlsbGVyUmFiaW5UZXN0KG4sIGEpIHtcclxuICAgICAgICB2YXIgblByZXYgPSBuLnByZXYoKSxcclxuICAgICAgICAgICAgYiA9IG5QcmV2LFxyXG4gICAgICAgICAgICByID0gMCxcclxuICAgICAgICAgICAgZCwgdCwgaSwgeDtcclxuICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkgYiA9IGIuZGl2aWRlKDIpLCByKys7XHJcbiAgICAgICAgbmV4dDogZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG4ubGVzc2VyKGFbaV0pKSBjb250aW51ZTtcclxuICAgICAgICAgICAgeCA9IGJpZ0ludChhW2ldKS5tb2RQb3coYiwgbik7XHJcbiAgICAgICAgICAgIGlmICh4LmlzVW5pdCgpIHx8IHguZXF1YWxzKG5QcmV2KSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAoZCA9IHIgLSAxOyBkICE9IDA7IGQtLSkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHguc3F1YXJlKCkubW9kKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh4LmVxdWFscyhuUHJldikpIGNvbnRpbnVlIG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgXCJzdHJpY3RcIiB0byB0cnVlIHRvIGZvcmNlIEdSSC1zdXBwb3J0ZWQgbG93ZXIgYm91bmQgb2YgMipsb2coTileMlxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IGZ1bmN0aW9uIChzdHJpY3QpIHtcclxuICAgICAgICB2YXIgaXNQcmltZSA9IGlzQmFzaWNQcmltZSh0aGlzKTtcclxuICAgICAgICBpZiAoaXNQcmltZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaXNQcmltZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuYWJzKCk7XHJcbiAgICAgICAgdmFyIGJpdHMgPSBuLmJpdExlbmd0aCgpO1xyXG4gICAgICAgIGlmIChiaXRzIDw9IDY0KVxyXG4gICAgICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIFsyLCAzLCA1LCA3LCAxMSwgMTMsIDE3LCAxOSwgMjMsIDI5LCAzMSwgMzddKTtcclxuICAgICAgICB2YXIgbG9nTiA9IE1hdGgubG9nKDIpICogYml0cy50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLmNlaWwoKHN0cmljdCA9PT0gdHJ1ZSkgPyAoMiAqIE1hdGgucG93KGxvZ04sIDIpKSA6IGxvZ04pO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgaSA9IDA7IGkgPCB0OyBpKyspIHtcclxuICAgICAgICAgICAgYS5wdXNoKGJpZ0ludChpICsgMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIGEpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQcmltZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gZnVuY3Rpb24gKGl0ZXJhdGlvbnMsIHJuZykge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKTtcclxuICAgICAgICB2YXIgdCA9IGl0ZXJhdGlvbnMgPT09IHVuZGVmaW5lZCA/IDUgOiBpdGVyYXRpb25zO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgaSA9IDA7IGkgPCB0OyBpKyspIHtcclxuICAgICAgICAgICAgYS5wdXNoKGJpZ0ludC5yYW5kQmV0d2VlbigyLCBuLm1pbnVzKDIpLCBybmcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbGxlclJhYmluVGVzdChuLCBhKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludiA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIHQgPSBiaWdJbnQuemVybywgbmV3VCA9IGJpZ0ludC5vbmUsIHIgPSBwYXJzZVZhbHVlKG4pLCBuZXdSID0gdGhpcy5hYnMoKSwgcSwgbGFzdFQsIGxhc3RSO1xyXG4gICAgICAgIHdoaWxlICghbmV3Ui5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICBxID0gci5kaXZpZGUobmV3Uik7XHJcbiAgICAgICAgICAgIGxhc3RUID0gdDtcclxuICAgICAgICAgICAgbGFzdFIgPSByO1xyXG4gICAgICAgICAgICB0ID0gbmV3VDtcclxuICAgICAgICAgICAgciA9IG5ld1I7XHJcbiAgICAgICAgICAgIG5ld1QgPSBsYXN0VC5zdWJ0cmFjdChxLm11bHRpcGx5KG5ld1QpKTtcclxuICAgICAgICAgICAgbmV3UiA9IGxhc3RSLnN1YnRyYWN0KHEubXVsdGlwbHkobmV3UikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXIuaXNVbml0KCkpIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkgKyBcIiBhbmQgXCIgKyBuLnRvU3RyaW5nKCkgKyBcIiBhcmUgbm90IGNvLXByaW1lXCIpO1xyXG4gICAgICAgIGlmICh0LmNvbXBhcmUoMCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHQgPSB0LmFkZChuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0Lm5lZ2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2RJbnYgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZEludiA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbCh2YWx1ZSwgMSwgdGhpcy5zaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgKyAxIDwgTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgKyAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSArIEJpZ0ludCgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAtIDEgPiAtTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgLSAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC0gQmlnSW50KDEpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcG93ZXJzT2ZUd28gPSBbMV07XHJcbiAgICB3aGlsZSAoMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdIDw9IEJBU0UpIHBvd2Vyc09mVHdvLnB1c2goMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdKTtcclxuICAgIHZhciBwb3dlcnMyTGVuZ3RoID0gcG93ZXJzT2ZUd28ubGVuZ3RoLCBoaWdoZXN0UG93ZXIyID0gcG93ZXJzT2ZUd29bcG93ZXJzMkxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0X2lzU21hbGwobikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhuKSA8PSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICBpZiAoIXNoaWZ0X2lzU21hbGwobikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFN0cmluZyhuKSArIFwiIGlzIHRvbyBsYXJnZSBmb3Igc2hpZnRpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiA8IDApIHJldHVybiB0aGlzLnNoaWZ0UmlnaHQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNaZXJvKCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgd2hpbGUgKG4gPj0gcG93ZXJzMkxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQubXVsdGlwbHkoaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQubXVsdGlwbHkocG93ZXJzT2ZUd29bbl0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQ7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHJlbVF1bztcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodikudG9KU051bWJlcigpO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRMZWZ0KC1uKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcztcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNaZXJvKCkgfHwgKHJlc3VsdC5pc05lZ2F0aXZlKCkgJiYgcmVzdWx0LmlzVW5pdCgpKSkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgcmVtUXVvID0gZGl2TW9kQW55KHJlc3VsdCwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlbVF1b1sxXS5pc05lZ2F0aXZlKCkgPyByZW1RdW9bMF0ucHJldigpIDogcmVtUXVvWzBdO1xyXG4gICAgICAgICAgICBuIC09IHBvd2VyczJMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBwb3dlcnNPZlR3b1tuXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbVF1b1sxXS5pc05lZ2F0aXZlKCkgPyByZW1RdW9bMF0ucHJldigpIDogcmVtUXVvWzBdO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc2hpZnRSaWdodCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYml0d2lzZSh4LCB5LCBmbikge1xyXG4gICAgICAgIHkgPSBwYXJzZVZhbHVlKHkpO1xyXG4gICAgICAgIHZhciB4U2lnbiA9IHguaXNOZWdhdGl2ZSgpLCB5U2lnbiA9IHkuaXNOZWdhdGl2ZSgpO1xyXG4gICAgICAgIHZhciB4UmVtID0geFNpZ24gPyB4Lm5vdCgpIDogeCxcclxuICAgICAgICAgICAgeVJlbSA9IHlTaWduID8geS5ub3QoKSA6IHk7XHJcbiAgICAgICAgdmFyIHhEaWdpdCA9IDAsIHlEaWdpdCA9IDA7XHJcbiAgICAgICAgdmFyIHhEaXZNb2QgPSBudWxsLCB5RGl2TW9kID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF4UmVtLmlzWmVybygpIHx8ICF5UmVtLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIHhEaXZNb2QgPSBkaXZNb2RBbnkoeFJlbSwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHhEaWdpdCA9IHhEaXZNb2RbMV0udG9KU051bWJlcigpO1xyXG4gICAgICAgICAgICBpZiAoeFNpZ24pIHtcclxuICAgICAgICAgICAgICAgIHhEaWdpdCA9IGhpZ2hlc3RQb3dlcjIgLSAxIC0geERpZ2l0OyAvLyB0d28ncyBjb21wbGVtZW50IGZvciBuZWdhdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHlEaXZNb2QgPSBkaXZNb2RBbnkoeVJlbSwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHlEaWdpdCA9IHlEaXZNb2RbMV0udG9KU051bWJlcigpO1xyXG4gICAgICAgICAgICBpZiAoeVNpZ24pIHtcclxuICAgICAgICAgICAgICAgIHlEaWdpdCA9IGhpZ2hlc3RQb3dlcjIgLSAxIC0geURpZ2l0OyAvLyB0d28ncyBjb21wbGVtZW50IGZvciBuZWdhdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhSZW0gPSB4RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICB5UmVtID0geURpdk1vZFswXTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZm4oeERpZ2l0LCB5RGlnaXQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN1bSA9IGZuKHhTaWduID8gMSA6IDAsIHlTaWduID8gMSA6IDApICE9PSAwID8gYmlnSW50KC0xKSA6IGJpZ0ludCgwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IHN1bS5tdWx0aXBseShoaWdoZXN0UG93ZXIyKS5hZGQoYmlnSW50KHJlc3VsdFtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZWdhdGUoKS5wcmV2KCk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ub3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm5vdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICYgYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hbmQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFuZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgfCBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm9yID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5vciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm9yO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgXiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnhvciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUueG9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUueG9yO1xyXG5cclxuICAgIHZhciBMT0JNQVNLX0kgPSAxIDw8IDMwLCBMT0JNQVNLX0JJID0gKEJBU0UgJiAtQkFTRSkgKiAoQkFTRSAmIC1CQVNFKSB8IExPQk1BU0tfSTtcclxuICAgIGZ1bmN0aW9uIHJvdWdoTE9CKG4pIHsgLy8gZ2V0IGxvd2VzdE9uZUJpdCAocm91Z2gpXHJcbiAgICAgICAgLy8gU21hbGxJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAzMClcclxuICAgICAgICAvLyBCaWdJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAxNCkgW0JBU0U9MWU3XVxyXG4gICAgICAgIHZhciB2ID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgeCA9IHR5cGVvZiB2ID09PSBcIm51bWJlclwiID8gdiB8IExPQk1BU0tfSSA6XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJiaWdpbnRcIiA/IHYgfCBCaWdJbnQoTE9CTUFTS19JKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdlswXSArIHZbMV0gKiBCQVNFIHwgTE9CTUFTS19CSTtcclxuICAgICAgICByZXR1cm4geCAmIC14O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGludGVnZXJMb2dhcml0aG0odmFsdWUsIGJhc2UpIHtcclxuICAgICAgICBpZiAoYmFzZS5jb21wYXJlVG8odmFsdWUpIDw9IDApIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IGludGVnZXJMb2dhcml0aG0odmFsdWUsIGJhc2Uuc3F1YXJlKGJhc2UpKTtcclxuICAgICAgICAgICAgdmFyIHAgPSB0bXAucDtcclxuICAgICAgICAgICAgdmFyIGUgPSB0bXAuZTtcclxuICAgICAgICAgICAgdmFyIHQgPSBwLm11bHRpcGx5KGJhc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdC5jb21wYXJlVG8odmFsdWUpIDw9IDAgPyB7IHA6IHQsIGU6IGUgKiAyICsgMSB9IDogeyBwOiBwLCBlOiBlICogMiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBiaWdJbnQoMSksIGU6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpIDwgMCkge1xyXG4gICAgICAgICAgICBuID0gbi5uZWdhdGUoKS5zdWJ0cmFjdChiaWdJbnQoMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5jb21wYXJlVG8oYmlnSW50KDApKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmlnSW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnSW50KGludGVnZXJMb2dhcml0aG0obiwgYmlnSW50KDIpKS5lKS5hZGQoYmlnSW50KDEpKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYml0TGVuZ3RoID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gbWF4KGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICByZXR1cm4gYS5ncmVhdGVyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtaW4oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmxlc3NlcihiKSA/IGEgOiBiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2NkKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICBpZiAoYS5lcXVhbHMoYikpIHJldHVybiBhO1xyXG4gICAgICAgIGlmIChhLmlzWmVybygpKSByZXR1cm4gYjtcclxuICAgICAgICBpZiAoYi5pc1plcm8oKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgdmFyIGMgPSBJbnRlZ2VyWzFdLCBkLCB0O1xyXG4gICAgICAgIHdoaWxlIChhLmlzRXZlbigpICYmIGIuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgZCA9IG1pbihyb3VnaExPQihhKSwgcm91Z2hMT0IoYikpO1xyXG4gICAgICAgICAgICBhID0gYS5kaXZpZGUoZCk7XHJcbiAgICAgICAgICAgIGIgPSBiLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYyA9IGMubXVsdGlwbHkoZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhLmlzRXZlbigpKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShyb3VnaExPQihhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgICAgIGIgPSBiLmRpdmlkZShyb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEuZ3JlYXRlcihiKSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IGI7IGIgPSBhOyBhID0gdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gYi5zdWJ0cmFjdChhKTtcclxuICAgICAgICB9IHdoaWxlICghYi5pc1plcm8oKSk7XHJcbiAgICAgICAgcmV0dXJuIGMuaXNVbml0KCkgPyBhIDogYS5tdWx0aXBseShjKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxjbShhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSkuYWJzKCk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYikuYWJzKCk7XHJcbiAgICAgICAgcmV0dXJuIGEuZGl2aWRlKGdjZChhLCBiKSkubXVsdGlwbHkoYik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByYW5kQmV0d2VlbihhLCBiLCBybmcpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICB2YXIgdXNlZFJORyA9IHJuZyB8fCBNYXRoLnJhbmRvbTtcclxuICAgICAgICB2YXIgbG93ID0gbWluKGEsIGIpLCBoaWdoID0gbWF4KGEsIGIpO1xyXG4gICAgICAgIHZhciByYW5nZSA9IGhpZ2guc3VidHJhY3QobG93KS5hZGQoMSk7XHJcbiAgICAgICAgaWYgKHJhbmdlLmlzU21hbGwpIHJldHVybiBsb3cuYWRkKE1hdGguZmxvb3IodXNlZFJORygpICogcmFuZ2UpKTtcclxuICAgICAgICB2YXIgZGlnaXRzID0gdG9CYXNlKHJhbmdlLCBCQVNFKS52YWx1ZTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHJlc3RyaWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlnaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSByZXN0cmljdGVkID8gZGlnaXRzW2ldIDogQkFTRTtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gdHJ1bmNhdGUodXNlZFJORygpICogdG9wKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGlnaXQpO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXQgPCB0b3ApIHJlc3RyaWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvdy5hZGQoSW50ZWdlci5mcm9tQXJyYXkocmVzdWx0LCBCQVNFLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXJzZUJhc2UgPSBmdW5jdGlvbiAodGV4dCwgYmFzZSwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0IHx8IERFRkFVTFRfQUxQSEFCRVQ7XHJcbiAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0KTtcclxuICAgICAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGFic0Jhc2UgPSBNYXRoLmFicyhiYXNlKTtcclxuICAgICAgICB2YXIgYWxwaGFiZXRWYWx1ZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxwaGFiZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxwaGFiZXRWYWx1ZXNbYWxwaGFiZXRbaV1dID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGMgPT09IFwiLVwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGMgaW4gYWxwaGFiZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbHBoYWJldFZhbHVlc1tjXSA+PSBhYnNCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09IFwiMVwiICYmIGFic0Jhc2UgPT09IDEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgZGlnaXQgaW4gYmFzZSBcIiArIGJhc2UgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZSA9IHBhcnNlVmFsdWUoYmFzZSk7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFtdO1xyXG4gICAgICAgIHZhciBpc05lZ2F0aXZlID0gdGV4dFswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgZm9yIChpID0gaXNOZWdhdGl2ZSA/IDEgOiAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRleHRbaV07XHJcbiAgICAgICAgICAgIGlmIChjIGluIGFscGhhYmV0VmFsdWVzKSBkaWdpdHMucHVzaChwYXJzZVZhbHVlKGFscGhhYmV0VmFsdWVzW2NdKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICAgICAgZG8geyBpKys7IH0gd2hpbGUgKHRleHRbaV0gIT09IFwiPlwiICYmIGkgPCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBkaWdpdHMucHVzaChwYXJzZVZhbHVlKHRleHQuc2xpY2Uoc3RhcnQgKyAxLCBpKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBjaGFyYWN0ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSBJbnRlZ2VyWzBdLCBwb3cgPSBJbnRlZ2VyWzFdLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IGRpZ2l0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwuYWRkKGRpZ2l0c1tpXS50aW1lcyhwb3cpKTtcclxuICAgICAgICAgICAgcG93ID0gcG93LnRpbWVzKGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNOZWdhdGl2ZSA/IHZhbC5uZWdhdGUoKSA6IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdpZnkoZGlnaXQsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldCB8fCBERUZBVUxUX0FMUEhBQkVUO1xyXG4gICAgICAgIGlmIChkaWdpdCA8IGFscGhhYmV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxwaGFiZXRbZGlnaXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8XCIgKyBkaWdpdCArIFwiPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZShuLCBiYXNlKSB7XHJcbiAgICAgICAgYmFzZSA9IGJpZ0ludChiYXNlKTtcclxuICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbm9uemVybyBudW1iZXJzIHRvIGJhc2UgMC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlLmVxdWFscygtMSkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtdLmNvbmNhdC5hcHBseShbXSwgQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoLW4udG9KU051bWJlcigpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzEsIDBdKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJyID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobi50b0pTTnVtYmVyKCkgLSAxKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoQXJyYXkucHJvdG90eXBlLnZhbHVlT2YsIFswLCAxXSk7XHJcbiAgICAgICAgICAgIGFyci51bnNoaWZ0KFsxXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBhcnIpLFxyXG4gICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZWcgPSBmYWxzZTtcclxuICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkgJiYgYmFzZS5pc1Bvc2l0aXZlKCkpIHtcclxuICAgICAgICAgICAgbmVnID0gdHJ1ZTtcclxuICAgICAgICAgICAgbiA9IG4uYWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlLmlzVW5pdCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBBcnJheS5hcHBseShudWxsLCBBcnJheShuLnRvSlNOdW1iZXIoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsIDEpLFxyXG4gICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogbmVnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICB2YXIgbGVmdCA9IG4sIGRpdm1vZDtcclxuICAgICAgICB3aGlsZSAobGVmdC5pc05lZ2F0aXZlKCkgfHwgbGVmdC5jb21wYXJlQWJzKGJhc2UpID49IDApIHtcclxuICAgICAgICAgICAgZGl2bW9kID0gbGVmdC5kaXZtb2QoYmFzZSk7XHJcbiAgICAgICAgICAgIGxlZnQgPSBkaXZtb2QucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHZhciBkaWdpdCA9IGRpdm1vZC5yZW1haW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdC5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2l0ID0gYmFzZS5taW51cyhkaWdpdCkuYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdC5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0LnB1c2goZGlnaXQudG9KU051bWJlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0LnB1c2gobGVmdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBvdXQucmV2ZXJzZSgpLCBpc05lZ2F0aXZlOiBuZWcgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Jhc2VTdHJpbmcobiwgYmFzZSwgYWxwaGFiZXQpIHtcclxuICAgICAgICB2YXIgYXJyID0gdG9CYXNlKG4sIGJhc2UpO1xyXG4gICAgICAgIHJldHVybiAoYXJyLmlzTmVnYXRpdmUgPyBcIi1cIiA6IFwiXCIpICsgYXJyLnZhbHVlLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5KHgsIGFscGhhYmV0KTtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocmFkaXgsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgaWYgKHJhZGl4ID09PSB1bmRlZmluZWQpIHJhZGl4ID0gMTA7XHJcbiAgICAgICAgaWYgKHJhZGl4ICE9PSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52YWx1ZSwgbCA9IHYubGVuZ3RoLCBzdHIgPSBTdHJpbmcodlstLWxdKSwgemVyb3MgPSBcIjAwMDAwMDBcIiwgZGlnaXQ7XHJcbiAgICAgICAgd2hpbGUgKC0tbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0ID0gU3RyaW5nKHZbbF0pO1xyXG4gICAgICAgICAgICBzdHIgKz0gemVyb3Muc2xpY2UoZGlnaXQubGVuZ3RoKSArIGRpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2lnbiA9IHRoaXMuc2lnbiA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gc2lnbiArIHN0cjtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT0gMTApIHJldHVybiB0b0Jhc2VTdHJpbmcodGhpcywgcmFkaXgsIGFscGhhYmV0KTtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvU3RyaW5nID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZztcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvSlNPTiA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnRvSlNPTiA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy50b1N0cmluZygpOyB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpLCAxMCk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU051bWJlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnZhbHVlT2Y7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9KU051bWJlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudmFsdWVPZiA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9KU051bWJlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTdHJpbmdWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSgrdikpIHtcclxuICAgICAgICAgICAgdmFyIHggPSArdjtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRydW5jYXRlKHgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzTmF0aXZlQmlnSW50ID8gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQoeCkpIDogbmV3IFNtYWxsSW50ZWdlcih4KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2lnbiA9IHZbMF0gPT09IFwiLVwiO1xyXG4gICAgICAgIGlmIChzaWduKSB2ID0gdi5zbGljZSgxKTtcclxuICAgICAgICB2YXIgc3BsaXQgPSB2LnNwbGl0KC9lL2kpO1xyXG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPiAyKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgc3BsaXQuam9pbihcImVcIikpO1xyXG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIGV4cCA9IHNwbGl0WzFdO1xyXG4gICAgICAgICAgICBpZiAoZXhwWzBdID09PSBcIitcIikgZXhwID0gZXhwLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICBleHAgPSArZXhwO1xyXG4gICAgICAgICAgICBpZiAoZXhwICE9PSB0cnVuY2F0ZShleHApIHx8ICFpc1ByZWNpc2UoZXhwKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIGV4cCArIFwiIGlzIG5vdCBhIHZhbGlkIGV4cG9uZW50LlwiKTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBzcGxpdFswXTtcclxuICAgICAgICAgICAgdmFyIGRlY2ltYWxQbGFjZSA9IHRleHQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgICAgIGlmIChkZWNpbWFsUGxhY2UgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXhwIC09IHRleHQubGVuZ3RoIC0gZGVjaW1hbFBsYWNlIC0gMTtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKDAsIGRlY2ltYWxQbGFjZSkgKyB0ZXh0LnNsaWNlKGRlY2ltYWxQbGFjZSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChleHAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5jbHVkZSBuZWdhdGl2ZSBleHBvbmVudCBwYXJ0IGZvciBpbnRlZ2Vyc1wiKTtcclxuICAgICAgICAgICAgdGV4dCArPSAobmV3IEFycmF5KGV4cCArIDEpKS5qb2luKFwiMFwiKTtcclxuICAgICAgICAgICAgdiA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gL14oWzAtOV1bMC05XSopJC8udGVzdCh2KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyB2KTtcclxuICAgICAgICBpZiAoc3VwcG9ydHNOYXRpdmVCaWdJbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoQmlnSW50KHNpZ24gPyBcIi1cIiArIHYgOiB2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByID0gW10sIG1heCA9IHYubGVuZ3RoLCBsID0gTE9HX0JBU0UsIG1pbiA9IG1heCAtIGw7XHJcbiAgICAgICAgd2hpbGUgKG1heCA+IDApIHtcclxuICAgICAgICAgICAgci5wdXNoKCt2LnNsaWNlKG1pbiwgbWF4KSk7XHJcbiAgICAgICAgICAgIG1pbiAtPSBsO1xyXG4gICAgICAgICAgICBpZiAobWluIDwgMCkgbWluID0gMDtcclxuICAgICAgICAgICAgbWF4IC09IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHIsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTnVtYmVyVmFsdWUodikge1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQcmVjaXNlKHYpKSB7XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSB0cnVuY2F0ZSh2KSkgdGhyb3cgbmV3IEVycm9yKHYgKyBcIiBpcyBub3QgYW4gaW50ZWdlci5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdWYWx1ZSh2LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdW1iZXJWYWx1ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwiYmlnaW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG4gICAgLy8gUHJlLWRlZmluZSBudW1iZXJzIGluIHJhbmdlIFstOTk5LDk5OV1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgICAgSW50ZWdlcltpXSA9IHBhcnNlVmFsdWUoaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSBJbnRlZ2VyWy1pXSA9IHBhcnNlVmFsdWUoLWkpO1xyXG4gICAgfVxyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuICAgIEludGVnZXIub25lID0gSW50ZWdlclsxXTtcclxuICAgIEludGVnZXIuemVybyA9IEludGVnZXJbMF07XHJcbiAgICBJbnRlZ2VyLm1pbnVzT25lID0gSW50ZWdlclstMV07XHJcbiAgICBJbnRlZ2VyLm1heCA9IG1heDtcclxuICAgIEludGVnZXIubWluID0gbWluO1xyXG4gICAgSW50ZWdlci5nY2QgPSBnY2Q7XHJcbiAgICBJbnRlZ2VyLmxjbSA9IGxjbTtcclxuICAgIEludGVnZXIuaXNJbnN0YW5jZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4IGluc3RhbmNlb2YgQmlnSW50ZWdlciB8fCB4IGluc3RhbmNlb2YgU21hbGxJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBOYXRpdmVCaWdJbnQ7IH07XHJcbiAgICBJbnRlZ2VyLnJhbmRCZXR3ZWVuID0gcmFuZEJldHdlZW47XHJcblxyXG4gICAgSW50ZWdlci5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMubWFwKHBhcnNlVmFsdWUpLCBwYXJzZVZhbHVlKGJhc2UgfHwgMTApLCBpc05lZ2F0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEludGVnZXI7XHJcbn0pKCk7XHJcblxyXG4vLyBOb2RlLmpzIGNoZWNrXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcImV4cG9ydHNcIikpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gYmlnSW50O1xyXG59XHJcblxyXG4vL2FtZCBjaGVja1xyXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZSggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBiaWdJbnQ7XHJcbiAgICB9KTtcclxufVxyXG4iLCIhZnVuY3Rpb24odCxuKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUoXCJkM1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJkM1wiXSxuKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzW1wiYm94bW9kZWwtZDNcIl09bihyZXF1aXJlKFwiZDNcIikpOnRbXCJib3htb2RlbC1kM1wiXT1uKHQuZDMpfSh3aW5kb3csZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQpe3ZhciBuPXt9O2Z1bmN0aW9uIGUocil7aWYobltyXSlyZXR1cm4gbltyXS5leHBvcnRzO3ZhciBvPW5bcl09e2k6cixsOiExLGV4cG9ydHM6e319O3JldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLGUpLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIGUubT10LGUuYz1uLGUuZD1mdW5jdGlvbih0LG4scil7ZS5vKHQsbil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG4se2VudW1lcmFibGU6ITAsZ2V0OnJ9KX0sZS5yPWZ1bmN0aW9uKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LGUudD1mdW5jdGlvbih0LG4pe2lmKDEmbiYmKHQ9ZSh0KSksOCZuKXJldHVybiB0O2lmKDQmbiYmXCJvYmplY3RcIj09dHlwZW9mIHQmJnQmJnQuX19lc01vZHVsZSlyZXR1cm4gdDt2YXIgcj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKGUucihyKSxPYmplY3QuZGVmaW5lUHJvcGVydHkocixcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTp0fSksMiZuJiZcInN0cmluZ1wiIT10eXBlb2YgdClmb3IodmFyIG8gaW4gdCllLmQocixvLGZ1bmN0aW9uKG4pe3JldHVybiB0W25dfS5iaW5kKG51bGwsbykpO3JldHVybiByfSxlLm49ZnVuY3Rpb24odCl7dmFyIG49dCYmdC5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIHQuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gdH07cmV0dXJuIGUuZChuLFwiYVwiLG4pLG59LGUubz1mdW5jdGlvbih0LG4pe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxuKX0sZS5wPVwiXCIsZShlLnM9MSl9KFtmdW5jdGlvbihuLGUpe24uZXhwb3J0cz10fSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5yKG4pLGUuZChuLFwiZGVmYXVsdFwiLGZ1bmN0aW9uKCl7cmV0dXJuIG99KTt2YXIgcj1lKDApO2Z1bmN0aW9uIG8oKXt2YXIgdCxuLGUsbyxpLHUsZixhLGMsbD1bXTtmdW5jdGlvbiBoKHQpe3JldHVybiB0LmVhY2hBZnRlcihkKSx0LmVhY2hCZWZvcmUocCksdC5lYWNoQmVmb3JlKHkpLHR9ZnVuY3Rpb24gZChvKXt2YXIgaD1jKG8pLndpZHRoLGQ9YyhvKS5oZWlnaHQ7aWYodChvKSl7aWYoaD1kPTAsby5jaGlsZHJlbil7Zm9yKHZhciBwPWZ1bmN0aW9uKHQpe3ZhciByPVtdLG89MCxpPSExLGY9MCxjPSEwO3JldHVybiB0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24obCxoKXtuKGwpJiYhaSYmKGk9ITApLG8rPWwueDEtbC54MCxvKz1jP2UobCk/dShsKS5sZWZ0OjA6TWF0aC5tYXgodShsKS5sZWZ0LHUodC5jaGlsZHJlbltoLTFdKS5yaWdodCk7dmFyIGQ9ZShsKT91KGwpLnJpZ2h0OjA7KG8rZD5hKHQpfHxoPT09dC5jaGlsZHJlbi5sZW5ndGgtMSkmJihvKz1kKSxvPmEodCl8fGg9PT10LmNoaWxkcmVuLmxlbmd0aC0xPyhyLnB1c2goe2Zyb206Zix0bzpoLHdpZHRoOm8sZmxleEhlaWdodDppfSksaDx0LmNoaWxkcmVuLmxlbmd0aC0xJiYoZj1oKzEsbz0wLGk9ITEsYz0hMCkpOmM9ITF9KSxyfShvKSx5PTA7eTxwLmxlbmd0aDt5KyspcFt5XS5oZWlnaHQ9ZyhvLHAseSk7bC5wdXNoKHtib3g6byxsaW5lczpwfSksaCs9ci5tYXgocCxmdW5jdGlvbih0KXtyZXR1cm4gdC53aWR0aH0pLGQrPXIuc3VtKHAsZnVuY3Rpb24odCl7cmV0dXJuIHQuaGVpZ2h0fSl9aCs9aShvKS5sZWZ0K2kobykucmlnaHQsZCs9aShvKS50b3AraShvKS5ib3R0b20saD1NYXRoLm1heChoLGYobykud2lkdGgpLGQ9TWF0aC5tYXgoZCxmKG8pLmhlaWdodCl9by54MD1vLnkwPTAsby54MT1oLG8ueTE9ZH1mdW5jdGlvbiBwKHIpe3ZhciBvPXIueTE7aWYoci5wYXJlbnQmJm4ocikpe289bShyKS5oZWlnaHQ7dmFyIGk9eChyLnBhcmVudCksZj1zKHIsaSk7by09ZShyKXx8MCE9PWY/dShyKS50b3A6MDt2YXIgYT0oby09ZShyKXx8ZiE9PWkubGVuZ3RoLTE/dShyKS5ib3R0b206MCktci55MTtpZih0KHIpJiZyLmNoaWxkcmVuJiZhPjApe3ZhciBjPXgociksbD1hL2MubGVuZ3RoLGg9ITAsZD0hMSxwPXZvaWQgMDt0cnl7Zm9yKHZhciB5LGc9Y1tTeW1ib2wuaXRlcmF0b3JdKCk7IShoPSh5PWcubmV4dCgpKS5kb25lKTtoPSEwKXt5LnZhbHVlLmhlaWdodCs9bH19Y2F0Y2godCl7ZD0hMCxwPXR9ZmluYWxseXt0cnl7aHx8bnVsbD09Zy5yZXR1cm58fGcucmV0dXJuKCl9ZmluYWxseXtpZihkKXRocm93IHB9fX19ci55MT1vfWZ1bmN0aW9uIHkodCl7dmFyIG49dC54MS10LngwLHI9dC55MS10LnkwO2lmKHQucGFyZW50KXt0LnkwPXQucGFyZW50LnkwK2kodC5wYXJlbnQpLnRvcDt2YXIgZj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpO2lmKDA9PT1mfHxmdW5jdGlvbih0KXtpZih0LnBhcmVudCl7dmFyIG49dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KSxlPXgodC5wYXJlbnQpLHI9ZVtzKHQsZSldO3JldHVybiByLmZyb209PT1ufXJldHVybiBudWxsfSh0KSl0LngwKz10LnBhcmVudC54MCtpKHQucGFyZW50KS5sZWZ0LGUodCkmJih0LngwKz11KHQpLmxlZnQpO2Vsc2V7dmFyIGE9dC5wYXJlbnQuY2hpbGRyZW5bZi0xXTt0LngwPWEueDEsdC54MCs9TWF0aC5tYXgodShhKS5yaWdodCx1KHQpLmxlZnQpfX1lbHNlIHN3aXRjaChvKXtjYXNlXCJ0b3BcIjp0LnkwPTA7YnJlYWs7Y2FzZVwibWlkZGxlXCI6dC55MD1yLzI7YnJlYWs7Y2FzZVwiYm90dG9tXCI6dC55MD1yfXN3aXRjaChvKXtjYXNlXCJ0b3BcIjppZih0LnBhcmVudCl7dmFyIGM9cyh0KTt0LnkwKz1lKHQpfHwwIT09Yz91KHQpLnRvcDowLHQueTArPXYodCl9YnJlYWs7Y2FzZVwibWlkZGxlXCI6dC5wYXJlbnQmJih0LnkwKz12KHQpK20odCkuaGVpZ2h0LzIpLHQueTAtPXIvMjticmVhaztjYXNlXCJib3R0b21cIjppZih0LnBhcmVudCl7dmFyIGw9eCh0LnBhcmVudCksaD1zKHQsbCk7dC55MC09ZSh0KXx8aCE9PWwubGVuZ3RoLTE/dSh0KS5ib3R0b206MCx0LnkwKz12KHQsITApfXQueTAtPXJ9dC54MT10LngwK24sdC55MT10LnkwK3J9ZnVuY3Rpb24gZyh0LG4scil7Zm9yKHZhciBvPW5bcl0saT0wLGE9by5mcm9tO2E8PW8udG87YSsrKXt2YXIgYz10LmNoaWxkcmVuW2FdLGw9Yy55MS1jLnkwLGg9KGUoYyl8fDAhPT1yP3UoYykudG9wOjApKyhlKGMpfHxyIT09bi5sZW5ndGgtMT91KGMpLmJvdHRvbTowKTtsK2g+aSYmKGk9bCtoKX1yZXR1cm4gTWF0aC5tYXgoaSxmKHQpLmhlaWdodCl9ZnVuY3Rpb24geCh0KXtyZXR1cm4gbFtsLmZpbmRJbmRleChmdW5jdGlvbihuKXtyZXR1cm4gbi5ib3g9PT10fSldLmxpbmVzfWZ1bmN0aW9uIHModCxuKXtpZih0LnBhcmVudCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4xP246eCh0LnBhcmVudCkscj10LnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHQpO3JldHVybiBlLmZpbmRJbmRleChmdW5jdGlvbih0KXtyZXR1cm4gcj49dC5mcm9tJiZyPD10LnRvfSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gbSh0KXt2YXIgbj14KHQucGFyZW50KTtyZXR1cm4gbltzKHQsbildfWZ1bmN0aW9uIHYodCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXTtpZih0LnBhcmVudCl7dmFyIGU9eCh0LnBhcmVudCksbz1zKHQsZSksaT1uP286by0xO3JldHVybiByLnN1bShlLmZpbHRlcihmdW5jdGlvbih0LG4pe3JldHVybiBuPD1pfSksZnVuY3Rpb24odCl7cmV0dXJuIHQuaGVpZ2h0fSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gYih0KXtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdH19cmV0dXJuIGgudkFsaWduPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhvPXQsaCk6b30saC5lZGdlTWFyZ2lucz1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6ZX0saC5pc0NvbnRhaW5lcj1mdW5jdGlvbihuKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP246YigrbiksaCk6dH0saC5zcGFuSGVpZ2h0PWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhuPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpufSxoLnBhZGRpbmc9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGk9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOml9LGgubWFyZ2luPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTp1fSxoLm5vZGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpjfSxoLm1pbkNvbnRhaW5lclNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGY9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmZ9LGgubWF4TGluZVdpZHRoPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTphfSxofX1dKS5kZWZhdWx0fSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ib3htb2RlbC1kMy5taW4uanMubWFwIiwiIWZ1bmN0aW9uKHQsZSl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9ZShyZXF1aXJlKFwicmdiY29sb3JcIikscmVxdWlyZShcInN0YWNrYmx1ci1jYW52YXNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicmdiY29sb3JcIixcInN0YWNrYmx1ci1jYW52YXNcIl0sZSk6dC5jYW52Zz1lKHQuUkdCQ29sb3IsdC5TdGFja0JsdXIpfSh0aGlzLGZ1bmN0aW9uKG0sZCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ7cmV0dXJuIG09bSYmbS5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/bS5kZWZhdWx0Om0sZD1kJiZkLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT9kLmRlZmF1bHQ6ZCxmdW5jdGlvbih0KXt2YXIgdTt0LmV4cG9ydHM7KHU9d2luZG93KS5ET01QYXJzZXI9d2luZG93LkRPTVBhcnNlcjtmdW5jdGlvbiBwKCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIil9dmFyIGYsYz1mdW5jdGlvbih0LGUsaSl7aWYobnVsbCE9dHx8bnVsbCE9ZXx8bnVsbCE9aSl7dmFyIG49ZnVuY3Rpb24ocyl7dmFyIEE9e29wdHM6cyxGUkFNRVJBVEU6MzAsTUFYX1ZJUlRVQUxfUElYRUxTOjNlNCxyb290RW1TaXplOjEyLGVtU2l6ZToxMixsb2c6ZnVuY3Rpb24odCl7fX07MT09QS5vcHRzLmxvZyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJihBLmxvZz1mdW5jdGlvbih0KXtjb25zb2xlLmxvZyh0KX0pO0EuaW5pdD1mdW5jdGlvbih0KXt2YXIgZT0wO0EuVW5pcXVlSWQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNhbnZnXCIrICsrZX0sQS5EZWZpbml0aW9ucz17fSxBLlN0eWxlcz17fSxBLlN0eWxlc1NwZWNpZmljaXR5PXt9LEEuQW5pbWF0aW9ucz1bXSxBLkltYWdlcz1bXSxBLmN0eD10LEEuVmlld1BvcnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy52aWV3UG9ydHM9W10sdGhpcy5DbGVhcj1mdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdfSx0aGlzLlNldEN1cnJlbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLnZpZXdQb3J0cy5wdXNoKHt3aWR0aDp0LGhlaWdodDplfSl9LHRoaXMuUmVtb3ZlQ3VycmVudD1mdW5jdGlvbigpe3RoaXMudmlld1BvcnRzLnBvcCgpfSx0aGlzLkN1cnJlbnQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52aWV3UG9ydHNbdGhpcy52aWV3UG9ydHMubGVuZ3RoLTFdfSx0aGlzLndpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuQ3VycmVudCgpLndpZHRofSx0aGlzLmhlaWdodD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS5oZWlnaHR9LHRoaXMuQ29tcHV0ZVNpemU9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0P3Q6XCJ4XCI9PXQ/dGhpcy53aWR0aCgpOlwieVwiPT10P3RoaXMuaGVpZ2h0KCk6TWF0aC5zcXJ0KE1hdGgucG93KHRoaXMud2lkdGgoKSwyKStNYXRoLnBvdyh0aGlzLmhlaWdodCgpLDIpKS9NYXRoLnNxcnQoMil9fX0sQS5pbml0KCksQS5JbWFnZXNMb2FkZWQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PEEuSW1hZ2VzLmxlbmd0aDt0KyspaWYoIUEuSW1hZ2VzW3RdLmxvYWRlZClyZXR1cm4hMTtyZXR1cm4hMH0sQS50cmltPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoL15cXHMrfFxccyskL2csXCJcIil9LEEuY29tcHJlc3NTcGFjZXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZSgvKD8hXFx1MzAwMClcXHMrL2dtLFwiIFwiKX0sQS5hamF4PWZ1bmN0aW9uKHQpe3ZhciBlO3JldHVybihlPXUuWE1MSHR0cFJlcXVlc3Q/bmV3IHUuWE1MSHR0cFJlcXVlc3Q6bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKSk/KGUub3BlbihcIkdFVFwiLHQsITEpLGUuc2VuZChudWxsKSxlLnJlc3BvbnNlVGV4dCk6bnVsbH0sQS5wYXJzZVhtbD1mdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgV2luZG93cyYmdm9pZCAwIT09V2luZG93cy5EYXRhJiZ2b2lkIDAhPT1XaW5kb3dzLkRhdGEuWG1sKXt2YXIgdD1uZXcgV2luZG93cy5EYXRhLlhtbC5Eb20uWG1sRG9jdW1lbnQsaT1uZXcgV2luZG93cy5EYXRhLlhtbC5Eb20uWG1sTG9hZFNldHRpbmdzO3JldHVybiBpLnByb2hpYml0RHRkPSExLHQubG9hZFhtbChlLGkpLHR9aWYoIXUuRE9NUGFyc2VyKXtlPWUucmVwbGFjZSgvPCFET0NUWVBFIHN2Z1tePl0qPi8sXCJcIik7dmFyIHQ9bmV3IEFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpO3JldHVybiB0LmFzeW5jPVwiZmFsc2VcIix0LmxvYWRYTUwoZSksdH10cnl7dmFyIG49cy54bWxkb20/bmV3IHUuRE9NUGFyc2VyKHMueG1sZG9tKTpuZXcgdS5ET01QYXJzZXI7cmV0dXJuIG4ucGFyc2VGcm9tU3RyaW5nKGUsXCJpbWFnZS9zdmcreG1sXCIpfWNhdGNoKHQpe3JldHVybihuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyKS5wYXJzZUZyb21TdHJpbmcoZSxcInRleHQveG1sXCIpfX0sQS5Qcm9wZXJ0eT1mdW5jdGlvbih0LGUpe3RoaXMubmFtZT10LHRoaXMudmFsdWU9ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaGFzVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9dGhpcy52YWx1ZSYmXCJcIiE9PXRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD1wYXJzZUZsb2F0KHRoaXMudmFsdWUpO3JldHVybih0aGlzLnZhbHVlK1wiXCIpLm1hdGNoKC8lJC8pJiYodC89MTAwKSx0fSxBLlByb3BlcnR5LnByb3RvdHlwZS52YWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RoaXMudmFsdWU6dH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLm51bVZhbHVlKCk6dH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuYWRkT3BhY2l0eT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlO2lmKG51bGwhPXQudmFsdWUmJlwiXCIhPXQudmFsdWUmJlwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLnZhbHVlKXt2YXIgaT1uZXcgbSh0aGlzLnZhbHVlKTtpLm9rJiYoZT1cInJnYmEoXCIraS5yK1wiLCBcIitpLmcrXCIsIFwiK2kuYitcIiwgXCIrdC5udW1WYWx1ZSgpK1wiKVwiKX1yZXR1cm4gbmV3IEEuUHJvcGVydHkodGhpcy5uYW1lLGUpfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXREZWZpbml0aW9uPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZS5tYXRjaCgvIyhbXlxcKSdcIl0rKS8pO3JldHVybiB0JiYodD10WzFdKSx0fHwodD10aGlzLnZhbHVlKSxBLkRlZmluaXRpb25zW3RdfSxBLlByb3BlcnR5LnByb3RvdHlwZS5pc1VybERlZmluaXRpb249ZnVuY3Rpb24oKXtyZXR1cm4gMD09dGhpcy52YWx1ZS5pbmRleE9mKFwidXJsKFwiKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWkmJmkuY3JlYXRlR3JhZGllbnQpcmV0dXJuIGkuY3JlYXRlR3JhZGllbnQoQS5jdHgsdCxlKTtpZihudWxsIT1pJiZpLmNyZWF0ZVBhdHRlcm4pe2lmKGkuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkpe3ZhciBuPWkuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiKTtpPWkuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSxuLmhhc1ZhbHVlKCkmJihpLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIiwhMCkudmFsdWU9bi52YWx1ZSl9cmV0dXJuIGkuY3JlYXRlUGF0dGVybihBLmN0eCx0KX1yZXR1cm4gbnVsbH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RFBJPWZ1bmN0aW9uKHQpe3JldHVybiA5Nn0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0UkVNPWZ1bmN0aW9uKHQpe3JldHVybiBBLnJvb3RFbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEVNPWZ1bmN0aW9uKHQpe3JldHVybiBBLmVtU2l6ZX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0VW5pdHM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQucmVwbGFjZSgvWzAtOVxcLlxcLV0vZyxcIlwiKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNQaXhlbHM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiExO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4hIXQubWF0Y2goL3B4JC8pfHwhIXQubWF0Y2goL15bMC05XSskLyl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUGl4ZWxzPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgaT10aGlzLnZhbHVlK1wiXCI7aWYoaS5tYXRjaCgvcmVtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRSRU0odCk7aWYoaS5tYXRjaCgvZW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldEVNKHQpO2lmKGkubWF0Y2goL2V4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KS8yO2lmKGkubWF0Y2goL3B4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvcHQkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KSooMS83Mik7aWYoaS5tYXRjaCgvcGMkLykpcmV0dXJuIDE1KnRoaXMubnVtVmFsdWUoKTtpZihpLm1hdGNoKC9jbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpLzIuNTQ7aWYoaS5tYXRjaCgvbW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yNS40O2lmKGkubWF0Y2goL2luJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCk7aWYoaS5tYXRjaCgvJSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKkEuVmlld1BvcnQuQ29tcHV0ZVNpemUodCk7dmFyIG49dGhpcy5udW1WYWx1ZSgpO3JldHVybiBlJiZuPDE/bipBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpOm59LEEuUHJvcGVydHkucHJvdG90eXBlLnRvTWlsbGlzZWNvbmRzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQubWF0Y2goL3MkLyk/MWUzKnRoaXMubnVtVmFsdWUoKToodC5tYXRjaCgvbXMkLyksdGhpcy5udW1WYWx1ZSgpKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudG9SYWRpYW5zPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQubWF0Y2goL2RlZyQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMTgwKTp0Lm1hdGNoKC9ncmFkJC8pP3RoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8yMDApOnQubWF0Y2goL3JhZCQvKT90aGlzLm51bVZhbHVlKCk6dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCl9O3ZhciB0PXtiYXNlbGluZTpcImFscGhhYmV0aWNcIixcImJlZm9yZS1lZGdlXCI6XCJ0b3BcIixcInRleHQtYmVmb3JlLWVkZ2VcIjpcInRvcFwiLG1pZGRsZTpcIm1pZGRsZVwiLGNlbnRyYWw6XCJtaWRkbGVcIixcImFmdGVyLWVkZ2VcIjpcImJvdHRvbVwiLFwidGV4dC1hZnRlci1lZGdlXCI6XCJib3R0b21cIixpZGVvZ3JhcGhpYzpcImlkZW9ncmFwaGljXCIsYWxwaGFiZXRpYzpcImFscGhhYmV0aWNcIixoYW5naW5nOlwiaGFuZ2luZ1wiLG1hdGhlbWF0aWNhbDpcImFscGhhYmV0aWNcIn07cmV0dXJuIEEuUHJvcGVydHkucHJvdG90eXBlLnRvVGV4dEJhc2VsaW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90W3RoaXMudmFsdWVdOm51bGx9LEEuRm9udD1uZXcgZnVuY3Rpb24oKXt0aGlzLlN0eWxlcz1cIm5vcm1hbHxpdGFsaWN8b2JsaXF1ZXxpbmhlcml0XCIsdGhpcy5WYXJpYW50cz1cIm5vcm1hbHxzbWFsbC1jYXBzfGluaGVyaXRcIix0aGlzLldlaWdodHM9XCJub3JtYWx8Ym9sZHxib2xkZXJ8bGlnaHRlcnwxMDB8MjAwfDMwMHw0MDB8NTAwfDYwMHw3MDB8ODAwfDkwMHxpbmhlcml0XCIsdGhpcy5DcmVhdGVGb250PWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj1udWxsIT1hP3RoaXMuUGFyc2UoYSk6dGhpcy5DcmVhdGVGb250KFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixBLmN0eC5mb250KTtyZXR1cm57Zm9udEZhbWlseTpzPXN8fHIuZm9udEZhbWlseSxmb250U2l6ZTpufHxyLmZvbnRTaXplLGZvbnRTdHlsZTp0fHxyLmZvbnRTdHlsZSxmb250V2VpZ2h0Oml8fHIuZm9udFdlaWdodCxmb250VmFyaWFudDplfHxyLmZvbnRWYXJpYW50LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuW3RoaXMuZm9udFN0eWxlLHRoaXMuZm9udFZhcmlhbnQsdGhpcy5mb250V2VpZ2h0LHRoaXMuZm9udFNpemUsdGhpcy5mb250RmFtaWx5XS5qb2luKFwiIFwiKX19fTt2YXIgcj10aGlzO3RoaXMuUGFyc2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LGk9QS50cmltKEEuY29tcHJlc3NTcGFjZXModHx8XCJcIikpLnNwbGl0KFwiIFwiKSxuPXtmb250U2l6ZTohMSxmb250U3R5bGU6ITEsZm9udFdlaWdodDohMSxmb250VmFyaWFudDohMX0scz1cIlwiLGE9MDthPGkubGVuZ3RoO2ErKyluLmZvbnRTdHlsZXx8LTE9PXIuU3R5bGVzLmluZGV4T2YoaVthXSk/bi5mb250VmFyaWFudHx8LTE9PXIuVmFyaWFudHMuaW5kZXhPZihpW2FdKT9uLmZvbnRXZWlnaHR8fC0xPT1yLldlaWdodHMuaW5kZXhPZihpW2FdKT9uLmZvbnRTaXplP1wiaW5oZXJpdFwiIT1pW2FdJiYocys9aVthXSk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250U2l6ZT1pW2FdLnNwbGl0KFwiL1wiKVswXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD1uLmZvbnRXZWlnaHQ9bi5mb250U2l6ZT0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250V2VpZ2h0PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRWYXJpYW50PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFN0eWxlPWlbYV0pLG4uZm9udFN0eWxlPSEwKTtyZXR1cm5cIlwiIT1zJiYoZS5mb250RmFtaWx5PXMpLGV9fSxBLlRvTnVtYmVyQXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKCh0fHxcIlwiKS5yZXBsYWNlKC8sL2csXCIgXCIpKSkuc3BsaXQoXCIgXCIpLGk9MDtpPGUubGVuZ3RoO2krKyllW2ldPXBhcnNlRmxvYXQoZVtpXSk7cmV0dXJuIGV9LEEuUG9pbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLng9dCx0aGlzLnk9ZX0sQS5Qb2ludC5wcm90b3R5cGUuYW5nbGVUbz1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5hdGFuMih0LnktdGhpcy55LHQueC10aGlzLngpfSxBLlBvaW50LnByb3RvdHlwZS5hcHBseVRyYW5zZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLngqdFswXSt0aGlzLnkqdFsyXSt0WzRdLGk9dGhpcy54KnRbMV0rdGhpcy55KnRbM10rdFs1XTt0aGlzLng9ZSx0aGlzLnk9aX0sQS5DcmVhdGVQb2ludD1mdW5jdGlvbih0KXt2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCk7cmV0dXJuIG5ldyBBLlBvaW50KGVbMF0sZVsxXSl9LEEuQ3JlYXRlUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9QS5Ub051bWJlckFycmF5KHQpLGk9W10sbj0wO248ZS5sZW5ndGg7bis9MilpLnB1c2gobmV3IEEuUG9pbnQoZVtuXSxlW24rMV0pKTtyZXR1cm4gaX0sQS5Cb3VuZGluZ0JveD1mdW5jdGlvbih0LGUsaSxuKXt0aGlzLngxPU51bWJlci5OYU4sdGhpcy55MT1OdW1iZXIuTmFOLHRoaXMueDI9TnVtYmVyLk5hTix0aGlzLnkyPU51bWJlci5OYU4sdGhpcy54PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDF9LHRoaXMueT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnkxfSx0aGlzLndpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDItdGhpcy54MX0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55Mi10aGlzLnkxfSx0aGlzLmFkZFBvaW50PWZ1bmN0aW9uKHQsZSl7bnVsbCE9dCYmKChpc05hTih0aGlzLngxKXx8aXNOYU4odGhpcy54MikpJiYodGhpcy54MT10LHRoaXMueDI9dCksdDx0aGlzLngxJiYodGhpcy54MT10KSx0PnRoaXMueDImJih0aGlzLngyPXQpKSxudWxsIT1lJiYoKGlzTmFOKHRoaXMueTEpfHxpc05hTih0aGlzLnkyKSkmJih0aGlzLnkxPWUsdGhpcy55Mj1lKSxlPHRoaXMueTEmJih0aGlzLnkxPWUpLGU+dGhpcy55MiYmKHRoaXMueTI9ZSkpfSx0aGlzLmFkZFg9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludCh0LG51bGwpfSx0aGlzLmFkZFk9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludChudWxsLHQpfSx0aGlzLmFkZEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodC54MSx0LnkxKSx0aGlzLmFkZFBvaW50KHQueDIsdC55Mil9LHRoaXMuYWRkUXVhZHJhdGljQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPXQrMi8zKihpLXQpLG89ZSsyLzMqKG4tZSksbD1yKzEvMyoocy10KSxoPW8rMS8zKihhLWUpO3RoaXMuYWRkQmV6aWVyQ3VydmUodCxlLHIsbCxvLGgscyxhKX0sdGhpcy5hZGRCZXppZXJDdXJ2ZT1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8pe3ZhciBsPVt0LGVdLGg9W2ksbl0sdT1bcyxhXSxjPVtyLG9dO3RoaXMuYWRkUG9pbnQobFswXSxsWzFdKSx0aGlzLmFkZFBvaW50KGNbMF0sY1sxXSk7Zm9yKHZhciBmPTA7Zjw9MTtmKyspe3ZhciBtPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnBvdygxLXQsMykqbFtmXSszKk1hdGgucG93KDEtdCwyKSp0KmhbZl0rMyooMS10KSpNYXRoLnBvdyh0LDIpKnVbZl0rTWF0aC5wb3codCwzKSpjW2ZdfSxwPTYqbFtmXS0xMipoW2ZdKzYqdVtmXSxkPS0zKmxbZl0rOSpoW2ZdLTkqdVtmXSszKmNbZl0seT0zKmhbZl0tMypsW2ZdO2lmKDAhPWQpe3ZhciB2PU1hdGgucG93KHAsMiktNCp5KmQ7aWYoISh2PDApKXt2YXIgZz0oLXArTWF0aC5zcXJ0KHYpKS8oMipkKTswPGcmJmc8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGcpKSwxPT1mJiZ0aGlzLmFkZFkobShnKSkpO3ZhciB4PSgtcC1NYXRoLnNxcnQodikpLygyKmQpOzA8eCYmeDwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oeCkpLDE9PWYmJnRoaXMuYWRkWShtKHgpKSl9fWVsc2V7aWYoMD09cCljb250aW51ZTt2YXIgYj0teS9wOzA8YiYmYjwxJiYoMD09ZiYmdGhpcy5hZGRYKG0oYikpLDE9PWYmJnRoaXMuYWRkWShtKGIpKSl9fX0sdGhpcy5pc1BvaW50SW5Cb3g9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy54MTw9dCYmdDw9dGhpcy54MiYmdGhpcy55MTw9ZSYmZTw9dGhpcy55Mn0sdGhpcy5hZGRQb2ludCh0LGUpLHRoaXMuYWRkUG9pbnQoaSxuKX0sQS5UcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLlR5cGU9e30sdGhpcy5UeXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0KXt0aGlzLnA9QS5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMucC54fHwwLHRoaXMucC55fHwwKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKC0xKnRoaXMucC54fHwwLC0xKnRoaXMucC55fHwwKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pfX0sdGhpcy5UeXBlLnJvdGF0ZT1mdW5jdGlvbih0KXt2YXIgZT1BLlRvTnVtYmVyQXJyYXkodCk7dGhpcy5hbmdsZT1uZXcgQS5Qcm9wZXJ0eShcImFuZ2xlXCIsZVswXSksdGhpcy5jeD1lWzFdfHwwLHRoaXMuY3k9ZVsyXXx8MCx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUodGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5jeCx0aGlzLmN5KSx0LnJvdGF0ZSgtMSp0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSx0LnRyYW5zbGF0ZSgtdGhpcy5jeCwtdGhpcy5jeSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYW5nbGUudG9SYWRpYW5zKCk7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pLHQuYXBwbHlUcmFuc2Zvcm0oW01hdGguY29zKGUpLE1hdGguc2luKGUpLC1NYXRoLnNpbihlKSxNYXRoLmNvcyhlKSwwLDBdKSx0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLC10aGlzLnAueHx8MCwtdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5zY2FsZT1mdW5jdGlvbih0KXt0aGlzLnA9QS5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUodGhpcy5wLnh8fDEsdGhpcy5wLnl8fHRoaXMucC54fHwxKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUoMS90aGlzLnAueHx8MSwxL3RoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oW3RoaXMucC54fHwwLDAsMCx0aGlzLnAueXx8MCwwLDBdKX19LHRoaXMuVHlwZS5tYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5tPUEuVG9OdW1iZXJBcnJheSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNmb3JtKHRoaXMubVswXSx0aGlzLm1bMV0sdGhpcy5tWzJdLHRoaXMubVszXSx0aGlzLm1bNF0sdGhpcy5tWzVdKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubVswXSxpPXRoaXMubVsyXSxuPXRoaXMubVs0XSxzPXRoaXMubVsxXSxhPXRoaXMubVszXSxyPXRoaXMubVs1XSxvPTEvKGUqKDEqYS0wKnIpLWkqKDEqcy0wKnIpK24qKDAqcy0wKmEpKTt0LnRyYW5zZm9ybShvKigxKmEtMCpyKSxvKigwKnItMSpzKSxvKigwKm4tMSppKSxvKigxKmUtMCpuKSxvKihpKnItbiphKSxvKihuKnMtZSpyKSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0odGhpcy5tKX19LHRoaXMuVHlwZS5Ta2V3QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLm1hdHJpeCx0aGlzLmJhc2UodCksdGhpcy5hbmdsZT1uZXcgQS5Qcm9wZXJ0eShcImFuZ2xlXCIsdCl9LHRoaXMuVHlwZS5Ta2V3QmFzZS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5tYXRyaXgsdGhpcy5UeXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUuU2tld0Jhc2UsdGhpcy5iYXNlKHQpLHRoaXMubT1bMSwwLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDEsMCwwXX0sdGhpcy5UeXBlLnNrZXdYLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLlNrZXdCYXNlLHRoaXMuVHlwZS5za2V3WT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksMCwxLDAsMF19LHRoaXMuVHlwZS5za2V3WS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLnRyYW5zZm9ybXM9W10sdGhpcy5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseSh0KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRyYW5zZm9ybXMubGVuZ3RoLTE7MDw9ZTtlLS0pdGhpcy50cmFuc2Zvcm1zW2VdLnVuYXBwbHkodCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy50cmFuc2Zvcm1zLmxlbmd0aDtlKyspdGhpcy50cmFuc2Zvcm1zW2VdLmFwcGx5VG9Qb2ludCh0KX07Zm9yKHZhciBpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHQpKS5yZXBsYWNlKC9cXCkoW2EtekEtWl0pL2csXCIpICQxXCIpLnJlcGxhY2UoL1xcKShcXHM/LFxccz8pL2csXCIpIFwiKS5zcGxpdCgvXFxzKD89W2Etel0pLyksbj0wO248aS5sZW5ndGg7bisrKWlmKFwibm9uZVwiIT09aVtuXSl7dmFyIHM9QS50cmltKGlbbl0uc3BsaXQoXCIoXCIpWzBdKSxhPWlbbl0uc3BsaXQoXCIoXCIpWzFdLnJlcGxhY2UoXCIpXCIsXCJcIikscj10aGlzLlR5cGVbc107aWYodm9pZCAwIT09cil7dmFyIG89bmV3IHIoYSk7by50eXBlPXMsdGhpcy50cmFuc2Zvcm1zLnB1c2gobyl9fX0sQS5Bc3BlY3RSYXRpbz1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8sbCxoKXt2YXIgdT0oZT0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5yZXBsYWNlKC9eZGVmZXJcXHMvLFwiXCIpKS5zcGxpdChcIiBcIilbMF18fFwieE1pZFlNaWRcIixjPWUuc3BsaXQoXCIgXCIpWzFdfHxcIm1lZXRcIixmPWkvbixtPXMvYSxwPU1hdGgubWluKGYsbSksZD1NYXRoLm1heChmLG0pO1wibWVldFwiPT1jJiYobio9cCxhKj1wKSxcInNsaWNlXCI9PWMmJihuKj1kLGEqPWQpLGw9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsbCksaD1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIixoKSxsLmhhc1ZhbHVlKCkmJmguaGFzVmFsdWUoKT90LnRyYW5zbGF0ZSgtcCpsLnRvUGl4ZWxzKFwieFwiKSwtcCpoLnRvUGl4ZWxzKFwieVwiKSk6KHUubWF0Y2goL154TWlkLykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS8yLW4vMiwwKSx1Lm1hdGNoKC9ZTWlkJC8pJiYoXCJtZWV0XCI9PWMmJnA9PWZ8fFwic2xpY2VcIj09YyYmZD09ZikmJnQudHJhbnNsYXRlKDAscy8yLWEvMiksdS5tYXRjaCgvXnhNYXgvKSYmKFwibWVldFwiPT1jJiZwPT1tfHxcInNsaWNlXCI9PWMmJmQ9PW0pJiZ0LnRyYW5zbGF0ZShpLW4sMCksdS5tYXRjaCgvWU1heCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMtYSkpLFwibm9uZVwiPT11P3Quc2NhbGUoZixtKTpcIm1lZXRcIj09Yz90LnNjYWxlKHAscCk6XCJzbGljZVwiPT1jJiZ0LnNjYWxlKGQsZCksdC50cmFuc2xhdGUobnVsbD09cj8wOi1yLG51bGw9PW8/MDotbyl9LEEuRWxlbWVudD17fSxBLkVtcHR5UHJvcGVydHk9bmV3IEEuUHJvcGVydHkoXCJFTVBUWVwiLFwiXCIpLEEuRWxlbWVudC5FbGVtZW50QmFzZT1mdW5jdGlvbihhKXt0aGlzLmF0dHJpYnV0ZXM9e30sdGhpcy5zdHlsZXM9e30sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eT17fSx0aGlzLmNoaWxkcmVuPVtdLHRoaXMuYXR0cmlidXRlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBudWxsIT1pP2k6KDE9PWUmJihpPW5ldyBBLlByb3BlcnR5KHQsXCJcIiksdGhpcy5hdHRyaWJ1dGVzW3RdPWkpLGl8fEEuRW1wdHlQcm9wZXJ0eSl9LHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmF0dHJpYnV0ZXMpaWYoXCJocmVmXCI9PXR8fHQubWF0Y2goLzpocmVmJC8pKXJldHVybiB0aGlzLmF0dHJpYnV0ZXNbdF07cmV0dXJuIEEuRW1wdHlQcm9wZXJ0eX0sdGhpcy5zdHlsZT1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpcy5zdHlsZXNbdF07aWYobnVsbCE9bilyZXR1cm4gbjt2YXIgcz10aGlzLmF0dHJpYnV0ZSh0KTtpZihudWxsIT1zJiZzLmhhc1ZhbHVlKCkpcmV0dXJuIHRoaXMuc3R5bGVzW3RdPXM7aWYoMSE9aSl7dmFyIGE9dGhpcy5wYXJlbnQ7aWYobnVsbCE9YSl7dmFyIHI9YS5zdHlsZSh0KTtpZihudWxsIT1yJiZyLmhhc1ZhbHVlKCkpcmV0dXJuIHJ9fXJldHVybiAxPT1lJiYobj1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuc3R5bGVzW3RdPW4pLG58fEEuRW1wdHlQcm9wZXJ0eX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7aWYoXCJub25lXCIhPXRoaXMuc3R5bGUoXCJkaXNwbGF5XCIpLnZhbHVlJiZcImhpZGRlblwiIT10aGlzLnN0eWxlKFwidmlzaWJpbGl0eVwiKS52YWx1ZSl7aWYodC5zYXZlKCksdGhpcy5zdHlsZShcIm1hc2tcIikuaGFzVmFsdWUoKSl7dmFyIGU9dGhpcy5zdHlsZShcIm1hc2tcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWUmJmUuYXBwbHkodCx0aGlzKX1lbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuaGFzVmFsdWUoKSl7dmFyIGk9dGhpcy5zdHlsZShcImZpbHRlclwiKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9aSYmaS5hcHBseSh0LHRoaXMpfWVsc2UgdGhpcy5zZXRDb250ZXh0KHQpLHRoaXMucmVuZGVyQ2hpbGRyZW4odCksdGhpcy5jbGVhckNvbnRleHQodCk7dC5yZXN0b3JlKCl9fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspdGhpcy5jaGlsZHJlbltlXS5yZW5kZXIodCl9LHRoaXMuYWRkQ2hpbGQ9ZnVuY3Rpb24odCxlKXt2YXIgaT10O2UmJihpPUEuQ3JlYXRlRWxlbWVudCh0KSksaS5wYXJlbnQ9dGhpcyxcInRpdGxlXCIhPWkudHlwZSYmdGhpcy5jaGlsZHJlbi5wdXNoKGkpfSx0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb249ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gQS5TdHlsZXMpaWYoXCJAXCIhPXRbMF0mJmYoYSx0KSl7dmFyIGU9QS5TdHlsZXNbdF0saT1BLlN0eWxlc1NwZWNpZmljaXR5W3RdO2lmKG51bGwhPWUpZm9yKHZhciBuIGluIGUpe3ZhciBzPXRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbl07dm9pZCAwPT09cyYmKHM9XCIwMDBcIiksczxpJiYodGhpcy5zdHlsZXNbbl09ZVtuXSx0aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dPWkpfX19O3ZhciB0LGU9bmV3IFJlZ0V4cChcIl5bQS1aLV0rJFwiKTtpZihudWxsIT1hJiYxPT1hLm5vZGVUeXBlKXtmb3IodmFyIGk9MDtpPGEuYXR0cmlidXRlcy5sZW5ndGg7aSsrKXt2YXIgbj1hLmF0dHJpYnV0ZXNbaV0scz0odD1uLm5vZGVOYW1lLGUudGVzdCh0KT90LnRvTG93ZXJDYXNlKCk6dCk7dGhpcy5hdHRyaWJ1dGVzW3NdPW5ldyBBLlByb3BlcnR5KHMsbi52YWx1ZSl9aWYodGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCksdGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS5oYXNWYWx1ZSgpKXt2YXIgcj10aGlzLmF0dHJpYnV0ZShcInN0eWxlXCIpLnZhbHVlLnNwbGl0KFwiO1wiKTtmb3IoaT0wO2k8ci5sZW5ndGg7aSsrKWlmKFwiXCIhPUEudHJpbShyW2ldKSl7dmFyIG89cltpXS5zcGxpdChcIjpcIiksbD1BLnRyaW0ob1swXSksaD1BLnRyaW0ob1sxXSk7dGhpcy5zdHlsZXNbbF09bmV3IEEuUHJvcGVydHkobCxoKX19Zm9yKHRoaXMuYXR0cmlidXRlKFwiaWRcIikuaGFzVmFsdWUoKSYmbnVsbD09QS5EZWZpbml0aW9uc1t0aGlzLmF0dHJpYnV0ZShcImlkXCIpLnZhbHVlXSYmKEEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV09dGhpcyksaT0wO2k8YS5jaGlsZE5vZGVzLmxlbmd0aDtpKyspe3ZhciB1PWEuY2hpbGROb2Rlc1tpXTtpZigxPT11Lm5vZGVUeXBlJiZ0aGlzLmFkZENoaWxkKHUsITApLHRoaXMuY2FwdHVyZVRleHROb2RlcyYmKDM9PXUubm9kZVR5cGV8fDQ9PXUubm9kZVR5cGUpKXt2YXIgYz11LnZhbHVlfHx1LnRleHR8fHUudGV4dENvbnRlbnR8fFwiXCI7XCJcIiE9QS5jb21wcmVzc1NwYWNlcyhjKSYmdGhpcy5hZGRDaGlsZChuZXcgQS5FbGVtZW50LnRzcGFuKHUpLCExKX19fX0sQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjdWxhdGVPcGFjaXR5PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTEsZT10aGlzO251bGwhPWU7KXt2YXIgaT1lLnN0eWxlKFwib3BhY2l0eVwiLCExLCEwKTtpLmhhc1ZhbHVlKCkmJih0Kj1pLm51bVZhbHVlKCkpLGU9ZS5wYXJlbnR9cmV0dXJuIHR9LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0LGUpe2lmKCFlKXt2YXIgaTtpZih0aGlzLnN0eWxlKFwiZmlsbFwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwiZmlsbFwiKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsdGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSkpJiYodC5maWxsU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsbFwiKS5oYXNWYWx1ZSgpKXt2YXIgbjtcImN1cnJlbnRDb2xvclwiPT0obj10aGlzLnN0eWxlKFwiZmlsbFwiKSkudmFsdWUmJihuLnZhbHVlPXRoaXMuc3R5bGUoXCJjb2xvclwiKS52YWx1ZSksXCJpbmhlcml0XCIhPW4udmFsdWUmJih0LmZpbGxTdHlsZT1cIm5vbmVcIj09bi52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpuLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihuPShuPW5ldyBBLlByb3BlcnR5KFwiZmlsbFwiLHQuZmlsbFN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSx0LmZpbGxTdHlsZT1uLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmlzVXJsRGVmaW5pdGlvbigpKW51bGwhPShpPXRoaXMuc3R5bGUoXCJzdHJva2VcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKSkpJiYodC5zdHJva2VTdHlsZT1pKTtlbHNlIGlmKHRoaXMuc3R5bGUoXCJzdHJva2VcIikuaGFzVmFsdWUoKSl7dmFyIHM7XCJjdXJyZW50Q29sb3JcIj09KHM9dGhpcy5zdHlsZShcInN0cm9rZVwiKSkudmFsdWUmJihzLnZhbHVlPXRoaXMuc3R5bGUoXCJjb2xvclwiKS52YWx1ZSksXCJpbmhlcml0XCIhPXMudmFsdWUmJih0LnN0cm9rZVN0eWxlPVwibm9uZVwiPT1zLnZhbHVlP1wicmdiYSgwLDAsMCwwKVwiOnMudmFsdWUpfWlmKHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYocz0ocz1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHQuc3Ryb2tlU3R5bGUpKS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKSksdC5zdHJva2VTdHlsZT1zLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLmhhc1ZhbHVlKCkpe3ZhciBhPXRoaXMuc3R5bGUoXCJzdHJva2Utd2lkdGhcIikudG9QaXhlbHMoKTt0LmxpbmVXaWR0aD0wPT1hPy4wMDE6YX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVjYXBcIikuaGFzVmFsdWUoKSYmKHQubGluZUNhcD10aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVjYXBcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikuaGFzVmFsdWUoKSYmKHQubGluZUpvaW49dGhpcy5zdHlsZShcInN0cm9rZS1saW5lam9pblwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1taXRlcmxpbWl0XCIpLmhhc1ZhbHVlKCkmJih0Lm1pdGVyTGltaXQ9dGhpcy5zdHlsZShcInN0cm9rZS1taXRlcmxpbWl0XCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwicGFpbnQtb3JkZXJcIikuaGFzVmFsdWUoKSYmKHQucGFpbnRPcmRlcj10aGlzLnN0eWxlKFwicGFpbnQtb3JkZXJcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLmhhc1ZhbHVlKCkmJlwibm9uZVwiIT10aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSl7dmFyIHI9QS5Ub051bWJlckFycmF5KHRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLnZhbHVlKTt2b2lkIDAhPT10LnNldExpbmVEYXNoP3Quc2V0TGluZURhc2gocik6dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaD90LndlYmtpdExpbmVEYXNoPXI6dm9pZCAwPT09dC5tb3pEYXNofHwxPT1yLmxlbmd0aCYmMD09clswXXx8KHQubW96RGFzaD1yKTt2YXIgbz10aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIikudG9QaXhlbHMoKTt2b2lkIDAhPT10LmxpbmVEYXNoT2Zmc2V0P3QubGluZURhc2hPZmZzZXQ9bzp2b2lkIDAhPT10LndlYmtpdExpbmVEYXNoT2Zmc2V0P3Qud2Via2l0TGluZURhc2hPZmZzZXQ9bzp2b2lkIDAhPT10Lm1vekRhc2hPZmZzZXQmJih0Lm1vekRhc2hPZmZzZXQ9byl9fWlmKHZvaWQgMCE9PXQuZm9udCl7dC5mb250PUEuRm9udC5DcmVhdGVGb250KHRoaXMuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXZhcmlhbnRcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtd2VpZ2h0XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXNpemVcIikuaGFzVmFsdWUoKT90aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLnRvUGl4ZWxzKCkrXCJweFwiOlwiXCIsdGhpcy5zdHlsZShcImZvbnQtZmFtaWx5XCIpLnZhbHVlKS50b1N0cmluZygpO3ZhciBsPXRoaXMuc3R5bGUoXCJmb250LXNpemVcIiwhMSwhMSk7bC5pc1BpeGVscygpJiYoQS5lbVNpemU9bC50b1BpeGVscygpKX1pZih0aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJm5ldyBBLlRyYW5zZm9ybSh0aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKS5hcHBseSh0KSx0aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmhhc1ZhbHVlKCkpe3ZhciBoPXRoaXMuc3R5bGUoXCJjbGlwLXBhdGhcIiwhMSwhMCkuZ2V0RGVmaW5pdGlvbigpO251bGwhPWgmJmguYXBwbHkodCl9dC5nbG9iYWxBbHBoYT10aGlzLmNhbGN1bGF0ZU9wYWNpdHkoKX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJnQuYmVnaW5QYXRoKCksbmV3IEEuQm91bmRpbmdCb3h9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dGhpcy5wYXRoKHQpLEEuTW91c2UuY2hlY2tQYXRoKHRoaXMsdCksXCJcIiE9dC5maWxsU3R5bGUmJihcImluaGVyaXRcIiE9dGhpcy5zdHlsZShcImZpbGwtcnVsZVwiKS52YWx1ZU9yRGVmYXVsdChcImluaGVyaXRcIik/dC5maWxsKHRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWUpOnQuZmlsbCgpKSxcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZSgpO3ZhciBlPXRoaXMuZ2V0TWFya2VycygpO2lmKG51bGwhPWUpe2lmKHRoaXMuc3R5bGUoXCJtYXJrZXItc3RhcnRcIikuaXNVcmxEZWZpbml0aW9uKCkmJihpPXRoaXMuc3R5bGUoXCJtYXJrZXItc3RhcnRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlWzBdWzBdLGVbMF1bMV0pLHRoaXMuc3R5bGUoXCJtYXJrZXItbWlkXCIpLmlzVXJsRGVmaW5pdGlvbigpKWZvcih2YXIgaT10aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5nZXREZWZpbml0aW9uKCksbj0xO248ZS5sZW5ndGgtMTtuKyspaS5yZW5kZXIodCxlW25dWzBdLGVbbl1bMV0pO3RoaXMuc3R5bGUoXCJtYXJrZXItZW5kXCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5nZXREZWZpbml0aW9uKCkpLnJlbmRlcih0LGVbZS5sZW5ndGgtMV1bMF0sZVtlLmxlbmd0aC0xXVsxXSl9fSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGF0aCgpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH19LEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3ZnPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlQ2xlYXJDb250ZXh0PXRoaXMuY2xlYXJDb250ZXh0LHRoaXMuY2xlYXJDb250ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZUNsZWFyQ29udGV4dCh0KSxBLlZpZXdQb3J0LlJlbW92ZUN1cnJlbnQoKX0sdGhpcy5iYXNlU2V0Q29udGV4dD10aGlzLnNldENvbnRleHQsdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe2lmKHQuc3Ryb2tlU3R5bGU9XCJyZ2JhKDAsMCwwLDApXCIsdC5saW5lQ2FwPVwiYnV0dFwiLHQubGluZUpvaW49XCJtaXRlclwiLHQubWl0ZXJMaW1pdD00LHQuY2FudmFzLnN0eWxlJiZ2b2lkIDAhPT10LmZvbnQmJnZvaWQgMCE9PXUuZ2V0Q29tcHV0ZWRTdHlsZSl7dC5mb250PXUuZ2V0Q29tcHV0ZWRTdHlsZSh0LmNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnRcIik7dmFyIGU9bmV3IEEuUHJvcGVydHkoXCJmb250U2l6ZVwiLEEuRm9udC5QYXJzZSh0LmZvbnQpLmZvbnRTaXplKTtlLmhhc1ZhbHVlKCkmJihBLnJvb3RFbVNpemU9QS5lbVNpemU9ZS50b1BpeGVscyhcInlcIikpfXRoaXMuYmFzZVNldENvbnRleHQodCksdGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9MCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9MCksdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKTt2YXIgaT1BLlZpZXdQb3J0LndpZHRoKCksbj1BLlZpZXdQb3J0LmhlaWdodCgpO2lmKHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiLCEwKS52YWx1ZT1cIjEwMCVcIiksdm9pZCAwPT09dGhpcy5yb290KXtpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO3ZhciBzPTAsYT0wO3RoaXMuYXR0cmlidXRlKFwicmVmWFwiKS5oYXNWYWx1ZSgpJiZ0aGlzLmF0dHJpYnV0ZShcInJlZllcIikuaGFzVmFsdWUoKSYmKHM9LXRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS50b1BpeGVscyhcInhcIiksYT0tdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnRvUGl4ZWxzKFwieVwiKSksXCJ2aXNpYmxlXCIhPXRoaXMuYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWVPckRlZmF1bHQoXCJoaWRkZW5cIikmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHMsYSksdC5saW5lVG8oaSxhKSx0LmxpbmVUbyhpLG4pLHQubGluZVRvKHMsbiksdC5jbG9zZVBhdGgoKSx0LmNsaXAoKSl9aWYoQS5WaWV3UG9ydC5TZXRDdXJyZW50KGksbiksdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLmhhc1ZhbHVlKCkpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLG89clswXSxsPXJbMV07aT1yWzJdLG49clszXSxBLkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLEEuVmlld1BvcnQud2lkdGgoKSxpLEEuVmlld1BvcnQuaGVpZ2h0KCksbixvLGwsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlLHRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS52YWx1ZSksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCksQS5WaWV3UG9ydC5TZXRDdXJyZW50KHJbMl0sclszXSl9fX0sQS5FbGVtZW50LnN2Zy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5yZWN0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxzPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSxhPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLHI9dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIik7aWYodGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYocj1hKSx0aGlzLmF0dHJpYnV0ZShcInJ5XCIpLmhhc1ZhbHVlKCkmJiF0aGlzLmF0dHJpYnV0ZShcInJ4XCIpLmhhc1ZhbHVlKCkmJihhPXIpLGE9TWF0aC5taW4oYSxuLzIpLHI9TWF0aC5taW4ocixzLzIpLG51bGwhPXQpe3ZhciBvPShNYXRoLnNxcnQoMiktMSkvMyo0O3QuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZSthLGkpLHQubGluZVRvKGUrbi1hLGkpLHQuYmV6aWVyQ3VydmVUbyhlK24tYStvKmEsaSxlK24saStyLW8qcixlK24saStyKSx0LmxpbmVUbyhlK24saStzLXIpLHQuYmV6aWVyQ3VydmVUbyhlK24saStzLXIrbypyLGUrbi1hK28qYSxpK3MsZStuLWEsaStzKSx0LmxpbmVUbyhlK2EsaStzKSx0LmJlemllckN1cnZlVG8oZSthLW8qYSxpK3MsZSxpK3MtcitvKnIsZSxpK3MtciksdC5saW5lVG8oZSxpK3IpLHQuYmV6aWVyQ3VydmVUbyhlLGkrci1vKnIsZSthLW8qYSxpLGUrYSxpKSx0LmNsb3NlUGF0aCgpfXJldHVybiBuZXcgQS5Cb3VuZGluZ0JveChlLGksZStuLGkrcyl9fSxBLkVsZW1lbnQucmVjdC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmNpcmNsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcInJcIikudG9QaXhlbHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5hcmMoZSxpLG4sMCwyKk1hdGguUEksITEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KGUtbixpLW4sZStuLGkrbil9fSxBLkVsZW1lbnQuY2lyY2xlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQuZWxsaXBzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPShNYXRoLnNxcnQoMiktMSkvMyo0LGk9dGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcInJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHMraSxhKSx0LmJlemllckN1cnZlVG8ocytpLGErZSpuLHMrZSppLGErbixzLGErbiksdC5iZXppZXJDdXJ2ZVRvKHMtZSppLGErbixzLWksYStlKm4scy1pLGEpLHQuYmV6aWVyQ3VydmVUbyhzLWksYS1lKm4scy1lKmksYS1uLHMsYS1uKSx0LmJlemllckN1cnZlVG8ocytlKmksYS1uLHMraSxhLWUqbixzK2ksYSksdC5jbG9zZVBhdGgoKSksbmV3IEEuQm91bmRpbmdCb3gocy1pLGEtbixzK2ksYStuKX19LEEuRWxlbWVudC5lbGxpcHNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQubGluZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm5bbmV3IEEuUG9pbnQodGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIikpLG5ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDJcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpKV19LHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldFBvaW50cygpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlWzBdLngsZVswXS55KSx0LmxpbmVUbyhlWzFdLngsZVsxXS55KSksbmV3IEEuQm91bmRpbmdCb3goZVswXS54LGVbMF0ueSxlWzFdLngsZVsxXS55KX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludHMoKSxlPXRbMF0uYW5nbGVUbyh0WzFdKTtyZXR1cm5bW3RbMF0sZV0sW3RbMV0sZV1dfX0sQS5FbGVtZW50LmxpbmUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wb2x5bGluZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wb2ludHM9QS5DcmVhdGVQYXRoKHRoaXMuYXR0cmlidXRlKFwicG9pbnRzXCIpLnZhbHVlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9bmV3IEEuQm91bmRpbmdCb3godGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KTtudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpKTtmb3IodmFyIGk9MTtpPHRoaXMucG9pbnRzLmxlbmd0aDtpKyspZS5hZGRQb2ludCh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpLG51bGwhPXQmJnQubGluZVRvKHRoaXMucG9pbnRzW2ldLngsdGhpcy5wb2ludHNbaV0ueSk7cmV0dXJuIGV9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7ZTx0aGlzLnBvaW50cy5sZW5ndGgtMTtlKyspdC5wdXNoKFt0aGlzLnBvaW50c1tlXSx0aGlzLnBvaW50c1tlXS5hbmdsZVRvKHRoaXMucG9pbnRzW2UrMV0pXSk7cmV0dXJuIDA8dC5sZW5ndGgmJnQucHVzaChbdGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLHRbdC5sZW5ndGgtMV1bMV1dKSx0fX0sQS5FbGVtZW50LnBvbHlsaW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWdvbj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBvbHlsaW5lLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VQYXRoPXRoaXMucGF0aCx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5iYXNlUGF0aCh0KTtyZXR1cm4gbnVsbCE9dCYmKHQubGluZVRvKHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSksdC5jbG9zZVBhdGgoKSksZX19LEEuRWxlbWVudC5wb2x5Z29uLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBvbHlsaW5lLEEuRWxlbWVudC5wYXRoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImRcIikudmFsdWU7ZT1lLnJlcGxhY2UoLywvZ20sXCIgXCIpO2Zvcih2YXIgaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhbTW1aekxsSGhWdkNjU3NRcVR0QWFdKShbXlxcc10pL2dtLFwiJDEgJDJcIik7Zm9yKGU9KGU9ZS5yZXBsYWNlKC8oW15cXHNdKShbTW1aekxsSGhWdkNjU3NRcVR0QWFdKS9nbSxcIiQxICQyXCIpKS5yZXBsYWNlKC8oWzAtOV0pKFsrXFwtXSkvZ20sXCIkMSAkMlwiKSxpPTA7aTwyO2krKyllPWUucmVwbGFjZSgvKFxcLlswLTldKikoXFwuKS9nbSxcIiQxICQyXCIpO2U9ZS5yZXBsYWNlKC8oW0FhXShcXHMrWzAtOV0rKXszfSlcXHMrKFswMV0pXFxzKihbMDFdKS9nbSxcIiQxICQzICQ0IFwiKSxlPUEuY29tcHJlc3NTcGFjZXMoZSksZT1BLnRyaW0oZSksdGhpcy5QYXRoUGFyc2VyPW5ldyBmdW5jdGlvbih0KXt0aGlzLnRva2Vucz10LnNwbGl0KFwiIFwiKSx0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5pPS0xLHRoaXMuY29tbWFuZD1cIlwiLHRoaXMucHJldmlvdXNDb21tYW5kPVwiXCIsdGhpcy5zdGFydD1uZXcgQS5Qb2ludCgwLDApLHRoaXMuY29udHJvbD1uZXcgQS5Qb2ludCgwLDApLHRoaXMuY3VycmVudD1uZXcgQS5Qb2ludCgwLDApLHRoaXMucG9pbnRzPVtdLHRoaXMuYW5nbGVzPVtdfSx0aGlzLmlzRW5kPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaT49dGhpcy50b2tlbnMubGVuZ3RoLTF9LHRoaXMuaXNDb21tYW5kT3JFbmQ9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuaXNFbmQoKXx8bnVsbCE9dGhpcy50b2tlbnNbdGhpcy5pKzFdLm1hdGNoKC9eW0EtWmEtel0kLyl9LHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQ9ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5jb21tYW5kKXtjYXNlXCJtXCI6Y2FzZVwibFwiOmNhc2VcImhcIjpjYXNlXCJ2XCI6Y2FzZVwiY1wiOmNhc2VcInNcIjpjYXNlXCJxXCI6Y2FzZVwidFwiOmNhc2VcImFcIjpjYXNlXCJ6XCI6cmV0dXJuITB9cmV0dXJuITF9LHRoaXMuZ2V0VG9rZW49ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pKyssdGhpcy50b2tlbnNbdGhpcy5pXX0sdGhpcy5nZXRTY2FsYXI9ZnVuY3Rpb24oKXtyZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmdldFRva2VuKCkpfSx0aGlzLm5leHRDb21tYW5kPWZ1bmN0aW9uKCl7dGhpcy5wcmV2aW91c0NvbW1hbmQ9dGhpcy5jb21tYW5kLHRoaXMuY29tbWFuZD10aGlzLmdldFRva2VuKCl9LHRoaXMuZ2V0UG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD1uZXcgQS5Qb2ludCh0aGlzLmdldFNjYWxhcigpLHRoaXMuZ2V0U2NhbGFyKCkpO3JldHVybiB0aGlzLm1ha2VBYnNvbHV0ZSh0KX0sdGhpcy5nZXRBc0NvbnRyb2xQb2ludD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnQoKTtyZXR1cm4gdGhpcy5jb250cm9sPXR9LHRoaXMuZ2V0QXNDdXJyZW50UG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY3VycmVudD10fSx0aGlzLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludD1mdW5jdGlvbigpe3JldHVyblwiY1wiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJxXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwidFwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpP3RoaXMuY3VycmVudDpuZXcgQS5Qb2ludCgyKnRoaXMuY3VycmVudC54LXRoaXMuY29udHJvbC54LDIqdGhpcy5jdXJyZW50LnktdGhpcy5jb250cm9sLnkpfSx0aGlzLm1ha2VBYnNvbHV0ZT1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5pc1JlbGF0aXZlQ29tbWFuZCgpJiYodC54Kz10aGlzLmN1cnJlbnQueCx0LnkrPXRoaXMuY3VycmVudC55KSx0fSx0aGlzLmFkZE1hcmtlcj1mdW5jdGlvbih0LGUsaSl7bnVsbCE9aSYmMDx0aGlzLmFuZ2xlcy5sZW5ndGgmJm51bGw9PXRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aC0xXSYmKHRoaXMuYW5nbGVzW3RoaXMuYW5nbGVzLmxlbmd0aC0xXT10aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0uYW5nbGVUbyhpKSksdGhpcy5hZGRNYXJrZXJBbmdsZSh0LG51bGw9PWU/bnVsbDplLmFuZ2xlVG8odCkpfSx0aGlzLmFkZE1hcmtlckFuZ2xlPWZ1bmN0aW9uKHQsZSl7dGhpcy5wb2ludHMucHVzaCh0KSx0aGlzLmFuZ2xlcy5wdXNoKGUpfSx0aGlzLmdldE1hcmtlclBvaW50cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50c30sdGhpcy5nZXRNYXJrZXJBbmdsZXM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MDt0PHRoaXMuYW5nbGVzLmxlbmd0aDt0KyspaWYobnVsbD09dGhpcy5hbmdsZXNbdF0pZm9yKHZhciBlPXQrMTtlPHRoaXMuYW5nbGVzLmxlbmd0aDtlKyspaWYobnVsbCE9dGhpcy5hbmdsZXNbZV0pe3RoaXMuYW5nbGVzW3RdPXRoaXMuYW5nbGVzW2VdO2JyZWFrfXJldHVybiB0aGlzLmFuZ2xlc319KGUpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLlBhdGhQYXJzZXI7ZS5yZXNldCgpO3ZhciBpPW5ldyBBLkJvdW5kaW5nQm94O2ZvcihudWxsIT10JiZ0LmJlZ2luUGF0aCgpOyFlLmlzRW5kKCk7KXN3aXRjaChlLm5leHRDb21tYW5kKCksZS5jb21tYW5kKXtjYXNlXCJNXCI6Y2FzZVwibVwiOnZhciBuPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtmb3IoZS5hZGRNYXJrZXIobiksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0Lm1vdmVUbyhuLngsbi55KSxlLnN0YXJ0PWUuY3VycmVudDshZS5pc0NvbW1hbmRPckVuZCgpOyluPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxlLmFkZE1hcmtlcihuLGUuc3RhcnQpLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5saW5lVG8obi54LG4ueSk7YnJlYWs7Y2FzZVwiTFwiOmNhc2VcImxcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcz1lLmN1cnJlbnQ7bj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixzKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpfWJyZWFrO2Nhc2VcIkhcIjpjYXNlXCJoXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIGE9bmV3IEEuUG9pbnQoKGUuaXNSZWxhdGl2ZUNvbW1hbmQoKT9lLmN1cnJlbnQueDowKStlLmdldFNjYWxhcigpLGUuY3VycmVudC55KTtlLmFkZE1hcmtlcihhLGUuY3VycmVudCksZS5jdXJyZW50PWEsaS5hZGRQb2ludChlLmN1cnJlbnQueCxlLmN1cnJlbnQueSksbnVsbCE9dCYmdC5saW5lVG8oZS5jdXJyZW50LngsZS5jdXJyZW50LnkpfWJyZWFrO2Nhc2VcIlZcIjpjYXNlXCJ2XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylhPW5ldyBBLlBvaW50KGUuY3VycmVudC54LChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lnk6MCkrZS5nZXRTY2FsYXIoKSksZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KTticmVhaztjYXNlXCJDXCI6Y2FzZVwiY1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciByPWUuY3VycmVudCxvPWUuZ2V0UG9pbnQoKSxsPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtlLmFkZE1hcmtlcihoLGwsbyksaS5hZGRCZXppZXJDdXJ2ZShyLngsci55LG8ueCxvLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LmJlemllckN1cnZlVG8oby54LG8ueSxsLngsbC55LGgueCxoLnkpfWJyZWFrO2Nhc2VcIlNcIjpjYXNlXCJzXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxvPWUuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJRXCI6Y2FzZVwicVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLGwpLGkuYWRkUXVhZHJhdGljQ3VydmUoci54LHIueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQucXVhZHJhdGljQ3VydmVUbyhsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIlRcIjpjYXNlXCJ0XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOylyPWUuY3VycmVudCxsPWUuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50KCksZS5jb250cm9sPWwsaD1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIoaCxsLGwpLGkuYWRkUXVhZHJhdGljQ3VydmUoci54LHIueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQucXVhZHJhdGljQ3VydmVUbyhsLngsbC55LGgueCxoLnkpO2JyZWFrO2Nhc2VcIkFcIjpjYXNlXCJhXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7cj1lLmN1cnJlbnQ7dmFyIHU9ZS5nZXRTY2FsYXIoKSxjPWUuZ2V0U2NhbGFyKCksZj1lLmdldFNjYWxhcigpKihNYXRoLlBJLzE4MCksbT1lLmdldFNjYWxhcigpLHA9ZS5nZXRTY2FsYXIoKSxkPShoPWUuZ2V0QXNDdXJyZW50UG9pbnQoKSxuZXcgQS5Qb2ludChNYXRoLmNvcyhmKSooci54LWgueCkvMitNYXRoLnNpbihmKSooci55LWgueSkvMiwtTWF0aC5zaW4oZikqKHIueC1oLngpLzIrTWF0aC5jb3MoZikqKHIueS1oLnkpLzIpKSx5PU1hdGgucG93KGQueCwyKS9NYXRoLnBvdyh1LDIpK01hdGgucG93KGQueSwyKS9NYXRoLnBvdyhjLDIpOzE8eSYmKHUqPU1hdGguc3FydCh5KSxjKj1NYXRoLnNxcnQoeSkpO3ZhciB2PShtPT1wPy0xOjEpKk1hdGguc3FydCgoTWF0aC5wb3codSwyKSpNYXRoLnBvdyhjLDIpLU1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpLU1hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKS8oTWF0aC5wb3codSwyKSpNYXRoLnBvdyhkLnksMikrTWF0aC5wb3coYywyKSpNYXRoLnBvdyhkLngsMikpKTtpc05hTih2KSYmKHY9MCk7dmFyIGc9bmV3IEEuUG9pbnQodip1KmQueS9jLHYqLWMqZC54L3UpLHg9bmV3IEEuUG9pbnQoKHIueCtoLngpLzIrTWF0aC5jb3MoZikqZy54LU1hdGguc2luKGYpKmcueSwoci55K2gueSkvMitNYXRoLnNpbihmKSpnLngrTWF0aC5jb3MoZikqZy55KSxiPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3codFswXSwyKStNYXRoLnBvdyh0WzFdLDIpKX0sUD1mdW5jdGlvbih0LGUpe3JldHVybih0WzBdKmVbMF0rdFsxXSplWzFdKS8oYih0KSpiKGUpKX0sRT1mdW5jdGlvbih0LGUpe3JldHVybih0WzBdKmVbMV08dFsxXSplWzBdPy0xOjEpKk1hdGguYWNvcyhQKHQsZSkpfSx3PUUoWzEsMF0sWyhkLngtZy54KS91LChkLnktZy55KS9jXSksQj1bKGQueC1nLngpL3UsKGQueS1nLnkpL2NdLEM9WygtZC54LWcueCkvdSwoLWQueS1nLnkpL2NdLFQ9RShCLEMpO1AoQixDKTw9LTEmJihUPU1hdGguUEkpLDE8PVAoQixDKSYmKFQ9MCk7dmFyIFY9MS1wPzE6LTEsTT13K1YqKFQvMiksUz1uZXcgQS5Qb2ludCh4LngrdSpNYXRoLmNvcyhNKSx4LnkrYypNYXRoLnNpbihNKSk7aWYoZS5hZGRNYXJrZXJBbmdsZShTLE0tVipNYXRoLlBJLzIpLGUuYWRkTWFya2VyQW5nbGUoaCxNLVYqTWF0aC5QSSksaS5hZGRQb2ludChoLngsaC55KSxudWxsIT10KXtQPWM8dT91OmM7dmFyIGs9Yzx1PzE6dS9jLEQ9Yzx1P2MvdToxO3QudHJhbnNsYXRlKHgueCx4LnkpLHQucm90YXRlKGYpLHQuc2NhbGUoayxEKSx0LmFyYygwLDAsUCx3LHcrVCwxLXApLHQuc2NhbGUoMS9rLDEvRCksdC5yb3RhdGUoLWYpLHQudHJhbnNsYXRlKC14LngsLXgueSl9fWJyZWFrO2Nhc2VcIlpcIjpjYXNlXCJ6XCI6bnVsbCE9dCYmaS54MSE9PWkueDImJmkueTEhPT1pLnkyJiZ0LmNsb3NlUGF0aCgpLGUuY3VycmVudD1lLnN0YXJ0fXJldHVybiBpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5QYXRoUGFyc2VyLmdldE1hcmtlclBvaW50cygpLGU9dGhpcy5QYXRoUGFyc2VyLmdldE1hcmtlckFuZ2xlcygpLGk9W10sbj0wO248dC5sZW5ndGg7bisrKWkucHVzaChbdFtuXSxlW25dXSk7cmV0dXJuIGl9fSxBLkVsZW1lbnQucGF0aC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBhdHRlcm49ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5jcmVhdGVQYXR0ZXJuPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiwhMCksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiwhMCkscz1uZXcgQS5FbGVtZW50LnN2ZztzLmF0dHJpYnV0ZXMudmlld0JveD1uZXcgQS5Qcm9wZXJ0eShcInZpZXdCb3hcIix0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLHMuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsaStcInB4XCIpLHMuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixuK1wicHhcIikscy5hdHRyaWJ1dGVzLnRyYW5zZm9ybT1uZXcgQS5Qcm9wZXJ0eShcInRyYW5zZm9ybVwiLHRoaXMuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiKS52YWx1ZSkscy5jaGlsZHJlbj10aGlzLmNoaWxkcmVuO3ZhciBhPXAoKTthLndpZHRoPWksYS5oZWlnaHQ9bjt2YXIgcj1hLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCkmJnIudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiwhMCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiLCEwKSk7Zm9yKHZhciBvPS0xO288PTE7bysrKWZvcih2YXIgbD0tMTtsPD0xO2wrKylyLnNhdmUoKSxzLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIixvKmEud2lkdGgpLHMuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLGwqYS5oZWlnaHQpLHMucmVuZGVyKHIpLHIucmVzdG9yZSgpO3JldHVybiB0LmNyZWF0ZVBhdHRlcm4oYSxcInJlcGVhdFwiKX19LEEuRWxlbWVudC5wYXR0ZXJuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXJrZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUmVuZGVyPXRoaXMucmVuZGVyLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQsZSxpKXtpZihlKXt0LnRyYW5zbGF0ZShlLngsZS55KSxcImF1dG9cIj09dGhpcy5hdHRyaWJ1dGUoXCJvcmllbnRcIikudmFsdWVPckRlZmF1bHQoXCJhdXRvXCIpJiZ0LnJvdGF0ZShpKSxcInN0cm9rZVdpZHRoXCI9PXRoaXMuYXR0cmlidXRlKFwibWFya2VyVW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJzdHJva2VXaWR0aFwiKSYmdC5zY2FsZSh0LmxpbmVXaWR0aCx0LmxpbmVXaWR0aCksdC5zYXZlKCk7dmFyIG49bmV3IEEuRWxlbWVudC5zdmc7bi5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWD1uZXcgQS5Qcm9wZXJ0eShcInJlZlhcIix0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudmFsdWUpLG4uYXR0cmlidXRlcy5yZWZZPW5ldyBBLlByb3BlcnR5KFwicmVmWVwiLHRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIm1hcmtlcldpZHRoXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJIZWlnaHRcIikudmFsdWUpLG4uYXR0cmlidXRlcy5maWxsPW5ldyBBLlByb3BlcnR5KFwiZmlsbFwiLHRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcImJsYWNrXCIpKSxuLmF0dHJpYnV0ZXMuc3Ryb2tlPW5ldyBBLlByb3BlcnR5KFwic3Ryb2tlXCIsdGhpcy5hdHRyaWJ1dGUoXCJzdHJva2VcIikudmFsdWVPckRlZmF1bHQoXCJub25lXCIpKSxuLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW4sbi5yZW5kZXIodCksdC5yZXN0b3JlKCksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUoMS90LmxpbmVXaWR0aCwxL3QubGluZVdpZHRoKSxcImF1dG9cIj09dGhpcy5hdHRyaWJ1dGUoXCJvcmllbnRcIikudmFsdWVPckRlZmF1bHQoXCJhdXRvXCIpJiZ0LnJvdGF0ZSgtaSksdC50cmFuc2xhdGUoLWUueCwtZS55KX19fSxBLkVsZW1lbnQubWFya2VyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5kZWZzPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5kZWZzLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5HcmFkaWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5zdG9wcz1bXTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5jaGlsZHJlbltlXTtcInN0b3BcIj09aS50eXBlJiZ0aGlzLnN0b3BzLnB1c2goaSl9dGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbigpe30sdGhpcy5ncmFkaWVudFVuaXRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcIm9iamVjdEJvdW5kaW5nQm94XCIpfSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQ9W1wiZ3JhZGllbnRVbml0c1wiXSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0Lmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdFtlXTshdGhpcy5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmdC5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmKHRoaXMuYXR0cmlidXRlKGksITApLnZhbHVlPXQuYXR0cmlidXRlKGkpLnZhbHVlKX19LHRoaXMuY3JlYXRlR3JhZGllbnQ9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXM7dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSYmKG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXIobikpO3ZhciBzPWZ1bmN0aW9uKHQpe3JldHVybiBpLmhhc1ZhbHVlKCk/bmV3IEEuUHJvcGVydHkoXCJjb2xvclwiLHQpLmFkZE9wYWNpdHkoaSkudmFsdWU6dH0sYT10aGlzLmdldEdyYWRpZW50KHQsZSk7aWYobnVsbD09YSlyZXR1cm4gcyhuLnN0b3BzW24uc3RvcHMubGVuZ3RoLTFdLmNvbG9yKTtmb3IodmFyIHI9MDtyPG4uc3RvcHMubGVuZ3RoO3IrKylhLmFkZENvbG9yU3RvcChuLnN0b3BzW3JdLm9mZnNldCxzKG4uc3RvcHNbcl0uY29sb3IpKTtpZih0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLmhhc1ZhbHVlKCkpe3ZhciBvPUEuVmlld1BvcnQudmlld1BvcnRzWzBdLGw9bmV3IEEuRWxlbWVudC5yZWN0O2wuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLC1BLk1BWF9WSVJUVUFMX1BJWEVMUy8zKSxsLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyksbC5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLEEuTUFYX1ZJUlRVQUxfUElYRUxTKTt2YXIgaD1uZXcgQS5FbGVtZW50Lmc7aC5hdHRyaWJ1dGVzLnRyYW5zZm9ybT1uZXcgQS5Qcm9wZXJ0eShcInRyYW5zZm9ybVwiLHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIikudmFsdWUpLGguY2hpbGRyZW49W2xdO3ZhciB1PW5ldyBBLkVsZW1lbnQuc3ZnO3UuYXR0cmlidXRlcy54PW5ldyBBLlByb3BlcnR5KFwieFwiLDApLHUuYXR0cmlidXRlcy55PW5ldyBBLlByb3BlcnR5KFwieVwiLDApLHUuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsby53aWR0aCksdS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLG8uaGVpZ2h0KSx1LmNoaWxkcmVuPVtoXTt2YXIgYz1wKCk7Yy53aWR0aD1vLndpZHRoLGMuaGVpZ2h0PW8uaGVpZ2h0O3ZhciBmPWMuZ2V0Q29udGV4dChcIjJkXCIpO3JldHVybiBmLmZpbGxTdHlsZT1hLHUucmVuZGVyKGYpLGYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpfXJldHVybiBhfX0sQS5FbGVtZW50LkdyYWRpZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubGluZWFyR3JhZGllbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5HcmFkaWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieDFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ5MVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTJcIiksdGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbih0LGUpe3ZhciBpPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/ZS5nZXRCb3VuZGluZ0JveCh0KTpudWxsO3RoaXMuYXR0cmlidXRlKFwieDFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcIngyXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTJcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwieDFcIiwhMCkudmFsdWU9MCx0aGlzLmF0dHJpYnV0ZShcInkxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ4MlwiLCEwKS52YWx1ZT0xLHRoaXMuYXR0cmlidXRlKFwieTJcIiwhMCkudmFsdWU9MCk7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwieTFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLnRvUGl4ZWxzKFwieVwiKSxhPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSxyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG49PWEmJnM9PXI/bnVsbDp0LmNyZWF0ZUxpbmVhckdyYWRpZW50KG4scyxhLHIpfX0sQS5FbGVtZW50LmxpbmVhckdyYWRpZW50LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkdyYWRpZW50QmFzZSxBLkVsZW1lbnQucmFkaWFsR3JhZGllbnQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5HcmFkaWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3hcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJjeVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInJcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeFwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImZ5XCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmdldEJvdW5kaW5nQm94KHQpO3RoaXMuYXR0cmlidXRlKFwiY3hcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3hcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJjeVwiLCEwKS52YWx1ZT1cIjUwJVwiKSx0aGlzLmF0dHJpYnV0ZShcInJcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiclwiLCEwKS52YWx1ZT1cIjUwJVwiKTt2YXIgbj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcImN4XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIikscz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLGE9bixyPXM7dGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5oYXNWYWx1ZSgpJiYoYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcImZ4XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS50b1BpeGVscyhcInhcIikpLHRoaXMuYXR0cmlidXRlKFwiZnlcIikuaGFzVmFsdWUoKSYmKHI9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiZnlcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIG89XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT8oaS53aWR0aCgpK2kuaGVpZ2h0KCkpLzIqdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoYSxyLDAsbixzLG8pfX0sQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkdyYWRpZW50QmFzZSxBLkVsZW1lbnQuc3RvcD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm9mZnNldD10aGlzLmF0dHJpYnV0ZShcIm9mZnNldFwiKS5udW1WYWx1ZSgpLHRoaXMub2Zmc2V0PDAmJih0aGlzLm9mZnNldD0wKSwxPHRoaXMub2Zmc2V0JiYodGhpcy5vZmZzZXQ9MSk7dmFyIGU9dGhpcy5zdHlsZShcInN0b3AtY29sb3JcIiwhMCk7XCJcIj09PWUudmFsdWUmJihlLnZhbHVlPVwiIzAwMFwiKSx0aGlzLnN0eWxlKFwic3RvcC1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkmJihlPWUuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3RvcC1vcGFjaXR5XCIpKSksdGhpcy5jb2xvcj1lLnZhbHVlfSxBLkVsZW1lbnQuc3RvcC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuQW5pbWF0ZUJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksQS5BbmltYXRpb25zLnB1c2godGhpcyksdGhpcy5kdXJhdGlvbj0wLHRoaXMuYmVnaW49dGhpcy5hdHRyaWJ1dGUoXCJiZWdpblwiKS50b01pbGxpc2Vjb25kcygpLHRoaXMubWF4RHVyYXRpb249dGhpcy5iZWdpbit0aGlzLmF0dHJpYnV0ZShcImR1clwiKS50b01pbGxpc2Vjb25kcygpLHRoaXMuZ2V0UHJvcGVydHk9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJpYnV0ZShcImF0dHJpYnV0ZVR5cGVcIikudmFsdWUsZT10aGlzLmF0dHJpYnV0ZShcImF0dHJpYnV0ZU5hbWVcIikudmFsdWU7cmV0dXJuXCJDU1NcIj09dD90aGlzLnBhcmVudC5zdHlsZShlLCEwKTp0aGlzLnBhcmVudC5hdHRyaWJ1dGUoZSwhMCl9LHRoaXMuaW5pdGlhbFZhbHVlPW51bGwsdGhpcy5pbml0aWFsVW5pdHM9XCJcIix0aGlzLnJlbW92ZWQ9ITEsdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSx0aGlzLnVwZGF0ZT1mdW5jdGlvbih0KXtpZihudWxsPT10aGlzLmluaXRpYWxWYWx1ZSYmKHRoaXMuaW5pdGlhbFZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZSx0aGlzLmluaXRpYWxVbml0cz10aGlzLmdldFByb3BlcnR5KCkuZ2V0VW5pdHMoKSksdGhpcy5kdXJhdGlvbj50aGlzLm1heER1cmF0aW9uKXtpZihcImluZGVmaW5pdGVcIj09dGhpcy5hdHRyaWJ1dGUoXCJyZXBlYXRDb3VudFwiKS52YWx1ZXx8XCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0RHVyXCIpLnZhbHVlKXRoaXMuZHVyYXRpb249MDtlbHNlIGlmKFwiZnJlZXplXCIhPXRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcInJlbW92ZVwiKXx8dGhpcy5mcm96ZW4pe2lmKFwicmVtb3ZlXCI9PXRoaXMuYXR0cmlidXRlKFwiZmlsbFwiKS52YWx1ZU9yRGVmYXVsdChcInJlbW92ZVwiKSYmIXRoaXMucmVtb3ZlZClyZXR1cm4gdGhpcy5yZW1vdmVkPSEwLHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZT10aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW4/dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWU6dGhpcy5pbml0aWFsVmFsdWUsITB9ZWxzZSB0aGlzLmZyb3plbj0hMCx0aGlzLnBhcmVudC5hbmltYXRpb25Gcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuVmFsdWU9dGhpcy5nZXRQcm9wZXJ0eSgpLnZhbHVlO3JldHVybiExfXRoaXMuZHVyYXRpb249dGhpcy5kdXJhdGlvbit0O3ZhciBlPSExO2lmKHRoaXMuYmVnaW48dGhpcy5kdXJhdGlvbil7dmFyIGk9dGhpcy5jYWxjVmFsdWUoKTt0aGlzLmF0dHJpYnV0ZShcInR5cGVcIikuaGFzVmFsdWUoKSYmKGk9dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlK1wiKFwiK2krXCIpXCIpLHRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZT1pLGU9ITB9cmV0dXJuIGV9LHRoaXMuZnJvbT10aGlzLmF0dHJpYnV0ZShcImZyb21cIiksdGhpcy50bz10aGlzLmF0dHJpYnV0ZShcInRvXCIpLHRoaXMudmFsdWVzPXRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkmJih0aGlzLnZhbHVlcy52YWx1ZT10aGlzLnZhbHVlcy52YWx1ZS5zcGxpdChcIjtcIikpLHRoaXMucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgdD17cHJvZ3Jlc3M6KHRoaXMuZHVyYXRpb24tdGhpcy5iZWdpbikvKHRoaXMubWF4RHVyYXRpb24tdGhpcy5iZWdpbil9O2lmKHRoaXMudmFsdWVzLmhhc1ZhbHVlKCkpe3ZhciBlPXQucHJvZ3Jlc3MqKHRoaXMudmFsdWVzLnZhbHVlLmxlbmd0aC0xKSxpPU1hdGguZmxvb3IoZSksbj1NYXRoLmNlaWwoZSk7dC5mcm9tPW5ldyBBLlByb3BlcnR5KFwiZnJvbVwiLHBhcnNlRmxvYXQodGhpcy52YWx1ZXMudmFsdWVbaV0pKSx0LnRvPW5ldyBBLlByb3BlcnR5KFwidG9cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW25dKSksdC5wcm9ncmVzcz0oZS1pKS8obi1pKX1lbHNlIHQuZnJvbT10aGlzLmZyb20sdC50bz10aGlzLnRvO3JldHVybiB0fX0sQS5FbGVtZW50LkFuaW1hdGVCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5hbmltYXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5wcm9ncmVzcygpO3JldHVybiB0LmZyb20ubnVtVmFsdWUoKSsodC50by5udW1WYWx1ZSgpLXQuZnJvbS5udW1WYWx1ZSgpKSp0LnByb2dyZXNzK3RoaXMuaW5pdGlhbFVuaXRzfX0sQS5FbGVtZW50LmFuaW1hdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuQW5pbWF0ZUJhc2UsQS5FbGVtZW50LmFuaW1hdGVDb2xvcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPW5ldyBtKHQuZnJvbS52YWx1ZSksaT1uZXcgbSh0LnRvLnZhbHVlKTtpZihlLm9rJiZpLm9rKXt2YXIgbj1lLnIrKGkuci1lLnIpKnQucHJvZ3Jlc3Mscz1lLmcrKGkuZy1lLmcpKnQucHJvZ3Jlc3MsYT1lLmIrKGkuYi1lLmIpKnQucHJvZ3Jlc3M7cmV0dXJuXCJyZ2IoXCIrcGFyc2VJbnQobiwxMCkrXCIsXCIrcGFyc2VJbnQocywxMCkrXCIsXCIrcGFyc2VJbnQoYSwxMCkrXCIpXCJ9cmV0dXJuIHRoaXMuYXR0cmlidXRlKFwiZnJvbVwiKS52YWx1ZX19LEEuRWxlbWVudC5hbmltYXRlQ29sb3IucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuQW5pbWF0ZUJhc2UsQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5wcm9ncmVzcygpLGU9QS5Ub051bWJlckFycmF5KHQuZnJvbS52YWx1ZSksaT1BLlRvTnVtYmVyQXJyYXkodC50by52YWx1ZSksbj1cIlwiLHM9MDtzPGUubGVuZ3RoO3MrKyluKz1lW3NdKyhpW3NdLWVbc10pKnQucHJvZ3Jlc3MrXCIgXCI7cmV0dXJuIG59fSxBLkVsZW1lbnQuYW5pbWF0ZVRyYW5zZm9ybS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5hbmltYXRlLEEuRWxlbWVudC5mb250PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLmlzUlRMPSExLHRoaXMuaXNBcmFiaWM9ITEsdGhpcy5mb250RmFjZT1udWxsLHRoaXMubWlzc2luZ0dseXBoPW51bGwsdGhpcy5nbHlwaHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJmb250LWZhY2VcIj09aS50eXBlPyh0aGlzLmZvbnRGYWNlPWkpLnN0eWxlKFwiZm9udC1mYW1pbHlcIikuaGFzVmFsdWUoKSYmKEEuRGVmaW5pdGlvbnNbaS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLnZhbHVlXT10aGlzKTpcIm1pc3NpbmctZ2x5cGhcIj09aS50eXBlP3RoaXMubWlzc2luZ0dseXBoPWk6XCJnbHlwaFwiPT1pLnR5cGUmJihcIlwiIT1pLmFyYWJpY0Zvcm0/KHRoaXMuaXNSVEw9ITAsdGhpcy5pc0FyYWJpYz0hMCx2b2lkIDA9PT10aGlzLmdseXBoc1tpLnVuaWNvZGVdJiYodGhpcy5nbHlwaHNbaS51bmljb2RlXT1bXSksdGhpcy5nbHlwaHNbaS51bmljb2RlXVtpLmFyYWJpY0Zvcm1dPWkpOnRoaXMuZ2x5cGhzW2kudW5pY29kZV09aSl9fSxBLkVsZW1lbnQuZm9udC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZm9udGZhY2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hc2NlbnQ9dGhpcy5hdHRyaWJ1dGUoXCJhc2NlbnRcIikudmFsdWUsdGhpcy5kZXNjZW50PXRoaXMuYXR0cmlidXRlKFwiZGVzY2VudFwiKS52YWx1ZSx0aGlzLnVuaXRzUGVyRW09dGhpcy5hdHRyaWJ1dGUoXCJ1bml0cy1wZXItZW1cIikubnVtVmFsdWUoKX0sQS5FbGVtZW50LmZvbnRmYWNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5taXNzaW5nZ2x5cGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wYXRoLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD0wfSxBLkVsZW1lbnQubWlzc2luZ2dseXBoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LnBhdGgsQS5FbGVtZW50LmdseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9dGhpcy5hdHRyaWJ1dGUoXCJob3Jpei1hZHYteFwiKS5udW1WYWx1ZSgpLHRoaXMudW5pY29kZT10aGlzLmF0dHJpYnV0ZShcInVuaWNvZGVcIikudmFsdWUsdGhpcy5hcmFiaWNGb3JtPXRoaXMuYXR0cmlidXRlKFwiYXJhYmljLWZvcm1cIikudmFsdWV9LEEuRWxlbWVudC5nbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC50ZXh0PWZ1bmN0aW9uKHQpe3RoaXMuY2FwdHVyZVRleHROb2Rlcz0hMCx0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VTZXRDb250ZXh0KHQpO3ZhciBlPXRoaXMuc3R5bGUoXCJkb21pbmFudC1iYXNlbGluZVwiKS50b1RleHRCYXNlbGluZSgpO251bGw9PWUmJihlPXRoaXMuc3R5bGUoXCJhbGlnbm1lbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKSksbnVsbCE9ZSYmKHQudGV4dEJhc2VsaW5lPWUpfSx0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcz1mdW5jdGlvbih0KXt0aGlzLng9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLnk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSx0aGlzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJih0aGlzLngrPXRoaXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJih0aGlzLnkrPXRoaXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSx0aGlzLngrPXRoaXMuZ2V0QW5jaG9yRGVsdGEodCx0aGlzLDApfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT1udWxsLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5nZXRDaGlsZEJvdW5kaW5nQm94KHQsdGhpcyx0aGlzLGkpO251bGw9PWU/ZT1uOmUuYWRkQm91bmRpbmdCb3gobil9cmV0dXJuIGV9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXModCk7Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspdGhpcy5yZW5kZXJDaGlsZCh0LHRoaXMsdGhpcyxlKX0sdGhpcy5nZXRBbmNob3JEZWx0YT1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpcy5zdHlsZShcInRleHQtYW5jaG9yXCIpLnZhbHVlT3JEZWZhdWx0KFwic3RhcnRcIik7aWYoXCJzdGFydFwiIT1uKXtmb3IodmFyIHM9MCxhPWk7YTxlLmNoaWxkcmVuLmxlbmd0aDthKyspe3ZhciByPWUuY2hpbGRyZW5bYV07aWYoaTxhJiZyLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSlicmVhaztzKz1yLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpfXJldHVybi0xKihcImVuZFwiPT1uP3M6cy8yKX1yZXR1cm4gMH0sdGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzPWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPWkuY2hpbGRyZW5bbl07cmV0dXJuIHMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpPyhzLng9cy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKStlLmdldEFuY2hvckRlbHRhKHQsaSxuKSxzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihzLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSk6KHMuYXR0cmlidXRlKFwiZHhcIikuaGFzVmFsdWUoKSYmKGUueCs9cy5hdHRyaWJ1dGUoXCJkeFwiKS50b1BpeGVscyhcInhcIikpLHMueD1lLngpLGUueD1zLngrcy5tZWFzdXJlVGV4dCh0KSxzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKT8ocy55PXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikscy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYocy55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkpOihzLmF0dHJpYnV0ZShcImR5XCIpLmhhc1ZhbHVlKCkmJihlLnkrPXMuYXR0cmlidXRlKFwiZHlcIikudG9QaXhlbHMoXCJ5XCIpKSxzLnk9ZS55KSxlLnk9cy55LHN9LHRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbiksYT1zLmdldEJvdW5kaW5nQm94KHQpO2ZvcihuPTA7bjxzLmNoaWxkcmVuLmxlbmd0aDtuKyspe3ZhciByPWUuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LGUscyxuKTthLmFkZEJvdW5kaW5nQm94KHIpfXJldHVybiBhfSx0aGlzLnJlbmRlckNoaWxkPWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPXRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcyh0LGUsaSxuKTtmb3Iocy5yZW5kZXIodCksbj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKWUucmVuZGVyQ2hpbGQodCxlLHMsbil9fSxBLkVsZW1lbnQudGV4dC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldEdseXBoPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj1lW2ldLHM9bnVsbDtpZih0LmlzQXJhYmljKXt2YXIgYT1cImlzb2xhdGVkXCI7KDA9PWl8fFwiIFwiPT1lW2ktMV0pJiZpPGUubGVuZ3RoLTImJlwiIFwiIT1lW2krMV0mJihhPVwidGVybWluYWxcIiksMDxpJiZcIiBcIiE9ZVtpLTFdJiZpPGUubGVuZ3RoLTImJlwiIFwiIT1lW2krMV0mJihhPVwibWVkaWFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmKGk9PWUubGVuZ3RoLTF8fFwiIFwiPT1lW2krMV0pJiYoYT1cImluaXRpYWxcIiksdm9pZCAwIT09dC5nbHlwaHNbbl0mJm51bGw9PShzPXQuZ2x5cGhzW25dW2FdKSYmXCJnbHlwaFwiPT10LmdseXBoc1tuXS50eXBlJiYocz10LmdseXBoc1tuXSl9ZWxzZSBzPXQuZ2x5cGhzW25dO3JldHVybiBudWxsPT1zJiYocz10Lm1pc3NpbmdHbHlwaCksc30sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmdldERlZmluaXRpb24oKTtpZihudWxsPT1lKVwic3Ryb2tlXCI9PXQucGFpbnRPcmRlcj8oXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2VUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpKTooXCJcIiE9dC5maWxsU3R5bGUmJnQuZmlsbFRleHQoQS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSksdGhpcy54LHRoaXMueSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2VUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpKTtlbHNle3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc3R5bGVcIikudmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTdHlsZSkscz10aGlzLmdldFRleHQoKTtlLmlzUlRMJiYocz1zLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtmb3IodmFyIGE9QS5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZShcImR4XCIpLnZhbHVlKSxyPTA7cjxzLmxlbmd0aDtyKyspe3ZhciBvPXRoaXMuZ2V0R2x5cGgoZSxzLHIpLGw9aS9lLmZvbnRGYWNlLnVuaXRzUGVyRW07dC50cmFuc2xhdGUodGhpcy54LHRoaXMueSksdC5zY2FsZShsLC1sKTt2YXIgaD10LmxpbmVXaWR0aDt0LmxpbmVXaWR0aD10LmxpbmVXaWR0aCplLmZvbnRGYWNlLnVuaXRzUGVyRW0vaSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLjQsMSwwLDApLG8ucmVuZGVyKHQpLFwiaXRhbGljXCI9PW4mJnQudHJhbnNmb3JtKDEsMCwtLjQsMSwwLDApLHQubGluZVdpZHRoPWgsdC5zY2FsZSgxL2wsLTEvbCksdC50cmFuc2xhdGUoLXRoaXMueCwtdGhpcy55KSx0aGlzLngrPWkqKG8uaG9yaXpBZHZYfHxlLmhvcml6QWR2WCkvZS5mb250RmFjZS51bml0c1BlckVtLHZvaWQgMD09PWFbcl18fGlzTmFOKGFbcl0pfHwodGhpcy54Kz1hW3JdKX19fSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXt9LHRoaXMubWVhc3VyZVRleHRSZWN1cnNpdmU9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMubWVhc3VyZVRleHQodCksaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUrPXRoaXMuY2hpbGRyZW5baV0ubWVhc3VyZVRleHRSZWN1cnNpdmUodCk7cmV0dXJuIGV9LHRoaXMubWVhc3VyZVRleHQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9ZSl7dmFyIGk9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKSxuPTAscz10aGlzLmdldFRleHQoKTtlLmlzUlRMJiYocz1zLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtmb3IodmFyIGE9QS5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZShcImR4XCIpLnZhbHVlKSxyPTA7cjxzLmxlbmd0aDtyKyspbis9KHRoaXMuZ2V0R2x5cGgoZSxzLHIpLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpKmkvZS5mb250RmFjZS51bml0c1BlckVtLHZvaWQgMD09PWFbcl18fGlzTmFOKGFbcl0pfHwobis9YVtyXSk7cmV0dXJuIG59dmFyIG89QS5jb21wcmVzc1NwYWNlcyh0aGlzLmdldFRleHQoKSk7aWYoIXQubWVhc3VyZVRleHQpcmV0dXJuIDEwKm8ubGVuZ3RoO3Quc2F2ZSgpLHRoaXMuc2V0Q29udGV4dCh0LCEwKTt2YXIgbD10Lm1lYXN1cmVUZXh0KG8pLndpZHRoO3JldHVybiB0LnJlc3RvcmUoKSxsfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSk7cmV0dXJuIG5ldyBBLkJvdW5kaW5nQm94KHRoaXMueCx0aGlzLnktZSx0aGlzLngrdGhpcy5tZWFzdXJlVGV4dCh0KSx0aGlzLnkpfX0sQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC50c3Bhbj1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMudGV4dD1BLmNvbXByZXNzU3BhY2VzKHQudmFsdWV8fHQudGV4dHx8dC50ZXh0Q29udGVudHx8XCJcIiksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIDA8dGhpcy5jaGlsZHJlbi5sZW5ndGg/XCJcIjp0aGlzLnRleHR9fSxBLkVsZW1lbnQudHNwYW4ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC50cmVmPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9dClyZXR1cm4gdC5jaGlsZHJlblswXS5nZXRUZXh0KCl9fSxBLkVsZW1lbnQudHJlZi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmE9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuaGFzVGV4dD0wPHQuY2hpbGROb2Rlcy5sZW5ndGg7Zm9yKHZhciBlPTA7ZTx0LmNoaWxkTm9kZXMubGVuZ3RoO2UrKykzIT10LmNoaWxkTm9kZXNbZV0ubm9kZVR5cGUmJih0aGlzLmhhc1RleHQ9ITEpO3RoaXMudGV4dD10aGlzLmhhc1RleHQ/dC5jaGlsZE5vZGVzWzBdLnZhbHVlfHx0LmNoaWxkTm9kZXNbMF0uZGF0YTpcIlwiLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHR9LHRoaXMuYmFzZVJlbmRlckNoaWxkcmVuPXRoaXMucmVuZGVyQ2hpbGRyZW4sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtpZih0aGlzLmhhc1RleHQpe3RoaXMuYmFzZVJlbmRlckNoaWxkcmVuKHQpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO0EuTW91c2UuY2hlY2tCb3VuZGluZ0JveCh0aGlzLG5ldyBBLkJvdW5kaW5nQm94KHRoaXMueCx0aGlzLnktZS50b1BpeGVscyhcInlcIiksdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KSl9ZWxzZSBpZigwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoKXt2YXIgaT1uZXcgQS5FbGVtZW50Lmc7aS5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLGkucGFyZW50PXRoaXMsaS5yZW5kZXIodCl9fSx0aGlzLm9uY2xpY2s9ZnVuY3Rpb24oKXt1Lm9wZW4odGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWUpfSx0aGlzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKCl7QS5jdHguY2FudmFzLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIn19LEEuRWxlbWVudC5hLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQuaW1hZ2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgZT10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZTtpZihcIlwiIT1lKXt2YXIgYT1lLm1hdGNoKC9cXC5zdmckLyk7aWYoQS5JbWFnZXMucHVzaCh0aGlzKSx0aGlzLmxvYWRlZD0hMSxhKXRoaXMuaW1nPUEuYWpheChlKSx0aGlzLmxvYWRlZD0hMDtlbHNle3RoaXMuaW1nPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksMT09QS5vcHRzLnVzZUNPUlMmJih0aGlzLmltZy5jcm9zc09yaWdpbj1cIkFub255bW91c1wiKTt2YXIgcj10aGlzO3RoaXMuaW1nLm9ubG9hZD1mdW5jdGlvbigpe3IubG9hZGVkPSEwfSx0aGlzLmltZy5vbmVycm9yPWZ1bmN0aW9uKCl7QS5sb2coJ0VSUk9SOiBpbWFnZSBcIicrZSsnXCIgbm90IGZvdW5kJyksci5sb2FkZWQ9ITB9LHRoaXMuaW1nLnNyYz1lfXRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxzPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTswIT1uJiYwIT1zJiYodC5zYXZlKCksYT90LmRyYXdTdmcodGhpcy5pbWcsZSxpLG4scyk6KHQudHJhbnNsYXRlKGUsaSksQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxuLHRoaXMuaW1nLndpZHRoLHMsdGhpcy5pbWcuaGVpZ2h0LDAsMCksci5sb2FkZWQmJih2b2lkIDA9PT10aGlzLmltZy5jb21wbGV0ZXx8dGhpcy5pbWcuY29tcGxldGUpJiZ0LmRyYXdJbWFnZSh0aGlzLmltZywwLDApKSx0LnJlc3RvcmUoKSl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGU9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0LGUsdCtpLGUrbil9fX0sQS5FbGVtZW50LmltYWdlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50Lmc9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1uZXcgQS5Cb3VuZGluZ0JveCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspZS5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW2ldLmdldEJvdW5kaW5nQm94KHQpKTtyZXR1cm4gZX19LEEuRWxlbWVudC5nLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN5bWJvbD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5zeW1ib2wucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuc3R5bGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7Zm9yKHZhciBlPVwiXCIsaT0wO2k8dC5jaGlsZE5vZGVzLmxlbmd0aDtpKyspZSs9dC5jaGlsZE5vZGVzW2ldLmRhdGE7ZT1lLnJlcGxhY2UoLyhcXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXipcXC9dfFtcXHJcXG5dKSkpKlxcKitcXC8pfCheW1xcc10qXFwvXFwvLiopL2dtLFwiXCIpO3ZhciBuPShlPUEuY29tcHJlc3NTcGFjZXMoZSkpLnNwbGl0KFwifVwiKTtmb3IoaT0wO2k8bi5sZW5ndGg7aSsrKWlmKFwiXCIhPUEudHJpbShuW2ldKSlmb3IodmFyIHM9bltpXS5zcGxpdChcIntcIiksYT1zWzBdLnNwbGl0KFwiLFwiKSxyPXNbMV0uc3BsaXQoXCI7XCIpLG89MDtvPGEubGVuZ3RoO28rKyl7dmFyIGw9QS50cmltKGFbb10pO2lmKFwiXCIhPWwpe2Zvcih2YXIgaD1BLlN0eWxlc1tsXXx8e30sdT0wO3U8ci5sZW5ndGg7dSsrKXt2YXIgYz1yW3VdLmluZGV4T2YoXCI6XCIpLGY9clt1XS5zdWJzdHIoMCxjKSxtPXJbdV0uc3Vic3RyKGMrMSxyW3VdLmxlbmd0aC1jKTtudWxsIT1mJiZudWxsIT1tJiYoaFtBLnRyaW0oZildPW5ldyBBLlByb3BlcnR5KEEudHJpbShmKSxBLnRyaW0obSkpKX1pZihBLlN0eWxlc1tsXT1oLEEuU3R5bGVzU3BlY2lmaWNpdHlbbF09dyhsKSxcIkBmb250LWZhY2VcIj09bClmb3IodmFyIHA9aFtcImZvbnQtZmFtaWx5XCJdLnZhbHVlLnJlcGxhY2UoL1wiL2csXCJcIiksZD1oLnNyYy52YWx1ZS5zcGxpdChcIixcIikseT0wO3k8ZC5sZW5ndGg7eSsrKWlmKDA8ZFt5XS5pbmRleE9mKCdmb3JtYXQoXCJzdmdcIiknKSlmb3IodmFyIHY9ZFt5XS5pbmRleE9mKFwidXJsXCIpLGc9ZFt5XS5pbmRleE9mKFwiKVwiLHYpLHg9ZFt5XS5zdWJzdHIodis1LGctdi02KSxiPUEucGFyc2VYbWwoQS5hamF4KHgpKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImZvbnRcIiksUD0wO1A8Yi5sZW5ndGg7UCsrKXt2YXIgRT1BLkNyZWF0ZUVsZW1lbnQoYltQXSk7QS5EZWZpbml0aW9uc1twXT1FfX19fSxBLkVsZW1lbnQuc3R5bGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LnVzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLDApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSgwLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikpfTt2YXIgbj10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7dGhpcy5wYXRoPWZ1bmN0aW9uKHQpe251bGwhPW4mJm4ucGF0aCh0KX0sdGhpcy5lbGVtZW50VHJhbnNmb3JtPWZ1bmN0aW9uKCl7aWYobnVsbCE9biYmbi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpKXJldHVybiBuZXcgQS5UcmFuc2Zvcm0obi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7aWYobnVsbCE9bilyZXR1cm4gbi5nZXRCb3VuZGluZ0JveCh0KX0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtpZihudWxsIT1uKXt2YXIgZT1uO1wic3ltYm9sXCI9PW4udHlwZSYmKChlPW5ldyBBLkVsZW1lbnQuc3ZnKS50eXBlPVwic3ZnXCIsZS5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsbi5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMucHJlc2VydmVBc3BlY3RSYXRpbz1uZXcgQS5Qcm9wZXJ0eShcInByZXNlcnZlQXNwZWN0UmF0aW9cIixuLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUpLGUuYXR0cmlidXRlcy5vdmVyZmxvdz1uZXcgQS5Qcm9wZXJ0eShcIm92ZXJmbG93XCIsbi5hdHRyaWJ1dGUoXCJvdmVyZmxvd1wiKS52YWx1ZSksZS5jaGlsZHJlbj1uLmNoaWxkcmVuKSxcInN2Z1wiPT1lLnR5cGUmJih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihlLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudmFsdWUpKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnZhbHVlKSkpO3ZhciBpPWUucGFyZW50O2UucGFyZW50PW51bGwsZS5yZW5kZXIodCksZS5wYXJlbnQ9aX19fSxBLkVsZW1lbnQudXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50Lm1hc2s9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7aWYoMD09cyYmMD09YSl7Zm9yKHZhciByPW5ldyBBLkJvdW5kaW5nQm94LG89MDtvPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO28rKylyLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5bb10uZ2V0Qm91bmRpbmdCb3godCkpO2k9TWF0aC5mbG9vcihyLngxKSxuPU1hdGguZmxvb3Ioci55MSkscz1NYXRoLmZsb29yKHIud2lkdGgoKSksYT1NYXRoLmZsb29yKHIuaGVpZ2h0KCkpfXZhciBsPWUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZTtlLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU9XCJcIjt2YXIgaD1wKCk7aC53aWR0aD1pK3MsaC5oZWlnaHQ9bithO3ZhciB1PWguZ2V0Q29udGV4dChcIjJkXCIpO3RoaXMucmVuZGVyQ2hpbGRyZW4odSk7dmFyIGM9cCgpO2Mud2lkdGg9aStzLGMuaGVpZ2h0PW4rYTt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtlLnJlbmRlcihmKSxmLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbj1cImRlc3RpbmF0aW9uLWluXCIsZi5maWxsU3R5bGU9dS5jcmVhdGVQYXR0ZXJuKGgsXCJuby1yZXBlYXRcIiksZi5maWxsUmVjdCgwLDAsaStzLG4rYSksdC5maWxsU3R5bGU9Zi5jcmVhdGVQYXR0ZXJuKGMsXCJuby1yZXBlYXRcIiksdC5maWxsUmVjdCgwLDAsaStzLG4rYSksZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPWx9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5tYXNrLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5jbGlwUGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaT10LmJlZ2luUGF0aCxuPXQuY2xvc2VQYXRoO2UmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1mdW5jdGlvbigpe30sQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9ZnVuY3Rpb24oKXt9KSxpLmNhbGwodCk7Zm9yKHZhciBzPTA7czx0aGlzLmNoaWxkcmVuLmxlbmd0aDtzKyspe3ZhciBhPXRoaXMuY2hpbGRyZW5bc107aWYodm9pZCAwIT09YS5wYXRoKXt2YXIgcj12b2lkIDAhPT1hLmVsZW1lbnRUcmFuc2Zvcm0mJmEuZWxlbWVudFRyYW5zZm9ybSgpOyFyJiZhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJihyPW5ldyBBLlRyYW5zZm9ybShhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKSksciYmci5hcHBseSh0KSxhLnBhdGgodCksZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pLHImJnIudW5hcHBseSh0KX19bi5jYWxsKHQpLHQuY2xpcCgpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1pLENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuY2xpcFBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZpbHRlcj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KSxuPU1hdGguZmxvb3IoaS54MSkscz1NYXRoLmZsb29yKGkueTEpLGE9TWF0aC5mbG9vcihpLndpZHRoKCkpLHI9TWF0aC5mbG9vcihpLmhlaWdodCgpKSxvPWUuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU7ZS5zdHlsZShcImZpbHRlclwiKS52YWx1ZT1cIlwiO2Zvcih2YXIgbD0wLGg9MCx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1Kyspe3ZhciBjPXRoaXMuY2hpbGRyZW5bdV0uZXh0cmFGaWx0ZXJEaXN0YW5jZXx8MDtsPU1hdGgubWF4KGwsYyksaD1NYXRoLm1heChoLGMpfXZhciBmPXAoKTtmLndpZHRoPWErMipsLGYuaGVpZ2h0PXIrMipoO3ZhciBtPWYuZ2V0Q29udGV4dChcIjJkXCIpO2ZvcihtLnRyYW5zbGF0ZSgtbitsLC1zK2gpLGUucmVuZGVyKG0pLHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKylcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNoaWxkcmVuW3VdLmFwcGx5JiZ0aGlzLmNoaWxkcmVuW3VdLmFwcGx5KG0sMCwwLGErMipsLHIrMipoKTt0LmRyYXdJbWFnZShmLDAsMCxhKzIqbCxyKzIqaCxuLWwscy1oLGErMipsLHIrMipoKSxlLnN0eWxlKFwiZmlsdGVyXCIsITApLnZhbHVlPW99LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe319LEEuRWxlbWVudC5maWx0ZXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlTW9ycGhvbG9neT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7fX0sQS5FbGVtZW50LmZlTW9ycGhvbG9neS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVDb21wb3NpdGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZUNvbXBvc2l0ZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgbj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2YWx1ZXNcIikudmFsdWUpO3N3aXRjaCh0aGlzLmF0dHJpYnV0ZShcInR5cGVcIikudmFsdWVPckRlZmF1bHQoXCJtYXRyaXhcIikpe2Nhc2VcInNhdHVyYXRlXCI6dmFyIGU9blswXTtuPVsuMjEzKy43ODcqZSwuNzE1LS43MTUqZSwuMDcyLS4wNzIqZSwwLDAsLjIxMy0uMjEzKmUsLjcxNSsuMjg1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUtLjcxNSplLC4wNzIrLjkyOCplLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwxXTticmVhaztjYXNlXCJodWVSb3RhdGVcIjp2YXIgcz1uWzBdKk1hdGguUEkvMTgwLGk9ZnVuY3Rpb24odCxlLGkpe3JldHVybiB0K01hdGguY29zKHMpKmUrTWF0aC5zaW4ocykqaX07bj1baSguMjEzLC43ODcsLS4yMTMpLGkoLjcxNSwtLjcxNSwtLjcxNSksaSguMDcyLC0uMDcyLC45MjgpLDAsMCxpKC4yMTMsLS4yMTMsLjE0MyksaSguNzE1LC4yODUsLjE0KSxpKC4wNzIsLS4wNzIsLS4yODMpLDAsMCxpKC4yMTMsLS4yMTMsLS43ODcpLGkoLjcxNSwtLjcxNSwuNzE1KSxpKC4wNzIsLjkyOCwuMDcyKSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwibHVtaW5hbmNlVG9BbHBoYVwiOm49WzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLC4yMTI1LC43MTU0LC4wNzIxLDAsMCwwLDAsMCwwLDFdfWZ1bmN0aW9uIHUodCxlLGksbixzLGEpe3JldHVybiB0W2kqbio0KzQqZSthXX1mdW5jdGlvbiBjKHQsZSxpLG4scyxhLHIpe3RbaSpuKjQrNCplK2FdPXJ9ZnVuY3Rpb24gZih0LGUpe3ZhciBpPW5bdF07cmV0dXJuIGkqKGk8MD9lLTI1NTplKX10aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7dmFyIGE9dC5nZXRJbWFnZURhdGEoMCwwLG4scyk7Zm9yKGk9MDtpPHM7aSsrKWZvcihlPTA7ZTxuO2UrKyl7dmFyIHI9dShhLmRhdGEsZSxpLG4sMCwwKSxvPXUoYS5kYXRhLGUsaSxuLDAsMSksbD11KGEuZGF0YSxlLGksbiwwLDIpLGg9dShhLmRhdGEsZSxpLG4sMCwzKTtjKGEuZGF0YSxlLGksbiwwLDAsZigwLHIpK2YoMSxvKStmKDIsbCkrZigzLGgpK2YoNCwxKSksYyhhLmRhdGEsZSxpLG4sMCwxLGYoNSxyKStmKDYsbykrZig3LGwpK2YoOCxoKStmKDksMSkpLGMoYS5kYXRhLGUsaSxuLDAsMixmKDEwLHIpK2YoMTEsbykrZigxMixsKStmKDEzLGgpK2YoMTQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMyxmKDE1LHIpK2YoMTYsbykrZigxNyxsKStmKDE4LGgpK2YoMTksMSkpfXQuY2xlYXJSZWN0KDAsMCxuLHMpLHQucHV0SW1hZ2VEYXRhKGEsMCwwKX19LEEuRWxlbWVudC5mZUNvbG9yTWF0cml4LnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZUdhdXNzaWFuQmx1cj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJsdXJSYWRpdXM9TWF0aC5mbG9vcih0aGlzLmF0dHJpYnV0ZShcInN0ZERldmlhdGlvblwiKS5udW1WYWx1ZSgpKSx0aGlzLmV4dHJhRmlsdGVyRGlzdGFuY2U9dGhpcy5ibHVyUmFkaXVzLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXtkJiZ2b2lkIDAhPT1kLmNhbnZhc1JHQkE/KHQuY2FudmFzLmlkPUEuVW5pcXVlSWQoKSx0LmNhbnZhcy5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodC5jYW52YXMpLGQuY2FudmFzUkdCQSh0LmNhbnZhcyxlLGksbixzLHRoaXMuYmx1clJhZGl1cyksZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0LmNhbnZhcykpOkEubG9nKFwiRVJST1I6IFN0YWNrQmx1ci5qcyBtdXN0IGJlIGluY2x1ZGVkIGZvciBibHVyIHRvIHdvcmtcIil9fSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXIucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LnRpdGxlPWZ1bmN0aW9uKHQpe30sQS5FbGVtZW50LnRpdGxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5kZXNjPWZ1bmN0aW9uKHQpe30sQS5FbGVtZW50LmRlc2MucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50Lk1JU1NJTkc9ZnVuY3Rpb24odCl7QS5sb2coXCJFUlJPUjogRWxlbWVudCAnXCIrdC5ub2RlTmFtZStcIicgbm90IHlldCBpbXBsZW1lbnRlZC5cIil9LEEuRWxlbWVudC5NSVNTSU5HLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuQ3JlYXRlRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgZT10Lm5vZGVOYW1lLnJlcGxhY2UoL15bXjpdKzovLFwiXCIpO2U9ZS5yZXBsYWNlKC9cXC0vZyxcIlwiKTt2YXIgaT1udWxsO3JldHVybihpPXZvaWQgMCE9PUEuRWxlbWVudFtlXT9uZXcgQS5FbGVtZW50W2VdKHQpOm5ldyBBLkVsZW1lbnQuTUlTU0lORyh0KSkudHlwZT10Lm5vZGVOYW1lLGl9LEEubG9hZD1mdW5jdGlvbih0LGUpe0EubG9hZFhtbCh0LEEuYWpheChlKSl9LEEubG9hZFhtbD1mdW5jdGlvbih0LGUpe0EubG9hZFhtbERvYyh0LEEucGFyc2VYbWwoZSkpfSxBLmxvYWRYbWxEb2M9ZnVuY3Rpb24oYSxyKXtBLmluaXQoYSk7dmFyIGk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWEuY2FudmFzO2U7KXQueC09ZS5vZmZzZXRMZWZ0LHQueS09ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gdS5zY3JvbGxYJiYodC54Kz11LnNjcm9sbFgpLHUuc2Nyb2xsWSYmKHQueSs9dS5zY3JvbGxZKSx0fTsxIT1BLm9wdHMuaWdub3JlTW91c2UmJihhLmNhbnZhcy5vbmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPWkobmV3IEEuUG9pbnQobnVsbCE9dD90LmNsaWVudFg6ZXZlbnQuY2xpZW50WCxudWxsIT10P3QuY2xpZW50WTpldmVudC5jbGllbnRZKSk7QS5Nb3VzZS5vbmNsaWNrKGUueCxlLnkpfSxhLmNhbnZhcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25tb3VzZW1vdmUoZS54LGUueSl9KTt2YXIgbz1BLkNyZWF0ZUVsZW1lbnQoci5kb2N1bWVudEVsZW1lbnQpO28ucm9vdD0hMCxvLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKTt2YXIgbD0hMCxuPWZ1bmN0aW9uKCl7QS5WaWV3UG9ydC5DbGVhcigpLGEuY2FudmFzLnBhcmVudE5vZGU/QS5WaWV3UG9ydC5TZXRDdXJyZW50KGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50V2lkdGgsYS5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpOkEuVmlld1BvcnQuU2V0Q3VycmVudCg4MDAsNjAwKSwxIT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmKG8uc3R5bGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoYS5jYW52YXMud2lkdGg9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxhLmNhbnZhcy5zdHlsZSYmKGEuY2FudmFzLnN0eWxlLndpZHRoPWEuY2FudmFzLndpZHRoK1wicHhcIikpLG8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLmhlaWdodD1vLnN0eWxlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSxhLmNhbnZhcy5zdHlsZSYmKGEuY2FudmFzLnN0eWxlLmhlaWdodD1hLmNhbnZhcy5oZWlnaHQrXCJweFwiKSkpO3ZhciB0PWEuY2FudmFzLmNsaWVudFdpZHRofHxhLmNhbnZhcy53aWR0aCxlPWEuY2FudmFzLmNsaWVudEhlaWdodHx8YS5jYW52YXMuaGVpZ2h0O2lmKDE9PUEub3B0cy5pZ25vcmVEaW1lbnNpb25zJiZvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmby5zdHlsZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYodD1vLnN0eWxlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGU9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikpLEEuVmlld1BvcnQuU2V0Q3VycmVudCh0LGUpLG51bGwhPUEub3B0cy5vZmZzZXRYJiYoby5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPUEub3B0cy5vZmZzZXRYKSxudWxsIT1BLm9wdHMub2Zmc2V0WSYmKG8uYXR0cmlidXRlKFwieVwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WSksbnVsbCE9QS5vcHRzLnNjYWxlV2lkdGh8fG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCl7dmFyIGk9bnVsbCxuPW51bGwscz1BLlRvTnVtYmVyQXJyYXkoby5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKTtudWxsIT1BLm9wdHMuc2NhbGVXaWR0aCYmKG8uYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKT9pPW8uYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpL0Eub3B0cy5zY2FsZVdpZHRoOmlzTmFOKHNbMl0pfHwoaT1zWzJdL0Eub3B0cy5zY2FsZVdpZHRoKSksbnVsbCE9QS5vcHRzLnNjYWxlSGVpZ2h0JiYoby5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKT9uPW8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKS9BLm9wdHMuc2NhbGVIZWlnaHQ6aXNOYU4oc1szXSl8fChuPXNbM10vQS5vcHRzLnNjYWxlSGVpZ2h0KSksbnVsbD09aSYmKGk9biksbnVsbD09biYmKG49aSksby5hdHRyaWJ1dGUoXCJ3aWR0aFwiLCEwKS52YWx1ZT1BLm9wdHMuc2NhbGVXaWR0aCxvLmF0dHJpYnV0ZShcImhlaWdodFwiLCEwKS52YWx1ZT1BLm9wdHMuc2NhbGVIZWlnaHQsby5zdHlsZShcInRyYW5zZm9ybVwiLCEwLCEwKS52YWx1ZSs9XCIgc2NhbGUoXCIrMS9pK1wiLFwiKzEvbitcIilcIn0xIT1BLm9wdHMuaWdub3JlQ2xlYXImJmEuY2xlYXJSZWN0KDAsMCx0LGUpLG8ucmVuZGVyKGEpLGwmJihsPSExLFwiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5yZW5kZXJDYWxsYmFjayYmQS5vcHRzLnJlbmRlckNhbGxiYWNrKHIpKX0scz0hMDtBLkltYWdlc0xvYWRlZCgpJiYocz0hMSxuKCkpLEEuaW50ZXJ2YWxJRD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3ZhciB0PSExO2lmKHMmJkEuSW1hZ2VzTG9hZGVkKCkmJih0PSEocz0hMSkpLDEhPUEub3B0cy5pZ25vcmVNb3VzZSYmKHR8PUEuTW91c2UuaGFzRXZlbnRzKCkpLDEhPUEub3B0cy5pZ25vcmVBbmltYXRpb24pZm9yKHZhciBlPTA7ZTxBLkFuaW1hdGlvbnMubGVuZ3RoO2UrKyl0fD1BLkFuaW1hdGlvbnNbZV0udXBkYXRlKDFlMy9BLkZSQU1FUkFURSk7XCJmdW5jdGlvblwiPT10eXBlb2YgQS5vcHRzLmZvcmNlUmVkcmF3JiYxPT1BLm9wdHMuZm9yY2VSZWRyYXcoKSYmKHQ9ITApLHQmJihuKCksQS5Nb3VzZS5ydW5FdmVudHMoKSl9LDFlMy9BLkZSQU1FUkFURSl9LEEuc3RvcD1mdW5jdGlvbigpe0EuaW50ZXJ2YWxJRCYmY2xlYXJJbnRlcnZhbChBLmludGVydmFsSUQpfSxBLk1vdXNlPW5ldyBmdW5jdGlvbigpe3RoaXMuZXZlbnRzPVtdLHRoaXMuaGFzRXZlbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIDAhPXRoaXMuZXZlbnRzLmxlbmd0aH0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9uY2xpY2tcIix4OnQseTplLHJ1bjpmdW5jdGlvbih0KXt0Lm9uY2xpY2smJnQub25jbGljaygpfX0pfSx0aGlzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9ubW91c2Vtb3ZlXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbm1vdXNlbW92ZSYmdC5vbm1vdXNlbW92ZSgpfX0pfSx0aGlzLmV2ZW50RWxlbWVudHM9W10sdGhpcy5jaGVja1BhdGg9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluUGF0aCYmZS5pc1BvaW50SW5QYXRoKG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5jaGVja0JvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJbkJveChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMucnVuRXZlbnRzPWZ1bmN0aW9uKCl7QS5jdHguY2FudmFzLnN0eWxlLmN1cnNvcj1cIlwiO2Zvcih2YXIgdD0wO3Q8dGhpcy5ldmVudHMubGVuZ3RoO3QrKylmb3IodmFyIGU9dGhpcy5ldmVudHNbdF0saT10aGlzLmV2ZW50RWxlbWVudHNbdF07aTspZS5ydW4oaSksaT1pLnBhcmVudDt0aGlzLmV2ZW50cz1bXSx0aGlzLmV2ZW50RWxlbWVudHM9W119fSxBfShpfHx7fSk7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpKSxudWxsIT10LnN2ZyYmdC5zdmcuc3RvcCgpLHQuY2hpbGROb2RlcyYmMT09dC5jaGlsZE5vZGVzLmxlbmd0aCYmXCJPQkpFQ1RcIj09dC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lfHwodC5zdmc9bik7dmFyIHM9dC5nZXRDb250ZXh0KFwiMmRcIik7dm9pZCAwIT09ZS5kb2N1bWVudEVsZW1lbnQ/bi5sb2FkWG1sRG9jKHMsZSk6XCI8XCI9PWUuc3Vic3RyKDAsMSk/bi5sb2FkWG1sKHMsZSk6bi5sb2FkKHMsZSl9ZWxzZSBmb3IodmFyIGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInN2Z1wiKSxyPTA7cjxhLmxlbmd0aDtyKyspe3ZhciBvPWFbcl0sbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2wud2lkdGg9by5jbGllbnRXaWR0aCxsLmhlaWdodD1vLmNsaWVudEhlaWdodCxvLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGwsbyksby5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG8pO3ZhciBoPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aC5hcHBlbmRDaGlsZChvKSxjKGwsaC5pbm5lckhUTUwpfX07XCJ1bmRlZmluZWRcIj09dHlwZW9mIEVsZW1lbnR8fCh2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tYXRjaGVzKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0LndlYmtpdE1hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tb3pNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5tc01hdGNoZXNTZWxlY3RvcihlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQub01hdGNoZXNTZWxlY3RvcihlKX06KFwiZnVuY3Rpb25cIiE9dHlwZW9mIGpRdWVyeSYmXCJmdW5jdGlvblwiIT10eXBlb2YgWmVwdG98fChmPWZ1bmN0aW9uKHQsZSl7cmV0dXJuICQodCkuaXMoZSl9KSx2b2lkIDA9PT1mJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgU2l6emxlJiYoZj1TaXp6bGUubWF0Y2hlc1NlbGVjdG9yKSkpO3ZhciBlPS8oXFxbW15cXF1dK1xcXSkvZyxpPS8oI1teXFxzXFwrPn5cXC5cXFs6XSspL2csYT0vKFxcLlteXFxzXFwrPn5cXC5cXFs6XSspL2cscj0vKDo6W15cXHNcXCs+flxcLlxcWzpdK3w6Zmlyc3QtbGluZXw6Zmlyc3QtbGV0dGVyfDpiZWZvcmV8OmFmdGVyKS9naSxvPS8oOltcXHctXStcXChbXlxcKV0qXFwpKS9naSxsPS8oOlteXFxzXFwrPn5cXC5cXFs6XSspL2csaD0vKFteXFxzXFwrPn5cXC5cXFs6XSspL2c7ZnVuY3Rpb24gdyhuKXt2YXIgcz1bMCwwLDBdLHQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1uLm1hdGNoKHQpO251bGwhPWkmJihzW2VdKz1pLmxlbmd0aCxuPW4ucmVwbGFjZSh0LFwiIFwiKSl9O3JldHVybiBuPShuPW4ucmVwbGFjZSgvOm5vdFxcKChbXlxcKV0qKVxcKS9nLFwiICAgICAkMSBcIikpLnJlcGxhY2UoL3tbXFxzXFxTXSovZ20sXCIgXCIpLHQoZSwxKSx0KGksMCksdChhLDEpLHQociwyKSx0KG8sMSksdChsLDEpLG49KG49bi5yZXBsYWNlKC9bXFwqXFxzXFwrPn5dL2csXCIgXCIpKS5yZXBsYWNlKC9bI1xcLl0vZyxcIiBcIiksdChoLDIpLHMuam9pbihcIlwiKX1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5kcmF3U3ZnPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj17aWdub3JlTW91c2U6ITAsaWdub3JlQW5pbWF0aW9uOiEwLGlnbm9yZURpbWVuc2lvbnM6ITAsaWdub3JlQ2xlYXI6ITAsb2Zmc2V0WDplLG9mZnNldFk6aSxzY2FsZVdpZHRoOm4sc2NhbGVIZWlnaHQ6c307Zm9yKHZhciBvIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShvKSYmKHJbb109YVtvXSk7Yyh0aGlzLmNhbnZhcyx0LHIpfSksdC5leHBvcnRzPWN9KHQ9e2V4cG9ydHM6e319LHQuZXhwb3J0cyksdC5leHBvcnRzfSk7IiwiLypcblx0QmFzZWQgb24gcmdiY29sb3IuanMgYnkgU3RveWFuIFN0ZWZhbm92IDxzc3Rvb0BnbWFpbC5jb20+XG5cdGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbG9yX3N0cmluZykge1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhID0gMS4wO1xuXG4gICAgLy8gc3RyaXAgYW55IGxlYWRpbmcgI1xuICAgIGlmIChjb2xvcl9zdHJpbmcuY2hhckF0KDApID09ICcjJykgeyAvLyByZW1vdmUgIyBpZiBhbnlcbiAgICAgICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnN1YnN0cigxLDYpO1xuICAgIH1cblxuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5yZXBsYWNlKC8gL2csJycpO1xuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcbiAgICAvLyBhbmQgb3ZlcndyaXRlIHRoZSBpbnB1dFxuICAgIHZhciBzaW1wbGVfY29sb3JzID0ge1xuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICAgICAgICBhcXVhOiAnMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICdmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxuICAgICAgICBibGFjazogJzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICAgICAgICBicm93bjogJ2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJ2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICAgICAgICBkYXJra2hha2k6ICdiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXG4gICAgICAgIGZpcmVicmljazogJ2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICdmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICAgICAgICBncmF5OiAnODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJ2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZCA6ICdjZDVjNWMnLFxuICAgICAgICBpbmRpZ28gOiAnNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICdmZmZmZjAnLFxuICAgICAgICBraGFraTogJ2YwZTY4YycsXG4gICAgICAgIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICAgICAgICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlYmx1ZTogJzg0NzBmZicsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICAgICAgICBsaW5lbjogJ2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICdmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICc4MDAwMDAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJzkzNzBkOCcsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJ2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJ2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJ2Q4NzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnY2Q4NTNmJyxcbiAgICAgICAgcGluazogJ2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICdkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnODAwMDgwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJzY2MzM5OScsXG4gICAgICAgIHJlZDogJ2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJ2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICdjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgICAgICAgc25vdzogJ2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICdkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICdmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICdlZTgyZWUnLFxuICAgICAgICB2aW9sZXRyZWQ6ICdkMDIwOTAnLFxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAgIH07XG4gICAgY29sb3Jfc3RyaW5nID0gc2ltcGxlX2NvbG9yc1tjb2xvcl9zdHJpbmddIHx8IGNvbG9yX3N0cmluZztcbiAgICAvLyBlbWQgb2Ygc2ltcGxlIHR5cGUtaW4gY29sb3JzXG5cbiAgICAvLyBhcnJheSBvZiBjb2xvciBkZWZpbml0aW9uIG9iamVjdHNcbiAgICB2YXIgY29sb3JfZGVmcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKigoPzpcXGQ/XFwuKT9cXGQpXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYmEoMTIzLCAyMzQsIDQ1LCAwLjgpJywgJ3JnYmEoMjU1LDIzNCwyNDUsMS4wKSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYml0c1s0XSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYigxMjMsIDIzNCwgNDUpJywgJ3JnYigyNTUsMjM0LDI0NSknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyMwMGZmMDAnLCAnMzM2Njk5J10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjZmIwJywgJ2YwZiddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0gKyBiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0gKyBiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10gKyBiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vIHNlYXJjaCB0aHJvdWdoIHRoZSBkZWZpbml0aW9ucyB0byBmaW5kIGEgbWF0Y2hcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcbiAgICAgICAgdmFyIHByb2Nlc3NvciA9IGNvbG9yX2RlZnNbaV0ucHJvY2VzcztcbiAgICAgICAgdmFyIGJpdHMgPSByZS5leGVjKGNvbG9yX3N0cmluZyk7XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBwcm9jZXNzb3IoYml0cyk7XG4gICAgICAgICAgICB0aGlzLnIgPSBjaGFubmVsc1swXTtcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xuICAgICAgICAgICAgdGhpcy5iID0gY2hhbm5lbHNbMl07XG4gICAgICAgICAgICBpZiAoY2hhbm5lbHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBjaGFubmVsc1szXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZS9jbGVhbnVwIHZhbHVlc1xuICAgIHRoaXMuciA9ICh0aGlzLnIgPCAwIHx8IGlzTmFOKHRoaXMucikpID8gMCA6ICgodGhpcy5yID4gMjU1KSA/IDI1NSA6IHRoaXMucik7XG4gICAgdGhpcy5nID0gKHRoaXMuZyA8IDAgfHwgaXNOYU4odGhpcy5nKSkgPyAwIDogKCh0aGlzLmcgPiAyNTUpID8gMjU1IDogdGhpcy5nKTtcbiAgICB0aGlzLmIgPSAodGhpcy5iIDwgMCB8fCBpc05hTih0aGlzLmIpKSA/IDAgOiAoKHRoaXMuYiA+IDI1NSkgPyAyNTUgOiB0aGlzLmIpO1xuICAgIHRoaXMuYWxwaGEgPSAodGhpcy5hbHBoYSA8IDApID8gMCA6ICgodGhpcy5hbHBoYSA+IDEuMCB8fCBpc05hTih0aGlzLmFscGhhKSkgPyAxLjAgOiB0aGlzLmFscGhhKTtcblxuICAgIC8vIHNvbWUgZ2V0dGVyc1xuICAgIHRoaXMudG9SR0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcpJztcbiAgICB9XG4gICAgdGhpcy50b1JHQkEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnLCAnICsgdGhpcy5hbHBoYSArICcpJztcbiAgICB9XG4gICAgdGhpcy50b0hleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpIHIgPSAnMCcgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSkgZyA9ICcwJyArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKSBiID0gJzAnICsgYjtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICB9XG5cbiAgICAvLyBoZWxwXG4gICAgdGhpcy5nZXRIZWxwWE1MID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleGFtcGxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBhZGQgcmVnZXhwc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleGFtcGxlID0gY29sb3JfZGVmc1tpXS5leGFtcGxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleGFtcGxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXG4gICAgICAgIGZvciAodmFyIHNjIGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBzYztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2NvbG9yID0gbmV3IFJHQkNvbG9yKGV4YW1wbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhhbXBsZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW46IDNweDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2NvbG9yOicgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Rlc3QnKSk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbV92YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgICAgICAgICAnICcgKyBleGFtcGxlc1tpXSArICcgLT4gJyArIGxpc3RfY29sb3IudG9SR0IoKSArICcgLT4gJyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGV4YW1wbGVfZGl2KTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB4bWwuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcblxuICAgICAgICAgICAgfSBjYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbDtcblxuICAgIH1cblxufVxuIiwiLypcbiAgICBTdGFja0JsdXIgLSBhIGZhc3QgYWxtb3N0IEdhdXNzaWFuIEJsdXIgRm9yIENhbnZhc1xuXG4gICAgVmVyc2lvbjogICAgIDAuNVxuICAgIEF1dGhvcjogICAgICAgIE1hcmlvIEtsaW5nZW1hbm5cbiAgICBDb250YWN0OiAgICAgbWFyaW9AcXVhc2ltb25kby5jb21cbiAgICBXZWJzaXRlOiAgICBodHRwOi8vd3d3LnF1YXNpbW9uZG8uY29tL1N0YWNrQmx1ckZvckNhbnZhc1xuICAgIFR3aXR0ZXI6ICAgIEBxdWFzaW1vbmRvXG5cbiAgICBJbiBjYXNlIHlvdSBmaW5kIHRoaXMgY2xhc3MgdXNlZnVsIC0gZXNwZWNpYWxseSBpbiBjb21tZXJjaWFsIHByb2plY3RzIC1cbiAgICBJIGFtIG5vdCB0b3RhbGx5IHVuaGFwcHkgZm9yIGEgc21hbGwgZG9uYXRpb24gdG8gbXkgUGF5UGFsIGFjY291bnRcbiAgICBtYXJpb0BxdWFzaW1vbmRvLmRlXG5cbiAgICBPciBzdXBwb3J0IG1lIG9uIGZsYXR0cjpcbiAgICBodHRwczovL2ZsYXR0ci5jb20vdGhpbmcvNzI3OTEvU3RhY2tCbHVyLWEtZmFzdC1hbG1vc3QtR2F1c3NpYW4tQmx1ci1FZmZlY3QtZm9yLUNhbnZhc0phdmFzY3JpcHRcblxuICAgIENvcHlyaWdodCAoYykgMjAxMCBNYXJpbyBLbGluZ2VtYW5uXG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvblxuICAgIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uXG4gICAgZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4gICAgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsXG4gICAgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgICBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiAgICBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZ1xuICAgIGNvbmRpdGlvbnM6XG5cbiAgICBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZVxuICAgIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcbiAgICBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcbiAgICBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG4gICAgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gICAgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4gICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuICAgIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiAgICAqL1xuXG5cbnZhciBtdWxfdGFibGUgPSBbXG4gICAgNTEyLDUxMiw0NTYsNTEyLDMyOCw0NTYsMzM1LDUxMiw0MDUsMzI4LDI3MSw0NTYsMzg4LDMzNSwyOTIsNTEyLFxuICAgIDQ1NCw0MDUsMzY0LDMyOCwyOTgsMjcxLDQ5Niw0NTYsNDIwLDM4OCwzNjAsMzM1LDMxMiwyOTIsMjczLDUxMixcbiAgICA0ODIsNDU0LDQyOCw0MDUsMzgzLDM2NCwzNDUsMzI4LDMxMiwyOTgsMjg0LDI3MSwyNTksNDk2LDQ3NSw0NTYsXG4gICAgNDM3LDQyMCw0MDQsMzg4LDM3NCwzNjAsMzQ3LDMzNSwzMjMsMzEyLDMwMiwyOTIsMjgyLDI3MywyNjUsNTEyLFxuICAgIDQ5Nyw0ODIsNDY4LDQ1NCw0NDEsNDI4LDQxNyw0MDUsMzk0LDM4MywzNzMsMzY0LDM1NCwzNDUsMzM3LDMyOCxcbiAgICAzMjAsMzEyLDMwNSwyOTgsMjkxLDI4NCwyNzgsMjcxLDI2NSwyNTksNTA3LDQ5Niw0ODUsNDc1LDQ2NSw0NTYsXG4gICAgNDQ2LDQzNyw0MjgsNDIwLDQxMiw0MDQsMzk2LDM4OCwzODEsMzc0LDM2NywzNjAsMzU0LDM0NywzNDEsMzM1LFxuICAgIDMyOSwzMjMsMzE4LDMxMiwzMDcsMzAyLDI5NywyOTIsMjg3LDI4MiwyNzgsMjczLDI2OSwyNjUsMjYxLDUxMixcbiAgICA1MDUsNDk3LDQ4OSw0ODIsNDc1LDQ2OCw0NjEsNDU0LDQ0Nyw0NDEsNDM1LDQyOCw0MjIsNDE3LDQxMSw0MDUsXG4gICAgMzk5LDM5NCwzODksMzgzLDM3OCwzNzMsMzY4LDM2NCwzNTksMzU0LDM1MCwzNDUsMzQxLDMzNywzMzIsMzI4LFxuICAgIDMyNCwzMjAsMzE2LDMxMiwzMDksMzA1LDMwMSwyOTgsMjk0LDI5MSwyODcsMjg0LDI4MSwyNzgsMjc0LDI3MSxcbiAgICAyNjgsMjY1LDI2MiwyNTksMjU3LDUwNyw1MDEsNDk2LDQ5MSw0ODUsNDgwLDQ3NSw0NzAsNDY1LDQ2MCw0NTYsXG4gICAgNDUxLDQ0Niw0NDIsNDM3LDQzMyw0MjgsNDI0LDQyMCw0MTYsNDEyLDQwOCw0MDQsNDAwLDM5NiwzOTIsMzg4LFxuICAgIDM4NSwzODEsMzc3LDM3NCwzNzAsMzY3LDM2MywzNjAsMzU3LDM1NCwzNTAsMzQ3LDM0NCwzNDEsMzM4LDMzNSxcbiAgICAzMzIsMzI5LDMyNiwzMjMsMzIwLDMxOCwzMTUsMzEyLDMxMCwzMDcsMzA0LDMwMiwyOTksMjk3LDI5NCwyOTIsXG4gICAgMjg5LDI4NywyODUsMjgyLDI4MCwyNzgsMjc1LDI3MywyNzEsMjY5LDI2NywyNjUsMjYzLDI2MSwyNTldO1xuXG5cbnZhciBzaGdfdGFibGUgPSBbXG4gICAgOSwgMTEsIDEyLCAxMywgMTMsIDE0LCAxNCwgMTUsIDE1LCAxNSwgMTUsIDE2LCAxNiwgMTYsIDE2LCAxNyxcbiAgICAxNywgMTcsIDE3LCAxNywgMTcsIDE3LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOSxcbiAgICAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCxcbiAgICAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcbiAgICAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0IF07XG5cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlKGltZywgY2FudmFzLCByYWRpdXMsIGJsdXJBbHBoYUNoYW5uZWwpXG57XG4gICAgaWYgKHR5cGVvZihpbWcpID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbWcpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTEltYWdlRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWltZyBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdyA9IGltZy5uYXR1cmFsV2lkdGg7XG4gICAgdmFyIGggPSBpbWcubmF0dXJhbEhlaWdodDtcblxuICAgIGlmICh0eXBlb2YoY2FudmFzKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbnZhcy5zdHlsZS53aWR0aCAgPSB3ICsgJ3B4JztcbiAgICBjYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG4gICAgY2FudmFzLndpZHRoID0gdztcbiAgICBjYW52YXMuaGVpZ2h0ID0gaDtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTtcblxuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcblxuICAgIGlmIChibHVyQWxwaGFDaGFubmVsKVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG4gICAgZWxzZVxuICAgICAgICBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgMCwgMCwgdywgaCwgcmFkaXVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodClcbntcbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpXG4gICAgICAgIHZhciBjYW52YXMgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgICBlbHNlIGlmICh0eXBlb2YgSFRNTENhbnZhc0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICB2YXIgaW1hZ2VEYXRhO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5hYmxlIHRvIGFjY2VzcyBsb2NhbCBpbWFnZSBkYXRhOiBcIiArIGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCQShjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG5cbiAgICB2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSwgYV9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sIGFfb3V0X3N1bSxcbiAgICAgICAgcl9pbl9zdW0sIGdfaW5fc3VtLCBiX2luX3N1bSwgYV9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHBhLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSAwO1xuXG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpICsgKCh3aWR0aE1pbnVzMSA8IGkgPyB3aWR0aE1pbnVzMSA6IGkpIDw8IDIpO1xuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbcF0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbcCsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbcCsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbcCszXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSArPSBwYTtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aSszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSAhPSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gPSBwaXhlbHNbeWkrMV0gPSBwaXhlbHNbeWkrMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKTtcblxuICAgICAgICAgICAgcl9zdW0gKz0gcl9pbl9zdW07XG4gICAgICAgICAgICBnX3N1bSArPSBnX2luX3N1bTtcbiAgICAgICAgICAgIGJfc3VtICs9IGJfaW5fc3VtO1xuICAgICAgICAgICAgYV9zdW0gKz0gYV9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9pbl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuICAgICAgICBhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSszXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICAgICAgYV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjay5hID0gcGE7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuICAgICAgICAgICAgYV9zdW0gKz0gKHN0YWNrLmEgPSAocGEgPSBwaXhlbHNbeWkrM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcCszXSA9IHBhID0gKGFfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIGlmIChwYSA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGEgPSAyNTUgLyBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcF0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3ArMl0gPSAoKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdID0gcGl4ZWxzW3ArMV0gPSBwaXhlbHNbcCsyXSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcbiAgICAgICAgICAgIGFfc3VtIC09IGFfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgICAgICAgYV9vdXRfc3VtIC09IHN0YWNrSW4uYTtcblxuICAgICAgICAgICAgcCA9ICh4ICsgKCgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pKTtcbiAgICAgICAgICAgIGJfc3VtICs9IChiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pKTtcbiAgICAgICAgICAgIGFfc3VtICs9IChhX2luX3N1bSArPSAoc3RhY2tJbi5hID0gcGl4ZWxzW3ArM10pKTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuICAgICAgICAgICAgYV9vdXRfc3VtICs9IChwYSA9IHN0YWNrT3V0LmEpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG4gICAgICAgICAgICBhX2luX3N1bSAtPSBwYTtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ2FudmFzUkdCKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkgcmV0dXJuO1xuICAgIHJhZGl1cyB8PSAwO1xuXG4gICAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cyk7XG5cbiAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BfeCwgdG9wX3kpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sXG4gICAgICAgIHJfb3V0X3N1bSwgZ19vdXRfc3VtLCBiX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sXG4gICAgICAgIHByLCBwZywgcGIsIHJicztcblxuICAgIHZhciBkaXYgPSByYWRpdXMgKyByYWRpdXMgKyAxO1xuICAgIHZhciB3NCA9IHdpZHRoIDw8IDI7XG4gICAgdmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcbiAgICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgICB2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcbiAgICB2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAocmFkaXVzUGx1czEgKyAxKSAvIDI7XG5cbiAgICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICB2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xuICAgIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKylcbiAgICB7XG4gICAgICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgICAgICAgaWYgKGkgPT0gcmFkaXVzUGx1czEpIHZhciBzdGFja0VuZCA9IHN0YWNrO1xuICAgIH1cbiAgICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgICB2YXIgc3RhY2tJbiA9IG51bGw7XG4gICAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcblxuICAgIHl3ID0geWkgPSAwO1xuXG4gICAgdmFyIG11bF9zdW0gPSBtdWxfdGFibGVbcmFkaXVzXTtcbiAgICB2YXIgc2hnX3N1bSA9IHNoZ190YWJsZVtyYWRpdXNdO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgIHtcbiAgICAgICAgcl9pbl9zdW0gPSBnX2luX3N1bSA9IGJfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcblxuICAgICAgICByX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcbiAgICAgICAgZ19zdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgICAgIGJfc3VtICs9IHN1bUZhY3RvciAqIHBiO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcGl4ZWxzW3lpXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMl0gPSAoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcblxuICAgICAgICAgICAgcCA9ICAoeXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IChzdGFja0luLnIgPSBwaXhlbHNbcF0pO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKTtcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcblxuICAgICAgICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcblxuICAgICAgICAgICAgcl9vdXRfc3VtICs9IChwciA9IHN0YWNrT3V0LnIpO1xuICAgICAgICAgICAgZ19vdXRfc3VtICs9IChwZyA9IHN0YWNrT3V0LmcpO1xuICAgICAgICAgICAgYl9vdXRfc3VtICs9IChwYiA9IHN0YWNrT3V0LmIpO1xuXG4gICAgICAgICAgICByX2luX3N1bSAtPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtIC09IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gLT0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gNDtcbiAgICAgICAgfVxuICAgICAgICB5dyArPSB3aWR0aDtcbiAgICB9XG5cblxuICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgIHtcbiAgICAgICAgZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IHJfc3VtID0gMDtcblxuICAgICAgICB5aSA9IHggPDwgMjtcbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHlwID0gd2lkdGg7XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgeWkgPSAoeXAgKyB4KSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1t5aV0pKSAqIChyYnMgPSByYWRpdXNQbHVzMSAtIGkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKHN0YWNrLmcgPSAocGcgPSBwaXhlbHNbeWkrMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3lpKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuXG4gICAgICAgICAgICBpZihpIDwgaGVpZ2h0TWludXMxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeWkgPSB4O1xuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgPDwgMjtcbiAgICAgICAgICAgIHBpeGVsc1twXSAgID0gKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzFdID0gKGdfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcbiAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IHdpZHRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gQmx1clN0YWNrKClcbntcbiAgICB0aGlzLnIgPSAwO1xuICAgIHRoaXMuZyA9IDA7XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmEgPSAwO1xuICAgIHRoaXMubmV4dCA9IG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGltYWdlOiBwcm9jZXNzSW1hZ2UsXG4gICAgY2FudmFzUkdCQTogcHJvY2Vzc0NhbnZhc1JHQkEsXG4gICAgY2FudmFzUkdCOiBwcm9jZXNzQ2FudmFzUkdCLFxuICAgIGltYWdlRGF0YVJHQkE6IHByb2Nlc3NJbWFnZURhdGFSR0JBLFxuICAgIGltYWdlRGF0YVJHQjogcHJvY2Vzc0ltYWdlRGF0YVJHQlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImNvbnN0IGJpZ0ludCA9IHJlcXVpcmUoJ2JpZy1pbnRlZ2VyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWdJbnRUb1NjaU5vdGF0aW9uKG4sIGZyYWN0aW9uRGlnaXRzPTIpIHsgXG5cdC8qIFNjaWVudGlmaWMgbm90YXRpb24gZm9yIEJpZ0ludCBudW1iZXJzIChuZWVkcyBzb21lIG9wdGltaXphdGlvbikgKi9cblx0Y29uc3QgblN0ciA9IG4udG9TdHJpbmcoMTApO1xuXHRjb25zdCBuTGVuID0gblN0ci5sZW5ndGg7XG5cdGNvbnN0IGZyYWN0aW9uID0gbkxlbi0xIDwgMTYgPyBuTGVuLTEgOiAxNjtcblx0Y29uc3QgW3dob2xlcywgcGFydHNdID0gW25TdHIuc3Vic3RyKDAsMSksIG5MZW4gPiAxID8gblN0ci5zdWJzdHIoMSxmcmFjdGlvbikgOiAwXTtcblx0bGV0IG5GbG9hdCA9IHBhcnNlRmxvYXQod2hvbGVzKycuJytwYXJ0cyk7XG5cdG5GbG9hdCA9IG5GbG9hdC50b1ByZWNpc2lvbiggKGZyYWN0aW9uRGlnaXRzKzEgPiBwYXJ0cy5sZW5ndGggPyAyIDogZnJhY3Rpb25EaWdpdHMrMSkgKTtcblx0cmV0dXJuIHRleGBcXGFwcHJveCAke25GbG9hdH0gXFx0aW1lcyAxMF57JHtuTGVuLTF9fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21CaWdJbnQobWF4KSB7XG5cdHJldHVybiBiaWdJbnQucmFuZEJldHdlZW4oMCxtYXgpO1xufVxuXG4iLCJpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG5cbmNvbnN0IHByb3RvQ2hhcnQgPSB7XG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgIG1hcmdpbjoge1xuICAgICAgbGVmdDogMTAsXG4gICAgICByaWdodDogMTAsXG4gICAgICB0b3A6IDEwLFxuICAgICAgYm90dG9tOiAxMCxcbiAgICB9LFxuICB9O1xuICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoYXJ0RmFjdG9yeShvcHRzLCBwcm90byA9IHByb3RvQ2hhcnQpIHtcblxuICBjb25zdCBjaGFydCA9IE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCBvcHRzKTtcbiAgaWYob3B0cy5wYXJlbnRJZCkgY2hhcnQucGFyZW50ID0gZDMuc2VsZWN0KGAjJHtvcHRzLnBhcmVudElkfWApO1xuICBlbHNlIGNoYXJ0LnBhcmVudCA9IGQzLnNlbGVjdCgnYm9keScpO1xuXG4gIGNoYXJ0LnN2ZyA9IGNoYXJ0LnBhcmVudFxuICAgIC5hcHBlbmQoJ3N2ZycpLmxvd2VyKClcbiAgICAuYXR0cignaWQnLCBjaGFydC5pZCB8fCAnY2hhcnQnKVxuICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0LndpZHRoIC0gY2hhcnQubWFyZ2luLnJpZ2h0KVxuICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5oZWlnaHQgLSBjaGFydC5tYXJnaW4uYm90dG9tKTtcblxuICBpZiAob3B0cy5zdHlsZUNsYXNzKSBjaGFydC5zdmcuYXR0cignY2xhc3MnLCBvcHRzLnN0eWxlQ2xhc3MpO1xuXG4gIC8vIGlmIChvcHRzLmRyYXdCYWNrZ3JvdW5kKSBcbiAgY2hhcnQuc3ZnLmFwcGVuZCgncmVjdCcpXG4gICAgLmF0dHIoJ2lkJywgJ2JhY2tncm91bmQnKVxuICAgIC5hdHRyKCd3aWR0aCcsJzEwMCUnKS5hdHRyKCdoZWlnaHQnLCcxMDAlJylcbiAgICAuYXR0cignZmlsbCcsIChvcHRzLmRyYXdCYWNrZ3JvdW5kID8gJyNmZmZmZmYnIDogJ25vbmUnKSk7IFxuICAgIC8vIC5hdHRyKCdmaWxsJywgJ3JnYmEoMjU1LDAsMCwuMiknKTtcblxuICBjaGFydC5jb250YWluZXIgPSBjaGFydC5zdmcuYXBwZW5kKCdnJylcbiAgICAuYXR0cignaWQnLCAnY29udGFpbmVyJylcbiAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke2NoYXJ0Lm1hcmdpbi5sZWZ0fSwgJHtjaGFydC5tYXJnaW4udG9wfSlgKTtcblxuICByZXR1cm4gY2hhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXRDaGFydChjaGFydCwgcGFkZGluZykge1xuICAvLyBjYWxjdWxhdGUgcmVhbCBkaW1lbnNpb25zIG9mIGEgY2hhcnQgKGFzc3VtZXMgY2hhcnQgaXMgYSBnLWVsZW1lbnQgd3JhcHBlZCBpbnNpZGUgYW4gc3ZnKVxuICBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudEVsZW1lbnQpXG4gICAgICAuYXR0cignd2lkdGgnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgcGFkZGluZy5sZWZ0ICsgcGFkZGluZy5yaWdodClcbiAgICAgIC5hdHRyKCdoZWlnaHQnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLmhlaWdodCArIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b20pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVhbERlcHRoKGQpIHtcbiAgLy8gY2FsY3VsYXRlcyB0aGUgcmVhbCBkZXB0aCBvZiBhIEZPUk0gYnkgc3VidHJhY3RpbmcgdW5tYXJrZWQgYW5kIG9wZW4gcmVFbnRyeSBGT1JNc1xuICBjb25zdCBnaG9zdHMgPSBkLmFuY2VzdG9ycygpXG4gICAgICAuZmlsdGVyKGUgPT4gKGUuZGF0YS50eXBlID09PSAnZm9ybScgJiYgZS5kYXRhLnVubWFya2VkIHx8IFxuICAgICAgICAgICAgICAgIGUuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgZS5kYXRhLmxhc3RPcGVuKSkubGVuZ3RoO1xuICByZXR1cm4gZC5kZXB0aCAtIGdob3N0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTdWJzY3JpcHQodGV4dCkge1xuICAvLyBzZWxlY3Rpb24gbW9kdWxlIHRvIHNwbGl0IHRleHQgaW50byBwYXJ0cyBmb3Igc3Vic2NyaXB0cyAoZS5nLiBcInhfblwiKVxuICByZXR1cm4gKHNlbGVjdGlvbikgPT4ge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICBjb25zdCBzcGxpdCA9ICh0eXBlb2YodGV4dChkKSkgPT09ICdzdHJpbmcnKSA/IHRleHQoZCkuc3BsaXQoJ18nKSA6ICcnO1xuXG4gICAgICAgIC8vIGlmIChzcGxpdC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vICAgc3BsaXQuZm9yRWFjaCgocGFydCxpKSA9PiB7XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGVsZW0gPSBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgIC8vICAgICAgIC50ZXh0KGQgPT4gcGFydCk7XG5cbiAgICAgICAgLy8gICAgIGlmIChpJTI9PT0xKSBlbGVtXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdkeCcsIDEpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdkeScsIDYpXG4gICAgICAgIC8vICAgICAgIC5hdHRyKCdmb250LXNpemUnLCAnLjhlbScpO1xuICAgICAgICAvLyAgIH0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgICAgICAudGV4dChkID0+IHNwbGl0WzBdKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RzcGFuJylcbiAgICAgICAgICAgIC50ZXh0KGQgPT4gc3BsaXRbMV0pXG4gICAgICAgICAgICAuYXR0cignZHgnLCAxKVxuICAgICAgICAgICAgLmF0dHIoJ2R5JywgNilcbiAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJy44ZW0nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC50ZXh0KHRleHQoZCkpO1xuICAgICAgICB9XG5cbiAgICB9KVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGV4dFNpemUodGV4dCwgZm9udFNpemU9J2luaGVyaXQnLCBmb250RmFtaWx5PSdpbmhlcml0JywgZm9udFN0eWxlPSdub3JtYWwnKSB7XG4gIC8qIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vaHV5dGQvMzI3ZTQ1M2M5NWNhM2VkYWRiMzJkMGM4NjdlMjU2MWIgXG4gIENyZWRpdHMgdG86IEh1eSBUci4gKi9cbiAgaWYgKCFkMykgcmV0dXJuO1xuICB2YXIgY29udGFpbmVyID0gZDMuc2VsZWN0KCdib2R5JykuYXBwZW5kKCdzdmcnKTtcbiAgY29udGFpbmVyLmFwcGVuZCgndGV4dCcpXG4gICAgLnN0eWxlKCdmb250LXNpemUnLCBmb250U2l6ZSlcbiAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCBmb250U3R5bGUpXG4gICAgLnN0eWxlKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpXG4gICAgLmF0dHIoJ3gnLCctOTk5OScpLmF0dHIoJ3knLCctOTk5OScpXG4gICAgLmNhbGwodGV4dFN1YnNjcmlwdCgoKSA9PiB0ZXh0KSk7IC8vIC50ZXh0KHRleHQpO1xuICB2YXIgc2l6ZSA9IGNvbnRhaW5lci5ub2RlKCkuZ2V0QkJveCgpO1xuICBjb250YWluZXIucmVtb3ZlKCk7XG4gIHJldHVybiB7IHdpZHRoOiBzaXplLndpZHRoLCBoZWlnaHQ6IHNpemUuaGVpZ2h0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGFjaXR5KGNvbG9yLCBhbHBoYSkge1xuICBjb25zdCBjb2xvckNvcHkgPSBkMy5jb2xvcihjb2xvcik7XG5jb2xvckNvcHkub3BhY2l0eSA9IGFscGhhO1xucmV0dXJuIGNvbG9yQ29weTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZVJlbWFpbmRlcihudW0sIF9kZW4pIHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGV0IHNpZ24gPSAxO1xuICBsZXQgZGVuID0gTWF0aC5yb3VuZChfZGVuKTtcbiAgbGV0IGNhbmRpZGF0ZSA9IGRlbjtcbiAgd2hpbGUgKG51bSAlIGRlbiA+IDAuMykge1xuICAgICAgY2FuZGlkYXRlICs9IHNpZ24gKiAwLjAwMTtcbiAgICAgIGlmIChudW0lY2FuZGlkYXRlIDwgbnVtJWRlbikgZGVuID0gY2FuZGlkYXRlO1xuXG4gICAgICBpZihjb3VudCA+PSA1MDAwKSB7XG4gICAgICAgICAgY2FuZGlkYXRlID0gTWF0aC5yb3VuZChfZGVuKTtcbiAgICAgICAgICBzaWduID0gLTE7XG4gICAgICB9XG4gICAgICBpZihjb3VudCA+PSAxMDAwMCkgYnJlYWs7XG4gICAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBkZW47XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY0NpcmNsZURhc2gociwgdW5pdCwgZnJhY3Rpb24pIHtcbiAgY29uc3QgY2lyYyA9IE1hdGguUEkqMiAqIHI7XG4gIHJldHVybiByZWR1Y2VSZW1haW5kZXIoY2lyYywgdW5pdCkgKiBmcmFjdGlvbjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVEYXNoQXJyYXkociwgdW5pdCwgZnJhY3Rpb25zKSB7XG4gIGxldCBzdHIgPSAnJztcbiAgZm9yIChsZXQgaSBpbiBmcmFjdGlvbnMpIHtcbiAgICAgIHN0ciA9IHN0ci5jb25jYXQoYCR7IGNhbGNDaXJjbGVEYXNoKHIsIHVuaXQsIGZyYWN0aW9uc1tpXSkgfXB4IGApO1xuICB9XG4gIHJldHVybiBzdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaXJjbGVMYWJlbCh0ZXh0LCBmb250U2l6ZT0naW5oZXJpdCcsIGZvbnRGYW1pbHk9J2luaGVyaXQnLCBmb250U3R5bGU9J25vcm1hbCcpIHtcbiAgLy8gc2VsZWN0aW9uIG1vZHVsZSB0byBzcGxpdCB0ZXh0IGludG8gcGFydHMgZm9yIHN1YnNjcmlwdHMgKGUuZy4gXCJ4X25cIilcbiAgcmV0dXJuIChzZWxlY3Rpb24pID0+IHtcblxuICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24oZCkge1xuXG4gICAgICAgICAgY29uc3QgdGV4dFN6ID0gdGV4dFNpemUodGV4dChkKSwgZm9udFNpemUsIGZvbnRGYW1pbHkpO1xuICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDUwO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgZm9udFNpemUpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIGZvbnRTdHlsZSlcbiAgICAgICAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIGZvbnRGYW1pbHkpXG4gICAgICAgICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAgICAgLnRleHQoZCA9PiB0ZXh0KGQpKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5maWx0ZXIoZCA9PiBkLnIqMiA+PSB0ZXh0U3oud2lkdGggKyBtYXJnaW4pLnNlbGVjdCgndGV4dCcpXG4gICAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCBpbnNpZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gZC5yIC0gdGV4dFN6LmhlaWdodCowLjUgKVxuICAgICAgICAgICAgICAuYXR0cignZG9taW5hbnQtYmFzZWxpbmUnLCdiYXNlbGluZScpO1xuXG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmZpbHRlcihkID0+IGQucioyIDwgdGV4dFN6LndpZHRoICsgbWFyZ2luKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwgb3V0c2lkZScsIHRydWUpXG4gICAgICAgICAgICAgIC5hdHRyKCd5JywgZCA9PiBkLnIgKyA0KVxuICAgICAgICAgICAgICAuYXR0cignZG9taW5hbnQtYmFzZWxpbmUnLCdoYW5naW5nJyk7XG5cbiAgICAgIH0pO1xuICB9O1xufSIsImltcG9ydCAqIGFzIGNhbnZnIGZyb20gJ2NhbnZnJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBqUXVlcnkgcmVwbGFjZW1lbnRzOlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgc2hvdyhlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIC8vIGVsZW0uY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIGhpZGUoZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcblx0Ly8gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICB0b2dnbGUoZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuXHQvLyBlbGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIHJldHVybiAoICFlbGVtLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykgKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkKG51bSwgc2l6ZSkge1xuICAgIC8qIHBhZHMgMHMgYmVmb3JlIG51bWJlciBzdHJpbmdcbiAgICAgICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yOTk4ODIyXG4gICAgICAgQ3JlZGl0cyB0bzogSW5maW5pdGllc0xvb3AgKi9cblxuICAgIHZhciBzID0gbnVtK1wiXCI7IC8vIGNvbnZlcnRzIG51bWJlciB0byBzdHJpbmcgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcbiAgICB3aGlsZSAocy5sZW5ndGggPCBzaXplKSBzID0gXCIwXCIgKyBzO1xuICAgIHJldHVybiBzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVN2ZyhzdmdFbCwgbmFtZSkge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2NDAzNTg5XG4gICAgQ3JlZGl0cyB0bzogZGVmZ2hpMTk3NywgRGF2ZVRoZVNjaWVudGlzdCwgc2VueiAqL1xuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZShcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIik7XG4gICAgdmFyIHN2Z0RhdGEgPSBzdmdFbC5vdXRlckhUTUw7XG4gICAgdmFyIHByZWZhY2UgPSAnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJub1wiPz5cXHJcXG4nO1xuICAgIHZhciBzdmdCbG9iID0gbmV3IEJsb2IoW3ByZWZhY2UsIHN2Z0RhdGFdLCB7dHlwZTpcImltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGYtOFwifSk7XG4gICAgdmFyIHN2Z1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoc3ZnQmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gc3ZnVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzYXZlSW1nKHN2ZywgbmFtZSwgc2NhbGU9MSkgeyAgICBcbiAgICAvKiBVc2luZyBjYW52ZyBsaWIuIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW52Zy9jYW52ZyBhbmQgcGFydHMgb2YgdGhlIGFwcHJvYWNoIGZvciBzYXZlU3ZnLlxuICAgIFRoYW5rcyB0byBqYmVhcmQ0IGluOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk3NjAzNC8xMjA0MDQ3IGZvciB0aGUgc3VnZ2VzdGlvbiAqL1xuXG4gICAgY29uc3QgdyA9IHN2Zy5nZXRCQm94KCkud2lkdGg7XG4gICAgY29uc3QgaCA9IHN2Zy5nZXRCQm94KCkuaGVpZ2h0O1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsJ2RyYXdpbmdBcmVhJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuICAgIGNhbnZhcy53aWR0aCA9IHcgKiBzY2FsZTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gaCAqIHNjYWxlO1xuXG4gICAgY2FudmcoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RyYXdpbmdBcmVhJyksIHN2Zy5vdXRlckhUTUwsIHsgaWdub3JlRGltZW5zaW9uczp0cnVlLCBpZ25vcmVNb3VzZTogdHJ1ZSwgaWdub3JlQW5pbWF0aW9uOiB0cnVlLFxuICAgIHNjYWxlV2lkdGg6IHcgKiBzY2FsZSxcbiAgICBzY2FsZUhlaWdodDogaCAqIHNjYWxlIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQXJlYScpICk7XG5cbiAgICBjb25zdCBpbWdVcmwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvcG5nXCIpO1xuXG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gaW1nVXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNhbnZhcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlKGZvcm1hdCwgc3ZnLCBuYW1lLCBzY2FsZSkge1xuICAgIC8vIGV4cG9ydHMgZ3JhcGhzIGludG8gc3ZnXG4gICAgXG4gICAgbmFtZSA9IG5hbWUgfHzCoHN2Zy5wYXJlbnROb2RlLmlkO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGdldFRpbWVzdGFtcCgpO1xuXG5cdHRyeSB7XG4gICAgc3dpdGNoKGZvcm1hdCkge1xuICAgICAgICBjYXNlICdzdmcnOlxuICAgICAgICAgICAgc2F2ZVN2ZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnN2ZycsIHNjYWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgICAgc2F2ZUltZyhzdmcsIHRpbWVzdGFtcCsnXycrbmFtZSsnLnBuZycsIHNjYWxlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblx0fSBjYXRjaChlKSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyKSB7XG4gICAgLyogU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTUwMzAxMTcgXG4gICAgQ3JlZGl0cyB0bzogTm9haCBGcmVpdGFzICovXG4gIHJldHVybiBhcnIucmVkdWNlKGZ1bmN0aW9uIChmbGF0LCB0b0ZsYXR0ZW4pIHtcbiAgICByZXR1cm4gZmxhdC5jb25jYXQoQXJyYXkuaXNBcnJheSh0b0ZsYXR0ZW4pID8gZmxhdHRlbih0b0ZsYXR0ZW4pIDogdG9GbGF0dGVuKTtcbiAgfSwgW10pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZShhcnIsb2JqKSB7XG4gICAgLyogIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE0Mzg2M1xuICAgIENyZWRpdHMgdG86IFZpbmtvIFZyc2Fsb3ZpYyAqL1xuICAgIHJldHVybiAoYXJyLmluZGV4T2Yob2JqKSAhPSAtMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZShvLGZ1bmMpIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjI2NjgvdHJhdmVyc2UtYWxsLXRoZS1ub2Rlcy1vZi1hLWpzb24tb2JqZWN0LXRyZWUtd2l0aC1qYXZhc2NyaXB0IFxuICAgIENyZWRpdHMgdG86IFRoZUhpcHBvICovXG4gICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkobnVsbCxbaSxvW2ldXSk7ICAvLyBudWxsIG9yIHRoaXM/XG4gICAgICAgIGlmIChvW2ldICE9PSBudWxsICYmIHR5cGVvZihvW2ldKT09XCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy9nb2luZyBvbmUgc3RlcCBkb3duIGluIHRoZSBvYmplY3QgdHJlZSEhXG4gICAgICAgICAgICB0cmF2ZXJzZShvW2ldLGZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxufVxuU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlQWxsID0gZnVuY3Rpb24oZmluZCwgcmVwbGFjZSwgZXNjYXBlTWV0YSkge1xuICAgIC8qICBNb2RpZmllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTQ0NzgzL2hvdy10by1yZXBsYWNlLWFsbC1vY2N1cnJlbmNlcy1vZi1hLXN0cmluZy1pbi1qYXZhc2NyaXB0IFxuICAgIENyZWRpdHMgdG86IFNlYW4gQnJpZ2h0ICovXG4gICAgaWYoZXNjYXBlTWV0YSkgZmluZCA9IGVzY2FwZVJlZ0V4cChmaW5kKTtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoZmluZCwgJ2cnKSwgcmVwbGFjZSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG5TdHJpbmcucHJvdG90eXBlLmFkZEJlZm9yZT1mdW5jdGlvbihpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdHIoMCwgaW5kZXgpICsgcmVwbGFjZW1lbnQrIHRoaXMuc3Vic3RyKGluZGV4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgc3RhcnQxLCBzdG9wMSwgc3RhcnQyLCBzdG9wMikge1xuICAgIC8vIFByb2Nlc3NpbmctbGlrZSBtYXAgZnVuY3Rpb25cbiAgICByZXR1cm4gc3RhcnQyICsgKHN0b3AyIC0gc3RhcnQyKSAqICgodmFsdWUgLSBzdGFydDEpIC8gKHN0b3AxIC0gc3RhcnQxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheU1vdmVJdGVtKGFyciwgZnJvbSwgdG8pIHtcbiAgYXJyLnNwbGljZSh0bywgMCwgYXJyLnNwbGljZShmcm9tLCAxKVswXSk7XG59XG5cblN0cmluZy5wcm90b3R5cGUucmVwbGFjZUF0PWZ1bmN0aW9uKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgdGhpcy5zdWJzdHIoaW5kZXggKyByZXBsYWNlbWVudC5sZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXN0YW1wKCkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgcmV0dXJuICgnJ1xuICAgICsgZGF0ZS5nZXRVVENGdWxsWWVhcigpKS5zdWJzdHIoMikgXG4gICAgKyAocGFkKChkYXRlLmdldFVUQ01vbnRoKCkrMSksMikpIFxuICAgICsgKHBhZChkYXRlLmdldFVUQ0RhdGUoKSwyKSkgKyAnLSdcbiAgICArIChwYWQoKGRhdGUuZ2V0SG91cnMoKSksMikpXG4gICAgKyAocGFkKChkYXRlLmdldE1pbnV0ZXMoKSksMikpXG4gICAgKyAocGFkKChkYXRlLmdldFNlY29uZHMoKSksMikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVTVkcoc3ZnLCBjb250YWluZXIsIHJhdGlvKSB7XG4gICAgY29uc3QgcHJlZml4ZXMgPSBbJy1tcy10cmFuc2Zvcm0nLCctd2Via2l0LXRyYW5zZm9ybScsJy1tb3otdHJhbnNmb3JtJywnLW8tdHJhbnNmb3JtJywndHJhbnNmb3JtJ107XG4gICAgcHJlZml4ZXMuZm9yRWFjaChwcmVmaXggPT4ge1xuICAgICAgICBzdmcuc3R5bGVbcHJlZml4XSA9IGBzY2FsZSgke3JhdGlvfSkgdHJhbnNsYXRlKDAsMClgO1xuICAgIH0pO1xuICAgIC8vIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHN2Zy5nZXRCQm94KCkud2lkdGggKiByYXRpbykgKyAncHgnO1xuICAgIC8vIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChzdmcuZ2V0QkJveCgpLmhlaWdodCAqIHJhdGlvKSArICdweCc7XG4gICAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gc3ZnLmdldEJCb3goKS53aWR0aCAqIHJhdGlvICsgJ3B4JztcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gc3ZnLmdldEJCb3goKS5oZWlnaHQgKiByYXRpbyArICdweCc7XG59XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5cbmV4cG9ydCBjb25zdCBwZXJtdXRlQXJyYXkgPSBpbnB1dEFycmF5ID0+IGlucHV0QXJyYXkucmVkdWNlKGZ1bmN0aW9uIHBlcm11dGUocmVzLCBpdGVtLCBrZXksIGFycikge1xuICAvKiBQZXJtdXRhdGlvbiBhbGdvcml0aG0gZm9yIGFycmF5cyBvZiBhcmJpdHJhcnkgbGVuZ3RoXG4gICAgIChjcmVkaXRzICYgdGhhbmtzIHRvIHVzZXIgbW9ua2V5OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjIwNjM0NDApICovXG4gICAgcmV0dXJuIHJlcy5jb25jYXQoYXJyLmxlbmd0aCA+IDEgJiYgYXJyLnNsaWNlKDAsIGtleSlcbiAgICAgIC5jb25jYXQoYXJyLnNsaWNlKGtleSArIDEpKVxuICAgICAgLnJlZHVjZShwZXJtdXRlLCBbXSlcbiAgICAgIC5tYXAoZnVuY3Rpb24ocGVybSkgeyByZXR1cm4gW2l0ZW1dLmNvbmNhdChwZXJtKTsgfSkgfHwgW1tpdGVtXV0pO1xufSwgW10pO1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVTdHIgPSAoc3RyLGxpbWl0LGFwcGVuZGl4PScnKSA9PiBzdHIubGVuZ3RoID4gbGltaXQgPyAoc3RyLnN1YnN0cigwLGxpbWl0KSArIGFwcGVuZGl4KSA6IHN0cjtcblxuZXhwb3J0IGNvbnN0IHJldmVyc2VNYXBwaW5nID0gKG8sYmlqZWN0aXZlPWZhbHNlKSA9PiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoKHIsIGspID0+IE9iamVjdC5hc3NpZ24ociwgeyBbb1trXV06IChiaWplY3RpdmUgPyBrIDogKHJbb1trXV0gfHwgW10pLmNvbmNhdChrKSkgfSksIHt9KTsgLy8gbW9kaWZpZWQgZnJvbSBhbnN3ZXIgYnkgTmluYSBTY2hvbHo6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NTcyODg1MFxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9mb3JtZm9ybS10b29sYm94IFxuKi9cblxuZXhwb3J0IGNvbnN0IFZBUkNPREUgPSAoeydhJzon4bSsJywgJ2InOifhtK4nLCAnYyc6J+G1kycsICdkJzon4bSwJywgJ2UnOifhtLEnLCAnZic6J+G1jicsICdnJzon4bSzJywgJ2gnOifhtLQnLCAnaSc6J+G0tScsICdqJzon4bS2JywgJ2snOifhtLcnLCAnbCc6J+G0uCcsICdtJzon4bS5JywgJ24nOifhtLonLCAnbyc6J+G0vCcsICdwJzon4bS+JywgJ3EnOifhtL0nLCAncic6J+G0vycsICdzJzon4bWVJywgJ3QnOifhtYAnLCAndSc6J+G1gScsICd2Jzon4bWbJywgJ3cnOifhtYInLCAneCc6J+G1oScsICd5Jzon4bWeJywgJ3onOifhtZwnLCAnYWx0Jzon4bW9JywgJzJyJzon4bWzJywgJzJyKzEnOifhtbInfSk7XG5cbmV4cG9ydCBjb25zdCBWQVJDT0RFX1JFViA9IHJldmVyc2VNYXBwaW5nKFZBUkNPREUsdHJ1ZSk7XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMC8yMDIwXG4qL1xuXG5leHBvcnQgY29uc3QgcHJvY2Vzc0xhYmVsID0gKGxhYmVsLCBtb2RlPSdodG1sJykgPT4ge1xuICAgIC8qIExhYmVsIHByb2Nlc3NpbmcgdG8gaGFuZGxlIHN1Yi9zdXBlcnNjcmlwdCAqL1xuXG4gICAgbGV0IHRhZ1JldiA9IFtdOyAvLyB0YWdSZXYgcmVzZXRzIHktcG9zaXRpb24gb2YgbGFiZWwgYWZ0ZXIgc3Vic2NyaXB0cyAobmVlZGVkIGZvciBzdmcpXG4gICAgaWYgKG1vZGUgPT09ICdzdmcnKSB0YWdSZXYgPSBbJzx0c3BhbiB5PVwiMFwiPicsJzwvdHNwYW4+J107XG4gICAgZWxzZSB0YWdSZXYgPSBbJycsJyddO1xuXG4gICAgaWYgKGxhYmVsLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFiZWxQYXJ0cyA9IGxhYmVsLnNwbGl0KCdfJyk7XG5cbiAgICAgICAgbGV0IHRhZ1N1YiA9IFtdO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3N2ZycpIHRhZ1N1YiA9IFtgPHRzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAuOGVtO1wiIGR4PVwiMFwiIGR5PVwiNlwiPmAsJzwvdHNwYW4+J107XG4gICAgICAgIGVsc2UgdGFnU3ViID0gWyc8c3ViPicsJzwvc3ViPiddO1xuXG4gICAgICAgIHJldHVybiAobGFiZWxQYXJ0cy5sZW5ndGggPiAxKSA/IGAke3RhZ1JldlswXSArIGxhYmVsUGFydHNbMF0gKyB0YWdSZXZbMV0gKyB0YWdTdWJbMF0gKyBsYWJlbFBhcnRzWzFdICsgdGFnU3ViWzFdfWAgOiB0YWdSZXZbMF0rbGFiZWwrdGFnUmV2WzFdO1xuICAgIH1cbiAgICBlbHNlIHJldHVybiB0YWdSZXZbMF0rbGFiZWwrdGFnUmV2WzFdO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZhbGlkYXRpb24gPSAoZm4sIGVycm9yTXNnKSA9PiAoLi4uYXJncykgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGZuKC4uLmFyZ3MpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNhdGE6IGJyYW5jaCA9PiByZXN1bHQgPyBicmFuY2guc3VjY2VzcyhyZXN1bHQpIDogYnJhbmNoLmVycm9yKGVycm9yTXNnKVxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VMaXRlcmFscyA9IChzdHIsIHNlcD0nXCInLCByZXBsPSfigL0nKSA9PiB7XG4gICAgaWYgKCFjaGVja0xpdGVyYWxNYXRjaGluZyhzdHIsIHNlcCkpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHN0clNlcCA9IHN0ci5zcGxpdChzZXApO1xuICAgIHJldHVybiBzdHJTZXAuZmlsdGVyKChzdWJzdHIsaSxhcnIpID0+IGkgJSAyID09PSAwIHx8IGkgPT09IGFyci5sZW5ndGgtMSkuam9pbihyZXBsKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrTGl0ZXJhbE1hdGNoaW5nID0gKHN0ciwgc2VwPSdcIicpID0+IHtcbiAgICBjb25zdCBzdHJTZXAgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICByZXR1cm4gc3RyU2VwLmxlbmd0aCAlIDIgPT09IDE7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0QnJhY2tldFVuaXRzID0gKGZvcm11bGEsIGJyPXtvcGVuOid7JywgY2xvc2U6J30nfSwgbWF0Y2hlcz1bXSkgPT4ge1xuICAgIGNvbnN0IHJlRW50cmllcyA9IGZvcm11bGEubWF0Y2gobmV3IFJlZ0V4cChgXFxcXCR7YnIub3Blbn1bXiR7YnIub3Blbn0ke2JyLmNsb3NlfV0qP1xcXFwke2JyLmNsb3NlfWAsICdnJykpO1xuICAgIGlmICghcmVFbnRyaWVzKSByZXR1cm4gbWF0Y2hlcztcblxuICAgIGNvbnN0IHJlZHVjZWRGb3JtdWxhID0gcmVFbnRyaWVzLnJlZHVjZSgoc3RyLCBwYXR0ZXJuKSA9PiBzdHIucmVwbGFjZShwYXR0ZXJuLCAn4oCiJyksZm9ybXVsYSk7XG5cbiAgICByZXR1cm4gZ2V0QnJhY2tldFVuaXRzKHJlZHVjZWRGb3JtdWxhLCBiciwgWy4uLm1hdGNoZXMsIC4uLnJlRW50cmllc10pO1xufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMTAvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgY2hlY2tCcmFja2V0TWF0Y2hpbmcgPSAoc3RyLCBvcGVuQnI9JygnLCBjbG9zZUJyPScpJykgPT4ge1xuICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7IC8vIGVtcHR5IHN0cmluZ3MgY2FuJ3QgaGF2ZSBicmFja2V0cywgc28gdGhhdCdzIGZpbmVcbiAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChhY2MsY3VycixpZHgsYXJyKSA9PiB7XG4gICAgaWYgKGN1cnIgPT09IG9wZW5CcikgYWNjKys7XG4gICAgZWxzZSBpZiAoY3VyciA9PT0gY2xvc2VCcikge1xuICAgICAgaWYgKGFjYyA9PT0gbnVsbCkgcmV0dXJuIE5hTjtcbiAgICAgIGFjYy0tO1xuICAgICAgfVxuICAgIGlmIChpZHggPT09IGFyci5sZW5ndGgtMSAmJiBhY2MgPT09IG51bGwpIHJldHVybiAwO1xuICAgIHJldHVybiBhY2M7XG4gIH0sbnVsbCkgPT09IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZXF1YWxBcnJheXMgPSAoYXJyQSwgYXJyQikgPT4ge1xuICAgIGlmIChhcnJBID09PSB1bmRlZmluZWQgfHwgYXJyQiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGFyckEubGVuZ3RoID09PSBhcnJCLmxlbmd0aCAmJiBhcnJBLmV2ZXJ5KGEgPT4gYXJyQi5zb21lKGIgPT4gYSA9PT0gYikpO1xufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMTIvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy83NjhkYmUxOWVkNDdlMjgxIChTdGF0ZSBtYWNoaW5lcylcbiovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXhYIChpbnB1dCwgcnVsZU1hcCkge1xuICAgIGlucHV0ID0gaW5wdXQuc3BsaXQoJyAnKS5qb2luKCcnKTtcbiAgICBjb25zdCBjb21wUnVsZSA9IGNvbXBSZWdFeHAocnVsZU1hcC5tYXAociA9PiByWzFdKSk7XG4gICAgXG4gICAgcmV0dXJuIFsuLi5pbnB1dC5tYXRjaEFsbChjb21wUnVsZSldLm1hcCgobWF0Y2gsaSkgPT4ge1xuICAgICAgY29uc3QgaWR4ID0gbWF0Y2guZmlsdGVyKChfLGkpID0+IGkgPiAwKS5maW5kSW5kZXgobSA9PiBtICE9IHVuZGVmaW5lZCk7XG4gICAgICByZXR1cm4ge3Rva2VuOiBydWxlTWFwW2lkeF1bMF0sIHZhbHVlOiAocnVsZU1hcFtpZHhdWzJdID8gcnVsZU1hcFtpZHhdWzJdKG1hdGNoWzBdKSA6IHVuZGVmaW5lZCApIH07XG4gICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wUmVnRXhwID0gcGF0dGVybnMgPT4gbmV3IFJlZ0V4cChwYXR0ZXJucy5yZWR1Y2UoKGNvbXAscixpKSA9PiBjb21wKyhpID4gMCA/ICd8JyA6ICcnKStgKCR7cn0pYCwnJyksICdnJyk7XG5cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAwMy8yMDIxXG4qL1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZml0U3ZnKHNlbGVjdG9yLCBwYWRkaW5nKSB7XG4vLyAgICAgLy8gY2FsY3VsYXRlIHJlYWwgZGltZW5zaW9ucyBvZiBhIGNoYXJ0IChhc3N1bWVzIGNoYXJ0IGlzIGEgZy1lbGVtZW50IHdyYXBwZWQgaW5zaWRlIGFuIHN2Zylcbi8vICAgICBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudEVsZW1lbnQpXG4vLyAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkud2lkdGggKyBwYWRkaW5nLmxlZnQgKyBwYWRkaW5nLnJpZ2h0KVxuLy8gICAgICAgICAuYXR0cignaGVpZ2h0JywgY2hhcnQubm9kZSgpLmdldEJCb3goKS5oZWlnaHQgKyBwYWRkaW5nLnRvcCArIHBhZGRpbmcuYm90dG9tKTtcbi8vICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ZnU2l6ZShzdmdUZXh0KSB7XG5cdGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XG5cdHN2Zy5pbm5lckhUTUwgPSBzdmdUZXh0O1xuXHRzdmcuc2V0QXR0cmlidXRlKCd4JywnLTk5OTknKTtcblx0c3ZnLnNldEF0dHJpYnV0ZSgneScsJy05OTk5Jyk7XG5cblx0Y29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHN2Zyk7XG5cblx0Y29uc3Qgc2l6ZSA9IHN2Zy5nZXRCQm94KCk7XG5cdGNvbnRhaW5lci5yZW1vdmUoKTtcblx0cmV0dXJuIHsgdzogc2l6ZS53aWR0aCwgaDogc2l6ZS5oZWlnaHQgfTtcbn1cblxuLyogQnJlYWtzIHN0cmluZyB1cCBpbiBwYXJ0cyBvZiBsZW5ndGggbiAoeCA8PSBuIGZvciB0aGUgbGFzdCBwYXJ0KSBcbiAgIGZyb206IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuZXhwb3J0IGNvbnN0IGJyZWFrU3RyID0gKHN0cixuPTEpID0+IFsuLi5uZXcgQXJyYXkoTWF0aC5jZWlsKHN0ci5sZW5ndGgvbikpXS5tYXAoKGQsaSkgPT4gc3RyLnN1YnN0cihuKmksbikpO1xuXG5leHBvcnQgY29uc3Qgc3ZnTGluZWJyZWFrID0gKHN0ciwgbGluZVNoaWZ0KSA9PiBgPHRzcGFuIHg9XCIwXCIgZHk9XCIke2xpbmVTaGlmdH1cIj4ke3N0cn08L3RzcGFuPmA7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdjYWxjJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGNvbW11dGF0aXZlIHJlbGF0aW9uOiB4IHkgKi9cbiAgICAgICAgaWYgKCBmeCA+IDMgfHwgZnggPCAwIHx8IGZ5ID4gMyB8fCBmeSA8IDAgKSByZXR1cm4gLTk4O1xuICAgICAgICBlbHNlIGlmICggZnggPT09IDAgfHwgZnkgPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ5OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKCBmeSA9PT0gMCB8fCBmeCA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggZnggPT09IGZ5ICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzUgL1RoZW9yZW0gNVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCAoZnggPT09IDIgJiYgZnkgPT09IDMpIHx8IChmeCA9PT0gMyAmJiBmeSA9PT0gMikgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDE7IC8vIEMyIC9UaGVvcmVtIDEzICsgQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyByZWwoLi4uZlZhbHMpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIHJlbGF0aW9uIHdpdGggbiB2YXJpYWJsZXM6IHhfMSAuLi4geF9uICovXG4gICAgICAgIGlmIChmVmFscy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZlZhbHMpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbF9sb2dpYyggdmFsLGZWYWxzW2ldICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGludmVyc2lvbi9uZWdhdGlvbjogKHgpICovXG4gICAgICAgIHN3aXRjaCAoZngpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIGludihmeCwgbikgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgbiBpbnZlcnNpb25zL25lZ2F0aW9uczogKHgpICovXG4gICAgICAgIGlmIChuID4gMCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IGZ4O1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPG47IGkrKykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMuaW52X2xvZ2ljKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgcmV0dXJuIHRoaXMuaW52X2xvZ2ljKGZ4KTtcbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBSRS1FTlRSWSBGT1JNIENBTENVTEFUSU9OXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgdUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtMyhsYXN0T3BlbiwgZkEsIGZCLCBmQywgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCBjbG9zZWQgJiBvcGVuIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xuICAgIH07XG5cbiAgICAvLyBzdGF0aWMgcmVFbnRyeSguLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuICAgIC8vIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShyZUV2ZW4sIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG5cbiAgICBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIGxhc3RPcGVuLCBhbHRJbnRlcnByLCAuLi5mVmFscykge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIGRpZmZlcmVudCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXNcbiAgICAgICAgIFtBcmd1bWVudHNdIHJlRXZlbjogZXZlbiByZS1lbnRyeS1udW1iZXI/IHwgbGFzdE9wZW46IGxhc3QgdmFyaWFibGUgbm90IGNyb3NzZWQ/IHwgZlZhbHM6IHZhcmlhYmxlcyAoMC8xLzIvMylcblxuICAgICAgICAgTm90ZTogY2FsY3VsYXRpb24gbWFudWFsbHkgdmVyaWZpZWQgZm9y4oCmIFxuICAgICAgICAgLSAodUZPUk0gYTEsIHJlczIpIMaSPSgoxpJ4KXkpXG4gICAgICAgICAtIChpRk9STSBhMiwgcmVzMikgxpIoxpIpPShhMXgpeVxuICAgICAgICAgLSAoaUZPUk0gYjEsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKCjGkngpeSl6KSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAoaUZPUk0gYjIsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKGIxeCl5KXpcbiAgICAgICAgIC0gKHVGT1JNIGMxLCByZXMzKSBbMnxyfF0gxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKHVGT1JNIGMyLCByZXMzKSBbMnxyfF0gxpIoxpIpPSgoYzF4KXkpelxuICAgICAgICAgU2hvdWxkIHdvcmsgd2l0aCByZXNvbHV0aW9ucyBvZiA0LCA1LCDigKYgYnV0IG5lZWRzIHZlcmlmaWNhdGlvbi5cblxuICAgICAgICAgTXkgYmFzaWMgb2JzZXJ2YXRpb25zIGFib3V0IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNczpcbiAgICAgICAgIC0gRXZlcnkgcmUtZW50cnkgRk9STSBuZWVkcyB0byBoYXZlIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgdG8gYmUgc2VsZi1lcXVpdmFsZW50ICh1Rk9STSk6IMaSID0gKCjGkjEpMikgLlxuICAgICAgICAgICBTbyB3aXRoIHVuZXZlbiByZXNvbHV0aW9ucywgd2UgYWx3YXlzIG5lZWQgdG8gaGF2ZSBhbiBldmVuIHJlLWVudHJ5IG51bWJlcjogxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAuXG4gICAgICAgICAtIFRvIGJlIGFibGUgdG8gYWxzbyBoYXZlIHVuZXZlbiByZS1lbnRyeSBudW1iZXJzLCBlaXRoZXIgdGhlIHJlc29sdXRpb24gbmVlZHMgdG8gYmUgZXZlblxuICAgICAgICAgICBvciB3ZSBoYXZlIHRvIGVtYmVkIHRoZSByZS1lbnRyeSBGT1JNIGludG8gYSBub3JtYWwgRk9STSB0aGF0IGlzIG9uZSByZS1lbnRyeSBvZiB0aGF0IEZPUk06XG4gICAgICAgICAgIMaSKMaSKSA9ICgoKMaSMSkyKTMpIDwtPiAoKCggxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAxKTIpMykgLlxuICAgICAgICAgICBUaGVzZSBjb21wb3NpdGlvbmFsIHJlLWVudHJ5IEZPUk1zIGFyZSBpRk9STXMsIHNpbmNlIHRoZXkgcmVzb2x2ZSB0bzogKCDGkiA9ICgoxpIpKSApIC5cbiAgICAgICAgIC0gSWYgdGhlIG91dG1vc3QgY3Jvc3Mgb2YgdGhlIEZPUk0gc2hvdWxkIGJlIGxlZnQgb3V0IChvcGVuIEZPUk1zKSwgdGhpcyBjYW4gb25seSBiZSBkb25lIGlmIHdlIGVtYmVkXG4gICAgICAgICAgIGEgY29ycmVzcG9uZGluZyBjbG9zZWQgRk9STSBvZiBpdHNlbGYgdGhhdCBlaXRoZXIgaXMgb3IgZW1iZWRzIGl0cyByZS1lbnRyeSBGT1JNIChjYXNlcyBkZXNjcmliZWQgYWJvdmUpLlxuICAgICAgICAgICBJIGJlbGlldmUgdGhlIG91dG1vc3QgKG9wZW4pIEZPUk0gaXMgbm90IGJlaW5nIGNvdW50ZWQgYXMgYSByZS1lbnRyeSBhdCBhbGwsIHNpbmNlIGl0J3MgbWlzc2luZyBhIGNyb3NzLlxuXG4gICAgICAgICBUaGlzIGFsZ29yaXRobSBpcyBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIHJ1bGVzL3BhdHRlcm5zL29ic2VydmF0aW9ucyBkZXJpdmVkIGZyb20gXCJ1Rk9STSBpRk9STVwiOlxuICAgICAgICAgWzFdIElmIDEgaXMgc29tZXdoZXJlIGluIHRoZSBGT1JNLCBpdCB3aWxsIGRvbWluYXRlIGFsbCB2YWx1ZXMgaW4gc3BhY2VzIGRlZXBlciB0aGFuIG0sXG4gICAgICAgICAgICAgc28gdGhlIHJlLWVudHJ5IGlzIG9ic29sZXRlIGFuZCB3ZSBjYW4gc3RhcnQgY2FsY3VsYXRlIGZyb20gdGhpcyBzcGFjZS4gXG4gICAgICAgICBbMl0gSWYgdGhlcmUgYXJlIDMvMiBvciAyLzMgcGFpcnMgaW4gdGhlIEZPUk0sIHRoZSBmaXJzdCB0ZXJtIGNhbiBiZSB0dXJuZWQgaW50byAxLCBzaW5jZVxuICAgICAgICAgICAgIHRocm91Z2ggQzIgdGhlIHNlY29uZCB0ZXJtIGNhbiBhbHdheXMgYmUgZ2VuZXJhdGVkIGludG8gaXRzIHNwYWNlLCB3aGVyZSAyMyA9IDEuXG4gICAgICAgICAgICAgVGhlbiB3ZSBjYW4gcHJvY2VlZCBhcyBpbiAoMSkuXG4gICAgICAgICBbM10gSWYgYWxsIHZhcmlhYmxlcyBhcmUgMCwgd2Ugd2lsbCBoYXZlIGVpdGhlciBhIHVGT1JNIG9yIGlGT1JNLCBoZW5jZSB0aGUgdmFsdWUgb2YgdGhlXG4gICAgICAgICAgICAgRk9STSB3aWxsIGJlIGVpdGhlciAyIG9yIDMsIGRlcGVuZGluZyBvbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAgICAgIC0gMjogY2xvc2VkLCAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMSlcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBldmVuICAgICAoYzEsIGMyKVxuICAgICAgICAgICAgIC0gMzogb3BlbiwgICAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMilcbiAgICAgICAgICAgICAtIDM6IGNsb3NlZC9vcGVuLCByZXNvbHV0aW9uIG9kZCwgIHJlLWVudHJ5LW51bWJlciBvZGQgICAgICAoYjEsIGIyKVxuICAgICAgICAgU2luY2UgWzFdWzJdWzNdIGVsaW1pbmF0ZSBhbGwgb3RoZXIgY2FzZXMsIGFsbCB2YXJpYWJsZXMgYXJlIG5vdyBlaXRoZXIgMiBvciAzIChhbmQgbWF5YmUgMHMpLFxuICAgICAgICAgc28gdXNpbmcgQzIgYXMgZGVzY3JpYmVkIGFib3ZlLCBvbmx5IHRoZSBsYXN0IG9jY2FzaW9uIG9mIHRoZXNlIHZhcmlhYmxlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQ6XG4gICAgICAgICBbNF0gSWYgd2UgdXNlIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDIgKHAuMTY3KSByZWN1cnNpdmUgaWRlbnRpdHkgKCBtbiA8LT4gKCjGkikpPcaSICksIEMyIGFuZCBDMVxuICAgICAgICAgICAgIMaSIGNhbiBiZSBzZXBhcmF0ZWQgZnJvbSAyLzMgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlLlxuICAgICAgICAgICAgIFRoZW4sIGRlcGVuZGluZyBvbiB0aGUgRk9STSwgd2UgaGF2ZSBlaXRoZXI6XG4gICAgICAgICAgICAgaUZPUk06ICjGkj0oKMaSKSkpIDIvMyA8LT4gKDIpIDIvMyAgb3JcbiAgICAgICAgICAgICB1Rk9STTogIMaSPSgoxpIpKSAyLzMgIDwtPiAgMiAyLzNcbiAgICAgICAgIFs1XSBJZiBbNF0gZG9lcyBub3QgYXBwbHkgb3Igd2UgZGVjaWRlIGZvciB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAxIChwLjE2Nyk6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICAoIG1uIC0+IMaSPSgoxpIpKSApLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIHZhcmlhYmxlcyBvZiAyIG9yIDMgd2hpY2ggd2UgY2Fubm90IHJlbGF0ZSB0byDGkiwgc2luY2VcbiAgICAgICAgICAgICB0aGV5IG5lZWQgbm90IGJlIHRoZSBzYW1lIHVuZGV0ZXJtaW5lZCB2YWx1ZS4gVXNpbmcgY2FzZSBkaXN0aW5jdGlvbiwgd2UgaW50ZXJwcmV0IHRoZVxuICAgICAgICAgICAgIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzIGFzIDAgYW5kIGFzIDEsIGNhbGN1bGF0ZSBldmVyeXRoaW5nIHdpdGggxpI9MiBhbmQgcmVsYXRlIHRoZSByZXN1bHRzIFxuICAgICAgICAgICAgIHVzaW5nIGNvbnRyYXZhbGVuY2U6ICgoeCl5KSgoeSl4KSB3aGljaCB5aWVsZHMgdGhlIGZpbmFsIHJlc3VsdC5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gY2hlY2sgaWYgYXJndW1lbnRzIGFyZSBhY3R1YWxseSBkZWZpbmVkXG4gICAgICAgIGlmIChyZUV2ZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVFdmVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxhc3RPcGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxhc3RPcGVuID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXNFdmVuID0gKGZWYWxzLmxlbmd0aCUyID09IDApOyAvLyBldmVuIHJlc29sdXRpb24/XG4gICAgICAgIGxldCB6ZXJvcyA9IDA7IC8vIHplcm8gY291bnRlclxuICAgICAgICBsZXQgZmlyc3RVbmRlZiA9IC0xOyAvLyBjYXRjaGVzIGZpcnN0IG1uLyhtbilcblxuICAgICAgICAvLyBbM10gZGV0ZXJtaW5lIGlmIHVGT1JNIG9yIGlGT1JNXG4gICAgICAgIGxldCB1Rk9STSA9IGZhbHNlO1xuICAgICAgICBsZXQgaUZPUk0gPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlc0V2ZW4pIHtcbiAgICAgICAgICAgIGlmIChsYXN0T3BlbikgaUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSB1Rk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocmVFdmVuKSB1Rk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIDEvbSBzb21ld2hlcmUgaW4geF8xIOKApiB4X25cbiAgICAgICAgbGV0IGNhbGNmcm9tID0gLTE7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBmeCA9IGZWYWxzW2ldOyBcblxuICAgICAgICAgICAgaWYgKGZ4ID09IDEpIHtcbiAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGk7IC8vIFsxXSBpZiBtIGlzIHNvbWV3aGVyZSwgc2V0IGNhbGN1bGF0aW9uIHN0YXJ0IGZyb20gdGhlcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDApIHplcm9zKys7IC8vIFszXSBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IHplcm9zIHRoZXJlIGFyZVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMiB8fCBmeCA9PSAzKSB7IC8vIFsyXVxuICAgICAgICAgICAgICAgIGlmKGZpcnN0VW5kZWYgPT0gLTEpIGZpcnN0VW5kZWYgPSBpOyAvLyBpZiB0aGVyZSBpcyBhIGZpcnN0IDIvdSBvciAzL2ksIHJlbWVtYmVyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihmeCAhPSBmVmFsc1tmaXJzdFVuZGVmXSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxjZnJvbSA9IGZpcnN0VW5kZWY7IC8vIGlmIDMvMiBvciAyLzMgcGFpcnMsIHNldCBjYWxjdWxhdGlvbiBmb3JtIGZpcnN0IHVuZGVmLiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBpZiAoemVyb3MgPT0gZlZhbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBbM10gaW4gY2FzZSBhbGwgdmFyaWFibGVzIGFyZSBuLCBqdXN0IHJldHVybiB0aGUgdW5kZWZpbmVkL2ltYWdpbmFyeSB2YWx1ZSBvZiB0aGUgRk9STVxuICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gMztcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGNmcm9tID49IDApIHtcbiAgICAgICAgICAgIC8vIFsxfDJdIGlmIHRoZXJlIGlzIGEgMS9tIHNvbWV3aGVyZSBpbiB0aGUgZm9ybSwgd2UgY2FuIGVhc2lseSBjYWxjdWxhdGUgdGhlIHJlc3QgZnJvbSB0aGlzIHBvaW50XG4gICAgICAgICAgICBsZXQgdmFsID0gMTtcbiAgICAgICAgICAgIGZvcihsZXQgaT1jYWxjZnJvbTsgaTxmVmFscy5sZW5ndGg7IGkrKykgeyAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBpID09IGZWYWxzLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmVsKHZhbCxmVmFsc1tpXSk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB2YWwgPSB0aGlzLmludiggdGhpcy5yZWwodmFsLGZWYWxzW2ldKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIHdoYXQgcmVtYWlucywgd2lsbCBvbmx5IGJlIGVpdGhlclxuICAgICAgICAvLyAtICgxKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgbW4vMiAgIG9yXG4gICAgICAgIC8vIC0gKDIpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciAobW4pLzNcbiAgICAgICAgLy8gU28gd2UgY2FsY3VsYXRlIGZyb20gdGhlIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzLCBiZWNhdXNlIHdpdGggQzIgKGRlZ2VuZXJhdGUpIGFsbCBlbHNlIGNhbiBiZSBpZ25vcmVkXG5cbiAgICAgICAgLy8gZm9yIGV2ZW4gY2xvc2VkIHJlLWVudHJ5LUZPUk1zIHdpdGggdW5ldmVuIHJlc29sdXRpb24gKHVGT1JNIGMxKSwgd2UgbmVlZCB0byBkbyB0aGUgY2FsY3VsYXRpb24gdHdpY2VcbiAgICAgICAgY29uc3QgcmVwZWF0ID0gKHJlRXZlbiAmJiAhcmVzRXZlbiAmJiAhbGFzdE9wZW4pPyAyOjE7XG4gICAgICBcbiAgICAgICAgZm9yKGxldCBpPShmVmFscy5sZW5ndGgqcmVwZWF0KS0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gaSVmVmFscy5sZW5ndGg7IC8vIHJlcGVhdGVkIHZhcmlhYmxlIGluZGV4XG5cbiAgICAgICAgICAgIGlmIChmVmFsc1tpbmRleF0gPT0gMiB8fCBmVmFsc1tpbmRleF0gPT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlSZXYgPSAoZlZhbHMubGVuZ3RoKnJlcGVhdCktMSAtIGk7IC8vIHJldmVyc2UgaW5kZXggdG8gZWFzaWVyIGNoZWNrIGZvciBpbnRlcnByZXRhdGlvbiAyIChzZWUgbmV4dClcblxuICAgICAgICAgICAgICAgIGlmIChhbHRJbnRlcnByICYmICgobGFzdE9wZW4gJiYgaVJldiUyPT0wKSB8fCAoIWxhc3RPcGVuICYmIGlSZXYlMj09MSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDI6IHJlY3Vyc2l2ZSBpZGVudGl0eSAoIMaSPSgoxpIpKSA8LT4gbW4gKVxuICAgICAgICAgICAgICAgICAgICAvLyDGkj0oKMaSKSkgY2FuIGJlIHNlcGFyYXRlZCBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGU7IHRoaXMgaXMgdGhlIGNhc2UgaWYgZWl0aGVyOlxuICAgICAgICAgICAgICAgICAgICAvLyAtICgxKSB0aGUgRk9STSBpcyBvcGVuIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIGV2ZW4gICAgICBvclxuICAgICAgICAgICAgICAgICAgICAvLyAtICgyKSB0aGUgRk9STSBpcyBjbG9zZWQgYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgb2RkXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIGlmIHRoZSBudW1iZXIgb2YgY3Jvc3NlcyBiZXR3ZWVuIMaSIGFuZCBvdXIgdmFyIGlzIGV2ZW4sIHdlIGRpc3Rpbmd1aXNoIHR3byBjYXNlczpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlGT1JNKSByZXR1cm4gdGhpcy5yZWwoMyxmVmFsc1tpbmRleF0pOyAvLyBpRk9STTogKMaSPSgoxpIpKSl4IDwtPiAobW4pIHhcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5yZWwoMixmVmFsc1tpbmRleF0pOyAgICAgICAvLyB1Rk9STTogIMaSPSgoxpIpKXggIDwtPiAgbW4geFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gWzVdIGlmIGV2ZXJ5dGhpbmcgZWxzZSBmYWlscywgdXNlIGNhc2UgZGlzdGluY3Rpb246IHVGT1JNIGlGT1JNIChwLjk0KTsgYWxzbyBhY2NvcmRpbmcgdG86XG4gICAgICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIChwLjE2NykgaW50ZXJwcmV0YXRpb24gMTogcmVjdXJzaW9uIGluc3RydWN0aW9uICggxpI9KCjGkikpIGFuZCBtbiBuZWVkIHRvIGJlIGRpZmZlcmVudGlhdGVkKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXNlMCA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UwID0gdGhpcy5pbnYoY2FzZTApOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAwOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDApOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UwID0gdGhpcy5yZWwoY2FzZTAsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UwID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UwLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjYXNlMSA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmICFyZXNFdmVuICYmICFyZUV2ZW4pIGNhc2UxID0gdGhpcy5pbnYoY2FzZTEpOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBqPTA7IGo8KGZWYWxzLmxlbmd0aCpyZXBlYXQpOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmeCA9IDA7IC8vIGFsbCBvdGhlciB2YWx1ZXMgd2lsbCBiZSAoZGVnZW5lcmF0ZWQgdG8pIHplcm9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihmVmFsc1tpbmRleF0gPT0gMikgZnggPSAxOyAvLyBsYXN0IG9jY2FzaW9uIG9mIG1uLzIgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBmeCA9IHRoaXMuaW52KDEpOyAvLyBsYXN0IG9jY2FzaW9uIG9mIChtbikvMyB3aWxsIGJlIGludGVycHJldGVkIGFzICgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UxID0gdGhpcy5yZWwoY2FzZTEsZngpOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UxID0gdGhpcy5pbnYoIHRoaXMucmVsKGNhc2UxLGZ4KSApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udCggY2FzZTAsY2FzZTEgKTsgLy8gY29udHJhdmFsZW5jZSBvZiBib3RoIGNhc2VzXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9OyAvLyBlbmQgcmVFbnRyeSgpXG5cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICBDT01QTEVYIEZPUk0gQ0FMQ1VMQVRJT05TXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtIDIgVkFSSUFCTEVTXG5cbiAgICBzdGF0aWMgaW1wbEwoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiAoeCl5ICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5pbnYoZngpLGZ5ICk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW1wbFIoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiB4KHkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggZngsdGhpcy5pbnYoZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBwcmUoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwcmVzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoKHgpeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxMKGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIHBvc3QoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJwb3N0c2VjdGlvblwiL1wiZGVjaXNpb25cIjogKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsUihmeCxmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNvbnQoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJjb250cmF2YWxlbmNlXCIvXCJlaXRoZXItb3JcIjogKCh4KXkpICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMucHJlKGZ4LGZ5KSwgdGhpcy5wb3N0KGZ4LGZ5KSApO1xuICAgIH07XG4gICAgc3RhdGljIGVxdWl2KGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiZXF1aXZhbGVuY2VcIi8/OiAoICgoeCl5KSAoeCh5KSkgKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuY29udChmeCxmeSkgKTtcbiAgICB9O1xuXG59IiwiaW1wb3J0IEZGb3JtIGZyb20gJy4vZmZvcm0nO1xuaW1wb3J0IHsgZm9ybUROQV9odG1sLCB2bWFwX3N2Zywgdm1hcFBlcnNwZWN0aXZlc19zdmcsIHZtYXBMaXN0X3N2ZyB9IGZyb20gJy4uL21vZHVsZXMvZG5hLXN2Zyc7XG5pbXBvcnQgeyBwZXJtdXRlQXJyYXksIHBhZCwgY3JlYXRlVmFsaWRhdGlvbiwgZXF1YWxBcnJheXMgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCB7IGdldFJhbmRvbUJpZ0ludCB9IGZyb20gJy4uLy4uL2NvbW1vbi9iaWdpbnQtaGVscGVyJztcblxuY29uc3QgYmlnSW50ID0gcmVxdWlyZSgnYmlnLWludGVnZXInKTsgLy8gb2Jzb2xldGUgd2l0aCBiZXR0ZXIgQmlnSW50IHN1cHBvcnQgaW4gYnJvd3NlcnNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkRuYSBleHRlbmRzIEZGb3JtIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICdkbmEnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTkvMjAgUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBFeHRlbnNpb25zIG9mIEZGT1JNXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGNhbGNBbGwoaW5wdXQpIHtcbiAgICBcdC8qIGV4dGVuc2lvbiB0byByZXByZXNlbnQgZm9ybUROQSBhcyBGT1JNIGNhbGN1bGF0aW9uICovXG5cbiAgICBcdGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG5cbiAgICBcdFx0Y29uc3QgZG5hID0gaW5wdXQuc3BsaXQoJzonKS5wb3AoKTtcbiAgICBcdFx0Y29uc3QgcmVzdWx0cyA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpO1xuXG4gICAgXHRcdGNvbnN0IHZudW0gPSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcbiAgICBcdFx0Y29uc3QgdmFycyA9IEFycmF5LmZyb20oe2xlbmd0aDogdm51bX0sIChfLCBpKSA9PiBgXCJ4XyR7aX1cImAgKTtcbiAgICBcdFx0Y29uc3QgdmFscyA9IHt9O1xuXG5cdCAgICAgICAgaWYgKHZudW0gPCAxKSB7XG5cdCAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gcGFyc2VJbnQocmVzdWx0c1swXSk7XG5cdCAgICAgICAgICAgIHJldHVybiB2YWxzO1xuXHQgICAgICAgIH1cblxuICAgIFx0XHRjb25zdCBpbnRlcktleSA9ICcnK3ZhcnMuam9pbigpKyc7JztcblxuXHQgICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICAgICAgY29uc3QgaW50ZXJwclZhbHMgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSk7XG5cdCAgICAgICAgICAgIGNvbnN0IGludGVycHIgPSBpbnRlcnByVmFscy5zcGxpdCgnJykubWFwKCh2YWwsbikgPT4gKHt2YXI6IHZhcnNbbl0sIHZhbHVlOiBwYXJzZUludCh2YWwpfSkpO1xuXG5cdCAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkraW50ZXJwclZhbHNdID0gcmVzdWx0c1tpXTtcblx0ICAgICAgICB9XG5cblx0ICAgICAgICByZXR1cm4gdmFscztcbiAgICBcdH1cblxuICAgIFx0cmV0dXJuIHN1cGVyLmNhbGNBbGwoaW5wdXQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoaW5wdXQpIHtcbiAgICBcdC8qIGV4dGVuc2lvbiB0byBnZXQgdmFyaWFibGVzIGZyb20gZm9ybUROQSAqL1xuXG4gICAgXHRpZiAodHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycgJiYgaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICBcdFx0Y29uc3QgeyBkbmEsIGZvcm11bGEsIHZhckxpc3QgfSA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuXG4gICAgXHRcdGlmICh2YXJMaXN0ICE9PSB1bmRlZmluZWQpIHJldHVybiB2YXJMaXN0O1xuICAgIFx0XHRlbHNlIGlmIChmb3JtdWxhICE9PSB1bmRlZmluZWQpIHJldHVybiBzdXBlci5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG5cblx0ICAgIFx0Y29uc3Qgdm51bSA9IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpO1xuICAgIFx0XHRyZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IGB4XyR7aX1gICk7XG4gICAgXHR9XG5cblx0XHRyZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGlucHV0KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZW5jb2RlIChfZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgXHQvKiBFbmNvZGVzIGEgRk9STSBhcyBhIGRuYSBzdHJpbmcgKi9cblxuICAgIFx0Y29uc3QgZm9ybSA9IHZhcm9yZGVyID8gdGhpcy5yZU9yZGVyVmFycyhfZm9ybSwgdmFyb3JkZXIpIDogX2Zvcm07XG5cbiAgICBcdHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY2FsY0FsbChmb3JtKSkucmV2ZXJzZSgpLmpvaW4oJycpO1xuIFx0fTtcblxuLy8gRVhQRVJJTUVOVEFMID5cblxuIFx0c3RhdGljIGRlY29kZSAoZG5hLCB2YXJMaXN0PXVuZGVmaW5lZCkge1xuXHRcdC8qIERlY29kZXMgZG5hIGludG8gKG9uZSBvZiBpdHMpIHNpbXBsZXN0IGNvcnJlc3BvbmRpbmcgRk9STSBtb2RlbChzKSBhcyBhIGpzb24tcmVwcmVzZW50YXRpb24gKi9cblxuXG5cdFx0Ly8gLT4gcmVtb3ZlIDAtdGVybXMgYW5kIGdyb3VwaW5ncz9cblxuXHRcdGlmICh2YXJMaXN0ICYmIHZhckxpc3QubGVuZ3RoICE9PSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSkgdGhyb3cgbmV3IEVycm9yKCdOdW1iZXIgb2YgdmFyaWFibGVzIGluIGdpdmVuIHZhcmlhYmxlIGxpc3QgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKTtcblx0XHRpZiAoIXZhckxpc3QpIHZhckxpc3QgPSB0aGlzLmdlbmVyYXRlVmFyTmFtZXModGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkpOyAvLy5tYXAoc3RyID0+IGBcIiR7c3RyfVwiYCk7XG5cdFx0XG5cdFx0Y29uc3QgdW5pdiA9IHRoaXMudW5pdmVyc2Vfbih2YXJMaXN0KTtcblx0XHRjb25zdCB2YWxzID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCk7XG5cblx0XHRyZXR1cm4gdW5pdi5tYXAoKHRlcm0sIGkpID0+IHtcblx0XHRcdHJldHVybiBgKCgke3ZhbHNbaV19KSgke3Rlcm19KSlgO1xuXHRcdH0pLmpvaW4oJycpO1xuIFx0fVxuXG4vLyA8IEVORFxuXG5cdHN0YXRpYyBpbnRUb0ROQSAoaW50LCB2bnVtKSB7XG5cdFx0LyogVGFrZXMgYW4gaW50ZWdlciAodXN1YWxseSBCaWdJbnQpIGFuZCBhIGRlc2lyZWQgdmFyaWFibGUgbnVtYmVyIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGZvcm1ETkEgXG5cblx0XHROb3RlOiB2YXJpYWJsZSBudW1iZXIgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGludGVuZGVkIG51bWJlciBvZiBsZWFkaW5nIHplcm9zIGNhbm5vdCBiZSBpbmZlcmVkIGZyb20gdGhlIGludGVnZXIgYWxvbmUuIElmIG5vIHZhcmlhYmxlIG51bWJlciBpcyBnaXZlbiwgdGhlIHNtYWxsZXN0IHZhcmlhYmxlIG51bWJlciBwb3NzaWJsZSBmb3IgdGhlIHF1YXRlcm5pb24gaXMgYXNzdW1lZCB0byBnZW5lcmF0ZSB2YWxpZCBmb3JtRE5BLiAqL1xuXG5cdFx0Y29uc3QgcXVhdCA9IGludC50b1N0cmluZyg0KTtcblx0XHRpZiAocXVhdC5zdWJzdHIoMCwxKSA9PT0gJy0nKSB0aHJvdyBuZXcgRXJyb3IoJ05lZ2F0aXZlIGludGVnZXJzIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZm9ybUROQS4nKTtcblx0XHRpZiAocXVhdC5pbmNsdWRlcygnLicpKSB0aHJvdyBuZXcgRXJyb3IoJ0ZyYWN0aW9uYWwgbnVtYmVycyBjYW5ub3QgYmUgY29udmVydGVkIHRvIGZvcm1ETkEuJylcblxuXHRcdGNvbnN0IGRuYUxlbiA9IHZudW0gPyA0Kip2bnVtIDogKGZ1bmN0aW9uIG1pbkRuYUxlbihzdHJMZW4sIG49MCkgeyBcblx0XHRcdHJldHVybiA0KipuID49IHN0ckxlbiA/IDQqKm4gOiBtaW5EbmFMZW4oc3RyTGVuLCBuKzEpO1xuXHRcdH0pKHF1YXQubGVuZ3RoKTtcblxuXHRcdGlmIChxdWF0Lmxlbmd0aCA+IGRuYUxlbikgdGhyb3cgbmV3IEVycm9yKCdJbnRlZ2VyIHNpemUgZXhjZWVkcyBkZXNpcmVkIEROQSBsZW5ndGguJyk7XG5cdFx0cmV0dXJuIHBhZChxdWF0LCBkbmFMZW4pO1xuXHR9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gT3V0cHV0XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGZvcm1Ub0ROQSAoaW5wdXQsIHZhcm9yZGVyPXVuZGVmaW5lZCwgb3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICBcdC8qIGNvbnZlcnRzIGEgZm9ybSBpbnRvIGl0cyBmb3JtRE5BIHJlcHJlc2VudGF0aW9uIGluIEhUTUwgKi9cblxuICAgIFx0Y29uc3Qge291dHB1dH0gPSB7IG91dHB1dDogJ3RleHQnLCAuLi5vcHRpb25zIH07XG5cbiAgICBcdGxldCBkbmEgPSB1bmRlZmluZWQsIGZvcm11bGEgPSB1bmRlZmluZWQsIHZhckxpc3QgPSB1bmRlZmluZWQ7XG4gICAgXHRpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICBcdFx0Ly8gaWYgdGhlIGlucHV0IGNvbnRhaW5zIHRoZSBtYXJrICc6OicgZm9yIGZvcm1ETkEsIHJldHVybiBpdCBpZiBpdCdzIHZhbGlkXG5cdFx0XHRpZiAoIXRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHRocm93IG5ldyBFcnJvcignSW5wdXQgaXMgbm90IHZhbGlkIGZvcm1ETkEnKTtcblxuICAgIFx0XHRjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuXG4gICAgXHRcdGRuYSA9IHBhcnRzLmRuYTtcbiAgICBcdFx0Zm9ybXVsYSA9IHBhcnRzLmZvcm11bGE7XG4gICAgXHRcdHZhckxpc3QgPSBwYXJ0cy52YXJMaXN0O1xuXHQgICAgfVxuXHQgICAgZWxzZSB7XG5cdFx0ICAgIC8vIGlmIG5vdCwgcHJvY2VzcyB0aGUgaW5wdXQgYXMgYSBGT1JNIHdpdGggc3BlY2lmaWVkIG9yIGRlZmF1bHQgdmFyb3JkZXIgYW5kIGVuY29kZSBpdCB0byBkbmFcblx0XHRcdGRuYSA9IHRoaXMuZW5jb2RlKCBpbnB1dCwgKHZhcm9yZGVyID8gdmFyb3JkZXIgOiB1bmRlZmluZWQpICk7XG5cdFx0XHRmb3JtdWxhID0gaW5wdXQ7XG5cdFx0XHR2YXJMaXN0ID0gdmFyb3JkZXIgPyB2YXJvcmRlciA6IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXHQgICAgfVxuXG5cdFx0c3dpdGNoIChvdXRwdXQpIHtcblx0XHRcdGNhc2UgJ2h0bWwnOiB7XG5cdFx0XHRcdHJldHVybiBmb3JtRE5BX2h0bWwoZm9ybXVsYSwgZG5hLCB2YXJMaXN0KTtcblx0XHRcdH1cblx0XHRcdGNhc2UgJ3RleHQnOiB7XG5cdFx0XHRcdHJldHVybiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkID8gZm9ybXVsYSA6ICcnKSArICh2YXJMaXN0ICYmIGRuYS5sZW5ndGggPiAxID8gYC5bJHt2YXJMaXN0LmpvaW4oJywnKX1dYCA6ICcnKSArICc6OicgKyBkbmE7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICdudW0nOiB7XG5cdFx0XHRcdHJldHVybiBkbmE7XG5cdFx0XHR9XG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdHJldHVybiBbZm9ybXVsYSwgdmFyTGlzdCwgZG5hXTtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuXG4gICAgc3RhdGljIGRuYVRvRk9STSAoZm9ybUROQSwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgIFx0LyogY29udmVydHMgZm9ybUROQSB3aXRoIGEgZ2l2ZW4gdmFyaWFibGUgbGlzdC9vcmRlciBpbnRvIGEgZ3JhcGggcmVwcmVzZW50YXRpb24gb2YgKG9uZSBvZiBpdHMpIHNpbXBsZXN0IGNvcnJlc3BvbmRpbmcgRk9STSBtb2RlbChzKSAqL1xuXG4gICAgXHQvLyA+Pj4gbm90IHlldCBpbXBsZW1lbnRlZCFcblxuICAgIFx0cmV0dXJuIHRoaXMuZGVjb2RlKGZvcm1ETkEsIHZhcm9yZGVyKTtcbiAgICB9XG5cblx0c3RhdGljIGdlblJhbmRvbUROQSAodm51bSkge1xuXHRcdC8qIEdlbmVyYXRlcyBhIHJhbmRvbSBmb3JtRE5BIHN0cmluZyBmb3IgYSBnaXZlbiB2YXJpYWJsZSBudW1iZXIgKi9cblxuXHRcdGNvbnN0IG1heE4gPSBiaWdJbnQoNCkucG93KCBiaWdJbnQoNCkucG93KHZudW0pICk7XG5cdFx0Y29uc3QgdmFsdWVfYmluID0gZ2V0UmFuZG9tQmlnSW50KCBtYXhOLnN1YnRyYWN0KDEpICk7XG5cdFx0cmV0dXJuIHRoaXMuaW50VG9ETkEodmFsdWVfYmluLCB2bnVtKTtcblx0fVxuXG4gICAgc3RhdGljIHZtYXAgKGlucHV0LCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgXHQvKiBnZW5lcmF0ZXMgdm1hcCBIVE1MIGZyb20gZm9ybS9mb3JtRE5BIGlucHV0ICovXG5cblx0XHRjb25zdCB7IG91dHB1dCwgbGltaXRTaXplLCBjb252RGVmYXVsdFZhcm9yZGVyLFxuXHRcdFx0XHRzaXplLCBnYXBHcm93LCBtYXJnaW5GdW5jLCBzdHJva2VXIH0gPSB7XG5cdFx0XHRcdFx0b3V0cHV0OiAnc3ZnJyxcblx0XHRcdFx0XHRsaW1pdFNpemU6IHRydWUsIGNvbnZEZWZhdWx0VmFyb3JkZXI6IHRydWUsXG5cdFx0XHRcdFx0c2l6ZTogdW5kZWZpbmVkLCBnYXBHcm93OiAxLjUsIG1hcmdpbkZ1bmM6IHVuZGVmaW5lZCwgc3Ryb2tlVzogMC41LFxuXHRcdFx0XHRcdC8vIGZpbHRlcjogJzExMTEnLCA8LSBtaWdodCBhZGQgbGF0ZXJcblx0XHRcdFx0XHQuLi5vcHRpb25zfTtcblxuICAgIFx0bGV0IGRuYSA9IHVuZGVmaW5lZDtcbiAgICBcdGxldCBmb3JtdWxhID0gaW5wdXQ7XG5cbiAgICBcdGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG5cdFx0XHRjb25zdCBkbmFQYXJ0cyA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuXHRcdFx0ZG5hID0gZG5hUGFydHMuZG5hO1xuXHRcdFx0Zm9ybXVsYSA9IGRuYVBhcnRzLmZvcm11bGE7XG5cdFx0XHRjb25zdCB2YXJMaXN0ID0gZG5hUGFydHMudmFyTGlzdCA/IGRuYVBhcnRzLnZhckxpc3QgOiB0aGlzLmdldFZhcmlhYmxlcyhpbnB1dCk7XG5cblx0XHRcdGlmICh2YXJvcmRlciAhPT0gdW5kZWZpbmVkICYmIHZhckxpc3QgIT09IHVuZGVmaW5lZCAmJiAhZXF1YWxBcnJheXModmFyb3JkZXIsIHZhckxpc3QpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignVmFyaWFibGUgb3JkZXIgaXMgc3BlY2lmaWVkIGluIHRoZSBmb3JtRE5BIGlucHV0IGFuZCBhcyBhbiBhcmd1bWVudCBmb3IgdGhlIHZtYXAgZnVuY3Rpb24gYW5kIHRoZXkgYXJlIGRpZmZlcmVudC4gUGxlYXNlIHNlbGVjdCBvbmx5IG9uZSBzcGVjaWZpY2F0aW9uIHRvIGF2b2lkIGNvbmZsaWN0aW5nIHJlc3VsdHMuJyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICh2YXJMaXN0KSB7XG5cdFx0XHRcdHZhcm9yZGVyID0gdmFyTGlzdDtcblx0XHRcdH0gZWxzZSBpZiAoZm9ybXVsYSkge1xuXHRcdFx0XHR2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXHRcdFx0fVxuICAgIFx0fVxuXHRcdGVsc2UgaWYgKCF2YXJvcmRlcikge1xuXHRcdFx0dmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcblx0XHRcdGlmIChjb252RGVmYXVsdFZhcm9yZGVyKSB2YXJvcmRlciA9IHRoaXMubWF0Y2hEZWZhdWx0VmFyT3JkZXIodmFyb3JkZXIpO1xuXHRcdH1cblxuXHRcdGlmICghZG5hKSBkbmEgPSB0aGlzLmVuY29kZShmb3JtdWxhLCB2YXJvcmRlcik7XG5cdFx0Y29uc3Qgdm51bSA9IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpO1xuXG5cdFx0aWYgKHZudW0gPT09IE5hTikgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHZhcmlhYmxlIG51bWJlciBmb3Igdm1hcHMuJyk7XG5cdFx0aWYgKGxpbWl0U2l6ZSAmJiB2bnVtID4gOCkgdGhyb3cgbmV3IEVycm9yKCd2bWFwcyB3aXRoIG1vcmUgdGhhbiA4IHZhcmlhYmxlcyBhcmUgdG9vIGNvbXB1dGF0aW9uYWxseSBpbnRlbnNpdmUgdG8gYmUgcmVuZGVyZWQgd2l0aCB0aGlzIGltcGxlbWVudGF0aW9uLiBJZiB5b3Ugc3RpbGwgd2FudCB0byBwcm9jZWVkLCBhZGQgdGhlIG9wdGlvbiBcImxpbWl0U2l6ZTogZmFsc2VcIiB0byB5b3VyIHZtYXAgZnVuY3Rpb24gY2FsbCAodXNpbmcgdGhlIGZvcm1mb3JtIGxpYnJhcnkpLicpO1xuXG5cblx0XHRjb25zdCByZXZlcnNlZEROQSA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuXHRcdFxuXHRcdGNvbnN0IGNlbGxTaXplID0gc2l6ZSB8fCAodm51bSA9PiB7XG5cdFx0XHQvLyByZWR1Y3Rpb24gYnkgMnB4IGZvciBlYWNoIGFkZGl0aW9uYWwgdmFyaWFibGUgaWYgdm51bSA+IDNcblx0XHRcdGNvbnN0IG4gPSAxNyAtICh2bnVtID4gMyA/IDIgKiAodm51bS0zKSA6IDApOyAvLyBjaGFuZ2VkIGZyb206IDE0IC0gKHZudW0tMSk7XG5cdFx0XHRyZXR1cm4gTWF0aC5tYXgoMiwgbik7IC8vIG1pbiBzaXplIG9mIDJweFxuXHRcdH0pKHZudW0pO1xuXG5cdFx0Ly8gbWFyZ2lucyBjYW4gYWxzbyBiZSBjYWxjdWxhdGVkIHRocm91Z2ggYSBjdXN0b20gZnVuY3Rpb25cblx0XHRjb25zdCBtYXJnaW5zID0gW3N0cm9rZVcsIFxuXHRcdFx0Li4uQXJyYXkuZnJvbSh7bGVuZ3RoOnZudW0tMX0sIG1hcmdpbkZ1bmMgPyBtYXJnaW5GdW5jIDogKChfLGkpID0+IChpKzEpICogZ2FwR3JvdykgKV07XG5cdFx0Y29uc3QgY2VsbCA9IHt3OmNlbGxTaXplLCBoOmNlbGxTaXplfTtcblxuXG5cdFx0Y29uc3Qgdm1hcFRyZWUgPSB0aGlzLmNvbnN0cnVjdFZtYXAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpO1xuXG5cdFx0c3dpdGNoIChvdXRwdXQpIHtcblx0XHRcdGNhc2UgJ3N2Zyc6XG5cdFx0XHRcdHJldHVybiB2bWFwX3N2Zyh2bWFwVHJlZSwgaW5wdXQsIHZhcm9yZGVyLCBvcHRpb25zKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiB2bWFwVHJlZTtcblx0XHR9XG4gICAgfVxuXG5cdHN0YXRpYyB2bWFwUGVyc3BlY3RpdmVzIChmb3JtLCB2YXJvcmRlcj11bmRlZmluZWQsIGdsb2JhbE9wdGlvbnM9dW5kZWZpbmVkLCBsb2NhbE9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdFx0LyogR2VuZXJhdGVzIGEgbGlzdCBvZiB2bWFwIHBlcnNwZWN0aXZlcyBhcyBwZXJtdXRhdGlvbnMgb2YgYSBmb3JtL2Zvcm1ETkEgaW5wdXQgKi9cblx0XHQvLyBOb3RlOiBmb3JtRE5BIGlucHV0IG5vdCB5ZXQgc3VwcG9ydGVkIChwZXJtdXRhdGlvbiBhbGdvcml0aG0gcmVxdWlyZWQpXG5cblx0XHRjb25zdCB7b3V0cHV0LCBsaW1pdFNpemV9ID0geyBvdXRwdXQ6ICdzdmcnLCBsaW1pdFNpemU6IHRydWUsIC4uLmdsb2JhbE9wdGlvbnMgfTtcblxuXHRcdGlmICh0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnICYmIGZvcm0uaW5jbHVkZXMoJzo6JykpIHRocm93IG5ldyBFcnJvcignZm9ybUROQSBpbnB1dCBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3Igdm1hcCBwZXJzcGVjdGl2ZXMuJyk7XG5cblx0XHRpZiAodmFyb3JkZXIgPT09IHVuZGVmaW5lZCkgdmFyb3JkZXIgPSB0aGlzLm1hdGNoRGVmYXVsdFZhck9yZGVyKCB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKSApO1xuXHRcdGNvbnN0IHZudW0gPSB2YXJvcmRlci5sZW5ndGg7XG5cdFx0aWYgKGxpbWl0U2l6ZSAmJiB2bnVtID4gNSkgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJpbmcgYWxsIHRoZSBwZXJzcGVjdGl2ZXMgZm9yIHZtYXBzIHdpdGggbW9yZSB0aGFuIDUgdmFyaWFibGVzIGlzIHRvbyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbi4gWW91IGNhbiwgaG93ZXZlciwgc3RpbGwgY29tcHV0ZSBzaW5nbGUgcGVybXV0YXRpb25zIGJ5IGNoYW5naW5nIHRoZSB2YXJpYWJsZSBvcmRlciBvZiB5b3VyIEZPUk0uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcFBlcnNwZWN0aXZlcyBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cblx0XHRjb25zdCBmb3JtdWxhID0gZm9ybTsgLy8gPDw8IHN1cHBvcnQgZm9yIEpTT04/XG5cblx0XHRjb25zdCB2bWFwUGVybXV0YXRpb25zID0gcGVybXV0ZUFycmF5KHZhcm9yZGVyKVxuXHRcdFx0Lm1hcCh2YXJvcmRlciA9PiB0aGlzLnZtYXAoZm9ybXVsYSwgdmFyb3JkZXIsIHtcblx0XHRcdFx0aGlkZUlucHV0TGFiZWw6IHRydWUsIFxuXHRcdFx0XHRjdXN0b21MYWJlbDogdW5kZWZpbmVkLFxuXHRcdFx0XHQuLi5sb2NhbE9wdGlvbnMgfSkgKTtcblxuXHRcdHN3aXRjaCAob3V0cHV0KSB7XG5cdFx0XHRjYXNlICdzdmcnOlxuXHRcdFx0XHRyZXR1cm4gdm1hcFBlcnNwZWN0aXZlc19zdmcodm1hcFBlcm11dGF0aW9ucywgZm9ybXVsYSwgZ2xvYmFsT3B0aW9ucyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdm1hcFBlcm11dGF0aW9ucztcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgdm1hcExpc3QgKGlucHV0TGlzdCwgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQpIHtcblx0XHQvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXBzIGZyb20gYW4gYXJyYXkgb2YgRk9STSBpbnB1dHMgKi9cblx0XHQvLyBpbnB1dExpc3QgZm9ybWF0OiBbWydmb3JtL2Zvcm1ETkEnLCBbdmFyb3JkZXJdL3VuZGVmaW5lZCwgb3B0aW9ucy91bmRlZmluZWRdLCAuLi5dXG5cblx0XHRjb25zdCB7b3V0cHV0fSA9IHsgb3V0cHV0OiAnc3ZnJywgLi4uZ2xvYmFsT3B0aW9ucyB9XG5cblx0XHRjb25zdCB2bWFwcyA9IGlucHV0TGlzdC5tYXAoaW5wdXQgPT4gdGhpcy52bWFwKGlucHV0WzBdLCBpbnB1dFsxXSwgey4uLmlucHV0WzJdLCAuLi5nbG9iYWxPcHRpb25zfSkgKTtcblxuXHRcdHN3aXRjaCAob3V0cHV0KSB7XG5cdFx0XHRjYXNlICdzdmcnOlxuXHRcdFx0XHRyZXR1cm4gdm1hcExpc3Rfc3ZnICh2bWFwcywgZ2xvYmFsT3B0aW9ucyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdm1hcHM7XG5cdFx0fVxuXHR9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRGF0YSBTdHJ1Y3R1cmVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0c3RhdGljIGNvbnN0cnVjdFZtYXAgKHJldmVyc2VkRE5BLCB2bnVtLCBjZWxsLCBtYXJnaW5zKSB7XG5cdFx0LyogUmVjdXJzaXZlbHkgY29uc3RydWN0cyB2bWFwIGRhdGEtc3RydWN0dXJlIGZyb20gZm9ybUROQSAqL1xuXG5cdFx0Y29uc3QgY2FsY0dhcFN1bSA9ICh2LG1hcmdpbnMpID0+IG1hcmdpbnMuc2xpY2UoMSx2KS5yZXZlcnNlKCkucmVkdWNlKChhY2MsY3VycixpZHgpID0+IGFjYyArICgyKippZHgpICogY3VyciwgMCk7XG5cdFx0Y29uc3QgZnggPSAocWksbikgPT4gIChxaSUyKSAqIChuICE9PSB1bmRlZmluZWQgPyBuIDogMCk7ICAgICAgICAgLy8geHBvczogMDEyMyAtPiAwMTAxICogc2hpZnQgblxuXHRcdGNvbnN0IGZ5ID0gKHFpLG4pID0+ICsocWk+MCAmJiBxaTwzKSAqIChuICE9PSB1bmRlZmluZWQgPyBuIDogMCk7IC8vIHlwb3M6IDAxMjMgLT4gMDExMCAqIHNoaWZ0IG5cblxuXHRcdGNvbnN0IGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlID0gKGRuYUhvbG9uLCB2Y291bnQsIGNlbGwsIG1hcmdpbnMsIHFpPTApID0+IHtcblx0XHRcdGNvbnN0IHN1YlRyZWUgPSB7fTtcblx0XHRcdGNvbnN0IGdhcFN1bSA9IGNhbGNHYXBTdW0odmNvdW50LG1hcmdpbnMpO1xuXHRcdFx0Y29uc3QgcXRuID0gNCoqdmNvdW50O1xuXHRcdFx0Y29uc3QgbGVuID0gTWF0aC5zcXJ0KHF0bik7XG5cdFx0XHRkbmFIb2xvbiA9IGRuYUhvbG9uLnN1YnN0cihxaSpxdG4sIHF0bik7IC8vIHF1YXJ0ZXIgb2YgdGhlIGZvcm1ETkEgc3RyaW5nXG5cdFx0XG5cdFx0XHRzdWJUcmVlLmRhdGEgPSB7IFxuXHRcdFx0XHRkbmE6ICc6OicrZG5hSG9sb24uc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSxcblx0XHRcdFx0dm51bTogdmNvdW50LCBjZWxsOiBjZWxsLFxuXHRcdFx0XHRtYXJnaW5zOiB2bnVtID4gMCA/IG1hcmdpbnMuc2xpY2UoMCx2Y291bnQpIDogbWFyZ2lucy5zbGljZSgwLDEpXG5cdFx0XHR9O1xuXG5cdFx0XHRzdWJUcmVlLmhlaWdodCA9IHZjb3VudDtcblx0XHRcdHN1YlRyZWUuZGVwdGggPSB2bnVtIC0gKE1hdGgubG9nKHF0bikgLyBNYXRoLmxvZyg0KSk7IC8vIGxvZyBiYXNlIDRcblx0XHRcdHN1YlRyZWUub3JkZXIgPSBxaTtcblx0XHRcblx0XHRcdHN1YlRyZWUucG9zaXRpb24gPSBbXG5cdFx0XHRcdC8vIGJhc2Ugc2hpZnQgID0gICgxKSBjZWxsIHNpemUgKiBsZW5ndGggdW5pdHMgICsgICgyKSBzdW0gb2YgYWxsIHByZXZpb3VzIGdhcHMvbWFyZ2luc1xuXHRcdFx0XHQvLyByZWFsIHNoaWZ0ICA9ICBiYXNlIHNoaWZ0ICArICAoMykgbWFyZ2lucyBvZiBjdXJyZW50IGl0ZXJhdGlvbiBsZXZlbFxuXHRcdFx0XHQvLyAtLSBxaTogY3VycmVudCB2YWx1ZSBpbmRleCAwLzEvMi8zXG5cdFx0XHRcdC8vIC0tIC0tIGZ4L2Z5IG1hcCBxaSB0byB4L3kgcG9zaXRpb25zIG9mIGEgc3F1YXJlIGFuZCBtdWx0aXBseSBieSBzaGlmdCB2YWx1ZSAoMi4gYXJndW1lbnQpXG5cdFx0XHRcdC8vIC0tIG1hcmdpbnM6IFtzdHJva2VXLCAxICogZ2FwR3JvdywgMiAqIGdhcEdyb3csIOKApiAodm51bS0xKSAqIGdhcEdyb3ddXG5cdFx0XHRcdC8vIC0tIC0tIGlmIHZjb3VudCA9PSAwICAgIC0+IHNoaWZ0ICgzKSA9PSBzdHJva2VXXG5cdFx0XHRcdC8vIC0tIC0tIGlmIHZjb3VudCA9PSB2bnVtIC0+IHNoaWZ0ICgzKSA9PSAwXG5cdFx0XHRcdGZ4KHFpLCBsZW4qY2VsbC53KSArIGZ4KHFpLCBnYXBTdW0pICsgZngocWksIG1hcmdpbnNbdmNvdW50XSksXG5cdFx0XHRcdGZ5KHFpLCBsZW4qY2VsbC5oKSArIGZ5KHFpLCBnYXBTdW0pICsgZnkocWksIG1hcmdpbnNbdmNvdW50XSldO1xuXG5cdFx0XHRzdWJUcmVlLnNjYWxlID0gW1xuXHRcdFx0XHRsZW4qY2VsbC53ICsgZ2FwU3VtLCBcblx0XHRcdFx0bGVuKmNlbGwuaCArIGdhcFN1bSBdO1xuXG5cdFx0XHRpZiAodm51bSA9PT0gMCkgeyAvLyBpZiBmb3JtRE5BIG9ubHkgaGFzIGEgc2luZ2xlIHZhbHVlLCBsaWtlIDo6M1xuXHRcdFx0XHRzdWJUcmVlLnZhbHVlID0gZG5hSG9sb247XG5cdFx0XHRcdHJldHVybiBzdWJUcmVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzdWJUcmVlLmNoaWxkcmVuID0gW107XG5cdFx0XG5cdFx0XHRmb3IgKGxldCBpPTA7ICh2Y291bnQgPiAwICYmIGkgPCA0KSB8fMKgKHZjb3VudCA9PT0gMCAmJiBpIDwgMSk7IGkrKykge1xuXHRcdFx0XHRpZiAodmNvdW50ID4gMSkge1xuXHRcdFx0XHRzdWJUcmVlLmNoaWxkcmVuID0gXG5cdFx0XHRcdFx0Wy4uLnN1YlRyZWUuY2hpbGRyZW4sIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlKGRuYUhvbG9uLCB2Y291bnQtMSwgY2VsbCwgbWFyZ2lucywgaSkgXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc3QgdmFsID0gZG5hSG9sb24uc3Vic3RyKGksMSk7XG5cdFx0XG5cdFx0XHRcdHN1YlRyZWUuY2hpbGRyZW4gPSBbLi4uc3ViVHJlZS5jaGlsZHJlbiwgKHtcblx0XHRcdFx0XHQvLyB0eXBlOiAndmFsdWUnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdGRuYTogJzo6Jyt2YWwsXG5cdFx0XHRcdFx0XHR2bnVtOiAwLCBjZWxsOiBjZWxsLFxuXHRcdFx0XHRcdFx0bWFyZ2luczogbWFyZ2lucy5zbGljZSgwLDEpLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dmFsdWU6IHZhbCxcblx0XHRcdFx0XHRoZWlnaHQ6IHZjb3VudC0xLFxuXHRcdFx0XHRcdGRlcHRoOiBzdWJUcmVlLmRlcHRoICsgMSxcblx0XHRcdFx0XHRvcmRlcjogaSxcblx0XHRcdFx0XHQvLyBjb3VudDogMSxcblx0XHRcdFx0XHRwb3NpdGlvbjogW2Z4KGksY2VsbC53KSwgZnkoaSxjZWxsLmgpXSxcblx0XHRcdFx0XHRzY2FsZTogW2NlbGwudywgY2VsbC5oXSxcblx0XHRcdFx0XHQvLyBwYXJlbnQ6IHN1YlRyZWVcblx0XHRcdFx0fSkgXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCAgcmV0dXJuIHN1YlRyZWU7XG5cdFx0fVxuXHRcdHJldHVybiBjb25zdHJ1Y3RWbWFwX3JlY3Vyc2l2ZSAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpO1xuXHR9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gVmFsaWRhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRzdGF0aWMgZG5hTWF0Y2hlc0Zvcm0gKGRuYSwgZm9ybSwgX3Zhckxpc3Q9dW5kZWZpbmVkLCBvcHRpb25zKSB7XG5cdFx0LyogQ2hlY2tzIGlmIGEgZ2l2ZW4gRE5BIGNvZGUgbWF0Y2hlcyBhIGdpdmVuIEZPUk0gKCsgb3B0aW9uYWwgdmFyaWFibGUgbGlzdCkgKi9cblx0XHQvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblx0XHRjb25zdCB2YXJMaXN0ID0gX3Zhckxpc3QgPyBfdmFyTGlzdCA6IHN1cGVyLmdldFZhcmlhYmxlcyhmb3JtKTtcblxuXHRcdGNvbnN0IHZhbGlkYXRpb25zID0gX3Zhckxpc3QgPyBbXG5cdFx0XHRjcmVhdGVWYWxpZGF0aW9uKFxuXHRcdFx0XHQoKSA9PiB0aGlzLmZvcm1NYXRjaGVzVmFyTGlzdChmb3JtLCB2YXJMaXN0KSxcblx0XHRcdFx0J0ZPUk0gZG9lc25cXCd0IG1hdGNoIHRoZSBnaXZlbiB2YXJpYWJsZSBsaXN0JyksXG5cdFx0XHRjcmVhdGVWYWxpZGF0aW9uKFxuXHRcdFx0XHQoKSA9PiB2YXJMaXN0Lmxlbmd0aCA9PT0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSksXG5cdFx0XHRcdCdOdW1iZXIgb2YgdmFyaWFibGVzIGluIGdpdmVuIHZhcmlhYmxlIGxpc3QgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcblx0XHRcdGNyZWF0ZVZhbGlkYXRpb24oXG5cdFx0XHRcdCgpID0+IHRoaXMuZW5jb2RlKGZvcm0sIHZhckxpc3QpID09PSBkbmEsXG5cdFx0XHRcdCdmb3JtRE5BIGNvZGUgaXMgaW5jb25zaXN0ZW50IHdpdGggRk9STSBpbnRlcnByZXRhdGlvbiByZXN1bHRzIChyZXNwZWN0aW5nIHNwZWNpZmllZCB2YXJpYWJsZSBvcmRlciknKSxcblx0XHRdIDogW1xuXHRcdFx0Y3JlYXRlVmFsaWRhdGlvbihcblx0XHRcdFx0KCkgPT4gdmFyTGlzdCAmJiB2YXJMaXN0Lmxlbmd0aCA9PT0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSksXG5cdFx0XHRcdCdOdW1iZXIgb2YgRk9STSB2YXJpYWJsZXMgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcblx0XHRcdGNyZWF0ZVZhbGlkYXRpb24oXG5cdFx0XHRcdCgpID0+IHRoaXMuZW5jb2RlKGZvcm0pID09PSBkbmEsXG5cdFx0XHRcdCdmb3JtRE5BIGNvZGUgaXMgaW5jb25zaXN0ZW50IHdpdGggRk9STSBpbnRlcnByZXRhdGlvbiByZXN1bHRzJyksXG5cdFx0XTtcblxuXHRcdHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcblx0XHRcdGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuXHRcdFx0c3VjY2VzczogZGF0YSA9PiBkYXRhLFxuXHRcdH0pICk7XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG4gICAgc3RhdGljIGlzVmFsaWRETkEgKF9pbnB1dCwgb3B0aW9ucykge1xuICAgIFx0LyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGluIGZvcm1ETkEgZm9ybWF0IChoYXMgdG8gYmUgbWFya2VkIHdpdGggJzo6JyB0byBub3QgY29uZnVzZSBpdCB3aXRoIGEgRk9STSBvdXQgb2YgY29uc3RhbnRzKSAqL1xuICAgIFx0Y29uc3Qge2NvbXBhcmVGb3JtLCByZXF1aXJlTWFya30gPSB7IGNvbXBhcmVGb3JtOiB0cnVlLCByZXF1aXJlTWFyazogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgXHRjb25zdCBpbnB1dCA9IHJlcXVpcmVNYXJrID8gX2lucHV0IDogJzo6JytfaW5wdXQ7XG5cbiAgICBcdGNvbnN0IHZhbGlkYXRpb25zMSA9IFtcbiAgICBcdFx0Y3JlYXRlVmFsaWRhdGlvbigoKSA9PiB0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyxcbiAgICBcdFx0XHQnZm9ybUROQSBpbnB1dCBpcyBub3Qgb2YgdHlwZSDigJhzdHJpbmfigJknKSxcbiAgICBcdFx0Y3JlYXRlVmFsaWRhdGlvbigoKSA9PiBpbnB1dC5pbmNsdWRlcygnOjonKSxcbiAgICBcdFx0XHQnSW5wdXQgZG9lcyBub3QgaW5jbHVkZSB0aGUgbWFyayDigJg6OuKAmSBmb3IgZm9ybUROQScpLFxuICAgIFx0XHRjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0Lmxlbmd0aCA+PSAzLFxuICAgIFx0XHRcdCdmb3JtRE5BIGlucHV0IGlzIHRvbyBzaG9ydCcpLFxuICAgIFx0XTtcblx0XHR2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG5cdFx0XHRlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcblx0XHRcdHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcblx0XHR9KSApO1xuXG4gICAgXHRjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG4gICAgXHRjb25zdCB2YWxpZGF0aW9uczIgPSBbXG4gICAgXHRcdGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkgPj0gMCxcbiAgICBcdFx0XHQnZm9ybUROQSBjb2RlIGxlbmd0aCBpcyBub3QgaW4gdGhlIHJhbmdlIDReeCcpLFxuICAgIFx0XHRjcmVhdGVWYWxpZGF0aW9uKCgpID0+ICFkbmEuc3BsaXQoJycpLnNvbWUobiA9PiBpc05hTihwYXJzZUludChuKSkgfHwgcGFyc2VJbnQobikgPCAwIHx8IHBhcnNlSW50KG4pID4gMyksXG4gICAgXHRcdFx0J2Zvcm1ETkEgY29kZSBpcyBub3QgaW4gcXVhdGVybmlvbiBmb3JtYXQgKGNvbnNpc3Rpbmcgb25seSBvZiB0aGUgbnVtYmVycyAwLzEvMi8zKScpLFxuICAgIFx0XHRjb21wYXJlRm9ybSAmJiBmb3JtdWxhICE9PSB1bmRlZmluZWRcbiAgICBcdFx0PyBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHRoaXMuZG5hTWF0Y2hlc0Zvcm0oZG5hLCBmb3JtdWxhLCB2YXJMaXN0KSxcbiAgICBcdFx0XHQnZm9ybUROQSBjb2RlIHBhcnQgZG9lc25cXCd0IG1hdGNoIGZvcm11bGEgcGFydCBvciBmb3JtdWxhIHBhcnQgZG9lc25cXCd0IG1hdGNoIGl0cyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXInKSA6IG51bGwsXG4gICAgXHRdLmZpbHRlcihmbiA9PiBmbik7XG5cblx0XHR2YWxpZGF0aW9uczIuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG5cdFx0XHRlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcblx0XHRcdHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcblx0XHR9KSApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gRVhQRVJJTUVOVEFMID5cblxuc3RhdGljIGdlbmVyYXRlVmFyTmFtZXMgKHZudW0sIGV4Y2x1ZGVMaXN0ID0gdW5kZWZpbmVkKSB7XG5cdHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4ge1xuXHRcdGxldCBjYW5kaWRhdGUgPSBgeF8ke2l9YDtcblx0XHRpZiAoZXhjbHVkZUxpc3QgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0d2hpbGUgKGV4Y2x1ZGVMaXN0LmluY2x1ZGVzKGNhbmRpZGF0ZSkpIHtcblx0XHRcdFx0Y2FuZGlkYXRlID0gY2FuZGlkYXRlK2DigLJgO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gY2FuZGlkYXRlO1xuXHR9KTtcbn1cblxuc3RhdGljIHVuaXZlcnNlXzEgKHgpIHtcblx0LyogUmV0dXJucyB0aGUgY29uc3RpdHVlbnRzIG9mIHRoZSA0LXZhbHVlZCB1bml2ZXJzZSBvZiAxIHRlcm1zIGZyb20gYSB2YXJpYWJsZSBuYW1lICovXG5cdGlmICh4Lmxlbmd0aCA+IDEpIHggPSBgXCIke3h9XCJgO1xuXHRyZXR1cm4gWyBcblx0XHRgKHsoJHt4fSl9ezJyfCgke3h9KX0pYCwgXG5cdFx0YCh7JHt4fX17MnJ8JHt4fX0pYCwgXG5cdFx0YCgoeygke3h9KX0ke3h9KSh7MnJ8JHt4fX0oJHt4fSkpKWAsIFxuXHRcdGAoKHske3h9fSgke3h9KSkoezJyfCgke3h9KX0ke3h9KSlgXTtcbn1cblxuc3RhdGljIHVuaXZlcnNlX24gKHZhcnMpIHtcblx0LyogUmV0dXJucyB0aGUgY29uc3RpdHVlbnRzIG9mIHRoZSA0LXZhbHVlZCB1bml2ZXJzZSBvZiBuIHRlcm1zIGZyb20gYSBsaXN0IG9mIG4gdmFyaWFibGUgbmFtZXMgKi9cblx0Y29uc3Qgdm51bSA9IHZhcnMubGVuZ3RoO1xuXHRjb25zdCB1bml2MXMgPSB2YXJzLm1hcCh2ID0+IHRoaXMudW5pdmVyc2VfMSh2KSk7XG5cdHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IDQqKnZudW19LCAoXywgaSkgPT4ge1xuXHQgIGNvbnN0IGlxID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pLnNwbGl0KCcnKTtcblx0ICBjb25zdCB1bml2TiA9IHVuaXYxcy5yZWR1Y2UoKGZvcm11bGEsIHVuaXYxLCBqLCBhcnIpID0+IFxuXHRcdFx0XHRcdFx0ICAgZm9ybXVsYStgKCR7dW5pdjFbaXFbal1dfSlgXG5cdFx0XHRcdFx0XHQgICArKGogPT09IGFyci5sZW5ndGgtMSA/ICcpJyA6ICcnKSwgJygnKTtcblx0ICByZXR1cm4gdm51bSA+IDEgPyB1bml2TiA6IHVuaXZOLnNsaWNlKDIsLTIpO1xuXHR9KTtcbn07XG5cbi8vIDwgRU5EXG5cblx0c3RhdGljIHRvdGFsVmFyc0Zyb21ETkEgKGZvcm1ETkEpIHsgXG5cdFx0LyogQ2FsY3VsYXRlcyB2YXJpYWJsZSBudW1iZXIgZnJvbSBmb3JtRE5BICovXG5cblx0XHQvLyBkZXRhY2ggZnJvbSBmb3JtRE5BIG1hcmsgJzo6J1xuXHRcdGNvbnN0IGRuYSA9IGZvcm1ETkEuc3BsaXQoJzonKS5wb3AoKTtcblxuXHRcdC8vIGNhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHZhcmlhYmxlcyBmcm9tIHRoZSBsZW5naHQgb2YgdGhlIHN0cmluZ1xuXHRcdGNvbnN0IG4gPSBNYXRoLmxvZyhkbmEubGVuZ3RoKS9NYXRoLmxvZyg0KTsgLy8gbG9nXzQoZG5hIGxlbmd0aCkgPSB2YXJpYWJsZSBudW1iZXJcblx0XHRyZXR1cm4gbiAlIDEgPT09IDAgPyBuIDogTmFOO1xuXHR9O1xuXG4gICAgc3RhdGljIHJlcGFpckROQSAoaW5wdXQpIHtcbiAgICBcdC8qIFJlcGFpcnMgYSBnaXZlbiBzdHJpbmcgdGhhdCBpcyBub3QgaW4gYSB2YWxpZCBmb3JtRE5BIGZvcm0gdG8gcGFzcyBhcyBmb3JtRE5BICovXG5cbiAgICBcdC8vIGlmIHRoZSBpbnB1dCBjb250YWlucyB0aGUgbWFyayAnOjonIGZvciBmb3JtRE5BLCBkaXN0aW5ndWlzaCB0d28gY2FzZXNcbiAgICBcdGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgIFx0XHQvLyBDYXNlIDE6IGlucHV0IGlzIG9mIGZvcm0gZi5beF06Om4gb3IgZjo6biAtPiBmIHdpbGwgYmUgZW5jb2RlZCBhcyBhIEZPUk0gKHdpdGggW3hdIGFzIHZhcmlhYmxlIG9yZGVyLCBpZiBpdCBtYXRjaGVzIHRoZSBGT1JNcyB2YXJpYWJsZXMgaW4gbnVtYmVyIGFuZCBsYWJlbHMpXG4gICAgXHRcdC8vIC0gSWYgdGhlIGZvcm1ETkEgaGFzIGJlZW4gd2VsbCBmb3JtZWQgaW4gdGhlIGZpcnN0IHBsYWNlLCB0aGUgb3V0cHV0IHdpbGwgYmUgZXF1aXZhbGVudFxuICAgIFx0XHQvLyAtIElmIHRoZSBkbmEgcGFydCBkb2Vzbid0IG1hdGNoIHRoZSBGT1JNIHBhcnQsIHRoZSBkbmEgcGFydCB3aWxsIGJlIGNvcnJlY3RlZFxuICAgIFx0XHQvLyAtIElmIHRoZSB2YXJpYWJsZSBvcmRlciBkb2Vzbid0IG1hdGNoIHRoZSBGT1JNIHZhcmlhYmxlcywgaXQgd2lsbCBhbHNvIGJlIGNvcnJlY3RlZFxuICAgIFx0XHQvLyBOb3RlIHRoYXQgdGhpcyBjYXNlIGVmZmVjdGl2ZWx5IGludGVycHJldHMgdGhlIGlucHV0IGFzIEZPUk0gaW5wdXQgYW5kIG1ha2VzIHN1cmUgdGhhdCB0aGUgZm9ybUROQSBpcyBjb25zaXN0ZW50LCBiZWNhdXNlIGl0IGlzIGltcG9zc2libGUgdG8gaW5mZXIgYSBGT1JNIGZyb20gaXRzIEROQS5cbiAgICBcdFx0Y29uc3QgcGFydHMgPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcbiAgICBcdFx0aWYgKHBhcnRzLmZvcm11bGEpIHtcblx0XHQgICAgXHQvLyBpZiB0aGVyZSBpcyBhIFt4XS1wYXJ0LCBleHRyYWN0IHZhcmlhYmxlIG9yZGVyIGFuZCBjaGVjayBpZiBpdHMgdmFsaWQgZm9yIHRoZSBGT1JNXG5cdFx0ICAgIFx0bGV0IHZhckxpc3QgPSB1bmRlZmluZWQ7XG5cdFx0ICAgIFx0dHJ5IHsgLy8gdHJ5Li4uY2F0Y2ggYXZvaWRzIGludGVycnVwdGlvbiBieSBFcnJvclxuXHQgICAgXHRcdFx0aWYgKHBhcnRzLnZhckxpc3QgJiYgdGhpcy5mb3JtTWF0Y2hlc1Zhckxpc3QocGFydHMuZm9ybXVsYSwgcGFydHMudmFyTGlzdCkpIHZhckxpc3QgPSBwYXJ0cy52YXJMaXN0O1xuXHRcdCAgICBcdH0gY2F0Y2ggKGUpIHtcblx0XHQgICAgXHRcdGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcblx0XHQgICAgXHR9XG5cdCAgICBcdFx0Ly8gcmUtZW5jb2RlIHRvIHJldHVybiBjb3JyZWN0IGZvcm1ETkEgZm9yIHRoZSBnaXZlbiBmb3JtdWxhXG5cdCAgICBcdFx0cmV0dXJuIHRoaXMuZm9ybVRvRE5BKHBhcnRzLmZvcm11bGEsIHZhckxpc3QpO1xuXHQgICAgXHR9XG5cdCAgICBcdC8vIENhc2UgMjogaW5wdXQgaXMgb2YgZm9ybSA6Om4gLT4gdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lXG5cdCAgICBcdC8vIE5vdGUgdGhhdCBhIEZPUk0gd2lsbCBub3QgYmUgZGVjb2RlZCBmcm9tIHRoZSBkbmEgYWxvbmUsIHNpbmNlIHRoaXMgRk9STSB3b3VsZCBiZSBvcGluaW9uYXRlZFxuXHQgICAgXHRpZiAoIXRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHJldHVybiBudWxsO1xuXG5cdCAgICBcdHJldHVybiBpbnB1dDtcblx0ICAgIH1cblx0ICAgIC8vIGlmIHRoZSBpbnB1dCBpcyBub3QgbWFya2VkIGFzIGZvcm1ETkEsIGl0IHdpbGwganVzdCBiZSBlbmNvZGVkIGFzIGEgRk9STVxuXHQgICAgcmV0dXJuIHRoaXMuZm9ybVRvRE5BKGlucHV0KTtcbiAgICB9XG5cblx0c3RhdGljIGdldEROQXBhcnRzIChmb3JtRE5BKSB7XG5cdFx0LyogRGVjb21wb3NlcyBhIGZvcm1ETkEgc3RyaW5nIGludG8gaXRzIDMvMi8xIHBhcnRzICovXG5cdFx0bGV0IGRuYSA9IHVuZGVmaW5lZCwgZm9ybXVsYSA9IHVuZGVmaW5lZCwgdmFyTGlzdCA9IHVuZGVmaW5lZDtcblxuXHRcdGNvbnN0IHBhcnRzID0gZm9ybUROQS5zcGxpdCgnOicpO1xuXHRcdGRuYSA9IHBhcnRzLnBvcCgpO1xuXG5cdFx0aWYgKHBhcnRzWzBdLmxlbmd0aCA+IDApIHtcbiAgICBcdFx0Y29uc3QgZm9ybV9wYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcuJyk7XG4gICAgXHRcdGZvcm11bGEgPSBmb3JtX3BhcnRzWzBdO1xuICAgIFx0XHR2YXJMaXN0ID0gZm9ybV9wYXJ0cy5sZW5ndGggPiAxID8gZm9ybV9wYXJ0c1sxXS5zbGljZSgxLC0xKS5zcGxpdCgnLCcpIDogdmFyTGlzdDtcbiAgICBcdH1cblxuXHRcdHJldHVybiAoeyBkbmE6IGRuYSwgZm9ybXVsYTogZm9ybXVsYSwgdmFyTGlzdDogdmFyTGlzdCB9KTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcGFkLCBmbGF0dGVuLCBpbmNsdWRlLCBWQVJDT0RFLCBWQVJDT0RFX1JFViwgY3JlYXRlVmFsaWRhdGlvbiwgY2hlY2tCcmFja2V0TWF0Y2hpbmcsIGNoZWNrTGl0ZXJhbE1hdGNoaW5nLCBjb2xsYXBzZUxpdGVyYWxzLCBnZXRCcmFja2V0VW5pdHMgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCBGQ2FsYyBmcm9tICcuL2ZjYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkZvcm0gZXh0ZW5kcyBGQ2FsYyB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAgJ2Zvcm0nIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBGb3JtIENhbGN1bGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGNhbGMoX2Zvcm0pIHtcbiAgICAgICAgLyogQ2FsY3VsYXRlcyBhIGdpdmVuIGZvcm0gcmVjdXJzaXZlbHkgXG5cbiAgICAgICAgTm90ZTogRG8gTk9UIHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBmb3JtdWxhcyB3aXRoIHZhcmlhYmxlcyFcbiAgICAgICAgICAgICAgQXNzdW1lcyB4PTAgZm9yIGFsbCB2YXJpYWJsZXMuIFVzZSBpbnRlckNhbGMoKSBpbnN0ZWFkLlxuICAgICAgICAqL1xuXG4gICAgICAgIGxldCBmeCA9IDA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBoYXZlIGEganNvbiBmb3JtLCBpZiBub3Q6IHRyeSB0byBjb252ZXJ0XG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLmNhbGMoZm9ybS5zcGFjZVtpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2NvbnN0Jykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICBpZighaXNOYU4oZm9ybS5zcGFjZVtpXS52YWx1ZSkpIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmVzdGVkVmFscyA9IFtdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZSZUVudHJ5ID0gZm9ybS5zcGFjZVtpXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogaW4gZlJlRW50cnkubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZFZhbHMgPSBbLi4ubmVzdGVkVmFscywgdGhpcy5jYWxjKGZSZUVudHJ5Lm5lc3RlZFtqXSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmb3IgZXZlbiByZXNvbHV0aW9ucyAodG90YWwgbmVzdGVkIGFyZ3VtZW50cyksIHJlRW50cnkgbnVtYmVyIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgaXQgZG9lc24ndCBtYXR0ZXIgaWYgaXRzIGV2ZW4gb3Igb2RkXG4gICAgICAgICAgICAgICAgY29uc3QgcmVFbnRyeU51bWJlciA9IChmUmVFbnRyeS5uZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkgPyB1bmRlZmluZWQgOiBmUmVFbnRyeS5yZUV2ZW47XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gbm90YXRpb24gcmVhZGluZzoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH0gIHVzZSBuZXN0ZWRWYWxzLnJldmVyc2UoKSB0byByZXZlcnNlIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LHRoaXMucmVFbnRyeShyZUVudHJ5TnVtYmVyLCBmUmVFbnRyeS5sYXN0T3BlbiwgZlJlRW50cnkuYWx0SW50ZXJwcmV0YXRpb24sIC4uLm5lc3RlZFZhbHMpICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9ybS51bm1hcmtlZCkgcmV0dXJuIGZ4O1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludiggZnggKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNhbGNBbGwoX2Zvcm0pIHtcbiAgICAgICAgLyogSW50ZXJwcmV0IGFuZCBjYWxjdWxhdGUgYWxsIHBvc3NpYmxlIHZhbHVlcyBmb3IgdGhlIGZvcm1cbiAgICAgICAgICAgKHJlZmFjdG9yZWQ6IDEwLjEwLjIwMjApXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICAgICAgY29uc3QgdmFycyA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm0pO1xuICAgICAgICBjb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHZhbHMgPSB7fTtcblxuICAgICAgICBpZiAodm51bSA8IDEpIHtcbiAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gdGhpcy5jYWxjKGZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnRlcktleSA9ICcnK3ZhcnMuam9pbigpKyc7JztcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IDQqKnZudW07IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwclZhbHMgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSk7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnByID0gaW50ZXJwclZhbHMuc3BsaXQoJycpLm1hcCgodmFsLG4pID0+ICh7dmFyOiB2YXJzW25dLCB2YWx1ZTogcGFyc2VJbnQodmFsKX0pKTtcblxuICAgICAgICAgICAgdmFsc1tpbnRlcktleStpbnRlcnByVmFsc10gPSB0aGlzLmludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxzO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJDYWxjKGZvcm0sIGludGVycHIpIHtcbiAgICAgICAgLyogSW50ZXJwcmV0cyBhIGZvcm0gYW5kIGNhbGN1bGF0ZXMgdGhlIHJlc3VsdCBvZiB0aGUgaW50ZXJwcmV0YXRpb24gKi9cblxuICAgICAgICByZXR1cm4gdGhpcy5jYWxjKCB0aGlzLmludGVycHJldChmb3JtLCBpbnRlcnByKSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW50ZXJwcmV0KF9mb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8qIEludGVycHJldHMgYSBmb3JtIHdpdGggc3BlY2lmaWVkIHZhbHVlcyBmb3IgZWFjaCB2YXJpYWJsZVxuXG4gICAgICAgIGludGVycHI6IFt7dmFyOiAneCcsIHZhbHVlOiBufSwg4oCmXVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IGludGVycHJGb3JtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb3JtKSk7IC8vIGNsb25lIGZvcm1cblxuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShpbnRlcnByRm9ybSwgZnVuY3Rpb24oZkJyYW5jaCkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBmQnJhbmNoLnNwYWNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYgaW4gaW50ZXJwcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnN5bWJvbCA9PT0gaW50ZXJwclt2XS52YXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlW2ldLnZhbHVlID0gaW50ZXJwclt2XS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGludGVycHJGb3JtO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRXh0ZW5zaW9ucyBvZiBGQ2FsY1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyByZWxfbG9naWMoZngsIGZ5KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5IHx8IHR5cGVvZihmeSkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIucmVsX2xvZ2ljKGZ4LCBmeSk7XG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5yZWwoLi4uZlZhbHMpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaW52X2xvZ2ljKGZ4KSB7XG4gICAgICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuaW52X2xvZ2ljKGZ4KTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmludihmeCwgbik7XG4gICAgfTtcblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBDb252ZXJzaW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBwYXJzZUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gaW50byBKU09OIHN0cmluZyBhbmQgcGFyc2VzIGFzIEpTT04gb2JqZWN0ICovXG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgZm9ybXVsYSBpbnRvIGEgSlNPTiBzdHJpbmdcbiAgICAgICAgY29uc3QganNvblN0ciA9IHRoaXMuY29udkZyb21MaW5lYXIoZm9ybXVsYSk7XG5cbiAgICAgICAgLy8gdHJ5IHBhcnNpbmcgdGhlIHN0cmluZyBhcyBhIEpTT04gb2JqZWN0XG4gICAgICAgIGxldCBqc29uID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnZGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICAgICAgLy8gY2xlYW4gZm9ybXVsYSBzdHJpbmcgZnJvbSB3aGl0ZXNwYWNlXG4gICAgICAgIGNvbnN0IGNsZWFuRm9ybXVsYSA9IHRoaXMuY2xlYW5MaW5lYXIoZm9ybXVsYSk7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihjbGVhbkZvcm11bGEpO1xuICAgICAgICByZXR1cm4gZmxhdHRlbihhcnIpLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjbGVhbkxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIGxldCBjbGVhbkZvcm11bGEgPSAnJztcbiAgICAgICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG5cbiAgICAgICAgICAgIC8vIG9taXQgd2hpdGVzcGFjZSBvdXRzaWRlIG9mIHF1b3Rlc1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcgJykge1xuICAgICAgICAgICAgICAgIGlmIChpblF1b3RlIHx8wqBpblNsYXNoKSBjbGVhbkZvcm11bGEgKz0gY2hhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsZWFuRm9ybXVsYTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29uc3RydWN0RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8qIENvbnZlcnRzIGZyb20gcGFyYW50aGVzaXMgbm90YXRpb24gdG8gSlNPTi1mb3JtICovXG5cbiAgICAgICAgbGV0IGNvbXBBbGwgPSBbXTtcbiAgICAgICAgbGV0IHVubWFya2VkID0gdHJ1ZTtcblxuICAgICAgICAvLyBjaGVjayBmb3IgYWxsIGVuY2xvc2luZyBvdXRlciBmb3JtXG4gICAgICAgIGxldCBjb3VudERlcHRoID0gMDtcbiAgICAgICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IGluU2xhc2ggPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoY291bnREZXB0aCA9PSAwKSAmJiAoaSAhPSAwKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJyknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gZm9ybXVsYS5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJyAgeyddO1xuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInR5cGVcIjpcImZvcm1cIiwnXTtcblxuICAgICAgICBpZiAodW5tYXJrZWQpIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1widW5tYXJrZWRcIjp0cnVlLCddO1xuICAgICAgICBlbHNlIGZvcm11bGEgPSBmb3JtdWxhLnNsaWNlKDEsZm9ybXVsYS5sZW5ndGgtMSk7XG5cbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXCJzcGFjZVwiOlsnXTtcblxuXG4gICAgICAgIGxldCBwYXJ0cyA9IFsnJ107XG5cbiAgICAgICAgY291bnREZXB0aCA9IDA7XG4gICAgICAgIGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHJlQ2hhciA9ICfihrsnO1xuICAgICAgICBjb25zdCBvcHRDaGFyID0gJ+KktCc7XG4gICAgICAgIGNvbnN0IG5lc3RDaGFyID0gJ+KktSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBsZXQgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBjb25zdCBwcmV2Q2hhciA9IGZvcm11bGFbaS0xXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpIGNvdW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnIHx8wqBjaGFyID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCAoeCkgZG9lc24ndCBuZWVkIHRvIGJlIHNlcGFyYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSBwYXJ0cyA9IFsuLi5wYXJ0cywgJyddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIChwcmV2Q2hhciA9PT0gJyknIHx8wqBwcmV2Q2hhciA9PT0gJ30nKSAmJiAhKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgY2hhciBmb2xsb3dzICh4KSwgc2VwYXJhdGU7IGJ1dCBub3QgaWYgaXQgaXMgYW5vdGhlciAnKSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHBhcnRzID0gWy4uLnBhcnRzLCAnJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVuaXF1ZSBzZXBhcmF0aW9uIGNoYXJzIGZvciByZS1lbnRyeSBmb3JtcyBmb3IgZWFzeSBzcGxpdHRpbmdcbiAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnLCcpIGNoYXIgPSBuZXN0Q2hhcjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICd8JykgY2hhciA9IG9wdENoYXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnQCcpIGNoYXIgPSByZUNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGxhdGVzdCBwdXNoZWQgcGFydFxuICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgaW4gcGFydHMpIHtcblxuICAgICAgICAgICAgaWYgKHBhcnRzW2ldWzBdID09PSAnKCcpIHsgXG4gICAgICAgICAgICAgICAgLy8gaWYgcGFydCBpcyBmb3JtXG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBbdGhpcy5jb25zdHJ1Y3RGcm9tTGluZWFyKHBhcnRzW2ldKV07XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnRzW2ldWzBdID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIHBhcnQgaXMgcmUtZW50cnkgZm9ybVxuXG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBbJyAgeyddO1xuICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwicmVFbnRyeVwiLCddO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpO1xuICAgICAgICAgICAgICAgIGxldCByZU5lc3RlZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHJlQ2hhcikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmV3IHJlLWVudHJ5IHN5bnRheFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbHRJbnRlcnByID0gY29udGVudC5zdGFydHNXaXRoKGBhbHQke29wdENoYXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IF9jb250ZW50ID0gYWx0SW50ZXJwciA/IGNvbnRlbnQuc2xpY2UoNCwpIDogY29udGVudC5zbGljZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eXBlID0gWy0xLC0xXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9Ll9gKSkgdHlwZSA9IFszLDFdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9LmApKSB0eXBlID0gWzMsMF1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn1fYCkpIHR5cGUgPSBbMiwxXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfWApKSB0eXBlID0gWzIsMF1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgJHtyZUNoYXJ9X2ApKSB0eXBlID0gWzAsMV1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChyZUNoYXIpKSB0eXBlID0gWzAsMF1cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlQ2hhclN1bSA9IHR5cGVbMF0gKyB0eXBlWzFdICsgMTtcbiAgICAgICAgICAgICAgICAgICAgcmVOZXN0ZWQgPSBfY29udGVudC5zbGljZSh0eXBlQ2hhclN1bSwpLnNwbGl0KG5lc3RDaGFyKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVOZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpcInVuZGVmaW5lZFwiLCddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVbMF0gPT09IDIpIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOmZhbHNlLCddO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlWzFdID4gMCkgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOmZhbHNlLCddO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbHRJbnRlcnByKSBjb21wID0gWy4uLmNvbXAsICdcImFsdEludGVycHJldGF0aW9uXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcImFsdEludGVycHJldGF0aW9uXCI6ZmFsc2UsJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbGQgcmUtZW50cnkgc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlUGFydHMgPSBjb250ZW50LnNwbGl0KG9wdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlTmVzdGVkID0gcmVQYXJ0c1tyZVBhcnRzLmxlbmd0aC0xXS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlTmVzdGVkLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6XCJ1bmRlZmluZWRcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJzJyJyB8fCByZVBhcnRzWzFdID09PSAnMnInIHx8IHJlUGFydHNbMl0gPT09ICcycicpIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpmYWxzZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnb3BlbicgfHwgcmVQYXJ0c1sxXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMl0gPT09ICdvcGVuJykgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOmZhbHNlLCddO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnYWx0JyB8fCByZVBhcnRzWzFdID09PSAnYWx0JyB8fCByZVBhcnRzWzJdID09PSAnYWx0JykgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wibmVzdGVkXCI6WyddO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiBpbiByZU5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsIHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihyZU5lc3RlZFtuXSkgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCByZU5lc3RlZC5sZW5ndGgtMSkgY29tcCA9IFsuLi5jb21wLCAnLCddO1xuICAgICAgICAgICAgICAgICAgICAvLyByZU5lc3RlZFtuXSA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhciggcmVOZXN0ZWRbbl0gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICddfSAgJ107XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVsc2Ugd2UgaGF2ZSB2YXJpYWJsZXMvY29uc3RhbnRzXG5cbiAgICAgICAgICAgICAgICBsZXQgY29tcCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHZhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHBhcnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBwYXJ0c1tpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgcXVvdGVkIHN0cmluZyB3aXRoIGEgJ+KAlicgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSkgdmFycyA9IFsuLi52YXJzLCAn4oCWJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHVuY2xlYXIgZm9ybSB3aXRoIGEgJ+KAvScgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5TbGFzaCkgdmFycyA9IFsuLi52YXJzLCAn4oC9J107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHZhcnMgPSBbLi4udmFycywgJyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVvdGUgY2hhcnMgaW5zaWRlIHNsYXNoZXMgd2lsbCBiZSBlc2NhcGVkIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKU09OIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgaW5TbGFzaCkgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSAnXFxcXCcgKyBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKHZhcnNbdl0pICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnICB7J107XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFyc1t2XSkgJiYgdmFyc1t2XS5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFyc1t2XVswXSAhPT0gJ+KAvScgJiYgdmFyc1t2XVswXSAhPT0gJ+KAlicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwiY29uc3RcIiwnXTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsIHZhcnNbdl1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcnNbdl1bMF0gPT09ICfigL0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInVuY2xlYXJcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widmFsdWVcIjoyLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJzeW1ib2xcIjonXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIiddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJ2YXJcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widmFsdWVcIjpcIipcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wic3ltYm9sXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJzW3ZdWzBdID09PSAn4oCWJykgY29tcCA9IFsuLi5jb21wLCAnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdKydcIiddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ30gICddO1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA8IHZhcnMubGVuZ3RoLTEpIGNvbXAgPSBbLi4uY29tcCwgJywnXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH0gLy8gZW5kIGVsc2VcblxuICAgICAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCBwYXJ0c1tpXV07XG4gICAgICAgICAgICBpZiAoaSA8IHBhcnRzLmxlbmd0aC0xKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICcsJ107XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICddfSAgJ107XG5cbiAgICAgICAgcmV0dXJuIGNvbXBBbGw7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlcHJlc2VudGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGpzb25TdHJpbmcoX2Zvcm0pIHtcbiAgICAgICAgLyogcmV0dXJucyBqc29uLXJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgRk9STSAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuICAgIFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybSwgdW5kZWZpbmVkLCAyKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhfZm9ybSkge1xuICAgICAgICAvKiBwYXJzZXMgYSBGT1JNIHRvIGdldCBhbGwgb2YgaXRzIHZhcmlhYmxlcyBhbmQgc29ydHMgdGhlbSB1c2luZyB0aGUgSlMgQXJyYXkuc29ydCgpIG1ldGhvZFxuICAgICAgICB3aGljaCBzb3J0cyBieSBjb21wYXJpbmcgVVRGLTE2IGNvZGUgdW5pdCB2YWx1ZXMuXG4gICAgICAgIE5vdGU6IEJ5IGNvbnZlbnRpb24sIHRoZSBwcm9jZXNzIG9mIGRlcml2aW5nIGZvcm1ETkEgZnJvbSBhIGdpdmVuIEZPUk0gaW52b2x2ZXMgb3JkZXJpbmcgb2YgdGhlIGV4dHJhY3RlZCB2YXJpYWJsZXMgYnkgdGhpcyBzYW1lIHNvcnRpbmcgbWV0aG9kLCBpZiBubyBzcGVjaWFsIG9yZGVyaW5nIGlzIHNwZWNpZmllZC4gKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBsZXQgdmFycyA9IFtdO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKHZhcnMsIHNwYWNlW2ldLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnMgPSBbLi4udmFycywgc3BhY2VbaV0uc3ltYm9sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzLnNvcnQoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHRyYXZlcnNlRm9ybShmb3JtLGZ1bmMpIHtcbiAgICAgICAgLyogdHJhdmVyc2VzIG9ubHkgZm9ybS10eXBlcyBpbiBhIGpzb24gdHJlZSAqL1xuICAgICAgICBjb25zdCBicmVha1RyYXYgPSBmdW5jLmFwcGx5KHRoaXMsW2Zvcm1dKTtcblxuICAgICAgICBpZiAoZm9ybS5zcGFjZSkgeyAvLyBmb3JtLnR5cGU6ICdmb3JtJ1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScgfHwgZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0uc3BhY2VbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLm5lc3RlZCkgeyAvLyBmb3JtLnR5cGU6ICdyZUVudHJ5J1xuICAgICAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0ubmVzdGVkW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1I6IE5vdCBhIGZvcm0hJyk7XG5cbiAgICAgICAgcmV0dXJuIGJyZWFrVHJhdjtcbiAgICB9O1xuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9mb3JtZm9ybS10b29sYm94IFxuICAgICovXG5cbiAgICBzdGF0aWMgZ2V0VG90YWxWYXJzIChmb3JtU3RyKSB7XG4gICAgICAgIC8qIGdldHMgdG90YWwgdmFyaWFibGUgbnVtYmVyIG9mIGEgRk9STSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybVN0ci5zdWJzdHIoKSkubGVuZ3RoO1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVPcmRlclZhcnMgKGZvcm11bGEsIHZhcm9yZGVyKSB7XG4gICAgICAgIC8qIHJlLW9yZGVycyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHRvIG1hdGNoIGFuIG9yZGVyaW5nIHBhdHRlcm4gKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlVmFycyggdGhpcy5lbmNvZGVWYXJzKGZvcm11bGEsIHZhcm9yZGVyKSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVjb2RlVmFycyAoZW5jU3RyLCBkZWNvZGVQYXR0ZXJuPXVuZGVmaW5lZCkge1xuICAgICAgLyogZGVjb2RlcyB2YXJpYWJsZXMgaW4gYW4gZW5jb2RlZCBmb3JtdWxhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGRlY29kZSBwYXR0ZXJuICovXG4gICAgICBsZXQgcmV2Q29kZSA9IFZBUkNPREVfUkVWO1xuICAgICAgaWYgKGRlY29kZVBhdHRlcm4pIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFZBUkNPREVfUkVWKTtcbiAgICAgICAgY29uc3QgdmFyUGFydCA9IGtleXMuc2xpY2UoMCxkZWNvZGVQYXR0ZXJuLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IG1vZFBhcnQgPSBrZXlzLnNsaWNlKC0zKTtcbiAgICAgICAgXG4gICAgICAgIHJldkNvZGUgPSB2YXJQYXJ0LmNvbmNhdChtb2RQYXJ0KS5yZWR1Y2UoIChjb2RlLGtleSxpKSA9PiAoey4uLmNvZGUsIFxuICAgICAgICAgICAgW2tleV06IGkgPCBkZWNvZGVQYXR0ZXJuLmxlbmd0aCA/IGRlY29kZVBhdHRlcm5baV0gOiBWQVJDT0RFX1JFVltrZXldLCB9KSx7fSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNTdHIuc3BsaXQoJycpXG4gICAgICAgICAgICAgICAgLm1hcChjID0+IE9iamVjdC5rZXlzKHJldkNvZGUpLmluZGV4T2YoYykgPiAtMSA/IHJldkNvZGVbY10gOiBjKS5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGVuY29kZVZhcnMgKGZvcm11bGEsIHZhcm9yZGVyPXVuZGVmaW5lZCkge1xuICAgICAgLyogZW5jb2RlcyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHN0cmluZyBhY2NvcmRpbmcgdG8gYSBnaXZlbiB2YXJpYWJsZSBvcmRlciAoYXJyYXkpICovXG4gICAgICBpZiAoIXZhcm9yZGVyKSB2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuICAgICAgXG4gICAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7IC8vIHRoeCB0byBDb29sQUo4NjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY5Njk0ODZcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgZml4UHRuID0ge2FsdDogJ2FsdCg/PVxcfCknLCByRXZlbjogJzJyKD89XFx8KScsIHJPZGQ6ICcycisxKD89XFx8KSd9O1xuICAgICAgY29uc3QgcHRuID0gdiA9PiB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCA+IDEpIHJldHVybiBgXFxcIiR7ZXNjYXBlUmVnRXhwKHYpfVxcXCJgOyAvLyAoPzw9XFxcIikoJHt2fSkoPz1cXFwiKVxuICAgICAgICByZXR1cm4gYCR7ZXNjYXBlUmVnRXhwKHYpfWA7XG4gICAgICB9O1xuICAgICAgXG4gICAgICByZXR1cm4gdmFyb3JkZXJcbiAgICAgICAgLnJlZHVjZSgoZW5jU3RyLHYsaSkgPT4gZW5jU3RyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uYWx0LCAnZycpLFZBUkNPREVbJ2FsdCddIClcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5yRXZlbiwgJ2cnKSxWQVJDT0RFWycyciddKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLnJPZGQsICdnJyksVkFSQ09ERVsnMnIrMSddKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAocHRuKHYpLCAnZycpLChPYmplY3Qua2V5cyhWQVJDT0RFX1JFVilbaV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAsIGZvcm11bGEgKTtcbiAgICB9O1xuXG5cbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgTmV3IEFkZGl0aW9ucyAwMS8yMDIwOlxuICAgICovXG5cbiAgICBzdGF0aWMgbWF0Y2hEZWZhdWx0VmFyT3JkZXIgKHZhckxpc3QpIHtcbiAgICAgICAgLyogSGVscGVyIHRvIG1hdGNoIGRlZmF1bHQgb3JkZXJpbmdzIGZvciBjYWxjdWxhdGlvbiBhbmQgdm1hcHMgKi9cbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICdFTFInKSByZXR1cm4gWydMJywnRScsJ1InXTtcbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICcrLUxSJykgcmV0dXJuIFsnLScsJ0wnLCdSJywnKyddO1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJystRUxSJykgcmV0dXJuIFsnLScsJ0wnLCdFJywnUicsJysnXTtcbiAgICAgICAgcmV0dXJuIHZhckxpc3Q7XG4gICAgfVxuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE5ldyBBZGRpdGlvbnMgMTAvMjAyMDpcbiAgICAqL1xuXG4gICAgc3RhdGljIGlzVmFsaWRGb3JtIChpbnB1dCwgb3B0aW9ucynCoHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgZm9ybXVsYSBvciBKU09OLUZPUk0gKi9cblxuICAgICAgICByZXR1cm4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycgPyBcbiAgICAgICAgICAgIGlzVmFsaWRGb3JtdWxhKGlucHV0LCBvcHRpb25zKSA6IGlzVmFsaWRKU09ORm9ybShpbnB1dCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRGb3JtdWxhIChpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBmb3JtdWxhICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGxldCB2YWxpZGF0aW9uczEgPSBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICdGb3JtdWxhIGlucHV0IGlzIG5vdCBvZiB0eXBlIOKAmHN0cmluZ+KAmScpLFxuICAgICAgICBdO1xuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMCkgdmFsaWRhdGlvbnMxID0gWy4uLnZhbGlkYXRpb25zMSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKSAmJiAhIWNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICcvJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNhbnNMaXRlcmFscyA9IGNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gc2Fuc0xpdGVyYWxzID8gY2hlY2tMaXRlcmFsTWF0Y2hpbmcoc2Fuc0xpdGVyYWxzLCAnLycpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnTnVtYmVyIG9mIHF1b3RlcyBmb3IgbGl0ZXJhbCB2YXJpYWJsZXMgKGUuZy46IFwieFwiKSBvciBudW1iZXIgb2Ygc2xhc2hlcyBmb3IgdW5jbGVhciBGT1JNcyAoZS5nLjogL3gvKSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgICAgICAvLyBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgLy8gICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG9wZW5TZXAgPSAn4oGFJywgY2xvc2VTZXAgPSAn4oGGJztcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlyVW5jbEZvcm1zID0gaW5wdXQuc3BsaXQoJy8nKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGFjYyArIChpZHggJSAyID09PSAxID8gb3BlblNlcCA6IGNsb3NlU2VwKSArIGN1cnJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVuY2xGb3JtVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyVW5jbEZvcm1zLCB7b3Blbjogb3BlblNlcCwgY2xvc2U6IGNsb3NlU2VwfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHVuY2xGb3JtVW5pdHMuZXZlcnkodW5jbEZvcm0gPT4gdW5jbEZvcm0uc3BsaXQoJ1wiJykubGVuZ3RoIDwgMik7IFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvcGVuU2VwID0gJ+KBjCcsIGNsb3NlU2VwID0gJ+KBjSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRpckxpdGVyYWxzID0gaW5wdXQuc3BsaXQoJ1wiJykucmVkdWNlKChhY2MsY3VycixpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBhY2MgKyAoaWR4ICUgMiA9PT0gMSA/IG9wZW5TZXAgOiBjbG9zZVNlcCkgKyBjdXJyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaXRlcmFsVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyTGl0ZXJhbHMsIHtvcGVuOiBvcGVuU2VwLCBjbG9zZTogY2xvc2VTZXB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsaXRlcmFsVW5pdHMuZXZlcnkobGl0ZXJhbCA9PiApXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAvLyAnTnVtYmVyIG9mIHF1b3RlcyBmb3IgbGl0ZXJhbCB2YXJpYWJsZXMgKGUuZy46IFwieFwiKSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgIF07XG4gICAgICAgIHZhbGlkYXRpb25zMS5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjbGVhbklucHV0ID0gY29sbGFwc2VMaXRlcmFscyggY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJ1wiJyksICcvJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMiA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhjbGVhbklucHV0LCAnKCcsICcpJyksXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXIgb3Igb3BlbmluZy9jbG9zaW5nIG9yZGVyIG9mIHBhcmFudGhlc2VzIGluIGZvcm11bGEgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKGNsZWFuSW5wdXQsICd7JywgJ30nKSxcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlciBvciBvcGVuaW5nL2Nsb3Npbmcgb3JkZXIgb2YgY3VybHkgYnJhY2tldHMgaW4gZm9ybXVsYSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uczIuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcblxuICAgICAgICAgICAgY29uc3Qgcm91bmRCclVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGNsZWFuSW5wdXQsIHtvcGVuOiAnKCcsIGNsb3NlOiAnKSd9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cmx5QnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJ3snLCBjbG9zZTogJ30nfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMyA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByb3VuZEJyVW5pdHMuZXZlcnkoc3ViRm9ybSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhzdWJGb3JtLCAneycsICd9JykpXG4gICAgICAgICAgICAgICAgICAgICAgICYmIGN1cmx5QnJVbml0cy5ldmVyeShzdWJGb3JtID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKHN1YkZvcm0sICcoJywgJyknKSksXG4gICAgICAgICAgICAgICAgICAgICdPcGVuaW5nL2Nsb3Npbmcgb2YgcGFyYW50aGVzZXMgb3ZlcmxhcHMgd2l0aCBvcGVuaW5nL2Nsb3Npbmcgb2YgY3VybHkgYnJhY2tldHMgaW4gZm9ybXVsYSAoZS5nLjogKHthKWJ9KScpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGN1cmx5QnJVbml0cy5ldmVyeShyZUVudHJ5ID0+IHRoaXMuaXNWYWxpZFJlRW50cnkocmVFbnRyeSkpLFxuICAgICAgICAgICAgICAgICAgICAnT3B0aW9uIHBhcnQgb2Ygb25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBpcyBub3Qgd2VsbC1mb3JtZWQnKSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhbGlkYXRpb25zMy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICB9KSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRSZUVudHJ5IChpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCByZS1lbnRyeSBjb25zdHJ1Y3Rpb24gKi9cbiAgICAgICAgLy8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBpbnB1dC5zbGljZSgxLC0xKS5zcGxpdCgnfCcpO1xuXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gcGFydHMuZmlsdGVyKChwLGksYXJyKSA9PiBpIDwgYXJyLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdExpc3QgPSBbJ2FsdCcsJ29wZW4nLCcycicsJzJyKzEnXTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IGVudHJpZXMucmVkdWNlKChhY2Msc3RyKSA9PiBbLi4uYWNjLCBvcHRMaXN0LmZpbHRlcihvcHQgPT4gc3RyID09PSBvcHQpWzBdXSxbXSApLmZpbHRlcihvcHQgPT4gb3B0KTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdF91bmlxdWUgPSBbLi4ubmV3IFNldChzZWxMaXN0KV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHNlbExpc3RfdW5pcXVlLmxlbmd0aCA9PT0gZW50cmllcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICdPbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGhhdmUgaW52YWxpZCBvciBkdXBsaWNhdGUgb3B0aW9ucycpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHNlbExpc3RfdW5pcXVlLmZpbHRlcihzdHIgPT4gc3RyID09PSBvcHRMaXN0WzJdIHx8IHN0ciA9PT0gb3B0TGlzdFszXSkubGVuZ3RoIDwgMixcbiAgICAgICAgICAgICAgICAgICAgJ09uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaGF2ZSBib3RoIG9wdGlvbnMg4oCYMnLigJkgYW5kIOKAmDJyKzHigJkgc2V0IGF0IHRoZSBzYW1lIHRpbWUnKSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICB9KSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRKU09ORm9ybSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgSlNPTi1GT1JNICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgICAgICcnKSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybU1hdGNoZXNWYXJMaXN0IChmb3JtLCB2YXJMaXN0KSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhIGdpdmVuIEZPUk0gbWF0Y2hlcyBhIGdpdmVuIHZhcmlhYmxlIGxpc3QgKi9cbiAgICAgICAgY29uc3QgdmFyc0Zvcm0gPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHZhckxpc3QubGVuZ3RoID09PSB2YXJzRm9ybS5sZW5ndGhcbiAgICAgICAgICAgICYmIHZhcnNGb3JtLmV2ZXJ5KHZfYSA9PiB2YXJMaXN0LnNvbWUodl9iID0+IHZfYSA9PT0gdl9iKSk7XG4gICAgICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcignRk9STSBkb2VzblxcJ3QgbWF0Y2ggdGhlIGdpdmVuIHZhcmlhYmxlIGxpc3QnKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsaWRGb3JtKGlucHV0KSB7XG4gICAgICAgIGlmKHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEZvcm11bGEoaW5wdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCBhIHZhbGlkIGZvcm11bGEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGluZWFyKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vID4+PiBuZWVkIHRvIGNoZWNrIGpzb24gaW5wdXQgdG9vXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgRDNHcmFwaCBmcm9tICcuLi9tb2R1bGVzL2dyYXBoLWQzJztcblxubGV0IGcxID0ge307IGxldCBnMiA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR3JhcGggZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZ3JhcGgnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZ3JhcGhzID0gW107XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFeHRlbnNpb25zIG9mIEZGb3JtXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzdGF0aWMganNvblN0cmluZyhfZm9ybSkge1xuXG4gICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShfZm9ybSk7XG4gICAgcmV0dXJuIHN1cGVyLmpzb25TdHJpbmcoZXhwYW5kZWRGb3JtKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR3JhcGggcmVwcmVzZW50YXRpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHN0YXRpYyBjcmVhdGVHcmFwaChncmFwaFR5cGUsIF9mb3JtLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYWRkRW1wdHlSZUNoaWxkU3BhY2UgPSAoZ3JhcGhUeXBlID09PSAncGFjaycpO1xuXG4gICAgLy8gZXhwYW5kIHJlLWVudHJ5IHN0cnVjdHVyZSB0byBiZSB1c2FibGUgZm9yIGdyYXBoc1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtLCB7YWRkRW1wdHlSZUNoaWxkU3BhY2U6IGFkZEVtcHR5UmVDaGlsZFNwYWNlfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ3JhcGhcblxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKTtcbiAgICBncmFwaC5mb3JtdWxhID0gX2Zvcm07XG4gICAgLy8gZ3JhcGhzLnB1c2goIG5ldyBEM0dyYXBoKGdyYXBoVHlwZSwgZm9ybSwgb3B0aW9ucykgKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBjb25zdHJ1Y3ROZXN0ZWQocmVGb3JtLCBvcHRpb25zPXt9KSB7XG4gICAgLyogQ29uc3RydWN0cyBhIChyZWFsKSBuZXN0ZWQgZm9ybSBzdHJ1Y3R1cmUgZnJvbSB0aGUgLm5lc3RlZCBhcnJheSBvZiB0aGUgb3JpZ2luYWwgcmUtZW50cnkganNvbiAqL1xuXG4gICAgLy8gPj4+IHNob3VsZCBiZSByZXdyaXR0ZW4gY29tcGxldGVseSB0byBnZXQgcmlkIG9mIGFsbCB0aGUgbXV0YXRpb24hXG4gICAgXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuXG4gIHN0YXRpYyBleHBhbmRfcmVFbnRyeShfZm9ybSwgb3B0aW9ucz17fSkge1xuICAgIC8vID4+PiBzaG91bGQgYmUgcmV3cml0dGVuIGNvbXBsZXRlbHkgdG8gZ2V0IHJpZCBvZiBhbGwgdGhlIG11dGF0aW9uIVxuICAgIGNvbnN0IHJlZkZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG4gICAgY29uc3QgdGFyZ2V0Rm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVmRm9ybSkpOyAvLyBjb3B5IGpzb24gb2JqZWN0IHdpdGhvdXQgaWRlbnRpZnlpbmcgaXRcblxuICAgIC8vIHdlIG11c3Qga2VlcCBhIHJ1bm5pbmcgaW5kZXggdG8gbm90IGNvbmZ1c2UgaWRlbnRpY2FsIGZvcm1zIHdoaWxlIHJlY29uc3RydWN0aW5nIHRoZSByZUVudHJpZXNcbiAgICAvLyBOb3RlOiB0aGlzIHNob3VsZCBiZSBkb25lIG1vcmUgZWZmaWNpZW50bHkgaW4gdGhlIGZ1dHVyZVxuICAgIGxldCBydW5uaW5nSW5kZXggPSAwO1xuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBicmFuY2gucnVubmluZ0luZGV4ID0gcnVubmluZ0luZGV4LCBydW5uaW5nSW5kZXgrKzsgfSk7XG4gICAgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuXG4gICAgdGhpcy50cmF2ZXJzZUZvcm0ocmVmRm9ybSwgZnVuY3Rpb24ocmVmQnJhbmNoKSB7XG5cbiAgICAgIGlmKHJlZkJyYW5jaC50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24odGFyZ2V0QnJhbmNoKSB7XG5cbiAgICAgICAgICBpZiggKEpTT04uc3RyaW5naWZ5KHJlZkJyYW5jaCkgPT09IEpTT04uc3RyaW5naWZ5KHRhcmdldEJyYW5jaCkpICYmIFxuICAgICAgICAgICAgICAocmVmQnJhbmNoLnJ1bm5pbmdJbmRleCA9PT0gKHRhcmdldEJyYW5jaC5oYXNPd25Qcm9wZXJ0eSgncnVubmluZ0luZGV4JykgPyB0YXJnZXRCcmFuY2gucnVubmluZ0luZGV4IDogbnVsbCkpICkge1xuICAgICAgICAgICAgdGFyZ2V0QnJhbmNoID0gdGhpcy5jb25zdHJ1Y3ROZXN0ZWQodGFyZ2V0QnJhbmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBkZWxldGUgcnVubmluZyBpbmRleCBwcm9wZXJ0eVxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBkZWxldGUgYnJhbmNoLnJ1bm5pbmdJbmRleDsgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0Rm9ybTtcbiAgfVxuXG5cbn0iLCJpbXBvcnQgY2FsYyBmcm9tICcuL2NvcmUvZmNhbGMnO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9jb3JlL2Zmb3JtJztcbmltcG9ydCBncmFwaCBmcm9tICcuL2NvcmUvZmdyYXBoJztcbmltcG9ydCBkbmEgZnJvbSAnLi9jb3JlL2ZkbmEnO1xuXG4vLyBleHBvcnQge2RlZmF1bHQgYXMgY2FsY30gZnJvbSAnLi9jb3JlL2ZjYWxjJztcbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtfSBmcm9tICcuL2NvcmUvZmZvcm0nO1xuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGdyYXBofSBmcm9tICcuL2NvcmUvZmdyYXBoJztcblxuZXhwb3J0IGRlZmF1bHQgeyBjYWxjLCBmb3JtLCBncmFwaCwgZG5hIH07IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGdsb2JhbCBzdHlsZXNcblxuY29uc3QgZ2xvYmFsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICAvLyBmb250OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICB9XG59O1xuZ2xvYmFsLmJhc2ljID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG59O1xuY29uc3QgW2Jhc2ljXSA9IFtnbG9iYWwuYmFzaWNdO1xuXG5leHBvcnQgY29uc3Qgdm1hcCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDoge2Jhc2U6IGAnSUJNIFBsZXggTW9ubycsICdTRk1vbm8tUmVndWxhcicsICdBbmRhbGUgTW9ubycsIEFuZGFsZU1vbm8sICdMdWNpZGEgQ29uc29sZScsICdMdWNpZGEgU2FucyBUeXBld3JpdGVyJywgQ29uc29sYXMsIG1vbm9zcGFjZWB9LFxuICAgICAgICB0ZXh0U2l6ZToge2Jhc2U6IDEyLCBzbTogMTB9LFxuICAgIH1cbn07XG5cbnZtYXAuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4udm1hcC5jb21tb24sXG59O1xudm1hcC5iYXNpYy5hcHBseVN0eWxlcyA9IGZ1bmN0aW9uKCnCoHtcblxufSIsImltcG9ydCB7IHRydW5jYXRlU3RyLCBwcm9jZXNzTGFiZWwsIGdldFN2Z1NpemUsIGJyZWFrU3RyLCBzdmdMaW5lYnJlYWsgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG5hLXN2Zy1zdHlsZXMuanMnO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgICAgICAgICAgICAgICAgICBmb3JtRE5BIG1hcmt1cFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1ETkFfaHRtbCAoZm9ybXVsYSwgZG5hLCB2YXJzKcKge1xuXHQvKiBDb25zdHJ1Y3RzIGFuIEhUTUwgd3JhcHBlciBmb3IgZm9ybUROQSAqL1xuXG5cdC8vIGNvbnN0cnVjdCBIVE1MIG1hcmt1cCBmb3IgdGhlIGZvcm1ETkFcblx0Y29uc3QgZm9ybVN0ciA9IGZvcm11bGEgIT09IHVuZGVmaW5lZCA/IGA8c3BhbiBjbGFzcz1cImRuYS1mb3JtXCIgdGl0bGU9XCJGT1JNXCI+JHtmb3JtdWxhfTwvc3Bhbj5gIDogJyc7XG5cblx0Y29uc3QgdmFyb3JkZXJTdHIgPSB2YXJzICYmIGRuYS5sZW5ndGggPiAxID8gJy48c3BhbiBjbGFzcz1cImRuYS12YXJvcmRlclwiIHRpdGxlPVwiVmFyaWFibGUgaW50ZXJwcmV0YXRpb24gb3JkZXJcIj5bJyt2YXJzLmpvaW4oJywnKSsnXTwvc3Bhbj4nIDogJyc7XG5cblx0cmV0dXJuIGA8ZGl2IGlkPVwiZG5hXCI+PGNvZGU+JHtmb3JtU3RyICsgdmFyb3JkZXJTdHJ9Ojo8c3BhbiBjbGFzcz1cImRuYS1jb2RlXCI+JHttYXJrdXBRdWFydEN5Y2xlcyhkbmEpfTwvc3Bhbj48L2NvZGU+PC9kaXY+YDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgdm1hcCBtYXJrdXBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiB2bWFwX3N2ZyAodm1hcFRyZWUsIGlucHV0LCB2YXJvcmRlciwgb3B0aW9ucykge1xuXHQvKiBHZW5lcmF0ZXMgU1ZHIG91dHB1dCBmb3IgYSBnaXZlbiB2bWFwIHRyZWUgKi9cblxuXHQvLyBvcHRpb24gZGVmYXVsdHNcblx0Y29uc3Qge3ZtYXBQYWQsIHN0cm9rZUMsIHZtYXBDLCBmaWdQYWQsIGZpZ0MsIGhpZGVJbnB1dExhYmVsLCBoaWRlT3JkZXJMYWJlbCwgY3VzdG9tTGFiZWwsIGZ1bGxJbnB1dExhYmVsLCBpbnB1dExhYmVsTWF4LCBzdHlsZUNsYXNzfSA9IHtcblx0XHR2bWFwUGFkOiAwLCBzdHJva2VDOiBgI2ZmZmAsIHZtYXBDOiBgbm9uZWAsIGZpZ1BhZDogMCwgZmlnQzogYCNmZmZgLFxuXHRcdGhpZGVJbnB1dExhYmVsOiBmYWxzZSwgaGlkZU9yZGVyTGFiZWw6IGZhbHNlLCBmdWxsSW5wdXRMYWJlbDogZmFsc2UsIGlucHV0TGFiZWxNYXg6IDIwMCwgXG5cdFx0Y3VzdG9tTGFiZWw6IHVuZGVmaW5lZCwgc3R5bGVDbGFzczogJ2Jhc2ljJyxcblx0XHQuLi5vcHRpb25zfTtcblxuXHRjb25zdCBkZXNpZ24gPSBzdHlsZXMudm1hcFtzdHlsZUNsYXNzXTtcblx0Y29uc3QgW3RleHRTaXplLCBmb250XSA9IFtkZXNpZ24udGV4dFNpemUsIGRlc2lnbi5mb250LmJhc2VdO1xuXG5cdGNvbnN0IHt2bnVtLCBtYXJnaW5zfSA9IHZtYXBUcmVlLmRhdGE7XG5cdGNvbnN0IHNjYWxlID0gdm1hcFRyZWUuc2NhbGU7XG5cdGNvbnN0IHN0cm9rZVcgPSBtYXJnaW5zWzBdO1xuXHQvLyBjb25zdCBsZW4gPSBNYXRoLnNxcnQoNCoqdm51bSk7IC8vIGxlbmd0aCBvZiBkbmEgd2l0aG91dCAnOjonXG5cdGNvbnN0IGJvdW5kcyA9IHt3OiBzY2FsZVswXSArIHN0cm9rZVcsIGg6IHNjYWxlWzFdICsgc3Ryb2tlV307XG5cdGNvbnN0IHJob21iID0ge3c6IE1hdGguc3FydCgyICogKGJvdW5kcy53KioyKSksIGg6IE1hdGguc3FydCgyICogKGJvdW5kcy5oKioyKSl9O1xuXG5cdGNvbnN0IGNoYXJ0ID0ge3RyZWU6IHZtYXBUcmVlLCBpbnB1dDogaW5wdXQsIHZhcm9yZGVyOiB2YXJvcmRlciwgb3B0aW9uczogb3B0aW9uc307XG5cblx0Ly8gaWYgKG91dHB1dCA9PSAnbWl4ZWQnKSB7XG5cdFx0Ly8gc3ZnIHdpdGggaHRtbCB3cmFwcGVyXG5cblx0XHQvLyBjb25zdCBjYXB0aW9uID0gKCkgPT4ge1xuXHRcdC8vIFx0aWYgKGN1c3RvbUxhYmVsICE9PSB1bmRlZmluZWQpIHJldHVybiBgPGZpZ2NhcHRpb24gc3R5bGU9XCJ3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XCI+JHtjdXN0b21MYWJlbH08L2ZpZ2NhcHRpb24+YDtcblx0XHQvLyBcdGlmICghKGhpZGVJbnB1dExhYmVsICYmIGhpZGVPcmRlckxhYmVsKSkge1xuXHRcdC8vIFx0XHRsZXQgbGFiZWwgPSAnJztcblx0XHQvLyBcdFx0aWYgKCFoaWRlT3JkZXJMYWJlbCkgbGFiZWwgKz0gYCR7dmFyb3JkZXIucmVkdWNlKChhY2MsY3VycixpKSA9PiBhY2MgKyAoaSA+IDAgPyAnID4gJyA6ICcnKSArIHByb2Nlc3NMYWJlbChjdXJyKSwnJyApfSR7aGlkZUlucHV0TGFiZWwgfHwgdm51bSA8IDEgPyAnJyA6ICc8YnIvPid9YDtcblx0XHQvLyBcdFx0aWYgKCFoaWRlSW5wdXRMYWJlbCkge1xuXHRcdC8vIFx0XHRcdGNvbnN0IGlzRm9ybUROQSA9IGlucHV0LmluY2x1ZGVzKCc6OicpO1xuXHRcdC8vIFx0XHRcdGlmIChpc0Zvcm1ETkEpIGxhYmVsICs9IGA8Y29kZSBzdHlsZT1cImZvbnQtc2l6ZTowLjhlbTtcIj4ke2Z1bGxJbnB1dExhYmVsID8gaW5wdXQgOiB0cnVuY2F0ZVN0cihpbnB1dCwoaW5wdXQuc3BsaXQoJzo6JylbMF0ubGVuZ3RoICsgNCoqNCksYOKApigkezQqKnZudW19KWApfTwvY29kZT5gO1xuXHRcdC8vIFx0XHRcdGVsc2UgbGFiZWwgKz0gJ8aSID0gJysoZnVsbElucHV0TGFiZWwgPyBpbnB1dCA6IHRydW5jYXRlU3RyKGlucHV0LGlucHV0TGFiZWxNYXgsYOKApiA8aT4rbW9yZTwvaT5gKSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0cmV0dXJuIGA8ZmlnY2FwdGlvbiBzdHlsZT1cIndvcmQtd3JhcDogYnJlYWstd29yZDtcIj4ke2xhYmVsfTwvZmlnY2FwdGlvbj5gO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0cmV0dXJuICcnO1xuXHRcdC8vIH1cblxuXHRcdC8vIGNoYXJ0LmVsZW0gPSBgPGZpZ3VyZSBjbGFzcz1cInZtYXAtZmlndXJlXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG5cdFx0Ly8gXHQ8c3ZnIGNsYXNzPVwidm1hcFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ0N9OyBwYWRkaW5nOiAke3ZtYXBQYWR9O1wiIHdpZHRoPSR7c2NhbGVbMF19IGhlaWdodD0ke3NjYWxlWzFdfVxuXHRcdC8vIFx0ZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiJHtzdHJva2VDfVwiIHN0cm9rZS13aWR0aD1cIiR7c3Ryb2tlV31cIlxuXHRcdC8vIFx0dmlld0JveD1cIi0ke3N0cm9rZVcvMn0gLSR7c3Ryb2tlVy8yfSAke3Job21iLnd9ICR7cmhvbWIuaH1cIj5cblx0XHQvLyBcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgkezB9LCR7cmhvbWIuaC8yfSkgcm90YXRlKC00NSwwLDApXCI+JHsgY29uc3RydWN0U1ZHKHZtYXBUcmVlKSB9PC9nPlxuXHRcdC8vIFx0PC9zdmc+XG5cdFx0Ly8gXHQkeyBjYXB0aW9uKCkgfVxuXHRcdC8vIFx0PC9maWd1cmU+YDtcblxuXHQvLyB9IGVsc2Uge1xuXHRcdC8vIHB1cmUgc3ZnIG91dHB1dFxuXG5cdFx0Y29uc3QgY2FwdGlvbiA9IChpbnB1dCwgY3VzdG9tTGFiZWwpID0+IHtcblx0XHRcdGlmIChjdXN0b21MYWJlbCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY3VzdG9tTGFiZWw7XG5cblx0XHRcdGxldCBsYWJlbCA9ICcnO1xuXHRcdFx0aWYgKCFoaWRlT3JkZXJMYWJlbCAmJiB2bnVtID4gMCkge1xuXHRcdFx0XHRjb25zdCBwb3MgPSBgeT1cIjBcImA7XG5cblx0XHRcdFx0bGFiZWwgKz0gb3JkZXJMYWJlbCh2YXJvcmRlciwgcG9zLCB7Zm9udDogZm9udCwgdGV4dFNpemU6IHRleHRTaXplLmJhc2V9KTtcblx0XHRcdH1cblx0XHRcdGlmICghaGlkZUlucHV0TGFiZWwpIHtcblx0XHRcdFx0Y29uc3QgaXNGb3JtRE5BID0gaW5wdXQuaW5jbHVkZXMoJzo6Jyk7XG5cblx0XHRcdFx0Y29uc3QgcHJlZml4ID0gaXNGb3JtRE5BID8gJycgOiBgxpIgPSBgO1xuXHRcdFx0XHRjb25zdCB0cnVuY01heCA9IGlzRm9ybUROQSA/IChpbnB1dC5zcGxpdCgnOjonKVswXS5sZW5ndGggKyA0Kio0KSA6IGlucHV0TGFiZWxNYXg7XG5cdFx0XHRcdGNvbnN0IHRydW5jU3VmZml4ID0gaXNGb3JtRE5BID8gYOKApigkezQqKnZudW19KWAgOiBg4oCmIDx0c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6IGl0YWxpY1wiPittb3JlPC90c3Bhbj5gO1xuXG5cdFx0XHRcdGNvbnN0IHBvcyA9IGB5PVwiMFwiYCArIChsYWJlbC5sZW5ndGggPiAwID8gYCBkeT1cIiR7dGV4dFNpemUuYmFzZSArIHRleHRTaXplLnNtIC0gMn1weFwiYCA6ICcnKTtcblxuXHRcdFx0XHRsYWJlbCArPSBpbnB1dExhYmVsKGlucHV0LCBwb3MsIHtwcmVmaXg6IHByZWZpeCwgdHJ1bmNhdGVkOiAhZnVsbElucHV0TGFiZWwsIHRydW5jTWF4OiB0cnVuY01heCwgdHJ1bmNTdWZmaXg6IHRydW5jU3VmZml4LCBmb250OiBmb250LCB0ZXh0U2l6ZTogdGV4dFNpemUuc219KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBsYWJlbDtcblx0XHR9XG5cblx0XHRjb25zdCB2bWFwID0ge3c6IChzY2FsZVswXSArIHZtYXBQYWQpLCBoOiAoc2NhbGVbMV0gKyB2bWFwUGFkKX07XG5cblx0XHR2bWFwLmVsZW0gPSBgPHN2ZyBjbGFzcz1cInZtYXBcIiB3aWR0aD0ke3ZtYXAud30gaGVpZ2h0PSR7dm1hcC5ofSB2aWV3Qm94PVwiLSR7c3Ryb2tlVy8yICsgdm1hcFBhZC8yfSAtJHtzdHJva2VXLzIgKyB2bWFwUGFkLzJ9ICR7cmhvbWIudyArIHZtYXBQYWR9ICR7cmhvbWIuaCArIHZtYXBQYWR9XCI+XG5cdFx0XHQ8cmVjdCB4PVwiLSR7dm1hcFBhZC8yfVwiIHk9XCItJHt2bWFwUGFkLzJ9XCIgd2lkdGg9XCIke3Job21iLncgKyB2bWFwUGFkfVwiIGhlaWdodD1cIiR7cmhvbWIuaCArIHZtYXBQYWR9XCIgZmlsbD1cIiR7dm1hcEN9XCI+PC9yZWN0PlxuXHRcdFx0PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAsJHtyaG9tYi5oLzJ9KSByb3RhdGUoLTQ1LDAsMClcIiBzdHJva2U9XCIke3N0cm9rZUN9XCIgc3Ryb2tlLXdpZHRoPVwiJHtzdHJva2VXfVwiPiR7IGNvbnN0cnVjdFNWRyh2bWFwVHJlZSkgfTwvZz5cblx0XHQ8L3N2Zz5gO1xuXG5cdFx0Y29uc3QgZmlnQ2FwdGlvbiA9IHtlbGVtOiBjYXB0aW9uKGlucHV0LCBjdXN0b21MYWJlbCksIHBvczoge3g6IDAsIHk6ICh2bWFwLmggKyAxMCl9fTtcblx0XHRmaWdDYXB0aW9uLnNpemUgPSBnZXRTdmdTaXplKGZpZ0NhcHRpb24uZWxlbSk7XG5cblx0XHRjb25zdCBhcHBlbmRTaXplID0gW01hdGgubWF4KDAsIChmaWdDYXB0aW9uLnNpemUudyAtIHZtYXAudykpLFxuXHRcdFx0XHRcdFx0XHQoZmlnQ2FwdGlvbi5zaXplLmggPiAwID8gKGZpZ0NhcHRpb24uc2l6ZS5oICsgKGZpZ0NhcHRpb24ucG9zLnkgLSB2bWFwLmgpKSA6IDApXTtcblxuXHRcdGNoYXJ0LnNpemUgPSB7dzogKHZtYXAudyArIGFwcGVuZFNpemVbMF0gKyBmaWdQYWQpLCBoOiAodm1hcC5oICsgYXBwZW5kU2l6ZVsxXSArIGZpZ1BhZCl9O1xuXG5cdFx0Y2hhcnQuZWxlbSA9IGA8c3ZnIGNsYXNzPVwidm1hcC1maWd1cmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke2NoYXJ0LnNpemUud31cIiBoZWlnaHQ9XCIke2NoYXJ0LnNpemUuaH1cIiB2aWV3Qm94PVwiLSR7ZmlnUGFkLzJ9IC0ke2ZpZ1BhZC8yfSAke2NoYXJ0LnNpemUud30gJHtjaGFydC5zaXplLmh9XCI+XG5cdFx0XHQ8cmVjdCB4PVwiLSR7ZmlnUGFkLzJ9XCIgeT1cIi0ke2ZpZ1BhZC8yfVwiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgZmlsbD1cIiR7ZmlnQ31cIj48L3JlY3Q+XG5cdFx0XHQ8Zz4keyB2bWFwLmVsZW0gfTwvZz5cblx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2ZpZ0NhcHRpb24ucG9zLnh9LCR7ZmlnQ2FwdGlvbi5wb3MueX0pXCI+JHsgZmlnQ2FwdGlvbi5lbGVtIH08L2c+XG5cdFx0PC9zdmc+YDtcblx0Ly8gfVxuXG5cdHJldHVybiBjaGFydDtcbn1cblxuZnVuY3Rpb24gb3JkZXJMYWJlbCAodmFyb3JkZXIsIHBvcz0neD1cIjBcIiB5PVwiMFwiJywgb3B0aW9ucz11bmRlZmluZWQpIHtcblx0LyogR2VuZXJhdGVzIGFuIG9yZGVyIGxhYmVsIChlLmcuIFwiYSA+IGIgPiBjXCIpIGZyb20gdmFyaWFibGUgb3JkZXIgKi9cblx0Y29uc3Qge21heExpbmVXaWR0aCwgZm9udCwgdGV4dFNpemUsIGxlYWRpbmd9ID0gXG5cdFx0eyBtYXhMaW5lV2lkdGg6IDYwLCBmb250OiAnaW5oZXJpdCcsIHRleHRTaXplOiAxMiwgbGVhZGluZzogNCwgLi4ub3B0aW9ucyB9O1xuXHRjb25zdCBzdHlsZSA9IGBmb250LWZhbWlseTogJHtmb250fTsgZm9udC1zaXplOiAke3RleHRTaXplfXB4OyBkb21pbmFudC1iYXNlbGluZTogaGFuZ2luZztgO1xuXG5cdGxldCBvdXRwdXQgPSB2YXJvcmRlci5yZWR1Y2UoKGFjYyxjdXJyLGkpID0+IGFjYyArIChpID4gMCA/ICc8dHNwYW4geT1cIjBcIj4gPiA8L3RzcGFuPicgOiAnJykgKyBwcm9jZXNzTGFiZWwoY3VyciwgJ3N2ZycpLCcnICk7XG5cblx0Ly8gb3V0cHV0ID0gYnJlYWtTdHIob3V0cHV0LCBtYXhMaW5lV2lkdGgpIC8vIDwtLSBmaXggdGFnIGJyZWFrc1xuXHQvLyBcdC5yZWR1Y2UoKHN0cixjdXJyLGkpID0+IHN0ciArIChpID4gMCA/IHN2Z0xpbmVicmVhayhjdXJyLCAodGV4dFNpemUgKyBsZWFkaW5nICsgJ3B4JykpIDogY3VyciksICcnKTtcblxuXHRyZXR1cm4gYDx0ZXh0ICR7cG9zfSBzdHlsZT1cIiR7c3R5bGV9XCI+JHtvdXRwdXR9PC90ZXh0PmA7XG59XG5cbmZ1bmN0aW9uIGlucHV0TGFiZWwgKGlucHV0LCBwb3M9J3g9XCIwXCIgeT1cIjBcIicsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdC8qIEdlbmVyYXRlcyBhbiBpbnB1dCBsYWJlbCAoZS5nLiBcIsaSID0gKChhKWIpXCIgb3IgXCI6OjMyMTBcIikgKi9cblx0Y29uc3Qge3ByZWZpeCwgbWF4TGluZVdpZHRoLCB0cnVuY2F0ZWQsIHRydW5jTWF4LCB0cnVuY1N1ZmZpeCwgZm9udCwgdGV4dFNpemUsIGxlYWRpbmd9ID0gXG5cdFx0e3ByZWZpeDogJycsIG1heExpbmVXaWR0aDogNjAsIHRydW5jYXRlZDogZmFsc2UsIHRydW5jTWF4OiAxMDAwLCB0cnVuY1N1ZmZpeDogJ+KApicsIGZvbnQ6ICdpbmhlcml0JywgdGV4dFNpemU6IDEyLCBsZWFkaW5nOiA0LCAuLi5vcHRpb25zIH07XG5cdGNvbnN0IHN0eWxlID0gYGZvbnQtZmFtaWx5OiAke2ZvbnR9OyBmb250LXNpemU6ICR7dGV4dFNpemV9cHg7IGRvbWluYW50LWJhc2VsaW5lOiBoYW5naW5nO2A7XG5cblx0bGV0IG91dHB1dCA9IHByZWZpeCArIGlucHV0O1xuXHRsZXQgYXBwZW5kaXggPSAnJztcblxuXHRpZiAodHJ1bmNhdGVkICYmIChvdXRwdXQubGVuZ3RoID4gdHJ1bmNNYXgpKSB7XG5cdFx0b3V0cHV0ID0gb3V0cHV0LnN1YnN0cigwLHRydW5jTWF4KTtcblx0XHRhcHBlbmRpeCArPSB0cnVuY1N1ZmZpeDtcblx0fVxuXHRvdXRwdXQgPSBicmVha1N0cihvdXRwdXQsIG1heExpbmVXaWR0aClcblx0XHQucmVkdWNlKChzdHIsY3VycixpKSA9PiBzdHIgKyAoaSA+IDAgPyBzdmdMaW5lYnJlYWsoY3VyciwgKHRleHRTaXplICsgbGVhZGluZyArICdweCcpKSA6IGN1cnIpLCAnJyk7XG5cblx0cmV0dXJuIGA8dGV4dCAke3Bvc30gc3R5bGU9XCIke3N0eWxlfVwiPiR7b3V0cHV0ICsgYXBwZW5kaXh9PC90ZXh0PmA7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFNWRyhzdWJUcmVlLCBtYXBTVkc9JycpIHtcblx0LyogUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBzdmcgbWFya3VwIGZyb20gdm1hcCB0cmVlIHN0cnVjdHVyZSAqL1xuXG5cdGlmKHN1YlRyZWUgIT09IG51bGwgJiYgdHlwZW9mIHN1YlRyZWUgPT0gXCJvYmplY3RcIikge1xuXHRcdGlmKHN1YlRyZWUuY2hpbGRyZW4pIHtcblx0XHRcdG1hcFNWRyArPSBgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7c3ViVHJlZS5wb3NpdGlvblswXX0sICR7c3ViVHJlZS5wb3NpdGlvblsxXX0pXCI+YDtcblxuXHRcdFx0c3ViVHJlZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0bWFwU1ZHICs9IGNvbnN0cnVjdFNWRyhjaGlsZCk7XG5cdFx0XHR9KTtcblx0XHRcdG1hcFNWRyArPSBgPC9nPmA7XG5cdFx0XHRyZXR1cm4gbWFwU1ZHO1xuXHRcdH1cblx0XHRlbHNlIHtcdFx0XHRcdFxuXHRcdFx0bWFwU1ZHICs9IGA8cmVjdCB4PVwiJHtzdWJUcmVlLnBvc2l0aW9uWzBdfVwiIHk9XCIke3N1YlRyZWUucG9zaXRpb25bMV19XCIgd2lkdGg9XCIke3N1YlRyZWUuc2NhbGVbMF19XCIgaGVpZ2h0PVwiJHtzdWJUcmVlLnNjYWxlWzFdfVwiIGZpbGw9XCIke3ZDb2xvcihzdWJUcmVlLnZhbHVlKX1cIj48L3JlY3Q+YDtcblx0XHRcdHJldHVybiBtYXBTVkc7XG5cdFx0fVxuXHR9XG5cdGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcignTm90IGEgc3VidHJlZSEnKTtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdm1hcFBlcnNwZWN0aXZlc19zdmcgKHZtYXBQZXJtdXRhdGlvbnMsIGlucHV0LCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuXHQvKiBDb25zdHJ1Y3RzIHZtYXAgcGVyc3BlY3RpdmVzIGFzIEhUTUwgb3V0cHV0IChmbGV4IGxpc3QpICovXG5cblx0Y29uc3Qge2ZpZ1BhZCwgZmlnQywgbWFyZ2luLCBjdXN0b21MYWJlbCwgc3R5bGVDbGFzc30gPSBcblx0XHR7IGZpZ1BhZDogMCwgZmlnQzogYCNmZmZgLFxuXHRcdCAgbWFyZ2luOiAyMCwgY3VzdG9tTGFiZWw6IHVuZGVmaW5lZCwgc3R5bGVDbGFzczogJ2Jhc2ljJywgLi4uZ2xvYmFsT3B0aW9ucyB9O1xuXG5cdGNvbnN0IGRlc2lnbiA9IHN0eWxlcy52bWFwW3N0eWxlQ2xhc3NdO1xuXHRjb25zdCBbdGV4dFNpemUsIGZvbnRdID0gW2Rlc2lnbi50ZXh0U2l6ZSwgZGVzaWduLmZvbnQuYmFzZV07XG5cblx0Y29uc3QgY2hhcnQgPSB7dm1hcHM6IHZtYXBQZXJtdXRhdGlvbnMsIGlucHV0OiBpbnB1dCwgb3B0aW9uczogZ2xvYmFsT3B0aW9uc307XG5cblx0Ly8gaWYgKG91dHB1dCA9PSAnbWl4ZWQnKSB7XG5cdFx0Ly8gY29uc3Qgdm1hcEl0ZW1zID0gdm1hcFBlcm11dGF0aW9ucy5tYXAodm1hcCA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJ2bWFwLWl0ZW1cIiBzdHlsZT1cInBhZGRpbmc6ICR7TWF0aC5mbG9vcihtYXJnaW4vNCl9cHggJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPiBcblx0XHQvLyBcdFx0XHQke3ZtYXAuZWxlbX08L2Rpdj5gfSkucmVkdWNlKChzdHIsaXRlbSkgPT4gc3RyK2l0ZW0sJycpO1xuXG5cdFx0Ly8gY29uc3QgbGFiZWwgPSBjYXB0aW9uKCk7XG5cblx0XHQvLyByZXR1cm4gYDxmaWd1cmUgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlc1wiIHN0eWxlPVwibWF4LXdpZHRoOiBub25lO1wiPlxuXHRcdC8vIFx0XHQ8ZGl2IGNsYXNzPVwidm1hcC1saXN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbjogMCAtJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPlxuXHRcdC8vIFx0XHQkeyB2bWFwSXRlbXMgfVxuXHRcdC8vIFx0XHQ8L2Rpdj5cblx0XHQvLyBcdFx0PGZpZ2NhcHRpb24gc3R5bGU9XCJib3JkZXItdG9wOiAxcHggc29saWQ7IHBhZGRpbmctdG9wOiAke01hdGguZmxvb3IobWFyZ2luLzQpfXB4OyBtYXJnaW4tdG9wOiAke01hdGguZmxvb3IobWFyZ2luLzIpfXB4OyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XCI+JHtsYWJlbH08L2ZpZ2NhcHRpb24+XG5cdFx0Ly8gXHRcdDwvZmlndXJlPmA7XG5cdC8vIH1cblx0Ly8gZWxzZSB7XG5cdFx0Y29uc3QgcGFkZGluZyA9IHt4OiAoTWF0aC5mbG9vcihtYXJnaW4vNCkpLCB5OiAoTWF0aC5mbG9vcihtYXJnaW4vMikpfTtcblx0XHRjb25zdCBjb3VudCA9IHZtYXBQZXJtdXRhdGlvbnMubGVuZ3RoO1xuXHRcdGNvbnN0IHZtYXBTaXplID0gdm1hcFBlcm11dGF0aW9uc1swXS5zaXplO1xuXG5cdFx0Y29uc3QgY29sTnVtID0gTWF0aC5taW4oY291bnQsIDYpO1xuXHRcdGNvbnN0IHJvd051bSA9IE1hdGguZmxvb3IoY291bnQvY29sTnVtKTtcblx0XHRjb25zdCB0YWJsZVNpemUgPSB7IHc6IHZtYXBTaXplLncgKiBjb2xOdW0gKyAocGFkZGluZy54KjIpICogKGNvbE51bS0xKSxcblx0XHRcdFx0XHRcdFx0aDogdm1hcFNpemUuaCAqIHJvd051bSArIChwYWRkaW5nLnkqMikgKiAocm93TnVtLTEpIH07XG5cblx0XHRjb25zdCB2bWFwSXRlbXMgPSB2bWFwUGVybXV0YXRpb25zLm1hcCh2bWFwID0+IHtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHtlbGVtOiB2bWFwLmVsZW19O1xuXHRcdH0pLnJlZHVjZSgoc3RyLGl0ZW0saSkgPT4ge1xuXHRcdFx0Y29uc3QgeCA9IGklY29sTnVtO1xuXHRcdFx0Y29uc3QgeSA9IE1hdGguZmxvb3IoaS9jb2xOdW0pO1xuXG5cdFx0XHRjb25zdCBjb29yZHMgPSBbdm1hcFNpemUudyAqIHggKyAocGFkZGluZy54KjIpICogeCxcblx0XHRcdFx0XHRcdCAgICB2bWFwU2l6ZS5oICogeSArIChwYWRkaW5nLnkqMikgKiB5XTtcblx0XHRcdHJldHVybiBzdHIrIGA8ZyBjbGFzcz1cInZtYXAtaXRlbVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2Nvb3Jkc1swXX0sJHtjb29yZHNbMV19KVwiPiR7aXRlbS5lbGVtfTwvZz5gO1xuXHRcdH0sJycpO1xuXHRcblx0XHRjb25zdCBjYXB0aW9uID0gKGlucHV0LCBjdXN0b21MYWJlbCkgPT4ge1xuXHRcdFx0aWYgKGN1c3RvbUxhYmVsICE9PSB1bmRlZmluZWQpIHJldHVybiBjdXN0b21MYWJlbDtcblxuXHRcdFx0Y29uc3QgaXNGb3JtRE5BID0gaW5wdXQuaW5jbHVkZXMoJzo6Jyk7XG5cdFx0XHRjb25zdCBwcmVmaXggPSBpc0Zvcm1ETkEgPyAnJyA6IGDGkiA9IGA7XG5cdFx0XHRjb25zdCBwb3MgPSBgeT1cIjBcImA7IC8vICBkeT1cIiR7dGV4dFNpemUuYmFzZSArIHRleHRTaXplLnNtIC0gMn1weFwiXG5cblx0XHRcdHJldHVybiBpbnB1dExhYmVsKGlucHV0LCBwb3MsIHtwcmVmaXg6IHByZWZpeCwgdHJ1bmNhdGVkOiBmYWxzZSwgZm9udDogZm9udCwgdGV4dFNpemU6IHRleHRTaXplLmJhc2V9KTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWdDYXB0aW9uID0ge2VsZW06IGNhcHRpb24oaW5wdXQsIGN1c3RvbUxhYmVsKSwgcG9zOiB7eDogMCwgeTogdGFibGVTaXplLmggKyBwYWRkaW5nLnl9LCBsaW5lU3BhY2luZzogcGFkZGluZy55fTtcblx0XHRmaWdDYXB0aW9uLnNpemUgPSBnZXRTdmdTaXplKGZpZ0NhcHRpb24uZWxlbSk7XG5cblx0XHRjb25zdCBhcHBlbmRTaXplID0gW01hdGgubWF4KDAsIChmaWdDYXB0aW9uLnNpemUudyAtIHRhYmxlU2l6ZS53KSksXG5cdFx0XHRcdFx0XHRcdGZpZ0NhcHRpb24uc2l6ZS5oICsgKGZpZ0NhcHRpb24ucG9zLnkgLSB0YWJsZVNpemUuaCkgKyBmaWdDYXB0aW9uLmxpbmVTcGFjaW5nXTtcblxuXHRcdC8vIGNvbnN0IGxpc3RNYXJnaW4gPSB7eDogMCwgeTogTWF0aC5mbG9vcihtYXJnaW4vMil9O1xuXG5cdFx0Y2hhcnQuc2l6ZSA9IHt3OiAodGFibGVTaXplLncgKyBhcHBlbmRTaXplWzBdICsgZmlnUGFkKSwgXG5cdFx0XHRcdFx0ICBoOiAodGFibGVTaXplLmggKyBhcHBlbmRTaXplWzFdICsgZmlnUGFkKX07XG5cblx0XHRjaGFydC5lbGVtID0gYDxzdmcgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlcy1maWd1cmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke2NoYXJ0LnNpemUud31cIiBoZWlnaHQ9XCIke2NoYXJ0LnNpemUuaH1cIiB2aWV3Qm94PVwiLSR7ZmlnUGFkLzJ9IC0ke2ZpZ1BhZC8yfSAke2NoYXJ0LnNpemUud30gJHtjaGFydC5zaXplLmh9XCI+XG5cdFx0XHQ8cmVjdCB4PVwiLSR7ZmlnUGFkLzJ9XCIgeT1cIi0ke2ZpZ1BhZC8yfVwiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgZmlsbD1cIiR7ZmlnQ31cIj48L3JlY3Q+XG5cdFx0XHQ8ZyBjbGFzcz1cInZtYXAtcGVyc3BlY3RpdmVzIHZtYXAtdGFibGVcIj4keyB2bWFwSXRlbXMgfTwvZz5cblx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2ZpZ0NhcHRpb24ucG9zLnh9LCR7ZmlnQ2FwdGlvbi5wb3MueX0pXCI+XG5cdFx0XHRcdDxsaW5lIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiJHt0YWJsZVNpemUud31cIiB5Mj1cIjBcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjAuNVwiIC8+XG5cdFx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCR7ZmlnQ2FwdGlvbi5saW5lU3BhY2luZ30pXCI+JHsgZmlnQ2FwdGlvbi5lbGVtIH08L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+YDtcblxuXHRcdHJldHVybiBjaGFydDtcblx0Ly8gfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2bWFwTGlzdF9zdmcgKHZtYXBzX3N2ZywgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQpIHtcblx0LyogQ29uc3RydWN0cyBtdWx0aXBsZSB2bWFwcyBhcyBTVkcgb3V0cHV0ICovXG5cblx0Y29uc3Qge21hcmdpbiwgdkFsaWdufSA9IHsgbWFyZ2luOiAyMCwgdkFsaWduOiAnYm90dG9tJywgLi4uZ2xvYmFsT3B0aW9ucyB9XG5cblx0Ly8gY29uc3Qgdm1hcEl0ZW1zID0gdm1hcFBlcm11dGF0aW9uc19zdmcubWFwKHZtYXBfc3ZnID0+IHtcblx0XHRcdFxuXHQvLyBcdHJldHVybiB7c2l6ZTogdm1hcF9zdmcuc2l6ZSwgZWxlbTogdm1hcF9zdmcuZWxlbX07XG5cdC8vIH0pLnJlZHVjZSgoc3RyLGl0ZW0saSxhcnIpID0+IHtcblxuXHQvLyBcdC8vIGNvbnN0IHNoaWZ0WCA9IChpID4gMCkgPyAoIGFyclswXS5zaXplLncgKiBpICsgKHBhZGRpbmcueCoyKSAqIGkgKSA6IDA7XG5cdC8vIFx0cmV0dXJuIHN0cisgYDxnIGNsYXNzPVwidm1hcC1pdGVtXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7c2hpZnRYfSwwKVwiPiR7aXRlbS5lbGVtfTwvZz5gO1xuXHQvLyB9LCcnKTtcblxuXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJ2bWFwLWxpc3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgJHtnZXRWQWxpZ24odkFsaWduKX0gbWFyZ2luOiAwIC0ke01hdGguZmxvb3IobWFyZ2luLzIpfXB4XCI+XG5cdFx0XHQkeyB2bWFwc19zdmcucmVkdWNlKChzdHIsIHZtYXBfc3ZnKSA9PiBgJHtzdHJ9PGRpdiBjbGFzcz1cInZtYXAtaXRlbVwiIHN0eWxlPVwicGFkZGluZzogJHtNYXRoLmZsb29yKG1hcmdpbi80KX1weCAke01hdGguZmxvb3IobWFyZ2luLzIpfXB4XCI+JHt2bWFwX3N2Zy5lbGVtfTwvZGl2PmAsJycpIH1cblx0XHRcdDwvZGl2PmBcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBIZWxwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG1hcmt1cFF1YXJ0Q3ljbGVzID0gKHN0cikgPT4ge1xuXHQvKiBNYXJrcyB1cCBncm91cHMgb2YgNCBudW1iZXJzIGVhY2ggZm9yIGRuYSB0byBiZSBhYmxlIHRvIGFwcGx5IHJlYWRhYmxlIENTUyAqL1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHN0cixjLGksYXJyKSA9PiB7XG5cblx0XHRyZXR1cm4gc3RyICsgKChpKzEpJTQgPT09IDEgPyAnPHNwYW4gY2xhc3M9XCJkbmEtcXVhcnQxXCI+JyA6ICcnKSArIGMgKyAoKGkrMSklNCA9PT0gMCA/ICc8L3NwYW4+JyA6ICcnKTtcblx0fSwnJyk7XG59XG5cbmNvbnN0IGdldFZBbGlnbiA9IHZBbGlnbiA9PiB7XG5cdC8vID4+PiBhcyBoZWxwZXJcblx0Y29uc3QgYWxpZ25JdGVtcyA9IHZBbGlnbiA9PT0gJ3RvcCcgICAgPyAnZmxleC1zdGFydCdcblx0XHRcdFx0IFx0IDogdkFsaWduID09PSAnY2VudGVyJyA/ICdjZW50ZXInXG5cdFx0XHRcdCBcdCA6IHZBbGlnbiA9PT0gJ2JvdHRvbScgPyAnZmxleC1lbmQnIDogJ2ZsZXgtZW5kJztcblx0cmV0dXJuIGBhbGlnbi1pdGVtczogJHthbGlnbkl0ZW1zfTtgO1xufVxuXG5jb25zdCB2Q29sb3IgPSB2YWwgPT4ge1xuXHQvKiBWYWx1ZSB0byBjb2xvciBtYXAgZm9yIHZtYXAgKi9cblx0cmV0dXJuIHZhbCA9PSAwID8gJyMwMDAwMDAnXG5cdFx0IDogdmFsID09IDEgPyAnIzQ3NTdmZidcblx0XHQgOiB2YWwgPT0gMiA/ICcjZmYwMDQ0J1xuXHRcdCA6IHZhbCA9PSAzID8gJyMwMGZmNWYnXG5cdFx0IDogTmFOO1xufTtcbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGdldFJlYWxEZXB0aCwgb3BhY2l0eSwgY2lyY2xlRGFzaEFycmF5IH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbi8qIENhc2NhZGluZyBEMy1TdHlsZXMgLSBieSBQZXRlciBIb2ZtYW5uLCAxMi8yMDE4ICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnbG9iYWwgc3R5bGVzXG5cbmNvbnN0IGdsb2JhbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRWYXI6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ2l0YWxpYyd9LFxuICAgICAgICBmb250Q29uc3Q6IHtmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRDb250ZXh0OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxMHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgIGxhYmVsczoge3JlRXZlbjogJzJ8cnwnLCByZU9kZDogJzJ8cnwrMSd9LFxuICAgICAgICBjb2xvcjoge2Jhc2U6IGQzLmNvbG9yKCdibGFjaycpLFxuICAgICAgICAgICAgICAgIGdyb3VuZDogZDMuY29sb3IoJ3doaXRlJyksXG4gICAgICAgICAgICAgICAgaW5kZWY6IGQzLmNvbG9yKCdyZWQnKSxcbiAgICAgICAgICAgICAgICBsaWdodDogZDMuY29sb3IoJyNkZGQnKSxcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuZ2xvYmFsLmJhc2ljID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG4gICAgZm9udDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnQsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250VmFyOiB7IC4uLmdsb2JhbC5jb21tb24uZm9udFZhcixcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJywgc3R5bGU6ICdpdGFsaWMnXG4gICAgICAgIH0sXG4gICAgZm9udENvbnN0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnN0LFxuICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICB9LFxuICAgIGZvbnRDb250ZXh0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnRleHQsXG4gICAgICAgICAgICBmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnXG4gICAgICAgIH1cbn07XG5nbG9iYWwuZ2VzdGFsdCA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxuICAgIGZvbnQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250LFxuICAgICAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udFZhcjogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRWYXIsXG4gICAgICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250Q29uc3Q6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29uc3QsXG4gICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgIH0sXG4gICAgZm9udENvbnRleHQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29udGV4dCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgICAgICB9LFxuICAgIGNvbG9yOiB7Li4uZ2xvYmFsLmNvbW1vbi5jb2xvcixcbiAgICAgICAgICAgIHBvczogZDMuY29sb3IoJ3doaXRlJyksIFxuICAgICAgICAgICAgbmVnOiBkMy5jb2xvcignYmxhY2snKVxuICAgICAgICB9XG59O1xuY29uc3QgW2Jhc2ljLCBnZXN0YWx0XSA9IFtnbG9iYWwuYmFzaWMsIGdsb2JhbC5nZXN0YWx0XTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGVmYXVsdHMoc3ZnKSB7XG4gICAgc3ZnLmF0dHIoJ3N0cm9rZScsJ25vbmUnKS5hdHRyKCdmaWxsJywnbm9uZScpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMudHJlZSBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCB0cmVlID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBub2RlU2l6ZToge3c6IDEwLjAsIGg6IDEwLjB9LCAvLyBzaXplIG9mIG5vZGVzXG4gICAgICAgIG5vZGVTZXBhcmF0aW9uOiB7aHo6IDIwLCB2dDogNDB9LCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gbm9kZXNcbiAgICAgICAgZGFzaGVzOiB7bGluazogJzRweCA2cHgnXG4gICAgICAgICAgICB9LFxuICAgIH1cbn07XG5cbnRyZWUuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4udHJlZS5jb21tb24sXG59O1xudHJlZS5iYXNpYy5hcHBseUF4aXNTdHlsZXMgPSBmdW5jdGlvbihheGlzKSB7XG5cbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMubm9kZVNpemUudyoxLjUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ3JnYmEoMCwwLDAsLjA1JylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgIGF4aXMuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcblxufVxudHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuXG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcbiAgICByZUNoaWxkcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDMsIFsxXSkpO1xuICAgIHJlUG9pbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG5vZGVzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHNldHMuc2VsZWN0QWxsKCdjaXJjbGUuaW5uZXInKVxuICAgICAgICAvLyAuY2xhc3NlZCgnaW5uZXInKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG59O1xudHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgbGlua3Muc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUNoaWxkTGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG5cbiAgICByZVBvaW50TGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG59O1xuXG4vLyB0cmVlLmdlc3RhbHQgPSB7XG4vLyAgICAgLi4uZ2VzdGFsdCxcbi8vICAgICAuLi50cmVlLmNvbW1vbixcbi8vIH07XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuLy8gfVxuLy8gdHJlZS5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuLy8gICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucyk7XG4vLyB9O1xuLy8gdHJlZS5nZXN0YWx0LmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuLy8gICAgIC8vIGNvbnN0IFtyZUNoaWxkTGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4vLyB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMucGFjayBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBwYWNrID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICByYWRpdXM6IDE0LFxuICAgICAgICBwYWRkaW5nOiAxNCxcbiAgICB9XG59O1xuXG5wYWNrLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDE0LCBbMi81LCAzLzVdKSApO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuXG4gICAgY29uc3QgcmVFdmVuTGFiZWxzID0gcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG59O1xuXG5wYWNrLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2VzdGFsdCxcbiAgICAuLi5wYWNrLmNvbW1vbixcbn07XG5wYWNrLmdlc3RhbHQuaW52ZXJ0RmlsbCA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZ2V0UmVhbERlcHRoKGQpJTIgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5uZWcudG9TdHJpbmcoKTtcbn07XG5wYWNrLmdlc3RhbHQuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCkge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGNvbnN0IGRlZnMgPSBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudE5vZGUpXG4gICAgICAgIC5hcHBlbmQoJ2RlZnMnKTtcbiAgICBjb25zdCBncmFkXzEgPSBkZWZzLmFwcGVuZCgncmFkaWFsR3JhZGllbnQnKS5hdHRyKCdpZCcsICdncmFkLWluZGVmLW91dGluJylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMyk7XG4gICAgICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc5MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC44KTtcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAxLjApO1xuICAgIGNvbnN0IGdyYWRfMiA9IGRlZnMuYXBwZW5kKCdyYWRpYWxHcmFkaWVudCcpLmF0dHIoJ2lkJywgJ2dyYWQtaW5kZWYtaW5vdXQnKVxuICAgICAgICAuYXR0cignZngnLCcyMCUnKVxuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMS4wKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuNik7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzYwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjQpO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMCk7XG5cbiAgICBmb3Jtcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG5cbiAgICByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiAnbm9uZScgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAndXJsKCNncmFkLWluZGVmLW91dGluKScpO1xuXG4gICAgY29uc3Qgb3BlblJlRW50cmllcyA9IHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1pbm91dCknKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDgsIFsyLzUsIDMvNV0pICk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+ICgoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScpIHx8wqAhZ2V0UmVhbERlcHRoKGQpJTIpICkgLy8gIFxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdzY2FsZSgxLjUpJyk7XG5cbiAgICBjb25zdCByZUV2ZW5MYWJlbHMgPSByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsLmluc2lkZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknICYmIGQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKTtcblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGJveG1vZGVsRDMgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgYm94bW9kZWwgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGVsZW1NYXJnaW46IHtoejogMTIsIHZ0OiA4fSwgLy8gdnQ6IDhcbiAgICAgICAgZm9ybU1hcmdpbjoge3RvcDogMTAsIHJpZ2h0OiAxMH0sXG4gICAgICAgIGZvcm1QYWRkaW5nOiB7aHo6IDB9LFxuICAgICAgICBtaW5Gb3JtU2l6ZToge3dpZHRoOiAzNCwgaGVpZ2h0OiAzNH0sXG4gICAgICAgIG1heExpbmVXaWR0aDogMTAwMDAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLjFcbiAgICB9XG59O1xuXG5ib3htb2RlbC5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi5ib3htb2RlbC5jb21tb25cbiAgICAvLyBmb250OiB7Li4uYmFzaWMuZm9udCwgc2l6ZTogJzE4cHgnfVxufTtcbmJveG1vZGVsLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIHNldHMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLnN0cm9rZVdpZHRoKTtcbiAgICBmb3Jtcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuICAgIC8vIHJlRW50cmllcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAvLyAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLy8gLnN0eWxlKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCdiYXNlbGluZScpIDwtLSBcImJ1Z1wiIGluIFNhZmFyaVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgdmFycy5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCcudW5jbGVhck1hcmsnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnbm9ybWFsJylcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG59OyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBib3htb2RlbEQzIGZyb20gJ2JveG1vZGVsLWxheW91dC1mb3ItZDMnO1xuXG5pbXBvcnQgY2hhcnRGYWN0b3J5LCB7IGZpdENoYXJ0LCB0ZXh0U2l6ZSwgdGV4dFN1YnNjcmlwdCwgY2lyY2xlTGFiZWwgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZ3JhcGgtZDMtc3R5bGVzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM0dyYXBoIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemF0aW9uIFNldHVwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoVHlwZSwgZGF0YSwgb3B0cywgLi4uYXJncykge1xuICAgICAgICAvLyBjcmVhdGUgYmFzaWMgc3ZnLXN0cnVjdHVyZSBmcm9tIGNoYXJ0RmFjdG9yeSBhbmQgbWVyZ2Ugb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYXRpb25cblxuICAgICAgICBjb25zdCBwcm90byA9IGNoYXJ0RmFjdG9yeSggeyBcbiAgICAgICAgICAgIC4uLnsgbWFyZ2luOiB7IGxlZnQ6IDUwLCByaWdodDogNTAsIHRvcDogNTAsIGJvdHRvbTogNTAgfSwgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiAxMCwgcmlnaHQ6IDEwLCB0b3A6IDEwLCBib3R0b206IDEwIH0sXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogeyBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiAnYmFzaWMnIH0sXG4gICAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBtZXJnZSB0aGlzIGdyYXBoIHdpdGggdGhlIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3RvKTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGlubmVyIGRpbWVuc2lvbnMgb2YgdGhlIHN2Zy1jaGFydFxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICAgICAgdGhpcy5pbm5lcldpZHRoID0gdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIHRoaXMucGFkZGluZy5sZWZ0IC0gdGhpcy5wYWRkaW5nLnJpZ2h0O1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwcHJvcHJpYXRlIG1ldGhvZCB0byBidWlsZCB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcltncmFwaFR5cGVdLmNhbGwodGhpcywgZGF0YSwgLi4uYXJncyk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIERlcHRoIFRyZWUgdmlzdWFsaXphdGlvblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgdHJlZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGQzLWhpZXJhcmNoeSBmcm9tIG91ciBmb3JtLWpzb25cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy50cmVlW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtub2RlU2l6ZSwgbm9kZVNlcF0gPSBbZGVzaWduLm5vZGVTaXplLCBkZXNpZ24ubm9kZVNlcGFyYXRpb25dO1xuICAgICAgICBjb25zdCBbZm9udFNpemUsIGZvbnRdID0gW2Rlc2lnbi5mb250LnNpemUsIGRlc2lnbi5mb250LmZhbWlseV07XG5cbiAgICAgICAgdGhpcy5wYWRkaW5nID0geyBsZWZ0OiAxMCwgcmlnaHQ6IDEwLCB0b3A6IDEwLCBib3R0b206IDEwIH07XG5cbiAgICAgICAgcm9vdC5keCA9IG5vZGVTaXplLncgKyBub2RlU2VwLmh6O1xuICAgICAgICByb290LmR5ID0gdGhpcy53aWR0aCAvIChyb290LmhlaWdodCArIDEpO1xuXG4gICAgICAgIC8vIGRlZmluZSB0cmVlIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy50cmVlKClcbiAgICAgICAgICAgIC5ub2RlU2l6ZShbXG4gICAgICAgICAgICAgICAgcm9vdC5keCxcbiAgICAgICAgICAgICAgICByb290LmR5XG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnNlcGFyYXRpb24oKGEsYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnBhcmVudCA9PSBiLnBhcmVudCA/IDEgOiAyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRyZWUgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gY29tcHV0ZSBtaW4vbWF4IHgtdmFsdWVzXG4gICAgICAgIGxldCB4MCA9IEluZmluaXR5O1xuICAgICAgICBsZXQgeDEgPSAteDA7XG4gICAgICAgIHRyZWUuZWFjaChkID0+IHtcbiAgICAgICAgICAgIGlmIChkLnggPiB4MSkgeDEgPSBkLng7XG4gICAgICAgICAgICBpZiAoZC54IDwgeDApIHgwID0gZC54O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29tcHV0ZSBuZXcgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkaWZmZXJlbmNlIG9mIG1pbi9tYXggeC12YWx1ZXMgb2YgdHJlZSBub2RlcyArIHR3aWNlIHRoZSBwYWRkaW5nXG4gICAgICAgIGNvbnN0IHJvb3RVbm1hcmtlZCA9IHJvb3QuZGF0YS51bm1hcmtlZDtcbiAgICAgICAgY29uc3QgdGlja3BhZGRpbmcgPSBub2RlU2l6ZS5oKjEuODtcbiAgICAgICAgY29uc3QgYXhpc0hlaWdodCA9IHRpY2twYWRkaW5nOyAvLzMwO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICh4MSAtIHgwKSArIHRoaXMucGFkZGluZy50b3AqMiArIG5vZGVTaXplLmgrMiArIGF4aXNIZWlnaHQ7XG5cbiAgICAgICAgLy8gc2V0dXAgc3ZnIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnN2Z1xuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnRcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFwaC10cmVlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMucGFkZGluZy5sZWZ0ICsgbm9kZVNpemUudy8yICsgKHJvb3QuZGF0YS51bm1hcmtlZCA/IC1yb290LmR5IDogMCl9LCR7dGhpcy5wYWRkaW5nLnRvcCAtIHgwICsgbm9kZVNpemUuaC8yfSlgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB2ZXJ0aWNhbCBheGlzIGxpbmVzIGZvciBkZXB0aFxuXG4gICAgICAgIGNvbnN0IHJvb3RIZWlnaHRzID0gZDMucmFuZ2Uocm9vdC5oZWlnaHQgKyAocm9vdFVubWFya2VkID8gMDoxKSk7XG5cbiAgICAgICAgdGhpcy5kZXB0aFNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgICAgICAgIC5kb21haW4oIHJvb3RIZWlnaHRzIClcbiAgICAgICAgICAgIC5yYW5nZSggcm9vdEhlaWdodHMubWFwKGkgPT4gKGkrKHJvb3RVbm1hcmtlZCA/IDE6MCkpKnJvb3QuZHkpICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZXB0aEF4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmRlcHRoU2NhbGUpXG4gICAgICAgICAgICAudGlja1NpemVJbm5lcigtKHgxLXgwKSlcbiAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG4gICAgICAgICAgICAudGlja1BhZGRpbmcodGlja3BhZGRpbmcpXG4gICAgICAgICAgICAudGlja1ZhbHVlcyggdGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLm1hcChpID0+IFxuICAgICAgICAgICAgICAgICh0aGlzLmRlcHRoU2NhbGUuZG9tYWluKCkubGVuZ3RoIDwgMTUpID8gJ0RlcHRoICcraSA6IGlcbiAgICAgICAgICAgICkgKTtcblxuICAgICAgICBjb25zdCBheGlzID0gY2hhcnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdkZXB0aEF4aXMnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt4MX0pYClcbiAgICAgICAgICAgIC5jYWxsKGRlcHRoQXhpcyk7XG4gICAgICAgIGF4aXMuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCk7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIGFkZCBncm91cHMgZm9yIGxpbmtzIGFuZCBub2Rlc1xuXG4gICAgICAgIGNvbnN0IGxpbmtzID0gY2hhcnQuc2VsZWN0QWxsKCcubGluaycpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmxpbmtzKCkpIFxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbGluaycsIHRydWUpXG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKHRyZWUuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgICBpZiAocm9vdFVubWFya2VkKSB7XG4gICAgICAgICAgICBsaW5rcy5maWx0ZXIoZCA9PiBkLnNvdXJjZS5kZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIG5vZGVzLmZpbHRlcihkID0+IGQuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbGluayBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBsaW5rUGFydGl0aW9ucyA9IHJlc29sdmVMaW5rcyh0cmVlLCBsaW5rcyk7XG4gICAgICAgIGNvbnN0IFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2Rlcyh0cmVlLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBjdXJ2ZWQgbGluZSBnZW5lcmF0b3JcbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKS5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICAgICAgICBsaW5rc1xuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAgICAgICAgIC54KGQgPT4gZC55KVxuICAgICAgICAgICAgICAgICAgICAueShkID0+IGQueCkpO1xuXG4gICAgICAgIG5vZGVzLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBub2RlU2l6ZS53LzIpXG4gICAgICAgIHJlUG9pbnRzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgICAgICAudGV4dChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGQucGFyZW50O1xuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZShwLmRhdGEudHlwZSAhPT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiAxMDAwKSByZXR1cm4gbnVsbDsgLy8gc2VjdXJpdHlcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKHAuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKSA/IChwLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScpIDogJyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG4gICAgICAgIG5vZGVzXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4Jywgbm9kZVNpemUudy8yICsgMilcbiAgICAgICAgXG4gICAgICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG4gICAgICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgPSAke2QuZGF0YS52YWx1ZX1gKTtcbiAgICAgICAgdW5jbGVhci5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgLyR7ZC5kYXRhLnN5bWJvbH0vYCk7XG5cbiAgICAgICAgc2V0cy5maWx0ZXIoZCA9PiBkLmNoaWxkcmVuKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbm5lcicsdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgKG5vZGVTaXplLncvMikvMik7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseUF4aXNTdHlsZXMoYXhpcyk7XG4gICAgICAgIGRlc2lnbi5hcHBseUxpbmtTdHlsZXMobGlua3MsIGxpbmtQYXJ0aXRpb25zKTtcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMudHJlZSwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgdHJlZSwgZGVzaWduXTtcbiAgICB9XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gICAgICAgICAgICAgICAgQ2lyY2xlIHBhY2tpbmcgdmlzdWFsaXphdGlvblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgcGFjayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGQzLWhpZXJhcmNoeSBmcm9tIG91ciBmb3JtLWpzb25cbiAgICAgICAgc3R5bGVzLmNsZWFyRGVmYXVsdHModGhpcy5zdmcpOyAvLyBjbGVhciBkZWZhdWx0IHN0eWxlcyBmb3Igc3ZnIGV4cG9ydFxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKVxuICAgICAgICAgICAgLnN1bShkID0+IGQuY2hpbGRyZW4gPyAwIDogMSk7XG5cbiAgICAgICAgLy8gc2V0IHVwIGRlc2lnbiB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgZGVzaWduID0gc3R5bGVzLnBhY2tbdGhpcy5zdHlsZUNsYXNzXTtcbiAgICAgICAgY29uc3QgW3JhZGl1cywgcGFkZGluZ10gPSBbZGVzaWduLnJhZGl1cywgZGVzaWduLnBhZGRpbmddO1xuICAgICAgICBjb25zdCBbZm9udFNpemUsIGZvbnRdID0gW2Rlc2lnbi5mb250LnNpemUsIGRlc2lnbi5mb250LmZhbWlseV07XG5cbiAgICAgICAgLy8gZGVmaW5lIHBhY2sgbGF5b3V0XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGQzLnBhY2soKVxuICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgIGxldCBwYWQgPSBwYWRkaW5nO1xuICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAnZm9ybScgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgcGFkID0gcGFkICogMC40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGQuZGF0YS51bm1hcmtlZCAmJiBkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgcGFkID0gMDtcbiAgICAgICAgICAgIHJldHVybiBwYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5yYWRpdXMoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcmFkID0gcmFkaXVzO1xuICAgICAgICAgICAgaWYodHlwZW9mKGQuZGF0YS5zeW1ib2wpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJhZCA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRTaXplLCBmb250KS53aWR0aCAvMjtcbiAgICAgICAgICAgICAgICBpZihkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKSByYWQgKz0gcGFkZGluZyoyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkLmRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEudmFsdWUrJycsIGZvbnRTaXplLCBmb250KS53aWR0aCAvMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLmNoaWxkcmVuIHx8IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JyB8fMKgZC5kYXRhLnR5cGUgPT09ICdzcGFjZScpIHJhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcmFkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFjayA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnQuYXR0cignY2xhc3MnLCAnZ3JhcGgtcGFjaycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3BhY2suciArIHRoaXMucGFkZGluZy5sZWZ0fSwke3BhY2suciArIHRoaXMucGFkZGluZy50b3B9KWApO1xuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YShwYWNrLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2RlcyhwYWNrLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBkZWZpbmUgZGV0YWlsbGVkIHN0cnVjdHVyZS9sb2dpY1xuXG4gICAgICAgIHNldHMuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBkID0+IGQucik7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG5cbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gXG4gICAgICAgICAgICBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHstKGQuciAtIHBhZGRpbmcpfSxcbiAgICAgICAgICAgICR7LSh0ZXh0U2l6ZSgneCcsZm9udFNpemUsIGZvbnQpLmhlaWdodCArIHBhZGRpbmcqMikvMn0pYClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gZC5yKjIgLSBwYWRkaW5nKjIpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiAodGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIHJlUG9pbnRzXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxLjUpO1xuXG4gICAgICAgIHJlRW50cmllcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIC5jYWxsKGNpcmNsZUxhYmVsKCBkID0+IGQuZGF0YS5yZUV2ZW4gPyAnMnxyfCcgOiAnMnxyfCsxJywgZGVzaWduLmZvbnRDb250ZXh0LnNpemUsIGRlc2lnbi5mb250Q29udGV4dC5mYW1pbHkgKSk7XG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMucGFjaywgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgcGFjaywgZGVzaWduXTtcbiAgICB9XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQm94bW9kZWwgdmlzdWFsaXphdGlvbiAoU3BlbmNlci1Ccm93biBob29rIG5vdGF0aW9uKVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgZ3NiaG9va3MoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLnNwYWNlID8gMCA6IDEpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdiYXNpYyc7XG4gICAgICAgIGNvbnN0IGNvbXBhY3RSZUVudHJ5ID0gKHRoaXMuY29tcGFjdENoZWNrZWQgIT09IG51bGwpID8gdGhpcy5jb21wYWN0Q2hlY2tlZCA6IHRydWU7XG5cbiAgICAgICAgLy8gc2V0IHVwIGRlc2lnbiB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgZGVzaWduID0gc3R5bGVzLmJveG1vZGVsW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IHtlbGVtTWFyZ2luLCBmb3JtTWFyZ2luLCBmb3JtUGFkZGluZywgbWluRm9ybVNpemUsIG1heExpbmVXaWR0aCwgZm9udFZhciwgZm9udENvbnN0LCBmb250Q29udGV4dCwgbGFiZWxzfSA9IHsuLi5kZXNpZ259O1xuICAgICAgICBjb25zdCB1bmNsZWFyUGFkID0ge2h6OiBlbGVtTWFyZ2luLmh6LzIsIHZ0OiBlbGVtTWFyZ2luLnZ0fTtcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsUGFkID0gNDtcblxuICAgICAgICAvLyBkZWZpbmUgYm94bW9kZWwgbGF5b3V0XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGJveG1vZGVsRDMoKVxuICAgICAgICAgICAgLnZBbGlnbignYm90dG9tJylcbiAgICAgICAgICAgIC5lZGdlTWFyZ2lucyhkID0+ICEoaXNDb250YWluZXIoZCkgJiYgIWQucGFyZW50LnBhcmVudCAmJiBkLnBhcmVudC5kYXRhLnVubWFya2VkKSApXG4gICAgICAgICAgICAuaXNDb250YWluZXIoZCA9PiBpc0NvbnRhaW5lcihkKSlcbiAgICAgICAgICAgIC5wYWRkaW5nKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0ge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyKGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHAubGVmdCA9IHAucmlnaHQgPSBmb3JtUGFkZGluZy5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dFN6ID0gdGV4dFNpemUodGV4dCwgZm9udENvbnRleHQuc2l6ZSwgZm9udENvbnRleHQuZmFtaWx5LCBmb250Q29udGV4dC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmJvdHRvbSA9IHR4dFN6LmhlaWdodCArIGVsZW1NYXJnaW4udnQvMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcmdpbihkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBtLnRvcCA9IGZvcm1NYXJnaW4udG9wO1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGVwdGggPT09IDApIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSBtLnJpZ2h0ID0gbWluRm9ybVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQuZGF0YS5sYXN0T3BlbikgbS50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQucGFyZW50LmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JyAmJiByZVBhcmVudExhc3RPcGVuKGQpKSkgbS50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlICE9PSAncmVFbnRyeVBvaW50JykgeyAvLyBhbGwgb3RoZXIgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBtLmJvdHRvbSA9IGVsZW1NYXJnaW4udnQ7XG4gICAgICAgICAgICAgICAgICAgIG0ubGVmdCA9IG0ucmlnaHQgPSBlbGVtTWFyZ2luLmh6O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9udFZhci5zdHlsZSA9PSAnaXRhbGljJykgbS5yaWdodCArPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtLmJvdHRvbSA9IChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyAtNiA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG0ucmlnaHQgPSBmb3JtTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNwYW5IZWlnaHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFjdFJlRW50cnkgJiYgZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWluQ29udGFpbmVyU2l6ZShkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGxldCBoID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJlbnRMYXN0T3BlbihkKSkgdyA9IG1pbkZvcm1TaXplLndpZHRoLzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgZC5jaGlsZHJlbi5sZW5ndGggPD0gMiAmJiBkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGQuZGF0YS5yZUV2ZW4gPyBsYWJlbHMucmVFdmVuIDogbGFiZWxzLnJlT2RkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0U3ogPSB0ZXh0U2l6ZSh0ZXh0LCBmb250Q29udGV4dC5zaXplLCBmb250Q29udGV4dC5mYW1pbHksIGZvbnRDb250ZXh0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoICsgZGF0YUxhYmVsUGFkKjI7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB3IDwgbWluRm9ybVNpemUud2lkdGggPyBtaW5Gb3JtU2l6ZS53aWR0aCA6IHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6IHcsIGhlaWdodDogaH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXhMaW5lV2lkdGgoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtYXhMaW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5ub2RlU2l6ZShkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IDAsIGggPSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1RleHQoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dFN6ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Zhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksIGZvbnRWYXIuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmNsZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgJ25vcm1hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdyArPSBza2V3RGlmZigoaCArIHVuY2xlYXJQYWQudnQqMikpKjIgKyB1bmNsZWFyUGFkLmh6KjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoICs9IHVuY2xlYXJQYWQudnQqMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS52YWx1ZSwgZm9udENvbnN0LnNpemUsIGZvbnRDb25zdC5mYW1pbHksIGZvbnRDb25zdC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogdywgaGVpZ2h0OiBofTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBib3htb2RlbCA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnQuYXR0cignY2xhc3MnLCAnZ3JhcGgtYm94bW9kZWwnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdH0sJHt0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuLy8gY2hhcnQuYXR0cignd2lkdGgnLCcxMDAlJykuYXR0cignaGVpZ2h0JywnMTAwJScpLnN0eWxlKCdmaWxsJywncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YShib3htb2RlbC5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueDB9LCR7ZC55MH0pYCk7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2Rlcyhib3htb2RlbCwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBmb3Jtcy5hcHBlbmQoJ3BvbHlsaW5lJykgLy8uZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZCkuYXBwZW5kKCdwb2x5bGluZScpXG4gICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiBgMCwwICR7ZC54MS1kLngwfSwwICR7ZC54MS1kLngwfSwke2QueTEtZC55MH1gKTtcbiAgICAgICAgcmVFbnRyaWVzLmFwcGVuZCgncG9seWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBkLngxLWQueDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IGQueTEtZC55MDtcbiAgICAgICAgICAgICAgICBjb25zdCByZUggPSBtaW5Gb3JtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAwLDAgJHt3fSwwICR7d30sJHtofSAwLCR7aH0gMCwke2gtcmVIfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBkLngxLWQueDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBkLnkxLWQueTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlSCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3d9LCR7aC1yZUh9ICR7d30sJHtofSAwLCR7aH0gMCwke2gtcmVIfWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIHJlRW50cmllcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKDAsJHtkLnkxLWQueTB9KWApXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiBkYXRhTGFiZWxQYWQgKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gLTUgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZCk7XG5cbiAgICAgICAgY29uc3QgdW5jbFR4dFNpemUgPSBkID0+IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgY29uc3QgdW5jbERpZmYgPSBkID0+IHNrZXdEaWZmKCAodW5jbFR4dFNpemUoZCkuaGVpZ2h0KjAuNyArIHVuY2xlYXJQYWQudnQqMikgKTtcblxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgndW5jbGVhck1hcmsnLHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHt1bmNsRGlmZihkKX0sJHswfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiAoKGQueDEtZC54MCkgLSB1bmNsRGlmZihkKSApKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiB1bmNsRGlmZihkKSArIHVuY2xlYXJQYWQuaHogKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgLXVuY2xlYXJQYWQudnQgIC0gKChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyA2IDogMCkgKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcbiAgICAgICAgICBcbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy5ib3htb2RlbCwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgYm94bW9kZWwsIGRlc2lnbl07XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmNlKGRhdGEpIHtcblxuICAgIH1cblxufVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZXNvbHZlTm9kZXMocm9vdCwgbm9kZXMpIHtcbiAgLy8gcmVzb2x2ZXMgZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgbGVhdmVzID0gbm9kZXMuZmlsdGVyKGQgPT4gcm9vdC5sZWF2ZXMoKS5maWx0ZXIobCA9PiBsID09PSBkKS5wb3AoKSApXG4gICAgICAuY2xhc3NlZCgnbGVhZicsIHRydWUpO1xuXG4gIGNvbnN0IHNldHMgPSBub2Rlcy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKVxuICBjb25zdCBmb3JtcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSk7XG4gIGNvbnN0IHJlRW50cmllcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5JywgdHJ1ZSk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIoZCA9PiAhKGQuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpKVxuICAgICAgLmNsYXNzZWQoJ2VsZW1lbnQnLCB0cnVlKTtcbiAgY29uc3QgdmFycyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAndmFyJylcbiAgICAgIC5jbGFzc2VkKCd2YXInLCB0cnVlKTtcbiAgbGV0IGNvbnN0cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnY29uc3QnKVxuICAgICAgLmNsYXNzZWQoJ2NvbnN0JywgdHJ1ZSk7XG4gIGNvbnN0cy51bm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAwKS5jbGFzc2VkKCd1bm1hcmtlZCcsIHRydWUpO1xuICBjb25zdHMubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDEpLmNsYXNzZWQoJ21hcmtlZCcsIHRydWUpO1xuICBjb25zdHMuaW5kZWYgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMikuY2xhc3NlZCgnaW5kZWYnLCB0cnVlKTtcbiAgY29uc3RzLmltYWcgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMykuY2xhc3NlZCgnaW1hZycsIHRydWUpO1xuXG4gIGNvbnN0IHVuY2xlYXIgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKVxuICAgICAgLmNsYXNzZWQoJ3VuY2xlYXInLCB0cnVlKTtcblxuICBjb25zdCByZUNoaWxkcyA9IGZvcm1zLmZpbHRlcihkID0+IGQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGQnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5UG9pbnQnLCB0cnVlKTtcblxuICByZXR1cm4gW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxpbmtzKHJvb3QsIGxpbmtzKSB7XG4gIC8vIHJlc29sdmVzIGxpbmtzIGJldHdlZW4gZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgcmVDaGlsZExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnJlQ2hpbGQpXG4gICAgICAuY2xhc3NlZCgncmVDaGlsZExpbmsnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50TGluayA9IGxpbmtzLmZpbHRlcihkID0+IGQudGFyZ2V0LmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVQb2ludExpbmsnLCB0cnVlKTtcblxuICByZXR1cm4gW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua107XG59XG5cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7IHJldHVybiBub2RlLmRhdGEudHlwZSA9PT0gJ3ZhcicgfHzCoG5vZGUuZGF0YS50eXBlID09PSAnY29uc3QnIHx8IG5vZGUuZGF0YS50eXBlID09PSAndW5jbGVhcic7IH1cblxuZnVuY3Rpb24gaXNDb250YWluZXIobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgbm9kZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JzsgfVxuXG5mdW5jdGlvbiByZVBhcmVudExhc3RPcGVuKG5vZGUpIHtcbmxldCByZVBhcmVudCA9IG5vZGUuYW5jZXN0b3JzKCkuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5Jykuc2hpZnQoKTtcbnJldHVybiByZVBhcmVudC5kYXRhLmxhc3RPcGVuO1xufVxuXG5mdW5jdGlvbiBza2V3RGlmZihoZWlnaHQsZGVncmVlcz0zMCkgeyByZXR1cm4gTWF0aC50YW4oKGRlZ3JlZXMqKE1hdGguUEkvMTgwKSkpICogaGVpZ2h0OyB9OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyJdLCJzb3VyY2VSb290IjoiIn0=