<template>
  <aside class="mt-7 w-2/6 h-auto">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center">
        <a class="group/link" :href="`https://facebook.com/${props.facebookId}`" target="_blank">
          <Svg
            :width="facebookIconComponent.width"
            :height="facebookIconComponent.height"
          >
            <Path
              :bgColor="facebookIconComponent.bgColor"
              :path="facebookIconComponent.path"
            />
          </Svg>
          <Tooltip tooltip-text="Visit Facebook" />
        </a>
        <a
          class="ml-3"
          :href="`https://twitter.com/${props.twitterId}`"
          target="_blank"
        >
          <Svg
            :width="twitterIconComponent.width"
            :height="twitterIconComponent.height"
          >
            <Path
              :bgColor="twitterIconComponent.bgColor"
              :path="twitterIconComponent.path"
            />
          </Svg>
        </a>
        <a
          class="ml-3"
          :href="`https://instagram.com/${props.instagramId}`"
          target="_blank"
        >
          <Svg
            :width="instagramIconComponent.width"
            :height="instagramIconComponent.height"
          >
            <Path
              :bgColor="instagramIconComponent.bgColor"
              :path="instagramIconComponent.path"
            />
          </Svg>
        </a>
      </div>
      <a class="ml-4" :href="props.homePage" target="_blank">
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
    <strong>
      <p class="mt-5">Status</p>
    </strong>
    <p>{{ props.status }}</p>
    <strong>
      <p class="mt-5">Original Language</p>
    </strong>
    <p>{{ props.englishProperty }}</p>
    <strong>
      <p class="mt-5">Budget</p>
    </strong>
    <p>{{ moneyFormatter.format(props.budget) }}</p>
    <strong>
      <p class="mt-5">Revenue</p>
    </strong>
    <p>{{ moneyFormatter.format(props.revenue) }}</p>
  </aside>
</template>

<script setup>
import Svg from "@/components/Icons/Svg/Svg.vue";
import Path from "@/components/Icons/Path/Path.vue";

import { defineProps } from "vue";
import {
  facebookIconComponent,
  instagramIconComponent,
  linkIconComponent,
  twitterIconComponent,
} from "@/components/Icons/icons";
import { moneyFormatter } from "@/composable/math";
import Tooltip from "@/components/Tooltip/Tooltip.vue";

const props = defineProps({
  facebookId: String,
  instagramId: String,
  twitterId: String,
  homePage: String,
  status: String,
  englishProperty: String,
  revenue: Number,
  budget: Number,
});
</script>

<style scoped></style>
