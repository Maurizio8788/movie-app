<template>
  <Swiper
      :slides-per-view="9"
      :virtual="true"
      :spaceBetween="props.spaceBetween"
      :modules="[Virtual, Thumbs]"
      class="mySwiper pl-8"
      :class="props.heightClass"
      @reachEnd="swiperReachEnd"
      >
    <SwiperSlide v-for="slide in slides"  :virtual-index="slide.id" :key="slide.id">
      <component @see-trailer-film="openModalHandler" :movieUrl="movieUrl" @set-bg-image-evt="setImageBgCover" :is="_cardComponentDefinition" :movie="slide"></component>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>

// region import mains

import { Virtual, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import {defineProps, onMounted, ref, defineEmits, inject, provide} from 'vue';

// endregion

// region imports Component

import MovieCard from "@/components/Cards/MovieCard/MovieCard.vue";
import MovieTrailer from "@/components/Cards/MovieTrailer/MovieTrailer.vue";

// endregion

// region Swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

// endregion

// region Props and Emits
const props = defineProps({
  slides:{
    type:Array,
    required:true
  },
  component: {
    type:String,
    default: () => "movieCard"
  },
  spaceBetween: {
    type:Number,
    default:() => 20
  },
  heightClass:{
    type:String,
    default: () => "h-[400px]"
  },
  mediaType: {
    type:String,
    required:false,
    default:() => 'movie'
  }
});
const emits = defineEmits(["set-bg-image-evt", "see-trailer-film"])

// endregion

// region components variables

const _cardComponentDefinition = ref(null);
const movieUrl = inject('baseImageUrl');
const movieCardsComponentsMap = {
  movieTrailer: MovieTrailer,
  movieCard: MovieCard
};

// endregion

// region Hooks
onMounted(
    () => {
      _cardComponentDefinition.value = movieCardsComponentsMap[props.component];
    }
);
// endregion

// region Methods

const setImageBgCover = (image) => {
  emits("set-bg-image-evt", image);
}

const openModalHandler = (evt) => {
  emits("see-trailer-film", evt);
}

const swiperReachEnd = (swiper) => {
  console.log(swiper);
}

// endregion

provide('mediaType', props.mediaType)

</script>

<style>
.swiper {
  @apply pl-8 w-full py-[20px];
}
.swiper-slide {
  width: 150px!important;
  height: 225px!important;

}
</style>
