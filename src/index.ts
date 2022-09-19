/*global global */
import VueNumberFormat from './vue-number-format.vue'
import { defaultOptions, IDefaultOptions } from './defaultOptions'
import { format, unformat } from './utils'

// Declare install function executed by Vue.use()
const install = (Vue, options: IDefaultOptions) => {
  
  Vue.component('VueNumberFormat', VueNumberFormat)

  const mergedOptions = Object.assign({}, defaultOptions, options)

  //Vue 2 set global variable:  https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin
  //Access in components: this.$vueNumberFormatOptions
  if(typeof Vue.prototype != 'undefined') {
    mergedOptions.vueVersion = 'v2'
    Vue.prototype.$vueNumberFormatOptions = mergedOptions
  //Vue 3 define global properties: https://v3.vuejs.org/api/application-config.html#globalproperties
  } else {
    mergedOptions.vueVersion = 'v3'
    Vue.config.globalProperties.$vueNumberFormatOptions = mergedOptions
  }

  Vue.mixin({
    methods: {
      vueNumberFormat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options)
        return format(value, fnMergedOptions)
      },
      vueNumberUnformat(value, options = mergedOptions) {
        const fnMergedOptions = Object.assign({}, mergedOptions, options)
        return unformat(value, fnMergedOptions)
      },
    }
  })

}

Object.assign(VueNumberFormat, { install: install })


export default VueNumberFormat