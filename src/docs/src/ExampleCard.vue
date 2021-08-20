<template>
  <div class="w-full mt-2 mb-6 p-1">
    <h3 class="mb-2"><span class="border-b-4 border-green">{{example.title}}</span></h3>
    <VueNumberFormat 
      v-model:value="example.value" 
      :options="example.options"
      class="w-full text-lg text-center text-2xl p-4 focus:outline-none focus:shadow-md focus:border-blue" 
    ></VueNumberFormat>
    <div class="w-full flex p-1 justify-center">
      <div class="w-2/5 text-right text-xs">
        <p>{{example.value}}</p>
        <p>output</p>
      </div>
      <div class="w-1/5 flex justify-center p-3 items-center">
        <div class="vertical-divider bg-black"></div>
      </div>
      <div class="w-2/5 text-left text-xs">
        <p>{{typeof(example.value)}}</p>
        <p>typeof</p>
      </div>
    </div>
    <Prism :code="example.code()" :language="'html'"></Prism>
  </div>
</template>

<script>
export default {
  name: 'ExampleCard',
  props: ['example']
}
</script>