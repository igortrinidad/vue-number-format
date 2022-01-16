const {format, unformat } = require('@/utils');

test('it should format a given number to US$ currency format', () => {
  expect(format(275, {prefix: 'US$ '})).toBe('US$ 275,00');
});
test('it should format a given number to currency format expecting the default format R$', () => {
  expect(format(275)).toBe('R$ 275,00');
});
test('it should format currency string to number', () => {
  expect(unformat('R$ 275,00')).toBe(275);
});
test('it should format an integer number to a formatted currency', () => {
  expect(format(275, {isInteger: true})).toBe('R$ 2,75');
});
test('it should format a number with suffix', () => {
  expect(format(2.75, {prefix: '', suffix: 'kg', precision: 3})).toBe('2,750kg');
});
test('it should avoid the number to be negative', () => {
  expect(format(-2.75, {prefix: '%', acceptNegative: false})).toBe('%2,75');
});
test('it should unformat another number avoiding negative inputs', () => {
  expect(unformat('-%2,75', {acceptNegative: false})).toBe(2.75);
});
test('it should returns formatted zero on null values', () => {
  expect(format(null)).toBe('R$ 0,00');
});
test('it should returns formatted zero on empty values', () => {
  expect(format()).toBe('R$ 0,00');
});
test('it should returns 0 on null values', () => {
  expect(unformat(null)).toBe(0);
});
test('it should returns 0 on empty values', () => {
  expect(unformat()).toBe(0);
});