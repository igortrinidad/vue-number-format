(function(e){function t(t){for(var a,o,l=t[0],u=t[1],s=t[2],p=0,m=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-number-format/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05c3":function(e,t,n){"use strict";t["a"]={prefix:"R$ ",suffix:"",decimal:",",thousand:".",precision:2,acceptNegative:!0,isInteger:!1}},"0ff1":function(e,t,n){"use strict";var a=n("4430");const r=["value"];function i(e,t,n,i,o,l){return Object(a["b"])(),Object(a["a"])("input",{value:l.formattedValue,type:"tel",onInput:t[0]||(t[0]=e=>l.onInput(e)),onFocus:t[1]||(t[1]=e=>l.onFocus(e))},null,40,r)}var o=n("ebd1"),l=n("05c3"),u={name:"VueNumberFormat",props:{value:{type:[String,Number,null],required:!0},options:{type:Object,default:()=>{}}},emits:["input","update:value"],computed:{mergedOptions(){const e=this.$vueNumberFormatOptions||l["a"];return this.options?Object.assign({},e,this.options):e},formattedValue(){return Object(o["a"])(this.value,this.mergedOptions)}},created(){this.$vueNumberFormatOptions||(this.$vueNumberFormatOptions=l["a"])},methods:{onFocus(e){Object(o["b"])(e.target,e.target.value.length-this.mergedOptions.suffix.length)},onInput(e){Object(o["c"])(e.target,this.mergedOptions);const t=Object(o["d"])(e.target.value,this.mergedOptions);this.updateValue(t)},updateValue(e){this.$vueNumberFormatOptions&&"v2"===this.$vueNumberFormatOptions.vueVersion?this.$emit("input",e):this.$emit("update:value",e)}}},s=n("6b0d"),c=n.n(s);const p=c()(u,[["render",i]]);t["a"]=p},2427:function(e,t,n){"use strict";(function(e){var a=n("0ff1"),r=n("05c3"),i=n("ebd1");const o=(e,t)=>{if(o.installed)return;o.installed=!0,e.component("VueNumberFormat",a["a"]);const n=Object.assign({},r["a"],t);"undefined"!=typeof e.prototype?(n.vueVersion="v2",e.prototype.$vueNumberFormatOptions=n):(n.vueVersion="v3",e.config.globalProperties.$vueNumberFormatOptions=n),e.mixin({methods:{vueNumberFormat(e,t=n){const a=Object.assign({},n,t);return Object(i["a"])(e,a)},vueNumberUnformat(e,t=n){const a=Object.assign({},n,t);return Object(i["d"])(e,a)}}})};Object.assign(a["a"],{install:o});let l=null;"undefined"!==typeof window?l=window.Vue:"undefined"!==typeof e&&(l=e.Vue),l&&l.use(a["a"]),t["a"]=a["a"]}).call(this,n("c8ba"))},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const r={class:"w-full h-screen flex justify-center max-h-full overflow-y-auto bg-gradient p-12"},i={class:"w-full max-w-screen-lg"},o={class:"w-full flex flex-wrap text-lg p-4 md:p-6"},l=Object(a["g"])('<div class="h-1/3 w-full flex flex-col justify-end space-y-12"><h1 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">vue-number-format</span></h1><p class="text-center">A lightweight flexible Vue.js 2 and 3 component to display and input formatted numbers and currencies</p><div class="w-full flex justify-center items-center"><div class="w-2/5 text-right text-xs"><a class="bg-grey-light px-4 py-2" href="https://github.com/igortrinidad/vue-number-format">GitHub</a></div><div class="w-1/5 flex justify-center p-3 items-center h-full"><div class="vertical-divider bg-white"></div></div><div class="w-2/5 text-left text-xs"><a class="bg-grey-light px-4 py-2" href="https://www.npmjs.com/package/vue-number-format">NPM</a></div></div></div>',1),u={class:"w-full flex flex-wrap my-8"},s=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Examples")],-1),c={class:"w-full flex flex-wrap"},p=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Instalation")],-1);function m(e,t,n,m,f,d){const b=Object(a["l"])("ExampleCard"),v=Object(a["l"])("ExampleMixinMethodUsage"),g=Object(a["l"])("InstalationCard");return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("div",i,[Object(a["f"])("div",o,[l,Object(a["f"])("div",u,[s,(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.examples,(e,t)=>(Object(a["j"])(),Object(a["c"])(b,{key:t,example:e},null,8,["example"]))),128)),(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.examplesMixin,(e,t)=>(Object(a["j"])(),Object(a["c"])(v,{key:t,example:e},null,8,["example"]))),128))]),Object(a["f"])("div",c,[p,(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.instalations,(e,t)=>(Object(a["j"])(),Object(a["c"])(g,{instalation:e,key:"instalation"+t},null,8,["instalation"]))),128))])])])])}const f={class:"w-full mt-4 mb-6 p-1"},d={class:"mb-4"},b={class:"border-b-4 border-green"},v={class:"w-full flex p-1 justify-center my-4"},g={class:"w-2/5 text-right text-xs"},x=Object(a["f"])("p",null,"output",-1),j=Object(a["f"])("div",{class:"w-1/5 flex justify-center p-3 items-center"},[Object(a["f"])("div",{class:"vertical-divider bg-black"})],-1),O={class:"w-2/5 text-left text-xs"},h=Object(a["f"])("p",null,"typeof",-1);function y(e,t,n,r,i,o){const l=Object(a["l"])("VueNumberFormat"),u=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",f,[Object(a["f"])("h3",d,[Object(a["f"])("span",b,Object(a["m"])(n.example.title),1)]),Object(a["h"])(l,{value:n.example.value,"onUpdate:value":t[0]||(t[0]=e=>n.example.value=e),options:n.example.options,class:"w-full text-lg text-center text-2xl p-4 focus:outline-none focus:shadow-md focus:border-blue"},null,8,["value","options"]),Object(a["f"])("div",v,[Object(a["f"])("div",g,[Object(a["f"])("p",null,Object(a["m"])(n.example.value),1),x]),j,Object(a["f"])("div",O,[Object(a["f"])("p",null,Object(a["m"])(typeof n.example.value),1),h])]),Object(a["h"])(u,{code:n.example.code(),language:"html"},null,8,["code"])])}var N={name:"ExampleCard",props:["example"]},w=n("6b0d"),F=n.n(w);const V=F()(N,[["render",y]]);var $=V;const k={class:"w-full mt-2 mb-6 p-1"},U={class:"mb-2"},M={class:"border-b-4 border-green"},I={class:"w-full flex p-1 justify-center"},S={class:"w-2/5 text-right text-xs"},A={key:0},P={key:1},E=Object(a["f"])("p",null,"output",-1),C=Object(a["f"])("div",{class:"w-1/5 flex justify-center p-3 items-center"},[Object(a["f"])("div",{class:"vertical-divider bg-black"})],-1),R={class:"w-2/5 text-left text-xs"},T={key:0},L={key:1},H=Object(a["f"])("p",null,"typeof",-1);function _(e,t,n,r,i,o){const l=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",k,[Object(a["f"])("h3",U,[Object(a["f"])("span",M,Object(a["m"])(n.example.title),1)]),Object(a["h"])(l,{code:n.example.code(),language:"html"},null,8,["code"]),Object(a["f"])("div",I,[Object(a["f"])("div",S,[n.example.unformat?(Object(a["j"])(),Object(a["e"])("p",P,Object(a["m"])(e.vueNumberUnformat(n.example.value)),1)):(Object(a["j"])(),Object(a["e"])("p",A,Object(a["m"])(e.vueNumberFormat(n.example.value,n.example.options)),1)),E]),C,Object(a["f"])("div",R,[n.example.unformat?(Object(a["j"])(),Object(a["e"])("p",L,Object(a["m"])(typeof e.vueNumberUnformat(n.example.value)),1)):(Object(a["j"])(),Object(a["e"])("p",T,Object(a["m"])(typeof e.vueNumberFormat(n.example.value)),1)),H])])])}var D={name:"ExampleMixinMethodUsage",props:["example"]};const G=F()(D,[["render",_]]);var Y=G;const z={class:"w-full my-3"},J={class:"mb-3"},q={class:"border-b-4 border-green"},W=["innerHTML"];function X(e,t,n,r,i,o){const l=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",z,[Object(a["f"])("h3",J,[Object(a["f"])("span",q,Object(a["m"])(n.instalation.title),1)]),Object(a["h"])(l,{code:n.instalation.code(),language:n.instalation.language},null,8,["code","language"]),n.instalation.tips?(Object(a["j"])(),Object(a["e"])("div",{key:0,class:"w-full p-2 bg-white",innerHTML:n.instalation.tips},null,8,W)):Object(a["d"])("",!0)])}var B={name:"InstalationCard",props:["instalation"]};const K=F()(B,[["render",X]]);var Q=K,Z=[{title:"Currency for FLOAT data types",value:275,options:{precision:2,decimal:".",thousand:","},code(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 2, decimal: '.', thousand: ',' }\"\n        ></VueNumberFormat>\n      "}},{title:"Currency for INTEGER data types",value:275,options:{precision:2,prefix:"R$ ",isInteger:!0},code(){return'\n        <VueNumberFormat \n          v-model:value="value" \n          :options="{ precision: 2, prefix: \'R$ \', isInteger: true }"\n        ></VueNumberFormat>\n      '}},{title:"Number with suffix",value:275,options:{precision:3,prefix:"",suffix:" kg",acceptNegative:!1},code(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 3, prefix: '', suffix: ' kg', acceptNegative: false  }\"\n        ></VueNumberFormat>\n      "}},{title:"Percentage",value:2.75,options:{prefix:"%",decimal:".",thousand:"",precision:2,acceptNegative:!1},code(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ prefix: '%', decimal: '.', thousand: '', precision: 2, acceptNegative: false }\"\n        ></VueNumberFormat>\n      "}},{title:"Handling null values",value:null,options:{prefix:"US$",decimal:".",thousand:"",precision:2,acceptNegative:!1},code(){return"\n        <VueNumberFormat \n          v-model:value=\"null\" \n          :options=\"{ prefix: 'US$', decimal: '.', thousand: '', precision: 2, acceptNegative: false }\"\n        ></VueNumberFormat>\n      "}}],ee=[{title:"Use inside template tags to output formatted numbers",value:275.26,options:{prefix:"US$ "},code(){return"\n      {{ vueNumberFormat(275.26, { prefix: 'US$ ' })}}\n      "}},{title:"Use inside template tags to output UNformatted numbers",value:"US$ 275.56",options:null,unformat:!0,code(){return"\n      {{ vueNumberUnformat('US$ 275.56')}}\n      "}}],te=[{title:"Package install",language:"bash",code(){return"\n        yarn add vue-number-format\n        or\n        npm i -S vue-number-format\n      "}},{title:"Vue 3 Global usage",language:"js",code(){return"\n        /* ONLY FOR VUE 3 */\n        import { createApp } from 'vue'\n        import App from './App.vue'\n        import VueNumberFormat from '@igortrindade/vue-number-format'\n\n        const app = createApp(App)\n        app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})\n\n        app.mount('#app')\n      "}},{title:"Nuxt 3 Installation",language:"js",code(){return"\n        /* ONLY FOR NUXT 3 */\n        // plugins/index.ts\n        import VueNumberFormat from '@igortrindade/vue-number-format'\n\n        export default defineNuxtPlugin((nuxtApp) => {\n          nuxtApp.vueApp.use(VueNumberFormat, { prefix: 'R$ ', decimal: '.', thounsand: ',' })\n        })\n      "}},{title:"Vue 2 Global usage",language:"js",code(){return"\n        /* ONLY FOR VUE 2 */\n        import Vue from 'vue'\n        import App from './App.vue'\n        \n        import VueNumberFormat from '@igortrindade/vue-number-format'\n        Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thounsand: '.'})\n        \n        new Vue({\n          render: h => h(App),\n        }).$mount('#app')\n      "}},{title:"Local component usage",language:"html",code(){return"\n        <template>\n          ...\n          \x3c!-- VUE 3 --\x3e\n          <VueNumberFormat\n            v-model:value=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n          \x3c!-- https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments --\x3e\n\n          \x3c!-- VUE 2 --\x3e\n          <VueNumberFormat\n            v-model=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n\n          ...\n        </template>\n        <script>\n          import VueNumberFormat from '@igortrindade/vue-number-format'\n          export default {\n            components: { VueNumberFormat }\n          }\n        <\/script>\n      "}},{title:"Default options",language:"js",code(){return"\n        {\n          prefix: 'US$ ',\n          suffix: '',\n          decimal: ',',\n          thousand: '.',\n          precision: 2,\n          acceptNegative: true,\n          isInteger: false\n        }\n      "}},{title:"Display format",language:"html",code(){return"\n        {{vueNumberFormat(275, {})}}\n        \x3c!-- display US$275.00 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      "},tips:"Available only within global instalation"},{title:"Display unformatted number",language:"html",code(){return"\n        {{vueNumberUnformat('R$275,00', {})}}\n        \x3c!-- display 275 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      "},tips:"Available only within global instalation"}],ne={name:"App",components:{ExampleCard:$,InstalationCard:Q,ExampleMixinMethodUsage:Y},metaInfo(){const e="vue-number-format - A Vue.js 2 and 3 lightweight library to input and display format";return{title:e}},data(){return{examples:Z,examplesMixin:ee,instalations:te}}};n("5ed2");const ae=F()(ne,[["render",m]]);var re=ae,ie=n("2427");n("fa97");const oe={class:"w-full flex flex-col items-end"},le={ref:"copy",class:"bg-black text-center text-white p-2 text-xs -mb-12 focus:outline-none z-10"},ue={key:0},se={key:1,class:"font-bold text-green"},ce=["innerHTML"];function pe(e,t,n,r,i,o){return Object(a["j"])(),Object(a["e"])("div",oe,[Object(a["f"])("button",le,[i.isCopied?(Object(a["j"])(),Object(a["e"])("span",se,"copied ✓")):(Object(a["j"])(),Object(a["e"])("span",ue,"copy"))],512),Object(a["f"])("pre",{class:Object(a["i"])(["w-full p-2 bg-black mt-0",o.className]),innerHTML:o.html},null,10,ce)])}var me=n("c197"),fe=n.n(me),de=(n("8009"),n("6f35"),n("b311")),be=n.n(de);fe.a.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"remove-initial-line-feed":!0,indent:0});var ve={name:"PrismComponent",props:["code","language"],computed:{className(){return"language-".concat(this.language)},html(){const e=fe.a.languages[this.language];return fe.a.highlight(this.code,e,this.language)}},data(){return{isCopied:!1,clipboard:null}},mounted(){new be.a(this.$refs.copy,{text:e=>(this.isCopied=!0,setTimeout(()=>{this.isCopied=!1},2e3),this.code)})},methods:{}};n("c738");const ge=F()(ve,[["render",pe]]);var xe=ge;const je=Object(a["b"])(re);je.use(ie["a"],{precision:2,prefix:""}),je.component("Prism",xe),je.mount("#app")},"5ed2":function(e,t,n){"use strict";n("c7ca")},c738:function(e,t,n){"use strict";n("e628")},c7ca:function(e,t,n){},e628:function(e,t,n){},ebd1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n("05c3");const r=(e=0,t=a["a"])=>{null===e&&(e=0);const n=Object.assign({},a["a"],t);"number"!==typeof e||n.isInteger||(e=e.toFixed(s(n.precision)));const r=d(e,n.acceptNegative)?"-":"",i=u(e),o=c(i,n.precision),l=f(o).split(".");var b=l[0];const v=l[1];return b=p(b,n.thousand),r+n.prefix+m(b,v,n.decimal)+n.suffix},i=(e=0,t={precision:2,isInteger:!1,acceptNegative:!0})=>{null===e&&(e=0);const n=Object.assign({},a["a"],t);var r=d(e,n.acceptNegative)?-1:1,i=u(e),o=c(i,n.precision);return n.isInteger?parseInt(`${d(e,n.acceptNegative)?"-":""}${i.toString()}`):parseFloat(o)*r},o=(e,t)=>{var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&setTimeout(n,1)},l=(e,t=a["a"])=>{var n=e.value.length-e.selectionEnd;e.value=r(e.value,t),n=Math.max(n,t.suffix.length),n=e.value.length-n,n=Math.max(n,t.prefix.length+1),o(e,n)};function u(e){return f(e).replace(/\D+/g,"")||"0"}function s(e){return Math.max(0,Math.min(e,20))}function c(e,t){var n=Math.pow(10,t),a=parseFloat(e)/n;return a.toFixed(s(t))}function p(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function m(e,t,n){return t?e+n+t:e}function f(e){return e?e.toString():""}function d(e,t=!0){if(!t)return!1;"string"!=typeof e&&(e=e.toString());const n=e.indexOf("+")>=0,a=0!==e&&e.indexOf("-")>=0||"-"==e[e.length-1];return!(n||!a)}}});
//# sourceMappingURL=app.61dd260b.js.map