import { createRouter, createWebHistory } from 'vue-router';
import AboutView from '@/components/AboutView.vue';
import CounterFactorial from '@/components/CounterFactorial.vue';

const routes = [
  { path: '/', name: 'home', component: CounterFactorial },
  { path: '/about', name: 'about', component: AboutView },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
