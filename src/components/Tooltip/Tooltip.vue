<template>
<div class="group/tooltip relative">
  <div class="opacity-0 transition-opacity duration-1000 z-10 bg-darkBlue absolute group-hover/tooltip:opacity-100 group-hover/link:opacity-100 text-white text-center rounded-sm py-[5px] px-0 min-w-[120px] w-auto bottom-full left-2/4 -m-[60px]">
    <p>{{props.tooltipText}}</p>
  </div>
</div>
</template>

<script setup>
import {defineProps} from 'vue'
const props = defineProps({
  tooltipText:String
});

</script>

<style scoped>

</style>