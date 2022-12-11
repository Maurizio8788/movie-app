<template>
  <MainComponent hasContainer centererd>
    <MainSearch />

    <SectionHeading title="Cosa é popolare" @change-tabs-evt="tabsChangeHandler" :tabs="popularTabsTitles">
      <template v-slot:tabs>
        <Tabs @tabs-title-evt="getPopularTabsTitle">
            <Tab title="Films" type="movie">
              <CarouselCard mediaType="movie" :spaceBetween="20" :slides="movieStore.popularMovie"></CarouselCard>
            </Tab>
            <Tab title="In TV" type="tv">
              <CarouselCard mediaType="tv" :spaceBetween="20" :slides="tvsShows.tvShows"></CarouselCard>
            </Tab>
        </Tabs>
      </template>
    </SectionHeading>

    <SectionCover hasCover :bg-image="coverImage || movieStore.initialCover">
      <SectionHeading
          title="Ultimi trailer"
          @change-tabs-evt="setTrailersToShows"
          :tabs="trailerTabsTitles"
          :section-style="videoSectionHeadingStyle"
      >
        <template v-slot:tabs>
          <Tabs @tabs-title-evt="getTrailerTabsTitle">
            <Tab title="Films" type="movie">
              <CarouselCard
                  heightClass="h-[300px]"
                  :space-between="180"
                  component="movieTrailer"
                  @set-bg-image-evt="setBgCoverImage"
                  @see-trailer-film="openModalHandler"
                  mediaType="movie"
                  :slides="movieStore.moviesOnTheatres">
              </CarouselCard>
            </Tab>
            <Tab title="In TV" type="tv">
              <CarouselCard
                  heightClass="h-[300px]"
                  :space-between="180"
                  component="movieTrailer"
                  mediaType="tv"
                  @set-bg-image-evt="setBgCoverImage"
                  @see-trailer-film="openModalHandler"
                  :slides="tvsShows.tvShowsOnTheAir">
              </CarouselCard>
            </Tab>
          </Tabs>
        </template>
      </SectionHeading>
    </SectionCover>

    <SectionCover bgImage="/img/trending.svg">
      <SectionHeading
          @change-tabs-evt="setTrendings"
          :tabs="trendingTabsTitles"
          title="Di tendenza">
        <template v-slot:tabs>
          <Tabs @tabs-title-evt="getTrendingTabsTitle">
            <Tab title="Oggi" type="day">
              <CarouselCard
                  heightClass="h-[500px]"
                  mediaType="movie"
                  :slides="trendingStore.trendings">
              </CarouselCard>
            </Tab>
            <Tab title="Questa Settimana" type="week">
              <CarouselCard
                  heightClass="h-[500px]"
                  mediaType="tv"
                  :slides="trendingStore.trendings">
              </CarouselCard>
            </Tab>
          </Tabs>
        </template>
      </SectionHeading>
    </SectionCover>

    <Modal background_black color_white :showModal="openTrailerModal">
      <template #header>
        <div class="px-4 flex justify-between items-center w-full">
          <h3 class="text-ellipsis">{{movieStore.movieTrailer.name || tvsShows.tvSeriesTrailer.name }}</h3>
          <button @click="closeModalHandler" role="button" class="text-3xl text-[]" type="button">&times;</button>
        </div>
      </template>
      <template #body>
        <div class="w-full h-[632px] block overflow-hidden">
          <iframe class="w-full h-full" type="text/html" autoplay :src="`https://www.youtube.com/embed/${movieStore.movieTrailer.key || tvsShows.tvSeriesTrailer.key }?autoplay=1&autohide=1`"></iframe>
        </div>
      </template>
    </Modal>

  </MainComponent>
</template>

<script setup>
// region Main import

import {ref} from "vue";

// endregion

// region Components imports

import SectionCover from "@/components/SectionCover/SectionCover.vue";
import MainSearch from "@/components/MainSearch.vue";
import SectionHeading from "@/components/SectionHeading.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Tab from '@/components/Tabs/Tab/Tab.vue';
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";
import Modal from '@/components/Modal/Modal.vue';


// endregion

// region Store imports

import {moviesStore} from "@/stores/movie";
import {tvStore} from "@/stores/tv";
import {trendingsStore} from "@/stores/trending";
import MainComponent from "@/components/MainComponent/MainComponent.vue";

// endregion

// region Store variable

const movieStore = moviesStore();
const tvsShows = tvStore();
const trendingStore= trendingsStore();

//endregion

// region variabile component

const videoSectionHeadingStyle = {
  text_color: 'text-white',
  border_tabs_nav: 'border-lightTabs',
  bg_tab_item:"bg-lightTabs",
  tab_title_style:"tab__title-dark"
}

const popularTabsTitles = ref([]);
const trailerTabsTitles = ref([]);
const trendingTabsTitles = ref([]);
const coverImage = ref("");
const openTrailerModal = ref(false);

// endregion

// region Methods

const setBgCoverImage= (image) => {
  coverImage.value = image;
}

const getPopularTabsTitle = (evt) => {
  popularTabsTitles.value = evt;
}

const getTrailerTabsTitle = (evt) => {
  trailerTabsTitles.value = evt;
}

const getTrendingTabsTitle = (evt) => {
  trendingTabsTitles.value = evt;
}

const tabsChangeHandler = (evt) => {
  switch (evt.type) {
    case 'tv':
      tvsShows.getPopularTvShow();
      break;
    case 'movie':
      movieStore.getPopularMovie();
      break;
  }
}

const setTrailersToShows = (evt) => {
  switch (evt.type) {
    case 'tv':
      tvsShows.getTvOnTheAir();
      break;
    case 'movie':
      movieStore.getMovieOnTheatres();
      break;
  }
}

const setTrendings = (evt) => {
  trendingStore.getTrendings(evt.type);
}

const openModalHandler = (evt) => {
  openTrailerModal.value = evt;
}

const closeModalHandler = () => {
  openTrailerModal.value = false;
  movieStore.movieTrailer = {};
  tvsShows.tvSeriesTrailer = {};
}

// endregion

</script>
