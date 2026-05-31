import { describe, it, expect } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import App from '@/App.vue';
import CounterFactorial from '@/components/CounterFactorial.vue';
import AboutView from '@/components/AboutView.vue';

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', name: 'home', component: CounterFactorial },
      { path: '/about', name: 'about', component: AboutView },
    ],
  });
}

describe('Routing basic', () => {
  it('hauria de mostrar el comptador a la ruta arrel "/"', async () => {
    //arrange
    const router = createTestRouter();
    await router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    //act
    const text = wrapper.html();

    //assert
    expect(text).toContain('Comptador:');
  });

  it('hauria de mostrar la pagina About a la ruta "/about"', async () => {
    //arrange
    const router = createTestRouter();
    await router.push('/about');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    //act
    const text = wrapper.html();

    //assert
    expect(text).toContain('Pagina About');
  });

  it('hauria de navegar a About en fer click a l enllaç', async () => {
    //arrange
    const router = createTestRouter();
    await router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    const linkAbout = wrapper.get('[data-test="link-about"]');

    //act
    await linkAbout.trigger('click');
    await flushPromises();

    //assert
    expect(router.currentRoute.value.path).toBe('/about');
    expect(wrapper.html()).toContain('Pagina About');
  });
});
