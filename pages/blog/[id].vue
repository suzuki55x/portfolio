<script setup>
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
</script>

<template>
  <div>
    <h1>{{ article.title }}</h1>
    <p>
      <time datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div v-html="article.content" />
  </div>
</template>