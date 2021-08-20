
export default [
  {
    title: 'Currency for FLOAT data types',
    value: 275,
    options: { precision: 2, decimal: '.', thousand: ',' },
    code() {
      return `
        <VueNumberFormat 
          v-model:value="value" 
          :options="{ precision: 2, decimal: '.', thousand: ',' }"
        ></VueNumberFormat>
      `
    }
  },
  {
    title: 'Currency for INTEGER data types',
    value: 275,
    options: { precision: 2, prefix: 'R$ ', isInteger: true },
    code() {
      return `
        <VueNumberFormat 
          v-model:value="value" 
          :options="{ precision: 2, prefix: 'R$ ', isInteger: true }"
        ></VueNumberFormat>
      `
    }
  },
  {
    title: 'Number with suffix',
    value: 275,
    options: { precision: 3, prefix: '', suffix: ' kg', acceptNegative: false  },
    code() {
      return `
        <VueNumberFormat 
          v-model:value="value" 
          :options="{ precision: 3, prefix: '', suffix: ' kg', acceptNegative: false  }"
        ></VueNumberFormat>
      `
    }
  },
  {
    title: 'Percentage',
    value: 2.75,
    options: { prefix: '%', decimal: '.', thousand: '', precision: 2, acceptNegative: false },
    code() {
      return `
        <VueNumberFormat 
          v-model:value="value" 
          :options="{ prefix: '%', decimal: '.', thousand: '', precision: 2, acceptNegative: false }"
        ></VueNumberFormat>
      `
    }
  }
]
