<template>
  <MainComponent v-if="Object.keys(movieStore.movie).length > 0">
    <SectionCover
      hasDarkCover
      :bg-image="`${movieUrl}/w500${movieStore.movie.backdrop_path}`"
    >
      <div
        class="container mx-auto w-full py-[30px] px-[40px] w-full box-border"
      >
        <!--  Container  -->
        <div class="flex flex-nowrap text-white">
          <!--        Image wrapper-->
          <div
            class="border-0 min-w-[300px] w-[300px] h-auto overflow-hidden rounded-lg"
          >
            <!--          Image-->
            <div
              class="rounded-t-lg block min-w-[300px] w-[300px] h-[450px] relative top-0 left-0"
            >
              <div class="rounded-t-lg w-full min-w-full h-full">
                <img
                  class="w-full h-full min-w-full min-h-full h-full block outline-0 border-0"
                  :src="`${movieUrl}/w500${movieStore.movie.poster_path}`"
                  alt="title"
                />
              </div>
              <!--          zoom-->
              <div
                class="flex items-center justify-center backdrop-blur-[20px] w-full h-full absolute top-0 left-0 text-center rounded-lg bg-[rgba(0,0,0,0.7)] transition-all ease-in-out opacity-0 hover:opacity-100 hover:visible"
                @click="showModalImages = true"
              >
                <Svg
                  class="mr-2"
                  :width="enlargeIconComponent.width"
                  :height="enlargeIconComponent.height"
                >
                  <Path
                    v-for="(path, index) in enlargeIconComponent.paths"
                    :key="index"
                    :path="path"
                    :bgColor="enlargeIconComponent.bgColor"
                  />
                </Svg>
                <p>Expand</p>
              </div>
              <!--          zoom end-->
            </div>
            <!--          image end-->
            <!--        provider-->
            <div
              class="relative top-0 left-0 w-full bg-darkBlue flex justify-center items-center box-border"
            >
              <div
                class="w-full flex items-stretch flex-wrap h-[60px] max-h-[60px]"
              >
                <div class="w-full justify-center flex">
                  <div class="flex items-center pr-[8px]">
                    <img
                      class="w-9 h-9 mr-1 rounded"
                      :src="`${movieUrl}/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg`"
                      alt="logo-provider"
                    />
                  </div>
                  <div
                    class="flex flex-wrap items-center content-center text-white"
                  >
                    <span>
                      <h4 class="leading-4 block opacity-80 font-normal m-0">
                        Now Streaming
                      </h4>
                      <h3 class="block text-base m-0 text-white font-extrabold">
                        <a href="#" class="text-white font-semibold"
                          >Watch Now</a
                        >
                      </h3>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <!--        provider end-->
          </div>
          <!--        Image wrapper end-->
          <div class="flex text-white">
            <section
              class="flex flex-wrap items-start content-center items-start box-border pl-10 text-white"
            >
              <!--            title-->
              <div class="w-full mb-6 flex flex-wrap text-white">
                <h2 class="font-bold text-4xl w-full m-0 p-0">
                  {{ movieStore.movie.title }}
                </h2>
                <div class="flex">
                  <span
                    class="mr-2 pt-[0.06rem] pr-[4px] pb-[0.15rem] pl-[4px] inline-flex items-center rounded-[2px] whitespace-nowrap border border-solid border-[rgba(255,255,255,0.6)] text-[rgba(255,255,255,0.6)]"
                    >{{ country.certification }}</span
                  >
                  <span class="pl-0 relative top-0 left-0">{{
                    country.release_date
                  }}</span>
                  <span
                    class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white"
                  >
                    <a
                      v-for="genre in movieStore.movie.genres"
                      :key="genre.id"
                      href="#"
                      >{{ genre.name }},
                    </a>
                  </span>
                  <span
                    class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white"
                  >
                    {{ timeFilm }}
                  </span>
                </div>
              </div>
              <!--            title end-->
              <!--            actions-->
              <div
                class="flex items-center justify-start h-[68px] w-full mb-5 text-white"
              >
                <div
                  class="inline-flex items-center justify-center box-border h-[68px]"
                >
                  <ProgressCircle
                    :width="65"
                    :height="65"
                    :svgHeight="60"
                    :svgWidth="60"
                    :progress="6.5"
                  />
                  <span class="ml-1.5 font-bold whitespace-pre-line"
                    >User<br />Score</span
                  >
                </div>
                <div class="ml-5">
                  <ActionIcon
                    use-tooltip
                    tooltip-text="Add to list"
                    :iconConfiguration="listIconComponent"
                  />
                </div>
                <div>
                  <ActionIcon
                    use-tooltip
                    tooltip-text="Mark as favorite"
                    :iconConfiguration="hearthIconComponent"
                  />
                </div>
                <div>
                  <ActionIcon
                    use-tooltip
                    tooltip-text="Add to your watchlist"
                    :iconConfiguration="bookMarkIconComponent"
                  />
                </div>
                <div>
                  <ActionIcon
                    use-tooltip
                    tooltip-text="Rate it"
                    :iconConfiguration="starIconComponent"
                  />
                </div>
                <div>
                  <h3
                    role="button"
                    class="font-bold flex items-center gap-2 cursor-pointer"
                    @click="showModal = true"
                  >
                    <Svg
                      :width="playIconComponent.width"
                      :height="playIconComponent.height"
                    >
                      <Path
                        :path="playIconComponent.path"
                        :bgColor="playIconComponent.bgColor"
                      />
                    </Svg>
                    Play Trailer
                  </h3>
                </div>
              </div>
              <!--            actions end-->
              <DetailsOverview
                :crews="movieStore.getCrewDetail"
                :tagline="movieStore.movie.tagline"
                :overview="movieStore.movie.overview"
              />
            </section>
          </div>
        </div>
        <!--  End Container  -->
      </div>
    </SectionCover>
    <div class="container mx-auto">
      <div class="flex gap-7">
        <!--      Main content-->
        <div class="w-5/6">
          <h3 class="mt-7 text-xl font-semibold">Top Billed Cast</h3>
          <CarouselCard
            heightClass="h-[340px]"
            component="profileCard"
            :movieUrl="movieUrl"
            :slides="movieStore.getCastDetail"
          >
          </CarouselCard>
          <p class="pl-[2rem]">
            <a class="text-lg font-semibold" href="#">Full Cast & Crew</a>
          </p>
          <hr class="my-7" />
          <div class="flex">
            <h3>Social</h3>
          </div>
        </div>
        <!--      Main content end-->
        <!--      Sidebar-->
        <DetailSidebar
          :facebook-id="movieStore.movie?.external_ids?.facebook_id"
          :twitter-id="movieStore.movie?.external_ids?.twitter_id"
          :instagram-id="movieStore.movie?.external_ids?.instagram_id"
          :home-page="movieStore.movie.homepage"
          :status="movieStore.movie.status"
          :english-property="englishProperty"
          :budget="movieStore.movie.budget"
          :revenue="movieStore.movie.revenue"
        />
        <!--      Sidebar end-->
      </div>
    </div>

    <Modal background_black color_white :show-modal="showModal">
      <template #header>
        <div class="px-4 flex justify-between items-center w-full">
          <h3 class="text-ellipsis">
            {{ mainTrailer.name }}
          </h3>
          <button
            @click="showModal = false"
            role="button"
            class="text-3xl"
            type="button"
          >
            &times;
          </button>
        </div>
      </template>
      <template #body>
        <div class="w-full h-[632px] block overflow-hidden">
          <iframe
            class="w-full h-full"
            type="text/html"
            autoplay
            :src="`https://www.youtube.com/embed/${mainTrailer.key}?autoplay=1&autohide=1`"
          ></iframe>
        </div>
      </template>
    </Modal>

    <Modal no-padding :width="877" :show-modal="showModalImages">
      <template v-slot:body>
        <div class="overflow-hidden block">
          <div class="flex">
            <div class="w-[517px] overflow-hidden block">
              <Swiper
                  :slides-per-view="1"
                  :navigation="true"
                  :modules="[Navigation, Pagination]">
                <SwiperSlide v-for="(movie, index) in movieStore.movie?.images?.posters" :virtual-index="index" :key="index">
                  <div class="w-[517px] h-[700px] bg-center bg-no-repeat overflow-hidden block">
                    <img class="w-full h-full" :src="`${movieUrl}/w500${movie?.file_path}`">
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="w-[360px] relative top-0 left-0">
              <div class="flex justify-end">
                <span @click="showModalImages = false" class="cursor-pointer text-3xl font-bold mt-3 mr-6">&times;</span>
              </div>
              <div class="absolute bottom-[20px] w-full box-border">
<!--                Navigation-->
                <div class="flex justify-between mt-[20px] ml-[20px] mr-[20px] mb-0">
                  <Svg
                      :width="arrowRoundedLeftIconComponent.width"
                      :height="arrowRoundedLeftIconComponent.height"
                      class="cursor-pointer"
                      @click="swiper.slidePrev()"
                  >
                    <Path :bg-color="arrowRoundedLeftIconComponent.bgColor" :path="arrowRoundedLeftIconComponent.path" />
                  </Svg>
                  <Svg
                      :width="arrowRoundedRightIconComponent.width"
                      :height="arrowRoundedRightIconComponent.height"
                      class="cursor-pointer"
                      @click="swiper.slideNext()"
                  >
                    <Path :bg-color="arrowRoundedRightIconComponent.bgColor" :path="arrowRoundedRightIconComponent.path" />
                  </Svg>
                </div>
<!--                Navigation end-->
              </div>
            </div>
          </div>
        </div>
      </template>
    </Modal>
  </MainComponent>
</template>

<script setup>
// region main import

import { Navigation, Pagination } from "swiper";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';
import {computed, inject, onBeforeMount, onMounted, ref} from "vue";
import router from "@/router";

// endregion

// region imports components

import SectionCover from "@/components/SectionCover/SectionCover.vue";
import ProgressCircle from "@/components/Cards/MovieCard/ProgressCircle/ProgressCircle.vue";
import ActionIcon from "@/components/ActionIcon/ActionIcon.vue";
import Svg from "@/components/Icons/Svg/Svg.vue";
import Path from "@/components/Icons/Path/Path.vue";
import DetailsOverview from "@/components/DetailsOverview/DetailsOverview.vue";
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";
import MainComponent from "@/components/MainComponent/MainComponent.vue";
import DetailSidebar from "@/components/Sidebars/DetailSidebar/DetailSidebar.vue";
import Modal from "@/components/Modal/Modal.vue";

// endregion

// region Store import

import { moviesStore } from "@/stores/movie";
import { tvStore } from "@/stores/tv";

// endregion

// region imports general

import {
  arrowRoundedLeftIconComponent, arrowRoundedRightIconComponent,
  bookMarkIconComponent,
  enlargeIconComponent,
  hearthIconComponent,
  listIconComponent,
  playIconComponent,
  starIconComponent,
} from "@/components/Icons/icons";

import { timeConvert } from "@/composable/dateTime";

// endregion

// region Swiper css

import 'swiper/swiper.min.css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// endregion

// region stores

const movieStore = moviesStore();
const tv = tvStore();
const movieUrl = inject("baseImageUrl");

// endregion

// region Data

const showModal = ref(false);
const showModalImages = ref(false);
let swiper = null;

//endregion

// region Computed

const englishProperty = computed(
  () =>
    movieStore.movie.spoken_languages.find(
      (el) => el.iso_639_1 === movieStore.movie.original_language
    )?.english_name
);
const country = computed(() =>
  movieStore.movie.releases.countries.find((el) => el.iso_3166_1 === "US")
);
const timeFilm = computed(() => timeConvert(movieStore.movie.runtime));
const mainTrailer = computed(() =>
  movieStore.movie?.videos?.results?.find((x) => x.type === "Trailer")
);

// endregion

// region Hooks

onBeforeMount(
    () => {
      swiper = useSwiper();
    }
)


onMounted(() => {
  const routeParams = router.currentRoute.value.params;
  detail(routeParams.media, routeParams.id);
});

// endregion

// region Methods

const detail = (type, idMovie) => {
  switch (type) {
    case "tv":
      console.log("tv");
      break;
    case "movie":
      movieStore.getMovieDetail(idMovie);
      break;
  }
};

//endregion

</script>

<style scoped>
.swiper {
  @apply w-[517px] h-[700px] m-0 p-0 overflow-hidden block;
}

.swiper-slide {
  @apply !w-[517px] !h-[700px];
}
</style>
