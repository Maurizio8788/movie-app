<template>
  <div>
    <h4 class="italic">{{ props.tagline }}</h4>
    <h3 class="text-xl mt-2">Overview</h3>
    <p class="mt-2">{{ props.overview }}</p>
  </div>
  <div class="flex justify-between flex-wrap w-4/5">
    <div class="w-1/3 mt-3" v-for="crew in props.crews" :key="crew.id">
      <h4 class="font-bold">{{ crew.name }}</h4>
      <p class="mt-0.5">{{ crew.job }}</p>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
const props = defineProps({
  tagline:{
    type:String,
    required:true
  },
  overview:{
    type:String,
    required:true
  },
  crews:{
    type:Array,
    required:true
  }
});
</script>

<style scoped>

</style>