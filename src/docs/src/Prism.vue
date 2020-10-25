<template>
<div class="w-full flex flex-col items-end">
  <button ref="copy" class="bg-black text-center text-white p-2 text-xs -mb-12 focus:outline-none z-10">
    <span v-if="!isCopied">copy</span>
    <span v-else class="font-bold text-green">copied ✓</span>
  </button>
  <pre class="w-full p-4 bg-black mt-0" :class="className" v-html="html"></pre>
</div>
</template>

<script>
import Prism from 'prismjs'
import "prismjs/components/prism-bash";
import ClipboardJS from 'clipboard'
export default {
  name: 'PrismComponent',
  props: ['code', 'language'],
  computed: {
    className() {
      return "language-".concat(this.language)
    },
    html() {
      const prismLanguage = Prism.languages[this.language]
      return Prism.highlight(this.code, prismLanguage, this.language)
    }
  },
  data() {
    return {
      isCopied: false,
      clipboard: null
    }
  },
  mounted() {
    new ClipboardJS(this.$refs.copy, {
      text: (trigger) => {
        this.isCopied = true
        setTimeout(() => { this.isCopied = false }, 2000)
        return this.code
      }
  })
  },
  methods: {

  }
}
</script>

<style>
  pre {
    border-radius: 0px !important;
  }
</style>