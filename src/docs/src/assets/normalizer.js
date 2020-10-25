const Normalizer = require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace')
module.exports = new Normalizer({
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'remove-initial-line-feed': true,
  'indent': 0
})