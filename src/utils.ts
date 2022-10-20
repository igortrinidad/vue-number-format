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

import { type VueNumberFormatOptions } from './types/FormatOptions'

// TODO: validate all type of input
export const format = (input: string, opt: VueNumberFormatOptions) => {
  const minusSymbol = isNegative(input, opt.acceptNegative)  ? '-' : ''
  const numbers = stringOnlyNumbers(input)
  const currencyInString = numbersToCurrency(numbers, opt.precision)

  const currencyParts = currencyInString.split('.')
  const decimal = currencyParts[1]
  const integer = addThousandSeparator(currencyParts[0], opt.thousand)

  return minusSymbol + opt.prefix + joinIntegerAndDecimal(integer, decimal, opt.decimal) + opt.suffix
}

export const unformat = (input: string, opt: VueNumberFormatOptions) => {
  const numbers = stringOnlyNumbers(input)
  if(opt.isInteger) {
    return parseInt(`${isNegative(input, opt.acceptNegative) ? '-' : ''}${numbers.toString()}`)
  }

  const makeNumberNegative = (isNegative(input, opt.acceptNegative))
  const currency = numbersToCurrency(numbers, opt.precision)
  return makeNumberNegative ? parseFloat(currency) * - 1 : parseFloat(currency)
}

export const setCursor = (el: HTMLInputElement, position: any) => {
  if (el === document.activeElement) {
    setTimeout(() => {
      el.setSelectionRange(position, position);
    }, 1)
  }
}


export const setCursorPosition = (el: any, opt: VueNumberFormatOptions) => {
  let positionFromEnd = el.value.length - el.selectionEnd
  el.value = format(el.value, opt)
  positionFromEnd = Math.max(positionFromEnd, opt.suffix.length)
  positionFromEnd = el.value.length - positionFromEnd
  positionFromEnd = Math.max(positionFromEnd, opt.prefix.length + 1)
  setCursor(el, positionFromEnd)
}


function stringOnlyNumbers (input: string) {
  return input.toString().replace(/\D+/g, '') || '0'
}

// 123 RangeError: toFixed() digits argument must be between 0 and 20 at Number.toFixed
function fixed (precision: number) {
  return Math.max(0, Math.min(precision, 20))
}

function numbersToCurrency (numbers: string, precision: number) {
  const exp = Math.pow(10, precision)
  const float = parseFloat(numbers) / exp
  return float.toFixed(fixed(precision))
}

function addThousandSeparator (integer: string, separator: string) {
  return integer.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator}`)
}

function joinIntegerAndDecimal (integer: string, decimal: string, separator: string) {
  if (decimal) {
    return integer + separator + decimal;
  }

  return integer;
}

function isNegative(string: number | string, acceptNegative = true) {
  if(!acceptNegative) return false

  const value = string.toString();
  const isNegative = (value.startsWith('-') || value.endsWith('-'))
  const forcePositive = value.indexOf('+')

  return isNegative && !forcePositive
}