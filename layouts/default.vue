<template>
  <div>
    <div class="navbar  animate-gradient-x bg-gradient-to-r from-slate-500 via-slate-400 to-white z-50 sticky top-0">
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
      <Particle />
      <slot />

    </main>
    <Footer />
  </div>
</template>