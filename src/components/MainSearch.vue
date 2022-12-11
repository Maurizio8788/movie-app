<template>
  <section class="main-search bg-banner bg-cover bg-center h-80 text-white">
      <div class="pt-12 pl-8 pr-8 my-0 mx-auto">
         <h1 class="mb-2 text-5xl font-bold">Benvenuto</h1>
         <h2 class="mb-12 text-3xl font-semibold">Milioni di film, serie TV e persone da scoprire. Esplora ora.</h2>
        <div class="main-search__actions flex relative mt-13">
          <input class="rounded-4xl px-5 py-2.5 w-full h-12 border-0" type="text" placeholder="Cerca un film, serie tv, personaggio..." required style="box-shadow: none">
          <button class="rounded-5xl right-0 py-2.5 px-7 bg-buttonGradient font-normal inline-flex justify-center items-center h-12 absolute font-bold border-0" type="submit">Get Started</button>
        </div>
      </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
/* Form text input */

.main-search__actions input {
  line-height: 46px;
  font: bold 13px 'lucida sans', 'trebuchet MS', 'Tahoma';
}

/* Form submit button */
.main-search__actions button {
  font: 13px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
  text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
}

</style>