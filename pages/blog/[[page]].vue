<script setup>
const config = useRuntimeConfig();

const limit = 10;// ページあたりの表示件数
const page = useRoute().params.page ? +useRoute().params.page : 1;// 現在のページ

const { data } = await useFetch("/blogs", {
  baseURL: `https://${config.public.apiDomain}.microcms.io/api/v1`,
  params: {
    limit: limit,
    offset: (page - 1) * limit,
    orders: "-publishedAt",
  },
  headers: {
    // dev環境ではprivateの値が取れないため、publicの値を使用する（dev環境のみpublicに設定されている)
    "X-MICROCMS-API-KEY": config.apiKey ?? config.public.apiKey
  },
});

const paginate = (page) => {
  navigateTo(`/blog/${page}`);
};

</script>

<template>
  <div class="container mx-auto py-16">
    <div class=" text-center">
      <BlogPaginater :total="data.totalCount" :limit="limit" :page="page" @update:page="paginate($event)" />
    </div>
    <div class="flex justify-between flex-auto flex-col sm:flex-row flex-wrap">
      <template v-for="article in data.contents" :key="article.id">
        <nuxtLink :to="`/blog/article/${article.id}`"
          class="image-full card glass min-h-16 my-4 mx-auto sm:m-4  w-4/5 sm:w-5/12  aspect-video">
          <figure class=""><img :src="article.eyecatch ? article.eyecatch.url : undefined" alt="eyecatch">
          </figure>
          <div class="h-full flex flex-col justify-between card-body p-4 ">
            <h2 class="card-title">{{ article.title }}</h2>
            <div>
              <div class="text-xs badge badge-neutral">{{ article.category.name ?? "カテゴリなし" }}</div>
              <div class=" text-sm text-end">{{ formatISO8601(article.publishedAt) }}</div>
            </div>
          </div>
        </nuxtLink>
      </template>
    </div>
    <div class=" text-center">
      <BlogPaginater :total="data.totalCount" :limit="limit" :page="page" @update:page="paginate($event)" />
    </div>
  </div>
</template>