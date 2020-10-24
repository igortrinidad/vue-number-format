import VueNumberFormat from './vue-number-format.vue'
import defaultOptions from './defaultOptions'

const Plugin = {};

Plugin.install = (Vue, options) => {

  Object.assign(defaultOptions, options)

  if (Plugin.install.installed) return

  Vue.component('VueNumberFormat', VueNumberFormat)

  Vue.provide('vueNumberFormatOptions', defaultOptions)

};

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue);
}

export default Plugin;