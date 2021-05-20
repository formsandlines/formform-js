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

                const reParts = content.split(optChar);
                const reNested = reParts[reParts.length-1].split(nestChar);

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
			if (!hideOrderLabel) {
				const pos = `y="0"`;

				label += orderLabel(varorder, pos, {font: font, textSize: textSize.base});
			}
			if (!hideInputLabel) {
				const isFormDNA = input.includes('::');

				const prefix = isFormDNA ? '' : `ƒ = `;
				const truncMax = isFormDNA ? (input.split('::')[0].length + 4**4) : inputLabelMax;
				const truncSuffix = isFormDNA ? `…(${4**vnum})` : `… <tspan style="font-style: italic">+more</tspan>`;

				const pos = `y="0" dy="${textSize.base + textSize.sm - 2}px"`;

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
							figCaption.size.h + (figCaption.pos.y - vmap.h)];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9ib3htb2RlbC1sYXlvdXQtZm9yLWQzL2Rpc3QvYm94bW9kZWwtZDMubWluLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL2NhbnZnL2Rpc3QvYnJvd3Nlci9jYW52Zy5taW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmdiY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvc3RhY2tibHVyLWNhbnZhcy9zcmMvc3RhY2tibHVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vYmlnaW50LWhlbHBlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb21tb24vZDMtaGVscGVyLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZ3JhcGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZG5hLXN2Zy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvbW9kdWxlcy9ncmFwaC1kMy1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21vZHVsZXMvZ3JhcGgtZDMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vZXh0ZXJuYWwgXCJkM1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVM7QUFDNUI7QUFDQSwyQkFBMkIsU0FBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxRQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsY0FBYztBQUN2QztBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELGNBQWMsRUFBRTtBQUNqRTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLHFCQUFxQixJQUFJO0FBQ3ZFO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGlCQUFpQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixLQUFLLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsUUFBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwrR0FBK0csd0JBQXdCOztBQUV2STtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVU7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OztBQ0FudTlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCLElBQUksU0FBUyxJQUFJLFNBQVMsSUFBSTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0JBQStCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsdUJBQXVCO0FBQzlDO0FBQ0EsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLHFCQUFxQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG1EQUFtRDtBQUNuRCxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3U0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGVBQWUsWUFBWTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFlBQVk7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0Esd0NBQXdDLHlFQUFlO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHlFQUFlOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsc0VBQVk7QUFDdkI7QUFDQTtBQUNBOztBQUVBLGlCQUFpQix5Q0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MseUVBQWU7O0FBRXZELHNFQUFzRSxzRUFBWTtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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LGlDQUFpQyxrRUFBUTtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsNERBQTRELFlBQVksR0FBRyxFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7OztBQUcvQjtBQUNBOztBQUVBLFFBQVEsa0VBQVE7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QiwrRkFBK0Y7O0FBRXRILDRCQUE0QixrRUFBa0U7O0FBRTlGO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNDQUFzQyxtREFBbUQsRzs7Ozs7Ozs7Ozs7QUNoakJ6RixnRCIsImZpbGUiOiJmb3JtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImQzXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImQzXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZDNcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeShyb290W1wiZDNcIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2QzX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9saWIvbWFpbi5qc1wiKTtcbiIsInZhciBiaWdJbnQgPSAoZnVuY3Rpb24gKHVuZGVmaW5lZCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgdmFyIEJBU0UgPSAxZTcsXHJcbiAgICAgICAgTE9HX0JBU0UgPSA3LFxyXG4gICAgICAgIE1BWF9JTlQgPSA5MDA3MTk5MjU0NzQwOTkyLFxyXG4gICAgICAgIE1BWF9JTlRfQVJSID0gc21hbGxUb0FycmF5KE1BWF9JTlQpLFxyXG4gICAgICAgIERFRkFVTFRfQUxQSEFCRVQgPSBcIjAxMjM0NTY3ODlhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiO1xyXG5cclxuICAgIHZhciBzdXBwb3J0c05hdGl2ZUJpZ0ludCA9IHR5cGVvZiBCaWdJbnQgPT09IFwiZnVuY3Rpb25cIjtcclxuXHJcbiAgICBmdW5jdGlvbiBJbnRlZ2VyKHYsIHJhZGl4LCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKHR5cGVvZiByYWRpeCAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuICtyYWRpeCA9PT0gMTAgJiYgIWFscGhhYmV0ID8gcGFyc2VWYWx1ZSh2KSA6IHBhcnNlQmFzZSh2LCByYWRpeCwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpO1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIEJpZ0ludGVnZXIodmFsdWUsIHNpZ24pIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gc2lnbjtcclxuICAgICAgICB0aGlzLmlzU21hbGwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gU21hbGxJbnRlZ2VyKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHZhbHVlIDwgMDtcclxuICAgICAgICB0aGlzLmlzU21hbGwgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIE5hdGl2ZUJpZ0ludCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc1ByZWNpc2Uobikge1xyXG4gICAgICAgIHJldHVybiAtTUFYX0lOVCA8IG4gJiYgbiA8IE1BWF9JTlQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc21hbGxUb0FycmF5KG4pIHsgLy8gRm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgZG9lc24ndCByZWZlcmVuY2UgQkFTRSwgbmVlZCB0byBjaGFuZ2UgdGhpcyBmdW5jdGlvbiBpZiBCQVNFIGNoYW5nZXNcclxuICAgICAgICBpZiAobiA8IDFlNylcclxuICAgICAgICAgICAgcmV0dXJuIFtuXTtcclxuICAgICAgICBpZiAobiA8IDFlMTQpXHJcbiAgICAgICAgICAgIHJldHVybiBbbiAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWU3KV07XHJcbiAgICAgICAgcmV0dXJuIFtuICUgMWU3LCBNYXRoLmZsb29yKG4gLyAxZTcpICUgMWU3LCBNYXRoLmZsb29yKG4gLyAxZTE0KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXJyYXlUb1NtYWxsKGFycikgeyAvLyBJZiBCQVNFIGNoYW5nZXMgdGhpcyBmdW5jdGlvbiBtYXkgbmVlZCB0byBjaGFuZ2VcclxuICAgICAgICB0cmltKGFycik7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IGFyci5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxlbmd0aCA8IDQgJiYgY29tcGFyZUFicyhhcnIsIE1BWF9JTlRfQVJSKSA8IDApIHtcclxuICAgICAgICAgICAgc3dpdGNoIChsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6IHJldHVybiBhcnJbMF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBhcnJbMF0gKyBhcnJbMV0gKiBCQVNFO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIGFyclswXSArIChhcnJbMV0gKyBhcnJbMl0gKiBCQVNFKSAqIEJBU0U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmltKHYpIHtcclxuICAgICAgICB2YXIgaSA9IHYubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh2Wy0taV0gPT09IDApO1xyXG4gICAgICAgIHYubGVuZ3RoID0gaSArIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQXJyYXkobGVuZ3RoKSB7IC8vIGZ1bmN0aW9uIHNoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIFlhZmZsZSdzIGxpYnJhcnkgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9CaWdJbnRlZ2VyXHJcbiAgICAgICAgdmFyIHggPSBuZXcgQXJyYXkobGVuZ3RoKTtcclxuICAgICAgICB2YXIgaSA9IC0xO1xyXG4gICAgICAgIHdoaWxlICgrK2kgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgeFtpXSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRydW5jYXRlKG4pIHtcclxuICAgICAgICBpZiAobiA+IDApIHJldHVybiBNYXRoLmZsb29yKG4pO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwobik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkKGEsIGIpIHsgLy8gYXNzdW1lcyBhIGFuZCBiIGFyZSBhcnJheXMgd2l0aCBhLmxlbmd0aCA+PSBiLmxlbmd0aFxyXG4gICAgICAgIHZhciBsX2EgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgbF9iID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobF9hKSxcclxuICAgICAgICAgICAgY2FycnkgPSAwLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgc3VtLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsX2I7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldICsgYltpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IHN1bSA+PSBiYXNlID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHJbaV0gPSBzdW0gLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChpIDwgbF9hKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBzdW0gPT09IGJhc2UgPyAxIDogMDtcclxuICAgICAgICAgICAgcltpKytdID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2FycnkgPiAwKSByLnB1c2goY2FycnkpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEFueShhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoID49IGIubGVuZ3RoKSByZXR1cm4gYWRkKGEsIGIpO1xyXG4gICAgICAgIHJldHVybiBhZGQoYiwgYSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkU21hbGwoYSwgY2FycnkpIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBjYXJyeSBpcyBudW1iZXIgd2l0aCAwIDw9IGNhcnJ5IDwgTUFYX0lOVFxyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBzdW0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldIC0gYmFzZSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3Ioc3VtIC8gYmFzZSk7XHJcbiAgICAgICAgICAgIHJbaV0gPSBzdW0gLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjYXJyeSA+IDApIHtcclxuICAgICAgICAgICAgcltpKytdID0gY2FycnkgJSBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IoY2FycnkgLyBiYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbiAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKGEsIE1hdGguYWJzKGIpKSwgdGhpcy5zaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZEFueShhLCBiKSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wbHVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuYWRkO1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN1YnRyYWN0KG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmVjaXNlKGEgKyBiKSkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYSArIGIpO1xyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KE1hdGguYWJzKGIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKGIsIE1hdGguYWJzKGEpKSwgYSA8IDApO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucGx1cyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWRkO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICsgcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnBsdXMgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYSA+PSBiXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShhX2wpLFxyXG4gICAgICAgICAgICBib3Jyb3cgPSAwLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYl9sOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gLSBib3Jyb3cgLSBiW2ldO1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgICAgIGJvcnJvdyA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gYl9sOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gLSBib3Jyb3c7XHJcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkgZGlmZmVyZW5jZSArPSBiYXNlO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJbaSsrXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICg7IGkgPCBhX2w7IGkrKykge1xyXG4gICAgICAgICAgICByW2ldID0gYVtpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdEFueShhLCBiLCBzaWduKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlO1xyXG4gICAgICAgIGlmIChjb21wYXJlQWJzKGEsIGIpID49IDApIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChhLCBiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHN1YnRyYWN0KGIsIGEpO1xyXG4gICAgICAgICAgICBzaWduID0gIXNpZ247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gYXJyYXlUb1NtYWxsKHZhbHVlKTtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWduKSB2YWx1ZSA9IC12YWx1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodmFsdWUsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0U21hbGwoYSwgYiwgc2lnbikgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGIgaXMgbnVtYmVyIHdpdGggMCA8PSBiIDwgTUFYX0lOVFxyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobCksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gLWIsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBkaWZmZXJlbmNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSA9IGFbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBiYXNlKTtcclxuICAgICAgICAgICAgZGlmZmVyZW5jZSAlPSBiYXNlO1xyXG4gICAgICAgICAgICByW2ldID0gZGlmZmVyZW5jZSA8IDAgPyBkaWZmZXJlbmNlICsgYmFzZSA6IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHIgPSBhcnJheVRvU21hbGwocik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiByID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzaWduKSByID0gLXI7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHIpO1xyXG4gICAgICAgIH0gcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHIsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbiAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChhLCBNYXRoLmFicyhiKSwgdGhpcy5zaWduKTtcclxuICAgICAgICByZXR1cm4gc3VidHJhY3RBbnkoYSwgYiwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5taW51cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhIC0gYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKGIsIE1hdGguYWJzKGEpLCBhID49IDApO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLSBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubWludXMgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnN1YnRyYWN0O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgIXRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnNpZ247XHJcbiAgICAgICAgdmFyIHNtYWxsID0gbmV3IFNtYWxsSW50ZWdlcigtdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgc21hbGwuc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIHJldHVybiBzbWFsbDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCgtdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih0aGlzLnZhbHVlLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoTWF0aC5hYnModGhpcy52YWx1ZSkpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgPj0gMCA/IHRoaXMudmFsdWUgOiAtdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5TG9uZyhhLCBiKSB7XHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgbCA9IGFfbCArIGJfbCxcclxuICAgICAgICAgICAgciA9IGNyZWF0ZUFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcHJvZHVjdCwgY2FycnksIGksIGFfaSwgYl9qO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhX2w7ICsraSkge1xyXG4gICAgICAgICAgICBhX2kgPSBhW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJfbDsgKytqKSB7XHJcbiAgICAgICAgICAgICAgICBiX2ogPSBiW2pdO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IGFfaSAqIGJfaiArIHJbaSArIGpdO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHByb2R1Y3QgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGpdID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGogKyAxXSArPSBjYXJyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5U21hbGwoYSwgYikgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGIgaXMgbnVtYmVyIHdpdGggfGJ8IDwgQkFTRVxyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBjYXJyeSA9IDAsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBwcm9kdWN0ID0gYVtpXSAqIGIgKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHByb2R1Y3QgLyBiYXNlKTtcclxuICAgICAgICAgICAgcltpXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChjYXJyeSA+IDApIHtcclxuICAgICAgICAgICAgcltpKytdID0gY2FycnkgJSBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IoY2FycnkgLyBiYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hpZnRMZWZ0KHgsIG4pIHtcclxuICAgICAgICB2YXIgciA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChuLS0gPiAwKSByLnB1c2goMCk7XHJcbiAgICAgICAgcmV0dXJuIHIuY29uY2F0KHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5S2FyYXRzdWJhKHgsIHkpIHtcclxuICAgICAgICB2YXIgbiA9IE1hdGgubWF4KHgubGVuZ3RoLCB5Lmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGlmIChuIDw9IDMwKSByZXR1cm4gbXVsdGlwbHlMb25nKHgsIHkpO1xyXG4gICAgICAgIG4gPSBNYXRoLmNlaWwobiAvIDIpO1xyXG5cclxuICAgICAgICB2YXIgYiA9IHguc2xpY2UobiksXHJcbiAgICAgICAgICAgIGEgPSB4LnNsaWNlKDAsIG4pLFxyXG4gICAgICAgICAgICBkID0geS5zbGljZShuKSxcclxuICAgICAgICAgICAgYyA9IHkuc2xpY2UoMCwgbik7XHJcblxyXG4gICAgICAgIHZhciBhYyA9IG11bHRpcGx5S2FyYXRzdWJhKGEsIGMpLFxyXG4gICAgICAgICAgICBiZCA9IG11bHRpcGx5S2FyYXRzdWJhKGIsIGQpLFxyXG4gICAgICAgICAgICBhYmNkID0gbXVsdGlwbHlLYXJhdHN1YmEoYWRkQW55KGEsIGIpLCBhZGRBbnkoYywgZCkpO1xyXG5cclxuICAgICAgICB2YXIgcHJvZHVjdCA9IGFkZEFueShhZGRBbnkoYWMsIHNoaWZ0TGVmdChzdWJ0cmFjdChzdWJ0cmFjdChhYmNkLCBhYyksIGJkKSwgbikpLCBzaGlmdExlZnQoYmQsIDIgKiBuKSk7XHJcbiAgICAgICAgdHJpbShwcm9kdWN0KTtcclxuICAgICAgICByZXR1cm4gcHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGUgZm9sbG93aW5nIGZ1bmN0aW9uIGlzIGRlcml2ZWQgZnJvbSBhIHN1cmZhY2UgZml0IG9mIGEgZ3JhcGggcGxvdHRpbmcgdGhlIHBlcmZvcm1hbmNlIGRpZmZlcmVuY2VcclxuICAgIC8vIGJldHdlZW4gbG9uZyBtdWx0aXBsaWNhdGlvbiBhbmQga2FyYXRzdWJhIG11bHRpcGxpY2F0aW9uIHZlcnN1cyB0aGUgbGVuZ3RocyBvZiB0aGUgdHdvIGFycmF5cy5cclxuICAgIGZ1bmN0aW9uIHVzZUthcmF0c3ViYShsMSwgbDIpIHtcclxuICAgICAgICByZXR1cm4gLTAuMDEyICogbDEgLSAwLjAxMiAqIGwyICsgMC4wMDAwMTUgKiBsMSAqIGwyID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgIHNpZ24gPSB0aGlzLnNpZ24gIT09IG4uc2lnbixcclxuICAgICAgICAgICAgYWJzO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAtMSkgcmV0dXJuIHRoaXMubmVnYXRlKCk7XHJcbiAgICAgICAgICAgIGFicyA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICBpZiAoYWJzIDwgQkFTRSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5U21hbGwoYSwgYWJzKSwgc2lnbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShhYnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodXNlS2FyYXRzdWJhKGEubGVuZ3RoLCBiLmxlbmd0aCkpIC8vIEthcmF0c3ViYSBpcyBvbmx5IGZhc3RlciBmb3IgY2VydGFpbiBhcnJheSBzaXplc1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlLYXJhdHN1YmEoYSwgYiksIHNpZ24pO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseUxvbmcoYSwgYiksIHNpZ24pO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50aW1lcyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIGZ1bmN0aW9uIG11bHRpcGx5U21hbGxBbmRBcnJheShhLCBiLCBzaWduKSB7IC8vIGEgPj0gMFxyXG4gICAgICAgIGlmIChhIDwgQkFTRSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlTbWFsbChiLCBhKSwgc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseUxvbmcoYiwgc21hbGxUb0FycmF5KGEpKSwgc2lnbik7XHJcbiAgICB9XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLl9tdWx0aXBseUJ5U21hbGwgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UoYS52YWx1ZSAqIHRoaXMudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEudmFsdWUgKiB0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG11bHRpcGx5U21hbGxBbmRBcnJheShNYXRoLmFicyhhLnZhbHVlKSwgc21hbGxUb0FycmF5KE1hdGguYWJzKHRoaXMudmFsdWUpKSwgdGhpcy5zaWduICE9PSBhLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLl9tdWx0aXBseUJ5U21hbGwgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gMSkgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IC0xKSByZXR1cm4gdGhpcy5uZWdhdGUoKTtcclxuICAgICAgICByZXR1cm4gbXVsdGlwbHlTbWFsbEFuZEFycmF5KE1hdGguYWJzKGEudmFsdWUpLCB0aGlzLnZhbHVlLCB0aGlzLnNpZ24gIT09IGEuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWUodikuX211bHRpcGx5QnlTbWFsbCh0aGlzKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRpbWVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICogcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRpbWVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBmdW5jdGlvbiBzcXVhcmUoYSkge1xyXG4gICAgICAgIC8vY29uc29sZS5hc3NlcnQoMiAqIEJBU0UgKiBCQVNFIDwgTUFYX0lOVCk7XHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IGNyZWF0ZUFycmF5KGwgKyBsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGFfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFfaSA9IGFbaV07XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCAtIGFfaSAqIGFfaTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IGk7IGogPCBsOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGFfaiA9IGFbal07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gMiAqIChhX2kgKiBhX2opICsgcltpICsgal0gKyBjYXJyeTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcltpICsgbF0gPSBjYXJyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHNxdWFyZSh0aGlzLnZhbHVlKSwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlICogdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKHZhbHVlKSkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzcXVhcmUoc21hbGxUb0FycmF5KE1hdGguYWJzKHRoaXMudmFsdWUpKSksIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKiB0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2QxKGEsIGIpIHsgLy8gTGVmdCBvdmVyIGZyb20gcHJldmlvdXMgdmVyc2lvbi4gUGVyZm9ybXMgZmFzdGVyIHRoYW4gZGl2TW9kMiBvbiBzbWFsbGVyIGlucHV0IHNpemVzLlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICByZXN1bHQgPSBjcmVhdGVBcnJheShiLmxlbmd0aCksXHJcbiAgICAgICAgICAgIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCA9IGJbYl9sIC0gMV0sXHJcbiAgICAgICAgICAgIC8vIG5vcm1hbGl6YXRpb25cclxuICAgICAgICAgICAgbGFtYmRhID0gTWF0aC5jZWlsKGJhc2UgLyAoMiAqIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCkpLFxyXG4gICAgICAgICAgICByZW1haW5kZXIgPSBtdWx0aXBseVNtYWxsKGEsIGxhbWJkYSksXHJcbiAgICAgICAgICAgIGRpdmlzb3IgPSBtdWx0aXBseVNtYWxsKGIsIGxhbWJkYSksXHJcbiAgICAgICAgICAgIHF1b3RpZW50RGlnaXQsIHNoaWZ0LCBjYXJyeSwgYm9ycm93LCBpLCBsLCBxO1xyXG4gICAgICAgIGlmIChyZW1haW5kZXIubGVuZ3RoIDw9IGFfbCkgcmVtYWluZGVyLnB1c2goMCk7XHJcbiAgICAgICAgZGl2aXNvci5wdXNoKDApO1xyXG4gICAgICAgIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCA9IGRpdmlzb3JbYl9sIC0gMV07XHJcbiAgICAgICAgZm9yIChzaGlmdCA9IGFfbCAtIGJfbDsgc2hpZnQgPj0gMDsgc2hpZnQtLSkge1xyXG4gICAgICAgICAgICBxdW90aWVudERpZ2l0ID0gYmFzZSAtIDE7XHJcbiAgICAgICAgICAgIGlmIChyZW1haW5kZXJbc2hpZnQgKyBiX2xdICE9PSBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpIHtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgPSBNYXRoLmZsb29yKChyZW1haW5kZXJbc2hpZnQgKyBiX2xdICogYmFzZSArIHJlbWFpbmRlcltzaGlmdCArIGJfbCAtIDFdKSAvIGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcXVvdGllbnREaWdpdCA8PSBiYXNlIC0gMVxyXG4gICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgIGwgPSBkaXZpc29yLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY2FycnkgKz0gcXVvdGllbnREaWdpdCAqIGRpdmlzb3JbaV07XHJcbiAgICAgICAgICAgICAgICBxID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgYm9ycm93ICs9IHJlbWFpbmRlcltzaGlmdCArIGldIC0gKGNhcnJ5IC0gcSAqIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBxO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvcnJvdyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGJvcnJvdyArIGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ID0gLTE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gYm9ycm93O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2hpbGUgKGJvcnJvdyAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnREaWdpdCAtPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcnJ5ICs9IHJlbWFpbmRlcltzaGlmdCArIGldIC0gYmFzZSArIGRpdmlzb3JbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcnJ5IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGNhcnJ5ICsgYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gY2Fycnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0W3NoaWZ0XSA9IHF1b3RpZW50RGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRlbm9ybWFsaXphdGlvblxyXG4gICAgICAgIHJlbWFpbmRlciA9IGRpdk1vZFNtYWxsKHJlbWFpbmRlciwgbGFtYmRhKVswXTtcclxuICAgICAgICByZXR1cm4gW2FycmF5VG9TbWFsbChyZXN1bHQpLCBhcnJheVRvU21hbGwocmVtYWluZGVyKV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kMihhLCBiKSB7IC8vIEltcGxlbWVudGF0aW9uIGlkZWEgc2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gU2lsZW50IE1hdHQncyBsaWJyYXJ5IGh0dHA6Ly9zaWxlbnRtYXR0LmNvbS9iaWdpbnRlZ2VyL1xyXG4gICAgICAgIC8vIFBlcmZvcm1zIGZhc3RlciB0aGFuIGRpdk1vZDEgb24gbGFyZ2VyIGlucHV0IHNpemVzLlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtdLFxyXG4gICAgICAgICAgICBwYXJ0ID0gW10sXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBndWVzcywgeGxlbiwgaGlnaHgsIGhpZ2h5LCBjaGVjaztcclxuICAgICAgICB3aGlsZSAoYV9sKSB7XHJcbiAgICAgICAgICAgIHBhcnQudW5zaGlmdChhWy0tYV9sXSk7XHJcbiAgICAgICAgICAgIHRyaW0ocGFydCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlQWJzKHBhcnQsIGIpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB4bGVuID0gcGFydC5sZW5ndGg7XHJcbiAgICAgICAgICAgIGhpZ2h4ID0gcGFydFt4bGVuIC0gMV0gKiBiYXNlICsgcGFydFt4bGVuIC0gMl07XHJcbiAgICAgICAgICAgIGhpZ2h5ID0gYltiX2wgLSAxXSAqIGJhc2UgKyBiW2JfbCAtIDJdO1xyXG4gICAgICAgICAgICBpZiAoeGxlbiA+IGJfbCkge1xyXG4gICAgICAgICAgICAgICAgaGlnaHggPSAoaGlnaHggKyAxKSAqIGJhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ3Vlc3MgPSBNYXRoLmNlaWwoaGlnaHggLyBoaWdoeSk7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrID0gbXVsdGlwbHlTbWFsbChiLCBndWVzcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFyZUFicyhjaGVjaywgcGFydCkgPD0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBndWVzcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChndWVzcyk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGd1ZXNzKTtcclxuICAgICAgICAgICAgcGFydCA9IHN1YnRyYWN0KHBhcnQsIGNoZWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0LnJldmVyc2UoKTtcclxuICAgICAgICByZXR1cm4gW2FycmF5VG9TbWFsbChyZXN1bHQpLCBhcnJheVRvU21hbGwocGFydCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZFNtYWxsKHZhbHVlLCBsYW1iZGEpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoLFxyXG4gICAgICAgICAgICBxdW90aWVudCA9IGNyZWF0ZUFycmF5KGxlbmd0aCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBxLCByZW1haW5kZXIsIGRpdmlzb3I7XHJcbiAgICAgICAgcmVtYWluZGVyID0gMDtcclxuICAgICAgICBmb3IgKGkgPSBsZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xyXG4gICAgICAgICAgICBkaXZpc29yID0gcmVtYWluZGVyICogYmFzZSArIHZhbHVlW2ldO1xyXG4gICAgICAgICAgICBxID0gdHJ1bmNhdGUoZGl2aXNvciAvIGxhbWJkYSk7XHJcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IGRpdmlzb3IgLSBxICogbGFtYmRhO1xyXG4gICAgICAgICAgICBxdW90aWVudFtpXSA9IHEgfCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW3F1b3RpZW50LCByZW1haW5kZXIgfCAwXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2RBbnkoc2VsZiwgdikge1xyXG4gICAgICAgIHZhciB2YWx1ZSwgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzTmF0aXZlQmlnSW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbmV3IE5hdGl2ZUJpZ0ludChzZWxmLnZhbHVlIC8gbi52YWx1ZSksIG5ldyBOYXRpdmVCaWdJbnQoc2VsZi52YWx1ZSAlIG4udmFsdWUpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSBzZWxmLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICB2YXIgcXVvdGllbnQ7XHJcbiAgICAgICAgaWYgKGIgPT09IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBkaXZpZGUgYnkgemVyb1wiKTtcclxuICAgICAgICBpZiAoc2VsZi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNtYWxsSW50ZWdlcih0cnVuY2F0ZShhIC8gYikpLCBuZXcgU21hbGxJbnRlZ2VyKGEgJSBiKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFtJbnRlZ2VyWzBdLCBzZWxmXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMSkgcmV0dXJuIFtzZWxmLCBJbnRlZ2VyWzBdXTtcclxuICAgICAgICAgICAgaWYgKGIgPT0gLTEpIHJldHVybiBbc2VsZi5uZWdhdGUoKSwgSW50ZWdlclswXV07XHJcbiAgICAgICAgICAgIHZhciBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gZGl2TW9kU21hbGwoYSwgYWJzKTtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50ID0gYXJyYXlUb1NtYWxsKHZhbHVlWzBdKTtcclxuICAgICAgICAgICAgICAgIHZhciByZW1haW5kZXIgPSB2YWx1ZVsxXTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLnNpZ24pIHJlbWFpbmRlciA9IC1yZW1haW5kZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHF1b3RpZW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuc2lnbiAhPT0gbi5zaWduKSBxdW90aWVudCA9IC1xdW90aWVudDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTbWFsbEludGVnZXIocXVvdGllbnQpLCBuZXcgU21hbGxJbnRlZ2VyKHJlbWFpbmRlcildO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgQmlnSW50ZWdlcihxdW90aWVudCwgc2VsZi5zaWduICE9PSBuLnNpZ24pLCBuZXcgU21hbGxJbnRlZ2VyKHJlbWFpbmRlcildO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uID09PSAtMSkgcmV0dXJuIFtJbnRlZ2VyWzBdLCBzZWxmXTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gMCkgcmV0dXJuIFtJbnRlZ2VyW3NlbGYuc2lnbiA9PT0gbi5zaWduID8gMSA6IC0xXSwgSW50ZWdlclswXV07XHJcblxyXG4gICAgICAgIC8vIGRpdk1vZDEgaXMgZmFzdGVyIG9uIHNtYWxsZXIgaW5wdXQgc2l6ZXNcclxuICAgICAgICBpZiAoYS5sZW5ndGggKyBiLmxlbmd0aCA8PSAyMDApXHJcbiAgICAgICAgICAgIHZhbHVlID0gZGl2TW9kMShhLCBiKTtcclxuICAgICAgICBlbHNlIHZhbHVlID0gZGl2TW9kMihhLCBiKTtcclxuXHJcbiAgICAgICAgcXVvdGllbnQgPSB2YWx1ZVswXTtcclxuICAgICAgICB2YXIgcVNpZ24gPSBzZWxmLnNpZ24gIT09IG4uc2lnbixcclxuICAgICAgICAgICAgbW9kID0gdmFsdWVbMV0sXHJcbiAgICAgICAgICAgIG1TaWduID0gc2VsZi5zaWduO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcXVvdGllbnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHFTaWduKSBxdW90aWVudCA9IC1xdW90aWVudDtcclxuICAgICAgICAgICAgcXVvdGllbnQgPSBuZXcgU21hbGxJbnRlZ2VyKHF1b3RpZW50KTtcclxuICAgICAgICB9IGVsc2UgcXVvdGllbnQgPSBuZXcgQmlnSW50ZWdlcihxdW90aWVudCwgcVNpZ24pO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbW9kID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChtU2lnbikgbW9kID0gLW1vZDtcclxuICAgICAgICAgICAgbW9kID0gbmV3IFNtYWxsSW50ZWdlcihtb2QpO1xyXG4gICAgICAgIH0gZWxzZSBtb2QgPSBuZXcgQmlnSW50ZWdlcihtb2QsIG1TaWduKTtcclxuICAgICAgICByZXR1cm4gW3F1b3RpZW50LCBtb2RdO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdm1vZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGRpdk1vZEFueSh0aGlzLCB2KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBxdW90aWVudDogcmVzdWx0WzBdLFxyXG4gICAgICAgICAgICByZW1haW5kZXI6IHJlc3VsdFsxXVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5kaXZtb2QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmRpdm1vZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdm1vZDtcclxuXHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gZGl2TW9kQW55KHRoaXMsIHYpWzBdO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUub3ZlciA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC8gcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5vdmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vdmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIGRpdk1vZEFueSh0aGlzLCB2KVsxXTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucmVtYWluZGVyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICUgcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICB2YWx1ZSwgeCwgeTtcclxuICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhID09PSAxKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gLTEpIHJldHVybiBuLmlzRXZlbigpID8gSW50ZWdlclsxXSA6IEludGVnZXJbLTFdO1xyXG4gICAgICAgIGlmIChuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbi5pc1NtYWxsKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZXhwb25lbnQgXCIgKyBuLnRvU3RyaW5nKCkgKyBcIiBpcyB0b28gbGFyZ2UuXCIpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSA9IE1hdGgucG93KGEsIGIpKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHRydW5jYXRlKHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSB0aGlzO1xyXG4gICAgICAgIHkgPSBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChiICYgMSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgeSA9IHkudGltZXMoeCk7XHJcbiAgICAgICAgICAgICAgICAtLWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIgPT09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBiIC89IDI7XHJcbiAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBvdyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdztcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgdmFyIF8wID0gQmlnSW50KDApLCBfMSA9IEJpZ0ludCgxKSwgXzIgPSBCaWdJbnQoMik7XHJcbiAgICAgICAgaWYgKGIgPT09IF8wKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gXzApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhID09PSBfMSkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IEJpZ0ludCgtMSkpIHJldHVybiBuLmlzRXZlbigpID8gSW50ZWdlclsxXSA6IEludGVnZXJbLTFdO1xyXG4gICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSkgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoXzApO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcztcclxuICAgICAgICB2YXIgeSA9IEludGVnZXJbMV07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKChiICYgXzEpID09PSBfMSkge1xyXG4gICAgICAgICAgICAgICAgeSA9IHkudGltZXMoeCk7XHJcbiAgICAgICAgICAgICAgICAtLWI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGIgPT09IF8wKSBicmVhaztcclxuICAgICAgICAgICAgYiAvPSBfMjtcclxuICAgICAgICAgICAgeCA9IHguc3F1YXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IGZ1bmN0aW9uIChleHAsIG1vZCkge1xyXG4gICAgICAgIGV4cCA9IHBhcnNlVmFsdWUoZXhwKTtcclxuICAgICAgICBtb2QgPSBwYXJzZVZhbHVlKG1vZCk7XHJcbiAgICAgICAgaWYgKG1vZC5pc1plcm8oKSkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IHRha2UgbW9kUG93IHdpdGggbW9kdWx1cyAwXCIpO1xyXG4gICAgICAgIHZhciByID0gSW50ZWdlclsxXSxcclxuICAgICAgICAgICAgYmFzZSA9IHRoaXMubW9kKG1vZCk7XHJcbiAgICAgICAgaWYgKGV4cC5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgZXhwID0gZXhwLm11bHRpcGx5KEludGVnZXJbLTFdKTtcclxuICAgICAgICAgICAgYmFzZSA9IGJhc2UubW9kSW52KG1vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChleHAuaXNQb3NpdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLmlzWmVybygpKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGV4cC5pc09kZCgpKSByID0gci5tdWx0aXBseShiYXNlKS5tb2QobW9kKTtcclxuICAgICAgICAgICAgZXhwID0gZXhwLmRpdmlkZSgyKTtcclxuICAgICAgICAgICAgYmFzZSA9IGJhc2Uuc3F1YXJlKCkubW9kKG1vZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubW9kUG93ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3c7XHJcblxyXG4gICAgZnVuY3Rpb24gY29tcGFyZUFicyhhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5sZW5ndGggPiBiLmxlbmd0aCA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBhW2ldID4gYltpXSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkgcmV0dXJuIDE7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBYnMoYSwgYik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlQWJzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSBNYXRoLmFicyh0aGlzLnZhbHVlKSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBiID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlQWJzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZVZhbHVlKHYpLnZhbHVlO1xyXG4gICAgICAgIGEgPSBhID49IDAgPyBhIDogLWE7XHJcbiAgICAgICAgYiA9IGIgPj0gMCA/IGIgOiAtYjtcclxuICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICAvLyBTZWUgZGlzY3Vzc2lvbiBhYm91dCBjb21wYXJpc29uIHdpdGggSW5maW5pdHk6XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGVyb2xzb24vQmlnSW50ZWdlci5qcy9pc3N1ZXMvNjFcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbiAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuLnNpZ24gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2lnbiA/IC0xIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBYnMoYSwgYikgKiAodGhpcy5zaWduID8gLTEgOiAxKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPCAwID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYSA8IDAgPyAxIDogLTE7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlVG8gPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdmFyIGIgPSBwYXJzZVZhbHVlKHYpLnZhbHVlO1xyXG4gICAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlVG8gPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpID09PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdEVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSAhPT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5lcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubm90RXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5uZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm5vdEVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm5lcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdEVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpID4gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmd0ID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ncmVhdGVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmd0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPCAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubHQgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmxlc3NlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubHQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlc3NlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmx0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ2VxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdlcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ2VxID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDw9IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVswXSAmIDEpID09PSAwO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIDEpID09PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNFdmVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIEJpZ0ludCgxKSkgPT09IEJpZ0ludCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVbMF0gJiAxKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIDEpID09PSAxO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgQmlnSW50KDEpKSA9PT0gQmlnSW50KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLnNpZ247XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID4gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUG9zaXRpdmU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA8IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc05lZ2F0aXZlID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc05lZ2F0aXZlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKHRoaXMudmFsdWUpID09PSAxO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFicygpLnZhbHVlID09PSBCaWdJbnQoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gQmlnSW50KDApO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmlzVW5pdCgpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAobi5jb21wYXJlQWJzKDIpID09PSAwKSByZXR1cm4gdGhpcy5pc0V2ZW4oKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5tb2QobikuaXNaZXJvKCk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0Jhc2ljUHJpbWUodikge1xyXG4gICAgICAgIHZhciBuID0gdi5hYnMoKTtcclxuICAgICAgICBpZiAobi5pc1VuaXQoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmVxdWFscygyKSB8fCBuLmVxdWFscygzKSB8fCBuLmVxdWFscyg1KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKG4uaXNFdmVuKCkgfHwgbi5pc0RpdmlzaWJsZUJ5KDMpIHx8IG4uaXNEaXZpc2libGVCeSg1KSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmxlc3Nlcig0OSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIC8vIHdlIGRvbid0IGtub3cgaWYgaXQncyBwcmltZTogbGV0IHRoZSBvdGhlciBmdW5jdGlvbnMgZmlndXJlIGl0IG91dFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1pbGxlclJhYmluVGVzdChuLCBhKSB7XHJcbiAgICAgICAgdmFyIG5QcmV2ID0gbi5wcmV2KCksXHJcbiAgICAgICAgICAgIGIgPSBuUHJldixcclxuICAgICAgICAgICAgciA9IDAsXHJcbiAgICAgICAgICAgIGQsIHQsIGksIHg7XHJcbiAgICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIGIgPSBiLmRpdmlkZSgyKSwgcisrO1xyXG4gICAgICAgIG5leHQ6IGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmxlc3NlcihhW2ldKSkgY29udGludWU7XHJcbiAgICAgICAgICAgIHggPSBiaWdJbnQoYVtpXSkubW9kUG93KGIsIG4pO1xyXG4gICAgICAgICAgICBpZiAoeC5pc1VuaXQoKSB8fCB4LmVxdWFscyhuUHJldikpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBmb3IgKGQgPSByIC0gMTsgZCAhPSAwOyBkLS0pIHtcclxuICAgICAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpLm1vZChuKTtcclxuICAgICAgICAgICAgICAgIGlmICh4LmlzVW5pdCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5lcXVhbHMoblByZXYpKSBjb250aW51ZSBuZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2V0IFwic3RyaWN0XCIgdG8gdHJ1ZSB0byBmb3JjZSBHUkgtc3VwcG9ydGVkIGxvd2VyIGJvdW5kIG9mIDIqbG9nKE4pXjJcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJpbWUgPSBmdW5jdGlvbiAoc3RyaWN0KSB7XHJcbiAgICAgICAgdmFyIGlzUHJpbWUgPSBpc0Jhc2ljUHJpbWUodGhpcyk7XHJcbiAgICAgICAgaWYgKGlzUHJpbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzUHJpbWU7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLmFicygpO1xyXG4gICAgICAgIHZhciBiaXRzID0gbi5iaXRMZW5ndGgoKTtcclxuICAgICAgICBpZiAoYml0cyA8PSA2NClcclxuICAgICAgICAgICAgcmV0dXJuIG1pbGxlclJhYmluVGVzdChuLCBbMiwgMywgNSwgNywgMTEsIDEzLCAxNywgMTksIDIzLCAyOSwgMzEsIDM3XSk7XHJcbiAgICAgICAgdmFyIGxvZ04gPSBNYXRoLmxvZygyKSAqIGJpdHMudG9KU051bWJlcigpO1xyXG4gICAgICAgIHZhciB0ID0gTWF0aC5jZWlsKChzdHJpY3QgPT09IHRydWUpID8gKDIgKiBNYXRoLnBvdyhsb2dOLCAyKSkgOiBsb2dOKTtcclxuICAgICAgICBmb3IgKHZhciBhID0gW10sIGkgPSAwOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEucHVzaChiaWdJbnQoaSArIDIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbGxlclJhYmluVGVzdChuLCBhKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzUHJpbWUgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IGZ1bmN0aW9uIChpdGVyYXRpb25zLCBybmcpIHtcclxuICAgICAgICB2YXIgaXNQcmltZSA9IGlzQmFzaWNQcmltZSh0aGlzKTtcclxuICAgICAgICBpZiAoaXNQcmltZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaXNQcmltZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuYWJzKCk7XHJcbiAgICAgICAgdmFyIHQgPSBpdGVyYXRpb25zID09PSB1bmRlZmluZWQgPyA1IDogaXRlcmF0aW9ucztcclxuICAgICAgICBmb3IgKHZhciBhID0gW10sIGkgPSAwOyBpIDwgdDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGEucHVzaChiaWdJbnQucmFuZEJldHdlZW4oMiwgbi5taW51cygyKSwgcm5nKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgYSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnYgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHZhciB0ID0gYmlnSW50Lnplcm8sIG5ld1QgPSBiaWdJbnQub25lLCByID0gcGFyc2VWYWx1ZShuKSwgbmV3UiA9IHRoaXMuYWJzKCksIHEsIGxhc3RULCBsYXN0UjtcclxuICAgICAgICB3aGlsZSAoIW5ld1IuaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgcSA9IHIuZGl2aWRlKG5ld1IpO1xyXG4gICAgICAgICAgICBsYXN0VCA9IHQ7XHJcbiAgICAgICAgICAgIGxhc3RSID0gcjtcclxuICAgICAgICAgICAgdCA9IG5ld1Q7XHJcbiAgICAgICAgICAgIHIgPSBuZXdSO1xyXG4gICAgICAgICAgICBuZXdUID0gbGFzdFQuc3VidHJhY3QocS5tdWx0aXBseShuZXdUKSk7XHJcbiAgICAgICAgICAgIG5ld1IgPSBsYXN0Ui5zdWJ0cmFjdChxLm11bHRpcGx5KG5ld1IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyLmlzVW5pdCgpKSB0aHJvdyBuZXcgRXJyb3IodGhpcy50b1N0cmluZygpICsgXCIgYW5kIFwiICsgbi50b1N0cmluZygpICsgXCIgYXJlIG5vdCBjby1wcmltZVwiKTtcclxuICAgICAgICBpZiAodC5jb21wYXJlKDApID09PSAtMSkge1xyXG4gICAgICAgICAgICB0ID0gdC5hZGQobik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5uZWdhdGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubW9kSW52ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnYgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RJbnY7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwodmFsdWUsIDEsIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbCh2YWx1ZSwgMSksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlICsgMSA8IE1BWF9JTlQpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlICsgMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKE1BWF9JTlRfQVJSLCBmYWxzZSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKyBCaWdJbnQoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbCh2YWx1ZSwgMSksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbCh2YWx1ZSwgMSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgLSAxID4gLU1BWF9JTlQpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKE1BWF9JTlRfQVJSLCB0cnVlKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAtIEJpZ0ludCgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBvd2Vyc09mVHdvID0gWzFdO1xyXG4gICAgd2hpbGUgKDIgKiBwb3dlcnNPZlR3b1twb3dlcnNPZlR3by5sZW5ndGggLSAxXSA8PSBCQVNFKSBwb3dlcnNPZlR3by5wdXNoKDIgKiBwb3dlcnNPZlR3b1twb3dlcnNPZlR3by5sZW5ndGggLSAxXSk7XHJcbiAgICB2YXIgcG93ZXJzMkxlbmd0aCA9IHBvd2Vyc09mVHdvLmxlbmd0aCwgaGlnaGVzdFBvd2VyMiA9IHBvd2Vyc09mVHdvW3Bvd2VyczJMZW5ndGggLSAxXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdF9pc1NtYWxsKG4pIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMobikgPD0gQkFTRTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPCAwKSByZXR1cm4gdGhpcy5zaGlmdFJpZ2h0KC1uKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcztcclxuICAgICAgICBpZiAocmVzdWx0LmlzWmVybygpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHdoaWxlIChuID49IHBvd2VyczJMZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICBuIC09IHBvd2VyczJMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0Lm11bHRpcGx5KHBvd2Vyc09mVHdvW25dKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnNoaWZ0TGVmdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciByZW1RdW87XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICBpZiAoIXNoaWZ0X2lzU21hbGwobikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFN0cmluZyhuKSArIFwiIGlzIHRvbyBsYXJnZSBmb3Igc2hpZnRpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiA8IDApIHJldHVybiB0aGlzLnNoaWZ0TGVmdCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgd2hpbGUgKG4gPj0gcG93ZXJzMkxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmlzWmVybygpIHx8IChyZXN1bHQuaXNOZWdhdGl2ZSgpICYmIHJlc3VsdC5pc1VuaXQoKSkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZW1RdW9bMV0uaXNOZWdhdGl2ZSgpID8gcmVtUXVvWzBdLnByZXYoKSA6IHJlbVF1b1swXTtcclxuICAgICAgICAgICAgbiAtPSBwb3dlcnMyTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVtUXVvID0gZGl2TW9kQW55KHJlc3VsdCwgcG93ZXJzT2ZUd29bbl0pO1xyXG4gICAgICAgIHJldHVybiByZW1RdW9bMV0uaXNOZWdhdGl2ZSgpID8gcmVtUXVvWzBdLnByZXYoKSA6IHJlbVF1b1swXTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGJpdHdpc2UoeCwgeSwgZm4pIHtcclxuICAgICAgICB5ID0gcGFyc2VWYWx1ZSh5KTtcclxuICAgICAgICB2YXIgeFNpZ24gPSB4LmlzTmVnYXRpdmUoKSwgeVNpZ24gPSB5LmlzTmVnYXRpdmUoKTtcclxuICAgICAgICB2YXIgeFJlbSA9IHhTaWduID8geC5ub3QoKSA6IHgsXHJcbiAgICAgICAgICAgIHlSZW0gPSB5U2lnbiA/IHkubm90KCkgOiB5O1xyXG4gICAgICAgIHZhciB4RGlnaXQgPSAwLCB5RGlnaXQgPSAwO1xyXG4gICAgICAgIHZhciB4RGl2TW9kID0gbnVsbCwgeURpdk1vZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHdoaWxlICgheFJlbS5pc1plcm8oKSB8fCAheVJlbS5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICB4RGl2TW9kID0gZGl2TW9kQW55KHhSZW0sIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICB4RGlnaXQgPSB4RGl2TW9kWzFdLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICAgICAgaWYgKHhTaWduKSB7XHJcbiAgICAgICAgICAgICAgICB4RGlnaXQgPSBoaWdoZXN0UG93ZXIyIC0gMSAtIHhEaWdpdDsgLy8gdHdvJ3MgY29tcGxlbWVudCBmb3IgbmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB5RGl2TW9kID0gZGl2TW9kQW55KHlSZW0sIGhpZ2hlc3RQb3dlcjIpO1xyXG4gICAgICAgICAgICB5RGlnaXQgPSB5RGl2TW9kWzFdLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICAgICAgaWYgKHlTaWduKSB7XHJcbiAgICAgICAgICAgICAgICB5RGlnaXQgPSBoaWdoZXN0UG93ZXIyIC0gMSAtIHlEaWdpdDsgLy8gdHdvJ3MgY29tcGxlbWVudCBmb3IgbmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB4UmVtID0geERpdk1vZFswXTtcclxuICAgICAgICAgICAgeVJlbSA9IHlEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGZuKHhEaWdpdCwgeURpZ2l0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdW0gPSBmbih4U2lnbiA/IDEgOiAwLCB5U2lnbiA/IDEgOiAwKSAhPT0gMCA/IGJpZ0ludCgtMSkgOiBiaWdJbnQoMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHJlc3VsdC5sZW5ndGggLSAxOyBpID49IDA7IGkgLT0gMSkge1xyXG4gICAgICAgICAgICBzdW0gPSBzdW0ubXVsdGlwbHkoaGlnaGVzdFBvd2VyMikuYWRkKGJpZ0ludChyZXN1bHRbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1bTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmVnYXRlKCkucHJldigpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubm90ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ub3QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSAmIGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYW5kID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQ7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUub3IgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIHwgYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5vciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUub3IgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhIF4gYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS54b3IgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnhvciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnhvcjtcclxuXHJcbiAgICB2YXIgTE9CTUFTS19JID0gMSA8PCAzMCwgTE9CTUFTS19CSSA9IChCQVNFICYgLUJBU0UpICogKEJBU0UgJiAtQkFTRSkgfCBMT0JNQVNLX0k7XHJcbiAgICBmdW5jdGlvbiByb3VnaExPQihuKSB7IC8vIGdldCBsb3dlc3RPbmVCaXQgKHJvdWdoKVxyXG4gICAgICAgIC8vIFNtYWxsSW50ZWdlcjogcmV0dXJuIE1pbihsb3dlc3RPbmVCaXQobiksIDEgPDwgMzApXHJcbiAgICAgICAgLy8gQmlnSW50ZWdlcjogcmV0dXJuIE1pbihsb3dlc3RPbmVCaXQobiksIDEgPDwgMTQpIFtCQVNFPTFlN11cclxuICAgICAgICB2YXIgdiA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgIHggPSB0eXBlb2YgdiA9PT0gXCJudW1iZXJcIiA/IHYgfCBMT0JNQVNLX0kgOlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHYgPT09IFwiYmlnaW50XCIgPyB2IHwgQmlnSW50KExPQk1BU0tfSSkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHZbMF0gKyB2WzFdICogQkFTRSB8IExPQk1BU0tfQkk7XHJcbiAgICAgICAgcmV0dXJuIHggJiAteDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbnRlZ2VyTG9nYXJpdGhtKHZhbHVlLCBiYXNlKSB7XHJcbiAgICAgICAgaWYgKGJhc2UuY29tcGFyZVRvKHZhbHVlKSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciB0bXAgPSBpbnRlZ2VyTG9nYXJpdGhtKHZhbHVlLCBiYXNlLnNxdWFyZShiYXNlKSk7XHJcbiAgICAgICAgICAgIHZhciBwID0gdG1wLnA7XHJcbiAgICAgICAgICAgIHZhciBlID0gdG1wLmU7XHJcbiAgICAgICAgICAgIHZhciB0ID0gcC5tdWx0aXBseShiYXNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHQuY29tcGFyZVRvKHZhbHVlKSA8PSAwID8geyBwOiB0LCBlOiBlICogMiArIDEgfSA6IHsgcDogcCwgZTogZSAqIDIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgcDogYmlnSW50KDEpLCBlOiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICBpZiAobi5jb21wYXJlVG8oYmlnSW50KDApKSA8IDApIHtcclxuICAgICAgICAgICAgbiA9IG4ubmVnYXRlKCkuc3VidHJhY3QoYmlnSW50KDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGJpZ0ludCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludChpbnRlZ2VyTG9nYXJpdGhtKG4sIGJpZ0ludCgyKSkuZSkuYWRkKGJpZ0ludCgxKSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmJpdExlbmd0aCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoID0gQmlnSW50ZWdlci5wcm90b3R5cGUuYml0TGVuZ3RoO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1heChhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgcmV0dXJuIGEuZ3JlYXRlcihiKSA/IGEgOiBiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWluKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICByZXR1cm4gYS5sZXNzZXIoYikgPyBhIDogYjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGdjZChhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSkuYWJzKCk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYikuYWJzKCk7XHJcbiAgICAgICAgaWYgKGEuZXF1YWxzKGIpKSByZXR1cm4gYTtcclxuICAgICAgICBpZiAoYS5pc1plcm8oKSkgcmV0dXJuIGI7XHJcbiAgICAgICAgaWYgKGIuaXNaZXJvKCkpIHJldHVybiBhO1xyXG4gICAgICAgIHZhciBjID0gSW50ZWdlclsxXSwgZCwgdDtcclxuICAgICAgICB3aGlsZSAoYS5pc0V2ZW4oKSAmJiBiLmlzRXZlbigpKSB7XHJcbiAgICAgICAgICAgIGQgPSBtaW4ocm91Z2hMT0IoYSksIHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBiID0gYi5kaXZpZGUoZCk7XHJcbiAgICAgICAgICAgIGMgPSBjLm11bHRpcGx5KGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoYS5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBhID0gYS5kaXZpZGUocm91Z2hMT0IoYSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHdoaWxlIChiLmlzRXZlbigpKSB7XHJcbiAgICAgICAgICAgICAgICBiID0gYi5kaXZpZGUocm91Z2hMT0IoYikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhLmdyZWF0ZXIoYikpIHtcclxuICAgICAgICAgICAgICAgIHQgPSBiOyBiID0gYTsgYSA9IHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IGIuc3VidHJhY3QoYSk7XHJcbiAgICAgICAgfSB3aGlsZSAoIWIuaXNaZXJvKCkpO1xyXG4gICAgICAgIHJldHVybiBjLmlzVW5pdCgpID8gYSA6IGEubXVsdGlwbHkoYyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsY20oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIHJldHVybiBhLmRpdmlkZShnY2QoYSwgYikpLm11bHRpcGx5KGIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmFuZEJldHdlZW4oYSwgYiwgcm5nKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgdmFyIHVzZWRSTkcgPSBybmcgfHwgTWF0aC5yYW5kb207XHJcbiAgICAgICAgdmFyIGxvdyA9IG1pbihhLCBiKSwgaGlnaCA9IG1heChhLCBiKTtcclxuICAgICAgICB2YXIgcmFuZ2UgPSBoaWdoLnN1YnRyYWN0KGxvdykuYWRkKDEpO1xyXG4gICAgICAgIGlmIChyYW5nZS5pc1NtYWxsKSByZXR1cm4gbG93LmFkZChNYXRoLmZsb29yKHVzZWRSTkcoKSAqIHJhbmdlKSk7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IHRvQmFzZShyYW5nZSwgQkFTRSkudmFsdWU7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLCByZXN0cmljdGVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZ2l0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgdG9wID0gcmVzdHJpY3RlZCA/IGRpZ2l0c1tpXSA6IEJBU0U7XHJcbiAgICAgICAgICAgIHZhciBkaWdpdCA9IHRydW5jYXRlKHVzZWRSTkcoKSAqIHRvcCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGRpZ2l0KTtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0IDwgdG9wKSByZXN0cmljdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsb3cuYWRkKEludGVnZXIuZnJvbUFycmF5KHJlc3VsdCwgQkFTRSwgZmFsc2UpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGFyc2VCYXNlID0gZnVuY3Rpb24gKHRleHQsIGJhc2UsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldCB8fCBERUZBVUxUX0FMUEhBQkVUO1xyXG4gICAgICAgIHRleHQgPSBTdHJpbmcodGV4dCk7XHJcbiAgICAgICAgaWYgKCFjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRleHQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBpO1xyXG4gICAgICAgIHZhciBhYnNCYXNlID0gTWF0aC5hYnMoYmFzZSk7XHJcbiAgICAgICAgdmFyIGFscGhhYmV0VmFsdWVzID0ge307XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFscGhhYmV0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFscGhhYmV0VmFsdWVzW2FscGhhYmV0W2ldXSA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRleHRbaV07XHJcbiAgICAgICAgICAgIGlmIChjID09PSBcIi1cIikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChjIGluIGFscGhhYmV0VmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGFiZXRWYWx1ZXNbY10gPj0gYWJzQmFzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSBcIjFcIiAmJiBhYnNCYXNlID09PSAxKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGRpZ2l0IGluIGJhc2UgXCIgKyBiYXNlICsgXCIuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJhc2UgPSBwYXJzZVZhbHVlKGJhc2UpO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSBbXTtcclxuICAgICAgICB2YXIgaXNOZWdhdGl2ZSA9IHRleHRbMF0gPT09IFwiLVwiO1xyXG4gICAgICAgIGZvciAoaSA9IGlzTmVnYXRpdmUgPyAxIDogMDsgaSA8IHRleHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldO1xyXG4gICAgICAgICAgICBpZiAoYyBpbiBhbHBoYWJldFZhbHVlcykgZGlnaXRzLnB1c2gocGFyc2VWYWx1ZShhbHBoYWJldFZhbHVlc1tjXSkpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjID09PSBcIjxcIikge1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXJ0ID0gaTtcclxuICAgICAgICAgICAgICAgIGRvIHsgaSsrOyB9IHdoaWxlICh0ZXh0W2ldICE9PSBcIj5cIiAmJiBpIDwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZGlnaXRzLnB1c2gocGFyc2VWYWx1ZSh0ZXh0LnNsaWNlKHN0YXJ0ICsgMSwgaSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgY2hhcmFjdGVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpIHtcclxuICAgICAgICB2YXIgdmFsID0gSW50ZWdlclswXSwgcG93ID0gSW50ZWdlclsxXSwgaTtcclxuICAgICAgICBmb3IgKGkgPSBkaWdpdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFsID0gdmFsLmFkZChkaWdpdHNbaV0udGltZXMocG93KSk7XHJcbiAgICAgICAgICAgIHBvdyA9IHBvdy50aW1lcyhiYXNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGlzTmVnYXRpdmUgPyB2YWwubmVnYXRlKCkgOiB2YWw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3RyaW5naWZ5KGRpZ2l0LCBhbHBoYWJldCkge1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQgfHwgREVGQVVMVF9BTFBIQUJFVDtcclxuICAgICAgICBpZiAoZGlnaXQgPCBhbHBoYWJldC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFscGhhYmV0W2RpZ2l0XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwiPFwiICsgZGlnaXQgKyBcIj5cIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Jhc2UobiwgYmFzZSkge1xyXG4gICAgICAgIGJhc2UgPSBiaWdJbnQoYmFzZSk7XHJcbiAgICAgICAgaWYgKGJhc2UuaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBjb252ZXJ0IG5vbnplcm8gbnVtYmVycyB0byBiYXNlIDAuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmFzZS5lcXVhbHMoLTEpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBbXS5jb25jYXQuYXBwbHkoW10sIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KC1uLnRvSlNOdW1iZXIoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoQXJyYXkucHJvdG90eXBlLnZhbHVlT2YsIFsxLCAwXSlcclxuICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzTmVnYXRpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdmFyIGFyciA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG4udG9KU051bWJlcigpIC0gMSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMCwgMV0pO1xyXG4gICAgICAgICAgICBhcnIudW5zaGlmdChbMV0pO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IFtdLmNvbmNhdC5hcHBseShbXSwgYXJyKSxcclxuICAgICAgICAgICAgICAgIGlzTmVnYXRpdmU6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmVnID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpICYmIGJhc2UuaXNQb3NpdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIG5lZyA9IHRydWU7XHJcbiAgICAgICAgICAgIG4gPSBuLmFicygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmFzZS5pc1VuaXQoKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobi50b0pTTnVtYmVyKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoTnVtYmVyLnByb3RvdHlwZS52YWx1ZU9mLCAxKSxcclxuICAgICAgICAgICAgICAgIGlzTmVnYXRpdmU6IG5lZ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgb3V0ID0gW107XHJcbiAgICAgICAgdmFyIGxlZnQgPSBuLCBkaXZtb2Q7XHJcbiAgICAgICAgd2hpbGUgKGxlZnQuaXNOZWdhdGl2ZSgpIHx8IGxlZnQuY29tcGFyZUFicyhiYXNlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRpdm1vZCA9IGxlZnQuZGl2bW9kKGJhc2UpO1xyXG4gICAgICAgICAgICBsZWZ0ID0gZGl2bW9kLnF1b3RpZW50O1xyXG4gICAgICAgICAgICB2YXIgZGlnaXQgPSBkaXZtb2QucmVtYWluZGVyO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXQuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdpdCA9IGJhc2UubWludXMoZGlnaXQpLmFicygpO1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IGxlZnQubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dC5wdXNoKGRpZ2l0LnRvSlNOdW1iZXIoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG91dC5wdXNoKGxlZnQudG9KU051bWJlcigpKTtcclxuICAgICAgICByZXR1cm4geyB2YWx1ZTogb3V0LnJldmVyc2UoKSwgaXNOZWdhdGl2ZTogbmVnIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9CYXNlU3RyaW5nKG4sIGJhc2UsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgdmFyIGFyciA9IHRvQmFzZShuLCBiYXNlKTtcclxuICAgICAgICByZXR1cm4gKGFyci5pc05lZ2F0aXZlID8gXCItXCIgOiBcIlwiKSArIGFyci52YWx1ZS5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ2lmeSh4LCBhbHBoYWJldCk7XHJcbiAgICAgICAgfSkuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJhZGl4LCBhbHBoYWJldCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPT0gMTApIHJldHVybiB0b0Jhc2VTdHJpbmcodGhpcywgcmFkaXgsIGFscGhhYmV0KTtcclxuICAgICAgICB2YXIgdiA9IHRoaXMudmFsdWUsIGwgPSB2Lmxlbmd0aCwgc3RyID0gU3RyaW5nKHZbLS1sXSksIHplcm9zID0gXCIwMDAwMDAwXCIsIGRpZ2l0O1xyXG4gICAgICAgIHdoaWxlICgtLWwgPj0gMCkge1xyXG4gICAgICAgICAgICBkaWdpdCA9IFN0cmluZyh2W2xdKTtcclxuICAgICAgICAgICAgc3RyICs9IHplcm9zLnNsaWNlKGRpZ2l0Lmxlbmd0aCkgKyBkaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpZ24gPSB0aGlzLnNpZ24gPyBcIi1cIiA6IFwiXCI7XHJcbiAgICAgICAgcmV0dXJuIHNpZ24gKyBzdHI7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocmFkaXgsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgaWYgKHJhZGl4ID09PSB1bmRlZmluZWQpIHJhZGl4ID0gMTA7XHJcbiAgICAgICAgaWYgKHJhZGl4ICE9IDEwKSByZXR1cm4gdG9CYXNlU3RyaW5nKHRoaXMsIHJhZGl4LCBhbHBoYWJldCk7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b1N0cmluZyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmc7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b0pTT04gPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMudG9TdHJpbmcoKTsgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSwgMTApO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvSlNOdW1iZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvSlNOdW1iZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2Y7XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnZhbHVlT2YgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvSlNOdW1iZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMudG9TdHJpbmcoKSwgMTApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlU3RyaW5nVmFsdWUodikge1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UoK3YpKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gK3Y7XHJcbiAgICAgICAgICAgIGlmICh4ID09PSB0cnVuY2F0ZSh4KSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBwb3J0c05hdGl2ZUJpZ0ludCA/IG5ldyBOYXRpdmVCaWdJbnQoQmlnSW50KHgpKSA6IG5ldyBTbWFsbEludGVnZXIoeCk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyB2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNpZ24gPSB2WzBdID09PSBcIi1cIjtcclxuICAgICAgICBpZiAoc2lnbikgdiA9IHYuc2xpY2UoMSk7XHJcbiAgICAgICAgdmFyIHNwbGl0ID0gdi5zcGxpdCgvZS9pKTtcclxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID4gMikgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHNwbGl0LmpvaW4oXCJlXCIpKTtcclxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBleHAgPSBzcGxpdFsxXTtcclxuICAgICAgICAgICAgaWYgKGV4cFswXSA9PT0gXCIrXCIpIGV4cCA9IGV4cC5zbGljZSgxKTtcclxuICAgICAgICAgICAgZXhwID0gK2V4cDtcclxuICAgICAgICAgICAgaWYgKGV4cCAhPT0gdHJ1bmNhdGUoZXhwKSB8fCAhaXNQcmVjaXNlKGV4cCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBleHAgKyBcIiBpcyBub3QgYSB2YWxpZCBleHBvbmVudC5cIik7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gc3BsaXRbMF07XHJcbiAgICAgICAgICAgIHZhciBkZWNpbWFsUGxhY2UgPSB0ZXh0LmluZGV4T2YoXCIuXCIpO1xyXG4gICAgICAgICAgICBpZiAoZGVjaW1hbFBsYWNlID49IDApIHtcclxuICAgICAgICAgICAgICAgIGV4cCAtPSB0ZXh0Lmxlbmd0aCAtIGRlY2ltYWxQbGFjZSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dC5zbGljZSgwLCBkZWNpbWFsUGxhY2UpICsgdGV4dC5zbGljZShkZWNpbWFsUGxhY2UgKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXhwIDwgMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluY2x1ZGUgbmVnYXRpdmUgZXhwb25lbnQgcGFydCBmb3IgaW50ZWdlcnNcIik7XHJcbiAgICAgICAgICAgIHRleHQgKz0gKG5ldyBBcnJheShleHAgKyAxKSkuam9pbihcIjBcIik7XHJcbiAgICAgICAgICAgIHYgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaXNWYWxpZCA9IC9eKFswLTldWzAtOV0qKSQvLnRlc3Qodik7XHJcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzTmF0aXZlQmlnSW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludChzaWduID8gXCItXCIgKyB2IDogdikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgciA9IFtdLCBtYXggPSB2Lmxlbmd0aCwgbCA9IExPR19CQVNFLCBtaW4gPSBtYXggLSBsO1xyXG4gICAgICAgIHdoaWxlIChtYXggPiAwKSB7XHJcbiAgICAgICAgICAgIHIucHVzaCgrdi5zbGljZShtaW4sIG1heCkpO1xyXG4gICAgICAgICAgICBtaW4gLT0gbDtcclxuICAgICAgICAgICAgaWYgKG1pbiA8IDApIG1pbiA9IDA7XHJcbiAgICAgICAgICAgIG1heCAtPSBsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihyLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZU51bWJlclZhbHVlKHYpIHtcclxuICAgICAgICBpZiAoc3VwcG9ydHNOYXRpdmVCaWdJbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoQmlnSW50KHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2KSkge1xyXG4gICAgICAgICAgICBpZiAodiAhPT0gdHJ1bmNhdGUodikpIHRocm93IG5ldyBFcnJvcih2ICsgXCIgaXMgbm90IGFuIGludGVnZXIuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodi50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlTnVtYmVyVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdWYWx1ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcImJpZ2ludFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdjtcclxuICAgIH1cclxuICAgIC8vIFByZS1kZWZpbmUgbnVtYmVycyBpbiByYW5nZSBbLTk5OSw5OTldXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xyXG4gICAgICAgIEludGVnZXJbaV0gPSBwYXJzZVZhbHVlKGkpO1xyXG4gICAgICAgIGlmIChpID4gMCkgSW50ZWdlclstaV0gPSBwYXJzZVZhbHVlKC1pKTtcclxuICAgIH1cclxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcbiAgICBJbnRlZ2VyLm9uZSA9IEludGVnZXJbMV07XHJcbiAgICBJbnRlZ2VyLnplcm8gPSBJbnRlZ2VyWzBdO1xyXG4gICAgSW50ZWdlci5taW51c09uZSA9IEludGVnZXJbLTFdO1xyXG4gICAgSW50ZWdlci5tYXggPSBtYXg7XHJcbiAgICBJbnRlZ2VyLm1pbiA9IG1pbjtcclxuICAgIEludGVnZXIuZ2NkID0gZ2NkO1xyXG4gICAgSW50ZWdlci5sY20gPSBsY207XHJcbiAgICBJbnRlZ2VyLmlzSW5zdGFuY2UgPSBmdW5jdGlvbiAoeCkgeyByZXR1cm4geCBpbnN0YW5jZW9mIEJpZ0ludGVnZXIgfHwgeCBpbnN0YW5jZW9mIFNtYWxsSW50ZWdlciB8fCB4IGluc3RhbmNlb2YgTmF0aXZlQmlnSW50OyB9O1xyXG4gICAgSW50ZWdlci5yYW5kQmV0d2VlbiA9IHJhbmRCZXR3ZWVuO1xyXG5cclxuICAgIEludGVnZXIuZnJvbUFycmF5ID0gZnVuY3Rpb24gKGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLm1hcChwYXJzZVZhbHVlKSwgcGFyc2VWYWx1ZShiYXNlIHx8IDEwKSwgaXNOZWdhdGl2ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBJbnRlZ2VyO1xyXG59KSgpO1xyXG5cclxuLy8gTm9kZS5qcyBjaGVja1xyXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuaGFzT3duUHJvcGVydHkoXCJleHBvcnRzXCIpKSB7XHJcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJpZ0ludDtcclxufVxyXG5cclxuLy9hbWQgY2hlY2tcclxuaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcbiAgICBkZWZpbmUoIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gYmlnSW50O1xyXG4gICAgfSk7XHJcbn1cclxuIiwiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlKFwiZDNcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZDNcIl0sbik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0c1tcImJveG1vZGVsLWQzXCJdPW4ocmVxdWlyZShcImQzXCIpKTp0W1wiYm94bW9kZWwtZDNcIl09bih0LmQzKX0od2luZG93LGZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj17fTtmdW5jdGlvbiBlKHIpe2lmKG5bcl0pcmV0dXJuIG5bcl0uZXhwb3J0czt2YXIgbz1uW3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxlKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLHIpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxuKXtpZigxJm4mJih0PWUodCkpLDgmbilyZXR1cm4gdDtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciBvIGluIHQpZS5kKHIsbyxmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LGUucD1cIlwiLGUoZS5zPTEpfShbZnVuY3Rpb24obixlKXtuLmV4cG9ydHM9dH0sZnVuY3Rpb24odCxuLGUpe1widXNlIHN0cmljdFwiO2UucihuKSxlLmQobixcImRlZmF1bHRcIixmdW5jdGlvbigpe3JldHVybiBvfSk7dmFyIHI9ZSgwKTtmdW5jdGlvbiBvKCl7dmFyIHQsbixlLG8saSx1LGYsYSxjLGw9W107ZnVuY3Rpb24gaCh0KXtyZXR1cm4gdC5lYWNoQWZ0ZXIoZCksdC5lYWNoQmVmb3JlKHApLHQuZWFjaEJlZm9yZSh5KSx0fWZ1bmN0aW9uIGQobyl7dmFyIGg9YyhvKS53aWR0aCxkPWMobykuaGVpZ2h0O2lmKHQobykpe2lmKGg9ZD0wLG8uY2hpbGRyZW4pe2Zvcih2YXIgcD1mdW5jdGlvbih0KXt2YXIgcj1bXSxvPTAsaT0hMSxmPTAsYz0hMDtyZXR1cm4gdC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGwsaCl7bihsKSYmIWkmJihpPSEwKSxvKz1sLngxLWwueDAsbys9Yz9lKGwpP3UobCkubGVmdDowOk1hdGgubWF4KHUobCkubGVmdCx1KHQuY2hpbGRyZW5baC0xXSkucmlnaHQpO3ZhciBkPWUobCk/dShsKS5yaWdodDowOyhvK2Q+YSh0KXx8aD09PXQuY2hpbGRyZW4ubGVuZ3RoLTEpJiYobys9ZCksbz5hKHQpfHxoPT09dC5jaGlsZHJlbi5sZW5ndGgtMT8oci5wdXNoKHtmcm9tOmYsdG86aCx3aWR0aDpvLGZsZXhIZWlnaHQ6aX0pLGg8dC5jaGlsZHJlbi5sZW5ndGgtMSYmKGY9aCsxLG89MCxpPSExLGM9ITApKTpjPSExfSkscn0obykseT0wO3k8cC5sZW5ndGg7eSsrKXBbeV0uaGVpZ2h0PWcobyxwLHkpO2wucHVzaCh7Ym94Om8sbGluZXM6cH0pLGgrPXIubWF4KHAsZnVuY3Rpb24odCl7cmV0dXJuIHQud2lkdGh9KSxkKz1yLnN1bShwLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfWgrPWkobykubGVmdCtpKG8pLnJpZ2h0LGQrPWkobykudG9wK2kobykuYm90dG9tLGg9TWF0aC5tYXgoaCxmKG8pLndpZHRoKSxkPU1hdGgubWF4KGQsZihvKS5oZWlnaHQpfW8ueDA9by55MD0wLG8ueDE9aCxvLnkxPWR9ZnVuY3Rpb24gcChyKXt2YXIgbz1yLnkxO2lmKHIucGFyZW50JiZuKHIpKXtvPW0ocikuaGVpZ2h0O3ZhciBpPXgoci5wYXJlbnQpLGY9cyhyLGkpO28tPWUocil8fDAhPT1mP3UocikudG9wOjA7dmFyIGE9KG8tPWUocil8fGYhPT1pLmxlbmd0aC0xP3UocikuYm90dG9tOjApLXIueTE7aWYodChyKSYmci5jaGlsZHJlbiYmYT4wKXt2YXIgYz14KHIpLGw9YS9jLmxlbmd0aCxoPSEwLGQ9ITEscD12b2lkIDA7dHJ5e2Zvcih2YXIgeSxnPWNbU3ltYm9sLml0ZXJhdG9yXSgpOyEoaD0oeT1nLm5leHQoKSkuZG9uZSk7aD0hMCl7eS52YWx1ZS5oZWlnaHQrPWx9fWNhdGNoKHQpe2Q9ITAscD10fWZpbmFsbHl7dHJ5e2h8fG51bGw9PWcucmV0dXJufHxnLnJldHVybigpfWZpbmFsbHl7aWYoZCl0aHJvdyBwfX19fXIueTE9b31mdW5jdGlvbiB5KHQpe3ZhciBuPXQueDEtdC54MCxyPXQueTEtdC55MDtpZih0LnBhcmVudCl7dC55MD10LnBhcmVudC55MCtpKHQucGFyZW50KS50b3A7dmFyIGY9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtpZigwPT09Znx8ZnVuY3Rpb24odCl7aWYodC5wYXJlbnQpe3ZhciBuPXQucGFyZW50LmNoaWxkcmVuLmluZGV4T2YodCksZT14KHQucGFyZW50KSxyPWVbcyh0LGUpXTtyZXR1cm4gci5mcm9tPT09bn1yZXR1cm4gbnVsbH0odCkpdC54MCs9dC5wYXJlbnQueDAraSh0LnBhcmVudCkubGVmdCxlKHQpJiYodC54MCs9dSh0KS5sZWZ0KTtlbHNle3ZhciBhPXQucGFyZW50LmNoaWxkcmVuW2YtMV07dC54MD1hLngxLHQueDArPU1hdGgubWF4KHUoYSkucmlnaHQsdSh0KS5sZWZ0KX19ZWxzZSBzd2l0Y2gobyl7Y2FzZVwidG9wXCI6dC55MD0wO2JyZWFrO2Nhc2VcIm1pZGRsZVwiOnQueTA9ci8yO2JyZWFrO2Nhc2VcImJvdHRvbVwiOnQueTA9cn1zd2l0Y2gobyl7Y2FzZVwidG9wXCI6aWYodC5wYXJlbnQpe3ZhciBjPXModCk7dC55MCs9ZSh0KXx8MCE9PWM/dSh0KS50b3A6MCx0LnkwKz12KHQpfWJyZWFrO2Nhc2VcIm1pZGRsZVwiOnQucGFyZW50JiYodC55MCs9dih0KSttKHQpLmhlaWdodC8yKSx0LnkwLT1yLzI7YnJlYWs7Y2FzZVwiYm90dG9tXCI6aWYodC5wYXJlbnQpe3ZhciBsPXgodC5wYXJlbnQpLGg9cyh0LGwpO3QueTAtPWUodCl8fGghPT1sLmxlbmd0aC0xP3UodCkuYm90dG9tOjAsdC55MCs9dih0LCEwKX10LnkwLT1yfXQueDE9dC54MCtuLHQueTE9dC55MCtyfWZ1bmN0aW9uIGcodCxuLHIpe2Zvcih2YXIgbz1uW3JdLGk9MCxhPW8uZnJvbTthPD1vLnRvO2ErKyl7dmFyIGM9dC5jaGlsZHJlblthXSxsPWMueTEtYy55MCxoPShlKGMpfHwwIT09cj91KGMpLnRvcDowKSsoZShjKXx8ciE9PW4ubGVuZ3RoLTE/dShjKS5ib3R0b206MCk7bCtoPmkmJihpPWwraCl9cmV0dXJuIE1hdGgubWF4KGksZih0KS5oZWlnaHQpfWZ1bmN0aW9uIHgodCl7cmV0dXJuIGxbbC5maW5kSW5kZXgoZnVuY3Rpb24obil7cmV0dXJuIG4uYm94PT09dH0pXS5saW5lc31mdW5jdGlvbiBzKHQsbil7aWYodC5wYXJlbnQpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MT9uOngodC5wYXJlbnQpLHI9dC5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZih0KTtyZXR1cm4gZS5maW5kSW5kZXgoZnVuY3Rpb24odCl7cmV0dXJuIHI+PXQuZnJvbSYmcjw9dC50b30pfXJldHVybiBudWxsfWZ1bmN0aW9uIG0odCl7dmFyIG49eCh0LnBhcmVudCk7cmV0dXJuIG5bcyh0LG4pXX1mdW5jdGlvbiB2KHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdJiZhcmd1bWVudHNbMV07aWYodC5wYXJlbnQpe3ZhciBlPXgodC5wYXJlbnQpLG89cyh0LGUpLGk9bj9vOm8tMTtyZXR1cm4gci5zdW0oZS5maWx0ZXIoZnVuY3Rpb24odCxuKXtyZXR1cm4gbjw9aX0pLGZ1bmN0aW9uKHQpe3JldHVybiB0LmhlaWdodH0pfXJldHVybiBudWxsfWZ1bmN0aW9uIGIodCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fXJldHVybiBoLnZBbGlnbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obz10LGgpOm99LGguZWRnZU1hcmdpbnM9ZnVuY3Rpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGU9XCJmdW5jdGlvblwiPT10eXBlb2YgdD90OmIoK3QpLGgpOmV9LGguaXNDb250YWluZXI9ZnVuY3Rpb24obil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHQ9XCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uOmIoK24pLGgpOnR9LGguc3BhbkhlaWdodD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6bn0saC5wYWRkaW5nPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTppfSxoLm1hcmdpbj1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6dX0saC5ub2RlU2l6ZT1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6Y30saC5taW5Db250YWluZXJTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhmPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dDpiKCt0KSxoKTpmfSxoLm1heExpbmVXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q6YigrdCksaCk6YX0saH19XSkuZGVmYXVsdH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Ym94bW9kZWwtZDMubWluLmpzLm1hcCIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUocmVxdWlyZShcInJnYmNvbG9yXCIpLHJlcXVpcmUoXCJzdGFja2JsdXItY2FudmFzXCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJnYmNvbG9yXCIsXCJzdGFja2JsdXItY2FudmFzXCJdLGUpOnQuY2Fudmc9ZSh0LlJHQkNvbG9yLHQuU3RhY2tCbHVyKX0odGhpcyxmdW5jdGlvbihtLGQpe1widXNlIHN0cmljdFwiO3ZhciB0O3JldHVybiBtPW0mJm0uaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP20uZGVmYXVsdDptLGQ9ZCYmZC5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRcIik/ZC5kZWZhdWx0OmQsZnVuY3Rpb24odCl7dmFyIHU7dC5leHBvcnRzOyh1PXdpbmRvdykuRE9NUGFyc2VyPXdpbmRvdy5ET01QYXJzZXI7ZnVuY3Rpb24gcCgpe3JldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpfXZhciBmLGM9ZnVuY3Rpb24odCxlLGkpe2lmKG51bGwhPXR8fG51bGwhPWV8fG51bGwhPWkpe3ZhciBuPWZ1bmN0aW9uKHMpe3ZhciBBPXtvcHRzOnMsRlJBTUVSQVRFOjMwLE1BWF9WSVJUVUFMX1BJWEVMUzozZTQscm9vdEVtU2l6ZToxMixlbVNpemU6MTIsbG9nOmZ1bmN0aW9uKHQpe319OzE9PUEub3B0cy5sb2cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiYoQS5sb2c9ZnVuY3Rpb24odCl7Y29uc29sZS5sb2codCl9KTtBLmluaXQ9ZnVuY3Rpb24odCl7dmFyIGU9MDtBLlVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW52Z1wiKyArK2V9LEEuRGVmaW5pdGlvbnM9e30sQS5TdHlsZXM9e30sQS5TdHlsZXNTcGVjaWZpY2l0eT17fSxBLkFuaW1hdGlvbnM9W10sQS5JbWFnZXM9W10sQS5jdHg9dCxBLlZpZXdQb3J0PW5ldyBmdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdLHRoaXMuQ2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXX0sdGhpcy5TZXRDdXJyZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy52aWV3UG9ydHMucHVzaCh7d2lkdGg6dCxoZWlnaHQ6ZX0pfSx0aGlzLlJlbW92ZUN1cnJlbnQ9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cy5wb3AoKX0sdGhpcy5DdXJyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld1BvcnRzW3RoaXMudmlld1BvcnRzLmxlbmd0aC0xXX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aH0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0fSx0aGlzLkNvbXB1dGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm51bWJlclwiPT10eXBlb2YgdD90OlwieFwiPT10P3RoaXMud2lkdGgoKTpcInlcIj09dD90aGlzLmhlaWdodCgpOk1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoKCksMikrTWF0aC5wb3codGhpcy5oZWlnaHQoKSwyKSkvTWF0aC5zcXJ0KDIpfX19LEEuaW5pdCgpLEEuSW1hZ2VzTG9hZGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDxBLkltYWdlcy5sZW5ndGg7dCsrKWlmKCFBLkltYWdlc1t0XS5sb2FkZWQpcmV0dXJuITE7cmV0dXJuITB9LEEudHJpbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxBLmNvbXByZXNzU3BhY2VzPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSxcIiBcIil9LEEuYWpheD1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4oZT11LlhNTEh0dHBSZXF1ZXN0P25ldyB1LlhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpPyhlLm9wZW4oXCJHRVRcIix0LCExKSxlLnNlbmQobnVsbCksZS5yZXNwb25zZVRleHQpOm51bGx9LEEucGFyc2VYbWw9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdpbmRvd3MmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YSYmdm9pZCAwIT09V2luZG93cy5EYXRhLlhtbCl7dmFyIHQ9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50LGk9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncztyZXR1cm4gaS5wcm9oaWJpdER0ZD0hMSx0LmxvYWRYbWwoZSxpKSx0fWlmKCF1LkRPTVBhcnNlcil7ZT1lLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLFwiXCIpO3ZhciB0PW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKTtyZXR1cm4gdC5hc3luYz1cImZhbHNlXCIsdC5sb2FkWE1MKGUpLHR9dHJ5e3ZhciBuPXMueG1sZG9tP25ldyB1LkRPTVBhcnNlcihzLnhtbGRvbSk6bmV3IHUuRE9NUGFyc2VyO3JldHVybiBuLnBhcnNlRnJvbVN0cmluZyhlLFwiaW1hZ2Uvc3ZnK3htbFwiKX1jYXRjaCh0KXtyZXR1cm4obj1zLnhtbGRvbT9uZXcgdS5ET01QYXJzZXIocy54bWxkb20pOm5ldyB1LkRPTVBhcnNlcikucGFyc2VGcm9tU3RyaW5nKGUsXCJ0ZXh0L3htbFwiKX19LEEuUHJvcGVydHk9ZnVuY3Rpb24odCxlKXt0aGlzLm5hbWU9dCx0aGlzLnZhbHVlPWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWV9LEEuUHJvcGVydHkucHJvdG90eXBlLmhhc1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPXRoaXMudmFsdWUmJlwiXCIhPT10aGlzLnZhbHVlfSxBLlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZT1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9cGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtyZXR1cm4odGhpcy52YWx1ZStcIlwiKS5tYXRjaCgvJSQvKSYmKHQvPTEwMCksdH0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUudmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90aGlzLnZhbHVlOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLm51bVZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy5udW1WYWx1ZSgpOnR9LEEuUHJvcGVydHkucHJvdG90eXBlLmFkZE9wYWNpdHk9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZTtpZihudWxsIT10LnZhbHVlJiZcIlwiIT10LnZhbHVlJiZcInN0cmluZ1wiPT10eXBlb2YgdGhpcy52YWx1ZSl7dmFyIGk9bmV3IG0odGhpcy52YWx1ZSk7aS5vayYmKGU9XCJyZ2JhKFwiK2kucitcIiwgXCIraS5nK1wiLCBcIitpLmIrXCIsIFwiK3QubnVtVmFsdWUoKStcIilcIil9cmV0dXJuIG5ldyBBLlByb3BlcnR5KHRoaXMubmFtZSxlKX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RGVmaW5pdGlvbj1mdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWUubWF0Y2goLyMoW15cXCknXCJdKykvKTtyZXR1cm4gdCYmKHQ9dFsxXSksdHx8KHQ9dGhpcy52YWx1ZSksQS5EZWZpbml0aW9uc1t0XX0sQS5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNVcmxEZWZpbml0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMudmFsdWUuaW5kZXhPZihcInVybChcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldEZpbGxTdHlsZURlZmluaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldERlZmluaXRpb24oKTtpZihudWxsIT1pJiZpLmNyZWF0ZUdyYWRpZW50KXJldHVybiBpLmNyZWF0ZUdyYWRpZW50KEEuY3R4LHQsZSk7aWYobnVsbCE9aSYmaS5jcmVhdGVQYXR0ZXJuKXtpZihpLmdldEhyZWZBdHRyaWJ1dGUoKS5oYXNWYWx1ZSgpKXt2YXIgbj1pLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIik7aT1pLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCksbi5oYXNWYWx1ZSgpJiYoaS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIsITApLnZhbHVlPW4udmFsdWUpfXJldHVybiBpLmNyZWF0ZVBhdHRlcm4oQS5jdHgsdCl9cmV0dXJuIG51bGx9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldERQST1mdW5jdGlvbih0KXtyZXR1cm4gOTZ9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFJFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5yb290RW1TaXplfSxBLlByb3BlcnR5LnByb3RvdHlwZS5nZXRFTT1mdW5jdGlvbih0KXtyZXR1cm4gQS5lbVNpemV9LEEuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzPWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0LnJlcGxhY2UoL1swLTlcXC5cXC1dL2csXCJcIil9LEEuUHJvcGVydHkucHJvdG90eXBlLmlzUGl4ZWxzPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4hMTt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuISF0Lm1hdGNoKC9weCQvKXx8ISF0Lm1hdGNoKC9eWzAtOV0rJC8pfSxBLlByb3BlcnR5LnByb3RvdHlwZS50b1BpeGVscz1mdW5jdGlvbih0LGUpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIGk9dGhpcy52YWx1ZStcIlwiO2lmKGkubWF0Y2goL3JlbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0UkVNKHQpO2lmKGkubWF0Y2goL2VtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KTtpZihpLm1hdGNoKC9leCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RU0odCkvMjtpZihpLm1hdGNoKC9weCQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpO2lmKGkubWF0Y2goL3B0JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkqKDEvNzIpO2lmKGkubWF0Y2goL3BjJC8pKXJldHVybiAxNSp0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvY20kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yLjU0O2lmKGkubWF0Y2goL21tJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCkvMjUuNDtpZihpLm1hdGNoKC9pbiQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpO2lmKGkubWF0Y2goLyUkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSpBLlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpO3ZhciBuPXRoaXMubnVtVmFsdWUoKTtyZXR1cm4gZSYmbjwxP24qQS5WaWV3UG9ydC5Db21wdXRlU2l6ZSh0KTpufSxBLlByb3BlcnR5LnByb3RvdHlwZS50b01pbGxpc2Vjb25kcz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9zJC8pPzFlMyp0aGlzLm51bVZhbHVlKCk6KHQubWF0Y2goL21zJC8pLHRoaXMubnVtVmFsdWUoKSl9LEEuUHJvcGVydHkucHJvdG90eXBlLnRvUmFkaWFucz1mdW5jdGlvbigpe2lmKCF0aGlzLmhhc1ZhbHVlKCkpcmV0dXJuIDA7dmFyIHQ9dGhpcy52YWx1ZStcIlwiO3JldHVybiB0Lm1hdGNoKC9kZWckLyk/dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCk6dC5tYXRjaCgvZ3JhZCQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMjAwKTp0Lm1hdGNoKC9yYWQkLyk/dGhpcy5udW1WYWx1ZSgpOnRoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8xODApfTt2YXIgdD17YmFzZWxpbmU6XCJhbHBoYWJldGljXCIsXCJiZWZvcmUtZWRnZVwiOlwidG9wXCIsXCJ0ZXh0LWJlZm9yZS1lZGdlXCI6XCJ0b3BcIixtaWRkbGU6XCJtaWRkbGVcIixjZW50cmFsOlwibWlkZGxlXCIsXCJhZnRlci1lZGdlXCI6XCJib3R0b21cIixcInRleHQtYWZ0ZXItZWRnZVwiOlwiYm90dG9tXCIsaWRlb2dyYXBoaWM6XCJpZGVvZ3JhcGhpY1wiLGFscGhhYmV0aWM6XCJhbHBoYWJldGljXCIsaGFuZ2luZzpcImhhbmdpbmdcIixtYXRoZW1hdGljYWw6XCJhbHBoYWJldGljXCJ9O3JldHVybiBBLlByb3BlcnR5LnByb3RvdHlwZS50b1RleHRCYXNlbGluZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dFt0aGlzLnZhbHVlXTpudWxsfSxBLkZvbnQ9bmV3IGZ1bmN0aW9uKCl7dGhpcy5TdHlsZXM9XCJub3JtYWx8aXRhbGljfG9ibGlxdWV8aW5oZXJpdFwiLHRoaXMuVmFyaWFudHM9XCJub3JtYWx8c21hbGwtY2Fwc3xpbmhlcml0XCIsdGhpcy5XZWlnaHRzPVwibm9ybWFsfGJvbGR8Ym9sZGVyfGxpZ2h0ZXJ8MTAwfDIwMHwzMDB8NDAwfDUwMHw2MDB8NzAwfDgwMHw5MDB8aW5oZXJpdFwiLHRoaXMuQ3JlYXRlRm9udD1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9bnVsbCE9YT90aGlzLlBhcnNlKGEpOnRoaXMuQ3JlYXRlRm9udChcIlwiLFwiXCIsXCJcIixcIlwiLFwiXCIsQS5jdHguZm9udCk7cmV0dXJue2ZvbnRGYW1pbHk6cz1zfHxyLmZvbnRGYW1pbHksZm9udFNpemU6bnx8ci5mb250U2l6ZSxmb250U3R5bGU6dHx8ci5mb250U3R5bGUsZm9udFdlaWdodDppfHxyLmZvbnRXZWlnaHQsZm9udFZhcmlhbnQ6ZXx8ci5mb250VmFyaWFudCx0b1N0cmluZzpmdW5jdGlvbigpe3JldHVyblt0aGlzLmZvbnRTdHlsZSx0aGlzLmZvbnRWYXJpYW50LHRoaXMuZm9udFdlaWdodCx0aGlzLmZvbnRTaXplLHRoaXMuZm9udEZhbWlseV0uam9pbihcIiBcIil9fX07dmFyIHI9dGhpczt0aGlzLlBhcnNlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT17fSxpPUEudHJpbShBLmNvbXByZXNzU3BhY2VzKHR8fFwiXCIpKS5zcGxpdChcIiBcIiksbj17Zm9udFNpemU6ITEsZm9udFN0eWxlOiExLGZvbnRXZWlnaHQ6ITEsZm9udFZhcmlhbnQ6ITF9LHM9XCJcIixhPTA7YTxpLmxlbmd0aDthKyspbi5mb250U3R5bGV8fC0xPT1yLlN0eWxlcy5pbmRleE9mKGlbYV0pP24uZm9udFZhcmlhbnR8fC0xPT1yLlZhcmlhbnRzLmluZGV4T2YoaVthXSk/bi5mb250V2VpZ2h0fHwtMT09ci5XZWlnaHRzLmluZGV4T2YoaVthXSk/bi5mb250U2l6ZT9cImluaGVyaXRcIiE9aVthXSYmKHMrPWlbYV0pOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFNpemU9aVthXS5zcGxpdChcIi9cIilbMF0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PW4uZm9udFNpemU9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFdlaWdodD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PW4uZm9udFdlaWdodD0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250VmFyaWFudD1pW2FdKSxuLmZvbnRTdHlsZT1uLmZvbnRWYXJpYW50PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRTdHlsZT1pW2FdKSxuLmZvbnRTdHlsZT0hMCk7cmV0dXJuXCJcIiE9cyYmKGUuZm9udEZhbWlseT1zKSxlfX0sQS5Ub051bWJlckFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcygodHx8XCJcIikucmVwbGFjZSgvLC9nLFwiIFwiKSkpLnNwbGl0KFwiIFwiKSxpPTA7aTxlLmxlbmd0aDtpKyspZVtpXT1wYXJzZUZsb2F0KGVbaV0pO3JldHVybiBlfSxBLlBvaW50PWZ1bmN0aW9uKHQsZSl7dGhpcy54PXQsdGhpcy55PWV9LEEuUG9pbnQucHJvdG90eXBlLmFuZ2xlVG89ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguYXRhbjIodC55LXRoaXMueSx0LngtdGhpcy54KX0sQS5Qb2ludC5wcm90b3R5cGUuYXBwbHlUcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy54KnRbMF0rdGhpcy55KnRbMl0rdFs0XSxpPXRoaXMueCp0WzFdK3RoaXMueSp0WzNdK3RbNV07dGhpcy54PWUsdGhpcy55PWl9LEEuQ3JlYXRlUG9pbnQ9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3JldHVybiBuZXcgQS5Qb2ludChlWzBdLGVbMV0pfSxBLkNyZWF0ZVBhdGg9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPUEuVG9OdW1iZXJBcnJheSh0KSxpPVtdLG49MDtuPGUubGVuZ3RoO24rPTIpaS5wdXNoKG5ldyBBLlBvaW50KGVbbl0sZVtuKzFdKSk7cmV0dXJuIGl9LEEuQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dGhpcy54MT1OdW1iZXIuTmFOLHRoaXMueTE9TnVtYmVyLk5hTix0aGlzLngyPU51bWJlci5OYU4sdGhpcy55Mj1OdW1iZXIuTmFOLHRoaXMueD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngxfSx0aGlzLnk9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55MX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLngyLXRoaXMueDF9LHRoaXMuaGVpZ2h0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueTItdGhpcy55MX0sdGhpcy5hZGRQb2ludD1mdW5jdGlvbih0LGUpe251bGwhPXQmJigoaXNOYU4odGhpcy54MSl8fGlzTmFOKHRoaXMueDIpKSYmKHRoaXMueDE9dCx0aGlzLngyPXQpLHQ8dGhpcy54MSYmKHRoaXMueDE9dCksdD50aGlzLngyJiYodGhpcy54Mj10KSksbnVsbCE9ZSYmKChpc05hTih0aGlzLnkxKXx8aXNOYU4odGhpcy55MikpJiYodGhpcy55MT1lLHRoaXMueTI9ZSksZTx0aGlzLnkxJiYodGhpcy55MT1lKSxlPnRoaXMueTImJih0aGlzLnkyPWUpKX0sdGhpcy5hZGRYPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodCxudWxsKX0sdGhpcy5hZGRZPWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQobnVsbCx0KX0sdGhpcy5hZGRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmFkZFBvaW50KHQueDEsdC55MSksdGhpcy5hZGRQb2ludCh0LngyLHQueTIpfSx0aGlzLmFkZFF1YWRyYXRpY0N1cnZlPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj10KzIvMyooaS10KSxvPWUrMi8zKihuLWUpLGw9cisxLzMqKHMtdCksaD1vKzEvMyooYS1lKTt0aGlzLmFkZEJlemllckN1cnZlKHQsZSxyLGwsbyxoLHMsYSl9LHRoaXMuYWRkQmV6aWVyQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEscixvKXt2YXIgbD1bdCxlXSxoPVtpLG5dLHU9W3MsYV0sYz1bcixvXTt0aGlzLmFkZFBvaW50KGxbMF0sbFsxXSksdGhpcy5hZGRQb2ludChjWzBdLGNbMV0pO2Zvcih2YXIgZj0wO2Y8PTE7ZisrKXt2YXIgbT1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5wb3coMS10LDMpKmxbZl0rMypNYXRoLnBvdygxLXQsMikqdCpoW2ZdKzMqKDEtdCkqTWF0aC5wb3codCwyKSp1W2ZdK01hdGgucG93KHQsMykqY1tmXX0scD02KmxbZl0tMTIqaFtmXSs2KnVbZl0sZD0tMypsW2ZdKzkqaFtmXS05KnVbZl0rMypjW2ZdLHk9MypoW2ZdLTMqbFtmXTtpZigwIT1kKXt2YXIgdj1NYXRoLnBvdyhwLDIpLTQqeSpkO2lmKCEodjwwKSl7dmFyIGc9KC1wK01hdGguc3FydCh2KSkvKDIqZCk7MDxnJiZnPDEmJigwPT1mJiZ0aGlzLmFkZFgobShnKSksMT09ZiYmdGhpcy5hZGRZKG0oZykpKTt2YXIgeD0oLXAtTWF0aC5zcXJ0KHYpKS8oMipkKTswPHgmJng8MSYmKDA9PWYmJnRoaXMuYWRkWChtKHgpKSwxPT1mJiZ0aGlzLmFkZFkobSh4KSkpfX1lbHNle2lmKDA9PXApY29udGludWU7dmFyIGI9LXkvcDswPGImJmI8MSYmKDA9PWYmJnRoaXMuYWRkWChtKGIpKSwxPT1mJiZ0aGlzLmFkZFkobShiKSkpfX19LHRoaXMuaXNQb2ludEluQm94PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMueDE8PXQmJnQ8PXRoaXMueDImJnRoaXMueTE8PWUmJmU8PXRoaXMueTJ9LHRoaXMuYWRkUG9pbnQodCxlKSx0aGlzLmFkZFBvaW50KGksbil9LEEuVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5UeXBlPXt9LHRoaXMuVHlwZS50cmFuc2xhdGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLnAueHx8MCx0aGlzLnAueXx8MCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSgtMSp0aGlzLnAueHx8MCwtMSp0aGlzLnAueXx8MCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5yb3RhdGU9ZnVuY3Rpb24odCl7dmFyIGU9QS5Ub051bWJlckFycmF5KHQpO3RoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLGVbMF0pLHRoaXMuY3g9ZVsxXXx8MCx0aGlzLmN5PWVbMl18fDAsdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zbGF0ZSh0aGlzLmN4LHRoaXMuY3kpLHQucm90YXRlKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLHQudHJhbnNsYXRlKC10aGlzLmN4LC10aGlzLmN5KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUoLTEqdGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmFuZ2xlLnRvUmFkaWFucygpO3QuYXBwbHlUcmFuc2Zvcm0oWzEsMCwwLDEsdGhpcy5wLnh8fDAsdGhpcy5wLnl8fDBdKSx0LmFwcGx5VHJhbnNmb3JtKFtNYXRoLmNvcyhlKSxNYXRoLnNpbihlKSwtTWF0aC5zaW4oZSksTWF0aC5jb3MoZSksMCwwXSksdC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSwtdGhpcy5wLnh8fDAsLXRoaXMucC55fHwwXSl9fSx0aGlzLlR5cGUuc2NhbGU9ZnVuY3Rpb24odCl7dGhpcy5wPUEuQ3JlYXRlUG9pbnQodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKHRoaXMucC54fHwxLHRoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt0LnNjYWxlKDEvdGhpcy5wLnh8fDEsMS90aGlzLnAueXx8dGhpcy5wLnh8fDEpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKFt0aGlzLnAueHx8MCwwLDAsdGhpcy5wLnl8fDAsMCwwXSl9fSx0aGlzLlR5cGUubWF0cml4PWZ1bmN0aW9uKHQpe3RoaXMubT1BLlRvTnVtYmVyQXJyYXkodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt0LnRyYW5zZm9ybSh0aGlzLm1bMF0sdGhpcy5tWzFdLHRoaXMubVsyXSx0aGlzLm1bM10sdGhpcy5tWzRdLHRoaXMubVs1XSl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLm1bMF0saT10aGlzLm1bMl0sbj10aGlzLm1bNF0scz10aGlzLm1bMV0sYT10aGlzLm1bM10scj10aGlzLm1bNV0sbz0xLyhlKigxKmEtMCpyKS1pKigxKnMtMCpyKStuKigwKnMtMCphKSk7dC50cmFuc2Zvcm0obyooMSphLTAqciksbyooMCpyLTEqcyksbyooMCpuLTEqaSksbyooMSplLTAqbiksbyooaSpyLW4qYSksbyoobipzLWUqcikpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXt0LmFwcGx5VHJhbnNmb3JtKHRoaXMubSl9fSx0aGlzLlR5cGUuU2tld0Jhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5tYXRyaXgsdGhpcy5iYXNlKHQpLHRoaXMuYW5nbGU9bmV3IEEuUHJvcGVydHkoXCJhbmdsZVwiLHQpfSx0aGlzLlR5cGUuU2tld0Jhc2UucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUubWF0cml4LHRoaXMuVHlwZS5za2V3WD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsMCxNYXRoLnRhbih0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSwxLDAsMF19LHRoaXMuVHlwZS5za2V3WC5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLlR5cGUuc2tld1k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPWUuVHlwZS5Ta2V3QmFzZSx0aGlzLmJhc2UodCksdGhpcy5tPVsxLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDAsMSwwLDBdfSx0aGlzLlR5cGUuc2tld1kucHJvdG90eXBlPW5ldyB0aGlzLlR5cGUuU2tld0Jhc2UsdGhpcy50cmFuc2Zvcm1zPVtdLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTA7ZTx0aGlzLnRyYW5zZm9ybXMubGVuZ3RoO2UrKyl0aGlzLnRyYW5zZm9ybXNbZV0uYXBwbHkodCl9LHRoaXMudW5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50cmFuc2Zvcm1zLmxlbmd0aC0xOzA8PWU7ZS0tKXRoaXMudHJhbnNmb3Jtc1tlXS51bmFwcGx5KHQpfSx0aGlzLmFwcGx5VG9Qb2ludD1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseVRvUG9pbnQodCl9O2Zvcih2YXIgaT1BLnRyaW0oQS5jb21wcmVzc1NwYWNlcyh0KSkucmVwbGFjZSgvXFwpKFthLXpBLVpdKS9nLFwiKSAkMVwiKS5yZXBsYWNlKC9cXCkoXFxzPyxcXHM/KS9nLFwiKSBcIikuc3BsaXQoL1xccyg/PVthLXpdKS8pLG49MDtuPGkubGVuZ3RoO24rKylpZihcIm5vbmVcIiE9PWlbbl0pe3ZhciBzPUEudHJpbShpW25dLnNwbGl0KFwiKFwiKVswXSksYT1pW25dLnNwbGl0KFwiKFwiKVsxXS5yZXBsYWNlKFwiKVwiLFwiXCIpLHI9dGhpcy5UeXBlW3NdO2lmKHZvaWQgMCE9PXIpe3ZhciBvPW5ldyByKGEpO28udHlwZT1zLHRoaXMudHJhbnNmb3Jtcy5wdXNoKG8pfX19LEEuQXNwZWN0UmF0aW89ZnVuY3Rpb24odCxlLGksbixzLGEscixvLGwsaCl7dmFyIHU9KGU9KGU9QS5jb21wcmVzc1NwYWNlcyhlKSkucmVwbGFjZSgvXmRlZmVyXFxzLyxcIlwiKSkuc3BsaXQoXCIgXCIpWzBdfHxcInhNaWRZTWlkXCIsYz1lLnNwbGl0KFwiIFwiKVsxXXx8XCJtZWV0XCIsZj1pL24sbT1zL2EscD1NYXRoLm1pbihmLG0pLGQ9TWF0aC5tYXgoZixtKTtcIm1lZXRcIj09YyYmKG4qPXAsYSo9cCksXCJzbGljZVwiPT1jJiYobio9ZCxhKj1kKSxsPW5ldyBBLlByb3BlcnR5KFwicmVmWFwiLGwpLGg9bmV3IEEuUHJvcGVydHkoXCJyZWZZXCIsaCksbC5oYXNWYWx1ZSgpJiZoLmhhc1ZhbHVlKCk/dC50cmFuc2xhdGUoLXAqbC50b1BpeGVscyhcInhcIiksLXAqaC50b1BpeGVscyhcInlcIikpOih1Lm1hdGNoKC9eeE1pZC8pJiYoXCJtZWV0XCI9PWMmJnA9PW18fFwic2xpY2VcIj09YyYmZD09bSkmJnQudHJhbnNsYXRlKGkvMi1uLzIsMCksdS5tYXRjaCgvWU1pZCQvKSYmKFwibWVldFwiPT1jJiZwPT1mfHxcInNsaWNlXCI9PWMmJmQ9PWYpJiZ0LnRyYW5zbGF0ZSgwLHMvMi1hLzIpLHUubWF0Y2goL154TWF4LykmJihcIm1lZXRcIj09YyYmcD09bXx8XCJzbGljZVwiPT1jJiZkPT1tKSYmdC50cmFuc2xhdGUoaS1uLDApLHUubWF0Y2goL1lNYXgkLykmJihcIm1lZXRcIj09YyYmcD09Znx8XCJzbGljZVwiPT1jJiZkPT1mKSYmdC50cmFuc2xhdGUoMCxzLWEpKSxcIm5vbmVcIj09dT90LnNjYWxlKGYsbSk6XCJtZWV0XCI9PWM/dC5zY2FsZShwLHApOlwic2xpY2VcIj09YyYmdC5zY2FsZShkLGQpLHQudHJhbnNsYXRlKG51bGw9PXI/MDotcixudWxsPT1vPzA6LW8pfSxBLkVsZW1lbnQ9e30sQS5FbXB0eVByb3BlcnR5PW5ldyBBLlByb3BlcnR5KFwiRU1QVFlcIixcIlwiKSxBLkVsZW1lbnQuRWxlbWVudEJhc2U9ZnVuY3Rpb24oYSl7dGhpcy5hdHRyaWJ1dGVzPXt9LHRoaXMuc3R5bGVzPXt9LHRoaXMuc3R5bGVzU3BlY2lmaWNpdHk9e30sdGhpcy5jaGlsZHJlbj1bXSx0aGlzLmF0dHJpYnV0ZT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlc1t0XTtyZXR1cm4gbnVsbCE9aT9pOigxPT1lJiYoaT1uZXcgQS5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuYXR0cmlidXRlc1t0XT1pKSxpfHxBLkVtcHR5UHJvcGVydHkpfSx0aGlzLmdldEhyZWZBdHRyaWJ1dGU9ZnVuY3Rpb24oKXtmb3IodmFyIHQgaW4gdGhpcy5hdHRyaWJ1dGVzKWlmKFwiaHJlZlwiPT10fHx0Lm1hdGNoKC86aHJlZiQvKSlyZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBBLkVtcHR5UHJvcGVydHl9LHRoaXMuc3R5bGU9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGVzW3RdO2lmKG51bGwhPW4pcmV0dXJuIG47dmFyIHM9dGhpcy5hdHRyaWJ1dGUodCk7aWYobnVsbCE9cyYmcy5oYXNWYWx1ZSgpKXJldHVybiB0aGlzLnN0eWxlc1t0XT1zO2lmKDEhPWkpe3ZhciBhPXRoaXMucGFyZW50O2lmKG51bGwhPWEpe3ZhciByPWEuc3R5bGUodCk7aWYobnVsbCE9ciYmci5oYXNWYWx1ZSgpKXJldHVybiByfX1yZXR1cm4gMT09ZSYmKG49bmV3IEEuUHJvcGVydHkodCxcIlwiKSx0aGlzLnN0eWxlc1t0XT1uKSxufHxBLkVtcHR5UHJvcGVydHl9LHRoaXMucmVuZGVyPWZ1bmN0aW9uKHQpe2lmKFwibm9uZVwiIT10aGlzLnN0eWxlKFwiZGlzcGxheVwiKS52YWx1ZSYmXCJoaWRkZW5cIiE9dGhpcy5zdHlsZShcInZpc2liaWxpdHlcIikudmFsdWUpe2lmKHQuc2F2ZSgpLHRoaXMuc3R5bGUoXCJtYXNrXCIpLmhhc1ZhbHVlKCkpe3ZhciBlPXRoaXMuc3R5bGUoXCJtYXNrXCIpLmdldERlZmluaXRpb24oKTtudWxsIT1lJiZlLmFwcGx5KHQsdGhpcyl9ZWxzZSBpZih0aGlzLnN0eWxlKFwiZmlsdGVyXCIpLmhhc1ZhbHVlKCkpe3ZhciBpPXRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWkmJmkuYXBwbHkodCx0aGlzKX1lbHNlIHRoaXMuc2V0Q29udGV4dCh0KSx0aGlzLnJlbmRlckNoaWxkcmVuKHQpLHRoaXMuY2xlYXJDb250ZXh0KHQpO3QucmVzdG9yZSgpfX0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQpe30sdGhpcy5jbGVhckNvbnRleHQ9ZnVuY3Rpb24odCl7fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMuY2hpbGRyZW5bZV0ucmVuZGVyKHQpfSx0aGlzLmFkZENoaWxkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dDtlJiYoaT1BLkNyZWF0ZUVsZW1lbnQodCkpLGkucGFyZW50PXRoaXMsXCJ0aXRsZVwiIT1pLnR5cGUmJnRoaXMuY2hpbGRyZW4ucHVzaChpKX0sdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIEEuU3R5bGVzKWlmKFwiQFwiIT10WzBdJiZmKGEsdCkpe3ZhciBlPUEuU3R5bGVzW3RdLGk9QS5TdHlsZXNTcGVjaWZpY2l0eVt0XTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKXt2YXIgcz10aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dO3ZvaWQgMD09PXMmJihzPVwiMDAwXCIpLHM8aSYmKHRoaXMuc3R5bGVzW25dPWVbbl0sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eVtuXT1pKX19fTt2YXIgdCxlPW5ldyBSZWdFeHAoXCJeW0EtWi1dKyRcIik7aWYobnVsbCE9YSYmMT09YS5ub2RlVHlwZSl7Zm9yKHZhciBpPTA7aTxhLmF0dHJpYnV0ZXMubGVuZ3RoO2krKyl7dmFyIG49YS5hdHRyaWJ1dGVzW2ldLHM9KHQ9bi5ub2RlTmFtZSxlLnRlc3QodCk/dC50b0xvd2VyQ2FzZSgpOnQpO3RoaXMuYXR0cmlidXRlc1tzXT1uZXcgQS5Qcm9wZXJ0eShzLG4udmFsdWUpfWlmKHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpLHRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikuaGFzVmFsdWUoKSl7dmFyIHI9dGhpcy5hdHRyaWJ1dGUoXCJzdHlsZVwiKS52YWx1ZS5zcGxpdChcIjtcIik7Zm9yKGk9MDtpPHIubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0ocltpXSkpe3ZhciBvPXJbaV0uc3BsaXQoXCI6XCIpLGw9QS50cmltKG9bMF0pLGg9QS50cmltKG9bMV0pO3RoaXMuc3R5bGVzW2xdPW5ldyBBLlByb3BlcnR5KGwsaCl9fWZvcih0aGlzLmF0dHJpYnV0ZShcImlkXCIpLmhhc1ZhbHVlKCkmJm51bGw9PUEuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV0mJihBLkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdPXRoaXMpLGk9MDtpPGEuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKXt2YXIgdT1hLmNoaWxkTm9kZXNbaV07aWYoMT09dS5ub2RlVHlwZSYmdGhpcy5hZGRDaGlsZCh1LCEwKSx0aGlzLmNhcHR1cmVUZXh0Tm9kZXMmJigzPT11Lm5vZGVUeXBlfHw0PT11Lm5vZGVUeXBlKSl7dmFyIGM9dS52YWx1ZXx8dS50ZXh0fHx1LnRleHRDb250ZW50fHxcIlwiO1wiXCIhPUEuY29tcHJlc3NTcGFjZXMoYykmJnRoaXMuYWRkQ2hpbGQobmV3IEEuRWxlbWVudC50c3Bhbih1KSwhMSl9fX19LEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY3VsYXRlT3BhY2l0eT1mdW5jdGlvbigpe2Zvcih2YXIgdD0xLGU9dGhpcztudWxsIT1lOyl7dmFyIGk9ZS5zdHlsZShcIm9wYWNpdHlcIiwhMSwhMCk7aS5oYXNWYWx1ZSgpJiYodCo9aS5udW1WYWx1ZSgpKSxlPWUucGFyZW50fXJldHVybiB0fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCxlKXtpZighZSl7dmFyIGk7aWYodGhpcy5zdHlsZShcImZpbGxcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcImZpbGxcIikuZ2V0RmlsbFN0eWxlRGVmaW5pdGlvbih0aGlzLHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikpKSYmKHQuZmlsbFN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcImZpbGxcIikuaGFzVmFsdWUoKSl7dmFyIG47XCJjdXJyZW50Q29sb3JcIj09KG49dGhpcy5zdHlsZShcImZpbGxcIikpLnZhbHVlJiYobi52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1uLnZhbHVlJiYodC5maWxsU3R5bGU9XCJub25lXCI9PW4udmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6bi52YWx1ZSl9aWYodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYobj0obj1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0LmZpbGxTdHlsZSkpLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcImZpbGwtb3BhY2l0eVwiKSksdC5maWxsU3R5bGU9bi52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZVwiKS5pc1VybERlZmluaXRpb24oKSludWxsIT0oaT10aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpKSYmKHQuc3Ryb2tlU3R5bGU9aSk7ZWxzZSBpZih0aGlzLnN0eWxlKFwic3Ryb2tlXCIpLmhhc1ZhbHVlKCkpe3ZhciBzO1wiY3VycmVudENvbG9yXCI9PShzPXRoaXMuc3R5bGUoXCJzdHJva2VcIikpLnZhbHVlJiYocy52YWx1ZT10aGlzLnN0eWxlKFwiY29sb3JcIikudmFsdWUpLFwiaW5oZXJpdFwiIT1zLnZhbHVlJiYodC5zdHJva2VTdHlsZT1cIm5vbmVcIj09cy52YWx1ZT9cInJnYmEoMCwwLDAsMClcIjpzLnZhbHVlKX1pZih0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikuaGFzVmFsdWUoKSYmKHM9KHM9bmV3IEEuUHJvcGVydHkoXCJzdHJva2VcIix0LnN0cm9rZVN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwic3Ryb2tlLW9wYWNpdHlcIikpLHQuc3Ryb2tlU3R5bGU9cy52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS5oYXNWYWx1ZSgpKXt2YXIgYT10aGlzLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIpLnRvUGl4ZWxzKCk7dC5saW5lV2lkdGg9MD09YT8uMDAxOmF9aWYodGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVDYXA9dGhpcy5zdHlsZShcInN0cm9rZS1saW5lY2FwXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLmhhc1ZhbHVlKCkmJih0LmxpbmVKb2luPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWpvaW5cIikudmFsdWUpLHRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS5oYXNWYWx1ZSgpJiYodC5taXRlckxpbWl0PXRoaXMuc3R5bGUoXCJzdHJva2UtbWl0ZXJsaW1pdFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLmhhc1ZhbHVlKCkmJih0LnBhaW50T3JkZXI9dGhpcy5zdHlsZShcInBhaW50LW9yZGVyXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS5oYXNWYWx1ZSgpJiZcIm5vbmVcIiE9dGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpe3ZhciByPUEuVG9OdW1iZXJBcnJheSh0aGlzLnN0eWxlKFwic3Ryb2tlLWRhc2hhcnJheVwiKS52YWx1ZSk7dm9pZCAwIT09dC5zZXRMaW5lRGFzaD90LnNldExpbmVEYXNoKHIpOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2g/dC53ZWJraXRMaW5lRGFzaD1yOnZvaWQgMD09PXQubW96RGFzaHx8MT09ci5sZW5ndGgmJjA9PXJbMF18fCh0Lm1vekRhc2g9cik7dmFyIG89dGhpcy5zdHlsZShcInN0cm9rZS1kYXNob2Zmc2V0XCIpLnRvUGl4ZWxzKCk7dm9pZCAwIT09dC5saW5lRGFzaE9mZnNldD90LmxpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC53ZWJraXRMaW5lRGFzaE9mZnNldD90LndlYmtpdExpbmVEYXNoT2Zmc2V0PW86dm9pZCAwIT09dC5tb3pEYXNoT2Zmc2V0JiYodC5tb3pEYXNoT2Zmc2V0PW8pfX1pZih2b2lkIDAhPT10LmZvbnQpe3QuZm9udD1BLkZvbnQuQ3JlYXRlRm9udCh0aGlzLnN0eWxlKFwiZm9udC1zdHlsZVwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC12YXJpYW50XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXdlaWdodFwiKS52YWx1ZSx0aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLmhhc1ZhbHVlKCk/dGhpcy5zdHlsZShcImZvbnQtc2l6ZVwiKS50b1BpeGVscygpK1wicHhcIjpcIlwiLHRoaXMuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZSkudG9TdHJpbmcoKTt2YXIgbD10aGlzLnN0eWxlKFwiZm9udC1zaXplXCIsITEsITEpO2wuaXNQaXhlbHMoKSYmKEEuZW1TaXplPWwudG9QaXhlbHMoKSl9aWYodGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiZuZXcgQS5UcmFuc2Zvcm0odGhpcy5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkuYXBwbHkodCksdGhpcy5zdHlsZShcImNsaXAtcGF0aFwiLCExLCEwKS5oYXNWYWx1ZSgpKXt2YXIgaD10aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmdldERlZmluaXRpb24oKTtudWxsIT1oJiZoLmFwcGx5KHQpfXQuZ2xvYmFsQWxwaGE9dGhpcy5jYWxjdWxhdGVPcGFjaXR5KCl9fSxBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZ0LmJlZ2luUGF0aCgpLG5ldyBBLkJvdW5kaW5nQm94fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMucGF0aCh0KSxBLk1vdXNlLmNoZWNrUGF0aCh0aGlzLHQpLFwiXCIhPXQuZmlsbFN0eWxlJiYoXCJpbmhlcml0XCIhPXRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWVPckRlZmF1bHQoXCJpbmhlcml0XCIpP3QuZmlsbCh0aGlzLnN0eWxlKFwiZmlsbC1ydWxlXCIpLnZhbHVlKTp0LmZpbGwoKSksXCJcIiE9dC5zdHJva2VTdHlsZSYmdC5zdHJva2UoKTt2YXIgZT10aGlzLmdldE1hcmtlcnMoKTtpZihudWxsIT1lKXtpZih0aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmlzVXJsRGVmaW5pdGlvbigpJiYoaT10aGlzLnN0eWxlKFwibWFya2VyLXN0YXJ0XCIpLmdldERlZmluaXRpb24oKSkucmVuZGVyKHQsZVswXVswXSxlWzBdWzFdKSx0aGlzLnN0eWxlKFwibWFya2VyLW1pZFwiKS5pc1VybERlZmluaXRpb24oKSlmb3IodmFyIGk9dGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuZ2V0RGVmaW5pdGlvbigpLG49MTtuPGUubGVuZ3RoLTE7bisrKWkucmVuZGVyKHQsZVtuXVswXSxlW25dWzFdKTt0aGlzLnN0eWxlKFwibWFya2VyLWVuZFwiKS5pc1VybERlZmluaXRpb24oKSYmKGk9dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlW2UubGVuZ3RoLTFdWzBdLGVbZS5sZW5ndGgtMV1bMV0pfX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGgoKX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fSxBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN2Zz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZUNsZWFyQ29udGV4dD10aGlzLmNsZWFyQ29udGV4dCx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VDbGVhckNvbnRleHQodCksQS5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCl9LHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXtpZih0LnN0cm9rZVN0eWxlPVwicmdiYSgwLDAsMCwwKVwiLHQubGluZUNhcD1cImJ1dHRcIix0LmxpbmVKb2luPVwibWl0ZXJcIix0Lm1pdGVyTGltaXQ9NCx0LmNhbnZhcy5zdHlsZSYmdm9pZCAwIT09dC5mb250JiZ2b2lkIDAhPT11LmdldENvbXB1dGVkU3R5bGUpe3QuZm9udD11LmdldENvbXB1dGVkU3R5bGUodC5jYW52YXMpLmdldFByb3BlcnR5VmFsdWUoXCJmb250XCIpO3ZhciBlPW5ldyBBLlByb3BlcnR5KFwiZm9udFNpemVcIixBLkZvbnQuUGFyc2UodC5mb250KS5mb250U2l6ZSk7ZS5oYXNWYWx1ZSgpJiYoQS5yb290RW1TaXplPUEuZW1TaXplPWUudG9QaXhlbHMoXCJ5XCIpKX10aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4XCIsITApLnZhbHVlPTApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPTApLHQudHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSk7dmFyIGk9QS5WaWV3UG9ydC53aWR0aCgpLG49QS5WaWV3UG9ydC5oZWlnaHQoKTtpZih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPVwiMTAwJVwiKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHZvaWQgMD09PXRoaXMucm9vdCl7aT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTt2YXIgcz0wLGE9MDt0aGlzLmF0dHJpYnV0ZShcInJlZlhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLmhhc1ZhbHVlKCkmJihzPS10aGlzLmF0dHJpYnV0ZShcInJlZlhcIikudG9QaXhlbHMoXCJ4XCIpLGE9LXRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS50b1BpeGVscyhcInlcIikpLFwidmlzaWJsZVwiIT10aGlzLmF0dHJpYnV0ZShcIm92ZXJmbG93XCIpLnZhbHVlT3JEZWZhdWx0KFwiaGlkZGVuXCIpJiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzLGEpLHQubGluZVRvKGksYSksdC5saW5lVG8oaSxuKSx0LmxpbmVUbyhzLG4pLHQuY2xvc2VQYXRoKCksdC5jbGlwKCkpfWlmKEEuVmlld1BvcnQuU2V0Q3VycmVudChpLG4pLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS5oYXNWYWx1ZSgpKXt2YXIgcj1BLlRvTnVtYmVyQXJyYXkodGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxvPXJbMF0sbD1yWzFdO2k9clsyXSxuPXJbM10sQS5Bc3BlY3RSYXRpbyh0LHRoaXMuYXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiKS52YWx1ZSxBLlZpZXdQb3J0LndpZHRoKCksaSxBLlZpZXdQb3J0LmhlaWdodCgpLG4sbyxsLHRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS52YWx1ZSx0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLEEuVmlld1BvcnQuUmVtb3ZlQ3VycmVudCgpLEEuVmlld1BvcnQuU2V0Q3VycmVudChyWzJdLHJbM10pfX19LEEuRWxlbWVudC5zdmcucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQucmVjdD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxyPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpO2lmKHRoaXMuYXR0cmlidXRlKFwicnhcIikuaGFzVmFsdWUoKSYmIXRoaXMuYXR0cmlidXRlKFwicnlcIikuaGFzVmFsdWUoKSYmKHI9YSksdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYoYT1yKSxhPU1hdGgubWluKGEsbi8yKSxyPU1hdGgubWluKHIscy8yKSxudWxsIT10KXt2YXIgbz0oTWF0aC5zcXJ0KDIpLTEpLzMqNDt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrYSxpKSx0LmxpbmVUbyhlK24tYSxpKSx0LmJlemllckN1cnZlVG8oZStuLWErbyphLGksZStuLGkrci1vKnIsZStuLGkrciksdC5saW5lVG8oZStuLGkrcy1yKSx0LmJlemllckN1cnZlVG8oZStuLGkrcy1yK28qcixlK24tYStvKmEsaStzLGUrbi1hLGkrcyksdC5saW5lVG8oZSthLGkrcyksdC5iZXppZXJDdXJ2ZVRvKGUrYS1vKmEsaStzLGUsaStzLXIrbypyLGUsaStzLXIpLHQubGluZVRvKGUsaStyKSx0LmJlemllckN1cnZlVG8oZSxpK3ItbypyLGUrYS1vKmEsaSxlK2EsaSksdC5jbG9zZVBhdGgoKX1yZXR1cm4gbmV3IEEuQm91bmRpbmdCb3goZSxpLGUrbixpK3MpfX0sQS5FbGVtZW50LnJlY3QucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5jaXJjbGU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyXCIpLnRvUGl4ZWxzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQuYXJjKGUsaSxuLDAsMipNYXRoLlBJLCExKSx0LmNsb3NlUGF0aCgpKSxuZXcgQS5Cb3VuZGluZ0JveChlLW4saS1uLGUrbixpK24pfX0sQS5FbGVtZW50LmNpcmNsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmVsbGlwc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT0oTWF0aC5zcXJ0KDIpLTEpLzMqNCxpPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIikscz10aGlzLmF0dHJpYnV0ZShcImN4XCIpLnRvUGl4ZWxzKFwieFwiKSxhPXRoaXMuYXR0cmlidXRlKFwiY3lcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBudWxsIT10JiYodC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhzK2ksYSksdC5iZXppZXJDdXJ2ZVRvKHMraSxhK2UqbixzK2UqaSxhK24scyxhK24pLHQuYmV6aWVyQ3VydmVUbyhzLWUqaSxhK24scy1pLGErZSpuLHMtaSxhKSx0LmJlemllckN1cnZlVG8ocy1pLGEtZSpuLHMtZSppLGEtbixzLGEtbiksdC5iZXppZXJDdXJ2ZVRvKHMrZSppLGEtbixzK2ksYS1lKm4scytpLGEpLHQuY2xvc2VQYXRoKCkpLG5ldyBBLkJvdW5kaW5nQm94KHMtaSxhLW4scytpLGErbil9fSxBLkVsZW1lbnQuZWxsaXBzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0UG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuW25ldyBBLlBvaW50KHRoaXMuYXR0cmlidXRlKFwieDFcIikudG9QaXhlbHMoXCJ4XCIpLHRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpKSxuZXcgQS5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngyXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKSldfSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRQb2ludHMoKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZVswXS54LGVbMF0ueSksdC5saW5lVG8oZVsxXS54LGVbMV0ueSkpLG5ldyBBLkJvdW5kaW5nQm94KGVbMF0ueCxlWzBdLnksZVsxXS54LGVbMV0ueSl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnRzKCksZT10WzBdLmFuZ2xlVG8odFsxXSk7cmV0dXJuW1t0WzBdLGVdLFt0WzFdLGVdXX19LEEuRWxlbWVudC5saW5lLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxBLkVsZW1lbnQucG9seWxpbmU9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMucG9pbnRzPUEuQ3JlYXRlUGF0aCh0aGlzLmF0dHJpYnV0ZShcInBvaW50c1wiKS52YWx1ZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPW5ldyBBLkJvdW5kaW5nQm94KHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSk7bnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSk7Zm9yKHZhciBpPTE7aTx0aGlzLnBvaW50cy5sZW5ndGg7aSsrKWUuYWRkUG9pbnQodGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KSxudWxsIT10JiZ0LmxpbmVUbyh0aGlzLnBvaW50c1tpXS54LHRoaXMucG9pbnRzW2ldLnkpO3JldHVybiBlfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wO2U8dGhpcy5wb2ludHMubGVuZ3RoLTE7ZSsrKXQucHVzaChbdGhpcy5wb2ludHNbZV0sdGhpcy5wb2ludHNbZV0uYW5nbGVUbyh0aGlzLnBvaW50c1tlKzFdKV0pO3JldHVybiAwPHQubGVuZ3RoJiZ0LnB1c2goW3RoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXSx0W3QubGVuZ3RoLTFdWzFdXSksdH19LEEuRWxlbWVudC5wb2x5bGluZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsQS5FbGVtZW50LnBvbHlnb249ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5wb2x5bGluZSx0aGlzLmJhc2UodCksdGhpcy5iYXNlUGF0aD10aGlzLnBhdGgsdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYmFzZVBhdGgodCk7cmV0dXJuIG51bGwhPXQmJih0LmxpbmVUbyh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpLHQuY2xvc2VQYXRoKCkpLGV9fSxBLkVsZW1lbnQucG9seWdvbi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wb2x5bGluZSxBLkVsZW1lbnQucGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJkXCIpLnZhbHVlO2U9ZS5yZXBsYWNlKC8sL2dtLFwiIFwiKTtmb3IodmFyIGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkoW15cXHNdKS9nbSxcIiQxICQyXCIpO2ZvcihlPShlPWUucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sXCIkMSAkMlwiKSkucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLFwiJDEgJDJcIiksaT0wO2k8MjtpKyspZT1lLnJlcGxhY2UoLyhcXC5bMC05XSopKFxcLikvZ20sXCIkMSAkMlwiKTtlPWUucmVwbGFjZSgvKFtBYV0oXFxzK1swLTldKyl7M30pXFxzKyhbMDFdKVxccyooWzAxXSkvZ20sXCIkMSAkMyAkNCBcIiksZT1BLmNvbXByZXNzU3BhY2VzKGUpLGU9QS50cmltKGUpLHRoaXMuUGF0aFBhcnNlcj1uZXcgZnVuY3Rpb24odCl7dGhpcy50b2tlbnM9dC5zcGxpdChcIiBcIiksdGhpcy5yZXNldD1mdW5jdGlvbigpe3RoaXMuaT0tMSx0aGlzLmNvbW1hbmQ9XCJcIix0aGlzLnByZXZpb3VzQ29tbWFuZD1cIlwiLHRoaXMuc3RhcnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmNvbnRyb2w9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLmN1cnJlbnQ9bmV3IEEuUG9pbnQoMCwwKSx0aGlzLnBvaW50cz1bXSx0aGlzLmFuZ2xlcz1bXX0sdGhpcy5pc0VuZD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmk+PXRoaXMudG9rZW5zLmxlbmd0aC0xfSx0aGlzLmlzQ29tbWFuZE9yRW5kPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmlzRW5kKCl8fG51bGwhPXRoaXMudG9rZW5zW3RoaXMuaSsxXS5tYXRjaCgvXltBLVphLXpdJC8pfSx0aGlzLmlzUmVsYXRpdmVDb21tYW5kPWZ1bmN0aW9uKCl7c3dpdGNoKHRoaXMuY29tbWFuZCl7Y2FzZVwibVwiOmNhc2VcImxcIjpjYXNlXCJoXCI6Y2FzZVwidlwiOmNhc2VcImNcIjpjYXNlXCJzXCI6Y2FzZVwicVwiOmNhc2VcInRcIjpjYXNlXCJhXCI6Y2FzZVwielwiOnJldHVybiEwfXJldHVybiExfSx0aGlzLmdldFRva2VuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaSsrLHRoaXMudG9rZW5zW3RoaXMuaV19LHRoaXMuZ2V0U2NhbGFyPWZ1bmN0aW9uKCl7cmV0dXJuIHBhcnNlRmxvYXQodGhpcy5nZXRUb2tlbigpKX0sdGhpcy5uZXh0Q29tbWFuZD1mdW5jdGlvbigpe3RoaXMucHJldmlvdXNDb21tYW5kPXRoaXMuY29tbWFuZCx0aGlzLmNvbW1hbmQ9dGhpcy5nZXRUb2tlbigpfSx0aGlzLmdldFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9bmV3IEEuUG9pbnQodGhpcy5nZXRTY2FsYXIoKSx0aGlzLmdldFNjYWxhcigpKTtyZXR1cm4gdGhpcy5tYWtlQWJzb2x1dGUodCl9LHRoaXMuZ2V0QXNDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50KCk7cmV0dXJuIHRoaXMuY29udHJvbD10fSx0aGlzLmdldEFzQ3VycmVudFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmN1cnJlbnQ9dH0sdGhpcy5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQ9ZnVuY3Rpb24oKXtyZXR1cm5cImNcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJzXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwicVwiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInRcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKT90aGlzLmN1cnJlbnQ6bmV3IEEuUG9pbnQoMip0aGlzLmN1cnJlbnQueC10aGlzLmNvbnRyb2wueCwyKnRoaXMuY3VycmVudC55LXRoaXMuY29udHJvbC55KX0sdGhpcy5tYWtlQWJzb2x1dGU9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuaXNSZWxhdGl2ZUNvbW1hbmQoKSYmKHQueCs9dGhpcy5jdXJyZW50LngsdC55Kz10aGlzLmN1cnJlbnQueSksdH0sdGhpcy5hZGRNYXJrZXI9ZnVuY3Rpb24odCxlLGkpe251bGwhPWkmJjA8dGhpcy5hbmdsZXMubGVuZ3RoJiZudWxsPT10aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV0mJih0aGlzLmFuZ2xlc1t0aGlzLmFuZ2xlcy5sZW5ndGgtMV09dGhpcy5wb2ludHNbdGhpcy5wb2ludHMubGVuZ3RoLTFdLmFuZ2xlVG8oaSkpLHRoaXMuYWRkTWFya2VyQW5nbGUodCxudWxsPT1lP251bGw6ZS5hbmdsZVRvKHQpKX0sdGhpcy5hZGRNYXJrZXJBbmdsZT1mdW5jdGlvbih0LGUpe3RoaXMucG9pbnRzLnB1c2godCksdGhpcy5hbmdsZXMucHVzaChlKX0sdGhpcy5nZXRNYXJrZXJQb2ludHM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludHN9LHRoaXMuZ2V0TWFya2VyQW5nbGVzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDx0aGlzLmFuZ2xlcy5sZW5ndGg7dCsrKWlmKG51bGw9PXRoaXMuYW5nbGVzW3RdKWZvcih2YXIgZT10KzE7ZTx0aGlzLmFuZ2xlcy5sZW5ndGg7ZSsrKWlmKG51bGwhPXRoaXMuYW5nbGVzW2VdKXt0aGlzLmFuZ2xlc1t0XT10aGlzLmFuZ2xlc1tlXTticmVha31yZXR1cm4gdGhpcy5hbmdsZXN9fShlKSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5QYXRoUGFyc2VyO2UucmVzZXQoKTt2YXIgaT1uZXcgQS5Cb3VuZGluZ0JveDtmb3IobnVsbCE9dCYmdC5iZWdpblBhdGgoKTshZS5pc0VuZCgpOylzd2l0Y2goZS5uZXh0Q29tbWFuZCgpLGUuY29tbWFuZCl7Y2FzZVwiTVwiOmNhc2VcIm1cIjp2YXIgbj1lLmdldEFzQ3VycmVudFBvaW50KCk7Zm9yKGUuYWRkTWFya2VyKG4pLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5tb3ZlVG8obi54LG4ueSksZS5zdGFydD1lLmN1cnJlbnQ7IWUuaXNDb21tYW5kT3JFbmQoKTspbj1lLmdldEFzQ3VycmVudFBvaW50KCksZS5hZGRNYXJrZXIobixlLnN0YXJ0KSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpO2JyZWFrO2Nhc2VcIkxcIjpjYXNlXCJsXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIHM9ZS5jdXJyZW50O249ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKG4scyksaS5hZGRQb2ludChuLngsbi55KSxudWxsIT10JiZ0LmxpbmVUbyhuLngsbi55KX1icmVhaztjYXNlXCJIXCI6Y2FzZVwiaFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3ZhciBhPW5ldyBBLlBvaW50KChlLmlzUmVsYXRpdmVDb21tYW5kKCk/ZS5jdXJyZW50Lng6MCkrZS5nZXRTY2FsYXIoKSxlLmN1cnJlbnQueSk7ZS5hZGRNYXJrZXIoYSxlLmN1cnJlbnQpLGUuY3VycmVudD1hLGkuYWRkUG9pbnQoZS5jdXJyZW50LngsZS5jdXJyZW50LnkpLG51bGwhPXQmJnQubGluZVRvKGUuY3VycmVudC54LGUuY3VycmVudC55KX1icmVhaztjYXNlXCJWXCI6Y2FzZVwidlwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspYT1uZXcgQS5Qb2ludChlLmN1cnJlbnQueCwoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC55OjApK2UuZ2V0U2NhbGFyKCkpLGUuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSk7YnJlYWs7Y2FzZVwiQ1wiOmNhc2VcImNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcj1lLmN1cnJlbnQsbz1lLmdldFBvaW50KCksbD1lLmdldEFzQ29udHJvbFBvaW50KCksaD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIoaCxsLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGwueCxsLnksaC54LGgueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksbC54LGwueSxoLngsaC55KX1icmVhaztjYXNlXCJTXCI6Y2FzZVwic1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbz1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxvKSxpLmFkZEJlemllckN1cnZlKHIueCxyLnksby54LG8ueSxsLngsbC55LGgueCxoLnkpLG51bGwhPXQmJnQuYmV6aWVyQ3VydmVUbyhvLngsby55LGwueCxsLnksaC54LGgueSk7YnJlYWs7Y2FzZVwiUVwiOmNhc2VcInFcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXI9ZS5jdXJyZW50LGw9ZS5nZXRBc0NvbnRyb2xQb2ludCgpLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJUXCI6Y2FzZVwidFwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspcj1lLmN1cnJlbnQsbD1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGUuY29udHJvbD1sLGg9ZS5nZXRBc0N1cnJlbnRQb2ludCgpLGUuYWRkTWFya2VyKGgsbCxsKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksbC54LGwueSxoLngsaC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8obC54LGwueSxoLngsaC55KTticmVhaztjYXNlXCJBXCI6Y2FzZVwiYVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50O3ZhciB1PWUuZ2V0U2NhbGFyKCksYz1lLmdldFNjYWxhcigpLGY9ZS5nZXRTY2FsYXIoKSooTWF0aC5QSS8xODApLG09ZS5nZXRTY2FsYXIoKSxwPWUuZ2V0U2NhbGFyKCksZD0oaD1lLmdldEFzQ3VycmVudFBvaW50KCksbmV3IEEuUG9pbnQoTWF0aC5jb3MoZikqKHIueC1oLngpLzIrTWF0aC5zaW4oZikqKHIueS1oLnkpLzIsLU1hdGguc2luKGYpKihyLngtaC54KS8yK01hdGguY29zKGYpKihyLnktaC55KS8yKSkseT1NYXRoLnBvdyhkLngsMikvTWF0aC5wb3codSwyKStNYXRoLnBvdyhkLnksMikvTWF0aC5wb3coYywyKTsxPHkmJih1Kj1NYXRoLnNxcnQoeSksYyo9TWF0aC5zcXJ0KHkpKTt2YXIgdj0obT09cD8tMToxKSpNYXRoLnNxcnQoKE1hdGgucG93KHUsMikqTWF0aC5wb3coYywyKS1NYXRoLnBvdyh1LDIpKk1hdGgucG93KGQueSwyKS1NYXRoLnBvdyhjLDIpKk1hdGgucG93KGQueCwyKSkvKE1hdGgucG93KHUsMikqTWF0aC5wb3coZC55LDIpK01hdGgucG93KGMsMikqTWF0aC5wb3coZC54LDIpKSk7aXNOYU4odikmJih2PTApO3ZhciBnPW5ldyBBLlBvaW50KHYqdSpkLnkvYyx2Ki1jKmQueC91KSx4PW5ldyBBLlBvaW50KChyLngraC54KS8yK01hdGguY29zKGYpKmcueC1NYXRoLnNpbihmKSpnLnksKHIueStoLnkpLzIrTWF0aC5zaW4oZikqZy54K01hdGguY29zKGYpKmcueSksYj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRbMF0sMikrTWF0aC5wb3codFsxXSwyKSl9LFA9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzBdK3RbMV0qZVsxXSkvKGIodCkqYihlKSl9LEU9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzFdPHRbMV0qZVswXT8tMToxKSpNYXRoLmFjb3MoUCh0LGUpKX0sdz1FKFsxLDBdLFsoZC54LWcueCkvdSwoZC55LWcueSkvY10pLEI9WyhkLngtZy54KS91LChkLnktZy55KS9jXSxDPVsoLWQueC1nLngpL3UsKC1kLnktZy55KS9jXSxUPUUoQixDKTtQKEIsQyk8PS0xJiYoVD1NYXRoLlBJKSwxPD1QKEIsQykmJihUPTApO3ZhciBWPTEtcD8xOi0xLE09dytWKihULzIpLFM9bmV3IEEuUG9pbnQoeC54K3UqTWF0aC5jb3MoTSkseC55K2MqTWF0aC5zaW4oTSkpO2lmKGUuYWRkTWFya2VyQW5nbGUoUyxNLVYqTWF0aC5QSS8yKSxlLmFkZE1hcmtlckFuZ2xlKGgsTS1WKk1hdGguUEkpLGkuYWRkUG9pbnQoaC54LGgueSksbnVsbCE9dCl7UD1jPHU/dTpjO3ZhciBrPWM8dT8xOnUvYyxEPWM8dT9jL3U6MTt0LnRyYW5zbGF0ZSh4LngseC55KSx0LnJvdGF0ZShmKSx0LnNjYWxlKGssRCksdC5hcmMoMCwwLFAsdyx3K1QsMS1wKSx0LnNjYWxlKDEvaywxL0QpLHQucm90YXRlKC1mKSx0LnRyYW5zbGF0ZSgteC54LC14LnkpfX1icmVhaztjYXNlXCJaXCI6Y2FzZVwielwiOm51bGwhPXQmJmkueDEhPT1pLngyJiZpLnkxIT09aS55MiYmdC5jbG9zZVBhdGgoKSxlLmN1cnJlbnQ9ZS5zdGFydH1yZXR1cm4gaX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJQb2ludHMoKSxlPXRoaXMuUGF0aFBhcnNlci5nZXRNYXJrZXJBbmdsZXMoKSxpPVtdLG49MDtuPHQubGVuZ3RoO24rKylpLnB1c2goW3Rbbl0sZVtuXV0pO3JldHVybiBpfX0sQS5FbGVtZW50LnBhdGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEEuRWxlbWVudC5wYXR0ZXJuPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY3JlYXRlUGF0dGVybj1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIsITApLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIsITApLHM9bmV3IEEuRWxlbWVudC5zdmc7cy5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEEuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxzLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLGkrXCJweFwiKSxzLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBBLlByb3BlcnR5KFwiaGVpZ2h0XCIsbitcInB4XCIpLHMuYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIikudmFsdWUpLHMuY2hpbGRyZW49dGhpcy5jaGlsZHJlbjt2YXIgYT1wKCk7YS53aWR0aD1pLGEuaGVpZ2h0PW47dmFyIHI9YS5nZXRDb250ZXh0KFwiMmRcIik7dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkmJnRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZyLnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIsITApLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiwhMCkpO2Zvcih2YXIgbz0tMTtvPD0xO28rKylmb3IodmFyIGw9LTE7bDw9MTtsKyspci5zYXZlKCkscy5hdHRyaWJ1dGVzLng9bmV3IEEuUHJvcGVydHkoXCJ4XCIsbyphLndpZHRoKSxzLmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIixsKmEuaGVpZ2h0KSxzLnJlbmRlcihyKSxyLnJlc3RvcmUoKTtyZXR1cm4gdC5jcmVhdGVQYXR0ZXJuKGEsXCJyZXBlYXRcIil9fSxBLkVsZW1lbnQucGF0dGVybi5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWFya2VyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnJlbmRlcj1mdW5jdGlvbih0LGUsaSl7aWYoZSl7dC50cmFuc2xhdGUoZS54LGUueSksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoaSksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUodC5saW5lV2lkdGgsdC5saW5lV2lkdGgpLHQuc2F2ZSgpO3ZhciBuPW5ldyBBLkVsZW1lbnQuc3ZnO24uYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlg9bmV3IEEuUHJvcGVydHkoXCJyZWZYXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWT1uZXcgQS5Qcm9wZXJ0eShcInJlZllcIix0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLG4uYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJXaWR0aFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgQS5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VySGVpZ2h0XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuZmlsbD1uZXcgQS5Qcm9wZXJ0eShcImZpbGxcIix0aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJibGFja1wiKSksbi5hdHRyaWJ1dGVzLnN0cm9rZT1uZXcgQS5Qcm9wZXJ0eShcInN0cm9rZVwiLHRoaXMuYXR0cmlidXRlKFwic3Ryb2tlXCIpLnZhbHVlT3JEZWZhdWx0KFwibm9uZVwiKSksbi5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLG4ucmVuZGVyKHQpLHQucmVzdG9yZSgpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKDEvdC5saW5lV2lkdGgsMS90LmxpbmVXaWR0aCksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoLWkpLHQudHJhbnNsYXRlKC1lLngsLWUueSl9fX0sQS5FbGVtZW50Lm1hcmtlci5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVmcz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZGVmcy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuR3JhZGllbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuc3RvcHM9W107Zm9yKHZhciBlPTA7ZTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuY2hpbGRyZW5bZV07XCJzdG9wXCI9PWkudHlwZSYmdGhpcy5zdG9wcy5wdXNoKGkpfXRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24oKXt9LHRoaXMuZ3JhZGllbnRVbml0cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VW5pdHNcIikudmFsdWVPckRlZmF1bHQoXCJvYmplY3RCb3VuZGluZ0JveFwiKX0sdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0PVtcImdyYWRpZW50VW5pdHNcIl0sdGhpcy5pbmhlcml0U3RvcENvbnRhaW5lcj1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXRbZV07IXRoaXMuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJnQuYXR0cmlidXRlKGkpLmhhc1ZhbHVlKCkmJih0aGlzLmF0dHJpYnV0ZShpLCEwKS52YWx1ZT10LmF0dHJpYnV0ZShpKS52YWx1ZSl9fSx0aGlzLmNyZWF0ZUdyYWRpZW50PWZ1bmN0aW9uKHQsZSxpKXt2YXIgbj10aGlzO3RoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmhhc1ZhbHVlKCkmJihuPXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyKG4pKTt2YXIgcz1mdW5jdGlvbih0KXtyZXR1cm4gaS5oYXNWYWx1ZSgpP25ldyBBLlByb3BlcnR5KFwiY29sb3JcIix0KS5hZGRPcGFjaXR5KGkpLnZhbHVlOnR9LGE9dGhpcy5nZXRHcmFkaWVudCh0LGUpO2lmKG51bGw9PWEpcmV0dXJuIHMobi5zdG9wc1tuLnN0b3BzLmxlbmd0aC0xXS5jb2xvcik7Zm9yKHZhciByPTA7cjxuLnN0b3BzLmxlbmd0aDtyKyspYS5hZGRDb2xvclN0b3Aobi5zdG9wc1tyXS5vZmZzZXQscyhuLnN0b3BzW3JdLmNvbG9yKSk7aWYodGhpcy5hdHRyaWJ1dGUoXCJncmFkaWVudFRyYW5zZm9ybVwiKS5oYXNWYWx1ZSgpKXt2YXIgbz1BLlZpZXdQb3J0LnZpZXdQb3J0c1swXSxsPW5ldyBBLkVsZW1lbnQucmVjdDtsLmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwtQS5NQVhfVklSVFVBTF9QSVhFTFMvMyksbC5hdHRyaWJ1dGVzLnk9bmV3IEEuUHJvcGVydHkoXCJ5XCIsLUEuTUFYX1ZJUlRVQUxfUElYRUxTLzMpLGwuYXR0cmlidXRlcy53aWR0aD1uZXcgQS5Qcm9wZXJ0eShcIndpZHRoXCIsQS5NQVhfVklSVFVBTF9QSVhFTFMpLGwuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixBLk1BWF9WSVJUVUFMX1BJWEVMUyk7dmFyIGg9bmV3IEEuRWxlbWVudC5nO2guYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEEuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLnZhbHVlKSxoLmNoaWxkcmVuPVtsXTt2YXIgdT1uZXcgQS5FbGVtZW50LnN2Zzt1LmF0dHJpYnV0ZXMueD1uZXcgQS5Qcm9wZXJ0eShcInhcIiwwKSx1LmF0dHJpYnV0ZXMueT1uZXcgQS5Qcm9wZXJ0eShcInlcIiwwKSx1LmF0dHJpYnV0ZXMud2lkdGg9bmV3IEEuUHJvcGVydHkoXCJ3aWR0aFwiLG8ud2lkdGgpLHUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIixvLmhlaWdodCksdS5jaGlsZHJlbj1baF07dmFyIGM9cCgpO2Mud2lkdGg9by53aWR0aCxjLmhlaWdodD1vLmhlaWdodDt2YXIgZj1jLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gZi5maWxsU3R5bGU9YSx1LnJlbmRlcihmKSxmLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKX1yZXR1cm4gYX19LEEuRWxlbWVudC5HcmFkaWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmxpbmVhckdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcIngxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieTFcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MlwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkyXCIpLHRoaXMuZ2V0R3JhZGllbnQ9ZnVuY3Rpb24odCxlKXt2YXIgaT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2UuZ2V0Qm91bmRpbmdCb3godCk6bnVsbDt0aGlzLmF0dHJpYnV0ZShcIngxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieTFcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcIngxXCIsITApLnZhbHVlPTAsdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieDJcIiwhMCkudmFsdWU9MSx0aGlzLmF0dHJpYnV0ZShcInkyXCIsITApLnZhbHVlPTApO3ZhciBuPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS54KCkraS53aWR0aCgpKnRoaXMuYXR0cmlidXRlKFwieDFcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSxzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcInkxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS50b1BpeGVscyhcInlcIiksYT1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngyXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIikscj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTJcIikudG9QaXhlbHMoXCJ5XCIpO3JldHVybiBuPT1hJiZzPT1yP251bGw6dC5jcmVhdGVMaW5lYXJHcmFkaWVudChuLHMsYSxyKX19LEEuRWxlbWVudC5saW5lYXJHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnJhZGlhbEdyYWRpZW50PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuR3JhZGllbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiY3lcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJyXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnhcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmeVwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KTt0aGlzLmF0dHJpYnV0ZShcImN4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN4XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiY3lcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3lcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInJcIiwhMCkudmFsdWU9XCI1MCVcIik7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiY3lcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxhPW4scj1zO3RoaXMuYXR0cmlidXRlKFwiZnhcIikuaGFzVmFsdWUoKSYmKGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLmhhc1ZhbHVlKCkmJihyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBvPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/KGkud2lkdGgoKStpLmhlaWdodCgpKS8yKnRoaXMuYXR0cmlidXRlKFwiclwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpO3JldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGEsciwwLG4scyxvKX19LEEuRWxlbWVudC5yYWRpYWxHcmFkaWVudC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5HcmFkaWVudEJhc2UsQS5FbGVtZW50LnN0b3A9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5vZmZzZXQ9dGhpcy5hdHRyaWJ1dGUoXCJvZmZzZXRcIikubnVtVmFsdWUoKSx0aGlzLm9mZnNldDwwJiYodGhpcy5vZmZzZXQ9MCksMTx0aGlzLm9mZnNldCYmKHRoaXMub2Zmc2V0PTEpO3ZhciBlPXRoaXMuc3R5bGUoXCJzdG9wLWNvbG9yXCIsITApO1wiXCI9PT1lLnZhbHVlJiYoZS52YWx1ZT1cIiMwMDBcIiksdGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYoZT1lLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKSkpLHRoaXMuY29sb3I9ZS52YWx1ZX0sQS5FbGVtZW50LnN0b3AucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LkFuaW1hdGVCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLEEuQW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuZHVyYXRpb249MCx0aGlzLmJlZ2luPXRoaXMuYXR0cmlidXRlKFwiYmVnaW5cIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLm1heER1cmF0aW9uPXRoaXMuYmVnaW4rdGhpcy5hdHRyaWJ1dGUoXCJkdXJcIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLmdldFByb3BlcnR5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVUeXBlXCIpLnZhbHVlLGU9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVOYW1lXCIpLnZhbHVlO3JldHVyblwiQ1NTXCI9PXQ/dGhpcy5wYXJlbnQuc3R5bGUoZSwhMCk6dGhpcy5wYXJlbnQuYXR0cmlidXRlKGUsITApfSx0aGlzLmluaXRpYWxWYWx1ZT1udWxsLHRoaXMuaW5pdGlhbFVuaXRzPVwiXCIsdGhpcy5yZW1vdmVkPSExLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdGhpcy51cGRhdGU9ZnVuY3Rpb24odCl7aWYobnVsbD09dGhpcy5pbml0aWFsVmFsdWUmJih0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWUsdGhpcy5pbml0aWFsVW5pdHM9dGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCkpLHRoaXMuZHVyYXRpb24+dGhpcy5tYXhEdXJhdGlvbil7aWYoXCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0Q291bnRcIikudmFsdWV8fFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdER1clwiKS52YWx1ZSl0aGlzLmR1cmF0aW9uPTA7ZWxzZSBpZihcImZyZWV6ZVwiIT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIil8fHRoaXMuZnJvemVuKXtpZihcInJlbW92ZVwiPT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIikmJiF0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXMucmVtb3ZlZD0hMCx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuP3RoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlOnRoaXMuaW5pdGlhbFZhbHVlLCEwfWVsc2UgdGhpcy5mcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtyZXR1cm4hMX10aGlzLmR1cmF0aW9uPXRoaXMuZHVyYXRpb24rdDt2YXIgZT0hMTtpZih0aGlzLmJlZ2luPHRoaXMuZHVyYXRpb24pe3ZhciBpPXRoaXMuY2FsY1ZhbHVlKCk7dGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLmhhc1ZhbHVlKCkmJihpPXRoaXMuYXR0cmlidXRlKFwidHlwZVwiKS52YWx1ZStcIihcIitpK1wiKVwiKSx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9aSxlPSEwfXJldHVybiBlfSx0aGlzLmZyb209dGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLHRoaXMudG89dGhpcy5hdHRyaWJ1dGUoXCJ0b1wiKSx0aGlzLnZhbHVlcz10aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKSx0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpJiYodGhpcy52YWx1ZXMudmFsdWU9dGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoXCI7XCIpKSx0aGlzLnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHQ9e3Byb2dyZXNzOih0aGlzLmR1cmF0aW9uLXRoaXMuYmVnaW4pLyh0aGlzLm1heER1cmF0aW9uLXRoaXMuYmVnaW4pfTtpZih0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpKXt2YXIgZT10LnByb2dyZXNzKih0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGgtMSksaT1NYXRoLmZsb29yKGUpLG49TWF0aC5jZWlsKGUpO3QuZnJvbT1uZXcgQS5Qcm9wZXJ0eShcImZyb21cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2ldKSksdC50bz1uZXcgQS5Qcm9wZXJ0eShcInRvXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtuXSkpLHQucHJvZ3Jlc3M9KGUtaSkvKG4taSl9ZWxzZSB0LmZyb209dGhpcy5mcm9tLHQudG89dGhpcy50bztyZXR1cm4gdH19LEEuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuYW5pbWF0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKTtyZXR1cm4gdC5mcm9tLm51bVZhbHVlKCkrKHQudG8ubnVtVmFsdWUoKS10LmZyb20ubnVtVmFsdWUoKSkqdC5wcm9ncmVzcyt0aGlzLmluaXRpYWxVbml0c319LEEuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlQ29sb3I9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCksZT1uZXcgbSh0LmZyb20udmFsdWUpLGk9bmV3IG0odC50by52YWx1ZSk7aWYoZS5vayYmaS5vayl7dmFyIG49ZS5yKyhpLnItZS5yKSp0LnByb2dyZXNzLHM9ZS5nKyhpLmctZS5nKSp0LnByb2dyZXNzLGE9ZS5iKyhpLmItZS5iKSp0LnByb2dyZXNzO3JldHVyblwicmdiKFwiK3BhcnNlSW50KG4sMTApK1wiLFwiK3BhcnNlSW50KHMsMTApK1wiLFwiK3BhcnNlSW50KGEsMTApK1wiKVwifXJldHVybiB0aGlzLmF0dHJpYnV0ZShcImZyb21cIikudmFsdWV9fSxBLkVsZW1lbnQuYW5pbWF0ZUNvbG9yLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkFuaW1hdGVCYXNlLEEuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPUEuVG9OdW1iZXJBcnJheSh0LmZyb20udmFsdWUpLGk9QS5Ub051bWJlckFycmF5KHQudG8udmFsdWUpLG49XCJcIixzPTA7czxlLmxlbmd0aDtzKyspbis9ZVtzXSsoaVtzXS1lW3NdKSp0LnByb2dyZXNzK1wiIFwiO3JldHVybiBufX0sQS5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuYW5pbWF0ZSxBLkVsZW1lbnQuZm9udD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy5pc1JUTD0hMSx0aGlzLmlzQXJhYmljPSExLHRoaXMuZm9udEZhY2U9bnVsbCx0aGlzLm1pc3NpbmdHbHlwaD1udWxsLHRoaXMuZ2x5cGhzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wiZm9udC1mYWNlXCI9PWkudHlwZT8odGhpcy5mb250RmFjZT1pKS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmhhc1ZhbHVlKCkmJihBLkRlZmluaXRpb25zW2kuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZV09dGhpcyk6XCJtaXNzaW5nLWdseXBoXCI9PWkudHlwZT90aGlzLm1pc3NpbmdHbHlwaD1pOlwiZ2x5cGhcIj09aS50eXBlJiYoXCJcIiE9aS5hcmFiaWNGb3JtPyh0aGlzLmlzUlRMPSEwLHRoaXMuaXNBcmFiaWM9ITAsdm9pZCAwPT09dGhpcy5nbHlwaHNbaS51bmljb2RlXSYmKHRoaXMuZ2x5cGhzW2kudW5pY29kZV09W10pLHRoaXMuZ2x5cGhzW2kudW5pY29kZV1baS5hcmFiaWNGb3JtXT1pKTp0aGlzLmdseXBoc1tpLnVuaWNvZGVdPWkpfX0sQS5FbGVtZW50LmZvbnQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZvbnRmYWNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXNjZW50PXRoaXMuYXR0cmlidXRlKFwiYXNjZW50XCIpLnZhbHVlLHRoaXMuZGVzY2VudD10aGlzLmF0dHJpYnV0ZShcImRlc2NlbnRcIikudmFsdWUsdGhpcy51bml0c1BlckVtPXRoaXMuYXR0cmlidXRlKFwidW5pdHMtcGVyLWVtXCIpLm51bVZhbHVlKCl9LEEuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQubWlzc2luZ2dseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9MH0sQS5FbGVtZW50Lm1pc3NpbmdnbHlwaC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5wYXRoLEEuRWxlbWVudC5nbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLnVuaWNvZGU9dGhpcy5hdHRyaWJ1dGUoXCJ1bmljb2RlXCIpLnZhbHVlLHRoaXMuYXJhYmljRm9ybT10aGlzLmF0dHJpYnV0ZShcImFyYWJpYy1mb3JtXCIpLnZhbHVlfSxBLkVsZW1lbnQuZ2x5cGgucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQucGF0aCxBLkVsZW1lbnQudGV4dD1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KTt2YXIgZT10aGlzLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKTtudWxsPT1lJiYoZT10aGlzLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCkpLG51bGwhPWUmJih0LnRleHRCYXNlbGluZT1lKX0sdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCl7dGhpcy54PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy55PXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksdGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYodGhpcy54Kz10aGlzLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYodGhpcy55Kz10aGlzLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSksdGhpcy54Kz10aGlzLmdldEFuY2hvckRlbHRhKHQsdGhpcywwKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9bnVsbCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LHRoaXMsdGhpcyxpKTtudWxsPT1lP2U9bjplLmFkZEJvdW5kaW5nQm94KG4pfXJldHVybiBlfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMucmVuZGVyQ2hpbGQodCx0aGlzLHRoaXMsZSl9LHRoaXMuZ2V0QW5jaG9yRGVsdGE9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIiE9bil7Zm9yKHZhciBzPTAsYT1pO2E8ZS5jaGlsZHJlbi5sZW5ndGg7YSsrKXt2YXIgcj1lLmNoaWxkcmVuW2FdO2lmKGk8YSYmci5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCkpYnJlYWs7cys9ci5tZWFzdXJlVGV4dFJlY3Vyc2l2ZSh0KX1yZXR1cm4tMSooXCJlbmRcIj09bj9zOnMvMil9cmV0dXJuIDB9LHRoaXMuYWRqdXN0Q2hpbGRDb29yZGluYXRlcz1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz1pLmNoaWxkcmVuW25dO3JldHVybiBzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKT8ocy54PXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIikrZS5nZXRBbmNob3JEZWx0YSh0LGksbikscy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYocy54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSkpOihzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihlLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSxzLng9ZS54KSxlLng9cy54K3MubWVhc3VyZVRleHQodCkscy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCk/KHMueT1zLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHMueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpKToocy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYoZS55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkscy55PWUueSksZS55PXMueSxzfSx0aGlzLmdldENoaWxkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pLGE9cy5nZXRCb3VuZGluZ0JveCh0KTtmb3Iobj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKXt2YXIgcj1lLmdldENoaWxkQm91bmRpbmdCb3godCxlLHMsbik7YS5hZGRCb3VuZGluZ0JveChyKX1yZXR1cm4gYX0sdGhpcy5yZW5kZXJDaGlsZD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbik7Zm9yKHMucmVuZGVyKHQpLG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyllLnJlbmRlckNoaWxkKHQsZSxzLG4pfX0sQS5FbGVtZW50LnRleHQucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRHbHlwaD1mdW5jdGlvbih0LGUsaSl7dmFyIG49ZVtpXSxzPW51bGw7aWYodC5pc0FyYWJpYyl7dmFyIGE9XCJpc29sYXRlZFwiOygwPT1pfHxcIiBcIj09ZVtpLTFdKSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cInRlcm1pbmFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cIm1lZGlhbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJihpPT1lLmxlbmd0aC0xfHxcIiBcIj09ZVtpKzFdKSYmKGE9XCJpbml0aWFsXCIpLHZvaWQgMCE9PXQuZ2x5cGhzW25dJiZudWxsPT0ocz10LmdseXBoc1tuXVthXSkmJlwiZ2x5cGhcIj09dC5nbHlwaHNbbl0udHlwZSYmKHM9dC5nbHlwaHNbbl0pfWVsc2Ugcz10LmdseXBoc1tuXTtyZXR1cm4gbnVsbD09cyYmKHM9dC5taXNzaW5nR2x5cGgpLHN9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbD09ZSlcInN0cm9rZVwiPT10LnBhaW50T3JkZXI/KFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk6KFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChBLmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk7ZWxzZXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpLG49dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U3R5bGUpLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbz10aGlzLmdldEdseXBoKGUscyxyKSxsPWkvZS5mb250RmFjZS51bml0c1BlckVtO3QudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpLHQuc2NhbGUobCwtbCk7dmFyIGg9dC5saW5lV2lkdGg7dC5saW5lV2lkdGg9dC5saW5lV2lkdGgqZS5mb250RmFjZS51bml0c1BlckVtL2ksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC40LDEsMCwwKSxvLnJlbmRlcih0KSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLS40LDEsMCwwKSx0LmxpbmVXaWR0aD1oLHQuc2NhbGUoMS9sLC0xL2wpLHQudHJhbnNsYXRlKC10aGlzLngsLXRoaXMueSksdGhpcy54Kz1pKihvLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHRoaXMueCs9YVtyXSl9fX0sdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLm1lYXN1cmVUZXh0UmVjdXJzaXZlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLm1lYXN1cmVUZXh0KHQpLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllKz10aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpO3JldHVybiBlfSx0aGlzLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEEuRm9udC5QYXJzZShBLmN0eC5mb250KS5mb250U2l6ZSksbj0wLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUEuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKW4rPSh0aGlzLmdldEdseXBoKGUscyxyKS5ob3JpekFkdlh8fGUuaG9yaXpBZHZYKSppL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KG4rPWFbcl0pO3JldHVybiBufXZhciBvPUEuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpO2lmKCF0Lm1lYXN1cmVUZXh0KXJldHVybiAxMCpvLmxlbmd0aDt0LnNhdmUoKSx0aGlzLnNldENvbnRleHQodCwhMCk7dmFyIGw9dC5tZWFzdXJlVGV4dChvKS53aWR0aDtyZXR1cm4gdC5yZXN0b3JlKCksbH0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChBLkZvbnQuUGFyc2UoQS5jdHguZm9udCkuZm9udFNpemUpO3JldHVybiBuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUsdGhpcy54K3RoaXMubWVhc3VyZVRleHQodCksdGhpcy55KX19LEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHNwYW49ZnVuY3Rpb24odCl7dGhpcy5jYXB0dXJlVGV4dE5vZGVzPSEwLHRoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnRleHQ9QS5jb21wcmVzc1NwYWNlcyh0LnZhbHVlfHx0LnRleHR8fHQudGV4dENvbnRlbnR8fFwiXCIpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiAwPHRoaXMuY2hpbGRyZW4ubGVuZ3RoP1wiXCI6dGhpcy50ZXh0fX0sQS5FbGVtZW50LnRzcGFuLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxBLkVsZW1lbnQudHJlZj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9QS5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPXQpcmV0dXJuIHQuY2hpbGRyZW5bMF0uZ2V0VGV4dCgpfX0sQS5FbGVtZW50LnRyZWYucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEEuRWxlbWVudC5hPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhhc1RleHQ9MDx0LmNoaWxkTm9kZXMubGVuZ3RoO2Zvcih2YXIgZT0wO2U8dC5jaGlsZE5vZGVzLmxlbmd0aDtlKyspMyE9dC5jaGlsZE5vZGVzW2VdLm5vZGVUeXBlJiYodGhpcy5oYXNUZXh0PSExKTt0aGlzLnRleHQ9dGhpcy5oYXNUZXh0P3QuY2hpbGROb2Rlc1swXS52YWx1ZXx8dC5jaGlsZE5vZGVzWzBdLmRhdGE6XCJcIix0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50ZXh0fSx0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbj10aGlzLnJlbmRlckNoaWxkcmVuLHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYodGhpcy5oYXNUZXh0KXt0aGlzLmJhc2VSZW5kZXJDaGlsZHJlbih0KTt2YXIgZT1uZXcgQS5Qcm9wZXJ0eShcImZvbnRTaXplXCIsQS5Gb250LlBhcnNlKEEuY3R4LmZvbnQpLmZvbnRTaXplKTtBLk1vdXNlLmNoZWNrQm91bmRpbmdCb3godGhpcyxuZXcgQS5Cb3VuZGluZ0JveCh0aGlzLngsdGhpcy55LWUudG9QaXhlbHMoXCJ5XCIpLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSkpfWVsc2UgaWYoMDx0aGlzLmNoaWxkcmVuLmxlbmd0aCl7dmFyIGk9bmV3IEEuRWxlbWVudC5nO2kuY2hpbGRyZW49dGhpcy5jaGlsZHJlbixpLnBhcmVudD10aGlzLGkucmVuZGVyKHQpfX0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKCl7dS5vcGVuKHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLnZhbHVlKX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJwb2ludGVyXCJ9fSxBLkVsZW1lbnQuYS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsQS5FbGVtZW50LmltYWdlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkudmFsdWU7aWYoXCJcIiE9ZSl7dmFyIGE9ZS5tYXRjaCgvXFwuc3ZnJC8pO2lmKEEuSW1hZ2VzLnB1c2godGhpcyksdGhpcy5sb2FkZWQ9ITEsYSl0aGlzLmltZz1BLmFqYXgoZSksdGhpcy5sb2FkZWQ9ITA7ZWxzZXt0aGlzLmltZz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLDE9PUEub3B0cy51c2VDT1JTJiYodGhpcy5pbWcuY3Jvc3NPcmlnaW49XCJBbm9ueW1vdXNcIik7dmFyIHI9dGhpczt0aGlzLmltZy5vbmxvYWQ9ZnVuY3Rpb24oKXtyLmxvYWRlZD0hMH0sdGhpcy5pbWcub25lcnJvcj1mdW5jdGlvbigpe0EubG9nKCdFUlJPUjogaW1hZ2UgXCInK2UrJ1wiIG5vdCBmb3VuZCcpLHIubG9hZGVkPSEwfSx0aGlzLmltZy5zcmM9ZX10aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksaT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikscz10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7MCE9biYmMCE9cyYmKHQuc2F2ZSgpLGE/dC5kcmF3U3ZnKHRoaXMuaW1nLGUsaSxuLHMpOih0LnRyYW5zbGF0ZShlLGkpLEEuQXNwZWN0UmF0aW8odCx0aGlzLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUsbix0aGlzLmltZy53aWR0aCxzLHRoaXMuaW1nLmhlaWdodCwwLDApLHIubG9hZGVkJiYodm9pZCAwPT09dGhpcy5pbWcuY29tcGxldGV8fHRoaXMuaW1nLmNvbXBsZXRlKSYmdC5kcmF3SW1hZ2UodGhpcy5pbWcsMCwwKSksdC5yZXN0b3JlKCkpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxlPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksaT10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbmV3IEEuQm91bmRpbmdCb3godCxlLHQraSxlK24pfX19LEEuRWxlbWVudC5pbWFnZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5nPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXtmb3IodmFyIGU9bmV3IEEuQm91bmRpbmdCb3gsaT0wO2k8dGhpcy5jaGlsZHJlbi5sZW5ndGg7aSsrKWUuYWRkQm91bmRpbmdCb3godGhpcy5jaGlsZHJlbltpXS5nZXRCb3VuZGluZ0JveCh0KSk7cmV0dXJuIGV9fSxBLkVsZW1lbnQuZy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5zeW1ib2w9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsQS5FbGVtZW50LnN0eWxlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO2Zvcih2YXIgZT1cIlwiLGk9MDtpPHQuY2hpbGROb2Rlcy5sZW5ndGg7aSsrKWUrPXQuY2hpbGROb2Rlc1tpXS5kYXRhO2U9ZS5yZXBsYWNlKC8oXFwvXFwqKFteKl18W1xcclxcbl18KFxcKisoW14qXFwvXXxbXFxyXFxuXSkpKSpcXCorXFwvKXwoXltcXHNdKlxcL1xcLy4qKS9nbSxcIlwiKTt2YXIgbj0oZT1BLmNvbXByZXNzU3BhY2VzKGUpKS5zcGxpdChcIn1cIik7Zm9yKGk9MDtpPG4ubGVuZ3RoO2krKylpZihcIlwiIT1BLnRyaW0obltpXSkpZm9yKHZhciBzPW5baV0uc3BsaXQoXCJ7XCIpLGE9c1swXS5zcGxpdChcIixcIikscj1zWzFdLnNwbGl0KFwiO1wiKSxvPTA7bzxhLmxlbmd0aDtvKyspe3ZhciBsPUEudHJpbShhW29dKTtpZihcIlwiIT1sKXtmb3IodmFyIGg9QS5TdHlsZXNbbF18fHt9LHU9MDt1PHIubGVuZ3RoO3UrKyl7dmFyIGM9clt1XS5pbmRleE9mKFwiOlwiKSxmPXJbdV0uc3Vic3RyKDAsYyksbT1yW3VdLnN1YnN0cihjKzEsclt1XS5sZW5ndGgtYyk7bnVsbCE9ZiYmbnVsbCE9bSYmKGhbQS50cmltKGYpXT1uZXcgQS5Qcm9wZXJ0eShBLnRyaW0oZiksQS50cmltKG0pKSl9aWYoQS5TdHlsZXNbbF09aCxBLlN0eWxlc1NwZWNpZmljaXR5W2xdPXcobCksXCJAZm9udC1mYWNlXCI9PWwpZm9yKHZhciBwPWhbXCJmb250LWZhbWlseVwiXS52YWx1ZS5yZXBsYWNlKC9cIi9nLFwiXCIpLGQ9aC5zcmMudmFsdWUuc3BsaXQoXCIsXCIpLHk9MDt5PGQubGVuZ3RoO3krKylpZigwPGRbeV0uaW5kZXhPZignZm9ybWF0KFwic3ZnXCIpJykpZm9yKHZhciB2PWRbeV0uaW5kZXhPZihcInVybFwiKSxnPWRbeV0uaW5kZXhPZihcIilcIix2KSx4PWRbeV0uc3Vic3RyKHYrNSxnLXYtNiksYj1BLnBhcnNlWG1sKEEuYWpheCh4KSkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJmb250XCIpLFA9MDtQPGIubGVuZ3RoO1ArKyl7dmFyIEU9QS5DcmVhdGVFbGVtZW50KGJbUF0pO0EuRGVmaW5pdGlvbnNbcF09RX19fX0sQS5FbGVtZW50LnN0eWxlLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC51c2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KSx0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSwwKSx0aGlzLmF0dHJpYnV0ZShcInlcIikuaGFzVmFsdWUoKSYmdC50cmFuc2xhdGUoMCx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKX07dmFyIG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO3RoaXMucGF0aD1mdW5jdGlvbih0KXtudWxsIT1uJiZuLnBhdGgodCl9LHRoaXMuZWxlbWVudFRyYW5zZm9ybT1mdW5jdGlvbigpe2lmKG51bGwhPW4mJm4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkuaGFzVmFsdWUoKSlyZXR1cm4gbmV3IEEuVHJhbnNmb3JtKG4uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMSwhMCkudmFsdWUpfSx0aGlzLmdldEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe2lmKG51bGwhPW4pcmV0dXJuIG4uZ2V0Qm91bmRpbmdCb3godCl9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7aWYobnVsbCE9bil7dmFyIGU9bjtcInN5bWJvbFwiPT1uLnR5cGUmJigoZT1uZXcgQS5FbGVtZW50LnN2ZykudHlwZT1cInN2Z1wiLGUuYXR0cmlidXRlcy52aWV3Qm94PW5ldyBBLlByb3BlcnR5KFwidmlld0JveFwiLG4uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksZS5hdHRyaWJ1dGVzLnByZXNlcnZlQXNwZWN0UmF0aW89bmV3IEEuUHJvcGVydHkoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsbi5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMub3ZlcmZsb3c9bmV3IEEuUHJvcGVydHkoXCJvdmVyZmxvd1wiLG4uYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWUpLGUuY2hpbGRyZW49bi5jaGlsZHJlbiksXCJzdmdcIj09ZS50eXBlJiYodGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLndpZHRoPW5ldyBBLlByb3BlcnR5KFwid2lkdGhcIix0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnZhbHVlKSksdGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKGUuYXR0cmlidXRlcy5oZWlnaHQ9bmV3IEEuUHJvcGVydHkoXCJoZWlnaHRcIix0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS52YWx1ZSkpKTt2YXIgaT1lLnBhcmVudDtlLnBhcmVudD1udWxsLGUucmVuZGVyKHQpLGUucGFyZW50PWl9fX0sQS5FbGVtZW50LnVzZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEEuRWxlbWVudC5tYXNrPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxzPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGE9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO2lmKDA9PXMmJjA9PWEpe2Zvcih2YXIgcj1uZXcgQS5Cb3VuZGluZ0JveCxvPTA7bzx0aGlzLmNoaWxkcmVuLmxlbmd0aDtvKyspci5hZGRCb3VuZGluZ0JveCh0aGlzLmNoaWxkcmVuW29dLmdldEJvdW5kaW5nQm94KHQpKTtpPU1hdGguZmxvb3Ioci54MSksbj1NYXRoLmZsb29yKHIueTEpLHM9TWF0aC5mbG9vcihyLndpZHRoKCkpLGE9TWF0aC5mbG9vcihyLmhlaWdodCgpKX12YXIgbD1lLmF0dHJpYnV0ZShcIm1hc2tcIikudmFsdWU7ZS5hdHRyaWJ1dGUoXCJtYXNrXCIpLnZhbHVlPVwiXCI7dmFyIGg9cCgpO2gud2lkdGg9aStzLGguaGVpZ2h0PW4rYTt2YXIgdT1oLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLnJlbmRlckNoaWxkcmVuKHUpO3ZhciBjPXAoKTtjLndpZHRoPWkrcyxjLmhlaWdodD1uK2E7dmFyIGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7ZS5yZW5kZXIoZiksZi5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249XCJkZXN0aW5hdGlvbi1pblwiLGYuZmlsbFN0eWxlPXUuY3JlYXRlUGF0dGVybihoLFwibm8tcmVwZWF0XCIpLGYuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLHQuZmlsbFN0eWxlPWYuY3JlYXRlUGF0dGVybihjLFwibm8tcmVwZWF0XCIpLHQuZmlsbFJlY3QoMCwwLGkrcyxuK2EpLGUuYXR0cmlidXRlKFwibWFza1wiKS52YWx1ZT1sfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQubWFzay5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuY2xpcFBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0KXt2YXIgZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGk9dC5iZWdpblBhdGgsbj10LmNsb3NlUGF0aDtlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9ZnVuY3Rpb24oKXt9LENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPWZ1bmN0aW9uKCl7fSksaS5jYWxsKHQpO2Zvcih2YXIgcz0wO3M8dGhpcy5jaGlsZHJlbi5sZW5ndGg7cysrKXt2YXIgYT10aGlzLmNoaWxkcmVuW3NdO2lmKHZvaWQgMCE9PWEucGF0aCl7dmFyIHI9dm9pZCAwIT09YS5lbGVtZW50VHJhbnNmb3JtJiZhLmVsZW1lbnRUcmFuc2Zvcm0oKTshciYmYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpJiYocj1uZXcgQS5UcmFuc2Zvcm0oYS5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSkpLHImJnIuYXBwbHkodCksYS5wYXRoKHQpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKSxyJiZyLnVuYXBwbHkodCl9fW4uY2FsbCh0KSx0LmNsaXAoKSxlJiYoQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5iZWdpblBhdGg9aSxDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmNsb3NlUGF0aD1uKX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7fX0sQS5FbGVtZW50LmNsaXBQYXRoLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5maWx0ZXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPWUuZ2V0Qm91bmRpbmdCb3godCksbj1NYXRoLmZsb29yKGkueDEpLHM9TWF0aC5mbG9vcihpLnkxKSxhPU1hdGguZmxvb3IoaS53aWR0aCgpKSxyPU1hdGguZmxvb3IoaS5oZWlnaHQoKSksbz1lLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlO2Uuc3R5bGUoXCJmaWx0ZXJcIikudmFsdWU9XCJcIjtmb3IodmFyIGw9MCxoPTAsdT0wO3U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7dSsrKXt2YXIgYz10aGlzLmNoaWxkcmVuW3VdLmV4dHJhRmlsdGVyRGlzdGFuY2V8fDA7bD1NYXRoLm1heChsLGMpLGg9TWF0aC5tYXgoaCxjKX12YXIgZj1wKCk7Zi53aWR0aD1hKzIqbCxmLmhlaWdodD1yKzIqaDt2YXIgbT1mLmdldENvbnRleHQoXCIyZFwiKTtmb3IobS50cmFuc2xhdGUoLW4rbCwtcytoKSxlLnJlbmRlcihtKSx1PTA7dTx0aGlzLmNoaWxkcmVuLmxlbmd0aDt1KyspXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5jaGlsZHJlblt1XS5hcHBseSYmdGhpcy5jaGlsZHJlblt1XS5hcHBseShtLDAsMCxhKzIqbCxyKzIqaCk7dC5kcmF3SW1hZ2UoZiwwLDAsYSsyKmwscisyKmgsbi1sLHMtaCxhKzIqbCxyKzIqaCksZS5zdHlsZShcImZpbHRlclwiLCEwKS52YWx1ZT1vfSx0aGlzLnJlbmRlcj1mdW5jdGlvbih0KXt9fSxBLkVsZW1lbnQuZmlsdGVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5mZU1vcnBob2xvZ3k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe319LEEuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29tcG9zaXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1BLkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt9fSxBLkVsZW1lbnQuZmVDb21wb3NpdGUucHJvdG90eXBlPW5ldyBBLkVsZW1lbnQuRWxlbWVudEJhc2UsQS5FbGVtZW50LmZlQ29sb3JNYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIG49QS5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLnZhbHVlKTtzd2l0Y2godGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlT3JEZWZhdWx0KFwibWF0cml4XCIpKXtjYXNlXCJzYXR1cmF0ZVwiOnZhciBlPW5bMF07bj1bLjIxMysuNzg3KmUsLjcxNS0uNzE1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUrLjI4NSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1LS43MTUqZSwuMDcyKy45MjgqZSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwiaHVlUm90YXRlXCI6dmFyIHM9blswXSpNYXRoLlBJLzE4MCxpPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhzKSplK01hdGguc2luKHMpKml9O249W2koLjIxMywuNzg3LC0uMjEzKSxpKC43MTUsLS43MTUsLS43MTUpLGkoLjA3MiwtLjA3MiwuOTI4KSwwLDAsaSguMjEzLC0uMjEzLC4xNDMpLGkoLjcxNSwuMjg1LC4xNCksaSguMDcyLC0uMDcyLC0uMjgzKSwwLDAsaSguMjEzLC0uMjEzLC0uNzg3KSxpKC43MTUsLS43MTUsLjcxNSksaSguMDcyLC45MjgsLjA3MiksMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImx1bWluYW5jZVRvQWxwaGFcIjpuPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwuMjEyNSwuNzE1NCwuMDcyMSwwLDAsMCwwLDAsMCwxXX1mdW5jdGlvbiB1KHQsZSxpLG4scyxhKXtyZXR1cm4gdFtpKm4qNCs0KmUrYV19ZnVuY3Rpb24gYyh0LGUsaSxuLHMsYSxyKXt0W2kqbio0KzQqZSthXT1yfWZ1bmN0aW9uIGYodCxlKXt2YXIgaT1uW3RdO3JldHVybiBpKihpPDA/ZS0yNTU6ZSl9dGhpcy5hcHBseT1mdW5jdGlvbih0LGUsaSxuLHMpe3ZhciBhPXQuZ2V0SW1hZ2VEYXRhKDAsMCxuLHMpO2ZvcihpPTA7aTxzO2krKylmb3IoZT0wO2U8bjtlKyspe3ZhciByPXUoYS5kYXRhLGUsaSxuLDAsMCksbz11KGEuZGF0YSxlLGksbiwwLDEpLGw9dShhLmRhdGEsZSxpLG4sMCwyKSxoPXUoYS5kYXRhLGUsaSxuLDAsMyk7YyhhLmRhdGEsZSxpLG4sMCwwLGYoMCxyKStmKDEsbykrZigyLGwpK2YoMyxoKStmKDQsMSkpLGMoYS5kYXRhLGUsaSxuLDAsMSxmKDUscikrZig2LG8pK2YoNyxsKStmKDgsaCkrZig5LDEpKSxjKGEuZGF0YSxlLGksbiwwLDIsZigxMCxyKStmKDExLG8pK2YoMTIsbCkrZigxMyxoKStmKDE0LDEpKSxjKGEuZGF0YSxlLGksbiwwLDMsZigxNSxyKStmKDE2LG8pK2YoMTcsbCkrZigxOCxoKStmKDE5LDEpKX10LmNsZWFyUmVjdCgwLDAsbixzKSx0LnB1dEltYWdlRGF0YShhLDAsMCl9fSxBLkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZmVHYXVzc2lhbkJsdXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUEuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ibHVyUmFkaXVzPU1hdGguZmxvb3IodGhpcy5hdHRyaWJ1dGUoXCJzdGREZXZpYXRpb25cIikubnVtVmFsdWUoKSksdGhpcy5leHRyYUZpbHRlckRpc3RhbmNlPXRoaXMuYmx1clJhZGl1cyx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7ZCYmdm9pZCAwIT09ZC5jYW52YXNSR0JBPyh0LmNhbnZhcy5pZD1BLlVuaXF1ZUlkKCksdC5jYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQuY2FudmFzKSxkLmNhbnZhc1JHQkEodC5jYW52YXMsZSxpLG4scyx0aGlzLmJsdXJSYWRpdXMpLGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC5jYW52YXMpKTpBLmxvZyhcIkVSUk9SOiBTdGFja0JsdXIuanMgbXVzdCBiZSBpbmNsdWRlZCBmb3IgYmx1ciB0byB3b3JrXCIpfX0sQS5FbGVtZW50LmZlR2F1c3NpYW5CbHVyLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC50aXRsZT1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC50aXRsZS5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkVsZW1lbnQuZGVzYz1mdW5jdGlvbih0KXt9LEEuRWxlbWVudC5kZXNjLnByb3RvdHlwZT1uZXcgQS5FbGVtZW50LkVsZW1lbnRCYXNlLEEuRWxlbWVudC5NSVNTSU5HPWZ1bmN0aW9uKHQpe0EubG9nKFwiRVJST1I6IEVsZW1lbnQgJ1wiK3Qubm9kZU5hbWUrXCInIG5vdCB5ZXQgaW1wbGVtZW50ZWQuXCIpfSxBLkVsZW1lbnQuTUlTU0lORy5wcm90b3R5cGU9bmV3IEEuRWxlbWVudC5FbGVtZW50QmFzZSxBLkNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5ub2RlTmFtZS5yZXBsYWNlKC9eW146XSs6LyxcIlwiKTtlPWUucmVwbGFjZSgvXFwtL2csXCJcIik7dmFyIGk9bnVsbDtyZXR1cm4oaT12b2lkIDAhPT1BLkVsZW1lbnRbZV0/bmV3IEEuRWxlbWVudFtlXSh0KTpuZXcgQS5FbGVtZW50Lk1JU1NJTkcodCkpLnR5cGU9dC5ub2RlTmFtZSxpfSxBLmxvYWQ9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWwodCxBLmFqYXgoZSkpfSxBLmxvYWRYbWw9ZnVuY3Rpb24odCxlKXtBLmxvYWRYbWxEb2ModCxBLnBhcnNlWG1sKGUpKX0sQS5sb2FkWG1sRG9jPWZ1bmN0aW9uKGEscil7QS5pbml0KGEpO3ZhciBpPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1hLmNhbnZhcztlOyl0LngtPWUub2Zmc2V0TGVmdCx0LnktPWUub2Zmc2V0VG9wLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJuIHUuc2Nyb2xsWCYmKHQueCs9dS5zY3JvbGxYKSx1LnNjcm9sbFkmJih0LnkrPXUuc2Nyb2xsWSksdH07MSE9QS5vcHRzLmlnbm9yZU1vdXNlJiYoYS5jYW52YXMub25jbGljaz1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBBLlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0EuTW91c2Uub25jbGljayhlLngsZS55KX0sYS5jYW52YXMub25tb3VzZW1vdmU9ZnVuY3Rpb24odCl7dmFyIGU9aShuZXcgQS5Qb2ludChudWxsIT10P3QuY2xpZW50WDpldmVudC5jbGllbnRYLG51bGwhPXQ/dC5jbGllbnRZOmV2ZW50LmNsaWVudFkpKTtBLk1vdXNlLm9ubW91c2Vtb3ZlKGUueCxlLnkpfSk7dmFyIG89QS5DcmVhdGVFbGVtZW50KHIuZG9jdW1lbnRFbGVtZW50KTtvLnJvb3Q9ITAsby5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uKCk7dmFyIGw9ITAsbj1mdW5jdGlvbigpe0EuVmlld1BvcnQuQ2xlYXIoKSxhLmNhbnZhcy5wYXJlbnROb2RlP0EuVmlld1BvcnQuU2V0Q3VycmVudChhLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoLGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0KTpBLlZpZXdQb3J0LlNldEN1cnJlbnQoODAwLDYwMCksMSE9QS5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJihvLnN0eWxlKFwid2lkdGhcIikuaGFzVmFsdWUoKSYmKGEuY2FudmFzLndpZHRoPW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS53aWR0aD1hLmNhbnZhcy53aWR0aCtcInB4XCIpKSxvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy5oZWlnaHQ9by5zdHlsZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIiksYS5jYW52YXMuc3R5bGUmJihhLmNhbnZhcy5zdHlsZS5oZWlnaHQ9YS5jYW52YXMuaGVpZ2h0K1wicHhcIikpKTt2YXIgdD1hLmNhbnZhcy5jbGllbnRXaWR0aHx8YS5jYW52YXMud2lkdGgsZT1hLmNhbnZhcy5jbGllbnRIZWlnaHR8fGEuY2FudmFzLmhlaWdodDtpZigxPT1BLm9wdHMuaWdub3JlRGltZW5zaW9ucyYmby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJm8uc3R5bGUoXCJoZWlnaHRcIikuaGFzVmFsdWUoKSYmKHQ9by5zdHlsZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxlPW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpKSxBLlZpZXdQb3J0LlNldEN1cnJlbnQodCxlKSxudWxsIT1BLm9wdHMub2Zmc2V0WCYmKG8uYXR0cmlidXRlKFwieFwiLCEwKS52YWx1ZT1BLm9wdHMub2Zmc2V0WCksbnVsbCE9QS5vcHRzLm9mZnNldFkmJihvLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9QS5vcHRzLm9mZnNldFkpLG51bGwhPUEub3B0cy5zY2FsZVdpZHRofHxudWxsIT1BLm9wdHMuc2NhbGVIZWlnaHQpe3ZhciBpPW51bGwsbj1udWxsLHM9QS5Ub051bWJlckFycmF5KG8uYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSk7bnVsbCE9QS5vcHRzLnNjYWxlV2lkdGgmJihvLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCk/aT1vLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKS9BLm9wdHMuc2NhbGVXaWR0aDppc05hTihzWzJdKXx8KGk9c1syXS9BLm9wdHMuc2NhbGVXaWR0aCkpLG51bGwhPUEub3B0cy5zY2FsZUhlaWdodCYmKG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCk/bj1vLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIikvQS5vcHRzLnNjYWxlSGVpZ2h0OmlzTmFOKHNbM10pfHwobj1zWzNdL0Eub3B0cy5zY2FsZUhlaWdodCkpLG51bGw9PWkmJihpPW4pLG51bGw9PW4mJihuPWkpLG8uYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlV2lkdGgsby5hdHRyaWJ1dGUoXCJoZWlnaHRcIiwhMCkudmFsdWU9QS5vcHRzLnNjYWxlSGVpZ2h0LG8uc3R5bGUoXCJ0cmFuc2Zvcm1cIiwhMCwhMCkudmFsdWUrPVwiIHNjYWxlKFwiKzEvaStcIixcIisxL24rXCIpXCJ9MSE9QS5vcHRzLmlnbm9yZUNsZWFyJiZhLmNsZWFyUmVjdCgwLDAsdCxlKSxvLnJlbmRlcihhKSxsJiYobD0hMSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBBLm9wdHMucmVuZGVyQ2FsbGJhY2smJkEub3B0cy5yZW5kZXJDYWxsYmFjayhyKSl9LHM9ITA7QS5JbWFnZXNMb2FkZWQoKSYmKHM9ITEsbigpKSxBLmludGVydmFsSUQ9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgdD0hMTtpZihzJiZBLkltYWdlc0xvYWRlZCgpJiYodD0hKHM9ITEpKSwxIT1BLm9wdHMuaWdub3JlTW91c2UmJih0fD1BLk1vdXNlLmhhc0V2ZW50cygpKSwxIT1BLm9wdHMuaWdub3JlQW5pbWF0aW9uKWZvcih2YXIgZT0wO2U8QS5BbmltYXRpb25zLmxlbmd0aDtlKyspdHw9QS5BbmltYXRpb25zW2VdLnVwZGF0ZSgxZTMvQS5GUkFNRVJBVEUpO1wiZnVuY3Rpb25cIj09dHlwZW9mIEEub3B0cy5mb3JjZVJlZHJhdyYmMT09QS5vcHRzLmZvcmNlUmVkcmF3KCkmJih0PSEwKSx0JiYobigpLEEuTW91c2UucnVuRXZlbnRzKCkpfSwxZTMvQS5GUkFNRVJBVEUpfSxBLnN0b3A9ZnVuY3Rpb24oKXtBLmludGVydmFsSUQmJmNsZWFySW50ZXJ2YWwoQS5pbnRlcnZhbElEKX0sQS5Nb3VzZT1uZXcgZnVuY3Rpb24oKXt0aGlzLmV2ZW50cz1bXSx0aGlzLmhhc0V2ZW50cz1mdW5jdGlvbigpe3JldHVybiAwIT10aGlzLmV2ZW50cy5sZW5ndGh9LHRoaXMub25jbGljaz1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbmNsaWNrXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbmNsaWNrJiZ0Lm9uY2xpY2soKX19KX0sdGhpcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0LGUpe3RoaXMuZXZlbnRzLnB1c2goe3R5cGU6XCJvbm1vdXNlbW92ZVwiLHg6dCx5OmUscnVuOmZ1bmN0aW9uKHQpe3Qub25tb3VzZW1vdmUmJnQub25tb3VzZW1vdmUoKX19KX0sdGhpcy5ldmVudEVsZW1lbnRzPVtdLHRoaXMuY2hlY2tQYXRoPWZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBpPTA7aTx0aGlzLmV2ZW50cy5sZW5ndGg7aSsrKXt2YXIgbj10aGlzLmV2ZW50c1tpXTtlLmlzUG9pbnRJblBhdGgmJmUuaXNQb2ludEluUGF0aChuLngsbi55KSYmKHRoaXMuZXZlbnRFbGVtZW50c1tpXT10KX19LHRoaXMuY2hlY2tCb3VuZGluZ0JveD1mdW5jdGlvbih0LGUpe2Zvcih2YXIgaT0wO2k8dGhpcy5ldmVudHMubGVuZ3RoO2krKyl7dmFyIG49dGhpcy5ldmVudHNbaV07ZS5pc1BvaW50SW5Cb3gobi54LG4ueSkmJih0aGlzLmV2ZW50RWxlbWVudHNbaV09dCl9fSx0aGlzLnJ1bkV2ZW50cz1mdW5jdGlvbigpe0EuY3R4LmNhbnZhcy5zdHlsZS5jdXJzb3I9XCJcIjtmb3IodmFyIHQ9MDt0PHRoaXMuZXZlbnRzLmxlbmd0aDt0KyspZm9yKHZhciBlPXRoaXMuZXZlbnRzW3RdLGk9dGhpcy5ldmVudEVsZW1lbnRzW3RdO2k7KWUucnVuKGkpLGk9aS5wYXJlbnQ7dGhpcy5ldmVudHM9W10sdGhpcy5ldmVudEVsZW1lbnRzPVtdfX0sQX0oaXx8e30pO1wic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KSksbnVsbCE9dC5zdmcmJnQuc3ZnLnN0b3AoKSx0LmNoaWxkTm9kZXMmJjE9PXQuY2hpbGROb2Rlcy5sZW5ndGgmJlwiT0JKRUNUXCI9PXQuY2hpbGROb2Rlc1swXS5ub2RlTmFtZXx8KHQuc3ZnPW4pO3ZhciBzPXQuZ2V0Q29udGV4dChcIjJkXCIpO3ZvaWQgMCE9PWUuZG9jdW1lbnRFbGVtZW50P24ubG9hZFhtbERvYyhzLGUpOlwiPFwiPT1lLnN1YnN0cigwLDEpP24ubG9hZFhtbChzLGUpOm4ubG9hZChzLGUpfWVsc2UgZm9yKHZhciBhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmdcIikscj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgbz1hW3JdLGw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtsLndpZHRoPW8uY2xpZW50V2lkdGgsbC5oZWlnaHQ9by5jbGllbnRIZWlnaHQsby5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsLG8pLG8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvKTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2guYXBwZW5kQ2hpbGQobyksYyhsLGguaW5uZXJIVE1MKX19O1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHwodm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubWF0Y2hlcyhlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubW96TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm9NYXRjaGVzU2VsZWN0b3IoZSl9OihcImZ1bmN0aW9uXCIhPXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFplcHRvfHwoZj1mdW5jdGlvbih0LGUpe3JldHVybiAkKHQpLmlzKGUpfSksdm9pZCAwPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNpenpsZSYmKGY9U2l6emxlLm1hdGNoZXNTZWxlY3RvcikpKTt2YXIgZT0vKFxcW1teXFxdXStcXF0pL2csaT0vKCNbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGE9LyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHI9Lyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksbz0vKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksbD0vKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGg9LyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO2Z1bmN0aW9uIHcobil7dmFyIHM9WzAsMCwwXSx0PWZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5tYXRjaCh0KTtudWxsIT1pJiYoc1tlXSs9aS5sZW5ndGgsbj1uLnJlcGxhY2UodCxcIiBcIikpfTtyZXR1cm4gbj0obj1uLnJlcGxhY2UoLzpub3RcXCgoW15cXCldKilcXCkvZyxcIiAgICAgJDEgXCIpKS5yZXBsYWNlKC97W1xcc1xcU10qL2dtLFwiIFwiKSx0KGUsMSksdChpLDApLHQoYSwxKSx0KHIsMiksdChvLDEpLHQobCwxKSxuPShuPW4ucmVwbGFjZSgvW1xcKlxcc1xcKz5+XS9nLFwiIFwiKSkucmVwbGFjZSgvWyNcXC5dL2csXCIgXCIpLHQoaCwyKSxzLmpvaW4oXCJcIil9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd1N2Zz1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9e2lnbm9yZU1vdXNlOiEwLGlnbm9yZUFuaW1hdGlvbjohMCxpZ25vcmVEaW1lbnNpb25zOiEwLGlnbm9yZUNsZWFyOiEwLG9mZnNldFg6ZSxvZmZzZXRZOmksc2NhbGVXaWR0aDpuLHNjYWxlSGVpZ2h0OnN9O2Zvcih2YXIgbyBpbiBhKWEuaGFzT3duUHJvcGVydHkobykmJihyW29dPWFbb10pO2ModGhpcy5jYW52YXMsdCxyKX0pLHQuZXhwb3J0cz1jfSh0PXtleHBvcnRzOnt9fSx0LmV4cG9ydHMpLHQuZXhwb3J0c30pOyIsIi8qXG5cdEJhc2VkIG9uIHJnYmNvbG9yLmpzIGJ5IFN0b3lhbiBTdGVmYW5vdiA8c3N0b29AZ21haWwuY29tPlxuXHRodHRwOi8vd3d3LnBocGllZC5jb20vcmdiLWNvbG9yLXBhcnNlci1pbi1qYXZhc2NyaXB0L1xuKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihjb2xvcl9zdHJpbmcpIHtcbiAgICB0aGlzLm9rID0gZmFsc2U7XG4gICAgdGhpcy5hbHBoYSA9IDEuMDtcblxuICAgIC8vIHN0cmlwIGFueSBsZWFkaW5nICNcbiAgICBpZiAoY29sb3Jfc3RyaW5nLmNoYXJBdCgwKSA9PSAnIycpIHsgLy8gcmVtb3ZlICMgaWYgYW55XG4gICAgICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5zdWJzdHIoMSw2KTtcbiAgICB9XG5cbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcucmVwbGFjZSgvIC9nLCcnKTtcbiAgICBjb2xvcl9zdHJpbmcgPSBjb2xvcl9zdHJpbmcudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIGJlZm9yZSBnZXR0aW5nIGludG8gcmVnZXhwcywgdHJ5IHNpbXBsZSBtYXRjaGVzXG4gICAgLy8gYW5kIG92ZXJ3cml0ZSB0aGUgaW5wdXRcbiAgICB2YXIgc2ltcGxlX2NvbG9ycyA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgICAgICAgYXF1YTogJzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJ2YwZmZmZicsXG4gICAgICAgIGJlaWdlOiAnZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcwMDAwMDAnLFxuICAgICAgICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgICAgICAgYnJvd246ICdhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICAgICAgICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICdmZjdmNTAnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gICAgICAgIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJ2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcwMGZmZmYnLFxuICAgICAgICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gICAgICAgIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgICAgICAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgICAgICAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICAgICAgICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICAgICAgICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICAgICAgICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gICAgICAgIGRpbWdyYXk6ICc2OTY5NjknLFxuICAgICAgICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgICAgICAgZmVsZHNwYXI6ICdkMTkyNzUnLFxuICAgICAgICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICAgICAgICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gICAgICAgIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnZmZkNzAwJyxcbiAgICAgICAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnMDA4MDAwJyxcbiAgICAgICAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICAgICAgICBob25leWRldzogJ2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICdmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQgOiAnY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvIDogJzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnZmZmZmYwJyxcbiAgICAgICAga2hha2k6ICdmMGU2OGMnLFxuICAgICAgICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICAgICAgICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgICAgICAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICAgICAgICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICAgICAgICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgICAgICAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgICAgICAgbGlnaHRzbGF0ZWJsdWU6ICc4NDcwZmYnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgICAgICAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgICAgICAgbGluZW46ICdmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnODAwMDAwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICAgICAgICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICc5MzcwZDgnLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gICAgICAgIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgICAgICAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgICAgICAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gICAgICAgIG5hdnk6ICcwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICc4MDgwMDAnLFxuICAgICAgICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICdmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICAgICAgICBvcmNoaWQ6ICdkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgICAgICAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICdkODcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgICAgICAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgICAgICAgcGVydTogJ2NkODUzZicsXG4gICAgICAgIHBpbms6ICdmZmMwY2InLFxuICAgICAgICBwbHVtOiAnZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJzgwMDA4MCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICc2NjMzOTknLFxuICAgICAgICByZWQ6ICdmZjAwMDAnLFxuICAgICAgICByb3N5YnJvd246ICdiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gICAgICAgIHNhbG1vbjogJ2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJzJlOGI1NycsXG4gICAgICAgIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgICAgICAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gICAgICAgIHNub3c6ICdmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gICAgICAgIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJ2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcwMDgwODAnLFxuICAgICAgICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgICAgICAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgICAgICAgdmlvbGV0cmVkOiAnZDAyMDkwJyxcbiAgICAgICAgd2hlYXQ6ICdmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJ2ZmZmZmZicsXG4gICAgICAgIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICdmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbiAgICB9O1xuICAgIGNvbG9yX3N0cmluZyA9IHNpbXBsZV9jb2xvcnNbY29sb3Jfc3RyaW5nXSB8fCBjb2xvcl9zdHJpbmc7XG4gICAgLy8gZW1kIG9mIHNpbXBsZSB0eXBlLWluIGNvbG9yc1xuXG4gICAgLy8gYXJyYXkgb2YgY29sb3IgZGVmaW5pdGlvbiBvYmplY3RzXG4gICAgdmFyIGNvbG9yX2RlZnMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXnJnYmFcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooKD86XFxkP1xcLik/XFxkKVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2JhKDEyMywgMjM0LCA0NSwgMC44KScsICdyZ2JhKDI1NSwyMzQsMjQ1LDEuMCknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KGJpdHNbNF0pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiXFwoKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KSxcXHMqKFxcZHsxLDN9KVxcKSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWydyZ2IoMTIzLCAyMzQsIDQ1KScsICdyZ2IoMjU1LDIzNCwyNDUpJ10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdKVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pKFswLTlhLWZBLUZdezJ9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjMDBmZjAwJywgJzMzNjY5OSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0sIDE2KSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL14oWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KShbMC05YS1mQS1GXXsxfSkkLyxcbiAgICAgICAgICAgIGV4YW1wbGU6IFsnI2ZiMCcsICdmMGYnXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdICsgYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdICsgYml0c1syXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzNdICsgYml0c1szXSwgMTYpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyBzZWFyY2ggdGhyb3VnaCB0aGUgZGVmaW5pdGlvbnMgdG8gZmluZCBhIG1hdGNoXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZSA9IGNvbG9yX2RlZnNbaV0ucmU7XG4gICAgICAgIHZhciBwcm9jZXNzb3IgPSBjb2xvcl9kZWZzW2ldLnByb2Nlc3M7XG4gICAgICAgIHZhciBiaXRzID0gcmUuZXhlYyhjb2xvcl9zdHJpbmcpO1xuICAgICAgICBpZiAoYml0cykge1xuICAgICAgICAgICAgdmFyIGNoYW5uZWxzID0gcHJvY2Vzc29yKGJpdHMpO1xuICAgICAgICAgICAgdGhpcy5yID0gY2hhbm5lbHNbMF07XG4gICAgICAgICAgICB0aGlzLmcgPSBjaGFubmVsc1sxXTtcbiAgICAgICAgICAgIHRoaXMuYiA9IGNoYW5uZWxzWzJdO1xuICAgICAgICAgICAgaWYgKGNoYW5uZWxzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFscGhhID0gY2hhbm5lbHNbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9rID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gdmFsaWRhdGUvY2xlYW51cCB2YWx1ZXNcbiAgICB0aGlzLnIgPSAodGhpcy5yIDwgMCB8fCBpc05hTih0aGlzLnIpKSA/IDAgOiAoKHRoaXMuciA+IDI1NSkgPyAyNTUgOiB0aGlzLnIpO1xuICAgIHRoaXMuZyA9ICh0aGlzLmcgPCAwIHx8IGlzTmFOKHRoaXMuZykpID8gMCA6ICgodGhpcy5nID4gMjU1KSA/IDI1NSA6IHRoaXMuZyk7XG4gICAgdGhpcy5iID0gKHRoaXMuYiA8IDAgfHwgaXNOYU4odGhpcy5iKSkgPyAwIDogKCh0aGlzLmIgPiAyNTUpID8gMjU1IDogdGhpcy5iKTtcbiAgICB0aGlzLmFscGhhID0gKHRoaXMuYWxwaGEgPCAwKSA/IDAgOiAoKHRoaXMuYWxwaGEgPiAxLjAgfHwgaXNOYU4odGhpcy5hbHBoYSkpID8gMS4wIDogdGhpcy5hbHBoYSk7XG5cbiAgICAvLyBzb21lIGdldHRlcnNcbiAgICB0aGlzLnRvUkdCID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYignICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9SR0JBID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJ3JnYmEoJyArIHRoaXMuciArICcsICcgKyB0aGlzLmcgKyAnLCAnICsgdGhpcy5iICsgJywgJyArIHRoaXMuYWxwaGEgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMudG9IZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByID0gdGhpcy5yLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgdmFyIGcgPSB0aGlzLmcudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b1N0cmluZygxNik7XG4gICAgICAgIGlmIChyLmxlbmd0aCA9PSAxKSByID0gJzAnICsgcjtcbiAgICAgICAgaWYgKGcubGVuZ3RoID09IDEpIGcgPSAnMCcgKyBnO1xuICAgICAgICBpZiAoYi5sZW5ndGggPT0gMSkgYiA9ICcwJyArIGI7XG4gICAgICAgIHJldHVybiAnIycgKyByICsgZyArIGI7XG4gICAgfVxuXG4gICAgLy8gaGVscFxuICAgIHRoaXMuZ2V0SGVscFhNTCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgZXhhbXBsZXMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgLy8gYWRkIHJlZ2V4cHNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xvcl9kZWZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZXhhbXBsZSA9IGNvbG9yX2RlZnNbaV0uZXhhbXBsZTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZXhhbXBsZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBleGFtcGxlW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCB0eXBlLWluIGNvbG9yc1xuICAgICAgICBmb3IgKHZhciBzYyBpbiBzaW1wbGVfY29sb3JzKSB7XG4gICAgICAgICAgICBleGFtcGxlc1tleGFtcGxlcy5sZW5ndGhdID0gc2M7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeG1sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgeG1sLnNldEF0dHJpYnV0ZSgnaWQnLCAncmdiY29sb3ItZXhhbXBsZXMnKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGFtcGxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICB2YXIgbGlzdF9jb2xvciA9IG5ldyBSR0JDb2xvcihleGFtcGxlc1tpXSk7XG4gICAgICAgICAgICAgICAgdmFyIGV4YW1wbGVfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuc3R5bGUuY3NzVGV4dCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAnbWFyZ2luOiAzcHg7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JvcmRlcjogMXB4IHNvbGlkIGJsYWNrOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdiYWNrZ3JvdW5kOicgKyBsaXN0X2NvbG9yLnRvSGV4KCkgKyAnOyAnXG4gICAgICAgICAgICAgICAgICAgICAgICArICdjb2xvcjonICsgbGlzdF9jb2xvci50b0hleCgpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVfZGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCd0ZXN0JykpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW1fdmFsdWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcbiAgICAgICAgICAgICAgICAgICAgJyAnICsgZXhhbXBsZXNbaV0gKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvUkdCKCkgKyAnIC0+ICcgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChleGFtcGxlX2Rpdik7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGxpc3RfaXRlbV92YWx1ZSk7XG4gICAgICAgICAgICAgICAgeG1sLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4bWw7XG5cbiAgICB9XG5cbn1cbiIsIi8qXG4gICAgU3RhY2tCbHVyIC0gYSBmYXN0IGFsbW9zdCBHYXVzc2lhbiBCbHVyIEZvciBDYW52YXNcblxuICAgIFZlcnNpb246ICAgICAwLjVcbiAgICBBdXRob3I6ICAgICAgICBNYXJpbyBLbGluZ2VtYW5uXG4gICAgQ29udGFjdDogICAgIG1hcmlvQHF1YXNpbW9uZG8uY29tXG4gICAgV2Vic2l0ZTogICAgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXNcbiAgICBUd2l0dGVyOiAgICBAcXVhc2ltb25kb1xuXG4gICAgSW4gY2FzZSB5b3UgZmluZCB0aGlzIGNsYXNzIHVzZWZ1bCAtIGVzcGVjaWFsbHkgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyAtXG4gICAgSSBhbSBub3QgdG90YWxseSB1bmhhcHB5IGZvciBhIHNtYWxsIGRvbmF0aW9uIHRvIG15IFBheVBhbCBhY2NvdW50XG4gICAgbWFyaW9AcXVhc2ltb25kby5kZVxuXG4gICAgT3Igc3VwcG9ydCBtZSBvbiBmbGF0dHI6XG4gICAgaHR0cHM6Ly9mbGF0dHIuY29tL3RoaW5nLzcyNzkxL1N0YWNrQmx1ci1hLWZhc3QtYWxtb3N0LUdhdXNzaWFuLUJsdXItRWZmZWN0LWZvci1DYW52YXNKYXZhc2NyaXB0XG5cbiAgICBDb3B5cmlnaHQgKGMpIDIwMTAgTWFyaW8gS2xpbmdlbWFublxuXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiAgICBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuICAgIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuICAgIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuICAgIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG4gICAgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiAgICBjb25kaXRpb25zOlxuXG4gICAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiAgICBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuICAgIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXG4gICAgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkRcbiAgICBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxuICAgIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lOR1xuICAgIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4gICAgKi9cblxuXG52YXIgbXVsX3RhYmxlID0gW1xuICAgIDUxMiw1MTIsNDU2LDUxMiwzMjgsNDU2LDMzNSw1MTIsNDA1LDMyOCwyNzEsNDU2LDM4OCwzMzUsMjkyLDUxMixcbiAgICA0NTQsNDA1LDM2NCwzMjgsMjk4LDI3MSw0OTYsNDU2LDQyMCwzODgsMzYwLDMzNSwzMTIsMjkyLDI3Myw1MTIsXG4gICAgNDgyLDQ1NCw0MjgsNDA1LDM4MywzNjQsMzQ1LDMyOCwzMTIsMjk4LDI4NCwyNzEsMjU5LDQ5Niw0NzUsNDU2LFxuICAgIDQzNyw0MjAsNDA0LDM4OCwzNzQsMzYwLDM0NywzMzUsMzIzLDMxMiwzMDIsMjkyLDI4MiwyNzMsMjY1LDUxMixcbiAgICA0OTcsNDgyLDQ2OCw0NTQsNDQxLDQyOCw0MTcsNDA1LDM5NCwzODMsMzczLDM2NCwzNTQsMzQ1LDMzNywzMjgsXG4gICAgMzIwLDMxMiwzMDUsMjk4LDI5MSwyODQsMjc4LDI3MSwyNjUsMjU5LDUwNyw0OTYsNDg1LDQ3NSw0NjUsNDU2LFxuICAgIDQ0Niw0MzcsNDI4LDQyMCw0MTIsNDA0LDM5NiwzODgsMzgxLDM3NCwzNjcsMzYwLDM1NCwzNDcsMzQxLDMzNSxcbiAgICAzMjksMzIzLDMxOCwzMTIsMzA3LDMwMiwyOTcsMjkyLDI4NywyODIsMjc4LDI3MywyNjksMjY1LDI2MSw1MTIsXG4gICAgNTA1LDQ5Nyw0ODksNDgyLDQ3NSw0NjgsNDYxLDQ1NCw0NDcsNDQxLDQzNSw0MjgsNDIyLDQxNyw0MTEsNDA1LFxuICAgIDM5OSwzOTQsMzg5LDM4MywzNzgsMzczLDM2OCwzNjQsMzU5LDM1NCwzNTAsMzQ1LDM0MSwzMzcsMzMyLDMyOCxcbiAgICAzMjQsMzIwLDMxNiwzMTIsMzA5LDMwNSwzMDEsMjk4LDI5NCwyOTEsMjg3LDI4NCwyODEsMjc4LDI3NCwyNzEsXG4gICAgMjY4LDI2NSwyNjIsMjU5LDI1Nyw1MDcsNTAxLDQ5Niw0OTEsNDg1LDQ4MCw0NzUsNDcwLDQ2NSw0NjAsNDU2LFxuICAgIDQ1MSw0NDYsNDQyLDQzNyw0MzMsNDI4LDQyNCw0MjAsNDE2LDQxMiw0MDgsNDA0LDQwMCwzOTYsMzkyLDM4OCxcbiAgICAzODUsMzgxLDM3NywzNzQsMzcwLDM2NywzNjMsMzYwLDM1NywzNTQsMzUwLDM0NywzNDQsMzQxLDMzOCwzMzUsXG4gICAgMzMyLDMyOSwzMjYsMzIzLDMyMCwzMTgsMzE1LDMxMiwzMTAsMzA3LDMwNCwzMDIsMjk5LDI5NywyOTQsMjkyLFxuICAgIDI4OSwyODcsMjg1LDI4MiwyODAsMjc4LDI3NSwyNzMsMjcxLDI2OSwyNjcsMjY1LDI2MywyNjEsMjU5XTtcblxuXG52YXIgc2hnX3RhYmxlID0gW1xuICAgIDksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsXG4gICAgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTksXG4gICAgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDIwLCAyMCwgMjAsXG4gICAgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsXG4gICAgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCBdO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsKVxue1xuICAgIGlmICh0eXBlb2YoaW1nKSA9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW1nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxJbWFnZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmICFpbWcgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHcgPSBpbWcubmF0dXJhbFdpZHRoO1xuICAgIHZhciBoID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG5cbiAgICBpZiAodHlwZW9mKGNhbnZhcykgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBIVE1MQ2FudmFzRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgIWNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYW52YXMuc3R5bGUud2lkdGggID0gdyArICdweCc7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgIGNhbnZhcy53aWR0aCA9IHc7XG4gICAgY2FudmFzLmhlaWdodCA9IGg7XG5cbiAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHcsIGgpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG5cbiAgICBpZiAoYmx1ckFscGhhQ2hhbm5lbClcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICAgIGVsc2VcbiAgICAgICAgcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIDAsIDAsIHcsIGgsIHJhZGl1cyk7XG59XG5cbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpXG57XG4gICAgaWYgKHR5cGVvZihjYW52YXMpID09ICdzdHJpbmcnKVxuICAgICAgICB2YXIgY2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhcyk7XG4gICAgZWxzZSBpZiAodHlwZW9mIEhUTUxDYW52YXNFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpXG4gICAgICAgIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdmFyIGltYWdlRGF0YTtcblxuICAgIHRyeSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuYWJsZSB0byBhY2Nlc3MgbG9jYWwgaW1hZ2UgZGF0YTogXCIgKyBlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmFibGUgdG8gYWNjZXNzIGltYWdlIGRhdGE6IFwiICsgZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCB0b3BfeCwgdG9wX3ksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cylcbntcbiAgICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSByZXR1cm47XG4gICAgcmFkaXVzIHw9IDA7XG5cbiAgICB2YXIgaW1hZ2VEYXRhID0gZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyhjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKTtcblxuICAgIGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpLnB1dEltYWdlRGF0YShpbWFnZURhdGEsIHRvcF94LCB0b3BfeSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZURhdGFSR0JBKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpXG57XG4gICAgdmFyIHBpeGVscyA9IGltYWdlRGF0YS5kYXRhO1xuXG4gICAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJfc3VtLCBnX3N1bSwgYl9zdW0sIGFfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLCBhX291dF9zdW0sXG4gICAgICAgIHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sIGFfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCBwYSwgcmJzO1xuXG4gICAgdmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XG4gICAgdmFyIHc0ID0gd2lkdGggPDwgMjtcbiAgICB2YXIgd2lkdGhNaW51czEgID0gd2lkdGggLSAxO1xuICAgIHZhciBoZWlnaHRNaW51czEgPSBoZWlnaHQgLSAxO1xuICAgIHZhciByYWRpdXNQbHVzMSAgPSByYWRpdXMgKyAxO1xuICAgIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcblxuICAgIHZhciBzdGFja1N0YXJ0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gICAgZm9yIChpID0gMTsgaSA8IGRpdjsgaSsrKVxuICAgIHtcbiAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xuICAgICAgICBpZiAoaSA9PSByYWRpdXNQbHVzMSkgdmFyIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICAgIHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xuICAgIHZhciBzdGFja0luID0gbnVsbDtcbiAgICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuXG4gICAgeXcgPSB5aSA9IDA7XG5cbiAgICB2YXIgbXVsX3N1bSA9IG11bF90YWJsZVtyYWRpdXNdO1xuICAgIHZhciBzaGdfc3VtID0gc2hnX3RhYmxlW3JhZGl1c107XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAge1xuICAgICAgICByX2luX3N1bSA9IGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gMDtcblxuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3BdKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3ArMV0pKSAqIHJicztcbiAgICAgICAgICAgIGJfc3VtICs9IChzdGFjay5iID0gKHBiID0gcGl4ZWxzW3ArMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3ArM10pKSAqIHJicztcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSArPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtICs9IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gKz0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwaXhlbHNbeWkrM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgIT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYSA9IDI1NSAvIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9ICgocl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1t5aSsyXSA9ICgoYl9zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwaXhlbHNbeWldID0gcGl4ZWxzW3lpKzFdID0gcGl4ZWxzW3lpKzJdID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuICAgICAgICAgICAgYV9zdW0gLT0gYV9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG4gICAgICAgICAgICBhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xuXG4gICAgICAgICAgICBwID0gICh5dyArICgocCA9IHggKyByYWRpdXMgKyAxKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxKSkgPDwgMjtcblxuICAgICAgICAgICAgcl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSk7XG4gICAgICAgICAgICBnX2luX3N1bSArPSAoc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0pO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKTtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IChzdGFja0luLmEgPSBwaXhlbHNbcCszXSk7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IHJfaW5fc3VtO1xuICAgICAgICAgICAgZ19zdW0gKz0gZ19pbl9zdW07XG4gICAgICAgICAgICBiX3N1bSArPSBiX2luX3N1bTtcbiAgICAgICAgICAgIGFfc3VtICs9IGFfaW5fc3VtO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG4gICAgICAgICAgICBhX291dF9zdW0gKz0gKHBhID0gc3RhY2tPdXQuYSk7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtIC09IHBhO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSBhX2luX3N1bSA9IHJfaW5fc3VtID0gZ19zdW0gPSBiX3N1bSA9IGFfc3VtID0gcl9zdW0gPSAwO1xuXG4gICAgICAgIHlpID0geCA8PCAyO1xuICAgICAgICByX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgICAgICBnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSsxXSk7XG4gICAgICAgIGJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpKzJdKTtcbiAgICAgICAgYV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGEgPSBwaXhlbHNbeWkrM10pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG4gICAgICAgIGFfc3VtICs9IHN1bUZhY3RvciAqIHBhO1xuXG4gICAgICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgc3RhY2suciA9IHByO1xuICAgICAgICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgICAgICAgc3RhY2suYSA9IHBhO1xuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgeXAgPSB3aWR0aDtcblxuICAgICAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB5aSA9ICh5cCArIHgpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChzdGFjay5yID0gKHByID0gcGl4ZWxzW3lpXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1t5aSsxXSkpICogcmJzO1xuICAgICAgICAgICAgYl9zdW0gKz0gKHN0YWNrLmIgPSAocGIgPSBwaXhlbHNbeWkrMl0pKSAqIHJicztcbiAgICAgICAgICAgIGFfc3VtICs9IChzdGFjay5hID0gKHBhID0gcGl4ZWxzW3lpKzNdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcbiAgICAgICAgICAgIGFfaW5fc3VtICs9IHBhO1xuXG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgICAgICAgIGlmKGkgPCBoZWlnaHRNaW51czEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB5aSA9IHg7XG4gICAgICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgICAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuICAgICAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgICAgICAgcGl4ZWxzW3ArM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBpZiAocGEgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgICAgICAgICAgcGl4ZWxzW3BdICAgPSAoKHJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bSkgKiBwYTtcbiAgICAgICAgICAgICAgICBwaXhlbHNbcCsxXSA9ICgoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtKSAqIHBhO1xuICAgICAgICAgICAgICAgIHBpeGVsc1twKzJdID0gKChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW0pICogcGE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBpeGVsc1twXSA9IHBpeGVsc1twKzFdID0gcGl4ZWxzW3ArMl0gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByX3N1bSAtPSByX291dF9zdW07XG4gICAgICAgICAgICBnX3N1bSAtPSBnX291dF9zdW07XG4gICAgICAgICAgICBiX3N1bSAtPSBiX291dF9zdW07XG4gICAgICAgICAgICBhX3N1bSAtPSBhX291dF9zdW07XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSAtPSBzdGFja0luLnI7XG4gICAgICAgICAgICBnX291dF9zdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgICAgICAgYl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcbiAgICAgICAgICAgIGFfb3V0X3N1bSAtPSBzdGFja0luLmE7XG5cbiAgICAgICAgICAgIHAgPSAoeCArICgoKHAgPSB5ICsgcmFkaXVzUGx1czEpIDwgaGVpZ2h0TWludXMxID8gcCA6IGhlaWdodE1pbnVzMSkgKiB3aWR0aCkpIDw8IDI7XG5cbiAgICAgICAgICAgIHJfc3VtICs9IChyX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoZ19pbl9zdW0gKz0gKHN0YWNrSW4uZyA9IHBpeGVsc1twKzFdKSk7XG4gICAgICAgICAgICBiX3N1bSArPSAoYl9pbl9zdW0gKz0gKHN0YWNrSW4uYiA9IHBpeGVsc1twKzJdKSk7XG4gICAgICAgICAgICBhX3N1bSArPSAoYV9pbl9zdW0gKz0gKHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdKSk7XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcbiAgICAgICAgICAgIGFfb3V0X3N1bSArPSAocGEgPSBzdGFja091dC5hKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuICAgICAgICAgICAgYV9pbl9zdW0gLT0gcGE7XG5cbiAgICAgICAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcblxuICAgICAgICAgICAgeWkgKz0gd2lkdGg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGltYWdlRGF0YTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHJldHVybjtcbiAgICByYWRpdXMgfD0gMDtcblxuICAgIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBpbWFnZURhdGEgPSBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuXG4gICAgY2FudmFzLmdldENvbnRleHQoJzJkJykucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgdG9wX3gsIHRvcF95KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0ltYWdlRGF0YVJHQihpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKVxue1xuICAgIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcblxuICAgIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByX3N1bSwgZ19zdW0sIGJfc3VtLFxuICAgICAgICByX291dF9zdW0sIGdfb3V0X3N1bSwgYl9vdXRfc3VtLFxuICAgICAgICByX2luX3N1bSwgZ19pbl9zdW0sIGJfaW5fc3VtLFxuICAgICAgICBwciwgcGcsIHBiLCByYnM7XG5cbiAgICB2YXIgZGl2ID0gcmFkaXVzICsgcmFkaXVzICsgMTtcbiAgICB2YXIgdzQgPSB3aWR0aCA8PCAyO1xuICAgIHZhciB3aWR0aE1pbnVzMSAgPSB3aWR0aCAtIDE7XG4gICAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gICAgdmFyIHJhZGl1c1BsdXMxICA9IHJhZGl1cyArIDE7XG4gICAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuXG4gICAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspXG4gICAge1xuICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG4gICAgICAgIGlmIChpID09IHJhZGl1c1BsdXMxKSB2YXIgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gICAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gICAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICAgIHZhciBzdGFja091dCA9IG51bGw7XG5cbiAgICB5dyA9IHlpID0gMDtcblxuICAgIHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XG4gICAgdmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcblxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICB7XG4gICAgICAgIHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IHJfc3VtID0gZ19zdW0gPSBiX3N1bSA9IDA7XG5cbiAgICAgICAgcl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICAgICAgZ19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkrMV0pO1xuICAgICAgICBiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSsyXSk7XG5cbiAgICAgICAgcl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgICAgIGdfc3VtICs9IHN1bUZhY3RvciAqIHBnO1xuICAgICAgICBiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcblxuICAgICAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgICAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgICAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICAgICAgICByX3N1bSArPSAoc3RhY2suciA9IChwciA9IHBpeGVsc1twXSkpICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICAgICAgICBnX3N1bSArPSAoc3RhY2suZyA9IChwZyA9IHBpeGVsc1twKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1twKzJdKSkgKiByYnM7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtICs9IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gKz0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSArPSBwYjtcblxuICAgICAgICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgICAgICB9XG5cblxuICAgICAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICAgICAgc3RhY2tPdXQgPSBzdGFja0VuZDtcbiAgICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBpeGVsc1t5aV0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbeWkrMV0gPSAoZ19zdW0gKiBtdWxfc3VtKSA+PiBzaGdfc3VtO1xuICAgICAgICAgICAgcGl4ZWxzW3lpKzJdID0gKGJfc3VtICogbXVsX3N1bSkgPj4gc2hnX3N1bTtcblxuICAgICAgICAgICAgcl9zdW0gLT0gcl9vdXRfc3VtO1xuICAgICAgICAgICAgZ19zdW0gLT0gZ19vdXRfc3VtO1xuICAgICAgICAgICAgYl9zdW0gLT0gYl9vdXRfc3VtO1xuXG4gICAgICAgICAgICByX291dF9zdW0gLT0gc3RhY2tJbi5yO1xuICAgICAgICAgICAgZ19vdXRfc3VtIC09IHN0YWNrSW4uZztcbiAgICAgICAgICAgIGJfb3V0X3N1bSAtPSBzdGFja0luLmI7XG5cbiAgICAgICAgICAgIHAgPSAgKHl3ICsgKChwID0geCArIHJhZGl1cyArIDEpIDwgd2lkdGhNaW51czEgPyBwIDogd2lkdGhNaW51czEpKSA8PCAyO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSAoc3RhY2tJbi5yID0gcGl4ZWxzW3BdKTtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSk7XG4gICAgICAgICAgICBiX2luX3N1bSArPSAoc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0pO1xuXG4gICAgICAgICAgICByX3N1bSArPSByX2luX3N1bTtcbiAgICAgICAgICAgIGdfc3VtICs9IGdfaW5fc3VtO1xuICAgICAgICAgICAgYl9zdW0gKz0gYl9pbl9zdW07XG5cbiAgICAgICAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG5cbiAgICAgICAgICAgIHJfb3V0X3N1bSArPSAocHIgPSBzdGFja091dC5yKTtcbiAgICAgICAgICAgIGdfb3V0X3N1bSArPSAocGcgPSBzdGFja091dC5nKTtcbiAgICAgICAgICAgIGJfb3V0X3N1bSArPSAocGIgPSBzdGFja091dC5iKTtcblxuICAgICAgICAgICAgcl9pbl9zdW0gLT0gcHI7XG4gICAgICAgICAgICBnX2luX3N1bSAtPSBwZztcbiAgICAgICAgICAgIGJfaW5fc3VtIC09IHBiO1xuXG4gICAgICAgICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG5cbiAgICAgICAgICAgIHlpICs9IDQ7XG4gICAgICAgIH1cbiAgICAgICAgeXcgKz0gd2lkdGg7XG4gICAgfVxuXG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKylcbiAgICB7XG4gICAgICAgIGdfaW5fc3VtID0gYl9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSByX3N1bSA9IDA7XG5cbiAgICAgICAgeWkgPSB4IDw8IDI7XG4gICAgICAgIHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgICAgIGdfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpKzFdKTtcbiAgICAgICAgYl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkrMl0pO1xuXG4gICAgICAgIHJfc3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgICAgICBnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICAgICAgYl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XG5cbiAgICAgICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdGFjay5yID0gcHI7XG4gICAgICAgICAgICBzdGFjay5nID0gcGc7XG4gICAgICAgICAgICBzdGFjay5iID0gcGI7XG4gICAgICAgICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICB5cCA9IHdpZHRoO1xuXG4gICAgICAgIGZvciAoaSA9IDE7IGkgPD0gcmFkaXVzOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHlpID0gKHlwICsgeCkgPDwgMjtcblxuICAgICAgICAgICAgcl9zdW0gKz0gKHN0YWNrLnIgPSAocHIgPSBwaXhlbHNbeWldKSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgICAgICAgIGdfc3VtICs9IChzdGFjay5nID0gKHBnID0gcGl4ZWxzW3lpKzFdKSkgKiByYnM7XG4gICAgICAgICAgICBiX3N1bSArPSAoc3RhY2suYiA9IChwYiA9IHBpeGVsc1t5aSsyXSkpICogcmJzO1xuXG4gICAgICAgICAgICByX2luX3N1bSArPSBwcjtcbiAgICAgICAgICAgIGdfaW5fc3VtICs9IHBnO1xuICAgICAgICAgICAgYl9pbl9zdW0gKz0gcGI7XG5cbiAgICAgICAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgICAgICAgaWYoaSA8IGhlaWdodE1pbnVzMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB5cCArPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHlpID0geDtcbiAgICAgICAgc3RhY2tJbiA9IHN0YWNrU3RhcnQ7XG4gICAgICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG4gICAgICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgcCA9IHlpIDw8IDI7XG4gICAgICAgICAgICBwaXhlbHNbcF0gICA9IChyX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsxXSA9IChnX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG4gICAgICAgICAgICBwaXhlbHNbcCsyXSA9IChiX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XG5cbiAgICAgICAgICAgIHJfc3VtIC09IHJfb3V0X3N1bTtcbiAgICAgICAgICAgIGdfc3VtIC09IGdfb3V0X3N1bTtcbiAgICAgICAgICAgIGJfc3VtIC09IGJfb3V0X3N1bTtcblxuICAgICAgICAgICAgcl9vdXRfc3VtIC09IHN0YWNrSW4ucjtcbiAgICAgICAgICAgIGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XG4gICAgICAgICAgICBiX291dF9zdW0gLT0gc3RhY2tJbi5iO1xuXG4gICAgICAgICAgICBwID0gKHggKyAoKChwID0geSArIHJhZGl1c1BsdXMxKSA8IGhlaWdodE1pbnVzMSA/IHAgOiBoZWlnaHRNaW51czEpICogd2lkdGgpKSA8PCAyO1xuXG4gICAgICAgICAgICByX3N1bSArPSAocl9pbl9zdW0gKz0gKHN0YWNrSW4uciA9IHBpeGVsc1twXSkpO1xuICAgICAgICAgICAgZ19zdW0gKz0gKGdfaW5fc3VtICs9IChzdGFja0luLmcgPSBwaXhlbHNbcCsxXSkpO1xuICAgICAgICAgICAgYl9zdW0gKz0gKGJfaW5fc3VtICs9IChzdGFja0luLmIgPSBwaXhlbHNbcCsyXSkpO1xuXG4gICAgICAgICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuXG4gICAgICAgICAgICByX291dF9zdW0gKz0gKHByID0gc3RhY2tPdXQucik7XG4gICAgICAgICAgICBnX291dF9zdW0gKz0gKHBnID0gc3RhY2tPdXQuZyk7XG4gICAgICAgICAgICBiX291dF9zdW0gKz0gKHBiID0gc3RhY2tPdXQuYik7XG5cbiAgICAgICAgICAgIHJfaW5fc3VtIC09IHByO1xuICAgICAgICAgICAgZ19pbl9zdW0gLT0gcGc7XG4gICAgICAgICAgICBiX2luX3N1bSAtPSBwYjtcblxuICAgICAgICAgICAgc3RhY2tPdXQgPSBzdGFja091dC5uZXh0O1xuXG4gICAgICAgICAgICB5aSArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZURhdGE7XG59XG5cbmZ1bmN0aW9uIEJsdXJTdGFjaygpXG57XG4gICAgdGhpcy5yID0gMDtcbiAgICB0aGlzLmcgPSAwO1xuICAgIHRoaXMuYiA9IDA7XG4gICAgdGhpcy5hID0gMDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbWFnZTogcHJvY2Vzc0ltYWdlLFxuICAgIGNhbnZhc1JHQkE6IHByb2Nlc3NDYW52YXNSR0JBLFxuICAgIGNhbnZhc1JHQjogcHJvY2Vzc0NhbnZhc1JHQixcbiAgICBpbWFnZURhdGFSR0JBOiBwcm9jZXNzSW1hZ2VEYXRhUkdCQSxcbiAgICBpbWFnZURhdGFSR0I6IHByb2Nlc3NJbWFnZURhdGFSR0Jcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJjb25zdCBiaWdJbnQgPSByZXF1aXJlKCdiaWctaW50ZWdlcicpO1xuXG5leHBvcnQgZnVuY3Rpb24gYmlnSW50VG9TY2lOb3RhdGlvbihuLCBmcmFjdGlvbkRpZ2l0cz0yKSB7IFxuXHQvKiBTY2llbnRpZmljIG5vdGF0aW9uIGZvciBCaWdJbnQgbnVtYmVycyAobmVlZHMgc29tZSBvcHRpbWl6YXRpb24pICovXG5cdGNvbnN0IG5TdHIgPSBuLnRvU3RyaW5nKDEwKTtcblx0Y29uc3QgbkxlbiA9IG5TdHIubGVuZ3RoO1xuXHRjb25zdCBmcmFjdGlvbiA9IG5MZW4tMSA8IDE2ID8gbkxlbi0xIDogMTY7XG5cdGNvbnN0IFt3aG9sZXMsIHBhcnRzXSA9IFtuU3RyLnN1YnN0cigwLDEpLCBuTGVuID4gMSA/IG5TdHIuc3Vic3RyKDEsZnJhY3Rpb24pIDogMF07XG5cdGxldCBuRmxvYXQgPSBwYXJzZUZsb2F0KHdob2xlcysnLicrcGFydHMpO1xuXHRuRmxvYXQgPSBuRmxvYXQudG9QcmVjaXNpb24oIChmcmFjdGlvbkRpZ2l0cysxID4gcGFydHMubGVuZ3RoID8gMiA6IGZyYWN0aW9uRGlnaXRzKzEpICk7XG5cdHJldHVybiB0ZXhgXFxhcHByb3ggJHtuRmxvYXR9IFxcdGltZXMgMTBeeyR7bkxlbi0xfX1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQmlnSW50KG1heCkge1xuXHRyZXR1cm4gYmlnSW50LnJhbmRCZXR3ZWVuKDAsbWF4KTtcbn1cblxuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5jb25zdCBwcm90b0NoYXJ0ID0ge1xuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICBtYXJnaW46IHtcbiAgICAgIGxlZnQ6IDEwLFxuICAgICAgcmlnaHQ6IDEwLFxuICAgICAgdG9wOiAxMCxcbiAgICAgIGJvdHRvbTogMTAsXG4gICAgfSxcbiAgfTtcbiAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFydEZhY3Rvcnkob3B0cywgcHJvdG8gPSBwcm90b0NoYXJ0KSB7XG5cbiAgY29uc3QgY2hhcnQgPSBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgb3B0cyk7XG4gIGlmKG9wdHMucGFyZW50SWQpIGNoYXJ0LnBhcmVudCA9IGQzLnNlbGVjdChgIyR7b3B0cy5wYXJlbnRJZH1gKTtcbiAgZWxzZSBjaGFydC5wYXJlbnQgPSBkMy5zZWxlY3QoJ2JvZHknKTtcblxuICBjaGFydC5zdmcgPSBjaGFydC5wYXJlbnRcbiAgICAuYXBwZW5kKCdzdmcnKS5sb3dlcigpXG4gICAgLmF0dHIoJ2lkJywgY2hhcnQuaWQgfHwgJ2NoYXJ0JylcbiAgICAuYXR0cignd2lkdGgnLCBjaGFydC53aWR0aCAtIGNoYXJ0Lm1hcmdpbi5yaWdodClcbiAgICAuYXR0cignaGVpZ2h0JywgY2hhcnQuaGVpZ2h0IC0gY2hhcnQubWFyZ2luLmJvdHRvbSk7XG5cbiAgaWYgKG9wdHMuc3R5bGVDbGFzcykgY2hhcnQuc3ZnLmF0dHIoJ2NsYXNzJywgb3B0cy5zdHlsZUNsYXNzKTtcblxuICAvLyBpZiAob3B0cy5kcmF3QmFja2dyb3VuZCkgXG4gIGNoYXJ0LnN2Zy5hcHBlbmQoJ3JlY3QnKVxuICAgIC5hdHRyKCdpZCcsICdiYWNrZ3JvdW5kJylcbiAgICAuYXR0cignd2lkdGgnLCcxMDAlJykuYXR0cignaGVpZ2h0JywnMTAwJScpXG4gICAgLmF0dHIoJ2ZpbGwnLCAob3B0cy5kcmF3QmFja2dyb3VuZCA/ICcjZmZmZmZmJyA6ICdub25lJykpOyBcbiAgICAvLyAuYXR0cignZmlsbCcsICdyZ2JhKDI1NSwwLDAsLjIpJyk7XG5cbiAgY2hhcnQuY29udGFpbmVyID0gY2hhcnQuc3ZnLmFwcGVuZCgnZycpXG4gICAgLmF0dHIoJ2lkJywgJ2NvbnRhaW5lcicpXG4gICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHtjaGFydC5tYXJnaW4ubGVmdH0sICR7Y2hhcnQubWFyZ2luLnRvcH0pYCk7XG5cbiAgcmV0dXJuIGNoYXJ0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZml0Q2hhcnQoY2hhcnQsIHBhZGRpbmcpIHtcbiAgLy8gY2FsY3VsYXRlIHJlYWwgZGltZW5zaW9ucyBvZiBhIGNoYXJ0IChhc3N1bWVzIGNoYXJ0IGlzIGEgZy1lbGVtZW50IHdyYXBwZWQgaW5zaWRlIGFuIHN2ZylcbiAgZDMuc2VsZWN0KGNoYXJ0Lm5vZGUoKS5wYXJlbnRFbGVtZW50KVxuICAgICAgLmF0dHIoJ3dpZHRoJywgY2hhcnQubm9kZSgpLmdldEJCb3goKS53aWR0aCArIHBhZGRpbmcubGVmdCArIHBhZGRpbmcucmlnaHQpXG4gICAgICAuYXR0cignaGVpZ2h0JywgY2hhcnQubm9kZSgpLmdldEJCb3goKS5oZWlnaHQgKyBwYWRkaW5nLnRvcCArIHBhZGRpbmcuYm90dG9tKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlYWxEZXB0aChkKSB7XG4gIC8vIGNhbGN1bGF0ZXMgdGhlIHJlYWwgZGVwdGggb2YgYSBGT1JNIGJ5IHN1YnRyYWN0aW5nIHVubWFya2VkIGFuZCBvcGVuIHJlRW50cnkgRk9STXNcbiAgY29uc3QgZ2hvc3RzID0gZC5hbmNlc3RvcnMoKVxuICAgICAgLmZpbHRlcihlID0+IChlLmRhdGEudHlwZSA9PT0gJ2Zvcm0nICYmIGUuZGF0YS51bm1hcmtlZCB8fCBcbiAgICAgICAgICAgICAgICBlLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknICYmIGUuZGF0YS5sYXN0T3BlbikpLmxlbmd0aDtcbiAgcmV0dXJuIGQuZGVwdGggLSBnaG9zdHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0ZXh0U3Vic2NyaXB0KHRleHQpIHtcbiAgLy8gc2VsZWN0aW9uIG1vZHVsZSB0byBzcGxpdCB0ZXh0IGludG8gcGFydHMgZm9yIHN1YnNjcmlwdHMgKGUuZy4gXCJ4X25cIilcbiAgcmV0dXJuIChzZWxlY3Rpb24pID0+IHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkKSB7XG5cbiAgICAgICAgY29uc3Qgc3BsaXQgPSAodHlwZW9mKHRleHQoZCkpID09PSAnc3RyaW5nJykgPyB0ZXh0KGQpLnNwbGl0KCdfJykgOiAnJztcblxuICAgICAgICAvLyBpZiAoc3BsaXQubGVuZ3RoID4gMSkge1xuICAgICAgICAvLyAgIHNwbGl0LmZvckVhY2goKHBhcnQsaSkgPT4ge1xuXG4gICAgICAgIC8vICAgICBjb25zdCBlbGVtID0gZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAvLyAgICAgICAudGV4dChkID0+IHBhcnQpO1xuXG4gICAgICAgIC8vICAgICBpZiAoaSUyPT09MSkgZWxlbVxuICAgICAgICAvLyAgICAgICAuYXR0cignZHgnLCAxKVxuICAgICAgICAvLyAgICAgICAuYXR0cignZHknLCA2KVxuICAgICAgICAvLyAgICAgICAuYXR0cignZm9udC1zaXplJywgJy44ZW0nKTtcbiAgICAgICAgLy8gICB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAoc3BsaXQubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmFwcGVuZCgndHNwYW4nKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBzcGxpdFswXSk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuYXBwZW5kKCd0c3BhbicpXG4gICAgICAgICAgICAudGV4dChkID0+IHNwbGl0WzFdKVxuICAgICAgICAgICAgLmF0dHIoJ2R4JywgMSlcbiAgICAgICAgICAgIC5hdHRyKCdkeScsIDYpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcuOGVtJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAudGV4dCh0ZXh0KGQpKTtcbiAgICAgICAgfVxuXG4gICAgfSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTaXplKHRleHQsIGZvbnRTaXplPSdpbmhlcml0JywgZm9udEZhbWlseT0naW5oZXJpdCcsIGZvbnRTdHlsZT0nbm9ybWFsJykge1xuICAvKiBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2h1eXRkLzMyN2U0NTNjOTVjYTNlZGFkYjMyZDBjODY3ZTI1NjFiIFxuICBDcmVkaXRzIHRvOiBIdXkgVHIuICovXG4gIGlmICghZDMpIHJldHVybjtcbiAgdmFyIGNvbnRhaW5lciA9IGQzLnNlbGVjdCgnYm9keScpLmFwcGVuZCgnc3ZnJyk7XG4gIGNvbnRhaW5lci5hcHBlbmQoJ3RleHQnKVxuICAgIC5zdHlsZSgnZm9udC1zaXplJywgZm9udFNpemUpXG4gICAgLnN0eWxlKCdmb250LXN0eWxlJywgZm9udFN0eWxlKVxuICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KVxuICAgIC5hdHRyKCd4JywnLTk5OTknKS5hdHRyKCd5JywnLTk5OTknKVxuICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoKCkgPT4gdGV4dCkpOyAvLyAudGV4dCh0ZXh0KTtcbiAgdmFyIHNpemUgPSBjb250YWluZXIubm9kZSgpLmdldEJCb3goKTtcbiAgY29udGFpbmVyLnJlbW92ZSgpO1xuICByZXR1cm4geyB3aWR0aDogc2l6ZS53aWR0aCwgaGVpZ2h0OiBzaXplLmhlaWdodCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BhY2l0eShjb2xvciwgYWxwaGEpIHtcbiAgY29uc3QgY29sb3JDb3B5ID0gZDMuY29sb3IoY29sb3IpO1xuY29sb3JDb3B5Lm9wYWNpdHkgPSBhbHBoYTtcbnJldHVybiBjb2xvckNvcHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VSZW1haW5kZXIobnVtLCBfZGVuKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBzaWduID0gMTtcbiAgbGV0IGRlbiA9IE1hdGgucm91bmQoX2Rlbik7XG4gIGxldCBjYW5kaWRhdGUgPSBkZW47XG4gIHdoaWxlIChudW0gJSBkZW4gPiAwLjMpIHtcbiAgICAgIGNhbmRpZGF0ZSArPSBzaWduICogMC4wMDE7XG4gICAgICBpZiAobnVtJWNhbmRpZGF0ZSA8IG51bSVkZW4pIGRlbiA9IGNhbmRpZGF0ZTtcblxuICAgICAgaWYoY291bnQgPj0gNTAwMCkge1xuICAgICAgICAgIGNhbmRpZGF0ZSA9IE1hdGgucm91bmQoX2Rlbik7XG4gICAgICAgICAgc2lnbiA9IC0xO1xuICAgICAgfVxuICAgICAgaWYoY291bnQgPj0gMTAwMDApIGJyZWFrO1xuICAgICAgY291bnQrKztcbiAgfVxuICByZXR1cm4gZGVuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNDaXJjbGVEYXNoKHIsIHVuaXQsIGZyYWN0aW9uKSB7XG4gIGNvbnN0IGNpcmMgPSBNYXRoLlBJKjIgKiByO1xuICByZXR1cm4gcmVkdWNlUmVtYWluZGVyKGNpcmMsIHVuaXQpICogZnJhY3Rpb247XG59XG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlRGFzaEFycmF5KHIsIHVuaXQsIGZyYWN0aW9ucykge1xuICBsZXQgc3RyID0gJyc7XG4gIGZvciAobGV0IGkgaW4gZnJhY3Rpb25zKSB7XG4gICAgICBzdHIgPSBzdHIuY29uY2F0KGAkeyBjYWxjQ2lyY2xlRGFzaChyLCB1bml0LCBmcmFjdGlvbnNbaV0pIH1weCBgKTtcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2lyY2xlTGFiZWwodGV4dCwgZm9udFNpemU9J2luaGVyaXQnLCBmb250RmFtaWx5PSdpbmhlcml0JywgZm9udFN0eWxlPSdub3JtYWwnKSB7XG4gIC8vIHNlbGVjdGlvbiBtb2R1bGUgdG8gc3BsaXQgdGV4dCBpbnRvIHBhcnRzIGZvciBzdWJzY3JpcHRzIChlLmcuIFwieF9uXCIpXG4gIHJldHVybiAoc2VsZWN0aW9uKSA9PiB7XG5cbiAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uKGQpIHtcblxuICAgICAgICAgIGNvbnN0IHRleHRTeiA9IHRleHRTaXplKHRleHQoZCksIGZvbnRTaXplLCBmb250RmFtaWx5KTtcbiAgICAgICAgICBjb25zdCBtYXJnaW4gPSA1MDtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIGZvbnRTaXplKVxuICAgICAgICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCBmb250U3R5bGUpXG4gICAgICAgICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCBmb250RmFtaWx5KVxuICAgICAgICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAgIC5yYWlzZSgpXG4gICAgICAgICAgICAgIC50ZXh0KGQgPT4gdGV4dChkKSk7XG5cbiAgICAgICAgICBkMy5zZWxlY3QodGhpcykuZmlsdGVyKGQgPT4gZC5yKjIgPj0gdGV4dFN6LndpZHRoICsgbWFyZ2luKS5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAgICAgICAuY2xhc3NlZCgnbGFiZWwgaW5zaWRlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgLmF0dHIoJ3knLCBkID0+IGQuciAtIHRleHRTei5oZWlnaHQqMC41IClcbiAgICAgICAgICAgICAgLmF0dHIoJ2RvbWluYW50LWJhc2VsaW5lJywnYmFzZWxpbmUnKTtcblxuICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5maWx0ZXIoZCA9PiBkLnIqMiA8IHRleHRTei53aWR0aCArIG1hcmdpbikuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgICAgICAgLmNsYXNzZWQoJ2xhYmVsIG91dHNpZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAuYXR0cigneScsIGQgPT4gZC5yICsgNClcbiAgICAgICAgICAgICAgLmF0dHIoJ2RvbWluYW50LWJhc2VsaW5lJywnaGFuZ2luZycpO1xuXG4gICAgICB9KTtcbiAgfTtcbn0iLCJpbXBvcnQgKiBhcyBjYW52ZyBmcm9tICdjYW52Zyc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8galF1ZXJ5IHJlcGxhY2VtZW50czpcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGwoZWxlbXMpIHtcbiAgICBpZih0eXBlb2YoZWxlbXMpID09PSAnc3RyaW5nJykgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsZW1zKTtcbiAgICBlbGVtcy5mb3JFYWNoKCAoZSxpKSA9PiB7XG4gICAgICAgIHNob3coZSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAvLyBlbGVtLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsKGVsZW1zKSB7XG4gICAgaWYodHlwZW9mKGVsZW1zKSA9PT0gJ3N0cmluZycpIGVsZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtcyk7XG4gICAgZWxlbXMuZm9yRWFjaCggKGUsaSkgPT4ge1xuICAgICAgICBoaWRlKGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGhpZGUoZWxlbSkge1xuICAgIGlmKHR5cGVvZihlbGVtKSA9PT0gJ3N0cmluZycpIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cdC8vIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtdmlzaWJsZScpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUFsbChlbGVtcykge1xuICAgIGlmKHR5cGVvZihlbGVtcykgPT09ICdzdHJpbmcnKSBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbXMpO1xuICAgIGVsZW1zLmZvckVhY2goIChlLGkpID0+IHtcbiAgICAgICAgdG9nZ2xlKGUpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZShlbGVtKSB7XG4gICAgaWYodHlwZW9mKGVsZW0pID09PSAnc3RyaW5nJykgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcblx0Ly8gZWxlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy12aXNpYmxlJyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsZW0pIHtcbiAgICBpZih0eXBlb2YoZWxlbSkgPT09ICdzdHJpbmcnKSBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICByZXR1cm4gKCAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2Qtbm9uZScpICk7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgICAvKiBwYWRzIDBzIGJlZm9yZSBudW1iZXIgc3RyaW5nXG4gICAgICAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk5ODgyMlxuICAgICAgIENyZWRpdHMgdG86IEluZmluaXRpZXNMb29wICovXG5cbiAgICB2YXIgcyA9IG51bStcIlwiOyAvLyBjb252ZXJ0cyBudW1iZXIgdG8gc3RyaW5nIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG4gICAgd2hpbGUgKHMubGVuZ3RoIDwgc2l6ZSkgcyA9IFwiMFwiICsgcztcbiAgICByZXR1cm4gcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVTdmcoc3ZnRWwsIG5hbWUpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NjQwMzU4OVxuICAgIENyZWRpdHMgdG86IGRlZmdoaTE5NzcsIERhdmVUaGVTY2llbnRpc3QsIHNlbnogKi9cbiAgICBzdmdFbC5zZXRBdHRyaWJ1dGUoXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpO1xuICAgIHZhciBzdmdEYXRhID0gc3ZnRWwub3V0ZXJIVE1MO1xuICAgIHZhciBwcmVmYWNlID0gJzw/eG1sIHZlcnNpb249XCIxLjBcIiBzdGFuZGFsb25lPVwibm9cIj8+XFxyXFxuJztcbiAgICB2YXIgc3ZnQmxvYiA9IG5ldyBCbG9iKFtwcmVmYWNlLCBzdmdEYXRhXSwge3R5cGU6XCJpbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLThcIn0pO1xuICAgIHZhciBzdmdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHN2Z0Jsb2IpO1xuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHN2Z1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2F2ZUltZyhzdmcsIG5hbWUsIHNjYWxlPTEpIHsgICAgXG4gICAgLyogVXNpbmcgY2FudmcgbGliLiBodHRwczovL2dpdGh1Yi5jb20vY2FudmcvY2FudmcgYW5kIHBhcnRzIG9mIHRoZSBhcHByb2FjaCBmb3Igc2F2ZVN2Zy5cbiAgICBUaGFua3MgdG8gamJlYXJkNCBpbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5NzYwMzQvMTIwNDA0NyBmb3IgdGhlIHN1Z2dlc3Rpb24gKi9cblxuICAgIGNvbnN0IHcgPSBzdmcuZ2V0QkJveCgpLndpZHRoO1xuICAgIGNvbnN0IGggPSBzdmcuZ2V0QkJveCgpLmhlaWdodDtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCdkcmF3aW5nQXJlYScpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcbiAgICBjYW52YXMud2lkdGggPSB3ICogc2NhbGU7XG4gICAgY2FudmFzLmhlaWdodCA9IGggKiBzY2FsZTtcblxuICAgIGNhbnZnKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkcmF3aW5nQXJlYScpLCBzdmcub3V0ZXJIVE1MLCB7IGlnbm9yZURpbWVuc2lvbnM6dHJ1ZSwgaWdub3JlTW91c2U6IHRydWUsIGlnbm9yZUFuaW1hdGlvbjogdHJ1ZSxcbiAgICBzY2FsZVdpZHRoOiB3ICogc2NhbGUsXG4gICAgc2NhbGVIZWlnaHQ6IGggKiBzY2FsZSB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJhd2luZ0FyZWEnKSApO1xuXG4gICAgY29uc3QgaW1nVXJsID0gY2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKTtcblxuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IGltZ1VybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBuYW1lO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG93bmxvYWRMaW5rKTtcbiAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZShmb3JtYXQsIHN2ZywgbmFtZSwgc2NhbGUpIHtcbiAgICAvLyBleHBvcnRzIGdyYXBocyBpbnRvIHN2Z1xuICAgIFxuICAgIG5hbWUgPSBuYW1lIHx8wqBzdmcucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBnZXRUaW1lc3RhbXAoKTtcblxuXHR0cnkge1xuICAgIHN3aXRjaChmb3JtYXQpIHtcbiAgICAgICAgY2FzZSAnc3ZnJzpcbiAgICAgICAgICAgIHNhdmVTdmcoc3ZnLCB0aW1lc3RhbXArJ18nK25hbWUrJy5zdmcnLCBzY2FsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaW1nJzpcbiAgICAgICAgICAgIHNhdmVJbWcoc3ZnLCB0aW1lc3RhbXArJ18nK25hbWUrJy5wbmcnLCBzY2FsZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cdH0gY2F0Y2goZSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycikge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1MDMwMTE3IFxuICAgIENyZWRpdHMgdG86IE5vYWggRnJlaXRhcyAqL1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoZmxhdCwgdG9GbGF0dGVuKSB7XG4gICAgcmV0dXJuIGZsYXQuY29uY2F0KEFycmF5LmlzQXJyYXkodG9GbGF0dGVuKSA/IGZsYXR0ZW4odG9GbGF0dGVuKSA6IHRvRmxhdHRlbik7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGUoYXJyLG9iaikge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NjNcbiAgICBDcmVkaXRzIHRvOiBWaW5rbyBWcnNhbG92aWMgKi9cbiAgICByZXR1cm4gKGFyci5pbmRleE9mKG9iaikgIT0gLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhdmVyc2UobyxmdW5jKSB7XG4gICAgLyogIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzIyNjY4L3RyYXZlcnNlLWFsbC10aGUtbm9kZXMtb2YtYS1qc29uLW9iamVjdC10cmVlLXdpdGgtamF2YXNjcmlwdCBcbiAgICBDcmVkaXRzIHRvOiBUaGVIaXBwbyAqL1xuICAgIGZvciAodmFyIGkgaW4gbykge1xuICAgICAgICBmdW5jLmFwcGx5KG51bGwsW2ksb1tpXV0pOyAgLy8gbnVsbCBvciB0aGlzP1xuICAgICAgICBpZiAob1tpXSAhPT0gbnVsbCAmJiB0eXBlb2Yob1tpXSk9PVwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vZ29pbmcgb25lIHN0ZXAgZG93biBpbiB0aGUgb2JqZWN0IHRyZWUhIVxuICAgICAgICAgICAgdHJhdmVyc2Uob1tpXSxmdW5jKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbCA9IGZ1bmN0aW9uKGZpbmQsIHJlcGxhY2UsIGVzY2FwZU1ldGEpIHtcbiAgICAvKiAgTW9kaWZpZWQgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE0NDc4My9ob3ctdG8tcmVwbGFjZS1hbGwtb2NjdXJyZW5jZXMtb2YtYS1zdHJpbmctaW4tamF2YXNjcmlwdCBcbiAgICBDcmVkaXRzIHRvOiBTZWFuIEJyaWdodCAqL1xuICAgIGlmKGVzY2FwZU1ldGEpIGZpbmQgPSBlc2NhcGVSZWdFeHAoZmluZCk7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGZpbmQsICdnJyksIHJlcGxhY2UpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuU3RyaW5nLnByb3RvdHlwZS5hZGRCZWZvcmU9ZnVuY3Rpb24oaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyB0aGlzLnN1YnN0cihpbmRleCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIHN0YXJ0MSwgc3RvcDEsIHN0YXJ0Miwgc3RvcDIpIHtcbiAgICAvLyBQcm9jZXNzaW5nLWxpa2UgbWFwIGZ1bmN0aW9uXG4gICAgcmV0dXJuIHN0YXJ0MiArIChzdG9wMiAtIHN0YXJ0MikgKiAoKHZhbHVlIC0gc3RhcnQxKSAvIChzdG9wMSAtIHN0YXJ0MSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlNb3ZlSXRlbShhcnIsIGZyb20sIHRvKSB7XG4gIGFyci5zcGxpY2UodG8sIDAsIGFyci5zcGxpY2UoZnJvbSwgMSlbMF0pO1xufVxuXG5TdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBdD1mdW5jdGlvbihpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdHIoMCwgaW5kZXgpICsgcmVwbGFjZW1lbnQrIHRoaXMuc3Vic3RyKGluZGV4ICsgcmVwbGFjZW1lbnQubGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVzdGFtcCgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgIHJldHVybiAoJydcbiAgICArIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkuc3Vic3RyKDIpIFxuICAgICsgKHBhZCgoZGF0ZS5nZXRVVENNb250aCgpKzEpLDIpKSBcbiAgICArIChwYWQoZGF0ZS5nZXRVVENEYXRlKCksMikpICsgJy0nXG4gICAgKyAocGFkKChkYXRlLmdldEhvdXJzKCkpLDIpKVxuICAgICsgKHBhZCgoZGF0ZS5nZXRNaW51dGVzKCkpLDIpKVxuICAgICsgKHBhZCgoZGF0ZS5nZXRTZWNvbmRzKCkpLDIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlU1ZHKHN2ZywgY29udGFpbmVyLCByYXRpbykge1xuICAgIGNvbnN0IHByZWZpeGVzID0gWyctbXMtdHJhbnNmb3JtJywnLXdlYmtpdC10cmFuc2Zvcm0nLCctbW96LXRyYW5zZm9ybScsJy1vLXRyYW5zZm9ybScsJ3RyYW5zZm9ybSddO1xuICAgIHByZWZpeGVzLmZvckVhY2gocHJlZml4ID0+IHtcbiAgICAgICAgc3ZnLnN0eWxlW3ByZWZpeF0gPSBgc2NhbGUoJHtyYXRpb30pIHRyYW5zbGF0ZSgwLDApYDtcbiAgICB9KTtcbiAgICAvLyBjb250YWluZXIuc3R5bGUud2lkdGggPSBwYXJzZUludChzdmcuZ2V0QkJveCgpLndpZHRoICogcmF0aW8pICsgJ3B4JztcbiAgICAvLyBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoc3ZnLmdldEJCb3goKS5oZWlnaHQgKiByYXRpbykgKyAncHgnO1xuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHN2Zy5nZXRCQm94KCkud2lkdGggKiByYXRpbyArICdweCc7XG4gICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHN2Zy5nZXRCQm94KCkuaGVpZ2h0ICogcmF0aW8gKyAncHgnO1xufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgcGVybXV0ZUFycmF5ID0gaW5wdXRBcnJheSA9PiBpbnB1dEFycmF5LnJlZHVjZShmdW5jdGlvbiBwZXJtdXRlKHJlcywgaXRlbSwga2V5LCBhcnIpIHtcbiAgLyogUGVybXV0YXRpb24gYWxnb3JpdGhtIGZvciBhcnJheXMgb2YgYXJiaXRyYXJ5IGxlbmd0aFxuICAgICAoY3JlZGl0cyAmIHRoYW5rcyB0byB1c2VyIG1vbmtleTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDYzNDQwKSAqL1xuICAgIHJldHVybiByZXMuY29uY2F0KGFyci5sZW5ndGggPiAxICYmIGFyci5zbGljZSgwLCBrZXkpXG4gICAgICAuY29uY2F0KGFyci5zbGljZShrZXkgKyAxKSlcbiAgICAgIC5yZWR1Y2UocGVybXV0ZSwgW10pXG4gICAgICAubWFwKGZ1bmN0aW9uKHBlcm0pIHsgcmV0dXJuIFtpdGVtXS5jb25jYXQocGVybSk7IH0pIHx8IFtbaXRlbV1dKTtcbn0sIFtdKTtcblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlU3RyID0gKHN0cixsaW1pdCxhcHBlbmRpeD0nJykgPT4gc3RyLmxlbmd0aCA+IGxpbWl0ID8gKHN0ci5zdWJzdHIoMCxsaW1pdCkgKyBhcHBlbmRpeCkgOiBzdHI7XG5cbmV4cG9ydCBjb25zdCByZXZlcnNlTWFwcGluZyA9IChvLGJpamVjdGl2ZT1mYWxzZSkgPT4gT2JqZWN0LmtleXMobykucmVkdWNlKChyLCBrKSA9PiBPYmplY3QuYXNzaWduKHIsIHsgW29ba11dOiAoYmlqZWN0aXZlID8gayA6IChyW29ba11dIHx8IFtdKS5jb25jYXQoaykpIH0pLCB7fSk7IC8vIG1vZGlmaWVkIGZyb20gYW5zd2VyIGJ5IE5pbmEgU2Nob2x6OiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDU3Mjg4NTBcblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvZm9ybWZvcm0tdG9vbGJveCBcbiovXG5cbmV4cG9ydCBjb25zdCBWQVJDT0RFID0gKHsnYSc6J+G0rCcsICdiJzon4bSuJywgJ2MnOifhtZMnLCAnZCc6J+G0sCcsICdlJzon4bSxJywgJ2YnOifhtY4nLCAnZyc6J+G0sycsICdoJzon4bS0JywgJ2knOifhtLUnLCAnaic6J+G0ticsICdrJzon4bS3JywgJ2wnOifhtLgnLCAnbSc6J+G0uScsICduJzon4bS6JywgJ28nOifhtLwnLCAncCc6J+G0vicsICdxJzon4bS9JywgJ3InOifhtL8nLCAncyc6J+G1lScsICd0Jzon4bWAJywgJ3UnOifhtYEnLCAndic6J+G1mycsICd3Jzon4bWCJywgJ3gnOifhtaEnLCAneSc6J+G1nicsICd6Jzon4bWcJywgJ2FsdCc6J+G1vScsICcycic6J+G1sycsICcycisxJzon4bWyJ30pO1xuXG5leHBvcnQgY29uc3QgVkFSQ09ERV9SRVYgPSByZXZlcnNlTWFwcGluZyhWQVJDT0RFLHRydWUpO1xuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMTAvMjAyMFxuKi9cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NMYWJlbCA9IChsYWJlbCwgbW9kZT0naHRtbCcpID0+IHtcbiAgICAvKiBMYWJlbCBwcm9jZXNzaW5nIHRvIGhhbmRsZSBzdWIvc3VwZXJzY3JpcHQgKi9cblxuICAgIGxldCB0YWdSZXYgPSBbXTsgLy8gdGFnUmV2IHJlc2V0cyB5LXBvc2l0aW9uIG9mIGxhYmVsIGFmdGVyIHN1YnNjcmlwdHMgKG5lZWRlZCBmb3Igc3ZnKVxuICAgIGlmIChtb2RlID09PSAnc3ZnJykgdGFnUmV2ID0gWyc8dHNwYW4geT1cIjBcIj4nLCc8L3RzcGFuPiddO1xuICAgIGVsc2UgdGFnUmV2ID0gWycnLCcnXTtcblxuICAgIGlmIChsYWJlbC5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsUGFydHMgPSBsYWJlbC5zcGxpdCgnXycpO1xuXG4gICAgICAgIGxldCB0YWdTdWIgPSBbXTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdzdmcnKSB0YWdTdWIgPSBbYDx0c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogLjhlbTtcIiBkeD1cIjBcIiBkeT1cIjZcIj5gLCc8L3RzcGFuPiddO1xuICAgICAgICBlbHNlIHRhZ1N1YiA9IFsnPHN1Yj4nLCc8L3N1Yj4nXTtcblxuICAgICAgICByZXR1cm4gKGxhYmVsUGFydHMubGVuZ3RoID4gMSkgPyBgJHt0YWdSZXZbMF0gKyBsYWJlbFBhcnRzWzBdICsgdGFnUmV2WzFdICsgdGFnU3ViWzBdICsgbGFiZWxQYXJ0c1sxXSArIHRhZ1N1YlsxXX1gIDogdGFnUmV2WzBdK2xhYmVsK3RhZ1JldlsxXTtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gdGFnUmV2WzBdK2xhYmVsK3RhZ1JldlsxXTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWYWxpZGF0aW9uID0gKGZuLCBlcnJvck1zZykgPT4gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjYXRhOiBicmFuY2ggPT4gcmVzdWx0ID8gYnJhbmNoLnN1Y2Nlc3MocmVzdWx0KSA6IGJyYW5jaC5lcnJvcihlcnJvck1zZylcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlTGl0ZXJhbHMgPSAoc3RyLCBzZXA9J1wiJywgcmVwbD0n4oC9JykgPT4ge1xuICAgIGlmICghY2hlY2tMaXRlcmFsTWF0Y2hpbmcoc3RyLCBzZXApKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBzdHJTZXAgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICByZXR1cm4gc3RyU2VwLmZpbHRlcigoc3Vic3RyLGksYXJyKSA9PiBpICUgMiA9PT0gMCB8fCBpID09PSBhcnIubGVuZ3RoLTEpLmpvaW4ocmVwbCk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0xpdGVyYWxNYXRjaGluZyA9IChzdHIsIHNlcD0nXCInKSA9PiB7XG4gICAgY29uc3Qgc3RyU2VwID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgcmV0dXJuIHN0clNlcC5sZW5ndGggJSAyID09PSAxO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyYWNrZXRVbml0cyA9IChmb3JtdWxhLCBicj17b3BlbjoneycsIGNsb3NlOid9J30sIG1hdGNoZXM9W10pID0+IHtcbiAgICBjb25zdCByZUVudHJpZXMgPSBmb3JtdWxhLm1hdGNoKG5ldyBSZWdFeHAoYFxcXFwke2JyLm9wZW59W14ke2JyLm9wZW59JHtici5jbG9zZX1dKj9cXFxcJHtici5jbG9zZX1gLCAnZycpKTtcbiAgICBpZiAoIXJlRW50cmllcykgcmV0dXJuIG1hdGNoZXM7XG5cbiAgICBjb25zdCByZWR1Y2VkRm9ybXVsYSA9IHJlRW50cmllcy5yZWR1Y2UoKHN0ciwgcGF0dGVybikgPT4gc3RyLnJlcGxhY2UocGF0dGVybiwgJ+KAoicpLGZvcm11bGEpO1xuXG4gICAgcmV0dXJuIGdldEJyYWNrZXRVbml0cyhyZWR1Y2VkRm9ybXVsYSwgYnIsIFsuLi5tYXRjaGVzLCAuLi5yZUVudHJpZXNdKTtcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDEwLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IGNoZWNrQnJhY2tldE1hdGNoaW5nID0gKHN0ciwgb3BlbkJyPScoJywgY2xvc2VCcj0nKScpID0+IHtcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiB0cnVlOyAvLyBlbXB0eSBzdHJpbmdzIGNhbid0IGhhdmUgYnJhY2tldHMsIHNvIHRoYXQncyBmaW5lXG4gIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgoYWNjLGN1cnIsaWR4LGFycikgPT4ge1xuICAgIGlmIChjdXJyID09PSBvcGVuQnIpIGFjYysrO1xuICAgIGVsc2UgaWYgKGN1cnIgPT09IGNsb3NlQnIpIHtcbiAgICAgIGlmIChhY2MgPT09IG51bGwpIHJldHVybiBOYU47XG4gICAgICBhY2MtLTtcbiAgICAgIH1cbiAgICBpZiAoaWR4ID09PSBhcnIubGVuZ3RoLTEgJiYgYWNjID09PSBudWxsKSByZXR1cm4gMDtcbiAgICByZXR1cm4gYWNjO1xuICB9LG51bGwpID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGVxdWFsQXJyYXlzID0gKGFyckEsIGFyckIpID0+IHtcbiAgICBpZiAoYXJyQSA9PT0gdW5kZWZpbmVkIHx8IGFyckIgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiBhcnJBLmxlbmd0aCA9PT0gYXJyQi5sZW5ndGggJiYgYXJyQS5ldmVyeShhID0+IGFyckIuc29tZShiID0+IGEgPT09IGIpKTtcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDEyLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvNzY4ZGJlMTllZDQ3ZTI4MSAoU3RhdGUgbWFjaGluZXMpXG4qL1xuXG5leHBvcnQgZnVuY3Rpb24gbGV4WCAoaW5wdXQsIHJ1bGVNYXApIHtcbiAgICBpbnB1dCA9IGlucHV0LnNwbGl0KCcgJykuam9pbignJyk7XG4gICAgY29uc3QgY29tcFJ1bGUgPSBjb21wUmVnRXhwKHJ1bGVNYXAubWFwKHIgPT4gclsxXSkpO1xuICAgIFxuICAgIHJldHVybiBbLi4uaW5wdXQubWF0Y2hBbGwoY29tcFJ1bGUpXS5tYXAoKG1hdGNoLGkpID0+IHtcbiAgICAgIGNvbnN0IGlkeCA9IG1hdGNoLmZpbHRlcigoXyxpKSA9PiBpID4gMCkuZmluZEluZGV4KG0gPT4gbSAhPSB1bmRlZmluZWQpO1xuICAgICAgcmV0dXJuIHt0b2tlbjogcnVsZU1hcFtpZHhdWzBdLCB2YWx1ZTogKHJ1bGVNYXBbaWR4XVsyXSA/IHJ1bGVNYXBbaWR4XVsyXShtYXRjaFswXSkgOiB1bmRlZmluZWQgKSB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgY29tcFJlZ0V4cCA9IHBhdHRlcm5zID0+IG5ldyBSZWdFeHAocGF0dGVybnMucmVkdWNlKChjb21wLHIsaSkgPT4gY29tcCsoaSA+IDAgPyAnfCcgOiAnJykrYCgke3J9KWAsJycpLCAnZycpO1xuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDMvMjAyMVxuKi9cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGZpdFN2ZyhzZWxlY3RvciwgcGFkZGluZykge1xuLy8gICAgIC8vIGNhbGN1bGF0ZSByZWFsIGRpbWVuc2lvbnMgb2YgYSBjaGFydCAoYXNzdW1lcyBjaGFydCBpcyBhIGctZWxlbWVudCB3cmFwcGVkIGluc2lkZSBhbiBzdmcpXG4vLyAgICAgZDMuc2VsZWN0KGNoYXJ0Lm5vZGUoKS5wYXJlbnRFbGVtZW50KVxuLy8gICAgICAgICAuYXR0cignd2lkdGgnLCBjaGFydC5ub2RlKCkuZ2V0QkJveCgpLndpZHRoICsgcGFkZGluZy5sZWZ0ICsgcGFkZGluZy5yaWdodClcbi8vICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGNoYXJ0Lm5vZGUoKS5nZXRCQm94KCkuaGVpZ2h0ICsgcGFkZGluZy50b3AgKyBwYWRkaW5nLmJvdHRvbSk7XG4vLyAgIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN2Z1NpemUoc3ZnVGV4dCkge1xuXHRjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuXHRzdmcuaW5uZXJIVE1MID0gc3ZnVGV4dDtcblx0c3ZnLnNldEF0dHJpYnV0ZSgneCcsJy05OTk5Jyk7XG5cdHN2Zy5zZXRBdHRyaWJ1dGUoJ3knLCctOTk5OScpO1xuXG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChzdmcpO1xuXG5cdGNvbnN0IHNpemUgPSBzdmcuZ2V0QkJveCgpO1xuXHRjb250YWluZXIucmVtb3ZlKCk7XG5cdHJldHVybiB7IHc6IHNpemUud2lkdGgsIGg6IHNpemUuaGVpZ2h0IH07XG59XG5cbi8qIEJyZWFrcyBzdHJpbmcgdXAgaW4gcGFydHMgb2YgbGVuZ3RoIG4gKHggPD0gbiBmb3IgdGhlIGxhc3QgcGFydCkgXG4gICBmcm9tOiBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cbmV4cG9ydCBjb25zdCBicmVha1N0ciA9IChzdHIsbj0xKSA9PiBbLi4ubmV3IEFycmF5KE1hdGguY2VpbChzdHIubGVuZ3RoL24pKV0ubWFwKChkLGkpID0+IHN0ci5zdWJzdHIobippLG4pKTtcblxuZXhwb3J0IGNvbnN0IHN2Z0xpbmVicmVhayA9IChzdHIsIGxpbmVTaGlmdCkgPT4gYDx0c3BhbiB4PVwiMFwiIGR5PVwiJHtsaW5lU2hpZnR9XCI+JHtzdHJ9PC90c3Bhbj5gOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZDYWxjIHtcbiAgICAvKlxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAnY2FsYycgbW9kdWxlIGZvciBmb3JtZm9ybSAoYykgMjAxOCBQZXRlciBIb2ZtYW5uXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICovXG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlbF9sb2dpYyhmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBjb21tdXRhdGl2ZSByZWxhdGlvbjogeCB5ICovXG4gICAgICAgIGlmICggZnggPiAzIHx8IGZ4IDwgMCB8fCBmeSA+IDMgfHwgZnkgPCAwICkgcmV0dXJuIC05ODtcbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSAwIHx8IGZ5ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeTsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9IFxuICAgICAgICBlbHNlIGlmICggZnkgPT09IDAgfHwgZnggPT09IDEgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIGZ4ID09PSBmeSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZng7IC8vIEM1IC9UaGVvcmVtIDVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggKGZ4ID09PSAyICYmIGZ5ID09PSAzKSB8fCAoZnggPT09IDMgJiYgZnkgPT09IDIpICkgeyBcbiAgICAgICAgICAgIHJldHVybiAxOyAvLyBDMiAvVGhlb3JlbSAxMyArIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgcmVsKC4uLmZWYWxzKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciByZWxhdGlvbiB3aXRoIG4gdmFyaWFibGVzOiB4XzEgLi4uIHhfbiAqL1xuICAgICAgICBpZiAoZlZhbHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGZWYWxzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWxfbG9naWMoIHZhbCxmVmFsc1tpXSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuICAgIHN0YXRpYyBpbnZfbG9naWMoZngpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBpbnZlcnNpb24vbmVnYXRpb246ICh4KSAqL1xuICAgICAgICBzd2l0Y2ggKGZ4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtOTk7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuICAgIHN0YXRpYyBpbnYoZngsIG4pIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogU2hvcnRjdXQgZm9yIG4gaW52ZXJzaW9ucy9uZWdhdGlvbnM6ICh4KSAqL1xuICAgICAgICBpZiAobiA+IDApIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBmeDtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLmludl9sb2dpYyh2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHJldHVybiB0aGlzLmludl9sb2dpYyhmeCk7XG4gICAgICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbiAgICB9O1xuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgUkUtRU5UUlkgRk9STSBDQUxDVUxBVElPTlxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIHVGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTMobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDKTtcbiAgICB9O1xuICAgIHN0YXRpYyB1Rm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCB0cnVlLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpRm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQsIGZFKTtcbiAgICB9O1xuXG4gICAgLy8gc3RhdGljIHJlRW50cnkoLi4uIHZhcnMpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cbiAgICAvLyBzdGF0aWMgcmVFbnRyeShyZUV2ZW4sIC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkocmVFdmVuLCBmYWxzZSwgdmFycyk7XG4gICAgLy8gfVxuXG4gICAgc3RhdGljIHJlRW50cnkocmVFdmVuLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgLi4uZlZhbHMpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBkaWZmZXJlbnQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zXG4gICAgICAgICBbQXJndW1lbnRzXSByZUV2ZW46IGV2ZW4gcmUtZW50cnktbnVtYmVyPyB8IGxhc3RPcGVuOiBsYXN0IHZhcmlhYmxlIG5vdCBjcm9zc2VkPyB8IGZWYWxzOiB2YXJpYWJsZXMgKDAvMS8yLzMpXG5cbiAgICAgICAgIE5vdGU6IGNhbGN1bGF0aW9uIG1hbnVhbGx5IHZlcmlmaWVkIGZvcuKApiBcbiAgICAgICAgIC0gKHVGT1JNIGExLCByZXMyKSDGkj0oKMaSeCl5KVxuICAgICAgICAgLSAoaUZPUk0gYTIsIHJlczIpIMaSKMaSKT0oYTF4KXlcbiAgICAgICAgIC0gKGlGT1JNIGIxLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KCgoxpJ4KXkpeikgxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgIC0gKGlGT1JNIGIyLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KChiMXgpeSl6XG4gICAgICAgICAtICh1Rk9STSBjMSwgcmVzMykgWzJ8cnxdIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtICh1Rk9STSBjMiwgcmVzMykgWzJ8cnxdIMaSKMaSKT0oKGMxeCl5KXpcbiAgICAgICAgIFNob3VsZCB3b3JrIHdpdGggcmVzb2x1dGlvbnMgb2YgNCwgNSwg4oCmIGJ1dCBuZWVkcyB2ZXJpZmljYXRpb24uXG5cbiAgICAgICAgIE15IGJhc2ljIG9ic2VydmF0aW9ucyBhYm91dCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXM6XG4gICAgICAgICAtIEV2ZXJ5IHJlLWVudHJ5IEZPUk0gbmVlZHMgdG8gaGF2ZSBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIHRvIGJlIHNlbGYtZXF1aXZhbGVudCAodUZPUk0pOiDGkiA9ICgoxpIxKTIpIC5cbiAgICAgICAgICAgU28gd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbnMsIHdlIGFsd2F5cyBuZWVkIHRvIGhhdmUgYW4gZXZlbiByZS1lbnRyeSBudW1iZXI6IMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgLlxuICAgICAgICAgLSBUbyBiZSBhYmxlIHRvIGFsc28gaGF2ZSB1bmV2ZW4gcmUtZW50cnkgbnVtYmVycywgZWl0aGVyIHRoZSByZXNvbHV0aW9uIG5lZWRzIHRvIGJlIGV2ZW5cbiAgICAgICAgICAgb3Igd2UgaGF2ZSB0byBlbWJlZCB0aGUgcmUtZW50cnkgRk9STSBpbnRvIGEgbm9ybWFsIEZPUk0gdGhhdCBpcyBvbmUgcmUtZW50cnkgb2YgdGhhdCBGT1JNOlxuICAgICAgICAgICDGkijGkikgPSAoKCjGkjEpMikzKSA8LT4gKCgoIMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgMSkyKTMpIC5cbiAgICAgICAgICAgVGhlc2UgY29tcG9zaXRpb25hbCByZS1lbnRyeSBGT1JNcyBhcmUgaUZPUk1zLCBzaW5jZSB0aGV5IHJlc29sdmUgdG86ICggxpIgPSAoKMaSKSkgKSAuXG4gICAgICAgICAtIElmIHRoZSBvdXRtb3N0IGNyb3NzIG9mIHRoZSBGT1JNIHNob3VsZCBiZSBsZWZ0IG91dCAob3BlbiBGT1JNcyksIHRoaXMgY2FuIG9ubHkgYmUgZG9uZSBpZiB3ZSBlbWJlZFxuICAgICAgICAgICBhIGNvcnJlc3BvbmRpbmcgY2xvc2VkIEZPUk0gb2YgaXRzZWxmIHRoYXQgZWl0aGVyIGlzIG9yIGVtYmVkcyBpdHMgcmUtZW50cnkgRk9STSAoY2FzZXMgZGVzY3JpYmVkIGFib3ZlKS5cbiAgICAgICAgICAgSSBiZWxpZXZlIHRoZSBvdXRtb3N0IChvcGVuKSBGT1JNIGlzIG5vdCBiZWluZyBjb3VudGVkIGFzIGEgcmUtZW50cnkgYXQgYWxsLCBzaW5jZSBpdCdzIG1pc3NpbmcgYSBjcm9zcy5cblxuICAgICAgICAgVGhpcyBhbGdvcml0aG0gaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBydWxlcy9wYXR0ZXJucy9vYnNlcnZhdGlvbnMgZGVyaXZlZCBmcm9tIFwidUZPUk0gaUZPUk1cIjpcbiAgICAgICAgIFsxXSBJZiAxIGlzIHNvbWV3aGVyZSBpbiB0aGUgRk9STSwgaXQgd2lsbCBkb21pbmF0ZSBhbGwgdmFsdWVzIGluIHNwYWNlcyBkZWVwZXIgdGhhbiBtLFxuICAgICAgICAgICAgIHNvIHRoZSByZS1lbnRyeSBpcyBvYnNvbGV0ZSBhbmQgd2UgY2FuIHN0YXJ0IGNhbGN1bGF0ZSBmcm9tIHRoaXMgc3BhY2UuIFxuICAgICAgICAgWzJdIElmIHRoZXJlIGFyZSAzLzIgb3IgMi8zIHBhaXJzIGluIHRoZSBGT1JNLCB0aGUgZmlyc3QgdGVybSBjYW4gYmUgdHVybmVkIGludG8gMSwgc2luY2VcbiAgICAgICAgICAgICB0aHJvdWdoIEMyIHRoZSBzZWNvbmQgdGVybSBjYW4gYWx3YXlzIGJlIGdlbmVyYXRlZCBpbnRvIGl0cyBzcGFjZSwgd2hlcmUgMjMgPSAxLlxuICAgICAgICAgICAgIFRoZW4gd2UgY2FuIHByb2NlZWQgYXMgaW4gKDEpLlxuICAgICAgICAgWzNdIElmIGFsbCB2YXJpYWJsZXMgYXJlIDAsIHdlIHdpbGwgaGF2ZSBlaXRoZXIgYSB1Rk9STSBvciBpRk9STSwgaGVuY2UgdGhlIHZhbHVlIG9mIHRoZVxuICAgICAgICAgICAgIEZPUk0gd2lsbCBiZSBlaXRoZXIgMiBvciAzLCBkZXBlbmRpbmcgb24gdGhlIGZvbGxvd2luZyBjYXNlczpcbiAgICAgICAgICAgICAtIDI6IGNsb3NlZCwgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTEpXG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgZXZlbiAgICAgKGMxLCBjMilcbiAgICAgICAgICAgICAtIDM6IG9wZW4sICAgICAgICByZXNvbHV0aW9uIGV2ZW4sIHJlLWVudHJ5LW51bWJlciBldmVuL29kZCAoYTIpXG4gICAgICAgICAgICAgLSAzOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgb2RkICAgICAgKGIxLCBiMilcbiAgICAgICAgIFNpbmNlIFsxXVsyXVszXSBlbGltaW5hdGUgYWxsIG90aGVyIGNhc2VzLCBhbGwgdmFyaWFibGVzIGFyZSBub3cgZWl0aGVyIDIgb3IgMyAoYW5kIG1heWJlIDBzKSxcbiAgICAgICAgIHNvIHVzaW5nIEMyIGFzIGRlc2NyaWJlZCBhYm92ZSwgb25seSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiB0aGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBjb25zaWRlcmVkOlxuICAgICAgICAgWzRdIElmIHdlIHVzZSB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyIChwLjE2NykgcmVjdXJzaXZlIGlkZW50aXR5ICggbW4gPC0+ICgoxpIpKT3GkiApLCBDMiBhbmQgQzFcbiAgICAgICAgICAgICDGkiBjYW4gYmUgc2VwYXJhdGVkIGZyb20gMi8zIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZS5cbiAgICAgICAgICAgICBUaGVuLCBkZXBlbmRpbmcgb24gdGhlIEZPUk0sIHdlIGhhdmUgZWl0aGVyOlxuICAgICAgICAgICAgIGlGT1JNOiAoxpI9KCjGkikpKSAyLzMgPC0+ICgyKSAyLzMgIG9yXG4gICAgICAgICAgICAgdUZPUk06ICDGkj0oKMaSKSkgMi8zICA8LT4gIDIgMi8zXG4gICAgICAgICBbNV0gSWYgWzRdIGRvZXMgbm90IGFwcGx5IG9yIHdlIGRlY2lkZSBmb3IgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMSAocC4xNjcpOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gXG4gICAgICAgICAgICAgKCBtbiAtPiDGkj0oKMaSKSkgKSwgd2Ugd2lsbCBoYXZlIGVpdGhlciB2YXJpYWJsZXMgb2YgMiBvciAzIHdoaWNoIHdlIGNhbm5vdCByZWxhdGUgdG8gxpIsIHNpbmNlXG4gICAgICAgICAgICAgdGhleSBuZWVkIG5vdCBiZSB0aGUgc2FtZSB1bmRldGVybWluZWQgdmFsdWUuIFVzaW5nIGNhc2UgZGlzdGluY3Rpb24sIHdlIGludGVycHJldCB0aGVcbiAgICAgICAgICAgICBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMyBhcyAwIGFuZCBhcyAxLCBjYWxjdWxhdGUgZXZlcnl0aGluZyB3aXRoIMaSPTIgYW5kIHJlbGF0ZSB0aGUgcmVzdWx0cyBcbiAgICAgICAgICAgICB1c2luZyBjb250cmF2YWxlbmNlOiAoKHgpeSkoKHkpeCkgd2hpY2ggeWllbGRzIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgICAgICovXG4gICAgICAgIC8vIGNoZWNrIGlmIGFyZ3VtZW50cyBhcmUgYWN0dWFsbHkgZGVmaW5lZFxuICAgICAgICBpZiAocmVFdmVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlRXZlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0T3BlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzRXZlbiA9IChmVmFscy5sZW5ndGglMiA9PSAwKTsgLy8gZXZlbiByZXNvbHV0aW9uP1xuICAgICAgICBsZXQgemVyb3MgPSAwOyAvLyB6ZXJvIGNvdW50ZXJcbiAgICAgICAgbGV0IGZpcnN0VW5kZWYgPSAtMTsgLy8gY2F0Y2hlcyBmaXJzdCBtbi8obW4pXG5cbiAgICAgICAgLy8gWzNdIGRldGVybWluZSBpZiB1Rk9STSBvciBpRk9STVxuICAgICAgICBsZXQgdUZPUk0gPSBmYWxzZTtcbiAgICAgICAgbGV0IGlGT1JNID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXNFdmVuKSB7XG4gICAgICAgICAgICBpZiAobGFzdE9wZW4pIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgdUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHJlRXZlbikgdUZPUk0gPSB0cnVlO1xuICAgICAgICAgICAgZWxzZSBpRk9STSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyAxL20gc29tZXdoZXJlIGluIHhfMSDigKYgeF9uXG4gICAgICAgIGxldCBjYWxjZnJvbSA9IC0xO1xuICAgICAgICBmb3IobGV0IGk9MDsgaTxmVmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZnggPSBmVmFsc1tpXTsgXG5cbiAgICAgICAgICAgIGlmIChmeCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBpOyAvLyBbMV0gaWYgbSBpcyBzb21ld2hlcmUsIHNldCBjYWxjdWxhdGlvbiBzdGFydCBmcm9tIHRoZXJlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAwKSB6ZXJvcysrOyAvLyBbM10ga2VlcCB0cmFjayBvZiBob3cgbWFueSB6ZXJvcyB0aGVyZSBhcmVcbiAgICAgICAgICAgIGVsc2UgaWYgKGZ4ID09IDIgfHwgZnggPT0gMykgeyAvLyBbMl1cbiAgICAgICAgICAgICAgICBpZihmaXJzdFVuZGVmID09IC0xKSBmaXJzdFVuZGVmID0gaTsgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCAyL3Ugb3IgMy9pLCByZW1lbWJlclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZnggIT0gZlZhbHNbZmlyc3RVbmRlZl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsY2Zyb20gPSBmaXJzdFVuZGVmOyAvLyBpZiAzLzIgb3IgMi8zIHBhaXJzLCBzZXQgY2FsY3VsYXRpb24gZm9ybSBmaXJzdCB1bmRlZi4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgaWYgKHplcm9zID09IGZWYWxzLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8gWzNdIGluIGNhc2UgYWxsIHZhcmlhYmxlcyBhcmUgbiwganVzdCByZXR1cm4gdGhlIHVuZGVmaW5lZC9pbWFnaW5hcnkgdmFsdWUgb2YgdGhlIEZPUk1cbiAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIDM7XG4gICAgICAgICAgICBlbHNlIHJldHVybiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxjZnJvbSA+PSAwKSB7XG4gICAgICAgICAgICAvLyBbMXwyXSBpZiB0aGVyZSBpcyBhIDEvbSBzb21ld2hlcmUgaW4gdGhlIGZvcm0sIHdlIGNhbiBlYXNpbHkgY2FsY3VsYXRlIHRoZSByZXN0IGZyb20gdGhpcyBwb2ludFxuICAgICAgICAgICAgbGV0IHZhbCA9IDE7XG4gICAgICAgICAgICBmb3IobGV0IGk9Y2FsY2Zyb207IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHsgICAgICBcbiAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaSA9PSBmVmFscy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgdmFsID0gdGhpcy5pbnYoIHRoaXMucmVsKHZhbCxmVmFsc1tpXSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyB3aGF0IHJlbWFpbnMsIHdpbGwgb25seSBiZSBlaXRoZXJcbiAgICAgICAgLy8gLSAoMSkgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIG1uLzIgICBvclxuICAgICAgICAvLyAtICgyKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgKG1uKS8zXG4gICAgICAgIC8vIFNvIHdlIGNhbGN1bGF0ZSBmcm9tIHRoZSBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMywgYmVjYXVzZSB3aXRoIEMyIChkZWdlbmVyYXRlKSBhbGwgZWxzZSBjYW4gYmUgaWdub3JlZFxuXG4gICAgICAgIC8vIGZvciBldmVuIGNsb3NlZCByZS1lbnRyeS1GT1JNcyB3aXRoIHVuZXZlbiByZXNvbHV0aW9uICh1Rk9STSBjMSksIHdlIG5lZWQgdG8gZG8gdGhlIGNhbGN1bGF0aW9uIHR3aWNlXG4gICAgICAgIGNvbnN0IHJlcGVhdCA9IChyZUV2ZW4gJiYgIXJlc0V2ZW4gJiYgIWxhc3RPcGVuKT8gMjoxO1xuICAgICAgXG4gICAgICAgIGZvcihsZXQgaT0oZlZhbHMubGVuZ3RoKnJlcGVhdCktMTsgaT49MDsgaS0tKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGklZlZhbHMubGVuZ3RoOyAvLyByZXBlYXRlZCB2YXJpYWJsZSBpbmRleFxuXG4gICAgICAgICAgICBpZiAoZlZhbHNbaW5kZXhdID09IDIgfHwgZlZhbHNbaW5kZXhdID09IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpUmV2ID0gKGZWYWxzLmxlbmd0aCpyZXBlYXQpLTEgLSBpOyAvLyByZXZlcnNlIGluZGV4IHRvIGVhc2llciBjaGVjayBmb3IgaW50ZXJwcmV0YXRpb24gMiAoc2VlIG5leHQpXG5cbiAgICAgICAgICAgICAgICBpZiAoYWx0SW50ZXJwciAmJiAoKGxhc3RPcGVuICYmIGlSZXYlMj09MCkgfHwgKCFsYXN0T3BlbiAmJiBpUmV2JTI9PTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAyOiByZWN1cnNpdmUgaWRlbnRpdHkgKCDGkj0oKMaSKSkgPC0+IG1uIClcbiAgICAgICAgICAgICAgICAgICAgLy8gxpI9KCjGkikpIGNhbiBiZSBzZXBhcmF0ZWQgaWYgdGhlcmUgaXMgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyAob3Igbm9uZSkgYWZ0ZXIgdGhlIHZhcmlhYmxlOyB0aGlzIGlzIHRoZSBjYXNlIGlmIGVpdGhlcjpcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMSkgdGhlIEZPUk0gaXMgb3BlbiBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBldmVuICAgICAgb3JcbiAgICAgICAgICAgICAgICAgICAgLy8gLSAoMikgdGhlIEZPUk0gaXMgY2xvc2VkIGFuZCB0aGUgYmFja3dhcmRzIHZhcmlhYmxlIGluZGV4IGlzIG9kZFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRvIGRldGVybWluZSBpZiB0aGUgbnVtYmVyIG9mIGNyb3NzZXMgYmV0d2VlbiDGkiBhbmQgb3VyIHZhciBpcyBldmVuLCB3ZSBkaXN0aW5ndWlzaCB0d28gY2FzZXM6XG4gICAgICAgICAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIHRoaXMucmVsKDMsZlZhbHNbaW5kZXhdKTsgLy8gaUZPUk06ICjGkj0oKMaSKSkpeCA8LT4gKG1uKSB4XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXMucmVsKDIsZlZhbHNbaW5kZXhdKTsgICAgICAgLy8gdUZPUk06ICDGkj0oKMaSKSl4ICA8LT4gIG1uIHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFs1XSBpZiBldmVyeXRoaW5nIGVsc2UgZmFpbHMsIHVzZSBjYXNlIGRpc3RpbmN0aW9uOiB1Rk9STSBpRk9STSAocC45NCk7IGFsc28gYWNjb3JkaW5nIHRvOlxuICAgICAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSAocC4xNjcpIGludGVycHJldGF0aW9uIDE6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiAoIMaSPSgoxpIpKSBhbmQgbW4gbmVlZCB0byBiZSBkaWZmZXJlbnRpYXRlZClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZTAgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0wXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMCA9IHRoaXMuaW52KGNhc2UwKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMDsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigwKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMCA9IHRoaXMucmVsKGNhc2UwLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMCA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMCxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgY2FzZTEgPSAyOyAvLyByZS1lbnRyeSDGkj1tbiwgYmVjYXVzZSBvdGhlciBtbj0xXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiAhcmVzRXZlbiAmJiAhcmVFdmVuKSBjYXNlMSA9IHRoaXMuaW52KGNhc2UxKTsgLy8gY3Jvc3MgZm9yIGludGVncmF0ZWQgRk9STXMgd2l0aCB1bmV2ZW4gcmVzLiBpbnNpZGUgb3BlbiBGT1JNcyAoaUZPUk0gYjIpXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaj0wOyBqPChmVmFscy5sZW5ndGgqcmVwZWF0KTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZlZhbHNbaW5kZXhdID09IDIpIGZ4ID0gMTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiBtbi8yIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSB0aGlzLmludigxKTsgLy8gbGFzdCBvY2Nhc2lvbiBvZiAobW4pLzMgd2lsbCBiZSBpbnRlcnByZXRlZCBhcyAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXN0T3BlbiAmJiBqID09IGZWYWxzLmxlbmd0aC0xKSBjYXNlMSA9IHRoaXMucmVsKGNhc2UxLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXNlMSA9IHRoaXMuaW52KCB0aGlzLnJlbChjYXNlMSxmeCkgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnQoIGNhc2UwLGNhc2UxICk7IC8vIGNvbnRyYXZhbGVuY2Ugb2YgYm90aCBjYXNlc1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTsgLy8gZW5kIHJlRW50cnkoKVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyAgQ09NUExFWCBGT1JNIENBTENVTEFUSU9OU1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLSAyIFZBUklBQkxFU1xuXG4gICAgc3RhdGljIGltcGxMKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogKHgpeSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIHRoaXMuaW52KGZ4KSxmeSApO1xuICAgIH07XG4gICAgc3RhdGljIGltcGxSKGZ4LCBmeSkge1xuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiaW1wbGljYXRpb25cIjogeCh5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5yZWwoIGZ4LHRoaXMuaW52KGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgcHJlKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicHJlc2VjdGlvblwiL1wiZGVjaXNpb25cIjogKCh4KXkpICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5pbXBsTChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBwb3N0KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicG9zdHNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICh4KHkpKSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbFIoZngsZnkpICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjb250KGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiY29udHJhdmFsZW5jZVwiL1wiZWl0aGVyLW9yXCI6ICgoeCl5KSAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLnByZShmeCxmeSksIHRoaXMucG9zdChmeCxmeSkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBlcXVpdihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImVxdWl2YWxlbmNlXCIvPzogKCAoKHgpeSkgKHgoeSkpICkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmNvbnQoZngsZnkpICk7XG4gICAgfTtcblxufSIsImltcG9ydCBGRm9ybSBmcm9tICcuL2Zmb3JtJztcbmltcG9ydCB7IGZvcm1ETkFfaHRtbCwgdm1hcF9zdmcsIHZtYXBQZXJzcGVjdGl2ZXNfc3ZnLCB2bWFwTGlzdF9zdmcgfSBmcm9tICcuLi9tb2R1bGVzL2RuYS1zdmcnO1xuaW1wb3J0IHsgcGVybXV0ZUFycmF5LCBwYWQsIGNyZWF0ZVZhbGlkYXRpb24sIGVxdWFsQXJyYXlzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgeyBnZXRSYW5kb21CaWdJbnQgfSBmcm9tICcuLi8uLi9jb21tb24vYmlnaW50LWhlbHBlcic7XG5cbmNvbnN0IGJpZ0ludCA9IHJlcXVpcmUoJ2JpZy1pbnRlZ2VyJyk7IC8vIG9ic29sZXRlIHdpdGggYmV0dGVyIEJpZ0ludCBzdXBwb3J0IGluIGJyb3dzZXJzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZEbmEgZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZG5hJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE5LzIwIFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cbiAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRXh0ZW5zaW9ucyBvZiBGRk9STVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjQWxsKGlucHV0KSB7XG4gICAgXHQvKiBleHRlbnNpb24gdG8gcmVwcmVzZW50IGZvcm1ETkEgYXMgRk9STSBjYWxjdWxhdGlvbiAqL1xuXG4gICAgXHRpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykgJiYgdGhpcy5pc1ZhbGlkRE5BKGlucHV0KSkge1xuXG4gICAgXHRcdGNvbnN0IGRuYSA9IGlucHV0LnNwbGl0KCc6JykucG9wKCk7XG4gICAgXHRcdGNvbnN0IHJlc3VsdHMgPSBkbmEuc3BsaXQoJycpLnJldmVyc2UoKTtcblxuICAgIFx0XHRjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG4gICAgXHRcdGNvbnN0IHZhcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4gYFwieF8ke2l9XCJgICk7XG4gICAgXHRcdGNvbnN0IHZhbHMgPSB7fTtcblxuXHQgICAgICAgIGlmICh2bnVtIDwgMSkge1xuXHQgICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHBhcnNlSW50KHJlc3VsdHNbMF0pO1xuXHQgICAgICAgICAgICByZXR1cm4gdmFscztcblx0ICAgICAgICB9XG5cbiAgICBcdFx0Y29uc3QgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG5cblx0ICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuXHQgICAgICAgICAgICBjb25zdCBpbnRlcnByID0gaW50ZXJwclZhbHMuc3BsaXQoJycpLm1hcCgodmFsLG4pID0+ICh7dmFyOiB2YXJzW25dLCB2YWx1ZTogcGFyc2VJbnQodmFsKX0pKTtcblxuXHQgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ludGVycHJWYWxzXSA9IHJlc3VsdHNbaV07XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgXHR9XG5cbiAgICBcdHJldHVybiBzdXBlci5jYWxjQWxsKGlucHV0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFyaWFibGVzKGlucHV0KSB7XG4gICAgXHQvKiBleHRlbnNpb24gdG8gZ2V0IHZhcmlhYmxlcyBmcm9tIGZvcm1ETkEgKi9cblxuICAgIFx0aWYgKHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnICYmIGlucHV0LmluY2x1ZGVzKCc6OicpKSB7XG4gICAgXHRcdGNvbnN0IHsgZG5hLCBmb3JtdWxhLCB2YXJMaXN0IH0gPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcblxuICAgIFx0XHRpZiAodmFyTGlzdCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdmFyTGlzdDtcbiAgICBcdFx0ZWxzZSBpZiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXG5cdCAgICBcdGNvbnN0IHZudW0gPSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcbiAgICBcdFx0cmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdm51bX0sIChfLCBpKSA9PiBgeF8ke2l9YCApO1xuICAgIFx0fVxuXG5cdFx0cmV0dXJuIHN1cGVyLmdldFZhcmlhYmxlcyhpbnB1dCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIENvbnZlcnNpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGVuY29kZSAoX2Zvcm0sIHZhcm9yZGVyPXVuZGVmaW5lZCkge1xuICAgIFx0LyogRW5jb2RlcyBhIEZPUk0gYXMgYSBkbmEgc3RyaW5nICovXG5cbiAgICBcdGNvbnN0IGZvcm0gPSB2YXJvcmRlciA/IHRoaXMucmVPcmRlclZhcnMoX2Zvcm0sIHZhcm9yZGVyKSA6IF9mb3JtO1xuXG4gICAgXHRyZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmNhbGNBbGwoZm9ybSkpLnJldmVyc2UoKS5qb2luKCcnKTtcbiBcdH07XG5cbi8vIEVYUEVSSU1FTlRBTCA+XG5cbiBcdHN0YXRpYyBkZWNvZGUgKGRuYSwgdmFyTGlzdD11bmRlZmluZWQpIHtcblx0XHQvKiBEZWNvZGVzIGRuYSBpbnRvIChvbmUgb2YgaXRzKSBzaW1wbGVzdCBjb3JyZXNwb25kaW5nIEZPUk0gbW9kZWwocykgYXMgYSBqc29uLXJlcHJlc2VudGF0aW9uICovXG5cblxuXHRcdC8vIC0+IHJlbW92ZSAwLXRlcm1zIGFuZCBncm91cGluZ3M/XG5cblx0XHRpZiAodmFyTGlzdCAmJiB2YXJMaXN0Lmxlbmd0aCAhPT0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkpIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG9mIHZhcmlhYmxlcyBpbiBnaXZlbiB2YXJpYWJsZSBsaXN0IGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyk7XG5cdFx0aWYgKCF2YXJMaXN0KSB2YXJMaXN0ID0gdGhpcy5nZW5lcmF0ZVZhck5hbWVzKHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpKTsgLy8ubWFwKHN0ciA9PiBgXCIke3N0cn1cImApO1xuXHRcdFxuXHRcdGNvbnN0IHVuaXYgPSB0aGlzLnVuaXZlcnNlX24odmFyTGlzdCk7XG5cdFx0Y29uc3QgdmFscyA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpO1xuXG5cdFx0cmV0dXJuIHVuaXYubWFwKCh0ZXJtLCBpKSA9PiB7XG5cdFx0XHRyZXR1cm4gYCgoJHt2YWxzW2ldfSkoJHt0ZXJtfSkpYDtcblx0XHR9KS5qb2luKCcnKTtcbiBcdH1cblxuLy8gPCBFTkRcblxuXHRzdGF0aWMgaW50VG9ETkEgKGludCwgdm51bSkge1xuXHRcdC8qIFRha2VzIGFuIGludGVnZXIgKHVzdWFsbHkgQmlnSW50KSBhbmQgYSBkZXNpcmVkIHZhcmlhYmxlIG51bWJlciBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBmb3JtRE5BIFxuXG5cdFx0Tm90ZTogdmFyaWFibGUgbnVtYmVyIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBpbnRlbmRlZCBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyBjYW5ub3QgYmUgaW5mZXJlZCBmcm9tIHRoZSBpbnRlZ2VyIGFsb25lLiBJZiBubyB2YXJpYWJsZSBudW1iZXIgaXMgZ2l2ZW4sIHRoZSBzbWFsbGVzdCB2YXJpYWJsZSBudW1iZXIgcG9zc2libGUgZm9yIHRoZSBxdWF0ZXJuaW9uIGlzIGFzc3VtZWQgdG8gZ2VuZXJhdGUgdmFsaWQgZm9ybUROQS4gKi9cblxuXHRcdGNvbnN0IHF1YXQgPSBpbnQudG9TdHJpbmcoNCk7XG5cdFx0aWYgKHF1YXQuc3Vic3RyKDAsMSkgPT09ICctJykgdGhyb3cgbmV3IEVycm9yKCdOZWdhdGl2ZSBpbnRlZ2VycyBjYW5ub3QgYmUgY29udmVydGVkIHRvIGZvcm1ETkEuJyk7XG5cdFx0aWYgKHF1YXQuaW5jbHVkZXMoJy4nKSkgdGhyb3cgbmV3IEVycm9yKCdGcmFjdGlvbmFsIG51bWJlcnMgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBmb3JtRE5BLicpXG5cblx0XHRjb25zdCBkbmFMZW4gPSB2bnVtID8gNCoqdm51bSA6IChmdW5jdGlvbiBtaW5EbmFMZW4oc3RyTGVuLCBuPTApIHsgXG5cdFx0XHRyZXR1cm4gNCoqbiA+PSBzdHJMZW4gPyA0KipuIDogbWluRG5hTGVuKHN0ckxlbiwgbisxKTtcblx0XHR9KShxdWF0Lmxlbmd0aCk7XG5cblx0XHRpZiAocXVhdC5sZW5ndGggPiBkbmFMZW4pIHRocm93IG5ldyBFcnJvcignSW50ZWdlciBzaXplIGV4Y2VlZHMgZGVzaXJlZCBETkEgbGVuZ3RoLicpO1xuXHRcdHJldHVybiBwYWQocXVhdCwgZG5hTGVuKTtcblx0fVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE91dHB1dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBmb3JtVG9ETkEgKGlucHV0LCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgXHQvKiBjb252ZXJ0cyBhIGZvcm0gaW50byBpdHMgZm9ybUROQSByZXByZXNlbnRhdGlvbiBpbiBIVE1MICovXG5cbiAgICBcdGNvbnN0IHtvdXRwdXR9ID0geyBvdXRwdXQ6ICd0ZXh0JywgLi4ub3B0aW9ucyB9O1xuXG4gICAgXHRsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgIFx0aWYgKGlucHV0LmluY2x1ZGVzKCc6OicpKSB7XG4gICAgXHRcdC8vIGlmIHRoZSBpbnB1dCBjb250YWlucyB0aGUgbWFyayAnOjonIGZvciBmb3JtRE5BLCByZXR1cm4gaXQgaWYgaXQncyB2YWxpZFxuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCB2YWxpZCBmb3JtRE5BJyk7XG5cbiAgICBcdFx0Y29uc3QgcGFydHMgPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcblxuICAgIFx0XHRkbmEgPSBwYXJ0cy5kbmE7XG4gICAgXHRcdGZvcm11bGEgPSBwYXJ0cy5mb3JtdWxhO1xuICAgIFx0XHR2YXJMaXN0ID0gcGFydHMudmFyTGlzdDtcblx0ICAgIH1cblx0ICAgIGVsc2Uge1xuXHRcdCAgICAvLyBpZiBub3QsIHByb2Nlc3MgdGhlIGlucHV0IGFzIGEgRk9STSB3aXRoIHNwZWNpZmllZCBvciBkZWZhdWx0IHZhcm9yZGVyIGFuZCBlbmNvZGUgaXQgdG8gZG5hXG5cdFx0XHRkbmEgPSB0aGlzLmVuY29kZSggaW5wdXQsICh2YXJvcmRlciA/IHZhcm9yZGVyIDogdW5kZWZpbmVkKSApO1xuXHRcdFx0Zm9ybXVsYSA9IGlucHV0O1xuXHRcdFx0dmFyTGlzdCA9IHZhcm9yZGVyID8gdmFyb3JkZXIgOiB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcblx0ICAgIH1cblxuXHRcdHN3aXRjaCAob3V0cHV0KSB7XG5cdFx0XHRjYXNlICdodG1sJzoge1xuXHRcdFx0XHRyZXR1cm4gZm9ybUROQV9odG1sKGZvcm11bGEsIGRuYSwgdmFyTGlzdCk7XG5cdFx0XHR9XG5cdFx0XHRjYXNlICd0ZXh0Jzoge1xuXHRcdFx0XHRyZXR1cm4gKGZvcm11bGEgIT09IHVuZGVmaW5lZCA/IGZvcm11bGEgOiAnJykgKyAodmFyTGlzdCAmJiBkbmEubGVuZ3RoID4gMSA/IGAuWyR7dmFyTGlzdC5qb2luKCcsJyl9XWAgOiAnJykgKyAnOjonICsgZG5hO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnbnVtJzoge1xuXHRcdFx0XHRyZXR1cm4gZG5hO1xuXHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDoge1xuXHRcdFx0XHRyZXR1cm4gW2Zvcm11bGEsIHZhckxpc3QsIGRuYV07XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuICAgIHN0YXRpYyBkbmFUb0ZPUk0gKGZvcm1ETkEsIHZhcm9yZGVyPXVuZGVmaW5lZCwgb3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICBcdC8qIGNvbnZlcnRzIGZvcm1ETkEgd2l0aCBhIGdpdmVuIHZhcmlhYmxlIGxpc3Qvb3JkZXIgaW50byBhIGdyYXBoIHJlcHJlc2VudGF0aW9uIG9mIChvbmUgb2YgaXRzKSBzaW1wbGVzdCBjb3JyZXNwb25kaW5nIEZPUk0gbW9kZWwocykgKi9cblxuICAgIFx0Ly8gPj4+IG5vdCB5ZXQgaW1wbGVtZW50ZWQhXG5cbiAgICBcdHJldHVybiB0aGlzLmRlY29kZShmb3JtRE5BLCB2YXJvcmRlcik7XG4gICAgfVxuXG5cdHN0YXRpYyBnZW5SYW5kb21ETkEgKHZudW0pIHtcblx0XHQvKiBHZW5lcmF0ZXMgYSByYW5kb20gZm9ybUROQSBzdHJpbmcgZm9yIGEgZ2l2ZW4gdmFyaWFibGUgbnVtYmVyICovXG5cblx0XHRjb25zdCBtYXhOID0gYmlnSW50KDQpLnBvdyggYmlnSW50KDQpLnBvdyh2bnVtKSApO1xuXHRcdGNvbnN0IHZhbHVlX2JpbiA9IGdldFJhbmRvbUJpZ0ludCggbWF4Ti5zdWJ0cmFjdCgxKSApO1xuXHRcdHJldHVybiB0aGlzLmludFRvRE5BKHZhbHVlX2Jpbiwgdm51bSk7XG5cdH1cblxuICAgIHN0YXRpYyB2bWFwIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgIFx0LyogZ2VuZXJhdGVzIHZtYXAgSFRNTCBmcm9tIGZvcm0vZm9ybUROQSBpbnB1dCAqL1xuXG5cdFx0Y29uc3QgeyBvdXRwdXQsIGxpbWl0U2l6ZSwgY29udkRlZmF1bHRWYXJvcmRlcixcblx0XHRcdFx0c2l6ZSwgZ2FwR3JvdywgbWFyZ2luRnVuYywgc3Ryb2tlVyB9ID0ge1xuXHRcdFx0XHRcdG91dHB1dDogJ3N2ZycsXG5cdFx0XHRcdFx0bGltaXRTaXplOiB0cnVlLCBjb252RGVmYXVsdFZhcm9yZGVyOiB0cnVlLFxuXHRcdFx0XHRcdHNpemU6IHVuZGVmaW5lZCwgZ2FwR3JvdzogMS41LCBtYXJnaW5GdW5jOiB1bmRlZmluZWQsIHN0cm9rZVc6IDAuNSxcblx0XHRcdFx0XHQvLyBmaWx0ZXI6ICcxMTExJywgPC0gbWlnaHQgYWRkIGxhdGVyXG5cdFx0XHRcdFx0Li4ub3B0aW9uc307XG5cbiAgICBcdGxldCBkbmEgPSB1bmRlZmluZWQ7XG4gICAgXHRsZXQgZm9ybXVsYSA9IGlucHV0O1xuXG4gICAgXHRpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykgJiYgdGhpcy5pc1ZhbGlkRE5BKGlucHV0KSkge1xuXHRcdFx0Y29uc3QgZG5hUGFydHMgPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcblx0XHRcdGRuYSA9IGRuYVBhcnRzLmRuYTtcblx0XHRcdGZvcm11bGEgPSBkbmFQYXJ0cy5mb3JtdWxhO1xuXHRcdFx0Y29uc3QgdmFyTGlzdCA9IGRuYVBhcnRzLnZhckxpc3QgPyBkbmFQYXJ0cy52YXJMaXN0IDogdGhpcy5nZXRWYXJpYWJsZXMoaW5wdXQpO1xuXG5cdFx0XHRpZiAodmFyb3JkZXIgIT09IHVuZGVmaW5lZCAmJiB2YXJMaXN0ICE9PSB1bmRlZmluZWQgJiYgIWVxdWFsQXJyYXlzKHZhcm9yZGVyLCB2YXJMaXN0KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1ZhcmlhYmxlIG9yZGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgZm9ybUROQSBpbnB1dCBhbmQgYXMgYW4gYXJndW1lbnQgZm9yIHRoZSB2bWFwIGZ1bmN0aW9uIGFuZCB0aGV5IGFyZSBkaWZmZXJlbnQuIFBsZWFzZSBzZWxlY3Qgb25seSBvbmUgc3BlY2lmaWNhdGlvbiB0byBhdm9pZCBjb25mbGljdGluZyByZXN1bHRzLicpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodmFyTGlzdCkge1xuXHRcdFx0XHR2YXJvcmRlciA9IHZhckxpc3Q7XG5cdFx0XHR9IGVsc2UgaWYgKGZvcm11bGEpIHtcblx0XHRcdFx0dmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcblx0XHRcdH1cbiAgICBcdH1cblx0XHRlbHNlIGlmICghdmFyb3JkZXIpIHtcblx0XHRcdHZhcm9yZGVyID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG5cdFx0XHRpZiAoY29udkRlZmF1bHRWYXJvcmRlcikgdmFyb3JkZXIgPSB0aGlzLm1hdGNoRGVmYXVsdFZhck9yZGVyKHZhcm9yZGVyKTtcblx0XHR9XG5cblx0XHRpZiAoIWRuYSkgZG5hID0gdGhpcy5lbmNvZGUoZm9ybXVsYSwgdmFyb3JkZXIpO1xuXHRcdGNvbnN0IHZudW0gPSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcblxuXHRcdGlmICh2bnVtID09PSBOYU4pIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YXJpYWJsZSBudW1iZXIgZm9yIHZtYXBzLicpO1xuXHRcdGlmIChsaW1pdFNpemUgJiYgdm51bSA+IDgpIHRocm93IG5ldyBFcnJvcigndm1hcHMgd2l0aCBtb3JlIHRoYW4gOCB2YXJpYWJsZXMgYXJlIHRvbyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIHRvIGJlIHJlbmRlcmVkIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbi4gSWYgeW91IHN0aWxsIHdhbnQgdG8gcHJvY2VlZCwgYWRkIHRoZSBvcHRpb24gXCJsaW1pdFNpemU6IGZhbHNlXCIgdG8geW91ciB2bWFwIGZ1bmN0aW9uIGNhbGwgKHVzaW5nIHRoZSBmb3JtZm9ybSBsaWJyYXJ5KS4nKTtcblxuXG5cdFx0Y29uc3QgcmV2ZXJzZWRETkEgPSBkbmEuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcblx0XHRcblx0XHRjb25zdCBjZWxsU2l6ZSA9IHNpemUgfHwgKHZudW0gPT4ge1xuXHRcdFx0Ly8gcmVkdWN0aW9uIGJ5IDJweCBmb3IgZWFjaCBhZGRpdGlvbmFsIHZhcmlhYmxlIGlmIHZudW0gPiAzXG5cdFx0XHRjb25zdCBuID0gMTcgLSAodm51bSA+IDMgPyAyICogKHZudW0tMykgOiAwKTsgLy8gY2hhbmdlZCBmcm9tOiAxNCAtICh2bnVtLTEpO1xuXHRcdFx0cmV0dXJuIE1hdGgubWF4KDIsIG4pOyAvLyBtaW4gc2l6ZSBvZiAycHhcblx0XHR9KSh2bnVtKTtcblxuXHRcdC8vIG1hcmdpbnMgY2FuIGFsc28gYmUgY2FsY3VsYXRlZCB0aHJvdWdoIGEgY3VzdG9tIGZ1bmN0aW9uXG5cdFx0Y29uc3QgbWFyZ2lucyA9IFtzdHJva2VXLCBcblx0XHRcdC4uLkFycmF5LmZyb20oe2xlbmd0aDp2bnVtLTF9LCBtYXJnaW5GdW5jID8gbWFyZ2luRnVuYyA6ICgoXyxpKSA9PiAoaSsxKSAqIGdhcEdyb3cpICldO1xuXHRcdGNvbnN0IGNlbGwgPSB7dzpjZWxsU2l6ZSwgaDpjZWxsU2l6ZX07XG5cblxuXHRcdGNvbnN0IHZtYXBUcmVlID0gdGhpcy5jb25zdHJ1Y3RWbWFwKHJldmVyc2VkRE5BLCB2bnVtLCBjZWxsLCBtYXJnaW5zKTtcblxuXHRcdHN3aXRjaCAob3V0cHV0KSB7XG5cdFx0XHRjYXNlICdzdmcnOlxuXHRcdFx0XHRyZXR1cm4gdm1hcF9zdmcodm1hcFRyZWUsIGlucHV0LCB2YXJvcmRlciwgb3B0aW9ucyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gdm1hcFRyZWU7XG5cdFx0fVxuICAgIH1cblxuXHRzdGF0aWMgdm1hcFBlcnNwZWN0aXZlcyAoZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkLCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCwgbG9jYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuXHRcdC8qIEdlbmVyYXRlcyBhIGxpc3Qgb2Ygdm1hcCBwZXJzcGVjdGl2ZXMgYXMgcGVybXV0YXRpb25zIG9mIGEgZm9ybS9mb3JtRE5BIGlucHV0ICovXG5cdFx0Ly8gTm90ZTogZm9ybUROQSBpbnB1dCBub3QgeWV0IHN1cHBvcnRlZCAocGVybXV0YXRpb24gYWxnb3JpdGhtIHJlcXVpcmVkKVxuXG5cdFx0Y29uc3Qge291dHB1dCwgbGltaXRTaXplfSA9IHsgb3V0cHV0OiAnc3ZnJywgbGltaXRTaXplOiB0cnVlLCAuLi5nbG9iYWxPcHRpb25zIH07XG5cblx0XHRpZiAodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJyAmJiBmb3JtLmluY2x1ZGVzKCc6OicpKSB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1ETkEgaW5wdXQgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIHZtYXAgcGVyc3BlY3RpdmVzLicpO1xuXG5cdFx0aWYgKHZhcm9yZGVyID09PSB1bmRlZmluZWQpIHZhcm9yZGVyID0gdGhpcy5tYXRjaERlZmF1bHRWYXJPcmRlciggdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSkgKTtcblx0XHRjb25zdCB2bnVtID0gdmFyb3JkZXIubGVuZ3RoO1xuXHRcdGlmIChsaW1pdFNpemUgJiYgdm51bSA+IDUpIHRocm93IG5ldyBFcnJvcignUmVuZGVyaW5nIGFsbCB0aGUgcGVyc3BlY3RpdmVzIGZvciB2bWFwcyB3aXRoIG1vcmUgdGhhbiA1IHZhcmlhYmxlcyBpcyB0b28gY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24uIFlvdSBjYW4sIGhvd2V2ZXIsIHN0aWxsIGNvbXB1dGUgc2luZ2xlIHBlcm11dGF0aW9ucyBieSBjaGFuZ2luZyB0aGUgdmFyaWFibGUgb3JkZXIgb2YgeW91ciBGT1JNLiBJZiB5b3Ugc3RpbGwgd2FudCB0byBwcm9jZWVkLCBhZGQgdGhlIG9wdGlvbiBcImxpbWl0U2l6ZTogZmFsc2VcIiB0byB5b3VyIHZtYXBQZXJzcGVjdGl2ZXMgZnVuY3Rpb24gY2FsbCAodXNpbmcgdGhlIGZvcm1mb3JtIGxpYnJhcnkpLicpO1xuXG5cdFx0Y29uc3QgZm9ybXVsYSA9IGZvcm07IC8vIDw8PCBzdXBwb3J0IGZvciBKU09OP1xuXG5cdFx0Y29uc3Qgdm1hcFBlcm11dGF0aW9ucyA9IHBlcm11dGVBcnJheSh2YXJvcmRlcilcblx0XHRcdC5tYXAodmFyb3JkZXIgPT4gdGhpcy52bWFwKGZvcm11bGEsIHZhcm9yZGVyLCB7XG5cdFx0XHRcdGhpZGVJbnB1dExhYmVsOiB0cnVlLCBcblx0XHRcdFx0Y3VzdG9tTGFiZWw6IHVuZGVmaW5lZCxcblx0XHRcdFx0Li4ubG9jYWxPcHRpb25zIH0pICk7XG5cblx0XHRzd2l0Y2ggKG91dHB1dCkge1xuXHRcdFx0Y2FzZSAnc3ZnJzpcblx0XHRcdFx0cmV0dXJuIHZtYXBQZXJzcGVjdGl2ZXNfc3ZnKHZtYXBQZXJtdXRhdGlvbnMsIGZvcm11bGEsIGdsb2JhbE9wdGlvbnMpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHZtYXBQZXJtdXRhdGlvbnM7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIHZtYXBMaXN0IChpbnB1dExpc3QsIGdsb2JhbE9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdFx0LyogR2VuZXJhdGVzIGEgbGlzdCBvZiB2bWFwcyBmcm9tIGFuIGFycmF5IG9mIEZPUk0gaW5wdXRzICovXG5cdFx0Ly8gaW5wdXRMaXN0IGZvcm1hdDogW1snZm9ybS9mb3JtRE5BJywgW3Zhcm9yZGVyXS91bmRlZmluZWQsIG9wdGlvbnMvdW5kZWZpbmVkXSwgLi4uXVxuXG5cdFx0Y29uc3Qge291dHB1dH0gPSB7IG91dHB1dDogJ3N2ZycsIC4uLmdsb2JhbE9wdGlvbnMgfVxuXG5cdFx0Y29uc3Qgdm1hcHMgPSBpbnB1dExpc3QubWFwKGlucHV0ID0+IHRoaXMudm1hcChpbnB1dFswXSwgaW5wdXRbMV0sIHsuLi5pbnB1dFsyXSwgLi4uZ2xvYmFsT3B0aW9uc30pICk7XG5cblx0XHRzd2l0Y2ggKG91dHB1dCkge1xuXHRcdFx0Y2FzZSAnc3ZnJzpcblx0XHRcdFx0cmV0dXJuIHZtYXBMaXN0X3N2ZyAodm1hcHMsIGdsb2JhbE9wdGlvbnMpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHZtYXBzO1xuXHRcdH1cblx0fVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIERhdGEgU3RydWN0dXJlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdHN0YXRpYyBjb25zdHJ1Y3RWbWFwIChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucykge1xuXHRcdC8qIFJlY3Vyc2l2ZWx5IGNvbnN0cnVjdHMgdm1hcCBkYXRhLXN0cnVjdHVyZSBmcm9tIGZvcm1ETkEgKi9cblxuXHRcdGNvbnN0IGNhbGNHYXBTdW0gPSAodixtYXJnaW5zKSA9PiBtYXJnaW5zLnNsaWNlKDEsdikucmV2ZXJzZSgpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiBhY2MgKyAoMioqaWR4KSAqIGN1cnIsIDApO1xuXHRcdGNvbnN0IGZ4ID0gKHFpLG4pID0+ICAocWklMikgKiAobiAhPT0gdW5kZWZpbmVkID8gbiA6IDApOyAgICAgICAgIC8vIHhwb3M6IDAxMjMgLT4gMDEwMSAqIHNoaWZ0IG5cblx0XHRjb25zdCBmeSA9IChxaSxuKSA9PiArKHFpPjAgJiYgcWk8MykgKiAobiAhPT0gdW5kZWZpbmVkID8gbiA6IDApOyAvLyB5cG9zOiAwMTIzIC0+IDAxMTAgKiBzaGlmdCBuXG5cblx0XHRjb25zdCBjb25zdHJ1Y3RWbWFwX3JlY3Vyc2l2ZSA9IChkbmFIb2xvbiwgdmNvdW50LCBjZWxsLCBtYXJnaW5zLCBxaT0wKSA9PiB7XG5cdFx0XHRjb25zdCBzdWJUcmVlID0ge307XG5cdFx0XHRjb25zdCBnYXBTdW0gPSBjYWxjR2FwU3VtKHZjb3VudCxtYXJnaW5zKTtcblx0XHRcdGNvbnN0IHF0biA9IDQqKnZjb3VudDtcblx0XHRcdGNvbnN0IGxlbiA9IE1hdGguc3FydChxdG4pO1xuXHRcdFx0ZG5hSG9sb24gPSBkbmFIb2xvbi5zdWJzdHIocWkqcXRuLCBxdG4pOyAvLyBxdWFydGVyIG9mIHRoZSBmb3JtRE5BIHN0cmluZ1xuXHRcdFxuXHRcdFx0c3ViVHJlZS5kYXRhID0geyBcblx0XHRcdFx0ZG5hOiAnOjonK2RuYUhvbG9uLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyksXG5cdFx0XHRcdHZudW06IHZjb3VudCwgY2VsbDogY2VsbCxcblx0XHRcdFx0bWFyZ2luczogdm51bSA+IDAgPyBtYXJnaW5zLnNsaWNlKDAsdmNvdW50KSA6IG1hcmdpbnMuc2xpY2UoMCwxKVxuXHRcdFx0fTtcblxuXHRcdFx0c3ViVHJlZS5oZWlnaHQgPSB2Y291bnQ7XG5cdFx0XHRzdWJUcmVlLmRlcHRoID0gdm51bSAtIChNYXRoLmxvZyhxdG4pIC8gTWF0aC5sb2coNCkpOyAvLyBsb2cgYmFzZSA0XG5cdFx0XHRzdWJUcmVlLm9yZGVyID0gcWk7XG5cdFx0XG5cdFx0XHRzdWJUcmVlLnBvc2l0aW9uID0gW1xuXHRcdFx0XHQvLyBiYXNlIHNoaWZ0ICA9ICAoMSkgY2VsbCBzaXplICogbGVuZ3RoIHVuaXRzICArICAoMikgc3VtIG9mIGFsbCBwcmV2aW91cyBnYXBzL21hcmdpbnNcblx0XHRcdFx0Ly8gcmVhbCBzaGlmdCAgPSAgYmFzZSBzaGlmdCAgKyAgKDMpIG1hcmdpbnMgb2YgY3VycmVudCBpdGVyYXRpb24gbGV2ZWxcblx0XHRcdFx0Ly8gLS0gcWk6IGN1cnJlbnQgdmFsdWUgaW5kZXggMC8xLzIvM1xuXHRcdFx0XHQvLyAtLSAtLSBmeC9meSBtYXAgcWkgdG8geC95IHBvc2l0aW9ucyBvZiBhIHNxdWFyZSBhbmQgbXVsdGlwbHkgYnkgc2hpZnQgdmFsdWUgKDIuIGFyZ3VtZW50KVxuXHRcdFx0XHQvLyAtLSBtYXJnaW5zOiBbc3Ryb2tlVywgMSAqIGdhcEdyb3csIDIgKiBnYXBHcm93LCDigKYgKHZudW0tMSkgKiBnYXBHcm93XVxuXHRcdFx0XHQvLyAtLSAtLSBpZiB2Y291bnQgPT0gMCAgICAtPiBzaGlmdCAoMykgPT0gc3Ryb2tlV1xuXHRcdFx0XHQvLyAtLSAtLSBpZiB2Y291bnQgPT0gdm51bSAtPiBzaGlmdCAoMykgPT0gMFxuXHRcdFx0XHRmeChxaSwgbGVuKmNlbGwudykgKyBmeChxaSwgZ2FwU3VtKSArIGZ4KHFpLCBtYXJnaW5zW3Zjb3VudF0pLFxuXHRcdFx0XHRmeShxaSwgbGVuKmNlbGwuaCkgKyBmeShxaSwgZ2FwU3VtKSArIGZ5KHFpLCBtYXJnaW5zW3Zjb3VudF0pXTtcblxuXHRcdFx0c3ViVHJlZS5zY2FsZSA9IFtcblx0XHRcdFx0bGVuKmNlbGwudyArIGdhcFN1bSwgXG5cdFx0XHRcdGxlbipjZWxsLmggKyBnYXBTdW0gXTtcblxuXHRcdFx0aWYgKHZudW0gPT09IDApIHsgLy8gaWYgZm9ybUROQSBvbmx5IGhhcyBhIHNpbmdsZSB2YWx1ZSwgbGlrZSA6OjNcblx0XHRcdFx0c3ViVHJlZS52YWx1ZSA9IGRuYUhvbG9uO1xuXHRcdFx0XHRyZXR1cm4gc3ViVHJlZTtcblx0XHRcdH1cblxuXHRcdFx0c3ViVHJlZS5jaGlsZHJlbiA9IFtdO1xuXHRcdFxuXHRcdFx0Zm9yIChsZXQgaT0wOyAodmNvdW50ID4gMCAmJiBpIDwgNCkgfHzCoCh2Y291bnQgPT09IDAgJiYgaSA8IDEpOyBpKyspIHtcblx0XHRcdFx0aWYgKHZjb3VudCA+IDEpIHtcblx0XHRcdFx0c3ViVHJlZS5jaGlsZHJlbiA9IFxuXHRcdFx0XHRcdFsuLi5zdWJUcmVlLmNoaWxkcmVuLCBjb25zdHJ1Y3RWbWFwX3JlY3Vyc2l2ZShkbmFIb2xvbiwgdmNvdW50LTEsIGNlbGwsIG1hcmdpbnMsIGkpIF07XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHZhbCA9IGRuYUhvbG9uLnN1YnN0cihpLDEpO1xuXHRcdFxuXHRcdFx0XHRzdWJUcmVlLmNoaWxkcmVuID0gWy4uLnN1YlRyZWUuY2hpbGRyZW4sICh7XG5cdFx0XHRcdFx0Ly8gdHlwZTogJ3ZhbHVlJyxcblx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRkbmE6ICc6OicrdmFsLFxuXHRcdFx0XHRcdFx0dm51bTogMCwgY2VsbDogY2VsbCxcblx0XHRcdFx0XHRcdG1hcmdpbnM6IG1hcmdpbnMuc2xpY2UoMCwxKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHZhbHVlOiB2YWwsXG5cdFx0XHRcdFx0aGVpZ2h0OiB2Y291bnQtMSxcblx0XHRcdFx0XHRkZXB0aDogc3ViVHJlZS5kZXB0aCArIDEsXG5cdFx0XHRcdFx0b3JkZXI6IGksXG5cdFx0XHRcdFx0Ly8gY291bnQ6IDEsXG5cdFx0XHRcdFx0cG9zaXRpb246IFtmeChpLGNlbGwudyksIGZ5KGksY2VsbC5oKV0sXG5cdFx0XHRcdFx0c2NhbGU6IFtjZWxsLncsIGNlbGwuaF0sXG5cdFx0XHRcdFx0Ly8gcGFyZW50OiBzdWJUcmVlXG5cdFx0XHRcdH0pIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQgIHJldHVybiBzdWJUcmVlO1xuXHRcdH1cblx0XHRyZXR1cm4gY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUgKHJldmVyc2VkRE5BLCB2bnVtLCBjZWxsLCBtYXJnaW5zKTtcblx0fVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFZhbGlkYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0c3RhdGljIGRuYU1hdGNoZXNGb3JtIChkbmEsIGZvcm0sIF92YXJMaXN0PXVuZGVmaW5lZCwgb3B0aW9ucykge1xuXHRcdC8qIENoZWNrcyBpZiBhIGdpdmVuIEROQSBjb2RlIG1hdGNoZXMgYSBnaXZlbiBGT1JNICgrIG9wdGlvbmFsIHZhcmlhYmxlIGxpc3QpICovXG5cdFx0Ly8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG5cdFx0Y29uc3QgdmFyTGlzdCA9IF92YXJMaXN0ID8gX3Zhckxpc3QgOiBzdXBlci5nZXRWYXJpYWJsZXMoZm9ybSk7XG5cblx0XHRjb25zdCB2YWxpZGF0aW9ucyA9IF92YXJMaXN0ID8gW1xuXHRcdFx0Y3JlYXRlVmFsaWRhdGlvbihcblx0XHRcdFx0KCkgPT4gdGhpcy5mb3JtTWF0Y2hlc1Zhckxpc3QoZm9ybSwgdmFyTGlzdCksXG5cdFx0XHRcdCdGT1JNIGRvZXNuXFwndCBtYXRjaCB0aGUgZ2l2ZW4gdmFyaWFibGUgbGlzdCcpLFxuXHRcdFx0Y3JlYXRlVmFsaWRhdGlvbihcblx0XHRcdFx0KCkgPT4gdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuXHRcdFx0XHQnTnVtYmVyIG9mIHZhcmlhYmxlcyBpbiBnaXZlbiB2YXJpYWJsZSBsaXN0IGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyksXG5cdFx0XHRjcmVhdGVWYWxpZGF0aW9uKFxuXHRcdFx0XHQoKSA9PiB0aGlzLmVuY29kZShmb3JtLCB2YXJMaXN0KSA9PT0gZG5hLFxuXHRcdFx0XHQnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cyAocmVzcGVjdGluZyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXIpJyksXG5cdFx0XSA6IFtcblx0XHRcdGNyZWF0ZVZhbGlkYXRpb24oXG5cdFx0XHRcdCgpID0+IHZhckxpc3QgJiYgdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuXHRcdFx0XHQnTnVtYmVyIG9mIEZPUk0gdmFyaWFibGVzIGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyksXG5cdFx0XHRjcmVhdGVWYWxpZGF0aW9uKFxuXHRcdFx0XHQoKSA9PiB0aGlzLmVuY29kZShmb3JtKSA9PT0gZG5hLFxuXHRcdFx0XHQnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cycpLFxuXHRcdF07XG5cblx0XHRyZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG5cdFx0XHRlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcblx0XHRcdHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcblx0XHR9KSApO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkRE5BIChfaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBcdC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBpbiBmb3JtRE5BIGZvcm1hdCAoaGFzIHRvIGJlIG1hcmtlZCB3aXRoICc6OicgdG8gbm90IGNvbmZ1c2UgaXQgd2l0aCBhIEZPUk0gb3V0IG9mIGNvbnN0YW50cykgKi9cbiAgICBcdGNvbnN0IHtjb21wYXJlRm9ybSwgcmVxdWlyZU1hcmt9ID0geyBjb21wYXJlRm9ybTogdHJ1ZSwgcmVxdWlyZU1hcms6IHRydWUsIC4uLm9wdGlvbnMgfTtcblxuICAgIFx0Y29uc3QgaW5wdXQgPSByZXF1aXJlTWFyayA/IF9pbnB1dCA6ICc6OicrX2lucHV0O1xuXG4gICAgXHRjb25zdCB2YWxpZGF0aW9uczEgPSBbXG4gICAgXHRcdGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycsXG4gICAgXHRcdFx0J2Zvcm1ETkEgaW5wdXQgaXMgbm90IG9mIHR5cGUg4oCYc3RyaW5n4oCZJyksXG4gICAgXHRcdGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gaW5wdXQuaW5jbHVkZXMoJzo6JyksXG4gICAgXHRcdFx0J0lucHV0IGRvZXMgbm90IGluY2x1ZGUgdGhlIG1hcmsg4oCYOjrigJkgZm9yIGZvcm1ETkEnKSxcbiAgICBcdFx0Y3JlYXRlVmFsaWRhdGlvbigoKSA9PiBpbnB1dC5sZW5ndGggPj0gMyxcbiAgICBcdFx0XHQnZm9ybUROQSBpbnB1dCBpcyB0b28gc2hvcnQnKSxcbiAgICBcdF07XG5cdFx0dmFsaWRhdGlvbnMxLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuXHRcdFx0ZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG5cdFx0XHRzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG5cdFx0fSkgKTtcblxuICAgIFx0Y29uc3QgeyBkbmEsIGZvcm11bGEsIHZhckxpc3QgfSA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgIFx0Y29uc3QgdmFsaWRhdGlvbnMyID0gW1xuICAgIFx0XHRjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpID49IDAsXG4gICAgXHRcdFx0J2Zvcm1ETkEgY29kZSBsZW5ndGggaXMgbm90IGluIHRoZSByYW5nZSA0XngnKSxcbiAgICBcdFx0Y3JlYXRlVmFsaWRhdGlvbigoKSA9PiAhZG5hLnNwbGl0KCcnKS5zb21lKG4gPT4gaXNOYU4ocGFyc2VJbnQobikpIHx8IHBhcnNlSW50KG4pIDwgMCB8fCBwYXJzZUludChuKSA+IDMpLFxuICAgIFx0XHRcdCdmb3JtRE5BIGNvZGUgaXMgbm90IGluIHF1YXRlcm5pb24gZm9ybWF0IChjb25zaXN0aW5nIG9ubHkgb2YgdGhlIG51bWJlcnMgMC8xLzIvMyknKSxcbiAgICBcdFx0Y29tcGFyZUZvcm0gJiYgZm9ybXVsYSAhPT0gdW5kZWZpbmVkXG4gICAgXHRcdD8gY3JlYXRlVmFsaWRhdGlvbigoKSA9PiB0aGlzLmRuYU1hdGNoZXNGb3JtKGRuYSwgZm9ybXVsYSwgdmFyTGlzdCksXG4gICAgXHRcdFx0J2Zvcm1ETkEgY29kZSBwYXJ0IGRvZXNuXFwndCBtYXRjaCBmb3JtdWxhIHBhcnQgb3IgZm9ybXVsYSBwYXJ0IGRvZXNuXFwndCBtYXRjaCBpdHMgc3BlY2lmaWVkIHZhcmlhYmxlIG9yZGVyJykgOiBudWxsLFxuICAgIFx0XS5maWx0ZXIoZm4gPT4gZm4pO1xuXG5cdFx0dmFsaWRhdGlvbnMyLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuXHRcdFx0ZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG5cdFx0XHRzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG5cdFx0fSkgKTtcblxuXHRcdHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIEVYUEVSSU1FTlRBTCA+XG5cbnN0YXRpYyBnZW5lcmF0ZVZhck5hbWVzICh2bnVtLCBleGNsdWRlTGlzdCA9IHVuZGVmaW5lZCkge1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IHtcblx0XHRsZXQgY2FuZGlkYXRlID0gYHhfJHtpfWA7XG5cdFx0aWYgKGV4Y2x1ZGVMaXN0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHdoaWxlIChleGNsdWRlTGlzdC5pbmNsdWRlcyhjYW5kaWRhdGUpKSB7XG5cdFx0XHRcdGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZStg4oCyYDtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhbmRpZGF0ZTtcblx0fSk7XG59XG5cbnN0YXRpYyB1bml2ZXJzZV8xICh4KSB7XG5cdC8qIFJldHVybnMgdGhlIGNvbnN0aXR1ZW50cyBvZiB0aGUgNC12YWx1ZWQgdW5pdmVyc2Ugb2YgMSB0ZXJtcyBmcm9tIGEgdmFyaWFibGUgbmFtZSAqL1xuXHRpZiAoeC5sZW5ndGggPiAxKSB4ID0gYFwiJHt4fVwiYDtcblx0cmV0dXJuIFsgXG5cdFx0YCh7KCR7eH0pfXsycnwoJHt4fSl9KWAsIFxuXHRcdGAoeyR7eH19ezJyfCR7eH19KWAsIFxuXHRcdGAoKHsoJHt4fSl9JHt4fSkoezJyfCR7eH19KCR7eH0pKSlgLCBcblx0XHRgKCh7JHt4fX0oJHt4fSkpKHsycnwoJHt4fSl9JHt4fSkpYF07XG59XG5cbnN0YXRpYyB1bml2ZXJzZV9uICh2YXJzKSB7XG5cdC8qIFJldHVybnMgdGhlIGNvbnN0aXR1ZW50cyBvZiB0aGUgNC12YWx1ZWQgdW5pdmVyc2Ugb2YgbiB0ZXJtcyBmcm9tIGEgbGlzdCBvZiBuIHZhcmlhYmxlIG5hbWVzICovXG5cdGNvbnN0IHZudW0gPSB2YXJzLmxlbmd0aDtcblx0Y29uc3QgdW5pdjFzID0gdmFycy5tYXAodiA9PiB0aGlzLnVuaXZlcnNlXzEodikpO1xuXHRyZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiA0Kip2bnVtfSwgKF8sIGkpID0+IHtcblx0ICBjb25zdCBpcSA9IHBhZChpLnRvU3RyaW5nKDQpLCB2bnVtKS5zcGxpdCgnJyk7XG5cdCAgY29uc3QgdW5pdk4gPSB1bml2MXMucmVkdWNlKChmb3JtdWxhLCB1bml2MSwgaiwgYXJyKSA9PiBcblx0XHRcdFx0XHRcdCAgIGZvcm11bGErYCgke3VuaXYxW2lxW2pdXX0pYFxuXHRcdFx0XHRcdFx0ICAgKyhqID09PSBhcnIubGVuZ3RoLTEgPyAnKScgOiAnJyksICcoJyk7XG5cdCAgcmV0dXJuIHZudW0gPiAxID8gdW5pdk4gOiB1bml2Ti5zbGljZSgyLC0yKTtcblx0fSk7XG59O1xuXG4vLyA8IEVORFxuXG5cdHN0YXRpYyB0b3RhbFZhcnNGcm9tRE5BIChmb3JtRE5BKSB7IFxuXHRcdC8qIENhbGN1bGF0ZXMgdmFyaWFibGUgbnVtYmVyIGZyb20gZm9ybUROQSAqL1xuXG5cdFx0Ly8gZGV0YWNoIGZyb20gZm9ybUROQSBtYXJrICc6Oidcblx0XHRjb25zdCBkbmEgPSBmb3JtRE5BLnNwbGl0KCc6JykucG9wKCk7XG5cblx0XHQvLyBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiB2YXJpYWJsZXMgZnJvbSB0aGUgbGVuZ2h0IG9mIHRoZSBzdHJpbmdcblx0XHRjb25zdCBuID0gTWF0aC5sb2coZG5hLmxlbmd0aCkvTWF0aC5sb2coNCk7IC8vIGxvZ180KGRuYSBsZW5ndGgpID0gdmFyaWFibGUgbnVtYmVyXG5cdFx0cmV0dXJuIG4gJSAxID09PSAwID8gbiA6IE5hTjtcblx0fTtcblxuICAgIHN0YXRpYyByZXBhaXJETkEgKGlucHV0KSB7XG4gICAgXHQvKiBSZXBhaXJzIGEgZ2l2ZW4gc3RyaW5nIHRoYXQgaXMgbm90IGluIGEgdmFsaWQgZm9ybUROQSBmb3JtIHRvIHBhc3MgYXMgZm9ybUROQSAqL1xuXG4gICAgXHQvLyBpZiB0aGUgaW5wdXQgY29udGFpbnMgdGhlIG1hcmsgJzo6JyBmb3IgZm9ybUROQSwgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzXG4gICAgXHRpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICBcdFx0Ly8gQ2FzZSAxOiBpbnB1dCBpcyBvZiBmb3JtIGYuW3hdOjpuIG9yIGY6Om4gLT4gZiB3aWxsIGJlIGVuY29kZWQgYXMgYSBGT1JNICh3aXRoIFt4XSBhcyB2YXJpYWJsZSBvcmRlciwgaWYgaXQgbWF0Y2hlcyB0aGUgRk9STXMgdmFyaWFibGVzIGluIG51bWJlciBhbmQgbGFiZWxzKVxuICAgIFx0XHQvLyAtIElmIHRoZSBmb3JtRE5BIGhhcyBiZWVuIHdlbGwgZm9ybWVkIGluIHRoZSBmaXJzdCBwbGFjZSwgdGhlIG91dHB1dCB3aWxsIGJlIGVxdWl2YWxlbnRcbiAgICBcdFx0Ly8gLSBJZiB0aGUgZG5hIHBhcnQgZG9lc24ndCBtYXRjaCB0aGUgRk9STSBwYXJ0LCB0aGUgZG5hIHBhcnQgd2lsbCBiZSBjb3JyZWN0ZWRcbiAgICBcdFx0Ly8gLSBJZiB0aGUgdmFyaWFibGUgb3JkZXIgZG9lc24ndCBtYXRjaCB0aGUgRk9STSB2YXJpYWJsZXMsIGl0IHdpbGwgYWxzbyBiZSBjb3JyZWN0ZWRcbiAgICBcdFx0Ly8gTm90ZSB0aGF0IHRoaXMgY2FzZSBlZmZlY3RpdmVseSBpbnRlcnByZXRzIHRoZSBpbnB1dCBhcyBGT1JNIGlucHV0IGFuZCBtYWtlcyBzdXJlIHRoYXQgdGhlIGZvcm1ETkEgaXMgY29uc2lzdGVudCwgYmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIGluZmVyIGEgRk9STSBmcm9tIGl0cyBETkEuXG4gICAgXHRcdGNvbnN0IHBhcnRzID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG4gICAgXHRcdGlmIChwYXJ0cy5mb3JtdWxhKSB7XG5cdFx0ICAgIFx0Ly8gaWYgdGhlcmUgaXMgYSBbeF0tcGFydCwgZXh0cmFjdCB2YXJpYWJsZSBvcmRlciBhbmQgY2hlY2sgaWYgaXRzIHZhbGlkIGZvciB0aGUgRk9STVxuXHRcdCAgICBcdGxldCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuXHRcdCAgICBcdHRyeSB7IC8vIHRyeS4uLmNhdGNoIGF2b2lkcyBpbnRlcnJ1cHRpb24gYnkgRXJyb3Jcblx0ICAgIFx0XHRcdGlmIChwYXJ0cy52YXJMaXN0ICYmIHRoaXMuZm9ybU1hdGNoZXNWYXJMaXN0KHBhcnRzLmZvcm11bGEsIHBhcnRzLnZhckxpc3QpKSB2YXJMaXN0ID0gcGFydHMudmFyTGlzdDtcblx0XHQgICAgXHR9IGNhdGNoIChlKSB7XG5cdFx0ICAgIFx0XHRjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG5cdFx0ICAgIFx0fVxuXHQgICAgXHRcdC8vIHJlLWVuY29kZSB0byByZXR1cm4gY29ycmVjdCBmb3JtRE5BIGZvciB0aGUgZ2l2ZW4gZm9ybXVsYVxuXHQgICAgXHRcdHJldHVybiB0aGlzLmZvcm1Ub0ROQShwYXJ0cy5mb3JtdWxhLCB2YXJMaXN0KTtcblx0ICAgIFx0fVxuXHQgICAgXHQvLyBDYXNlIDI6IGlucHV0IGlzIG9mIGZvcm0gOjpuIC0+IHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZVxuXHQgICAgXHQvLyBOb3RlIHRoYXQgYSBGT1JNIHdpbGwgbm90IGJlIGRlY29kZWQgZnJvbSB0aGUgZG5hIGFsb25lLCBzaW5jZSB0aGlzIEZPUk0gd291bGQgYmUgb3BpbmlvbmF0ZWRcblx0ICAgIFx0aWYgKCF0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSByZXR1cm4gbnVsbDtcblxuXHQgICAgXHRyZXR1cm4gaW5wdXQ7XG5cdCAgICB9XG5cdCAgICAvLyBpZiB0aGUgaW5wdXQgaXMgbm90IG1hcmtlZCBhcyBmb3JtRE5BLCBpdCB3aWxsIGp1c3QgYmUgZW5jb2RlZCBhcyBhIEZPUk1cblx0ICAgIHJldHVybiB0aGlzLmZvcm1Ub0ROQShpbnB1dCk7XG4gICAgfVxuXG5cdHN0YXRpYyBnZXRETkFwYXJ0cyAoZm9ybUROQSkge1xuXHRcdC8qIERlY29tcG9zZXMgYSBmb3JtRE5BIHN0cmluZyBpbnRvIGl0cyAzLzIvMSBwYXJ0cyAqL1xuXHRcdGxldCBkbmEgPSB1bmRlZmluZWQsIGZvcm11bGEgPSB1bmRlZmluZWQsIHZhckxpc3QgPSB1bmRlZmluZWQ7XG5cblx0XHRjb25zdCBwYXJ0cyA9IGZvcm1ETkEuc3BsaXQoJzonKTtcblx0XHRkbmEgPSBwYXJ0cy5wb3AoKTtcblxuXHRcdGlmIChwYXJ0c1swXS5sZW5ndGggPiAwKSB7XG4gICAgXHRcdGNvbnN0IGZvcm1fcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLicpO1xuICAgIFx0XHRmb3JtdWxhID0gZm9ybV9wYXJ0c1swXTtcbiAgICBcdFx0dmFyTGlzdCA9IGZvcm1fcGFydHMubGVuZ3RoID4gMSA/IGZvcm1fcGFydHNbMV0uc2xpY2UoMSwtMSkuc3BsaXQoJywnKSA6IHZhckxpc3Q7XG4gICAgXHR9XG5cblx0XHRyZXR1cm4gKHsgZG5hOiBkbmEsIGZvcm11bGE6IGZvcm11bGEsIHZhckxpc3Q6IHZhckxpc3QgfSk7XG5cdH1cblxufSIsImltcG9ydCB7IHBhZCwgZmxhdHRlbiwgaW5jbHVkZSwgVkFSQ09ERSwgVkFSQ09ERV9SRVYsIGNyZWF0ZVZhbGlkYXRpb24sIGNoZWNrQnJhY2tldE1hdGNoaW5nLCBjaGVja0xpdGVyYWxNYXRjaGluZywgY29sbGFwc2VMaXRlcmFscywgZ2V0QnJhY2tldFVuaXRzIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5pbXBvcnQgRkNhbGMgZnJvbSAnLi9mY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZGb3JtIGV4dGVuZHMgRkNhbGMge1xuICAgIC8qXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgICdmb3JtJyBtb2R1bGUgZm9yIGZvcm1mb3JtIChjKSAyMDE4IFBldGVyIEhvZm1hbm5cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgKi9cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRm9ybSBDYWxjdWxhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjKF9mb3JtKSB7XG4gICAgICAgIC8qIENhbGN1bGF0ZXMgYSBnaXZlbiBmb3JtIHJlY3Vyc2l2ZWx5IFxuXG4gICAgICAgIE5vdGU6IERvIE5PVCB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgZm9ybXVsYXMgd2l0aCB2YXJpYWJsZXMhXG4gICAgICAgICAgICAgIEFzc3VtZXMgeD0wIGZvciBhbGwgdmFyaWFibGVzLiBVc2UgaW50ZXJDYWxjKCkgaW5zdGVhZC5cbiAgICAgICAgKi9cblxuICAgICAgICBsZXQgZnggPSAwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5jYWxjKGZvcm0uc3BhY2VbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgaWYoIWlzTmFOKGZvcm0uc3BhY2VbaV0udmFsdWUpKSBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5lc3RlZFZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmUmVFbnRyeSA9IGZvcm0uc3BhY2VbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIGZSZUVudHJ5Lm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRWYWxzID0gWy4uLm5lc3RlZFZhbHMsIHRoaXMuY2FsYyhmUmVFbnRyeS5uZXN0ZWRbal0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIGV2ZW4gcmVzb2x1dGlvbnMgKHRvdGFsIG5lc3RlZCBhcmd1bWVudHMpLCByZUVudHJ5IG51bWJlciB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGl0cyBldmVuIG9yIG9kZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlRW50cnlOdW1iZXIgPSAoZlJlRW50cnkubmVzdGVkLmxlbmd0aCAlIDIgPT09IDApID8gdW5kZWZpbmVkIDogZlJlRW50cnkucmVFdmVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5vdGF0aW9uIHJlYWRpbmc6IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9ICB1c2UgbmVzdGVkVmFscy5yZXZlcnNlKCkgdG8gcmV2ZXJzZSB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLnJlRW50cnkocmVFbnRyeU51bWJlciwgZlJlRW50cnkubGFzdE9wZW4sIGZSZUVudHJ5LmFsdEludGVycHJldGF0aW9uLCAuLi5uZXN0ZWRWYWxzKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm0udW5tYXJrZWQpIHJldHVybiBmeDtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnYoIGZ4ICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjYWxjQWxsKF9mb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtXG4gICAgICAgICAgIChyZWZhY3RvcmVkOiAxMC4xMC4yMDIwKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHZhcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCB2YWxzID0ge307XG5cbiAgICAgICAgaWYgKHZudW0gPCAxKSB7XG4gICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHRoaXMuY2FsYyhmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCA0Kip2bnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkraW50ZXJwclZhbHNdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFscztcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVyQ2FsYyhmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8qIEludGVycHJldHMgYSBmb3JtIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHQgb2YgdGhlIGludGVycHJldGF0aW9uICovXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsYyggdGhpcy5pbnRlcnByZXQoZm9ybSwgaW50ZXJwcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVycHJldChfZm9ybSwgaW50ZXJwcikge1xuICAgICAgICAvKiBJbnRlcnByZXRzIGEgZm9ybSB3aXRoIHNwZWNpZmllZCB2YWx1ZXMgZm9yIGVhY2ggdmFyaWFibGVcblxuICAgICAgICBpbnRlcnByOiBbe3ZhcjogJ3gnLCB2YWx1ZTogbn0sIOKApl1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBjb25zdCBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS5zeW1ib2wgPT09IGludGVycHJbdl0udmFyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZVtpXS52YWx1ZSA9IGludGVycHJbdl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnByRm9ybTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkNhbGNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbF9sb2dpYyhmeCwgZnkpO1xuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVsKC4uLmZWYWxzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmludl9sb2dpYyhmeCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbnYoZngsIG4pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdCAqL1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgICAgIGNvbnN0IGpzb25TdHIgPSB0aGlzLmNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBzdHJpbmcgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICBsZXQganNvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8vIGNsZWFuIGZvcm11bGEgc3RyaW5nIGZyb20gd2hpdGVzcGFjZVxuICAgICAgICBjb25zdCBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoY2xlYW5Gb3JtdWxhKTtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oYXJyKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW5MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICBsZXQgY2xlYW5Gb3JtdWxhID0gJyc7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuXG4gICAgICAgICAgICAvLyBvbWl0IHdoaXRlc3BhY2Ugb3V0c2lkZSBvZiBxdW90ZXNcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSB8fMKgaW5TbGFzaCkgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbkZvcm11bGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdEZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIHRvIEpTT04tZm9ybSAqL1xuXG4gICAgICAgIGxldCBjb21wQWxsID0gW107XG4gICAgICAgIGxldCB1bm1hcmtlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGFsbCBlbmNsb3Npbmcgb3V0ZXIgZm9ybVxuICAgICAgICBsZXQgY291bnREZXB0aCA9IDA7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICcgIHsnXTtcbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXCJ0eXBlXCI6XCJmb3JtXCIsJ107XG5cbiAgICAgICAgaWYgKHVubWFya2VkKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInVubWFya2VkXCI6dHJ1ZSwnXTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1wic3BhY2VcIjpbJ107XG5cblxuICAgICAgICBsZXQgcGFydHMgPSBbJyddO1xuXG4gICAgICAgIGNvdW50RGVwdGggPSAwO1xuICAgICAgICBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBvcHRDaGFyID0gJ+KktCc7XG4gICAgICAgIGNvbnN0IG5lc3RDaGFyID0gJ+KktSc7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBsZXQgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBjb25zdCBwcmV2Q2hhciA9IGZvcm11bGFbaS0xXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknIHx8wqBjaGFyID09PSAnfScpIGNvdW50RGVwdGgtLTtcbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnIHx8wqBjaGFyID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCAoeCkgZG9lc24ndCBuZWVkIHRvIGJlIHNlcGFyYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSBwYXJ0cyA9IFsuLi5wYXJ0cywgJyddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIChwcmV2Q2hhciA9PT0gJyknIHx8wqBwcmV2Q2hhciA9PT0gJ30nKSAmJiAhKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgY2hhciBmb2xsb3dzICh4KSwgc2VwYXJhdGU7IGJ1dCBub3QgaWYgaXQgaXMgYW5vdGhlciAnKSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHBhcnRzID0gWy4uLnBhcnRzLCAnJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHVuaXF1ZSBzZXBhcmF0aW9uIGNoYXJzIGZvciByZS1lbnRyeSBmb3JtcyBmb3IgZWFzeSBzcGxpdHRpbmdcbiAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnLCcpIGNoYXIgPSBuZXN0Q2hhcjtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudERlcHRoID09PSAxICYmIGNoYXIgPT09ICd8JykgY2hhciA9IG9wdENoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGxhdGVzdCBwdXNoZWQgcGFydFxuICAgICAgICAgICAgcGFydHNbcGFydHMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgIH1cblxuXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gJygnKSB7IFxuICAgICAgICAgICAgICAgIC8vIGlmIHBhcnQgaXMgZm9ybVxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gW3RoaXMuY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSldO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBwYXJ0IGlzIHJlLWVudHJ5IGZvcm1cblxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gWycgIHsnXTtcbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInJlRW50cnlcIiwnXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlUGFydHMgPSBjb250ZW50LnNwbGl0KG9wdENoYXIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlTmVzdGVkID0gcmVQYXJ0c1tyZVBhcnRzLmxlbmd0aC0xXS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVOZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJ107XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICcycicgfHwgcmVQYXJ0c1sxXSA9PT0gJzJyJyB8fCByZVBhcnRzWzJdID09PSAnMnInKSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpmYWxzZSwnXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMV0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzJdID09PSAnb3BlbicpIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOmZhbHNlLCddO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICdhbHQnIHx8IHJlUGFydHNbMV0gPT09ICdhbHQnIHx8IHJlUGFydHNbMl0gPT09ICdhbHQnKSBjb21wID0gWy4uLmNvbXAsICdcImFsdEludGVycHJldGF0aW9uXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wibmVzdGVkXCI6WyddO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbiBpbiByZU5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsIHRoaXMuY29uc3RydWN0RnJvbUxpbmVhcihyZU5lc3RlZFtuXSkgXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4gPCByZU5lc3RlZC5sZW5ndGgtMSkgY29tcCA9IFsuLi5jb21wLCAnLCddO1xuICAgICAgICAgICAgICAgICAgICAvLyByZU5lc3RlZFtuXSA9IHRoaXMuY29uc3RydWN0RnJvbUxpbmVhciggcmVOZXN0ZWRbbl0gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICddfSAgJ107XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVsc2Ugd2UgaGF2ZSB2YXJpYWJsZXMvY29uc3RhbnRzXG5cbiAgICAgICAgICAgICAgICBsZXQgY29tcCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgbGV0IHZhcnMgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgaW5RdW90ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHBhcnRzW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBwYXJ0c1tpXVtqXTtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgcXVvdGVkIHN0cmluZyB3aXRoIGEgJ+KAlicgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSkgdmFycyA9IFsuLi52YXJzLCAn4oCWJ107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHVuY2xlYXIgZm9ybSB3aXRoIGEgJ+KAvScgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5TbGFzaCkgdmFycyA9IFsuLi52YXJzLCAn4oC9J107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHZhcnMgPSBbLi4udmFycywgJyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcXVvdGUgY2hhcnMgaW5zaWRlIHNsYXNoZXMgd2lsbCBiZSBlc2NhcGVkIHRvIG5vdCBpbnRlcmZlcmUgd2l0aCBKU09OIHN5bnRheFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgaW5TbGFzaCkgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSAnXFxcXCcgKyBjaGFyO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIHZhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mKHZhcnNbdl0pICE9PSBcInN0cmluZ1wiKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnICB7J107XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFyc1t2XSkgJiYgdmFyc1t2XS5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFyc1t2XVswXSAhPT0gJ+KAvScgJiYgdmFyc1t2XVswXSAhPT0gJ+KAlicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwiY29uc3RcIiwnXTsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsIHZhcnNbdl1dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcnNbdl1bMF0gPT09ICfigL0nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInVuY2xlYXJcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widmFsdWVcIjoyLCddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJzeW1ib2xcIjonXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIiddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJ2YXJcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widmFsdWVcIjpcIipcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wic3ltYm9sXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YXJzW3ZdWzBdID09PSAn4oCWJykgY29tcCA9IFsuLi5jb21wLCAnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdKydcIiddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ30gICddO1xuICAgICAgICAgICAgICAgICAgICBpZiAodiA8IHZhcnMubGVuZ3RoLTEpIGNvbXAgPSBbLi4uY29tcCwgJywnXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgICAgIH0gLy8gZW5kIGVsc2VcblxuICAgICAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCBwYXJ0c1tpXV07XG4gICAgICAgICAgICBpZiAoaSA8IHBhcnRzLmxlbmd0aC0xKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICcsJ107XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICddfSAgJ107XG5cbiAgICAgICAgcmV0dXJuIGNvbXBBbGw7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlcHJlc2VudGF0aW9uXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGpzb25TdHJpbmcoX2Zvcm0pIHtcbiAgICAgICAgLyogcmV0dXJucyBqc29uLXJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgRk9STSAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuICAgIFxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZm9ybSwgdW5kZWZpbmVkLCAyKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgc3RhdGljIGdldFZhcmlhYmxlcyhfZm9ybSkge1xuICAgICAgICAvKiBwYXJzZXMgYSBGT1JNIHRvIGdldCBhbGwgb2YgaXRzIHZhcmlhYmxlcyBhbmQgc29ydHMgdGhlbSB1c2luZyB0aGUgSlMgQXJyYXkuc29ydCgpIG1ldGhvZFxuICAgICAgICB3aGljaCBzb3J0cyBieSBjb21wYXJpbmcgVVRGLTE2IGNvZGUgdW5pdCB2YWx1ZXMuXG4gICAgICAgIE5vdGU6IEJ5IGNvbnZlbnRpb24sIHRoZSBwcm9jZXNzIG9mIGRlcml2aW5nIGZvcm1ETkEgZnJvbSBhIGdpdmVuIEZPUk0gaW52b2x2ZXMgb3JkZXJpbmcgb2YgdGhlIGV4dHJhY3RlZCB2YXJpYWJsZXMgYnkgdGhpcyBzYW1lIHNvcnRpbmcgbWV0aG9kLCBpZiBubyBzcGVjaWFsIG9yZGVyaW5nIGlzIHNwZWNpZmllZC4gKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBsZXQgdmFycyA9IFtdO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLCBmdW5jdGlvbihmQnJhbmNoKSB7XG4gICAgICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gc3BhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmNsdWRlKHZhcnMsIHNwYWNlW2ldLnN5bWJvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcnMgPSBbLi4udmFycywgc3BhY2VbaV0uc3ltYm9sXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJzLnNvcnQoKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHRyYXZlcnNlRm9ybShmb3JtLGZ1bmMpIHtcbiAgICAgICAgLyogdHJhdmVyc2VzIG9ubHkgZm9ybS10eXBlcyBpbiBhIGpzb24gdHJlZSAqL1xuICAgICAgICBjb25zdCBicmVha1RyYXYgPSBmdW5jLmFwcGx5KHRoaXMsW2Zvcm1dKTtcblxuICAgICAgICBpZiAoZm9ybS5zcGFjZSkgeyAvLyBmb3JtLnR5cGU6ICdmb3JtJ1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAnZm9ybScgfHwgZm9ybS5zcGFjZVtpXS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0uc3BhY2VbaV0sZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLm5lc3RlZCkgeyAvLyBmb3JtLnR5cGU6ICdyZUVudHJ5J1xuICAgICAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRoaXMudHJhdmVyc2VGb3JtKGZvcm0ubmVzdGVkW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnRVJST1I6IE5vdCBhIGZvcm0hJyk7XG5cbiAgICAgICAgcmV0dXJuIGJyZWFrVHJhdjtcbiAgICB9O1xuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIEFkZGl0aW9ucyAwMS8yMDIwIGZyb206XG4gICAgICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9mb3JtZm9ybS10b29sYm94IFxuICAgICovXG5cbiAgICBzdGF0aWMgZ2V0VG90YWxWYXJzIChmb3JtU3RyKSB7XG4gICAgICAgIC8qIGdldHMgdG90YWwgdmFyaWFibGUgbnVtYmVyIG9mIGEgRk9STSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybVN0ci5zdWJzdHIoKSkubGVuZ3RoO1xuICAgIH07XG5cbiAgICBzdGF0aWMgcmVPcmRlclZhcnMgKGZvcm11bGEsIHZhcm9yZGVyKSB7XG4gICAgICAgIC8qIHJlLW9yZGVycyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHRvIG1hdGNoIGFuIG9yZGVyaW5nIHBhdHRlcm4gKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVjb2RlVmFycyggdGhpcy5lbmNvZGVWYXJzKGZvcm11bGEsIHZhcm9yZGVyKSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgZGVjb2RlVmFycyAoZW5jU3RyLCBkZWNvZGVQYXR0ZXJuPXVuZGVmaW5lZCkge1xuICAgICAgLyogZGVjb2RlcyB2YXJpYWJsZXMgaW4gYW4gZW5jb2RlZCBmb3JtdWxhIHN0cmluZyB3aXRoIGFuIG9wdGlvbmFsIGRlY29kZSBwYXR0ZXJuICovXG4gICAgICBsZXQgcmV2Q29kZSA9IFZBUkNPREVfUkVWO1xuICAgICAgaWYgKGRlY29kZVBhdHRlcm4pIHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFZBUkNPREVfUkVWKTtcbiAgICAgICAgY29uc3QgdmFyUGFydCA9IGtleXMuc2xpY2UoMCxkZWNvZGVQYXR0ZXJuLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IG1vZFBhcnQgPSBrZXlzLnNsaWNlKC0zKTtcbiAgICAgICAgXG4gICAgICAgIHJldkNvZGUgPSB2YXJQYXJ0LmNvbmNhdChtb2RQYXJ0KS5yZWR1Y2UoIChjb2RlLGtleSxpKSA9PiAoey4uLmNvZGUsIFxuICAgICAgICAgICAgW2tleV06IGkgPCBkZWNvZGVQYXR0ZXJuLmxlbmd0aCA/IGRlY29kZVBhdHRlcm5baV0gOiBWQVJDT0RFX1JFVltrZXldLCB9KSx7fSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbmNTdHIuc3BsaXQoJycpXG4gICAgICAgICAgICAgICAgLm1hcChjID0+IE9iamVjdC5rZXlzKHJldkNvZGUpLmluZGV4T2YoYykgPiAtMSA/IHJldkNvZGVbY10gOiBjKS5qb2luKCcnKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGVuY29kZVZhcnMgKGZvcm11bGEsIHZhcm9yZGVyPXVuZGVmaW5lZCkge1xuICAgICAgLyogZW5jb2RlcyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHN0cmluZyBhY2NvcmRpbmcgdG8gYSBnaXZlbiB2YXJpYWJsZSBvcmRlciAoYXJyYXkpICovXG4gICAgICBpZiAoIXZhcm9yZGVyKSB2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuICAgICAgXG4gICAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7IC8vIHRoeCB0byBDb29sQUo4NjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY5Njk0ODZcbiAgICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgJ1xcXFwkJicpOyAvLyAkJiBtZWFucyB0aGUgd2hvbGUgbWF0Y2hlZCBzdHJpbmdcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc3QgZml4UHRuID0ge2FsdDogJ2FsdCg/PVxcfCknLCByRXZlbjogJzJyKD89XFx8KScsIHJPZGQ6ICcycisxKD89XFx8KSd9O1xuICAgICAgY29uc3QgcHRuID0gdiA9PiB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCA+IDEpIHJldHVybiBgXFxcIiR7ZXNjYXBlUmVnRXhwKHYpfVxcXCJgOyAvLyAoPzw9XFxcIikoJHt2fSkoPz1cXFwiKVxuICAgICAgICByZXR1cm4gYCR7ZXNjYXBlUmVnRXhwKHYpfWA7XG4gICAgICB9O1xuICAgICAgXG4gICAgICByZXR1cm4gdmFyb3JkZXJcbiAgICAgICAgLnJlZHVjZSgoZW5jU3RyLHYsaSkgPT4gZW5jU3RyXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uYWx0LCAnZycpLFZBUkNPREVbJ2FsdCddIClcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5yRXZlbiwgJ2cnKSxWQVJDT0RFWycyciddKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLnJPZGQsICdnJyksVkFSQ09ERVsnMnIrMSddKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAocHRuKHYpLCAnZycpLChPYmplY3Qua2V5cyhWQVJDT0RFX1JFVilbaV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAsIGZvcm11bGEgKTtcbiAgICB9O1xuXG5cbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgTmV3IEFkZGl0aW9ucyAwMS8yMDIwOlxuICAgICovXG5cbiAgICBzdGF0aWMgbWF0Y2hEZWZhdWx0VmFyT3JkZXIgKHZhckxpc3QpIHtcbiAgICAgICAgLyogSGVscGVyIHRvIG1hdGNoIGRlZmF1bHQgb3JkZXJpbmdzIGZvciBjYWxjdWxhdGlvbiBhbmQgdm1hcHMgKi9cbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICdFTFInKSByZXR1cm4gWydMJywnRScsJ1InXTtcbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICcrLUxSJykgcmV0dXJuIFsnLScsJ0wnLCdSJywnKyddO1xuICAgICAgICBpZiAodmFyTGlzdC5qb2luKCcnKSA9PT0gJystRUxSJykgcmV0dXJuIFsnLScsJ0wnLCdFJywnUicsJysnXTtcbiAgICAgICAgcmV0dXJuIHZhckxpc3Q7XG4gICAgfVxuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE5ldyBBZGRpdGlvbnMgMTAvMjAyMDpcbiAgICAqL1xuXG4gICAgc3RhdGljIGlzVmFsaWRGb3JtIChpbnB1dCwgb3B0aW9ucynCoHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgZm9ybXVsYSBvciBKU09OLUZPUk0gKi9cblxuICAgICAgICByZXR1cm4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycgPyBcbiAgICAgICAgICAgIGlzVmFsaWRGb3JtdWxhKGlucHV0LCBvcHRpb25zKSA6IGlzVmFsaWRKU09ORm9ybShpbnB1dCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRGb3JtdWxhIChpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBmb3JtdWxhICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGxldCB2YWxpZGF0aW9uczEgPSBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICdGb3JtdWxhIGlucHV0IGlzIG5vdCBvZiB0eXBlIOKAmHN0cmluZ+KAmScpLFxuICAgICAgICBdO1xuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMCkgdmFsaWRhdGlvbnMxID0gWy4uLnZhbGlkYXRpb25zMSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKSAmJiAhIWNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICcvJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHNhbnNMaXRlcmFscyA9IGNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gc2Fuc0xpdGVyYWxzID8gY2hlY2tMaXRlcmFsTWF0Y2hpbmcoc2Fuc0xpdGVyYWxzLCAnLycpIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnTnVtYmVyIG9mIHF1b3RlcyBmb3IgbGl0ZXJhbCB2YXJpYWJsZXMgKGUuZy46IFwieFwiKSBvciBudW1iZXIgb2Ygc2xhc2hlcyBmb3IgdW5jbGVhciBGT1JNcyAoZS5nLjogL3gvKSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgICAgICAvLyBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgLy8gICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG9wZW5TZXAgPSAn4oGFJywgY2xvc2VTZXAgPSAn4oGGJztcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlyVW5jbEZvcm1zID0gaW5wdXQuc3BsaXQoJy8nKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGFjYyArIChpZHggJSAyID09PSAxID8gb3BlblNlcCA6IGNsb3NlU2VwKSArIGN1cnJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVuY2xGb3JtVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyVW5jbEZvcm1zLCB7b3Blbjogb3BlblNlcCwgY2xvc2U6IGNsb3NlU2VwfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHVuY2xGb3JtVW5pdHMuZXZlcnkodW5jbEZvcm0gPT4gdW5jbEZvcm0uc3BsaXQoJ1wiJykubGVuZ3RoIDwgMik7IFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvcGVuU2VwID0gJ+KBjCcsIGNsb3NlU2VwID0gJ+KBjSc7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRpckxpdGVyYWxzID0gaW5wdXQuc3BsaXQoJ1wiJykucmVkdWNlKChhY2MsY3VycixpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBhY2MgKyAoaWR4ICUgMiA9PT0gMSA/IG9wZW5TZXAgOiBjbG9zZVNlcCkgKyBjdXJyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBsaXRlcmFsVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyTGl0ZXJhbHMsIHtvcGVuOiBvcGVuU2VwLCBjbG9zZTogY2xvc2VTZXB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsaXRlcmFsVW5pdHMuZXZlcnkobGl0ZXJhbCA9PiApXG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAvLyAnTnVtYmVyIG9mIHF1b3RlcyBmb3IgbGl0ZXJhbCB2YXJpYWJsZXMgKGUuZy46IFwieFwiKSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgIF07XG4gICAgICAgIHZhbGlkYXRpb25zMS5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBjbGVhbklucHV0ID0gY29sbGFwc2VMaXRlcmFscyggY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJ1wiJyksICcvJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMiA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhjbGVhbklucHV0LCAnKCcsICcpJyksXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXIgb3Igb3BlbmluZy9jbG9zaW5nIG9yZGVyIG9mIHBhcmFudGhlc2VzIGluIGZvcm11bGEgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKGNsZWFuSW5wdXQsICd7JywgJ30nKSxcbiAgICAgICAgICAgICAgICAgICAgJ051bWJlciBvciBvcGVuaW5nL2Nsb3Npbmcgb3JkZXIgb2YgY3VybHkgYnJhY2tldHMgaW4gZm9ybXVsYSBkb25cXCd0IG1hdGNoJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uczIuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcblxuICAgICAgICAgICAgY29uc3Qgcm91bmRCclVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGNsZWFuSW5wdXQsIHtvcGVuOiAnKCcsIGNsb3NlOiAnKSd9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cmx5QnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJ3snLCBjbG9zZTogJ30nfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMyA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiByb3VuZEJyVW5pdHMuZXZlcnkoc3ViRm9ybSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhzdWJGb3JtLCAneycsICd9JykpXG4gICAgICAgICAgICAgICAgICAgICAgICYmIGN1cmx5QnJVbml0cy5ldmVyeShzdWJGb3JtID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKHN1YkZvcm0sICcoJywgJyknKSksXG4gICAgICAgICAgICAgICAgICAgICdPcGVuaW5nL2Nsb3Npbmcgb2YgcGFyYW50aGVzZXMgb3ZlcmxhcHMgd2l0aCBvcGVuaW5nL2Nsb3Npbmcgb2YgY3VybHkgYnJhY2tldHMgaW4gZm9ybXVsYSAoZS5nLjogKHthKWJ9KScpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IGN1cmx5QnJVbml0cy5ldmVyeShyZUVudHJ5ID0+IHRoaXMuaXNWYWxpZFJlRW50cnkocmVFbnRyeSkpLFxuICAgICAgICAgICAgICAgICAgICAnT3B0aW9uIHBhcnQgb2Ygb25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBpcyBub3Qgd2VsbC1mb3JtZWQnKSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHZhbGlkYXRpb25zMy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICB9KSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRSZUVudHJ5IChpbnB1dCwgb3B0aW9ucykge1xuICAgICAgICAvKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCByZS1lbnRyeSBjb25zdHJ1Y3Rpb24gKi9cbiAgICAgICAgLy8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgY29uc3QgcGFydHMgPSBpbnB1dC5zbGljZSgxLC0xKS5zcGxpdCgnfCcpO1xuXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyaWVzID0gcGFydHMuZmlsdGVyKChwLGksYXJyKSA9PiBpIDwgYXJyLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdExpc3QgPSBbJ2FsdCcsJ29wZW4nLCcycicsJzJyKzEnXTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdCA9IGVudHJpZXMucmVkdWNlKChhY2Msc3RyKSA9PiBbLi4uYWNjLCBvcHRMaXN0LmZpbHRlcihvcHQgPT4gc3RyID09PSBvcHQpWzBdXSxbXSApLmZpbHRlcihvcHQgPT4gb3B0KTtcblxuICAgICAgICAgICAgY29uc3Qgc2VsTGlzdF91bmlxdWUgPSBbLi4ubmV3IFNldChzZWxMaXN0KV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHNlbExpc3RfdW5pcXVlLmxlbmd0aCA9PT0gZW50cmllcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICdPbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGhhdmUgaW52YWxpZCBvciBkdXBsaWNhdGUgb3B0aW9ucycpLFxuICAgICAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHNlbExpc3RfdW5pcXVlLmZpbHRlcihzdHIgPT4gc3RyID09PSBvcHRMaXN0WzJdIHx8IHN0ciA9PT0gb3B0TGlzdFszXSkubGVuZ3RoIDwgMixcbiAgICAgICAgICAgICAgICAgICAgJ09uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaGF2ZSBib3RoIG9wdGlvbnMg4oCYMnLigJkgYW5kIOKAmDJyKzHigJkgc2V0IGF0IHRoZSBzYW1lIHRpbWUnKSxcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgICAgICB9KSApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzVmFsaWRKU09ORm9ybSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgSlNPTi1GT1JNICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgICAgICcnKSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybU1hdGNoZXNWYXJMaXN0IChmb3JtLCB2YXJMaXN0KSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhIGdpdmVuIEZPUk0gbWF0Y2hlcyBhIGdpdmVuIHZhcmlhYmxlIGxpc3QgKi9cbiAgICAgICAgY29uc3QgdmFyc0Zvcm0gPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcblxuICAgICAgICBjb25zdCBtYXRjaCA9IHZhckxpc3QubGVuZ3RoID09PSB2YXJzRm9ybS5sZW5ndGhcbiAgICAgICAgICAgICYmIHZhcnNGb3JtLmV2ZXJ5KHZfYSA9PiB2YXJMaXN0LnNvbWUodl9iID0+IHZfYSA9PT0gdl9iKSk7XG4gICAgICAgIGlmICghbWF0Y2gpIHRocm93IG5ldyBFcnJvcignRk9STSBkb2VzblxcJ3QgbWF0Y2ggdGhlIGdpdmVuIHZhcmlhYmxlIGxpc3QnKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VmFsaWRGb3JtKGlucHV0KSB7XG4gICAgICAgIGlmKHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEZvcm11bGEoaW5wdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCBhIHZhbGlkIGZvcm11bGEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlTGluZWFyKGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vID4+PiBuZWVkIHRvIGNoZWNrIGpzb24gaW5wdXQgdG9vXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgRDNHcmFwaCBmcm9tICcuLi9tb2R1bGVzL2dyYXBoLWQzJztcblxubGV0IGcxID0ge307IGxldCBnMiA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGR3JhcGggZXh0ZW5kcyBGRm9ybSB7XG4gICAgLypcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAnZ3JhcGgnIG1vZHVsZSBmb3IgZm9ybWZvcm0gKGMpIDIwMTggUGV0ZXIgSG9mbWFublxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMuZ3JhcGhzID0gW107XG4gIH07XG5cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBFeHRlbnNpb25zIG9mIEZGb3JtXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzdGF0aWMganNvblN0cmluZyhfZm9ybSkge1xuXG4gICAgY29uc3QgZXhwYW5kZWRGb3JtID0gdGhpcy5leHBhbmRfcmVFbnRyeShfZm9ybSk7XG4gICAgcmV0dXJuIHN1cGVyLmpzb25TdHJpbmcoZXhwYW5kZWRGb3JtKTtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gR3JhcGggcmVwcmVzZW50YXRpb25cbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIHN0YXRpYyBjcmVhdGVHcmFwaChncmFwaFR5cGUsIF9mb3JtLCBvcHRpb25zKSB7XG4gICAgY29uc3QgYWRkRW1wdHlSZUNoaWxkU3BhY2UgPSAoZ3JhcGhUeXBlID09PSAncGFjaycpO1xuXG4gICAgLy8gZXhwYW5kIHJlLWVudHJ5IHN0cnVjdHVyZSB0byBiZSB1c2FibGUgZm9yIGdyYXBoc1xuICAgIGNvbnN0IGZvcm0gPSB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtLCB7YWRkRW1wdHlSZUNoaWxkU3BhY2U6IGFkZEVtcHR5UmVDaGlsZFNwYWNlfSk7XG4gICAgLy8gaW5pdGlhbGl6ZSB0aGUgZ3JhcGhcblxuICAgIGNvbnN0IGdyYXBoID0gbmV3IEQzR3JhcGgoZ3JhcGhUeXBlLCBmb3JtLCBvcHRpb25zKTtcbiAgICBncmFwaC5mb3JtdWxhID0gX2Zvcm07XG4gICAgLy8gZ3JhcGhzLnB1c2goIG5ldyBEM0dyYXBoKGdyYXBoVHlwZSwgZm9ybSwgb3B0aW9ucykgKTtcblxuICAgIHJldHVybiBncmFwaDtcbiAgfVxuXG4gIHN0YXRpYyBjb25zdHJ1Y3ROZXN0ZWQocmVGb3JtLCBvcHRpb25zPXt9KSB7XG4gICAgLyogQ29uc3RydWN0cyBhIChyZWFsKSBuZXN0ZWQgZm9ybSBzdHJ1Y3R1cmUgZnJvbSB0aGUgLm5lc3RlZCBhcnJheSBvZiB0aGUgb3JpZ2luYWwgcmUtZW50cnkganNvbiAqL1xuXG4gICAgLy8gPj4+IHNob3VsZCBiZSByZXdyaXR0ZW4gY29tcGxldGVseSB0byBnZXQgcmlkIG9mIGFsbCB0aGUgbXV0YXRpb24hXG4gICAgXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IobGV0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICBjb25zdCBuZXN0ZWRGb3JtID0gc3BhY2VbMF07IC8vIHNwYWNlW3NwYWNlLmxlbmd0aC0xXSA8LSBvcmRlciBsYXN0XG4gICAgICAgIFxuICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgc3BhY2UgPSBuZXN0ZWRGb3JtLnNwYWNlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBzcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgIGVsc2Ugc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWRkRW1wdHlSZUNoaWxkU3BhY2UgJiYgKHNwYWNlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICB9XG4gICAgfSAgICBcblxuICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAvLyBmaXJzdCwgbGV0cyBhc3N1bWUgdGhpcyBpcyB0aGUgZm9ybSBpdHNlbGZcbiAgICBsZXQgbGFzdE5lc3RlZCA9IHJlRm9ybTtcbiAgICBcbiAgICBpZihyZUZvcm0uc3BhY2UubGVuZ3RoID4gMCkge1xuICAgICAgLy8gdGhlbiBsb29wIHVudGlsIHRoZSBsYXN0IHJlQ2hpbGQgaXMgZm91bmQgYW5kIG1ha2UgdGhpcyBvdXIgbGFzdCBuZXN0ZWQgZm9ybVxuICAgICAgXG4gICAgICB3aGlsZSAobGFzdE5lc3RlZC5zcGFjZVswXS5oYXNPd25Qcm9wZXJ0eSgncmVDaGlsZCcpKSB7ICAgICAgICBcbiAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZm9yIG9wZW4gcmUtZW50cmllcywgd2UgbmVlZCB0byBhZGQgYW5vdGhlciBuZXN0aW5nIChzZWUgdUZPUk0gaUZPUk0gZm9yIHJlZmVyZW5jZSlcbiAgICBpZihyZUZvcm0ubGFzdE9wZW4pIHtcbiAgICAgIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApO1xuICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgbGFzdE5lc3RlZC5zcGFjZVswXS5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG4gICAgfVxuICAgIGVsc2UgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ3JlRW50cnlQb2ludCd9ICk7XG5cbiAgICAvLyBsYXN0LCBkZWxldGUgdGhlIG5lc3RlZCBzdHJ1Y3R1cmUsIHdlIGRvbid0IG5lZWQgaXQgYW55bW9yZVxuICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgIHJldHVybiByZUZvcm07XG4gIH1cblxuXG4gIHN0YXRpYyBleHBhbmRfcmVFbnRyeShfZm9ybSwgb3B0aW9ucz17fSkge1xuICAgIC8vID4+PiBzaG91bGQgYmUgcmV3cml0dGVuIGNvbXBsZXRlbHkgdG8gZ2V0IHJpZCBvZiBhbGwgdGhlIG11dGF0aW9uIVxuICAgIGNvbnN0IHJlZkZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG4gICAgY29uc3QgdGFyZ2V0Rm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVmRm9ybSkpOyAvLyBjb3B5IGpzb24gb2JqZWN0IHdpdGhvdXQgaWRlbnRpZnlpbmcgaXRcblxuICAgIC8vIHdlIG11c3Qga2VlcCBhIHJ1bm5pbmcgaW5kZXggdG8gbm90IGNvbmZ1c2UgaWRlbnRpY2FsIGZvcm1zIHdoaWxlIHJlY29uc3RydWN0aW5nIHRoZSByZUVudHJpZXNcbiAgICAvLyBOb3RlOiB0aGlzIHNob3VsZCBiZSBkb25lIG1vcmUgZWZmaWNpZW50bHkgaW4gdGhlIGZ1dHVyZVxuICAgIGxldCBydW5uaW5nSW5kZXggPSAwO1xuICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBicmFuY2gucnVubmluZ0luZGV4ID0gcnVubmluZ0luZGV4LCBydW5uaW5nSW5kZXgrKzsgfSk7XG4gICAgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuXG4gICAgdGhpcy50cmF2ZXJzZUZvcm0ocmVmRm9ybSwgZnVuY3Rpb24ocmVmQnJhbmNoKSB7XG5cbiAgICAgIGlmKHJlZkJyYW5jaC50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24odGFyZ2V0QnJhbmNoKSB7XG5cbiAgICAgICAgICBpZiggKEpTT04uc3RyaW5naWZ5KHJlZkJyYW5jaCkgPT09IEpTT04uc3RyaW5naWZ5KHRhcmdldEJyYW5jaCkpICYmIFxuICAgICAgICAgICAgICAocmVmQnJhbmNoLnJ1bm5pbmdJbmRleCA9PT0gKHRhcmdldEJyYW5jaC5oYXNPd25Qcm9wZXJ0eSgncnVubmluZ0luZGV4JykgPyB0YXJnZXRCcmFuY2gucnVubmluZ0luZGV4IDogbnVsbCkpICkge1xuICAgICAgICAgICAgdGFyZ2V0QnJhbmNoID0gdGhpcy5jb25zdHJ1Y3ROZXN0ZWQodGFyZ2V0QnJhbmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBkZWxldGUgcnVubmluZyBpbmRleCBwcm9wZXJ0eVxuICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBkZWxldGUgYnJhbmNoLnJ1bm5pbmdJbmRleDsgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0Rm9ybTtcbiAgfVxuXG5cbn0iLCJpbXBvcnQgY2FsYyBmcm9tICcuL2NvcmUvZmNhbGMnO1xuaW1wb3J0IGZvcm0gZnJvbSAnLi9jb3JlL2Zmb3JtJztcbmltcG9ydCBncmFwaCBmcm9tICcuL2NvcmUvZmdyYXBoJztcbmltcG9ydCBkbmEgZnJvbSAnLi9jb3JlL2ZkbmEnO1xuXG4vLyBleHBvcnQge2RlZmF1bHQgYXMgY2FsY30gZnJvbSAnLi9jb3JlL2ZjYWxjJztcbi8vIGV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtfSBmcm9tICcuL2NvcmUvZmZvcm0nO1xuLy8gZXhwb3J0IHtkZWZhdWx0IGFzIGdyYXBofSBmcm9tICcuL2NvcmUvZmdyYXBoJztcblxuZXhwb3J0IGRlZmF1bHQgeyBjYWxjLCBmb3JtLCBncmFwaCwgZG5hIH07IiwiLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGdsb2JhbCBzdHlsZXNcblxuY29uc3QgZ2xvYmFsID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICAvLyBmb250OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxNHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICB9XG59O1xuZ2xvYmFsLmJhc2ljID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG59O1xuY29uc3QgW2Jhc2ljXSA9IFtnbG9iYWwuYmFzaWNdO1xuXG5leHBvcnQgY29uc3Qgdm1hcCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDoge2Jhc2U6IGAnSUJNIFBsZXggTW9ubycsICdTRk1vbm8tUmVndWxhcicsICdBbmRhbGUgTW9ubycsIEFuZGFsZU1vbm8sICdMdWNpZGEgQ29uc29sZScsICdMdWNpZGEgU2FucyBUeXBld3JpdGVyJywgQ29uc29sYXMsIG1vbm9zcGFjZWB9LFxuICAgICAgICB0ZXh0U2l6ZToge2Jhc2U6IDEyLCBzbTogMTB9LFxuICAgIH1cbn07XG5cbnZtYXAuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4udm1hcC5jb21tb24sXG59O1xudm1hcC5iYXNpYy5hcHBseVN0eWxlcyA9IGZ1bmN0aW9uKCnCoHtcblxufSIsImltcG9ydCB7IHRydW5jYXRlU3RyLCBwcm9jZXNzTGFiZWwsIGdldFN2Z1NpemUsIGJyZWFrU3RyLCBzdmdMaW5lYnJlYWsgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZG5hLXN2Zy1zdHlsZXMuanMnO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAgICAgICAgICAgICAgICAgICAgICBmb3JtRE5BIG1hcmt1cFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1ETkFfaHRtbCAoZm9ybXVsYSwgZG5hLCB2YXJzKcKge1xuXHQvKiBDb25zdHJ1Y3RzIGFuIEhUTUwgd3JhcHBlciBmb3IgZm9ybUROQSAqL1xuXG5cdC8vIGNvbnN0cnVjdCBIVE1MIG1hcmt1cCBmb3IgdGhlIGZvcm1ETkFcblx0Y29uc3QgZm9ybVN0ciA9IGZvcm11bGEgIT09IHVuZGVmaW5lZCA/IGA8c3BhbiBjbGFzcz1cImRuYS1mb3JtXCIgdGl0bGU9XCJGT1JNXCI+JHtmb3JtdWxhfTwvc3Bhbj5gIDogJyc7XG5cblx0Y29uc3QgdmFyb3JkZXJTdHIgPSB2YXJzICYmIGRuYS5sZW5ndGggPiAxID8gJy48c3BhbiBjbGFzcz1cImRuYS12YXJvcmRlclwiIHRpdGxlPVwiVmFyaWFibGUgaW50ZXJwcmV0YXRpb24gb3JkZXJcIj5bJyt2YXJzLmpvaW4oJywnKSsnXTwvc3Bhbj4nIDogJyc7XG5cblx0cmV0dXJuIGA8ZGl2IGlkPVwiZG5hXCI+PGNvZGU+JHtmb3JtU3RyICsgdmFyb3JkZXJTdHJ9Ojo8c3BhbiBjbGFzcz1cImRuYS1jb2RlXCI+JHttYXJrdXBRdWFydEN5Y2xlcyhkbmEpfTwvc3Bhbj48L2NvZGU+PC9kaXY+YDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgdm1hcCBtYXJrdXBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBmdW5jdGlvbiB2bWFwX3N2ZyAodm1hcFRyZWUsIGlucHV0LCB2YXJvcmRlciwgb3B0aW9ucykge1xuXHQvKiBHZW5lcmF0ZXMgU1ZHIG91dHB1dCBmb3IgYSBnaXZlbiB2bWFwIHRyZWUgKi9cblxuXHQvLyBvcHRpb24gZGVmYXVsdHNcblx0Y29uc3Qge3ZtYXBQYWQsIHN0cm9rZUMsIHZtYXBDLCBmaWdQYWQsIGZpZ0MsIGhpZGVJbnB1dExhYmVsLCBoaWRlT3JkZXJMYWJlbCwgY3VzdG9tTGFiZWwsIGZ1bGxJbnB1dExhYmVsLCBpbnB1dExhYmVsTWF4LCBzdHlsZUNsYXNzfSA9IHtcblx0XHR2bWFwUGFkOiAwLCBzdHJva2VDOiBgI2ZmZmAsIHZtYXBDOiBgbm9uZWAsIGZpZ1BhZDogMCwgZmlnQzogYCNmZmZgLFxuXHRcdGhpZGVJbnB1dExhYmVsOiBmYWxzZSwgaGlkZU9yZGVyTGFiZWw6IGZhbHNlLCBmdWxsSW5wdXRMYWJlbDogZmFsc2UsIGlucHV0TGFiZWxNYXg6IDIwMCwgXG5cdFx0Y3VzdG9tTGFiZWw6IHVuZGVmaW5lZCwgc3R5bGVDbGFzczogJ2Jhc2ljJyxcblx0XHQuLi5vcHRpb25zfTtcblxuXHRjb25zdCBkZXNpZ24gPSBzdHlsZXMudm1hcFtzdHlsZUNsYXNzXTtcblx0Y29uc3QgW3RleHRTaXplLCBmb250XSA9IFtkZXNpZ24udGV4dFNpemUsIGRlc2lnbi5mb250LmJhc2VdO1xuXG5cdGNvbnN0IHt2bnVtLCBtYXJnaW5zfSA9IHZtYXBUcmVlLmRhdGE7XG5cdGNvbnN0IHNjYWxlID0gdm1hcFRyZWUuc2NhbGU7XG5cdGNvbnN0IHN0cm9rZVcgPSBtYXJnaW5zWzBdO1xuXHQvLyBjb25zdCBsZW4gPSBNYXRoLnNxcnQoNCoqdm51bSk7IC8vIGxlbmd0aCBvZiBkbmEgd2l0aG91dCAnOjonXG5cdGNvbnN0IGJvdW5kcyA9IHt3OiBzY2FsZVswXSArIHN0cm9rZVcsIGg6IHNjYWxlWzFdICsgc3Ryb2tlV307XG5cdGNvbnN0IHJob21iID0ge3c6IE1hdGguc3FydCgyICogKGJvdW5kcy53KioyKSksIGg6IE1hdGguc3FydCgyICogKGJvdW5kcy5oKioyKSl9O1xuXG5cdGNvbnN0IGNoYXJ0ID0ge3RyZWU6IHZtYXBUcmVlLCBpbnB1dDogaW5wdXQsIHZhcm9yZGVyOiB2YXJvcmRlciwgb3B0aW9uczogb3B0aW9uc307XG5cblx0Ly8gaWYgKG91dHB1dCA9PSAnbWl4ZWQnKSB7XG5cdFx0Ly8gc3ZnIHdpdGggaHRtbCB3cmFwcGVyXG5cblx0XHQvLyBjb25zdCBjYXB0aW9uID0gKCkgPT4ge1xuXHRcdC8vIFx0aWYgKGN1c3RvbUxhYmVsICE9PSB1bmRlZmluZWQpIHJldHVybiBgPGZpZ2NhcHRpb24gc3R5bGU9XCJ3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XCI+JHtjdXN0b21MYWJlbH08L2ZpZ2NhcHRpb24+YDtcblx0XHQvLyBcdGlmICghKGhpZGVJbnB1dExhYmVsICYmIGhpZGVPcmRlckxhYmVsKSkge1xuXHRcdC8vIFx0XHRsZXQgbGFiZWwgPSAnJztcblx0XHQvLyBcdFx0aWYgKCFoaWRlT3JkZXJMYWJlbCkgbGFiZWwgKz0gYCR7dmFyb3JkZXIucmVkdWNlKChhY2MsY3VycixpKSA9PiBhY2MgKyAoaSA+IDAgPyAnID4gJyA6ICcnKSArIHByb2Nlc3NMYWJlbChjdXJyKSwnJyApfSR7aGlkZUlucHV0TGFiZWwgfHwgdm51bSA8IDEgPyAnJyA6ICc8YnIvPid9YDtcblx0XHQvLyBcdFx0aWYgKCFoaWRlSW5wdXRMYWJlbCkge1xuXHRcdC8vIFx0XHRcdGNvbnN0IGlzRm9ybUROQSA9IGlucHV0LmluY2x1ZGVzKCc6OicpO1xuXHRcdC8vIFx0XHRcdGlmIChpc0Zvcm1ETkEpIGxhYmVsICs9IGA8Y29kZSBzdHlsZT1cImZvbnQtc2l6ZTowLjhlbTtcIj4ke2Z1bGxJbnB1dExhYmVsID8gaW5wdXQgOiB0cnVuY2F0ZVN0cihpbnB1dCwoaW5wdXQuc3BsaXQoJzo6JylbMF0ubGVuZ3RoICsgNCoqNCksYOKApigkezQqKnZudW19KWApfTwvY29kZT5gO1xuXHRcdC8vIFx0XHRcdGVsc2UgbGFiZWwgKz0gJ8aSID0gJysoZnVsbElucHV0TGFiZWwgPyBpbnB1dCA6IHRydW5jYXRlU3RyKGlucHV0LGlucHV0TGFiZWxNYXgsYOKApiA8aT4rbW9yZTwvaT5gKSk7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdFx0cmV0dXJuIGA8ZmlnY2FwdGlvbiBzdHlsZT1cIndvcmQtd3JhcDogYnJlYWstd29yZDtcIj4ke2xhYmVsfTwvZmlnY2FwdGlvbj5gO1xuXHRcdC8vIFx0fVxuXHRcdC8vIFx0cmV0dXJuICcnO1xuXHRcdC8vIH1cblxuXHRcdC8vIGNoYXJ0LmVsZW0gPSBgPGZpZ3VyZSBjbGFzcz1cInZtYXAtZmlndXJlXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG5cdFx0Ly8gXHQ8c3ZnIGNsYXNzPVwidm1hcFwiIHN0eWxlPVwiYmFja2dyb3VuZDogJHtiZ0N9OyBwYWRkaW5nOiAke3ZtYXBQYWR9O1wiIHdpZHRoPSR7c2NhbGVbMF19IGhlaWdodD0ke3NjYWxlWzFdfVxuXHRcdC8vIFx0ZmlsbD1cIndoaXRlXCIgc3Ryb2tlPVwiJHtzdHJva2VDfVwiIHN0cm9rZS13aWR0aD1cIiR7c3Ryb2tlV31cIlxuXHRcdC8vIFx0dmlld0JveD1cIi0ke3N0cm9rZVcvMn0gLSR7c3Ryb2tlVy8yfSAke3Job21iLnd9ICR7cmhvbWIuaH1cIj5cblx0XHQvLyBcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgkezB9LCR7cmhvbWIuaC8yfSkgcm90YXRlKC00NSwwLDApXCI+JHsgY29uc3RydWN0U1ZHKHZtYXBUcmVlKSB9PC9nPlxuXHRcdC8vIFx0PC9zdmc+XG5cdFx0Ly8gXHQkeyBjYXB0aW9uKCkgfVxuXHRcdC8vIFx0PC9maWd1cmU+YDtcblxuXHQvLyB9IGVsc2Uge1xuXHRcdC8vIHB1cmUgc3ZnIG91dHB1dFxuXG5cdFx0Y29uc3QgY2FwdGlvbiA9IChpbnB1dCwgY3VzdG9tTGFiZWwpID0+IHtcblx0XHRcdGlmIChjdXN0b21MYWJlbCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gY3VzdG9tTGFiZWw7XG5cblx0XHRcdGxldCBsYWJlbCA9ICcnO1xuXHRcdFx0aWYgKCFoaWRlT3JkZXJMYWJlbCkge1xuXHRcdFx0XHRjb25zdCBwb3MgPSBgeT1cIjBcImA7XG5cblx0XHRcdFx0bGFiZWwgKz0gb3JkZXJMYWJlbCh2YXJvcmRlciwgcG9zLCB7Zm9udDogZm9udCwgdGV4dFNpemU6IHRleHRTaXplLmJhc2V9KTtcblx0XHRcdH1cblx0XHRcdGlmICghaGlkZUlucHV0TGFiZWwpIHtcblx0XHRcdFx0Y29uc3QgaXNGb3JtRE5BID0gaW5wdXQuaW5jbHVkZXMoJzo6Jyk7XG5cblx0XHRcdFx0Y29uc3QgcHJlZml4ID0gaXNGb3JtRE5BID8gJycgOiBgxpIgPSBgO1xuXHRcdFx0XHRjb25zdCB0cnVuY01heCA9IGlzRm9ybUROQSA/IChpbnB1dC5zcGxpdCgnOjonKVswXS5sZW5ndGggKyA0Kio0KSA6IGlucHV0TGFiZWxNYXg7XG5cdFx0XHRcdGNvbnN0IHRydW5jU3VmZml4ID0gaXNGb3JtRE5BID8gYOKApigkezQqKnZudW19KWAgOiBg4oCmIDx0c3BhbiBzdHlsZT1cImZvbnQtc3R5bGU6IGl0YWxpY1wiPittb3JlPC90c3Bhbj5gO1xuXG5cdFx0XHRcdGNvbnN0IHBvcyA9IGB5PVwiMFwiIGR5PVwiJHt0ZXh0U2l6ZS5iYXNlICsgdGV4dFNpemUuc20gLSAyfXB4XCJgO1xuXG5cdFx0XHRcdGxhYmVsICs9IGlucHV0TGFiZWwoaW5wdXQsIHBvcywge3ByZWZpeDogcHJlZml4LCB0cnVuY2F0ZWQ6ICFmdWxsSW5wdXRMYWJlbCwgdHJ1bmNNYXg6IHRydW5jTWF4LCB0cnVuY1N1ZmZpeDogdHJ1bmNTdWZmaXgsIGZvbnQ6IGZvbnQsIHRleHRTaXplOiB0ZXh0U2l6ZS5zbX0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGxhYmVsO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZtYXAgPSB7dzogKHNjYWxlWzBdICsgdm1hcFBhZCksIGg6IChzY2FsZVsxXSArIHZtYXBQYWQpfTtcblxuXHRcdHZtYXAuZWxlbSA9IGA8c3ZnIGNsYXNzPVwidm1hcFwiIHdpZHRoPSR7dm1hcC53fSBoZWlnaHQ9JHt2bWFwLmh9IHZpZXdCb3g9XCItJHtzdHJva2VXLzIgKyB2bWFwUGFkLzJ9IC0ke3N0cm9rZVcvMiArIHZtYXBQYWQvMn0gJHtyaG9tYi53ICsgdm1hcFBhZH0gJHtyaG9tYi5oICsgdm1hcFBhZH1cIj5cblx0XHRcdDxyZWN0IHg9XCItJHt2bWFwUGFkLzJ9XCIgeT1cIi0ke3ZtYXBQYWQvMn1cIiB3aWR0aD1cIiR7cmhvbWIudyArIHZtYXBQYWR9XCIgaGVpZ2h0PVwiJHtyaG9tYi5oICsgdm1hcFBhZH1cIiBmaWxsPVwiJHt2bWFwQ31cIj48L3JlY3Q+XG5cdFx0XHQ8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCwke3Job21iLmgvMn0pIHJvdGF0ZSgtNDUsMCwwKVwiIHN0cm9rZT1cIiR7c3Ryb2tlQ31cIiBzdHJva2Utd2lkdGg9XCIke3N0cm9rZVd9XCI+JHsgY29uc3RydWN0U1ZHKHZtYXBUcmVlKSB9PC9nPlxuXHRcdDwvc3ZnPmA7XG5cblx0XHRjb25zdCBmaWdDYXB0aW9uID0ge2VsZW06IGNhcHRpb24oaW5wdXQsIGN1c3RvbUxhYmVsKSwgcG9zOiB7eDogMCwgeTogKHZtYXAuaCArIDEwKX19O1xuXHRcdGZpZ0NhcHRpb24uc2l6ZSA9IGdldFN2Z1NpemUoZmlnQ2FwdGlvbi5lbGVtKTtcblxuXHRcdGNvbnN0IGFwcGVuZFNpemUgPSBbTWF0aC5tYXgoMCwgKGZpZ0NhcHRpb24uc2l6ZS53IC0gdm1hcC53KSksXG5cdFx0XHRcdFx0XHRcdGZpZ0NhcHRpb24uc2l6ZS5oICsgKGZpZ0NhcHRpb24ucG9zLnkgLSB2bWFwLmgpXTtcblxuXHRcdGNoYXJ0LnNpemUgPSB7dzogKHZtYXAudyArIGFwcGVuZFNpemVbMF0gKyBmaWdQYWQpLCBoOiAodm1hcC5oICsgYXBwZW5kU2l6ZVsxXSArIGZpZ1BhZCl9O1xuXG5cdFx0Y2hhcnQuZWxlbSA9IGA8c3ZnIGNsYXNzPVwidm1hcC1maWd1cmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke2NoYXJ0LnNpemUud31cIiBoZWlnaHQ9XCIke2NoYXJ0LnNpemUuaH1cIiB2aWV3Qm94PVwiLSR7ZmlnUGFkLzJ9IC0ke2ZpZ1BhZC8yfSAke2NoYXJ0LnNpemUud30gJHtjaGFydC5zaXplLmh9XCI+XG5cdFx0XHQ8cmVjdCB4PVwiLSR7ZmlnUGFkLzJ9XCIgeT1cIi0ke2ZpZ1BhZC8yfVwiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgZmlsbD1cIiR7ZmlnQ31cIj48L3JlY3Q+XG5cdFx0XHQ8Zz4keyB2bWFwLmVsZW0gfTwvZz5cblx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2ZpZ0NhcHRpb24ucG9zLnh9LCR7ZmlnQ2FwdGlvbi5wb3MueX0pXCI+JHsgZmlnQ2FwdGlvbi5lbGVtIH08L2c+XG5cdFx0PC9zdmc+YDtcblx0Ly8gfVxuXG5cdHJldHVybiBjaGFydDtcbn1cblxuZnVuY3Rpb24gb3JkZXJMYWJlbCAodmFyb3JkZXIsIHBvcz0neD1cIjBcIiB5PVwiMFwiJywgb3B0aW9ucz11bmRlZmluZWQpIHtcblx0LyogR2VuZXJhdGVzIGFuIG9yZGVyIGxhYmVsIChlLmcuIFwiYSA+IGIgPiBjXCIpIGZyb20gdmFyaWFibGUgb3JkZXIgKi9cblx0Y29uc3Qge21heExpbmVXaWR0aCwgZm9udCwgdGV4dFNpemUsIGxlYWRpbmd9ID0gXG5cdFx0eyBtYXhMaW5lV2lkdGg6IDYwLCBmb250OiAnaW5oZXJpdCcsIHRleHRTaXplOiAxMiwgbGVhZGluZzogNCwgLi4ub3B0aW9ucyB9O1xuXHRjb25zdCBzdHlsZSA9IGBmb250LWZhbWlseTogJHtmb250fTsgZm9udC1zaXplOiAke3RleHRTaXplfXB4OyBkb21pbmFudC1iYXNlbGluZTogaGFuZ2luZztgO1xuXG5cdGxldCBvdXRwdXQgPSB2YXJvcmRlci5yZWR1Y2UoKGFjYyxjdXJyLGkpID0+IGFjYyArIChpID4gMCA/ICc8dHNwYW4geT1cIjBcIj4gPiA8L3RzcGFuPicgOiAnJykgKyBwcm9jZXNzTGFiZWwoY3VyciwgJ3N2ZycpLCcnICk7XG5cblx0Ly8gb3V0cHV0ID0gYnJlYWtTdHIob3V0cHV0LCBtYXhMaW5lV2lkdGgpIC8vIDwtLSBmaXggdGFnIGJyZWFrc1xuXHQvLyBcdC5yZWR1Y2UoKHN0cixjdXJyLGkpID0+IHN0ciArIChpID4gMCA/IHN2Z0xpbmVicmVhayhjdXJyLCAodGV4dFNpemUgKyBsZWFkaW5nICsgJ3B4JykpIDogY3VyciksICcnKTtcblxuXHRyZXR1cm4gYDx0ZXh0ICR7cG9zfSBzdHlsZT1cIiR7c3R5bGV9XCI+JHtvdXRwdXR9PC90ZXh0PmA7XG59XG5cbmZ1bmN0aW9uIGlucHV0TGFiZWwgKGlucHV0LCBwb3M9J3g9XCIwXCIgeT1cIjBcIicsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG5cdC8qIEdlbmVyYXRlcyBhbiBpbnB1dCBsYWJlbCAoZS5nLiBcIsaSID0gKChhKWIpXCIgb3IgXCI6OjMyMTBcIikgKi9cblx0Y29uc3Qge3ByZWZpeCwgbWF4TGluZVdpZHRoLCB0cnVuY2F0ZWQsIHRydW5jTWF4LCB0cnVuY1N1ZmZpeCwgZm9udCwgdGV4dFNpemUsIGxlYWRpbmd9ID0gXG5cdFx0e3ByZWZpeDogJycsIG1heExpbmVXaWR0aDogNjAsIHRydW5jYXRlZDogZmFsc2UsIHRydW5jTWF4OiAxMDAwLCB0cnVuY1N1ZmZpeDogJ+KApicsIGZvbnQ6ICdpbmhlcml0JywgdGV4dFNpemU6IDEyLCBsZWFkaW5nOiA0LCAuLi5vcHRpb25zIH07XG5cdGNvbnN0IHN0eWxlID0gYGZvbnQtZmFtaWx5OiAke2ZvbnR9OyBmb250LXNpemU6ICR7dGV4dFNpemV9cHg7IGRvbWluYW50LWJhc2VsaW5lOiBoYW5naW5nO2A7XG5cblx0bGV0IG91dHB1dCA9IHByZWZpeCArIGlucHV0O1xuXHRsZXQgYXBwZW5kaXggPSAnJztcblxuXHRpZiAodHJ1bmNhdGVkICYmIChvdXRwdXQubGVuZ3RoID4gdHJ1bmNNYXgpKSB7XG5cdFx0b3V0cHV0ID0gb3V0cHV0LnN1YnN0cigwLHRydW5jTWF4KTtcblx0XHRhcHBlbmRpeCArPSB0cnVuY1N1ZmZpeDtcblx0fVxuXHRvdXRwdXQgPSBicmVha1N0cihvdXRwdXQsIG1heExpbmVXaWR0aClcblx0XHQucmVkdWNlKChzdHIsY3VycixpKSA9PiBzdHIgKyAoaSA+IDAgPyBzdmdMaW5lYnJlYWsoY3VyciwgKHRleHRTaXplICsgbGVhZGluZyArICdweCcpKSA6IGN1cnIpLCAnJyk7XG5cblx0cmV0dXJuIGA8dGV4dCAke3Bvc30gc3R5bGU9XCIke3N0eWxlfVwiPiR7b3V0cHV0ICsgYXBwZW5kaXh9PC90ZXh0PmA7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdFNWRyhzdWJUcmVlLCBtYXBTVkc9JycpIHtcblx0LyogUmVjdXJzaXZlIGZ1bmN0aW9uIHRvIGNvbnN0cnVjdCBzdmcgbWFya3VwIGZyb20gdm1hcCB0cmVlIHN0cnVjdHVyZSAqL1xuXG5cdGlmKHN1YlRyZWUgIT09IG51bGwgJiYgdHlwZW9mIHN1YlRyZWUgPT0gXCJvYmplY3RcIikge1xuXHRcdGlmKHN1YlRyZWUuY2hpbGRyZW4pIHtcblx0XHRcdG1hcFNWRyArPSBgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7c3ViVHJlZS5wb3NpdGlvblswXX0sICR7c3ViVHJlZS5wb3NpdGlvblsxXX0pXCI+YDtcblxuXHRcdFx0c3ViVHJlZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdFx0bWFwU1ZHICs9IGNvbnN0cnVjdFNWRyhjaGlsZCk7XG5cdFx0XHR9KTtcblx0XHRcdG1hcFNWRyArPSBgPC9nPmA7XG5cdFx0XHRyZXR1cm4gbWFwU1ZHO1xuXHRcdH1cblx0XHRlbHNlIHtcdFx0XHRcdFxuXHRcdFx0bWFwU1ZHICs9IGA8cmVjdCB4PVwiJHtzdWJUcmVlLnBvc2l0aW9uWzBdfVwiIHk9XCIke3N1YlRyZWUucG9zaXRpb25bMV19XCIgd2lkdGg9XCIke3N1YlRyZWUuc2NhbGVbMF19XCIgaGVpZ2h0PVwiJHtzdWJUcmVlLnNjYWxlWzFdfVwiIGZpbGw9XCIke3ZDb2xvcihzdWJUcmVlLnZhbHVlKX1cIj48L3JlY3Q+YDtcblx0XHRcdHJldHVybiBtYXBTVkc7XG5cdFx0fVxuXHR9XG5cdGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcignTm90IGEgc3VidHJlZSEnKTtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdm1hcFBlcnNwZWN0aXZlc19zdmcgKHZtYXBQZXJtdXRhdGlvbnMsIGlucHV0LCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuXHQvKiBDb25zdHJ1Y3RzIHZtYXAgcGVyc3BlY3RpdmVzIGFzIEhUTUwgb3V0cHV0IChmbGV4IGxpc3QpICovXG5cblx0Y29uc3Qge2ZpZ1BhZCwgZmlnQywgbWFyZ2luLCBjdXN0b21MYWJlbCwgc3R5bGVDbGFzc30gPSBcblx0XHR7IGZpZ1BhZDogMCwgZmlnQzogYCNmZmZgLFxuXHRcdCAgbWFyZ2luOiAyMCwgY3VzdG9tTGFiZWw6IHVuZGVmaW5lZCwgc3R5bGVDbGFzczogJ2Jhc2ljJywgLi4uZ2xvYmFsT3B0aW9ucyB9O1xuXG5cdGNvbnN0IGRlc2lnbiA9IHN0eWxlcy52bWFwW3N0eWxlQ2xhc3NdO1xuXHRjb25zdCBbdGV4dFNpemUsIGZvbnRdID0gW2Rlc2lnbi50ZXh0U2l6ZSwgZGVzaWduLmZvbnQuYmFzZV07XG5cblx0Y29uc3QgY2hhcnQgPSB7dm1hcHM6IHZtYXBQZXJtdXRhdGlvbnMsIGlucHV0OiBpbnB1dCwgb3B0aW9uczogZ2xvYmFsT3B0aW9uc307XG5cblx0Ly8gaWYgKG91dHB1dCA9PSAnbWl4ZWQnKSB7XG5cdFx0Ly8gY29uc3Qgdm1hcEl0ZW1zID0gdm1hcFBlcm11dGF0aW9ucy5tYXAodm1hcCA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJ2bWFwLWl0ZW1cIiBzdHlsZT1cInBhZGRpbmc6ICR7TWF0aC5mbG9vcihtYXJnaW4vNCl9cHggJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPiBcblx0XHQvLyBcdFx0XHQke3ZtYXAuZWxlbX08L2Rpdj5gfSkucmVkdWNlKChzdHIsaXRlbSkgPT4gc3RyK2l0ZW0sJycpO1xuXG5cdFx0Ly8gY29uc3QgbGFiZWwgPSBjYXB0aW9uKCk7XG5cblx0XHQvLyByZXR1cm4gYDxmaWd1cmUgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlc1wiIHN0eWxlPVwibWF4LXdpZHRoOiBub25lO1wiPlxuXHRcdC8vIFx0XHQ8ZGl2IGNsYXNzPVwidm1hcC1saXN0XCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IG1hcmdpbjogMCAtJHtNYXRoLmZsb29yKG1hcmdpbi8yKX1weFwiPlxuXHRcdC8vIFx0XHQkeyB2bWFwSXRlbXMgfVxuXHRcdC8vIFx0XHQ8L2Rpdj5cblx0XHQvLyBcdFx0PGZpZ2NhcHRpb24gc3R5bGU9XCJib3JkZXItdG9wOiAxcHggc29saWQ7IHBhZGRpbmctdG9wOiAke01hdGguZmxvb3IobWFyZ2luLzQpfXB4OyBtYXJnaW4tdG9wOiAke01hdGguZmxvb3IobWFyZ2luLzIpfXB4OyB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XCI+JHtsYWJlbH08L2ZpZ2NhcHRpb24+XG5cdFx0Ly8gXHRcdDwvZmlndXJlPmA7XG5cdC8vIH1cblx0Ly8gZWxzZSB7XG5cdFx0Y29uc3QgcGFkZGluZyA9IHt4OiAoTWF0aC5mbG9vcihtYXJnaW4vNCkpLCB5OiAoTWF0aC5mbG9vcihtYXJnaW4vMikpfTtcblx0XHRjb25zdCBjb3VudCA9IHZtYXBQZXJtdXRhdGlvbnMubGVuZ3RoO1xuXHRcdGNvbnN0IHZtYXBTaXplID0gdm1hcFBlcm11dGF0aW9uc1swXS5zaXplO1xuXG5cdFx0Y29uc3QgY29sTnVtID0gTWF0aC5taW4oY291bnQsIDYpO1xuXHRcdGNvbnN0IHJvd051bSA9IE1hdGguZmxvb3IoY291bnQvY29sTnVtKTtcblx0XHRjb25zdCB0YWJsZVNpemUgPSB7IHc6IHZtYXBTaXplLncgKiBjb2xOdW0gKyAocGFkZGluZy54KjIpICogKGNvbE51bS0xKSxcblx0XHRcdFx0XHRcdFx0aDogdm1hcFNpemUuaCAqIHJvd051bSArIChwYWRkaW5nLnkqMikgKiAocm93TnVtLTEpIH07XG5cblx0XHRjb25zdCB2bWFwSXRlbXMgPSB2bWFwUGVybXV0YXRpb25zLm1hcCh2bWFwID0+IHtcblx0XHRcdFxuXHRcdFx0cmV0dXJuIHtlbGVtOiB2bWFwLmVsZW19O1xuXHRcdH0pLnJlZHVjZSgoc3RyLGl0ZW0saSkgPT4ge1xuXHRcdFx0Y29uc3QgeCA9IGklY29sTnVtO1xuXHRcdFx0Y29uc3QgeSA9IE1hdGguZmxvb3IoaS9jb2xOdW0pO1xuXG5cdFx0XHRjb25zdCBjb29yZHMgPSBbdm1hcFNpemUudyAqIHggKyAocGFkZGluZy54KjIpICogeCxcblx0XHRcdFx0XHRcdCAgICB2bWFwU2l6ZS5oICogeSArIChwYWRkaW5nLnkqMikgKiB5XTtcblx0XHRcdHJldHVybiBzdHIrIGA8ZyBjbGFzcz1cInZtYXAtaXRlbVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2Nvb3Jkc1swXX0sJHtjb29yZHNbMV19KVwiPiR7aXRlbS5lbGVtfTwvZz5gO1xuXHRcdH0sJycpO1xuXHRcblx0XHRjb25zdCBjYXB0aW9uID0gKGlucHV0LCBjdXN0b21MYWJlbCkgPT4ge1xuXHRcdFx0aWYgKGN1c3RvbUxhYmVsICE9PSB1bmRlZmluZWQpIHJldHVybiBjdXN0b21MYWJlbDtcblxuXHRcdFx0Y29uc3QgaXNGb3JtRE5BID0gaW5wdXQuaW5jbHVkZXMoJzo6Jyk7XG5cdFx0XHRjb25zdCBwcmVmaXggPSBpc0Zvcm1ETkEgPyAnJyA6IGDGkiA9IGA7XG5cdFx0XHRjb25zdCBwb3MgPSBgeT1cIjBcImA7IC8vICBkeT1cIiR7dGV4dFNpemUuYmFzZSArIHRleHRTaXplLnNtIC0gMn1weFwiXG5cblx0XHRcdHJldHVybiBpbnB1dExhYmVsKGlucHV0LCBwb3MsIHtwcmVmaXg6IHByZWZpeCwgdHJ1bmNhdGVkOiBmYWxzZSwgZm9udDogZm9udCwgdGV4dFNpemU6IHRleHRTaXplLmJhc2V9KTtcblx0XHR9XG5cblx0XHRjb25zdCBmaWdDYXB0aW9uID0ge2VsZW06IGNhcHRpb24oaW5wdXQsIGN1c3RvbUxhYmVsKSwgcG9zOiB7eDogMCwgeTogdGFibGVTaXplLmggKyBwYWRkaW5nLnl9LCBsaW5lU3BhY2luZzogcGFkZGluZy55fTtcblx0XHRmaWdDYXB0aW9uLnNpemUgPSBnZXRTdmdTaXplKGZpZ0NhcHRpb24uZWxlbSk7XG5cblx0XHRjb25zdCBhcHBlbmRTaXplID0gW01hdGgubWF4KDAsIChmaWdDYXB0aW9uLnNpemUudyAtIHRhYmxlU2l6ZS53KSksXG5cdFx0XHRcdFx0XHRcdGZpZ0NhcHRpb24uc2l6ZS5oICsgKGZpZ0NhcHRpb24ucG9zLnkgLSB0YWJsZVNpemUuaCkgKyBmaWdDYXB0aW9uLmxpbmVTcGFjaW5nXTtcblxuXHRcdC8vIGNvbnN0IGxpc3RNYXJnaW4gPSB7eDogMCwgeTogTWF0aC5mbG9vcihtYXJnaW4vMil9O1xuXG5cdFx0Y2hhcnQuc2l6ZSA9IHt3OiAodGFibGVTaXplLncgKyBhcHBlbmRTaXplWzBdICsgZmlnUGFkKSwgXG5cdFx0XHRcdFx0ICBoOiAodGFibGVTaXplLmggKyBhcHBlbmRTaXplWzFdICsgZmlnUGFkKX07XG5cblx0XHRjaGFydC5lbGVtID0gYDxzdmcgY2xhc3M9XCJ2bWFwLXBlcnNwZWN0aXZlcy1maWd1cmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIke2NoYXJ0LnNpemUud31cIiBoZWlnaHQ9XCIke2NoYXJ0LnNpemUuaH1cIiB2aWV3Qm94PVwiLSR7ZmlnUGFkLzJ9IC0ke2ZpZ1BhZC8yfSAke2NoYXJ0LnNpemUud30gJHtjaGFydC5zaXplLmh9XCI+XG5cdFx0XHQ8cmVjdCB4PVwiLSR7ZmlnUGFkLzJ9XCIgeT1cIi0ke2ZpZ1BhZC8yfVwiIHdpZHRoPVwiJHtjaGFydC5zaXplLnd9XCIgaGVpZ2h0PVwiJHtjaGFydC5zaXplLmh9XCIgZmlsbD1cIiR7ZmlnQ31cIj48L3JlY3Q+XG5cdFx0XHQ8ZyBjbGFzcz1cInZtYXAtcGVyc3BlY3RpdmVzIHZtYXAtdGFibGVcIj4keyB2bWFwSXRlbXMgfTwvZz5cblx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke2ZpZ0NhcHRpb24ucG9zLnh9LCR7ZmlnQ2FwdGlvbi5wb3MueX0pXCI+XG5cdFx0XHRcdDxsaW5lIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiJHt0YWJsZVNpemUud31cIiB5Mj1cIjBcIiBzdHJva2U9XCJibGFja1wiIHN0cm9rZS13aWR0aD1cIjAuNVwiIC8+XG5cdFx0XHRcdDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLCR7ZmlnQ2FwdGlvbi5saW5lU3BhY2luZ30pXCI+JHsgZmlnQ2FwdGlvbi5lbGVtIH08L2c+XG5cdFx0XHQ8L2c+XG5cdFx0PC9zdmc+YDtcblxuXHRcdHJldHVybiBjaGFydDtcblx0Ly8gfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiB2bWFwTGlzdF9zdmcgKHZtYXBzX3N2ZywgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQpIHtcblx0LyogQ29uc3RydWN0cyBtdWx0aXBsZSB2bWFwcyBhcyBTVkcgb3V0cHV0ICovXG5cblx0Y29uc3Qge21hcmdpbiwgdkFsaWdufSA9IHsgbWFyZ2luOiAyMCwgdkFsaWduOiAnYm90dG9tJywgLi4uZ2xvYmFsT3B0aW9ucyB9XG5cblx0Ly8gY29uc3Qgdm1hcEl0ZW1zID0gdm1hcFBlcm11dGF0aW9uc19zdmcubWFwKHZtYXBfc3ZnID0+IHtcblx0XHRcdFxuXHQvLyBcdHJldHVybiB7c2l6ZTogdm1hcF9zdmcuc2l6ZSwgZWxlbTogdm1hcF9zdmcuZWxlbX07XG5cdC8vIH0pLnJlZHVjZSgoc3RyLGl0ZW0saSxhcnIpID0+IHtcblxuXHQvLyBcdC8vIGNvbnN0IHNoaWZ0WCA9IChpID4gMCkgPyAoIGFyclswXS5zaXplLncgKiBpICsgKHBhZGRpbmcueCoyKSAqIGkgKSA6IDA7XG5cdC8vIFx0cmV0dXJuIHN0cisgYDxnIGNsYXNzPVwidm1hcC1pdGVtXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7c2hpZnRYfSwwKVwiPiR7aXRlbS5lbGVtfTwvZz5gO1xuXHQvLyB9LCcnKTtcblxuXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJ2bWFwLWxpc3RcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgJHtnZXRWQWxpZ24odkFsaWduKX0gbWFyZ2luOiAwIC0ke01hdGguZmxvb3IobWFyZ2luLzIpfXB4XCI+XG5cdFx0XHQkeyB2bWFwc19zdmcucmVkdWNlKChzdHIsIHZtYXBfc3ZnKSA9PiBgJHtzdHJ9PGRpdiBjbGFzcz1cInZtYXAtaXRlbVwiIHN0eWxlPVwicGFkZGluZzogJHtNYXRoLmZsb29yKG1hcmdpbi80KX1weCAke01hdGguZmxvb3IobWFyZ2luLzIpfXB4XCI+JHt2bWFwX3N2Zy5lbGVtfTwvZGl2PmAsJycpIH1cblx0XHRcdDwvZGl2PmBcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBIZWxwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmNvbnN0IG1hcmt1cFF1YXJ0Q3ljbGVzID0gKHN0cikgPT4ge1xuXHQvKiBNYXJrcyB1cCBncm91cHMgb2YgNCBudW1iZXJzIGVhY2ggZm9yIGRuYSB0byBiZSBhYmxlIHRvIGFwcGx5IHJlYWRhYmxlIENTUyAqL1xuXHRyZXR1cm4gc3RyLnNwbGl0KCcnKS5yZWR1Y2UoKHN0cixjLGksYXJyKSA9PiB7XG5cblx0XHRyZXR1cm4gc3RyICsgKChpKzEpJTQgPT09IDEgPyAnPHNwYW4gY2xhc3M9XCJkbmEtcXVhcnQxXCI+JyA6ICcnKSArIGMgKyAoKGkrMSklNCA9PT0gMCA/ICc8L3NwYW4+JyA6ICcnKTtcblx0fSwnJyk7XG59XG5cbmNvbnN0IGdldFZBbGlnbiA9IHZBbGlnbiA9PiB7XG5cdC8vID4+PiBhcyBoZWxwZXJcblx0Y29uc3QgYWxpZ25JdGVtcyA9IHZBbGlnbiA9PT0gJ3RvcCcgICAgPyAnZmxleC1zdGFydCdcblx0XHRcdFx0IFx0IDogdkFsaWduID09PSAnY2VudGVyJyA/ICdjZW50ZXInXG5cdFx0XHRcdCBcdCA6IHZBbGlnbiA9PT0gJ2JvdHRvbScgPyAnZmxleC1lbmQnIDogJ2ZsZXgtZW5kJztcblx0cmV0dXJuIGBhbGlnbi1pdGVtczogJHthbGlnbkl0ZW1zfTtgO1xufVxuXG5jb25zdCB2Q29sb3IgPSB2YWwgPT4ge1xuXHQvKiBWYWx1ZSB0byBjb2xvciBtYXAgZm9yIHZtYXAgKi9cblx0cmV0dXJuIHZhbCA9PSAwID8gJyMwMDAwMDAnXG5cdFx0IDogdmFsID09IDEgPyAnIzQ3NTdmZidcblx0XHQgOiB2YWwgPT0gMiA/ICcjZmYwMDQ0J1xuXHRcdCA6IHZhbCA9PSAzID8gJyMwMGZmNWYnXG5cdFx0IDogTmFOO1xufTtcbiIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCB7IGdldFJlYWxEZXB0aCwgb3BhY2l0eSwgY2lyY2xlRGFzaEFycmF5IH0gZnJvbSAnLi4vLi4vY29tbW9uL2QzLWhlbHBlcic7XG5cbi8qIENhc2NhZGluZyBEMy1TdHlsZXMgLSBieSBQZXRlciBIb2ZtYW5uLCAxMi8yMDE4ICovXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnbG9iYWwgc3R5bGVzXG5cbmNvbnN0IGdsb2JhbCA9IHtcbiAgICBjb21tb246IHtcbiAgICAgICAgZm9udDoge2ZhbWlseTogJ3NhbnMtc2VyaWYnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRWYXI6IHtmYW1pbHk6ICdzYW5zLXNlcmlmJywgc2l6ZTogJzE0cHgnLCBzdHlsZTogJ2l0YWxpYyd9LFxuICAgICAgICBmb250Q29uc3Q6IHtmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnLCBzaXplOiAnMTRweCcsIHN0eWxlOiAnbm9ybWFsJ30sXG4gICAgICAgIGZvbnRDb250ZXh0OiB7ZmFtaWx5OiAnc2Fucy1zZXJpZicsIHNpemU6ICcxMHB4Jywgc3R5bGU6ICdub3JtYWwnfSxcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDEsXG4gICAgICAgIGxhYmVsczoge3JlRXZlbjogJzJ8cnwnLCByZU9kZDogJzJ8cnwrMSd9LFxuICAgICAgICBjb2xvcjoge2Jhc2U6IGQzLmNvbG9yKCdibGFjaycpLFxuICAgICAgICAgICAgICAgIGdyb3VuZDogZDMuY29sb3IoJ3doaXRlJyksXG4gICAgICAgICAgICAgICAgaW5kZWY6IGQzLmNvbG9yKCdyZWQnKSxcbiAgICAgICAgICAgICAgICBsaWdodDogZDMuY29sb3IoJyNkZGQnKSxcbiAgICAgICAgICAgIH1cbiAgICB9XG59O1xuZ2xvYmFsLmJhc2ljID0ge1xuICAgIC4uLmdsb2JhbC5jb21tb24sXG4gICAgZm9udDogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnQsXG4gICAgICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250VmFyOiB7IC4uLmdsb2JhbC5jb21tb24uZm9udFZhcixcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJywgc3R5bGU6ICdpdGFsaWMnXG4gICAgICAgIH0sXG4gICAgZm9udENvbnN0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnN0LFxuICAgICAgICBmYW1pbHk6ICdnZW9yZ2lhLCBzZXJpZidcbiAgICB9LFxuICAgIGZvbnRDb250ZXh0OiB7IC4uLmdsb2JhbC5jb21tb24uZm9udENvbnRleHQsXG4gICAgICAgICAgICBmYW1pbHk6ICdjb3VyaWVyLCBtb25vc3BhY2UnXG4gICAgICAgIH1cbn07XG5nbG9iYWwuZ2VzdGFsdCA9IHtcbiAgICAuLi5nbG9iYWwuY29tbW9uLFxuICAgIGZvbnQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250LFxuICAgICAgICAgICAgZmFtaWx5OiAnYXJpYWwsIHNhbnMtc2VyaWYnXG4gICAgICAgIH0sXG4gICAgZm9udFZhcjogeyAuLi5nbG9iYWwuY29tbW9uLmZvbnRWYXIsXG4gICAgICAgICAgICBmYW1pbHk6ICdhcmlhbCwgc2Fucy1zZXJpZidcbiAgICAgICAgfSxcbiAgICBmb250Q29uc3Q6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29uc3QsXG4gICAgICAgIGZhbWlseTogJ2FyaWFsLCBzYW5zLXNlcmlmJ1xuICAgIH0sXG4gICAgZm9udENvbnRleHQ6IHsgLi4uZ2xvYmFsLmNvbW1vbi5mb250Q29udGV4dCxcbiAgICAgICAgICAgIGZhbWlseTogJ2dlb3JnaWEsIHNlcmlmJ1xuICAgICAgICB9LFxuICAgIGNvbG9yOiB7Li4uZ2xvYmFsLmNvbW1vbi5jb2xvcixcbiAgICAgICAgICAgIHBvczogZDMuY29sb3IoJ3doaXRlJyksIFxuICAgICAgICAgICAgbmVnOiBkMy5jb2xvcignYmxhY2snKVxuICAgICAgICB9XG59O1xuY29uc3QgW2Jhc2ljLCBnZXN0YWx0XSA9IFtnbG9iYWwuYmFzaWMsIGdsb2JhbC5nZXN0YWx0XTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRGVmYXVsdHMoc3ZnKSB7XG4gICAgc3ZnLmF0dHIoJ3N0cm9rZScsJ25vbmUnKS5hdHRyKCdmaWxsJywnbm9uZScpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMudHJlZSBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCB0cmVlID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICBub2RlU2l6ZToge3c6IDEwLjAsIGg6IDEwLjB9LCAvLyBzaXplIG9mIG5vZGVzXG4gICAgICAgIG5vZGVTZXBhcmF0aW9uOiB7aHo6IDIwLCB2dDogNDB9LCAvLyBzZXBhcmF0aW9uIGJldHdlZW4gbm9kZXNcbiAgICAgICAgZGFzaGVzOiB7bGluazogJzRweCA2cHgnXG4gICAgICAgICAgICB9LFxuICAgIH1cbn07XG5cbnRyZWUuYmFzaWMgPSB7XG4gICAgLi4uYmFzaWMsXG4gICAgLi4udHJlZS5jb21tb24sXG59O1xudHJlZS5iYXNpYy5hcHBseUF4aXNTdHlsZXMgPSBmdW5jdGlvbihheGlzKSB7XG5cbiAgICBheGlzLnNlbGVjdEFsbCgnLnRpY2snKS5zZWxlY3QoJ2xpbmUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIHRoaXMubm9kZVNpemUudyoxLjUpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ3JnYmEoMCwwLDAsLjA1JylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpO1xuICAgIGF4aXMuc2VsZWN0QWxsKCcudGljaycpLnNlbGVjdCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29udGV4dC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb250ZXh0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29udGV4dC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuYXR0cigndGV4dC1hbmNob3InLCAnc3RhcnQnKTtcblxufVxudHJlZS5iYXNpYy5hcHBseU5vZGVTdHlsZXMgPSBmdW5jdGlvbihub2Rlcywgbm9kZVBhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICBmb3Jtcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuZ3JvdW5kLnRvU3RyaW5nKCkpO1xuXG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcblxuICAgIHJlRW50cmllcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmdyb3VuZC50b1N0cmluZygpKTtcbiAgICByZUNoaWxkcy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDMsIFsxXSkpO1xuICAgIHJlUG9pbnRzLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIG5vZGVzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udC5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnZG9taW5hbnQtYmFzZWxpbmUnLCdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICB2YXJzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250VmFyLnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udFZhci5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpO1xuICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnN0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnN0LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250Q29uc3QuZmFtaWx5KTtcblxuICAgIHNldHMuc2VsZWN0QWxsKCdjaXJjbGUuaW5uZXInKVxuICAgICAgICAvLyAuY2xhc3NlZCgnaW5uZXInKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuXG59O1xudHJlZS5iYXNpYy5hcHBseUxpbmtTdHlsZXMgPSBmdW5jdGlvbihsaW5rcywgbGlua1BhcnRpdGlvbnMpIHtcbiAgICBjb25zdCBbcmVDaGlsZExpbmssIHJlUG9pbnRMaW5rXSA9IGxpbmtQYXJ0aXRpb25zO1xuXG4gICAgbGlua3Muc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG5cbiAgICByZUNoaWxkTGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG5cbiAgICByZVBvaW50TGluay5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5kYXNoZXMubGluayk7XG59O1xuXG4vLyB0cmVlLmdlc3RhbHQgPSB7XG4vLyAgICAgLi4uZ2VzdGFsdCxcbi8vICAgICAuLi50cmVlLmNvbW1vbixcbi8vIH07XG4vLyB0cmVlLmdlc3RhbHQuYXBwbHlBeGlzU3R5bGVzID0gZnVuY3Rpb24oYXhpcykge1xuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlBeGlzU3R5bGVzKGF4aXMpO1xuLy8gfVxuLy8gdHJlZS5nZXN0YWx0LmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuLy8gICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucyk7XG4vLyB9O1xuLy8gdHJlZS5nZXN0YWx0LmFwcGx5TGlua1N0eWxlcyA9IGZ1bmN0aW9uKGxpbmtzLCBsaW5rUGFydGl0aW9ucykge1xuLy8gICAgIC8vIGNvbnN0IFtyZUNoaWxkTGlua10gPSBsaW5rUGFydGl0aW9ucztcblxuLy8gICAgIHRyZWUuYmFzaWMuYXBwbHlMaW5rU3R5bGVzKGxpbmtzLCBsaW5rUGFydGl0aW9ucyk7XG4vLyB9O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZDMucGFjayBzdHlsZXM6XG5cbmV4cG9ydCBjb25zdCBwYWNrID0ge1xuICAgIGNvbW1vbjoge1xuICAgICAgICByYWRpdXM6IDE0LFxuICAgICAgICBwYWRkaW5nOiAxNCxcbiAgICB9XG59O1xuXG5wYWNrLmJhc2ljID0ge1xuICAgIC4uLmJhc2ljLFxuICAgIC4uLnBhY2suY29tbW9uLFxufTtcbnBhY2suYmFzaWMuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zKSB7XG4gICAgY29uc3QgW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXSA9IG5vZGVQYXJ0aXRpb25zO1xuXG4gICAgZm9ybXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKVxuICAgICAgICAuZmlsdGVyKGQgPT4gZC5kYXRhLnVubWFya2VkKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJyk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnY2lyY2xlJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5maWx0ZXIoZCA9PiBkLmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDE0LCBbMi81LCAzLzVdKSApO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdkb21pbmFudC1iYXNlbGluZScsJ21pZGRsZScpXG4gICAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5iYXNlLnRvU3RyaW5nKCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuXG4gICAgY29uc3QgcmVFdmVuTGFiZWxzID0gcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG59O1xuXG5wYWNrLmdlc3RhbHQgPSB7XG4gICAgLi4uZ2VzdGFsdCxcbiAgICAuLi5wYWNrLmNvbW1vbixcbn07XG5wYWNrLmdlc3RhbHQuaW52ZXJ0RmlsbCA9IGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gZ2V0UmVhbERlcHRoKGQpJTIgPyB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpIDogdGhpcy5jb2xvci5uZWcudG9TdHJpbmcoKTtcbn07XG5wYWNrLmdlc3RhbHQuYXBwbHlOb2RlU3R5bGVzID0gZnVuY3Rpb24obm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCkge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIGNvbnN0IGRlZnMgPSBkMy5zZWxlY3QoY2hhcnQubm9kZSgpLnBhcmVudE5vZGUpXG4gICAgICAgIC5hcHBlbmQoJ2RlZnMnKTtcbiAgICBjb25zdCBncmFkXzEgPSBkZWZzLmFwcGVuZCgncmFkaWFsR3JhZGllbnQnKS5hdHRyKCdpZCcsICdncmFkLWluZGVmLW91dGluJylcbiAgICAgICAgLmF0dHIoJ2Z4JywnMjAlJylcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMyk7XG4gICAgICAgICAgICBncmFkXzEuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCc5MCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMC44KTtcbiAgICAgICAgZ3JhZF8xLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnMTAwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAxLjApO1xuICAgIGNvbnN0IGdyYWRfMiA9IGRlZnMuYXBwZW5kKCdyYWRpYWxHcmFkaWVudCcpLmF0dHIoJ2lkJywgJ2dyYWQtaW5kZWYtaW5vdXQnKVxuICAgICAgICAuYXR0cignZngnLCcyMCUnKVxuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMCUnKS5hdHRyKCdzdG9wLWNvbG9yJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpICkuYXR0cignc3RvcC1vcGFjaXR5JywgMS4wKTtcbiAgICAgICAgZ3JhZF8yLmFwcGVuZCgnc3RvcCcpXG4gICAgICAgICAgICAuYXR0cignb2Zmc2V0JywnNTAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuNik7XG4gICAgICAgIGdyYWRfMi5hcHBlbmQoJ3N0b3AnKVxuICAgICAgICAgICAgLmF0dHIoJ29mZnNldCcsJzYwJScpLmF0dHIoJ3N0b3AtY29sb3InLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgKS5hdHRyKCdzdG9wLW9wYWNpdHknLCAwLjQpO1xuICAgICAgICBncmFkXzIuYXBwZW5kKCdzdG9wJylcbiAgICAgICAgICAgIC5hdHRyKCdvZmZzZXQnLCcxMDAlJykuYXR0cignc3RvcC1jb2xvcicsIHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSApLmF0dHIoJ3N0b3Atb3BhY2l0eScsIDAuMCk7XG5cbiAgICBmb3Jtcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IHRoaXMuaW52ZXJ0RmlsbChkKSk7XG5cbiAgICByZUVudHJpZXMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKSA/IHRoaXMuY29sb3IucG9zLnRvU3RyaW5nKCkgOiAnbm9uZScgKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAndXJsKCNncmFkLWluZGVmLW91dGluKScpO1xuXG4gICAgY29uc3Qgb3BlblJlRW50cmllcyA9IHJlRW50cmllcy5zZWxlY3QoJ2NpcmNsZScpLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgJ3VybCgjZ3JhZC1pbmRlZi1pbm91dCknKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZS1kYXNoYXJyYXknLCBkID0+IGNpcmNsZURhc2hBcnJheShkLnIsIDgsIFsyLzUsIDMvNV0pICk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+ICgoZC5wYXJlbnQuZGF0YS50eXBlICE9PSAncmVFbnRyeScpIHx8wqAhZ2V0UmVhbERlcHRoKGQpJTIpICkgLy8gIFxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCBkID0+IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG5cbiAgICBvcGVuUmVFbnRyaWVzLmZpbHRlcihkID0+IChkLnBhcmVudC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JykgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZScsIGQgPT4gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSk7XG5cbiAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ2RvbWluYW50LWJhc2VsaW5lJywnbWlkZGxlJylcbiAgICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdtaWRkbGUnKVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiB0aGlzLmludmVydEZpbGwoZCkpO1xuICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRWYXIuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250VmFyLnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250VmFyLmZhbWlseSk7XG4gICAgY29uc3RzLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgdGhpcy5mb250Q29uc3Quc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29uc3Quc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb25zdC5mYW1pbHkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3JlY3QnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IubGlnaHQudG9TdHJpbmcoKSk7XG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgXG4gICAgcmVQb2ludHMuc2VsZWN0KCdjaXJjbGUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCdub25lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQucGFyZW50LmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsICdzY2FsZSgxLjUpJyk7XG5cbiAgICBjb25zdCByZUV2ZW5MYWJlbHMgPSByZUVudHJpZXMuc2VsZWN0KCcubGFiZWwnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udENvbnRleHQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250Q29udGV4dC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnRleHQuZmFtaWx5KVxuICAgICAgICAuc3R5bGUoJ3N0cm9rZScsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdmaWxsJywgZCA9PiAoZC5wYXJlbnQuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgIWQucGFyZW50LmRhdGEubGFzdE9wZW4pID8gdGhpcy5jb2xvci5wb3MudG9TdHJpbmcoKSA6IHRoaXMuY29sb3IuaW5kZWYudG9TdHJpbmcoKSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsLmluc2lkZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gKGQucGFyZW50LmRhdGEudHlwZSAhPT0gJ3JlRW50cnknICYmIGQuZGF0YS5sYXN0T3BlbikgPyB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkgOiB0aGlzLmNvbG9yLnBvcy50b1N0cmluZygpKTtcblxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIGJveG1vZGVsRDMgc3R5bGVzOlxuXG5leHBvcnQgY29uc3QgYm94bW9kZWwgPSB7XG4gICAgY29tbW9uOiB7XG4gICAgICAgIGVsZW1NYXJnaW46IHtoejogMTIsIHZ0OiA4fSwgLy8gdnQ6IDhcbiAgICAgICAgZm9ybU1hcmdpbjoge3RvcDogMTAsIHJpZ2h0OiAxMH0sXG4gICAgICAgIGZvcm1QYWRkaW5nOiB7aHo6IDB9LFxuICAgICAgICBtaW5Gb3JtU2l6ZToge3dpZHRoOiAzNCwgaGVpZ2h0OiAzNH0sXG4gICAgICAgIG1heExpbmVXaWR0aDogMTAwMDAsXG4gICAgICAgIHN0cm9rZVdpZHRoOiAxLjFcbiAgICB9XG59O1xuXG5ib3htb2RlbC5iYXNpYyA9IHtcbiAgICAuLi5iYXNpYyxcbiAgICAuLi5ib3htb2RlbC5jb21tb25cbiAgICAvLyBmb250OiB7Li4uYmFzaWMuZm9udCwgc2l6ZTogJzE4cHgnfVxufTtcbmJveG1vZGVsLmJhc2ljLmFwcGx5Tm9kZVN0eWxlcyA9IGZ1bmN0aW9uKG5vZGVzLCBub2RlUGFydGl0aW9ucykge1xuICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgIHNldHMuc2VsZWN0KCdwb2x5bGluZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsICdub25lJylcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2Utd2lkdGgnLCB0aGlzLnN0cm9rZVdpZHRoKTtcbiAgICBmb3Jtcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS51bm1hcmtlZClcbiAgICAgICAgICAgIC5zdHlsZSgnc3Ryb2tlJywnbm9uZScpO1xuICAgIC8vIHJlRW50cmllcy5zZWxlY3QoJ3BvbHlsaW5lJylcbiAgICAvLyAgICAgLnN0eWxlKCdzdHJva2UnLCB0aGlzLmNvbG9yLmluZGVmLnRvU3RyaW5nKCkpO1xuXG4gICAgZWxlbWVudHMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnQuc2l6ZSlcbiAgICAgICAgLnN0eWxlKCdmb250LXN0eWxlJywgdGhpcy5mb250LnN0eWxlKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtZmFtaWx5JywgdGhpcy5mb250LmZhbWlseSlcbiAgICAgICAgLy8gLnN0eWxlKCdhbGlnbm1lbnQtYmFzZWxpbmUnLCdiYXNlbGluZScpIDwtLSBcImJ1Z1wiIGluIFNhZmFyaVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG4gICAgdmFycy5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRWYXIuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRWYXIuZmFtaWx5KTtcbiAgICBjb25zdHMuc2VsZWN0KCd0ZXh0JylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb25zdC5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCB0aGlzLmZvbnRDb25zdC5zdHlsZSlcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udENvbnN0LmZhbWlseSk7XG4gICAgcmVFbnRyaWVzLnNlbGVjdCgnLmxhYmVsJylcbiAgICAgICAgLnN0eWxlKCdmb250LXNpemUnLCB0aGlzLmZvbnRDb250ZXh0LnNpemUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1zdHlsZScsIHRoaXMuZm9udENvbnRleHQuc3R5bGUpXG4gICAgICAgIC5zdHlsZSgnZm9udC1mYW1pbHknLCB0aGlzLmZvbnRDb250ZXh0LmZhbWlseSlcbiAgICAgICAgLnN0eWxlKCdzdHJva2UnLCAnbm9uZScpXG4gICAgICAgIC5zdHlsZSgnZmlsbCcsIHRoaXMuY29sb3IuYmFzZS50b1N0cmluZygpKTtcbiAgICAgICAgLy8gLnN0eWxlKCdmaWxsJywgdGhpcy5jb2xvci5pbmRlZi50b1N0cmluZygpKTtcblxuICAgIHVuY2xlYXIuc2VsZWN0KCcudW5jbGVhck1hcmsnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmxpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gICAgdW5jbGVhci5zZWxlY3QoJ3RleHQnKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsIHRoaXMuZm9udFZhci5zaXplKVxuICAgICAgICAuc3R5bGUoJ2ZvbnQtc3R5bGUnLCAnbm9ybWFsJylcbiAgICAgICAgLnN0eWxlKCdmb250LWZhbWlseScsIHRoaXMuZm9udFZhci5mYW1pbHkpXG4gICAgICAgIC5zdHlsZSgnc3Ryb2tlJywgJ25vbmUnKVxuICAgICAgICAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yLmJhc2UudG9TdHJpbmcoKSk7XG59OyIsImltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcbmltcG9ydCBib3htb2RlbEQzIGZyb20gJ2JveG1vZGVsLWxheW91dC1mb3ItZDMnO1xuXG5pbXBvcnQgY2hhcnRGYWN0b3J5LCB7IGZpdENoYXJ0LCB0ZXh0U2l6ZSwgdGV4dFN1YnNjcmlwdCwgY2lyY2xlTGFiZWwgfSBmcm9tICcuLi8uLi9jb21tb24vZDMtaGVscGVyJztcblxuaW1wb3J0ICogYXMgc3R5bGVzIGZyb20gJy4vZ3JhcGgtZDMtc3R5bGVzLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEM0dyYXBoIHtcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vICAgICAgICAgICAgICAgICAgICBWaXN1YWxpemF0aW9uIFNldHVwXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGNvbnN0cnVjdG9yKGdyYXBoVHlwZSwgZGF0YSwgb3B0cywgLi4uYXJncykge1xuICAgICAgICAvLyBjcmVhdGUgYmFzaWMgc3ZnLXN0cnVjdHVyZSBmcm9tIGNoYXJ0RmFjdG9yeSBhbmQgbWVyZ2Ugb3B0aW9ucyB3aXRoIGNvbmZpZ3VyYXRpb25cblxuICAgICAgICBjb25zdCBwcm90byA9IGNoYXJ0RmFjdG9yeSggeyBcbiAgICAgICAgICAgIC4uLnsgbWFyZ2luOiB7IGxlZnQ6IDUwLCByaWdodDogNTAsIHRvcDogNTAsIGJvdHRvbTogNTAgfSwgXG4gICAgICAgICAgICAgICAgcGFkZGluZzogeyBsZWZ0OiAxMCwgcmlnaHQ6IDEwLCB0b3A6IDEwLCBib3R0b206IDEwIH0sXG4gICAgICAgICAgICAgICAgLy8gcGFkZGluZzogeyBsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzOiAnYmFzaWMnIH0sXG4gICAgICAgICAgICAuLi5vcHRzXG4gICAgICAgIH0gKTtcblxuICAgICAgICAvLyBtZXJnZSB0aGlzIGdyYXBoIHdpdGggdGhlIGNoYXJ0IHN0cnVjdHVyZVxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIHByb3RvKTtcbiAgICAgICAgLy8gY2FsY3VsYXRlIGlubmVyIGRpbWVuc2lvbnMgb2YgdGhlIHN2Zy1jaGFydFxuICAgICAgICB0aGlzLmlubmVySGVpZ2h0ID0gdGhpcy5oZWlnaHQgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b20gLSB0aGlzLnBhZGRpbmcudG9wIC0gdGhpcy5wYWRkaW5nLmJvdHRvbTtcbiAgICAgICAgdGhpcy5pbm5lcldpZHRoID0gdGhpcy53aWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIHRoaXMucGFkZGluZy5sZWZ0IC0gdGhpcy5wYWRkaW5nLnJpZ2h0O1xuXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwcHJvcHJpYXRlIG1ldGhvZCB0byBidWlsZCB0aGUgZ3JhcGhcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcltncmFwaFR5cGVdLmNhbGwodGhpcywgZGF0YSwgLi4uYXJncyk7XG4gICAgfVxuXG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC8vICAgICAgICAgICAgICAgIERlcHRoIFRyZWUgdmlzdWFsaXphdGlvblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgdHJlZShkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGQzLWhpZXJhcmNoeSBmcm9tIG91ciBmb3JtLWpzb25cbiAgICAgICAgY29uc3Qgcm9vdCA9IGQzLmhpZXJhcmNoeShkYXRhLCBkID0+IGQuc3BhY2UpO1xuXG4gICAgICAgIC8vIHNldCB1cCBkZXNpZ24gdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IGRlc2lnbiA9IHN0eWxlcy50cmVlW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IFtub2RlU2l6ZSwgbm9kZVNlcF0gPSBbZGVzaWduLm5vZGVTaXplLCBkZXNpZ24ubm9kZVNlcGFyYXRpb25dO1xuICAgICAgICBjb25zdCBbZm9udFNpemUsIGZvbnRdID0gW2Rlc2lnbi5mb250LnNpemUsIGRlc2lnbi5mb250LmZhbWlseV07XG5cbiAgICAgICAgdGhpcy5wYWRkaW5nID0geyBsZWZ0OiAxMCwgcmlnaHQ6IDEwLCB0b3A6IDEwLCBib3R0b206IDEwIH07XG5cbiAgICAgICAgcm9vdC5keCA9IG5vZGVTaXplLncgKyBub2RlU2VwLmh6O1xuICAgICAgICByb290LmR5ID0gdGhpcy53aWR0aCAvIChyb290LmhlaWdodCArIDEpO1xuXG4gICAgICAgIC8vIGRlZmluZSB0cmVlIGxheW91dFxuICAgICAgICBjb25zdCBsYXlvdXQgPSBkMy50cmVlKClcbiAgICAgICAgICAgIC5ub2RlU2l6ZShbXG4gICAgICAgICAgICAgICAgcm9vdC5keCxcbiAgICAgICAgICAgICAgICByb290LmR5XG4gICAgICAgICAgICBdKVxuICAgICAgICAgICAgLnNlcGFyYXRpb24oKGEsYikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBhLnBhcmVudCA9PSBiLnBhcmVudCA/IDEgOiAyO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRyZWUgPSBsYXlvdXQocm9vdCk7XG5cbiAgICAgICAgLy8gY29tcHV0ZSBtaW4vbWF4IHgtdmFsdWVzXG4gICAgICAgIGxldCB4MCA9IEluZmluaXR5O1xuICAgICAgICBsZXQgeDEgPSAteDA7XG4gICAgICAgIHRyZWUuZWFjaChkID0+IHtcbiAgICAgICAgICAgIGlmIChkLnggPiB4MSkgeDEgPSBkLng7XG4gICAgICAgICAgICBpZiAoZC54IDwgeDApIHgwID0gZC54O1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29tcHV0ZSBuZXcgaGVpZ2h0IGJhc2VkIG9uIHRoZSBkaWZmZXJlbmNlIG9mIG1pbi9tYXggeC12YWx1ZXMgb2YgdHJlZSBub2RlcyArIHR3aWNlIHRoZSBwYWRkaW5nXG4gICAgICAgIGNvbnN0IHJvb3RVbm1hcmtlZCA9IHJvb3QuZGF0YS51bm1hcmtlZDtcbiAgICAgICAgY29uc3QgdGlja3BhZGRpbmcgPSBub2RlU2l6ZS5oKjEuODtcbiAgICAgICAgY29uc3QgYXhpc0hlaWdodCA9IHRpY2twYWRkaW5nOyAvLzMwO1xuICAgICAgICB0aGlzLmhlaWdodCA9ICh4MSAtIHgwKSArIHRoaXMucGFkZGluZy50b3AqMiArIG5vZGVTaXplLmgrMiArIGF4aXNIZWlnaHQ7XG5cbiAgICAgICAgLy8gc2V0dXAgc3ZnIGNvbnRhaW5lclxuICAgICAgICB0aGlzLnN2Z1xuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcbiAgICAgICAgICAgIC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnRcbiAgICAgICAgICAgIC5jbGFzc2VkKCdncmFwaC10cmVlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3RoaXMucGFkZGluZy5sZWZ0ICsgbm9kZVNpemUudy8yICsgKHJvb3QuZGF0YS51bm1hcmtlZCA/IC1yb290LmR5IDogMCl9LCR7dGhpcy5wYWRkaW5nLnRvcCAtIHgwICsgbm9kZVNpemUuaC8yfSlgKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFkZCB2ZXJ0aWNhbCBheGlzIGxpbmVzIGZvciBkZXB0aFxuXG4gICAgICAgIGNvbnN0IHJvb3RIZWlnaHRzID0gZDMucmFuZ2Uocm9vdC5oZWlnaHQgKyAocm9vdFVubWFya2VkID8gMDoxKSk7XG5cbiAgICAgICAgdGhpcy5kZXB0aFNjYWxlID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAgICAgICAgIC5kb21haW4oIHJvb3RIZWlnaHRzIClcbiAgICAgICAgICAgIC5yYW5nZSggcm9vdEhlaWdodHMubWFwKGkgPT4gKGkrKHJvb3RVbm1hcmtlZCA/IDE6MCkpKnJvb3QuZHkpICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZXB0aEF4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgIC5zY2FsZSh0aGlzLmRlcHRoU2NhbGUpXG4gICAgICAgICAgICAudGlja1NpemVJbm5lcigtKHgxLXgwKSlcbiAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG4gICAgICAgICAgICAudGlja1BhZGRpbmcodGlja3BhZGRpbmcpXG4gICAgICAgICAgICAudGlja1ZhbHVlcyggdGhpcy5kZXB0aFNjYWxlLmRvbWFpbigpLm1hcChpID0+IFxuICAgICAgICAgICAgICAgICh0aGlzLmRlcHRoU2NhbGUuZG9tYWluKCkubGVuZ3RoIDwgMTUpID8gJ0RlcHRoICcraSA6IGlcbiAgICAgICAgICAgICkgKTtcblxuICAgICAgICBjb25zdCBheGlzID0gY2hhcnQuYXBwZW5kKCdnJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdkZXB0aEF4aXMnLCB0cnVlKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoMCwgJHt4MX0pYClcbiAgICAgICAgICAgIC5jYWxsKGRlcHRoQXhpcyk7XG4gICAgICAgIGF4aXMuc2VsZWN0KCcuZG9tYWluJykucmVtb3ZlKCk7XG4gICAgICAgIFxuXG4gICAgICAgIC8vIGFkZCBncm91cHMgZm9yIGxpbmtzIGFuZCBub2Rlc1xuXG4gICAgICAgIGNvbnN0IGxpbmtzID0gY2hhcnQuc2VsZWN0QWxsKCcubGluaycpXG4gICAgICAgICAgICAuZGF0YSh0cmVlLmxpbmtzKCkpIFxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbGluaycsIHRydWUpXG5cbiAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGFydC5zZWxlY3RBbGwoJy5ub2RlJylcbiAgICAgICAgICAgIC5kYXRhKHRyZWUuZGVzY2VuZGFudHMoKSlcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZCgnZycpXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoJ25vZGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBkID0+IGB0cmFuc2xhdGUoJHtkLnl9LCR7ZC54fSlgKTtcblxuICAgICAgICBpZiAocm9vdFVubWFya2VkKSB7XG4gICAgICAgICAgICBsaW5rcy5maWx0ZXIoZCA9PiBkLnNvdXJjZS5kZXB0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIG5vZGVzLmZpbHRlcihkID0+IGQuZGVwdGggPT09IDApXG4gICAgICAgICAgICAgICAgLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbGluayBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBsaW5rUGFydGl0aW9ucyA9IHJlc29sdmVMaW5rcyh0cmVlLCBsaW5rcyk7XG4gICAgICAgIGNvbnN0IFtyZUNoaWxkTGluaywgcmVQb2ludExpbmtdID0gbGlua1BhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2Rlcyh0cmVlLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBjdXJ2ZWQgbGluZSBnZW5lcmF0b3JcbiAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKS5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICAgICAgICBsaW5rc1xuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCBkMy5saW5rSG9yaXpvbnRhbCgpXG4gICAgICAgICAgICAgICAgICAgIC54KGQgPT4gZC55KVxuICAgICAgICAgICAgICAgICAgICAueShkID0+IGQueCkpO1xuXG4gICAgICAgIG5vZGVzLmZpbHRlcihkID0+ICFkLmRhdGEudW5tYXJrZWQpXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBub2RlU2l6ZS53LzIpXG4gICAgICAgIHJlUG9pbnRzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsIG5vZGVTaXplLncvMiArIDIpXG4gICAgICAgICAgICAudGV4dChkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcCA9IGQucGFyZW50O1xuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZShwLmRhdGEudHlwZSAhPT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBwLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXIgPiAxMDAwKSByZXR1cm4gbnVsbDsgLy8gc2VjdXJpdHlcbiAgICAgICAgICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKHAuZGF0YS5yZUV2ZW4gIT09ICd1bmRlZmluZWQnKSA/IChwLmRhdGEucmVFdmVuID8gJzJ8cnwnIDogJzJ8cnwrMScpIDogJyc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBlbGVtZW50cy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgICAgICAgICAuYXR0cigncicsIChub2RlU2l6ZS53LzIpLzIpO1xuXG4gICAgICAgIG5vZGVzXG4gICAgICAgICAgICAuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd4Jywgbm9kZVNpemUudy8yICsgMilcbiAgICAgICAgXG4gICAgICAgIHZhcnMuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG4gICAgICAgIGNvbnN0cy5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgPSAke2QuZGF0YS52YWx1ZX1gKTtcbiAgICAgICAgdW5jbGVhci5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBgLyR7ZC5kYXRhLnN5bWJvbH0vYCk7XG5cbiAgICAgICAgc2V0cy5maWx0ZXIoZCA9PiBkLmNoaWxkcmVuKVxuICAgICAgICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdpbm5lcicsdHJ1ZSlcbiAgICAgICAgICAgIC5hdHRyKCdyJywgKG5vZGVTaXplLncvMikvMik7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseUF4aXNTdHlsZXMoYXhpcyk7XG4gICAgICAgIGRlc2lnbi5hcHBseUxpbmtTdHlsZXMobGlua3MsIGxpbmtQYXJ0aXRpb25zKTtcbiAgICAgICAgZGVzaWduLmFwcGx5Tm9kZVN0eWxlcyhub2Rlcywgbm9kZVBhcnRpdGlvbnMpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMudHJlZSwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgdHJlZSwgZGVzaWduXTtcbiAgICB9XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gICAgICAgICAgICAgICAgQ2lyY2xlIHBhY2tpbmcgdmlzdWFsaXphdGlvblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgcGFjayhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGNoYXJ0ID0gdGhpcy5jb250YWluZXI7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGQzLWhpZXJhcmNoeSBmcm9tIG91ciBmb3JtLWpzb25cbiAgICAgICAgc3R5bGVzLmNsZWFyRGVmYXVsdHModGhpcy5zdmcpOyAvLyBjbGVhciBkZWZhdWx0IHN0eWxlcyBmb3Igc3ZnIGV4cG9ydFxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkoZGF0YSwgZCA9PiBkLnNwYWNlKVxuICAgICAgICAgICAgLnN1bShkID0+IGQuY2hpbGRyZW4gPyAwIDogMSk7XG5cbiAgICAgICAgLy8gc2V0IHVwIGRlc2lnbiB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgZGVzaWduID0gc3R5bGVzLnBhY2tbdGhpcy5zdHlsZUNsYXNzXTtcbiAgICAgICAgY29uc3QgW3JhZGl1cywgcGFkZGluZ10gPSBbZGVzaWduLnJhZGl1cywgZGVzaWduLnBhZGRpbmddO1xuICAgICAgICBjb25zdCBbZm9udFNpemUsIGZvbnRdID0gW2Rlc2lnbi5mb250LnNpemUsIGRlc2lnbi5mb250LmZhbWlseV07XG5cbiAgICAgICAgLy8gZGVmaW5lIHBhY2sgbGF5b3V0XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGQzLnBhY2soKVxuICAgICAgICAucGFkZGluZyhkID0+IHtcbiAgICAgICAgICAgIGxldCBwYWQgPSBwYWRkaW5nO1xuICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAnZm9ybScgJiYgZC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgICAgICAgICAgICAgICAgcGFkID0gcGFkICogMC40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGQuZGF0YS51bm1hcmtlZCAmJiBkLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkgcGFkID0gMDtcbiAgICAgICAgICAgIHJldHVybiBwYWQ7XG4gICAgICAgIH0pXG4gICAgICAgIC5yYWRpdXMoZCA9PiB7XG4gICAgICAgICAgICBsZXQgcmFkID0gcmFkaXVzO1xuICAgICAgICAgICAgaWYodHlwZW9mKGQuZGF0YS5zeW1ib2wpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJhZCA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRTaXplLCBmb250KS53aWR0aCAvMjtcbiAgICAgICAgICAgICAgICBpZihkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKSByYWQgKz0gcGFkZGluZyoyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihkLmRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByYWQgPSB0ZXh0U2l6ZShkLmRhdGEudmFsdWUrJycsIGZvbnRTaXplLCBmb250KS53aWR0aCAvMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZC5kYXRhLmNoaWxkcmVuIHx8IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JyB8fMKgZC5kYXRhLnR5cGUgPT09ICdzcGFjZScpIHJhZCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcmFkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGFjayA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnQuYXR0cignY2xhc3MnLCAnZ3JhcGgtcGFjaycpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgYHRyYW5zbGF0ZSgke3BhY2suciArIHRoaXMucGFkZGluZy5sZWZ0fSwke3BhY2suciArIHRoaXMucGFkZGluZy50b3B9KWApO1xuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YShwYWNrLmRlc2NlbmRhbnRzKCkpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKCdub2RlJywgdHJ1ZSlcbiAgICAgICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKCR7ZC54fSwke2QueX0pYCk7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2RlcyhwYWNrLCBub2Rlcyk7XG4gICAgICAgIGNvbnN0IFtsZWF2ZXMsIHNldHMsIGZvcm1zLCByZUVudHJpZXMsIHJlQ2hpbGRzLCByZVBvaW50cywgZWxlbWVudHMsIHZhcnMsIGNvbnN0cywgdW5jbGVhcl0gPSBub2RlUGFydGl0aW9ucztcblxuICAgICAgICAvLyBkZWZpbmUgZGV0YWlsbGVkIHN0cnVjdHVyZS9sb2dpY1xuXG4gICAgICAgIHNldHMuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCBkID0+IGQucik7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG5cbiAgICAgICAgdW5jbGVhci5hcHBlbmQoJ3JlY3QnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gXG4gICAgICAgICAgICBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHstKGQuciAtIHBhZGRpbmcpfSxcbiAgICAgICAgICAgICR7LSh0ZXh0U2l6ZSgneCcsZm9udFNpemUsIGZvbnQpLmhlaWdodCArIHBhZGRpbmcqMikvMn0pYClcbiAgICAgICAgICAgIC5hdHRyKCd3aWR0aCcsIGQgPT4gZC5yKjIgLSBwYWRkaW5nKjIpXG4gICAgICAgICAgICAuYXR0cignaGVpZ2h0JywgZCA9PiAodGV4dFNpemUoJ3gnLGZvbnRTaXplLCBmb250KS5oZWlnaHQgKyBwYWRkaW5nKjIpKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuY2FsbCh0ZXh0U3Vic2NyaXB0KGQgPT4gZC5kYXRhLnN5bWJvbCkpO1xuXG4gICAgICAgIHJlUG9pbnRzXG4gICAgICAgICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgICAgICAgLmF0dHIoJ3InLCAxLjUpO1xuXG4gICAgICAgIHJlRW50cmllcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIC5jYWxsKGNpcmNsZUxhYmVsKCBkID0+IGQuZGF0YS5yZUV2ZW4gPyAnMnxyfCcgOiAnMnxyfCsxJywgZGVzaWduLmZvbnRDb250ZXh0LnNpemUsIGRlc2lnbi5mb250Q29udGV4dC5mYW1pbHkgKSk7XG5cbiAgICAgICAgLy8gYXBwbHkgYWxsIHN0eWxlLXJlbGF0ZWQgYXR0cmlidXRlcyB0byB0aGUgc2VsZWN0aW9uc1xuICAgICAgICBkZXNpZ24uYXBwbHlOb2RlU3R5bGVzKG5vZGVzLCBub2RlUGFydGl0aW9ucywgY2hhcnQpO1xuXG4gICAgICAgIGZpdENoYXJ0KGNoYXJ0LCB0aGlzLnBhZGRpbmcpO1xuXG4gICAgICAgIC8vIGRlYnVnZ2luZzpcbiAgICAgICAgLy8gW3RoaXMucm9vdCwgdGhpcy5sYXlvdXQsIHRoaXMuY2hhcnQsIHRoaXMucGFjaywgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgcGFjaywgZGVzaWduXTtcbiAgICB9XG5cblxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQm94bW9kZWwgdmlzdWFsaXphdGlvbiAoU3BlbmNlci1Ccm93biBob29rIG5vdGF0aW9uKVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzdGF0aWMgZ3NiaG9va3MoZGF0YSkge1xuICAgICAgICBjb25zdCBjaGFydCA9IHRoaXMuY29udGFpbmVyO1xuICAgICAgICAvLyBjcmVhdGUgYSBkMy1oaWVyYXJjaHkgZnJvbSBvdXIgZm9ybS1qc29uXG4gICAgICAgIHN0eWxlcy5jbGVhckRlZmF1bHRzKHRoaXMuc3ZnKTsgLy8gY2xlYXIgZGVmYXVsdCBzdHlsZXMgZm9yIHN2ZyBleHBvcnRcblxuICAgICAgICBjb25zdCByb290ID0gZDMuaGllcmFyY2h5KGRhdGEsIGQgPT4gZC5zcGFjZSlcbiAgICAgICAgICAgIC5zdW0oZCA9PiBkLnNwYWNlID8gMCA6IDEpO1xuXG4gICAgICAgIHRoaXMuc3R5bGVDbGFzcyA9ICdiYXNpYyc7XG4gICAgICAgIGNvbnN0IGNvbXBhY3RSZUVudHJ5ID0gKHRoaXMuY29tcGFjdENoZWNrZWQgIT09IG51bGwpID8gdGhpcy5jb21wYWN0Q2hlY2tlZCA6IHRydWU7XG5cbiAgICAgICAgLy8gc2V0IHVwIGRlc2lnbiB2YXJpYWJsZXNcbiAgICAgICAgY29uc3QgZGVzaWduID0gc3R5bGVzLmJveG1vZGVsW3RoaXMuc3R5bGVDbGFzc107XG4gICAgICAgIGNvbnN0IHtlbGVtTWFyZ2luLCBmb3JtTWFyZ2luLCBmb3JtUGFkZGluZywgbWluRm9ybVNpemUsIG1heExpbmVXaWR0aCwgZm9udFZhciwgZm9udENvbnN0LCBmb250Q29udGV4dCwgbGFiZWxzfSA9IHsuLi5kZXNpZ259O1xuICAgICAgICBjb25zdCB1bmNsZWFyUGFkID0ge2h6OiBlbGVtTWFyZ2luLmh6LzIsIHZ0OiBlbGVtTWFyZ2luLnZ0fTtcbiAgICAgICAgY29uc3QgZGF0YUxhYmVsUGFkID0gNDtcblxuICAgICAgICAvLyBkZWZpbmUgYm94bW9kZWwgbGF5b3V0XG4gICAgICAgIGNvbnN0IGxheW91dCA9IGJveG1vZGVsRDMoKVxuICAgICAgICAgICAgLnZBbGlnbignYm90dG9tJylcbiAgICAgICAgICAgIC5lZGdlTWFyZ2lucyhkID0+ICEoaXNDb250YWluZXIoZCkgJiYgIWQucGFyZW50LnBhcmVudCAmJiBkLnBhcmVudC5kYXRhLnVubWFya2VkKSApXG4gICAgICAgICAgICAuaXNDb250YWluZXIoZCA9PiBpc0NvbnRhaW5lcihkKSlcbiAgICAgICAgICAgIC5wYWRkaW5nKGQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwID0ge2xlZnQ6IDAsIHJpZ2h0OiAwLCB0b3A6IDAsIGJvdHRvbTogMH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGlzQ29udGFpbmVyKGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHAubGVmdCA9IHAucmlnaHQgPSBmb3JtUGFkZGluZy5oejtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHR4dFN6ID0gdGV4dFNpemUodGV4dCwgZm9udENvbnRleHQuc2l6ZSwgZm9udENvbnRleHQuZmFtaWx5LCBmb250Q29udGV4dC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwLmJvdHRvbSA9IHR4dFN6LmhlaWdodCArIGVsZW1NYXJnaW4udnQvMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcmdpbihkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbSA9IHtsZWZ0OiAwLCByaWdodDogMCwgdG9wOiAwLCBib3R0b206IDB9O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc0NvbnRhaW5lcihkKSkge1xuICAgICAgICAgICAgICAgICAgICBtLnRvcCA9IGZvcm1NYXJnaW4udG9wO1xuICAgICAgICAgICAgICAgICAgICBtLnJpZ2h0ID0gZm9ybU1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGVwdGggPT09IDApIG0udG9wID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQuZGF0YS5yZUNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAxKSBtLnJpZ2h0ID0gbWluRm9ybVNpemUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZC5wYXJlbnQuZGF0YS5sYXN0T3BlbikgbS50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhY3RSZUVudHJ5ICYmIGQucGFyZW50LmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGQuY2hpbGRyZW5bMF0uZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JyAmJiByZVBhcmVudExhc3RPcGVuKGQpKSkgbS50b3AgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGQuZGF0YS50eXBlICE9PSAncmVFbnRyeVBvaW50JykgeyAvLyBhbGwgb3RoZXIgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgbS50b3AgPSBtLmJvdHRvbSA9IGVsZW1NYXJnaW4udnQ7XG4gICAgICAgICAgICAgICAgICAgIG0ubGVmdCA9IG0ucmlnaHQgPSBlbGVtTWFyZ2luLmh6O1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9udFZhci5zdHlsZSA9PSAnaXRhbGljJykgbS5yaWdodCArPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtLmJvdHRvbSA9IChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyAtNiA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBtLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG0ucmlnaHQgPSBmb3JtTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gbTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNwYW5IZWlnaHQoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNwYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcGFjdFJlRW50cnkgJiYgZC5kYXRhLnJlQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAubWluQ29udGFpbmVyU2l6ZShkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IG1pbkZvcm1TaXplLndpZHRoO1xuICAgICAgICAgICAgICAgIGxldCBoID0gbWluRm9ybVNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChkLmRhdGEucmVDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZC5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgZC5jaGlsZHJlblswXS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5UG9pbnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJlbnRMYXN0T3BlbihkKSkgdyA9IG1pbkZvcm1TaXplLndpZHRoLzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGQuZGF0YS50eXBlID09PSAncmVFbnRyeScgJiYgZC5jaGlsZHJlbi5sZW5ndGggPD0gMiAmJiBkLmNoaWxkcmVuWzBdLmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IGQuZGF0YS5yZUV2ZW4gPyBsYWJlbHMucmVFdmVuIDogbGFiZWxzLnJlT2RkO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHh0U3ogPSB0ZXh0U2l6ZSh0ZXh0LCBmb250Q29udGV4dC5zaXplLCBmb250Q29udGV4dC5mYW1pbHksIGZvbnRDb250ZXh0LnN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoICsgZGF0YUxhYmVsUGFkKjI7XG4gICAgICAgICAgICAgICAgICAgIHcgPSB3IDwgbWluRm9ybVNpemUud2lkdGggPyBtaW5Gb3JtU2l6ZS53aWR0aCA6IHc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB7d2lkdGg6IHcsIGhlaWdodDogaH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXhMaW5lV2lkdGgoZCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHcgPSBtYXhMaW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5ub2RlU2l6ZShkID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdyA9IDAsIGggPSAwO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChpc1RleHQoZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dFN6ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGQuZGF0YS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3Zhcic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksIGZvbnRWYXIuc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmNsZWFyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dFN6ID0gdGV4dFNpemUoZC5kYXRhLnN5bWJvbCwgZm9udFZhci5zaXplLCBmb250VmFyLmZhbWlseSwgJ25vcm1hbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdyA9IHR4dFN6LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHR4dFN6LmhlaWdodCAqIDAuNztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdyArPSBza2V3RGlmZigoaCArIHVuY2xlYXJQYWQudnQqMikpKjIgKyB1bmNsZWFyUGFkLmh6KjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBoICs9IHVuY2xlYXJQYWQudnQqMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjb25zdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHRTeiA9IHRleHRTaXplKGQuZGF0YS52YWx1ZSwgZm9udENvbnN0LnNpemUsIGZvbnRDb25zdC5mYW1pbHksIGZvbnRDb25zdC5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ID0gdHh0U3oud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gdHh0U3ouaGVpZ2h0ICogMC43O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt3aWR0aDogdywgaGVpZ2h0OiBofTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBib3htb2RlbCA9IGxheW91dChyb290KTtcblxuICAgICAgICAvLyBzZXR1cCBiYXNpYyBjaGFydCBzdHJ1Y3R1cmVcbiAgICAgICAgY2hhcnQuYXR0cignY2xhc3MnLCAnZ3JhcGgtYm94bW9kZWwnKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGB0cmFuc2xhdGUoJHt0aGlzLnBhZGRpbmcubGVmdH0sJHt0aGlzLnBhZGRpbmcudG9wfSlgKTtcblxuLy8gY2hhcnQuYXR0cignd2lkdGgnLCcxMDAlJykuYXR0cignaGVpZ2h0JywnMTAwJScpLnN0eWxlKCdmaWxsJywncmdiYSgyNTUsMCwwLC4yKScpO1xuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gY2hhcnQuc2VsZWN0QWxsKCcubm9kZScpXG4gICAgICAgICAgICAuZGF0YShib3htb2RlbC5kZXNjZW5kYW50cygpKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKCdnJylcbiAgICAgICAgICAgICAgICAuY2xhc3NlZCgnbm9kZScsIHRydWUpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIGQgPT4gYHRyYW5zbGF0ZSgke2QueDB9LCR7ZC55MH0pYCk7XG5cbiAgICAgICAgLy8gZ2VuZXJhdGUgbm9kZSBwYXJ0aXRpb24gc2VsZWN0aW9uc1xuICAgICAgICBjb25zdCBub2RlUGFydGl0aW9ucyA9IHJlc29sdmVOb2Rlcyhib3htb2RlbCwgbm9kZXMpO1xuICAgICAgICBjb25zdCBbbGVhdmVzLCBzZXRzLCBmb3JtcywgcmVFbnRyaWVzLCByZUNoaWxkcywgcmVQb2ludHMsIGVsZW1lbnRzLCB2YXJzLCBjb25zdHMsIHVuY2xlYXJdID0gbm9kZVBhcnRpdGlvbnM7XG5cbiAgICAgICAgLy8gZGVmaW5lIGRldGFpbGxlZCBzdHJ1Y3R1cmUvbG9naWNcblxuICAgICAgICBmb3Jtcy5hcHBlbmQoJ3BvbHlsaW5lJykgLy8uZmlsdGVyKGQgPT4gIWQuZGF0YS51bm1hcmtlZCkuYXBwZW5kKCdwb2x5bGluZScpXG4gICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiBgMCwwICR7ZC54MS1kLngwfSwwICR7ZC54MS1kLngwfSwke2QueTEtZC55MH1gKTtcbiAgICAgICAgcmVFbnRyaWVzLmFwcGVuZCgncG9seWxpbmUnKVxuICAgICAgICAgICAgLmF0dHIoJ3BvaW50cycsIGQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBkLngxLWQueDA7XG4gICAgICAgICAgICAgICAgY29uc3QgaCA9IGQueTEtZC55MDtcbiAgICAgICAgICAgICAgICBjb25zdCByZUggPSBtaW5Gb3JtU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAwLDAgJHt3fSwwICR7d30sJHtofSAwLCR7aH0gMCwke2gtcmVIfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmZpbHRlcihkID0+IGQuZGF0YS5sYXN0T3BlbilcbiAgICAgICAgICAgICAgICAuYXR0cigncG9pbnRzJywgZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHcgPSBkLngxLWQueDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGggPSBkLnkxLWQueTA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlSCA9IG1pbkZvcm1TaXplLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGAke3d9LCR7aC1yZUh9ICR7d30sJHtofSAwLCR7aH0gMCwke2gtcmVIfWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIHJlRW50cmllcy5maWx0ZXIoZCA9PiBkLmRhdGEucmVFdmVuICE9PSAndW5kZWZpbmVkJykuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5jbGFzc2VkKCdsYWJlbCcsIHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgdHJhbnNsYXRlKDAsJHtkLnkxLWQueTB9KWApXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiBkYXRhTGFiZWxQYWQgKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gLTUgKVxuICAgICAgICAgICAgLnRleHQoZCA9PiBkLmRhdGEucmVFdmVuID8gbGFiZWxzLnJlRXZlbiA6IGxhYmVscy5yZU9kZCk7XG5cbiAgICAgICAgY29uc3QgdW5jbFR4dFNpemUgPSBkID0+IHRleHRTaXplKGQuZGF0YS5zeW1ib2wsIGZvbnRWYXIuc2l6ZSwgZm9udFZhci5mYW1pbHksICdub3JtYWwnKTtcbiAgICAgICAgY29uc3QgdW5jbERpZmYgPSBkID0+IHNrZXdEaWZmKCAodW5jbFR4dFNpemUoZCkuaGVpZ2h0KjAuNyArIHVuY2xlYXJQYWQudnQqMikgKTtcblxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAuY2xhc3NlZCgndW5jbGVhck1hcmsnLHRydWUpXG4gICAgICAgICAgICAuYXR0cigndHJhbnNmb3JtJywgZCA9PiBgc2tld1goLTMwKSB0cmFuc2xhdGUoJHt1bmNsRGlmZihkKX0sJHswfSlgKVxuICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywgZCA9PiAoKGQueDEtZC54MCkgLSB1bmNsRGlmZihkKSApKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGQgPT4gKGQueTEtZC55MCkgKVxuICAgICAgICB1bmNsZWFyLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneCcsZCA9PiB1bmNsRGlmZihkKSArIHVuY2xlYXJQYWQuaHogKVxuICAgICAgICAgICAgLmF0dHIoJ3knLGQgPT4gKGQueTEtZC55MCkgLXVuY2xlYXJQYWQudnQgIC0gKChkLmRhdGEuc3ltYm9sLnNwbGl0KCdfJykubGVuZ3RoID4gMSkgPyA2IDogMCkgKVxuICAgICAgICAgICAgLmNhbGwodGV4dFN1YnNjcmlwdChkID0+IGQuZGF0YS5zeW1ib2wpKTtcbiAgICAgICAgICBcbiAgICAgICAgY29uc3RzLmFwcGVuZCgndGV4dCcpXG4gICAgICAgICAgICAuYXR0cigneScsZCA9PiAoZC55MS1kLnkwKSApXG4gICAgICAgICAgICAudGV4dChkID0+IGQuZGF0YS52YWx1ZSk7XG4gICAgICAgIHZhcnMuYXBwZW5kKCd0ZXh0JylcbiAgICAgICAgICAgIC5hdHRyKCd5JyxkID0+IChkLnkxLWQueTApIClcbiAgICAgICAgICAgIC5jYWxsKHRleHRTdWJzY3JpcHQoZCA9PiBkLmRhdGEuc3ltYm9sKSk7XG5cblxuICAgICAgICAvLyBhcHBseSBhbGwgc3R5bGUtcmVsYXRlZCBhdHRyaWJ1dGVzIHRvIHRoZSBzZWxlY3Rpb25zXG4gICAgICAgIGRlc2lnbi5hcHBseU5vZGVTdHlsZXMobm9kZXMsIG5vZGVQYXJ0aXRpb25zLCBjaGFydCk7XG5cbiAgICAgICAgZml0Q2hhcnQoY2hhcnQsIHRoaXMucGFkZGluZyk7XG5cbiAgICAgICAgLy8gZGVidWdnaW5nOlxuICAgICAgICAvLyBbdGhpcy5yb290LCB0aGlzLmxheW91dCwgdGhpcy5jaGFydCwgdGhpcy5ib3htb2RlbCwgdGhpcy5kZXNpZ25dID0gXG4gICAgICAgIC8vICAgICBbcm9vdCwgbGF5b3V0LCBjaGFydCwgYm94bW9kZWwsIGRlc2lnbl07XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcmNlKGRhdGEpIHtcblxuICAgIH1cblxufVxuXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIZWxwZXIgZnVuY3Rpb25zXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiByZXNvbHZlTm9kZXMocm9vdCwgbm9kZXMpIHtcbiAgLy8gcmVzb2x2ZXMgZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgbGVhdmVzID0gbm9kZXMuZmlsdGVyKGQgPT4gcm9vdC5sZWF2ZXMoKS5maWx0ZXIobCA9PiBsID09PSBkKS5wb3AoKSApXG4gICAgICAuY2xhc3NlZCgnbGVhZicsIHRydWUpO1xuXG4gIGNvbnN0IHNldHMgPSBub2Rlcy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ2Zvcm0nIHx8wqBkLmRhdGEudHlwZSA9PT0gJ3JlRW50cnknKVxuICAgICAgLmNsYXNzZWQoJ2Zvcm0nLCB0cnVlKVxuICBjb25zdCBmb3JtcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdmb3JtJylcbiAgICAgIC5jbGFzc2VkKCdmb3JtJywgdHJ1ZSk7XG4gIGNvbnN0IHJlRW50cmllcyA9IHNldHMuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5JywgdHJ1ZSk7XG5cbiAgY29uc3QgZWxlbWVudHMgPSBub2Rlcy5maWx0ZXIoZCA9PiAhKGQuZGF0YS50eXBlID09PSAnZm9ybScgfHzCoGQuZGF0YS50eXBlID09PSAncmVFbnRyeScpKVxuICAgICAgLmNsYXNzZWQoJ2VsZW1lbnQnLCB0cnVlKTtcbiAgY29uc3QgdmFycyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAndmFyJylcbiAgICAgIC5jbGFzc2VkKCd2YXInLCB0cnVlKTtcbiAgbGV0IGNvbnN0cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAnY29uc3QnKVxuICAgICAgLmNsYXNzZWQoJ2NvbnN0JywgdHJ1ZSk7XG4gIGNvbnN0cy51bm1hcmtlZCA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS52YWx1ZSA9PSAwKS5jbGFzc2VkKCd1bm1hcmtlZCcsIHRydWUpO1xuICBjb25zdHMubWFya2VkID0gZWxlbWVudHMuZmlsdGVyKGQgPT4gZC5kYXRhLnZhbHVlID09IDEpLmNsYXNzZWQoJ21hcmtlZCcsIHRydWUpO1xuICBjb25zdHMuaW5kZWYgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMikuY2xhc3NlZCgnaW5kZWYnLCB0cnVlKTtcbiAgY29uc3RzLmltYWcgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudmFsdWUgPT0gMykuY2xhc3NlZCgnaW1hZycsIHRydWUpO1xuXG4gIGNvbnN0IHVuY2xlYXIgPSBlbGVtZW50cy5maWx0ZXIoZCA9PiBkLmRhdGEudHlwZSA9PT0gJ3VuY2xlYXInKVxuICAgICAgLmNsYXNzZWQoJ3VuY2xlYXInLCB0cnVlKTtcblxuICBjb25zdCByZUNoaWxkcyA9IGZvcm1zLmZpbHRlcihkID0+IGQuZGF0YS5yZUNoaWxkKVxuICAgICAgLmNsYXNzZWQoJ3JlQ2hpbGQnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50cyA9IGVsZW1lbnRzLmZpbHRlcihkID0+IGQuZGF0YS50eXBlID09PSAncmVFbnRyeVBvaW50JylcbiAgICAgIC5jbGFzc2VkKCdyZUVudHJ5UG9pbnQnLCB0cnVlKTtcblxuICByZXR1cm4gW2xlYXZlcywgc2V0cywgZm9ybXMsIHJlRW50cmllcywgcmVDaGlsZHMsIHJlUG9pbnRzLCBlbGVtZW50cywgdmFycywgY29uc3RzLCB1bmNsZWFyXTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUxpbmtzKHJvb3QsIGxpbmtzKSB7XG4gIC8vIHJlc29sdmVzIGxpbmtzIGJldHdlZW4gZGVzY2VuZGFudCBub2RlcyBpbnRvIGZpbHRlcmVkIHNlbGVjdGlvbnNcbiAgY29uc3QgcmVDaGlsZExpbmsgPSBsaW5rcy5maWx0ZXIoZCA9PiBkLnRhcmdldC5kYXRhLnJlQ2hpbGQpXG4gICAgICAuY2xhc3NlZCgncmVDaGlsZExpbmsnLCB0cnVlKTtcblxuICBjb25zdCByZVBvaW50TGluayA9IGxpbmtzLmZpbHRlcihkID0+IGQudGFyZ2V0LmRhdGEudHlwZSA9PT0gJ3JlRW50cnlQb2ludCcpXG4gICAgICAuY2xhc3NlZCgncmVQb2ludExpbmsnLCB0cnVlKTtcblxuICByZXR1cm4gW3JlQ2hpbGRMaW5rLCByZVBvaW50TGlua107XG59XG5cbmZ1bmN0aW9uIGlzVGV4dChub2RlKSB7IHJldHVybiBub2RlLmRhdGEudHlwZSA9PT0gJ3ZhcicgfHzCoG5vZGUuZGF0YS50eXBlID09PSAnY29uc3QnIHx8IG5vZGUuZGF0YS50eXBlID09PSAndW5jbGVhcic7IH1cblxuZnVuY3Rpb24gaXNDb250YWluZXIobm9kZSkgeyByZXR1cm4gbm9kZS5kYXRhLnR5cGUgPT09ICdmb3JtJyB8fMKgbm9kZS5kYXRhLnR5cGUgPT09ICdyZUVudHJ5JzsgfVxuXG5mdW5jdGlvbiByZVBhcmVudExhc3RPcGVuKG5vZGUpIHtcbmxldCByZVBhcmVudCA9IG5vZGUuYW5jZXN0b3JzKCkuZmlsdGVyKGQgPT4gZC5kYXRhLnR5cGUgPT09ICdyZUVudHJ5Jykuc2hpZnQoKTtcbnJldHVybiByZVBhcmVudC5kYXRhLmxhc3RPcGVuO1xufVxuXG5mdW5jdGlvbiBza2V3RGlmZihoZWlnaHQsZGVncmVlcz0zMCkgeyByZXR1cm4gTWF0aC50YW4oKGRlZ3JlZXMqKE1hdGguUEkvMTgwKSkpICogaGVpZ2h0OyB9OyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9kM19fOyJdLCJzb3VyY2VSb290IjoiIn0=