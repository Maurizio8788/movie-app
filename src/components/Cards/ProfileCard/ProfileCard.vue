<template>
<div class="shadow-[0_2px_8px_rgba(0, 0, 0, 1)] min-w-[140px] w-[140px] bg-white my-[10px] mr-[4px] ml-[10px] pb-[10px] rounded overflow-hidden border border-solid border-[rgba(227,227,227,1)]">
  <a class="w-[138px] h-[175px] min-w-[138px] block" href="#">
    <img :src="`${movieUrl}/w300/${props.profile.profile_path}`" :alt="props.profile.name" class="w-full h-full outline-0">
  </a>
  <MovieCardTitle class="px-[10px] text-[15px] font-bold" :name="props.profile.name" />
  <MovieCardRole class="px-[10px] text-[13px] text-inherit" :role="props.profile.character" />
</div>
</template>

<script setup>
import {defineProps, inject} from 'vue';
import MovieCardTitle from "@/components/Cards/MovieCardTitle/MovieCardTitle.vue";
import MovieCardRole from "@/components/Cards/MovieCardRole/MovieCardRole.vue";
const props = defineProps({
  profile:{
    type:Object,
    required:true
  }
});

const movieUrl = inject('baseImageUrl');
</script>

<style scoped>

</style>