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

  computed: {
    mergedOptions() {
      if(this.options) {
        return Object.assign({}, this.$vueNumberFormatOptions, this.options)
      }
      return this.$vueNumberFormatOptions
    },
    formattedValue() {
      return format(this.value, this.mergedOptions)
    }
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
      this.$emit('update:value', value)
      this.$emit('input', value)
    },

    setCursor(element, position) {
      var setSelectionRange = function () { element.setSelectionRange(position, position) }
      if (element === document.activeElement) {
        setTimeout(setSelectionRange, 1)
      }
    },
    
  }
}
</script>