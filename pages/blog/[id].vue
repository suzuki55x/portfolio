<script setup>
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.min.css';
const config = useRuntimeConfig();
const route = useRoute();
const article_id = route.params.id;

const { data: article } = await useFetch(`/blogs/${article_id}`, {
  baseURL: `https://${config.public.apiDomain}.microcms.io/api/v1`,
  headers: {
    // dev環境ではprivateの値が取れないため、publicの値を使用する（dev環境のみpublicに設定されている)
    "X-MICROCMS-API-KEY": config.apiKey ?? config.public.apiKey
  },
});


onMounted(() => {
  console.log(article.content)
  Prism.highlightAll();
});
</script>

<template>
  <div class="">
    <h1 class="">{{ article.title }}</h1>
    <p>
      <time class=" text-sm" datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div v-html="article.content" class="prose prose-lg " />
  </div>
</template>

<style scoped>
.prose:deep(code) {}
</style>