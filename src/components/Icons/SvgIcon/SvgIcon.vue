<template>
  <Svg :width="props.width" :height="props.height" :viewBox="props.viewBox">
    <Path :path="props.path" :bgColor="props.bgColor" />
  </Svg>
</template>

<script setup>
import { defineProps } from 'vue'
import Svg from "@/components/Icons/Svg/Svg.vue";
import Path from "@/components/Icons/Path/Path.vue";
const props = defineProps({
  bgColor:{
    type:String,
    default:() => "#000000"
  },
  width: String,
  height: String,
  path: String,
  viewBox:{
    type: String,
    default: () => "0 0 16 16"
  }
});

</script>

<style scoped>

</style>