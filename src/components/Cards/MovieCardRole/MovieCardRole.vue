<template>
  <p class="overflow-ellipsis overflow-hidden text-base p-0 m-0 text-[rgba(0,0,0,0.6)]">{{ props.role }}</p>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  role:{
    type:String,
    required:true
  }
});

</script>

<style scoped>

</style>