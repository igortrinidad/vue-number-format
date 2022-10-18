export interface VueNumberFormatOptions {
  prefix: string
  suffix: string
  decimal: string
  thousand: string
  precision: number
  acceptNegative: boolean
  isInteger: boolean
  vueVersion?: string
}

const defaultOptions: VueNumberFormatOptions = {
  prefix: 'R$ ',
  suffix: '',
  decimal: ',',
  thousand: '.',
  precision: 2,
  acceptNegative: true,
  isInteger: false
}

export default defaultOptions