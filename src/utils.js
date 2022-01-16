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

const defaultOptions = require('./defaultOptions')

const format = (input = 0, opt = defaultOptions) => {
  if(input === null) input = 0
  const mergedOptions = Object.assign({}, defaultOptions, opt)
  if (typeof input === 'number' && !mergedOptions.isInteger) {
    input = input.toFixed(fixed(mergedOptions.precision))
  }
  const negative = isNegative(input, mergedOptions.acceptNegative)  ? '-' : ''
  const numbers = onlyNumbers(input)
  const currency = numbersToCurrency(numbers, mergedOptions.precision)
  const parts = toStr(currency).split('.')
  var integer = parts[0]
  const decimal = parts[1]
  integer = addThousandSeparator(integer, mergedOptions.thousand)
  return negative + mergedOptions.prefix + joinIntegerAndDecimal(integer, decimal, mergedOptions.decimal) + mergedOptions.suffix
}
module.exports.format = format

const unformat = (input = 0, opt = { precision: 2, isInteger: false, acceptNegative: true}) => {
  if(input === null) input = 0
  const mergedOptions = Object.assign({}, defaultOptions, opt)
  var negative = (isNegative(input, mergedOptions.acceptNegative)) ? -1 : 1
  var numbers = onlyNumbers(input)
  var currency = numbersToCurrency(numbers, mergedOptions.precision)
  if(mergedOptions.isInteger) {
    return parseInt(`${isNegative(input, mergedOptions.acceptNegative) ? '-' : ''}${numbers.toString()}`)
  }
  return parseFloat(currency) * negative
}
module.exports.unformat = unformat

const setCursor = (el, position) => {
  var setSelectionRange = function () { el.setSelectionRange(position, position) }
  if (el === document.activeElement) {
    setTimeout(setSelectionRange, 1)
  }
}
module.exports.setCursor = setCursor


const setCursorPosition = (el, opt = defaultOptions) => {
  var positionFromEnd = el.value.length - el.selectionEnd
  el.value = format(el.value, opt)
  positionFromEnd = Math.max(positionFromEnd, opt.suffix.length)
  positionFromEnd = el.value.length - positionFromEnd
  positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1)
  setCursor(el, positionFromEnd)
}
module.exports.setCursorPosition = setCursorPosition


function onlyNumbers (input) {
  return toStr(input).replace(/\D+/g, '') || '0'
}

// 123 RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed (precision) {
  return Math.max(0, Math.min(precision, 20))
}

function numbersToCurrency (numbers, precision) {
  var exp = Math.pow(10, precision)
  var float = parseFloat(numbers) / exp
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
  if (typeof string != 'string') string = string.toString()
  const forcePositive = string.indexOf('+') >= 0
  const isNegative = (string !== 0 && string.indexOf('-') >= 0 || string[string.length-1] == '-') ? true : false
  return (!forcePositive && isNegative) ? true : false
}