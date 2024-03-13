<template>
  <div class="container p-8 mx-auto">
    <h1 class="text-3xl font-bold">Projects</h1>
    <h2 class="text-2xl font-bold">Hobby</h2>
    <div class="flex flex-wrap">
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Vision Deck Editor</h3>
            <a href="https://github.com/suzuki55x/vision-deck-proto" class="btn btn-sm btn-circle btn-ghost">
              <img alt="github" class="w-8"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
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
                <img alt="Electron"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vue.js">
                <img alt="Vue.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Vuetify">
                <img alt="Vuetify"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg" />
              </div>
            </div>
          </div>
        </div>
        <figure><label for="modal_pj1" class="cursor-pointer"><img src="@/assets/images/pj1.png" alt=""></label>
        </figure>
      </div>
      <div class="card shadow-xl m-2 w-96 glass">
        <div class="card-body">
          <div class="flex justify-between">
            <h3 class="card-title">Portfolio</h3>
            <a href="https://github.com/suzuki55x/portfolio" class="btn btn-sm btn-circle btn-ghost">
              <img alt="github" class="w-8"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </a>
          </div>
          <p class="text-sm">
            このポートフォリオ。
            <br>
            自分のスキルの棚卸もかねて作成した。
            <br>
            Nuxt.js + Tailwind CSS + Cloudflare Pagesで作成。
            <br>
            ブログページも作成予定で、そちらはMicroCMSを使用する予定。(現時点で未作成)
          </p>
          <div>
            <h4 class="card-subtitle">使用技術</h4>
            <div class="flex flex-wrap">
              <div class="w-8 tooltip" data-tip="Nuxt.js">
                <img alt="Nuxt.js"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="TailwindCSS">
                <img alt="TailwindCSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Cloudflare Pages">
                <img alt="Cloudflare Pages" src="@/assets/images/cloudflare.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="MicroCMS">
                <img alt="MicroCMS" src="@/assets/images/microcms.svg" />
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
            <a href="https://github.com/suzuki55x/visionxDeckMobile" class="btn btn-sm btn-circle btn-ghost"
              v-if="false">
              <img alt="github" class="w-8 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
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
              <div class="w-8 tooltip" data-tip="Swift">
                <img alt="Swift" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
              </div>
              <div class="w-8 tooltip" data-tip="Swift UI">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0,0,256,256">
                  <g transform="translate(-42.24,-42.24) scale(1.33,1.33)">
                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                      stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                      font-family="none" font-weight="none" font-size="none" text-anchor="none"
                      style="mix-blend-mode: normal">
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M34.249,42h-20.498c-4.281,0 -7.751,-3.47 -7.751,-7.751v-20.498c0,-4.281 3.47,-7.751 7.751,-7.751h20.497c4.282,0 7.752,3.47 7.752,7.751v20.497c0,4.282 -3.47,7.752 -7.751,7.752z"
                          fill="#0d47a1"></path>
                        <path
                          d="M42,13.751c0,-4.281 -3.47,-7.751 -7.751,-7.751h-20.498c-4.281,0 -7.751,3.47 -7.751,7.751v9.028c3,3.221 8.502,7.14 13.646,7.106c6.848,-0.045 17.008,-2.719 22.354,-8.478z"
                          fill="#1565c0"></path>
                        <path
                          d="M42,13.751c0,-4.281 -3.47,-7.751 -7.751,-7.751h-20.498c-4.281,0 -7.751,3.47 -7.751,7.751v8.75c3,3.499 7.219,4.858 13.694,4.905c10.449,0.076 18.634,-4.829 22.306,-9.414z"
                          fill="#1e88e5"></path>
                        <path
                          d="M42,13.751c0,-4.281 -3.47,-7.751 -7.751,-7.751h-20.498c-4.281,0 -7.751,3.47 -7.751,7.751v8.18c4.408,2.669 9.077,3.262 12.674,3.336c10.487,0.06 19.937,-5.236 23.326,-11.398z"
                          fill="#29b6f6"></path>
                        <path
                          d="M34.249,6h-20.498c-4.281,0 -7.751,3.47 -7.751,7.751v5.98c4.167,2.708 8.472,3.482 12.917,3.446c7.194,0 18.718,-3.832 22.265,-12.878c-1.271,-2.546 -3.894,-4.299 -6.933,-4.299z"
                          fill="#00e5ff"></path>
                        <path
                          d="M34.249,6h-20.498c-4.281,0 -7.751,3.47 -7.751,7.751v3.691c4.748,3.197 10.543,4.603 17.778,2.867c8.943,-2.146 14.011,-6.927 15.83,-12.149c-1.392,-1.335 -3.278,-2.16 -5.359,-2.16z"
                          fill="#18ffff"></path>
                        <path
                          d="M20.535,6h-6.784c-4.281,0 -7.751,3.47 -7.751,7.751v9.534l0.063,0.089c4.25,6 14.75,9.875 21.625,3.563c4,-5 1.688,-13.188 -1.313,-15.875c-1.507,-1.35 -3.865,-3.378 -5.84,-5.062z"
                          fill="#448aff"></path>
                        <path
                          d="M20.973,6h-7.222c-4.281,0 -7.751,3.47 -7.751,7.751v9.718c5.079,3.953 13.005,5.51 18.563,0.406c4,-5 1.688,-13.188 -1.313,-15.875c-0.637,-0.57 -1.429,-1.265 -2.277,-2z"
                          fill="#40c4ff"></path>
                        <path
                          d="M13.751,6c-4.281,0 -7.751,3.47 -7.751,7.751v7.932c4.686,1.975 10.315,1.966 14.563,-1.933c3.224,-4.03 2.345,-10.128 0.312,-13.75z"
                          fill="#00e5ff"></path>
                        <path
                          d="M13.751,6c-4.281,0 -7.751,3.47 -7.751,7.751v4.726c3.476,0.382 7.055,-0.459 9.979,-3.144c2.119,-2.649 2.46,-6.188 1.871,-9.333z"
                          fill="#18ffff"></path>
                        <path
                          d="M12.608,14.87c0,0 6.833,10.327 12.578,13.82c-2.174,0.699 -6.894,3.555 -15.124,-1.492c2.096,2.873 5.807,8.635 14.891,8.092c3.183,-0.155 5.124,-1.165 6.91,-1.863c1.786,-0.698 3.494,-0.621 4.969,2.019c0.311,-2.407 0.388,-4.659 -2.096,-7.221c0,0 2.456,-9.363 -8.001,-16.751c2.174,4.348 3.433,6.8 2.411,12.791c-2.329,-1.553 -10.931,-8.48 -12.872,-10.732c1.398,2.485 5.419,7.936 6.816,9.334c-2.484,-1.708 -10.482,-7.997 -10.482,-7.997z"
                          fill="#212121"></path>
                      </g>
                    </g>
                  </g>
                </svg>
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