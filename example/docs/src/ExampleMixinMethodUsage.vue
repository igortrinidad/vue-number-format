<template>
  <div class="w-full mt-2 mb-6 p-1">
    <h3 class="mb-2"><span class="border-b-4 border-green">{{ example.title }}</span></h3>
    
    <Prism :code="example.code()" :language="'html'"></Prism>

    <div class="w-full flex p-1 justify-center">
      <div class="w-2/5 text-right text-xs">
        <p v-if="!example.unformat">{{ vueNumberFormat(example.value, example.options) }}</p>
        <p v-else>{{ vueNumberUnformat(example.value) }}</p>
        <p>output</p>
      </div>
      <div class="w-1/5 flex justify-center p-3 items-center">
        <div class="vertical-divider bg-black"></div>
      </div>
      <div class="w-2/5 text-left text-xs">
        <p v-if="!example.unformat">{{ typeof(vueNumberFormat(example.value)) }}</p>
        <p v-else>{{ typeof(vueNumberUnformat(example.value)) }}</p>
        <p>typeof</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ExampleMixinMethodUsage',
  props: ['example']
}
</script>