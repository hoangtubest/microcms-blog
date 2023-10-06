<template>

  <ul class="list-category mt-16 flex justify-center gap-4">
    <li v-for="category in dataCategories?.contents" :key="category.id">
      <NuxtLink
        :to="`/column/category/${category.id}`"
        class="inline-block rounded border-2 border-indigo-600 px-2 py-0.5 text-l uppercase font-semibold text-indigo-600 hover:text-white hover:bg-indigo-600 sm:transition"
      >{{ category?.name }}</NuxtLink>
    </li>
  </ul>

  <ul class="mt-16 grid grid-cols-1 gap-8">
    <li v-for="blog in filteredBlogs" :key="blog.id">
      <NuxtLink
        :to="`/column/${blog.id}`"
        class="flex flex-col gap-4 sm:transition sm:hover:shadow md:flex-row md:items-center lg:gap-6 sm:hover:bg-gray-50"
      >
        <img
          :src="blog.eyecatch?.url"
          :width="blog.eyecatch?.width"
          :height="blog.eyecatch?.height"
          class="md:w-1/3 md:flex-none"
          alt=""
        />
        <div class="md:p-2.5 md:pr-0">
          <div
            class="inline-block rounded border-2 border-indigo-600 px-1.5 py-0.5 text-sm font-semibold text-indigo-600"
          >
            {{ blog.category?.name }}
          </div>
          <div class="mt-2 text-lg font-semibold md:text-xl">
            {{ blog.title }}
          </div>
          <div class="mt-1 text-sm text-gray-700">
            {{ dateFormat(blog.publishedAt ?? blog.createdAt) }}
          </div>
        </div>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { ref, computed, PropType } from 'vue';
  import { Blog } from "~/types/blog";
  import { Category } from "~/types/category";

  const props = defineProps({
    categoryId: {
      type: String,
      default: '',
    },
  });

  const { data: dataBlog } = await useMicroCMSGetList<Blog>({
    endpoint: "blogs",
  });

  // console.log(dataBlog);


  const { data: dataCategories } = await useMicroCMSGetList<Category>({
    endpoint: "categories",
  });

  // console.log(dataCategories);

  const filteredBlogs = computed(() => {
    if (props.categoryId) {
      return dataBlog?.contents.filter((blog: Blog) => blog?.category.id === props.categoryId);
    } else {
      return dataBlog?.contents;
    }
  });

  console.log(filteredBlogs);
</script>