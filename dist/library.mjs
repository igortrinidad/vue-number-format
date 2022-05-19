import { openBlock, createElementBlock } from 'vue';

var defaultOptions = {
  prefix: 'R$ ',
  suffix: '',
  decimal: ',',
  thousand: '.',
  precision: 2,
  acceptNegative: true,
  isInteger: false
};

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

const format = (input = 0, opt = defaultOptions) => {
  if(input === null) input = 0;
  const mergedOptions = Object.assign({}, defaultOptions, opt);
  if (typeof input === 'number' && !mergedOptions.isInteger) {
    input = input.toFixed(fixed(mergedOptions.precision));
  }
  const negative = isNegative(input, mergedOptions.acceptNegative)  ? '-' : '';
  const numbers = onlyNumbers(input);
  const currency = numbersToCurrency(numbers, mergedOptions.precision);
  const parts = toStr(currency).split('.');
  var integer = parts[0];
  const decimal = parts[1];
  integer = addThousandSeparator(integer, mergedOptions.thousand);
  return negative + mergedOptions.prefix + joinIntegerAndDecimal(integer, decimal, mergedOptions.decimal) + mergedOptions.suffix
};

const unformat = (input = 0, opt = { precision: 2, isInteger: false, acceptNegative: true}) => {
  if(input === null) input = 0;
  const mergedOptions = Object.assign({}, defaultOptions, opt);
  var negative = (isNegative(input, mergedOptions.acceptNegative)) ? -1 : 1;
  var numbers = onlyNumbers(input);
  var currency = numbersToCurrency(numbers, mergedOptions.precision);
  if(mergedOptions.isInteger) {
    return parseInt(`${isNegative(input, mergedOptions.acceptNegative) ? '-' : ''}${numbers.toString()}`)
  }
  return parseFloat(currency) * negative
};

const setCursor = (el, position) => {
  var setSelectionRange = function () { el.setSelectionRange(position, position); };
  if (el === document.activeElement) {
    setTimeout(setSelectionRange, 1);
  }
};


const setCursorPosition = (el, opt = defaultOptions) => {
  var positionFromEnd = el.value.length - el.selectionEnd;
  el.value = format(el.value, opt);
  positionFromEnd = Math.max(positionFromEnd, opt.suffix.length);
  positionFromEnd = el.value.length - positionFromEnd;
  positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1);
  setCursor(el, positionFromEnd);
};


function onlyNumbers (input) {
  return toStr(input).replace(/\D+/g, '') || '0'
}

// 123 RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed (precision) {
  return Math.max(0, Math.min(precision, 20))
}

function numbersToCurrency (numbers, precision) {
  var exp = Math.pow(10, precision);
  var float = parseFloat(numbers) / exp;
  return float.toFixed(fixed(precision))
}

function addThousandSeparator (integer, separator) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`)
}

function joinIntegerAndDecimal (integer, decimal, separator) {
  return decimal ? integer + separator + decimal : integer
}

function toStr (value) {
  return value ? value.toString() : ''
}

function isNegative(string, acceptNegative = true) {
  if(!acceptNegative) return false
  if (typeof string != 'string') string = string.toString();
  const forcePositive = string.indexOf('+') >= 0;
  const isNegative = (string !== 0 && string.indexOf('-') >= 0 || string[string.length-1] == '-') ? true : false;
  return (!forcePositive && isNegative) ? true : false
}

var script = {
  name: 'VueNumberFormat',
  props: {
    value: {
      type: [String, Number, null],
      required: true
    },
    format: {
      type: Function
    },
    unFormat: {
      type: Function
    },
    options: {
      type: Object,
      required: false
    }
  },
  emits: ['input', 'update:value'],
  computed: {
    mergedOptions() {
      const options = this.$vueNumberFormatOptions || defaultOptions;
      if(this.options) {
        return Object.assign({}, options, this.options)
      }
      return options
    },
    formattedValue() {
      return format(this.value, this.mergedOptions)
    }
  },

  created() {
    if(!this.$vueNumberFormatOptions) this.$vueNumberFormatOptions = defaultOptions;
  },

  methods: {

    onFocus($event) {
      setCursor($event.target, ($event.target.value.length - this.mergedOptions.suffix.length));
    },

    onInput($event) {
      setCursorPosition($event.target, this.mergedOptions);
      const value = unformat($event.target.value, this.mergedOptions);
      this.updateValue(value);
    },

    updateValue(value) {
      if(this.$vueNumberFormatOptions && this.$vueNumberFormatOptions.vueVersion === 'v2') {
        this.$emit('input', value);
      } else {
        this.$emit('update:value', value);
      }
    }
    
  }
};

const _hoisted_1 = ["value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", {
    value: $options.formattedValue,
    type: "tel",
    onInput: _cache[0] || (_cache[0] = $event => ($options.onInput($event))),
    onFocus: _cache[1] || (_cache[1] = $event => ($options.onFocus($event)))
  }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_1))
}

script.render = render;
script.__file = "src/vue-number-format.vue";

/*global global */

// Declare install function executed by Vue.use()
const install = (Vue, options) => {
	if (install.installed) return;
  install.installed = true;
  
  Vue.component('VueNumberFormat', script);

  const mergedOptions = Object.assign({}, defaultOptions, options);

  //Vue 2 set global variable:  https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin
  //Access in components: this.$vueNumberFormatOptions
  if(typeof Vue.prototype != 'undefined') {
    mergedOptions.vueVersion = 'v2';
    Vue.prototype.$vueNumberFormatOptions = mergedOptions;
  //Vue 3 define global properties: https://v3.vuejs.org/api/application-config.html#globalproperties
  } else {
    mergedOptions.vueVersion = 'v3';
    Vue.config.globalProperties.$vueNumberFormatOptions = mergedOptions;
  }

  Vue.mixin({
    methods: {
      vueNumberFormat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options);
        return format(value, fnMergedOptions)
      },
      vueNumberUnformat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options);
        return unformat(value, fnMergedOptions)
      },
    }
  });

};

Object.assign(script, {install: install});


// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(script);
}

export { script as default };
