<template>
  <p :class="colorClass" class="text-base p-0 m-0 text-[rgba(0,0,0,0.6)]">{{ formatDate }}</p>
</template>

<script setup>
import {defineProps, onMounted, ref} from 'vue'
import {format} from "date-fns";
import {it} from "date-fns/locale";
const props = defineProps({
  first_air_date:String,
  release_date:String,
  colorClass:String
});

const formatDate = ref(null);

    onMounted(
    () => {
      formatDate.value = props.release_date ?
            format( new Date(props.release_date), 'dd MMM yyyy', {locale: it} ) :
            format( new Date(props.first_air_date), 'dd MMM yyyy', {locale: it} );
    }
)

</script>

<style scoped>

</style>