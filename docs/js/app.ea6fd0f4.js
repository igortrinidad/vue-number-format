(function(e){function t(t){for(var a,o,u=t[0],l=t[1],c=t[2],p=0,m=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);s&&s(t);while(m.length)m.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,u=1;u<n.length;u++){var l=n[u];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue-number-format/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"w-full h-screen flex justify-center max-h-full overflow-y-auto bg-gradient p-12"},i={class:"w-full max-w-screen-lg"},o={class:"w-full flex flex-wrap text-lg p-4 md:p-6"},u=Object(a["g"])('<div class="h-1/3 w-full flex flex-col justify-end space-y-12"><h1 class="w-full text-white text-center font-medium"><span class="border-b-4 border-green">vue-number-format</span></h1><p class="text-center">A lightweight flexible Vue.js 2 and 3 component to display and input formatted numbers and currencies</p><div class="w-full flex justify-center items-center"><div class="w-2/5 text-right text-xs"><a class="bg-grey-light px-4 py-2" href="https://github.com/igortrinidad/vue-number-format">GitHub</a></div><div class="w-1/5 flex justify-center p-3 items-center h-full"><div class="vertical-divider bg-white"></div></div><div class="w-2/5 text-left text-xs"><a class="bg-grey-light px-4 py-2" href="https://www.npmjs.com/package/vue-number-format">NPM</a></div></div></div>',1),l={class:"w-full flex flex-wrap my-8"},c=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Examples")],-1),s={class:"w-full flex flex-wrap"},p=Object(a["f"])("h2",{class:"w-full text-white text-center font-medium"},[Object(a["f"])("span",{class:"border-b-4 border-green"},"Instalation")],-1);function m(e,t,n,m,f,d){var b=Object(a["l"])("ExampleCard"),v=Object(a["l"])("ExampleMixinMethodUsage"),g=Object(a["l"])("InstalationCard");return Object(a["j"])(),Object(a["e"])("div",r,[Object(a["f"])("div",i,[Object(a["f"])("div",o,[u,Object(a["f"])("div",l,[c,(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.examples,(function(e,t){return Object(a["j"])(),Object(a["c"])(b,{key:t,example:e},null,8,["example"])})),128)),(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.examplesMixin,(function(e,t){return Object(a["j"])(),Object(a["c"])(v,{key:t,example:e},null,8,["example"])})),128))]),Object(a["f"])("div",s,[p,(Object(a["j"])(!0),Object(a["e"])(a["a"],null,Object(a["k"])(f.instalations,(function(e,t){return Object(a["j"])(),Object(a["c"])(g,{instalation:e,key:"instalation"+t},null,8,["instalation"])})),128))])])])])}var f=n("53ca"),d={class:"w-full mt-4 mb-6 p-1"},b={class:"mb-4"},v={class:"border-b-4 border-green"},g={class:"w-full flex p-1 justify-center my-4"},x={class:"w-2/5 text-right text-xs"},j=Object(a["f"])("p",null,"output",-1),h=Object(a["f"])("div",{class:"w-1/5 flex justify-center p-3 items-center"},[Object(a["f"])("div",{class:"vertical-divider bg-black"})],-1),O={class:"w-2/5 text-left text-xs"},y=Object(a["f"])("p",null,"typeof",-1);function N(e,t,n,r,i,o){var u=Object(a["l"])("VueNumberFormat"),l=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",d,[Object(a["f"])("h3",b,[Object(a["f"])("span",v,Object(a["m"])(n.example.title),1)]),Object(a["h"])(u,{value:n.example.value,"onUpdate:value":t[0]||(t[0]=function(e){return n.example.value=e}),options:n.example.options,class:"w-full text-lg text-center text-2xl p-4 focus:outline-none focus:shadow-md focus:border-blue"},null,8,["value","options"]),Object(a["f"])("div",g,[Object(a["f"])("div",x,[Object(a["f"])("p",null,Object(a["m"])(n.example.value),1),j]),h,Object(a["f"])("div",O,[Object(a["f"])("p",null,Object(a["m"])(Object(f["a"])(n.example.value)),1),y])]),Object(a["h"])(l,{code:n.example.code(),language:"html"},null,8,["code"])])}var w={name:"ExampleCard",props:["example"]},F=n("6b0d"),V=n.n(F);const k=V()(w,[["render",N]]);var $=k,U={class:"w-full mt-2 mb-6 p-1"},M={class:"mb-2"},I={class:"border-b-4 border-green"},S={class:"w-full flex p-1 justify-center"},A={class:"w-2/5 text-right text-xs"},P={key:0},E={key:1},C=Object(a["f"])("p",null,"output",-1),R=Object(a["f"])("div",{class:"w-1/5 flex justify-center p-3 items-center"},[Object(a["f"])("div",{class:"vertical-divider bg-black"})],-1),T={class:"w-2/5 text-left text-xs"},L={key:0},_={key:1},H=Object(a["f"])("p",null,"typeof",-1);function D(e,t,n,r,i,o){var u=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",U,[Object(a["f"])("h3",M,[Object(a["f"])("span",I,Object(a["m"])(n.example.title),1)]),Object(a["h"])(u,{code:n.example.code(),language:"html"},null,8,["code"]),Object(a["f"])("div",S,[Object(a["f"])("div",A,[n.example.unformat?(Object(a["j"])(),Object(a["e"])("p",E,Object(a["m"])(e.vueNumberUnformat(n.example.value)),1)):(Object(a["j"])(),Object(a["e"])("p",P,Object(a["m"])(e.vueNumberFormat(n.example.value,n.example.options)),1)),C]),R,Object(a["f"])("div",T,[n.example.unformat?(Object(a["j"])(),Object(a["e"])("p",_,Object(a["m"])(Object(f["a"])(e.vueNumberUnformat(n.example.value))),1)):(Object(a["j"])(),Object(a["e"])("p",L,Object(a["m"])(Object(f["a"])(e.vueNumberFormat(n.example.value))),1)),H])])])}var G={name:"ExampleMixinMethodUsage",props:["example"]};const Y=V()(G,[["render",D]]);var q=Y,z={class:"w-full my-3"},J={class:"mb-3"},W={class:"border-b-4 border-green"},X=["innerHTML"];function B(e,t,n,r,i,o){var u=Object(a["l"])("Prism");return Object(a["j"])(),Object(a["e"])("div",z,[Object(a["f"])("h3",J,[Object(a["f"])("span",W,Object(a["m"])(n.instalation.title),1)]),Object(a["h"])(u,{code:n.instalation.code(),language:n.instalation.language},null,8,["code","language"]),n.instalation.tips?(Object(a["j"])(),Object(a["e"])("div",{key:0,class:"w-full p-2 bg-white",innerHTML:n.instalation.tips},null,8,X)):Object(a["d"])("",!0)])}var K={name:"InstalationCard",props:["instalation"]};const Q=V()(K,[["render",B]]);var Z=Q,ee=[{title:"Currency for FLOAT data types",value:275,options:{precision:2,decimal:".",thousand:","},code:function(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 2, decimal: '.', thousand: ',' }\"\n        ></VueNumberFormat>\n      "}},{title:"Currency for INTEGER data types",value:275,options:{precision:2,prefix:"R$ ",isInteger:!0},code:function(){return'\n        <VueNumberFormat \n          v-model:value="value" \n          :options="{ precision: 2, prefix: \'R$ \', isInteger: true }"\n        ></VueNumberFormat>\n      '}},{title:"Number with suffix",value:275,options:{precision:3,prefix:"",suffix:" kg",acceptNegative:!1},code:function(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ precision: 3, prefix: '', suffix: ' kg', acceptNegative: false  }\"\n        ></VueNumberFormat>\n      "}},{title:"Percentage",value:2.75,options:{prefix:"%",decimal:".",thousand:"",precision:2,acceptNegative:!1},code:function(){return"\n        <VueNumberFormat \n          v-model:value=\"value\" \n          :options=\"{ prefix: '%', decimal: '.', thousand: '', precision: 2, acceptNegative: false }\"\n        ></VueNumberFormat>\n      "}},{title:"Handling null values",value:null,options:{prefix:"US$",decimal:".",thousand:"",precision:2,acceptNegative:!1},code:function(){return"\n        <VueNumberFormat \n          v-model:value=\"null\" \n          :options=\"{ prefix: 'US$', decimal: '.', thousand: '', precision: 2, acceptNegative: false }\"\n        ></VueNumberFormat>\n      "}}],te=[{title:"Use inside template tags to output formatted numbers",value:275.26,options:{prefix:"US$ "},code:function(){return"\n      {{ vueNumberFormat(275.26, { prefix: 'US$ ' })}}\n      "}},{title:"Use inside template tags to output UNformatted numbers",value:"US$ 275.56",options:null,unformat:!0,code:function(){return"\n      {{ vueNumberUnformat('US$ 275.56')}}\n      "}}],ne=[{title:"Package install",language:"bash",code:function(){return"\n        yarn add vue-number-format\n        or\n        npm i -S vue-number-format\n      "}},{title:"Vue 3 Global usage",language:"js",code:function(){return"\n        /* ONLY FOR VUE 3 */\n        import { createApp } from 'vue'\n        import App from './App.vue'\n        import VueNumberFormat from '@igortrindade/vue-number-format'\n\n        const app = createApp(App)\n        app.use(VueNumberFormat, {prefix: 'US$ ', decimal: ',', thounsand: '.'})\n\n        app.mount('#app')\n      "}},{title:"Nuxt 3 Installation",language:"js",code:function(){return"\n        /* ONLY FOR NUXT 3 */\n        // plugins/index.ts\n        import VueNumberFormat from '@igortrindade/vue-number-format'\n\n        export default defineNuxtPlugin((nuxtApp) => {\n          nuxtApp.vueApp.use(VueNumberFormat, { prefix: 'R$ ', decimal: '.', thounsand: ',' })\n        })\n      "}},{title:"Vue 2 Global usage",language:"js",code:function(){return"\n        /* ONLY FOR VUE 2 */\n        import Vue from 'vue'\n        import App from './App.vue'\n        \n        import VueNumberFormat from '@igortrindade/vue-number-format'\n        Vue.use(VueNumberFormat, {prefix: 'R$ ', decimal: ',', thounsand: '.'})\n        \n        new Vue({\n          render: h => h(App),\n        }).$mount('#app')\n      "}},{title:"Local component usage",language:"html",code:function(){return"\n        <template>\n          ...\n          \x3c!-- VUE 3 --\x3e\n          <VueNumberFormat\n            v-model:value=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n          \x3c!-- https://v3.vuejs.org/guide/component-custom-events.html#v-model-arguments --\x3e\n\n          \x3c!-- VUE 2 --\x3e\n          <VueNumberFormat\n            v-model=\"value\"\n            :options=\"{ precision: 3, prefix: '', suffix: ' kg', decimal: '', thousand: '', acceptNegative: false, isInteger: false  }\"\n          ></VueNumberFormat>\n\n          ...\n        </template>\n        <script>\n          import VueNumberFormat from '@igortrindade/vue-number-format'\n          export default {\n            components: { VueNumberFormat }\n          }\n        <\/script>\n      "}},{title:"Default options",language:"js",code:function(){return"\n        {\n          prefix: 'US$ ',\n          suffix: '',\n          decimal: ',',\n          thousand: '.',\n          precision: 2,\n          acceptNegative: true,\n          isInteger: false\n        }\n      "}},{title:"Display format",language:"html",code:function(){return"\n        {{vueNumberFormat(275, {})}}\n        \x3c!-- display US$275.00 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      "},tips:"Available only within global instalation"},{title:"Display unformatted number",language:"html",code:function(){return"\n        {{vueNumberUnformat('R$275,00', {})}}\n        \x3c!-- display 275 --\x3e\n        \x3c!-- Available only within global instalation --\x3e\n        \x3c!-- use like a component method --\x3e\n        \x3c!-- Filters are removed from Vue 3.0 and no longer supported: https://v3.vuejs.org/guide/migration/filters.html--\x3e\n      "},tips:"Available only within global instalation"}],ae={name:"App",components:{ExampleCard:$,InstalationCard:Z,ExampleMixinMethodUsage:q},metaInfo:function(){var e="vue-number-format - A Vue.js 2 and 3 lightweight library to input and display format";return{title:e}},data:function(){return{examples:ee,examplesMixin:te,instalations:ne}}};n("5ed2");const re=V()(ae,[["render",m]]);var ie=re,oe=(n("11fd"),n("2aa5"),n("62c8"),n("d86f"),n("ef1f"),n("0d9f"),n("32f5"),n("e94e"),n("4430")),ue={prefix:"R$ ",suffix:"",decimal:",",thousand:".",precision:2,acceptNegative:!0,isInteger:!1},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ue;null===e&&(e=0);var n=Object.assign({},ue,t);"number"!==typeof e||n.isInteger||(e=e.toFixed(fe(n.precision)));var a=xe(e,n.acceptNegative)?"-":"",r=me(e),i=de(r,n.precision),o=ge(i).split("."),u=o[0],l=o[1];return u=be(u,n.thousand),a+n.prefix+ve(u,l,n.decimal)+n.suffix},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{precision:2,isInteger:!1,acceptNegative:!0};null===e&&(e=0);var n=Object.assign({},ue,t),a=xe(e,n.acceptNegative)?-1:1,r=me(e),i=de(r,n.precision);return n.isInteger?parseInt("".concat(xe(e,n.acceptNegative)?"-":"").concat(r.toString())):parseFloat(i)*a},se=function(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&setTimeout(n,1)},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ue,n=e.value.length-e.selectionEnd;e.value=le(e.value,t),n=Math.max(n,t.suffix.length),n=e.value.length-n,n=Math.max(n,t.prefix.length+1),se(e,n)};function me(e){return ge(e).replace(/\D+/g,"")||"0"}function fe(e){return Math.max(0,Math.min(e,20))}function de(e,t){var n=Math.pow(10,t),a=parseFloat(e)/n;return a.toFixed(fe(t))}function be(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1".concat(t))}function ve(e,t,n){return t?e+n+t:e}function ge(e){return e?e.toString():""}function xe(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)return!1;"string"!=typeof e&&(e=e.toString());var n=e.indexOf("+")>=0,a=0!==e&&e.indexOf("-")>=0||"-"==e[e.length-1];return!(n||!a)}var je={name:"VueNumberFormat",props:{value:{type:[String,Number,null],required:!0},format:{type:Function},unFormat:{type:Function},options:{type:Object,required:!1}},emits:["input","update:value"],computed:{mergedOptions:function(){var e=this.$vueNumberFormatOptions||ue;return this.options?Object.assign({},e,this.options):e},formattedValue:function(){return le(this.value,this.mergedOptions)}},created:function(){this.$vueNumberFormatOptions||(this.$vueNumberFormatOptions=ue)},methods:{onFocus:function(e){se(e.target,e.target.value.length-this.mergedOptions.suffix.length)},onInput:function(e){pe(e.target,this.mergedOptions);var t=ce(e.target.value,this.mergedOptions);this.updateValue(t)},updateValue:function(e){this.$vueNumberFormatOptions&&"v2"===this.$vueNumberFormatOptions.vueVersion?this.$emit("input",e):this.$emit("update:value",e)}}},he=["value"];function Oe(e,t,n,a,r,i){return Object(oe["b"])(),Object(oe["a"])("input",{value:i.formattedValue,type:"tel",onInput:t[0]||(t[0]=function(e){return i.onInput(e)}),onFocus:t[1]||(t[1]=function(e){return i.onFocus(e)})},null,40,he)}je.render=Oe,je.__file="src/vue-number-format.vue";var ye=function e(t,n){if(!e.installed){e.installed=!0,t.component("VueNumberFormat",je);var a=Object.assign({},ue,n);"undefined"!=typeof t.prototype?(a.vueVersion="v2",t.prototype.$vueNumberFormatOptions=a):(a.vueVersion="v3",t.config.globalProperties.$vueNumberFormatOptions=a),t.mixin({methods:{vueNumberFormat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Object.assign({},a,t);return le(e,n)},vueNumberUnformat:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=Object.assign({},a,t);return ce(e,n)}}})}};Object.assign(je,{install:ye});var Ne=null;"undefined"!==typeof window?Ne=window.Vue:"undefined"!==typeof global&&(Ne=global.Vue),Ne&&Ne.use(je);n("fa97");var we={class:"w-full flex flex-col items-end"},Fe={ref:"copy",class:"bg-black text-center text-white p-2 text-xs -mb-12 focus:outline-none z-10"},Ve={key:0},ke={key:1,class:"font-bold text-green"},$e=["innerHTML"];function Ue(e,t,n,r,i,o){return Object(a["j"])(),Object(a["e"])("div",we,[Object(a["f"])("button",Fe,[i.isCopied?(Object(a["j"])(),Object(a["e"])("span",ke,"copied ✓")):(Object(a["j"])(),Object(a["e"])("span",Ve,"copy"))],512),Object(a["f"])("pre",{class:Object(a["i"])(["w-full p-2 bg-black mt-0",o.className]),innerHTML:o.html},null,10,$e)])}var Me=n("c197"),Ie=n.n(Me),Se=(n("8009"),n("6f35"),n("b311")),Ae=n.n(Se);Ie.a.plugins.NormalizeWhitespace.setDefaults({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,"remove-initial-line-feed":!0,indent:0});var Pe={name:"PrismComponent",props:["code","language"],computed:{className:function(){return"language-".concat(this.language)},html:function(){var e=Ie.a.languages[this.language];return Ie.a.highlight(this.code,e,this.language)}},data:function(){return{isCopied:!1,clipboard:null}},mounted:function(){var e=this;new Ae.a(this.$refs.copy,{text:function(t){return e.isCopied=!0,setTimeout((function(){e.isCopied=!1}),2e3),e.code}})},methods:{}};n("c738");const Ee=V()(Pe,[["render",Ue]]);var Ce=Ee,Re=Object(a["b"])(ie);Re.use(je,{precision:2,prefix:""}),Re.component("Prism",Ce),Re.mount("#app")},"5ed2":function(e,t,n){"use strict";n("c7ca")},c738:function(e,t,n){"use strict";n("e628")},c7ca:function(e,t,n){},e628:function(e,t,n){}});
//# sourceMappingURL=app.ea6fd0f4.js.map