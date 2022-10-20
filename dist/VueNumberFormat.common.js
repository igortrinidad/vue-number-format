module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "025e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return unformat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCursorPosition; });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ffd9");
/*
 * igortrinidad/vue-number-format
 *
 * (c) Igor Trindade <igortrindade.me@gmail.com>
 * 
 * Mostly of this file content was extracted from the v-money library https://github.com/vuejs-tips/v-money
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const format = (input = 0, opt = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) => {
  if (input === null) input = 0;
  const mergedOptions = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], opt);

  if (typeof input === 'number' && !mergedOptions.isInteger) {
    input = input.toFixed(fixed(mergedOptions.precision));
  }

  const negative = isNegative(input, mergedOptions.acceptNegative) ? '-' : '';
  const numbers = onlyNumbers(input);
  const currency = numbersToCurrency(numbers, mergedOptions.precision);
  const parts = toStr(currency).split('.');
  var integer = parts[0];
  const decimal = parts[1];
  integer = addThousandSeparator(integer, mergedOptions.thousand);
  return negative + mergedOptions.prefix + joinIntegerAndDecimal(integer, decimal, mergedOptions.decimal) + mergedOptions.suffix;
};
const unformat = (input = 0, opt = {
  precision: 2,
  isInteger: false,
  acceptNegative: true
}) => {
  if (input === null) input = 0;
  const mergedOptions = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], opt);
  var negative = isNegative(input, mergedOptions.acceptNegative) ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, mergedOptions.precision);

  if (mergedOptions.isInteger) {
    return parseInt(`${isNegative(input, mergedOptions.acceptNegative) ? '-' : ''}${numbers.toString()}`);
  }

  return parseFloat(currency) * negative;
};
const setCursor = (el, position) => {
  var setSelectionRange = function () {
    el.setSelectionRange(position, position);
  };

  if (el === document.activeElement) {
    setTimeout(setSelectionRange, 1);
  }
};
const setCursorPosition = (el, opt = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) => {
  var positionFromEnd = el.value.length - el.selectionEnd;
  el.value = format(el.value, opt);
  positionFromEnd = Math.max(positionFromEnd, opt.suffix.length);
  positionFromEnd = el.value.length - positionFromEnd;
  positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1);
  setCursor(el, positionFromEnd);
};

function onlyNumbers(input) {
  return toStr(input).replace(/\D+/g, '') || '0';
} // 123 RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed


function fixed(precision) {
  return Math.max(0, Math.min(precision, 20));
}

function numbersToCurrency(numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision));
}

function addThousandSeparator(integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`);
}

function joinIntegerAndDecimal(integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer;
}

function toStr(value) {
  return value ? value.toString() : '';
}

function isNegative(string, acceptNegative = true) {
  if (!acceptNegative) return false;
  if (typeof string != 'string') string = string.toString();
  const forcePositive = string.indexOf('+') >= 0;
  const isNegative = string !== 0 && string.indexOf('-') >= 0 || string[string.length - 1] == '-' ? true : false;
  return !forcePositive && isNegative ? true : false;
}

/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "7fb5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/vue-number-format.vue?vue&type=template&id=95b89e2c

const _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("input", {
    value: $options.formattedValue,
    inputmode: "numeric",
    onInput: _cache[0] || (_cache[0] = $event => $options.onInput($event)),
    onFocus: _cache[1] || (_cache[1] = $event => $options.onFocus($event))
  }, null, 40, _hoisted_1);
}
// CONCATENATED MODULE: ./src/vue-number-format.vue?vue&type=template&id=95b89e2c

// EXTERNAL MODULE: ./src/utils.js
var utils = __webpack_require__("025e");

// EXTERNAL MODULE: ./src/defaultOptions.js
var defaultOptions = __webpack_require__("ffd9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./src/vue-number-format.vue?vue&type=script&lang=js


/* harmony default export */ var vue_number_formatvue_type_script_lang_js = ({
  name: 'VueNumberFormat',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  emits: ['input', 'update:value'],
  computed: {
    mergedOptions() {
      const options = this.$vueNumberFormatOptions || defaultOptions["a" /* default */];

      if (this.options) {
        return Object.assign({}, options, this.options);
      }

      return options;
    },

    formattedValue() {
      return Object(utils["a" /* format */])(this.value, this.mergedOptions);
    }

  },

  created() {
    if (!this.$vueNumberFormatOptions) this.$vueNumberFormatOptions = defaultOptions["a" /* default */];
  },

  methods: {
    onFocus($event) {
      Object(utils["b" /* setCursor */])($event.target, $event.target.value.length - this.mergedOptions.suffix.length);
    },

    onInput($event) {
      Object(utils["c" /* setCursorPosition */])($event.target, this.mergedOptions);
      const value = Object(utils["d" /* unformat */])($event.target.value, this.mergedOptions);
      this.updateValue(value);
    },

    updateValue(value) {
      if (this.$vueNumberFormatOptions && this.$vueNumberFormatOptions.vueVersion === 'v2') {
        this.$emit('input', value);
      } else {
        this.$emit('update:value', value);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/vue-number-format.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./src/vue-number-format.vue





const __exports__ = /*#__PURE__*/exportHelper_default()(vue_number_formatvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var vue_number_format = __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _vue_number_format_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fb5");
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ffd9");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("025e");
/*global global */


 // Declare install function executed by Vue.use()

const install = (Vue, options) => {
  if (install.installed) return;
  install.installed = true;
  Vue.component('VueNumberFormat', _vue_number_format_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
  const mergedOptions = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], options); //Vue 2 set global variable:  https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin
  //Access in components: this.$vueNumberFormatOptions

  if (typeof Vue.prototype != 'undefined') {
    mergedOptions.vueVersion = 'v2';
    Vue.prototype.$vueNumberFormatOptions = mergedOptions; //Vue 3 define global properties: https://v3.vuejs.org/api/application-config.html#globalproperties
  } else {
    mergedOptions.vueVersion = 'v3';
    Vue.config.globalProperties.$vueNumberFormatOptions = mergedOptions;
  }

  Vue.mixin({
    methods: {
      vueNumberFormat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options);
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* format */ "a"])(value, fnMergedOptions);
      },

      vueNumberUnformat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options);
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__[/* unformat */ "d"])(value, fnMergedOptions);
      }

    }
  });
};

Object.assign(_vue_number_format_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], {
  install: install,
  format: _utils__WEBPACK_IMPORTED_MODULE_2__[/* format */ "a"],
  unformat: _utils__WEBPACK_IMPORTED_MODULE_2__[/* unformat */ "d"]
}); // Auto-install when vue is found (eg. in browser via <script> tag)

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(_vue_number_format_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
}

/* harmony default export */ __webpack_exports__["a"] = (_vue_number_format_vue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./src/index.js
var src_0 = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_0["a" /* default */]);



/***/ }),

/***/ "ffd9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  prefix: 'R$ ',
  suffix: '',
  decimal: ',',
  thousand: '.',
  precision: 2,
  acceptNegative: true,
  isInteger: false
});

/***/ })

/******/ });
//# sourceMappingURL=VueNumberFormat.common.js.map