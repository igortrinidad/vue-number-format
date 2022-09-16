import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        exports: 'auto',
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        exports: 'auto',
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    external: ['vue'],
    plugins: [
      vue(),
      peerDepsExternal()
    ]
  }
]