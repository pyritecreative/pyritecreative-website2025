<script setup lang="ts">
import Footer from "~/components/Footer.vue";
</script>

<template>
  <header>
    <NuxtImg
      src="/images/pyrite-creative-logo.png"
      alt="Pyrite Creative Logo"
      width="200"
    />
  </header>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
  <main>
    <NuxtPage />
  </main>
  <Footer></Footer>
</template>

<style>
h1,
h2,
h3 {
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
}
.content {
  padding: 30px 4vw;
}
</style>

<style scoped></style>
