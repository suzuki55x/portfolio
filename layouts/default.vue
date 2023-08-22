<template>
  <div>
    <div>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/blog">
        Blog
      </NuxtLink>
    </div>

    <!-- pagesの呼び出し -->
    <slot />
  </div>
</template>