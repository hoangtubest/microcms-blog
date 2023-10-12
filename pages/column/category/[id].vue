<template>
  <div>
    <!-- <blog-column :categoryId="categoryId" /> -->
    <blog-column />
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const categoryId = router.params.id;
</script>