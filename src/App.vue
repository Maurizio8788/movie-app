<template>
  <Navbar />
  <main class="container mx-auto bg-white">
    <router-view/>
  </main>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/Layouts/Navbar/Navbar.vue";
import Footer from "@/components/Layouts/Footer/Footer.vue";
</script>

<style>
@import "@/assets/main.css";
</style>
