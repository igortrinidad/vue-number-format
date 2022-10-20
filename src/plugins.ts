import type { App } from "vue"
import VueNumberFormat from "./components/VueNumberFormat.vue"
import defaultOptions, { type VueNumberFormatOptions } from "./types/FormatOptions"

export default {
  install: (app: App, options: VueNumberFormatOptions) => {
    app.component('VueNumberFormat', VueNumberFormat)
    app.provide('VueNumberFormatOptions', Object.assign(defaultOptions, options))
  }
}
