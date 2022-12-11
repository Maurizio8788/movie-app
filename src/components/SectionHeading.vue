<template>
<section class="flex items-center mb-4 pl-8">
  <h3 :class="sectionStyle.text_color" class="mt-8 text-2xl font-semibold">{{props.title}}</h3>
  <div :class="sectionStyle.border_tabs_nav" class="h-[29px] mt-8 ml-4 inline-flex items-stretch justify-center border-solid border rounded-full">
    <div class="relative top-0 left-0 z-[1]" v-for="(tab, index) in _tabs" :key="index" @click="clickTabs(index)" ref="tabsRef">
      <h3 class="cursor-pointer font-bold text-sm inline-flex content-center items-center justify-center py-1 px-5 mb-0 whitespace-nowrap">
       <span :class="sectionStyle.text_color">{{tab.title}}</span>
      </h3>
      <div :class="props.sectionStyle.bg_tab_item" v-if="index === 0" class="absolute top-0 h-full rounded-4xl transition-[left] duration-300"></div>
      <div :class="props.sectionStyle.bg_tab_item" v-else class="absolute top-0 h-full rounded-4xl hidden transition-[left] duration-300"></div>
    </div>
  </div>
</section>
 <slot name="tabs"></slot>
</template>

<script setup>
import {onMounted, provide, ref, watchEffect} from "vue";

const props = defineProps({
  title:{
    type:String,
    required:true
  },
  tabs:Array,
  sectionStyle:{
    type:Object,
    default: () => ({ text_color: 'text-darkBlue', border_tabs_nav: 'border-darkBlue', bg_tab_item:"bg-darkBlue", tab_title_style:"tab__title" })
  }
});

const emits = defineEmits(['change-tabs-evt']);

const tabsRef = ref(null);
const _tabs = ref([]);
const selectedTitle = ref(props.tabs[0]);

watchEffect( () => {
  _tabs.value = props.tabs;
  selectedTitle.value = props.tabs[0];
} );

onMounted(
    () => {
      tabsRef.value[0].lastElementChild.style.width = `${tabsRef.value[0].firstElementChild.offsetWidth}px`;
      tabsRef.value[0].lastElementChild.classList.remove('hidden');
      tabsRef.value[0].firstElementChild.firstElementChild.classList.remove('text-darkBlue');
      tabsRef.value[0].firstElementChild.firstElementChild.classList.add(props.sectionStyle.tab_title_style);
      tabsRef.value[0].firstElementChild.firstElementChild.classList.add('text-transparent');
      emits('change-tabs-evt', props.tabs[0]);
    }
)

const clickTabs = (idx) => {
  tabsRef.value.forEach((tab) => {
    tab.firstElementChild.firstElementChild.classList.remove('text-transparent');
    tab.firstElementChild.firstElementChild.classList.remove('text-darkBlue');
    tab.lastElementChild.style.width = `${tabsRef.value[idx].firstElementChild.offsetWidth}px`;
    if(idx === 0) {
      tab.lastElementChild.style.left = `0`;
    } else {
      tab.lastElementChild.style.left = `${tab.firstElementChild.offsetWidth}px`;
    }
  });
  tabsRef.value[idx].firstElementChild.firstElementChild.classList.remove('text-darkBlue');
  tabsRef.value[idx].firstElementChild.firstElementChild.classList.add(props.sectionStyle.tab_title_style);
  tabsRef.value[idx].firstElementChild.firstElementChild.classList.add('text-transparent');
  selectedTitle.value = props.tabs[idx];
  emits('change-tabs-evt',props.tabs[idx]);
}
provide("selectedTitle", selectedTitle);
</script>
