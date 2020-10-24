<template>
  <div class="w-full h-screen flex justify-center max-h-full overflow-y-auto bg-gradient">
    <div class="max-w-lg">
      <div class="w-full flex flex-wrap  text-lg p-4 md:p-6">
        <div class="h-1/3 w-full flex items-end">
          <h1 class="w-full text-white text-center">vue-number-format</h1>
        </div>
        <!-- US DOLLAR -->
        <div class="w-full my-8">
          <VueNumberFormat class="w-full text-lg p-4 focus:outline-none focus:shadow-md focus:border-blue" v-model:value="us" :options="{ precision: 2, decimal: '.', thousand: ',' }"></VueNumberFormat>
          <div class="w-full flex p-2 justify-center">
            <div class="w-2/5 text-center">
              <h4>{{us}}</h4>
              <p class="text-xs">output</p>
            </div>
            <div class="w-1/5 flex justify-center p-3 items-center">
              <div class="vertical-divider bg-black"></div>
            </div>
            <div class="w-2/5 text-center">
              <h4>{{typeof(us)}}</h4>
              <p class="text-xs">typeof</p>
            </div>
          </div>
        </div>

        <!-- INTEGER -->
        <div class="w-full my-8">
          <VueNumberFormat class="w-full text-lg p-4 focus:outline-none focus:shadow-md focus:border-blue" v-model:value="integer" :options="{ precision: 2, prefix: 'R$ ', isInteger: true }"></VueNumberFormat>
          <div class="w-full flex p-2 justify-center">
            <div class="w-2/5 text-center">
              <h4>{{integer}}</h4>
              <p class="text-xs">output</p>
            </div>
            <div class="w-1/5 flex justify-center p-3 items-center">
              <div class="vertical-divider bg-black"></div>
            </div>
            <div class="w-2/5 text-center">
              <h4>{{typeof(integer)}}</h4>
              <p class="text-xs">typeof</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo() {
    const title = 'vue-number-format - A Vue.js 2 and 3 lightweight library to input and display format'
    return { title }
  },
  data() {
    return {
      us: 275,
      integer: 275,
    }
  },
}
</script>

<style>

@import "./assets/styles.css";

</style>
