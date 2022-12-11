<template>
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :width="props.width" :height="props.height" :viewBox="props.viewBox">
    <slot></slot>
  </svg>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  width: String,
  height: String,
  viewBox:{
    type: String,
    default: () => "0 0 16 16"
  }
});
</script>

<style scoped>

</style>