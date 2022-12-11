<template>
<div>
  <SectionCover hasCover :bg-image="`${movieUrl}/t/p/w1920_and_h800_multi_faces/xEUz44bmr8EOPFQrVZ5ebxgN8Eq.jpg`">
    <div class="container mx-auto w-full py-[30px] px-[40px] w-full box-border">
      <!--  Container  -->
      <div class="flex flex-nowrap text-white">
<!--        Image wrapper-->
        <div class="border-0 min-w-[300px] w-[300px] h-auto overflow-hidden rounded-lg">
<!--          Image-->
          <div class="rounded-t-lg block min-w-[300px] w-[300px] h-[450px] relative top-0 left-0">
            <div class="rounded-t-lg w-full min-w-full h-full">
              <img class="w-full h-full min-w-full min-h-full h-full block outline-0 border-0" :src="`${movieUrl}/t/p/w300_and_h450_bestv2/iW6ixzkrvdrcxk0umiLZMtlSl9L.jpg`" alt="title">
            </div>
<!--          zoom-->
          <div class="flex items-center justify-center backdrop-blur-[20px] w-full h-full absolute top-0 left-0 text-center rounded-lg bg-[rgba(0,0,0,0.7)] transition-all ease-in-out opacity-0 hover:opacity-100 hover:visible">
            <Svg class="mr-2" :width="enlargeIconComponent.width" :height="enlargeIconComponent.height">
              <Path v-for="(path, index) in enlargeIconComponent.paths" :key="index" :path="path" :bgColor="enlargeIconComponent.bgColor" />
            </Svg>
            <p>
              Expand
            </p>
          </div>
<!--          zoom end-->
          </div>
<!--          image end-->
<!--        provider-->
        <div class="relative top-0 left-0 w-full bg-darkBlue flex justify-center items-center box-border">
          <div class="w-full flex items-stretch flex-wrap h-[60px] max-h-[60px]">

            <div class="w-full justify-center flex">

              <div class="flex items-center pr-[8px]">
                <img class="w-9 h-9 mr-1 rounded" :src="`${movieUrl}/t/p/original/7rwgEs15tFwyR9NPQ5vpzxTj19Q.jpg`" alt="logo-provider">
              </div>
              <div class="flex flex-wrap items-center content-center text-white">
                <span>
                  <h4 class="leading-4 block opacity-80 font-normal m-0">Now Streaming</h4>
                  <h3 class="block text-base m-0 text-white font-extrabold">
                    <a href="#" class="text-white font-semibold">Watch Now</a>
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
          <section class="flex flex-wrap items-start content-center items-start box-border pl-10 text-white">
<!--            title-->
            <div class="w-full mb-6 flex flex-wrap text-white">
              <h2 class="text-4xl w-full m-0 p-0">Diary of a Wimpy Kid: Rodrick Rules (2022)</h2>
              <div class="flex">
                <span class="mr-2 pt-[0.06rem] pr-[4px] pb-[0.15rem] pl-[4px] inline-flex items-center rounded-[2px] whitespace-nowrap border border-solid border-[rgba(255,255,255,0.6)] text-[rgba(255,255,255,0.6)]">PG</span>
                <span class="pl-0 relative top-0 left-0">02/12/2022</span>
                <span class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white">
                  <a href="#">Animation</a>
                  <a href="#">Comedy</a>
                  <a href="#">Family</a>
                </span>
                <span class="pl-4 relative top-0 left-0 text-white list-item list-disc list-inside text-white">
                  1h 14m
                </span>
              </div>
            </div>
<!--            title end-->
<!--            actions-->
            <div class="flex items-center justify-start h-[68px] w-full mb-5 text-white">
              <div class="inline-flex items-center justify-center box-border h-[68px]">
                <ProgressCircle :width="65" :height="65" :svgHeight="60" :svgWidth="60" :progress="6.5" />
                <span class="ml-1.5 font-bold whitespace-pre-line">User<br>Score</span>
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
                   <Path :path="playIconComponent.path" :bgColor="playIconComponent.bgColor" />
                  </Svg>
                  Play Trailer
                </h3>
              </div>
            </div>
<!--            actions end-->
            <DetailsOverview />
          </section>
        </div>
      </div>
      <!--  End Container  -->
    </div>
  </SectionCover>
  <div class="container mx-auto">
    <div class="flex items-center">
      <!--      Main content-->
      <div class="w-full">
        <h3 class="mt-7 text-xl font-semibold">Top Billed Cast</h3>
      </div>
      <!--      Main content end-->
      <!--      Sidebar-->
      <aside class="mt-7 w-1/5">
        <Svg class="mr-2" :width="linkIconComponent.width" :height="linkIconComponent.height">
          <Path v-for="(path, index) in linkIconComponent.paths" :key="index" :path="path" :bgColor="linkIconComponent.bgColor" />
        </Svg>
      </aside>
      <!--      Sidebar end-->
    </div>
  </div>
</div>
</template>

<script setup>
import SectionCover from "@/components/SectionCover/SectionCover.vue";
import {inject} from "vue";
import ProgressCircle from "@/components/Cards/MovieCard/ProgressCircle/ProgressCircle.vue";
import ActionIcon from "@/components/ActionIcon/ActionIcon.vue";
import {
  bookMarkIconComponent, enlargeIconComponent,
  hearthIconComponent, linkIconComponent,
  listIconComponent, playIconComponent,
  starIconComponent
} from "@/components/Icons/icons";
import Svg from "@/components/Icons/Svg/Svg.vue";
import Path from "@/components/Icons/Path/Path.vue";
import DetailsOverview from "@/components/DetailsOverview/DetailsOverview.vue";
import CarouselCard from "@/components/CarouselCard/CarouselCard.vue";

const movieUrl = inject('baseImageUrl');


</script>

<style scoped>

</style>