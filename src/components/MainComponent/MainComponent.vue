<template>
<main class="bg-white" :class="{'container':hasContainer, 'mx-auto':centererd}">
  <slot></slot>
</main>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
  hasContainer:Boolean,
  centererd:Boolean
});
</script>

<style scoped>

</style>