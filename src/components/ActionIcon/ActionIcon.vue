<template>
<div class="py-[3px] px-0 mr-5 text-white">
  <a class="group/link hover:opacity-100 inline-flex items-center justify-center text-white box-border bg-darkBlue rounded-full w-[46px] h-[46px]" href="#">
    <SvgIcon
        :width="props.iconConfiguration.width"
        :height="props.iconConfiguration.height"
        :bgColor="props.iconConfiguration.bgColor"
        :path="props.iconConfiguration.path"
    />
    <Tooltip :tooltip-text="props.tooltipText" v-if="props.useTooltip" />
  </a>
</div>
</template>

<script setup>
import SvgIcon from '../Icons/SvgIcon/SvgIcon.vue'
import {defineProps} from'vue'
import Tooltip from "@/components/Tooltip/Tooltip.vue";
const props = defineProps({
  iconConfiguration: Object,
  tooltipText:String,
  useTooltip:Boolean
})
</script>

<style scoped>

</style>