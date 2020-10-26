<template>
  <input
    :value="formattedValue"
    type="tel"
    @input="onInput($event)"
    @focus="onFocus($event)"
  />
</template>

<script>

import { format, unformat, setCursor, setCursorPosition } from './utils'
import defaultOptions from './defaultOptions'

export default {
  name: 'VueNumberFormat',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    format: {
      type: Function
    },
    unFormat: {
      type: Function
    },
    options: {
      type: Object,
      required: false
    }
  },
  emits: ['input', 'update:value'],
  computed: {
    mergedOptions() {
      const options = this.$vueNumberFormatOptions || defaultOptions
      if(this.options) {
        return Object.assign({}, options, this.options)
      }
      return options
    },
    formattedValue() {
      return format(this.value, this.mergedOptions)
    }
  },

  created() {
    if(!this.$vueNumberFormatOptions) this.$vueNumberFormatOptions = defaultOptions
  },

  methods: {

    onFocus($event) {
      setCursor($event.target, ($event.target.value.length - this.mergedOptions.suffix.length))
    },

    onInput($event) {
      setCursorPosition($event.target, this.mergedOptions)
      const value = unformat($event.target.value, this.mergedOptions)
      this.updateValue(value)
    },

    updateValue(value) {
      if(this.$vueNumberFormatOptions && this.$vueNumberFormatOptions.vueVersion === 'v2') {
        this.$emit('input', value)
      } else {
        this.$emit('update:value', value)
      }
    }
    
  }
}
</script>