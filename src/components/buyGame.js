export function Game() {
  return `
<section class="bg-black">
  <div class="flex flex-col">
    
    <div class=" lg:order-none">
      <img
        src="./src/image/game/bg-full.jpg" alt="Cyberpunk editions" class="w-full max-h-50 object-cover"
      />
    </div>

    <div class=" px-3 pt-10 pb-17.5 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-center">
      <h2 class="text-white text-[30px] lg:text-[62px] leading-tight mb-6.25">
        Купить игру <br />
        Cyberpunk 2077
      </h2>

      <div class="mb-10">
        <h3 class="text-cyan-400 text-xl font-bold mb-5">
          В комплект входит:
        </h3>

        <ul class="space-y-4 text-white text-base sm:text-lg">
          <li class="flex items-center gap-3">
            <span class="w-5 h-5 rounded-full border-2 border-yellow-400 flex items-center justify-center">
              <span class="w-2 h-2 rounded-full bg-yellow-400"></span>
            </span>
            Футляр с игровыми дисками
          </li>

          <li class="flex items-center gap-3">
            <span class="w-5 h-5 border-2 border-yellow-400"></span>
            Футляр с кодом для загрузки игры и дисками (PC)
          </li>

          <li class="flex items-center gap-3">
            <span class="w-5 h-5 border-2 border-yellow-400"></span>
            Справочник с информацией об игровом мире
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-cyan-400 text-xl font-bold mb-6">
          Выберите платформу:
        </h3>

        <div class="grid grid-cols-2 gap-6 items-center">
          <img src="/icons/pc.svg" alt="PC" class="h-10 object-contain" />
          <img src="/icons/xbox.svg" alt="Xbox" class="h-10 object-contain" />
          <img src="/icons/stadia.svg" alt="Stadia" class="h-10 object-contain" />
          <img src="/icons/ps4.svg" alt="PS4" class="h-10 object-contain" />
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
