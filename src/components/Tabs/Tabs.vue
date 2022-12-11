<template>
    <slot></slot>
</template>

<script setup>
import {onBeforeMount, useSlots} from "vue";
import {defineEmits} from 'vue'

const emit = defineEmits(['tabs-title-evt']);

onBeforeMount(() => {
  const slots = useSlots();
  console.log(slots.default());
  emit('tabs-title-evt', slots.default().map( slot => ({title:slot.props.title, type:slot.props.type}) ))
});
</script>
