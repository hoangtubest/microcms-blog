<template>
  <div>
    <blog-column :categoryId="categoryId" />
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const categoryId = router.params.id;
</script>