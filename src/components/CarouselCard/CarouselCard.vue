<template>
  <Swiper
      :slides-per-view="7"
      :virtual="true"
      :spaceBetween="spaceBetween"
      :modules="[Virtual, Navigation, Pagination, Scrollbar, A11y]"
      class="mySwiper pl-8"
      :class="heightClass"
      >
    <SwiperSlide v-for="(slide, index) in slides"  :virtual-index="index" :key="slide.id">
      <component :profile="slide" @see-trailer-film="openModalHandler" :movieUrl="movieUrl" @set-bg-image-evt="setImageBgCover" :is="_cardComponentDefinition" :movie="slide"></component>
    </SwiperSlide>
  </Swiper>
  <slot name="action"></slot>
</template>

<script setup>

// region import mains

import {Virtual, Navigation, Pagination, Scrollbar, A11y} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/vue';
import {defineProps, onMounted, ref, defineEmits, inject, provide, toRefs} from 'vue';

// endregion

// region imports Component

import MovieCard from "@/components/Cards/MovieCard/MovieCard.vue";
import MovieTrailer from "@/components/Cards/MovieTrailer/MovieTrailer.vue";
import ProfileCard from '@/components/Cards/ProfileCard/ProfileCard.vue';

// endregion

// region Swiper css

import 'swiper/swiper.min.css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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

const { heightClass, slides, spaceBetween } = toRefs(props);
const emits = defineEmits(["set-bg-image-evt", "see-trailer-film"])

// endregion

// region components variables

const _cardComponentDefinition = ref(null);
const movieUrl = inject('baseImageUrl');
const movieCardsComponentsMap = {
  movieTrailer: MovieTrailer,
  movieCard: MovieCard,
  profileCard: ProfileCard
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

// endregion

provide('mediaType', props.mediaType)

</script>

<style>
.swiper {
  @apply pl-8 py-[20px];
}
.swiper-slide {
  width: 150px!important;
  height: 225px!important;
}

</style>
