<template>
  <div>
    <div class="navbar ">
      <div class="navbar-start"></div>
      <div class="navbar-center"></div>
      <div class="navbar-end">
        <NuxtLink to="/" class="btn m-2 btn-ghost">
          Home
        </NuxtLink>
        <NuxtLink to="/blog" class="btn m-2 btn-ghost">
          Blog
        </NuxtLink>

      </div>
    </div>

    <!-- pagesの呼び出し -->
    <slot />
    <Footer />
  </div>
</template>