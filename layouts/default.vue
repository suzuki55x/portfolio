<template>
  <div>
    <div class="navbar bg-slate-400 text-white z-50 sticky top-0">
      <div class="navbar-start"></div>
      <div class="navbar-center"></div>
      <div class="navbar-end">
        <NuxtLink to="/" class="btn m-2 btn-ghost">
          Home
        </NuxtLink>
        <!--
        <NuxtLink to="/blog" class="btn m-2 btn-ghost">
          Blog
        </NuxtLink>
        -->

      </div>
    </div>

    <!-- pagesの呼び出し -->
    <main class="relative bg-slate-100">
      <slot />

    </main>
    <Footer />
  </div>
</template>