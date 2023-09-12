<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch("/blogs", {
  baseURL: `https://${config.public.apiDomain}.microcms.io/api/v1`,
  headers: {
    // dev環境ではprivateの値が取れないため、publicの値を使用する（dev環境のみpublicに設定されている)
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