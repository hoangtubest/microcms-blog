<template>
  <div>
  <template v-if="data">
    <h1 class="text-3xl font-semibold">
      {{ data.title }}
    </h1>
    <img
      :src="data.eyecatch?.url"
      :width="data.eyecatch?.width"
      :height="data.eyecatch?.height"
      alt=""
      class="mt-6 md:mt-10"
    />
    <div
      class="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4"
    >
      <NuxtLink :to="`/column/category/${data.category?.id}`"
        class="rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600 hover:text-white hover:bg-indigo-600 sm:transition"
      >
        {{ data.category?.name }}
      </NuxtLink>
      <div class="text-sm text-gray-700">
        {{ dateFormat(data.publishedAt ?? data.createdAt) }}
      </div>
    </div>
    <div v-html="data.content" class="prose mt-6 md:mt-10"></div>
  </template>
  <div class="flex justify-center mt-6 md:mt-10">
    <NuxtLink to="./" class="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-8 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">Back Column</NuxtLink>
  </div>
  </div>
</template>

<script setup lang="ts">
import { Blog } from "~/~/types/blog";

const { params } = useRoute();

const { data } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(params.id) ? params.id[0] : params.id,
});
console.log(data)
</script>