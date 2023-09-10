<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch("/blogs", {
  baseURL: `https://${config.apiDomain ?? config.public.apiDomain}.microcms.io/api/v1`,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey ?? config.public.apiKey
  },
});
</script>

<template>
  <div class="">
    <ol>
      <li v-for="article in data.contents" :key="article.id">
        <nuxtLink :to="`/blog/${article.id}`">{{ article.title }}</nuxtLink>
      </li>
    </ol>
  </div>
</template>