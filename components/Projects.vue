<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-3xl font-bold">Hobby Projects</h1>
    <div>
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Vision Deck Editor</h3>
            <a href="https://github.com/suzuki55x/vision-deck-proto" class="btn btn-sm btn-circle ">
              <img class="w-8" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
          </div>
          <p class="">
            学生時代からハマっていた同人カードゲーム「Phantom Magic Vision」用のデッキエディタ。
            <br>
            自分と友人のために作成した。
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

  </div>
</template>

<style scoped>
.card-subtitle {
  @apply font-bold;
}
</style>