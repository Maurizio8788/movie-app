<template>
    <div class="relative" v-if="props.title === selectedTitle?.title">
      <slot></slot>
    </div>
</template>

<script setup>
import {defineProps, inject } from 'vue'

const selectedTitle= inject('selectedTitle');

const props = defineProps({
  title:{
    type:String,
    required:true
  },
  type:{
    type:String,
    required:true
  },
  isActive:Boolean
});

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
