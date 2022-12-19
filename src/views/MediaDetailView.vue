<template>
  <MainComponent v-if="Object.keys(movieStore.movie).length > 0">
    <SectionCover
      hasCover
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
                  {{movieStore.movie.title}}
                </h2>
                <div class="flex">
                  <span
                    class="mr-2 pt-[0.06rem] pr-[4px] pb-[0.15rem] pl-[4px] inline-flex items-center rounded-[2px] whitespace-nowrap border border-solid border-[rgba(255,255,255,0.6)] text-[rgba(255,255,255,0.6)]"
                    >PG</span
                  >
                  <span class="pl-0 relative top-0 left-0">{{movieStore.movie.release_date}}</span>
                  <span
                    class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white"
                  >
                    <a v-for="genre in movieStore.movie.genres" :key="genre.id" href="#">{{ genre.name }}, </a>
                  </span>
                  <span
                    class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white"
                  >
                    1h 14m
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
                  <ActionIcon :iconConfiguration="listIconComponent" />
                </div>
                <div>
                  <ActionIcon :iconConfiguration="hearthIconComponent" />
                </div>
                <div>
                  <ActionIcon :iconConfiguration="bookMarkIconComponent" />
                </div>
                <div>
                  <ActionIcon :iconConfiguration="starIconComponent" />
                </div>
                <div>
                  <h3 class="font-bold flex items-center gap-2">
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
              <DetailsOverview :crews="movieStore.getCrewDetail" :tagline="movieStore.movie.tagline" :overview="movieStore.movie.overview" />
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
          <CarouselCard component="profileCard" :movieUrl="movieUrl" :slides="movieStore.getCastDetail">
          </CarouselCard>
        </div>
        <!--      Main content end-->
        <!--      Sidebar-->
        <aside class="mt-7 w-1/6 h-auto">
          <div class="flex items-center">
            <div class="flex items-center">
              <a :href="`https://facebook.com/${movieStore.movie?.external_ids?.facebook_id}`">
                <Svg :width="facebookIconComponent.width" :height="facebookIconComponent.height">
                  <Path
                      :bgColor="facebookIconComponent.bgColor"
                      :path="facebookIconComponent.path"
                  />
                </Svg>
              </a>
              <a class="ml-3" :href="`https://twitter.com/${movieStore.movie?.external_ids?.twitter_id}`">
                <Svg :width="twitterIconComponent.width" :height="twitterIconComponent.height">
                  <Path
                      :bgColor="twitterIconComponent.bgColor"
                      :path="twitterIconComponent.path"
                  />
                </Svg>
              </a>
              <a class="ml-3" :href="`https://instagram.com/${movieStore.movie?.external_ids?.instagram_id}`">
                <Svg :width="instagramIconComponent.width" :height="instagramIconComponent.height">
                  <Path
                      :bgColor="instagramIconComponent.bgColor"
                      :path="instagramIconComponent.path"
                  />
                </Svg>
              </a>
            </div>
            <a class="ml-4" :href="movieStore.movie.homepage">
              <Svg
                class="mr-2"
                :width="linkIconComponent.width"
                :height="linkIconComponent.height"
              >
                <Path
                  v-for="(path, index) in linkIconComponent.paths"
                  :key="index"
                  :path="path"
                  :bgColor="linkIconComponent.bgColor"
                />
              </Svg>
            </a>
          </div>
          <strong class="mt-5">
            <p>Status</p>
          </strong>
          <p>{{movieStore.movie.status}}</p>
          <strong class="mt-5">
            <p>Original Language</p>
          </strong>
          <p>{{movieStore.movie.spoken_languages.find( el => el.iso_639_1 === movieStore.movie.original_language)?.english_name }}</p>
          <strong class="mt-5">
            <p>Budget</p>
          </strong>
          <p>{{ moneyFormatter.format(movieStore.movie.budget)}}</p>
          <strong class="mt-5">
            <p>Revenue</p>
          </strong>
          <p>{{moneyFormatter.format(movieStore.movie.revenue)}}</p>
        </aside>
        <!--      Sidebar end-->
      </div>
    </div>
  </MainComponent>
</template>

<script setup>
// region main import

import { inject, onMounted } from "vue";

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
import {
  bookMarkIconComponent,
  enlargeIconComponent, facebookIconComponent,
  hearthIconComponent, instagramIconComponent,
  linkIconComponent,
  listIconComponent,
  playIconComponent,
  starIconComponent, twitterIconComponent,
} from "@/components/Icons/icons";
import router from "@/router";
import { moviesStore } from "@/stores/movie";
import { tvStore } from "@/stores/tv";
import {moneyFormatter} from "@/composable/math";

// endregion

// region stores

const movieStore = moviesStore();
const tv = tvStore();
const movieUrl = inject("baseImageUrl");

// endregion

// region Hooks

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

<style scoped></style>
