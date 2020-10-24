/*global global */
import VueNumberFormat from './vue-number-format.vue';
import defaultOptions from './defaultOptions'

// Declare install function executed by Vue.use()
const install = (Vue, options) => {
	if (install.installed) return;
	install.installed = true;
  Vue.component('VueNumberFormat', VueNumberFormat);

  const mergedOptions = Object.assign({}, defaultOptions, options)

  //Vue 2 set global variable:  https://vuejs.org/v2/guide/plugins.html#Using-a-Plugin
  //Access in components: this.$vueNumberFormatOptions
  if(typeof Vue.prototype != 'undefined') {
    Vue.prototype.$vueNumberFormatOptions = mergedOptions
  //Vue 3 define global properties: https://v3.vuejs.org/api/application-config.html#globalproperties
  } else {
    Vue.config.globalProperties.$vueNumberFormatOptions = mergedOptions
  }

  //Both ways could 
}

Object.assign(VueNumberFormat, {install: install})


// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(VueNumberFormat);
}

export default VueNumberFormat;