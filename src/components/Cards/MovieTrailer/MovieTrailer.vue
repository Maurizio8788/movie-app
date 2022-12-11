<template>
  <div class="flex flex-wrap w-[300px] min-w-[300px] max-w-[300px] h-auto bg-transparent border-0 shadow-none cursor-pointer" @click="getMovieTrailer(props.movie.id)" @mouseenter="setBackgroundImage(movie.backdrop_path)">
    <!-- image -->
    <div class="group hover:transition-transform hover:ease-in-out hover:first:scale-[1.05] min-w-[300px] w-[300px] h-[calc(300px/1.78)] scale-100 overflow-hidden">
      <div class="block relative overflow-hidden rounded-lg top-0 left-0 overflow-hidden min-w-full w-full h-full">
          <img class="w-full h-full" :src="`${props.movieUrl}/w200/${movie.backdrop_path}`" alt="">
        <div class="transition-all ease-in-out absolute w-[300px] top-0 left-0 flex justify-center items-center text-[4em] h-[150px]">
          <span class="group-hover:transition-transform group-hover:ease-in-out group-hover:scale-[1.3] play relative top-0 left-0 inline-flex items-center justify-center bg-center bg-no-repeat box-border text-white"></span>
        </div>
      </div>
    </div>
    <!-- image end -->
    <MovieCardTitle :textWhite="true" :textCenter="true" :title="props.movie.title" :name="props.movie.name" />
  </div>
</template>

<script setup>

import {defineProps, defineEmits, inject} from 'vue';
import MovieCardTitle from "@/components/Cards/MovieCardTitle/MovieCardTitle.vue";
import {moviesStore} from "@/stores/movie";
import {tvStore} from "@/stores/tv";
const props = defineProps({
  movie:{
    type:Object,
    required:true
  },
  movieUrl:{
    type:String,
    required:true
  }
});

const emit = defineEmits(["set-bg-image-evt", "see-trailer-film"]);
const movieStore = moviesStore();
const tvsStore = tvStore();
const mediatype = inject('mediaType');
const setBackgroundImage = (image) => {
  emit("set-bg-image-evt", `http://image.tmdb.org/t/p/w500${image}`);
}

const getMovieTrailer = (idMovie) => {
  switch (mediatype) {
    case 'tv':
      tvsStore.getTvTrailer(idMovie);
      break;
    case 'movie':
      movieStore.getMovieTrailer(idMovie);
      break;
  }
  emit("see-trailer-film", true);
}


</script>

<style scoped>
.play {
  @apply bg-white min-w-[80px] min-h-[80px] w-[80px] h-[80px];
  -webkit-mask: url('@/assets/SVG/285-play3.svg') no-repeat center;
  mask: url('@/assets/SVG/285-play3.svg') no-repeat center;
}
</style>