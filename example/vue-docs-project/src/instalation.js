
export default [
  {
    title: 'Installation Vue3 and Nuxt3',
    language: 'bash',
    code() {
      return `
yarn add @igortrindade/vue-number-format
or
npm i -S @igortrindade/vue-number-format
      `
    },
  },
  {
    title: 'Installation Vue2',
    language: 'bash',
    code() {
      return `
yarn add @igortrindade/vue-number-format@1.2.1
or
npm i -S @igortrindade/vue-number-format@1.2.1
      `
    },
  },
  {
    title: 'Vue 3 Global usage',
    language: 'js',
    code() {
      return `
/* ONLY FOR VUE 3 */
import { createApp } from 'vue'
import App from './App.vue'
import VueNumberFormat from '@igortrindade/vue-number-format'

const app = createApp(App)
app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})

app.mount('#app')
      `
    },
  },
  {
    title: 'Nuxt 3 Installation',
    language: 'js',
    code() {
      return `
/* ONLY FOR NUXT 3 */
// plugins/index.ts
import VueNumberFormat from '@igortrindade/vue-number-format'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNumberFormat, { prefix: 'R$ ', decimal: '.', thounsand: ',' })
})
      `
    },
  },
  {
    title: 'Vue 2 Global usage',
    language: 'js',
    code() {
      return `
/* ONLY FOR VUE 2 */
import Vue from 'vue'
import App from './App.vue'

import VueNumberFormat from '@igortrindade/vue-number-format'
Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thounsand: '.'})

new Vue({
  render: h => h(App),
}).$mount('#app')
      `
    }
  },
  {
    title: 'Local component usage',
    language: 'html',
    code() {
      return `
<template>
  ...
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

  ...
</template>
<script>
  import VueNumberFormat from '@igortrindade/vue-number-format'
  export default {
    components: { VueNumberFormat }
  }
</script>
      `
    }
  },

  {
    title: 'Default options',
    language: 'js',
    code() {
      return `
{
  prefix: 'US$ ',
  suffix: '',
  decimal: ',',
  thousand: '.',
  precision: 2,
  acceptNegative: true,
  isInteger: false
}
      `
    }
  },
  {
    title: 'Display format in template',
    language: 'html',
    code() {
      return `
<h1>{{ vueNumberFormat(275) }}</h1>
<!-- display US$275.00 -->
<!-- Available only within global instalation -->
<!-- use like a component method -->
<!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html-->
      `
    },
    tips: 'Available only within global instalation'
  },
  {
    title: 'Display unformatted number in template',
    language: 'html',
    code() {
      return `
<h1>{{ vueNumberUnformat('R$275,00') }}</h1>
<!-- display 275 typeof number -->
<!-- Available only within global instalation -->
<!-- use like a component method -->
<!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html-->
      `
    },
    tips: 'Available only within global instalation'
  },
]