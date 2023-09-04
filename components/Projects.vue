<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-3xl font-bold">Hobby Projects</h1>
    <div class="flex flex-wrap">
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Vision Deck Editor</h3>
            <a href="https://github.com/suzuki55x/vision-deck-proto" class="btn btn-sm btn-circle btn-ghost">
              <img class="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
          </div>
          <p class="text-sm">
            学生時代からハマっていた同人カードゲーム「Phantom Magic Vision」用のデッキエディタ。
            <br>
            自分と友人のために作成した。
            <br>
            以前別の方が作成したエディタが存在しており、入出力は互換のテキストファイルで行うようにした。
          </p>
          <div>
            <h4 class="card-subtitle">使用技術</h4>
            <div class="flex flex-wrap">
              <div class="w-8 tooltip" data-tip="Electron">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vue.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vuetify">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" />
              </div>
            </div>
          </div>
        </div>
        <figure><label for="modal_pj1" class="cursor-pointer"><img src="@/assets/images/pj1.png" alt=""></label></figure>
      </div>
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Portfolio</h3>
            <a href="https://github.com/suzuki55x/portfolio" class="btn btn-sm btn-circle btn-ghost">
              <img class="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
          </div>
          <p class="text-sm">
            このポートフォリオ。
            <br>
            自分のスキルの棚卸もかねて作成した。
            <br>
            Nuxt.js + Tailwind CSS + GitHub Pagesで作成。
            <br>
            ブログページも作成予定で、そちらはMicroCMSを使用する予定。(現時点で未作成)
          </p>
          <div>
            <h4 class="card-subtitle">使用技術</h4>
            <div class="flex flex-wrap">
              <div class="w-8 tooltip" data-tip="Nuxt.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="TailwindCSS">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="GitHub Pages">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="MicroCMS">
                <img src="@/assets/images/microcms.svg" />
              </div>
            </div>
          </div>
        </div>
        <figure><label for="modal_pj2" class="cursor-pointer"><img src="@/assets/images/pj2.png" alt=""></label>
        </figure>
      </div>
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Vision Deck Editor Mobile</h3>
            <a href="https://github.com/suzuki55x/visionxDeckMobile" class="btn btn-sm btn-circle btn-ghost" v-if="false">
              <img class="w-8 " src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
          </div>
          <p class="text-sm">
            「Phantom Magic Vision」用のデッキエディタ(iOS版)。
            <br>
            SwiftUIの学習も兼ねて、iOS版を作成した。
            <br>
            また、ちょうどiOS17betaがリリースされたタイミングだったため、SwiftDataも使用してみた。
            <br>
            結果的に、かなり悩む結果となったが、SwiftDataの学習にはなった。
          </p>
          <div>
            <h4 class="card-subtitle">使用技術</h4>
            <div class="flex flex-wrap">
              <div class="w-8 tooltip" data-tip="Electron">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vue.js">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vuetify">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" />
              </div>
            </div>
          </div>
        </div>
        <figure><label for="modal_pj3" class="cursor-pointer"><img class=" max-h-64" src="@/assets/images/pj3.png"
              alt=""></label>
        </figure>
      </div>

    </div>
  </div>

  <div>
    <input type="checkbox" id="modal_pj1" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box max-w-4xl">
        <img class="" src="@/assets/images/pj1.png" alt="">
      </div>
      <label class="modal-backdrop" for="modal_pj1">Close</label>
    </div>
    <input type="checkbox" id="modal_pj2" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box max-w-4xl">
        <img class="" src="@/assets/images/pj2.png" alt="">
      </div>
      <label class="modal-backdrop" for="modal_pj2">Close</label>
    </div>
    <input type="checkbox" id="modal_pj3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box max-w-4xl ">
        <img class="mx-auto" src="@/assets/images/pj3.png" alt="">
      </div>
      <label class="modal-backdrop" for="modal_pj3">Close</label>
    </div>

  </div>
</template>

<style scoped>
.card-subtitle {
  @apply font-bold;
}
</style>