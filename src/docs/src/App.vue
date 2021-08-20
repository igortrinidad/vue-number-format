<template>
  <div class="w-full h-screen flex justify-center max-h-full overflow-y-auto bg-gradient p-6">
    <div class="w-full max-w-xl">
      <div class="w-full flex flex-wrap  text-lg p-4 md:p-6">
        <div class="h-1/3 w-full flex flex-col justify-end">
          <h1 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">vue-number-format</span></h1>
          <p class="text-center">A lightweight flexible Vue.js 2 and 3 component to display and input formatted numbers and currencies</p>
          
          <div class="w-full flex justify-center h-12 items-center mt-4">
            <div class="w-2/5 text-right text-xs">
              <a class="bg-grey-light px-4 py-2" href="https://github.com/igortrinidad/vue-number-format">GitHub</a>
            </div>
            <div class="w-1/5 flex justify-center p-3 items-center h-full">
              <div class="vertical-divider bg-white"></div>
            </div>
            <div class="w-2/5 text-left text-xs">
              <a class="bg-grey-light px-4 py-2" href="https://www.npmjs.com/package/vue-number-format">NPM</a>
            </div>
          </div>
        </div>

        <div class="w-full flex flex-wrap my-8">
          <h2 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">Examples</span></h2>
          <!-- US DOLLAR -->
          <ExampleCard
            v-for="(example, index) in examples"
            :key="index"
            :example="example"
          ></ExampleCard>

          <ExampleMixinMethodUsage
            v-for="(example, index) in examplesMixin"
            :key="index"
            :example="example"
          ></ExampleMixinMethodUsage>

        </div>
        
        <div class="w-full flex flex-wrap">
          <h2 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">Instalation</span></h2>
          <!-- US DOLLAR -->
          <InstalationCard :instalation="instalation" 
            v-for="(instalation, index) in instalations"
            :key="`instalation` + index"
          ></InstalationCard>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ExampleCard from './ExampleCard'
import ExampleMixinMethodUsage from './ExampleMixinMethodUsage'
import InstalationCard from './InstalationCard'
import examples from './examples'
import examplesMixin from './examples-mixin'
import instalations from './instalation'
export default {
  name: 'App',
  components: { ExampleCard, InstalationCard, ExampleMixinMethodUsage },
  metaInfo() {
    const title = 'vue-number-format - A Vue.js 2 and 3 lightweight library to input and display format'
    return { title }
  },
  data() {
    return {
      examples,
      examplesMixin,
      instalations
    }
  }
}
</script>

<style>

@import "./assets/styles.css";

</style>
