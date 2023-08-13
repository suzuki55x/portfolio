<template>
  <div>
    <div>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/fuga">
        Fuga
      </NuxtLink>
    </div>

    <!-- pagesの呼び出し -->
    <slot />
  </div>
</template>