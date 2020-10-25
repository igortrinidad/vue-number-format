import normalizer from './assets/normalizer'

export default [
  {
    title: 'Package install',
    language: 'bash',
    code() {
      return normalizer.normalize(`
        yarn add vue-number-format
        or
        npm i -S vue-number-format
      `)
    },
  },
  {
    title: 'Vue 3 Global usage',
    language: 'js',
    code() {
      return normalizer.normalize(`
        /* ONLY FOR VUE 3 */
        import { createApp } from 'vue'
        import App from './App.vue'
        import VueNumberFormat from 'vue-number-format'

        const app = createApp(App)
        app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})

        app.mount('#app')
      `)
    },
  },
  {
    title: 'Vue 2 Global usage',
    language: 'js',
    code() {
      return normalizer.normalize(`
        /* ONLY FOR VUE 2 */
        import Vue from 'vue'
        import App from './App.vue'
        
        import VueNumberFormat from 'vue-number-format'
        Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thounsand: '.'})
        
        new Vue({
          render: h => h(App),
        }).$mount('#app')
      `)
    }
  },
  {
    title: 'Local component usage',
    language: 'html',
    code() {
      return normalizer.normalize(`
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
          import VueNumberFormat from 'vue-number-format'
          export default {
            components: { VueNumberFormat }
          }
        </script>
      `)
    }
  },

  {
    title: 'Default options',
    language: 'js',
    code() {
      return normalizer.normalize(`
        {
          prefix: 'US$ ',
          suffix: '',
          decimal: ',',
          thousand: '.',
          precision: 2,
          acceptNegative: true,
          isInteger: false
        }
      `)
    }
  },
  {
    title: 'Display format',
    language: 'html',
    code() {
      return normalizer.normalize(`
        {{vueNumberFormat(275, {})}}
        <!-- display US$275.00 -->
      `)
    },
    tips: 'Available only within global instalation'
  },
  {
    title: 'Display unformatted number',
    language: 'html',
    code() {
      return normalizer.normalize(`
        {{vueNumberUnformat('R$275,00', {})}}
        <!-- display 275 -->
      `)
    },
    tips: 'Available only within global instalation'
  },
]