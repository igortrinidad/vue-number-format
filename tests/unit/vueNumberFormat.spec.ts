import { describe, it, expect } from 'vitest'
import { mount, MountingOptions } from '@vue/test-utils'
import vueNumberFormatPlugin, { VueNumberFormat } from '@/plugins'

type VueNumberFormatProps = Pick<InstanceType<typeof VueNumberFormat>["$props"], "options" | "value">;

function factory(mountOptions: MountingOptions<VueNumberFormatProps>) {
  return mount(VueNumberFormat, {
    ...mountOptions,
    global: {
      plugins: [vueNumberFormatPlugin]
    }
  });
}

describe('vue-number-format.vue', () => {
  it('renders formatted currency value with the default options with passing any prop option', () => {
    const wrapper = factory({
      props: { value: 123 }
    });

    expect(wrapper.props().value).toBe(123)
    expect(wrapper.find('input').element.value).toBe('R$ 123,00')
  })

  it('renders formatted integer number 123 to US$ 1.23 on input', () => {
    const wrapper = factory({
      props: {
        value: 123,
        options: { isInteger: true, prefix: 'US$ ', decimal: '.', thousand: ','}
      }
    });

    expect(wrapper.props().value).toBe(123)
    expect(wrapper.find('input').element.value).toBe('US$ 1.23')
  })

  it('renders formatted integer number 123 to US$ 1.23 on input', () => {
    const wrapper = factory({
      props: {
        value: 1.23,
        options: { prefix: '', suffix: 'kg', decimal: ',', thousand: '.', precision: 3 }
      },
    });

    expect(wrapper.props().value).toBe(1.23)
    expect(wrapper.find('input').element.value).toBe('1,230kg')
  })
})