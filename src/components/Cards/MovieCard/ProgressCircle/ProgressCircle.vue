<template>
  <!--    Percentuale -->
  <div class="scale-100	">
    <div :class="`w-[${props.width}px] h-[${props.height}px]`" class="bg-[#081c22] flex justify-center items-center rounded-full">
      <svg :width="`${props.svgWidth}px`" :height="`${props.svgHeight}px`" viewBox="0 0 100 100" class="rotate-[-90deg]">
        <circle
            r="50"
            cx="52.5"
            cy="52.5"
            fill="transparent"
            :stroke="track[getColor(props.progress)]"
            :stroke-width="6"
            :stroke-dashoffset="dashArrayOffset"
            class="scale-[0.95]"
        />
        <circle
            r="50"
            cx="52.5"
            cy="52.5"
            fill="transparent"
            :stroke="barsColorMap[getColor(props.progress)]"
            :stroke-width="6"
            :stroke-dasharray="dashArray"
            :stroke-dashoffset="dashArrayOffset"
            class="scale-[0.95]"
            stroke-linecap="round"
        />
      </svg>
      <div class="font-semibold absolute text-white">
        {{props.progress ? props.progress : 'NR' }}
        <span v-if="props.progress" class="absolute text-[5px]">%</span>
      </div>
    </div>
  </div>
  <!--    End Percentuale -->
</template>

<script setup>

import { defineProps } from 'vue'

const props= defineProps({
  progress:Number,
  width:{
    type:Number,
    required:true
  },
  height:{
    type:Number,
    required:true
  },
  svgWidth:{
    type:Number,
    required:true
  },
  svgHeight:{
    type:Number,
    required:true
  },
})

const dashArray = Math.PI * 100;
const dashArrayOffset = Math.PI * (100 - (props.progress*10));

const barsColorMap = {
  low:'#db2360',
  middle:'#d2d531',
  high:'#21d07a',
  none:'#d4d4d4'
}

const track = {
  low:'#571435',
  middle:'#423d0f',
  high:'#204529',
  none:'#666666'
}

const getColor = (rating) => {
  if (rating >= 7) return 'high';
  if (rating >= 4) return 'middle';
  if (rating >= 0) return 'low';
  return 'none'
}

</script>

<style scoped>

</style>