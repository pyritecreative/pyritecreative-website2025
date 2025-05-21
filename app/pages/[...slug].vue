<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

definePageMeta({
  layout: false,
});
</script>

<template>
    <NuxtLayout v-if="page" :name="page.layout ?? 'default'">
      <ContentRenderer v-if="page" :value="page" />
    </NuxtLayout>
</template>
