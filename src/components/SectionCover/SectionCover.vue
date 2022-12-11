<template>
  <section class="transition-all ease-in bg-cover bg-center bg-no-repeat" :style="{ backgroundImage:`url(${props.bgImage})` }">
    <div :class="{'bg-coverImage':props.hasCover}">
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  bgImage:{
    type:String,
    required:false
  },
  hasCover:Boolean
});
</script>

<style scoped>

</style>