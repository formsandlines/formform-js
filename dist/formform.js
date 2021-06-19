(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory();
	else
		root["formform"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/big-integer/BigInteger.js":
/*!************************************************!*\
  !*** ./node_modules/big-integer/BigInteger.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;var bigInt = (function (undefined) {
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


/***/ }),

/***/ "./node_modules/formsandlines-utils/lib/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/formsandlines-utils/lib/array.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flatten": function() { return /* binding */ flatten; },
/* harmony export */   "include": function() { return /* binding */ include; },
/* harmony export */   "arrayMoveItem": function() { return /* binding */ arrayMoveItem; },
/* harmony export */   "permuteArray": function() { return /* binding */ permuteArray; }
/* harmony export */ });
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

function arrayMoveItem(arr, from, to) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
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

/***/ }),

/***/ "./node_modules/formsandlines-utils/lib/bigint.js":
/*!********************************************************!*\
  !*** ./node_modules/formsandlines-utils/lib/bigint.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bigIntToSciNotation": function() { return /* binding */ bigIntToSciNotation; },
/* harmony export */   "getRandomBigInt": function() { return /* binding */ getRandomBigInt; }
/* harmony export */ });
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_integer__WEBPACK_IMPORTED_MODULE_0__);

// const bigInt = require('big-integer');

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
	return big_integer__WEBPACK_IMPORTED_MODULE_0__.randBetween(0,max);
}



/***/ }),

/***/ "./node_modules/formsandlines-utils/lib/object.js":
/*!********************************************************!*\
  !*** ./node_modules/formsandlines-utils/lib/object.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverse": function() { return /* binding */ traverse; },
/* harmony export */   "reverseMapping": function() { return /* binding */ reverseMapping; }
/* harmony export */ });
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

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/js-toolbox
*/

const reverseMapping = (o,bijective=false) => Object.keys(o).reduce((r, k) => Object.assign(r, { [o[k]]: (bijective ? k : (r[o[k]] || []).concat(k)) }), {}); // modified from answer by Nina Scholz: https://stackoverflow.com/a/45728850

/***/ }),

/***/ "./node_modules/formsandlines-utils/lib/string.js":
/*!********************************************************!*\
  !*** ./node_modules/formsandlines-utils/lib/string.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pad": function() { return /* binding */ pad; },
/* harmony export */   "replaceAll": function() { return /* binding */ replaceAll; },
/* harmony export */   "escapeRegExp": function() { return /* binding */ escapeRegExp; },
/* harmony export */   "addBefore": function() { return /* binding */ addBefore; },
/* harmony export */   "replaceAt": function() { return /* binding */ replaceAt; },
/* harmony export */   "truncateStr": function() { return /* binding */ truncateStr; },
/* harmony export */   "breakStr": function() { return /* binding */ breakStr; }
/* harmony export */ });
function pad(num, size) {
    /* pads 0s before number string
       Source: https://stackoverflow.com/a/2998822
       Credits to: InfinitiesLoop */

    var s = num+""; // converts number to string if not already a string
    while (s.length < size) s = "0" + s;
    return s;
}

// former String.prototype.replaceAll
function replaceAll(str, find, replace, escapeMeta) {
    /*  Modified from: https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript 
    Credits to: Sean Bright */
    if(escapeMeta) find = escapeRegExp(find);
    return str.replace(new RegExp(find, 'g'), replace);
};

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

// former String.prototype.addBefore
function addBefore(str, index, replacement) {
    return str.substr(0, index) + replacement+ str.substr(index);
}

// former String.prototype.replaceAt
function replaceAt(str, index, replacement) {
    return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
}

/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/js-toolbox
*/

const truncateStr = (str,limit,appendix='') => str.length > limit ? (str.substr(0,limit) + appendix) : str;


/* Breaks string up in parts of length n (x <= n for the last part) 
   from: https://observablehq.com/@formsandlines/js-toolbox
*/
const breakStr = (str,n=1) => [...new Array(Math.ceil(str.length/n))].map((d,i) => str.substr(n*i,n));



/***/ }),

/***/ "./node_modules/formsandlines-utils/lib/validation.js":
/*!************************************************************!*\
  !*** ./node_modules/formsandlines-utils/lib/validation.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkBracketMatching": function() { return /* binding */ checkBracketMatching; },
/* harmony export */   "equalArrays": function() { return /* binding */ equalArrays; },
/* harmony export */   "createValidation": function() { return /* binding */ createValidation; },
/* harmony export */   "collapseLiterals": function() { return /* binding */ collapseLiterals; },
/* harmony export */   "checkLiteralMatching": function() { return /* binding */ checkLiteralMatching; },
/* harmony export */   "getBracketUnits": function() { return /* binding */ getBracketUnits; }
/* harmony export */ });
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

/***/ }),

/***/ "./src/common/helper.js":
/*!******************************!*\
  !*** ./src/common/helper.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VARCODE": function() { return /* binding */ VARCODE; },
/* harmony export */   "VARCODE_REV": function() { return /* binding */ VARCODE_REV; }
/* harmony export */ });
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/object.js");


/*  --------------------------------------------------------
    Additions 01/2020 from:
    https://observablehq.com/@formsandlines/formform-toolbox 
*/

const VARCODE = ({'a':'ᴬ', 'b':'ᴮ', 'c':'ᵓ', 'd':'ᴰ', 'e':'ᴱ', 'f':'ᵎ', 'g':'ᴳ', 'h':'ᴴ', 'i':'ᴵ', 'j':'ᴶ', 'k':'ᴷ', 'l':'ᴸ', 'm':'ᴹ', 'n':'ᴺ', 'o':'ᴼ', 'p':'ᴾ', 'q':'ᴽ', 'r':'ᴿ', 's':'ᵕ', 't':'ᵀ', 'u':'ᵁ', 'v':'ᵛ', 'w':'ᵂ', 'x':'ᵡ', 'y':'ᵞ', 'z':'ᵜ', 'alt':'ᵽ', '2r':'ᵳ', '2r+1':'ᵲ'});

const VARCODE_REV = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_0__.reverseMapping)(VARCODE,true);

/***/ }),

/***/ "./src/lib/core/fcalc.js":
/*!*******************************!*\
  !*** ./src/lib/core/fcalc.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FCalc; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FDna; }
/* harmony export */ });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/string.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/bigint.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/validation.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/array.js");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_integer__WEBPACK_IMPORTED_MODULE_1__);



 // obsolete with better BigInt support in browsers

class FDna extends _fform__WEBPACK_IMPORTED_MODULE_0__.default {
    
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
                const interprVals = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum);
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
        return (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(quat, dnaLen);
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

        const maxN = big_integer__WEBPACK_IMPORTED_MODULE_1__(4).pow( big_integer__WEBPACK_IMPORTED_MODULE_1__(4).pow(vnum) );
        const value_bin = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomBigInt)( maxN.subtract(1) );
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

            if (varorder !== undefined && varList !== undefined && !(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.equalArrays)(varorder, varList)) {
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

        const vmapPermutations = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_5__.permuteArray)(varorder)
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
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                () => this.formMatchesVarList(form, varList),
                'FORM doesn\'t match the given variable list'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                () => varList.length === this.totalVarsFromDNA(dna),
                'Number of variables in given variable list doesn\'t match formDNA code length'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                () => this.encode(form, varList) === dna,
                'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
        ] : [
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                () => varList && varList.length === this.totalVarsFromDNA(dna),
                'Number of FORM variables doesn\'t match formDNA code length'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
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
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => typeof(input) === 'string',
                'formDNA input is not of type ‘string’'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => input.includes('::'),
                'Input does not include the mark ‘::’ for formDNA'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => input.length >= 3,
                'formDNA input is too short'),
        ];
        validations1.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );

        const { dna, formula, varList } = this.getDNAparts(input);
        const validations2 = [
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => this.totalVarsFromDNA(dna) >= 0,
                'formDNA code length is not in the range 4^x'),
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
                'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
            compareForm && formula !== undefined
            ? (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => this.dnaMatchesForm(dna, formula, varList),
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
      const iq = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum).split('');
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FForm; }
/* harmony export */ });
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/string.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/array.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/validation.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");
/* harmony import */ var _fcalc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcalc */ "./src/lib/core/fcalc.js");




class FForm extends _fcalc__WEBPACK_IMPORTED_MODULE_1__.default {

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
            const interprVals = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum);
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
        return (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.flatten)(arr).join('');
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
                    if (!(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.include)(vars, space[i].symbol)) {
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
      let revCode = _common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE_REV;
      if (decodePattern) {
        const keys = Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE_REV);
        const varPart = keys.slice(0,decodePattern.length);
        const modPart = keys.slice(-3);
        
        revCode = varPart.concat(modPart).reduce( (code,key,i) => ({...code, 
            [key]: i < decodePattern.length ? decodePattern[i] : _common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE_REV[key], }),{});
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
                .replace(new RegExp(fixPtn.alt, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE.alt )
                .replace(new RegExp(fixPtn.rEven, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE["2r"])
                .replace(new RegExp(fixPtn.rOdd, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE["2r+1"])
                .replace(new RegExp(ptn(v), 'g'),(Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_0__.VARCODE_REV)[i]) )
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
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => typeof(input) === 'string',
                'Formula input is not of type ‘string’'),
        ];
        if (input.length > 0) validations1 = [...validations1,
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                () => {
                    return !!(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.collapseLiterals)(input, '"') && !!(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.collapseLiterals)(input, '/');
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
            const cleanInput = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.collapseLiterals)( (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.collapseLiterals)(input, '"'), '/');

            const validations2 = [
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                    () => (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.checkBracketMatching)(cleanInput, '(', ')'),
                    'Number or opening/closing order of parantheses in formula don\'t match'),
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                    () => (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.checkBracketMatching)(cleanInput, '{', '}'),
                    'Number or opening/closing order of curly brackets in formula don\'t match'),
            ];

            validations2.every(validation => validation().cata({
                error: e => { throw new Error(e); },
                success: data => data,
            }) );

            const roundBrUnits = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.getBracketUnits)(cleanInput, {open: '(', close: ')'});
            const curlyBrUnits = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.getBracketUnits)(cleanInput, {open: '{', close: '}'});

            const validations3 = [
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                    () => roundBrUnits.every(subForm => (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.checkBracketMatching)(subForm, '{', '}'))
                       && curlyBrUnits.every(subForm => (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.checkBracketMatching)(subForm, '(', ')')),
                    'Opening/closing of parantheses overlaps with opening/closing of curly brackets in formula (e.g.: ({a)b})'),
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
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
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
                    () => selList_unique.length === entries.length,
                    'One or more re-entry constructions have invalid or duplicate options'),
                (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
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
            (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/lib/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_fcalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/fcalc */ "./src/lib/core/fcalc.js");
/* harmony import */ var _core_fform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/fform */ "./src/lib/core/fform.js");
/* harmony import */ var _core_fdna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/fdna */ "./src/lib/core/fdna.js");




/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__.default, form: _core_fform__WEBPACK_IMPORTED_MODULE_1__.default, dna: _core_fdna__WEBPACK_IMPORTED_MODULE_2__.default });
}();
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi9iaWdpbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvZm9ybXNhbmRsaW5lcy11dGlscy9saWIvb2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL2Zvcm1zYW5kbGluZXMtdXRpbHMvbGliL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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Qzs7Ozs7O1VDMXlCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0pnQztBQUNBO0FBQ0Y7O0FBRTlCLCtEQUFlLENBQUMsS0FBSyx3REFBTSx1REFBSyxtREFBRSxFIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJ2YXIgYmlnSW50ID0gKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICAgIHZhciBCQVNFID0gMWU3LFxyXG4gICAgICAgIExPR19CQVNFID0gNyxcclxuICAgICAgICBNQVhfSU5UID0gOTAwNzE5OTI1NDc0MDk5MixcclxuICAgICAgICBNQVhfSU5UX0FSUiA9IHNtYWxsVG9BcnJheShNQVhfSU5UKSxcclxuICAgICAgICBERUZBVUxUX0FMUEhBQkVUID0gXCIwMTIzNDU2Nzg5YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIjtcclxuXHJcbiAgICB2YXIgc3VwcG9ydHNOYXRpdmVCaWdJbnQgPSB0eXBlb2YgQmlnSW50ID09PSBcImZ1bmN0aW9uXCI7XHJcblxyXG4gICAgZnVuY3Rpb24gSW50ZWdlcih2LCByYWRpeCwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXggIT09IFwidW5kZWZpbmVkXCIpIHJldHVybiArcmFkaXggPT09IDEwICYmICFhbHBoYWJldCA/IHBhcnNlVmFsdWUodikgOiBwYXJzZUJhc2UodiwgcmFkaXgsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKTtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHNpZ247XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIFNtYWxsSW50ZWdlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB2YWx1ZSA8IDA7XHJcbiAgICAgICAgdGhpcy5pc1NtYWxsID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBOYXRpdmVCaWdJbnQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNQcmVjaXNlKG4pIHtcclxuICAgICAgICByZXR1cm4gLU1BWF9JTlQgPCBuICYmIG4gPCBNQVhfSU5UO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNtYWxsVG9BcnJheShuKSB7IC8vIEZvciBwZXJmb3JtYW5jZSByZWFzb25zIGRvZXNuJ3QgcmVmZXJlbmNlIEJBU0UsIG5lZWQgdG8gY2hhbmdlIHRoaXMgZnVuY3Rpb24gaWYgQkFTRSBjaGFuZ2VzXHJcbiAgICAgICAgaWYgKG4gPCAxZTcpXHJcbiAgICAgICAgICAgIHJldHVybiBbbl07XHJcbiAgICAgICAgaWYgKG4gPCAxZTE0KVxyXG4gICAgICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNyldO1xyXG4gICAgICAgIHJldHVybiBbbiAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWU3KSAlIDFlNywgTWF0aC5mbG9vcihuIC8gMWUxNCldO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFycmF5VG9TbWFsbChhcnIpIHsgLy8gSWYgQkFTRSBjaGFuZ2VzIHRoaXMgZnVuY3Rpb24gbWF5IG5lZWQgdG8gY2hhbmdlXHJcbiAgICAgICAgdHJpbShhcnIpO1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG4gICAgICAgIGlmIChsZW5ndGggPCA0ICYmIGNvbXBhcmVBYnMoYXJyLCBNQVhfSU5UX0FSUikgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiAwO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gYXJyWzBdO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gYXJyWzBdICsgYXJyWzFdICogQkFTRTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBhcnJbMF0gKyAoYXJyWzFdICsgYXJyWzJdICogQkFTRSkgKiBCQVNFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpbSh2KSB7XHJcbiAgICAgICAgdmFyIGkgPSB2Lmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodlstLWldID09PSAwKTtcclxuICAgICAgICB2Lmxlbmd0aCA9IGkgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFycmF5KGxlbmd0aCkgeyAvLyBmdW5jdGlvbiBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBZYWZmbGUncyBsaWJyYXJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvQmlnSW50ZWdlclxyXG4gICAgICAgIHZhciB4ID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgdmFyIGkgPSAtMTtcclxuICAgICAgICB3aGlsZSAoKytpIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHhbaV0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cnVuY2F0ZShuKSB7XHJcbiAgICAgICAgaWYgKG4gPiAwKSByZXR1cm4gTWF0aC5mbG9vcihuKTtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKG4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChhLCBiKSB7IC8vIGFzc3VtZXMgYSBhbmQgYiBhcmUgYXJyYXlzIHdpdGggYS5sZW5ndGggPj0gYi5sZW5ndGhcclxuICAgICAgICB2YXIgbF9hID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGxfYiA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGxfYSksXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbF9iOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGJbaV0gKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBzdW0gPj0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoaSA8IGxfYSkge1xyXG4gICAgICAgICAgICBzdW0gPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID09PSBiYXNlID8gMSA6IDA7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhcnJ5ID4gMCkgci5wdXNoKGNhcnJ5KTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbnkoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCA+PSBiLmxlbmd0aCkgcmV0dXJuIGFkZChhLCBiKTtcclxuICAgICAgICByZXR1cm4gYWRkKGIsIGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFNtYWxsKGEsIGNhcnJ5KSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgY2FycnkgaXMgbnVtYmVyIHdpdGggMCA8PSBjYXJyeSA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgc3VtLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSAtIGJhc2UgKyBjYXJyeTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHN1bSAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gc3VtIC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICBjYXJyeSArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChhLCBNYXRoLmFicyhiKSksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRBbnkoYSwgYiksIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucGx1cyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzUHJlY2lzZShhICsgYikpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgKyBiKTtcclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShNYXRoLmFicyhiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihhZGRTbWFsbChiLCBNYXRoLmFicyhhKSksIGEgPCAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnBsdXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFkZDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSArIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wbHVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3QoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEgPj0gYlxyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkoYV9sKSxcclxuICAgICAgICAgICAgYm9ycm93ID0gMCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93IC0gYltpXTtcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2UgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoaSA9IGJfbDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldIC0gYm9ycm93O1xyXG4gICAgICAgICAgICBpZiAoZGlmZmVyZW5jZSA8IDApIGRpZmZlcmVuY2UgKz0gYmFzZTtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByW2krK10gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoOyBpIDwgYV9sOyBpKyspIHtcclxuICAgICAgICAgICAgcltpXSA9IGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RBbnkoYSwgYiwgc2lnbikge1xyXG4gICAgICAgIHZhciB2YWx1ZTtcclxuICAgICAgICBpZiAoY29tcGFyZUFicyhhLCBiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYSwgYik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBzdWJ0cmFjdChiLCBhKTtcclxuICAgICAgICAgICAgc2lnbiA9ICFzaWduO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YWx1ZSA9IGFycmF5VG9TbWFsbCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgdmFsdWUgPSAtdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHZhbHVlLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdWJ0cmFjdFNtYWxsKGEsIGIsIHNpZ24pIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIDAgPD0gYiA8IE1BWF9JTlRcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IC1iLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgZGlmZmVyZW5jZTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgPSBhW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gYmFzZSk7XHJcbiAgICAgICAgICAgIGRpZmZlcmVuY2UgJT0gYmFzZTtcclxuICAgICAgICAgICAgcltpXSA9IGRpZmZlcmVuY2UgPCAwID8gZGlmZmVyZW5jZSArIGJhc2UgOiBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByID0gYXJyYXlUb1NtYWxsKHIpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgciA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAoc2lnbikgciA9IC1yO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihyKTtcclxuICAgICAgICB9IHJldHVybiBuZXcgQmlnSW50ZWdlcihyLCBzaWduKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbClcclxuICAgICAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYSwgTWF0aC5hYnMoYiksIHRoaXMuc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0QW55KGEsIGIsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubWludXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkZChuLm5lZ2F0ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYSAtIGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbChiLCBNYXRoLmFicyhhKSwgYSA+PSAwKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm1pbnVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC0gcGFyc2VWYWx1ZSh2KS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1pbnVzID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zdWJ0cmFjdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsICF0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciBzbWFsbCA9IG5ldyBTbWFsbEludGVnZXIoLXRoaXMudmFsdWUpO1xyXG4gICAgICAgIHNtYWxsLnNpZ24gPSAhc2lnbjtcclxuICAgICAgICByZXR1cm4gc21hbGw7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZWdhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIodGhpcy52YWx1ZSwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYWJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKE1hdGguYWJzKHRoaXMudmFsdWUpKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlID49IDAgPyB0aGlzLnZhbHVlIDogLXRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUxvbmcoYSwgYikge1xyXG4gICAgICAgIHZhciBhX2wgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgYl9sID0gYi5sZW5ndGgsXHJcbiAgICAgICAgICAgIGwgPSBhX2wgKyBiX2wsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHByb2R1Y3QsIGNhcnJ5LCBpLCBhX2ksIGJfajtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYV9sOyArK2kpIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBiX2w7ICsraikge1xyXG4gICAgICAgICAgICAgICAgYl9qID0gYltqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBhX2kgKiBiX2ogKyByW2kgKyBqXTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqXSA9IHByb2R1Y3QgLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgICAgICAgICByW2kgKyBqICsgMV0gKz0gY2Fycnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsKGEsIGIpIHsgLy8gYXNzdW1lcyBhIGlzIGFycmF5LCBiIGlzIG51bWJlciB3aXRoIHxifCA8IEJBU0VcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgY2FycnkgPSAwLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IGFbaV0gKiBiICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihwcm9kdWN0IC8gYmFzZSk7XHJcbiAgICAgICAgICAgIHJbaV0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoY2FycnkgPiAwKSB7XHJcbiAgICAgICAgICAgIHJbaSsrXSA9IGNhcnJ5ICUgYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0TGVmdCh4LCBuKSB7XHJcbiAgICAgICAgdmFyIHIgPSBbXTtcclxuICAgICAgICB3aGlsZSAobi0tID4gMCkgci5wdXNoKDApO1xyXG4gICAgICAgIHJldHVybiByLmNvbmNhdCh4KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseUthcmF0c3ViYSh4LCB5KSB7XHJcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1heCh4Lmxlbmd0aCwgeS5sZW5ndGgpO1xyXG5cclxuICAgICAgICBpZiAobiA8PSAzMCkgcmV0dXJuIG11bHRpcGx5TG9uZyh4LCB5KTtcclxuICAgICAgICBuID0gTWF0aC5jZWlsKG4gLyAyKTtcclxuXHJcbiAgICAgICAgdmFyIGIgPSB4LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBhID0geC5zbGljZSgwLCBuKSxcclxuICAgICAgICAgICAgZCA9IHkuc2xpY2UobiksXHJcbiAgICAgICAgICAgIGMgPSB5LnNsaWNlKDAsIG4pO1xyXG5cclxuICAgICAgICB2YXIgYWMgPSBtdWx0aXBseUthcmF0c3ViYShhLCBjKSxcclxuICAgICAgICAgICAgYmQgPSBtdWx0aXBseUthcmF0c3ViYShiLCBkKSxcclxuICAgICAgICAgICAgYWJjZCA9IG11bHRpcGx5S2FyYXRzdWJhKGFkZEFueShhLCBiKSwgYWRkQW55KGMsIGQpKTtcclxuXHJcbiAgICAgICAgdmFyIHByb2R1Y3QgPSBhZGRBbnkoYWRkQW55KGFjLCBzaGlmdExlZnQoc3VidHJhY3Qoc3VidHJhY3QoYWJjZCwgYWMpLCBiZCksIG4pKSwgc2hpZnRMZWZ0KGJkLCAyICogbikpO1xyXG4gICAgICAgIHRyaW0ocHJvZHVjdCk7XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbiBpcyBkZXJpdmVkIGZyb20gYSBzdXJmYWNlIGZpdCBvZiBhIGdyYXBoIHBsb3R0aW5nIHRoZSBwZXJmb3JtYW5jZSBkaWZmZXJlbmNlXHJcbiAgICAvLyBiZXR3ZWVuIGxvbmcgbXVsdGlwbGljYXRpb24gYW5kIGthcmF0c3ViYSBtdWx0aXBsaWNhdGlvbiB2ZXJzdXMgdGhlIGxlbmd0aHMgb2YgdGhlIHR3byBhcnJheXMuXHJcbiAgICBmdW5jdGlvbiB1c2VLYXJhdHN1YmEobDEsIGwyKSB7XHJcbiAgICAgICAgcmV0dXJuIC0wLjAxMiAqIGwxIC0gMC4wMTIgKiBsMiArIDAuMDAwMDE1ICogbDEgKiBsMiA+IDA7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICBzaWduID0gdGhpcy5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIGFicztcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgaWYgKGFicyA8IEJBU0UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGEsIGFicyksIHNpZ24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoYWJzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZUthcmF0c3ViYShhLmxlbmd0aCwgYi5sZW5ndGgpKSAvLyBLYXJhdHN1YmEgaXMgb25seSBmYXN0ZXIgZm9yIGNlcnRhaW4gYXJyYXkgc2l6ZXNcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5S2FyYXRzdWJhKGEsIGIpLCBzaWduKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGEsIGIpLCBzaWduKTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tdWx0aXBseTtcclxuXHJcbiAgICBmdW5jdGlvbiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoYSwgYiwgc2lnbikgeyAvLyBhID49IDBcclxuICAgICAgICBpZiAoYSA8IEJBU0UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5U21hbGwoYiwgYSksIHNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlMb25nKGIsIHNtYWxsVG9BcnJheShhKSksIHNpZ24pO1xyXG4gICAgfVxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKGEudmFsdWUgKiB0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSksIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5fbXVsdGlwbHlCeVNtYWxsID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDEpIHJldHVybiB0aGlzO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAtMSkgcmV0dXJuIHRoaXMubmVnYXRlKCk7XHJcbiAgICAgICAgcmV0dXJuIG11bHRpcGx5U21hbGxBbmRBcnJheShNYXRoLmFicyhhLnZhbHVlKSwgdGhpcy52YWx1ZSwgdGhpcy5zaWduICE9PSBhLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVZhbHVlKHYpLl9tdWx0aXBseUJ5U21hbGwodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50aW1lcyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAqIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS50aW1lcyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3F1YXJlKGEpIHtcclxuICAgICAgICAvL2NvbnNvbGUuYXNzZXJ0KDIgKiBCQVNFICogQkFTRSA8IE1BWF9JTlQpO1xyXG4gICAgICAgIHZhciBsID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHIgPSBjcmVhdGVBcnJheShsICsgbCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBhX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBhX2kgPSBhW2ldO1xyXG4gICAgICAgICAgICBjYXJyeSA9IDAgLSBhX2kgKiBhX2k7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSBpOyBqIDwgbDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBhX2ogPSBhW2pdO1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IDIgKiAoYV9pICogYV9qKSArIHJbaSArIGpdICsgY2Fycnk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaSArIGxdID0gY2Fycnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihzcXVhcmUodGhpcy52YWx1ZSksIGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zcXVhcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZSAqIHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSh2YWx1ZSkpIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHNtYWxsVG9BcnJheShNYXRoLmFicyh0aGlzLnZhbHVlKSkpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICogdGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kMShhLCBiKSB7IC8vIExlZnQgb3ZlciBmcm9tIHByZXZpb3VzIHZlcnNpb24uIFBlcmZvcm1zIGZhc3RlciB0aGFuIGRpdk1vZDIgb24gc21hbGxlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcmVzdWx0ID0gY3JlYXRlQXJyYXkoYi5sZW5ndGgpLFxyXG4gICAgICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBiW2JfbCAtIDFdLFxyXG4gICAgICAgICAgICAvLyBub3JtYWxpemF0aW9uXHJcbiAgICAgICAgICAgIGxhbWJkYSA9IE1hdGguY2VpbChiYXNlIC8gKDIgKiBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpKSxcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gbXVsdGlwbHlTbWFsbChhLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBkaXZpc29yID0gbXVsdGlwbHlTbWFsbChiLCBsYW1iZGEpLFxyXG4gICAgICAgICAgICBxdW90aWVudERpZ2l0LCBzaGlmdCwgY2FycnksIGJvcnJvdywgaSwgbCwgcTtcclxuICAgICAgICBpZiAocmVtYWluZGVyLmxlbmd0aCA8PSBhX2wpIHJlbWFpbmRlci5wdXNoKDApO1xyXG4gICAgICAgIGRpdmlzb3IucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQgPSBkaXZpc29yW2JfbCAtIDFdO1xyXG4gICAgICAgIGZvciAoc2hpZnQgPSBhX2wgLSBiX2w7IHNoaWZ0ID49IDA7IHNoaWZ0LS0pIHtcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IGJhc2UgLSAxO1xyXG4gICAgICAgICAgICBpZiAocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAhPT0gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0ID0gTWF0aC5mbG9vcigocmVtYWluZGVyW3NoaWZ0ICsgYl9sXSAqIGJhc2UgKyByZW1haW5kZXJbc2hpZnQgKyBiX2wgLSAxXSkgLyBkaXZpc29yTW9zdFNpZ25pZmljYW50RGlnaXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHF1b3RpZW50RGlnaXQgPD0gYmFzZSAtIDFcclxuICAgICAgICAgICAgY2FycnkgPSAwO1xyXG4gICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICBsID0gZGl2aXNvci5sZW5ndGg7XHJcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ICs9IHF1b3RpZW50RGlnaXQgKiBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgcSA9IE1hdGguZmxvb3IoY2FycnkgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIChjYXJyeSAtIHEgKiBiYXNlKTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gcTtcclxuICAgICAgICAgICAgICAgIGlmIChib3Jyb3cgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3cgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvdyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGJvcnJvdztcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdoaWxlIChib3Jyb3cgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJyeSArPSByZW1haW5kZXJbc2hpZnQgKyBpXSAtIGJhc2UgKyBkaXZpc29yW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJyeSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeSArIGJhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1haW5kZXJbc2hpZnQgKyBpXSA9IGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9ycm93ICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdFtzaGlmdF0gPSBxdW90aWVudERpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBkZW5vcm1hbGl6YXRpb25cclxuICAgICAgICByZW1haW5kZXIgPSBkaXZNb2RTbWFsbChyZW1haW5kZXIsIGxhbWJkYSlbMF07XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHJlbWFpbmRlcildO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDIoYSwgYikgeyAvLyBJbXBsZW1lbnRhdGlvbiBpZGVhIHNoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIFNpbGVudCBNYXR0J3MgbGlicmFyeSBodHRwOi8vc2lsZW50bWF0dC5jb20vYmlnaW50ZWdlci9cclxuICAgICAgICAvLyBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QxIG9uIGxhcmdlciBpbnB1dCBzaXplcy5cclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByZXN1bHQgPSBbXSxcclxuICAgICAgICAgICAgcGFydCA9IFtdLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgZ3Vlc3MsIHhsZW4sIGhpZ2h4LCBoaWdoeSwgY2hlY2s7XHJcbiAgICAgICAgd2hpbGUgKGFfbCkge1xyXG4gICAgICAgICAgICBwYXJ0LnVuc2hpZnQoYVstLWFfbF0pO1xyXG4gICAgICAgICAgICB0cmltKHBhcnQpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyZUFicyhwYXJ0LCBiKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGxlbiA9IHBhcnQubGVuZ3RoO1xyXG4gICAgICAgICAgICBoaWdoeCA9IHBhcnRbeGxlbiAtIDFdICogYmFzZSArIHBhcnRbeGxlbiAtIDJdO1xyXG4gICAgICAgICAgICBoaWdoeSA9IGJbYl9sIC0gMV0gKiBiYXNlICsgYltiX2wgLSAyXTtcclxuICAgICAgICAgICAgaWYgKHhsZW4gPiBiX2wpIHtcclxuICAgICAgICAgICAgICAgIGhpZ2h4ID0gKGhpZ2h4ICsgMSkgKiBiYXNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGd1ZXNzID0gTWF0aC5jZWlsKGhpZ2h4IC8gaGlnaHkpO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBjaGVjayA9IG11bHRpcGx5U21hbGwoYiwgZ3Vlc3MpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMoY2hlY2ssIHBhcnQpIDw9IDApIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3MtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoZ3Vlc3MpO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChndWVzcyk7XHJcbiAgICAgICAgICAgIHBhcnQgPSBzdWJ0cmFjdChwYXJ0LCBjaGVjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKCk7XHJcbiAgICAgICAgcmV0dXJuIFthcnJheVRvU21hbGwocmVzdWx0KSwgYXJyYXlUb1NtYWxsKHBhcnQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2RTbWFsbCh2YWx1ZSwgbGFtYmRhKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCxcclxuICAgICAgICAgICAgcXVvdGllbnQgPSBjcmVhdGVBcnJheShsZW5ndGgpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgaSwgcSwgcmVtYWluZGVyLCBkaXZpc29yO1xyXG4gICAgICAgIHJlbWFpbmRlciA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgZGl2aXNvciA9IHJlbWFpbmRlciAqIGJhc2UgKyB2YWx1ZVtpXTtcclxuICAgICAgICAgICAgcSA9IHRydW5jYXRlKGRpdmlzb3IgLyBsYW1iZGEpO1xyXG4gICAgICAgICAgICByZW1haW5kZXIgPSBkaXZpc29yIC0gcSAqIGxhbWJkYTtcclxuICAgICAgICAgICAgcXVvdGllbnRbaV0gPSBxIHwgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgcmVtYWluZGVyIHwgMF07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kQW55KHNlbGYsIHYpIHtcclxuICAgICAgICB2YXIgdmFsdWUsIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW25ldyBOYXRpdmVCaWdJbnQoc2VsZi52YWx1ZSAvIG4udmFsdWUpLCBuZXcgTmF0aXZlQmlnSW50KHNlbGYudmFsdWUgJSBuLnZhbHVlKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gc2VsZi52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgdmFyIHF1b3RpZW50O1xyXG4gICAgICAgIGlmIChiID09PSAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGl2aWRlIGJ5IHplcm9cIik7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUoYSAvIGIpKSwgbmV3IFNtYWxsSW50ZWdlcihhICUgYildO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKGIgPT09IDEpIHJldHVybiBbc2VsZiwgSW50ZWdlclswXV07XHJcbiAgICAgICAgICAgIGlmIChiID09IC0xKSByZXR1cm4gW3NlbGYubmVnYXRlKCksIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICB2YXIgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZFNtYWxsKGEsIGFicyk7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudCA9IGFycmF5VG9TbWFsbCh2YWx1ZVswXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVtYWluZGVyID0gdmFsdWVbMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduKSByZW1haW5kZXIgPSAtcmVtYWluZGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNpZ24gIT09IG4uc2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHF1b3RpZW50KSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHNlbGYuc2lnbiAhPT0gbi5zaWduKSwgbmV3IFNtYWxsSW50ZWdlcihyZW1haW5kZXIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFicyhhLCBiKTtcclxuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gLTEpIHJldHVybiBbSW50ZWdlclswXSwgc2VsZl07XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IDApIHJldHVybiBbSW50ZWdlcltzZWxmLnNpZ24gPT09IG4uc2lnbiA/IDEgOiAtMV0sIEludGVnZXJbMF1dO1xyXG5cclxuICAgICAgICAvLyBkaXZNb2QxIGlzIGZhc3RlciBvbiBzbWFsbGVyIGlucHV0IHNpemVzXHJcbiAgICAgICAgaWYgKGEubGVuZ3RoICsgYi5sZW5ndGggPD0gMjAwKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IGRpdk1vZDEoYSwgYik7XHJcbiAgICAgICAgZWxzZSB2YWx1ZSA9IGRpdk1vZDIoYSwgYik7XHJcblxyXG4gICAgICAgIHF1b3RpZW50ID0gdmFsdWVbMF07XHJcbiAgICAgICAgdmFyIHFTaWduID0gc2VsZi5zaWduICE9PSBuLnNpZ24sXHJcbiAgICAgICAgICAgIG1vZCA9IHZhbHVlWzFdLFxyXG4gICAgICAgICAgICBtU2lnbiA9IHNlbGYuc2lnbjtcclxuICAgICAgICBpZiAodHlwZW9mIHF1b3RpZW50ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIGlmIChxU2lnbikgcXVvdGllbnQgPSAtcXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHF1b3RpZW50ID0gbmV3IEJpZ0ludGVnZXIocXVvdGllbnQsIHFTaWduKTtcclxuICAgICAgICBpZiAodHlwZW9mIG1vZCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAobVNpZ24pIG1vZCA9IC1tb2Q7XHJcbiAgICAgICAgICAgIG1vZCA9IG5ldyBTbWFsbEludGVnZXIobW9kKTtcclxuICAgICAgICB9IGVsc2UgbW9kID0gbmV3IEJpZ0ludGVnZXIobW9kLCBtU2lnbik7XHJcbiAgICAgICAgcmV0dXJuIFtxdW90aWVudCwgbW9kXTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBkaXZNb2RBbnkodGhpcywgdik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcXVvdGllbnQ6IHJlc3VsdFswXSxcclxuICAgICAgICAgICAgcmVtYWluZGVyOiByZXN1bHRbMV1cclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZGl2bW9kID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZtb2Q7XHJcblxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIGRpdk1vZEFueSh0aGlzLCB2KVswXTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm92ZXIgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAvIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2aWRlID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3ZlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmRpdmlkZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMV07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2QgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnJlbWFpbmRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAlIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5tb2QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5yZW1haW5kZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgdmFsdWUsIHgsIHk7XHJcbiAgICAgICAgaWYgKGIgPT09IDApIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAwKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gMSkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IC0xKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW4uaXNTbWFsbCkgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGV4cG9uZW50IFwiICsgbi50b1N0cmluZygpICsgXCIgaXMgdG9vIGxhcmdlLlwiKTtcclxuICAgICAgICBpZiAodGhpcy5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUgPSBNYXRoLnBvdyhhLCBiKSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih0cnVuY2F0ZSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gdGhpcztcclxuICAgICAgICB5ID0gSW50ZWdlclsxXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoYiAmIDEgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSAwKSBicmVhaztcclxuICAgICAgICAgICAgYiAvPSAyO1xyXG4gICAgICAgICAgICB4ID0geC5zcXVhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wb3cgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wb3c7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wb3cgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBfMCA9IEJpZ0ludCgwKSwgXzEgPSBCaWdJbnQoMSksIF8yID0gQmlnSW50KDIpO1xyXG4gICAgICAgIGlmIChiID09PSBfMCkgcmV0dXJuIEludGVnZXJbMV07XHJcbiAgICAgICAgaWYgKGEgPT09IF8wKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAoYSA9PT0gXzEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSBCaWdJbnQoLTEpKSByZXR1cm4gbi5pc0V2ZW4oKSA/IEludGVnZXJbMV0gOiBJbnRlZ2VyWy0xXTtcclxuICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkpIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KF8wKTtcclxuICAgICAgICB2YXIgeCA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHkgPSBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoYiAmIF8xKSA9PT0gXzEpIHtcclxuICAgICAgICAgICAgICAgIHkgPSB5LnRpbWVzKHgpO1xyXG4gICAgICAgICAgICAgICAgLS1iO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChiID09PSBfMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gXzI7XHJcbiAgICAgICAgICAgIHggPSB4LnNxdWFyZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5tb2RQb3cgPSBmdW5jdGlvbiAoZXhwLCBtb2QpIHtcclxuICAgICAgICBleHAgPSBwYXJzZVZhbHVlKGV4cCk7XHJcbiAgICAgICAgbW9kID0gcGFyc2VWYWx1ZShtb2QpO1xyXG4gICAgICAgIGlmIChtb2QuaXNaZXJvKCkpIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB0YWtlIG1vZFBvdyB3aXRoIG1vZHVsdXMgMFwiKTtcclxuICAgICAgICB2YXIgciA9IEludGVnZXJbMV0sXHJcbiAgICAgICAgICAgIGJhc2UgPSB0aGlzLm1vZChtb2QpO1xyXG4gICAgICAgIGlmIChleHAuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5tdWx0aXBseShJbnRlZ2VyWy0xXSk7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLm1vZEludihtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aGlsZSAoZXhwLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChleHAuaXNPZGQoKSkgciA9IHIubXVsdGlwbHkoYmFzZSkubW9kKG1vZCk7XHJcbiAgICAgICAgICAgIGV4cCA9IGV4cC5kaXZpZGUoMik7XHJcbiAgICAgICAgICAgIGJhc2UgPSBiYXNlLnNxdWFyZSgpLm1vZChtb2QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZFBvdyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNvbXBhcmVBYnMoYSwgYikge1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEubGVuZ3RoID4gYi5sZW5ndGggPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSBhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gYVtpXSA+IGJbaV0gPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHJldHVybiAxO1xyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gTWF0aC5hYnModGhpcy52YWx1ZSksXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgYiA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZUFicyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICBhID0gYSA+PSAwID8gYSA6IC1hO1xyXG4gICAgICAgIGIgPSBiID49IDAgPyBiIDogLWI7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgLy8gU2VlIGRpc2N1c3Npb24gYWJvdXQgY29tcGFyaXNvbiB3aXRoIEluZmluaXR5OlxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRlcm9sc29uL0JpZ0ludGVnZXIuanMvaXNzdWVzLzYxXHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24gIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbi5zaWduID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNpZ24gPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb21wYXJlQWJzKGEsIGIpICogKHRoaXMuc2lnbiA/IC0xIDogMSk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gQmlnSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhID09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhIDwgMCAhPT0gbi5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhIDwgMCA/IC0xIDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGEgPCAwID8gMSA6IC0xO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZVRvID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgaWYgKHYgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHYgPT09IC1JbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHZhciBiID0gcGFyc2VWYWx1ZSh2KS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gYSA9PT0gYiA/IDAgOiBhID4gYiA/IDEgOiAtMTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZVRvID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5jb21wYXJlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5lcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgIT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5uZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdEVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ub3RFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ndCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ndCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpIDwgMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmx0ID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmx0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlcjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPj0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdlcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA8PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlcSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3Nlck9yRXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWVbMF0gJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzRXZlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiBCaWdJbnQoMSkpID09PSBCaWdJbnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiAxKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZSAmIEJpZ0ludCgxKSkgPT09IEJpZ0ludCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5zaWduO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA+IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1Bvc2l0aXZlID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Bvc2l0aXZlO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPCAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNOZWdhdGl2ZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNOZWdhdGl2ZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyh0aGlzLnZhbHVlKSA9PT0gMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hYnMoKS52YWx1ZSA9PT0gQmlnSW50KDEpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzWmVybyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPT09IEJpZ0ludCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5pc1VuaXQoKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZUFicygyKSA9PT0gMCkgcmV0dXJuIHRoaXMuaXNFdmVuKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kKG4pLmlzWmVybygpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnk7XHJcblxyXG4gICAgZnVuY3Rpb24gaXNCYXNpY1ByaW1lKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHYuYWJzKCk7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5lcXVhbHMoMikgfHwgbi5lcXVhbHMoMykgfHwgbi5lcXVhbHMoNSkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmlzRXZlbigpIHx8IG4uaXNEaXZpc2libGVCeSgzKSB8fCBuLmlzRGl2aXNpYmxlQnkoNSkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobi5sZXNzZXIoNDkpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAvLyB3ZSBkb24ndCBrbm93IGlmIGl0J3MgcHJpbWU6IGxldCB0aGUgb3RoZXIgZnVuY3Rpb25zIGZpZ3VyZSBpdCBvdXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtaWxsZXJSYWJpblRlc3QobiwgYSkge1xyXG4gICAgICAgIHZhciBuUHJldiA9IG4ucHJldigpLFxyXG4gICAgICAgICAgICBiID0gblByZXYsXHJcbiAgICAgICAgICAgIHIgPSAwLFxyXG4gICAgICAgICAgICBkLCB0LCBpLCB4O1xyXG4gICAgICAgIHdoaWxlIChiLmlzRXZlbigpKSBiID0gYi5kaXZpZGUoMiksIHIrKztcclxuICAgICAgICBuZXh0OiBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAobi5sZXNzZXIoYVtpXSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB4ID0gYmlnSW50KGFbaV0pLm1vZFBvdyhiLCBuKTtcclxuICAgICAgICAgICAgaWYgKHguaXNVbml0KCkgfHwgeC5lcXVhbHMoblByZXYpKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZm9yIChkID0gciAtIDE7IGQgIT0gMDsgZC0tKSB7XHJcbiAgICAgICAgICAgICAgICB4ID0geC5zcXVhcmUoKS5tb2Qobik7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5pc1VuaXQoKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguZXF1YWxzKG5QcmV2KSkgY29udGludWUgbmV4dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCBcInN0cmljdFwiIHRvIHRydWUgdG8gZm9yY2UgR1JILXN1cHBvcnRlZCBsb3dlciBib3VuZCBvZiAyKmxvZyhOKV4yXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gZnVuY3Rpb24gKHN0cmljdCkge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKTtcclxuICAgICAgICB2YXIgYml0cyA9IG4uYml0TGVuZ3RoKCk7XHJcbiAgICAgICAgaWYgKGJpdHMgPD0gNjQpXHJcbiAgICAgICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgWzIsIDMsIDUsIDcsIDExLCAxMywgMTcsIDE5LCAyMywgMjksIDMxLCAzN10pO1xyXG4gICAgICAgIHZhciBsb2dOID0gTWF0aC5sb2coMikgKiBiaXRzLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICB2YXIgdCA9IE1hdGguY2VpbCgoc3RyaWN0ID09PSB0cnVlKSA/ICgyICogTWF0aC5wb3cobG9nTiwgMikpIDogbG9nTik7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50KGkgKyAyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtaWxsZXJSYWJpblRlc3QobiwgYSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1ByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1ByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBmdW5jdGlvbiAoaXRlcmF0aW9ucywgcm5nKSB7XHJcbiAgICAgICAgdmFyIGlzUHJpbWUgPSBpc0Jhc2ljUHJpbWUodGhpcyk7XHJcbiAgICAgICAgaWYgKGlzUHJpbWUgIT09IHVuZGVmaW5lZCkgcmV0dXJuIGlzUHJpbWU7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzLmFicygpO1xyXG4gICAgICAgIHZhciB0ID0gaXRlcmF0aW9ucyA9PT0gdW5kZWZpbmVkID8gNSA6IGl0ZXJhdGlvbnM7XHJcbiAgICAgICAgZm9yICh2YXIgYSA9IFtdLCBpID0gMDsgaSA8IHQ7IGkrKykge1xyXG4gICAgICAgICAgICBhLnB1c2goYmlnSW50LnJhbmRCZXR3ZWVuKDIsIG4ubWludXMoMiksIHJuZykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIGEpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWUgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1Byb2JhYmxlUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICB2YXIgdCA9IGJpZ0ludC56ZXJvLCBuZXdUID0gYmlnSW50Lm9uZSwgciA9IHBhcnNlVmFsdWUobiksIG5ld1IgPSB0aGlzLmFicygpLCBxLCBsYXN0VCwgbGFzdFI7XHJcbiAgICAgICAgd2hpbGUgKCFuZXdSLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIHEgPSByLmRpdmlkZShuZXdSKTtcclxuICAgICAgICAgICAgbGFzdFQgPSB0O1xyXG4gICAgICAgICAgICBsYXN0UiA9IHI7XHJcbiAgICAgICAgICAgIHQgPSBuZXdUO1xyXG4gICAgICAgICAgICByID0gbmV3UjtcclxuICAgICAgICAgICAgbmV3VCA9IGxhc3RULnN1YnRyYWN0KHEubXVsdGlwbHkobmV3VCkpO1xyXG4gICAgICAgICAgICBuZXdSID0gbGFzdFIuc3VidHJhY3QocS5tdWx0aXBseShuZXdSKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghci5pc1VuaXQoKSkgdGhyb3cgbmV3IEVycm9yKHRoaXMudG9TdHJpbmcoKSArIFwiIGFuZCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGFyZSBub3QgY28tcHJpbWVcIik7XHJcbiAgICAgICAgaWYgKHQuY29tcGFyZSgwKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdCA9IHQuYWRkKG4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQubmVnYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm1vZEludiA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kSW52ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kSW52O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSArIDEgPCBNQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSArIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgZmFsc2UpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlICsgQmlnSW50KDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwodmFsdWUsIDEpLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwodmFsdWUsIDEsIHRoaXMuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlIC0gMSA+IC1NQVhfSU5UKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSAtIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihNQVhfSU5UX0FSUiwgdHJ1ZSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLSBCaWdJbnQoMSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwb3dlcnNPZlR3byA9IFsxXTtcclxuICAgIHdoaWxlICgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0gPD0gQkFTRSkgcG93ZXJzT2ZUd28ucHVzaCgyICogcG93ZXJzT2ZUd29bcG93ZXJzT2ZUd28ubGVuZ3RoIC0gMV0pO1xyXG4gICAgdmFyIHBvd2VyczJMZW5ndGggPSBwb3dlcnNPZlR3by5sZW5ndGgsIGhpZ2hlc3RQb3dlcjIgPSBwb3dlcnNPZlR3b1twb3dlcnMyTGVuZ3RoIC0gMV07XHJcblxyXG4gICAgZnVuY3Rpb24gc2hpZnRfaXNTbWFsbChuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKG4pIDw9IEJBU0U7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodikudG9KU051bWJlcigpO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRSaWdodCgtbik7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tdWx0aXBseShoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgbiAtPSBwb3dlcnMyTGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5tdWx0aXBseShwb3dlcnNPZlR3b1tuXSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdExlZnQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVtUXVvO1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgaWYgKCFzaGlmdF9pc1NtYWxsKG4pKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcobikgKyBcIiBpcyB0b28gbGFyZ2UgZm9yIHNoaWZ0aW5nLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPCAwKSByZXR1cm4gdGhpcy5zaGlmdExlZnQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIHdoaWxlIChuID49IHBvd2VyczJMZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5pc1plcm8oKSB8fCAocmVzdWx0LmlzTmVnYXRpdmUoKSAmJiByZXN1bHQuaXNVbml0KCkpKSByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbVF1byA9IGRpdk1vZEFueShyZXN1bHQsIHBvd2Vyc09mVHdvW25dKTtcclxuICAgICAgICByZXR1cm4gcmVtUXVvWzFdLmlzTmVnYXRpdmUoKSA/IHJlbVF1b1swXS5wcmV2KCkgOiByZW1RdW9bMF07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdFJpZ2h0ID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodDtcclxuXHJcbiAgICBmdW5jdGlvbiBiaXR3aXNlKHgsIHksIGZuKSB7XHJcbiAgICAgICAgeSA9IHBhcnNlVmFsdWUoeSk7XHJcbiAgICAgICAgdmFyIHhTaWduID0geC5pc05lZ2F0aXZlKCksIHlTaWduID0geS5pc05lZ2F0aXZlKCk7XHJcbiAgICAgICAgdmFyIHhSZW0gPSB4U2lnbiA/IHgubm90KCkgOiB4LFxyXG4gICAgICAgICAgICB5UmVtID0geVNpZ24gPyB5Lm5vdCgpIDogeTtcclxuICAgICAgICB2YXIgeERpZ2l0ID0gMCwgeURpZ2l0ID0gMDtcclxuICAgICAgICB2YXIgeERpdk1vZCA9IG51bGwsIHlEaXZNb2QgPSBudWxsO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuICAgICAgICB3aGlsZSAoIXhSZW0uaXNaZXJvKCkgfHwgIXlSZW0uaXNaZXJvKCkpIHtcclxuICAgICAgICAgICAgeERpdk1vZCA9IGRpdk1vZEFueSh4UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeERpZ2l0ID0geERpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh4U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeERpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB4RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeURpdk1vZCA9IGRpdk1vZEFueSh5UmVtLCBoaWdoZXN0UG93ZXIyKTtcclxuICAgICAgICAgICAgeURpZ2l0ID0geURpdk1vZFsxXS50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh5U2lnbikge1xyXG4gICAgICAgICAgICAgICAgeURpZ2l0ID0gaGlnaGVzdFBvd2VyMiAtIDEgLSB5RGlnaXQ7IC8vIHR3bydzIGNvbXBsZW1lbnQgZm9yIG5lZ2F0aXZlIG51bWJlcnNcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgeFJlbSA9IHhEaXZNb2RbMF07XHJcbiAgICAgICAgICAgIHlSZW0gPSB5RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChmbih4RGlnaXQsIHlEaWdpdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3VtID0gZm4oeFNpZ24gPyAxIDogMCwgeVNpZ24gPyAxIDogMCkgIT09IDAgPyBiaWdJbnQoLTEpIDogYmlnSW50KDApO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSByZXN1bHQubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC09IDEpIHtcclxuICAgICAgICAgICAgc3VtID0gc3VtLm11bHRpcGx5KGhpZ2hlc3RQb3dlcjIpLmFkZChiaWdJbnQocmVzdWx0W2ldKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdW07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5lZ2F0ZSgpLnByZXYoKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5vdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90ID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZCA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgJiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmFuZCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuYW5kID0gQmlnSW50ZWdlci5wcm90b3R5cGUuYW5kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSB8IGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUub3IgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUub3I7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUueG9yID0gZnVuY3Rpb24gKG4pIHtcclxuICAgICAgICByZXR1cm4gYml0d2lzZSh0aGlzLCBuLCBmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYSBeIGI7IH0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUueG9yID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS54b3IgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS54b3I7XHJcblxyXG4gICAgdmFyIExPQk1BU0tfSSA9IDEgPDwgMzAsIExPQk1BU0tfQkkgPSAoQkFTRSAmIC1CQVNFKSAqIChCQVNFICYgLUJBU0UpIHwgTE9CTUFTS19JO1xyXG4gICAgZnVuY3Rpb24gcm91Z2hMT0IobikgeyAvLyBnZXQgbG93ZXN0T25lQml0IChyb3VnaClcclxuICAgICAgICAvLyBTbWFsbEludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDMwKVxyXG4gICAgICAgIC8vIEJpZ0ludGVnZXI6IHJldHVybiBNaW4obG93ZXN0T25lQml0KG4pLCAxIDw8IDE0KSBbQkFTRT0xZTddXHJcbiAgICAgICAgdmFyIHYgPSBuLnZhbHVlLFxyXG4gICAgICAgICAgICB4ID0gdHlwZW9mIHYgPT09IFwibnVtYmVyXCIgPyB2IHwgTE9CTUFTS19JIDpcclxuICAgICAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcImJpZ2ludFwiID8gdiB8IEJpZ0ludChMT0JNQVNLX0kpIDpcclxuICAgICAgICAgICAgICAgICAgICB2WzBdICsgdlsxXSAqIEJBU0UgfCBMT0JNQVNLX0JJO1xyXG4gICAgICAgIHJldHVybiB4ICYgLXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZSkge1xyXG4gICAgICAgIGlmIChiYXNlLmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCkge1xyXG4gICAgICAgICAgICB2YXIgdG1wID0gaW50ZWdlckxvZ2FyaXRobSh2YWx1ZSwgYmFzZS5zcXVhcmUoYmFzZSkpO1xyXG4gICAgICAgICAgICB2YXIgcCA9IHRtcC5wO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRtcC5lO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHAubXVsdGlwbHkoYmFzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmNvbXBhcmVUbyh2YWx1ZSkgPD0gMCA/IHsgcDogdCwgZTogZSAqIDIgKyAxIH0gOiB7IHA6IHAsIGU6IGUgKiAyIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHA6IGJpZ0ludCgxKSwgZTogMCB9O1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKG4uY29tcGFyZVRvKGJpZ0ludCgwKSkgPCAwKSB7XHJcbiAgICAgICAgICAgIG4gPSBuLm5lZ2F0ZSgpLnN1YnRyYWN0KGJpZ0ludCgxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBiaWdJbnQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiaWdJbnQoaW50ZWdlckxvZ2FyaXRobShuLCBiaWdJbnQoMikpLmUpLmFkZChiaWdJbnQoMSkpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5iaXRMZW5ndGggPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmJpdExlbmd0aDtcclxuXHJcbiAgICBmdW5jdGlvbiBtYXgoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmdyZWF0ZXIoYikgPyBhIDogYjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbihhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYik7XHJcbiAgICAgICAgcmV0dXJuIGEubGVzc2VyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBnY2QoYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpLmFicygpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpLmFicygpO1xyXG4gICAgICAgIGlmIChhLmVxdWFscyhiKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgaWYgKGEuaXNaZXJvKCkpIHJldHVybiBiO1xyXG4gICAgICAgIGlmIChiLmlzWmVybygpKSByZXR1cm4gYTtcclxuICAgICAgICB2YXIgYyA9IEludGVnZXJbMV0sIGQsIHQ7XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkgJiYgYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICBkID0gbWluKHJvdWdoTE9CKGEpLCByb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYiA9IGIuZGl2aWRlKGQpO1xyXG4gICAgICAgICAgICBjID0gYy5tdWx0aXBseShkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGEuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgYSA9IGEuZGl2aWRlKHJvdWdoTE9CKGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkge1xyXG4gICAgICAgICAgICAgICAgYiA9IGIuZGl2aWRlKHJvdWdoTE9CKGIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYS5ncmVhdGVyKGIpKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gYjsgYiA9IGE7IGEgPSB0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGIgPSBiLnN1YnRyYWN0KGEpO1xyXG4gICAgICAgIH0gd2hpbGUgKCFiLmlzWmVybygpKTtcclxuICAgICAgICByZXR1cm4gYy5pc1VuaXQoKSA/IGEgOiBhLm11bHRpcGx5KGMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbGNtKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICByZXR1cm4gYS5kaXZpZGUoZ2NkKGEsIGIpKS5tdWx0aXBseShiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHJhbmRCZXR3ZWVuKGEsIGIsIHJuZykge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHZhciB1c2VkUk5HID0gcm5nIHx8IE1hdGgucmFuZG9tO1xyXG4gICAgICAgIHZhciBsb3cgPSBtaW4oYSwgYiksIGhpZ2ggPSBtYXgoYSwgYik7XHJcbiAgICAgICAgdmFyIHJhbmdlID0gaGlnaC5zdWJ0cmFjdChsb3cpLmFkZCgxKTtcclxuICAgICAgICBpZiAocmFuZ2UuaXNTbWFsbCkgcmV0dXJuIGxvdy5hZGQoTWF0aC5mbG9vcih1c2VkUk5HKCkgKiByYW5nZSkpO1xyXG4gICAgICAgIHZhciBkaWdpdHMgPSB0b0Jhc2UocmFuZ2UsIEJBU0UpLnZhbHVlO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXSwgcmVzdHJpY3RlZCA9IHRydWU7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWdpdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRvcCA9IHJlc3RyaWN0ZWQgPyBkaWdpdHNbaV0gOiBCQVNFO1xyXG4gICAgICAgICAgICB2YXIgZGlnaXQgPSB0cnVuY2F0ZSh1c2VkUk5HKCkgKiB0b3ApO1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChkaWdpdCk7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdCA8IHRvcCkgcmVzdHJpY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbG93LmFkZChJbnRlZ2VyLmZyb21BcnJheShyZXN1bHQsIEJBU0UsIGZhbHNlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBhcnNlQmFzZSA9IGZ1bmN0aW9uICh0ZXh0LCBiYXNlLCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIGFscGhhYmV0ID0gYWxwaGFiZXQgfHwgREVGQVVMVF9BTFBIQUJFVDtcclxuICAgICAgICB0ZXh0ID0gU3RyaW5nKHRleHQpO1xyXG4gICAgICAgIGlmICghY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0LnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsZW5ndGggPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgYWJzQmFzZSA9IE1hdGguYWJzKGJhc2UpO1xyXG4gICAgICAgIHZhciBhbHBoYWJldFZhbHVlcyA9IHt9O1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbHBoYWJldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBhbHBoYWJldFZhbHVlc1thbHBoYWJldFtpXV0gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGMgPSB0ZXh0W2ldO1xyXG4gICAgICAgICAgICBpZiAoYyA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYyBpbiBhbHBoYWJldFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhYmV0VmFsdWVzW2NdID49IGFic0Jhc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gXCIxXCIgJiYgYWJzQmFzZSA9PT0gMSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBkaWdpdCBpbiBiYXNlIFwiICsgYmFzZSArIFwiLlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlID0gcGFyc2VWYWx1ZShiYXNlKTtcclxuICAgICAgICB2YXIgZGlnaXRzID0gW107XHJcbiAgICAgICAgdmFyIGlzTmVnYXRpdmUgPSB0ZXh0WzBdID09PSBcIi1cIjtcclxuICAgICAgICBmb3IgKGkgPSBpc05lZ2F0aXZlID8gMSA6IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGMgaW4gYWxwaGFiZXRWYWx1ZXMpIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUoYWxwaGFiZXRWYWx1ZXNbY10pKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYyA9PT0gXCI8XCIpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzdGFydCA9IGk7XHJcbiAgICAgICAgICAgICAgICBkbyB7IGkrKzsgfSB3aGlsZSAodGV4dFtpXSAhPT0gXCI+XCIgJiYgaSA8IHRleHQubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGRpZ2l0cy5wdXNoKHBhcnNlVmFsdWUodGV4dC5zbGljZShzdGFydCArIDEsIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aHJvdyBuZXcgRXJyb3IoYyArIFwiIGlzIG5vdCBhIHZhbGlkIGNoYXJhY3RlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgdmFyIHZhbCA9IEludGVnZXJbMF0sIHBvdyA9IEludGVnZXJbMV0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gZGlnaXRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgIHZhbCA9IHZhbC5hZGQoZGlnaXRzW2ldLnRpbWVzKHBvdykpO1xyXG4gICAgICAgICAgICBwb3cgPSBwb3cudGltZXMoYmFzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpc05lZ2F0aXZlID8gdmFsLm5lZ2F0ZSgpIDogdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0cmluZ2lmeShkaWdpdCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0IHx8IERFRkFVTFRfQUxQSEFCRVQ7XHJcbiAgICAgICAgaWYgKGRpZ2l0IDwgYWxwaGFiZXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhbHBoYWJldFtkaWdpdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjxcIiArIGRpZ2l0ICsgXCI+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdG9CYXNlKG4sIGJhc2UpIHtcclxuICAgICAgICBiYXNlID0gYmlnSW50KGJhc2UpO1xyXG4gICAgICAgIGlmIChiYXNlLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgY29udmVydCBub256ZXJvIG51bWJlcnMgdG8gYmFzZSAwLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuZXF1YWxzKC0xKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBBcnJheS5hcHBseShudWxsLCBBcnJheSgtbi50b0pTTnVtYmVyKCkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKEFycmF5LnByb3RvdHlwZS52YWx1ZU9mLCBbMSwgMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcnIgPSBBcnJheS5hcHBseShudWxsLCBBcnJheShuLnRvSlNOdW1iZXIoKSAtIDEpKVxyXG4gICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzAsIDFdKTtcclxuICAgICAgICAgICAgYXJyLnVuc2hpZnQoWzFdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBbXS5jb25jYXQuYXBwbHkoW10sIGFyciksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBmYWxzZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5lZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSAmJiBiYXNlLmlzUG9zaXRpdmUoKSkge1xyXG4gICAgICAgICAgICBuZWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBuID0gbi5hYnMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJhc2UuaXNVbml0KCkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KG4udG9KU051bWJlcigpKSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKE51bWJlci5wcm90b3R5cGUudmFsdWVPZiwgMSksXHJcbiAgICAgICAgICAgICAgICBpc05lZ2F0aXZlOiBuZWdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG91dCA9IFtdO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gbiwgZGl2bW9kO1xyXG4gICAgICAgIHdoaWxlIChsZWZ0LmlzTmVnYXRpdmUoKSB8fCBsZWZ0LmNvbXBhcmVBYnMoYmFzZSkgPj0gMCkge1xyXG4gICAgICAgICAgICBkaXZtb2QgPSBsZWZ0LmRpdm1vZChiYXNlKTtcclxuICAgICAgICAgICAgbGVmdCA9IGRpdm1vZC5xdW90aWVudDtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gZGl2bW9kLnJlbWFpbmRlcjtcclxuICAgICAgICAgICAgaWYgKGRpZ2l0LmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgZGlnaXQgPSBiYXNlLm1pbnVzKGRpZ2l0KS5hYnMoKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSBsZWZ0Lm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvdXQucHVzaChkaWdpdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXQucHVzaChsZWZ0LnRvSlNOdW1iZXIoKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG91dC5yZXZlcnNlKCksIGlzTmVnYXRpdmU6IG5lZyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZVN0cmluZyhuLCBiYXNlLCBhbHBoYWJldCkge1xyXG4gICAgICAgIHZhciBhcnIgPSB0b0Jhc2UobiwgYmFzZSk7XHJcbiAgICAgICAgcmV0dXJuIChhcnIuaXNOZWdhdGl2ZSA/IFwiLVwiIDogXCJcIikgKyBhcnIudmFsdWUubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnkoeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT09IDEwKSByZXR1cm4gdG9CYXNlU3RyaW5nKHRoaXMsIHJhZGl4LCBhbHBoYWJldCk7XHJcbiAgICAgICAgdmFyIHYgPSB0aGlzLnZhbHVlLCBsID0gdi5sZW5ndGgsIHN0ciA9IFN0cmluZyh2Wy0tbF0pLCB6ZXJvcyA9IFwiMDAwMDAwMFwiLCBkaWdpdDtcclxuICAgICAgICB3aGlsZSAoLS1sID49IDApIHtcclxuICAgICAgICAgICAgZGlnaXQgPSBTdHJpbmcodltsXSk7XHJcbiAgICAgICAgICAgIHN0ciArPSB6ZXJvcy5zbGljZShkaWdpdC5sZW5ndGgpICsgZGlnaXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdGhpcy5zaWduID8gXCItXCIgOiBcIlwiO1xyXG4gICAgICAgIHJldHVybiBzaWduICsgc3RyO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKHJhZGl4LCBhbHBoYWJldCkge1xyXG4gICAgICAgIGlmIChyYWRpeCA9PT0gdW5kZWZpbmVkKSByYWRpeCA9IDEwO1xyXG4gICAgICAgIGlmIChyYWRpeCAhPSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy52YWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLnRvU3RyaW5nO1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9KU09OID0gQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnRvU3RyaW5nKCk7IH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH07XHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuXHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnZhbHVlT2YgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b0pTTnVtYmVyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mO1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS50b0pTTnVtYmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnRvU3RyaW5nKCksIDEwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZVN0cmluZ1ZhbHVlKHYpIHtcclxuICAgICAgICBpZiAoaXNQcmVjaXNlKCt2KSkge1xyXG4gICAgICAgICAgICB2YXIgeCA9ICt2O1xyXG4gICAgICAgICAgICBpZiAoeCA9PT0gdHJ1bmNhdGUoeCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwcG9ydHNOYXRpdmVCaWdJbnQgPyBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh4KSkgOiBuZXcgU21hbGxJbnRlZ2VyKHgpO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaWduID0gdlswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgaWYgKHNpZ24pIHYgPSB2LnNsaWNlKDEpO1xyXG4gICAgICAgIHZhciBzcGxpdCA9IHYuc3BsaXQoL2UvaSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA+IDIpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyBzcGxpdC5qb2luKFwiZVwiKSk7XHJcbiAgICAgICAgaWYgKHNwbGl0Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgZXhwID0gc3BsaXRbMV07XHJcbiAgICAgICAgICAgIGlmIChleHBbMF0gPT09IFwiK1wiKSBleHAgPSBleHAuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIGV4cCA9ICtleHA7XHJcbiAgICAgICAgICAgIGlmIChleHAgIT09IHRydW5jYXRlKGV4cCkgfHwgIWlzUHJlY2lzZShleHApKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgZXhwICsgXCIgaXMgbm90IGEgdmFsaWQgZXhwb25lbnQuXCIpO1xyXG4gICAgICAgICAgICB2YXIgdGV4dCA9IHNwbGl0WzBdO1xyXG4gICAgICAgICAgICB2YXIgZGVjaW1hbFBsYWNlID0gdGV4dC5pbmRleE9mKFwiLlwiKTtcclxuICAgICAgICAgICAgaWYgKGRlY2ltYWxQbGFjZSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBleHAgLT0gdGV4dC5sZW5ndGggLSBkZWNpbWFsUGxhY2UgLSAxO1xyXG4gICAgICAgICAgICAgICAgdGV4dCA9IHRleHQuc2xpY2UoMCwgZGVjaW1hbFBsYWNlKSArIHRleHQuc2xpY2UoZGVjaW1hbFBsYWNlICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV4cCA8IDApIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBpbmNsdWRlIG5lZ2F0aXZlIGV4cG9uZW50IHBhcnQgZm9yIGludGVnZXJzXCIpO1xyXG4gICAgICAgICAgICB0ZXh0ICs9IChuZXcgQXJyYXkoZXhwICsgMSkpLmpvaW4oXCIwXCIpO1xyXG4gICAgICAgICAgICB2ID0gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGlzVmFsaWQgPSAvXihbMC05XVswLTldKikkLy50ZXN0KHYpO1xyXG4gICAgICAgIGlmICghaXNWYWxpZCkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQoc2lnbiA/IFwiLVwiICsgdiA6IHYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHIgPSBbXSwgbWF4ID0gdi5sZW5ndGgsIGwgPSBMT0dfQkFTRSwgbWluID0gbWF4IC0gbDtcclxuICAgICAgICB3aGlsZSAobWF4ID4gMCkge1xyXG4gICAgICAgICAgICByLnB1c2goK3Yuc2xpY2UobWluLCBtYXgpKTtcclxuICAgICAgICAgICAgbWluIC09IGw7XHJcbiAgICAgICAgICAgIGlmIChtaW4gPCAwKSBtaW4gPSAwO1xyXG4gICAgICAgICAgICBtYXggLT0gbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpbShyKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VOdW1iZXJWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHN1cHBvcnRzTmF0aXZlQmlnSW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KEJpZ0ludCh2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodikpIHtcclxuICAgICAgICAgICAgaWYgKHYgIT09IHRydW5jYXRlKHYpKSB0aHJvdyBuZXcgRXJyb3IodiArIFwiIGlzIG5vdCBhbiBpbnRlZ2VyLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZU51bWJlclZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3RyaW5nVmFsdWUodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJiaWdpbnRcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHY7XHJcbiAgICB9XHJcbiAgICAvLyBQcmUtZGVmaW5lIG51bWJlcnMgaW4gcmFuZ2UgWy05OTksOTk5XVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcclxuICAgICAgICBJbnRlZ2VyW2ldID0gcGFyc2VWYWx1ZShpKTtcclxuICAgICAgICBpZiAoaSA+IDApIEludGVnZXJbLWldID0gcGFyc2VWYWx1ZSgtaSk7XHJcbiAgICB9XHJcbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxyXG4gICAgSW50ZWdlci5vbmUgPSBJbnRlZ2VyWzFdO1xyXG4gICAgSW50ZWdlci56ZXJvID0gSW50ZWdlclswXTtcclxuICAgIEludGVnZXIubWludXNPbmUgPSBJbnRlZ2VyWy0xXTtcclxuICAgIEludGVnZXIubWF4ID0gbWF4O1xyXG4gICAgSW50ZWdlci5taW4gPSBtaW47XHJcbiAgICBJbnRlZ2VyLmdjZCA9IGdjZDtcclxuICAgIEludGVnZXIubGNtID0gbGNtO1xyXG4gICAgSW50ZWdlci5pc0luc3RhbmNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggaW5zdGFuY2VvZiBCaWdJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBTbWFsbEludGVnZXIgfHwgeCBpbnN0YW5jZW9mIE5hdGl2ZUJpZ0ludDsgfTtcclxuICAgIEludGVnZXIucmFuZEJldHdlZW4gPSByYW5kQmV0d2VlbjtcclxuXHJcbiAgICBJbnRlZ2VyLmZyb21BcnJheSA9IGZ1bmN0aW9uIChkaWdpdHMsIGJhc2UsIGlzTmVnYXRpdmUpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cy5tYXAocGFyc2VWYWx1ZSksIHBhcnNlVmFsdWUoYmFzZSB8fCAxMCksIGlzTmVnYXRpdmUpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gSW50ZWdlcjtcclxufSkoKTtcclxuXHJcbi8vIE5vZGUuanMgY2hlY2tcclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmhhc093blByb3BlcnR5KFwiZXhwb3J0c1wiKSkge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBiaWdJbnQ7XHJcbn1cclxuXHJcbi8vYW1kIGNoZWNrXHJcbmlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG4gICAgZGVmaW5lKCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpZ0ludDtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycikge1xuICAgIC8qIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1MDMwMTE3IFxuICAgIENyZWRpdHMgdG86IE5vYWggRnJlaXRhcyAqL1xuICByZXR1cm4gYXJyLnJlZHVjZShmdW5jdGlvbiAoZmxhdCwgdG9GbGF0dGVuKSB7XG4gICAgcmV0dXJuIGZsYXQuY29uY2F0KEFycmF5LmlzQXJyYXkodG9GbGF0dGVuKSA/IGZsYXR0ZW4odG9GbGF0dGVuKSA6IHRvRmxhdHRlbik7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGUoYXJyLG9iaikge1xuICAgIC8qICBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNDM4NjNcbiAgICBDcmVkaXRzIHRvOiBWaW5rbyBWcnNhbG92aWMgKi9cbiAgICByZXR1cm4gKGFyci5pbmRleE9mKG9iaikgIT0gLTEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlNb3ZlSXRlbShhcnIsIGZyb20sIHRvKSB7XG4gIGFyci5zcGxpY2UodG8sIDAsIGFyci5zcGxpY2UoZnJvbSwgMSlbMF0pO1xufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgcGVybXV0ZUFycmF5ID0gaW5wdXRBcnJheSA9PiBpbnB1dEFycmF5LnJlZHVjZShmdW5jdGlvbiBwZXJtdXRlKHJlcywgaXRlbSwga2V5LCBhcnIpIHtcbiAgLyogUGVybXV0YXRpb24gYWxnb3JpdGhtIGZvciBhcnJheXMgb2YgYXJiaXRyYXJ5IGxlbmd0aFxuICAgICAoY3JlZGl0cyAmIHRoYW5rcyB0byB1c2VyIG1vbmtleTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyMDYzNDQwKSAqL1xuICAgIHJldHVybiByZXMuY29uY2F0KGFyci5sZW5ndGggPiAxICYmIGFyci5zbGljZSgwLCBrZXkpXG4gICAgICAuY29uY2F0KGFyci5zbGljZShrZXkgKyAxKSlcbiAgICAgIC5yZWR1Y2UocGVybXV0ZSwgW10pXG4gICAgICAubWFwKGZ1bmN0aW9uKHBlcm0pIHsgcmV0dXJuIFtpdGVtXS5jb25jYXQocGVybSk7IH0pIHx8IFtbaXRlbV1dKTtcbn0sIFtdKTsiLCJpbXBvcnQgKiBhcyBiaWdJbnQgZnJvbSAnYmlnLWludGVnZXInO1xuLy8gY29uc3QgYmlnSW50ID0gcmVxdWlyZSgnYmlnLWludGVnZXInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpZ0ludFRvU2NpTm90YXRpb24obiwgZnJhY3Rpb25EaWdpdHM9MikgeyBcblx0LyogU2NpZW50aWZpYyBub3RhdGlvbiBmb3IgQmlnSW50IG51bWJlcnMgKG5lZWRzIHNvbWUgb3B0aW1pemF0aW9uKSAqL1xuXHRjb25zdCBuU3RyID0gbi50b1N0cmluZygxMCk7XG5cdGNvbnN0IG5MZW4gPSBuU3RyLmxlbmd0aDtcblx0Y29uc3QgZnJhY3Rpb24gPSBuTGVuLTEgPCAxNiA/IG5MZW4tMSA6IDE2O1xuXHRjb25zdCBbd2hvbGVzLCBwYXJ0c10gPSBbblN0ci5zdWJzdHIoMCwxKSwgbkxlbiA+IDEgPyBuU3RyLnN1YnN0cigxLGZyYWN0aW9uKSA6IDBdO1xuXHRsZXQgbkZsb2F0ID0gcGFyc2VGbG9hdCh3aG9sZXMrJy4nK3BhcnRzKTtcblx0bkZsb2F0ID0gbkZsb2F0LnRvUHJlY2lzaW9uKCAoZnJhY3Rpb25EaWdpdHMrMSA+IHBhcnRzLmxlbmd0aCA/IDIgOiBmcmFjdGlvbkRpZ2l0cysxKSApO1xuXHRyZXR1cm4gdGV4YFxcYXBwcm94ICR7bkZsb2F0fSBcXHRpbWVzIDEwXnske25MZW4tMX19YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUJpZ0ludChtYXgpIHtcblx0cmV0dXJuIGJpZ0ludC5yYW5kQmV0d2VlbigwLG1heCk7XG59XG5cbiIsImV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZShvLGZ1bmMpIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MjI2NjgvdHJhdmVyc2UtYWxsLXRoZS1ub2Rlcy1vZi1hLWpzb24tb2JqZWN0LXRyZWUtd2l0aC1qYXZhc2NyaXB0IFxuICAgIENyZWRpdHMgdG86IFRoZUhpcHBvICovXG4gICAgZm9yICh2YXIgaSBpbiBvKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkobnVsbCxbaSxvW2ldXSk7ICAvLyBudWxsIG9yIHRoaXM/XG4gICAgICAgIGlmIChvW2ldICE9PSBudWxsICYmIHR5cGVvZihvW2ldKT09XCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy9nb2luZyBvbmUgc3RlcCBkb3duIGluIHRoZSBvYmplY3QgdHJlZSEhXG4gICAgICAgICAgICB0cmF2ZXJzZShvW2ldLGZ1bmMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgcmV2ZXJzZU1hcHBpbmcgPSAobyxiaWplY3RpdmU9ZmFsc2UpID0+IE9iamVjdC5rZXlzKG8pLnJlZHVjZSgociwgaykgPT4gT2JqZWN0LmFzc2lnbihyLCB7IFtvW2tdXTogKGJpamVjdGl2ZSA/IGsgOiAocltvW2tdXSB8fCBbXSkuY29uY2F0KGspKSB9KSwge30pOyAvLyBtb2RpZmllZCBmcm9tIGFuc3dlciBieSBOaW5hIFNjaG9sejogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ1NzI4ODUwIiwiZXhwb3J0IGZ1bmN0aW9uIHBhZChudW0sIHNpemUpIHtcbiAgICAvKiBwYWRzIDBzIGJlZm9yZSBudW1iZXIgc3RyaW5nXG4gICAgICAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk5ODgyMlxuICAgICAgIENyZWRpdHMgdG86IEluZmluaXRpZXNMb29wICovXG5cbiAgICB2YXIgcyA9IG51bStcIlwiOyAvLyBjb252ZXJ0cyBudW1iZXIgdG8gc3RyaW5nIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG4gICAgd2hpbGUgKHMubGVuZ3RoIDwgc2l6ZSkgcyA9IFwiMFwiICsgcztcbiAgICByZXR1cm4gcztcbn1cblxuLy8gZm9ybWVyIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUFsbFxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBbGwoc3RyLCBmaW5kLCByZXBsYWNlLCBlc2NhcGVNZXRhKSB7XG4gICAgLyogIE1vZGlmaWVkIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExNDQ3ODMvaG93LXRvLXJlcGxhY2UtYWxsLW9jY3VycmVuY2VzLW9mLWEtc3RyaW5nLWluLWphdmFzY3JpcHQgXG4gICAgQ3JlZGl0cyB0bzogU2VhbiBCcmlnaHQgKi9cbiAgICBpZihlc2NhcGVNZXRhKSBmaW5kID0gZXNjYXBlUmVnRXhwKGZpbmQpO1xuICAgIHJldHVybiBzdHIucmVwbGFjZShuZXcgUmVnRXhwKGZpbmQsICdnJyksIHJlcGxhY2UpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVzY2FwZVJlZ0V4cChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLiorP149IToke30oKXxcXFtcXF1cXC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG5cbi8vIGZvcm1lciBTdHJpbmcucHJvdG90eXBlLmFkZEJlZm9yZVxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJlZm9yZShzdHIsIGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyBzdHIuc3Vic3RyKGluZGV4KTtcbn1cblxuLy8gZm9ybWVyIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZUF0XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUF0KHN0ciwgaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgaW5kZXgpICsgcmVwbGFjZW1lbnQrIHN0ci5zdWJzdHIoaW5kZXggKyByZXBsYWNlbWVudC5sZW5ndGgpO1xufVxuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgdHJ1bmNhdGVTdHIgPSAoc3RyLGxpbWl0LGFwcGVuZGl4PScnKSA9PiBzdHIubGVuZ3RoID4gbGltaXQgPyAoc3RyLnN1YnN0cigwLGxpbWl0KSArIGFwcGVuZGl4KSA6IHN0cjtcblxuXG4vKiBCcmVha3Mgc3RyaW5nIHVwIGluIHBhcnRzIG9mIGxlbmd0aCBuICh4IDw9IG4gZm9yIHRoZSBsYXN0IHBhcnQpIFxuICAgZnJvbTogaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5leHBvcnQgY29uc3QgYnJlYWtTdHIgPSAoc3RyLG49MSkgPT4gWy4uLm5ldyBBcnJheShNYXRoLmNlaWwoc3RyLmxlbmd0aC9uKSldLm1hcCgoZCxpKSA9PiBzdHIuc3Vic3RyKG4qaSxuKSk7XG5cbiIsIi8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIEFkZGl0aW9ucyAxMC8yMDIwIGZyb206XG4gICAgaHR0cHM6Ly9vYnNlcnZhYmxlaHEuY29tL0Bmb3Jtc2FuZGxpbmVzL2pzLXRvb2xib3hcbiovXG5cbmV4cG9ydCBjb25zdCBjaGVja0JyYWNrZXRNYXRjaGluZyA9IChzdHIsIG9wZW5Ccj0nKCcsIGNsb3NlQnI9JyknKSA9PiB7XG4gICAgaWYgKHN0ci5sZW5ndGggPT09IDApIHJldHVybiB0cnVlOyAvLyBlbXB0eSBzdHJpbmdzIGNhbid0IGhhdmUgYnJhY2tldHMsIHNvIHRoYXQncyBmaW5lXG4gICAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmVkdWNlKChhY2MsY3VycixpZHgsYXJyKSA9PiB7XG4gICAgICBpZiAoY3VyciA9PT0gb3BlbkJyKSBhY2MrKztcbiAgICAgIGVsc2UgaWYgKGN1cnIgPT09IGNsb3NlQnIpIHtcbiAgICAgICAgaWYgKGFjYyA9PT0gbnVsbCkgcmV0dXJuIE5hTjtcbiAgICAgICAgYWNjLS07XG4gICAgICAgIH1cbiAgICAgIGlmIChpZHggPT09IGFyci5sZW5ndGgtMSAmJiBhY2MgPT09IG51bGwpIHJldHVybiAwO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LG51bGwpID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9O1xuICBcbmV4cG9ydCBjb25zdCBlcXVhbEFycmF5cyA9IChhcnJBLCBhcnJCKSA9PiB7XG4gICAgaWYgKGFyckEgPT09IHVuZGVmaW5lZCB8fCBhcnJCID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gYXJyQS5sZW5ndGggPT09IGFyckIubGVuZ3RoICYmIGFyckEuZXZlcnkoYSA9PiBhcnJCLnNvbWUoYiA9PiBhID09PSBiKSk7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWYWxpZGF0aW9uID0gKGZuLCBlcnJvck1zZykgPT4gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjYXRhOiBicmFuY2ggPT4gcmVzdWx0ID8gYnJhbmNoLnN1Y2Nlc3MocmVzdWx0KSA6IGJyYW5jaC5lcnJvcihlcnJvck1zZylcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlTGl0ZXJhbHMgPSAoc3RyLCBzZXA9J1wiJywgcmVwbD0n4oC9JykgPT4ge1xuICAgIGlmICghY2hlY2tMaXRlcmFsTWF0Y2hpbmcoc3RyLCBzZXApKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBzdHJTZXAgPSBzdHIuc3BsaXQoc2VwKTtcbiAgICByZXR1cm4gc3RyU2VwLmZpbHRlcigoc3Vic3RyLGksYXJyKSA9PiBpICUgMiA9PT0gMCB8fCBpID09PSBhcnIubGVuZ3RoLTEpLmpvaW4ocmVwbCk7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0xpdGVyYWxNYXRjaGluZyA9IChzdHIsIHNlcD0nXCInKSA9PiB7XG4gICAgY29uc3Qgc3RyU2VwID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgcmV0dXJuIHN0clNlcC5sZW5ndGggJSAyID09PSAxO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEJyYWNrZXRVbml0cyA9IChmb3JtdWxhLCBicj17b3BlbjoneycsIGNsb3NlOid9J30sIG1hdGNoZXM9W10pID0+IHtcbiAgICBjb25zdCByZUVudHJpZXMgPSBmb3JtdWxhLm1hdGNoKG5ldyBSZWdFeHAoYFxcXFwke2JyLm9wZW59W14ke2JyLm9wZW59JHtici5jbG9zZX1dKj9cXFxcJHtici5jbG9zZX1gLCAnZycpKTtcbiAgICBpZiAoIXJlRW50cmllcykgcmV0dXJuIG1hdGNoZXM7XG5cbiAgICBjb25zdCByZWR1Y2VkRm9ybXVsYSA9IHJlRW50cmllcy5yZWR1Y2UoKHN0ciwgcGF0dGVybikgPT4gc3RyLnJlcGxhY2UocGF0dGVybiwgJ+KAoicpLGZvcm11bGEpO1xuXG4gICAgcmV0dXJuIGdldEJyYWNrZXRVbml0cyhyZWR1Y2VkRm9ybXVsYSwgYnIsIFsuLi5tYXRjaGVzLCAuLi5yZUVudHJpZXNdKTtcbn0iLCJpbXBvcnQgeyByZXZlcnNlTWFwcGluZyB9IGZyb20gJ2Zvcm1zYW5kbGluZXMtdXRpbHMnO1xuXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9mb3JtZm9ybS10b29sYm94IFxuKi9cblxuZXhwb3J0IGNvbnN0IFZBUkNPREUgPSAoeydhJzon4bSsJywgJ2InOifhtK4nLCAnYyc6J+G1kycsICdkJzon4bSwJywgJ2UnOifhtLEnLCAnZic6J+G1jicsICdnJzon4bSzJywgJ2gnOifhtLQnLCAnaSc6J+G0tScsICdqJzon4bS2JywgJ2snOifhtLcnLCAnbCc6J+G0uCcsICdtJzon4bS5JywgJ24nOifhtLonLCAnbyc6J+G0vCcsICdwJzon4bS+JywgJ3EnOifhtL0nLCAncic6J+G0vycsICdzJzon4bWVJywgJ3QnOifhtYAnLCAndSc6J+G1gScsICd2Jzon4bWbJywgJ3cnOifhtYInLCAneCc6J+G1oScsICd5Jzon4bWeJywgJ3onOifhtZwnLCAnYWx0Jzon4bW9JywgJzJyJzon4bWzJywgJzJyKzEnOifhtbInfSk7XG5cbmV4cG9ydCBjb25zdCBWQVJDT0RFX1JFViA9IHJldmVyc2VNYXBwaW5nKFZBUkNPREUsdHJ1ZSk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkNhbGMge1xuICAgIFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgZm9ybWZvcm0gY29yZSBtb2R1bGUgJ2NhbGMnXG4gICAgLy8gICAgIC0tIHNpbmNlIDIwMTgsIGJ5IFBldGVyIEhvZm1hbm4gKGZvcm1zYW5kbGluZXMuZXUpXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfTtcblxuICAgIHN0YXRpYyByZWxfbG9naWMoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgY29tbXV0YXRpdmUgcmVsYXRpb246IHggeSAqL1xuICAgICAgICBpZiAoIGZ4ID4gMyB8fCBmeCA8IDAgfHwgZnkgPiAzIHx8IGZ5IDwgMCApIHJldHVybiAtOTg7XG4gICAgICAgIGVsc2UgaWYgKCBmeCA9PT0gMCB8fCBmeSA9PT0gMSApIHsgXG4gICAgICAgICAgICByZXR1cm4gZnk7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICAgICAgfSBcbiAgICAgICAgZWxzZSBpZiAoIGZ5ID09PSAwIHx8IGZ4ID09PSAxICkgeyBcbiAgICAgICAgICAgIHJldHVybiBmeDsgLy8gQzMgL1RoZW9yZW0gMlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBmeCA9PT0gZnkgKSB7IFxuICAgICAgICAgICAgcmV0dXJuIGZ4OyAvLyBDNSAvVGhlb3JlbSA1XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIChmeCA9PT0gMiAmJiBmeSA9PT0gMykgfHwgKGZ4ID09PSAzICYmIGZ5ID09PSAyKSApIHsgXG4gICAgICAgICAgICByZXR1cm4gMTsgLy8gQzIgL1RoZW9yZW0gMTMgKyBDMyAvVGhlb3JlbSAyXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykgeyAvLyB2ZXJpZmllZFxuICAgICAgICAvKiBTaG9ydGN1dCBmb3IgcmVsYXRpb24gd2l0aCBuIHZhcmlhYmxlczogeF8xIC4uLiB4X24gKi9cbiAgICAgICAgaWYgKGZWYWxzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmVmFscykge1xuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmVsX2xvZ2ljKCB2YWwsZlZhbHNbaV0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC05NzsgLy8gZXJyb3IgY29kZVxuICAgIH07XG5cbiAgICBzdGF0aWMgaW52X2xvZ2ljKGZ4KSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgaW52ZXJzaW9uL25lZ2F0aW9uOiAoeCkgKi9cbiAgICAgICAgc3dpdGNoIChmeCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7IC8vIHZlcmlmaWVkXG4gICAgICAgIC8qIFNob3J0Y3V0IGZvciBuIGludmVyc2lvbnMvbmVnYXRpb25zOiAoeCkgKi9cbiAgICAgICAgaWYgKG4gPiAwKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gZng7XG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gdGhpcy5pbnZfbG9naWModmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnZfbG9naWMoZngpO1xuICAgICAgICByZXR1cm4gLTk3OyAvLyBlcnJvciBjb2RlXG4gICAgfTtcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIFJFLUVOVFJZIEZPUk0gQ0FMQ1VMQVRJT05cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyB1Rm9ybTIoZkEsIGZCLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQik7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm0yKGZBLCBmQiwgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQik7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vIGNhbGN1bGF0aW9uIHZlcmlmaWVkIGNsb3NlZCAmIG9wZW4gKGJvdGggaW50ZXJwci4pXG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodHJ1ZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtMyhsYXN0T3BlbiwgZkEsIGZCLCBmQywgYWx0SW50ZXJwcj1mYWxzZSkgeyAvLyBjYWxjdWxhdGlvbiB2ZXJpZmllZCBjbG9zZWQgJiBvcGVuIChib3RoIGludGVycHIuKVxuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KGZhbHNlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG4gICAgfTtcbiAgICBzdGF0aWMgdUZvcm00KGZBLCBmQiwgZkMsIGZELCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodW5kZWZpbmVkLCBmYWxzZSwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQpO1xuICAgIH07XG4gICAgc3RhdGljIGlGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHVuZGVmaW5lZCwgdHJ1ZSwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQywgZkQpO1xuICAgIH07XG4gICAgc3RhdGljIHVGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlRW50cnkodHJ1ZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcbiAgICBzdGF0aWMgaUZvcm01KGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBmRCwgZkUsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZELCBmRSk7XG4gICAgfTtcblxuICAgIC8vIHN0YXRpYyByZUVudHJ5KC4uLiB2YXJzKSB7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLnJlRW50cnkoZmFsc2UsIGZhbHNlLCB2YXJzKTtcbiAgICAvLyB9XG4gICAgLy8gc3RhdGljIHJlRW50cnkocmVFdmVuLCAuLi4gdmFycykge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5yZUVudHJ5KHJlRXZlbiwgZmFsc2UsIHZhcnMpO1xuICAgIC8vIH1cblxuICAgIHN0YXRpYyByZUVudHJ5KHJlRXZlbiwgbGFzdE9wZW4sIGFsdEludGVycHIsIC4uLmZWYWxzKSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgZGlmZmVyZW50IHNlbGYtZXF1aXZhbGVudCByZS1lbnRyeSBGT1JNc1xuICAgICAgICAgW0FyZ3VtZW50c10gcmVFdmVuOiBldmVuIHJlLWVudHJ5LW51bWJlcj8gfCBsYXN0T3BlbjogbGFzdCB2YXJpYWJsZSBub3QgY3Jvc3NlZD8gfCBmVmFsczogdmFyaWFibGVzICgwLzEvMi8zKVxuXG4gICAgICAgICBOb3RlOiBjYWxjdWxhdGlvbiBtYW51YWxseSB2ZXJpZmllZCBmb3LigKYgXG4gICAgICAgICAtICh1Rk9STSBhMSwgcmVzMikgxpI9KCjGkngpeSlcbiAgICAgICAgIC0gKGlGT1JNIGEyLCByZXMyKSDGkijGkik9KGExeCl5XG4gICAgICAgICAtIChpRk9STSBiMSwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoKMaSeCl5KXopIMaSPSgoKCgoKMaSeCl5KXopeCl5KXopXG4gICAgICAgICAtIChpRk9STSBiMiwgcmVzMykgWzJ8cnwrMV0gxpIoxpIpPSgoYjF4KXkpelxuICAgICAgICAgLSAodUZPUk0gYzEsIHJlczMpIFsyfHJ8XSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAgLSAodUZPUk0gYzIsIHJlczMpIFsyfHJ8XSDGkijGkik9KChjMXgpeSl6XG4gICAgICAgICBTaG91bGQgd29yayB3aXRoIHJlc29sdXRpb25zIG9mIDQsIDUsIOKApiBidXQgbmVlZHMgdmVyaWZpY2F0aW9uLlxuXG4gICAgICAgICBNeSBiYXNpYyBvYnNlcnZhdGlvbnMgYWJvdXQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zOlxuICAgICAgICAgLSBFdmVyeSByZS1lbnRyeSBGT1JNIG5lZWRzIHRvIGhhdmUgYW4gZXZlbiBudW1iZXIgb2YgY3Jvc3NlcyB0byBiZSBzZWxmLWVxdWl2YWxlbnQgKHVGT1JNKTogxpIgPSAoKMaSMSkyKSAuXG4gICAgICAgICAgIFNvIHdpdGggdW5ldmVuIHJlc29sdXRpb25zLCB3ZSBhbHdheXMgbmVlZCB0byBoYXZlIGFuIGV2ZW4gcmUtZW50cnkgbnVtYmVyOiDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIC5cbiAgICAgICAgIC0gVG8gYmUgYWJsZSB0byBhbHNvIGhhdmUgdW5ldmVuIHJlLWVudHJ5IG51bWJlcnMsIGVpdGhlciB0aGUgcmVzb2x1dGlvbiBuZWVkcyB0byBiZSBldmVuXG4gICAgICAgICAgIG9yIHdlIGhhdmUgdG8gZW1iZWQgdGhlIHJlLWVudHJ5IEZPUk0gaW50byBhIG5vcm1hbCBGT1JNIHRoYXQgaXMgb25lIHJlLWVudHJ5IG9mIHRoYXQgRk9STTpcbiAgICAgICAgICAgxpIoxpIpID0gKCgoxpIxKTIpMykgPC0+ICgoKCDGkiA9ICgoKCgoKMaSMSkyKTMpMSkyKTMpIDEpMikzKSAuXG4gICAgICAgICAgIFRoZXNlIGNvbXBvc2l0aW9uYWwgcmUtZW50cnkgRk9STXMgYXJlIGlGT1JNcywgc2luY2UgdGhleSByZXNvbHZlIHRvOiAoIMaSID0gKCjGkikpICkgLlxuICAgICAgICAgLSBJZiB0aGUgb3V0bW9zdCBjcm9zcyBvZiB0aGUgRk9STSBzaG91bGQgYmUgbGVmdCBvdXQgKG9wZW4gRk9STXMpLCB0aGlzIGNhbiBvbmx5IGJlIGRvbmUgaWYgd2UgZW1iZWRcbiAgICAgICAgICAgYSBjb3JyZXNwb25kaW5nIGNsb3NlZCBGT1JNIG9mIGl0c2VsZiB0aGF0IGVpdGhlciBpcyBvciBlbWJlZHMgaXRzIHJlLWVudHJ5IEZPUk0gKGNhc2VzIGRlc2NyaWJlZCBhYm92ZSkuXG4gICAgICAgICAgIEkgYmVsaWV2ZSB0aGUgb3V0bW9zdCAob3BlbikgRk9STSBpcyBub3QgYmVpbmcgY291bnRlZCBhcyBhIHJlLWVudHJ5IGF0IGFsbCwgc2luY2UgaXQncyBtaXNzaW5nIGEgY3Jvc3MuXG5cbiAgICAgICAgIFRoaXMgYWxnb3JpdGhtIGlzIGJhc2VkIG9uIHRoZSBmb2xsb3dpbmcgcnVsZXMvcGF0dGVybnMvb2JzZXJ2YXRpb25zIGRlcml2ZWQgZnJvbSBcInVGT1JNIGlGT1JNXCI6XG4gICAgICAgICBbMV0gSWYgMSBpcyBzb21ld2hlcmUgaW4gdGhlIEZPUk0sIGl0IHdpbGwgZG9taW5hdGUgYWxsIHZhbHVlcyBpbiBzcGFjZXMgZGVlcGVyIHRoYW4gbSxcbiAgICAgICAgICAgICBzbyB0aGUgcmUtZW50cnkgaXMgb2Jzb2xldGUgYW5kIHdlIGNhbiBzdGFydCBjYWxjdWxhdGUgZnJvbSB0aGlzIHNwYWNlLiBcbiAgICAgICAgIFsyXSBJZiB0aGVyZSBhcmUgMy8yIG9yIDIvMyBwYWlycyBpbiB0aGUgRk9STSwgdGhlIGZpcnN0IHRlcm0gY2FuIGJlIHR1cm5lZCBpbnRvIDEsIHNpbmNlXG4gICAgICAgICAgICAgdGhyb3VnaCBDMiB0aGUgc2Vjb25kIHRlcm0gY2FuIGFsd2F5cyBiZSBnZW5lcmF0ZWQgaW50byBpdHMgc3BhY2UsIHdoZXJlIDIzID0gMS5cbiAgICAgICAgICAgICBUaGVuIHdlIGNhbiBwcm9jZWVkIGFzIGluICgxKS5cbiAgICAgICAgIFszXSBJZiBhbGwgdmFyaWFibGVzIGFyZSAwLCB3ZSB3aWxsIGhhdmUgZWl0aGVyIGEgdUZPUk0gb3IgaUZPUk0sIGhlbmNlIHRoZSB2YWx1ZSBvZiB0aGVcbiAgICAgICAgICAgICBGT1JNIHdpbGwgYmUgZWl0aGVyIDIgb3IgMywgZGVwZW5kaW5nIG9uIHRoZSBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAgICAgICAgLSAyOiBjbG9zZWQsICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGExKVxuICAgICAgICAgICAgIC0gMjogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIGV2ZW4gICAgIChjMSwgYzIpXG4gICAgICAgICAgICAgLSAzOiBvcGVuLCAgICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGEyKVxuICAgICAgICAgICAgIC0gMzogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIG9kZCAgICAgIChiMSwgYjIpXG4gICAgICAgICBTaW5jZSBbMV1bMl1bM10gZWxpbWluYXRlIGFsbCBvdGhlciBjYXNlcywgYWxsIHZhcmlhYmxlcyBhcmUgbm93IGVpdGhlciAyIG9yIDMgKGFuZCBtYXliZSAwcyksXG4gICAgICAgICBzbyB1c2luZyBDMiBhcyBkZXNjcmliZWQgYWJvdmUsIG9ubHkgdGhlIGxhc3Qgb2NjYXNpb24gb2YgdGhlc2UgdmFyaWFibGVzIG5lZWQgdG8gYmUgY29uc2lkZXJlZDpcbiAgICAgICAgIFs0XSBJZiB3ZSB1c2UgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMiAocC4xNjcpIHJlY3Vyc2l2ZSBpZGVudGl0eSAoIG1uIDwtPiAoKMaSKSk9xpIgKSwgQzIgYW5kIEMxXG4gICAgICAgICAgICAgxpIgY2FuIGJlIHNlcGFyYXRlZCBmcm9tIDIvMyBpZiB0aGVyZSBpcyBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIChvciBub25lKSBhZnRlciB0aGUgdmFyaWFibGUuXG4gICAgICAgICAgICAgVGhlbiwgZGVwZW5kaW5nIG9uIHRoZSBGT1JNLCB3ZSBoYXZlIGVpdGhlcjpcbiAgICAgICAgICAgICBpRk9STTogKMaSPSgoxpIpKSkgMi8zIDwtPiAoMikgMi8zICBvclxuICAgICAgICAgICAgIHVGT1JNOiAgxpI9KCjGkikpIDIvMyAgPC0+ICAyIDIvM1xuICAgICAgICAgWzVdIElmIFs0XSBkb2VzIG5vdCBhcHBseSBvciB3ZSBkZWNpZGUgZm9yIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDEgKHAuMTY3KTogcmVjdXJzaW9uIGluc3RydWN0aW9uIFxuICAgICAgICAgICAgICggbW4gLT4gxpI9KCjGkikpICksIHdlIHdpbGwgaGF2ZSBlaXRoZXIgdmFyaWFibGVzIG9mIDIgb3IgMyB3aGljaCB3ZSBjYW5ub3QgcmVsYXRlIHRvIMaSLCBzaW5jZVxuICAgICAgICAgICAgIHRoZXkgbmVlZCBub3QgYmUgdGhlIHNhbWUgdW5kZXRlcm1pbmVkIHZhbHVlLiBVc2luZyBjYXNlIGRpc3RpbmN0aW9uLCB3ZSBpbnRlcnByZXQgdGhlXG4gICAgICAgICAgICAgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMgYXMgMCBhbmQgYXMgMSwgY2FsY3VsYXRlIGV2ZXJ5dGhpbmcgd2l0aCDGkj0yIGFuZCByZWxhdGUgdGhlIHJlc3VsdHMgXG4gICAgICAgICAgICAgdXNpbmcgY29udHJhdmFsZW5jZTogKCh4KXkpKCh5KXgpIHdoaWNoIHlpZWxkcyB0aGUgZmluYWwgcmVzdWx0LlxuICAgICAgICAqL1xuICAgICAgICAvLyBjaGVjayBpZiBhcmd1bWVudHMgYXJlIGFjdHVhbGx5IGRlZmluZWRcbiAgICAgICAgaWYgKHJlRXZlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZUV2ZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdE9wZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGFzdE9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc0V2ZW4gPSAoZlZhbHMubGVuZ3RoJTIgPT0gMCk7IC8vIGV2ZW4gcmVzb2x1dGlvbj9cbiAgICAgICAgbGV0IHplcm9zID0gMDsgLy8gemVybyBjb3VudGVyXG4gICAgICAgIGxldCBmaXJzdFVuZGVmID0gLTE7IC8vIGNhdGNoZXMgZmlyc3QgbW4vKG1uKVxuXG4gICAgICAgIC8vIFszXSBkZXRlcm1pbmUgaWYgdUZPUk0gb3IgaUZPUk1cbiAgICAgICAgbGV0IHVGT1JNID0gZmFsc2U7XG4gICAgICAgIGxldCBpRk9STSA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzRXZlbikge1xuICAgICAgICAgICAgaWYgKGxhc3RPcGVuKSBpRk9STSA9IHRydWU7XG4gICAgICAgICAgICBlbHNlIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZUV2ZW4pIHVGT1JNID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaUZPUk0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgMS9tIHNvbWV3aGVyZSBpbiB4XzEg4oCmIHhfblxuICAgICAgICBsZXQgY2FsY2Zyb20gPSAtMTtcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZlZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZ4ID0gZlZhbHNbaV07IFxuXG4gICAgICAgICAgICBpZiAoZnggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gaTsgLy8gWzFdIGlmIG0gaXMgc29tZXdoZXJlLCBzZXQgY2FsY3VsYXRpb24gc3RhcnQgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnggPT0gMCkgemVyb3MrKzsgLy8gWzNdIGtlZXAgdHJhY2sgb2YgaG93IG1hbnkgemVyb3MgdGhlcmUgYXJlXG4gICAgICAgICAgICBlbHNlIGlmIChmeCA9PSAyIHx8IGZ4ID09IDMpIHsgLy8gWzJdXG4gICAgICAgICAgICAgICAgaWYoZmlyc3RVbmRlZiA9PSAtMSkgZmlyc3RVbmRlZiA9IGk7IC8vIGlmIHRoZXJlIGlzIGEgZmlyc3QgMi91IG9yIDMvaSwgcmVtZW1iZXJcbiAgICAgICAgICAgICAgICBlbHNlIGlmKGZ4ICE9IGZWYWxzW2ZpcnN0VW5kZWZdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gZmlyc3RVbmRlZjsgLy8gaWYgMy8yIG9yIDIvMyBwYWlycywgc2V0IGNhbGN1bGF0aW9uIGZvcm0gZmlyc3QgdW5kZWYuIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIGlmICh6ZXJvcyA9PSBmVmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFszXSBpbiBjYXNlIGFsbCB2YXJpYWJsZXMgYXJlIG4sIGp1c3QgcmV0dXJuIHRoZSB1bmRlZmluZWQvaW1hZ2luYXJ5IHZhbHVlIG9mIHRoZSBGT1JNXG4gICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiAzO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsY2Zyb20gPj0gMCkge1xuICAgICAgICAgICAgLy8gWzF8Ml0gaWYgdGhlcmUgaXMgYSAxL20gc29tZXdoZXJlIGluIHRoZSBmb3JtLCB3ZSBjYW4gZWFzaWx5IGNhbGN1bGF0ZSB0aGUgcmVzdCBmcm9tIHRoaXMgcG9pbnRcbiAgICAgICAgICAgIGxldCB2YWwgPSAxO1xuICAgICAgICAgICAgZm9yKGxldCBpPWNhbGNmcm9tOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7ICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGkgPT0gZlZhbHMubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsID0gdGhpcy5yZWwodmFsLGZWYWxzW2ldKTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHZhbCA9IHRoaXMuaW52KCB0aGlzLnJlbCh2YWwsZlZhbHNbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLy8gd2hhdCByZW1haW5zLCB3aWxsIG9ubHkgYmUgZWl0aGVyXG4gICAgICAgIC8vIC0gKDEpIGFsbCB2YXJpYWJsZXMgYXJlIG4vMCBvciBtbi8yICAgb3JcbiAgICAgICAgLy8gLSAoMikgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIChtbikvM1xuICAgICAgICAvLyBTbyB3ZSBjYWxjdWxhdGUgZnJvbSB0aGUgbGFzdCBvY2Nhc2lvbiBvZiAyIG9yIDMsIGJlY2F1c2Ugd2l0aCBDMiAoZGVnZW5lcmF0ZSkgYWxsIGVsc2UgY2FuIGJlIGlnbm9yZWRcblxuICAgICAgICAvLyBmb3IgZXZlbiBjbG9zZWQgcmUtZW50cnktRk9STXMgd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbiAodUZPUk0gYzEpLCB3ZSBuZWVkIHRvIGRvIHRoZSBjYWxjdWxhdGlvbiB0d2ljZVxuICAgICAgICBjb25zdCByZXBlYXQgPSAocmVFdmVuICYmICFyZXNFdmVuICYmICFsYXN0T3Blbik/IDI6MTtcbiAgICAgIFxuICAgICAgICBmb3IobGV0IGk9KGZWYWxzLmxlbmd0aCpyZXBlYXQpLTE7IGk+PTA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBpJWZWYWxzLmxlbmd0aDsgLy8gcmVwZWF0ZWQgdmFyaWFibGUgaW5kZXhcblxuICAgICAgICAgICAgaWYgKGZWYWxzW2luZGV4XSA9PSAyIHx8IGZWYWxzW2luZGV4XSA9PSAzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaVJldiA9IChmVmFscy5sZW5ndGgqcmVwZWF0KS0xIC0gaTsgLy8gcmV2ZXJzZSBpbmRleCB0byBlYXNpZXIgY2hlY2sgZm9yIGludGVycHJldGF0aW9uIDIgKHNlZSBuZXh0KVxuXG4gICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIgJiYgKChsYXN0T3BlbiAmJiBpUmV2JTI9PTApIHx8ICghbGFzdE9wZW4gJiYgaVJldiUyPT0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMjogcmVjdXJzaXZlIGlkZW50aXR5ICggxpI9KCjGkikpIDwtPiBtbiApXG4gICAgICAgICAgICAgICAgICAgIC8vIMaSPSgoxpIpKSBjYW4gYmUgc2VwYXJhdGVkIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZTsgdGhpcyBpcyB0aGUgY2FzZSBpZiBlaXRoZXI6XG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDEpIHRoZSBGT1JNIGlzIG9wZW4gYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgZXZlbiAgICAgIG9yXG4gICAgICAgICAgICAgICAgICAgIC8vIC0gKDIpIHRoZSBGT1JNIGlzIGNsb3NlZCBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBvZGRcblxuICAgICAgICAgICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBjcm9zc2VzIGJldHdlZW4gxpIgYW5kIG91ciB2YXIgaXMgZXZlbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzOlxuICAgICAgICAgICAgICAgICAgICBpZiAoaUZPUk0pIHJldHVybiB0aGlzLnJlbCgzLGZWYWxzW2luZGV4XSk7IC8vIGlGT1JNOiAoxpI9KCjGkikpKXggPC0+IChtbikgeFxuICAgICAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB0aGlzLnJlbCgyLGZWYWxzW2luZGV4XSk7ICAgICAgIC8vIHVGT1JNOiAgxpI9KCjGkikpeCAgPC0+ICBtbiB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBbNV0gaWYgZXZlcnl0aGluZyBlbHNlIGZhaWxzLCB1c2UgY2FzZSBkaXN0aW5jdGlvbjogdUZPUk0gaUZPUk0gKHAuOTQpOyBhbHNvIGFjY29yZGluZyB0bzpcbiAgICAgICAgICAgICAgICAgICAgLy8gdUZPUk0gaUZPUk0gKHAuMTY3KSBpbnRlcnByZXRhdGlvbiAxOiByZWN1cnNpb24gaW5zdHJ1Y3Rpb24gKCDGkj0oKMaSKSkgYW5kIG1uIG5lZWQgdG8gYmUgZGlmZmVyZW50aWF0ZWQpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2UwID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MFxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTAgPSB0aGlzLmludihjYXNlMCk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDA7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMCk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTAgPSB0aGlzLnJlbChjYXNlMCxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTAgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTAsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNhc2UxID0gMjsgLy8gcmUtZW50cnkgxpI9bW4sIGJlY2F1c2Ugb3RoZXIgbW49MVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTEgPSB0aGlzLmludihjYXNlMSk7IC8vIGNyb3NzIGZvciBpbnRlZ3JhdGVkIEZPUk1zIHdpdGggdW5ldmVuIHJlcy4gaW5zaWRlIG9wZW4gRk9STXMgKGlGT1JNIGIyKVxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZ4ID0gMDsgLy8gYWxsIG90aGVyIHZhbHVlcyB3aWxsIGJlIChkZWdlbmVyYXRlZCB0bykgemVyb1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDE7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGZ4ID0gdGhpcy5pbnYoMSk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaiA9PSBmVmFscy5sZW5ndGgtMSkgY2FzZTEgPSB0aGlzLnJlbChjYXNlMSxmeCk7IC8vIGlmIG5vIGNyb3NzIG9uIGxhc3QgdmFyLCBkb24ndCBpbnZlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgY2FzZTEgPSB0aGlzLmludiggdGhpcy5yZWwoY2FzZTEsZngpICk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250KCBjYXNlMCxjYXNlMSApOyAvLyBjb250cmF2YWxlbmNlIG9mIGJvdGggY2FzZXNcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxuICAgIH07IC8vIGVuZCByZUVudHJ5KClcblxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gIENPTVBMRVggRk9STSBDQUxDVUxBVElPTlNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0gMiBWQVJJQUJMRVNcblxuICAgIHN0YXRpYyBpbXBsTChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6ICh4KXkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCB0aGlzLmludihmeCksZnkgKTtcbiAgICB9O1xuICAgIHN0YXRpYyBpbXBsUihmeCwgZnkpIHtcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6IHgoeSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMucmVsKCBmeCx0aGlzLmludihmeSkgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIHByZShmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInByZXNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICgoeCl5KSAqL1xuICAgICAgICByZXR1cm4gdGhpcy5pbnYoIHRoaXMuaW1wbEwoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgcG9zdChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcInBvc3RzZWN0aW9uXCIvXCJkZWNpc2lvblwiOiAoeCh5KSkgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuaW52KCB0aGlzLmltcGxSKGZ4LGZ5KSApO1xuICAgIH07XG5cbiAgICBzdGF0aWMgY29udChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICAgICAgLyogRk9STSBhcml0aG1ldGljIGZvciBcImNvbnRyYXZhbGVuY2VcIi9cImVpdGhlci1vclwiOiAoKHgpeSkgKHgoeSkpICovXG4gICAgICAgIHJldHVybiB0aGlzLnJlbCggdGhpcy5wcmUoZngsZnkpLCB0aGlzLnBvc3QoZngsZnkpICk7XG4gICAgfTtcbiAgICBzdGF0aWMgZXF1aXYoZngsIGZ5KSB7XG4gICAgICAgIC8qIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJlcXVpdmFsZW5jZVwiLz86ICggKCh4KXkpICh4KHkpKSApICovXG4gICAgICAgIHJldHVybiB0aGlzLmludiggdGhpcy5jb250KGZ4LGZ5KSApO1xuICAgIH07XG5cbn0iLCJpbXBvcnQgRkZvcm0gZnJvbSAnLi9mZm9ybSc7XG5pbXBvcnQgeyBwZXJtdXRlQXJyYXksIHBhZCwgY3JlYXRlVmFsaWRhdGlvbiwgZXF1YWxBcnJheXMsIGdldFJhbmRvbUJpZ0ludCB9IGZyb20gJ2Zvcm1zYW5kbGluZXMtdXRpbHMnO1xuXG5pbXBvcnQgKiBhcyBiaWdJbnQgZnJvbSAnYmlnLWludGVnZXInOyAvLyBvYnNvbGV0ZSB3aXRoIGJldHRlciBCaWdJbnQgc3VwcG9ydCBpbiBicm93c2Vyc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGRG5hIGV4dGVuZHMgRkZvcm0ge1xuICAgIFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyAgICAgZm9ybWZvcm0gY29yZSBtb2R1bGUgJ2RuYSdcbiAgICAvLyAgICAgLS0gc2luY2UgMjAxOS8yMCwgYnkgUGV0ZXIgSG9mbWFubiAoZm9ybXNhbmRsaW5lcy5ldSlcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkZPUk1cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY2FsY0FsbChpbnB1dCkge1xuICAgICAgICAvKiBleHRlbnNpb24gdG8gcmVwcmVzZW50IGZvcm1ETkEgYXMgRk9STSBjYWxjdWxhdGlvbiAqL1xuXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRuYSA9IGlucHV0LnNwbGl0KCc6JykucG9wKCk7XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZudW0gPSB0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcbiAgICAgICAgICAgIGNvbnN0IHZhcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4gYFwieF8ke2l9XCJgICk7XG4gICAgICAgICAgICBjb25zdCB2YWxzID0ge307XG5cbiAgICAgICAgICAgIGlmICh2bnVtIDwgMSkge1xuICAgICAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gcGFyc2VJbnQocmVzdWx0c1swXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJwclZhbHMgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgICAgICB2YWxzW2ludGVyS2V5K2ludGVycHJWYWxzXSA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNhbGNBbGwoaW5wdXQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoaW5wdXQpIHtcbiAgICAgICAgLyogZXh0ZW5zaW9uIHRvIGdldCB2YXJpYWJsZXMgZnJvbSBmb3JtRE5BICovXG5cbiAgICAgICAgaWYgKHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnICYmIGlucHV0LmluY2x1ZGVzKCc6OicpKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJMaXN0ICE9PSB1bmRlZmluZWQpIHJldHVybiB2YXJMaXN0O1xuICAgICAgICAgICAgZWxzZSBpZiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuXG4gICAgICAgICAgICBjb25zdCB2bnVtID0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IGB4XyR7aX1gICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuZ2V0VmFyaWFibGVzKGlucHV0KTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZW5jb2RlIChfZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIEVuY29kZXMgYSBGT1JNIGFzIGEgZG5hIHN0cmluZyAqL1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB2YXJvcmRlciA/IHRoaXMucmVPcmRlclZhcnMoX2Zvcm0sIHZhcm9yZGVyKSA6IF9mb3JtO1xuXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY2FsY0FsbChmb3JtKSkucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICB9O1xuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG4gICAgIHN0YXRpYyBkZWNvZGUgKGRuYSwgdmFyTGlzdD11bmRlZmluZWQpIHtcbiAgICAgICAgLyogRGVjb2RlcyBkbmEgaW50byAob25lIG9mIGl0cykgc2ltcGxlc3QgY29ycmVzcG9uZGluZyBGT1JNIG1vZGVsKHMpIGFzIGEganNvbi1yZXByZXNlbnRhdGlvbiAqL1xuXG5cbiAgICAgICAgLy8gLT4gcmVtb3ZlIDAtdGVybXMgYW5kIGdyb3VwaW5ncz9cblxuICAgICAgICBpZiAodmFyTGlzdCAmJiB2YXJMaXN0Lmxlbmd0aCAhPT0gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkpIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG9mIHZhcmlhYmxlcyBpbiBnaXZlbiB2YXJpYWJsZSBsaXN0IGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyk7XG4gICAgICAgIGlmICghdmFyTGlzdCkgdmFyTGlzdCA9IHRoaXMuZ2VuZXJhdGVWYXJOYW1lcyh0aGlzLnRvdGFsVmFyc0Zyb21ETkEoZG5hKSk7IC8vLm1hcChzdHIgPT4gYFwiJHtzdHJ9XCJgKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHVuaXYgPSB0aGlzLnVuaXZlcnNlX24odmFyTGlzdCk7XG4gICAgICAgIGNvbnN0IHZhbHMgPSBkbmEuc3BsaXQoJycpLnJldmVyc2UoKTtcblxuICAgICAgICByZXR1cm4gdW5pdi5tYXAoKHRlcm0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgKCgke3ZhbHNbaV19KSgke3Rlcm19KSlgO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgfVxuXG4vLyA8IEVORFxuXG4gICAgc3RhdGljIGludFRvRE5BIChpbnQsIHZudW0pIHtcbiAgICAgICAgLyogVGFrZXMgYW4gaW50ZWdlciAodXN1YWxseSBCaWdJbnQpIGFuZCBhIGRlc2lyZWQgdmFyaWFibGUgbnVtYmVyIGFuZCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIGZvcm1ETkEgXG5cbiAgICAgICAgTm90ZTogdmFyaWFibGUgbnVtYmVyIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBpbnRlbmRlZCBudW1iZXIgb2YgbGVhZGluZyB6ZXJvcyBjYW5ub3QgYmUgaW5mZXJlZCBmcm9tIHRoZSBpbnRlZ2VyIGFsb25lLiBJZiBubyB2YXJpYWJsZSBudW1iZXIgaXMgZ2l2ZW4sIHRoZSBzbWFsbGVzdCB2YXJpYWJsZSBudW1iZXIgcG9zc2libGUgZm9yIHRoZSBxdWF0ZXJuaW9uIGlzIGFzc3VtZWQgdG8gZ2VuZXJhdGUgdmFsaWQgZm9ybUROQS4gKi9cblxuICAgICAgICBjb25zdCBxdWF0ID0gaW50LnRvU3RyaW5nKDQpO1xuICAgICAgICBpZiAocXVhdC5zdWJzdHIoMCwxKSA9PT0gJy0nKSB0aHJvdyBuZXcgRXJyb3IoJ05lZ2F0aXZlIGludGVnZXJzIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZm9ybUROQS4nKTtcbiAgICAgICAgaWYgKHF1YXQuaW5jbHVkZXMoJy4nKSkgdGhyb3cgbmV3IEVycm9yKCdGcmFjdGlvbmFsIG51bWJlcnMgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBmb3JtRE5BLicpXG5cbiAgICAgICAgY29uc3QgZG5hTGVuID0gdm51bSA/IDQqKnZudW0gOiAoZnVuY3Rpb24gbWluRG5hTGVuKHN0ckxlbiwgbj0wKSB7IFxuICAgICAgICAgICAgcmV0dXJuIDQqKm4gPj0gc3RyTGVuID8gNCoqbiA6IG1pbkRuYUxlbihzdHJMZW4sIG4rMSk7XG4gICAgICAgIH0pKHF1YXQubGVuZ3RoKTtcblxuICAgICAgICBpZiAocXVhdC5sZW5ndGggPiBkbmFMZW4pIHRocm93IG5ldyBFcnJvcignSW50ZWdlciBzaXplIGV4Y2VlZHMgZGVzaXJlZCBETkEgbGVuZ3RoLicpO1xuICAgICAgICByZXR1cm4gcGFkKHF1YXQsIGRuYUxlbik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIE91dHB1dFxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBmb3JtVG9ETkEgKGlucHV0LCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIGNvbnZlcnRzIGEgZm9ybSBpbnRvIGl0cyBmb3JtRE5BIHJlcHJlc2VudGF0aW9uIGluIEhUTUwgKi9cblxuICAgICAgICBjb25zdCB7b3V0cHV0fSA9IHsgb3V0cHV0OiB1bmRlZmluZWQsIC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbnB1dCBjb250YWlucyB0aGUgbWFyayAnOjonIGZvciBmb3JtRE5BLCByZXR1cm4gaXQgaWYgaXQncyB2YWxpZFxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IGlzIG5vdCB2YWxpZCBmb3JtRE5BJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGRuYSA9IHBhcnRzLmRuYTtcbiAgICAgICAgICAgIGZvcm11bGEgPSBwYXJ0cy5mb3JtdWxhO1xuICAgICAgICAgICAgdmFyTGlzdCA9IHBhcnRzLnZhckxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiBub3QsIHByb2Nlc3MgdGhlIGlucHV0IGFzIGEgRk9STSB3aXRoIHNwZWNpZmllZCBvciBkZWZhdWx0IHZhcm9yZGVyIGFuZCBlbmNvZGUgaXQgdG8gZG5hXG4gICAgICAgICAgICBkbmEgPSB0aGlzLmVuY29kZSggaW5wdXQsICh2YXJvcmRlciA/IHZhcm9yZGVyIDogdW5kZWZpbmVkKSApO1xuICAgICAgICAgICAgZm9ybXVsYSA9IGlucHV0O1xuICAgICAgICAgICAgdmFyTGlzdCA9IHZhcm9yZGVyID8gdmFyb3JkZXIgOiB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAob3V0cHV0KSB7XG4gICAgICAgICAgICAvLyBjYXNlICdodG1sJzoge1xuICAgICAgICAgICAgLy8gXHRyZXR1cm4gZm9ybUROQV9odG1sKGZvcm11bGEsIGRuYSwgdmFyTGlzdCk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZm9ybXVsYSAhPT0gdW5kZWZpbmVkID8gZm9ybXVsYSA6ICcnKSArICh2YXJMaXN0ICYmIGRuYS5sZW5ndGggPiAxID8gYC5bJHt2YXJMaXN0LmpvaW4oJywnKX1dYCA6ICcnKSArICc6OicgKyBkbmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdudW0nOiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRuYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Zvcm11bGEsIHZhckxpc3QsIGRuYV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZG5hVG9GT1JNIChmb3JtRE5BLCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgICAgIC8qIGNvbnZlcnRzIGZvcm1ETkEgd2l0aCBhIGdpdmVuIHZhcmlhYmxlIGxpc3Qvb3JkZXIgaW50byBhIGdyYXBoIHJlcHJlc2VudGF0aW9uIG9mIChvbmUgb2YgaXRzKSBzaW1wbGVzdCBjb3JyZXNwb25kaW5nIEZPUk0gbW9kZWwocykgKi9cblxuICAgICAgICAvLyA+Pj4gbm90IHlldCBpbXBsZW1lbnRlZCFcblxuICAgICAgICByZXR1cm4gdGhpcy5kZWNvZGUoZm9ybUROQSwgdmFyb3JkZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5SYW5kb21ETkEgKHZudW0pIHtcbiAgICAgICAgLyogR2VuZXJhdGVzIGEgcmFuZG9tIGZvcm1ETkEgc3RyaW5nIGZvciBhIGdpdmVuIHZhcmlhYmxlIG51bWJlciAqL1xuXG4gICAgICAgIGNvbnN0IG1heE4gPSBiaWdJbnQoNCkucG93KCBiaWdJbnQoNCkucG93KHZudW0pICk7XG4gICAgICAgIGNvbnN0IHZhbHVlX2JpbiA9IGdldFJhbmRvbUJpZ0ludCggbWF4Ti5zdWJ0cmFjdCgxKSApO1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRUb0ROQSh2YWx1ZV9iaW4sIHZudW0pO1xuICAgIH1cblxuICAgIHN0YXRpYyB2bWFwIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBnZW5lcmF0ZXMgdm1hcCBIVE1MIGZyb20gZm9ybS9mb3JtRE5BIGlucHV0ICovXG5cbiAgICAgICAgY29uc3QgeyBsaW1pdFNpemUsIGNvbnZEZWZhdWx0VmFyb3JkZXIsXG4gICAgICAgICAgICAgICAgc2l6ZSwgZ2FwR3JvdywgbWFyZ2luRnVuYywgc3Ryb2tlVyB9ID0ge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdFNpemU6IHRydWUsIGNvbnZEZWZhdWx0VmFyb3JkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IHVuZGVmaW5lZCwgZ2FwR3JvdzogMS41LCBtYXJnaW5GdW5jOiB1bmRlZmluZWQsIHN0cm9rZVc6IDAuNSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyOiAnMTExMScsIDwtIG1pZ2h0IGFkZCBsYXRlclxuICAgICAgICAgICAgICAgICAgICAuLi5vcHRpb25zfTtcblxuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgZm9ybXVsYSA9IGlucHV0O1xuXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSAmJiB0aGlzLmlzVmFsaWRETkEoaW5wdXQpKSB7XG4gICAgICAgICAgICBjb25zdCBkbmFQYXJ0cyA9IHRoaXMuZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgICAgICAgICAgZG5hID0gZG5hUGFydHMuZG5hO1xuICAgICAgICAgICAgZm9ybXVsYSA9IGRuYVBhcnRzLmZvcm11bGE7XG4gICAgICAgICAgICBjb25zdCB2YXJMaXN0ID0gZG5hUGFydHMudmFyTGlzdCA/IGRuYVBhcnRzLnZhckxpc3QgOiB0aGlzLmdldFZhcmlhYmxlcyhpbnB1dCk7XG5cbiAgICAgICAgICAgIGlmICh2YXJvcmRlciAhPT0gdW5kZWZpbmVkICYmIHZhckxpc3QgIT09IHVuZGVmaW5lZCAmJiAhZXF1YWxBcnJheXModmFyb3JkZXIsIHZhckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdWYXJpYWJsZSBvcmRlciBpcyBzcGVjaWZpZWQgaW4gdGhlIGZvcm1ETkEgaW5wdXQgYW5kIGFzIGFuIGFyZ3VtZW50IGZvciB0aGUgdm1hcCBmdW5jdGlvbiBhbmQgdGhleSBhcmUgZGlmZmVyZW50LiBQbGVhc2Ugc2VsZWN0IG9ubHkgb25lIHNwZWNpZmljYXRpb24gdG8gYXZvaWQgY29uZmxpY3RpbmcgcmVzdWx0cy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhckxpc3QpIHtcbiAgICAgICAgICAgICAgICB2YXJvcmRlciA9IHZhckxpc3Q7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZvcm11bGEpIHtcbiAgICAgICAgICAgICAgICB2YXJvcmRlciA9IHRoaXMuZ2V0VmFyaWFibGVzKGZvcm11bGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF2YXJvcmRlcikge1xuICAgICAgICAgICAgdmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgICAgICAgIGlmIChjb252RGVmYXVsdFZhcm9yZGVyKSB2YXJvcmRlciA9IHRoaXMubWF0Y2hEZWZhdWx0VmFyT3JkZXIodmFyb3JkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkbmEpIGRuYSA9IHRoaXMuZW5jb2RlKGZvcm11bGEsIHZhcm9yZGVyKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpO1xuXG4gICAgICAgIGlmICh2bnVtID09PSBOYU4pIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YXJpYWJsZSBudW1iZXIgZm9yIHZtYXBzLicpO1xuICAgICAgICBpZiAobGltaXRTaXplICYmIHZudW0gPiA4KSB0aHJvdyBuZXcgRXJyb3IoJ3ZtYXBzIHdpdGggbW9yZSB0aGFuIDggdmFyaWFibGVzIGFyZSB0b28gY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSB0byBiZSByZW5kZXJlZCB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcCBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cblxuICAgICAgICBjb25zdCByZXZlcnNlZEROQSA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2VsbFNpemUgPSBzaXplIHx8ICh2bnVtID0+IHtcbiAgICAgICAgICAgIC8vIHJlZHVjdGlvbiBieSAycHggZm9yIGVhY2ggYWRkaXRpb25hbCB2YXJpYWJsZSBpZiB2bnVtID4gM1xuICAgICAgICAgICAgY29uc3QgbiA9IDE3IC0gKHZudW0gPiAzID8gMiAqICh2bnVtLTMpIDogMCk7IC8vIGNoYW5nZWQgZnJvbTogMTQgLSAodm51bS0xKTtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgyLCBuKTsgLy8gbWluIHNpemUgb2YgMnB4XG4gICAgICAgIH0pKHZudW0pO1xuXG4gICAgICAgIC8vIG1hcmdpbnMgY2FuIGFsc28gYmUgY2FsY3VsYXRlZCB0aHJvdWdoIGEgY3VzdG9tIGZ1bmN0aW9uXG4gICAgICAgIGNvbnN0IG1hcmdpbnMgPSBbc3Ryb2tlVywgXG4gICAgICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6dm51bS0xfSwgbWFyZ2luRnVuYyA/IG1hcmdpbkZ1bmMgOiAoKF8saSkgPT4gKGkrMSkgKiBnYXBHcm93KSApXTtcbiAgICAgICAgY29uc3QgY2VsbCA9IHt3OmNlbGxTaXplLCBoOmNlbGxTaXplfTtcblxuXG4gICAgICAgIGNvbnN0IHZtYXBUcmVlID0gdGhpcy5jb25zdHJ1Y3RWbWFwKHJldmVyc2VkRE5BLCB2bnVtLCBjZWxsLCBtYXJnaW5zKTtcblxuICAgICAgICByZXR1cm4ge3RyZWU6IHZtYXBUcmVlLFxuICAgICAgICAgICAgICAgIGlucHV0OiBpbnB1dCwgXG4gICAgICAgICAgICAgICAgdmFyb3JkZXI6IHZhcm9yZGVyLCBcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdm1hcFBlcnNwZWN0aXZlcyAoZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkLCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCwgbG9jYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXAgcGVyc3BlY3RpdmVzIGFzIHBlcm11dGF0aW9ucyBvZiBhIGZvcm0vZm9ybUROQSBpbnB1dCAqL1xuICAgICAgICAvLyBOb3RlOiBmb3JtRE5BIGlucHV0IG5vdCB5ZXQgc3VwcG9ydGVkIChwZXJtdXRhdGlvbiBhbGdvcml0aG0gcmVxdWlyZWQpXG5cbiAgICAgICAgY29uc3Qge2xpbWl0U2l6ZX0gPSB7IGxpbWl0U2l6ZTogdHJ1ZSwgLi4uZ2xvYmFsT3B0aW9ucyB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YoZm9ybSkgPT09ICdzdHJpbmcnICYmIGZvcm0uaW5jbHVkZXMoJzo6JykpIHRocm93IG5ldyBFcnJvcignZm9ybUROQSBpbnB1dCBpcyBub3QgeWV0IHN1cHBvcnRlZCBmb3Igdm1hcCBwZXJzcGVjdGl2ZXMuJyk7XG5cbiAgICAgICAgaWYgKHZhcm9yZGVyID09PSB1bmRlZmluZWQpIHZhcm9yZGVyID0gdGhpcy5tYXRjaERlZmF1bHRWYXJPcmRlciggdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSkgKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHZhcm9yZGVyLmxlbmd0aDtcbiAgICAgICAgaWYgKGxpbWl0U2l6ZSAmJiB2bnVtID4gNSkgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJpbmcgYWxsIHRoZSBwZXJzcGVjdGl2ZXMgZm9yIHZtYXBzIHdpdGggbW9yZSB0aGFuIDUgdmFyaWFibGVzIGlzIHRvbyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbi4gWW91IGNhbiwgaG93ZXZlciwgc3RpbGwgY29tcHV0ZSBzaW5nbGUgcGVybXV0YXRpb25zIGJ5IGNoYW5naW5nIHRoZSB2YXJpYWJsZSBvcmRlciBvZiB5b3VyIEZPUk0uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcFBlcnNwZWN0aXZlcyBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cbiAgICAgICAgY29uc3QgZm9ybXVsYSA9IGZvcm07IC8vIDw8PCBzdXBwb3J0IGZvciBKU09OP1xuXG4gICAgICAgIGNvbnN0IHZtYXBQZXJtdXRhdGlvbnMgPSBwZXJtdXRlQXJyYXkodmFyb3JkZXIpXG4gICAgICAgICAgICAubWFwKHZhcm9yZGVyID0+IHRoaXMudm1hcChmb3JtdWxhLCB2YXJvcmRlciwge1xuICAgICAgICAgICAgICAgIGhpZGVJbnB1dExhYmVsOiB0cnVlLCBcbiAgICAgICAgICAgICAgICBjdXN0b21MYWJlbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIC4uLmxvY2FsT3B0aW9ucyB9KSApO1xuXG4gICAgICAgIHJldHVybiB2bWFwUGVybXV0YXRpb25zO1xuICAgIH1cblxuICAgIHN0YXRpYyB2bWFwTGlzdCAoaW5wdXRMaXN0LCBnbG9iYWxPcHRpb25zPXVuZGVmaW5lZCkge1xuICAgICAgICAvKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXBzIGZyb20gYW4gYXJyYXkgb2YgRk9STSBpbnB1dHMgKi9cbiAgICAgICAgLy8gaW5wdXRMaXN0IGZvcm1hdDogW1snZm9ybS9mb3JtRE5BJywgW3Zhcm9yZGVyXS91bmRlZmluZWQsIG9wdGlvbnMvdW5kZWZpbmVkXSwgLi4uXVxuXG4gICAgICAgIGNvbnN0IHZtYXBzID0gaW5wdXRMaXN0Lm1hcChpbnB1dCA9PiB0aGlzLnZtYXAoaW5wdXRbMF0sIGlucHV0WzFdLCB7Li4uaW5wdXRbMl0sIC4uLmdsb2JhbE9wdGlvbnN9KSApO1xuXG4gICAgICAgIHJldHVybiB2bWFwcztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRGF0YSBTdHJ1Y3R1cmVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgY29uc3RydWN0Vm1hcCAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpIHtcbiAgICAgICAgLyogUmVjdXJzaXZlbHkgY29uc3RydWN0cyB2bWFwIGRhdGEtc3RydWN0dXJlIGZyb20gZm9ybUROQSAqL1xuXG4gICAgICAgIGNvbnN0IGNhbGNHYXBTdW0gPSAodixtYXJnaW5zKSA9PiBtYXJnaW5zLnNsaWNlKDEsdikucmV2ZXJzZSgpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiBhY2MgKyAoMioqaWR4KSAqIGN1cnIsIDApO1xuICAgICAgICBjb25zdCBmeCA9IChxaSxuKSA9PiAgKHFpJTIpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgICAgICAgICAvLyB4cG9zOiAwMTIzIC0+IDAxMDEgKiBzaGlmdCBuXG4gICAgICAgIGNvbnN0IGZ5ID0gKHFpLG4pID0+ICsocWk+MCAmJiBxaTwzKSAqIChuICE9PSB1bmRlZmluZWQgPyBuIDogMCk7IC8vIHlwb3M6IDAxMjMgLT4gMDExMCAqIHNoaWZ0IG5cblxuICAgICAgICBjb25zdCBjb25zdHJ1Y3RWbWFwX3JlY3Vyc2l2ZSA9IChkbmFIb2xvbiwgdmNvdW50LCBjZWxsLCBtYXJnaW5zLCBxaT0wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJUcmVlID0ge307XG4gICAgICAgICAgICBjb25zdCBnYXBTdW0gPSBjYWxjR2FwU3VtKHZjb3VudCxtYXJnaW5zKTtcbiAgICAgICAgICAgIGNvbnN0IHF0biA9IDQqKnZjb3VudDtcbiAgICAgICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChxdG4pO1xuICAgICAgICAgICAgZG5hSG9sb24gPSBkbmFIb2xvbi5zdWJzdHIocWkqcXRuLCBxdG4pOyAvLyBxdWFydGVyIG9mIHRoZSBmb3JtRE5BIHN0cmluZ1xuICAgICAgICBcbiAgICAgICAgICAgIHN1YlRyZWUuZGF0YSA9IHsgXG4gICAgICAgICAgICAgICAgZG5hOiAnOjonK2RuYUhvbG9uLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyksXG4gICAgICAgICAgICAgICAgdm51bTogdmNvdW50LCBjZWxsOiBjZWxsLFxuICAgICAgICAgICAgICAgIG1hcmdpbnM6IHZudW0gPiAwID8gbWFyZ2lucy5zbGljZSgwLHZjb3VudCkgOiBtYXJnaW5zLnNsaWNlKDAsMSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHN1YlRyZWUuaGVpZ2h0ID0gdmNvdW50O1xuICAgICAgICAgICAgc3ViVHJlZS5kZXB0aCA9IHZudW0gLSAoTWF0aC5sb2cocXRuKSAvIE1hdGgubG9nKDQpKTsgLy8gbG9nIGJhc2UgNFxuICAgICAgICAgICAgc3ViVHJlZS5vcmRlciA9IHFpO1xuICAgICAgICBcbiAgICAgICAgICAgIHN1YlRyZWUucG9zaXRpb24gPSBbXG4gICAgICAgICAgICAgICAgLy8gYmFzZSBzaGlmdCAgPSAgKDEpIGNlbGwgc2l6ZSAqIGxlbmd0aCB1bml0cyAgKyAgKDIpIHN1bSBvZiBhbGwgcHJldmlvdXMgZ2Fwcy9tYXJnaW5zXG4gICAgICAgICAgICAgICAgLy8gcmVhbCBzaGlmdCAgPSAgYmFzZSBzaGlmdCAgKyAgKDMpIG1hcmdpbnMgb2YgY3VycmVudCBpdGVyYXRpb24gbGV2ZWxcbiAgICAgICAgICAgICAgICAvLyAtLSBxaTogY3VycmVudCB2YWx1ZSBpbmRleCAwLzEvMi8zXG4gICAgICAgICAgICAgICAgLy8gLS0gLS0gZngvZnkgbWFwIHFpIHRvIHgveSBwb3NpdGlvbnMgb2YgYSBzcXVhcmUgYW5kIG11bHRpcGx5IGJ5IHNoaWZ0IHZhbHVlICgyLiBhcmd1bWVudClcbiAgICAgICAgICAgICAgICAvLyAtLSBtYXJnaW5zOiBbc3Ryb2tlVywgMSAqIGdhcEdyb3csIDIgKiBnYXBHcm93LCDigKYgKHZudW0tMSkgKiBnYXBHcm93XVxuICAgICAgICAgICAgICAgIC8vIC0tIC0tIGlmIHZjb3VudCA9PSAwICAgIC0+IHNoaWZ0ICgzKSA9PSBzdHJva2VXXG4gICAgICAgICAgICAgICAgLy8gLS0gLS0gaWYgdmNvdW50ID09IHZudW0gLT4gc2hpZnQgKDMpID09IDBcbiAgICAgICAgICAgICAgICBmeChxaSwgbGVuKmNlbGwudykgKyBmeChxaSwgZ2FwU3VtKSArIGZ4KHFpLCBtYXJnaW5zW3Zjb3VudF0pLFxuICAgICAgICAgICAgICAgIGZ5KHFpLCBsZW4qY2VsbC5oKSArIGZ5KHFpLCBnYXBTdW0pICsgZnkocWksIG1hcmdpbnNbdmNvdW50XSldO1xuXG4gICAgICAgICAgICBzdWJUcmVlLnNjYWxlID0gW1xuICAgICAgICAgICAgICAgIGxlbipjZWxsLncgKyBnYXBTdW0sIFxuICAgICAgICAgICAgICAgIGxlbipjZWxsLmggKyBnYXBTdW0gXTtcblxuICAgICAgICAgICAgaWYgKHZudW0gPT09IDApIHsgLy8gaWYgZm9ybUROQSBvbmx5IGhhcyBhIHNpbmdsZSB2YWx1ZSwgbGlrZSA6OjNcbiAgICAgICAgICAgICAgICBzdWJUcmVlLnZhbHVlID0gZG5hSG9sb247XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1YlRyZWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN1YlRyZWUuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7ICh2Y291bnQgPiAwICYmIGkgPCA0KSB8fMKgKHZjb3VudCA9PT0gMCAmJiBpIDwgMSk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2Y291bnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgc3ViVHJlZS5jaGlsZHJlbiA9IFxuICAgICAgICAgICAgICAgICAgICBbLi4uc3ViVHJlZS5jaGlsZHJlbiwgY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUoZG5hSG9sb24sIHZjb3VudC0xLCBjZWxsLCBtYXJnaW5zLCBpKSBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBkbmFIb2xvbi5zdWJzdHIoaSwxKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgc3ViVHJlZS5jaGlsZHJlbiA9IFsuLi5zdWJUcmVlLmNoaWxkcmVuLCAoe1xuICAgICAgICAgICAgICAgICAgICAvLyB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkbmE6ICc6OicrdmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdm51bTogMCwgY2VsbDogY2VsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbnM6IG1hcmdpbnMuc2xpY2UoMCwxKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2Y291bnQtMSxcbiAgICAgICAgICAgICAgICAgICAgZGVwdGg6IHN1YlRyZWUuZGVwdGggKyAxLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogaSxcbiAgICAgICAgICAgICAgICAgICAgLy8gY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBbZngoaSxjZWxsLncpLCBmeShpLGNlbGwuaCldLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZTogW2NlbGwudywgY2VsbC5oXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50OiBzdWJUcmVlXG4gICAgICAgICAgICAgICAgfSkgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1YlRyZWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlIChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFZhbGlkYXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgZG5hTWF0Y2hlc0Zvcm0gKGRuYSwgZm9ybSwgX3Zhckxpc3Q9dW5kZWZpbmVkLCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhIGdpdmVuIEROQSBjb2RlIG1hdGNoZXMgYSBnaXZlbiBGT1JNICgrIG9wdGlvbmFsIHZhcmlhYmxlIGxpc3QpICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuICAgICAgICBjb25zdCB2YXJMaXN0ID0gX3Zhckxpc3QgPyBfdmFyTGlzdCA6IHN1cGVyLmdldFZhcmlhYmxlcyhmb3JtKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IF92YXJMaXN0ID8gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiB0aGlzLmZvcm1NYXRjaGVzVmFyTGlzdChmb3JtLCB2YXJMaXN0KSxcbiAgICAgICAgICAgICAgICAnRk9STSBkb2VzblxcJ3QgbWF0Y2ggdGhlIGdpdmVuIHZhcmlhYmxlIGxpc3QnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb2YgdmFyaWFibGVzIGluIGdpdmVuIHZhcmlhYmxlIGxpc3QgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5lbmNvZGUoZm9ybSwgdmFyTGlzdCkgPT09IGRuYSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cyAocmVzcGVjdGluZyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXIpJyksXG4gICAgICAgIF0gOiBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IHZhckxpc3QgJiYgdmFyTGlzdC5sZW5ndGggPT09IHRoaXMudG90YWxWYXJzRnJvbUROQShkbmEpLFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb2YgRk9STSB2YXJpYWJsZXMgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5lbmNvZGUoZm9ybSkgPT09IGRuYSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cycpLFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0aW9ucy5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkRE5BIChfaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGluIGZvcm1ETkEgZm9ybWF0IChoYXMgdG8gYmUgbWFya2VkIHdpdGggJzo6JyB0byBub3QgY29uZnVzZSBpdCB3aXRoIGEgRk9STSBvdXQgb2YgY29uc3RhbnRzKSAqL1xuICAgICAgICBjb25zdCB7Y29tcGFyZUZvcm0sIHJlcXVpcmVNYXJrfSA9IHsgY29tcGFyZUZvcm06IHRydWUsIHJlcXVpcmVNYXJrOiB0cnVlLCAuLi5vcHRpb25zIH07XG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSByZXF1aXJlTWFyayA/IF9pbnB1dCA6ICc6OicrX2lucHV0O1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMSA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgJ2Zvcm1ETkEgaW5wdXQgaXMgbm90IG9mIHR5cGUg4oCYc3RyaW5n4oCZJyksXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0LmluY2x1ZGVzKCc6OicpLFxuICAgICAgICAgICAgICAgICdJbnB1dCBkb2VzIG5vdCBpbmNsdWRlIHRoZSBtYXJrIOKAmDo64oCZIGZvciBmb3JtRE5BJyksXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0Lmxlbmd0aCA+PSAzLFxuICAgICAgICAgICAgICAgICdmb3JtRE5BIGlucHV0IGlzIHRvbyBzaG9ydCcpLFxuICAgICAgICBdO1xuICAgICAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICBjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gdGhpcy5nZXRETkFwYXJ0cyhpbnB1dCk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zMiA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdGhpcy50b3RhbFZhcnNGcm9tRE5BKGRuYSkgPj0gMCxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIGxlbmd0aCBpcyBub3QgaW4gdGhlIHJhbmdlIDReeCcpLFxuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbigoKSA9PiAhZG5hLnNwbGl0KCcnKS5zb21lKG4gPT4gaXNOYU4ocGFyc2VJbnQobikpIHx8IHBhcnNlSW50KG4pIDwgMCB8fCBwYXJzZUludChuKSA+IDMpLFxuICAgICAgICAgICAgICAgICdmb3JtRE5BIGNvZGUgaXMgbm90IGluIHF1YXRlcm5pb24gZm9ybWF0IChjb25zaXN0aW5nIG9ubHkgb2YgdGhlIG51bWJlcnMgMC8xLzIvMyknKSxcbiAgICAgICAgICAgIGNvbXBhcmVGb3JtICYmIGZvcm11bGEgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHRoaXMuZG5hTWF0Y2hlc0Zvcm0oZG5hLCBmb3JtdWxhLCB2YXJMaXN0KSxcbiAgICAgICAgICAgICAgICAnZm9ybUROQSBjb2RlIHBhcnQgZG9lc25cXCd0IG1hdGNoIGZvcm11bGEgcGFydCBvciBmb3JtdWxhIHBhcnQgZG9lc25cXCd0IG1hdGNoIGl0cyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXInKSA6IG51bGwsXG4gICAgICAgIF0uZmlsdGVyKGZuID0+IGZuKTtcblxuICAgICAgICB2YWxpZGF0aW9uczIuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gSGVscGVyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBFWFBFUklNRU5UQUwgPlxuXG5zdGF0aWMgZ2VuZXJhdGVWYXJOYW1lcyAodm51bSwgZXhjbHVkZUxpc3QgPSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IHtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZSA9IGB4XyR7aX1gO1xuICAgICAgICBpZiAoZXhjbHVkZUxpc3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2hpbGUgKGV4Y2x1ZGVMaXN0LmluY2x1ZGVzKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUrYOKAsmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZTtcbiAgICB9KTtcbn1cblxuc3RhdGljIHVuaXZlcnNlXzEgKHgpIHtcbiAgICAvKiBSZXR1cm5zIHRoZSBjb25zdGl0dWVudHMgb2YgdGhlIDQtdmFsdWVkIHVuaXZlcnNlIG9mIDEgdGVybXMgZnJvbSBhIHZhcmlhYmxlIG5hbWUgKi9cbiAgICBpZiAoeC5sZW5ndGggPiAxKSB4ID0gYFwiJHt4fVwiYDtcbiAgICByZXR1cm4gWyBcbiAgICAgICAgYCh7KCR7eH0pfXsycnwoJHt4fSl9KWAsIFxuICAgICAgICBgKHske3h9fXsycnwke3h9fSlgLCBcbiAgICAgICAgYCgoeygke3h9KX0ke3h9KSh7MnJ8JHt4fX0oJHt4fSkpKWAsIFxuICAgICAgICBgKCh7JHt4fX0oJHt4fSkpKHsycnwoJHt4fSl9JHt4fSkpYF07XG59XG5cbnN0YXRpYyB1bml2ZXJzZV9uICh2YXJzKSB7XG4gICAgLyogUmV0dXJucyB0aGUgY29uc3RpdHVlbnRzIG9mIHRoZSA0LXZhbHVlZCB1bml2ZXJzZSBvZiBuIHRlcm1zIGZyb20gYSBsaXN0IG9mIG4gdmFyaWFibGUgbmFtZXMgKi9cbiAgICBjb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG4gICAgY29uc3QgdW5pdjFzID0gdmFycy5tYXAodiA9PiB0aGlzLnVuaXZlcnNlXzEodikpO1xuICAgIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IDQqKnZudW19LCAoXywgaSkgPT4ge1xuICAgICAgY29uc3QgaXEgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSkuc3BsaXQoJycpO1xuICAgICAgY29uc3QgdW5pdk4gPSB1bml2MXMucmVkdWNlKChmb3JtdWxhLCB1bml2MSwgaiwgYXJyKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm11bGErYCgke3VuaXYxW2lxW2pdXX0pYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKyhqID09PSBhcnIubGVuZ3RoLTEgPyAnKScgOiAnJyksICcoJyk7XG4gICAgICByZXR1cm4gdm51bSA+IDEgPyB1bml2TiA6IHVuaXZOLnNsaWNlKDIsLTIpO1xuICAgIH0pO1xufTtcblxuLy8gPCBFTkRcblxuICAgIHN0YXRpYyB0b3RhbFZhcnNGcm9tRE5BIChmb3JtRE5BKSB7IFxuICAgICAgICAvKiBDYWxjdWxhdGVzIHZhcmlhYmxlIG51bWJlciBmcm9tIGZvcm1ETkEgKi9cblxuICAgICAgICAvLyBkZXRhY2ggZnJvbSBmb3JtRE5BIG1hcmsgJzo6J1xuICAgICAgICBjb25zdCBkbmEgPSBmb3JtRE5BLnNwbGl0KCc6JykucG9wKCk7XG5cbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBudW1iZXIgb2YgdmFyaWFibGVzIGZyb20gdGhlIGxlbmdodCBvZiB0aGUgc3RyaW5nXG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLmxvZyhkbmEubGVuZ3RoKS9NYXRoLmxvZyg0KTsgLy8gbG9nXzQoZG5hIGxlbmd0aCkgPSB2YXJpYWJsZSBudW1iZXJcbiAgICAgICAgcmV0dXJuIG4gJSAxID09PSAwID8gbiA6IE5hTjtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlcGFpckROQSAoaW5wdXQpIHtcbiAgICAgICAgLyogUmVwYWlycyBhIGdpdmVuIHN0cmluZyB0aGF0IGlzIG5vdCBpbiBhIHZhbGlkIGZvcm1ETkEgZm9ybSB0byBwYXNzIGFzIGZvcm1ETkEgKi9cblxuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgY29udGFpbnMgdGhlIG1hcmsgJzo6JyBmb3IgZm9ybUROQSwgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzXG4gICAgICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgICAgICAgICAgLy8gQ2FzZSAxOiBpbnB1dCBpcyBvZiBmb3JtIGYuW3hdOjpuIG9yIGY6Om4gLT4gZiB3aWxsIGJlIGVuY29kZWQgYXMgYSBGT1JNICh3aXRoIFt4XSBhcyB2YXJpYWJsZSBvcmRlciwgaWYgaXQgbWF0Y2hlcyB0aGUgRk9STXMgdmFyaWFibGVzIGluIG51bWJlciBhbmQgbGFiZWxzKVxuICAgICAgICAgICAgLy8gLSBJZiB0aGUgZm9ybUROQSBoYXMgYmVlbiB3ZWxsIGZvcm1lZCBpbiB0aGUgZmlyc3QgcGxhY2UsIHRoZSBvdXRwdXQgd2lsbCBiZSBlcXVpdmFsZW50XG4gICAgICAgICAgICAvLyAtIElmIHRoZSBkbmEgcGFydCBkb2Vzbid0IG1hdGNoIHRoZSBGT1JNIHBhcnQsIHRoZSBkbmEgcGFydCB3aWxsIGJlIGNvcnJlY3RlZFxuICAgICAgICAgICAgLy8gLSBJZiB0aGUgdmFyaWFibGUgb3JkZXIgZG9lc24ndCBtYXRjaCB0aGUgRk9STSB2YXJpYWJsZXMsIGl0IHdpbGwgYWxzbyBiZSBjb3JyZWN0ZWRcbiAgICAgICAgICAgIC8vIE5vdGUgdGhhdCB0aGlzIGNhc2UgZWZmZWN0aXZlbHkgaW50ZXJwcmV0cyB0aGUgaW5wdXQgYXMgRk9STSBpbnB1dCBhbmQgbWFrZXMgc3VyZSB0aGF0IHRoZSBmb3JtRE5BIGlzIGNvbnNpc3RlbnQsIGJlY2F1c2UgaXQgaXMgaW1wb3NzaWJsZSB0byBpbmZlciBhIEZPUk0gZnJvbSBpdHMgRE5BLlxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0aGlzLmdldEROQXBhcnRzKGlucHV0KTtcbiAgICAgICAgICAgIGlmIChwYXJ0cy5mb3JtdWxhKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBbeF0tcGFydCwgZXh0cmFjdCB2YXJpYWJsZSBvcmRlciBhbmQgY2hlY2sgaWYgaXRzIHZhbGlkIGZvciB0aGUgRk9STVxuICAgICAgICAgICAgICAgIGxldCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIHRyeS4uLmNhdGNoIGF2b2lkcyBpbnRlcnJ1cHRpb24gYnkgRXJyb3JcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzLnZhckxpc3QgJiYgdGhpcy5mb3JtTWF0Y2hlc1Zhckxpc3QocGFydHMuZm9ybXVsYSwgcGFydHMudmFyTGlzdCkpIHZhckxpc3QgPSBwYXJ0cy52YXJMaXN0O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyByZS1lbmNvZGUgdG8gcmV0dXJuIGNvcnJlY3QgZm9ybUROQSBmb3IgdGhlIGdpdmVuIGZvcm11bGFcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtVG9ETkEocGFydHMuZm9ybXVsYSwgdmFyTGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDYXNlIDI6IGlucHV0IGlzIG9mIGZvcm0gOjpuIC0+IHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZVxuICAgICAgICAgICAgLy8gTm90ZSB0aGF0IGEgRk9STSB3aWxsIG5vdCBiZSBkZWNvZGVkIGZyb20gdGhlIGRuYSBhbG9uZSwgc2luY2UgdGhpcyBGT1JNIHdvdWxkIGJlIG9waW5pb25hdGVkXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEROQShpbnB1dCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIGlucHV0IGlzIG5vdCBtYXJrZWQgYXMgZm9ybUROQSwgaXQgd2lsbCBqdXN0IGJlIGVuY29kZWQgYXMgYSBGT1JNXG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1Ub0ROQShpbnB1dCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldEROQXBhcnRzIChmb3JtRE5BKSB7XG4gICAgICAgIC8qIERlY29tcG9zZXMgYSBmb3JtRE5BIHN0cmluZyBpbnRvIGl0cyAzLzIvMSBwYXJ0cyAqL1xuICAgICAgICBsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZm9ybUROQS5zcGxpdCgnOicpO1xuICAgICAgICBkbmEgPSBwYXJ0cy5wb3AoKTtcblxuICAgICAgICBpZiAocGFydHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybV9wYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBmb3JtdWxhID0gZm9ybV9wYXJ0c1swXTtcbiAgICAgICAgICAgIHZhckxpc3QgPSBmb3JtX3BhcnRzLmxlbmd0aCA+IDEgPyBmb3JtX3BhcnRzWzFdLnNsaWNlKDEsLTEpLnNwbGl0KCcsJykgOiB2YXJMaXN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh7IGRuYTogZG5hLCBmb3JtdWxhOiBmb3JtdWxhLCB2YXJMaXN0OiB2YXJMaXN0IH0pO1xuICAgIH1cblxufSIsImltcG9ydCB7IHBhZCwgZmxhdHRlbiwgaW5jbHVkZSwgY3JlYXRlVmFsaWRhdGlvbiwgY2hlY2tCcmFja2V0TWF0Y2hpbmcsIGNvbGxhcHNlTGl0ZXJhbHMsIGdldEJyYWNrZXRVbml0cyB9IGZyb20gJ2Zvcm1zYW5kbGluZXMtdXRpbHMnO1xuaW1wb3J0IHsgVkFSQ09ERSwgVkFSQ09ERV9SRVYgfSBmcm9tICcuLi8uLi9jb21tb24vaGVscGVyJztcbmltcG9ydCBGQ2FsYyBmcm9tICcuL2ZjYWxjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRkZvcm0gZXh0ZW5kcyBGQ2FsYyB7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gICAgIGZvcm1mb3JtIGNvcmUgbW9kdWxlICdmb3JtJ1xuICAgIC8vICAgICAtLSBzaW5jZSAyMDE4LCBieSBQZXRlciBIb2ZtYW5uIChmb3Jtc2FuZGxpbmVzLmV1KVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gRm9ybSBDYWxjdWxhdGlvblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBjYWxjKF9mb3JtKSB7XG4gICAgICAgIC8qIENhbGN1bGF0ZXMgYSBnaXZlbiBmb3JtIHJlY3Vyc2l2ZWx5IFxuXG4gICAgICAgIE5vdGU6IERvIE5PVCB1c2UgdGhpcyBmdW5jdGlvbiBmb3IgZm9ybXVsYXMgd2l0aCB2YXJpYWJsZXMhXG4gICAgICAgICAgICAgIEFzc3VtZXMgeD0wIGZvciBhbGwgdmFyaWFibGVzLiBVc2UgaW50ZXJDYWxjKCkgaW5zdGVhZC5cbiAgICAgICAgKi9cblxuICAgICAgICBsZXQgZnggPSAwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaGF2ZSBhIGpzb24gZm9ybSwgaWYgbm90OiB0cnkgdG8gY29udmVydFxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybS5zcGFjZSkge1xuICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nKSB7XG4gICAgICAgICAgICAgICAgZnggPSB0aGlzLnJlbCggZngsdGhpcy5jYWxjKGZvcm0uc3BhY2VbaV0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgaWYoIWlzTmFOKGZvcm0uc3BhY2VbaV0udmFsdWUpKSBmeCA9IHRoaXMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICd1bmNsZWFyJykge1xuICAgICAgICAgICAgICAgIGZ4ID0gdGhpcy5yZWwoIGZ4LGZvcm0uc3BhY2VbaV0udmFsdWUgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5lc3RlZFZhbHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBmUmVFbnRyeSA9IGZvcm0uc3BhY2VbaV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIGZSZUVudHJ5Lm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXN0ZWRWYWxzID0gWy4uLm5lc3RlZFZhbHMsIHRoaXMuY2FsYyhmUmVFbnRyeS5uZXN0ZWRbal0pXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gZm9yIGV2ZW4gcmVzb2x1dGlvbnMgKHRvdGFsIG5lc3RlZCBhcmd1bWVudHMpLCByZUVudHJ5IG51bWJlciB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIC8vIHNpbmNlIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIGl0cyBldmVuIG9yIG9kZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlRW50cnlOdW1iZXIgPSAoZlJlRW50cnkubmVzdGVkLmxlbmd0aCAlIDIgPT09IDApID8gdW5kZWZpbmVkIDogZlJlRW50cnkucmVFdmVuO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIG5vdGF0aW9uIHJlYWRpbmc6IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9ICB1c2UgbmVzdGVkVmFscy5yZXZlcnNlKCkgdG8gcmV2ZXJzZSB2YXJpYWJsZXNcbiAgICAgICAgICAgICAgICBmeCA9IHRoaXMucmVsKCBmeCx0aGlzLnJlRW50cnkocmVFbnRyeU51bWJlciwgZlJlRW50cnkubGFzdE9wZW4sIGZSZUVudHJ5LmFsdEludGVycHJldGF0aW9uLCAuLi5uZXN0ZWRWYWxzKSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGZvcm0udW5tYXJrZWQpIHJldHVybiBmeDtcbiAgICAgICAgZWxzZSByZXR1cm4gdGhpcy5pbnYoIGZ4ICk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBjYWxjQWxsKF9mb3JtKSB7XG4gICAgICAgIC8qIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtXG4gICAgICAgICAgIChyZWZhY3RvcmVkOiAxMC4xMC4yMDIwKVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgICAgIGNvbnN0IHZhcnMgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICAgICAgY29uc3Qgdm51bSA9IHZhcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCB2YWxzID0ge307XG5cbiAgICAgICAgaWYgKHZudW0gPCAxKSB7XG4gICAgICAgICAgICB2YWxzWydSZXN1bHQnXSA9IHRoaXMuY2FsYyhmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiB2YWxzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpPTA7IGkgPCA0Kip2bnVtOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuICAgICAgICAgICAgY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkraW50ZXJwclZhbHNdID0gdGhpcy5pbnRlckNhbGMoZm9ybSwgaW50ZXJwcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFscztcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVyQ2FsYyhmb3JtLCBpbnRlcnByKSB7XG4gICAgICAgIC8qIEludGVycHJldHMgYSBmb3JtIGFuZCBjYWxjdWxhdGVzIHRoZSByZXN1bHQgb2YgdGhlIGludGVycHJldGF0aW9uICovXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2FsYyggdGhpcy5pbnRlcnByZXQoZm9ybSwgaW50ZXJwcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludGVycHJldChfZm9ybSwgaW50ZXJwcikge1xuICAgICAgICAvKiBJbnRlcnByZXRzIGEgZm9ybSB3aXRoIHNwZWNpZmllZCB2YWx1ZXMgZm9yIGVhY2ggdmFyaWFibGVcblxuICAgICAgICBpbnRlcnByOiBbe3ZhcjogJ3gnLCB2YWx1ZTogbn0sIOKApl1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgICAgICBjb25zdCBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHNwYWNlID0gZkJyYW5jaC5zcGFjZTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGFjZVtpXS5zeW1ib2wgPT09IGludGVycHJbdl0udmFyKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGFjZVtpXS52YWx1ZSA9IGludGVycHJbdl0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBpbnRlcnByRm9ybTtcbiAgICB9O1xuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEV4dGVuc2lvbnMgb2YgRkNhbGNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcmVsX2xvZ2ljKGZ4LCBmeSkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbF9sb2dpYyhmeCwgZnkpO1xuICAgIH07XG4gICAgc3RhdGljIHJlbCguLi5mVmFscykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVsKC4uLmZWYWxzKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGludl9sb2dpYyhmeCkge1xuICAgICAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1cGVyLmludl9sb2dpYyhmeCk7XG4gICAgfTtcbiAgICBzdGF0aWMgaW52KGZ4LCBuKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5pbnYoZngsIG4pO1xuICAgIH07XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMgcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdCAqL1xuXG4gICAgICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgICAgIGNvbnN0IGpzb25TdHIgPSB0aGlzLmNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgICAgIC8vIHRyeSBwYXJzaW5nIHRoZSBzdHJpbmcgYXMgYSBKU09OIG9iamVjdFxuICAgICAgICBsZXQganNvbiA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqc29uO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb252RnJvbUxpbmVhcihmb3JtdWxhKSB7XG4gICAgICAgIC8vIGNsZWFuIGZvcm11bGEgc3RyaW5nIGZyb20gd2hpdGVzcGFjZVxuICAgICAgICBjb25zdCBjbGVhbkZvcm11bGEgPSB0aGlzLmNsZWFuTGluZWFyKGZvcm11bGEpO1xuICAgICAgICBjb25zdCBhcnIgPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoY2xlYW5Gb3JtdWxhKTtcbiAgICAgICAgcmV0dXJuIGZsYXR0ZW4oYXJyKS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYW5MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICBsZXQgY2xlYW5Gb3JtdWxhID0gJyc7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFyID0gZm9ybXVsYVtpXTtcbiAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuXG4gICAgICAgICAgICAvLyBvbWl0IHdoaXRlc3BhY2Ugb3V0c2lkZSBvZiBxdW90ZXNcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5RdW90ZSB8fMKgaW5TbGFzaCkgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbkZvcm11bGE7XG4gICAgfVxuXG4gICAgc3RhdGljIGNvbnN0cnVjdEZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgICAgICAvKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIHRvIEpTT04tZm9ybSAqL1xuXG4gICAgICAgIGxldCBjb21wQWxsID0gW107XG4gICAgICAgIGxldCB1bm1hcmtlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gY2hlY2sgZm9yIGFsbCBlbmNsb3Npbmcgb3V0ZXIgZm9ybVxuICAgICAgICBsZXQgY291bnREZXB0aCA9IDA7XG4gICAgICAgIGxldCBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgY29uc3QgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGNvdW50RGVwdGggPT0gMCkgJiYgKGkgIT0gMCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGZvcm11bGEubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICcgIHsnXTtcbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXCJ0eXBlXCI6XCJmb3JtXCIsJ107XG5cbiAgICAgICAgaWYgKHVubWFya2VkKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInVubWFya2VkXCI6dHJ1ZSwnXTtcbiAgICAgICAgZWxzZSBmb3JtdWxhID0gZm9ybXVsYS5zbGljZSgxLGZvcm11bGEubGVuZ3RoLTEpO1xuXG4gICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1wic3BhY2VcIjpbJ107XG5cblxuICAgICAgICBsZXQgcGFydHMgPSBbJyddO1xuXG4gICAgICAgIGNvdW50RGVwdGggPSAwO1xuICAgICAgICBpblF1b3RlID0gZmFsc2U7XG4gICAgICAgIGluU2xhc2ggPSBmYWxzZTtcblxuICAgICAgICBjb25zdCByZUNoYXIgPSAn4oa7JztcbiAgICAgICAgY29uc3Qgb3B0Q2hhciA9ICfipLQnO1xuICAgICAgICBjb25zdCBuZXN0Q2hhciA9ICfipLUnO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gZm9ybXVsYSkge1xuICAgICAgICAgICAgbGV0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICAgICAgY29uc3QgcHJldkNoYXIgPSBmb3JtdWxhW2ktMV07XG4gICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09IFwic3RyaW5nXCIpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcpJyB8fMKgY2hhciA9PT0gJ30nKSBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fMKgY2hhciA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgKHgpIGRvZXNuJ3QgbmVlZCB0byBiZSBzZXBhcmF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkgcGFydHMgPSBbLi4ucGFydHMsICcnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCAocHJldkNoYXIgPT09ICcpJyB8fMKgcHJldkNoYXIgPT09ICd9JykgJiYgIShjaGFyID09PSAnKScgfHzCoGNoYXIgPT09ICd9JykgKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGNoYXIgZm9sbG93cyAoeCksIHNlcGFyYXRlOyBidXQgbm90IGlmIGl0IGlzIGFub3RoZXIgJyknXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudERlcHRoID09PSAwKSBwYXJ0cyA9IFsuLi5wYXJ0cywgJyddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1bmlxdWUgc2VwYXJhdGlvbiBjaGFycyBmb3IgcmUtZW50cnkgZm9ybXMgZm9yIGVhc3kgc3BsaXR0aW5nXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJywnKSBjaGFyID0gbmVzdENoYXI7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnfCcpIGNoYXIgPSBvcHRDaGFyO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ0AnKSBjaGFyID0gcmVDaGFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgIC8vIGFkZCBjaGFyIHRvIHRoZSBsYXRlc3QgcHVzaGVkIHBhcnRcbiAgICAgICAgICAgIHBhcnRzW3BhcnRzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0c1tpXVswXSA9PT0gJygnKSB7IFxuICAgICAgICAgICAgICAgIC8vIGlmIHBhcnQgaXMgZm9ybVxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gW3RoaXMuY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSldO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiBwYXJ0IGlzIHJlLWVudHJ5IGZvcm1cblxuICAgICAgICAgICAgICAgIGxldCBjb21wID0gWycgIHsnXTtcbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInJlRW50cnlcIiwnXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwYXJ0c1tpXS5zbGljZSgxLHBhcnRzW2ldLmxlbmd0aC0xKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVOZXN0ZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyhyZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyByZS1lbnRyeSBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWx0SW50ZXJwciA9IGNvbnRlbnQuc3RhcnRzV2l0aChgYWx0JHtvcHRDaGFyfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfY29udGVudCA9IGFsdEludGVycHIgPyBjb250ZW50LnNsaWNlKDQsKSA6IGNvbnRlbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IFstMSwtMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfS5fYCkpIHR5cGUgPSBbMywxXVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfS5gKSkgdHlwZSA9IFszLDBdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9X2ApKSB0eXBlID0gWzIsMV1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn1gKSkgdHlwZSA9IFsyLDBdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYCR7cmVDaGFyfV9gKSkgdHlwZSA9IFswLDFdXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgocmVDaGFyKSkgdHlwZSA9IFswLDBdXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZUNoYXJTdW0gPSB0eXBlWzBdICsgdHlwZVsxXSArIDE7XG4gICAgICAgICAgICAgICAgICAgIHJlTmVzdGVkID0gX2NvbnRlbnQuc2xpY2UodHlwZUNoYXJTdW0sKS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlTmVzdGVkLmxlbmd0aCAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6XCJ1bmRlZmluZWRcIiwnXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlWzBdID09PSAyKSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJyZUV2ZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZVsxXSA+IDApIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWx0SW50ZXJwcikgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gb2xkIHJlLWVudHJ5IHN5bnRheFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZVBhcnRzID0gY29udGVudC5zcGxpdChvcHRDaGFyKTtcblxuICAgICAgICAgICAgICAgICAgICByZU5lc3RlZCA9IHJlUGFydHNbcmVQYXJ0cy5sZW5ndGgtMV0uc3BsaXQobmVzdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZU5lc3RlZC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJ107XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlUGFydHNbMF0gPT09ICcycicgfHwgcmVQYXJ0c1sxXSA9PT0gJzJyJyB8fCByZVBhcnRzWzJdID09PSAnMnInKSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6ZmFsc2UsJ107XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMV0gPT09ICdvcGVuJyB8fCByZVBhcnRzWzJdID09PSAnb3BlbicpIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjpmYWxzZSwnXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjpmYWxzZSwnXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcIm5lc3RlZFwiOlsnXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IG4gaW4gcmVOZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIocmVOZXN0ZWRbbl0pIF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuIDwgcmVOZXN0ZWQubGVuZ3RoLTEpIGNvbXAgPSBbLi4uY29tcCwgJywnXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVOZXN0ZWRbbl0gPSB0aGlzLmNvbnN0cnVjdEZyb21MaW5lYXIoIHJlTmVzdGVkW25dICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXX0gICddO1xuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHdlIGhhdmUgdmFyaWFibGVzL2NvbnN0YW50c1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvbXAgPSBbXTtcblxuICAgICAgICAgICAgICAgIGxldCB2YXJzID0gW107XG4gICAgICAgICAgICAgICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiBwYXJ0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGFyID0gcGFydHNbaV1bal07XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXJrIHF1b3RlZCBzdHJpbmcgd2l0aCBhICfigJYnIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluUXVvdGUpIHZhcnMgPSBbLi4udmFycywgJ+KAliddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFyayB1bmNsZWFyIGZvcm0gd2l0aCBhICfigL0nIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluU2xhc2gpIHZhcnMgPSBbLi4udmFycywgJ+KAvSddO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB2YXJzID0gWy4uLnZhcnMsICcnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHF1b3RlIGNoYXJzIGluc2lkZSBzbGFzaGVzIHdpbGwgYmUgZXNjYXBlZCB0byBub3QgaW50ZXJmZXJlIHdpdGggSlNPTiBzeW50YXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmIGluU2xhc2gpIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gJ1xcXFwnICsgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdmFyc1t2YXJzLmxlbmd0aC0xXSArPSBjaGFyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdiBpbiB2YXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZih2YXJzW3ZdKSAhPT0gXCJzdHJpbmdcIikgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJyAgeyddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHZhcnNbdl0pICYmIHZhcnNbdl0ubGVuZ3RoID4gMCBcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhcnNbdl1bMF0gIT09ICfigL0nICYmIHZhcnNbdl1bMF0gIT09ICfigJYnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcImNvbnN0XCIsJ107IFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ2YWx1ZVwiOiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCB2YXJzW3ZdXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YXJzW3ZdWzBdID09PSAn4oC9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJ0eXBlXCI6XCJ1bmNsZWFyXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6MiwnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wic3ltYm9sXCI6J107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwidmFyXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6XCIqXCIsJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInN5bWJvbFwiOiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFyc1t2XVswXSA9PT0gJ+KAlicpIGNvbXAgPSBbLi4uY29tcCwgJ1wiJyt2YXJzW3ZdLnNsaWNlKDEpKydcIiddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICd9ICAnXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPCB2YXJzLmxlbmd0aC0xKSBjb21wID0gWy4uLmNvbXAsICcsJ107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgICAgICB9IC8vIGVuZCBlbHNlXG5cbiAgICAgICAgICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgcGFydHNbaV1dO1xuICAgICAgICAgICAgaWYgKGkgPCBwYXJ0cy5sZW5ndGgtMSkgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnLCddO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCAnXX0gICddO1xuXG4gICAgICAgIHJldHVybiBjb21wQWxsO1xuICAgIH1cblxuXG4gICAgc3RhdGljIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHtcbiAgICAgICAgLyogQ29uc3RydWN0cyBhIChyZWFsKSBuZXN0ZWQgZm9ybSBzdHJ1Y3R1cmUgZnJvbSB0aGUgLm5lc3RlZCBhcnJheSBvZiB0aGUgb3JpZ2luYWwgcmUtZW50cnkganNvbiAqL1xuXG4gICAgICAgIC8vID4+PiBzaG91bGQgYmUgcmV3cml0dGVuIGNvbXBsZXRlbHkgdG8gZ2V0IHJpZCBvZiBhbGwgdGhlIG11dGF0aW9uIVxuICAgICAgICBcbiAgICAgICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgICAgIHJlRm9ybS5uZXN0ZWQucmV2ZXJzZSgpOyAvLyBNVVNUIGJlIHJldmVyc2VkLCBiZWNhdXNlIG5vdGF0aW9uOiB7ZGVlcGVzdCwgLi4uLCBzaGFsbG93ZXN0fVxuXG4gICAgICAgIGZvcihsZXQgaSBpbiByZUZvcm0ubmVzdGVkKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBwcmVwZW5kIHRoZSByZUVudHJ5IG5lc3RpbmcgYmVmb3JlIGV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgc3BhY2VcbiAgICAgICAgICAgICAgICBzcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7IC8vIHNwYWNlLnB1c2ggPC0gb3JkZXIgbGFzdFxuICAgICAgICAgICAgICAgIGNvbnN0IG5lc3RlZEZvcm0gPSBzcGFjZVswXTsgLy8gc3BhY2Vbc3BhY2UubGVuZ3RoLTFdIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKHJlRm9ybS5uZXN0ZWRbaV0pO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIG5lc3RlZEZvcm0uc3BhY2UucHVzaCguLi5yZUZvcm0ubmVzdGVkW2ldLnNwYWNlKTsgLy8gcHVzaChyZUZvcm0ubmVzdGVkW2ldKSBmb3IgZ3JvdXBpbmdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzcGFjZSA9IG5lc3RlZEZvcm0uc3BhY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZighcmVGb3JtLm5lc3RlZFtpXS51bm1hcmtlZCkgc3BhY2UucHVzaChyZUZvcm0ubmVzdGVkW2ldKTtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAgICAgZWxzZSBzcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5hZGRFbXB0eVJlQ2hpbGRTcGFjZSAmJiAoc3BhY2UubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIHNwYWNlLnB1c2goIHt0eXBlOiAnc3BhY2UnfSApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgIFxuXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gYWRkIGEgcG9pbnQgb2YgcmUtZW50cnkgdG8gdGhlIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgLy8gZmlyc3QsIGxldHMgYXNzdW1lIHRoaXMgaXMgdGhlIGZvcm0gaXRzZWxmXG4gICAgICAgIGxldCBsYXN0TmVzdGVkID0gcmVGb3JtO1xuICAgICAgICBcbiAgICAgICAgaWYocmVGb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIHRoZW4gbG9vcCB1bnRpbCB0aGUgbGFzdCByZUNoaWxkIGlzIGZvdW5kIGFuZCBtYWtlIHRoaXMgb3VyIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgd2hpbGUgKGxhc3ROZXN0ZWQuc3BhY2VbMF0uaGFzT3duUHJvcGVydHkoJ3JlQ2hpbGQnKSkgeyAgICAgICAgXG4gICAgICAgICAgICAgICAgbGFzdE5lc3RlZCA9IGxhc3ROZXN0ZWQuc3BhY2VbMF07XG4gICAgICAgICAgICAgICAgaWYgKGxhc3ROZXN0ZWQuc3BhY2UubGVuZ3RoIDwgMSkgYnJlYWs7IC8vIHByZXZlbnQgZXJyb3JzIHdoZW4gbm90aGluZyBpcyBmb3VuZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGZvciBvcGVuIHJlLWVudHJpZXMsIHdlIG5lZWQgdG8gYWRkIGFub3RoZXIgbmVzdGluZyAoc2VlIHVGT1JNIGlGT1JNIGZvciByZWZlcmVuY2UpXG4gICAgICAgIGlmKHJlRm9ybS5sYXN0T3Blbikge1xuICAgICAgICAgICAgbGFzdE5lc3RlZC5zcGFjZS51bnNoaWZ0KCB7dHlwZTogJ2Zvcm0nLCByZUNoaWxkOiB0cnVlLCBzcGFjZTogW119ICk7XG4gICAgICAgICAgICAvLyB0aGVuIGFkZCB0aGUgcmUtZW50cnkgcG9pbnQgdG8gZWl0aGVyIHNwYWNlXG4gICAgICAgICAgICBsYXN0TmVzdGVkLnNwYWNlWzBdLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGxhc3ROZXN0ZWQuc3BhY2UudW5zaGlmdCgge3R5cGU6ICdyZUVudHJ5UG9pbnQnfSApO1xuXG4gICAgICAgIC8vIGxhc3QsIGRlbGV0ZSB0aGUgbmVzdGVkIHN0cnVjdHVyZSwgd2UgZG9uJ3QgbmVlZCBpdCBhbnltb3JlXG4gICAgICAgIGRlbGV0ZSByZUZvcm0ubmVzdGVkO1xuICAgICAgICByZXR1cm4gcmVGb3JtO1xuICAgIH1cblxuICAgIHN0YXRpYyBleHBhbmRfcmVFbnRyeShfZm9ybSwgb3B0aW9ucz17fSkge1xuICAgICAgICAvLyA+Pj4gc2hvdWxkIGJlIHJld3JpdHRlbiBjb21wbGV0ZWx5IHRvIGdldCByaWQgb2YgYWxsIHRoZSBtdXRhdGlvbiFcbiAgICAgICAgY29uc3QgcmVmRm9ybSA9IHRoaXMuZ2V0VmFsaWRGb3JtKF9mb3JtKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0Rm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVmRm9ybSkpOyAvLyBjb3B5IGpzb24gb2JqZWN0IHdpdGhvdXQgaWRlbnRpZnlpbmcgaXRcblxuICAgICAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgICAgIC8vIE5vdGU6IHRoaXMgc2hvdWxkIGJlIGRvbmUgbW9yZSBlZmZpY2llbnRseSBpbiB0aGUgZnV0dXJlXG4gICAgICAgIGxldCBydW5uaW5nSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybShyZWZGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuICAgICAgICBydW5uaW5nSW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuXG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICAgICAgICBpZihyZWZCcmFuY2gudHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0odGFyZ2V0Rm9ybSwgZnVuY3Rpb24odGFyZ2V0QnJhbmNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIChKU09OLnN0cmluZ2lmeShyZWZCcmFuY2gpID09PSBKU09OLnN0cmluZ2lmeSh0YXJnZXRCcmFuY2gpKSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVmQnJhbmNoLnJ1bm5pbmdJbmRleCA9PT0gKHRhcmdldEJyYW5jaC5oYXNPd25Qcm9wZXJ0eSgncnVubmluZ0luZGV4JykgPyB0YXJnZXRCcmFuY2gucnVubmluZ0luZGV4IDogbnVsbCkpICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJhbmNoID0gdGhpcy5jb25zdHJ1Y3ROZXN0ZWQodGFyZ2V0QnJhbmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGRlbGV0ZSBydW5uaW5nIGluZGV4IHByb3BlcnR5XG4gICAgICAgIHRoaXMudHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBkZWxldGUgYnJhbmNoLnJ1bm5pbmdJbmRleDsgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldEZvcm07XG4gICAgfVxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVwcmVzZW50YXRpb25cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBzdGF0aWMganNvblN0cmluZyhfZm9ybSwgZXhwYW5kUkU9ZmFsc2UpIHtcbiAgICAgICAgLyogcmV0dXJucyBqc29uLXJlcHJlc2VudGF0aW9uIG9mIHRoZSBzcGVjaWZpZWQgRk9STSAqL1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5nZXRWYWxpZEZvcm0oZXhwYW5kUkUgPyB0aGlzLmV4cGFuZF9yZUVudHJ5KF9mb3JtKSA6IF9mb3JtKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGZvcm0sIHVuZGVmaW5lZCwgMik7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEhlbHBlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIHN0YXRpYyBnZXRWYXJpYWJsZXMoX2Zvcm0pIHtcbiAgICAgICAgLyogcGFyc2VzIGEgRk9STSB0byBnZXQgYWxsIG9mIGl0cyB2YXJpYWJsZXMgYW5kIHNvcnRzIHRoZW0gdXNpbmcgdGhlIEpTIEFycmF5LnNvcnQoKSBtZXRob2RcbiAgICAgICAgd2hpY2ggc29ydHMgYnkgY29tcGFyaW5nIFVURi0xNiBjb2RlIHVuaXQgdmFsdWVzLlxuICAgICAgICBOb3RlOiBCeSBjb252ZW50aW9uLCB0aGUgcHJvY2VzcyBvZiBkZXJpdmluZyBmb3JtRE5BIGZyb20gYSBnaXZlbiBGT1JNIGludm9sdmVzIG9yZGVyaW5nIG9mIHRoZSBleHRyYWN0ZWQgdmFyaWFibGVzIGJ5IHRoaXMgc2FtZSBzb3J0aW5nIG1ldGhvZCwgaWYgbm8gc3BlY2lhbCBvcmRlcmluZyBpcyBzcGVjaWZpZWQuICovXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICAgICAgbGV0IHZhcnMgPSBbXTtcbiAgICAgICAgdGhpcy50cmF2ZXJzZUZvcm0oZm9ybSwgZnVuY3Rpb24oZkJyYW5jaCkge1xuICAgICAgICAgICAgY29uc3Qgc3BhY2UgPSBmQnJhbmNoLnNwYWNlO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5jbHVkZSh2YXJzLCBzcGFjZVtpXS5zeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJzID0gWy4uLnZhcnMsIHNwYWNlW2ldLnN5bWJvbF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFycy5zb3J0KCk7XG4gICAgfTtcblxuICAgIHN0YXRpYyB0cmF2ZXJzZUZvcm0oZm9ybSxmdW5jKSB7XG4gICAgICAgIC8qIHRyYXZlcnNlcyBvbmx5IGZvcm0tdHlwZXMgaW4gYSBqc29uIHRyZWUgKi9cbiAgICAgICAgY29uc3QgYnJlYWtUcmF2ID0gZnVuYy5hcHBseSh0aGlzLFtmb3JtXSk7XG5cbiAgICAgICAgaWYgKGZvcm0uc3BhY2UpIHsgLy8gZm9ybS50eXBlOiAnZm9ybSdcbiAgICAgICAgICAgIGlmIChmb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIGZvcm0uc3BhY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nIHx8IGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLnNwYWNlW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5uZXN0ZWQpIHsgLy8gZm9ybS50eXBlOiAncmVFbnRyeSdcbiAgICAgICAgICAgIGlmIChmb3JtLm5lc3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBmb3JtLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBicmVha0xvb3AgPSB0aGlzLnRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJyZWFrTG9vcCkgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgY29uc29sZS5sb2coJ0VSUk9SOiBOb3QgYSBmb3JtIScpO1xuXG4gICAgICAgIHJldHVybiBicmVha1RyYXY7XG4gICAgfTtcblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBBZGRpdGlvbnMgMDEvMjAyMCBmcm9tOlxuICAgICAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvZm9ybWZvcm0tdG9vbGJveCBcbiAgICAqL1xuXG4gICAgc3RhdGljIGdldFRvdGFsVmFycyAoZm9ybVN0cikge1xuICAgICAgICAvKiBnZXRzIHRvdGFsIHZhcmlhYmxlIG51bWJlciBvZiBhIEZPUk0gKi9cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFyaWFibGVzKGZvcm1TdHIuc3Vic3RyKCkpLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlT3JkZXJWYXJzIChmb3JtdWxhLCB2YXJvcmRlcikge1xuICAgICAgICAvKiByZS1vcmRlcnMgdmFyaWFibGVzIGluIGEgZm9ybXVsYSB0byBtYXRjaCBhbiBvcmRlcmluZyBwYXR0ZXJuICovXG4gICAgICAgIHJldHVybiB0aGlzLmRlY29kZVZhcnMoIHRoaXMuZW5jb2RlVmFycyhmb3JtdWxhLCB2YXJvcmRlcikgKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlY29kZVZhcnMgKGVuY1N0ciwgZGVjb2RlUGF0dGVybj11bmRlZmluZWQpIHtcbiAgICAgIC8qIGRlY29kZXMgdmFyaWFibGVzIGluIGFuIGVuY29kZWQgZm9ybXVsYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBkZWNvZGUgcGF0dGVybiAqL1xuICAgICAgbGV0IHJldkNvZGUgPSBWQVJDT0RFX1JFVjtcbiAgICAgIGlmIChkZWNvZGVQYXR0ZXJuKSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhWQVJDT0RFX1JFVik7XG4gICAgICAgIGNvbnN0IHZhclBhcnQgPSBrZXlzLnNsaWNlKDAsZGVjb2RlUGF0dGVybi5sZW5ndGgpO1xuICAgICAgICBjb25zdCBtb2RQYXJ0ID0ga2V5cy5zbGljZSgtMyk7XG4gICAgICAgIFxuICAgICAgICByZXZDb2RlID0gdmFyUGFydC5jb25jYXQobW9kUGFydCkucmVkdWNlKCAoY29kZSxrZXksaSkgPT4gKHsuLi5jb2RlLCBcbiAgICAgICAgICAgIFtrZXldOiBpIDwgZGVjb2RlUGF0dGVybi5sZW5ndGggPyBkZWNvZGVQYXR0ZXJuW2ldIDogVkFSQ09ERV9SRVZba2V5XSwgfSkse30pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZW5jU3RyLnNwbGl0KCcnKVxuICAgICAgICAgICAgICAgIC5tYXAoYyA9PiBPYmplY3Qua2V5cyhyZXZDb2RlKS5pbmRleE9mKGMpID4gLTEgPyByZXZDb2RlW2NdIDogYykuam9pbignJyk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBlbmNvZGVWYXJzIChmb3JtdWxhLCB2YXJvcmRlcj11bmRlZmluZWQpIHtcbiAgICAgIC8qIGVuY29kZXMgdmFyaWFibGVzIGluIGEgZm9ybXVsYSBzdHJpbmcgYWNjb3JkaW5nIHRvIGEgZ2l2ZW4gdmFyaWFibGUgb3JkZXIgKGFycmF5KSAqL1xuICAgICAgaWYgKCF2YXJvcmRlcikgdmFyb3JkZXIgPSB0aGlzLmdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgIFxuICAgICAgZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0cmluZykgeyAvLyB0aHggdG8gQ29vbEFKODY6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS82OTY5NDg2XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTsgLy8gJCYgbWVhbnMgdGhlIHdob2xlIG1hdGNoZWQgc3RyaW5nXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IGZpeFB0biA9IHthbHQ6ICdhbHQoPz1cXHwpJywgckV2ZW46ICcycig/PVxcfCknLCByT2RkOiAnMnIrMSg/PVxcfCknfTtcbiAgICAgIGNvbnN0IHB0biA9IHYgPT4ge1xuICAgICAgICBpZiAodi5sZW5ndGggPiAxKSByZXR1cm4gYFxcXCIke2VzY2FwZVJlZ0V4cCh2KX1cXFwiYDsgLy8gKD88PVxcXCIpKCR7dn0pKD89XFxcIilcbiAgICAgICAgcmV0dXJuIGAke2VzY2FwZVJlZ0V4cCh2KX1gO1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHZhcm9yZGVyXG4gICAgICAgIC5yZWR1Y2UoKGVuY1N0cix2LGkpID0+IGVuY1N0clxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLmFsdCwgJ2cnKSxWQVJDT0RFWydhbHQnXSApXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uckV2ZW4sICdnJyksVkFSQ09ERVsnMnInXSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5yT2RkLCAnZycpLFZBUkNPREVbJzJyKzEnXSlcbiAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKHB0bih2KSwgJ2cnKSwoT2JqZWN0LmtleXMoVkFSQ09ERV9SRVYpW2ldKSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgLCBmb3JtdWxhICk7XG4gICAgfTtcblxuXG4gICAgLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIE5ldyBBZGRpdGlvbnMgMDEvMjAyMDpcbiAgICAqL1xuXG4gICAgc3RhdGljIG1hdGNoRGVmYXVsdFZhck9yZGVyICh2YXJMaXN0KSB7XG4gICAgICAgIC8qIEhlbHBlciB0byBtYXRjaCBkZWZhdWx0IG9yZGVyaW5ncyBmb3IgY2FsY3VsYXRpb24gYW5kIHZtYXBzICovXG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnRUxSJykgcmV0dXJuIFsnTCcsJ0UnLCdSJ107XG4gICAgICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnKy1MUicpIHJldHVybiBbJy0nLCdMJywnUicsJysnXTtcbiAgICAgICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICcrLUVMUicpIHJldHVybiBbJy0nLCdMJywnRScsJ1InLCcrJ107XG4gICAgICAgIHJldHVybiB2YXJMaXN0O1xuICAgIH1cblxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICBOZXcgQWRkaXRpb25zIDEwLzIwMjA6XG4gICAgKi9cblxuICAgIHN0YXRpYyBpc1ZhbGlkRm9ybSAoaW5wdXQsIG9wdGlvbnMpwqB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIGZvcm11bGEgb3IgSlNPTi1GT1JNICovXG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnID8gXG4gICAgICAgICAgICBpc1ZhbGlkRm9ybXVsYShpbnB1dCwgb3B0aW9ucykgOiBpc1ZhbGlkSlNPTkZvcm0oaW5wdXQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkRm9ybXVsYSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgZm9ybXVsYSAqL1xuICAgICAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBsZXQgdmFsaWRhdGlvbnMxID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbigoKSA9PiB0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICAnRm9ybXVsYSBpbnB1dCBpcyBub3Qgb2YgdHlwZSDigJhzdHJpbmfigJknKSxcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHZhbGlkYXRpb25zMSA9IFsuLi52YWxpZGF0aW9uczEsXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJ1wiJykgJiYgISFjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnLycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzYW5zTGl0ZXJhbHMgPSBjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHNhbnNMaXRlcmFscyA/IGNoZWNrTGl0ZXJhbE1hdGNoaW5nKHNhbnNMaXRlcmFscywgJy8nKSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ051bWJlciBvZiBxdW90ZXMgZm9yIGxpdGVyYWwgdmFyaWFibGVzIChlLmcuOiBcInhcIikgb3IgbnVtYmVyIG9mIHNsYXNoZXMgZm9yIHVuY2xlYXIgRk9STXMgKGUuZy46IC94LykgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgLy8gY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgIC8vICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBvcGVuU2VwID0gJ+KBhScsIGNsb3NlU2VwID0gJ+KBhic7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRpclVuY2xGb3JtcyA9IGlucHV0LnNwbGl0KCcvJykucmVkdWNlKChhY2MsY3VycixpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBhY2MgKyAoaWR4ICUgMiA9PT0gMSA/IG9wZW5TZXAgOiBjbG9zZVNlcCkgKyBjdXJyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB1bmNsRm9ybVVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGRpclVuY2xGb3Jtcywge29wZW46IG9wZW5TZXAsIGNsb3NlOiBjbG9zZVNlcH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB1bmNsRm9ybVVuaXRzLmV2ZXJ5KHVuY2xGb3JtID0+IHVuY2xGb3JtLnNwbGl0KCdcIicpLmxlbmd0aCA8IDIpOyBcblxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgb3BlblNlcCA9ICfigYwnLCBjbG9zZVNlcCA9ICfigY0nO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXJMaXRlcmFscyA9IGlucHV0LnNwbGl0KCdcIicpLnJlZHVjZSgoYWNjLGN1cnIsaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gYWNjICsgKGlkeCAlIDIgPT09IDEgPyBvcGVuU2VwIDogY2xvc2VTZXApICsgY3VyclxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbGl0ZXJhbFVuaXRzID0gZ2V0QnJhY2tldFVuaXRzKGRpckxpdGVyYWxzLCB7b3Blbjogb3BlblNlcCwgY2xvc2U6IGNsb3NlU2VwfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbGl0ZXJhbFVuaXRzLmV2ZXJ5KGxpdGVyYWwgPT4gKVxuICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgLy8gJ051bWJlciBvZiBxdW90ZXMgZm9yIGxpdGVyYWwgdmFyaWFibGVzIChlLmcuOiBcInhcIikgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICBdO1xuICAgICAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcblxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgY2xlYW5JbnB1dCA9IGNvbGxhcHNlTGl0ZXJhbHMoIGNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpLCAnLycpO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uczIgPSBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoY2xlYW5JbnB1dCwgJygnLCAnKScpLFxuICAgICAgICAgICAgICAgICAgICAnTnVtYmVyIG9yIG9wZW5pbmcvY2xvc2luZyBvcmRlciBvZiBwYXJhbnRoZXNlcyBpbiBmb3JtdWxhIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhjbGVhbklucHV0LCAneycsICd9JyksXG4gICAgICAgICAgICAgICAgICAgICdOdW1iZXIgb3Igb3BlbmluZy9jbG9zaW5nIG9yZGVyIG9mIGN1cmx5IGJyYWNrZXRzIGluIGZvcm11bGEgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgdmFsaWRhdGlvbnMyLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgICAgIH0pICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJvdW5kQnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJygnLCBjbG9zZTogJyknfSk7XG4gICAgICAgICAgICBjb25zdCBjdXJseUJyVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoY2xlYW5JbnB1dCwge29wZW46ICd7JywgY2xvc2U6ICd9J30pO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uczMgPSBbXG4gICAgICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4gcm91bmRCclVuaXRzLmV2ZXJ5KHN1YkZvcm0gPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoc3ViRm9ybSwgJ3snLCAnfScpKVxuICAgICAgICAgICAgICAgICAgICAgICAmJiBjdXJseUJyVW5pdHMuZXZlcnkoc3ViRm9ybSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhzdWJGb3JtLCAnKCcsICcpJykpLFxuICAgICAgICAgICAgICAgICAgICAnT3BlbmluZy9jbG9zaW5nIG9mIHBhcmFudGhlc2VzIG92ZXJsYXBzIHdpdGggb3BlbmluZy9jbG9zaW5nIG9mIGN1cmx5IGJyYWNrZXRzIGluIGZvcm11bGEgKGUuZy46ICh7YSlifSknKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBjdXJseUJyVW5pdHMuZXZlcnkocmVFbnRyeSA9PiB0aGlzLmlzVmFsaWRSZUVudHJ5KHJlRW50cnkpKSxcbiAgICAgICAgICAgICAgICAgICAgJ09wdGlvbiBwYXJ0IG9mIG9uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaXMgbm90IHdlbGwtZm9ybWVkJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICB2YWxpZGF0aW9uczMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkUmVFbnRyeSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAgICAgLyogQ2hlY2tzIGlmIGFuIGlucHV0IGlzIGEgdmFsaWQgcmUtZW50cnkgY29uc3RydWN0aW9uICovXG4gICAgICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gaW5wdXQuc2xpY2UoMSwtMSkuc3BsaXQoJ3wnKTtcblxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgZW50cmllcyA9IHBhcnRzLmZpbHRlcigocCxpLGFycikgPT4gaSA8IGFyci5sZW5ndGgtMSk7XG4gICAgICAgICAgICBjb25zdCBvcHRMaXN0ID0gWydhbHQnLCdvcGVuJywnMnInLCcycisxJ107XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbExpc3QgPSBlbnRyaWVzLnJlZHVjZSgoYWNjLHN0cikgPT4gWy4uLmFjYywgb3B0TGlzdC5maWx0ZXIob3B0ID0+IHN0ciA9PT0gb3B0KVswXV0sW10gKS5maWx0ZXIob3B0ID0+IG9wdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbExpc3RfdW5pcXVlID0gWy4uLm5ldyBTZXQoc2VsTGlzdCldO1xuXG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5sZW5ndGggPT09IGVudHJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAnT25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBoYXZlIGludmFsaWQgb3IgZHVwbGljYXRlIG9wdGlvbnMnKSxcbiAgICAgICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5maWx0ZXIoc3RyID0+IHN0ciA9PT0gb3B0TGlzdFsyXSB8fCBzdHIgPT09IG9wdExpc3RbM10pLmxlbmd0aCA8IDIsXG4gICAgICAgICAgICAgICAgICAgICdPbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGhhdmUgYm90aCBvcHRpb25zIOKAmDJy4oCZIGFuZCDigJgycisx4oCZIHNldCBhdCB0aGUgc2FtZSB0aW1lJyksXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICAgICAgfSkgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1ZhbGlkSlNPTkZvcm0gKGlucHV0LCBvcHRpb25zKSB7XG4gICAgICAgIC8qIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIEpTT04tRk9STSAqL1xuICAgICAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gdHJ1ZSxcbiAgICAgICAgICAgICAgICAnJyksXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRpb25zLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICAgICAgZXJyb3I6IGUgPT4geyB0aHJvdyBuZXcgRXJyb3IoZSk7IH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgICAgIH0pICk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1NYXRjaGVzVmFyTGlzdCAoZm9ybSwgdmFyTGlzdCkge1xuICAgICAgICAvKiBDaGVja3MgaWYgYSBnaXZlbiBGT1JNIG1hdGNoZXMgYSBnaXZlbiB2YXJpYWJsZSBsaXN0ICovXG4gICAgICAgIGNvbnN0IHZhcnNGb3JtID0gdGhpcy5nZXRWYXJpYWJsZXMoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgbWF0Y2ggPSB2YXJMaXN0Lmxlbmd0aCA9PT0gdmFyc0Zvcm0ubGVuZ3RoXG4gICAgICAgICAgICAmJiB2YXJzRm9ybS5ldmVyeSh2X2EgPT4gdmFyTGlzdC5zb21lKHZfYiA9PiB2X2EgPT09IHZfYikpO1xuICAgICAgICBpZiAoIW1hdGNoKSB0aHJvdyBuZXcgRXJyb3IoJ0ZPUk0gZG9lc25cXCd0IG1hdGNoIHRoZSBnaXZlbiB2YXJpYWJsZSBsaXN0Jyk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFZhbGlkRm9ybShpbnB1dCkge1xuICAgICAgICBpZih0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWRGb3JtdWxhKGlucHV0KSkgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgYSB2YWxpZCBmb3JtdWxhJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUxpbmVhcihpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA+Pj4gbmVlZCB0byBjaGVjayBqc29uIGlucHV0IHRvb1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiaW1wb3J0IGNhbGMgZnJvbSAnLi9jb3JlL2ZjYWxjJztcbmltcG9ydCBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgZG5hIGZyb20gJy4vY29yZS9mZG5hJztcblxuZXhwb3J0IGRlZmF1bHQgeyBjYWxjLCBmb3JtLCBkbmEgfTsiXSwic291cmNlUm9vdCI6IiJ9