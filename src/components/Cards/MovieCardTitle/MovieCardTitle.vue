<template>
  <h5 @click="detailsNavigation" :class="{'hover:text-[rgba(1,180,228,1)]': hoverEffect, 'text-white':textWhite, 'text-center':textCenter}" class="transition-colors w-full font-bold text-base cursor-pointer mt-3">{{props.title || props.name}}</h5>
</template>

<script setup>
import { defineProps } from 'vue'
import router from "@/router";
const props = defineProps({
  name:String,
  title:String,
  textWhite:Boolean,
  textCenter:Boolean,
  hoverEffect:Boolean,
  idMedia:{
    type:Number,
    required:true
  },
  mediaType:{
    type:String,
    required:true
  }
});

const detailsNavigation = () => {
  router.push({name: 'mediaDetail', params: {media: props.mediaType, id: props.idMedia} })
}
</script>

<style scoped>

</style>