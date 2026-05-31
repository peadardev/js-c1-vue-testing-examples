import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import CounterFactorial from '@/components/CounterFactorial.vue';

describe('CounterFactorial.vue', () => {
  it('hauria de mostrar comptador 0 i factorial 1 a l inici', () => {
    //arrange
    const wrapper = mount(CounterFactorial);

    //act
    const textComptador = wrapper.get('[data-test="comptador"]').text();
    const textFactorial = wrapper.get('[data-test="factorial"]').text();

    //assert
    expect(textComptador).toContain(0);
    expect(textFactorial).toContain(1);
  });

  it('hauria de incrementar comptador en fer click', async () => {
    //arrange
    const wrapper = mount(CounterFactorial);
    const boto = wrapper.get('[data-test="btn-incrementar"]');

    //act
    await boto.trigger('click');

    const textComptador = wrapper.get('[data-test="comptador"]').text();
    const textFactorial = wrapper.get('[data-test="factorial"]').text();

    //assert
    expect(textComptador).toContain(1);
    expect(textFactorial).toContain(1);
  });

  it('hauria de calcular valors correctes després de varis click', async () => {
    //arrange
    const wrapper = mount(CounterFactorial);
    const boto = wrapper.get('[data-test="btn-incrementar"]');

    //act
    await boto.trigger('click');
    await boto.trigger('click');
    await boto.trigger('click');

    const textComptador = wrapper.get('[data-test="comptador"]').text();
    const textFactorial = wrapper.get('[data-test="factorial"]').text();

    //assert
    expect(textComptador).toContain(3);
    expect(textFactorial).toContain(6);
  });
});
