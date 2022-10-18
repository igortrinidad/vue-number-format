<template>
  <input
    :value="formattedValue"
    inputmode="numeric"
    @input="onInput($event)"
    @focus="onFocus($event)"
  >
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { type VueNumberFormatOptions } from '../types/FormatOptions'
import { format, setCursor, setCursorPosition, unformat } from "../utils"

interface Props {
  // TODO: validate all type of input
  value: string | number | null,
  options?: Partial<VueNumberFormatOptions>
}

const props = defineProps<Props>();

// TODO: add backward compatible for v2
const emit = defineEmits(['update:value'])

const globalOptions = inject('VueNumberFormatOptions') as VueNumberFormatOptions;

const mergedOptions = computed<VueNumberFormatOptions>(() => Object.assign(globalOptions, props.options))
const formattedValue = computed(() => format(props.value, mergedOptions.value))

function onFocus($event: Event) {
  const target = $event.target as HTMLInputElement;
  setCursor(target, (target.value.length - mergedOptions.value.suffix.length))
}

function onInput($event: Event) {
  const target = $event.target as HTMLInputElement;
  setCursorPosition(target, mergedOptions.value)
  const value = unformat(target.value, mergedOptions.value)
  updateValue(value)
}

function updateValue(value: any) {
  emit('update:value', value)
}
</script>