# vue-number-format
 
A lightweight flexible Vue.js 2 and 3 component to display and input formatted numbers and currencies

<p align="center">
  <img src="https://img.shields.io/bundlephobia/min/vue-number-format?style=for-the-badge" alt="Package size"/>
  <img src="https://img.shields.io/npm/l/vue-number-format?style=for-the-badge" alt="License MIT"/>
</p>

## [Docs and Demo](https://igortrinidad.github.io/vue-number-format)

## 1. Install

Install npm module:

```bash
yarn add vue-number-format
or
npm i -S vue-number-format
```

## 2. Install globally
### Vue3
```js
import { createApp } from 'vue'
import App from './App.vue'
import VueNumberFormat from 'vue-number-format'

const app = createApp(App)
app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thousand: '.'})

app.mount('#app')
```

### Nuxt 3
```js
// plugins/index.ts
import VueNumberFormat from '@igortrindade/vue-number-format'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNumberFormat, { prefix: 'R$ ', decimal: '.', thounsand: ',' })
})
```
### Vue2

```js
import Vue from 'vue'
import App from './App.vue'

import VueNumberFormat from 'vue-number-format'
Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thousand: '.'})

new Vue({
  render: h => h(App),
}).$mount('#app')
```

## 3. Use the component:

```html
  <!-- VUE 3 -->
<VueNumberFormat
  v-model:value="value"
  :options="{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }"
></VueNumberFormat>
<!-- https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments -->

<!-- VUE 2 -->
<VueNumberFormat
  v-model="value"
  :options="{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }"
></VueNumberFormat>
```

## 3.1. Use only to display

```html
{{vueNumberFormat(275, {})}}
<!-- display US$275.00 -->
<!-- Available only within global instalation -->
<!-- use like a component method -->
<!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html-->
```

### defaultOptions:

This is the default package options, feel free to change for anything you need
```js
{
  prefix: 'US$ ',
  suffix: '',
  decimal: ',',
  thousand: '.',
  precision: 2,
  acceptNegative: true,
  isInteger: false
}
```


## Built With

* [Vue](http://vuejs.org)

## Test functional (using Japa Tests)

```bash
  npm run test
```


## Author


* **Igor Trindade** - *Developer*
* [github.com/igortrinidad](https://github.com/igortrinidad)
* [https://igortrindade.dev](https://igortrindade.dev)
* *Highly inspired by* [v-money](https://github.com/vuejs-tips/v-money)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Changelog

- v1.1.0
  - Initial release.
  - Added Jest - tests
  - Added tests for format and unformat functions
  - Added vue-test-unit tests for component tests coverage

- v.1.3.0
  - Added support to Nuxt 3
  
  
