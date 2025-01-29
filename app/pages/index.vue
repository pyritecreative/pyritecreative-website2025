<script setup lang="ts">
import Footer from "~/components/Footer.vue";

const { data: home } = await useAsyncData(() =>
  queryCollection("content").path("/").first()
);

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <div class="embed-viewport">
    <div class="embed-container">
      <iframe
        src="https://player.vimeo.com/video/879884289?background=1&autoplay=1&loop=1&byline=0&title=0"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0">
      <div
        class="relative z-10 flex flex-col items-center justify-center h-full text-center p-8"
      >
        <h1 class="text-5xl font-bold text-white">
          Crafting Spectacular Designs
        </h1>
        <p class="mt-4 text-lg text-gray-200">
          Welcome to Pyrite Creative, where artistry meets innovation. Our
          multi-disciplinary team is dedicated to bringing your vision to life
          through exceptional set design, captivating scenery, and custom props.
          From concept to creation, we specialise in delivering premium services
          that exceed your expectations.
        </p>
        <button
          class="mt-4 bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>

  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>

  <Footer></Footer>
</template>
<style>
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
</style>
<style scoped>
/*
https://stackoverflow.com/questions/42858199/vimeo-full-width
*/
.embed-viewport {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-height: 80vh;
  border-width: 2px 0;
  border-color: #c8951a;
}

.embed-container {
  --video--width: 1920;
  --video--height: 1080;

  position: relative;
  padding-bottom: calc(var(--video--height) / var(--video--width) * 100%);
  overflow: hidden;
  max-width: 100%;
  background: black;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
