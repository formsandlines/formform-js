(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory();
	else
		root["formform"] = factory();
})(this, function() {
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
/* harmony export */   "rel_logic": function() { return /* binding */ rel_logic; },
/* harmony export */   "rel": function() { return /* binding */ rel; },
/* harmony export */   "inv_logic": function() { return /* binding */ inv_logic; },
/* harmony export */   "inv": function() { return /* binding */ inv; },
/* harmony export */   "reEntry": function() { return /* binding */ reEntry; },
/* harmony export */   "implL": function() { return /* binding */ implL; },
/* harmony export */   "implR": function() { return /* binding */ implR; },
/* harmony export */   "pre": function() { return /* binding */ pre; },
/* harmony export */   "post": function() { return /* binding */ post; },
/* harmony export */   "cont": function() { return /* binding */ cont; },
/* harmony export */   "equiv": function() { return /* binding */ equiv; },
/* harmony export */   "uForm2": function() { return /* binding */ uForm2; },
/* harmony export */   "iForm2": function() { return /* binding */ iForm2; },
/* harmony export */   "uForm3": function() { return /* binding */ uForm3; },
/* harmony export */   "iForm3": function() { return /* binding */ iForm3; },
/* harmony export */   "uForm4": function() { return /* binding */ uForm4; },
/* harmony export */   "iForm4": function() { return /* binding */ iForm4; },
/* harmony export */   "uForm5": function() { return /* binding */ uForm5; },
/* harmony export */   "iForm5": function() { return /* binding */ iForm5; }
/* harmony export */ });
// ===================================================================
//     formform core module 'calc'
//     -- since 2018, by Peter Hofmann (formsandlines.eu)
// ===================================================================

/**
 * FORM arithmetic for commutative relation: x y
 * 
 * * verified
 */
function rel_logic(fx, fy) {
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
}
/**
 * Shortcut for relation with n variables: x_1 ... x_n
 * 
 * * verified
 */
function rel(...fVals) {
    if (fVals.length > 1) {
        let val = 0;
        for (const i in fVals) {
            val = rel_logic( val,fVals[i] );
        }
        return val;
    }
    return -97; // error code
}

/**
 * FORM arithmetic for inversion/negation: (x)
 * 
 * * verified
 */
function inv_logic(fx) {
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
}
/**
 * Shortcut for n inversions/negations: (x)
 * 
 * * verified
 */
function inv(fx, n) {
    if (n > 0) {
        let val = fx;
        for (let i=0; i<n; i++) {
            val = inv_logic(val);
        }
        return val;
    }
    else return inv_logic(fx);
}


// ---------------------------
//  RE-ENTRY FORM CALCULATION
// ---------------------------

/**
 * FORM arithmetic for different self-equivalent re-entry FORMs
 * 
 * [Arguments] reEven: even re-entry-number? | lastOpen: last variable not crossed? | fVals: variables (0/1/2/3)
 */
function reEntry(reEven, lastOpen, altInterpr, ...fVals) {
    /* 
        * Note: calculation manually verified for… 
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
    // let uFORM = false; // ? not in use
    let iFORM = false;
    if (resEven) {
        if (lastOpen) iFORM = true;
        // else uFORM = true;
    }
    else {
        // if (reEven) uFORM = true;
        // else iFORM = true;
        if (!reEven) iFORM = true;
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
                val = rel(val,fVals[i]); // if no cross on last var, don't invert
            }
            else val = inv( rel(val,fVals[i]) );
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
                if (iFORM) return rel(3,fVals[index]); // iFORM: (ƒ=((ƒ)))x <-> (mn) x
                else return rel(2,fVals[index]);       // uFORM:  ƒ=((ƒ))x  <->  mn x
            }
            else {
                // [5] if everything else fails, use case distinction: uFORM iFORM (p.94); also according to:
                // uFORM iFORM (p.167) interpretation 1: recursion instruction ( ƒ=((ƒ)) and mn need to be differentiated)

                let case0 = 2; // re-entry ƒ=mn, because other mn=0
                if (lastOpen && !resEven && !reEven) case0 = inv(case0); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                for(let j=0; j<(fVals.length*repeat); j++) {
                    let fx = 0; // all other values will be (degenerated to) zero
                    if (j == i) {
                        if(fVals[index] == 2) fx = 0; // last occasion of mn/2 will be interpreted as 0
                        else fx = inv(0); // last occasion of (mn)/3 will be interpreted as (0)
                    }
                    if (lastOpen && j == fVals.length-1) case0 = rel(case0,fx); // if no cross on last var, don't invert
                    else case0 = inv( rel(case0,fx) );
                }
                let case1 = 2; // re-entry ƒ=mn, because other mn=1
                if (lastOpen && !resEven && !reEven) case1 = inv(case1); // cross for integrated FORMs with uneven res. inside open FORMs (iFORM b2)
                for(let j=0; j<(fVals.length*repeat); j++) {
                    let fx = 0; // all other values will be (degenerated to) zero
                    if (j == i) {
                        if(fVals[index] == 2) fx = 1; // last occasion of mn/2 will be interpreted as 1
                        else fx = inv(1); // last occasion of (mn)/3 will be interpreted as (1)
                    }
                    if (lastOpen && j == fVals.length-1) case1 = rel(case1,fx); // if no cross on last var, don't invert
                    else case1 = inv( rel(case1,fx) );
                }

                return cont( case0,case1 ); // contravalence of both cases
            }

        }
    }
    return -99; // error code
} // end reEntry()


// ---------------------------
//  COMPLEX FORM CALCULATIONS
// ---------------------------

/**
 * FORM arithmetic for "implication": (x)y
 */
 function implL(fx, fy) { // verified
    return rel( inv(fx),fy );
}
/**
 * FORM arithmetic for "implication": x(y)
 */
function implR(fx, fy) {
    return rel( fx,inv(fy) );
}

/**
 * FORM arithmetic for "presection"/"decision": ((x)y)
 */
function pre(fx, fy) { // verified
    return inv( implL(fx,fy) );
}
/**
 * FORM arithmetic for "postsection"/"decision": (x(y))
 */
function post(fx, fy) { // verified
    return inv( implR(fx,fy) );
}

/**
 * FORM arithmetic for "contravalence"/"either-or": ((x)y) (x(y))
 */
function cont(fx, fy) { // verified
    return rel( pre(fx,fy), post(fx,fy) );
}
/**
 * FORM arithmetic for "equivalence"/?: ( ((x)y) (x(y)) )
 */
function equiv(fx, fy) {
    return inv( cont(fx,fy) );
}


function uForm2(fA, fB, altInterpr=false) { // * calculation verified (both interpr.)
    return reEntry(undefined, false, altInterpr, fA, fB);
}
function iForm2(fA, fB, altInterpr=false) { // * calculation verified (both interpr.)
    return reEntry(undefined, true, altInterpr, fA, fB);
}
function uForm3(lastOpen, fA, fB, fC, altInterpr=false) { // * calculation verified closed & open (both interpr.)
    return reEntry(true, lastOpen, altInterpr, fA, fB, fC);
}
function iForm3(lastOpen, fA, fB, fC, altInterpr=false) { // * calculation verified closed & open (both interpr.)
    return reEntry(false, lastOpen, altInterpr, fA, fB, fC);
}
function uForm4(fA, fB, fC, fD, altInterpr=false) {
    return reEntry(undefined, false, altInterpr, fA, fB, fC, fD);
}
function iForm4(fA, fB, fC, fD, altInterpr=false) {
    return reEntry(undefined, true, altInterpr, fA, fB, fC, fD);
}
function uForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
    return reEntry(true, lastOpen, altInterpr, fA, fB, fC, fD, fE);
}
function iForm5(lastOpen, fA, fB, fC, fD, fE, altInterpr=false) {
    return reEntry(false, lastOpen, altInterpr, fA, fB, fC, fD, fE);
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
/* harmony export */   "calcAll": function() { return /* binding */ calcAll; },
/* harmony export */   "getVariables": function() { return /* binding */ getVariables; },
/* harmony export */   "encode": function() { return /* binding */ encode; },
/* harmony export */   "decode": function() { return /* binding */ decode; },
/* harmony export */   "intToDNA": function() { return /* binding */ intToDNA; },
/* harmony export */   "formToDNA": function() { return /* binding */ formToDNA; },
/* harmony export */   "dnaToFORM": function() { return /* binding */ dnaToFORM; },
/* harmony export */   "genRandomDNA": function() { return /* binding */ genRandomDNA; },
/* harmony export */   "vmap": function() { return /* binding */ vmap; },
/* harmony export */   "vmapPerspectives": function() { return /* binding */ vmapPerspectives; },
/* harmony export */   "vmapList": function() { return /* binding */ vmapList; },
/* harmony export */   "constructVmap": function() { return /* binding */ constructVmap; },
/* harmony export */   "dnaMatchesForm": function() { return /* binding */ dnaMatchesForm; },
/* harmony export */   "isValidDNA": function() { return /* binding */ isValidDNA; },
/* harmony export */   "generateVarNames": function() { return /* binding */ generateVarNames; },
/* harmony export */   "universe_1": function() { return /* binding */ universe_1; },
/* harmony export */   "universe_n": function() { return /* binding */ universe_n; },
/* harmony export */   "totalVarsFromDNA": function() { return /* binding */ totalVarsFromDNA; },
/* harmony export */   "repairDNA": function() { return /* binding */ repairDNA; },
/* harmony export */   "getDNAparts": function() { return /* binding */ getDNAparts; }
/* harmony export */ });
/* harmony import */ var _fform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fform */ "./src/lib/core/fform.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/string.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/bigint.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/validation.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/array.js");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! big-integer */ "./node_modules/big-integer/BigInteger.js");
/* harmony import */ var big_integer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(big_integer__WEBPACK_IMPORTED_MODULE_1__);



 // obsolete with better BigInt support in browsers
    
// ===================================================================
//     formform core module 'dna'
//     -- since 2019/20, by Peter Hofmann (formsandlines.eu)
// ===================================================================

// ----------------------------------------------------
// Extensions of FFORM
// ----------------------------------------------------

/**
 * extension to represent formDNA as FORM calculation
 */
function calcAll(input) {

    if (input.includes('::') && isValidDNA(input)) {

        const dna = input.split(':').pop();
        const results = dna.split('').reverse();

        const vnum = totalVarsFromDNA(dna);
        const vars = Array.from({length: vnum}, (_, i) => `"x_${i}"` );
        const vals = {};

        if (vnum < 1) {
            vals['Result'] = parseInt(results[0]);
            return vals;
        }

        const interKey = ''+vars.join()+';';

        for (let i=0; i < results.length; i++) {
            const interprVals = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum);
            // const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

            vals[interKey+interprVals] = results[i];
        }

        return vals;
    }

    return _fform__WEBPACK_IMPORTED_MODULE_0__.calcAll(input);
}

/**
 * extension to get variables from formDNA
 */
function getVariables(input) {
    if (typeof(input) === 'string' && input.includes('::')) {
        const { dna, formula, varList } = getDNAparts(input);

        if (varList !== undefined) return varList;
        else if (formula !== undefined) return _fform__WEBPACK_IMPORTED_MODULE_0__.getVariables(formula);

        const vnum = totalVarsFromDNA(dna);
        return Array.from({length: vnum}, (_, i) => `x_${i}` );
    }

    return _fform__WEBPACK_IMPORTED_MODULE_0__.getVariables(input);
}

// ----------------------------------------------------
// Conversions
// ----------------------------------------------------

/**
 * Encodes a FORM as a dna string
 */
function encode (_form, varorder=undefined) {
    const form = varorder ? _fform__WEBPACK_IMPORTED_MODULE_0__.reOrderVars(_form, varorder) : _form;

    return Object.values(calcAll(form)).reverse().join('');
}

/**
 * Decodes dna into (one of its) simplest corresponding FORM model(s) as a json-representation
 * 
 * ! EXPERIMENTAL
 */
function decode (dna, varList=undefined) {
    // ? -> remove 0-terms and groupings?

    if (varList && varList.length !== totalVarsFromDNA(dna)) throw new Error('Number of variables in given variable list doesn\'t match formDNA code length');
    if (!varList) varList = generateVarNames(totalVarsFromDNA(dna)); //.map(str => `"${str}"`);
    
    const univ = universe_n(varList);
    const vals = dna.split('').reverse();

    return univ.map((term, i) => {
        return `((${vals[i]})(${term}))`;
    }).join('');
}

/**
 * Takes an integer (usually BigInt) and a desired variable number and returns the corresponding formDNA 
 * 
 * * Note: variable number is needed because the intended number of leading zeros cannot be infered from the integer alone. If no variable number is given, the smallest variable number possible for the quaternion is assumed to generate valid formDNA.
 */
function intToDNA (int, vnum) {
    const quat = int.toString(4);
    if (quat.substr(0,1) === '-') throw new Error('Negative integers cannot be converted to formDNA.');
    if (quat.includes('.')) throw new Error('Fractional numbers cannot be converted to formDNA.');

    const dnaLen = vnum ? 4**vnum : (function minDnaLen(strLen, n=0) { 
        return 4**n >= strLen ? 4**n : minDnaLen(strLen, n+1);
    })(quat.length);

    if (quat.length > dnaLen) throw new Error('Integer size exceeds desired DNA length.');
    return (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(quat, dnaLen);
}

// ----------------------------------------------------
// Output
// ----------------------------------------------------

/**
 * converts a form into its formDNA representation in HTML
 */
function formToDNA (input, varorder=undefined, options=undefined) {
    const {output} = { output: undefined, ...options };

    let dna = undefined, formula = undefined, varList = undefined;
    if (input.includes('::')) {
        // if the input contains the mark '::' for formDNA, return it if it's valid
        if (!isValidDNA(input)) throw new Error('Input is not valid formDNA');

        const parts = getDNAparts(input);

        dna = parts.dna;
        formula = parts.formula;
        varList = parts.varList;
    }
    else {
        // if not, process the input as a FORM with specified or default varorder and encode it to dna
        dna = encode( input, (varorder ? varorder : undefined) );
        formula = input;
        varList = varorder ? varorder : getVariables(formula);
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

/**
 * converts formDNA with a given variable list/order into a graph representation of (one of its) simplest corresponding FORM model(s)
 */
function dnaToFORM (formDNA, varorder=undefined, options=undefined) {
    // ! not yet implemented!

    return decode(formDNA, varorder);
}

function genRandomDNA (vnum) {
    /* Generates a random formDNA string for a given variable number */

    const maxN = big_integer__WEBPACK_IMPORTED_MODULE_1__(4).pow( big_integer__WEBPACK_IMPORTED_MODULE_1__(4).pow(vnum) );
    const value_bin = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.getRandomBigInt)( maxN.subtract(1) );
    return intToDNA(value_bin, vnum);
}

function vmap (input, varorder=undefined, options=undefined) {
    /* generates vmap HTML from form/formDNA input */

    const { limitSize, convDefaultVarorder,
            size, gapGrow, marginFunc, strokeW } = {
                limitSize: true, convDefaultVarorder: true,
                size: undefined, gapGrow: 1.5, marginFunc: undefined, strokeW: 0.5,
                // filter: '1111', <- might add later
                ...options};

    let dna = undefined;
    let formula = input;

    if (input.includes('::') && isValidDNA(input)) {
        const dnaParts = getDNAparts(input);
        dna = dnaParts.dna;
        formula = dnaParts.formula;
        const varList = dnaParts.varList ? dnaParts.varList : getVariables(input);

        if (varorder !== undefined && varList !== undefined && !(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.equalArrays)(varorder, varList)) {
            throw new Error('Variable order is specified in the formDNA input and as an argument for the vmap function and they are different. Please select only one specification to avoid conflicting results.');
        }
        else if (varList) {
            varorder = varList;
        } else if (formula) {
            varorder = getVariables(formula);
        }
    }
    else if (!varorder) {
        varorder = getVariables(formula);
        if (convDefaultVarorder) varorder = _fform__WEBPACK_IMPORTED_MODULE_0__.matchDefaultVarOrder(varorder);
    }

    if (!dna) dna = encode(formula, varorder);
    const vnum = totalVarsFromDNA(dna);

    if (isNaN(vnum)) throw new Error('Invalid variable number for vmaps.');
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


    const vmapTree = constructVmap(reversedDNA, vnum, cell, margins);

    return {tree: vmapTree,
            input: input, 
            varorder: varorder, 
            options: options};
}

/**
 * Generates a list of vmap perspectives as permutations of a form/formDNA input
 * 
 * * Note: formDNA input not yet supported (permutation algorithm required)
 */
function vmapPerspectives (form, varorder=undefined, globalOptions=undefined, localOptions=undefined) {
    const {limitSize} = { limitSize: true, ...globalOptions };

    if (typeof(form) === 'string' && form.includes('::')) throw new Error('formDNA input is not yet supported for vmap perspectives.');

    if (varorder === undefined) varorder = _fform__WEBPACK_IMPORTED_MODULE_0__.matchDefaultVarOrder( getVariables(form) );
    const vnum = varorder.length;
    if (limitSize && vnum > 5) throw new Error('Rendering all the perspectives for vmaps with more than 5 variables is too computationally intensive with this implementation. You can, however, still compute single permutations by changing the variable order of your FORM. If you still want to proceed, add the option "limitSize: false" to your vmapPerspectives function call (using the formform library).');

    const formula = form; // ? support for JSON?

    const vmapPermutations = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_5__.permuteArray)(varorder)
        .map(varorder => vmap(formula, varorder, {
            hideInputLabel: true, 
            customLabel: undefined,
            ...localOptions }) );

    return vmapPermutations;
}

/**
 * Generates a list of vmaps from an array of FORM inputs
 * 
 * inputList format: [['form/formDNA', [varorder]/undefined, options/undefined], ...]
 */
function vmapList (inputList, globalOptions=undefined) {
    const vmaps = inputList.map(input => vmap(input[0], input[1], {...input[2], ...globalOptions}) );

    return vmaps;
}

// ----------------------------------------------------
// Data Structure
// ----------------------------------------------------

/**
 * Recursively constructs vmap data-structure from formDNA
 */
function constructVmap (reversedDNA, vnum, cell, margins) {
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
    
        for (let i=0; (vcount > 0 && i < 4) || (vcount === 0 && i < 1); i++) {
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
    };
    return constructVmap_recursive (reversedDNA, vnum, cell, margins);
}

// ----------------------------------------------------
// Validation
// ----------------------------------------------------

/**
 * Checks if a given DNA code matches a given FORM (+ optional variable list)
 */
function dnaMatchesForm (dna, form, _varList=undefined, options) {
    // const { } = { ...options };
    const varList = _varList ? _varList : _fform__WEBPACK_IMPORTED_MODULE_0__.getVariables(form);

    const validations = _varList ? [
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
            () => _fform__WEBPACK_IMPORTED_MODULE_0__.formMatchesVarList(form, varList),
            'FORM doesn\'t match the given variable list'),
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
            () => varList.length === totalVarsFromDNA(dna),
            'Number of variables in given variable list doesn\'t match formDNA code length'),
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
            () => encode(form, varList) === dna,
            'formDNA code is inconsistent with FORM interpretation results (respecting specified variable order)'),
    ] : [
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
            () => varList && varList.length === totalVarsFromDNA(dna),
            'Number of FORM variables doesn\'t match formDNA code length'),
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(
            () => encode(form) === dna,
            'formDNA code is inconsistent with FORM interpretation results'),
    ];

    return validations.every(validation => validation().cata({
        error: e => { throw new Error(e); },
        success: data => data,
    }) );

    return true;
}

/**
 * Checks if an input is in formDNA format
 * (has to be marked with '::' to not confuse it with a FORM out of constants)
 */
function isValidDNA (_input, options) {
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

    const { dna, formula, varList } = getDNAparts(input);
    const validations2 = [
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => totalVarsFromDNA(dna) >= 0,
            'formDNA code length is not in the range 4^x'),
        (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => !dna.split('').some(n => isNaN(parseInt(n)) || parseInt(n) < 0 || parseInt(n) > 3),
            'formDNA code is not in quaternion format (consisting only of the numbers 0/1/2/3)'),
        compareForm && formula !== undefined
        ? (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__.createValidation)(() => dnaMatchesForm(dna, formula, varList),
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

/**
 * ! EXPERIMENTAL
 */
function generateVarNames (vnum, excludeList = undefined) {
return Array.from({length: vnum}, (_, i) => {
    let candidate = `x_${i}`;
    if (excludeList !== undefined) {
        while (excludeList.includes(candidate)) {
            candidate = candidate+'′';
        }
    }
    return candidate;
});
}

/**
 * Returns the constituents of the 4-valued universe of 1 terms from a variable name
 * 
 * ! EXPERIMENTAL
 */
function universe_1 (x) {
if (x.length > 1) x = `"${x}"`;
return [ 
    `({(${x})}{2r|(${x})})`, 
    `({${x}}{2r|${x}})`, 
    `(({(${x})}${x})({2r|${x}}(${x})))`, 
    `(({${x}}(${x}))({2r|(${x})}${x}))`];
}

/**
 * Returns the constituents of the 4-valued universe of n terms from a list of n variable names
 * 
 * ! EXPERIMENTAL
 */
function universe_n (vars) {
const vnum = vars.length;
const univ1s = vars.map(v => universe_1(v));
return Array.from({length: 4**vnum}, (_, i) => {
    const iq = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum).split('');
    const univN = univ1s.reduce((formula, univ1, j, arr) => 
                        formula+`(${univ1[iq[j]]})`
                        +(j === arr.length-1 ? ')' : ''), '(');
    return vnum > 1 ? univN : univN.slice(2,-2);
});
}

/**
 * Calculates variable number from formDNA
 */
function totalVarsFromDNA (formDNA) { 
    // detach from formDNA mark '::'
    const dna = formDNA.split(':').pop();

    // calculate the number of variables from the lenght of the string
    const n = Math.log(dna.length)/Math.log(4); // log_4(dna length) = variable number
    return n % 1 === 0 ? n : NaN;
}

/**
 * Repairs a given string that is not in a valid formDNA form to pass as formDNA
 */
function repairDNA (input) {
    // if the input contains the mark '::' for formDNA, distinguish two cases
    if (input.includes('::')) {
        // Case 1: input is of form f.[x]::n or f::n -> f will be encoded as a FORM (with [x] as variable order, if it matches the FORMs variables in number and labels)
        // - If the formDNA has been well formed in the first place, the output will be equivalent
        // - If the dna part doesn't match the FORM part, the dna part will be corrected
        // - If the variable order doesn't match the FORM variables, it will also be corrected
        // Note that this case effectively interprets the input as FORM input and makes sure that the formDNA is consistent, because it is impossible to infer a FORM from its DNA.
        const parts = getDNAparts(input);
        if (parts.formula) {
            // if there is a [x]-part, extract variable order and check if its valid for the FORM
            let varList = undefined;
            try { // try...catch avoids interruption by Error
                if (parts.varList && _fform__WEBPACK_IMPORTED_MODULE_0__.formMatchesVarList(parts.formula, parts.varList)) varList = parts.varList;
            } catch (e) {
                console.error(e.message);
            }
            // re-encode to return correct formDNA for the given formula
            return formToDNA(parts.formula, varList);
        }
        // Case 2: input is of form ::n -> the output will be the same
        // Note that a FORM will not be decoded from the dna alone, since this FORM would be opinionated
        if (!isValidDNA(input)) return null;

        return input;
    }
    // if the input is not marked as formDNA, it will just be encoded as a FORM
    return formToDNA(input);
}

/**
 * Decomposes a formDNA string into its 3/2/1 parts
 */
function getDNAparts (formDNA) {
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

/***/ }),

/***/ "./src/lib/core/fform.js":
/*!*******************************!*\
  !*** ./src/lib/core/fform.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calc": function() { return /* binding */ calc; },
/* harmony export */   "calcAll": function() { return /* binding */ calcAll; },
/* harmony export */   "interCalc": function() { return /* binding */ interCalc; },
/* harmony export */   "interpret": function() { return /* binding */ interpret; },
/* harmony export */   "rel_logic": function() { return /* binding */ rel_logic; },
/* harmony export */   "inv_logic": function() { return /* binding */ inv_logic; },
/* harmony export */   "parseLinear": function() { return /* binding */ parseLinear; },
/* harmony export */   "convFromLinear": function() { return /* binding */ convFromLinear; },
/* harmony export */   "cleanLinear": function() { return /* binding */ cleanLinear; },
/* harmony export */   "constructFromLinear": function() { return /* binding */ constructFromLinear; },
/* harmony export */   "constructNested": function() { return /* binding */ constructNested; },
/* harmony export */   "expand_reEntry": function() { return /* binding */ expand_reEntry; },
/* harmony export */   "jsonString": function() { return /* binding */ jsonString; },
/* harmony export */   "getVariables": function() { return /* binding */ getVariables; },
/* harmony export */   "traverseForm": function() { return /* binding */ traverseForm; },
/* harmony export */   "getTotalVars": function() { return /* binding */ getTotalVars; },
/* harmony export */   "reOrderVars": function() { return /* binding */ reOrderVars; },
/* harmony export */   "decodeVars": function() { return /* binding */ decodeVars; },
/* harmony export */   "encodeVars": function() { return /* binding */ encodeVars; },
/* harmony export */   "matchDefaultVarOrder": function() { return /* binding */ matchDefaultVarOrder; },
/* harmony export */   "isValidForm": function() { return /* binding */ isValidForm; },
/* harmony export */   "isValidFormula": function() { return /* binding */ isValidFormula; },
/* harmony export */   "isValidReEntry": function() { return /* binding */ isValidReEntry; },
/* harmony export */   "isValidJSONForm": function() { return /* binding */ isValidJSONForm; },
/* harmony export */   "formMatchesVarList": function() { return /* binding */ formMatchesVarList; },
/* harmony export */   "getValidForm": function() { return /* binding */ getValidForm; }
/* harmony export */ });
/* harmony import */ var _fcalc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcalc */ "./src/lib/core/fcalc.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/string.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/array.js");
/* harmony import */ var formsandlines_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formsandlines-utils */ "./node_modules/formsandlines-utils/lib/validation.js");
/* harmony import */ var _common_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/helper */ "./src/common/helper.js");





// ===================================================================
//     formform core module 'form'
//     -- since 2018, by Peter Hofmann (formsandlines.eu)
// ===================================================================

// ----------------------------------------------------
// Form Calculation
// ----------------------------------------------------

/**
 * Calculates a given form recursively 
 * 
 * * Do NOT use this function for formulas with variables!
 * * Assumes x=0 for all variables. Use interCalc() instead.
 */
function calc(_form) {
    let fx = 0;
    // make sure to have a json form, if not: try to convert
    const form = getValidForm(_form);

    for (const i in form.space) {
        if (form.space[i].type === 'form') {
            fx = _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel( fx,calc(form.space[i]) );
        }
        else if (form.space[i].type === 'const') {
            fx = _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel( fx,form.space[i].value );
        }
        else if (form.space[i].type === 'var') {
            if(!isNaN(form.space[i].value)) fx = _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel( fx,form.space[i].value );
        }
        else if (form.space[i].type === 'unclear') {
            fx = _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel( fx,form.space[i].value );
        }
        else if (form.space[i].type === 'reEntry') {
            let nestedVals = [];
            const fReEntry = form.space[i];

            for (const j in fReEntry.nested) {
                nestedVals = [...nestedVals, calc(fReEntry.nested[j])];
            }
            // for even resolutions (total nested arguments), reEntry number will be undefined
            // since it doesn't matter if its even or odd
            const reEntryNumber = (fReEntry.nested.length % 2 === 0) ? undefined : fReEntry.reEven;
            
            // notation reading: {deepest, ..., shallowest}  use nestedVals.reverse() to reverse variables
            fx = _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel( fx, _fcalc__WEBPACK_IMPORTED_MODULE_0__.reEntry(reEntryNumber, fReEntry.lastOpen, fReEntry.altInterpretation, ...nestedVals) );
        }
    }
    if(form.unmarked) return fx;
    else return _fcalc__WEBPACK_IMPORTED_MODULE_0__.inv( fx );
}

/**
 * Interpret and calculate all possible values for the form
 * 
 * (refactored: 10.10.2020)
 */
function calcAll(_form) {
    const form = getValidForm(_form);

    const vars = getVariables(form);
    const vnum = vars.length;
    const vals = {};

    if (vnum < 1) {
        vals['Result'] = calc(form);
        return vals;
    }

    const interKey = ''+vars.join()+';';
    
    for (let i=0; i < 4**vnum; i++) {
        const interprVals = (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_2__.pad)(i.toString(4), vnum);
        const interpr = interprVals.split('').map((val,n) => ({var: vars[n], value: parseInt(val)}));

        vals[interKey+interprVals] = interCalc(form, interpr);
    }

    return vals;
}

/**
 * Interprets a form and calculates the result of the interpretation
 */
function interCalc(form, interpr) {
    return calc( interpret(form, interpr) );
}

/**
 * Interprets a form with specified values for each variable
 * 
 * interpr: [{var: 'x', value: n}, …]
 */
function interpret(_form, interpr) {
    const form = getValidForm(_form);

    const interprForm = JSON.parse(JSON.stringify(form)); // clone form

    traverseForm(interprForm, function(fBranch) {
        const space = fBranch.space;

        for (const i in space) {
            if (space[i].type === 'var') {
                for (const v in interpr) {
                    if (space[i].symbol === interpr[v].var) {

                        space[i].value = interpr[v].value;
                        break;
                    }
                }
            }
        }
    });

    return interprForm;
}

// ----------------------------------------------------
// Extensions of FCalc
// ----------------------------------------------------

// ! check if redundant
function rel_logic(fx, fy) {
    if(typeof(fx) === Array || typeof(fy) === Array) {
        return null;
    }
    return _fcalc__WEBPACK_IMPORTED_MODULE_0__.rel_logic(fx, fy);
}

// ! check if redundant
function inv_logic(fx) {
    if(typeof(fx) === Array) {
        return null;
    }
    return _fcalc__WEBPACK_IMPORTED_MODULE_0__.inv_logic(fx);
}

// ----------------------------------------------------
// Conversions
// ----------------------------------------------------

/**
 * Converts from paranthesis notation into JSON string and parses as JSON object
 */
function parseLinear(formula) {
    // convert the formula into a JSON string
    const jsonStr = convFromLinear(formula);

    // try parsing the string as a JSON object
    let json = null;
    try {
        json = JSON.parse(jsonStr);
    } catch(e) {
        console.log(e);
    }

    return json;
}

/**
 * clean formula string from whitespace
 */
function convFromLinear(formula) {
    const cleanFormula = cleanLinear(formula);
    const arr = constructFromLinear(cleanFormula);
    return (0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.flatten)(arr).join('');
}

function cleanLinear(formula) {
    let cleanFormula = '';
    let inQuote = false;
    let inSlash = false;

    for (const i in formula) {
        const char = formula[i];
        if(typeof(char) !== 'string') break; // prototype hacks

        if (char === '"' && !inSlash) inQuote = !inQuote;
        if (char === '/' && !inQuote) inSlash = !inSlash;

        // omit whitespace outside of quotes
        if (char === ' ') {
            if (inQuote || inSlash) cleanFormula += char;
        }
        else cleanFormula += char;
    }
    return cleanFormula;
}

/**
 * Converts from paranthesis notation to JSON-form
 */
function constructFromLinear(formula) {
    let compAll = [];
    let unmarked = true;

    // check for all enclosing outer form
    let countDepth = 0;
    let inQuote = false;
    let inSlash = false;
    for (const i in formula) {
        const char = formula[i];
        if(typeof(char) !== 'string') break; // prototype hacks

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

    for (const i in formula) {
        let char = formula[i];
        const prevChar = formula[i-1];
        if(typeof(char) !== 'string') break; // prototype hacks
        
        if (!inQuote && !inSlash) {
            if (char === ')' || char === '}') countDepth--;
            if (char === '(' || char === '{') {
                
                if (countDepth === 0) {
                    // first (x) doesn't need to be separated
                    if (i > 0) parts = [...parts, ''];
                }
                countDepth++;
            }
            else if ( (prevChar === ')' || prevChar === '}') && !(char === ')' || char === '}') ) {
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
    
    for (const i in parts) {

        if (parts[i][0] === '(') { 
            // if part is form
            const comp = [constructFromLinear(parts[i])];

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
                if (_content.startsWith(`..${reChar}._`)) type = [3,1];
                else if (_content.startsWith(`..${reChar}.`)) type = [3,0];
                else if (_content.startsWith(`..${reChar}_`)) type = [2,1];
                else if (_content.startsWith(`..${reChar}`)) type = [2,0];
                else if (_content.startsWith(`${reChar}_`)) type = [0,1];
                else if (_content.startsWith(reChar)) type = [0,0];

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

            for (const n in reNested) {
                comp = [...comp, constructFromLinear(reNested[n]) ];
                if (n < reNested.length-1) comp = [...comp, ','];
                // reNested[n] = constructFromLinear( reNested[n] );
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

            for (const j in parts[i]) {
                const char = parts[i][j];
                if(typeof(char) !== 'string') break; // prototype hacks

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

            for (const v in vars) {
                if(typeof(vars[v]) !== 'string') break; // prototype hacks

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

/**
 * Constructs a (real) nested form structure from the .nested array of the original re-entry json
 * 
 * TODO should be rewritten completely to get rid of all the mutation!
 */
function constructNested(reForm, options={}) {    
    let space = reForm.space = [];
    reForm.nested.reverse(); // MUST be reversed, because notation: {deepest, ..., shallowest}

    for (const i in reForm.nested) {
        if (i > 0) {
            // prepend the reEntry nesting before everything else in the space
            space.unshift( {type: 'form', reChild: true, space: []} ); // space.push <- order last
            const nestedForm = space[0]; // space[space.length-1] <- order last
            
            if (!reForm.nested[i].unmarked) nestedForm.space.push(reForm.nested[i]);
            else {
                // nestedForm.space.push(reForm.nested[i]);
                nestedForm.space.push(...reForm.nested[i].space); // push(reForm.nested[i]) for grouping
            }

            space = nestedForm.space;
        }
        else {
            if (!reForm.nested[i].unmarked) space.push(reForm.nested[i]);
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
        
        while (Object.prototype.hasOwnProperty.call(lastNested.space[0], 'reChild')) {        
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

/**
 * TODO should be rewritten completely to get rid of all the mutation!
 */
function expand_reEntry(_form, options={}) {
    const refForm = getValidForm(_form);
    const targetForm = JSON.parse(JSON.stringify(refForm)); // copy json object without identifying it

    // we must keep a running index to not confuse identical forms while reconstructing the reEntries
    // Note: this should be done more efficiently in the future
    let runningIndex = 0;
    traverseForm(refForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });
    runningIndex = 0;
    traverseForm(targetForm, function(branch) { branch.runningIndex = runningIndex, runningIndex++; });

    traverseForm(refForm, function(refBranch) {

        if(refBranch.type === 'reEntry') {
            traverseForm(targetForm, function(targetBranch) {

                if( (JSON.stringify(refBranch) === JSON.stringify(targetBranch)) && 
                        (refBranch.runningIndex === ( Object.prototype.hasOwnProperty.call(targetBranch, 'runningIndex') ? targetBranch.runningIndex : null)) ) {
                    targetBranch = constructNested(targetBranch, options);
                    return true;
                }
            });

        }
    });
    // delete running index property
    traverseForm(targetForm, function(branch) { delete branch.runningIndex; });

    return targetForm;
}


// ----------------------------------------------------
// Representation
// ----------------------------------------------------

/**
 * returns json-representation of the specified FORM
 */
function jsonString(_form, expandRE=false) {
    const form = getValidForm(expandRE ? expand_reEntry(_form) : _form);

    return JSON.stringify(form, undefined, 2);
}

// ----------------------------------------------------
// Helper
// ----------------------------------------------------

/**
 * parses a FORM to get all of its variables and sorts them using the JS Array.sort() method
 * which sorts by comparing UTF-16 code unit values.
 * 
 * * Note: By convention, the process of deriving formDNA from a given FORM involves ordering of the extracted variables by this same sorting method, if no special ordering is specified.
 */
function getVariables(_form) {
    const form = getValidForm(_form);

    let vars = [];
    traverseForm(form, function(fBranch) {
        const space = fBranch.space;

        for (const i in space) {
            if (space[i].type === 'var') {
                if (!(0,formsandlines_utils__WEBPACK_IMPORTED_MODULE_3__.include)(vars, space[i].symbol)) {
                    vars = [...vars, space[i].symbol];
                }
            }
        }
    });
    return vars.sort();
}

/**
 * traverses only form-types in a json tree
 */
function traverseForm(form,func) {
    const breakTrav = func.apply(this,[form]);

    if (form.space) { // form.type: 'form'
        if (form.space.length > 0) {
            for (const i in form.space) {
                if (form.space[i].type === 'form' || form.space[i].type === 'reEntry') {
                    const breakLoop = traverseForm(form.space[i],func);
                    if (breakLoop) break;
                }
            }
        }
    }
    else if (form.nested) { // form.type: 'reEntry'
        if (form.nested.length > 0) {
            for (const i in form.nested) {
                const breakLoop = traverseForm(form.nested[i],func);
                if (breakLoop) break;
            }
        }
    }
    else console.log('ERROR: Not a form!');

    return breakTrav;
}


/**
 * gets total variable number of a FORM
 */
function getTotalVars (formStr) {
    return getVariables(formStr.substr()).length;
}

/**
 * re-orders variables in a formula to match an ordering pattern
 */
function reOrderVars (formula, varorder) {
    return decodeVars( encodeVars(formula, varorder) );
}

/**
 * decodes variables in an encoded formula string with an optional decode pattern
 */
function decodeVars (encStr, decodePattern=undefined) {
    let revCode = _common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE_REV;
    if (decodePattern) {
    const keys = Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE_REV);
    const varPart = keys.slice(0,decodePattern.length);
    const modPart = keys.slice(-3);
    
    revCode = varPart.concat(modPart).reduce( (code,key,i) => ({...code, 
        [key]: i < decodePattern.length ? decodePattern[i] : _common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE_REV[key], }),{});
    }

    return encStr.split('')
            .map(c => Object.keys(revCode).indexOf(c) > -1 ? revCode[c] : c).join('');
}

/**
 * encodes variables in a formula string according to a given variable order (array)
 */
function encodeVars (formula, varorder=undefined) {
    if (!varorder) varorder = getVariables(formula);
    
    function escapeRegExp(string) { // thx to CoolAJ86: https://stackoverflow.com/a/6969486
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    
    // eslint-disable-next-line no-useless-escape
    const fixPtn = {alt: 'alt(?=\|)', rEven: '2r(?=\|)', rOdd: '2r+1(?=\|)'}; // ! check if useless escape
    const ptn = v => {
    // eslint-disable-next-line no-useless-escape
    if (v.length > 1) return `\"${escapeRegExp(v)}\"`; // (?<=\")(${v})(?=\") // ! check if useless escape
    return `${escapeRegExp(v)}`;
    };
    
    return varorder
    .reduce((encStr,v,i) => encStr
            .replace(new RegExp(fixPtn.alt, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE.alt )
            .replace(new RegExp(fixPtn.rEven, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE["2r"])
            .replace(new RegExp(fixPtn.rOdd, 'g'),_common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE["2r+1"])
            .replace(new RegExp(ptn(v), 'g'),(Object.keys(_common_helper__WEBPACK_IMPORTED_MODULE_1__.VARCODE_REV)[i]) )
                        , formula );
}

function matchDefaultVarOrder (varList) {
    /* Helper to match default orderings for calculation and vmaps */
    if (varList.join('') === 'ELR') return ['L','E','R'];
    if (varList.join('') === '+-LR') return ['-','L','R','+'];
    if (varList.join('') === '+-ELR') return ['-','L','E','R','+'];
    return varList;
}

/**
 * Checks if an input is a valid formula or JSON-FORM
 */
function isValidForm (input, options) {
    return typeof(input) === 'string' ? 
        isValidFormula(input, options) : isValidJSONForm(input, options);
}

/**
 * Checks if an input is a valid formula
 */
function isValidFormula (input, options) {
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
                () => curlyBrUnits.every(reEntry => isValidReEntry(reEntry)),
                'Option part of one or more re-entry constructions is not well-formed'),
        ];

        validations3.every(validation => validation().cata({
            error: e => { throw new Error(e); },
            success: data => data,
        }) );
    }

    return true;
}

/**
 * Checks if an input is a valid re-entry construction
 */
function isValidReEntry (input, options) {
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

/**
 * Checks if an input is a valid JSON-FORM
 */
function isValidJSONForm (input, options) { // ? draft
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

/**
 * Checks if a given FORM matches a given variable list
 */
function formMatchesVarList (form, varList) {
    const varsForm = getVariables(form);

    const match = varList.length === varsForm.length
        && varsForm.every(v_a => varList.some(v_b => v_a === v_b));
    if (!match) throw new Error('FORM doesn\'t match the given variable list');

    return true;
}

function getValidForm(input) {
    if(typeof(input) === 'string') {
        if (!isValidFormula(input)) throw new Error('Input is not a valid formula');
        return parseLinear(input);
    } else {
        // >>> need to check json input too
        return input;
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




/* harmony default export */ __webpack_exports__["default"] = ({ calc: _core_fcalc__WEBPACK_IMPORTED_MODULE_0__, form: _core_fform__WEBPACK_IMPORTED_MODULE_1__, dna: _core_fdna__WEBPACK_IMPORTED_MODULE_2__ });
}();
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvYmlnLWludGVnZXIvQmlnSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi9iaWdpbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvZm9ybXNhbmRsaW5lcy11dGlscy9saWIvb2JqZWN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL2Zvcm1zYW5kbGluZXMtdXRpbHMvbGliL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9mb3Jtc2FuZGxpbmVzLXV0aWxzL2xpYi92YWxpZGF0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvbW1vbi9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmNhbGMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL2NvcmUvZmRuYS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9saWIvY29yZS9mZm9ybS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvbGliL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUztBQUM1QjtBQUNBLDJCQUEyQixTQUFTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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ckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNKcUM7QUFDQTtBQUNGOztBQUVuQywrREFBZSxDQUFDLEtBQUssZ0RBQU0sK0NBQUssMkNBQUUsRSIsImZpbGUiOiJmb3JtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwidmFyIGJpZ0ludCA9IChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICB2YXIgQkFTRSA9IDFlNyxcclxuICAgICAgICBMT0dfQkFTRSA9IDcsXHJcbiAgICAgICAgTUFYX0lOVCA9IDkwMDcxOTkyNTQ3NDA5OTIsXHJcbiAgICAgICAgTUFYX0lOVF9BUlIgPSBzbWFsbFRvQXJyYXkoTUFYX0lOVCksXHJcbiAgICAgICAgREVGQVVMVF9BTFBIQUJFVCA9IFwiMDEyMzQ1Njc4OWFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCI7XHJcblxyXG4gICAgdmFyIHN1cHBvcnRzTmF0aXZlQmlnSW50ID0gdHlwZW9mIEJpZ0ludCA9PT0gXCJmdW5jdGlvblwiO1xyXG5cclxuICAgIGZ1bmN0aW9uIEludGVnZXIodiwgcmFkaXgsIGFscGhhYmV0LCBjYXNlU2Vuc2l0aXZlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICBpZiAodHlwZW9mIHJhZGl4ICE9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gK3JhZGl4ID09PSAxMCAmJiAhYWxwaGFiZXQgPyBwYXJzZVZhbHVlKHYpIDogcGFyc2VCYXNlKHYsIHJhZGl4LCBhbHBoYWJldCwgY2FzZVNlbnNpdGl2ZSk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVmFsdWUodik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQmlnSW50ZWdlcih2YWx1ZSwgc2lnbikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNpZ24gPSBzaWduO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEludGVnZXIucHJvdG90eXBlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBTbWFsbEludGVnZXIodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdmFsdWUgPCAwO1xyXG4gICAgICAgIHRoaXMuaXNTbWFsbCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnRlZ2VyLnByb3RvdHlwZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gTmF0aXZlQmlnSW50KHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW50ZWdlci5wcm90b3R5cGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzUHJlY2lzZShuKSB7XHJcbiAgICAgICAgcmV0dXJuIC1NQVhfSU5UIDwgbiAmJiBuIDwgTUFYX0lOVDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzbWFsbFRvQXJyYXkobikgeyAvLyBGb3IgcGVyZm9ybWFuY2UgcmVhc29ucyBkb2Vzbid0IHJlZmVyZW5jZSBCQVNFLCBuZWVkIHRvIGNoYW5nZSB0aGlzIGZ1bmN0aW9uIGlmIEJBU0UgY2hhbmdlc1xyXG4gICAgICAgIGlmIChuIDwgMWU3KVxyXG4gICAgICAgICAgICByZXR1cm4gW25dO1xyXG4gICAgICAgIGlmIChuIDwgMWUxNClcclxuICAgICAgICAgICAgcmV0dXJuIFtuICUgMWU3LCBNYXRoLmZsb29yKG4gLyAxZTcpXTtcclxuICAgICAgICByZXR1cm4gW24gJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlNykgJSAxZTcsIE1hdGguZmxvb3IobiAvIDFlMTQpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhcnJheVRvU21hbGwoYXJyKSB7IC8vIElmIEJBU0UgY2hhbmdlcyB0aGlzIGZ1bmN0aW9uIG1heSBuZWVkIHRvIGNoYW5nZVxyXG4gICAgICAgIHRyaW0oYXJyKTtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgICAgICBpZiAobGVuZ3RoIDwgNCAmJiBjb21wYXJlQWJzKGFyciwgTUFYX0lOVF9BUlIpIDwgMCkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIGFyclswXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIGFyclswXSArIGFyclsxXSAqIEJBU0U7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gYXJyWzBdICsgKGFyclsxXSArIGFyclsyXSAqIEJBU0UpICogQkFTRTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaW0odikge1xyXG4gICAgICAgIHZhciBpID0gdi5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHZbLS1pXSA9PT0gMCk7XHJcbiAgICAgICAgdi5sZW5ndGggPSBpICsgMTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBcnJheShsZW5ndGgpIHsgLy8gZnVuY3Rpb24gc2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gWWFmZmxlJ3MgbGlicmFyeSBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0JpZ0ludGVnZXJcclxuICAgICAgICB2YXIgeCA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG4gICAgICAgIHZhciBpID0gLTE7XHJcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB4W2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJ1bmNhdGUobikge1xyXG4gICAgICAgIGlmIChuID4gMCkgcmV0dXJuIE1hdGguZmxvb3Iobik7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoYSwgYikgeyAvLyBhc3N1bWVzIGEgYW5kIGIgYXJlIGFycmF5cyB3aXRoIGEubGVuZ3RoID49IGIubGVuZ3RoXHJcbiAgICAgICAgdmFyIGxfYSA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBsX2IgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsX2EpLFxyXG4gICAgICAgICAgICBjYXJyeSA9IDAsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBzdW0sIGk7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxfYjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gKyBiW2ldICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gc3VtID49IGJhc2UgPyAxIDogMDtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGkgPCBsX2EpIHtcclxuICAgICAgICAgICAgc3VtID0gYVtpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IHN1bSA9PT0gYmFzZSA/IDEgOiAwO1xyXG4gICAgICAgICAgICByW2krK10gPSBzdW0gLSBjYXJyeSAqIGJhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXJyeSA+IDApIHIucHVzaChjYXJyeSk7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQW55KGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggPj0gYi5sZW5ndGgpIHJldHVybiBhZGQoYSwgYik7XHJcbiAgICAgICAgcmV0dXJuIGFkZChiLCBhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRTbWFsbChhLCBjYXJyeSkgeyAvLyBhc3N1bWVzIGEgaXMgYXJyYXksIGNhcnJ5IGlzIG51bWJlciB3aXRoIDAgPD0gY2FycnkgPCBNQVhfSU5UXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHN1bSwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IGFbaV0gLSBiYXNlICsgY2Fycnk7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihzdW0gLyBiYXNlKTtcclxuICAgICAgICAgICAgcltpXSA9IHN1bSAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgY2FycnkgKz0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZSwgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYSwgTWF0aC5hYnMoYikpLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkQW55KGEsIGIpLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBsdXMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGEgPCAwICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3VidHJhY3Qobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByZWNpc2UoYSArIGIpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihhICsgYik7XHJcbiAgICAgICAgICAgIGIgPSBzbWFsbFRvQXJyYXkoTWF0aC5hYnMoYikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoYWRkU21hbGwoYiwgTWF0aC5hYnMoYSkpLCBhIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5wbHVzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5hZGQ7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKyBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucGx1cyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYWRkO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHsgLy8gYXNzdW1lcyBhIGFuZCBiIGFyZSBhcnJheXMgd2l0aCBhID49IGJcclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gbmV3IEFycmF5KGFfbCksXHJcbiAgICAgICAgICAgIGJvcnJvdyA9IDAsXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBpLCBkaWZmZXJlbmNlO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBiX2w7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSAtIGJvcnJvdyAtIGJbaV07XHJcbiAgICAgICAgICAgIGlmIChkaWZmZXJlbmNlIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZGlmZmVyZW5jZSArPSBiYXNlO1xyXG4gICAgICAgICAgICAgICAgYm9ycm93ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGJvcnJvdyA9IDA7XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGkgPSBiX2w7IGkgPCBhX2w7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSAtIGJvcnJvdztcclxuICAgICAgICAgICAgaWYgKGRpZmZlcmVuY2UgPCAwKSBkaWZmZXJlbmNlICs9IGJhc2U7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcltpKytdID0gZGlmZmVyZW5jZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKDsgaSA8IGFfbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJbaV0gPSBhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN1YnRyYWN0QW55KGEsIGIsIHNpZ24pIHtcclxuICAgICAgICB2YXIgdmFsdWU7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVBYnMoYSwgYikgPj0gMCkge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHN1YnRyYWN0KGEsIGIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gc3VidHJhY3QoYiwgYSk7XHJcbiAgICAgICAgICAgIHNpZ24gPSAhc2lnbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFsdWUgPSBhcnJheVRvU21hbGwodmFsdWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNpZ24pIHZhbHVlID0gLXZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih2YWx1ZSwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3VidHJhY3RTbWFsbChhLCBiLCBzaWduKSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgYiBpcyBudW1iZXIgd2l0aCAwIDw9IGIgPCBNQVhfSU5UXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgY2FycnkgPSAtYixcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIGRpZmZlcmVuY2U7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlID0gYVtpXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIGJhc2UpO1xyXG4gICAgICAgICAgICBkaWZmZXJlbmNlICU9IGJhc2U7XHJcbiAgICAgICAgICAgIHJbaV0gPSBkaWZmZXJlbmNlIDwgMCA/IGRpZmZlcmVuY2UgKyBiYXNlIDogZGlmZmVyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgciA9IGFycmF5VG9TbWFsbChyKTtcclxuICAgICAgICBpZiAodHlwZW9mIHIgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNpZ24pIHIgPSAtcjtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIocik7XHJcbiAgICAgICAgfSByZXR1cm4gbmV3IEJpZ0ludGVnZXIociwgc2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKG4ubmVnYXRlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHRoaXMudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIGlmIChuLmlzU21hbGwpXHJcbiAgICAgICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKGEsIE1hdGguYWJzKGIpLCB0aGlzLnNpZ24pO1xyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdEFueShhLCBiLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1pbnVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGQobi5uZWdhdGUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKGEgLSBiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN1YnRyYWN0U21hbGwoYiwgTWF0aC5hYnMoYSksIGEgPj0gMCk7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5taW51cyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAtIHBhcnNlVmFsdWUodikudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5taW51cyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc3VidHJhY3Q7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcih0aGlzLnZhbHVlLCAhdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5lZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc2lnbiA9IHRoaXMuc2lnbjtcclxuICAgICAgICB2YXIgc21hbGwgPSBuZXcgU21hbGxJbnRlZ2VyKC10aGlzLnZhbHVlKTtcclxuICAgICAgICBzbWFsbC5zaWduID0gIXNpZ247XHJcbiAgICAgICAgcmV0dXJuIHNtYWxsO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmVnYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KC10aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHRoaXMudmFsdWUsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmFicyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcihNYXRoLmFicyh0aGlzLnZhbHVlKSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hYnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSA+PSAwID8gdGhpcy52YWx1ZSA6IC10aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlMb25nKGEsIGIpIHtcclxuICAgICAgICB2YXIgYV9sID0gYS5sZW5ndGgsXHJcbiAgICAgICAgICAgIGJfbCA9IGIubGVuZ3RoLFxyXG4gICAgICAgICAgICBsID0gYV9sICsgYl9sLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCksXHJcbiAgICAgICAgICAgIGJhc2UgPSBCQVNFLFxyXG4gICAgICAgICAgICBwcm9kdWN0LCBjYXJyeSwgaSwgYV9pLCBiX2o7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGFfbDsgKytpKSB7XHJcbiAgICAgICAgICAgIGFfaSA9IGFbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYl9sOyArK2opIHtcclxuICAgICAgICAgICAgICAgIGJfaiA9IGJbal07XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gYV9pICogYl9qICsgcltpICsgal07XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICAgICAgcltpICsgal0gPSBwcm9kdWN0IC0gY2FycnkgKiBiYXNlO1xyXG4gICAgICAgICAgICAgICAgcltpICsgaiArIDFdICs9IGNhcnJ5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbChhLCBiKSB7IC8vIGFzc3VtZXMgYSBpcyBhcnJheSwgYiBpcyBudW1iZXIgd2l0aCB8YnwgPCBCQVNFXHJcbiAgICAgICAgdmFyIGwgPSBhLmxlbmd0aCxcclxuICAgICAgICAgICAgciA9IG5ldyBBcnJheShsKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMCxcclxuICAgICAgICAgICAgcHJvZHVjdCwgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSBhW2ldICogYiArIGNhcnJ5O1xyXG4gICAgICAgICAgICBjYXJyeSA9IE1hdGguZmxvb3IocHJvZHVjdCAvIGJhc2UpO1xyXG4gICAgICAgICAgICByW2ldID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGNhcnJ5ID4gMCkge1xyXG4gICAgICAgICAgICByW2krK10gPSBjYXJyeSAlIGJhc2U7XHJcbiAgICAgICAgICAgIGNhcnJ5ID0gTWF0aC5mbG9vcihjYXJyeSAvIGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaGlmdExlZnQoeCwgbikge1xyXG4gICAgICAgIHZhciByID0gW107XHJcbiAgICAgICAgd2hpbGUgKG4tLSA+IDApIHIucHVzaCgwKTtcclxuICAgICAgICByZXR1cm4gci5jb25jYXQoeCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlLYXJhdHN1YmEoeCwgeSkge1xyXG4gICAgICAgIHZhciBuID0gTWF0aC5tYXgoeC5sZW5ndGgsIHkubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgaWYgKG4gPD0gMzApIHJldHVybiBtdWx0aXBseUxvbmcoeCwgeSk7XHJcbiAgICAgICAgbiA9IE1hdGguY2VpbChuIC8gMik7XHJcblxyXG4gICAgICAgIHZhciBiID0geC5zbGljZShuKSxcclxuICAgICAgICAgICAgYSA9IHguc2xpY2UoMCwgbiksXHJcbiAgICAgICAgICAgIGQgPSB5LnNsaWNlKG4pLFxyXG4gICAgICAgICAgICBjID0geS5zbGljZSgwLCBuKTtcclxuXHJcbiAgICAgICAgdmFyIGFjID0gbXVsdGlwbHlLYXJhdHN1YmEoYSwgYyksXHJcbiAgICAgICAgICAgIGJkID0gbXVsdGlwbHlLYXJhdHN1YmEoYiwgZCksXHJcbiAgICAgICAgICAgIGFiY2QgPSBtdWx0aXBseUthcmF0c3ViYShhZGRBbnkoYSwgYiksIGFkZEFueShjLCBkKSk7XHJcblxyXG4gICAgICAgIHZhciBwcm9kdWN0ID0gYWRkQW55KGFkZEFueShhYywgc2hpZnRMZWZ0KHN1YnRyYWN0KHN1YnRyYWN0KGFiY2QsIGFjKSwgYmQpLCBuKSksIHNoaWZ0TGVmdChiZCwgMiAqIG4pKTtcclxuICAgICAgICB0cmltKHByb2R1Y3QpO1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb24gaXMgZGVyaXZlZCBmcm9tIGEgc3VyZmFjZSBmaXQgb2YgYSBncmFwaCBwbG90dGluZyB0aGUgcGVyZm9ybWFuY2UgZGlmZmVyZW5jZVxyXG4gICAgLy8gYmV0d2VlbiBsb25nIG11bHRpcGxpY2F0aW9uIGFuZCBrYXJhdHN1YmEgbXVsdGlwbGljYXRpb24gdmVyc3VzIHRoZSBsZW5ndGhzIG9mIHRoZSB0d28gYXJyYXlzLlxyXG4gICAgZnVuY3Rpb24gdXNlS2FyYXRzdWJhKGwxLCBsMikge1xyXG4gICAgICAgIHJldHVybiAtMC4wMTIgKiBsMSAtIDAuMDEyICogbDIgKyAwLjAwMDAxNSAqIGwxICogbDIgPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgc2lnbiA9IHRoaXMuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBhYnM7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgaWYgKGIgPT09IC0xKSByZXR1cm4gdGhpcy5uZWdhdGUoKTtcclxuICAgICAgICAgICAgYWJzID0gTWF0aC5hYnMoYik7XHJcbiAgICAgICAgICAgIGlmIChhYnMgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIobXVsdGlwbHlTbWFsbChhLCBhYnMpLCBzaWduKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gc21hbGxUb0FycmF5KGFicyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VLYXJhdHN1YmEoYS5sZW5ndGgsIGIubGVuZ3RoKSkgLy8gS2FyYXRzdWJhIGlzIG9ubHkgZmFzdGVyIGZvciBjZXJ0YWluIGFycmF5IHNpemVzXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseUthcmF0c3ViYShhLCBiKSwgc2lnbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhhLCBiKSwgc2lnbik7XHJcbiAgICB9O1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnRpbWVzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubXVsdGlwbHk7XHJcblxyXG4gICAgZnVuY3Rpb24gbXVsdGlwbHlTbWFsbEFuZEFycmF5KGEsIGIsIHNpZ24pIHsgLy8gYSA+PSAwXHJcbiAgICAgICAgaWYgKGEgPCBCQVNFKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQmlnSW50ZWdlcihtdWx0aXBseVNtYWxsKGIsIGEpLCBzaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKG11bHRpcGx5TG9uZyhiLCBzbWFsbFRvQXJyYXkoYSkpLCBzaWduKTtcclxuICAgIH1cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZShhLnZhbHVlICogdGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIoYS52YWx1ZSAqIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbXVsdGlwbHlTbWFsbEFuZEFycmF5KE1hdGguYWJzKGEudmFsdWUpLCBzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpLCB0aGlzLnNpZ24gIT09IGEuc2lnbik7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuX211bHRpcGx5QnlTbWFsbCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGEudmFsdWUgPT09IDApIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgIGlmIChhLnZhbHVlID09PSAxKSByZXR1cm4gdGhpcztcclxuICAgICAgICBpZiAoYS52YWx1ZSA9PT0gLTEpIHJldHVybiB0aGlzLm5lZ2F0ZSgpO1xyXG4gICAgICAgIHJldHVybiBtdWx0aXBseVNtYWxsQW5kQXJyYXkoTWF0aC5hYnMoYS52YWx1ZSksIHRoaXMudmFsdWUsIHRoaXMuc2lnbiAhPT0gYS5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VWYWx1ZSh2KS5fbXVsdGlwbHlCeVNtYWxsKHRoaXMpO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudGltZXMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgKiBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudGltZXMgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm11bHRpcGx5O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNxdWFyZShhKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmFzc2VydCgyICogQkFTRSAqIEJBU0UgPCBNQVhfSU5UKTtcclxuICAgICAgICB2YXIgbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICByID0gY3JlYXRlQXJyYXkobCArIGwpLFxyXG4gICAgICAgICAgICBiYXNlID0gQkFTRSxcclxuICAgICAgICAgICAgcHJvZHVjdCwgY2FycnksIGksIGFfaSwgYV9qO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgYV9pID0gYVtpXTtcclxuICAgICAgICAgICAgY2FycnkgPSAwIC0gYV9pICogYV9pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaTsgaiA8IGw7IGorKykge1xyXG4gICAgICAgICAgICAgICAgYV9qID0gYVtqXTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3QgPSAyICogKGFfaSAqIGFfaikgKyByW2kgKyBqXSArIGNhcnJ5O1xyXG4gICAgICAgICAgICAgICAgY2FycnkgPSBNYXRoLmZsb29yKHByb2R1Y3QgLyBiYXNlKTtcclxuICAgICAgICAgICAgICAgIHJbaSArIGpdID0gcHJvZHVjdCAtIGNhcnJ5ICogYmFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByW2kgKyBsXSA9IGNhcnJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmltKHIpO1xyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoc3F1YXJlKHRoaXMudmFsdWUpLCBmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc3F1YXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWUgKiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChpc1ByZWNpc2UodmFsdWUpKSByZXR1cm4gbmV3IFNtYWxsSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHNxdWFyZShzbWFsbFRvQXJyYXkoTWF0aC5hYnModGhpcy52YWx1ZSkpKSwgZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnNxdWFyZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSAqIHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZDEoYSwgYikgeyAvLyBMZWZ0IG92ZXIgZnJvbSBwcmV2aW91cyB2ZXJzaW9uLiBQZXJmb3JtcyBmYXN0ZXIgdGhhbiBkaXZNb2QyIG9uIHNtYWxsZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGNyZWF0ZUFycmF5KGIubGVuZ3RoKSxcclxuICAgICAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gYltiX2wgLSAxXSxcclxuICAgICAgICAgICAgLy8gbm9ybWFsaXphdGlvblxyXG4gICAgICAgICAgICBsYW1iZGEgPSBNYXRoLmNlaWwoYmFzZSAvICgyICogZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KSksXHJcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IG11bHRpcGx5U21hbGwoYSwgbGFtYmRhKSxcclxuICAgICAgICAgICAgZGl2aXNvciA9IG11bHRpcGx5U21hbGwoYiwgbGFtYmRhKSxcclxuICAgICAgICAgICAgcXVvdGllbnREaWdpdCwgc2hpZnQsIGNhcnJ5LCBib3Jyb3csIGksIGwsIHE7XHJcbiAgICAgICAgaWYgKHJlbWFpbmRlci5sZW5ndGggPD0gYV9sKSByZW1haW5kZXIucHVzaCgwKTtcclxuICAgICAgICBkaXZpc29yLnB1c2goMCk7XHJcbiAgICAgICAgZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0ID0gZGl2aXNvcltiX2wgLSAxXTtcclxuICAgICAgICBmb3IgKHNoaWZ0ID0gYV9sIC0gYl9sOyBzaGlmdCA+PSAwOyBzaGlmdC0tKSB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50RGlnaXQgPSBiYXNlIC0gMTtcclxuICAgICAgICAgICAgaWYgKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gIT09IGRpdmlzb3JNb3N0U2lnbmlmaWNhbnREaWdpdCkge1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnREaWdpdCA9IE1hdGguZmxvb3IoKHJlbWFpbmRlcltzaGlmdCArIGJfbF0gKiBiYXNlICsgcmVtYWluZGVyW3NoaWZ0ICsgYl9sIC0gMV0pIC8gZGl2aXNvck1vc3RTaWduaWZpY2FudERpZ2l0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBxdW90aWVudERpZ2l0IDw9IGJhc2UgLSAxXHJcbiAgICAgICAgICAgIGNhcnJ5ID0gMDtcclxuICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgbCA9IGRpdmlzb3IubGVuZ3RoO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSArPSBxdW90aWVudERpZ2l0ICogZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgIHEgPSBNYXRoLmZsb29yKGNhcnJ5IC8gYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBib3Jyb3cgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSAoY2FycnkgLSBxICogYmFzZSk7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IHE7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9ycm93IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gYm9ycm93ICsgYmFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3Jyb3cgPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBib3Jyb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9ycm93ID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aGlsZSAoYm9ycm93ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBxdW90aWVudERpZ2l0IC09IDE7XHJcbiAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FycnkgKz0gcmVtYWluZGVyW3NoaWZ0ICsgaV0gLSBiYXNlICsgZGl2aXNvcltpXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FycnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWFpbmRlcltzaGlmdCArIGldID0gY2FycnkgKyBiYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJyeSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtYWluZGVyW3NoaWZ0ICsgaV0gPSBjYXJyeTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FycnkgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJvcnJvdyArPSBjYXJyeTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXN1bHRbc2hpZnRdID0gcXVvdGllbnREaWdpdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZGVub3JtYWxpemF0aW9uXHJcbiAgICAgICAgcmVtYWluZGVyID0gZGl2TW9kU21hbGwocmVtYWluZGVyLCBsYW1iZGEpWzBdO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChyZW1haW5kZXIpXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXZNb2QyKGEsIGIpIHsgLy8gSW1wbGVtZW50YXRpb24gaWRlYSBzaGFtZWxlc3NseSBzdG9sZW4gZnJvbSBTaWxlbnQgTWF0dCdzIGxpYnJhcnkgaHR0cDovL3NpbGVudG1hdHQuY29tL2JpZ2ludGVnZXIvXHJcbiAgICAgICAgLy8gUGVyZm9ybXMgZmFzdGVyIHRoYW4gZGl2TW9kMSBvbiBsYXJnZXIgaW5wdXQgc2l6ZXMuXHJcbiAgICAgICAgdmFyIGFfbCA9IGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBiX2wgPSBiLmxlbmd0aCxcclxuICAgICAgICAgICAgcmVzdWx0ID0gW10sXHJcbiAgICAgICAgICAgIHBhcnQgPSBbXSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGd1ZXNzLCB4bGVuLCBoaWdoeCwgaGlnaHksIGNoZWNrO1xyXG4gICAgICAgIHdoaWxlIChhX2wpIHtcclxuICAgICAgICAgICAgcGFydC51bnNoaWZ0KGFbLS1hX2xdKTtcclxuICAgICAgICAgICAgdHJpbShwYXJ0KTtcclxuICAgICAgICAgICAgaWYgKGNvbXBhcmVBYnMocGFydCwgYikgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhsZW4gPSBwYXJ0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaGlnaHggPSBwYXJ0W3hsZW4gLSAxXSAqIGJhc2UgKyBwYXJ0W3hsZW4gLSAyXTtcclxuICAgICAgICAgICAgaGlnaHkgPSBiW2JfbCAtIDFdICogYmFzZSArIGJbYl9sIC0gMl07XHJcbiAgICAgICAgICAgIGlmICh4bGVuID4gYl9sKSB7XHJcbiAgICAgICAgICAgICAgICBoaWdoeCA9IChoaWdoeCArIDEpICogYmFzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBndWVzcyA9IE1hdGguY2VpbChoaWdoeCAvIGhpZ2h5KTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgY2hlY2sgPSBtdWx0aXBseVNtYWxsKGIsIGd1ZXNzKTtcclxuICAgICAgICAgICAgICAgIGlmIChjb21wYXJlQWJzKGNoZWNrLCBwYXJ0KSA8PSAwKSBicmVhaztcclxuICAgICAgICAgICAgICAgIGd1ZXNzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGd1ZXNzKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZ3Vlc3MpO1xyXG4gICAgICAgICAgICBwYXJ0ID0gc3VidHJhY3QocGFydCwgY2hlY2spO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQucmV2ZXJzZSgpO1xyXG4gICAgICAgIHJldHVybiBbYXJyYXlUb1NtYWxsKHJlc3VsdCksIGFycmF5VG9TbWFsbChwYXJ0KV07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGl2TW9kU21hbGwodmFsdWUsIGxhbWJkYSkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGgsXHJcbiAgICAgICAgICAgIHF1b3RpZW50ID0gY3JlYXRlQXJyYXkobGVuZ3RoKSxcclxuICAgICAgICAgICAgYmFzZSA9IEJBU0UsXHJcbiAgICAgICAgICAgIGksIHEsIHJlbWFpbmRlciwgZGl2aXNvcjtcclxuICAgICAgICByZW1haW5kZXIgPSAwO1xyXG4gICAgICAgIGZvciAoaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIGRpdmlzb3IgPSByZW1haW5kZXIgKiBiYXNlICsgdmFsdWVbaV07XHJcbiAgICAgICAgICAgIHEgPSB0cnVuY2F0ZShkaXZpc29yIC8gbGFtYmRhKTtcclxuICAgICAgICAgICAgcmVtYWluZGVyID0gZGl2aXNvciAtIHEgKiBsYW1iZGE7XHJcbiAgICAgICAgICAgIHF1b3RpZW50W2ldID0gcSB8IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIHJlbWFpbmRlciB8IDBdO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRpdk1vZEFueShzZWxmLCB2KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlLCBuID0gcGFyc2VWYWx1ZSh2KTtcclxuICAgICAgICBpZiAoc3VwcG9ydHNOYXRpdmVCaWdJbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtuZXcgTmF0aXZlQmlnSW50KHNlbGYudmFsdWUgLyBuLnZhbHVlKSwgbmV3IE5hdGl2ZUJpZ0ludChzZWxmLnZhbHVlICUgbi52YWx1ZSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHNlbGYudmFsdWUsIGIgPSBuLnZhbHVlO1xyXG4gICAgICAgIHZhciBxdW90aWVudDtcclxuICAgICAgICBpZiAoYiA9PT0gMCkgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGRpdmlkZSBieSB6ZXJvXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmlzU21hbGwpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgU21hbGxJbnRlZ2VyKHRydW5jYXRlKGEgLyBiKSksIG5ldyBTbWFsbEludGVnZXIoYSAlIGIpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChiID09PSAxKSByZXR1cm4gW3NlbGYsIEludGVnZXJbMF1dO1xyXG4gICAgICAgICAgICBpZiAoYiA9PSAtMSkgcmV0dXJuIFtzZWxmLm5lZ2F0ZSgpLCBJbnRlZ2VyWzBdXTtcclxuICAgICAgICAgICAgdmFyIGFicyA9IE1hdGguYWJzKGIpO1xyXG4gICAgICAgICAgICBpZiAoYWJzIDwgQkFTRSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2RTbWFsbChhLCBhYnMpO1xyXG4gICAgICAgICAgICAgICAgcXVvdGllbnQgPSBhcnJheVRvU21hbGwodmFsdWVbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlbWFpbmRlciA9IHZhbHVlWzFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuc2lnbikgcmVtYWluZGVyID0gLXJlbWFpbmRlcjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcXVvdGllbnQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zaWduICE9PSBuLnNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFNtYWxsSW50ZWdlcihxdW90aWVudCksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBzZWxmLnNpZ24gIT09IG4uc2lnbiksIG5ldyBTbWFsbEludGVnZXIocmVtYWluZGVyKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiA9IHNtYWxsVG9BcnJheShhYnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBYnMoYSwgYik7XHJcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IC0xKSByZXR1cm4gW0ludGVnZXJbMF0sIHNlbGZdO1xyXG4gICAgICAgIGlmIChjb21wYXJpc29uID09PSAwKSByZXR1cm4gW0ludGVnZXJbc2VsZi5zaWduID09PSBuLnNpZ24gPyAxIDogLTFdLCBJbnRlZ2VyWzBdXTtcclxuXHJcbiAgICAgICAgLy8gZGl2TW9kMSBpcyBmYXN0ZXIgb24gc21hbGxlciBpbnB1dCBzaXplc1xyXG4gICAgICAgIGlmIChhLmxlbmd0aCArIGIubGVuZ3RoIDw9IDIwMClcclxuICAgICAgICAgICAgdmFsdWUgPSBkaXZNb2QxKGEsIGIpO1xyXG4gICAgICAgIGVsc2UgdmFsdWUgPSBkaXZNb2QyKGEsIGIpO1xyXG5cclxuICAgICAgICBxdW90aWVudCA9IHZhbHVlWzBdO1xyXG4gICAgICAgIHZhciBxU2lnbiA9IHNlbGYuc2lnbiAhPT0gbi5zaWduLFxyXG4gICAgICAgICAgICBtb2QgPSB2YWx1ZVsxXSxcclxuICAgICAgICAgICAgbVNpZ24gPSBzZWxmLnNpZ247XHJcbiAgICAgICAgaWYgKHR5cGVvZiBxdW90aWVudCA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAocVNpZ24pIHF1b3RpZW50ID0gLXF1b3RpZW50O1xyXG4gICAgICAgICAgICBxdW90aWVudCA9IG5ldyBTbWFsbEludGVnZXIocXVvdGllbnQpO1xyXG4gICAgICAgIH0gZWxzZSBxdW90aWVudCA9IG5ldyBCaWdJbnRlZ2VyKHF1b3RpZW50LCBxU2lnbik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb2QgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgaWYgKG1TaWduKSBtb2QgPSAtbW9kO1xyXG4gICAgICAgICAgICBtb2QgPSBuZXcgU21hbGxJbnRlZ2VyKG1vZCk7XHJcbiAgICAgICAgfSBlbHNlIG1vZCA9IG5ldyBCaWdJbnRlZ2VyKG1vZCwgbVNpZ24pO1xyXG4gICAgICAgIHJldHVybiBbcXVvdGllbnQsIG1vZF07XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gZGl2TW9kQW55KHRoaXMsIHYpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHF1b3RpZW50OiByZXN1bHRbMF0sXHJcbiAgICAgICAgICAgIHJlbWFpbmRlcjogcmVzdWx0WzFdXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmRpdm1vZCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZGl2bW9kO1xyXG5cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBkaXZNb2RBbnkodGhpcywgdilbMF07XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5vdmVyID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5kaXZpZGUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgLyBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm92ZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmRpdmlkZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm92ZXIgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5kaXZpZGU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gZGl2TW9kQW55KHRoaXMsIHYpWzFdO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubW9kID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5yZW1haW5kZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmF0aXZlQmlnSW50KHRoaXMudmFsdWUgJSBwYXJzZVZhbHVlKHYpLnZhbHVlKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLnJlbWFpbmRlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubW9kID0gQmlnSW50ZWdlci5wcm90b3R5cGUucmVtYWluZGVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUubW9kO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnBvdyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWUsXHJcbiAgICAgICAgICAgIHZhbHVlLCB4LCB5O1xyXG4gICAgICAgIGlmIChiID09PSAwKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEgPT09IDEpIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSAtMSkgcmV0dXJuIG4uaXNFdmVuKCkgPyBJbnRlZ2VyWzFdIDogSW50ZWdlclstMV07XHJcbiAgICAgICAgaWYgKG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gSW50ZWdlclswXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFuLmlzU21hbGwpIHRocm93IG5ldyBFcnJvcihcIlRoZSBleHBvbmVudCBcIiArIG4udG9TdHJpbmcoKSArIFwiIGlzIHRvbyBsYXJnZS5cIik7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTbWFsbCkge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmVjaXNlKHZhbHVlID0gTWF0aC5wb3coYSwgYikpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodHJ1bmNhdGUodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeCA9IHRoaXM7XHJcbiAgICAgICAgeSA9IEludGVnZXJbMV07XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKGIgJiAxID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB5ID0geS50aW1lcyh4KTtcclxuICAgICAgICAgICAgICAgIC0tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGIgLz0gMjtcclxuICAgICAgICAgICAgeCA9IHguc3F1YXJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB5O1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucG93ID0gQmlnSW50ZWdlci5wcm90b3R5cGUucG93O1xyXG5cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucG93ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodik7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLnZhbHVlLCBiID0gbi52YWx1ZTtcclxuICAgICAgICB2YXIgXzAgPSBCaWdJbnQoMCksIF8xID0gQmlnSW50KDEpLCBfMiA9IEJpZ0ludCgyKTtcclxuICAgICAgICBpZiAoYiA9PT0gXzApIHJldHVybiBJbnRlZ2VyWzFdO1xyXG4gICAgICAgIGlmIChhID09PSBfMCkgcmV0dXJuIEludGVnZXJbMF07XHJcbiAgICAgICAgaWYgKGEgPT09IF8xKSByZXR1cm4gSW50ZWdlclsxXTtcclxuICAgICAgICBpZiAoYSA9PT0gQmlnSW50KC0xKSkgcmV0dXJuIG4uaXNFdmVuKCkgPyBJbnRlZ2VyWzFdIDogSW50ZWdlclstMV07XHJcbiAgICAgICAgaWYgKG4uaXNOZWdhdGl2ZSgpKSByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChfMCk7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzO1xyXG4gICAgICAgIHZhciB5ID0gSW50ZWdlclsxXTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoKGIgJiBfMSkgPT09IF8xKSB7XHJcbiAgICAgICAgICAgICAgICB5ID0geS50aW1lcyh4KTtcclxuICAgICAgICAgICAgICAgIC0tYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYiA9PT0gXzApIGJyZWFrO1xyXG4gICAgICAgICAgICBiIC89IF8yO1xyXG4gICAgICAgICAgICB4ID0geC5zcXVhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubW9kUG93ID0gZnVuY3Rpb24gKGV4cCwgbW9kKSB7XHJcbiAgICAgICAgZXhwID0gcGFyc2VWYWx1ZShleHApO1xyXG4gICAgICAgIG1vZCA9IHBhcnNlVmFsdWUobW9kKTtcclxuICAgICAgICBpZiAobW9kLmlzWmVybygpKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdGFrZSBtb2RQb3cgd2l0aCBtb2R1bHVzIDBcIik7XHJcbiAgICAgICAgdmFyIHIgPSBJbnRlZ2VyWzFdLFxyXG4gICAgICAgICAgICBiYXNlID0gdGhpcy5tb2QobW9kKTtcclxuICAgICAgICBpZiAoZXhwLmlzTmVnYXRpdmUoKSkge1xyXG4gICAgICAgICAgICBleHAgPSBleHAubXVsdGlwbHkoSW50ZWdlclstMV0pO1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5tb2RJbnYobW9kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd2hpbGUgKGV4cC5pc1Bvc2l0aXZlKCkpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UuaXNaZXJvKCkpIHJldHVybiBJbnRlZ2VyWzBdO1xyXG4gICAgICAgICAgICBpZiAoZXhwLmlzT2RkKCkpIHIgPSByLm11bHRpcGx5KGJhc2UpLm1vZChtb2QpO1xyXG4gICAgICAgICAgICBleHAgPSBleHAuZGl2aWRlKDIpO1xyXG4gICAgICAgICAgICBiYXNlID0gYmFzZS5zcXVhcmUoKS5tb2QobW9kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2RQb3cgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZFBvdyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZFBvdztcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wYXJlQWJzKGEsIGIpIHtcclxuICAgICAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLmxlbmd0aCA+IGIubGVuZ3RoID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGFbaV0gPiBiW2ldID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlQWJzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSByZXR1cm4gMTtcclxuICAgICAgICByZXR1cm4gY29tcGFyZUFicyhhLCBiKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBuID0gcGFyc2VWYWx1ZSh2KSxcclxuICAgICAgICAgICAgYSA9IE1hdGguYWJzKHRoaXMudmFsdWUpLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAobi5pc1NtYWxsKSB7XHJcbiAgICAgICAgICAgIGIgPSBNYXRoLmFicyhiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmVBYnMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlVmFsdWUodikudmFsdWU7XHJcbiAgICAgICAgYSA9IGEgPj0gMCA/IGEgOiAtYTtcclxuICAgICAgICBiID0gYiA+PSAwID8gYiA6IC1iO1xyXG4gICAgICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIC8vIFNlZSBkaXNjdXNzaW9uIGFib3V0IGNvbXBhcmlzb24gd2l0aCBJbmZpbml0eTpcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0ZXJvbHNvbi9CaWdJbnRlZ2VyLmpzL2lzc3Vlcy82MVxyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodiksXHJcbiAgICAgICAgICAgIGEgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBiID0gbi52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaWduICE9PSBuLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG4uc2lnbiA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zaWduID8gLTEgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcGFyZUFicyhhLCBiKSAqICh0aGlzLnNpZ24gPyAtMSA6IDEpO1xyXG4gICAgfTtcclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmNvbXBhcmU7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICBpZiAodiA9PT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodiA9PT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLFxyXG4gICAgICAgICAgICBhID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgYiA9IG4udmFsdWU7XHJcbiAgICAgICAgaWYgKG4uaXNTbWFsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA9PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYSA8IDAgIT09IG4uc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gYSA8IDAgPyAtMSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhIDwgMCA/IDEgOiAtMTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmNvbXBhcmVUbyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIGlmICh2ID09PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2ID09PSAtSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB2YXIgYiA9IHBhcnNlVmFsdWUodikudmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIGEgPT09IGIgPyAwIDogYSA+IGIgPyAxIDogLTE7XHJcbiAgICB9XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmNvbXBhcmVUbyA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuY29tcGFyZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5lcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZXF1YWxzID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5lcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpICE9PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubmVxID0gTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ub3RFcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm5lcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzID0gQmlnSW50ZWdlci5wcm90b3R5cGUubmVxID0gQmlnSW50ZWdlci5wcm90b3R5cGUubm90RXF1YWxzO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmdyZWF0ZXIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPiAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuZ3QgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdyZWF0ZXIgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmd0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyID0gQmlnSW50ZWdlci5wcm90b3R5cGUuZ3QgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmxlc3NlciA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZSh2KSA8IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5sdCA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVzc2VyID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5sdCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVzc2VyID0gQmlnSW50ZWdlci5wcm90b3R5cGUubHQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXI7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuZ3JlYXRlck9yRXF1YWxzID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21wYXJlKHYpID49IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5nZXEgPSBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmdyZWF0ZXJPckVxdWFscyA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuZ2VxID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5nZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5ncmVhdGVyT3JFcXVhbHM7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhcmUodikgPD0gMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmxlcSA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmxlcSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUubGVzc2VyT3JFcXVhbHMgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXEgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5sZXNzZXJPckVxdWFscztcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlWzBdICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDA7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc0V2ZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgQmlnSW50KDEpKSA9PT0gQmlnSW50KDApO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLmlzT2RkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVswXSAmIDEpID09PSAxO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNPZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlICYgMSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc09kZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMudmFsdWUgJiBCaWdJbnQoMSkpID09PSBCaWdJbnQoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuc2lnbjtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzUG9zaXRpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPiAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQb3NpdGl2ZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQb3NpdGl2ZTtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNpZ247XHJcbiAgICB9O1xyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5pc05lZ2F0aXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlIDwgMDtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzTmVnYXRpdmUgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzTmVnYXRpdmU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNVbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzVW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy52YWx1ZSkgPT09IDE7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5pc1VuaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWJzKCkudmFsdWUgPT09IEJpZ0ludCgxKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc1plcm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSAwO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSBCaWdJbnQoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNEaXZpc2libGVCeSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpO1xyXG4gICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uaXNVbml0KCkpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChuLmNvbXBhcmVBYnMoMikgPT09IDApIHJldHVybiB0aGlzLmlzRXZlbigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZChuKS5pc1plcm8oKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmlzRGl2aXNpYmxlQnkgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5pc0RpdmlzaWJsZUJ5O1xyXG5cclxuICAgIGZ1bmN0aW9uIGlzQmFzaWNQcmltZSh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSB2LmFicygpO1xyXG4gICAgICAgIGlmIChuLmlzVW5pdCgpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4uZXF1YWxzKDIpIHx8IG4uZXF1YWxzKDMpIHx8IG4uZXF1YWxzKDUpKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAobi5pc0V2ZW4oKSB8fCBuLmlzRGl2aXNpYmxlQnkoMykgfHwgbi5pc0RpdmlzaWJsZUJ5KDUpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG4ubGVzc2VyKDQ5KSkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgLy8gd2UgZG9uJ3Qga25vdyBpZiBpdCdzIHByaW1lOiBsZXQgdGhlIG90aGVyIGZ1bmN0aW9ucyBmaWd1cmUgaXQgb3V0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWlsbGVyUmFiaW5UZXN0KG4sIGEpIHtcclxuICAgICAgICB2YXIgblByZXYgPSBuLnByZXYoKSxcclxuICAgICAgICAgICAgYiA9IG5QcmV2LFxyXG4gICAgICAgICAgICByID0gMCxcclxuICAgICAgICAgICAgZCwgdCwgaSwgeDtcclxuICAgICAgICB3aGlsZSAoYi5pc0V2ZW4oKSkgYiA9IGIuZGl2aWRlKDIpLCByKys7XHJcbiAgICAgICAgbmV4dDogZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG4ubGVzc2VyKGFbaV0pKSBjb250aW51ZTtcclxuICAgICAgICAgICAgeCA9IGJpZ0ludChhW2ldKS5tb2RQb3coYiwgbik7XHJcbiAgICAgICAgICAgIGlmICh4LmlzVW5pdCgpIHx8IHguZXF1YWxzKG5QcmV2KSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGZvciAoZCA9IHIgLSAxOyBkICE9IDA7IGQtLSkge1xyXG4gICAgICAgICAgICAgICAgeCA9IHguc3F1YXJlKCkubW9kKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHguaXNVbml0KCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh4LmVxdWFscyhuUHJldikpIGNvbnRpbnVlIG5leHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgXCJzdHJpY3RcIiB0byB0cnVlIHRvIGZvcmNlIEdSSC1zdXBwb3J0ZWQgbG93ZXIgYm91bmQgb2YgMipsb2coTileMlxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IGZ1bmN0aW9uIChzdHJpY3QpIHtcclxuICAgICAgICB2YXIgaXNQcmltZSA9IGlzQmFzaWNQcmltZSh0aGlzKTtcclxuICAgICAgICBpZiAoaXNQcmltZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gaXNQcmltZTtcclxuICAgICAgICB2YXIgbiA9IHRoaXMuYWJzKCk7XHJcbiAgICAgICAgdmFyIGJpdHMgPSBuLmJpdExlbmd0aCgpO1xyXG4gICAgICAgIGlmIChiaXRzIDw9IDY0KVxyXG4gICAgICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIFsyLCAzLCA1LCA3LCAxMSwgMTMsIDE3LCAxOSwgMjMsIDI5LCAzMSwgMzddKTtcclxuICAgICAgICB2YXIgbG9nTiA9IE1hdGgubG9nKDIpICogYml0cy50b0pTTnVtYmVyKCk7XHJcbiAgICAgICAgdmFyIHQgPSBNYXRoLmNlaWwoKHN0cmljdCA9PT0gdHJ1ZSkgPyAoMiAqIE1hdGgucG93KGxvZ04sIDIpKSA6IGxvZ04pO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgaSA9IDA7IGkgPCB0OyBpKyspIHtcclxuICAgICAgICAgICAgYS5wdXNoKGJpZ0ludChpICsgMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWlsbGVyUmFiaW5UZXN0KG4sIGEpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuaXNQcmltZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcmltZSA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmlzUHJpbWU7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gZnVuY3Rpb24gKGl0ZXJhdGlvbnMsIHJuZykge1xyXG4gICAgICAgIHZhciBpc1ByaW1lID0gaXNCYXNpY1ByaW1lKHRoaXMpO1xyXG4gICAgICAgIGlmIChpc1ByaW1lICE9PSB1bmRlZmluZWQpIHJldHVybiBpc1ByaW1lO1xyXG4gICAgICAgIHZhciBuID0gdGhpcy5hYnMoKTtcclxuICAgICAgICB2YXIgdCA9IGl0ZXJhdGlvbnMgPT09IHVuZGVmaW5lZCA/IDUgOiBpdGVyYXRpb25zO1xyXG4gICAgICAgIGZvciAodmFyIGEgPSBbXSwgaSA9IDA7IGkgPCB0OyBpKyspIHtcclxuICAgICAgICAgICAgYS5wdXNoKGJpZ0ludC5yYW5kQmV0d2VlbigyLCBuLm1pbnVzKDIpLCBybmcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1pbGxlclJhYmluVGVzdChuLCBhKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLmlzUHJvYmFibGVQcmltZSA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lID0gQmlnSW50ZWdlci5wcm90b3R5cGUuaXNQcm9iYWJsZVByaW1lO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludiA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgdmFyIHQgPSBiaWdJbnQuemVybywgbmV3VCA9IGJpZ0ludC5vbmUsIHIgPSBwYXJzZVZhbHVlKG4pLCBuZXdSID0gdGhpcy5hYnMoKSwgcSwgbGFzdFQsIGxhc3RSO1xyXG4gICAgICAgIHdoaWxlICghbmV3Ui5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICBxID0gci5kaXZpZGUobmV3Uik7XHJcbiAgICAgICAgICAgIGxhc3RUID0gdDtcclxuICAgICAgICAgICAgbGFzdFIgPSByO1xyXG4gICAgICAgICAgICB0ID0gbmV3VDtcclxuICAgICAgICAgICAgciA9IG5ld1I7XHJcbiAgICAgICAgICAgIG5ld1QgPSBsYXN0VC5zdWJ0cmFjdChxLm11bHRpcGx5KG5ld1QpKTtcclxuICAgICAgICAgICAgbmV3UiA9IGxhc3RSLnN1YnRyYWN0KHEubXVsdGlwbHkobmV3UikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXIuaXNVbml0KCkpIHRocm93IG5ldyBFcnJvcih0aGlzLnRvU3RyaW5nKCkgKyBcIiBhbmQgXCIgKyBuLnRvU3RyaW5nKCkgKyBcIiBhcmUgbm90IGNvLXByaW1lXCIpO1xyXG4gICAgICAgIGlmICh0LmNvbXBhcmUoMCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHQgPSB0LmFkZChuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNOZWdhdGl2ZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0Lm5lZ2F0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcblxyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5tb2RJbnYgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm1vZEludiA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm1vZEludjtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc2lnbikge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VidHJhY3RTbWFsbCh2YWx1ZSwgMSwgdGhpcy5zaWduKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdGhpcy5zaWduKTtcclxuICAgIH07XHJcbiAgICBTbWFsbEludGVnZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUgKyAxIDwgTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgKyAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodGhpcy52YWx1ZSArIEJpZ0ludCgxKSk7XHJcbiAgICB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNpZ24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKGFkZFNtYWxsKHZhbHVlLCAxKSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJ0cmFjdFNtYWxsKHZhbHVlLCAxLCB0aGlzLnNpZ24pO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSAtIDEgPiAtTUFYX0lOVCkgcmV0dXJuIG5ldyBTbWFsbEludGVnZXIodmFsdWUgLSAxKTtcclxuICAgICAgICByZXR1cm4gbmV3IEJpZ0ludGVnZXIoTUFYX0lOVF9BUlIsIHRydWUpO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludCh0aGlzLnZhbHVlIC0gQmlnSW50KDEpKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcG93ZXJzT2ZUd28gPSBbMV07XHJcbiAgICB3aGlsZSAoMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdIDw9IEJBU0UpIHBvd2Vyc09mVHdvLnB1c2goMiAqIHBvd2Vyc09mVHdvW3Bvd2Vyc09mVHdvLmxlbmd0aCAtIDFdKTtcclxuICAgIHZhciBwb3dlcnMyTGVuZ3RoID0gcG93ZXJzT2ZUd28ubGVuZ3RoLCBoaWdoZXN0UG93ZXIyID0gcG93ZXJzT2ZUd29bcG93ZXJzMkxlbmd0aCAtIDFdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNoaWZ0X2lzU21hbGwobikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhuKSA8PSBCQVNFO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0TGVmdCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIG4gPSBwYXJzZVZhbHVlKHYpLnRvSlNOdW1iZXIoKTtcclxuICAgICAgICBpZiAoIXNoaWZ0X2lzU21hbGwobikpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFN0cmluZyhuKSArIFwiIGlzIHRvbyBsYXJnZSBmb3Igc2hpZnRpbmcuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiA8IDApIHJldHVybiB0aGlzLnNoaWZ0UmlnaHQoLW4pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzO1xyXG4gICAgICAgIGlmIChyZXN1bHQuaXNaZXJvKCkpIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgd2hpbGUgKG4gPj0gcG93ZXJzMkxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQubXVsdGlwbHkoaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIG4gLT0gcG93ZXJzMkxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQubXVsdGlwbHkocG93ZXJzT2ZUd29bbl0pO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc2hpZnRMZWZ0ID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQgPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5zaGlmdExlZnQ7XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIHJlbVF1bztcclxuICAgICAgICB2YXIgbiA9IHBhcnNlVmFsdWUodikudG9KU051bWJlcigpO1xyXG4gICAgICAgIGlmICghc2hpZnRfaXNTbWFsbChuKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKG4pICsgXCIgaXMgdG9vIGxhcmdlIGZvciBzaGlmdGluZy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuIDwgMCkgcmV0dXJuIHRoaXMuc2hpZnRMZWZ0KC1uKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcztcclxuICAgICAgICB3aGlsZSAobiA+PSBwb3dlcnMyTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaXNaZXJvKCkgfHwgKHJlc3VsdC5pc05lZ2F0aXZlKCkgJiYgcmVzdWx0LmlzVW5pdCgpKSkgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgcmVtUXVvID0gZGl2TW9kQW55KHJlc3VsdCwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlbVF1b1sxXS5pc05lZ2F0aXZlKCkgPyByZW1RdW9bMF0ucHJldigpIDogcmVtUXVvWzBdO1xyXG4gICAgICAgICAgICBuIC09IHBvd2VyczJMZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZW1RdW8gPSBkaXZNb2RBbnkocmVzdWx0LCBwb3dlcnNPZlR3b1tuXSk7XHJcbiAgICAgICAgcmV0dXJuIHJlbVF1b1sxXS5pc05lZ2F0aXZlKCkgPyByZW1RdW9bMF0ucHJldigpIDogcmVtUXVvWzBdO1xyXG4gICAgfTtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuc2hpZnRSaWdodCA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUuc2hpZnRSaWdodCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnNoaWZ0UmlnaHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYml0d2lzZSh4LCB5LCBmbikge1xyXG4gICAgICAgIHkgPSBwYXJzZVZhbHVlKHkpO1xyXG4gICAgICAgIHZhciB4U2lnbiA9IHguaXNOZWdhdGl2ZSgpLCB5U2lnbiA9IHkuaXNOZWdhdGl2ZSgpO1xyXG4gICAgICAgIHZhciB4UmVtID0geFNpZ24gPyB4Lm5vdCgpIDogeCxcclxuICAgICAgICAgICAgeVJlbSA9IHlTaWduID8geS5ub3QoKSA6IHk7XHJcbiAgICAgICAgdmFyIHhEaWdpdCA9IDAsIHlEaWdpdCA9IDA7XHJcbiAgICAgICAgdmFyIHhEaXZNb2QgPSBudWxsLCB5RGl2TW9kID0gbnVsbDtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKCF4UmVtLmlzWmVybygpIHx8ICF5UmVtLmlzWmVybygpKSB7XHJcbiAgICAgICAgICAgIHhEaXZNb2QgPSBkaXZNb2RBbnkoeFJlbSwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHhEaWdpdCA9IHhEaXZNb2RbMV0udG9KU051bWJlcigpO1xyXG4gICAgICAgICAgICBpZiAoeFNpZ24pIHtcclxuICAgICAgICAgICAgICAgIHhEaWdpdCA9IGhpZ2hlc3RQb3dlcjIgLSAxIC0geERpZ2l0OyAvLyB0d28ncyBjb21wbGVtZW50IGZvciBuZWdhdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHlEaXZNb2QgPSBkaXZNb2RBbnkoeVJlbSwgaGlnaGVzdFBvd2VyMik7XHJcbiAgICAgICAgICAgIHlEaWdpdCA9IHlEaXZNb2RbMV0udG9KU051bWJlcigpO1xyXG4gICAgICAgICAgICBpZiAoeVNpZ24pIHtcclxuICAgICAgICAgICAgICAgIHlEaWdpdCA9IGhpZ2hlc3RQb3dlcjIgLSAxIC0geURpZ2l0OyAvLyB0d28ncyBjb21wbGVtZW50IGZvciBuZWdhdGl2ZSBudW1iZXJzXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHhSZW0gPSB4RGl2TW9kWzBdO1xyXG4gICAgICAgICAgICB5UmVtID0geURpdk1vZFswXTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZm4oeERpZ2l0LCB5RGlnaXQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHN1bSA9IGZuKHhTaWduID8gMSA6IDAsIHlTaWduID8gMSA6IDApICE9PSAwID8gYmlnSW50KC0xKSA6IGJpZ0ludCgwKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gcmVzdWx0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XHJcbiAgICAgICAgICAgIHN1bSA9IHN1bS5tdWx0aXBseShoaWdoZXN0UG93ZXIyKS5hZGQoYmlnSW50KHJlc3VsdFtpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3VtO1xyXG4gICAgfVxyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uZWdhdGUoKS5wcmV2KCk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5ub3QgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLm5vdCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm5vdDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5hbmQgPSBmdW5jdGlvbiAobikge1xyXG4gICAgICAgIHJldHVybiBiaXR3aXNlKHRoaXMsIG4sIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICYgYjsgfSk7XHJcbiAgICB9O1xyXG4gICAgTmF0aXZlQmlnSW50LnByb3RvdHlwZS5hbmQgPSBTbWFsbEludGVnZXIucHJvdG90eXBlLmFuZCA9IEJpZ0ludGVnZXIucHJvdG90eXBlLmFuZDtcclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5vciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgfCBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLm9yID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5vciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLm9yO1xyXG5cclxuICAgIEJpZ0ludGVnZXIucHJvdG90eXBlLnhvciA9IGZ1bmN0aW9uIChuKSB7XHJcbiAgICAgICAgcmV0dXJuIGJpdHdpc2UodGhpcywgbiwgZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEgXiBiOyB9KTtcclxuICAgIH07XHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnhvciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUueG9yID0gQmlnSW50ZWdlci5wcm90b3R5cGUueG9yO1xyXG5cclxuICAgIHZhciBMT0JNQVNLX0kgPSAxIDw8IDMwLCBMT0JNQVNLX0JJID0gKEJBU0UgJiAtQkFTRSkgKiAoQkFTRSAmIC1CQVNFKSB8IExPQk1BU0tfSTtcclxuICAgIGZ1bmN0aW9uIHJvdWdoTE9CKG4pIHsgLy8gZ2V0IGxvd2VzdE9uZUJpdCAocm91Z2gpXHJcbiAgICAgICAgLy8gU21hbGxJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAzMClcclxuICAgICAgICAvLyBCaWdJbnRlZ2VyOiByZXR1cm4gTWluKGxvd2VzdE9uZUJpdChuKSwgMSA8PCAxNCkgW0JBU0U9MWU3XVxyXG4gICAgICAgIHZhciB2ID0gbi52YWx1ZSxcclxuICAgICAgICAgICAgeCA9IHR5cGVvZiB2ID09PSBcIm51bWJlclwiID8gdiB8IExPQk1BU0tfSSA6XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJiaWdpbnRcIiA/IHYgfCBCaWdJbnQoTE9CTUFTS19JKSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdlswXSArIHZbMV0gKiBCQVNFIHwgTE9CTUFTS19CSTtcclxuICAgICAgICByZXR1cm4geCAmIC14O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGludGVnZXJMb2dhcml0aG0odmFsdWUsIGJhc2UpIHtcclxuICAgICAgICBpZiAoYmFzZS5jb21wYXJlVG8odmFsdWUpIDw9IDApIHtcclxuICAgICAgICAgICAgdmFyIHRtcCA9IGludGVnZXJMb2dhcml0aG0odmFsdWUsIGJhc2Uuc3F1YXJlKGJhc2UpKTtcclxuICAgICAgICAgICAgdmFyIHAgPSB0bXAucDtcclxuICAgICAgICAgICAgdmFyIGUgPSB0bXAuZTtcclxuICAgICAgICAgICAgdmFyIHQgPSBwLm11bHRpcGx5KGJhc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gdC5jb21wYXJlVG8odmFsdWUpIDw9IDAgPyB7IHA6IHQsIGU6IGUgKiAyICsgMSB9IDogeyBwOiBwLCBlOiBlICogMiB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4geyBwOiBiaWdJbnQoMSksIGU6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG4gPSB0aGlzO1xyXG4gICAgICAgIGlmIChuLmNvbXBhcmVUbyhiaWdJbnQoMCkpIDwgMCkge1xyXG4gICAgICAgICAgICBuID0gbi5uZWdhdGUoKS5zdWJ0cmFjdChiaWdJbnQoMSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobi5jb21wYXJlVG8oYmlnSW50KDApKSA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYmlnSW50KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmlnSW50KGludGVnZXJMb2dhcml0aG0obiwgYmlnSW50KDIpKS5lKS5hZGQoYmlnSW50KDEpKTtcclxuICAgIH1cclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUuYml0TGVuZ3RoID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGggPSBCaWdJbnRlZ2VyLnByb3RvdHlwZS5iaXRMZW5ndGg7XHJcblxyXG4gICAgZnVuY3Rpb24gbWF4KGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICByZXR1cm4gYS5ncmVhdGVyKGIpID8gYSA6IGI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtaW4oYSwgYikge1xyXG4gICAgICAgIGEgPSBwYXJzZVZhbHVlKGEpO1xyXG4gICAgICAgIGIgPSBwYXJzZVZhbHVlKGIpO1xyXG4gICAgICAgIHJldHVybiBhLmxlc3NlcihiKSA/IGEgOiBiO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2NkKGEsIGIpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKS5hYnMoKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKS5hYnMoKTtcclxuICAgICAgICBpZiAoYS5lcXVhbHMoYikpIHJldHVybiBhO1xyXG4gICAgICAgIGlmIChhLmlzWmVybygpKSByZXR1cm4gYjtcclxuICAgICAgICBpZiAoYi5pc1plcm8oKSkgcmV0dXJuIGE7XHJcbiAgICAgICAgdmFyIGMgPSBJbnRlZ2VyWzFdLCBkLCB0O1xyXG4gICAgICAgIHdoaWxlIChhLmlzRXZlbigpICYmIGIuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgZCA9IG1pbihyb3VnaExPQihhKSwgcm91Z2hMT0IoYikpO1xyXG4gICAgICAgICAgICBhID0gYS5kaXZpZGUoZCk7XHJcbiAgICAgICAgICAgIGIgPSBiLmRpdmlkZShkKTtcclxuICAgICAgICAgICAgYyA9IGMubXVsdGlwbHkoZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdoaWxlIChhLmlzRXZlbigpKSB7XHJcbiAgICAgICAgICAgIGEgPSBhLmRpdmlkZShyb3VnaExPQihhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgd2hpbGUgKGIuaXNFdmVuKCkpIHtcclxuICAgICAgICAgICAgICAgIGIgPSBiLmRpdmlkZShyb3VnaExPQihiKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEuZ3JlYXRlcihiKSkge1xyXG4gICAgICAgICAgICAgICAgdCA9IGI7IGIgPSBhOyBhID0gdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBiID0gYi5zdWJ0cmFjdChhKTtcclxuICAgICAgICB9IHdoaWxlICghYi5pc1plcm8oKSk7XHJcbiAgICAgICAgcmV0dXJuIGMuaXNVbml0KCkgPyBhIDogYS5tdWx0aXBseShjKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxjbShhLCBiKSB7XHJcbiAgICAgICAgYSA9IHBhcnNlVmFsdWUoYSkuYWJzKCk7XHJcbiAgICAgICAgYiA9IHBhcnNlVmFsdWUoYikuYWJzKCk7XHJcbiAgICAgICAgcmV0dXJuIGEuZGl2aWRlKGdjZChhLCBiKSkubXVsdGlwbHkoYik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByYW5kQmV0d2VlbihhLCBiLCBybmcpIHtcclxuICAgICAgICBhID0gcGFyc2VWYWx1ZShhKTtcclxuICAgICAgICBiID0gcGFyc2VWYWx1ZShiKTtcclxuICAgICAgICB2YXIgdXNlZFJORyA9IHJuZyB8fCBNYXRoLnJhbmRvbTtcclxuICAgICAgICB2YXIgbG93ID0gbWluKGEsIGIpLCBoaWdoID0gbWF4KGEsIGIpO1xyXG4gICAgICAgIHZhciByYW5nZSA9IGhpZ2guc3VidHJhY3QobG93KS5hZGQoMSk7XHJcbiAgICAgICAgaWYgKHJhbmdlLmlzU21hbGwpIHJldHVybiBsb3cuYWRkKE1hdGguZmxvb3IodXNlZFJORygpICogcmFuZ2UpKTtcclxuICAgICAgICB2YXIgZGlnaXRzID0gdG9CYXNlKHJhbmdlLCBCQVNFKS52YWx1ZTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW10sIHJlc3RyaWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlnaXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3AgPSByZXN0cmljdGVkID8gZGlnaXRzW2ldIDogQkFTRTtcclxuICAgICAgICAgICAgdmFyIGRpZ2l0ID0gdHJ1bmNhdGUodXNlZFJORygpICogdG9wKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2goZGlnaXQpO1xyXG4gICAgICAgICAgICBpZiAoZGlnaXQgPCB0b3ApIHJlc3RyaWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxvdy5hZGQoSW50ZWdlci5mcm9tQXJyYXkocmVzdWx0LCBCQVNFLCBmYWxzZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwYXJzZUJhc2UgPSBmdW5jdGlvbiAodGV4dCwgYmFzZSwgYWxwaGFiZXQsIGNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICBhbHBoYWJldCA9IGFscGhhYmV0IHx8IERFRkFVTFRfQUxQSEFCRVQ7XHJcbiAgICAgICAgdGV4dCA9IFN0cmluZyh0ZXh0KTtcclxuICAgICAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgdmFyIGFic0Jhc2UgPSBNYXRoLmFicyhiYXNlKTtcclxuICAgICAgICB2YXIgYWxwaGFiZXRWYWx1ZXMgPSB7fTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWxwaGFiZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWxwaGFiZXRWYWx1ZXNbYWxwaGFiZXRbaV1dID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gdGV4dFtpXTtcclxuICAgICAgICAgICAgaWYgKGMgPT09IFwiLVwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKGMgaW4gYWxwaGFiZXRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbHBoYWJldFZhbHVlc1tjXSA+PSBhYnNCYXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09IFwiMVwiICYmIGFic0Jhc2UgPT09IDEpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjICsgXCIgaXMgbm90IGEgdmFsaWQgZGlnaXQgaW4gYmFzZSBcIiArIGJhc2UgKyBcIi5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZSA9IHBhcnNlVmFsdWUoYmFzZSk7XHJcbiAgICAgICAgdmFyIGRpZ2l0cyA9IFtdO1xyXG4gICAgICAgIHZhciBpc05lZ2F0aXZlID0gdGV4dFswXSA9PT0gXCItXCI7XHJcbiAgICAgICAgZm9yIChpID0gaXNOZWdhdGl2ZSA/IDEgOiAwOyBpIDwgdGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYyA9IHRleHRbaV07XHJcbiAgICAgICAgICAgIGlmIChjIGluIGFscGhhYmV0VmFsdWVzKSBkaWdpdHMucHVzaChwYXJzZVZhbHVlKGFscGhhYmV0VmFsdWVzW2NdKSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09IFwiPFwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RhcnQgPSBpO1xyXG4gICAgICAgICAgICAgICAgZG8geyBpKys7IH0gd2hpbGUgKHRleHRbaV0gIT09IFwiPlwiICYmIGkgPCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBkaWdpdHMucHVzaChwYXJzZVZhbHVlKHRleHQuc2xpY2Uoc3RhcnQgKyAxLCBpKSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhyb3cgbmV3IEVycm9yKGMgKyBcIiBpcyBub3QgYSB2YWxpZCBjaGFyYWN0ZXJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZUJhc2VGcm9tQXJyYXkoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VCYXNlRnJvbUFycmF5KGRpZ2l0cywgYmFzZSwgaXNOZWdhdGl2ZSkge1xyXG4gICAgICAgIHZhciB2YWwgPSBJbnRlZ2VyWzBdLCBwb3cgPSBJbnRlZ2VyWzFdLCBpO1xyXG4gICAgICAgIGZvciAoaSA9IGRpZ2l0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YWwgPSB2YWwuYWRkKGRpZ2l0c1tpXS50aW1lcyhwb3cpKTtcclxuICAgICAgICAgICAgcG93ID0gcG93LnRpbWVzKGJhc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNOZWdhdGl2ZSA/IHZhbC5uZWdhdGUoKSA6IHZhbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdpZnkoZGlnaXQsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgYWxwaGFiZXQgPSBhbHBoYWJldCB8fCBERUZBVUxUX0FMUEhBQkVUO1xyXG4gICAgICAgIGlmIChkaWdpdCA8IGFscGhhYmV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYWxwaGFiZXRbZGlnaXRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCI8XCIgKyBkaWdpdCArIFwiPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRvQmFzZShuLCBiYXNlKSB7XHJcbiAgICAgICAgYmFzZSA9IGJpZ0ludChiYXNlKTtcclxuICAgICAgICBpZiAoYmFzZS5pc1plcm8oKSkge1xyXG4gICAgICAgICAgICBpZiAobi5pc1plcm8oKSkgcmV0dXJuIHsgdmFsdWU6IFswXSwgaXNOZWdhdGl2ZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGNvbnZlcnQgbm9uemVybyBudW1iZXJzIHRvIGJhc2UgMC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlLmVxdWFscygtMSkpIHtcclxuICAgICAgICAgICAgaWYgKG4uaXNaZXJvKCkpIHJldHVybiB7IHZhbHVlOiBbMF0sIGlzTmVnYXRpdmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgIGlmIChuLmlzTmVnYXRpdmUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtdLmNvbmNhdC5hcHBseShbXSwgQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkoLW4udG9KU051bWJlcigpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChBcnJheS5wcm90b3R5cGUudmFsdWVPZiwgWzEsIDBdKVxyXG4gICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJyID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkobi50b0pTTnVtYmVyKCkgLSAxKSlcclxuICAgICAgICAgICAgICAgIC5tYXAoQXJyYXkucHJvdG90eXBlLnZhbHVlT2YsIFswLCAxXSk7XHJcbiAgICAgICAgICAgIGFyci51bnNoaWZ0KFsxXSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogW10uY29uY2F0LmFwcGx5KFtdLCBhcnIpLFxyXG4gICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZWcgPSBmYWxzZTtcclxuICAgICAgICBpZiAobi5pc05lZ2F0aXZlKCkgJiYgYmFzZS5pc1Bvc2l0aXZlKCkpIHtcclxuICAgICAgICAgICAgbmVnID0gdHJ1ZTtcclxuICAgICAgICAgICAgbiA9IG4uYWJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiYXNlLmlzVW5pdCgpKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmlzWmVybygpKSByZXR1cm4geyB2YWx1ZTogWzBdLCBpc05lZ2F0aXZlOiBmYWxzZSB9O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBBcnJheS5hcHBseShudWxsLCBBcnJheShuLnRvSlNOdW1iZXIoKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChOdW1iZXIucHJvdG90eXBlLnZhbHVlT2YsIDEpLFxyXG4gICAgICAgICAgICAgICAgaXNOZWdhdGl2ZTogbmVnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvdXQgPSBbXTtcclxuICAgICAgICB2YXIgbGVmdCA9IG4sIGRpdm1vZDtcclxuICAgICAgICB3aGlsZSAobGVmdC5pc05lZ2F0aXZlKCkgfHwgbGVmdC5jb21wYXJlQWJzKGJhc2UpID49IDApIHtcclxuICAgICAgICAgICAgZGl2bW9kID0gbGVmdC5kaXZtb2QoYmFzZSk7XHJcbiAgICAgICAgICAgIGxlZnQgPSBkaXZtb2QucXVvdGllbnQ7XHJcbiAgICAgICAgICAgIHZhciBkaWdpdCA9IGRpdm1vZC5yZW1haW5kZXI7XHJcbiAgICAgICAgICAgIGlmIChkaWdpdC5pc05lZ2F0aXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGRpZ2l0ID0gYmFzZS5taW51cyhkaWdpdCkuYWJzKCk7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0gbGVmdC5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0LnB1c2goZGlnaXQudG9KU051bWJlcigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0LnB1c2gobGVmdC50b0pTTnVtYmVyKCkpO1xyXG4gICAgICAgIHJldHVybiB7IHZhbHVlOiBvdXQucmV2ZXJzZSgpLCBpc05lZ2F0aXZlOiBuZWcgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0b0Jhc2VTdHJpbmcobiwgYmFzZSwgYWxwaGFiZXQpIHtcclxuICAgICAgICB2YXIgYXJyID0gdG9CYXNlKG4sIGJhc2UpO1xyXG4gICAgICAgIHJldHVybiAoYXJyLmlzTmVnYXRpdmUgPyBcIi1cIiA6IFwiXCIpICsgYXJyLnZhbHVlLm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyaW5naWZ5KHgsIGFscGhhYmV0KTtcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICBCaWdJbnRlZ2VyLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKHJhZGl4KSB7XHJcbiAgICAgICAgcmV0dXJuIHRvQmFzZSh0aGlzLCByYWRpeCk7XHJcbiAgICB9O1xyXG5cclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9BcnJheSA9IGZ1bmN0aW9uIChyYWRpeCkge1xyXG4gICAgICAgIHJldHVybiB0b0Jhc2UodGhpcywgcmFkaXgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbiAocmFkaXgpIHtcclxuICAgICAgICByZXR1cm4gdG9CYXNlKHRoaXMsIHJhZGl4KTtcclxuICAgIH07XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAocmFkaXgsIGFscGhhYmV0KSB7XHJcbiAgICAgICAgaWYgKHJhZGl4ID09PSB1bmRlZmluZWQpIHJhZGl4ID0gMTA7XHJcbiAgICAgICAgaWYgKHJhZGl4ICE9PSAxMCkgcmV0dXJuIHRvQmFzZVN0cmluZyh0aGlzLCByYWRpeCwgYWxwaGFiZXQpO1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52YWx1ZSwgbCA9IHYubGVuZ3RoLCBzdHIgPSBTdHJpbmcodlstLWxdKSwgemVyb3MgPSBcIjAwMDAwMDBcIiwgZGlnaXQ7XHJcbiAgICAgICAgd2hpbGUgKC0tbCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGRpZ2l0ID0gU3RyaW5nKHZbbF0pO1xyXG4gICAgICAgICAgICBzdHIgKz0gemVyb3Muc2xpY2UoZGlnaXQubGVuZ3RoKSArIGRpZ2l0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2lnbiA9IHRoaXMuc2lnbiA/IFwiLVwiIDogXCJcIjtcclxuICAgICAgICByZXR1cm4gc2lnbiArIHN0cjtcclxuICAgIH07XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIChyYWRpeCwgYWxwaGFiZXQpIHtcclxuICAgICAgICBpZiAocmFkaXggPT09IHVuZGVmaW5lZCkgcmFkaXggPSAxMDtcclxuICAgICAgICBpZiAocmFkaXggIT0gMTApIHJldHVybiB0b0Jhc2VTdHJpbmcodGhpcywgcmFkaXgsIGFscGhhYmV0KTtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMudmFsdWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvU3RyaW5nID0gU21hbGxJbnRlZ2VyLnByb3RvdHlwZS50b1N0cmluZztcclxuXHJcbiAgICBOYXRpdmVCaWdJbnQucHJvdG90eXBlLnRvSlNPTiA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnRvSlNPTiA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy50b1N0cmluZygpOyB9XHJcblxyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpLCAxMCk7XHJcbiAgICB9O1xyXG4gICAgQmlnSW50ZWdlci5wcm90b3R5cGUudG9KU051bWJlciA9IEJpZ0ludGVnZXIucHJvdG90eXBlLnZhbHVlT2Y7XHJcblxyXG4gICAgU21hbGxJbnRlZ2VyLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgfTtcclxuICAgIFNtYWxsSW50ZWdlci5wcm90b3R5cGUudG9KU051bWJlciA9IFNtYWxsSW50ZWdlci5wcm90b3R5cGUudmFsdWVPZjtcclxuICAgIE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudmFsdWVPZiA9IE5hdGl2ZUJpZ0ludC5wcm90b3R5cGUudG9KU051bWJlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy50b1N0cmluZygpLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VTdHJpbmdWYWx1ZSh2KSB7XHJcbiAgICAgICAgaWYgKGlzUHJlY2lzZSgrdikpIHtcclxuICAgICAgICAgICAgdmFyIHggPSArdjtcclxuICAgICAgICAgICAgaWYgKHggPT09IHRydW5jYXRlKHgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvcnRzTmF0aXZlQmlnSW50ID8gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQoeCkpIDogbmV3IFNtYWxsSW50ZWdlcih4KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2lnbiA9IHZbMF0gPT09IFwiLVwiO1xyXG4gICAgICAgIGlmIChzaWduKSB2ID0gdi5zbGljZSgxKTtcclxuICAgICAgICB2YXIgc3BsaXQgPSB2LnNwbGl0KC9lL2kpO1xyXG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPiAyKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGludGVnZXI6IFwiICsgc3BsaXQuam9pbihcImVcIikpO1xyXG4gICAgICAgIGlmIChzcGxpdC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIGV4cCA9IHNwbGl0WzFdO1xyXG4gICAgICAgICAgICBpZiAoZXhwWzBdID09PSBcIitcIikgZXhwID0gZXhwLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICBleHAgPSArZXhwO1xyXG4gICAgICAgICAgICBpZiAoZXhwICE9PSB0cnVuY2F0ZShleHApIHx8ICFpc1ByZWNpc2UoZXhwKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBpbnRlZ2VyOiBcIiArIGV4cCArIFwiIGlzIG5vdCBhIHZhbGlkIGV4cG9uZW50LlwiKTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBzcGxpdFswXTtcclxuICAgICAgICAgICAgdmFyIGRlY2ltYWxQbGFjZSA9IHRleHQuaW5kZXhPZihcIi5cIik7XHJcbiAgICAgICAgICAgIGlmIChkZWNpbWFsUGxhY2UgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgZXhwIC09IHRleHQubGVuZ3RoIC0gZGVjaW1hbFBsYWNlIC0gMTtcclxuICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnNsaWNlKDAsIGRlY2ltYWxQbGFjZSkgKyB0ZXh0LnNsaWNlKGRlY2ltYWxQbGFjZSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChleHAgPCAwKSB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgaW5jbHVkZSBuZWdhdGl2ZSBleHBvbmVudCBwYXJ0IGZvciBpbnRlZ2Vyc1wiKTtcclxuICAgICAgICAgICAgdGV4dCArPSAobmV3IEFycmF5KGV4cCArIDEpKS5qb2luKFwiMFwiKTtcclxuICAgICAgICAgICAgdiA9IHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpc1ZhbGlkID0gL14oWzAtOV1bMC05XSopJC8udGVzdCh2KTtcclxuICAgICAgICBpZiAoIWlzVmFsaWQpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgaW50ZWdlcjogXCIgKyB2KTtcclxuICAgICAgICBpZiAoc3VwcG9ydHNOYXRpdmVCaWdJbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQoQmlnSW50KHNpZ24gPyBcIi1cIiArIHYgOiB2KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByID0gW10sIG1heCA9IHYubGVuZ3RoLCBsID0gTE9HX0JBU0UsIG1pbiA9IG1heCAtIGw7XHJcbiAgICAgICAgd2hpbGUgKG1heCA+IDApIHtcclxuICAgICAgICAgICAgci5wdXNoKCt2LnNsaWNlKG1pbiwgbWF4KSk7XHJcbiAgICAgICAgICAgIG1pbiAtPSBsO1xyXG4gICAgICAgICAgICBpZiAobWluIDwgMCkgbWluID0gMDtcclxuICAgICAgICAgICAgbWF4IC09IGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaW0ocik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCaWdJbnRlZ2VyKHIsIHNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlTnVtYmVyVmFsdWUodikge1xyXG4gICAgICAgIGlmIChzdXBwb3J0c05hdGl2ZUJpZ0ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE5hdGl2ZUJpZ0ludChCaWdJbnQodikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNQcmVjaXNlKHYpKSB7XHJcbiAgICAgICAgICAgIGlmICh2ICE9PSB0cnVuY2F0ZSh2KSkgdGhyb3cgbmV3IEVycm9yKHYgKyBcIiBpcyBub3QgYW4gaW50ZWdlci5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU21hbGxJbnRlZ2VyKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFyc2VTdHJpbmdWYWx1ZSh2LnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdiA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VOdW1iZXJWYWx1ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZVN0cmluZ1ZhbHVlKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIHYgPT09IFwiYmlnaW50XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOYXRpdmVCaWdJbnQodik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2O1xyXG4gICAgfVxyXG4gICAgLy8gUHJlLWRlZmluZSBudW1iZXJzIGluIHJhbmdlIFstOTk5LDk5OV1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTAwMDsgaSsrKSB7XHJcbiAgICAgICAgSW50ZWdlcltpXSA9IHBhcnNlVmFsdWUoaSk7XHJcbiAgICAgICAgaWYgKGkgPiAwKSBJbnRlZ2VyWy1pXSA9IHBhcnNlVmFsdWUoLWkpO1xyXG4gICAgfVxyXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuICAgIEludGVnZXIub25lID0gSW50ZWdlclsxXTtcclxuICAgIEludGVnZXIuemVybyA9IEludGVnZXJbMF07XHJcbiAgICBJbnRlZ2VyLm1pbnVzT25lID0gSW50ZWdlclstMV07XHJcbiAgICBJbnRlZ2VyLm1heCA9IG1heDtcclxuICAgIEludGVnZXIubWluID0gbWluO1xyXG4gICAgSW50ZWdlci5nY2QgPSBnY2Q7XHJcbiAgICBJbnRlZ2VyLmxjbSA9IGxjbTtcclxuICAgIEludGVnZXIuaXNJbnN0YW5jZSA9IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4IGluc3RhbmNlb2YgQmlnSW50ZWdlciB8fCB4IGluc3RhbmNlb2YgU21hbGxJbnRlZ2VyIHx8IHggaW5zdGFuY2VvZiBOYXRpdmVCaWdJbnQ7IH07XHJcbiAgICBJbnRlZ2VyLnJhbmRCZXR3ZWVuID0gcmFuZEJldHdlZW47XHJcblxyXG4gICAgSW50ZWdlci5mcm9tQXJyYXkgPSBmdW5jdGlvbiAoZGlnaXRzLCBiYXNlLCBpc05lZ2F0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlQmFzZUZyb21BcnJheShkaWdpdHMubWFwKHBhcnNlVmFsdWUpLCBwYXJzZVZhbHVlKGJhc2UgfHwgMTApLCBpc05lZ2F0aXZlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEludGVnZXI7XHJcbn0pKCk7XHJcblxyXG4vLyBOb2RlLmpzIGNoZWNrXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIG1vZHVsZS5oYXNPd25Qcm9wZXJ0eShcImV4cG9ydHNcIikpIHtcclxuICAgIG1vZHVsZS5leHBvcnRzID0gYmlnSW50O1xyXG59XHJcblxyXG4vL2FtZCBjaGVja1xyXG5pZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuICAgIGRlZmluZSggZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBiaWdJbnQ7XHJcbiAgICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnIpIHtcbiAgICAvKiBTb3VyY2U6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNTAzMDExNyBcbiAgICBDcmVkaXRzIHRvOiBOb2FoIEZyZWl0YXMgKi9cbiAgcmV0dXJuIGFyci5yZWR1Y2UoZnVuY3Rpb24gKGZsYXQsIHRvRmxhdHRlbikge1xuICAgIHJldHVybiBmbGF0LmNvbmNhdChBcnJheS5pc0FycmF5KHRvRmxhdHRlbikgPyBmbGF0dGVuKHRvRmxhdHRlbikgOiB0b0ZsYXR0ZW4pO1xuICB9LCBbXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlKGFycixvYmopIHtcbiAgICAvKiAgU291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQzODYzXG4gICAgQ3JlZGl0cyB0bzogVmlua28gVnJzYWxvdmljICovXG4gICAgcmV0dXJuIChhcnIuaW5kZXhPZihvYmopICE9IC0xKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFycmF5TW92ZUl0ZW0oYXJyLCBmcm9tLCB0bykge1xuICBhcnIuc3BsaWNlKHRvLCAwLCBhcnIuc3BsaWNlKGZyb20sIDEpWzBdKTtcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHBlcm11dGVBcnJheSA9IGlucHV0QXJyYXkgPT4gaW5wdXRBcnJheS5yZWR1Y2UoZnVuY3Rpb24gcGVybXV0ZShyZXMsIGl0ZW0sIGtleSwgYXJyKSB7XG4gIC8qIFBlcm11dGF0aW9uIGFsZ29yaXRobSBmb3IgYXJyYXlzIG9mIGFyYml0cmFyeSBsZW5ndGhcbiAgICAgKGNyZWRpdHMgJiB0aGFua3MgdG8gdXNlciBtb25rZXk6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjA2MzQ0MCkgKi9cbiAgICByZXR1cm4gcmVzLmNvbmNhdChhcnIubGVuZ3RoID4gMSAmJiBhcnIuc2xpY2UoMCwga2V5KVxuICAgICAgLmNvbmNhdChhcnIuc2xpY2Uoa2V5ICsgMSkpXG4gICAgICAucmVkdWNlKHBlcm11dGUsIFtdKVxuICAgICAgLm1hcChmdW5jdGlvbihwZXJtKSB7IHJldHVybiBbaXRlbV0uY29uY2F0KHBlcm0pOyB9KSB8fCBbW2l0ZW1dXSk7XG59LCBbXSk7IiwiaW1wb3J0ICogYXMgYmlnSW50IGZyb20gJ2JpZy1pbnRlZ2VyJztcbi8vIGNvbnN0IGJpZ0ludCA9IHJlcXVpcmUoJ2JpZy1pbnRlZ2VyJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBiaWdJbnRUb1NjaU5vdGF0aW9uKG4sIGZyYWN0aW9uRGlnaXRzPTIpIHsgXG5cdC8qIFNjaWVudGlmaWMgbm90YXRpb24gZm9yIEJpZ0ludCBudW1iZXJzIChuZWVkcyBzb21lIG9wdGltaXphdGlvbikgKi9cblx0Y29uc3QgblN0ciA9IG4udG9TdHJpbmcoMTApO1xuXHRjb25zdCBuTGVuID0gblN0ci5sZW5ndGg7XG5cdGNvbnN0IGZyYWN0aW9uID0gbkxlbi0xIDwgMTYgPyBuTGVuLTEgOiAxNjtcblx0Y29uc3QgW3dob2xlcywgcGFydHNdID0gW25TdHIuc3Vic3RyKDAsMSksIG5MZW4gPiAxID8gblN0ci5zdWJzdHIoMSxmcmFjdGlvbikgOiAwXTtcblx0bGV0IG5GbG9hdCA9IHBhcnNlRmxvYXQod2hvbGVzKycuJytwYXJ0cyk7XG5cdG5GbG9hdCA9IG5GbG9hdC50b1ByZWNpc2lvbiggKGZyYWN0aW9uRGlnaXRzKzEgPiBwYXJ0cy5sZW5ndGggPyAyIDogZnJhY3Rpb25EaWdpdHMrMSkgKTtcblx0cmV0dXJuIHRleGBcXGFwcHJveCAke25GbG9hdH0gXFx0aW1lcyAxMF57JHtuTGVuLTF9fWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21CaWdJbnQobWF4KSB7XG5cdHJldHVybiBiaWdJbnQucmFuZEJldHdlZW4oMCxtYXgpO1xufVxuXG4iLCJleHBvcnQgZnVuY3Rpb24gdHJhdmVyc2UobyxmdW5jKSB7XG4gICAgLyogIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzIyNjY4L3RyYXZlcnNlLWFsbC10aGUtbm9kZXMtb2YtYS1qc29uLW9iamVjdC10cmVlLXdpdGgtamF2YXNjcmlwdCBcbiAgICBDcmVkaXRzIHRvOiBUaGVIaXBwbyAqL1xuICAgIGZvciAodmFyIGkgaW4gbykge1xuICAgICAgICBmdW5jLmFwcGx5KG51bGwsW2ksb1tpXV0pOyAgLy8gbnVsbCBvciB0aGlzP1xuICAgICAgICBpZiAob1tpXSAhPT0gbnVsbCAmJiB0eXBlb2Yob1tpXSk9PVwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vZ29pbmcgb25lIHN0ZXAgZG93biBpbiB0aGUgb2JqZWN0IHRyZWUhIVxuICAgICAgICAgICAgdHJhdmVyc2Uob1tpXSxmdW5jKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHJldmVyc2VNYXBwaW5nID0gKG8sYmlqZWN0aXZlPWZhbHNlKSA9PiBPYmplY3Qua2V5cyhvKS5yZWR1Y2UoKHIsIGspID0+IE9iamVjdC5hc3NpZ24ociwgeyBbb1trXV06IChiaWplY3RpdmUgPyBrIDogKHJbb1trXV0gfHwgW10pLmNvbmNhdChrKSkgfSksIHt9KTsgLy8gbW9kaWZpZWQgZnJvbSBhbnN3ZXIgYnkgTmluYSBTY2hvbHo6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NTcyODg1MCIsImV4cG9ydCBmdW5jdGlvbiBwYWQobnVtLCBzaXplKSB7XG4gICAgLyogcGFkcyAwcyBiZWZvcmUgbnVtYmVyIHN0cmluZ1xuICAgICAgIFNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI5OTg4MjJcbiAgICAgICBDcmVkaXRzIHRvOiBJbmZpbml0aWVzTG9vcCAqL1xuXG4gICAgdmFyIHMgPSBudW0rXCJcIjsgLy8gY29udmVydHMgbnVtYmVyIHRvIHN0cmluZyBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuICAgIHdoaWxlIChzLmxlbmd0aCA8IHNpemUpIHMgPSBcIjBcIiArIHM7XG4gICAgcmV0dXJuIHM7XG59XG5cbi8vIGZvcm1lciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBbGxcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQWxsKHN0ciwgZmluZCwgcmVwbGFjZSwgZXNjYXBlTWV0YSkge1xuICAgIC8qICBNb2RpZmllZCBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTQ0NzgzL2hvdy10by1yZXBsYWNlLWFsbC1vY2N1cnJlbmNlcy1vZi1hLXN0cmluZy1pbi1qYXZhc2NyaXB0IFxuICAgIENyZWRpdHMgdG86IFNlYW4gQnJpZ2h0ICovXG4gICAgaWYoZXNjYXBlTWV0YSkgZmluZCA9IGVzY2FwZVJlZ0V4cChmaW5kKTtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cChmaW5kLCAnZycpLCByZXBsYWNlKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuXG4vLyBmb3JtZXIgU3RyaW5nLnByb3RvdHlwZS5hZGRCZWZvcmVcbmV4cG9ydCBmdW5jdGlvbiBhZGRCZWZvcmUoc3RyLCBpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICByZXR1cm4gc3RyLnN1YnN0cigwLCBpbmRleCkgKyByZXBsYWNlbWVudCsgc3RyLnN1YnN0cihpbmRleCk7XG59XG5cbi8vIGZvcm1lciBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VBdFxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBdChzdHIsIGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIGluZGV4KSArIHJlcGxhY2VtZW50KyBzdHIuc3Vic3RyKGluZGV4ICsgcmVwbGFjZW1lbnQubGVuZ3RoKTtcbn1cblxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQWRkaXRpb25zIDAxLzIwMjAgZnJvbTpcbiAgICBodHRwczovL29ic2VydmFibGVocS5jb20vQGZvcm1zYW5kbGluZXMvanMtdG9vbGJveFxuKi9cblxuZXhwb3J0IGNvbnN0IHRydW5jYXRlU3RyID0gKHN0cixsaW1pdCxhcHBlbmRpeD0nJykgPT4gc3RyLmxlbmd0aCA+IGxpbWl0ID8gKHN0ci5zdWJzdHIoMCxsaW1pdCkgKyBhcHBlbmRpeCkgOiBzdHI7XG5cblxuLyogQnJlYWtzIHN0cmluZyB1cCBpbiBwYXJ0cyBvZiBsZW5ndGggbiAoeCA8PSBuIGZvciB0aGUgbGFzdCBwYXJ0KSBcbiAgIGZyb206IGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuZXhwb3J0IGNvbnN0IGJyZWFrU3RyID0gKHN0cixuPTEpID0+IFsuLi5uZXcgQXJyYXkoTWF0aC5jZWlsKHN0ci5sZW5ndGgvbikpXS5tYXAoKGQsaSkgPT4gc3RyLnN1YnN0cihuKmksbikpO1xuXG4iLCIvKiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBBZGRpdGlvbnMgMTAvMjAyMCBmcm9tOlxuICAgIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AZm9ybXNhbmRsaW5lcy9qcy10b29sYm94XG4qL1xuXG5leHBvcnQgY29uc3QgY2hlY2tCcmFja2V0TWF0Y2hpbmcgPSAoc3RyLCBvcGVuQnI9JygnLCBjbG9zZUJyPScpJykgPT4ge1xuICAgIGlmIChzdHIubGVuZ3RoID09PSAwKSByZXR1cm4gdHJ1ZTsgLy8gZW1wdHkgc3RyaW5ncyBjYW4ndCBoYXZlIGJyYWNrZXRzLCBzbyB0aGF0J3MgZmluZVxuICAgIHJldHVybiBzdHIuc3BsaXQoJycpLnJlZHVjZSgoYWNjLGN1cnIsaWR4LGFycikgPT4ge1xuICAgICAgaWYgKGN1cnIgPT09IG9wZW5CcikgYWNjKys7XG4gICAgICBlbHNlIGlmIChjdXJyID09PSBjbG9zZUJyKSB7XG4gICAgICAgIGlmIChhY2MgPT09IG51bGwpIHJldHVybiBOYU47XG4gICAgICAgIGFjYy0tO1xuICAgICAgICB9XG4gICAgICBpZiAoaWR4ID09PSBhcnIubGVuZ3RoLTEgJiYgYWNjID09PSBudWxsKSByZXR1cm4gMDtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxudWxsKSA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgfTtcbiAgXG5leHBvcnQgY29uc3QgZXF1YWxBcnJheXMgPSAoYXJyQSwgYXJyQikgPT4ge1xuICAgIGlmIChhcnJBID09PSB1bmRlZmluZWQgfHwgYXJyQiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIGFyckEubGVuZ3RoID09PSBhcnJCLmxlbmd0aCAmJiBhcnJBLmV2ZXJ5KGEgPT4gYXJyQi5zb21lKGIgPT4gYSA9PT0gYikpO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlVmFsaWRhdGlvbiA9IChmbiwgZXJyb3JNc2cpID0+ICguLi5hcmdzKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2F0YTogYnJhbmNoID0+IHJlc3VsdCA/IGJyYW5jaC5zdWNjZXNzKHJlc3VsdCkgOiBicmFuY2guZXJyb3IoZXJyb3JNc2cpXG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xsYXBzZUxpdGVyYWxzID0gKHN0ciwgc2VwPSdcIicsIHJlcGw9J+KAvScpID0+IHtcbiAgICBpZiAoIWNoZWNrTGl0ZXJhbE1hdGNoaW5nKHN0ciwgc2VwKSkgcmV0dXJuIG51bGw7XG4gICAgY29uc3Qgc3RyU2VwID0gc3RyLnNwbGl0KHNlcCk7XG4gICAgcmV0dXJuIHN0clNlcC5maWx0ZXIoKHN1YnN0cixpLGFycikgPT4gaSAlIDIgPT09IDAgfHwgaSA9PT0gYXJyLmxlbmd0aC0xKS5qb2luKHJlcGwpO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tMaXRlcmFsTWF0Y2hpbmcgPSAoc3RyLCBzZXA9J1wiJykgPT4ge1xuICAgIGNvbnN0IHN0clNlcCA9IHN0ci5zcGxpdChzZXApO1xuICAgIHJldHVybiBzdHJTZXAubGVuZ3RoICUgMiA9PT0gMTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCcmFja2V0VW5pdHMgPSAoZm9ybXVsYSwgYnI9e29wZW46J3snLCBjbG9zZTonfSd9LCBtYXRjaGVzPVtdKSA9PiB7XG4gICAgY29uc3QgcmVFbnRyaWVzID0gZm9ybXVsYS5tYXRjaChuZXcgUmVnRXhwKGBcXFxcJHtici5vcGVufVteJHtici5vcGVufSR7YnIuY2xvc2V9XSo/XFxcXCR7YnIuY2xvc2V9YCwgJ2cnKSk7XG4gICAgaWYgKCFyZUVudHJpZXMpIHJldHVybiBtYXRjaGVzO1xuXG4gICAgY29uc3QgcmVkdWNlZEZvcm11bGEgPSByZUVudHJpZXMucmVkdWNlKChzdHIsIHBhdHRlcm4pID0+IHN0ci5yZXBsYWNlKHBhdHRlcm4sICfigKInKSxmb3JtdWxhKTtcblxuICAgIHJldHVybiBnZXRCcmFja2V0VW5pdHMocmVkdWNlZEZvcm11bGEsIGJyLCBbLi4ubWF0Y2hlcywgLi4ucmVFbnRyaWVzXSk7XG59IiwiaW1wb3J0IHsgcmV2ZXJzZU1hcHBpbmcgfSBmcm9tICdmb3Jtc2FuZGxpbmVzLXV0aWxzJztcblxuZXhwb3J0IGNvbnN0IFZBUkNPREUgPSAoeydhJzon4bSsJywgJ2InOifhtK4nLCAnYyc6J+G1kycsICdkJzon4bSwJywgJ2UnOifhtLEnLCAnZic6J+G1jicsICdnJzon4bSzJywgJ2gnOifhtLQnLCAnaSc6J+G0tScsICdqJzon4bS2JywgJ2snOifhtLcnLCAnbCc6J+G0uCcsICdtJzon4bS5JywgJ24nOifhtLonLCAnbyc6J+G0vCcsICdwJzon4bS+JywgJ3EnOifhtL0nLCAncic6J+G0vycsICdzJzon4bWVJywgJ3QnOifhtYAnLCAndSc6J+G1gScsICd2Jzon4bWbJywgJ3cnOifhtYInLCAneCc6J+G1oScsICd5Jzon4bWeJywgJ3onOifhtZwnLCAnYWx0Jzon4bW9JywgJzJyJzon4bWzJywgJzJyKzEnOifhtbInfSk7XG5cbmV4cG9ydCBjb25zdCBWQVJDT0RFX1JFViA9IHJldmVyc2VNYXBwaW5nKFZBUkNPREUsdHJ1ZSk7IiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gICAgIGZvcm1mb3JtIGNvcmUgbW9kdWxlICdjYWxjJ1xuLy8gICAgIC0tIHNpbmNlIDIwMTgsIGJ5IFBldGVyIEhvZm1hbm4gKGZvcm1zYW5kbGluZXMuZXUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8qKlxuICogRk9STSBhcml0aG1ldGljIGZvciBjb21tdXRhdGl2ZSByZWxhdGlvbjogeCB5XG4gKiBcbiAqICogdmVyaWZpZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbF9sb2dpYyhmeCwgZnkpIHtcbiAgICBpZiAoIGZ4ID4gMyB8fCBmeCA8IDAgfHwgZnkgPiAzIHx8IGZ5IDwgMCApIHJldHVybiAtOTg7XG4gICAgZWxzZSBpZiAoIGZ4ID09PSAwIHx8IGZ5ID09PSAxICkgeyBcbiAgICAgICAgcmV0dXJuIGZ5OyAvLyBDMyAvVGhlb3JlbSAyXG4gICAgfSBcbiAgICBlbHNlIGlmICggZnkgPT09IDAgfHwgZnggPT09IDEgKSB7IFxuICAgICAgICByZXR1cm4gZng7IC8vIEMzIC9UaGVvcmVtIDJcbiAgICB9XG4gICAgZWxzZSBpZiAoIGZ4ID09PSBmeSApIHsgXG4gICAgICAgIHJldHVybiBmeDsgLy8gQzUgL1RoZW9yZW0gNVxuICAgIH1cbiAgICBlbHNlIGlmICggKGZ4ID09PSAyICYmIGZ5ID09PSAzKSB8fCAoZnggPT09IDMgJiYgZnkgPT09IDIpICkgeyBcbiAgICAgICAgcmV0dXJuIDE7IC8vIEMyIC9UaGVvcmVtIDEzICsgQzMgL1RoZW9yZW0gMlxuICAgIH1cbiAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG59XG4vKipcbiAqIFNob3J0Y3V0IGZvciByZWxhdGlvbiB3aXRoIG4gdmFyaWFibGVzOiB4XzEgLi4uIHhfblxuICogXG4gKiAqIHZlcmlmaWVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWwoLi4uZlZhbHMpIHtcbiAgICBpZiAoZlZhbHMubGVuZ3RoID4gMSkge1xuICAgICAgICBsZXQgdmFsID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBpIGluIGZWYWxzKSB7XG4gICAgICAgICAgICB2YWwgPSByZWxfbG9naWMoIHZhbCxmVmFsc1tpXSApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIHJldHVybiAtOTc7IC8vIGVycm9yIGNvZGVcbn1cblxuLyoqXG4gKiBGT1JNIGFyaXRobWV0aWMgZm9yIGludmVyc2lvbi9uZWdhdGlvbjogKHgpXG4gKiBcbiAqICogdmVyaWZpZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludl9sb2dpYyhmeCkge1xuICAgIHN3aXRjaCAoZngpIHtcbiAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiAxO1xuICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gMztcbiAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICByZXR1cm4gLTk5OyAvLyBlcnJvciBjb2RlXG59XG4vKipcbiAqIFNob3J0Y3V0IGZvciBuIGludmVyc2lvbnMvbmVnYXRpb25zOiAoeClcbiAqIFxuICogKiB2ZXJpZmllZFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW52KGZ4LCBuKSB7XG4gICAgaWYgKG4gPiAwKSB7XG4gICAgICAgIGxldCB2YWwgPSBmeDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPG47IGkrKykge1xuICAgICAgICAgICAgdmFsID0gaW52X2xvZ2ljKHZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gaW52X2xvZ2ljKGZ4KTtcbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vICBSRS1FTlRSWSBGT1JNIENBTENVTEFUSU9OXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBGT1JNIGFyaXRobWV0aWMgZm9yIGRpZmZlcmVudCBzZWxmLWVxdWl2YWxlbnQgcmUtZW50cnkgRk9STXNcbiAqIFxuICogW0FyZ3VtZW50c10gcmVFdmVuOiBldmVuIHJlLWVudHJ5LW51bWJlcj8gfCBsYXN0T3BlbjogbGFzdCB2YXJpYWJsZSBub3QgY3Jvc3NlZD8gfCBmVmFsczogdmFyaWFibGVzICgwLzEvMi8zKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVFbnRyeShyZUV2ZW4sIGxhc3RPcGVuLCBhbHRJbnRlcnByLCAuLi5mVmFscykge1xuICAgIC8qIFxuICAgICAgICAqIE5vdGU6IGNhbGN1bGF0aW9uIG1hbnVhbGx5IHZlcmlmaWVkIGZvcuKApiBcbiAgICAgICAgLSAodUZPUk0gYTEsIHJlczIpIMaSPSgoxpJ4KXkpXG4gICAgICAgIC0gKGlGT1JNIGEyLCByZXMyKSDGkijGkik9KGExeCl5XG4gICAgICAgIC0gKGlGT1JNIGIxLCByZXMzKSBbMnxyfCsxXSDGkijGkik9KCgoxpJ4KXkpeikgxpI9KCgoKCgoxpJ4KXkpeil4KXkpeilcbiAgICAgICAgLSAoaUZPUk0gYjIsIHJlczMpIFsyfHJ8KzFdIMaSKMaSKT0oKGIxeCl5KXpcbiAgICAgICAgLSAodUZPUk0gYzEsIHJlczMpIFsyfHJ8XSDGkj0oKCgoKCjGkngpeSl6KXgpeSl6KVxuICAgICAgICAtICh1Rk9STSBjMiwgcmVzMykgWzJ8cnxdIMaSKMaSKT0oKGMxeCl5KXpcbiAgICAgICAgU2hvdWxkIHdvcmsgd2l0aCByZXNvbHV0aW9ucyBvZiA0LCA1LCDigKYgYnV0IG5lZWRzIHZlcmlmaWNhdGlvbi5cblxuICAgICAgICBNeSBiYXNpYyBvYnNlcnZhdGlvbnMgYWJvdXQgc2VsZi1lcXVpdmFsZW50IHJlLWVudHJ5IEZPUk1zOlxuICAgICAgICAtIEV2ZXJ5IHJlLWVudHJ5IEZPUk0gbmVlZHMgdG8gaGF2ZSBhbiBldmVuIG51bWJlciBvZiBjcm9zc2VzIHRvIGJlIHNlbGYtZXF1aXZhbGVudCAodUZPUk0pOiDGkiA9ICgoxpIxKTIpIC5cbiAgICAgICAgU28gd2l0aCB1bmV2ZW4gcmVzb2x1dGlvbnMsIHdlIGFsd2F5cyBuZWVkIHRvIGhhdmUgYW4gZXZlbiByZS1lbnRyeSBudW1iZXI6IMaSID0gKCgoKCgoxpIxKTIpMykxKTIpMykgLlxuICAgICAgICAtIFRvIGJlIGFibGUgdG8gYWxzbyBoYXZlIHVuZXZlbiByZS1lbnRyeSBudW1iZXJzLCBlaXRoZXIgdGhlIHJlc29sdXRpb24gbmVlZHMgdG8gYmUgZXZlblxuICAgICAgICBvciB3ZSBoYXZlIHRvIGVtYmVkIHRoZSByZS1lbnRyeSBGT1JNIGludG8gYSBub3JtYWwgRk9STSB0aGF0IGlzIG9uZSByZS1lbnRyeSBvZiB0aGF0IEZPUk06XG4gICAgICAgIMaSKMaSKSA9ICgoKMaSMSkyKTMpIDwtPiAoKCggxpIgPSAoKCgoKCjGkjEpMikzKTEpMikzKSAxKTIpMykgLlxuICAgICAgICBUaGVzZSBjb21wb3NpdGlvbmFsIHJlLWVudHJ5IEZPUk1zIGFyZSBpRk9STXMsIHNpbmNlIHRoZXkgcmVzb2x2ZSB0bzogKCDGkiA9ICgoxpIpKSApIC5cbiAgICAgICAgLSBJZiB0aGUgb3V0bW9zdCBjcm9zcyBvZiB0aGUgRk9STSBzaG91bGQgYmUgbGVmdCBvdXQgKG9wZW4gRk9STXMpLCB0aGlzIGNhbiBvbmx5IGJlIGRvbmUgaWYgd2UgZW1iZWRcbiAgICAgICAgYSBjb3JyZXNwb25kaW5nIGNsb3NlZCBGT1JNIG9mIGl0c2VsZiB0aGF0IGVpdGhlciBpcyBvciBlbWJlZHMgaXRzIHJlLWVudHJ5IEZPUk0gKGNhc2VzIGRlc2NyaWJlZCBhYm92ZSkuXG4gICAgICAgIEkgYmVsaWV2ZSB0aGUgb3V0bW9zdCAob3BlbikgRk9STSBpcyBub3QgYmVpbmcgY291bnRlZCBhcyBhIHJlLWVudHJ5IGF0IGFsbCwgc2luY2UgaXQncyBtaXNzaW5nIGEgY3Jvc3MuXG5cbiAgICAgICAgVGhpcyBhbGdvcml0aG0gaXMgYmFzZWQgb24gdGhlIGZvbGxvd2luZyBydWxlcy9wYXR0ZXJucy9vYnNlcnZhdGlvbnMgZGVyaXZlZCBmcm9tIFwidUZPUk0gaUZPUk1cIjpcbiAgICAgICAgWzFdIElmIDEgaXMgc29tZXdoZXJlIGluIHRoZSBGT1JNLCBpdCB3aWxsIGRvbWluYXRlIGFsbCB2YWx1ZXMgaW4gc3BhY2VzIGRlZXBlciB0aGFuIG0sXG4gICAgICAgICAgICBzbyB0aGUgcmUtZW50cnkgaXMgb2Jzb2xldGUgYW5kIHdlIGNhbiBzdGFydCBjYWxjdWxhdGUgZnJvbSB0aGlzIHNwYWNlLiBcbiAgICAgICAgWzJdIElmIHRoZXJlIGFyZSAzLzIgb3IgMi8zIHBhaXJzIGluIHRoZSBGT1JNLCB0aGUgZmlyc3QgdGVybSBjYW4gYmUgdHVybmVkIGludG8gMSwgc2luY2VcbiAgICAgICAgICAgIHRocm91Z2ggQzIgdGhlIHNlY29uZCB0ZXJtIGNhbiBhbHdheXMgYmUgZ2VuZXJhdGVkIGludG8gaXRzIHNwYWNlLCB3aGVyZSAyMyA9IDEuXG4gICAgICAgICAgICBUaGVuIHdlIGNhbiBwcm9jZWVkIGFzIGluICgxKS5cbiAgICAgICAgWzNdIElmIGFsbCB2YXJpYWJsZXMgYXJlIDAsIHdlIHdpbGwgaGF2ZSBlaXRoZXIgYSB1Rk9STSBvciBpRk9STSwgaGVuY2UgdGhlIHZhbHVlIG9mIHRoZVxuICAgICAgICAgICAgRk9STSB3aWxsIGJlIGVpdGhlciAyIG9yIDMsIGRlcGVuZGluZyBvbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAgICAgLSAyOiBjbG9zZWQsICAgICAgcmVzb2x1dGlvbiBldmVuLCByZS1lbnRyeS1udW1iZXIgZXZlbi9vZGQgKGExKVxuICAgICAgICAgICAgLSAyOiBjbG9zZWQvb3BlbiwgcmVzb2x1dGlvbiBvZGQsICByZS1lbnRyeS1udW1iZXIgZXZlbiAgICAgKGMxLCBjMilcbiAgICAgICAgICAgIC0gMzogb3BlbiwgICAgICAgIHJlc29sdXRpb24gZXZlbiwgcmUtZW50cnktbnVtYmVyIGV2ZW4vb2RkIChhMilcbiAgICAgICAgICAgIC0gMzogY2xvc2VkL29wZW4sIHJlc29sdXRpb24gb2RkLCAgcmUtZW50cnktbnVtYmVyIG9kZCAgICAgIChiMSwgYjIpXG4gICAgICAgIFNpbmNlIFsxXVsyXVszXSBlbGltaW5hdGUgYWxsIG90aGVyIGNhc2VzLCBhbGwgdmFyaWFibGVzIGFyZSBub3cgZWl0aGVyIDIgb3IgMyAoYW5kIG1heWJlIDBzKSxcbiAgICAgICAgc28gdXNpbmcgQzIgYXMgZGVzY3JpYmVkIGFib3ZlLCBvbmx5IHRoZSBsYXN0IG9jY2FzaW9uIG9mIHRoZXNlIHZhcmlhYmxlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQ6XG4gICAgICAgIFs0XSBJZiB3ZSB1c2UgdUZPUk0gaUZPUk0gaW50ZXJwcmV0YXRpb24gMiAocC4xNjcpIHJlY3Vyc2l2ZSBpZGVudGl0eSAoIG1uIDwtPiAoKMaSKSk9xpIgKSwgQzIgYW5kIEMxXG4gICAgICAgICAgICDGkiBjYW4gYmUgc2VwYXJhdGVkIGZyb20gMi8zIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZS5cbiAgICAgICAgICAgIFRoZW4sIGRlcGVuZGluZyBvbiB0aGUgRk9STSwgd2UgaGF2ZSBlaXRoZXI6XG4gICAgICAgICAgICBpRk9STTogKMaSPSgoxpIpKSkgMi8zIDwtPiAoMikgMi8zICBvclxuICAgICAgICAgICAgdUZPUk06ICDGkj0oKMaSKSkgMi8zICA8LT4gIDIgMi8zXG4gICAgICAgIFs1XSBJZiBbNF0gZG9lcyBub3QgYXBwbHkgb3Igd2UgZGVjaWRlIGZvciB1Rk9STSBpRk9STSBpbnRlcnByZXRhdGlvbiAxIChwLjE2Nyk6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiBcbiAgICAgICAgICAgICggbW4gLT4gxpI9KCjGkikpICksIHdlIHdpbGwgaGF2ZSBlaXRoZXIgdmFyaWFibGVzIG9mIDIgb3IgMyB3aGljaCB3ZSBjYW5ub3QgcmVsYXRlIHRvIMaSLCBzaW5jZVxuICAgICAgICAgICAgdGhleSBuZWVkIG5vdCBiZSB0aGUgc2FtZSB1bmRldGVybWluZWQgdmFsdWUuIFVzaW5nIGNhc2UgZGlzdGluY3Rpb24sIHdlIGludGVycHJldCB0aGVcbiAgICAgICAgICAgIGxhc3Qgb2NjYXNpb24gb2YgMiBvciAzIGFzIDAgYW5kIGFzIDEsIGNhbGN1bGF0ZSBldmVyeXRoaW5nIHdpdGggxpI9MiBhbmQgcmVsYXRlIHRoZSByZXN1bHRzIFxuICAgICAgICAgICAgdXNpbmcgY29udHJhdmFsZW5jZTogKCh4KXkpKCh5KXgpIHdoaWNoIHlpZWxkcyB0aGUgZmluYWwgcmVzdWx0LlxuICAgICovXG4gICAgLy8gY2hlY2sgaWYgYXJndW1lbnRzIGFyZSBhY3R1YWxseSBkZWZpbmVkXG4gICAgaWYgKHJlRXZlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlRXZlbiA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAobGFzdE9wZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBsYXN0T3BlbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc0V2ZW4gPSAoZlZhbHMubGVuZ3RoJTIgPT0gMCk7IC8vIGV2ZW4gcmVzb2x1dGlvbj9cbiAgICBsZXQgemVyb3MgPSAwOyAvLyB6ZXJvIGNvdW50ZXJcbiAgICBsZXQgZmlyc3RVbmRlZiA9IC0xOyAvLyBjYXRjaGVzIGZpcnN0IG1uLyhtbilcblxuICAgIC8vIFszXSBkZXRlcm1pbmUgaWYgdUZPUk0gb3IgaUZPUk1cbiAgICAvLyBsZXQgdUZPUk0gPSBmYWxzZTsgLy8gPyBub3QgaW4gdXNlXG4gICAgbGV0IGlGT1JNID0gZmFsc2U7XG4gICAgaWYgKHJlc0V2ZW4pIHtcbiAgICAgICAgaWYgKGxhc3RPcGVuKSBpRk9STSA9IHRydWU7XG4gICAgICAgIC8vIGVsc2UgdUZPUk0gPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gaWYgKHJlRXZlbikgdUZPUk0gPSB0cnVlO1xuICAgICAgICAvLyBlbHNlIGlGT1JNID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFyZUV2ZW4pIGlGT1JNID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgMS9tIHNvbWV3aGVyZSBpbiB4XzEg4oCmIHhfblxuICAgIGxldCBjYWxjZnJvbSA9IC0xO1xuICAgIGZvcihsZXQgaT0wOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGZ4ID0gZlZhbHNbaV07IFxuXG4gICAgICAgIGlmIChmeCA9PSAxKSB7XG4gICAgICAgICAgICBjYWxjZnJvbSA9IGk7IC8vIFsxXSBpZiBtIGlzIHNvbWV3aGVyZSwgc2V0IGNhbGN1bGF0aW9uIHN0YXJ0IGZyb20gdGhlcmVcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZ4ID09IDApIHplcm9zKys7IC8vIFszXSBrZWVwIHRyYWNrIG9mIGhvdyBtYW55IHplcm9zIHRoZXJlIGFyZVxuICAgICAgICBlbHNlIGlmIChmeCA9PSAyIHx8IGZ4ID09IDMpIHsgLy8gWzJdXG4gICAgICAgICAgICBpZihmaXJzdFVuZGVmID09IC0xKSBmaXJzdFVuZGVmID0gaTsgLy8gaWYgdGhlcmUgaXMgYSBmaXJzdCAyL3Ugb3IgMy9pLCByZW1lbWJlclxuICAgICAgICAgICAgZWxzZSBpZihmeCAhPSBmVmFsc1tmaXJzdFVuZGVmXSkge1xuICAgICAgICAgICAgICAgIGNhbGNmcm9tID0gZmlyc3RVbmRlZjsgLy8gaWYgMy8yIG9yIDIvMyBwYWlycywgc2V0IGNhbGN1bGF0aW9uIGZvcm0gZmlyc3QgdW5kZWYuIHZhbHVlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKHplcm9zID09IGZWYWxzLmxlbmd0aCkge1xuICAgICAgICAvLyBbM10gaW4gY2FzZSBhbGwgdmFyaWFibGVzIGFyZSBuLCBqdXN0IHJldHVybiB0aGUgdW5kZWZpbmVkL2ltYWdpbmFyeSB2YWx1ZSBvZiB0aGUgRk9STVxuICAgICAgICBpZiAoaUZPUk0pIHJldHVybiAzO1xuICAgICAgICBlbHNlIHJldHVybiAyO1xuICAgIH1cbiAgICBpZiAoY2FsY2Zyb20gPj0gMCkge1xuICAgICAgICAvLyBbMXwyXSBpZiB0aGVyZSBpcyBhIDEvbSBzb21ld2hlcmUgaW4gdGhlIGZvcm0sIHdlIGNhbiBlYXNpbHkgY2FsY3VsYXRlIHRoZSByZXN0IGZyb20gdGhpcyBwb2ludFxuICAgICAgICBsZXQgdmFsID0gMTtcbiAgICAgICAgZm9yKGxldCBpPWNhbGNmcm9tOyBpPGZWYWxzLmxlbmd0aDsgaSsrKSB7ICAgICAgXG4gICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgaSA9PSBmVmFscy5sZW5ndGgtMSkge1xuICAgICAgICAgICAgICAgIHZhbCA9IHJlbCh2YWwsZlZhbHNbaV0pOyAvLyBpZiBubyBjcm9zcyBvbiBsYXN0IHZhciwgZG9uJ3QgaW52ZXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHZhbCA9IGludiggcmVsKHZhbCxmVmFsc1tpXSkgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH1cbiAgICBcbiAgICAvLyB3aGF0IHJlbWFpbnMsIHdpbGwgb25seSBiZSBlaXRoZXJcbiAgICAvLyAtICgxKSBhbGwgdmFyaWFibGVzIGFyZSBuLzAgb3IgbW4vMiAgIG9yXG4gICAgLy8gLSAoMikgYWxsIHZhcmlhYmxlcyBhcmUgbi8wIG9yIChtbikvM1xuICAgIC8vIFNvIHdlIGNhbGN1bGF0ZSBmcm9tIHRoZSBsYXN0IG9jY2FzaW9uIG9mIDIgb3IgMywgYmVjYXVzZSB3aXRoIEMyIChkZWdlbmVyYXRlKSBhbGwgZWxzZSBjYW4gYmUgaWdub3JlZFxuXG4gICAgLy8gZm9yIGV2ZW4gY2xvc2VkIHJlLWVudHJ5LUZPUk1zIHdpdGggdW5ldmVuIHJlc29sdXRpb24gKHVGT1JNIGMxKSwgd2UgbmVlZCB0byBkbyB0aGUgY2FsY3VsYXRpb24gdHdpY2VcbiAgICBjb25zdCByZXBlYXQgPSAocmVFdmVuICYmICFyZXNFdmVuICYmICFsYXN0T3Blbik/IDI6MTtcbiAgICBcbiAgICBmb3IobGV0IGk9KGZWYWxzLmxlbmd0aCpyZXBlYXQpLTE7IGk+PTA7IGktLSkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGklZlZhbHMubGVuZ3RoOyAvLyByZXBlYXRlZCB2YXJpYWJsZSBpbmRleFxuXG4gICAgICAgIGlmIChmVmFsc1tpbmRleF0gPT0gMiB8fCBmVmFsc1tpbmRleF0gPT0gMykge1xuICAgICAgICAgICAgY29uc3QgaVJldiA9IChmVmFscy5sZW5ndGgqcmVwZWF0KS0xIC0gaTsgLy8gcmV2ZXJzZSBpbmRleCB0byBlYXNpZXIgY2hlY2sgZm9yIGludGVycHJldGF0aW9uIDIgKHNlZSBuZXh0KVxuXG4gICAgICAgICAgICBpZiAoYWx0SW50ZXJwciAmJiAoKGxhc3RPcGVuICYmIGlSZXYlMj09MCkgfHwgKCFsYXN0T3BlbiAmJiBpUmV2JTI9PTEpKSkge1xuICAgICAgICAgICAgICAgIC8vIHVGT1JNIGlGT1JNIGludGVycHJldGF0aW9uIDI6IHJlY3Vyc2l2ZSBpZGVudGl0eSAoIMaSPSgoxpIpKSA8LT4gbW4gKVxuICAgICAgICAgICAgICAgIC8vIMaSPSgoxpIpKSBjYW4gYmUgc2VwYXJhdGVkIGlmIHRoZXJlIGlzIGFuIGV2ZW4gbnVtYmVyIG9mIGNyb3NzZXMgKG9yIG5vbmUpIGFmdGVyIHRoZSB2YXJpYWJsZTsgdGhpcyBpcyB0aGUgY2FzZSBpZiBlaXRoZXI6XG4gICAgICAgICAgICAgICAgLy8gLSAoMSkgdGhlIEZPUk0gaXMgb3BlbiBhbmQgdGhlIGJhY2t3YXJkcyB2YXJpYWJsZSBpbmRleCBpcyBldmVuICAgICAgb3JcbiAgICAgICAgICAgICAgICAvLyAtICgyKSB0aGUgRk9STSBpcyBjbG9zZWQgYW5kIHRoZSBiYWNrd2FyZHMgdmFyaWFibGUgaW5kZXggaXMgb2RkXG5cbiAgICAgICAgICAgICAgICAvLyB0byBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBjcm9zc2VzIGJldHdlZW4gxpIgYW5kIG91ciB2YXIgaXMgZXZlbiwgd2UgZGlzdGluZ3Vpc2ggdHdvIGNhc2VzOlxuICAgICAgICAgICAgICAgIGlmIChpRk9STSkgcmV0dXJuIHJlbCgzLGZWYWxzW2luZGV4XSk7IC8vIGlGT1JNOiAoxpI9KCjGkikpKXggPC0+IChtbikgeFxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHJlbCgyLGZWYWxzW2luZGV4XSk7ICAgICAgIC8vIHVGT1JNOiAgxpI9KCjGkikpeCAgPC0+ICBtbiB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBbNV0gaWYgZXZlcnl0aGluZyBlbHNlIGZhaWxzLCB1c2UgY2FzZSBkaXN0aW5jdGlvbjogdUZPUk0gaUZPUk0gKHAuOTQpOyBhbHNvIGFjY29yZGluZyB0bzpcbiAgICAgICAgICAgICAgICAvLyB1Rk9STSBpRk9STSAocC4xNjcpIGludGVycHJldGF0aW9uIDE6IHJlY3Vyc2lvbiBpbnN0cnVjdGlvbiAoIMaSPSgoxpIpKSBhbmQgbW4gbmVlZCB0byBiZSBkaWZmZXJlbnRpYXRlZClcblxuICAgICAgICAgICAgICAgIGxldCBjYXNlMCA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTBcbiAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTAgPSBpbnYoY2FzZTApOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDA7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSBpbnYoMCk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UwID0gcmVsKGNhc2UwLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UwID0gaW52KCByZWwoY2FzZTAsZngpICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjYXNlMSA9IDI7IC8vIHJlLWVudHJ5IMaSPW1uLCBiZWNhdXNlIG90aGVyIG1uPTFcbiAgICAgICAgICAgICAgICBpZiAobGFzdE9wZW4gJiYgIXJlc0V2ZW4gJiYgIXJlRXZlbikgY2FzZTEgPSBpbnYoY2FzZTEpOyAvLyBjcm9zcyBmb3IgaW50ZWdyYXRlZCBGT1JNcyB3aXRoIHVuZXZlbiByZXMuIGluc2lkZSBvcGVuIEZPUk1zIChpRk9STSBiMilcbiAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDsgajwoZlZhbHMubGVuZ3RoKnJlcGVhdCk7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZnggPSAwOyAvLyBhbGwgb3RoZXIgdmFsdWVzIHdpbGwgYmUgKGRlZ2VuZXJhdGVkIHRvKSB6ZXJvXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGZWYWxzW2luZGV4XSA9PSAyKSBmeCA9IDE7IC8vIGxhc3Qgb2NjYXNpb24gb2YgbW4vMiB3aWxsIGJlIGludGVycHJldGVkIGFzIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZnggPSBpbnYoMSk7IC8vIGxhc3Qgb2NjYXNpb24gb2YgKG1uKS8zIHdpbGwgYmUgaW50ZXJwcmV0ZWQgYXMgKDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RPcGVuICYmIGogPT0gZlZhbHMubGVuZ3RoLTEpIGNhc2UxID0gcmVsKGNhc2UxLGZ4KTsgLy8gaWYgbm8gY3Jvc3Mgb24gbGFzdCB2YXIsIGRvbid0IGludmVydFxuICAgICAgICAgICAgICAgICAgICBlbHNlIGNhc2UxID0gaW52KCByZWwoY2FzZTEsZngpICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnQoIGNhc2UwLGNhc2UxICk7IC8vIGNvbnRyYXZhbGVuY2Ugb2YgYm90aCBjYXNlc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC05OTsgLy8gZXJyb3IgY29kZVxufSAvLyBlbmQgcmVFbnRyeSgpXG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyAgQ09NUExFWCBGT1JNIENBTENVTEFUSU9OU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRk9STSBhcml0aG1ldGljIGZvciBcImltcGxpY2F0aW9uXCI6ICh4KXlcbiAqL1xuIGV4cG9ydCBmdW5jdGlvbiBpbXBsTChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICByZXR1cm4gcmVsKCBpbnYoZngpLGZ5ICk7XG59XG4vKipcbiAqIEZPUk0gYXJpdGhtZXRpYyBmb3IgXCJpbXBsaWNhdGlvblwiOiB4KHkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbXBsUihmeCwgZnkpIHtcbiAgICByZXR1cm4gcmVsKCBmeCxpbnYoZnkpICk7XG59XG5cbi8qKlxuICogRk9STSBhcml0aG1ldGljIGZvciBcInByZXNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICgoeCl5KVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJlKGZ4LCBmeSkgeyAvLyB2ZXJpZmllZFxuICAgIHJldHVybiBpbnYoIGltcGxMKGZ4LGZ5KSApO1xufVxuLyoqXG4gKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwicG9zdHNlY3Rpb25cIi9cImRlY2lzaW9uXCI6ICh4KHkpKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcG9zdChmeCwgZnkpIHsgLy8gdmVyaWZpZWRcbiAgICByZXR1cm4gaW52KCBpbXBsUihmeCxmeSkgKTtcbn1cblxuLyoqXG4gKiBGT1JNIGFyaXRobWV0aWMgZm9yIFwiY29udHJhdmFsZW5jZVwiL1wiZWl0aGVyLW9yXCI6ICgoeCl5KSAoeCh5KSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnQoZngsIGZ5KSB7IC8vIHZlcmlmaWVkXG4gICAgcmV0dXJuIHJlbCggcHJlKGZ4LGZ5KSwgcG9zdChmeCxmeSkgKTtcbn1cbi8qKlxuICogRk9STSBhcml0aG1ldGljIGZvciBcImVxdWl2YWxlbmNlXCIvPzogKCAoKHgpeSkgKHgoeSkpIClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVxdWl2KGZ4LCBmeSkge1xuICAgIHJldHVybiBpbnYoIGNvbnQoZngsZnkpICk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gKiBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICByZXR1cm4gcmVFbnRyeSh1bmRlZmluZWQsIGZhbHNlLCBhbHRJbnRlcnByLCBmQSwgZkIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlGb3JtMihmQSwgZkIsIGFsdEludGVycHI9ZmFsc2UpIHsgLy8gKiBjYWxjdWxhdGlvbiB2ZXJpZmllZCAoYm90aCBpbnRlcnByLilcbiAgICByZXR1cm4gcmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQik7XG59XG5leHBvcnQgZnVuY3Rpb24gdUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vICogY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICByZXR1cm4gcmVFbnRyeSh0cnVlLCBsYXN0T3BlbiwgYWx0SW50ZXJwciwgZkEsIGZCLCBmQyk7XG59XG5leHBvcnQgZnVuY3Rpb24gaUZvcm0zKGxhc3RPcGVuLCBmQSwgZkIsIGZDLCBhbHRJbnRlcnByPWZhbHNlKSB7IC8vICogY2FsY3VsYXRpb24gdmVyaWZpZWQgY2xvc2VkICYgb3BlbiAoYm90aCBpbnRlcnByLilcbiAgICByZXR1cm4gcmVFbnRyeShmYWxzZSwgbGFzdE9wZW4sIGFsdEludGVycHIsIGZBLCBmQiwgZkMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVGb3JtNChmQSwgZkIsIGZDLCBmRCwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgIHJldHVybiByZUVudHJ5KHVuZGVmaW5lZCwgZmFsc2UsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpRm9ybTQoZkEsIGZCLCBmQywgZkQsIGFsdEludGVycHI9ZmFsc2UpIHtcbiAgICByZXR1cm4gcmVFbnRyeSh1bmRlZmluZWQsIHRydWUsIGFsdEludGVycHIsIGZBLCBmQiwgZkMsIGZEKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1Rm9ybTUobGFzdE9wZW4sIGZBLCBmQiwgZkMsIGZELCBmRSwgYWx0SW50ZXJwcj1mYWxzZSkge1xuICAgIHJldHVybiByZUVudHJ5KHRydWUsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlGb3JtNShsYXN0T3BlbiwgZkEsIGZCLCBmQywgZkQsIGZFLCBhbHRJbnRlcnByPWZhbHNlKSB7XG4gICAgcmV0dXJuIHJlRW50cnkoZmFsc2UsIGxhc3RPcGVuLCBhbHRJbnRlcnByLCBmQSwgZkIsIGZDLCBmRCwgZkUpO1xufSIsImltcG9ydCAqIGFzIEZGb3JtIGZyb20gJy4vZmZvcm0nO1xuaW1wb3J0IHsgcGVybXV0ZUFycmF5LCBwYWQsIGNyZWF0ZVZhbGlkYXRpb24sIGVxdWFsQXJyYXlzLCBnZXRSYW5kb21CaWdJbnQgfSBmcm9tICdmb3Jtc2FuZGxpbmVzLXV0aWxzJztcblxuaW1wb3J0ICogYXMgYmlnSW50IGZyb20gJ2JpZy1pbnRlZ2VyJzsgLy8gb2Jzb2xldGUgd2l0aCBiZXR0ZXIgQmlnSW50IHN1cHBvcnQgaW4gYnJvd3NlcnNcbiAgICBcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgICBmb3JtZm9ybSBjb3JlIG1vZHVsZSAnZG5hJ1xuLy8gICAgIC0tIHNpbmNlIDIwMTkvMjAsIGJ5IFBldGVyIEhvZm1hbm4gKGZvcm1zYW5kbGluZXMuZXUpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4dGVuc2lvbnMgb2YgRkZPUk1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBleHRlbnNpb24gdG8gcmVwcmVzZW50IGZvcm1ETkEgYXMgRk9STSBjYWxjdWxhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY0FsbChpbnB1dCkge1xuXG4gICAgaWYgKGlucHV0LmluY2x1ZGVzKCc6OicpICYmIGlzVmFsaWRETkEoaW5wdXQpKSB7XG5cbiAgICAgICAgY29uc3QgZG5hID0gaW5wdXQuc3BsaXQoJzonKS5wb3AoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpO1xuXG4gICAgICAgIGNvbnN0IHZudW0gPSB0b3RhbFZhcnNGcm9tRE5BKGRuYSk7XG4gICAgICAgIGNvbnN0IHZhcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IHZudW19LCAoXywgaSkgPT4gYFwieF8ke2l9XCJgICk7XG4gICAgICAgIGNvbnN0IHZhbHMgPSB7fTtcblxuICAgICAgICBpZiAodm51bSA8IDEpIHtcbiAgICAgICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gcGFyc2VJbnQocmVzdWx0c1swXSk7XG4gICAgICAgICAgICByZXR1cm4gdmFscztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGludGVyS2V5ID0gJycrdmFycy5qb2luKCkrJzsnO1xuXG4gICAgICAgIGZvciAobGV0IGk9MDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuICAgICAgICAgICAgLy8gY29uc3QgaW50ZXJwciA9IGludGVycHJWYWxzLnNwbGl0KCcnKS5tYXAoKHZhbCxuKSA9PiAoe3ZhcjogdmFyc1tuXSwgdmFsdWU6IHBhcnNlSW50KHZhbCl9KSk7XG5cbiAgICAgICAgICAgIHZhbHNbaW50ZXJLZXkraW50ZXJwclZhbHNdID0gcmVzdWx0c1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxzO1xuICAgIH1cblxuICAgIHJldHVybiBGRm9ybS5jYWxjQWxsKGlucHV0KTtcbn1cblxuLyoqXG4gKiBleHRlbnNpb24gdG8gZ2V0IHZhcmlhYmxlcyBmcm9tIGZvcm1ETkFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlcyhpbnB1dCkge1xuICAgIGlmICh0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJyAmJiBpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgICAgICBjb25zdCB7IGRuYSwgZm9ybXVsYSwgdmFyTGlzdCB9ID0gZ2V0RE5BcGFydHMoaW5wdXQpO1xuXG4gICAgICAgIGlmICh2YXJMaXN0ICE9PSB1bmRlZmluZWQpIHJldHVybiB2YXJMaXN0O1xuICAgICAgICBlbHNlIGlmIChmb3JtdWxhICE9PSB1bmRlZmluZWQpIHJldHVybiBGRm9ybS5nZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG5cbiAgICAgICAgY29uc3Qgdm51bSA9IHRvdGFsVmFyc0Zyb21ETkEoZG5hKTtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogdm51bX0sIChfLCBpKSA9PiBgeF8ke2l9YCApO1xuICAgIH1cblxuICAgIHJldHVybiBGRm9ybS5nZXRWYXJpYWJsZXMoaW5wdXQpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDb252ZXJzaW9uc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIEVuY29kZXMgYSBGT1JNIGFzIGEgZG5hIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlIChfZm9ybSwgdmFyb3JkZXI9dW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZm9ybSA9IHZhcm9yZGVyID8gRkZvcm0ucmVPcmRlclZhcnMoX2Zvcm0sIHZhcm9yZGVyKSA6IF9mb3JtO1xuXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY2FsY0FsbChmb3JtKSkucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIERlY29kZXMgZG5hIGludG8gKG9uZSBvZiBpdHMpIHNpbXBsZXN0IGNvcnJlc3BvbmRpbmcgRk9STSBtb2RlbChzKSBhcyBhIGpzb24tcmVwcmVzZW50YXRpb25cbiAqIFxuICogISBFWFBFUklNRU5UQUxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZSAoZG5hLCB2YXJMaXN0PXVuZGVmaW5lZCkge1xuICAgIC8vID8gLT4gcmVtb3ZlIDAtdGVybXMgYW5kIGdyb3VwaW5ncz9cblxuICAgIGlmICh2YXJMaXN0ICYmIHZhckxpc3QubGVuZ3RoICE9PSB0b3RhbFZhcnNGcm9tRE5BKGRuYSkpIHRocm93IG5ldyBFcnJvcignTnVtYmVyIG9mIHZhcmlhYmxlcyBpbiBnaXZlbiB2YXJpYWJsZSBsaXN0IGRvZXNuXFwndCBtYXRjaCBmb3JtRE5BIGNvZGUgbGVuZ3RoJyk7XG4gICAgaWYgKCF2YXJMaXN0KSB2YXJMaXN0ID0gZ2VuZXJhdGVWYXJOYW1lcyh0b3RhbFZhcnNGcm9tRE5BKGRuYSkpOyAvLy5tYXAoc3RyID0+IGBcIiR7c3RyfVwiYCk7XG4gICAgXG4gICAgY29uc3QgdW5pdiA9IHVuaXZlcnNlX24odmFyTGlzdCk7XG4gICAgY29uc3QgdmFscyA9IGRuYS5zcGxpdCgnJykucmV2ZXJzZSgpO1xuXG4gICAgcmV0dXJuIHVuaXYubWFwKCh0ZXJtLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiBgKCgke3ZhbHNbaV19KSgke3Rlcm19KSlgO1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG4vKipcbiAqIFRha2VzIGFuIGludGVnZXIgKHVzdWFsbHkgQmlnSW50KSBhbmQgYSBkZXNpcmVkIHZhcmlhYmxlIG51bWJlciBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBmb3JtRE5BIFxuICogXG4gKiAqIE5vdGU6IHZhcmlhYmxlIG51bWJlciBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgaW50ZW5kZWQgbnVtYmVyIG9mIGxlYWRpbmcgemVyb3MgY2Fubm90IGJlIGluZmVyZWQgZnJvbSB0aGUgaW50ZWdlciBhbG9uZS4gSWYgbm8gdmFyaWFibGUgbnVtYmVyIGlzIGdpdmVuLCB0aGUgc21hbGxlc3QgdmFyaWFibGUgbnVtYmVyIHBvc3NpYmxlIGZvciB0aGUgcXVhdGVybmlvbiBpcyBhc3N1bWVkIHRvIGdlbmVyYXRlIHZhbGlkIGZvcm1ETkEuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRUb0ROQSAoaW50LCB2bnVtKSB7XG4gICAgY29uc3QgcXVhdCA9IGludC50b1N0cmluZyg0KTtcbiAgICBpZiAocXVhdC5zdWJzdHIoMCwxKSA9PT0gJy0nKSB0aHJvdyBuZXcgRXJyb3IoJ05lZ2F0aXZlIGludGVnZXJzIGNhbm5vdCBiZSBjb252ZXJ0ZWQgdG8gZm9ybUROQS4nKTtcbiAgICBpZiAocXVhdC5pbmNsdWRlcygnLicpKSB0aHJvdyBuZXcgRXJyb3IoJ0ZyYWN0aW9uYWwgbnVtYmVycyBjYW5ub3QgYmUgY29udmVydGVkIHRvIGZvcm1ETkEuJyk7XG5cbiAgICBjb25zdCBkbmFMZW4gPSB2bnVtID8gNCoqdm51bSA6IChmdW5jdGlvbiBtaW5EbmFMZW4oc3RyTGVuLCBuPTApIHsgXG4gICAgICAgIHJldHVybiA0KipuID49IHN0ckxlbiA/IDQqKm4gOiBtaW5EbmFMZW4oc3RyTGVuLCBuKzEpO1xuICAgIH0pKHF1YXQubGVuZ3RoKTtcblxuICAgIGlmIChxdWF0Lmxlbmd0aCA+IGRuYUxlbikgdGhyb3cgbmV3IEVycm9yKCdJbnRlZ2VyIHNpemUgZXhjZWVkcyBkZXNpcmVkIEROQSBsZW5ndGguJyk7XG4gICAgcmV0dXJuIHBhZChxdWF0LCBkbmFMZW4pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBPdXRwdXRcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBjb252ZXJ0cyBhIGZvcm0gaW50byBpdHMgZm9ybUROQSByZXByZXNlbnRhdGlvbiBpbiBIVE1MXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtVG9ETkEgKGlucHV0LCB2YXJvcmRlcj11bmRlZmluZWQsIG9wdGlvbnM9dW5kZWZpbmVkKSB7XG4gICAgY29uc3Qge291dHB1dH0gPSB7IG91dHB1dDogdW5kZWZpbmVkLCAuLi5vcHRpb25zIH07XG5cbiAgICBsZXQgZG5hID0gdW5kZWZpbmVkLCBmb3JtdWxhID0gdW5kZWZpbmVkLCB2YXJMaXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChpbnB1dC5pbmNsdWRlcygnOjonKSkge1xuICAgICAgICAvLyBpZiB0aGUgaW5wdXQgY29udGFpbnMgdGhlIG1hcmsgJzo6JyBmb3IgZm9ybUROQSwgcmV0dXJuIGl0IGlmIGl0J3MgdmFsaWRcbiAgICAgICAgaWYgKCFpc1ZhbGlkRE5BKGlucHV0KSkgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgdmFsaWQgZm9ybUROQScpO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZ2V0RE5BcGFydHMoaW5wdXQpO1xuXG4gICAgICAgIGRuYSA9IHBhcnRzLmRuYTtcbiAgICAgICAgZm9ybXVsYSA9IHBhcnRzLmZvcm11bGE7XG4gICAgICAgIHZhckxpc3QgPSBwYXJ0cy52YXJMaXN0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gaWYgbm90LCBwcm9jZXNzIHRoZSBpbnB1dCBhcyBhIEZPUk0gd2l0aCBzcGVjaWZpZWQgb3IgZGVmYXVsdCB2YXJvcmRlciBhbmQgZW5jb2RlIGl0IHRvIGRuYVxuICAgICAgICBkbmEgPSBlbmNvZGUoIGlucHV0LCAodmFyb3JkZXIgPyB2YXJvcmRlciA6IHVuZGVmaW5lZCkgKTtcbiAgICAgICAgZm9ybXVsYSA9IGlucHV0O1xuICAgICAgICB2YXJMaXN0ID0gdmFyb3JkZXIgPyB2YXJvcmRlciA6IGdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG91dHB1dCkge1xuICAgICAgICAvLyBjYXNlICdodG1sJzoge1xuICAgICAgICAvLyBcdHJldHVybiBmb3JtRE5BX2h0bWwoZm9ybXVsYSwgZG5hLCB2YXJMaXN0KTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjYXNlICd0ZXh0Jzoge1xuICAgICAgICAgICAgcmV0dXJuIChmb3JtdWxhICE9PSB1bmRlZmluZWQgPyBmb3JtdWxhIDogJycpICsgKHZhckxpc3QgJiYgZG5hLmxlbmd0aCA+IDEgPyBgLlske3Zhckxpc3Quam9pbignLCcpfV1gIDogJycpICsgJzo6JyArIGRuYTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlICdudW0nOiB7XG4gICAgICAgICAgICByZXR1cm4gZG5hO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgIHJldHVybiBbZm9ybXVsYSwgdmFyTGlzdCwgZG5hXTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBjb252ZXJ0cyBmb3JtRE5BIHdpdGggYSBnaXZlbiB2YXJpYWJsZSBsaXN0L29yZGVyIGludG8gYSBncmFwaCByZXByZXNlbnRhdGlvbiBvZiAob25lIG9mIGl0cykgc2ltcGxlc3QgY29ycmVzcG9uZGluZyBGT1JNIG1vZGVsKHMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkbmFUb0ZPUk0gKGZvcm1ETkEsIHZhcm9yZGVyPXVuZGVmaW5lZCwgb3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICAvLyAhIG5vdCB5ZXQgaW1wbGVtZW50ZWQhXG5cbiAgICByZXR1cm4gZGVjb2RlKGZvcm1ETkEsIHZhcm9yZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlblJhbmRvbUROQSAodm51bSkge1xuICAgIC8qIEdlbmVyYXRlcyBhIHJhbmRvbSBmb3JtRE5BIHN0cmluZyBmb3IgYSBnaXZlbiB2YXJpYWJsZSBudW1iZXIgKi9cblxuICAgIGNvbnN0IG1heE4gPSBiaWdJbnQoNCkucG93KCBiaWdJbnQoNCkucG93KHZudW0pICk7XG4gICAgY29uc3QgdmFsdWVfYmluID0gZ2V0UmFuZG9tQmlnSW50KCBtYXhOLnN1YnRyYWN0KDEpICk7XG4gICAgcmV0dXJuIGludFRvRE5BKHZhbHVlX2Jpbiwgdm51bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2bWFwIChpbnB1dCwgdmFyb3JkZXI9dW5kZWZpbmVkLCBvcHRpb25zPXVuZGVmaW5lZCkge1xuICAgIC8qIGdlbmVyYXRlcyB2bWFwIEhUTUwgZnJvbSBmb3JtL2Zvcm1ETkEgaW5wdXQgKi9cblxuICAgIGNvbnN0IHsgbGltaXRTaXplLCBjb252RGVmYXVsdFZhcm9yZGVyLFxuICAgICAgICAgICAgc2l6ZSwgZ2FwR3JvdywgbWFyZ2luRnVuYywgc3Ryb2tlVyB9ID0ge1xuICAgICAgICAgICAgICAgIGxpbWl0U2l6ZTogdHJ1ZSwgY29udkRlZmF1bHRWYXJvcmRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaXplOiB1bmRlZmluZWQsIGdhcEdyb3c6IDEuNSwgbWFyZ2luRnVuYzogdW5kZWZpbmVkLCBzdHJva2VXOiAwLjUsXG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyOiAnMTExMScsIDwtIG1pZ2h0IGFkZCBsYXRlclxuICAgICAgICAgICAgICAgIC4uLm9wdGlvbnN9O1xuXG4gICAgbGV0IGRuYSA9IHVuZGVmaW5lZDtcbiAgICBsZXQgZm9ybXVsYSA9IGlucHV0O1xuXG4gICAgaWYgKGlucHV0LmluY2x1ZGVzKCc6OicpICYmIGlzVmFsaWRETkEoaW5wdXQpKSB7XG4gICAgICAgIGNvbnN0IGRuYVBhcnRzID0gZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgICAgICBkbmEgPSBkbmFQYXJ0cy5kbmE7XG4gICAgICAgIGZvcm11bGEgPSBkbmFQYXJ0cy5mb3JtdWxhO1xuICAgICAgICBjb25zdCB2YXJMaXN0ID0gZG5hUGFydHMudmFyTGlzdCA/IGRuYVBhcnRzLnZhckxpc3QgOiBnZXRWYXJpYWJsZXMoaW5wdXQpO1xuXG4gICAgICAgIGlmICh2YXJvcmRlciAhPT0gdW5kZWZpbmVkICYmIHZhckxpc3QgIT09IHVuZGVmaW5lZCAmJiAhZXF1YWxBcnJheXModmFyb3JkZXIsIHZhckxpc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhcmlhYmxlIG9yZGVyIGlzIHNwZWNpZmllZCBpbiB0aGUgZm9ybUROQSBpbnB1dCBhbmQgYXMgYW4gYXJndW1lbnQgZm9yIHRoZSB2bWFwIGZ1bmN0aW9uIGFuZCB0aGV5IGFyZSBkaWZmZXJlbnQuIFBsZWFzZSBzZWxlY3Qgb25seSBvbmUgc3BlY2lmaWNhdGlvbiB0byBhdm9pZCBjb25mbGljdGluZyByZXN1bHRzLicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhckxpc3QpIHtcbiAgICAgICAgICAgIHZhcm9yZGVyID0gdmFyTGlzdDtcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtdWxhKSB7XG4gICAgICAgICAgICB2YXJvcmRlciA9IGdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICghdmFyb3JkZXIpIHtcbiAgICAgICAgdmFyb3JkZXIgPSBnZXRWYXJpYWJsZXMoZm9ybXVsYSk7XG4gICAgICAgIGlmIChjb252RGVmYXVsdFZhcm9yZGVyKSB2YXJvcmRlciA9IEZGb3JtLm1hdGNoRGVmYXVsdFZhck9yZGVyKHZhcm9yZGVyKTtcbiAgICB9XG5cbiAgICBpZiAoIWRuYSkgZG5hID0gZW5jb2RlKGZvcm11bGEsIHZhcm9yZGVyKTtcbiAgICBjb25zdCB2bnVtID0gdG90YWxWYXJzRnJvbUROQShkbmEpO1xuXG4gICAgaWYgKGlzTmFOKHZudW0pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFyaWFibGUgbnVtYmVyIGZvciB2bWFwcy4nKTtcbiAgICBpZiAobGltaXRTaXplICYmIHZudW0gPiA4KSB0aHJvdyBuZXcgRXJyb3IoJ3ZtYXBzIHdpdGggbW9yZSB0aGFuIDggdmFyaWFibGVzIGFyZSB0b28gY29tcHV0YXRpb25hbGx5IGludGVuc2l2ZSB0byBiZSByZW5kZXJlZCB3aXRoIHRoaXMgaW1wbGVtZW50YXRpb24uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcCBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cblxuICAgIGNvbnN0IHJldmVyc2VkRE5BID0gZG5hLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG4gICAgXG4gICAgY29uc3QgY2VsbFNpemUgPSBzaXplIHx8ICh2bnVtID0+IHtcbiAgICAgICAgLy8gcmVkdWN0aW9uIGJ5IDJweCBmb3IgZWFjaCBhZGRpdGlvbmFsIHZhcmlhYmxlIGlmIHZudW0gPiAzXG4gICAgICAgIGNvbnN0IG4gPSAxNyAtICh2bnVtID4gMyA/IDIgKiAodm51bS0zKSA6IDApOyAvLyBjaGFuZ2VkIGZyb206IDE0IC0gKHZudW0tMSk7XG4gICAgICAgIHJldHVybiBNYXRoLm1heCgyLCBuKTsgLy8gbWluIHNpemUgb2YgMnB4XG4gICAgfSkodm51bSk7XG5cbiAgICAvLyBtYXJnaW5zIGNhbiBhbHNvIGJlIGNhbGN1bGF0ZWQgdGhyb3VnaCBhIGN1c3RvbSBmdW5jdGlvblxuICAgIGNvbnN0IG1hcmdpbnMgPSBbc3Ryb2tlVywgXG4gICAgICAgIC4uLkFycmF5LmZyb20oe2xlbmd0aDp2bnVtLTF9LCBtYXJnaW5GdW5jID8gbWFyZ2luRnVuYyA6ICgoXyxpKSA9PiAoaSsxKSAqIGdhcEdyb3cpICldO1xuICAgIGNvbnN0IGNlbGwgPSB7dzpjZWxsU2l6ZSwgaDpjZWxsU2l6ZX07XG5cblxuICAgIGNvbnN0IHZtYXBUcmVlID0gY29uc3RydWN0Vm1hcChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG5cbiAgICByZXR1cm4ge3RyZWU6IHZtYXBUcmVlLFxuICAgICAgICAgICAgaW5wdXQ6IGlucHV0LCBcbiAgICAgICAgICAgIHZhcm9yZGVyOiB2YXJvcmRlciwgXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXAgcGVyc3BlY3RpdmVzIGFzIHBlcm11dGF0aW9ucyBvZiBhIGZvcm0vZm9ybUROQSBpbnB1dFxuICogXG4gKiAqIE5vdGU6IGZvcm1ETkEgaW5wdXQgbm90IHlldCBzdXBwb3J0ZWQgKHBlcm11dGF0aW9uIGFsZ29yaXRobSByZXF1aXJlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZtYXBQZXJzcGVjdGl2ZXMgKGZvcm0sIHZhcm9yZGVyPXVuZGVmaW5lZCwgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQsIGxvY2FsT3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICBjb25zdCB7bGltaXRTaXplfSA9IHsgbGltaXRTaXplOiB0cnVlLCAuLi5nbG9iYWxPcHRpb25zIH07XG5cbiAgICBpZiAodHlwZW9mKGZvcm0pID09PSAnc3RyaW5nJyAmJiBmb3JtLmluY2x1ZGVzKCc6OicpKSB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1ETkEgaW5wdXQgaXMgbm90IHlldCBzdXBwb3J0ZWQgZm9yIHZtYXAgcGVyc3BlY3RpdmVzLicpO1xuXG4gICAgaWYgKHZhcm9yZGVyID09PSB1bmRlZmluZWQpIHZhcm9yZGVyID0gRkZvcm0ubWF0Y2hEZWZhdWx0VmFyT3JkZXIoIGdldFZhcmlhYmxlcyhmb3JtKSApO1xuICAgIGNvbnN0IHZudW0gPSB2YXJvcmRlci5sZW5ndGg7XG4gICAgaWYgKGxpbWl0U2l6ZSAmJiB2bnVtID4gNSkgdGhyb3cgbmV3IEVycm9yKCdSZW5kZXJpbmcgYWxsIHRoZSBwZXJzcGVjdGl2ZXMgZm9yIHZtYXBzIHdpdGggbW9yZSB0aGFuIDUgdmFyaWFibGVzIGlzIHRvbyBjb21wdXRhdGlvbmFsbHkgaW50ZW5zaXZlIHdpdGggdGhpcyBpbXBsZW1lbnRhdGlvbi4gWW91IGNhbiwgaG93ZXZlciwgc3RpbGwgY29tcHV0ZSBzaW5nbGUgcGVybXV0YXRpb25zIGJ5IGNoYW5naW5nIHRoZSB2YXJpYWJsZSBvcmRlciBvZiB5b3VyIEZPUk0uIElmIHlvdSBzdGlsbCB3YW50IHRvIHByb2NlZWQsIGFkZCB0aGUgb3B0aW9uIFwibGltaXRTaXplOiBmYWxzZVwiIHRvIHlvdXIgdm1hcFBlcnNwZWN0aXZlcyBmdW5jdGlvbiBjYWxsICh1c2luZyB0aGUgZm9ybWZvcm0gbGlicmFyeSkuJyk7XG5cbiAgICBjb25zdCBmb3JtdWxhID0gZm9ybTsgLy8gPyBzdXBwb3J0IGZvciBKU09OP1xuXG4gICAgY29uc3Qgdm1hcFBlcm11dGF0aW9ucyA9IHBlcm11dGVBcnJheSh2YXJvcmRlcilcbiAgICAgICAgLm1hcCh2YXJvcmRlciA9PiB2bWFwKGZvcm11bGEsIHZhcm9yZGVyLCB7XG4gICAgICAgICAgICBoaWRlSW5wdXRMYWJlbDogdHJ1ZSwgXG4gICAgICAgICAgICBjdXN0b21MYWJlbDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgLi4ubG9jYWxPcHRpb25zIH0pICk7XG5cbiAgICByZXR1cm4gdm1hcFBlcm11dGF0aW9ucztcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHZtYXBzIGZyb20gYW4gYXJyYXkgb2YgRk9STSBpbnB1dHNcbiAqIFxuICogaW5wdXRMaXN0IGZvcm1hdDogW1snZm9ybS9mb3JtRE5BJywgW3Zhcm9yZGVyXS91bmRlZmluZWQsIG9wdGlvbnMvdW5kZWZpbmVkXSwgLi4uXVxuICovXG5leHBvcnQgZnVuY3Rpb24gdm1hcExpc3QgKGlucHV0TGlzdCwgZ2xvYmFsT3B0aW9ucz11bmRlZmluZWQpIHtcbiAgICBjb25zdCB2bWFwcyA9IGlucHV0TGlzdC5tYXAoaW5wdXQgPT4gdm1hcChpbnB1dFswXSwgaW5wdXRbMV0sIHsuLi5pbnB1dFsyXSwgLi4uZ2xvYmFsT3B0aW9uc30pICk7XG5cbiAgICByZXR1cm4gdm1hcHM7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERhdGEgU3RydWN0dXJlXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogUmVjdXJzaXZlbHkgY29uc3RydWN0cyB2bWFwIGRhdGEtc3RydWN0dXJlIGZyb20gZm9ybUROQVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0Vm1hcCAocmV2ZXJzZWRETkEsIHZudW0sIGNlbGwsIG1hcmdpbnMpIHtcbiAgICBjb25zdCBjYWxjR2FwU3VtID0gKHYsbWFyZ2lucykgPT4gbWFyZ2lucy5zbGljZSgxLHYpLnJldmVyc2UoKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4gYWNjICsgKDIqKmlkeCkgKiBjdXJyLCAwKTtcbiAgICBjb25zdCBmeCA9IChxaSxuKSA9PiAgKHFpJTIpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgICAgICAgICAvLyB4cG9zOiAwMTIzIC0+IDAxMDEgKiBzaGlmdCBuXG4gICAgY29uc3QgZnkgPSAocWksbikgPT4gKyhxaT4wICYmIHFpPDMpICogKG4gIT09IHVuZGVmaW5lZCA/IG4gOiAwKTsgLy8geXBvczogMDEyMyAtPiAwMTEwICogc2hpZnQgblxuXG4gICAgY29uc3QgY29uc3RydWN0Vm1hcF9yZWN1cnNpdmUgPSAoZG5hSG9sb24sIHZjb3VudCwgY2VsbCwgbWFyZ2lucywgcWk9MCkgPT4ge1xuICAgICAgICBjb25zdCBzdWJUcmVlID0ge307XG4gICAgICAgIGNvbnN0IGdhcFN1bSA9IGNhbGNHYXBTdW0odmNvdW50LG1hcmdpbnMpO1xuICAgICAgICBjb25zdCBxdG4gPSA0Kip2Y291bnQ7XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguc3FydChxdG4pO1xuICAgICAgICBkbmFIb2xvbiA9IGRuYUhvbG9uLnN1YnN0cihxaSpxdG4sIHF0bik7IC8vIHF1YXJ0ZXIgb2YgdGhlIGZvcm1ETkEgc3RyaW5nXG4gICAgXG4gICAgICAgIHN1YlRyZWUuZGF0YSA9IHsgXG4gICAgICAgICAgICBkbmE6ICc6OicrZG5hSG9sb24uc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKSxcbiAgICAgICAgICAgIHZudW06IHZjb3VudCwgY2VsbDogY2VsbCxcbiAgICAgICAgICAgIG1hcmdpbnM6IHZudW0gPiAwID8gbWFyZ2lucy5zbGljZSgwLHZjb3VudCkgOiBtYXJnaW5zLnNsaWNlKDAsMSlcbiAgICAgICAgfTtcblxuICAgICAgICBzdWJUcmVlLmhlaWdodCA9IHZjb3VudDtcbiAgICAgICAgc3ViVHJlZS5kZXB0aCA9IHZudW0gLSAoTWF0aC5sb2cocXRuKSAvIE1hdGgubG9nKDQpKTsgLy8gbG9nIGJhc2UgNFxuICAgICAgICBzdWJUcmVlLm9yZGVyID0gcWk7XG4gICAgXG4gICAgICAgIHN1YlRyZWUucG9zaXRpb24gPSBbXG4gICAgICAgICAgICAvLyBiYXNlIHNoaWZ0ICA9ICAoMSkgY2VsbCBzaXplICogbGVuZ3RoIHVuaXRzICArICAoMikgc3VtIG9mIGFsbCBwcmV2aW91cyBnYXBzL21hcmdpbnNcbiAgICAgICAgICAgIC8vIHJlYWwgc2hpZnQgID0gIGJhc2Ugc2hpZnQgICsgICgzKSBtYXJnaW5zIG9mIGN1cnJlbnQgaXRlcmF0aW9uIGxldmVsXG4gICAgICAgICAgICAvLyAtLSBxaTogY3VycmVudCB2YWx1ZSBpbmRleCAwLzEvMi8zXG4gICAgICAgICAgICAvLyAtLSAtLSBmeC9meSBtYXAgcWkgdG8geC95IHBvc2l0aW9ucyBvZiBhIHNxdWFyZSBhbmQgbXVsdGlwbHkgYnkgc2hpZnQgdmFsdWUgKDIuIGFyZ3VtZW50KVxuICAgICAgICAgICAgLy8gLS0gbWFyZ2luczogW3N0cm9rZVcsIDEgKiBnYXBHcm93LCAyICogZ2FwR3Jvdywg4oCmICh2bnVtLTEpICogZ2FwR3Jvd11cbiAgICAgICAgICAgIC8vIC0tIC0tIGlmIHZjb3VudCA9PSAwICAgIC0+IHNoaWZ0ICgzKSA9PSBzdHJva2VXXG4gICAgICAgICAgICAvLyAtLSAtLSBpZiB2Y291bnQgPT0gdm51bSAtPiBzaGlmdCAoMykgPT0gMFxuICAgICAgICAgICAgZngocWksIGxlbipjZWxsLncpICsgZngocWksIGdhcFN1bSkgKyBmeChxaSwgbWFyZ2luc1t2Y291bnRdKSxcbiAgICAgICAgICAgIGZ5KHFpLCBsZW4qY2VsbC5oKSArIGZ5KHFpLCBnYXBTdW0pICsgZnkocWksIG1hcmdpbnNbdmNvdW50XSldO1xuXG4gICAgICAgIHN1YlRyZWUuc2NhbGUgPSBbXG4gICAgICAgICAgICBsZW4qY2VsbC53ICsgZ2FwU3VtLCBcbiAgICAgICAgICAgIGxlbipjZWxsLmggKyBnYXBTdW0gXTtcblxuICAgICAgICBpZiAodm51bSA9PT0gMCkgeyAvLyBpZiBmb3JtRE5BIG9ubHkgaGFzIGEgc2luZ2xlIHZhbHVlLCBsaWtlIDo6M1xuICAgICAgICAgICAgc3ViVHJlZS52YWx1ZSA9IGRuYUhvbG9uO1xuICAgICAgICAgICAgcmV0dXJuIHN1YlRyZWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJUcmVlLmNoaWxkcmVuID0gW107XG4gICAgXG4gICAgICAgIGZvciAobGV0IGk9MDsgKHZjb3VudCA+IDAgJiYgaSA8IDQpIHx8ICh2Y291bnQgPT09IDAgJiYgaSA8IDEpOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2Y291bnQgPiAxKSB7XG4gICAgICAgICAgICBzdWJUcmVlLmNoaWxkcmVuID0gXG4gICAgICAgICAgICAgICAgWy4uLnN1YlRyZWUuY2hpbGRyZW4sIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlKGRuYUhvbG9uLCB2Y291bnQtMSwgY2VsbCwgbWFyZ2lucywgaSkgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdmFsID0gZG5hSG9sb24uc3Vic3RyKGksMSk7XG4gICAgXG4gICAgICAgICAgICBzdWJUcmVlLmNoaWxkcmVuID0gWy4uLnN1YlRyZWUuY2hpbGRyZW4sICh7XG4gICAgICAgICAgICAgICAgLy8gdHlwZTogJ3ZhbHVlJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGRuYTogJzo6Jyt2YWwsXG4gICAgICAgICAgICAgICAgICAgIHZudW06IDAsIGNlbGw6IGNlbGwsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbnM6IG1hcmdpbnMuc2xpY2UoMCwxKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB2Y291bnQtMSxcbiAgICAgICAgICAgICAgICBkZXB0aDogc3ViVHJlZS5kZXB0aCArIDEsXG4gICAgICAgICAgICAgICAgb3JkZXI6IGksXG4gICAgICAgICAgICAgICAgLy8gY291bnQ6IDEsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFtmeChpLGNlbGwudyksIGZ5KGksY2VsbC5oKV0sXG4gICAgICAgICAgICAgICAgc2NhbGU6IFtjZWxsLncsIGNlbGwuaF0sXG4gICAgICAgICAgICAgICAgLy8gcGFyZW50OiBzdWJUcmVlXG4gICAgICAgICAgICB9KSBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdWJUcmVlO1xuICAgIH07XG4gICAgcmV0dXJuIGNvbnN0cnVjdFZtYXBfcmVjdXJzaXZlIChyZXZlcnNlZEROQSwgdm51bSwgY2VsbCwgbWFyZ2lucyk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhbGlkYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBnaXZlbiBETkEgY29kZSBtYXRjaGVzIGEgZ2l2ZW4gRk9STSAoKyBvcHRpb25hbCB2YXJpYWJsZSBsaXN0KVxuICovXG5leHBvcnQgZnVuY3Rpb24gZG5hTWF0Y2hlc0Zvcm0gKGRuYSwgZm9ybSwgX3Zhckxpc3Q9dW5kZWZpbmVkLCBvcHRpb25zKSB7XG4gICAgLy8gY29uc3QgeyB9ID0geyAuLi5vcHRpb25zIH07XG4gICAgY29uc3QgdmFyTGlzdCA9IF92YXJMaXN0ID8gX3Zhckxpc3QgOiBGRm9ybS5nZXRWYXJpYWJsZXMoZm9ybSk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IF92YXJMaXN0ID8gW1xuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgKCkgPT4gRkZvcm0uZm9ybU1hdGNoZXNWYXJMaXN0KGZvcm0sIHZhckxpc3QpLFxuICAgICAgICAgICAgJ0ZPUk0gZG9lc25cXCd0IG1hdGNoIHRoZSBnaXZlbiB2YXJpYWJsZSBsaXN0JyksXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAoKSA9PiB2YXJMaXN0Lmxlbmd0aCA9PT0gdG90YWxWYXJzRnJvbUROQShkbmEpLFxuICAgICAgICAgICAgJ051bWJlciBvZiB2YXJpYWJsZXMgaW4gZ2l2ZW4gdmFyaWFibGUgbGlzdCBkb2VzblxcJ3QgbWF0Y2ggZm9ybUROQSBjb2RlIGxlbmd0aCcpLFxuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgKCkgPT4gZW5jb2RlKGZvcm0sIHZhckxpc3QpID09PSBkbmEsXG4gICAgICAgICAgICAnZm9ybUROQSBjb2RlIGlzIGluY29uc2lzdGVudCB3aXRoIEZPUk0gaW50ZXJwcmV0YXRpb24gcmVzdWx0cyAocmVzcGVjdGluZyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXIpJyksXG4gICAgXSA6IFtcbiAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICgpID0+IHZhckxpc3QgJiYgdmFyTGlzdC5sZW5ndGggPT09IHRvdGFsVmFyc0Zyb21ETkEoZG5hKSxcbiAgICAgICAgICAgICdOdW1iZXIgb2YgRk9STSB2YXJpYWJsZXMgZG9lc25cXCd0IG1hdGNoIGZvcm1ETkEgY29kZSBsZW5ndGgnKSxcbiAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICgpID0+IGVuY29kZShmb3JtKSA9PT0gZG5hLFxuICAgICAgICAgICAgJ2Zvcm1ETkEgY29kZSBpcyBpbmNvbnNpc3RlbnQgd2l0aCBGT1JNIGludGVycHJldGF0aW9uIHJlc3VsdHMnKSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25zLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgIH0pICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgaW4gZm9ybUROQSBmb3JtYXRcbiAqIChoYXMgdG8gYmUgbWFya2VkIHdpdGggJzo6JyB0byBub3QgY29uZnVzZSBpdCB3aXRoIGEgRk9STSBvdXQgb2YgY29uc3RhbnRzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEROQSAoX2lucHV0LCBvcHRpb25zKSB7XG4gICAgY29uc3Qge2NvbXBhcmVGb3JtLCByZXF1aXJlTWFya30gPSB7IGNvbXBhcmVGb3JtOiB0cnVlLCByZXF1aXJlTWFyazogdHJ1ZSwgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgaW5wdXQgPSByZXF1aXJlTWFyayA/IF9pbnB1dCA6ICc6OicrX2lucHV0O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbnMxID0gW1xuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHR5cGVvZihpbnB1dCkgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgJ2Zvcm1ETkEgaW5wdXQgaXMgbm90IG9mIHR5cGUg4oCYc3RyaW5n4oCZJyksXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gaW5wdXQuaW5jbHVkZXMoJzo6JyksXG4gICAgICAgICAgICAnSW5wdXQgZG9lcyBub3QgaW5jbHVkZSB0aGUgbWFyayDigJg6OuKAmSBmb3IgZm9ybUROQScpLFxuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGlucHV0Lmxlbmd0aCA+PSAzLFxuICAgICAgICAgICAgJ2Zvcm1ETkEgaW5wdXQgaXMgdG9vIHNob3J0JyksXG4gICAgXTtcbiAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgfSkgKTtcblxuICAgIGNvbnN0IHsgZG5hLCBmb3JtdWxhLCB2YXJMaXN0IH0gPSBnZXRETkFwYXJ0cyhpbnB1dCk7XG4gICAgY29uc3QgdmFsaWRhdGlvbnMyID0gW1xuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IHRvdGFsVmFyc0Zyb21ETkEoZG5hKSA+PSAwLFxuICAgICAgICAgICAgJ2Zvcm1ETkEgY29kZSBsZW5ndGggaXMgbm90IGluIHRoZSByYW5nZSA0XngnKSxcbiAgICAgICAgY3JlYXRlVmFsaWRhdGlvbigoKSA9PiAhZG5hLnNwbGl0KCcnKS5zb21lKG4gPT4gaXNOYU4ocGFyc2VJbnQobikpIHx8IHBhcnNlSW50KG4pIDwgMCB8fCBwYXJzZUludChuKSA+IDMpLFxuICAgICAgICAgICAgJ2Zvcm1ETkEgY29kZSBpcyBub3QgaW4gcXVhdGVybmlvbiBmb3JtYXQgKGNvbnNpc3Rpbmcgb25seSBvZiB0aGUgbnVtYmVycyAwLzEvMi8zKScpLFxuICAgICAgICBjb21wYXJlRm9ybSAmJiBmb3JtdWxhICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBjcmVhdGVWYWxpZGF0aW9uKCgpID0+IGRuYU1hdGNoZXNGb3JtKGRuYSwgZm9ybXVsYSwgdmFyTGlzdCksXG4gICAgICAgICAgICAnZm9ybUROQSBjb2RlIHBhcnQgZG9lc25cXCd0IG1hdGNoIGZvcm11bGEgcGFydCBvciBmb3JtdWxhIHBhcnQgZG9lc25cXCd0IG1hdGNoIGl0cyBzcGVjaWZpZWQgdmFyaWFibGUgb3JkZXInKSA6IG51bGwsXG4gICAgXS5maWx0ZXIoZm4gPT4gZm4pO1xuXG4gICAgdmFsaWRhdGlvbnMyLmV2ZXJ5KHZhbGlkYXRpb24gPT4gdmFsaWRhdGlvbigpLmNhdGEoe1xuICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgIH0pICk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSGVscGVyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogISBFWFBFUklNRU5UQUxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVmFyTmFtZXMgKHZudW0sIGV4Y2x1ZGVMaXN0ID0gdW5kZWZpbmVkKSB7XG5yZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiB2bnVtfSwgKF8sIGkpID0+IHtcbiAgICBsZXQgY2FuZGlkYXRlID0gYHhfJHtpfWA7XG4gICAgaWYgKGV4Y2x1ZGVMaXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2hpbGUgKGV4Y2x1ZGVMaXN0LmluY2x1ZGVzKGNhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZSA9IGNhbmRpZGF0ZSsn4oCyJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2FuZGlkYXRlO1xufSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29uc3RpdHVlbnRzIG9mIHRoZSA0LXZhbHVlZCB1bml2ZXJzZSBvZiAxIHRlcm1zIGZyb20gYSB2YXJpYWJsZSBuYW1lXG4gKiBcbiAqICEgRVhQRVJJTUVOVEFMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bml2ZXJzZV8xICh4KSB7XG5pZiAoeC5sZW5ndGggPiAxKSB4ID0gYFwiJHt4fVwiYDtcbnJldHVybiBbIFxuICAgIGAoeygke3h9KX17MnJ8KCR7eH0pfSlgLCBcbiAgICBgKHske3h9fXsycnwke3h9fSlgLCBcbiAgICBgKCh7KCR7eH0pfSR7eH0pKHsycnwke3h9fSgke3h9KSkpYCwgXG4gICAgYCgoeyR7eH19KCR7eH0pKSh7MnJ8KCR7eH0pfSR7eH0pKWBdO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnN0aXR1ZW50cyBvZiB0aGUgNC12YWx1ZWQgdW5pdmVyc2Ugb2YgbiB0ZXJtcyBmcm9tIGEgbGlzdCBvZiBuIHZhcmlhYmxlIG5hbWVzXG4gKiBcbiAqICEgRVhQRVJJTUVOVEFMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bml2ZXJzZV9uICh2YXJzKSB7XG5jb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG5jb25zdCB1bml2MXMgPSB2YXJzLm1hcCh2ID0+IHVuaXZlcnNlXzEodikpO1xucmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogNCoqdm51bX0sIChfLCBpKSA9PiB7XG4gICAgY29uc3QgaXEgPSBwYWQoaS50b1N0cmluZyg0KSwgdm51bSkuc3BsaXQoJycpO1xuICAgIGNvbnN0IHVuaXZOID0gdW5pdjFzLnJlZHVjZSgoZm9ybXVsYSwgdW5pdjEsIGosIGFycikgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtdWxhK2AoJHt1bml2MVtpcVtqXV19KWBcbiAgICAgICAgICAgICAgICAgICAgICAgICsoaiA9PT0gYXJyLmxlbmd0aC0xID8gJyknIDogJycpLCAnKCcpO1xuICAgIHJldHVybiB2bnVtID4gMSA/IHVuaXZOIDogdW5pdk4uc2xpY2UoMiwtMik7XG59KTtcbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHZhcmlhYmxlIG51bWJlciBmcm9tIGZvcm1ETkFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvdGFsVmFyc0Zyb21ETkEgKGZvcm1ETkEpIHsgXG4gICAgLy8gZGV0YWNoIGZyb20gZm9ybUROQSBtYXJrICc6OidcbiAgICBjb25zdCBkbmEgPSBmb3JtRE5BLnNwbGl0KCc6JykucG9wKCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgdGhlIG51bWJlciBvZiB2YXJpYWJsZXMgZnJvbSB0aGUgbGVuZ2h0IG9mIHRoZSBzdHJpbmdcbiAgICBjb25zdCBuID0gTWF0aC5sb2coZG5hLmxlbmd0aCkvTWF0aC5sb2coNCk7IC8vIGxvZ180KGRuYSBsZW5ndGgpID0gdmFyaWFibGUgbnVtYmVyXG4gICAgcmV0dXJuIG4gJSAxID09PSAwID8gbiA6IE5hTjtcbn1cblxuLyoqXG4gKiBSZXBhaXJzIGEgZ2l2ZW4gc3RyaW5nIHRoYXQgaXMgbm90IGluIGEgdmFsaWQgZm9ybUROQSBmb3JtIHRvIHBhc3MgYXMgZm9ybUROQVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwYWlyRE5BIChpbnB1dCkge1xuICAgIC8vIGlmIHRoZSBpbnB1dCBjb250YWlucyB0aGUgbWFyayAnOjonIGZvciBmb3JtRE5BLCBkaXN0aW5ndWlzaCB0d28gY2FzZXNcbiAgICBpZiAoaW5wdXQuaW5jbHVkZXMoJzo6JykpIHtcbiAgICAgICAgLy8gQ2FzZSAxOiBpbnB1dCBpcyBvZiBmb3JtIGYuW3hdOjpuIG9yIGY6Om4gLT4gZiB3aWxsIGJlIGVuY29kZWQgYXMgYSBGT1JNICh3aXRoIFt4XSBhcyB2YXJpYWJsZSBvcmRlciwgaWYgaXQgbWF0Y2hlcyB0aGUgRk9STXMgdmFyaWFibGVzIGluIG51bWJlciBhbmQgbGFiZWxzKVxuICAgICAgICAvLyAtIElmIHRoZSBmb3JtRE5BIGhhcyBiZWVuIHdlbGwgZm9ybWVkIGluIHRoZSBmaXJzdCBwbGFjZSwgdGhlIG91dHB1dCB3aWxsIGJlIGVxdWl2YWxlbnRcbiAgICAgICAgLy8gLSBJZiB0aGUgZG5hIHBhcnQgZG9lc24ndCBtYXRjaCB0aGUgRk9STSBwYXJ0LCB0aGUgZG5hIHBhcnQgd2lsbCBiZSBjb3JyZWN0ZWRcbiAgICAgICAgLy8gLSBJZiB0aGUgdmFyaWFibGUgb3JkZXIgZG9lc24ndCBtYXRjaCB0aGUgRk9STSB2YXJpYWJsZXMsIGl0IHdpbGwgYWxzbyBiZSBjb3JyZWN0ZWRcbiAgICAgICAgLy8gTm90ZSB0aGF0IHRoaXMgY2FzZSBlZmZlY3RpdmVseSBpbnRlcnByZXRzIHRoZSBpbnB1dCBhcyBGT1JNIGlucHV0IGFuZCBtYWtlcyBzdXJlIHRoYXQgdGhlIGZvcm1ETkEgaXMgY29uc2lzdGVudCwgYmVjYXVzZSBpdCBpcyBpbXBvc3NpYmxlIHRvIGluZmVyIGEgRk9STSBmcm9tIGl0cyBETkEuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZ2V0RE5BcGFydHMoaW5wdXQpO1xuICAgICAgICBpZiAocGFydHMuZm9ybXVsYSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBbeF0tcGFydCwgZXh0cmFjdCB2YXJpYWJsZSBvcmRlciBhbmQgY2hlY2sgaWYgaXRzIHZhbGlkIGZvciB0aGUgRk9STVxuICAgICAgICAgICAgbGV0IHZhckxpc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0cnkgeyAvLyB0cnkuLi5jYXRjaCBhdm9pZHMgaW50ZXJydXB0aW9uIGJ5IEVycm9yXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzLnZhckxpc3QgJiYgRkZvcm0uZm9ybU1hdGNoZXNWYXJMaXN0KHBhcnRzLmZvcm11bGEsIHBhcnRzLnZhckxpc3QpKSB2YXJMaXN0ID0gcGFydHMudmFyTGlzdDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZS1lbmNvZGUgdG8gcmV0dXJuIGNvcnJlY3QgZm9ybUROQSBmb3IgdGhlIGdpdmVuIGZvcm11bGFcbiAgICAgICAgICAgIHJldHVybiBmb3JtVG9ETkEocGFydHMuZm9ybXVsYSwgdmFyTGlzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2FzZSAyOiBpbnB1dCBpcyBvZiBmb3JtIDo6biAtPiB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWVcbiAgICAgICAgLy8gTm90ZSB0aGF0IGEgRk9STSB3aWxsIG5vdCBiZSBkZWNvZGVkIGZyb20gdGhlIGRuYSBhbG9uZSwgc2luY2UgdGhpcyBGT1JNIHdvdWxkIGJlIG9waW5pb25hdGVkXG4gICAgICAgIGlmICghaXNWYWxpZEROQShpbnB1dCkpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG4gICAgLy8gaWYgdGhlIGlucHV0IGlzIG5vdCBtYXJrZWQgYXMgZm9ybUROQSwgaXQgd2lsbCBqdXN0IGJlIGVuY29kZWQgYXMgYSBGT1JNXG4gICAgcmV0dXJuIGZvcm1Ub0ROQShpbnB1dCk7XG59XG5cbi8qKlxuICogRGVjb21wb3NlcyBhIGZvcm1ETkEgc3RyaW5nIGludG8gaXRzIDMvMi8xIHBhcnRzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRETkFwYXJ0cyAoZm9ybUROQSkge1xuICAgIGxldCBkbmEgPSB1bmRlZmluZWQsIGZvcm11bGEgPSB1bmRlZmluZWQsIHZhckxpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBwYXJ0cyA9IGZvcm1ETkEuc3BsaXQoJzonKTtcbiAgICBkbmEgPSBwYXJ0cy5wb3AoKTtcblxuICAgIGlmIChwYXJ0c1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGZvcm1fcGFydHMgPSBwYXJ0c1swXS5zcGxpdCgnLicpO1xuICAgICAgICBmb3JtdWxhID0gZm9ybV9wYXJ0c1swXTtcbiAgICAgICAgdmFyTGlzdCA9IGZvcm1fcGFydHMubGVuZ3RoID4gMSA/IGZvcm1fcGFydHNbMV0uc2xpY2UoMSwtMSkuc3BsaXQoJywnKSA6IHZhckxpc3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuICh7IGRuYTogZG5hLCBmb3JtdWxhOiBmb3JtdWxhLCB2YXJMaXN0OiB2YXJMaXN0IH0pO1xufSIsImltcG9ydCAqIGFzIEZDYWxjIGZyb20gJy4vZmNhbGMnO1xuXG5pbXBvcnQgeyBwYWQsIGZsYXR0ZW4sIGluY2x1ZGUsIGNyZWF0ZVZhbGlkYXRpb24sIGNoZWNrQnJhY2tldE1hdGNoaW5nLCBjb2xsYXBzZUxpdGVyYWxzLCBnZXRCcmFja2V0VW5pdHMgfSBmcm9tICdmb3Jtc2FuZGxpbmVzLXV0aWxzJztcbmltcG9ydCB7IFZBUkNPREUsIFZBUkNPREVfUkVWIH0gZnJvbSAnLi4vLi4vY29tbW9uL2hlbHBlcic7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgICBmb3JtZm9ybSBjb3JlIG1vZHVsZSAnZm9ybSdcbi8vICAgICAtLSBzaW5jZSAyMDE4LCBieSBQZXRlciBIb2ZtYW5uIChmb3Jtc2FuZGxpbmVzLmV1KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGb3JtIENhbGN1bGF0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogQ2FsY3VsYXRlcyBhIGdpdmVuIGZvcm0gcmVjdXJzaXZlbHkgXG4gKiBcbiAqICogRG8gTk9UIHVzZSB0aGlzIGZ1bmN0aW9uIGZvciBmb3JtdWxhcyB3aXRoIHZhcmlhYmxlcyFcbiAqICogQXNzdW1lcyB4PTAgZm9yIGFsbCB2YXJpYWJsZXMuIFVzZSBpbnRlckNhbGMoKSBpbnN0ZWFkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsYyhfZm9ybSkge1xuICAgIGxldCBmeCA9IDA7XG4gICAgLy8gbWFrZSBzdXJlIHRvIGhhdmUgYSBqc29uIGZvcm0sIGlmIG5vdDogdHJ5IHRvIGNvbnZlcnRcbiAgICBjb25zdCBmb3JtID0gZ2V0VmFsaWRGb3JtKF9mb3JtKTtcblxuICAgIGZvciAoY29uc3QgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdmb3JtJykge1xuICAgICAgICAgICAgZnggPSBGQ2FsYy5yZWwoIGZ4LGNhbGMoZm9ybS5zcGFjZVtpXSkgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmb3JtLnNwYWNlW2ldLnR5cGUgPT09ICdjb25zdCcpIHtcbiAgICAgICAgICAgIGZ4ID0gRkNhbGMucmVsKCBmeCxmb3JtLnNwYWNlW2ldLnZhbHVlICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZm9ybS5zcGFjZVtpXS50eXBlID09PSAndmFyJykge1xuICAgICAgICAgICAgaWYoIWlzTmFOKGZvcm0uc3BhY2VbaV0udmFsdWUpKSBmeCA9IEZDYWxjLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3VuY2xlYXInKSB7XG4gICAgICAgICAgICBmeCA9IEZDYWxjLnJlbCggZngsZm9ybS5zcGFjZVtpXS52YWx1ZSApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICBsZXQgbmVzdGVkVmFscyA9IFtdO1xuICAgICAgICAgICAgY29uc3QgZlJlRW50cnkgPSBmb3JtLnNwYWNlW2ldO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGogaW4gZlJlRW50cnkubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgbmVzdGVkVmFscyA9IFsuLi5uZXN0ZWRWYWxzLCBjYWxjKGZSZUVudHJ5Lm5lc3RlZFtqXSldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9yIGV2ZW4gcmVzb2x1dGlvbnMgKHRvdGFsIG5lc3RlZCBhcmd1bWVudHMpLCByZUVudHJ5IG51bWJlciB3aWxsIGJlIHVuZGVmaW5lZFxuICAgICAgICAgICAgLy8gc2luY2UgaXQgZG9lc24ndCBtYXR0ZXIgaWYgaXRzIGV2ZW4gb3Igb2RkXG4gICAgICAgICAgICBjb25zdCByZUVudHJ5TnVtYmVyID0gKGZSZUVudHJ5Lm5lc3RlZC5sZW5ndGggJSAyID09PSAwKSA/IHVuZGVmaW5lZCA6IGZSZUVudHJ5LnJlRXZlbjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gbm90YXRpb24gcmVhZGluZzoge2RlZXBlc3QsIC4uLiwgc2hhbGxvd2VzdH0gIHVzZSBuZXN0ZWRWYWxzLnJldmVyc2UoKSB0byByZXZlcnNlIHZhcmlhYmxlc1xuICAgICAgICAgICAgZnggPSBGQ2FsYy5yZWwoIGZ4LCBGQ2FsYy5yZUVudHJ5KHJlRW50cnlOdW1iZXIsIGZSZUVudHJ5Lmxhc3RPcGVuLCBmUmVFbnRyeS5hbHRJbnRlcnByZXRhdGlvbiwgLi4ubmVzdGVkVmFscykgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZihmb3JtLnVubWFya2VkKSByZXR1cm4gZng7XG4gICAgZWxzZSByZXR1cm4gRkNhbGMuaW52KCBmeCApO1xufVxuXG4vKipcbiAqIEludGVycHJldCBhbmQgY2FsY3VsYXRlIGFsbCBwb3NzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmb3JtXG4gKiBcbiAqIChyZWZhY3RvcmVkOiAxMC4xMC4yMDIwKVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2FsY0FsbChfZm9ybSkge1xuICAgIGNvbnN0IGZvcm0gPSBnZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgY29uc3QgdmFycyA9IGdldFZhcmlhYmxlcyhmb3JtKTtcbiAgICBjb25zdCB2bnVtID0gdmFycy5sZW5ndGg7XG4gICAgY29uc3QgdmFscyA9IHt9O1xuXG4gICAgaWYgKHZudW0gPCAxKSB7XG4gICAgICAgIHZhbHNbJ1Jlc3VsdCddID0gY2FsYyhmb3JtKTtcbiAgICAgICAgcmV0dXJuIHZhbHM7XG4gICAgfVxuXG4gICAgY29uc3QgaW50ZXJLZXkgPSAnJyt2YXJzLmpvaW4oKSsnOyc7XG4gICAgXG4gICAgZm9yIChsZXQgaT0wOyBpIDwgNCoqdm51bTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGludGVycHJWYWxzID0gcGFkKGkudG9TdHJpbmcoNCksIHZudW0pO1xuICAgICAgICBjb25zdCBpbnRlcnByID0gaW50ZXJwclZhbHMuc3BsaXQoJycpLm1hcCgodmFsLG4pID0+ICh7dmFyOiB2YXJzW25dLCB2YWx1ZTogcGFyc2VJbnQodmFsKX0pKTtcblxuICAgICAgICB2YWxzW2ludGVyS2V5K2ludGVycHJWYWxzXSA9IGludGVyQ2FsYyhmb3JtLCBpbnRlcnByKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFscztcbn1cblxuLyoqXG4gKiBJbnRlcnByZXRzIGEgZm9ybSBhbmQgY2FsY3VsYXRlcyB0aGUgcmVzdWx0IG9mIHRoZSBpbnRlcnByZXRhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJDYWxjKGZvcm0sIGludGVycHIpIHtcbiAgICByZXR1cm4gY2FsYyggaW50ZXJwcmV0KGZvcm0sIGludGVycHIpICk7XG59XG5cbi8qKlxuICogSW50ZXJwcmV0cyBhIGZvcm0gd2l0aCBzcGVjaWZpZWQgdmFsdWVzIGZvciBlYWNoIHZhcmlhYmxlXG4gKiBcbiAqIGludGVycHI6IFt7dmFyOiAneCcsIHZhbHVlOiBufSwg4oCmXVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwcmV0KF9mb3JtLCBpbnRlcnByKSB7XG4gICAgY29uc3QgZm9ybSA9IGdldFZhbGlkRm9ybShfZm9ybSk7XG5cbiAgICBjb25zdCBpbnRlcnByRm9ybSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9ybSkpOyAvLyBjbG9uZSBmb3JtXG5cbiAgICB0cmF2ZXJzZUZvcm0oaW50ZXJwckZvcm0sIGZ1bmN0aW9uKGZCcmFuY2gpIHtcbiAgICAgICAgY29uc3Qgc3BhY2UgPSBmQnJhbmNoLnNwYWNlO1xuXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnR5cGUgPT09ICd2YXInKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2IGluIGludGVycHIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwYWNlW2ldLnN5bWJvbCA9PT0gaW50ZXJwclt2XS52YXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VbaV0udmFsdWUgPSBpbnRlcnByW3ZdLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBpbnRlcnByRm9ybTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXh0ZW5zaW9ucyBvZiBGQ2FsY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyAhIGNoZWNrIGlmIHJlZHVuZGFudFxuZXhwb3J0IGZ1bmN0aW9uIHJlbF9sb2dpYyhmeCwgZnkpIHtcbiAgICBpZih0eXBlb2YoZngpID09PSBBcnJheSB8fCB0eXBlb2YoZnkpID09PSBBcnJheSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEZDYWxjLnJlbF9sb2dpYyhmeCwgZnkpO1xufVxuXG4vLyAhIGNoZWNrIGlmIHJlZHVuZGFudFxuZXhwb3J0IGZ1bmN0aW9uIGludl9sb2dpYyhmeCkge1xuICAgIGlmKHR5cGVvZihmeCkgPT09IEFycmF5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gRkNhbGMuaW52X2xvZ2ljKGZ4KTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ29udmVyc2lvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDb252ZXJ0cyBmcm9tIHBhcmFudGhlc2lzIG5vdGF0aW9uIGludG8gSlNPTiBzdHJpbmcgYW5kIHBhcnNlcyBhcyBKU09OIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VMaW5lYXIoZm9ybXVsYSkge1xuICAgIC8vIGNvbnZlcnQgdGhlIGZvcm11bGEgaW50byBhIEpTT04gc3RyaW5nXG4gICAgY29uc3QganNvblN0ciA9IGNvbnZGcm9tTGluZWFyKGZvcm11bGEpO1xuXG4gICAgLy8gdHJ5IHBhcnNpbmcgdGhlIHN0cmluZyBhcyBhIEpTT04gb2JqZWN0XG4gICAgbGV0IGpzb24gPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHIpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ganNvbjtcbn1cblxuLyoqXG4gKiBjbGVhbiBmb3JtdWxhIHN0cmluZyBmcm9tIHdoaXRlc3BhY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZGcm9tTGluZWFyKGZvcm11bGEpIHtcbiAgICBjb25zdCBjbGVhbkZvcm11bGEgPSBjbGVhbkxpbmVhcihmb3JtdWxhKTtcbiAgICBjb25zdCBhcnIgPSBjb25zdHJ1Y3RGcm9tTGluZWFyKGNsZWFuRm9ybXVsYSk7XG4gICAgcmV0dXJuIGZsYXR0ZW4oYXJyKS5qb2luKCcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTGluZWFyKGZvcm11bGEpIHtcbiAgICBsZXQgY2xlYW5Gb3JtdWxhID0gJyc7XG4gICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgY29uc3QgY2hhciA9IGZvcm11bGFbaV07XG4gICAgICAgIGlmKHR5cGVvZihjaGFyKSAhPT0gJ3N0cmluZycpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkgaW5RdW90ZSA9ICFpblF1b3RlO1xuICAgICAgICBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSBpblNsYXNoID0gIWluU2xhc2g7XG5cbiAgICAgICAgLy8gb21pdCB3aGl0ZXNwYWNlIG91dHNpZGUgb2YgcXVvdGVzXG4gICAgICAgIGlmIChjaGFyID09PSAnICcpIHtcbiAgICAgICAgICAgIGlmIChpblF1b3RlIHx8IGluU2xhc2gpIGNsZWFuRm9ybXVsYSArPSBjaGFyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgY2xlYW5Gb3JtdWxhICs9IGNoYXI7XG4gICAgfVxuICAgIHJldHVybiBjbGVhbkZvcm11bGE7XG59XG5cbi8qKlxuICogQ29udmVydHMgZnJvbSBwYXJhbnRoZXNpcyBub3RhdGlvbiB0byBKU09OLWZvcm1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdEZyb21MaW5lYXIoZm9ybXVsYSkge1xuICAgIGxldCBjb21wQWxsID0gW107XG4gICAgbGV0IHVubWFya2VkID0gdHJ1ZTtcblxuICAgIC8vIGNoZWNrIGZvciBhbGwgZW5jbG9zaW5nIG91dGVyIGZvcm1cbiAgICBsZXQgY291bnREZXB0aCA9IDA7XG4gICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICBsZXQgaW5TbGFzaCA9IGZhbHNlO1xuICAgIGZvciAoY29uc3QgaSBpbiBmb3JtdWxhKSB7XG4gICAgICAgIGNvbnN0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09ICdzdHJpbmcnKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgaWYgKChjb3VudERlcHRoID09IDApICYmIChpICE9IDApKSBicmVhaztcbiAgICAgICAgICAgICAgICBjb3VudERlcHRoKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGFyID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICBjb3VudERlcHRoLS07XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSBmb3JtdWxhLmxlbmd0aC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09ICdcIicgJiYgIWluU2xhc2gpIGluUXVvdGUgPSAhaW5RdW90ZTtcbiAgICAgICAgaWYgKGNoYXIgPT09ICcvJyAmJiAhaW5RdW90ZSkgaW5TbGFzaCA9ICFpblNsYXNoO1xuICAgIH1cblxuICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJyAgeyddO1xuICAgIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJ1widHlwZVwiOlwiZm9ybVwiLCddO1xuXG4gICAgaWYgKHVubWFya2VkKSBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInVubWFya2VkXCI6dHJ1ZSwnXTtcbiAgICBlbHNlIGZvcm11bGEgPSBmb3JtdWxhLnNsaWNlKDEsZm9ybXVsYS5sZW5ndGgtMSk7XG5cbiAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICdcInNwYWNlXCI6WyddO1xuXG5cbiAgICBsZXQgcGFydHMgPSBbJyddO1xuXG4gICAgY291bnREZXB0aCA9IDA7XG4gICAgaW5RdW90ZSA9IGZhbHNlO1xuICAgIGluU2xhc2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlQ2hhciA9ICfihrsnO1xuICAgIGNvbnN0IG9wdENoYXIgPSAn4qS0JztcbiAgICBjb25zdCBuZXN0Q2hhciA9ICfipLUnO1xuXG4gICAgZm9yIChjb25zdCBpIGluIGZvcm11bGEpIHtcbiAgICAgICAgbGV0IGNoYXIgPSBmb3JtdWxhW2ldO1xuICAgICAgICBjb25zdCBwcmV2Q2hhciA9IGZvcm11bGFbaS0xXTtcbiAgICAgICAgaWYodHlwZW9mKGNoYXIpICE9PSAnc3RyaW5nJykgYnJlYWs7IC8vIHByb3RvdHlwZSBoYWNrc1xuICAgICAgICBcbiAgICAgICAgaWYgKCFpblF1b3RlICYmICFpblNsYXNoKSB7XG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJyknIHx8IGNoYXIgPT09ICd9JykgY291bnREZXB0aC0tO1xuICAgICAgICAgICAgaWYgKGNoYXIgPT09ICcoJyB8fCBjaGFyID09PSAneycpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCAoeCkgZG9lc24ndCBuZWVkIHRvIGJlIHNlcGFyYXRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHBhcnRzID0gWy4uLnBhcnRzLCAnJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50RGVwdGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCAocHJldkNoYXIgPT09ICcpJyB8fCBwcmV2Q2hhciA9PT0gJ30nKSAmJiAhKGNoYXIgPT09ICcpJyB8fCBjaGFyID09PSAnfScpICkge1xuICAgICAgICAgICAgICAgIC8vIGlmIGNoYXIgZm9sbG93cyAoeCksIHNlcGFyYXRlOyBidXQgbm90IGlmIGl0IGlzIGFub3RoZXIgJyknXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50RGVwdGggPT09IDApIHBhcnRzID0gWy4uLnBhcnRzLCAnJ107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB1bmlxdWUgc2VwYXJhdGlvbiBjaGFycyBmb3IgcmUtZW50cnkgZm9ybXMgZm9yIGVhc3kgc3BsaXR0aW5nXG4gICAgICAgICAgICBpZiAoY291bnREZXB0aCA9PT0gMSAmJiBjaGFyID09PSAnLCcpIGNoYXIgPSBuZXN0Q2hhcjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ3wnKSBjaGFyID0gb3B0Q2hhcjtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50RGVwdGggPT09IDEgJiYgY2hhciA9PT0gJ0AnKSBjaGFyID0gcmVDaGFyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSAnXCInICYmICFpblNsYXNoKSBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgIGlmIChjaGFyID09PSAnLycgJiYgIWluUXVvdGUpIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgLy8gYWRkIGNoYXIgdG8gdGhlIGxhdGVzdCBwdXNoZWQgcGFydFxuICAgICAgICBwYXJ0c1twYXJ0cy5sZW5ndGgtMV0gKz0gY2hhcjtcbiAgICB9XG4gICAgXG4gICAgZm9yIChjb25zdCBpIGluIHBhcnRzKSB7XG5cbiAgICAgICAgaWYgKHBhcnRzW2ldWzBdID09PSAnKCcpIHsgXG4gICAgICAgICAgICAvLyBpZiBwYXJ0IGlzIGZvcm1cbiAgICAgICAgICAgIGNvbnN0IGNvbXAgPSBbY29uc3RydWN0RnJvbUxpbmVhcihwYXJ0c1tpXSldO1xuXG4gICAgICAgICAgICBwYXJ0c1tpXSA9IGNvbXAuc2xpY2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJ0c1tpXVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICAvLyBlbHNlIGlmIHBhcnQgaXMgcmUtZW50cnkgZm9ybVxuXG4gICAgICAgICAgICBsZXQgY29tcCA9IFsnICB7J107XG4gICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInJlRW50cnlcIiwnXTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHBhcnRzW2ldLnNsaWNlKDEscGFydHNbaV0ubGVuZ3RoLTEpO1xuICAgICAgICAgICAgbGV0IHJlTmVzdGVkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyhyZUNoYXIpKSB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IHJlLWVudHJ5IHN5bnRheFxuICAgICAgICAgICAgICAgIGNvbnN0IGFsdEludGVycHIgPSBjb250ZW50LnN0YXJ0c1dpdGgoYGFsdCR7b3B0Q2hhcn1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBfY29udGVudCA9IGFsdEludGVycHIgPyBjb250ZW50LnNsaWNlKDQsKSA6IGNvbnRlbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gWy0xLC0xXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn0uX2ApKSB0eXBlID0gWzMsMV07XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoX2NvbnRlbnQuc3RhcnRzV2l0aChgLi4ke3JlQ2hhcn0uYCkpIHR5cGUgPSBbMywwXTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAuLiR7cmVDaGFyfV9gKSkgdHlwZSA9IFsyLDFdO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKF9jb250ZW50LnN0YXJ0c1dpdGgoYC4uJHtyZUNoYXJ9YCkpIHR5cGUgPSBbMiwwXTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKGAke3JlQ2hhcn1fYCkpIHR5cGUgPSBbMCwxXTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChfY29udGVudC5zdGFydHNXaXRoKHJlQ2hhcikpIHR5cGUgPSBbMCwwXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVDaGFyU3VtID0gdHlwZVswXSArIHR5cGVbMV0gKyAxO1xuICAgICAgICAgICAgICAgIHJlTmVzdGVkID0gX2NvbnRlbnQuc2xpY2UodHlwZUNoYXJTdW0sKS5zcGxpdChuZXN0Q2hhcik7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVOZXN0ZWQubGVuZ3RoICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOlwidW5kZWZpbmVkXCIsJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVbMF0gPT09IDIpIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICBlbHNlIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6ZmFsc2UsJ107XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZVsxXSA+IDApIGNvbXAgPSBbLi4uY29tcCwgJ1wibGFzdE9wZW5cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOmZhbHNlLCddO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsdEludGVycHIpIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb2xkIHJlLWVudHJ5IHN5bnRheFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlUGFydHMgPSBjb250ZW50LnNwbGl0KG9wdENoYXIpO1xuXG4gICAgICAgICAgICAgICAgcmVOZXN0ZWQgPSByZVBhcnRzW3JlUGFydHMubGVuZ3RoLTFdLnNwbGl0KG5lc3RDaGFyKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZU5lc3RlZC5sZW5ndGggJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6XCJ1bmRlZmluZWRcIiwnXTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJzJyJyB8fCByZVBhcnRzWzFdID09PSAnMnInIHx8IHJlUGFydHNbMl0gPT09ICcycicpIGNvbXAgPSBbLi4uY29tcCwgJ1wicmVFdmVuXCI6dHJ1ZSwnXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcInJlRXZlblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZVBhcnRzWzBdID09PSAnb3BlbicgfHwgcmVQYXJ0c1sxXSA9PT0gJ29wZW4nIHx8IHJlUGFydHNbMl0gPT09ICdvcGVuJykgY29tcCA9IFsuLi5jb21wLCAnXCJsYXN0T3BlblwiOnRydWUsJ107XG4gICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcImxhc3RPcGVuXCI6ZmFsc2UsJ107XG5cbiAgICAgICAgICAgICAgICBpZiAocmVQYXJ0c1swXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1sxXSA9PT0gJ2FsdCcgfHwgcmVQYXJ0c1syXSA9PT0gJ2FsdCcpIGNvbXAgPSBbLi4uY29tcCwgJ1wiYWx0SW50ZXJwcmV0YXRpb25cIjp0cnVlLCddO1xuICAgICAgICAgICAgICAgIGVsc2UgY29tcCA9IFsuLi5jb21wLCAnXCJhbHRJbnRlcnByZXRhdGlvblwiOmZhbHNlLCddO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcIm5lc3RlZFwiOlsnXTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBuIGluIHJlTmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCBjb25zdHJ1Y3RGcm9tTGluZWFyKHJlTmVzdGVkW25dKSBdO1xuICAgICAgICAgICAgICAgIGlmIChuIDwgcmVOZXN0ZWQubGVuZ3RoLTEpIGNvbXAgPSBbLi4uY29tcCwgJywnXTtcbiAgICAgICAgICAgICAgICAvLyByZU5lc3RlZFtuXSA9IGNvbnN0cnVjdEZyb21MaW5lYXIoIHJlTmVzdGVkW25dICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ119ICAnXTtcblxuICAgICAgICAgICAgcGFydHNbaV0gPSBjb21wLnNsaWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlbHNlIHdlIGhhdmUgdmFyaWFibGVzL2NvbnN0YW50c1xuXG4gICAgICAgICAgICBsZXQgY29tcCA9IFtdO1xuXG4gICAgICAgICAgICBsZXQgdmFycyA9IFtdO1xuICAgICAgICAgICAgbGV0IGluUXVvdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBpblNsYXNoID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgaiBpbiBwYXJ0c1tpXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYXIgPSBwYXJ0c1tpXVtqXTtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoY2hhcikgIT09ICdzdHJpbmcnKSBicmVhazsgLy8gcHJvdG90eXBlIGhhY2tzXG5cbiAgICAgICAgICAgICAgICBpZiAoY2hhciA9PT0gJ1wiJyAmJiAhaW5TbGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBpblF1b3RlID0gIWluUXVvdGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1hcmsgcXVvdGVkIHN0cmluZyB3aXRoIGEgJ+KAlicgZm9yIGlkZW50aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChpblF1b3RlKSB2YXJzID0gWy4uLnZhcnMsICfigJYnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hhciA9PT0gJy8nICYmICFpblF1b3RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluU2xhc2ggPSAhaW5TbGFzaDtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFyayB1bmNsZWFyIGZvcm0gd2l0aCBhICfigL0nIGZvciBpZGVudGlmaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5TbGFzaCkgdmFycyA9IFsuLi52YXJzLCAn4oC9J107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluUXVvdGUgJiYgIWluU2xhc2gpIHZhcnMgPSBbLi4udmFycywgJyddO1xuICAgICAgICAgICAgICAgICAgICAvLyBxdW90ZSBjaGFycyBpbnNpZGUgc2xhc2hlcyB3aWxsIGJlIGVzY2FwZWQgdG8gbm90IGludGVyZmVyZSB3aXRoIEpTT04gc3ludGF4XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFyID09PSAnXCInICYmIGluU2xhc2gpIHZhcnNbdmFycy5sZW5ndGgtMV0gKz0gJ1xcXFwnICsgY2hhcjtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB2YXJzW3ZhcnMubGVuZ3RoLTFdICs9IGNoYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHYgaW4gdmFycykge1xuICAgICAgICAgICAgICAgIGlmKHR5cGVvZih2YXJzW3ZdKSAhPT0gJ3N0cmluZycpIGJyZWFrOyAvLyBwcm90b3R5cGUgaGFja3NcblxuICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJyAgeyddO1xuICAgICAgICAgICAgICAgIGlmICghaXNOYU4odmFyc1t2XSkgJiYgdmFyc1t2XS5sZW5ndGggPiAwIFxuICAgICAgICAgICAgICAgICAgICAmJiB2YXJzW3ZdWzBdICE9PSAn4oC9JyAmJiB2YXJzW3ZdWzBdICE9PSAn4oCWJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcImNvbnN0XCIsJ107IFxuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6J107XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgdmFyc1t2XV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhcnNbdl1bMF0gPT09ICfigL0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1widHlwZVwiOlwidW5jbGVhclwiLCddO1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6MiwnXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCJzeW1ib2xcIjonXTtcbiAgICAgICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnXCInK3ZhcnNbdl0uc2xpY2UoMSkrJ1wiJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInR5cGVcIjpcInZhclwiLCddO1xuICAgICAgICAgICAgICAgICAgICBjb21wID0gWy4uLmNvbXAsICdcInZhbHVlXCI6XCIqXCIsJ107XG4gICAgICAgICAgICAgICAgICAgIGNvbXAgPSBbLi4uY29tcCwgJ1wic3ltYm9sXCI6J107XG4gICAgICAgICAgICAgICAgICAgIGlmKHZhcnNbdl1bMF0gPT09ICfigJYnKSBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XS5zbGljZSgxKSsnXCInXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjb21wID0gWy4uLmNvbXAsICdcIicrdmFyc1t2XSsnXCInXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcCA9IFsuLi5jb21wLCAnfSAgJ107XG4gICAgICAgICAgICAgICAgaWYgKHYgPCB2YXJzLmxlbmd0aC0xKSBjb21wID0gWy4uLmNvbXAsICcsJ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcnRzW2ldID0gY29tcC5zbGljZSgpO1xuICAgICAgICB9IC8vIGVuZCBlbHNlXG5cbiAgICAgICAgY29tcEFsbCA9IFsuLi5jb21wQWxsLCBwYXJ0c1tpXV07XG4gICAgICAgIGlmIChpIDwgcGFydHMubGVuZ3RoLTEpIGNvbXBBbGwgPSBbLi4uY29tcEFsbCwgJywnXTtcbiAgICB9XG5cbiAgICBjb21wQWxsID0gWy4uLmNvbXBBbGwsICddfSAgJ107XG5cbiAgICByZXR1cm4gY29tcEFsbDtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgKHJlYWwpIG5lc3RlZCBmb3JtIHN0cnVjdHVyZSBmcm9tIHRoZSAubmVzdGVkIGFycmF5IG9mIHRoZSBvcmlnaW5hbCByZS1lbnRyeSBqc29uXG4gKiBcbiAqIFRPRE8gc2hvdWxkIGJlIHJld3JpdHRlbiBjb21wbGV0ZWx5IHRvIGdldCByaWQgb2YgYWxsIHRoZSBtdXRhdGlvbiFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cnVjdE5lc3RlZChyZUZvcm0sIG9wdGlvbnM9e30pIHsgICAgXG4gICAgbGV0IHNwYWNlID0gcmVGb3JtLnNwYWNlID0gW107XG4gICAgcmVGb3JtLm5lc3RlZC5yZXZlcnNlKCk7IC8vIE1VU1QgYmUgcmV2ZXJzZWQsIGJlY2F1c2Ugbm90YXRpb246IHtkZWVwZXN0LCAuLi4sIHNoYWxsb3dlc3R9XG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gcmVGb3JtLm5lc3RlZCkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgIC8vIHByZXBlbmQgdGhlIHJlRW50cnkgbmVzdGluZyBiZWZvcmUgZXZlcnl0aGluZyBlbHNlIGluIHRoZSBzcGFjZVxuICAgICAgICAgICAgc3BhY2UudW5zaGlmdCgge3R5cGU6ICdmb3JtJywgcmVDaGlsZDogdHJ1ZSwgc3BhY2U6IFtdfSApOyAvLyBzcGFjZS5wdXNoIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgICAgIGNvbnN0IG5lc3RlZEZvcm0gPSBzcGFjZVswXTsgLy8gc3BhY2Vbc3BhY2UubGVuZ3RoLTFdIDwtIG9yZGVyIGxhc3RcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFyZUZvcm0ubmVzdGVkW2ldLnVubWFya2VkKSBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBuZXN0ZWRGb3JtLnNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAgICAgbmVzdGVkRm9ybS5zcGFjZS5wdXNoKC4uLnJlRm9ybS5uZXN0ZWRbaV0uc3BhY2UpOyAvLyBwdXNoKHJlRm9ybS5uZXN0ZWRbaV0pIGZvciBncm91cGluZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFjZSA9IG5lc3RlZEZvcm0uc3BhY2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXJlRm9ybS5uZXN0ZWRbaV0udW5tYXJrZWQpIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICAvLyBlbHNlIHNwYWNlLnB1c2gocmVGb3JtLm5lc3RlZFtpXSk7XG4gICAgICAgICAgICBlbHNlIHNwYWNlLnB1c2goLi4ucmVGb3JtLm5lc3RlZFtpXS5zcGFjZSk7IC8vIHB1c2gocmVGb3JtLm5lc3RlZFtpXSkgZm9yIGdyb3VwaW5nXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5hZGRFbXB0eVJlQ2hpbGRTcGFjZSAmJiAoc3BhY2UubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgc3BhY2UucHVzaCgge3R5cGU6ICdzcGFjZSd9ICk7XG4gICAgICAgIH1cbiAgICB9ICAgIFxuXG4gICAgLy8gd2UgbmVlZCB0byBhZGQgYSBwb2ludCBvZiByZS1lbnRyeSB0byB0aGUgbGFzdCBuZXN0ZWQgZm9ybVxuICAgIC8vIGZpcnN0LCBsZXRzIGFzc3VtZSB0aGlzIGlzIHRoZSBmb3JtIGl0c2VsZlxuICAgIGxldCBsYXN0TmVzdGVkID0gcmVGb3JtO1xuICAgIFxuICAgIGlmKHJlRm9ybS5zcGFjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIHRoZW4gbG9vcCB1bnRpbCB0aGUgbGFzdCByZUNoaWxkIGlzIGZvdW5kIGFuZCBtYWtlIHRoaXMgb3VyIGxhc3QgbmVzdGVkIGZvcm1cbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobGFzdE5lc3RlZC5zcGFjZVswXSwgJ3JlQ2hpbGQnKSkgeyAgICAgICAgXG4gICAgICAgICAgICBsYXN0TmVzdGVkID0gbGFzdE5lc3RlZC5zcGFjZVswXTtcbiAgICAgICAgICAgIGlmIChsYXN0TmVzdGVkLnNwYWNlLmxlbmd0aCA8IDEpIGJyZWFrOyAvLyBwcmV2ZW50IGVycm9ycyB3aGVuIG5vdGhpbmcgaXMgZm91bmRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBmb3Igb3BlbiByZS1lbnRyaWVzLCB3ZSBuZWVkIHRvIGFkZCBhbm90aGVyIG5lc3RpbmcgKHNlZSB1Rk9STSBpRk9STSBmb3IgcmVmZXJlbmNlKVxuICAgIGlmKHJlRm9ybS5sYXN0T3Blbikge1xuICAgICAgICBsYXN0TmVzdGVkLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAnZm9ybScsIHJlQ2hpbGQ6IHRydWUsIHNwYWNlOiBbXX0gKTtcbiAgICAgICAgLy8gdGhlbiBhZGQgdGhlIHJlLWVudHJ5IHBvaW50IHRvIGVpdGhlciBzcGFjZVxuICAgICAgICBsYXN0TmVzdGVkLnNwYWNlWzBdLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcbiAgICB9XG4gICAgZWxzZSBsYXN0TmVzdGVkLnNwYWNlLnVuc2hpZnQoIHt0eXBlOiAncmVFbnRyeVBvaW50J30gKTtcblxuICAgIC8vIGxhc3QsIGRlbGV0ZSB0aGUgbmVzdGVkIHN0cnVjdHVyZSwgd2UgZG9uJ3QgbmVlZCBpdCBhbnltb3JlXG4gICAgZGVsZXRlIHJlRm9ybS5uZXN0ZWQ7XG4gICAgcmV0dXJuIHJlRm9ybTtcbn1cblxuLyoqXG4gKiBUT0RPIHNob3VsZCBiZSByZXdyaXR0ZW4gY29tcGxldGVseSB0byBnZXQgcmlkIG9mIGFsbCB0aGUgbXV0YXRpb24hXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRfcmVFbnRyeShfZm9ybSwgb3B0aW9ucz17fSkge1xuICAgIGNvbnN0IHJlZkZvcm0gPSBnZXRWYWxpZEZvcm0oX2Zvcm0pO1xuICAgIGNvbnN0IHRhcmdldEZvcm0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlZkZvcm0pKTsgLy8gY29weSBqc29uIG9iamVjdCB3aXRob3V0IGlkZW50aWZ5aW5nIGl0XG5cbiAgICAvLyB3ZSBtdXN0IGtlZXAgYSBydW5uaW5nIGluZGV4IHRvIG5vdCBjb25mdXNlIGlkZW50aWNhbCBmb3JtcyB3aGlsZSByZWNvbnN0cnVjdGluZyB0aGUgcmVFbnRyaWVzXG4gICAgLy8gTm90ZTogdGhpcyBzaG91bGQgYmUgZG9uZSBtb3JlIGVmZmljaWVudGx5IGluIHRoZSBmdXR1cmVcbiAgICBsZXQgcnVubmluZ0luZGV4ID0gMDtcbiAgICB0cmF2ZXJzZUZvcm0ocmVmRm9ybSwgZnVuY3Rpb24oYnJhbmNoKSB7IGJyYW5jaC5ydW5uaW5nSW5kZXggPSBydW5uaW5nSW5kZXgsIHJ1bm5pbmdJbmRleCsrOyB9KTtcbiAgICBydW5uaW5nSW5kZXggPSAwO1xuICAgIHRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbihicmFuY2gpIHsgYnJhbmNoLnJ1bm5pbmdJbmRleCA9IHJ1bm5pbmdJbmRleCwgcnVubmluZ0luZGV4Kys7IH0pO1xuXG4gICAgdHJhdmVyc2VGb3JtKHJlZkZvcm0sIGZ1bmN0aW9uKHJlZkJyYW5jaCkge1xuXG4gICAgICAgIGlmKHJlZkJyYW5jaC50eXBlID09PSAncmVFbnRyeScpIHtcbiAgICAgICAgICAgIHRyYXZlcnNlRm9ybSh0YXJnZXRGb3JtLCBmdW5jdGlvbih0YXJnZXRCcmFuY2gpIHtcblxuICAgICAgICAgICAgICAgIGlmKCAoSlNPTi5zdHJpbmdpZnkocmVmQnJhbmNoKSA9PT0gSlNPTi5zdHJpbmdpZnkodGFyZ2V0QnJhbmNoKSkgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVmQnJhbmNoLnJ1bm5pbmdJbmRleCA9PT0gKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0QnJhbmNoLCAncnVubmluZ0luZGV4JykgPyB0YXJnZXRCcmFuY2gucnVubmluZ0luZGV4IDogbnVsbCkpICkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmFuY2ggPSBjb25zdHJ1Y3ROZXN0ZWQodGFyZ2V0QnJhbmNoLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIGRlbGV0ZSBydW5uaW5nIGluZGV4IHByb3BlcnR5XG4gICAgdHJhdmVyc2VGb3JtKHRhcmdldEZvcm0sIGZ1bmN0aW9uKGJyYW5jaCkgeyBkZWxldGUgYnJhbmNoLnJ1bm5pbmdJbmRleDsgfSk7XG5cbiAgICByZXR1cm4gdGFyZ2V0Rm9ybTtcbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBSZXByZXNlbnRhdGlvblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIHJldHVybnMganNvbi1yZXByZXNlbnRhdGlvbiBvZiB0aGUgc3BlY2lmaWVkIEZPUk1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGpzb25TdHJpbmcoX2Zvcm0sIGV4cGFuZFJFPWZhbHNlKSB7XG4gICAgY29uc3QgZm9ybSA9IGdldFZhbGlkRm9ybShleHBhbmRSRSA/IGV4cGFuZF9yZUVudHJ5KF9mb3JtKSA6IF9mb3JtKTtcblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShmb3JtLCB1bmRlZmluZWQsIDIpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBIZWxwZXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBwYXJzZXMgYSBGT1JNIHRvIGdldCBhbGwgb2YgaXRzIHZhcmlhYmxlcyBhbmQgc29ydHMgdGhlbSB1c2luZyB0aGUgSlMgQXJyYXkuc29ydCgpIG1ldGhvZFxuICogd2hpY2ggc29ydHMgYnkgY29tcGFyaW5nIFVURi0xNiBjb2RlIHVuaXQgdmFsdWVzLlxuICogXG4gKiAqIE5vdGU6IEJ5IGNvbnZlbnRpb24sIHRoZSBwcm9jZXNzIG9mIGRlcml2aW5nIGZvcm1ETkEgZnJvbSBhIGdpdmVuIEZPUk0gaW52b2x2ZXMgb3JkZXJpbmcgb2YgdGhlIGV4dHJhY3RlZCB2YXJpYWJsZXMgYnkgdGhpcyBzYW1lIHNvcnRpbmcgbWV0aG9kLCBpZiBubyBzcGVjaWFsIG9yZGVyaW5nIGlzIHNwZWNpZmllZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhcmlhYmxlcyhfZm9ybSkge1xuICAgIGNvbnN0IGZvcm0gPSBnZXRWYWxpZEZvcm0oX2Zvcm0pO1xuXG4gICAgbGV0IHZhcnMgPSBbXTtcbiAgICB0cmF2ZXJzZUZvcm0oZm9ybSwgZnVuY3Rpb24oZkJyYW5jaCkge1xuICAgICAgICBjb25zdCBzcGFjZSA9IGZCcmFuY2guc3BhY2U7XG5cbiAgICAgICAgZm9yIChjb25zdCBpIGluIHNwYWNlKSB7XG4gICAgICAgICAgICBpZiAoc3BhY2VbaV0udHlwZSA9PT0gJ3ZhcicpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWluY2x1ZGUodmFycywgc3BhY2VbaV0uc3ltYm9sKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXJzID0gWy4uLnZhcnMsIHNwYWNlW2ldLnN5bWJvbF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhcnMuc29ydCgpO1xufVxuXG4vKipcbiAqIHRyYXZlcnNlcyBvbmx5IGZvcm0tdHlwZXMgaW4gYSBqc29uIHRyZWVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYXZlcnNlRm9ybShmb3JtLGZ1bmMpIHtcbiAgICBjb25zdCBicmVha1RyYXYgPSBmdW5jLmFwcGx5KHRoaXMsW2Zvcm1dKTtcblxuICAgIGlmIChmb3JtLnNwYWNlKSB7IC8vIGZvcm0udHlwZTogJ2Zvcm0nXG4gICAgICAgIGlmIChmb3JtLnNwYWNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBmb3JtLnNwYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ2Zvcm0nIHx8IGZvcm0uc3BhY2VbaV0udHlwZSA9PT0gJ3JlRW50cnknKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRyYXZlcnNlRm9ybShmb3JtLnNwYWNlW2ldLGZ1bmMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZm9ybS5uZXN0ZWQpIHsgLy8gZm9ybS50eXBlOiAncmVFbnRyeSdcbiAgICAgICAgaWYgKGZvcm0ubmVzdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBmb3JtLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJyZWFrTG9vcCA9IHRyYXZlcnNlRm9ybShmb3JtLm5lc3RlZFtpXSxmdW5jKTtcbiAgICAgICAgICAgICAgICBpZiAoYnJlYWtMb29wKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGNvbnNvbGUubG9nKCdFUlJPUjogTm90IGEgZm9ybSEnKTtcblxuICAgIHJldHVybiBicmVha1RyYXY7XG59XG5cblxuLyoqXG4gKiBnZXRzIHRvdGFsIHZhcmlhYmxlIG51bWJlciBvZiBhIEZPUk1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsVmFycyAoZm9ybVN0cikge1xuICAgIHJldHVybiBnZXRWYXJpYWJsZXMoZm9ybVN0ci5zdWJzdHIoKSkubGVuZ3RoO1xufVxuXG4vKipcbiAqIHJlLW9yZGVycyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHRvIG1hdGNoIGFuIG9yZGVyaW5nIHBhdHRlcm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlT3JkZXJWYXJzIChmb3JtdWxhLCB2YXJvcmRlcikge1xuICAgIHJldHVybiBkZWNvZGVWYXJzKCBlbmNvZGVWYXJzKGZvcm11bGEsIHZhcm9yZGVyKSApO1xufVxuXG4vKipcbiAqIGRlY29kZXMgdmFyaWFibGVzIGluIGFuIGVuY29kZWQgZm9ybXVsYSBzdHJpbmcgd2l0aCBhbiBvcHRpb25hbCBkZWNvZGUgcGF0dGVyblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVmFycyAoZW5jU3RyLCBkZWNvZGVQYXR0ZXJuPXVuZGVmaW5lZCkge1xuICAgIGxldCByZXZDb2RlID0gVkFSQ09ERV9SRVY7XG4gICAgaWYgKGRlY29kZVBhdHRlcm4pIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoVkFSQ09ERV9SRVYpO1xuICAgIGNvbnN0IHZhclBhcnQgPSBrZXlzLnNsaWNlKDAsZGVjb2RlUGF0dGVybi5sZW5ndGgpO1xuICAgIGNvbnN0IG1vZFBhcnQgPSBrZXlzLnNsaWNlKC0zKTtcbiAgICBcbiAgICByZXZDb2RlID0gdmFyUGFydC5jb25jYXQobW9kUGFydCkucmVkdWNlKCAoY29kZSxrZXksaSkgPT4gKHsuLi5jb2RlLCBcbiAgICAgICAgW2tleV06IGkgPCBkZWNvZGVQYXR0ZXJuLmxlbmd0aCA/IGRlY29kZVBhdHRlcm5baV0gOiBWQVJDT0RFX1JFVltrZXldLCB9KSx7fSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY1N0ci5zcGxpdCgnJylcbiAgICAgICAgICAgIC5tYXAoYyA9PiBPYmplY3Qua2V5cyhyZXZDb2RlKS5pbmRleE9mKGMpID4gLTEgPyByZXZDb2RlW2NdIDogYykuam9pbignJyk7XG59XG5cbi8qKlxuICogZW5jb2RlcyB2YXJpYWJsZXMgaW4gYSBmb3JtdWxhIHN0cmluZyBhY2NvcmRpbmcgdG8gYSBnaXZlbiB2YXJpYWJsZSBvcmRlciAoYXJyYXkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVWYXJzIChmb3JtdWxhLCB2YXJvcmRlcj11bmRlZmluZWQpIHtcbiAgICBpZiAoIXZhcm9yZGVyKSB2YXJvcmRlciA9IGdldFZhcmlhYmxlcyhmb3JtdWxhKTtcbiAgICBcbiAgICBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7IC8vIHRoeCB0byBDb29sQUo4NjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzY5Njk0ODZcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7IC8vICQmIG1lYW5zIHRoZSB3aG9sZSBtYXRjaGVkIHN0cmluZ1xuICAgIH1cbiAgICBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICBjb25zdCBmaXhQdG4gPSB7YWx0OiAnYWx0KD89XFx8KScsIHJFdmVuOiAnMnIoPz1cXHwpJywgck9kZDogJzJyKzEoPz1cXHwpJ307IC8vICEgY2hlY2sgaWYgdXNlbGVzcyBlc2NhcGVcbiAgICBjb25zdCBwdG4gPSB2ID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbiAgICBpZiAodi5sZW5ndGggPiAxKSByZXR1cm4gYFxcXCIke2VzY2FwZVJlZ0V4cCh2KX1cXFwiYDsgLy8gKD88PVxcXCIpKCR7dn0pKD89XFxcIikgLy8gISBjaGVjayBpZiB1c2VsZXNzIGVzY2FwZVxuICAgIHJldHVybiBgJHtlc2NhcGVSZWdFeHAodil9YDtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB2YXJvcmRlclxuICAgIC5yZWR1Y2UoKGVuY1N0cix2LGkpID0+IGVuY1N0clxuICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cChmaXhQdG4uYWx0LCAnZycpLFZBUkNPREVbJ2FsdCddIClcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoZml4UHRuLnJFdmVuLCAnZycpLFZBUkNPREVbJzJyJ10pXG4gICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGZpeFB0bi5yT2RkLCAnZycpLFZBUkNPREVbJzJyKzEnXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAocHRuKHYpLCAnZycpLChPYmplY3Qua2V5cyhWQVJDT0RFX1JFVilbaV0pIClcbiAgICAgICAgICAgICAgICAgICAgICAgICwgZm9ybXVsYSApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hEZWZhdWx0VmFyT3JkZXIgKHZhckxpc3QpIHtcbiAgICAvKiBIZWxwZXIgdG8gbWF0Y2ggZGVmYXVsdCBvcmRlcmluZ3MgZm9yIGNhbGN1bGF0aW9uIGFuZCB2bWFwcyAqL1xuICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnRUxSJykgcmV0dXJuIFsnTCcsJ0UnLCdSJ107XG4gICAgaWYgKHZhckxpc3Quam9pbignJykgPT09ICcrLUxSJykgcmV0dXJuIFsnLScsJ0wnLCdSJywnKyddO1xuICAgIGlmICh2YXJMaXN0LmpvaW4oJycpID09PSAnKy1FTFInKSByZXR1cm4gWyctJywnTCcsJ0UnLCdSJywnKyddO1xuICAgIHJldHVybiB2YXJMaXN0O1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhbiBpbnB1dCBpcyBhIHZhbGlkIGZvcm11bGEgb3IgSlNPTi1GT1JNXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRm9ybSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycgPyBcbiAgICAgICAgaXNWYWxpZEZvcm11bGEoaW5wdXQsIG9wdGlvbnMpIDogaXNWYWxpZEpTT05Gb3JtKGlucHV0LCBvcHRpb25zKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBmb3JtdWxhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkRm9ybXVsYSAoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICAvLyBjb25zdCB7IH0gPSB7IC4uLm9wdGlvbnMgfTtcblxuICAgIGxldCB2YWxpZGF0aW9uczEgPSBbXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oKCkgPT4gdHlwZW9mKGlucHV0KSA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICAnRm9ybXVsYSBpbnB1dCBpcyBub3Qgb2YgdHlwZSDigJhzdHJpbmfigJknKSxcbiAgICBdO1xuICAgIGlmIChpbnB1dC5sZW5ndGggPiAwKSB2YWxpZGF0aW9uczEgPSBbLi4udmFsaWRhdGlvbnMxLFxuICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWNvbGxhcHNlTGl0ZXJhbHMoaW5wdXQsICdcIicpICYmICEhY29sbGFwc2VMaXRlcmFscyhpbnB1dCwgJy8nKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzYW5zTGl0ZXJhbHMgPSBjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc2Fuc0xpdGVyYWxzID8gY2hlY2tMaXRlcmFsTWF0Y2hpbmcoc2Fuc0xpdGVyYWxzLCAnLycpIDogZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ051bWJlciBvZiBxdW90ZXMgZm9yIGxpdGVyYWwgdmFyaWFibGVzIChlLmcuOiBcInhcIikgb3IgbnVtYmVyIG9mIHNsYXNoZXMgZm9yIHVuY2xlYXIgRk9STXMgKGUuZy46IC94LykgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICAvLyBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAvLyAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvcGVuU2VwID0gJ+KBhScsIGNsb3NlU2VwID0gJ+KBhic7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGlyVW5jbEZvcm1zID0gaW5wdXQuc3BsaXQoJy8nKS5yZWR1Y2UoKGFjYyxjdXJyLGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gYWNjICsgKGlkeCAlIDIgPT09IDEgPyBvcGVuU2VwIDogY2xvc2VTZXApICsgY3VyclxuICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IHVuY2xGb3JtVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyVW5jbEZvcm1zLCB7b3Blbjogb3BlblNlcCwgY2xvc2U6IGNsb3NlU2VwfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdW5jbEZvcm1Vbml0cy5ldmVyeSh1bmNsRm9ybSA9PiB1bmNsRm9ybS5zcGxpdCgnXCInKS5sZW5ndGggPCAyKTsgXG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgb3BlblNlcCA9ICfigYwnLCBjbG9zZVNlcCA9ICfigY0nO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRpckxpdGVyYWxzID0gaW5wdXQuc3BsaXQoJ1wiJykucmVkdWNlKChhY2MsY3VycixpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIGFjYyArIChpZHggJSAyID09PSAxID8gb3BlblNlcCA6IGNsb3NlU2VwKSArIGN1cnJcbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBsaXRlcmFsVW5pdHMgPSBnZXRCcmFja2V0VW5pdHMoZGlyTGl0ZXJhbHMsIHtvcGVuOiBvcGVuU2VwLCBjbG9zZTogY2xvc2VTZXB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGxpdGVyYWxVbml0cy5ldmVyeShsaXRlcmFsID0+IClcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvLyAnTnVtYmVyIG9mIHF1b3RlcyBmb3IgbGl0ZXJhbCB2YXJpYWJsZXMgKGUuZy46IFwieFwiKSBkb25cXCd0IG1hdGNoJyksXG4gICAgXTtcbiAgICB2YWxpZGF0aW9uczEuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgfSkgKTtcblxuICAgIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNsZWFuSW5wdXQgPSBjb2xsYXBzZUxpdGVyYWxzKCBjb2xsYXBzZUxpdGVyYWxzKGlucHV0LCAnXCInKSwgJy8nKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uczIgPSBbXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKGNsZWFuSW5wdXQsICcoJywgJyknKSxcbiAgICAgICAgICAgICAgICAnTnVtYmVyIG9yIG9wZW5pbmcvY2xvc2luZyBvcmRlciBvZiBwYXJhbnRoZXNlcyBpbiBmb3JtdWxhIGRvblxcJ3QgbWF0Y2gnKSxcbiAgICAgICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgKCkgPT4gY2hlY2tCcmFja2V0TWF0Y2hpbmcoY2xlYW5JbnB1dCwgJ3snLCAnfScpLFxuICAgICAgICAgICAgICAgICdOdW1iZXIgb3Igb3BlbmluZy9jbG9zaW5nIG9yZGVyIG9mIGN1cmx5IGJyYWNrZXRzIGluIGZvcm11bGEgZG9uXFwndCBtYXRjaCcpLFxuICAgICAgICBdO1xuXG4gICAgICAgIHZhbGlkYXRpb25zMi5ldmVyeSh2YWxpZGF0aW9uID0+IHZhbGlkYXRpb24oKS5jYXRhKHtcbiAgICAgICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICAgICAgc3VjY2VzczogZGF0YSA9PiBkYXRhLFxuICAgICAgICB9KSApO1xuXG4gICAgICAgIGNvbnN0IHJvdW5kQnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJygnLCBjbG9zZTogJyknfSk7XG4gICAgICAgIGNvbnN0IGN1cmx5QnJVbml0cyA9IGdldEJyYWNrZXRVbml0cyhjbGVhbklucHV0LCB7b3BlbjogJ3snLCBjbG9zZTogJ30nfSk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbnMzID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiByb3VuZEJyVW5pdHMuZXZlcnkoc3ViRm9ybSA9PiBjaGVja0JyYWNrZXRNYXRjaGluZyhzdWJGb3JtLCAneycsICd9JykpXG4gICAgICAgICAgICAgICAgICAgICYmIGN1cmx5QnJVbml0cy5ldmVyeShzdWJGb3JtID0+IGNoZWNrQnJhY2tldE1hdGNoaW5nKHN1YkZvcm0sICcoJywgJyknKSksXG4gICAgICAgICAgICAgICAgJ09wZW5pbmcvY2xvc2luZyBvZiBwYXJhbnRoZXNlcyBvdmVybGFwcyB3aXRoIG9wZW5pbmcvY2xvc2luZyBvZiBjdXJseSBicmFja2V0cyBpbiBmb3JtdWxhIChlLmcuOiAoe2EpYn0pJyksXG4gICAgICAgICAgICBjcmVhdGVWYWxpZGF0aW9uKFxuICAgICAgICAgICAgICAgICgpID0+IGN1cmx5QnJVbml0cy5ldmVyeShyZUVudHJ5ID0+IGlzVmFsaWRSZUVudHJ5KHJlRW50cnkpKSxcbiAgICAgICAgICAgICAgICAnT3B0aW9uIHBhcnQgb2Ygb25lIG9yIG1vcmUgcmUtZW50cnkgY29uc3RydWN0aW9ucyBpcyBub3Qgd2VsbC1mb3JtZWQnKSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0aW9uczMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCByZS1lbnRyeSBjb25zdHJ1Y3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRSZUVudHJ5IChpbnB1dCwgb3B0aW9ucykge1xuICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgcGFydHMgPSBpbnB1dC5zbGljZSgxLC0xKS5zcGxpdCgnfCcpO1xuXG4gICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgZW50cmllcyA9IHBhcnRzLmZpbHRlcigocCxpLGFycikgPT4gaSA8IGFyci5sZW5ndGgtMSk7XG4gICAgICAgIGNvbnN0IG9wdExpc3QgPSBbJ2FsdCcsJ29wZW4nLCcycicsJzJyKzEnXTtcblxuICAgICAgICBjb25zdCBzZWxMaXN0ID0gZW50cmllcy5yZWR1Y2UoKGFjYyxzdHIpID0+IFsuLi5hY2MsIG9wdExpc3QuZmlsdGVyKG9wdCA9PiBzdHIgPT09IG9wdClbMF1dLFtdICkuZmlsdGVyKG9wdCA9PiBvcHQpO1xuXG4gICAgICAgIGNvbnN0IHNlbExpc3RfdW5pcXVlID0gWy4uLm5ldyBTZXQoc2VsTGlzdCldO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25zID0gW1xuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5sZW5ndGggPT09IGVudHJpZXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICdPbmUgb3IgbW9yZSByZS1lbnRyeSBjb25zdHJ1Y3Rpb25zIGhhdmUgaW52YWxpZCBvciBkdXBsaWNhdGUgb3B0aW9ucycpLFxuICAgICAgICAgICAgY3JlYXRlVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICAoKSA9PiBzZWxMaXN0X3VuaXF1ZS5maWx0ZXIoc3RyID0+IHN0ciA9PT0gb3B0TGlzdFsyXSB8fCBzdHIgPT09IG9wdExpc3RbM10pLmxlbmd0aCA8IDIsXG4gICAgICAgICAgICAgICAgJ09uZSBvciBtb3JlIHJlLWVudHJ5IGNvbnN0cnVjdGlvbnMgaGF2ZSBib3RoIG9wdGlvbnMg4oCYMnLigJkgYW5kIOKAmDJyKzHigJkgc2V0IGF0IHRoZSBzYW1lIHRpbWUnKSxcbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgICAgICBlcnJvcjogZSA9PiB7IHRocm93IG5ldyBFcnJvcihlKTsgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGRhdGEgPT4gZGF0YSxcbiAgICAgICAgfSkgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYW4gaW5wdXQgaXMgYSB2YWxpZCBKU09OLUZPUk1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRKU09ORm9ybSAoaW5wdXQsIG9wdGlvbnMpIHsgLy8gPyBkcmFmdFxuICAgIC8vIGNvbnN0IHsgfSA9IHsgLi4ub3B0aW9ucyB9O1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbnMgPSBbXG4gICAgICAgIGNyZWF0ZVZhbGlkYXRpb24oXG4gICAgICAgICAgICAoKSA9PiB0cnVlLFxuICAgICAgICAgICAgJycpLFxuICAgIF07XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnMuZXZlcnkodmFsaWRhdGlvbiA9PiB2YWxpZGF0aW9uKCkuY2F0YSh7XG4gICAgICAgIGVycm9yOiBlID0+IHsgdGhyb3cgbmV3IEVycm9yKGUpOyB9LFxuICAgICAgICBzdWNjZXNzOiBkYXRhID0+IGRhdGEsXG4gICAgfSkgKTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGdpdmVuIEZPUk0gbWF0Y2hlcyBhIGdpdmVuIHZhcmlhYmxlIGxpc3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1NYXRjaGVzVmFyTGlzdCAoZm9ybSwgdmFyTGlzdCkge1xuICAgIGNvbnN0IHZhcnNGb3JtID0gZ2V0VmFyaWFibGVzKGZvcm0pO1xuXG4gICAgY29uc3QgbWF0Y2ggPSB2YXJMaXN0Lmxlbmd0aCA9PT0gdmFyc0Zvcm0ubGVuZ3RoXG4gICAgICAgICYmIHZhcnNGb3JtLmV2ZXJ5KHZfYSA9PiB2YXJMaXN0LnNvbWUodl9iID0+IHZfYSA9PT0gdl9iKSk7XG4gICAgaWYgKCFtYXRjaCkgdGhyb3cgbmV3IEVycm9yKCdGT1JNIGRvZXNuXFwndCBtYXRjaCB0aGUgZ2l2ZW4gdmFyaWFibGUgbGlzdCcpO1xuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZEZvcm0oaW5wdXQpIHtcbiAgICBpZih0eXBlb2YoaW5wdXQpID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoIWlzVmFsaWRGb3JtdWxhKGlucHV0KSkgdGhyb3cgbmV3IEVycm9yKCdJbnB1dCBpcyBub3QgYSB2YWxpZCBmb3JtdWxhJyk7XG4gICAgICAgIHJldHVybiBwYXJzZUxpbmVhcihpbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPj4+IG5lZWQgdG8gY2hlY2sganNvbiBpbnB1dCB0b29cbiAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCJpbXBvcnQgKiBhcyBjYWxjIGZyb20gJy4vY29yZS9mY2FsYyc7XG5pbXBvcnQgKiBhcyBmb3JtIGZyb20gJy4vY29yZS9mZm9ybSc7XG5pbXBvcnQgKiBhcyBkbmEgZnJvbSAnLi9jb3JlL2ZkbmEnO1xuXG5leHBvcnQgZGVmYXVsdCB7IGNhbGMsIGZvcm0sIGRuYSB9OyJdLCJzb3VyY2VSb290IjoiIn0=