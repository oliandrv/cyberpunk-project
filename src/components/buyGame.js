export function Game() {
  return `
<section class="bg-black">

  <div class="flex flex-col lg:flex-row">
    
    <div class="w-full h-50 md:h-62.5 lg:w-83 lg:h-auto overflow-hidden xl:w-[45%]">
      <img
        src="./src/image/game/bg-full.jpg" alt="Cyberpunk editions" class="w-full h-full object-cover"
      />
    </div>
    <div class="px-3 pt-10 pb-17.5 lg:pt-17.5 lg:px-8 flex flex-col justify-center">
      <h2 class="text-white text-[30px] lg:text-[62px] leading-tight mb-6.25 max-w-156.25">
        Купить игру Cyberpunk 2077
      </h2>

      <div class="mb-10 lg:mb-17.5">
        <h3 class="text-blue text-[20px] font-bold mb-5 lg:mb-3.75 lg:text-[24px]">
          В комплект входит:
        </h3>

        <ul class="flex flex-col gap-3.75 text-white text-base sm:text-lg">
          <li class="flex items-start gap-4.5 lg:gap-2.5 lg:items-center">
              <img src="./src/image/game/img1.svg" alt="icon" class="w-5 h-5 lg:w-8 lg:h-8 object-cover mt-1.25 lg:mt-0"/>
            <p class="font-roboto text-[16px] lg:text-[18px]">Футляр с игровыми дисками</p>
          </li>

          <li class="flex items-start gap-4.5 lg:gap-2.5 lg:items-center">
            <img src="./src/image/game/img2.svg" alt="icon" class="w-5 h-5 lg:w-8 lg:h-8 object-cover mt-1.25 lg:mt-0"/>

            <p class="font-roboto text-[16px] lg:text-[18px]">Футляр с кодом для загрузки игры и дисками (PC)</p>
          </li>

          <li class="flex items-start gap-4.5 lg:gap-2.5 lg:items-center">
            <img src="./src/image/game/img3.svg" alt="icon" class="w-5 h-5 lg:w-8 lg:h-8 object-cover mt-1.25 lg:mt-0"/>

            <p class="font-roboto text-[16px] lg:text-[18px]">Справочник с информацией об игровом мире</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-blue text-[20px] font-bold mb-5 lg:mb-3.75 lg:text-[24px]">
          Выберите платформу:
        </h3>

        <div class="flex flex-col gap-10 lg:gap-11.25">
        <div class="flex gap-14 lg:gap-20">
          <img src="./src/image/game/pc.svg" alt="PC" class="w-auto object-contain" />
          <img src="./src/image/game/xboxone.svg" alt="Xbox" class="w-auto object-contain" />
        </div>
        <div class="flex gap-14 lg:gap-20">
          <img src="./src/image/game/stadia.svg" alt="Stadia" class="w-auto object-contain" />
          <img src="./src/image/game/playstation.svg" alt="PS4" class="w-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
}
