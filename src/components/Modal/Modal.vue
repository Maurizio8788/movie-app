<template>
  <TransitionGroup name="fade">
    <!--  Overlay -->
    <div v-if="props.showModal" class="z-[10000] opacity-50 fixed bg-black top-0 left-0 flex items-center justify-center w-screen h-screen">
    </div>
    <!--  End Overlay -->
    <!--  Modal -->
    <dialog v-if="props.showModal" class="modal z-[10001] top-1/2 left-1/2 fixed block min-w-[90px] min-h-[90px] w-[1200px] h-[700px]" :class="{'bg-black':props.background_black, 'text-white':props.color_white}">
      <!--    Modal Title -->
      <slot name="header"></slot>
      <!--    End Modal Title -->
      <!--    Modal Body -->
      <slot name="body"></slot>
      <!--    End Modal Body -->
      <!--    Modal Footer -->
      <slot name="footer"></slot>
      <!--    End Modal Footer -->
    </dialog>
    <!--  End Modal -->
  </TransitionGroup>
</template>

<script setup>
import {defineProps, onMounted} from 'vue'
const props = defineProps({
  showModal: {
    type:Boolean,
    default: () => false
  },
  background_black:Boolean,
  color_white:Boolean
})

onMounted(
    () => {
      console.log(props.showModal);
    }
)

</script>

<style scoped>
.modal {
  transform: translate(-50%,-50%);
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>