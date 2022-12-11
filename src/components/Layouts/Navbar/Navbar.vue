<template>
  <header class="movie-app-menu">
    <menu>
      <nav role="navigation" class="bg-darkBlue h-16">
        <div class="container mx-auto flex items-center h-16 pl-7" >
          <img class="movie-app-menu__logo logo" src="/img/logo.svg" alt="logo">
          <RouterLink to="/">Home</RouterLink>
        </div>
      </nav>
    </menu>
  </header>

</template>

<script setup>

</script>

<style scoped>

.movie-app-menu a {
  font-weight: 600;
  color: #fff;
}

/*  */

</style>