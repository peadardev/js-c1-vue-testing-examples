<script setup lang="ts">
import { computed, ref } from 'vue';

const comptador = ref(0);
const incrementar = () => {
  comptador.value++;
};

const factorial = computed(() => {
  const n = comptador.value;
  let resultat = 1;

  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
});
</script>

<template>
  <div>
    <h2 data-test="comptador">Comptador: {{ comptador }}</h2>
    <h3 data-test="factorial">Factorial: {{ factorial }}</h3>
    <button data-test="btn-incrementar" @click="incrementar">Incrementar</button>
  </div>
</template>
