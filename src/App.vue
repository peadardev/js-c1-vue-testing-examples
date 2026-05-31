<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <RouterLink to="/" data-test="link-home">Inici</RouterLink>
      <RouterLink to="/about" data-test="link-about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped></style>
