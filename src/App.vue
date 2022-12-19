<template>
  <Navbar />
    <router-view/>
  <Footer />
</template>

<script setup>
import Navbar from "@/components/Layouts/Navbar/Navbar.vue";
import Footer from "@/components/Layouts/Footer/Footer.vue";
</script>

<style>
@import "@/assets/main.css";
</style>
