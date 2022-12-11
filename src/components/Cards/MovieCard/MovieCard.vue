<template>
  <div class="w-[150px] h-[225px] rounded-lg relative cursor-pointer">
    <div class="bg-[#dbdbdb] rounded-lg shadow-[0_2px_8px_rgb(0 0 0 / 10%)] h-[225px]">
      <img v-if="props.movie?.poster_path" class="rounded-lg h-full" :src="`${props.movieUrl}/w200${props.movie?.poster_path}`" :alt="props.movie?.name">
      <img v-else class="rounded-lg h-full w-16 mx-auto" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg">
    </div>
    <!--  Content  -->
    <div class="pb-0 w-full relative pt-[26px] pr-[10px] pl-[12px] flex content-start flex-wrap">
      <div class="h-[38px] w-full box-border inline-block whitespace-normal">
        <MovieCardTitle hoverEffect :mediaType="mediaType.toString()" :idMedia="props.movie.id"  :title="props.movie.title" :name="props.movie.name" />
        <MovieCardDate :release_date="props.movie.release_date" :first_air_date="props.movie.first_air_date" />
        <ProgressCircle :progress="fixedDecimal(props.movie.vote_average)" />
      </div>
      <!--  End Content  -->
    </div>
  </div>
</template>

<script setup>
import {defineProps, inject} from 'vue'
import ProgressCircle from "@/components/Cards/MovieCard/ProgressCircle/ProgressCircle.vue";
import MovieCardTitle from "@/components/Cards/MovieCardTitle/MovieCardTitle.vue";
import MovieCardDate from "@/components/Cards/MovieCardDate/MovieCardDate.vue";
import {fixedDecimal} from "@/composable/math";

const mediaType=inject('mediaType');

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


</script>
