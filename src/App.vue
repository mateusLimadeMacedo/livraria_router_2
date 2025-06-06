<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <header-component @click-cart="showCart = !showCart" />
  <main>
    <RouterView />
  </main>
  <footer-component />
</template>

<style scoped></style>