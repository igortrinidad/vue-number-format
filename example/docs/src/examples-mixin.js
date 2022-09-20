
export default [
  {
    title: 'Use inside template tags to output formatted numbers',
    value: 275.26,
    options: { prefix: 'US$ ' },
    code() {
      return `
      {{ vueNumberFormat(275.26, { prefix: 'US$ ' })}}
      `
    }
  },

  {
    title: 'Use inside template tags to output UNformatted numbers',
    value: 'US$ 275.56',
    options: null,
    unformat: true,
    code() {
      return `
      {{ vueNumberUnformat('US$ 275.56')}}
      `
    }
  },
]
