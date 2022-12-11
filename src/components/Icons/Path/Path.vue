<template>
  <path :fill="props.bgColor" :d="props.path"></path>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  bgColor:{
    type:String,
    default:() => "#000000"
  },
  path:{
    type: String,
    required: true
  }
});
</script>

<style scoped>

</style>