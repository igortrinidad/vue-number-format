<template>
  <div class="w-full my-3">
    <h3 class="mb-3"><span class="border-b-4 border-green">{{instalation.title}}</span></h3>
    <Prism :code="instalation.code()" :language="instalation.language"></Prism>
    <div v-if="instalation.tips" class="w-full p-2 bg-white" v-html="instalation.tips"></div>
  </div>
</template>

<script>
export default {
  name: 'InstalationCard',
  props: ['instalation']
}
</script>